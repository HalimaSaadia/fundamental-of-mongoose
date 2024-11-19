import { Request, Response } from 'express'
import { createStudentInDB, getStudentsFromDB } from './student.service'

export const createStudent = async (req: Request, res: Response) => {
  const data = req.body

  try {
    const result = await createStudentInDB(data)
    res.status(200).json({
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
