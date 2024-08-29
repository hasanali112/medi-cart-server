import { Router } from 'express'
import { CategoryRoutes } from '../module/category/category.routes'

import { ProductRoutes } from '../module/product/product.routes'
import { userRoute } from '../module/user/user.routes'
import { OrderRoutes } from '../module/order/order.routes'
import { ReviewsRoutes } from '../module/reviews/reviews.routes'

const middlewareRoutes = Router()
const routes = [
  {
    path: '/categories',
    router: CategoryRoutes,
  },
  // {
  //   path: '/variants',
  //   router: VariantRoutes,
  // },
  {
    path: '/products',
    router: ProductRoutes,
  },
  {
    path: '/user',
    router: userRoute,
  },
  {
    path: '/order',
    router: OrderRoutes,
  },
  {
    path: '/reviews',
    router: ReviewsRoutes,
  },
]

routes.forEach(route => middlewareRoutes.use(route.path, route.router))

export default middlewareRoutes
