const Students = require('../../models/koders').model

async function get() {
    const allStudents = await Students.find({}).exec()
    return allStudents
}

async function create( studentData ) {
    const existingStudents = await Students.find({ ...studentData }).exec()
  
    const studentExists = existingStudents.length > 0
  
    if (studentExists) throw new Error('Student already exists')
  
    const student = new Students(studentData)
    const studentsCreated = await student.save()
    return studentsCreated
  }

module.exports = {
    get,
    create
}