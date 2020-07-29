import { Component, OnInit } from '@angular/core';
import {GlobalState} from '../../store/all.reducer';
import * as actions from '../../store/todo/todo.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  status = false;

  constructor( private store: Store<GlobalState> ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toggleAll() {
    this.status = !this.status;
    this.store.dispatch( actions.toggleAll({ status: this.status }) );
  }

}
