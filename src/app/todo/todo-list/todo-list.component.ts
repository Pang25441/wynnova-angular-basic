import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // @Input() todoList: Todo[]
  // @Output() onDeleted: EventEmitter<any> = new EventEmitter()

  todoList: Todo[]

  isLoading: Boolean = false

  constructor(private todoService: TodoService) {
    this.todoList = []
  }

  ngOnInit(): void {
    this.getTodoList()
  }

  getTodoList() {
    this.isLoading = true
    this.todoService.getTodoList()
      .then((datalist: any)=>{
        this.todoList = datalist
      })
      .finally(()=>{
        this.isLoading = false
      })
  }

  onDelete(id: number) {
    if(!confirm("Are you sure?")) {
      return
    }
    this.todoService.deleteTodo(id).then(()=>{
      this.getTodoList()
    })
    .catch(()=>{
      alert("Delete fail")
    })
  }

}
