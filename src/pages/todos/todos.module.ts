import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Todos } from './todos';

@NgModule({
  declarations: [
    Todos,
  ],
  imports: [
    IonicModule.forChild(Todos),
  ],
  exports: [
    Todos
  ]
})
export class TodosModule {}
