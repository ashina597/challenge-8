import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  animations: [
    trigger('Trigger1',[
    state('mouseover',style({
      transform: 'scale(1.2)'
    })),
    state('mouseleave',style({
      transform: 'scale(1)'
    })),
    transition('mouseover <=> mouseleave', animate(500))
  ])
  ]
})
export class AddStudentComponent implements OnInit {
profile!:FormGroup
savedChanges:boolean=false
state:string=''
genders=['Male', 'Female', 'Other', 'Prefer not to say']
schools=['school of Business', 'school of Technology','school of Nursing']
courses=['Accounting', 'Business Management','Computer Science', 'IT', 'Hardware Engineering','Nursing']
  constructor(private studentservice:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.profile = new FormGroup({
      'reg_no':new FormControl(null, Validators.required),
      'name':new FormControl (null, Validators.required),
      'contactinfo': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^\"?[\w-_\.]*\"?@thejitu\.com$/)]),
        'phone_no': new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]),
      }),
      'school': new FormControl( 'select', [Validators.required, this.selectValidator]),
      'course': new FormControl( 'select', [Validators.required, this.selectValidator]),
      'gender': new FormControl('select', [Validators.required, this.selectValidator]),
    })
    console.log(this.profile);

  }

  selectValidator(control: FormControl): {[s:string]:boolean} | null
  {
    if (control.value==='select'){
      return {'notAllowed': true}
    }
    return null
  }

  onsubmit(){
    const reg_no = this.profile.value.reg_no
    const name = this.profile.value.name
    const email = this.profile.value.contactinfo.email
    const phone_no = this.profile.value.contactinfo.phone_no
    const gender = this.profile.value.gender
    const school = this.profile.value.school
    const course = this.profile.value.course
    this.studentservice.addstudent(reg_no, name, email, phone_no, gender, school, course)
    this.profile.reset()
    this.savedChanges=true

    const message = document.querySelector('.message') as HTMLSpanElement
    message.style.display='block'
    setTimeout(()=>{
      message.style.display='none'
      this.router.navigate(['students'])
    },1000)
  }

  canDeactivate():boolean | Observable<boolean> | Promise<boolean>{
    if((this.profile.valid && !this.savedChanges) || (this.profile.invalid && this.profile.touched)){
      return confirm('Do you want to discard the changes')
    }
    else{
      return true
    }
  }

  OnMouseover(){
    this.state='mouseover'
  }

  OnMouseleave(){
    this.state='mouseleave'
  }

}
