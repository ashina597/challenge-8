import { Component, OnInit } from '@angular/core';
import { studentInterface } from 'Interface/student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],

})
export class StudentsComponent implements OnInit {
  students?:studentInterface[]=[]
  status:boolean=false
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentservice.getallstudents()
  }
  activate(status:boolean){
    this.status = status
    return this.status
  }

}
