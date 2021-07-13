const routes = require('express').Router()
const LoginController = require('./controllers/LoginController')

routes.post('/signup', LoginController.signup)

module.exports = routes;