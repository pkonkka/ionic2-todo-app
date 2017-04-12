import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { TodoService } from '../../services/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  allTodos: any;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAllTodos()
      .subscribe(
        todos => { 
          this.allTodos = todos;
          console.log(this.allTodos);
        });
  }
}
