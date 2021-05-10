type Image = {
  url: string,
  type: string,
  width: number,
  height: number
}

export type Forum = {
  id: string,
  name: string,
  description: string,
  subscriptionCount: number,
  subcategories: string[],
  topics: string[],
  nsfw: boolean,
  heroImage: Image,
  logo: Image,
  postCount: {
    last30Days: string
  }
}