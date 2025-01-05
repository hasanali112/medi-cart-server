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
  stockStatus: boolean
  status: 'active' | 'inactive'
  productStatus: 'new' | 'popular'
  flashSale: boolean
  totalReview: number
}
