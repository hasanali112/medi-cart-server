import { RequestHandler } from 'express'
import { CategoryService } from './category.service'
import { CategoryValidation } from './category.validation'
import httpStatus from 'http-status'

const createCategoryIntoDB: RequestHandler = async (req, res) => {
  try {
    const categotyData = req.body
    const validateData =
      CategoryValidation.CategorySchemValidationSchema.parse(categotyData)
    const result = await CategoryService.createCategory(validateData)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Category create successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      successs: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}
const getCategoryIntoDB: RequestHandler = async (req, res) => {
  try {
    const result = await CategoryService.getCategory()
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Category get successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(httpStatus.BAD_REQUEST).json({
      successs: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}

export const CategoryController = {
  createCategoryIntoDB,
  getCategoryIntoDB,
}
