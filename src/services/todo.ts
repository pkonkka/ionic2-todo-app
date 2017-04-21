import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { UserService } from './user';

@Injectable()
export class TodoService {

    constructor(private http: Http, private userService: UserService) {}

    // -------------------------------------------------------------
    getAllTodos() {

        console.log('getalltodos token', this.userService.token);

        let headers = new Headers();
        headers.append('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGY0NzQ0NjJkYTE1MjAwMTFmNjRhMzEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDkyNzQ5MjQ0fQ.rLm9Abuxgb2mSxdoo98G6JyQNf_EvyIaWrnc367WsPY')

        return this.http.get('https://tranquil-bayou-77212.herokuapp.com/todos', 
            headers)
            .map(this.extractData)
            .catch(this.handleError);    
    }

    // -------------------------------------------------------------
    private extractData(res: Response) {
        let body = res.json();
        return body.todos || {};
    }

    // -------------------------------------------------------------
    private handleError(error: Response | any) {
        let errMsg = `${error.status} - ${error.statusText}`;
        return Observable.throw(errMsg);
    }

}