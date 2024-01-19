import { Component, OnInit } from '@angular/core';
import { Class } from "../../../models/Class";
import { NgForOf } from "@angular/common";
import { ClassService } from "../../../services/class.service";

@Component({
  selector: 'app-class-panel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './class-panel.component.html',
  styleUrl: './class-panel.component.css'
})
export class ClassPanelComponent implements OnInit {

  service: ClassService

  classes: Class[] = []

  constructor(service: ClassService) {
    this.service = service
  }

  ngOnInit() {
    this.getData()
  }

  getData(): void {
    this.classes = this.service.getData()
  }
}
