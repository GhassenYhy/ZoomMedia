import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }

  login(email: string, password: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post('http://95.85.29.229/api/v1/token', {email: email, password: password}, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return token ? true : false;
  }

  logout() {
    // remove detail from local storage to log detail out
    sessionStorage.removeItem('token');
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
