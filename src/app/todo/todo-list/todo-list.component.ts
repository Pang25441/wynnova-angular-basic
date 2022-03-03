import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: Todo[]
  @Output() onDeleted: EventEmitter<any> = new EventEmitter()

  constructor(private http: HttpClient) {
    this.todoList = []
  }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    if(!confirm("Are you sure?")) {
      return
    }
    this.http.delete(environment.endpoint + "todo/"+id).subscribe(
      (response: any) => {
        if(response.status == '200') {
          alert('Success')
          this.onDeleted.emit(true)
        } else {
          alert('delete fail')
        }
      }
    )
  }

}
