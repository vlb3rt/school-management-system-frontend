export class Student {
  studentId: number;
  name: string;
  lastName: string;
  studentIndex: number;
  schoolClassId: number;
  schoolClassName?: string;

  constructor(studentId: number, name: string, lastName: string, studentIndex: number, schoolClassId: number, schoolClassName?: string) {
    this.studentId = studentId;
    this.name = name;
    this.lastName = lastName;
    this.studentIndex = studentIndex;
    this.schoolClassId = schoolClassId;
    this.schoolClassName = schoolClassName;
  }
}
