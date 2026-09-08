import * as React from "react";
import type { Block } from "@/content";

function Inline({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
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
              {part.slice(2, -2)}
            </strong>
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
        <h2 key={i} className="mb-3 mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
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
        <p key={i} className="my-4 leading-7 text-muted-foreground">
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
        <blockquote key={i} className="my-4 border-l-2 border-border pl-4 italic text-muted-foreground">
          <Inline text={block.text} />
        </blockquote>
      );
  }
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return <div>{blocks.map(renderBlock)}</div>;
}
