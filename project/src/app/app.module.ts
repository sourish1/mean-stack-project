import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './dashboard/view/view.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { CompanyComponent } from './company/company.component';
import { CompanyRegisterComponent } from './company/company-register/company-register.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ViewComponent,
    LoginComponent,
    StudentComponent,
    CompanyComponent,
    CompanyRegisterComponent,
    CompanyDashboardComponent,
    StudentRegisterComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
