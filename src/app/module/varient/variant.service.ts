import { TVariant } from './variant.interface'
import { Variant } from './variant.model'

const createVarient = async (payload: TVariant) => {
  const result = await Variant.create(payload)
  return result
}

export const VariantService = {
  createVarient,
}
