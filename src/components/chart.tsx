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
    const rowH = (H - PAD.t - PAD.b) / chart.labels.length;
    const barMaxW = W - PAD.l - PAD.r - 150;
    return (
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title} className="w-full">
        <text x={PAD.l} y={22} fontSize={14} fontWeight={600} fill={accent}>
          {chart.title}
        </text>
        {chart.labels.map((label, i) => {
          const w = (Math.abs(chart.values[i]) / max) * barMaxW;
          const y = PAD.t + i * rowH;
          const color = chart.highlight === i ? hi : accent;
          return (
            <g key={label}>
              <text x={PAD.l} y={y + rowH / 2} fontSize={12} fill={dim} dominantBaseline="middle">
                {label}
              </text>
              <rect
                x={PAD.l + 110}
                y={y + rowH * 0.18}
                width={w}
                height={rowH * 0.64}
                rx={4}
                fill={color}
                opacity={chart.highlight === i ? 0.95 : 0.55}
              />
              <text
                x={Math.min(PAD.l + 118 + w + 6, W - PAD.r - 4)}
                y={y + rowH / 2}
                fontSize={12}
                fill={accent}
                dominantBaseline="middle"
                textAnchor="end"
                fontWeight={chart.highlight === i ? 600 : 400}
              >
                {chart.values[i]}
                {chart.unit ?? ""}
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
