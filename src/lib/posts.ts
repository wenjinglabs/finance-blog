import { posts, type Post } from "@/content";

export type PostMeta = Omit<Post, "blocks"> & Pick<Post, "blocks">;

export function getPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | null {
  return posts.find((p) => p.slug === slug) ?? null;
}
