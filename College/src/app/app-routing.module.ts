import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CourseComponent } from './components/course/course.component';
import { EventsComponent } from './components/events/events.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { LoginComponent } from './components/login/login.component';
import { PlacementsComponent } from './components/placements/placements.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "contactus", component: ContactusComponent},
  {path: "faculty", component: FacultyComponent},
  {path: "events", component: EventsComponent},
   {path: "placements", component: PlacementsComponent},
   {path: "images", component: ImagesComponent},
   {path: "course", component: CourseComponent},
   {path: "login", component: LoginComponent},
   {path: "student", component: StudentComponent},
   {path: "admission", component: AdmissionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
