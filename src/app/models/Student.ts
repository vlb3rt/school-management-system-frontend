export class Student {
  private _studentId: number;
  private _name: string;
  private _lastName: string;
  private _studentIndex: number;
  private _schoolClassId: number;
  private _schoolClassName: string;

  constructor(studentId: number, name: string, lastName: string, studentIndex: number, schoolClassId: number, schoolClassName: string) {
    this._studentId = studentId;
    this._name = name;
    this._lastName = lastName;
    this._studentIndex = studentIndex;
    this._schoolClassId = schoolClassId;
    this._schoolClassName = schoolClassName;
  }

  get studentId(): number {
    return this._studentId;
  }

  set studentId(value: number) {
    this._studentId = value;
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

  get studentIndex(): number {
    return this._studentIndex;
  }

  set studentIndex(value: number) {
    this._studentIndex = value;
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
}
