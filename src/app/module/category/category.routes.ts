import { Router } from 'express'
import { CategoryController } from './category.controller'

const router = Router()

router.post('/create-category', CategoryController.createCategoryIntoDB)
router.get('/', CategoryController.getCategoryIntoDB)

export const CategoryRoutes = router
