const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Restaurant = Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  phone: { type: String, require: true, validate: [/^[0-9]{10,11}$/, 'Formato inválido! Formato: 9999999999 ou 99999999999'] },
  adress: { coordinates: [], number: String},
  instagram: String,
  facebook: String,
  twitter: String,
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('restaurant', Restaurant)