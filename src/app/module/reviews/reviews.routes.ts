import { Router } from 'express'
import { ReviewsController } from './reviews.controller'
import dataValidation from '../../middleware/validationMiddleware'
import { ReviewsValidation } from './reviews.validation'

const router = Router()

router.post(
  '/create-reviews/:id',
  dataValidation(ReviewsValidation.reviewValidationSchema),
  ReviewsController.createReviewIntoDB,
)

router.get('/', ReviewsController.getReviewIntoDB)

export const ReviewsRoutes = router
