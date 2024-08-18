import { RequestHandler } from 'express'
import { ReviewsService } from './reviews.service'
import httpStatus from 'http-status'

const createReviewIntoDB: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    const result = await ReviewsService.createReviews(id, req.body)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Reviews create successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

const getReviewIntoDB: RequestHandler = async (req, res) => {
  try {
    const result = await ReviewsService.getAllReviews()
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Reviews All Retrived successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

export const ReviewsController = {
  createReviewIntoDB,
  getReviewIntoDB,
}
