import { Request, Response } from 'express'
import { InvalidParamError } from '../errors'

import { badRequest } from '../helpers/http-helper'

import Form from '../schemas/Form'

class FormController {
  public async index (req: Request, res: Response): Promise<Response> {
    const forms = await Form.find()

    return res.json(forms)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const form = await Form.create(req.body)

      return res.json(form)
    } catch (error) {
      return res.json(badRequest(new InvalidParamError(error.message)))
    }
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const form = await Form.findById(req.params.id)

    return res.json(form)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(form)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await Form.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

export default new FormController()
