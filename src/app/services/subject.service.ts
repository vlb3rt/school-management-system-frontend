import { Injectable } from '@angular/core';
import { Subject } from "../models/Subject";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private mainPath: string = 'http://localhost:8080/value/subject/'

  constructor(private http: HttpClient) {}

  getData(): Subject[] {
    let subjects: Subject[] = []

    this.http.get(this.mainPath.concat('getAll'))
      .subscribe((response: any) => {
        response.subjects.forEach((subject: any) => {
          subjects.push(new Subject(subject.subjectId, subject.subjectName, subject.subjectShortName))
        })
      });
    return subjects;
  }
}
