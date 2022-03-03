import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() onSave: EventEmitter<Todo>

  // name: string
  // title: string
  // date: string

  todo: Todo

  isLoggedIn: boolean = false
  loginNanme: string = ''

  constructor() {
    // this.name = ''
    // this.title = ''
    // this.date = ''

    this.todo = new Todo
    this.onSave = new EventEmitter()
  }

  ngOnInit(): void {
    let isLogin = localStorage.getItem('isLogin')
    if(isLogin == '1') {
      this.isLoggedIn = true
      this.loginNanme = localStorage.getItem('name') || ''
      this.todo.name = this.loginNanme
    } else {
      this.isLoggedIn = false
    }
  }

  onSaveTodo() {
    // console.log(this.todo)

    this.onSave.emit({...this.todo})
    this.onReset()
  }

  onReset() {
    this.todo = new Todo
    this.todo.name = this.loginNanme
  }

}
