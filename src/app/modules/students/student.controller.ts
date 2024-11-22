import { Request, Response } from 'express'
import {
  createStudentInDB,
  deleteStudentFromDB,
  getSingleStudentFromDB,
  getStudentsFromDB,
} from './student.service'
import studentValidationSchema from './student.validation'

export const createStudent = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const studentData = studentValidationSchema.parse(data)
    const result = await createStudentInDB(studentData)
    res.send({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to Create Student',
      error: err,
    })
  }
}

export const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await getStudentsFromDB()
    res.send({
      success: true,
      message: 'Retrieve Student Data Successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
export const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const result = await getSingleStudentFromDB(req.params.id)
    res.send({
      success: true,
      message: 'Retrieve Student Data Successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const result = await deleteStudentFromDB(req.params.id)
    res.send({
      success: true,
      message: 'Retrieve Student Data Successfully',
      data: result,
    })
  } catch (err) {
    res.send({
      success: false,
      message: 'Retrieve Student Data Successfully',
      error: err,
    })
  }
}
