import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TodoEdit } from './todo-edit';

@NgModule({
  declarations: [
    TodoEdit,
  ],
  imports: [
    IonicModule.forChild(TodoEdit),
  ],
  exports: [
    TodoEdit
  ]
})
export class TodoEditModule {}
