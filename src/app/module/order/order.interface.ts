export type TShippingOrder = {
  name: string
  photos: string[]
  price: number
  quantity: number
}

export type TOrder = {
  name: string
  email: string
  contactNumber: string
  address: string
  totalPrice: number
  order: TShippingOrder[]
}
