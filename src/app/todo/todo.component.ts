import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // todoListDummy: any[]
  isLoggedIn: boolean = false

  todoList: Todo[]

  constructor(private http: HttpClient, private userService: UserService) {
    // this.todoListDummy = [
    //   {title: 'AAAAAAAAAAAAAA', name: 'GGGG', date:'2022-03-03'},
    //   {title: 'BBBBBBBBBBBBBB', name: 'GGGG', date:'2022-03-03'},
    //   {title: 'CCCCCCCCCCCCCC', name: 'GGGG', date:'2022-03-03'},
    // ]

    this.todoList = []
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn

    this.userService.loginStatusChanged.subscribe(
      (status) => {
        this.isLoggedIn = status
      }
    )

    this.getTodoList()
  }

  getTodoList() {
    this.http.get("http://localhost:8000/api/todo").subscribe(
      (response: any) => {
        if(response.status == '200') {
          this.todoList = response.data
        } else {
          alert('Server fail')
        }
      }
    )
  }

  saveTodo(todoData: Todo) {
    this.todoList.push(todoData)
  }

  onTodoDeleted(event:any) {
    this.getTodoList()
  }

}
