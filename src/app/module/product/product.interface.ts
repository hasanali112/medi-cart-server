import { Types } from 'mongoose'

export type TProduct = {
  name: string
  slug: string
  thumbnail: string
  photos: string[]
  description: string
  categories: Types.ObjectId
  price: number
  discount: number
  variant: Types.ObjectId
  stockStatus: boolean
  status: 'active' | 'inactive'
  productStatus: 'New' | 'Trending'
  totalReview: number
}
