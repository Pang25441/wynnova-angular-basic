import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private http: HttpClient, private userService: UserService) {
    // this.name = ''
    // this.title = ''
    // this.date = ''

    this.todo = new Todo
    this.onSave = new EventEmitter()
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn
    this.loginNanme = this.userService.getName()
    this.todo.name = this.loginNanme
  }

  onSaveTodo() {
    // console.log(this.todo)

    this.http.post("http://localhost:8000/api/todo", this.todo).subscribe(
      (response: any) => {
        console.log(response)
        this.onSave.emit(response.data)
      }
    )


    this.onReset()
  }

  onReset() {
    this.todo = new Todo
    this.todo.name = this.loginNanme
  }

}
