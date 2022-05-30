import { Component, OnInit } from '@angular/core';
import { studentInterface } from 'Interface/student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-students-without-balance',
  templateUrl: './students-without-balance.component.html',
  styleUrls: ['./students-without-balance.component.css']
})
export class StudentsWithoutBalanceComponent implements OnInit {
  students?:studentInterface[]=[]
  searchstring=''
  constructor(private studentservices:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentservices.getallstudents()
  }

}
