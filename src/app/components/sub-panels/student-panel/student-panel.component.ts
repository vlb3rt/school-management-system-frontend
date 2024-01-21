import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from "../../../models/Student";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ModalService} from "../../../services/modal.service";
import {Subject as sub} from "rxjs"

@Component({
  selector: 'app-student-panel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './student-panel.component.html',
  styleUrl: './student-panel.component.css'
})
export class StudentPanelComponent implements OnInit, OnDestroy {

  private mainPath: string = 'http://localhost:8080/person/student/'

  students: Student[] = []

  studentSubscriber: sub<any> = new sub()

  constructor(private modalService: ModalService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
    this.studentSubscriber = this.modalService.output
    this.studentSubscriber.subscribe((output: any) => {
      switch (output.formName) {
        case "add_student":
          console.log(output.values)
          const student = {
            studentId: 0,
            name: output.values.name,
            lastName: output.values.lastName,
            studentIndex: output.values.studentIndex,
            schoolClassId: output.values.schoolClassId
          }
          this.put(student)
      }
    })
  }

  ngOnDestroy() {
  }

  add() {
    this.modalService.openModal({
      title: "Student Add",
      fields: [{
        name: "name",
        type: "text",
        value: "",
        title: "Name"
      }, {
        name: "lastName",
        type: "text",
        value: "",
        title: "Last Name"
      }, {
        name: "studentIndex",
        type: "number",
        value: "",
        title: "Student Index"
      }, {
        name: "schoolClassId",
        type: "number",
        value: "",
        title: "Class id"
      }],
      formName: "add_student"
    })
  }

  getData(): void {
    this.students = []
    this.http.get(this.mainPath.concat('getAll'))
      .subscribe((response: any) => {
        response.students.forEach((student: any) => {
          this.students.push(new Student(
            student.studentId,
            student.name,
            student.lastName,
            student.studentIndex,
            student.schoolClassId,
            student.schoolClassName))
        })
      });
  }

  delete(studentId: number) {
    this.http.get(this.mainPath.concat('delete/').concat(String(studentId)))
      .subscribe({
        next: (data) => {
          this.getData()
        },
        error: (data) => {
          alert(data.error)
        }
      })
  }

  put(student: Student) {
    this.http.post(this.mainPath.concat('create'), student)
      .subscribe({
        next: (data) => {
          this.getData()
        },
        error: (data) => {
          alert(data.error)
        },
      })
  }
}

