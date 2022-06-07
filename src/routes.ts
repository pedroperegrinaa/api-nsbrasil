import { Router } from 'express'
import UserController from './controllers/UserController'
import FormController from './controllers/FormController'

const routes = Router()

routes.get('/users/', UserController.index)
routes.post('/users/', UserController.store)
routes.get('/users/:id', UserController.show)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

routes.get('/forms', FormController.index)
routes.post('/forms', FormController.store)
routes.get('/forms/:id', FormController.show)
routes.put('/forms/:id', FormController.update)
routes.delete('/forms/:id', FormController.destroy)

export default routes
