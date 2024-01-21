import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {SideMenuComponent} from "./components/side-menu/side-menu.component";
import {MainPanelComponent} from "./components/main-panel/main-panel.component";
import {InputFormComponent} from "./components/forms/input-form/input-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, SideMenuComponent, MainPanelComponent, InputFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school-management-system-front';
}
