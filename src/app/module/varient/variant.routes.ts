import { Router } from 'express'
import { VariantController } from './variant.contorller'

const router = Router()

router.post('/create-variant', VariantController.createVarientIntoDB)

export const VariantRoutes = router
