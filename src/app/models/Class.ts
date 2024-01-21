import {Teacher} from "./Teacher";
import {Student} from "./Student";

export class Class {
  schoolClassId: number;
  schoolClassName: string;
  teacher: Teacher;
  students?: Student[];

  constructor( schoolClassId: number, schoolClassName: string, teacher: Teacher, students?: Student[]) {
    this.schoolClassId = schoolClassId;
    this.schoolClassName = schoolClassName;
    this.teacher = teacher;
    this.students = students;
  }
}
