import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { EventsComponent } from './components/events/events.component';
import { PlacementsComponent } from './components/placements/placements.component';
import { ImagesComponent } from './components/images/images.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { AdmissionComponent } from './components/admission/admission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FacultyComponent,
    EventsComponent,
    PlacementsComponent,
    ImagesComponent,
    CourseComponent,
    LoginComponent,
    StudentComponent,
    AdmissionComponent,
   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
