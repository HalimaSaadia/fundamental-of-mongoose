import express from 'express'
import { createStudent, deleteStudent, getSingleStudent, getStudents } from './student.controller'

const router = express.Router()
// checking issues
router.post('/create-student', createStudent)
router.get('/', getStudents)
router.get("/:id", getSingleStudent)
router.delete("/:id", deleteStudent)

export const studentRoute = router
