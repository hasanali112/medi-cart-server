import { Product } from '../product/product.model'
import { User } from '../user/user.model'
import { TReviews } from './reviews.interface'
import { Reviews } from './reviews.model'

const createReviews = async (id: string, payload: TReviews) => {
  const isPersonExists = await User.findOne({ name: payload.name })
  if (!isPersonExists) {
    throw new Error('Please register first')
  }

  const isExistReviews = await Reviews.findOne({
    name: payload.name,
    product: id,
  })
  if (isExistReviews) {
    throw new Error('You can review a product one time')
  }

  const result = await Reviews.create(payload)

  const totalReviewCount = await Reviews.countDocuments({ product: id })

  await Product.findByIdAndUpdate(
    id,
    {
      totalReview: totalReviewCount,
    },
    { new: true },
  )

  return result
}

const getAllReviews = async () => {
  const result = await Reviews.find().populate('product')
  return result
}

export const ReviewsService = {
  createReviews,
  getAllReviews,
}
