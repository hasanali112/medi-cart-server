import { model, Schema } from 'mongoose'
import { TReviews } from './reviews.interface'

const reviewSchema = new Schema<TReviews>({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
})

export const Reviews = model<TReviews>('Reviews', reviewSchema)
