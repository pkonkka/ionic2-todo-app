import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Todo } from './todo';

@NgModule({
  declarations: [
    Todo,
  ],
  imports: [
    IonicModule.forChild(Todo),
  ],
  exports: [
    Todo
  ]
})
export class TodoModule {}
