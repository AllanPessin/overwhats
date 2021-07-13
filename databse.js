const mongoose = require('mongoose')

const uri = "mongodb://localhost/overwhats"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

mongoose.connect(uri, options)
.then(() => console.log('Database is up'))
.catch((err) => console.log(err))