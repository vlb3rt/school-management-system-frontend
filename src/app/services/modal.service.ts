import { Injectable } from '@angular/core'
import {Subject} from "rxjs"
import {Form} from "../models/Form"

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  input: Subject<Form> = new Subject<Form>()
  output: Subject<any> = new Subject()

  constructor() { }

  public openModal(config: Form) {
    this.input.next(config)
  }
}
