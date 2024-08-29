import { Router } from 'express'
import { ProductController } from './product.controller'

const router = Router()

router.post('/create-product', ProductController.createProductIntoDB)
router.get('/', ProductController.getAllProductIntoDB)
router.get('/:id', ProductController.getProductByIdIntoDB)
router.get('/:id/related-product', ProductController.getRelatedProductIntoDB)

export const ProductRoutes = router
