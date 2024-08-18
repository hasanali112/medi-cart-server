import { model, Schema } from 'mongoose'
import { TCategory } from './category.interface'
import { CategoryType } from './category.constant'

const categorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    categoryType: {
      type: String,
      enum: CategoryType,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Category = model<TCategory>('Category', categorySchema)
