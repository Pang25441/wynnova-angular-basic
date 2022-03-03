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

  constructor() {
    // this.name = ''
    // this.title = ''
    // this.date = ''

    this.todo = new Todo
    this.onSave = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onSaveTodo() {
    // console.log(this.todo)

    this.onSave.emit({...this.todo})
  }

}
