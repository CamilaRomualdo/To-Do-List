import { Component, OnInit } from '@angular/core';
import * as actionsF from '../../store/filter/filter.action';
import {GlobalState} from '../../store/all.reducer';
import {clearTodos} from '../../store/todo/todo.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filterActual: actionsF.todoFilter = 'todos';
  filters: actionsF.todoFilter[] = ['todos', 'done', 'pending'];
  pending = 0;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.store.select('filter')
      .subscribe( filter => this.filterActual = filter );
    this.store.subscribe( state => {
      this.filterActual = state.filter;
      this.pending = state.todos.filter( todo => !todo.status ).length;
    });
  }

  // tslint:disable-next-line:typedef
  changeFilter( filter: actionsF.todoFilter ) {
    this.store.dispatch( actionsF.setFilter({ filter }) );
  }

  // tslint:disable-next-line:typedef
  clearAll() {
    this.store.dispatch( clearTodos() );
  }
}
