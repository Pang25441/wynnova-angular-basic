import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn: boolean =  false

  loginStatusChanged: EventEmitter<any> = new EventEmitter()

  constructor() {
    this.checkLogin()
  }

  checkLogin() {
    this.isLoggedIn = (localStorage.getItem('isLogin')=='1') ? true : false
  }

  getName() {
    let name = localStorage.getItem('name') || ''
    return name
  }

  login(username:string, password:string) {
    if(username.trim().length > 0 && password.trim().length > 0) {

      localStorage.setItem('isLogin', '1')
      localStorage.setItem('name', username)

      this.isLoggedIn = true

      this.loginStatusChanged.emit(this.isLoggedIn)

      return true
    } else {
      this.isLoggedIn = false
      this.loginStatusChanged.emit(this.isLoggedIn)
      return false

    }
  }

  logout() {
    // localStorage.clear()
    localStorage.removeItem('isLogin')
    this.isLoggedIn = false
    this.loginStatusChanged.emit(this.isLoggedIn)
  }
}
