import type { Post } from "./types";
import { helloBlog } from "./hello-blog";
import { cfYouxuan } from "./cf-youxuan";
import { keeper } from "./keeper";
import { cfToken } from "./cf-token";
import { measure } from "./measure";

export type { Post, Block } from "./types";

const all: Post[] = [measure, cfToken, keeper, cfYouxuan, helloBlog];
all.sort((a, b) => (a.date < b.date ? 1 : -1));

export const posts: Post[] = all;
