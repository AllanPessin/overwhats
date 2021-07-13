const passwordHash = require('password-hash')
const restaurant = require('../models/restaurant')


exports.signup = async(request, response) => {
  const { password } = request.body
  const encryptPassword = await passwordHash.generate(password)
  
  request.body.password = encryptPassword
  restaurant.create({...request.body}, (err) => {
    if(err) {
      response.status(400).json({
        error: true,
        message: "Erro ao cadastrar restaurante"
      })
    }
    
    response.status(200).json({
      error: false,
      message: "Restaurante cadastrado com sucesso"
    })
  })
}