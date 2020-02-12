import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Routing/home/home.component';
import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { User2Component } from './user2/user2.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent,children:[{path:'about1',component:About1Component},
  {path:'about2',component:About2Component}]},
  {path:'contact',component:ContactComponent},
  {path:'Login',component:LoginComponent},
  {path:'user2',component:User2Component},
  {path:'',redirectTo:'login',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
