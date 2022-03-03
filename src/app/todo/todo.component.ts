import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
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

  constructor(private userService: UserService, private router: Router) {
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

  }


  saveTodo(todoData: Todo) {
    this.todoList.push(todoData)
  }

  onTodoDeleted(event:any) {
    // this.getTodoList()
  }

  onLogout() {
    this.userService.logout()
    this.router.navigate(['/login'])
  }

}
