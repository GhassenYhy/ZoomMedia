"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MediaComponent = (function () {
    function MediaComponent(router, videoService) {
        this.router = router;
        this.videoService = videoService;
        this.videos = [];
    }
    MediaComponent.prototype.ngOnInit = function () {
        this.loadAllVideos();
    };
    MediaComponent.prototype.redirect = function (id) {
        this.router.navigate(['/home/media/' + id]);
    };
    MediaComponent.prototype.loadAllVideos = function () {
        var _this = this;
        this.videoService.getAll().subscribe(function (videos) {
            _this.videos = videos;
        });
    };
    return MediaComponent;
}());
MediaComponent = __decorate([
    core_1.Component({
        selector: 'app-media',
        templateUrl: 'media.component.html'
    })
], MediaComponent);
exports.MediaComponent = MediaComponent;
