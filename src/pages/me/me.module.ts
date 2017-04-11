import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Me } from './me';

@NgModule({
  declarations: [
    Me,
  ],
  imports: [
    IonicModule.forChild(Me),
  ],
  exports: [
    Me
  ]
})
export class MeModule {}
