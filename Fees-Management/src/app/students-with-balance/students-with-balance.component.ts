import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { studentInterface } from 'Interface/student';
import { StudentService } from '../Services/student.service';


@Component({
  selector: 'app-students-with-balance',
  templateUrl: './students-with-balance.component.html',
  styleUrls: ['./students-with-balance.component.css']
})
export class StudentsWithBalanceComponent implements OnInit {
  students?:studentInterface[]=[]
  searchstring=''
  constructor(private studentservice:StudentService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.students = this.studentservice.getallstudents()
  }

}
