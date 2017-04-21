import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService {

    token = '';

    // ---------------------------------------------------------
    constructor(private http: Http) {}


    // ---------------------------------------------------------
    signup(email: string, password: string) {

        return this.http.post('https://tranquil-bayou-77212.herokuapp.com/users', {
                email: email,
                password: password
            })
            .map(this.extractData)
            .catch(this.handleError);
    }


    // ---------------------------------------------------------
    login(email: string, password: string) {

        let headers = new Headers();
        headers.append('Access-Control-Expose-Headers', 'x-auth');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        // let options = new RequestOptions({ headers: headers });
        console.log('0');

        return this.http.post('https://tranquil-bayou-77212.herokuapp.com/users/login', {
            email: email,
            password: password
            }, headers)
            .map(this.extractLoginData)
            .catch(this.handleError);
        
    }

    // ---------------------------------------------------------
    getMe() {
        console.log('1');
        console.log(this.token);        
        if (this.token) {
        console.log('2');

            let headers = new Headers();
            headers.append('x-auth', this.token);

            console.log('getMe service', headers);

            // return this.http.get('https://tranquil-bayou-77212.herokuapp.com/users/me')
            //     .map(this.extractData)
            //     .catch(this.handleError);
            
        }
    }


    // ---------------------------------------------------------
    logout() {
        let headers = new Headers();
        headers.append('x-auth', this.token);

        return this.http.delete('https://tranquil-bayou-77212.herokuapp.com/users/me', headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // -------------------------------------------------------------
    private extractLoginData(res: Response) {
        this.token = res.headers.get('x-auth');
        let body = res.json();

        return body || {};
    }

    // -------------------------------------------------------------
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    

    // -------------------------------------------------------------
    private handleError(error: Response | any) {
        let errMsg = `${error.status} - ${error.statusText}`;
        return Observable.throw(errMsg);
    }    

}