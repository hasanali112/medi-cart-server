import { z } from 'zod'

export const productSchemaValidation = z.object({
  name: z.string(),
  slug: z.string(),
  thumbnail: z.string(),
  photos: z.string().array(),
  description: z.string(),
  categories: z.string(),
  price: z.number(),
  discount: z.number(),
  variant: z.string(),
  stockStatus: z.boolean(),
  status: z.enum(['active', 'inactive']),
  productStatus: z.enum(['New', 'Trending']),
  totalReview: z.number().optional(),
})

export const ProductValidation = {
  productSchemaValidation,
}
