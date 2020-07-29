import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo.model';
import {todoFilter} from '../../store/filter/filter.action';
import {GlobalState} from '../../store/all.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filterActual: todoFilter;

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit(): void {
    this.store.select('todos')
      .subscribe( todos => this.todos = todos );
    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.filterActual = filter;
    });
  }

}
