import {Subject} from "./Subject";

export class Teacher {
  private _teacherId: number;
  private _name: string;
  private _lastName: string;
  private _teacherIndex: number;
  private _subject: Subject;

  constructor(teacherId: number, name: string, lastName: string, teacherIndex: number, subject: Subject) {
    this._teacherId = teacherId;
    this._name = name;
    this._lastName = lastName;
    this._teacherIndex = teacherIndex;
    this._subject = subject;
  }

  get teacherId(): number {
    return this._teacherId;
  }

  set teacherId(value: number) {
    this._teacherId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get teacherIndex(): number {
    return this._teacherIndex;
  }

  set teacherIndex(value: number) {
    this._teacherIndex = value;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }
}
