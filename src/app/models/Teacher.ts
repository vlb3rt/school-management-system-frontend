import {Subject} from "./Subject";

export class Teacher {
  teacherId: number;
  name?: string;
  lastName?: string;
  teacherIndex?: number;
  mainSubject?: Subject;

  constructor(teacherId: number, name: string, lastName: string, teacherIndex: number, subject: Subject) {
    this.teacherId = teacherId;
    this.name = name;
    this.lastName = lastName;
    this.teacherIndex = teacherIndex;
    this.mainSubject = subject;
  }


}
