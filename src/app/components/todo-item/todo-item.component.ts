import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {GlobalState} from '../../store/all.reducer';
import * as actions from '../../store/todo/todo.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputI') inputItem: ElementRef;

  updating = false;
  statusForm: FormControl;
  editForm: FormControl;

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit(): void {
    this.statusForm = new FormControl(this.todo.status);
    this.editForm = new FormControl(this.todo.name, Validators.required);
    this.statusForm.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  // tslint:disable-next-line:typedef
  update() {
    this.updating = true;
    this.editForm.setValue(this.todo.name);
    setTimeout(() => {
      this.inputItem.nativeElement.select();
    }, 1);
  }

  // tslint:disable-next-line:typedef
  closeUpdate() {
    this.updating = false;
    if (this.editForm.invalid) {
      return;
    }
    if (this.editForm.value === this.todo.name) {
      return;
    }
    this.store.dispatch(
      actions.updateTodo({
        id: this.todo.id,
        name: this.editForm.value
      })
    );
  }

  // tslint:disable-next-line:typedef
  delete() {
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }

}
