import * as React from "react";
import { ArticleImage } from "@/components/article-image";
import { ChartBlock } from "@/components/chart";
import type { Block } from "@/content";

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.length > 2 && part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {/* 粗体内可能嵌套链接/代码，递归解析 */}
              <Inline text={part.slice(2, -2)} />
            </strong>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, text, href] = link;
          const external = href.startsWith("http");
          return (
            <a
              key={i}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {text}
            </a>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}

function renderBlock(block: Block, i: number) {
  switch (block.t) {
    case "h2":
      return (
        <h2 key={i} id={`sec-${i}`} className="mb-3 mt-8 scroll-m-24 text-xl font-semibold tracking-tight">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mb-2 mt-6 scroll-m-20 text-base font-semibold tracking-tight">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="my-4 leading-8 text-muted-foreground">
          <Inline text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="my-4 ml-5 list-disc space-y-2 leading-7 text-muted-foreground">
          {block.items.map((item, j) => (
            <li key={j}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="my-4 ml-5 list-decimal space-y-2 leading-7 text-muted-foreground">
          {block.items.map((item, j) => (
            <li key={j}>
              <Inline text={item} />
            </li>
          ))}
        </ol>
      );
    case "code":
      return (
        <pre key={i} className="my-4 overflow-x-auto rounded-lg border border-border bg-muted p-4">
          <code className="font-mono text-sm leading-6">{block.text}</code>
        </pre>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-5 border-l-2 border-border pl-4 italic text-muted-foreground">
          <Inline text={block.text} />
        </blockquote>
      );
    case "table":
      return (
        <div key={i} className="my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {block.head.map((h, j) => (
                  <th key={j} className="px-3 py-2 text-left font-semibold text-foreground">
                    <Inline text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} className="border-b border-border/50 last:border-0">
                  {row.map((cell, k) => (
                    <td key={k} className="px-3 py-2 text-muted-foreground">
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function PostBody({ blocks, lang = "en" }: { blocks: Block[]; lang?: "en" | "zh" }) {
  return (
    <div>
      {blocks.map((block, i) => {
        if (block.t === "summary") {
          return (
            <div key={i} className="my-6 rounded-lg border border-border bg-muted/40 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {lang === "zh" ? "本文要点" : "Key points"}
              </p>
              <ul className="ml-5 mt-2 list-disc space-y-1.5 text-sm leading-6 text-foreground/90">
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (block.t === "chart") {
          return <ChartBlock key={i} chart={block.chart} />;
        }
        if (block.t === "img") {
          const alt = lang === "zh" && block.altZh ? block.altZh : block.alt;
          const caption =
            lang === "zh" ? (block.captionZh ?? block.caption) : block.caption;
          return (
            <figure key={i} className="my-10">
              <ArticleImage src={block.src} alt={alt} accent={block.accent} />
              {caption && (
                <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                  {caption}
                </figcaption>
              )}
            </figure>
          );
        }
        return renderBlock(block, i);
      })}
    </div>
  );
}
