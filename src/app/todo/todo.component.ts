import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoListDummy: any[]

  constructor() {
    this.todoListDummy = [
      {title: 'AAAAAAAAAAAAAA', name: 'GGGG', date:'2022-03-03'},
      {title: 'BBBBBBBBBBBBBB', name: 'GGGG', date:'2022-03-03'},
      {title: 'CCCCCCCCCCCCCC', name: 'GGGG', date:'2022-03-03'},
    ]
  }

  ngOnInit(): void {
  }

  saveTodo(todoData: Todo) {
    let fff = todoData
    this.todoListDummy.push(fff)
  }

}
