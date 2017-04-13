import { Component, OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';

import { Todo } from '../../models/todo';

import { TodoService } from '../../services/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  allTodos: Todo[] = [];
  filteredTodos: Todo[] = [];

  constructor(private todoService: TodoService, private loadingCtrl: LoadingController) {}

  // ------------------------------------------------------------------
  ngOnInit() {

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
