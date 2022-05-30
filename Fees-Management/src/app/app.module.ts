import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsWithoutBalanceComponent } from './students-without-balance/students-without-balance.component';
import { EditstudentComponent } from './students/editstudent/editstudent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { StudentdetailsComponent } from './students/studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SortPipe } from './Pipes/sort.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { StudentsWithBalanceComponent } from './students-with-balance/students-with-balance.component';
import { CanDeactivateService } from './Services/can-deactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddStudentComponent,
    StudentsWithBalanceComponent,
    StudentsWithoutBalanceComponent,
    EditstudentComponent,
    StudentsComponent,
    StudentdetailsComponent,
    PagenotfoundComponent,
    SortPipe,
    FilterPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [CanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
