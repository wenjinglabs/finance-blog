import { posts, type Post } from "@/content";

export type PostMeta = Omit<Post, "blocks">;

export function getPosts(): PostMeta[] {
  return posts.map(({ blocks: _blocks, ...meta }) => meta);
}

export function getPost(slug: string): Post | null {
  return posts.find((p) => p.slug === slug) ?? null;
}
