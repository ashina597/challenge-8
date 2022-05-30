import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { studentInterface } from 'Interface/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  student?:studentInterface
  reg_no:string=''
  constructor(private studentservice:StudentService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
        this.route.params.subscribe((params:Params)=>{
        this.reg_no = params['reg_no']
        this.student = this.studentservice.getstudent(this.reg_no)
      })
}

  edit(){
    this.router.navigate(['edit'], {relativeTo:this.route})
  }

  delete(){
    this.route.params.subscribe((params:Params)=>{
    this.reg_no = params['reg_no']
    this.studentservice.deleteStudent(this.reg_no)
    this.router.navigate(['students'])
    })
  }
}
