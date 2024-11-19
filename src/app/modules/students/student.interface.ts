

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  motherName: string
  motherOccupation: string
  fatherContact: string
  motherContact: string
}

type StudentName =  {
  firstName: string
  middleName?: string
  lastName: string
}

export type Student = {
  name:StudentName
  contact: string
  emergencyContact: string
  gender: 'male' | 'female'
  address: string
  email: string
  avatar?: string
  guardian: Guardian
}
