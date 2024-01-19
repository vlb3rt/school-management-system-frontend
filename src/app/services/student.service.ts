import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private mainPath: string = 'http://localhost:8080/person/student/'

  constructor(private http: HttpClient ) { }

  getData() {
    let students: Student[] = []

    this.http.get(this.mainPath.concat('getAll'))
      .subscribe((response: any) => {
        response.students.forEach((student: any) => {
          students.push(new Student(
            student.studentId,
            student.name,
            student.lastName,
            student.studentIndex,
            student.schoolClassId,
            student.schoolClassName))
        })
      });
    return students;
  }

}
