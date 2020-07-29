import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoComponent} from '../components/todo/todo.component';
import {TodoFooterComponent} from '../components/todo-footer/todo-footer.component';
import {TodoListComponent} from '../components/todo-list/todo-list.component';
import {TodoCreateComponent} from '../components/todo-create/todo-create.component';
import {TodoItemComponent} from '../components/todo-item/todo-item.component';
import {TodoFilterPipe} from '../pipes/todo-filter.pipe';

@NgModule({
  declarations: [
    TodoComponent,
    TodoCreateComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoComponent,
    TodoFilterPipe
  ],
  entryComponents: []
})
export class TodoModule {
}
