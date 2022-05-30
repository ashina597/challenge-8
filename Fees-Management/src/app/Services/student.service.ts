import { Injectable } from '@angular/core';
import { studentInterface } from 'Interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students?:any[]=[
    {
      reg_no: 'BSCS/2019/43826',
      name:'Barasa Ashina',
      email: 'ashina@thejitu.com',
      phone_no:'0793878928',
      gender: 'female',
      balance:900,
      school:'School of Technology',
      course:'computer science'
    },
    {
      reg_no: 'BSCN/2020/44789',
      name:'Ivy Nyongesa',
      email: 'ivy@thejitu.com',
      phone_no:'0784793875',
      gender: 'female',
      balance:-700,
      school:'School of Nursing',
      course:'Nursing'
    },
    {
      reg_no: 'BBM/2020/47648',
      name:'Fatma Omar',
      email: 'fatma@thejitu.com',
      phone_no:'078479383',
      gender: 'female',
      balance:0,
      school:'School of Business',
      course:'Business'
    }
    ]
  constructor() { }
  getallstudents(){
    return this.students
  }
  getstudent(reg_no:string){
    return this.students?.find(student=>student.reg_no===reg_no)
   }

  // getstudentswithbalance(){
  //    return this.students?.find(student=>student.balance === 0)
  //  }

  //  getstudentswithoutbalance(){
  //    const balance = 0
  //   return this.students?.find(student=>student.balance <= 0)
  // }

   addstudent(reg_no:string, name:string, email:string, phone_no:string,
    gender:string, school:string, course:string){
      const balance =0
      this.students?.push({reg_no, name,email,phone_no, gender, balance, school,course})
   }

   deleteStudent(reg_no:string){
    const index:any = this.students?.findIndex(x=> x.reg_no===reg_no)
    this.students?.splice(index,1)
   }

   editStudent(reg_no:string, balance:number){
    const student = this.getstudent(reg_no)
    if (student){
      student.balance=balance
    }
    return student
   }
}
