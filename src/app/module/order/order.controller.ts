import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { orderService } from './order.service'

const createOrderIntoDB: RequestHandler = async (req, res) => {
  try {
    const orderData = req.body
    const result = await orderService.createOrder(orderData)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Order create successfully',
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
const getAllOrderIntoDB: RequestHandler = async (req, res) => {
  try {
    const result = await orderService.getAllOrder()
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
    const result = await orderService.getOrderById(id)
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

export const OrderController = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getProductByIdIntoDB,
}
