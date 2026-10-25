export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "code"; lang: string; text: string }
  | { t: "quote"; text: string }
  | { t: "summary"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | {
      t: "chart";
      chart: {
        type: "bar" | "hbar";
        title: string;
        labels: string[];
        values: number[];
        unit?: string;
        highlight?: number;
      };
    }
  | {
      t: "img";
      src: string;
      alt: string;
      altZh?: string;
      caption?: string;
      captionZh?: string;
      accent?: string;
    };

/** 可选的中文版本：存在时语言切换为中文即整篇替换渲染。 */
export type PostI18n = {
  title: string;
  description: string;
  tags: string[];
  blocks: Block[];
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  blocks: Block[];
  zh?: PostI18n;
};
