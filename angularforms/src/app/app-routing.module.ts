import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { RegisterComponent } from './register/register.component';
import { Employee } from './employee';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'project',component:ProjectComponent},
  {path:'register',component:RegisterComponent},
  {path:'Employee',component:EmployeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
