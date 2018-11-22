const express = require('express')

const router = express.Router()

const student = require('../usecases/koders')

router.get('/', async (req, res) => {
  const koders = await student.get()
  res.json({
    success: true,
    message: 'Done!',
    payload: {
      koders
    }
  })
})

router.post('/', async (req, res) => {
    try {
      const studentData = req.body
      console.warn(' studentData: ', studentData)
      const newStudent = await student.create(studentData)
      res.json({
        success: true,
        message: 'New student created',
        payload: { student: newStudent }
      })
    } catch (error) {
      res.status(400)
      res.json({
        success: false,
        message: 'Student could not created',
        error: [
          error
        ]
      })
    }
  })

module.exports = router
