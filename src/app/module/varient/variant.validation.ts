import { z } from 'zod'

const varientSchemaValidation = z.object({
  name: z.string(),
  price: z.number(),
  product: z.string(),
})

export const VarientValidation = {
  varientSchemaValidation,
}
