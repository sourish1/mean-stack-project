import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './dashboard/view/view.component';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { CompanyRegisterComponent } from './company/company-register/company-register.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/view', component: ViewComponent, pathMatch: 'full' },
  { path: 'company', component: CompanyComponent, children: [
    { path: 'register', component: CompanyRegisterComponent, pathMatch: 'full' },
    { path: 'dashboard', component: CompanyDashboardComponent, pathMatch: 'full' }
  ] },
  { path: 'student', component: StudentComponent, children: [
    { path: 'register', component: StudentRegisterComponent, pathMatch: 'full' },
    { path: 'dashboard', component: StudentDashboardComponent, pathMatch: 'full' }
  ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
