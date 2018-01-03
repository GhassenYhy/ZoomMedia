import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Video} from '../_models/Video';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {cleanSession} from "selenium-webdriver/safari";

@Injectable()
export class VideoService {
  private url = 'http://95.85.29.229';

  constructor(private http: Http) {
  }

  getAll() {
    const headers = new Headers({'Content-Type': 'application/json', 'token': sessionStorage.getItem('token')});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.url + '/api/v1/video', options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getById(id: string) {
    const headers = new Headers({'Content-Type': 'application/json', 'token': sessionStorage.getItem('token')});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.url + '/api/v1/video/' + id, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  upload(file: FormData) {
    const headers = new Headers({
      'token': sessionStorage.getItem('token')
    });
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/api/v1/uploadvideo', file, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  // create(detail: User) {
  //   return this.http.post('/api/users', detail);
  // }
  //
  // update(detail: User) {
  //   return this.http.put('/api/users/' + detail.id, detail);
  // }
  //
  // delete(id: number) {
  //   return this.http.delete('/api/users/' + id);
  // }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  transcript(transcript: string, videoId: string) {
    const headers = new Headers({'Content-Type': 'application/json', 'token': sessionStorage.getItem('token')});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/api/v1/video/transcript', {videoId: videoId, transcript: transcript}, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
}
