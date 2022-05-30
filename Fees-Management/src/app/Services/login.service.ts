import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 loggedin:boolean=false
  constructor() { }
  login(){
    return this.loggedin = true
  }

  logout(){
    return this.loggedin=false
  }

  isloggedin(){
    return this.loggedin
  }
}
