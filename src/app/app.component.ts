import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {SideMenuComponent} from "./components/side-menu/side-menu.component";
import {MainPanelComponent} from "./components/main-panel/main-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, SideMenuComponent, MainPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school-management-system-front';
}
