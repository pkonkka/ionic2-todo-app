import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MePage } from '../pages/me/me';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TodoPage } from '../pages/todo/todo';
import { TodoEditPage } from '../pages/todo-edit/todo-edit';
import { TodosPage } from '../pages/todos/todos';

import { TodoService } from '../services/todo';
import { UserService } from '../services/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MePage,
    SignupPage,
    TabsPage,
    TodoPage,
    TodoEditPage,
    TodosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MePage,
    SignupPage,
    TabsPage,
    TodoPage,
    TodoEditPage,
    TodosPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoService,
    UserService
  ]
})
export class AppModule {}
