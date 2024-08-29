import { Types } from 'mongoose'

export type TVariant = {
  name: string
  price: number
  product: Types.ObjectId
}
