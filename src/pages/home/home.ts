import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

import { Todo } from '../../models/todo';

import { UserService } from '../../services/user';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  allTodos: Todo[] = [];
  filteredTodos: Todo[] = [];

  constructor(
    private userService: UserService,
    private todoService: TodoService, 
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {}

  // ------------------------------------------------------------------
  ngOnInit() {

    this.userService.login('petri@petri.com', '12345abcde')
      .subscribe(
        res => {
          console.log('res', res);
        },
        (errMsg) => console.log(errMsg)
      );
  
    const loader = this.loadingCtrl.create({
      content: 'Wait a moment...'
    });
    loader.present();
    this.todoService.getAllTodos()
      .subscribe(
        todos => { 
          this.allTodos = this.filteredTodos = todos;
          this.filterOutCompletedTasks();
          loader.dismiss();
        }, errMsg => {
          loader.dismiss();          
          
          let toast = this.toastCtrl.create({
            message: errMsg,            
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        });
  }

  // ------------------------------------------------------------------
  filterOutCompletedTasks() {

    this.filteredTodos = this.allTodos.filter(function (todo) {
      return !todo.completed;
    });

  }

  // ------------------------------------------------------------------
  onComplete(index: number) {
    console.log(this.filteredTodos[index]);
    this.filteredTodos.splice(index, 1);
  }

}
