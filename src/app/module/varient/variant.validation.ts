import { z } from 'zod'

const varientSchemaValidation = z.object({
  name: z.string(),
  price: z.number(),
})

export const VarientValidation = {
  varientSchemaValidation,
}
