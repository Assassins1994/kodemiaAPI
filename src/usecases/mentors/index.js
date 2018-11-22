const Courses = require('../../models/courses').model

async function get() {
    const allCourses = await Courses.find({}).exec()
    return allCourses
}

async function create( CourseData ) {
    const existingCourses = await Courses.find({ ...CourseData }).exec()
  
    const courseExists = existingCourses.length > 0
  
    if (courseExists) throw new Error('Course already exists')
  
    const course = new Courses(CourseData)
    const coursesCreated = await course.save()
    return coursesCreated
  }

module.exports = {
    get,
    create
}