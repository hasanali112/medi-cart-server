import { z } from 'zod'

const CategorySchemValidationSchema = z.object({
  name: z.string(),
  slug: z.string(),
  categoryType: z.enum(['primary', 'secondary', 'tertiary']),
  thumbnail: z.string(),
})

export const CategoryValidation = {
  CategorySchemValidationSchema,
}
