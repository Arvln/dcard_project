import { Gender } from "../types"

export type MediaMeta = {
  id: string,
  url: string,
  type: string,
  createdAt: string,
  updatedAt: string,
  width: number,
  height: number
}

export type Reactions = {
  id: string,
  count: number
}

export type SectionPosts = {
  id: string,
  title: string,
  content: string,
  excerpt: string,
  anonymousSchool: boolean,
  forumId: string,
  createdAt: string,
  updatedAt: string,
  commentCount: number,
  likeCount: number,
  topics: string[],
  forumName: string,
  forumAlias: string,
  gender: Gender,
  school: string,
  mediaMeta: MediaMeta[],
  reactions: Reactions[],
  categories: string[]
}