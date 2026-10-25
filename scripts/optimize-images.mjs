/**
 * 文章插图管线：
 * 1. 从 pics.ggaag.com 拉取 images.ts 用到的吉卜力原图
 * 2. 压成 1024px 宽（768 栏宽的 1.33x）：AVIF 自动搜质量到 <=50KB（下限 q40）+ webp q72 兜底
 * 3. sharp 提取主色调（accent），供文章页 Apple Music 式氛围背景
 * 4. 输出到 public/images/{key}.avif 和 .webp（随站点同源部署）
 *
 * 用法：node scripts/optimize-images.mjs
 * R2 上传为可选（CLOUDFLARE_R2_* 环境变量 + CLOUDFLARE_R2_BUCKET）。
 */
import sharp from "sharp";
import { readFileSync } from "node:fs";

const KEYS = [
  "ponyo010",
  "howl021",
  "totoro032",
  "majo030",
  "totoro040",
  "chihiro025",
  "kazetachinu015",
  "mononoke012",
  "chihiro045",
  "mononoke045",
  "kimitachi005",
  "howl050",
  "laputa030",
  "kimitachi010",
];

const ORIGIN = "https://pics.ggaag.com";
const TARGET_AVIF_BYTES = 50 * 1024;
const WIDTH = 1024;

function loadEnv() {
  const env = { ...process.env };
  try {
    const local = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
    for (const line of local.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.+)\s*$/);
      if (m && !env[m[1]]) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {}
  return env;
}

function accentHex(stats) {
  const { r = 110, g = 110, b = 110 } = stats.dominant ?? {};
  const to2 = (n) => n.toString(16).padStart(2, "0");
  return `#${to2(r)}${to2(g)}${to2(b)}`;
}

async function main() {
  const { writeFileSync, mkdirSync } = await import("node:fs");
  mkdirSync(new URL("../public/images/", import.meta.url), { recursive: true });
  const env = loadEnv();
  const out = {};

  for (const key of KEYS) {
    const res = await fetch(`${ORIGIN}/g/${key}.jpg`);
    if (!res.ok) {
      console.error(`${key}: 拉取失败 HTTP ${res.status}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const meta = await sharp(buf).metadata();

    const base = sharp(buf)
      .rotate()
      .resize({ width: Math.min(meta.width ?? WIDTH, WIDTH), withoutEnlargement: true });

    // AVIF：从 q55 起自动降质直到 50KB 以内（q40 为下限，超过也接受）
    let q = 55;
    let avif = await base.clone().avif({ quality: q, effort: 6 }).toBuffer();
    while (avif.length > TARGET_AVIF_BYTES && q > 40) {
      q -= 5;
      avif = await base.clone().avif({ quality: q, effort: 6 }).toBuffer();
    }
    const webp = await base.clone().webp({ quality: 72, effort: 6 }).toBuffer();

    const accent = accentHex(await sharp(avif).stats());
    const avifMeta = await sharp(avif).metadata();

    writeFileSync(new URL(`../public/images/${key}.avif`, import.meta.url), avif);
    writeFileSync(new URL(`../public/images/${key}.webp`, import.meta.url), webp);

    out[key] = {
      accent,
      width: avifMeta.width,
      height: avifMeta.height,
      origKB: Math.round(buf.length / 1024),
      avifKB: Math.round(avif.length / 1024),
      webpKB: Math.round(webp.length / 1024),
    };
    console.log(
      `${key}: ${out[key].origKB}KB -> avif ${out[key].avifKB}KB (q${q}) + webp ${out[key].webpKB}KB  ${accent}`
    );
  }

  console.log("\n汇总:", JSON.stringify(out, null, 2));
}

main();
