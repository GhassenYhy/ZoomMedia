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
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://95.85.29.229/api/v1/token', { email: email, password: password }, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var token = sessionStorage.getItem('token');
        return token ? true : false;
    };
    AuthenticationService.prototype.logout = function () {
        // remove detail from local storage to log detail out
        sessionStorage.removeItem('token');
    };
    AuthenticationService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AuthenticationService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Rx_1.Observable.throw(error.message || error);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
