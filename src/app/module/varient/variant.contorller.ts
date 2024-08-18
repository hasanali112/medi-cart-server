import { RequestHandler } from 'express'
import { VarientValidation } from './variant.validation'
import httpStatus from 'http-status'
import { VariantService } from './variant.service'

const createVarientIntoDB: RequestHandler = async (req, res) => {
  try {
    const varientData = req.body
    const parseData =
      VarientValidation.varientSchemaValidation.parse(varientData)
    const result = await VariantService.createVarient(parseData)
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Varient create successfully',
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

export const VariantController = {
  createVarientIntoDB,
}
