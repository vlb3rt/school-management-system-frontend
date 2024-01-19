import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.css'
})
export class MainPanelComponent {

}
