import type { Block } from "@/content";

export type ChartDef =
  | {
      type: "bar";
      title: string;
      labels: string[];
      values: number[];
      unit?: string;
      highlight?: number;
    }
  | {
      type: "hbar";
      title: string;
      labels: string[];
      values: number[];
      unit?: string;
      highlight?: number;
    };

/**
 * SSR SVG 图表：服务端直出，无 JS，Google 可读 SVG 内文本。
 * 颜色用 CSS 变量，自动跟随明暗模式。
 */
export function ChartSVG({ chart }: { chart: ChartDef }) {
  const W = 640;
  const H = chart.type === "bar" ? 300 : 48 * chart.labels.length + 56;
  const PAD = { l: 16, r: 16, t: 40, b: 30 };

  const max = Math.max(...chart.values.map(Math.abs)) || 1;
  const accent = "var(--foreground)";
  const dim = "var(--muted-foreground)";
  const hi = "#3b82f6";

  if (chart.type === "hbar") {
    const rowH = 46;
    const H = rowH * chart.labels.length + 44;
    const labelW = 170;          // 左侧标签列
    const valueW = 76;           // 右侧数值预留
    const barX = labelW + 12;
    const barMaxW = W - barX - valueW;
    const fmt = (v: number) => v.toLocaleString("en-US");
    const unitStr = chart.unit ?? "";
    const prefix = unitStr === "$" ? "$" : "";

    return (
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title} className="w-full">
        {chart.title && (
          <text x={4} y={20} fontSize={13} fontWeight={600} fill={accent}>
            {chart.title}
          </text>
        )}
        {/* 基线网格 */}
        <line x1={barX} y1={30} x2={barX + barMaxW} y2={30} stroke={dim} strokeOpacity={0.25} strokeWidth={1} />
        {chart.labels.map((label, i) => {
          const v = chart.values[i];
          const w = Math.max((Math.abs(v) / max) * barMaxW, 4);
          const y = 44 + i * rowH;
          const isHi = chart.highlight === i;
          const inside = w > 58; // 条够宽时数值放条内
          return (
            <g key={label}>
              <text x={labelW} y={y + 22} fontSize={13} fill={dim} textAnchor="end" dominantBaseline="middle">
                {label}
              </text>
              <rect
                x={barX}
                y={y}
                width={w}
                height={28}
                rx={5}
                fill={isHi ? hi : accent}
                opacity={isHi ? 0.95 : 0.4}
              />
              <text
                x={inside ? barX + w - 10 : barX + w + 10}
                y={y + 14}
                fontSize={12.5}
                fontWeight={isHi ? 700 : 600}
                fill={inside ? "var(--background)" : accent}
                dominantBaseline="middle"
                textAnchor={inside ? "end" : "start"}
              >
                {prefix}
                {fmt(v)}
                {prefix ? "" : unitStr}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

  // vertical bars
  const chartH = H - PAD.t - PAD.b;
  const barW = (W - PAD.l - PAD.r) / chart.labels.length;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title} className="w-full">
      <text x={PAD.l} y={22} fontSize={14} fontWeight={600} fill={accent}>
        {chart.title}
      </text>
      {chart.labels.map((label, i) => {
        const v = chart.values[i];
        const h = (Math.abs(v) / max) * (chartH - 16);
        const x = PAD.l + i * barW + barW * 0.15;
        const w = barW * 0.7;
        const color = chart.highlight === i ? hi : accent;
        return (
          <g key={label}>
            <rect
              x={x}
              y={PAD.t + chartH - h}
              width={w}
              height={h}
              rx={4}
              fill={color}
              opacity={chart.highlight === i ? 0.95 : 0.55}
            />
            <text
              x={x + w / 2}
              y={PAD.t + chartH - h - 6}
              fontSize={11}
              textAnchor="middle"
              fill={accent}
              fontWeight={chart.highlight === i ? 600 : 400}
            >
              {v}
              {chart.unit ?? ""}
            </text>
            <text
              x={x + w / 2}
              y={PAD.t + chartH + 16}
              fontSize={11}
              textAnchor="middle"
              fill={dim}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** 文章块内的图表：SVG + 屏幕阅读器可读的数据表（Google 同时抓两种） */
export function ChartBlock({ chart }: { chart: ChartDef }) {
  return (
    <figure className="my-8">
      <div className="rounded-xl border border-border bg-muted/30 p-4">
        <ChartSVG chart={chart} />
      </div>
      <details className="mt-1 text-xs text-muted-foreground">
        <summary className="cursor-pointer select-none hover:text-foreground">
          View data / 查看数据
        </summary>
        <table className="mt-2 w-full text-left">
          <tbody>
            {chart.labels.map((l, i) => (
              <tr key={l}>
                <td className="py-0.5 pr-4">{l}</td>
                <td className="py-0.5 font-medium">
                  {chart.values[i]}
                  {chart.unit ?? ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

export function isChart(b: Block): b is Extract<Block, { t: "chart" }> {
  return b.t === "chart";
}
