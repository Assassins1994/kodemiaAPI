const express = require('express')

const app = express()

app.use(express.json())

const kodersRoutes = require('./routes/koders')
const mentorsRoutes = require('./routes/mentors')
const coursesRoutes = require('./routes/courses')

app.use(express.json())

app.use('/koders', kodersRoutes)
app.use('/mentors', mentorsRoutes)
app.use('/courses',coursesRoutes)

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Kodemia_API is runnig'
  })
})

module.exports = app
