import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './Taskmanager/addtask/addtask.component';
import { ViewtaskComponent } from './Taskmanager/viewtask/viewtask.component';


const routes: Routes = [{path:'addtask',component:AddtaskComponent},
{path:'viewtask',component:ViewtaskComponent},
{path:'',redirectTo:'addtask',pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
