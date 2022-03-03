import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodo(id:number) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.endpoint + 'todo/' + id).subscribe(
        (response: any) => {
          if(response.status == '200') {
            resolve(response.data)
          } else {
            reject()
          }
        },
        (error) => {
          reject()
        }
      )
    })
  }

  getTodoList() {

    return new Promise((resolve, reject) => {

      this.http.get(environment.endpoint + "todo").subscribe(
        (response: any) => {
          if(response.status == '200') {
            resolve(response.data)
          } else {
            reject()
          }
        }
      )

    })

  }

  saveTodo(todo: Todo) {
    return new Promise((resolve, reject)=> {
      this.http.post(environment.endpoint + "todo", todo).subscribe(
        (response: any) => {
          if(response.status == '200') {
            resolve(response.data)
          } else {
            reject()
          }
        }
      )
    })

  }

  deleteTodo(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.endpoint + "todo/"+id).subscribe(
        (response: any) => {
          if(response.status == '200') {
            resolve(true)
          } else {
            reject()
          }
        }
      )
    })
  }

  updateTodo(todo: Todo) {
    return new Promise((resolve, reject) => {
      this.http.put(environment.endpoint + 'todo/'+todo.id, todo).subscribe(
        (response: any) => {
          if(response.status == 200) {
            resolve(response.data)
          } else {
            reject()
          }
        }
      )
    })
  }
}
