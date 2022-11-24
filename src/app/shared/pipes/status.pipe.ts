import { TodoStatus } from './../../core/interfaces/todo.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: TodoStatus, ...args: unknown[]): string {
    switch(value) {
      case 'IDLE':
        return 'Idle';
      case 'IN_PROGRESS':
        return 'In progress';
      case 'DONE':
        return 'Done';
      default:
        return '';
    }
  }

}
