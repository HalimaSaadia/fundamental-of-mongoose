import express from "express";
import { createStudent, getStudents } from "./student.controller";

const router = express.Router()

router.post("/create-student", createStudent)
router.get("/", getStudents)

export const studentRoute = router