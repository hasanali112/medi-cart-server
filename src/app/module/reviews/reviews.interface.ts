import { Types } from 'mongoose'

export type TReviews = {
  name: string
  photo: string
  rating: number
  message: string
  product: Types.ObjectId
}
