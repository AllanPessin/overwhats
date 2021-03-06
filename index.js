const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()
require('./databse')

app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(8080, () => console.log('Server is running!'))