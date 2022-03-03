import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string = ''
  password: string = ''

  isLoggedIn: boolean = false

  constructor() { }

  ngOnInit(): void {
    let isLogin = localStorage.getItem('isLogin')
    if(isLogin == '1') {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  onLogin() {
    // console.log(this.username, this.password)
    if(this.username.trim().length > 0 && this.password.trim().length > 0) {

      localStorage.setItem('isLogin', '1')
      localStorage.setItem('name', this.username)
      this.isLoggedIn = true

      alert('Logged in')

    } else {
      alert("Please input username/password")
    }
  }

  onLogout() {
    // localStorage.clear()
    localStorage.removeItem('isLogin')
    this.isLoggedIn = false
  }

}
