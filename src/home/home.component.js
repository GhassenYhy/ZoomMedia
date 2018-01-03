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
var HomeComponent = (function () {
    function HomeComponent(router, authenticationService, videoService, http) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.videoService = videoService;
        this.http = http;
        this.userImg = require('../app/demo_img/user-1.png');
        this.logo2 = require('../app/img/logo.png');
        this.model = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.progress = 0;
    };
    HomeComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.upload = function () {
        var _this = this;
        console.log('clicked');
        if (this.filelist.length > 0) {
            console.log('passed!');
            var file = this.filelist[0];
            var formData = new FormData();
            formData.append('file', file);
            var headers = new http_1.Headers({ 'token': sessionStorage.getItem('token') });
            var options = new http_1.RequestOptions({ headers: headers });
            this.http
                .withUploadProgressListener(function (progress) {
                _this.progress = progress.percentage;
            })
                .withDownloadProgressListener(function (progress) {
                console.log('Downloading ${progress.percentage}%');
            })
                .post('http://95.85.29.229/api/v1/uploadvideo', formData, options)
                .subscribe(function (response) {
                _this.progress = 0;
                _this.router.navigateByUrl('/loading', { skipLocationChange: true }).then(function () { return _this.router.navigate(['/home/media']); });
            });
        }
    };
    HomeComponent.prototype.fileChange = function (event) {
        this.filelist = event.target.files;
        console.log(this.filelist);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html'
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
