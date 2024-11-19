import { Schema, model } from 'mongoose'
import { Guardian, Student } from './student.interface'
import validator from 'validator'


const guardian = new Schema<Guardian>({
  fatherContact: { type: String, required: true },
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContact: { type: String, required: true },
  motherOccupation: { type: String, required: true },
})

const studentSchema = new Schema<Student>({
  name: {
    firstName: {
      type: String,
      required: true,
      maxLength: 15,
      trim: true,
      validate: {
        validator: function (value: string) {
          return /^[A-Z][a-z]*$/.test(value)
        },
        message: '{VALUE} is not in capitalize format',
      },
    },
    middleName: { type: String },
    lastName: {
      type: String,
      required: true,
      validate: {
        validator: (value:string) => validator.isAlpha(value)
      },
    },
  },
  address: { type: String },
  avatar: { type: String },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'gender is required'],
  },
  guardian: guardian,
})

export const StudentModel = model<Student>('Student', studentSchema)
