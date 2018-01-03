"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DetailComponent = (function () {
    function DetailComponent(route, location, videoService, myPlayerService, authService, router) {
        this.route = route;
        this.location = location;
        this.videoService = videoService;
        this.myPlayerService = myPlayerService;
        this.authService = authService;
        this.router = router;
        this.userImg2 = require('../app/demo_img/user-1.png');
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getVideo();
    };
    DetailComponent.prototype.editTr = function () {
        console.log("ddddddddd");
        this.videoService.transcript(this.video.Transcript, this.video._id)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    DetailComponent.prototype.getVideo = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        console.log('aa=' + id);
        this.videoService.getById(id).subscribe(function (video) {
            _this.video = video;
            if (!!_this.myPlayerService.myPlayer) {
                _this.myPlayerService.myPlayer.dispose();
            }
            _this.myPlayerService.myPlayer = amp('vid1', {
                /* Options */
                'nativeControlsForTouch': false,
                autoplay: false,
                controls: true,
                width: '780',
                height: '460',
                poster: ''
            }, function () {
                console.log('Good to go!');
                // add an event listener
                this.addEventListener('ended', function () {
                    console.log('Finished!');
                });
            });
            _this.myPlayerService.myPlayer.src([{
                    src: 'http://95.85.29.229' + _this.video.VideoUrl,
                    type: 'video/mp4'
                }]);
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        selector: 'app-detail',
        templateUrl: 'detail.component.html'
    })
], DetailComponent);
exports.DetailComponent = DetailComponent;
