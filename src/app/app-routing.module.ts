import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '', component: HelloWorldComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'todo', component: TodoComponent, children: [
    {path: 'list', component: TodoListComponent},
    {path: 'form', component:TodoFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
