import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class AuthService {

    // token: string;

    // constructor(private http: Http) {}    

    // -------------------------------------------------------------------
    // signUp(email: string, password: string) {
        // let headers = new Headers({ 'Content-Type': 'application/json', 'x-auth': this.token});
        // let options = new RequestOptions({ headers: headers});

        // return this.http.post('https://tranquil-bayou-77212.herokuapp.com/user', {email, password}, options)
        //     .map(res => res.json())
        //     .catch(this.handleError);    
        
    // }

    // -------------------------------------------------------------------
    // login(email: string, password: string) {

    // }

    // -------------------------------------------------------------------
    // logout() {

    // }

    // -------------------------------------------------------------------
    // getMe() {

    // }
    
    // // -------------------------------------------------------------
    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body.todos || {};
    // }

    // -------------------------------------------------------------
    // private handleError(error: Response | any) {
        // let errMsg: string;

        // if (error instanceof Response) {
        //     const body = error.json || '';
    
        //     const err = body || JSON.stringify(body);
        //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        // } else {
        //     errMsg = error.message ? error.message: error.toString();
        // }

        // console.log(errMsg);

        // return Observable.throw(errMsg);
    // }    
    
}