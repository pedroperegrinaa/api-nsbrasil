import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(user)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await User.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

export default new UserController()
