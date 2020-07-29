import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../models/todo.model';
import {todoFilter} from '../store/filter/filter.action';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: todoFilter): Todo[] {

    switch (filter) {
      case 'done':
        return todos.filter(todo => todo.status);
      case 'pending':
        return todos.filter(todo => !todo.status);
      default:
        return todos;
    }
  }
}
