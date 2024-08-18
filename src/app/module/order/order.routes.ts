import { Router } from 'express'
import { OrderController } from './order.controller'

const router = Router()

router.post('/create-order', OrderController.createOrderIntoDB)
router.get('/', OrderController.getAllOrderIntoDB)
router.get('/:id', OrderController.getProductByIdIntoDB)

export const OrderRoutes = router
