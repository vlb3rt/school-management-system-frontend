import { Component, OnInit} from '@angular/core';
import { Subject} from "../../../models/Subject";
import { NgForOf, NgIf} from "@angular/common";
import { SubjectService } from "../../../services/subject.service";

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
export class SubjectPanelComponent implements OnInit {

  service: SubjectService;

  subjects: Subject[] = []

  constructor(service: SubjectService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.subjects = this.service.getData()
  }

}
