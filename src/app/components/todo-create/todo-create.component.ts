import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {GlobalState} from '../../store/all.reducer';
import * as actions from '../../store/todo/todo.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  nameForm: FormControl;

  constructor(private store: Store<GlobalState>) {
    this.nameForm = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createT() {
    if (this.nameForm.invalid) {
      return;
    }
    this.store.dispatch(actions.createTodo({name: this.nameForm.value}));
    this.nameForm.reset();
  }
}
