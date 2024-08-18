import { model, Schema } from 'mongoose'
import { TVariant } from './variant.interface'

const variantSchema = new Schema<TVariant>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Variant = model<TVariant>('Variant', variantSchema)
