export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "code"; lang: string; text: string }
  | { t: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  blocks: Block[];
};
