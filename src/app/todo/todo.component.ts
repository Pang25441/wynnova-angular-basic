import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // todoListDummy: any[]
  isLoggedIn: boolean = false

  todoList: Todo[]

  constructor(private http: HttpClient) {
    // this.todoListDummy = [
    //   {title: 'AAAAAAAAAAAAAA', name: 'GGGG', date:'2022-03-03'},
    //   {title: 'BBBBBBBBBBBBBB', name: 'GGGG', date:'2022-03-03'},
    //   {title: 'CCCCCCCCCCCCCC', name: 'GGGG', date:'2022-03-03'},
    // ]

    this.todoList = []
  }

  ngOnInit(): void {
    let isLogin = localStorage.getItem('isLogin')
    if(isLogin == '1') {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }

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
