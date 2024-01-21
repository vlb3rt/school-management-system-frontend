import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subject} from "../../../models/Subject";
import { NgForOf, NgIf} from "@angular/common";
import {ModalService} from "../../../services/modal.service";
import {Subject as sub} from "rxjs"
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-subject-panel',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './subject-panel.component.html',
  styleUrl: './subject-panel.component.css'
})
export class SubjectPanelComponent implements OnInit, OnDestroy {

  private mainPath: string = 'http://localhost:8080/value/subject/'

  subjects: Subject[] = []

  subjectSubscriber: sub<any> = new sub()

  constructor(private modalService: ModalService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData();
    this.subjectSubscriber = this.modalService.output
    this.subjectSubscriber.subscribe((output: any) => {
      switch (output.formName) {
        case "add_subject":
          console.log(output)
          const subject = new Subject(
            output.values.subjectId,
            output.values.subjectName,
            output.values.subjectShortName)
          this.put(subject)
      }
    })
  }

  ngOnDestroy() {
    // this.subjectSubscriber.unsubscribe()
  }

  add() {
    this.modalService.openModal({
      title: "Subject Add",
      fields: [{
        name: "subjectName",
        type: "text",
        value: "",
        title: "Subject Name"
      }, {
        name: "subjectShortName",
        type: "text",
        value: "",
        title: "Subject Short Name"
      }],
      formName: "add_subject"
    })
  }

  getData(): void {
    this.subjects = []
    this.http.get(this.mainPath.concat('getAll'))
      .subscribe((response: any) => {
        response.subjects.forEach((subject: any) => {
          this.subjects.push(new Subject(subject.subjectId, subject.subjectName, subject.subjectShortName))
        })
      });
  }

  delete(subjectId: number): void {
    this.http.get(this.mainPath.concat('delete/').concat(String(subjectId)))
      .subscribe({
        next: (data) => {
          this.getData()
        },
        error: (data) => {
          alert(data.error)
        },
      })
  }

  put(subject: Subject) {
    this.http.post(this.mainPath.concat('create'), subject)
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
