import { Router } from 'express'
import UserController from './controllers/UserController'
import FormController from './controllers/FormController'
import TokenController from './controllers/TokenController'
import LoginRequired from './middlewares/loginRequired'

const routes = Router()

routes.get('/users/', LoginRequired, UserController.index)
routes.post('/users/', UserController.store)
routes.get('/users/:id', LoginRequired, UserController.show)
routes.put('/users/:id', LoginRequired, UserController.update)
routes.delete('/users/:id', LoginRequired, UserController.destroy)

routes.get('/forms', LoginRequired, FormController.index)
routes.post('/forms', LoginRequired, FormController.store)
routes.get('/forms/:id', LoginRequired, FormController.show)
routes.put('/forms/:id', LoginRequired, FormController.update)
routes.delete('/forms/:id', LoginRequired, FormController.destroy)

routes.post('/tokens', TokenController.store)

export default routes
