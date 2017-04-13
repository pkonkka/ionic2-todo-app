import { Component, OnInit } from '@angular/core';

// import { Observable } from 'rxjs/Rx';
import { Todo } from '../../models/todo';

import { TodoService } from '../../services/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  allTodos: Todo[] = [];
  filteredTodos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  // ------------------------------------------------------------------
  ngOnInit() {
    this.todoService.getAllTodos()
      .subscribe(
        todos => { 
          this.allTodos = this.filteredTodos = todos;
          this.filterOutCompletedTasks();
        });
  }

  // ------------------------------------------------------------------
  filterOutCompletedTasks() {

    this.filteredTodos = this.allTodos.filter(function (todo) {
      return !todo.completed;
    });

  }

}
