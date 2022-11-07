import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { CreatestudentComponent } from './components/createstudent/createstudent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
  {path:'create student',component:CreatestudentComponent},
  {path:'all students',component:AllstudentsComponent}
    
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
