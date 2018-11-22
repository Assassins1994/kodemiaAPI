const Courses = require('../../models/courses').model

async function get() {
    const allCourses = await Courses.find({}).exec()
    return allCourses
}

async function create( coursesData ) {
    const existingCourses = await Courses.find({ ...coursesData }).exec()
  
    const courseExists = existingCourses.length > 0
  
    if (courseExists) throw new Error('Student already exists')
  
    const course = new Courses(coursesData)
    const coursesCreated = await course.save()
    return coursesCreated
  }

module.exports = {
    get,
    create
}