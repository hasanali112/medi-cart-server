import { z } from 'zod'

const orderDetailSchema = z.object({
  name: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

const orderShema = new Schema<TOrder>({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  order: {
    type: [orderDetailSchema],
    required: true,
  },
})
