import { Routes } from '@angular/router';
import {SubjectPanelComponent} from "./components/sub-panels/subject-panel/subject-panel.component";
import {MainPanelComponent} from "./components/sub-panels/main-panel/main-panel.component";
import {TeacherPanelComponent} from "./components/sub-panels/teacher-panel/teacher-panel.component";
import {StudentPanelComponent} from "./components/sub-panels/student-panel/student-panel.component";
import {ClassPanelComponent} from "./components/sub-panels/class-panel/class-panel.component";

export const routes: Routes = [
  { path: '', component: MainPanelComponent },
  { path: 'teachers', component: TeacherPanelComponent },
  { path: 'students', component: StudentPanelComponent },
  { path: 'classes', component: ClassPanelComponent },
  { path: 'subjects', component: SubjectPanelComponent },
];
