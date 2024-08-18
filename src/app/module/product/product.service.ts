import { Category } from '../category/category.model'
import { Reviews } from '../reviews/reviews.model'
import { Variant } from '../varient/variant.model'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProduct = async (payload: TProduct) => {
  const categoryFind = await Category.findOne({ name: payload.categories })
  const variantFind = await Variant.findOne({ name: payload.variant })

  if (categoryFind && variantFind) {
    const productData = {
      ...payload,
      categories: categoryFind._id,
      variant: variantFind._id,
    }
    const result = await Product.create(productData)
    return result
  }
}

const getAllProduct = async () => {
  const result = await Product.find().populate('categories').populate('variant')
  return result
}

const getAllProductById = async (id: string) => {
  const productData = await Product.findById(id).populate('categories')

  const reviews = await Reviews.find({ product: productData?._id })

  const result = {
    ...productData?.toObject(),
    reviews,
  }

  return result
}

export const ProductService = {
  createProduct,
  getAllProduct,
  getAllProductById,
}
