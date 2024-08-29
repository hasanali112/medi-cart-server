import { Category } from '../category/category.model'
import { Reviews } from '../reviews/reviews.model'
import { TVariant } from '../varient/variant.interface'
import { Variant } from '../varient/variant.model'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProduct = async (variant: TVariant[], payload: TProduct) => {
  const categoryFind = await Category.findOne({ name: payload.categories })

  if (categoryFind) {
    const productData = {
      ...payload,
      categories: categoryFind._id,
    }
    const result = await Product.create(productData)

    console.log(Object.keys(result))

    if (Object.keys(result).length) {
      for (const item of variant) {
        const variantData: Partial<TVariant> = {
          ...item,
          product: result._id,
        }
        await Variant.create(variantData)
      }
    }

    return result
  }

  return categoryFind
}

const getAllProduct = async () => {
  const result = await Product.find().populate('categories')
  return result
}

const getAllProductById = async (id: string) => {
  const productData = await Product.findById(id).populate('categories')

  const variants = await Variant.find({ product: productData?._id })

  const reviews = await Reviews.find({ product: productData?._id })

  const result = {
    ...productData?.toObject(),
    variants,
    reviews,
  }

  return result
}

const getRelatedProduct = async (id: string) => {
  const relatedProduct = await Product.findById(id)
  const relatedAllProduct = await Product.find(
    {
      categories: relatedProduct?.categories,
      _id: { $ne: id },
    },
    { _id: 1, name: 1, thumbnail: 1, price: 1, discount: 1 },
  )
  return relatedAllProduct
}

export const ProductService = {
  createProduct,
  getAllProduct,
  getAllProductById,
  getRelatedProduct,
}
