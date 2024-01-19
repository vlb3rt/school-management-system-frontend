import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../models/Student";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-student-panel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './student-panel.component.html',
  styleUrl: './student-panel.component.css'
})
export class StudentPanelComponent implements OnInit {

  service: StudentService;

  students: Student[] = []

  constructor(service: StudentService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.students = this.service.getData()
  }
}

