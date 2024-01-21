export class Subject {
  subjectId: number;
  subjectName?: string;
  subjectShortName?: string;

  constructor(subjectId: number, subjectName?: string, subjectShortName?: string) {
    this.subjectId = subjectId;
    this.subjectName = subjectName;
    this.subjectShortName = subjectShortName;
  }
}
