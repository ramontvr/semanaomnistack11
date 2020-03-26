const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//LOGIN
routes.post('/sessions', SessionController.create)

//LISTAR
routes.get('/ongs', OngController.index)
routes.get('/incidents', IncidentController.index)
routes.get('/profile', ProfileController.index)

//CRIAR
routes.post('/ongs', OngController.create)
routes.post('/incidents', IncidentController.create)


//DELETAR
routes.delete('/incidents/:id', IncidentController.delete)



module.exports = routes