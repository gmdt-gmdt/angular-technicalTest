import { Component, OnInit } from '@angular/core';
import { Todo } from '@app/core/interfaces/todo.interface';
import { TodoService } from '@app/core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
  ) { }

  public ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
        this.todos = todos.map((todo: Todo) => {
          if (todo.task.length > 80) {
            return {
              ...todo,
              task: `${todo.task}...`
            }
          } else {
            return todo;
          }
        });
    });
  }

  public delete(
    id: number
  ): void {
    this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
  }

  public start(
    id: number
  ): void {
    this.todos = this.todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: 'IN_PROGRESS'
        }
      } else {
        return todo;
      }
    })
  }

  public done(
    id: number
  ): void {
    this.todos = this.todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: 'DONE'
        }
      } else {
        return todo;
      }
    })
  }

  public trackByFn(index: number, item: any): number {
    return item.id || index;
  }

}
