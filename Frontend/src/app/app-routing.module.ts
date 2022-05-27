import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { HomeComponent } from './home/home.component';
import { ShowdoctorComponent } from './showdoctor/showdoctor.component';
import { ShowpatientComponent } from './showpatient/showpatient.component';

const routes: Routes = [
  {path:'', redirectTo:'/home' , pathMatch : 'full'},
  {path:'doctors/doctor/add' , component: CreatedoctorComponent},
  {path:'doctor/view' , component: ShowdoctorComponent},
  {path:'patients/patient/add' , component: CreatepatientComponent},
  {path:'patient/view' , component: ShowpatientComponent},
  {path:'**',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
