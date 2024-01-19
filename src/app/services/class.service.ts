import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Class} from "../models/Class";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private mainPath: string = 'http://localhost:8080/structure/schoolClass/'

  constructor(private http: HttpClient ) { }

  getData() {
    let classes: Class[] = []

    this.http.get(this.mainPath.concat('getAll'))
      .subscribe((response: any) => {
        response.schoolClasses.forEach((schoolClass: any) => {
          classes.push(new Class(schoolClass.schoolClassId, schoolClass.schoolClassName, schoolClass.teacher, schoolClass.students))
        })
      });
    return classes;
  }
}
