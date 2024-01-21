import {Component, OnDestroy, OnInit} from '@angular/core';
import { Class } from "../../../models/Class";
import { NgForOf } from "@angular/common";
import {ModalService} from "../../../services/modal.service";
import {HttpClient} from "@angular/common/http";
import {Subject as sub} from "rxjs"

@Component({
  selector: 'app-class-panel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './class-panel.component.html',
  styleUrl: './class-panel.component.css'
})
export class ClassPanelComponent implements OnInit, OnDestroy {

  private mainPath: string = 'http://localhost:8080/structure/schoolClass/'

  classes: Class[] = []

  classSubscriber: sub<any> = new sub()

  constructor(private modalService: ModalService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.getData()
    this.classSubscriber = this.modalService.output
    this.classSubscriber.subscribe((output: any) => {
      switch (output.formName) {
        case "add_class":
          const schoolClass: Class = {
            schoolClassId: 0,
            schoolClassName: output.values.schoolClassName,
            teacher: {
              teacherId: output.values.teacherId
            }
          }
          this.put(schoolClass)
      }
    })
  }

  ngOnDestroy() {
    // this.classSubscriber.unsubscribe()
  }

  add() {
    this.modalService.openModal({
      title: "Class Add",
      fields: [{
        title: "Class Name",
        name: "schoolClassName",
        type: "text",
        value: ""
      }, {
        title: "Teacher id",
        name: "teacherId",
        type: "number",
        value: ""
      }],
      formName: "add_class"
    })
  }

  getData() {
    this.classes = []
    this.http.get(this.mainPath.concat('getAll'))
      .subscribe((response: any) => {
        response.schoolClasses.forEach((schoolClass: any) => {
          this.classes.push(new Class(schoolClass.schoolClassId, schoolClass.schoolClassName, schoolClass.teacher, schoolClass.students))
        })
      });
  }

  delete(schoolClassId: number) {
    this.http.get(this.mainPath.concat('delete/').concat(String(schoolClassId)))
      .subscribe({
        next: (data) => {
          this.getData()
        },
        error: (data) => {
          alert(data.error)
        }
      })
  }

  put(schoolClass: Class) {
    this.http.post(this.mainPath.concat('create'), schoolClass)
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
