import {Component, OnDestroy, OnInit} from '@angular/core';
import { Teacher } from "../../../models/Teacher";
import { NgForOf } from "@angular/common";
import {ModalService} from "../../../services/modal.service";
import {HttpClient} from "@angular/common/http";
import {Subject as sub} from "rxjs"


@Component({
  selector: 'app-teacher-panel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './teacher-panel.component.html',
  styleUrl: './teacher-panel.component.css'
})
export class TeacherPanelComponent implements OnInit, OnDestroy {

  private mainPath: string = 'http://localhost:8080/person/teacher/'

  teachers: Teacher[] = []

  teacherSubscriber: sub<any> = new sub()

  constructor(private modalService: ModalService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
    this.teacherSubscriber = this.modalService.output
    this.teacherSubscriber.subscribe((output: any) => {
      switch (output.formName) {
        case "add_teacher":
        const teacher = {
            teacherId: output.values.teacherId,
            name: output.values.name,
            lastName: output.values.lastName,
            teacherIndex: output.values.teacherIndex,
            mainSubject: {
              subjectId: output.values.subjectId,
            }
        }
        this.put(teacher)
      }
    })
  }

  ngOnDestroy() {
    // this.teacherSubscriber.unsubscribe()
  }

  add() {
    this.modalService.openModal({
      title: "Teacher Add",
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
        name: "teacherIndex",
        type: "number",
        value: "",
        title: "Teacher Index"
      }, {
        name: "subjectId",
        type: "number",
        value: "",
        title: "Subject id"
      }],
      formName: "add_teacher"
    })
  }

  getData(): void {
    this.teachers = []
    this.http.get(this.mainPath.concat('getAll'))
      .subscribe((response: any) => {
        response.teachers.forEach((teacher: any) => {
          this.teachers.push(new Teacher(
            teacher.teacherId,
            teacher.name,
            teacher.lastName,
            teacher.teacherIndex,
            teacher.subject))
        })
      });
  }

  delete(teacherId: number) {
    this.http.get(this.mainPath.concat('delete/').concat(String(teacherId)))
      .subscribe({
        next: (data) => {
          this.getData()
        },
        error: (data) => {
          alert(data.error)
        }
      })
  }

  put(teacher: Teacher) {
    this.http.post(this.mainPath.concat('create'), teacher)
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


