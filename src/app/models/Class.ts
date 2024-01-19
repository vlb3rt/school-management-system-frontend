import {Teacher} from "./Teacher";
import {Student} from "./Student";

export class Class {
  private _schoolClassId: number;
  private _schoolClassName: string;
  private _teacher: Teacher;
  private _students: Student[];

  constructor(schoolClassId: number, schoolClassName: string, teacher: Teacher, students: Student[]) {
    this._schoolClassId = schoolClassId;
    this._schoolClassName = schoolClassName;
    this._teacher = teacher;
    this._students = students;
  }

  get schoolClassId(): number {
    return this._schoolClassId;
  }

  set schoolClassId(value: number) {
    this._schoolClassId = value;
  }

  get schoolClassName(): string {
    return this._schoolClassName;
  }

  set schoolClassName(value: string) {
    this._schoolClassName = value;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }
}
