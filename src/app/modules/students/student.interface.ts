

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  motherName: string
  motherOccupation: string
  fatherContact: string
  motherContact: string
}

type TStudentName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type TStudent = {
  name: TStudentName
  contact: string
  emergencyContact: string
  gender: 'male' | 'female'
  address: string
  email: string
  avatar?: string
  guardian: TGuardian,
  isDeleted: boolean
}

// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent>
// }

// export type studentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >
