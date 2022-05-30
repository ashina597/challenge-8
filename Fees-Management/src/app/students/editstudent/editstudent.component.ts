import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { studentInterface } from 'Interface/student';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  reg_no:string=''
  savedChanges:boolean = false
  student?:studentInterface
  @ViewChild('form') form!:NgForm
  constructor(private studentservice:StudentService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.reg_no = params['reg_no']
      this.student = this.studentservice.getstudent(this.reg_no)
  })
}

  onsubmit(){
    this.studentservice.editStudent(this.reg_no, this.form.value.balance)
    this.form.resetForm()
    this.savedChanges = true
    this.router.navigate(['students', this.reg_no])

  }

  canDeactivate():boolean | Observable<boolean> | Promise<boolean>{
    if(this.student?.balance===this.form.value.balance && !this.savedChanges){
      return confirm('Do you want to discard the changes')
    }
    else{
      return true
    }
  }
}

