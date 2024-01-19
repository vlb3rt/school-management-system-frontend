import { Injectable } from '@angular/core';
import {Subject} from "../models/Subject";
import {Teacher} from "../models/Teacher";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private mainPath: string = 'http://localhost:8080/person/teacher/'

  constructor(private http: HttpClient) { }

  getData(): Teacher[] {
    let teachers: Teacher[] = []

    this.http.get(this.mainPath.concat('getAll'))
      .subscribe((response: any) => {
        response.teachers.forEach((teacher: any) => {
          teachers.push(new Teacher(teacher.teacherId, teacher.name, teacher.lastName, teacher.teacherIndex, teacher.subject))
        })
      });
    return teachers;
  }
}
