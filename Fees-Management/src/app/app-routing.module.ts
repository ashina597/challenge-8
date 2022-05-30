import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { CanDeactivateService } from './Services/can-deactivate.service';
import { StudentsWithBalanceComponent } from './students-with-balance/students-with-balance.component';
import { StudentsWithoutBalanceComponent } from './students-without-balance/students-without-balance.component';
import { EditstudentComponent } from './students/editstudent/editstudent.component';
import { StudentdetailsComponent } from './students/studentdetails/studentdetails.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
{path:'', component:HomeComponent, data: { animation: 'home' }},
{path:'addstudent', canDeactivate:[CanDeactivateService], component:AddStudentComponent, canActivate:[AuthGuardService], data: { animation: 'addstudent' }},
{path:'students',canActivateChild:[AuthGuardService], data: { animation: 'students' }, component:StudentsComponent, children:[
  {path:':reg_no', component:StudentdetailsComponent},
  {path:':reg_no/edit', canDeactivate:[CanDeactivateService], component:EditstudentComponent}
]},
{path:'studentsWithBalance', component:StudentsWithBalanceComponent, data: { animation: 'studentswithbalance' }},
{path:'studentsWithoutBalance', component:StudentsWithoutBalanceComponent, data: { animation:'studentswithoutbalance'}},
{path:'notfound', component:PagenotfoundComponent},
{path:'**', redirectTo:'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
