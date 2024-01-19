export class Subject {
  private _subjectId: number;
  private _subjectName: string;
  private _subjectShortName: string;
  constructor(subjectId: number, subjectName: string, subjectShortName: string) {
    this._subjectId = subjectId;
    this._subjectName = subjectName;
    this._subjectShortName = subjectShortName;
  }

  get subjectId(): number {
    return this._subjectId;
  }

  set subjectId(value: number) {
    this._subjectId = value;
  }

  get subjectName(): string {
    return this._subjectName;
  }

  set subjectName(value: string) {
    this._subjectName = value;
  }

  get subjectShortName(): string {
    return this._subjectShortName;
  }

  set subjectShortName(value: string) {
    this._subjectShortName = value;
  }
}
