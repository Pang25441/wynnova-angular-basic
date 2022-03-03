import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string = ''
  password: string = ''

  isLoggedIn: boolean = false

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn
  }

  onLogin() {
    if(this.userService.login(this.username, this.password)) {
      this.isLoggedIn = this.userService.isLoggedIn
      alert('Logged in')
      this.router.navigate(["/todo"])
    } else {
      this.isLoggedIn = this.userService.isLoggedIn
      alert("Please input username/password")
    }
  }

  onLogout() {
    this.userService.logout()
    this.isLoggedIn = this.userService.isLoggedIn
  }

}
