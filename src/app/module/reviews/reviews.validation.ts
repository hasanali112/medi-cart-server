import { z } from 'zod'

const reviewValidationSchema = z.object({
  name: z.string(),
  photo: z.string(),
  rating: z.number(),
  message: z.string(),
  product: z.string(),
})

export const ReviewsValidation = {
  reviewValidationSchema,
}
