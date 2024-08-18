import { TOrder } from './order.interface'
import { Order } from './order.model'

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload)
  return result
}

const getAllOrder = async () => {
  const result = await Order.find()
  return result
}

const getOrderById = async (id: string) => {
  const result = await Order.findById(id)
  return result
}

export const orderService = {
  createOrder,
  getAllOrder,
  getOrderById,
}
