import { Student } from "./student.interface"
import { StudentModel } from "./student.mdel"

export const createStudentInDB = async(data:Student) => {
const result = await StudentModel.create(data)
return result
}

export const getStudentsFromDB = async()=> {
    const result = await StudentModel.find({})
    return result
}