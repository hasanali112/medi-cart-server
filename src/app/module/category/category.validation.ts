import { z } from 'zod'

const CategorySchemValidationSchema = z.object({
  name: z.string(),
  slug: z.string(),
  thumbnail: z.string(),
})

export const CategoryValidation = {
  CategorySchemValidationSchema,
}
