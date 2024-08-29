import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { ProductValidation } from './product.validation'
import { ProductService } from './product.service'

const createProductIntoDB: RequestHandler = async (req, res) => {
  try {
    const { variant, product } = req.body
    const result = await ProductService.createProduct(variant, product)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product create successfully',
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

const getAllProductIntoDB: RequestHandler = async (req, res) => {
  try {
    const result = await ProductService.getAllProduct()
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product get successfully',
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

const getProductByIdIntoDB: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const result = await ProductService.getAllProductById(id)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product get successfully',
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

const getRelatedProductIntoDB: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const result = await ProductService.getRelatedProduct(id)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Related Product get successfully',
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

export const ProductController = {
  createProductIntoDB,
  getAllProductIntoDB,
  getProductByIdIntoDB,
  getRelatedProductIntoDB,
}
