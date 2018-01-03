"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
        this.url = 'http://95.85.29.229';
    }
    VideoService.prototype.getAll = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'token': sessionStorage.getItem('token') });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.url + '/api/v1/video', options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    VideoService.prototype.getById = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'token': sessionStorage.getItem('token') });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.url + '/api/v1/video/' + id, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    VideoService.prototype.upload = function (file) {
        var headers = new http_1.Headers({
            'token': sessionStorage.getItem('token')
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url + '/api/v1/uploadvideo', file, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
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
    VideoService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    VideoService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Rx_1.Observable.throw(error.message || error);
    };
    VideoService.prototype.transcript = function (transcript, videoId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'token': sessionStorage.getItem('token') });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url + '/api/v1/video/transcript', { videoId: videoId, transcript: transcript }, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    return VideoService;
}());
VideoService = __decorate([
    core_1.Injectable()
], VideoService);
exports.VideoService = VideoService;
