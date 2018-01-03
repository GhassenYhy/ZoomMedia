"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_component_1 = require("../login/login.component");
var authentication_service_1 = require("../_services/authentication.service");
var video_service_1 = require("../_services/video.service");
var myPlayer_service_1 = require("../_services/myPlayer.service");
var media_component_1 = require("../Media/media.component");
var detail_component_1 = require("../detail/detail.component");
var home_component_1 = require("../home/home.component");
var angular_progress_http_1 = require("angular-progress-http");
var auth_guard_service_1 = require("../_services/auth-guard.service");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    // { path: 'custom1', component: Custom1Component },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_service_1.AuthGuardService],
        children: [
            { path: 'media', component: media_component_1.MediaComponent },
            { path: 'media/:id', component: detail_component_1.DetailComponent }
        ] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            media_component_1.MediaComponent,
            detail_component_1.DetailComponent,
            home_component_1.HomeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_progress_http_1.ProgressHttpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [authentication_service_1.AuthenticationService, video_service_1.VideoService, myPlayer_service_1.MyPlayerService, auth_guard_service_1.AuthGuardService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
