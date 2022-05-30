import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
  }
  login(){
    this.loginservice.login()

  }
  logout(){
    this.loginservice.logout()
  }

}
