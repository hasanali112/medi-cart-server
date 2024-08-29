import { model, Schema } from 'mongoose'
import { TProduct } from './product.interface'

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true },
    photos: { type: [String], required: true },
    description: { type: String, required: true },
    categories: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    stockStatus: { type: Boolean, required: true },
    status: { type: String, enum: ['active', 'inactive'], required: true },
    productStatus: { type: String, enum: ['New', 'Trending'] },
    totalReview: { type: Number },
  },
  {
    timestamps: true,
  },
)

export const Product = model<TProduct>('Product', productSchema)
