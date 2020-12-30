import Tag from "./tag"

type Recipe = {
    id: string
    name: string
    description: string
    image: string
    tags: Tag[]
  }

export type {
    Recipe
}