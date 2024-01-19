import { Component, OnInit } from '@angular/core';
import { Teacher } from "../../../models/Teacher";
import { NgForOf } from "@angular/common";
import { TeacherService } from "../../../services/teacher.service";


@Component({
  selector: 'app-teacher-panel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './teacher-panel.component.html',
  styleUrl: './teacher-panel.component.css'
})
export class TeacherPanelComponent implements OnInit {

  service: TeacherService;

  teachers: Teacher[] = []

  constructor(service: TeacherService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.teachers = this.service.getData()
  }
}


