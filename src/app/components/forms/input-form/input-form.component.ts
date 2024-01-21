import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {Form} from "../../../models/Form";
import {NgForOf, NgIf} from "@angular/common";



@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent implements OnInit {

  @ViewChildren('modalInput') modalInput:
    | QueryList<ElementRef<HTMLInputElement>>
    | undefined;

  modalOpened: boolean = false

  cfg: Form | null = null

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.input.subscribe((form: Form) => {
      this.modalOpened = true
      this.cfg = form
    })
  }

  submit() {
    let formValues: Record<string, any> = {};
    if (this.modalInput) {
      this.modalInput.forEach((element) => {
        formValues[element.nativeElement.name] = element.nativeElement.value;
      });

    }
    this.modalService.output.next({formName: this.cfg?.formName, values: formValues})
    this.modalOpened = false
  }
}
