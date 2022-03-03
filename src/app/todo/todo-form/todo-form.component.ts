import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  // @Output() onSave: EventEmitter<Todo>

  // name: string
  // title: string
  // date: string

  todo: Todo

  isLoggedIn: boolean = false
  loginNanme: string = ''

  isLoading: boolean = false

  constructor(private todoService: TodoService, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    // this.name = ''
    // this.title = ''
    // this.date = ''

    this.todo = new Todo
    // this.onSave = new EventEmitter()
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn
    this.loginNanme = this.userService.getName()
    // this.todo.name = this.loginNanme

    this.route.params.subscribe((params)=>{
      let id = params['tid']

      if(id) {
        // Update
        this.isLoading = true
        this.todoService.getTodo(id)
          .then((data: any)=>{
            this.todo = data
          })
          .catch(()=>{
            this.router.navigate(['/todo/list'])
          })
          .finally(()=>{
            this.isLoading = false
          })
      } else {
        // New
        this.todo = new Todo
        this.todo.name = this.loginNanme
      }
    })
  }

  onSaveTodo() {
    // console.log(this.todo)
    this.isLoading = true
    if(this.todo.id > 0) {
      this.todoService.updateTodo(this.todo)
        .then(()=>{
          this.router.navigate(['/todo/list'])
        }).finally(()=>{
          this.isLoading = false
        })
    } else {
      this.todoService.saveTodo(this.todo)
        .then(()=>{
          this.router.navigate(['/todo/list'])
        }).finally(()=>{
          this.isLoading = false
        })
    }
  }

  onReset() {
    this.todo = new Todo
    this.todo.name = this.loginNanme
  }

}
