import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', UserController.index)
routes.post('/', UserController.store)
routes.get('/:id', UserController.show)
routes.put('/:id', UserController.update)
routes.delete('/:id', UserController.destroy)

export default routes
