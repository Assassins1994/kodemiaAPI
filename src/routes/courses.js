const express = require('express')

const router = express.Router()

const course = require('../usecases/courses')

router.get('/', async (req, res) => {
  const courses = await course.get()
  res.json({
    success: true,
    message: 'Done!',
    payload: {
      courses
    }
  })
})

router.post('/', async (req, res) => {
    try {
      const courseData = req.body
      console.warn(' studentData: ', courseData)
      const newCourse = await course.create(courseData)
      res.json({
        success: true,
        message: 'New course created',
        payload: { course: newCourse }
      })
    } catch (error) {
      res.status(400)
      res.json({
        success: false,
        message: 'Course could not created',
        error: [
          error
        ]
      })
    }
  })

module.exports = router
