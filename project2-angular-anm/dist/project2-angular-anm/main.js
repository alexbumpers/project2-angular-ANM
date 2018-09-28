(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app-routing.module.ts":
/*!***********************************!*\
  !*** ./src/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _app_components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/components/profile-page/profile-page.component */ "./src/app/components/profile-page/profile-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _app_components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _app_components_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _app_components_user_live_search_user_live_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/components/user-live-search/user-live-search.component */ "./src/app/components/user-live-search/user-live-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: src_app_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'edit', component: _app_components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"] },
    { path: 'profile', component: _app_components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__["ProfilePageComponent"] },
    { path: 'users', component: _app_components_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"] },
    { path: 'search', component: _app_components_user_live_search_user_live_search_component__WEBPACK_IMPORTED_MODULE_8__["UserLiveSearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-register></app-register> -->\r\n<!-- <nav>\r\n    <a routerLink=\"/login\">Login</a>\r\n    <a routerLink=\"/register\">Register</a>\r\n    <a routerLink=\"/edit\">Edit</a>\r\n  </nav> -->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'project2-angular-anm';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app-routing.module.ts");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "./src/app/components/profile-page/profile-page.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _components_user_live_search_user_live_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-live-search/user-live-search.component */ "./src/app/components/user-live-search/user-live-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__["MyProfileComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePageComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _components_user_live_search_user_live_search_component__WEBPACK_IMPORTED_MODULE_15__["UserLiveSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ],
            providers: [_services_register_service__WEBPACK_IMPORTED_MODULE_14__["RegisterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\r\n    background-image:  linear-gradient(to right, rgba(32,1,34, 0.5) -23.76%, rgba(111,0,0, 0.4) 76.43%), url(https://images.unsplash.com/photo-1527862345617-bdedfa6392dd?ixlib=rb-0.3.5&s=a546b9c2ea5bcdadb669b1dab64155e5&auto=format&fit=crop&w=1950&q=80);\r\n    background-position: center center;\r\n    background-repeat:  no-repeat;\r\n    background-attachment: fixed;\r\n    background-size:  cover;\r\n    font-family: 'Montserrat', sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    /* background: -webkit-linear-gradient(to right, #200122, #6f0000); Chrome 10-25, Safari 5.1-6 */\r\n    /* background: linear-gradient(to right, rgba(32,1,34, 0.6) 0%, rgba(111,0,0, 0.6) 0%); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    /* background-color: rgba(0, 0, 0, .5); */\r\n    height: 100vh;\r\n    \r\n}\r\n\r\n\r\n#loginContainer {\r\n    color: white;\r\n}\r\n\r\n\r\n#about-text {\r\n    color: white;\r\n    text-shadow:\r\n    -1px -1px 0 #000,\r\n    1px -1px 0 #000,\r\n    -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n}\r\n\r\n\r\n#registerLink {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n\r\n#container {\r\n    margin-top: 100px;\r\n}\r\n\r\n\r\n.btn-primary {\r\n    background-color: #1DB954;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding-left: 35px;\r\n    padding-right: 35px;\r\n    transition: -webkit-transform .3s ease-out;\r\n    transition: transform .3s ease-out;\r\n    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\r\n}\r\n\r\n\r\n.btn-primary:hover {\r\n    -webkit-transform: translateY(-5px);\r\n            transform: translateY(-5px);\r\n}\r\n\r\n\r\n#emailInput {\r\n    transition: -webkit-transform .3s ease-out;\r\n    transition: transform .3s ease-out;\r\n    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\r\n}\r\n\r\n\r\n#emailInput:hover {\r\n    -webkit-transform: translate(5px, -5px);\r\n            transform: translate(5px, -5px)\r\n}\r\n\r\n\r\n#passwordInput {\r\n    transition: -webkit-transform .3s ease-out;\r\n    transition: transform .3s ease-out;\r\n    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\r\n}\r\n\r\n\r\n#passwordInput:hover {\r\n    -webkit-transform: translate(5px, -5px);\r\n            transform: translate(5px, -5px)\r\n}\r\n\r\n\r\n#home-subheader-body {\r\n    font-size: 22px;\r\n}\r\n\r\n\r\n#brand-name {\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"main\">\r\n  <br>\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\">\r\n\r\n<br>\r\n<div class=\"container\" id=\"container\">\r\n<div class=\"row\">\r\n<div class=\"container text-center col-md-6\" id=\"loginContainer\">\r\n<h1 id=\"loginHeader\"> Sign in</h1>\r\n<!-- Use ngSubmit to run checkLogin() on submit -->\r\n<!-- checkLogin will manage credential checking w/ DB and routing -->\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"checkLogin()\">\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"emailAddress\">Email address</label>\r\n    <input type=\"email\" formControlName=\"emailAddress\" class=\"form-control\" id=\"emailInput\"/>\r\n    <div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"passwordInput\"/>\r\n    <div>\r\n    </div>\r\n  </div>\r\n\r\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"Sign in\">\r\n\r\n</form>\r\n<br>\r\n<a href=\"/register\" id=\"registerLink\">\r\n<div>\r\n  Not registered? Create an account.\r\n</div>\r\n</a>\r\n</div>\r\n\r\n<div class=\"container text-left col-md-6\" id=\"about-text\">\r\n<div id=\"home-subheader\">\r\n    <h2>Your music, your matches</h2>\r\n</div>\r\n<div id=\"home-subheader-body\">\r\n<p>MBSN connects and matches you with people in your area based on your music taste using Spotify's Web API and proprietary matching technology.</p>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/navbar.service */ "./src/app/services/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sessionService, nav) {
        this.userService = userService;
        this.router = router;
        this.sessionService = sessionService;
        this.nav = nav;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.nav.hide();
    };
    LoginComponent.prototype.checkLogin = function () {
        var _this = this;
        var email = this.loginForm.get("emailAddress").value;
        var password = this.loginForm.get("password").value;
        var id = null;
        // console.log(email);
        // console.log(password);
        var promise = new Promise(function (resolve) {
            resolve(_this.userService.getUser(email, password));
        });
        promise.then(function (value) {
            _this.user = value;
            // console.log(this.user.password);
            if (_this.user.password === password) {
                id = _this.user.id;
            }
            if (id != null) {
                _this.sessionService.changeMessage(id);
                sessionStorage.id = JSON.stringify(id);
                _this.router.navigateByUrl("/profile");
            }
        });
        // if(id != -1){
        //   promise = new Promise<Users>((resolve) => {
        //     resolve(this.userService.loginValid(id));
        //   });
        // }
        // promise.then((value)=>{
        //   if(value.id == id){
        //     console.log("cool");
        //     this.router.navigateByUrl("/profile");
        //   }
        // })
        // this.userService.getUser(email, password)subscribe((value) =>{
        //   console.log(value);
        // });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _services_session_service_service__WEBPACK_IMPORTED_MODULE_4__["SessionServiceService"],
            src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n#fileLabel {\r\n        /* border: 1px solid #ccc; */\r\n        border-radius: 50%;\r\n        /* padding: 50px 12px; */\r\n        /* cursor: pointer;\r\n        background-color: black; */\r\n        /* display: none; */\r\n    \r\n        /* margin: 0; */\r\n        padding-top: 50px;\r\n        padding-bottom: 50px;\r\n        padding-left: 50px;\r\n        padding-right: 50px;\r\n        border: none;\r\n        box-shadow: none;\r\n        text-align: center;\r\n        /* background-color: black; */\r\n        background-image: url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png);\r\n        display: inline-block;\r\n        background-clip: padding-box;\r\n        background-size: cover;\r\n        background-position: center center;\r\n}\r\n\r\n\r\n\r\n#fileLabel:hover {\r\n    background-image: url(http://free-icon-rainbow.com/i/icon_00155/icon_001550_256.png);\r\n    transition: .7s;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<br>\r\n<div class=\"container text-center\" id=\"editProfileContainer\">\r\n<h2 id=\"editProfileHeader\"> Edit Profile </h2>\r\n<form [formGroup]=\"editProfileForm\" action=\"profile\">\r\n  <div class=\"form-group text-center\">\r\n      <img *ngIf=\"url\" width=300 height=300 src=\"{{url}}\" />\r\n    <label id=\"fileLabel\" for=\"avatar\">\r\n    <input type=\"file\"\r\n            id=\"avatar\" name=\"avatar\"\r\n            accept=\"image/png, image/jpeg\" />\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"firstName\">First name</label>\r\n    <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"/>\r\n    <div>\r\n   -->\r\n    <!-- </div>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"form-group text-left\">\r\n    <label for=\"lastName\">Last name</label>\r\n    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"/>\r\n    <div> -->\r\n      <!-- <div>Last name is required</div> -->\r\n    <!-- </div>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"form-group text-left\">\r\n    <label for=\"lastName\">Email</label>\r\n    <input type=\"email\" formControlName=\"emailAddress\" class=\"form-control\"/>\r\n    <div> -->\r\n      <!-- <div>Last name is required</div> -->\r\n    <!-- </div>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"form-group text-left\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\"/>\r\n    <div> -->\r\n      <!-- <div>Last name is required</div> -->\r\n    <!-- </div>\r\n  </div>\r\n\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"phoneNumber\">Phone number</label>\r\n    <input type=\"text\" formControlName=\"phoneNumber\" class=\"form-control\"/>\r\n    <div> -->\r\n      <!-- <div>Last name is required</div> -->\r\n    <!-- </div> -->\r\n  <!-- </div> -->\r\n\r\n  <!-- <div class=\"form-group text-left\">\r\n    <label for=\"city\">City</label>\r\n    <input type=\"text\" formControlName=\"city\" class=\"form-control\"/>\r\n    <div> -->\r\n      <!-- <div>Last name is required</div> -->\r\n    <!-- </div>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"form-group text-left\">\r\n    <label for=\"state\">State</label>\r\n    <input type=\"text\" formControlName=\"state\" class=\"form-control\"/>\r\n    <div> -->\r\n      <!-- <div>Last name is required</div> -->\r\n    <!-- </div>\r\n  </div>\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"aboutMe\">About me</label>\r\n    <textarea class=\"form-control\" id=\"aboutMe\" rows=\"2\"></textarea>\r\n  </div>\r\n  <app-search></app-search>\r\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"Save changes\">\r\n\r\n</form>\r\n</div>\r\n<br> -->\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<br>\r\n<div class=\"container text-center\" id=\"editProfileContainer\">\r\n<h2 id=\"editProfileHeader\"> Edit Profile </h2>\r\n<form [formGroup]=\"editProfileForm\" action=\"profile\" (ngSubmit)=\"onChangesSavedSubmit()\">\r\n  <div class=\"form-group text-center\">\r\n      <img *ngIf=\"url\" width=300 height=300 src=\"{{url}}\" />\r\n    <label id=\"fileLabel\" for=\"avatar\">\r\n    <input type=\"file\"\r\n            id=\"avatar\" name=\"avatar\"\r\n            accept=\"image/png, image/jpeg\" />\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"firstName\">First name</label>\r\n    <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"/>\r\n    <div>\r\n      <!-- <div>First name is required</div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"lastName\">Last name</label>\r\n    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"/>\r\n    <div>\r\n      <!-- <div>Last name is required</div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"lastName\">Email</label>\r\n    <input type=\"email\" formControlName=\"email\" class=\"form-control\"/>\r\n    <div>\r\n      <!-- <div>Last name is required</div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\"/>\r\n    <div>\r\n      <!-- <div>Last name is required</div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"phoneNumber\">Phone number</label>\r\n    <input type=\"text\" formControlName=\"phoneNumber\" class=\"form-control\"/>\r\n    <div>\r\n      <!-- <div>Last name is required</div> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"text-left\">\r\n    <label for=\"gender\">Gender</label>\r\n    <select formControlName=\"gender\" id=\"gender\" class=\"form-control\">\r\n      <option selected>Select gender</option>\r\n      <option>Male</option>\r\n      <option>Female</option>\r\n      <option>Other</option>\r\n    </select>\r\n  </div>\r\n  <!-- <div formGroupName=\"location\">\r\n    <div class=\"text-left\">\r\n      <label for=\"city\">City</label>\r\n        <input type=\"city\" formControlName=\"city\" class=\"form-control\"/>\r\n    </div> \r\n    </div> -->\r\n<!-- \r\n    <div class=\"text-left\">\r\n      <label for=\"state\">State</label>\r\n      <select formControlName=\"state\" id=\"state\" class=\"form-control\">\r\n        <option value=\"\">N/A</option>\r\n        <option value=\"AK\">Alaska</option>\r\n        <option value=\"AL\">Alabama</option>\r\n        <option value=\"AR\">Arkansas</option>\r\n        <option value=\"AZ\">Arizona</option>\r\n        <option value=\"CA\">California</option>\r\n        <option value=\"CO\">Colorado</option>\r\n        <option value=\"CT\">Connecticut</option>\r\n        <option value=\"DC\">District of Columbia</option>\r\n        <option value=\"DE\">Delaware</option>\r\n        <option value=\"FL\">Florida</option>\r\n        <option value=\"GA\">Georgia</option>\r\n        <option value=\"HI\">Hawaii</option>\r\n        <option value=\"IA\">Iowa</option>\r\n        <option value=\"ID\">Idaho</option>\r\n        <option value=\"IL\">Illinois</option>\r\n        <option value=\"IN\">Indiana</option>\r\n        <option value=\"KS\">Kansas</option>\r\n        <option value=\"KY\">Kentucky</option>\r\n        <option value=\"LA\">Louisiana</option>\r\n        <option value=\"MA\">Massachusetts</option>\r\n        <option value=\"MD\">Maryland</option>\r\n        <option value=\"ME\">Maine</option>\r\n        <option value=\"MI\">Michigan</option>\r\n        <option value=\"MN\">Minnesota</option>\r\n        <option value=\"MO\">Missouri</option>\r\n        <option value=\"MS\">Mississippi</option>\r\n        <option value=\"MT\">Montana</option>\r\n        <option value=\"NC\">North Carolina</option>\r\n        <option value=\"ND\">North Dakota</option>\r\n        <option value=\"NE\">Nebraska</option>\r\n        <option value=\"NH\">New Hampshire</option>\r\n        <option value=\"NJ\">New Jersey</option>\r\n        <option value=\"NM\">New Mexico</option>\r\n        <option value=\"NV\">Nevada</option>\r\n        <option value=\"NY\">New York</option>\r\n        <option value=\"OH\">Ohio</option>\r\n        <option value=\"OK\">Oklahoma</option>\r\n        <option value=\"OR\">Oregon</option>\r\n        <option value=\"PA\">Pennsylvania</option>\r\n        <option value=\"PR\">Puerto Rico</option>\r\n        <option value=\"RI\">Rhode Island</option>\r\n        <option value=\"SC\">South Carolina</option>\r\n        <option value=\"SD\">South Dakota</option>\r\n        <option value=\"TN\">Tennessee</option>\r\n        <option value=\"TX\">Texas</option>\r\n        <option value=\"UT\">Utah</option>\r\n        <option value=\"VA\">Virginia</option>\r\n        <option value=\"VT\">Vermont</option>\r\n        <option value=\"WA\">Washington</option>\r\n        <option value=\"WI\">Wisconsin</option>\r\n        <option value=\"WV\">West Virginia</option>\r\n        <option value=\"WY\">Wyoming</option>\r\n      </select>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"text-left\">\r\n    <label for=\"orientation\">Orientation</label>\r\n    <select formControlName=\"orientation\" id=\"orientation\" class=\"form-control\">\r\n      <option selected>Select orientation</option>\r\n      <option>Straight</option>\r\n      <option>Gay</option>\r\n      <option>Bisexual</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group text-left\">\r\n    <label for=\"aboutMe\">About me</label>\r\n    <textarea class=\"form-control\" id=\"aboutMe\" rows=\"2\"></textarea>\r\n  </div>\r\n  <app-search></app-search>\r\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"Save changes\">\r\n\r\n</form>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _services_session_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(nav, sessionService, formBuilder, registerService) {
        this.nav = nav;
        this.sessionService = sessionService;
        this.formBuilder = formBuilder;
        this.registerService = registerService;
        this.dataSaved = false;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.editProfileForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            orientation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            aboutMe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        // location: this.formBuilder.group({
        //   city: ['', [ Validators.required ] ],
        //   state: ['', [ Validators.required ] ]
        // })
        this.sessionService.currentMessage.subscribe(function (message) { return _this.sessionId = message; });
        console.log("login: " + this.sessionId);
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/components/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/components/my-profile/my-profile.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"], _services_session_service_service__WEBPACK_IMPORTED_MODULE_2__["SessionServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());

// change message with current id when edit profile button is clicked, then execute navigate, then pull id


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-nav {\r\n    color: white;\r\n}\r\n\r\n#navBrand {\r\n    color: white;\r\n    font-size: 26px;\r\n}\r\n\r\n#navbarFirst {\r\n    color: white;\r\n}\r\n\r\n#navbarSecond {\r\n    color: white;\r\n}\r\n\r\n#navInline {\r\n    color: white;\r\n    font-size: 26px;\r\n}\r\n\r\n#navbarFirst, #navbarSecond, #navInline {\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav *ngIf=\"nav.visible\" class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"background-color: #1DB954\"> -->\r\n    <nav *ngIf=\"nav.visible\" id=\"main-nav\" class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #1DB954;\">\r\n    <a class=\"navbar-brand\" href=\"#\" id=\"navBrand\">Home</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" (click)=passUserSessionToProfilePageViaNavbar()>\r\n          <a class=\"nav-link\" id=\"navbarFirst\"> My profile<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\" (click)=\"passUserSessionToEditProfilePage()\">\r\n          <a class=\"nav-link\" id=\"navbarSecond\">Edit profile</a>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n        </li> -->\r\n      </ul>\r\n      \r\n    </div>\r\n    <span class=\"navbar-text\" id=\"navInline\" (click)=\"endUserSessionOnLogoutClick()\">\r\n      Logout\r\n    </span>\r\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _services_session_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(nav, sessionService, router) {
        this.nav = nav;
        this.sessionService = sessionService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.currentMessage.subscribe(function (message) { return _this.sessionId = message; });
        console.log("login: " + this.sessionId);
    };
    NavbarComponent.prototype.passUserSessionToEditProfilePage = function () {
        this.sessionService.changeMessage;
        this.router.navigateByUrl("/edit");
    };
    NavbarComponent.prototype.passUserSessionToProfilePageViaNavbar = function () {
        this.sessionService.changeMessage;
        this.router.navigateByUrl("/profile");
    };
    NavbarComponent.prototype.endUserSessionOnLogoutClick = function () {
        sessionStorage.clear();
        this.router.navigateByUrl("/");
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"], _services_session_service_service__WEBPACK_IMPORTED_MODULE_2__["SessionServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-page/profile-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    color: rgb(136, 153, 166);\r\n}\r\n#main-profile {\r\n    background-color: rgb(20, 29, 38);\r\n    background-position: center center;\r\n    background-repeat:  no-repeat;\r\n    background-attachment: fixed;\r\n    background-size:  cover;\r\n    font-family: 'Montserrat', sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    height: 100%;\r\n    \r\n}\r\nimg{\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\nhr{\r\n    border-style: solid;\r\n    background-color: rgb(20, 29, 38);\r\n    color: rgb(20, 29, 38);\r\n    height: 3px;\r\n    width: 100%;\r\n}\r\nfigcaption, #friend-name, #prof-username{\r\n    color: white;\r\n}\r\n#header{\r\n    height: 200px;\r\n    background-color: rgb(20, 29, 38);\r\n}\r\n#nav-bar{\r\n    background-color: rgb(27, 40, 54);\r\n}\r\n#base{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-direction: row;\r\n    border-style: none;\r\n    width: 100%;\r\n}\r\n#left-col, #center-col, #right-col{\r\n    text-align: center;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n/* LEFT COLUMN */\r\n#left-col{\r\n    width: 20rem;\r\n    overflow: visible;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-top: 10px;\r\n}\r\n#prof-pic{\r\n    border-radius: 20%;\r\n    width: 11rem;\r\n    height: 11rem;\r\n}\r\n#prof-username{\r\n    font-size: 18px;\r\n    color: white;\r\n    text-align: center;    \r\n    width: 11rem;\r\n    word-wrap: break-word;\r\n}\r\n/* CENTER COLUMN */\r\n#center-col{\r\n    border-color: rgb(10, 10, 10);\r\n    border-width: 1px;\r\n    background-color: rgb(27, 40, 54);\r\n    margin: 10px 10px 0px 0px;\r\n    width: 60%;\r\n}\r\n#post-timeline{\r\n    border-color: rgb(10, 10, 10);\r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#post-unit{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: left;\r\n    transition: all .2s ease-in-out; \r\n}\r\n#post-unit:hover { -webkit-transform: scale(1.03); transform: scale(1.03); }\r\n#post-prof-pic{\r\n    height: 4rem;\r\n    width: 4rem;\r\n    border-radius: 50%;\r\n    margin: 0px 5px 5px 5px;\r\n    transition: all .2s ease-in-out; \r\n}\r\n#post-prof-pic:hover { -webkit-transform: scale(1.15); transform: scale(1.15); }\r\n#post-handle{\r\n    width: 4rem;\r\n    overflow: hidden;\r\n}\r\n#post-text-container{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    width: 80%;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n#post-text{\r\n    color: white;\r\n}\r\n#post-likes{\r\n}\r\n#post-buttons-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n}\r\n#post-buttons{\r\n    color: white;\r\n    width: 40px;\r\n    text-align: center;\r\n}\r\n/* RIGHT COLUMN */\r\n#right-col{\r\n    width: 20rem;\r\n    overflow: auto;\r\n    border-color: rgb(10, 10, 10);\r\n    border-width: 1px;\r\n    background-color: rgb(27, 40, 54);\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n#friend-prof-pic{\r\n    height: 3rem;\r\n    width: 3rem;\r\n    border-radius: 50%;\r\n    margin: 5px 5px 5px 5px;\r\n}\r\n#friend-unit{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    overflow: hidden;\r\n}"

/***/ }),

/***/ "./src/app/components/profile-page/profile-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-profile\">\r\n<div class=\"container\" id=\"base\">\r\n  <!-- LEFT COLUMN -->\r\n  <!-- Profile Picture makes get request to /edit -->\r\n  <div class=\"container\" id=\"left-col\">\r\n    <a href=\"/edit\">\r\n      <img id=\"prof-pic\" src=\"{{currUser.pictureUrl}}\">\r\n    </a>\r\n    <p id=\"prof-username\">{{currUser.firstName}} {{currUser.lastName}}</p>\r\n    <p id=\"prof-aboutMe\">{{currUser.aboutMe}}</p>\r\n  </div>\r\n\r\n  <!-- CENTER COLUMN -->\r\n  <!-- Profile picture should be linked to that user's profile -->\r\n  <div class=\"container\" id=\"center-col\">\r\n    <div id=\"post-timeline\" *ngFor=\"let post of posts\">\r\n      <div id=\"post-unit\">\r\n        <!-- PROFILE PIC -->\r\n        <a id=\"post-prof-pic-link\" href=\"\">\r\n          <img id=\"post-prof-pic\" src=\"{{post.prof_pic}}\">\r\n          <figcaption id=\"post-handle\">{{post.handle}}</figcaption>\r\n        </a>\r\n        <!-- TEXT BODY -->\r\n        <div id=\"post-text-container\">\r\n          <span id=\"post-text\">{{post.text}}</span>\r\n          <span id=\"post-likes\">{{post.likes}}</span>\r\n        </div>\r\n        <!-- SIDE BUTTONS -->\r\n        <div id=\"post-buttons-container\">\r\n          <button class=\"btn btn-success\" id=\"post-button\">✓</button>\r\n          <br>\r\n          <button class=\"btn btn-danger\" id=\"post-buttons\" (click)=\"hidePost()\">X</button>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- RIGHT COLUMN -->\r\n  <!-- Whole element links to that user's profile -->\r\n  <div class=\"container\" id=\"right-col\">\r\n    <div id=\"friends-list\" *ngFor=\"let friend of friends\">\r\n      <!--  -->\r\n      <a id=\"friend-unit\" href=\"\">\r\n        <img id=\"friend-prof-pic\" src={{friend.prof_pic}}>\r\n        <span id=\"friend-name\">{{friend.handle}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile-page/profile-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _services_genre_preference_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/genre-preference.service */ "./src/app/services/genre-preference.service.ts");
/* harmony import */ var _services_friends_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/friends.service */ "./src/app/services/friends.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _models_friend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/friend */ "./src/app/models/friend.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/post */ "./src/app/models/post.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(elementRef, userService, friendService, genrePreferenceService, nav) {
        this.elementRef = elementRef;
        this.userService = userService;
        this.friendService = friendService;
        this.genrePreferenceService = genrePreferenceService;
        this.nav = nav;
        // Left column data
        // Can include more profile data is desired
        // Stored in currUser now
        // user_pic = 'https://pbs.twimg.com/profile_images/826914296093241344/jswv7reL_400x400.jpg';
        // username: string;
        // Center column data
        // Maybe populate w/ more as we scroll down
        this.posts = new Array();
        // Right column data
        // Should only populate up to 5-10 friends
        // Too many would make the page very long
        this.friends = new Array();
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("profile-page OnInit");
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(20, 29, 38)";
        // Get sessionId
        // this.sessionService.currentMessage.subscribe(message => this.sessionId = message);
        console.log("login: " + this.sessionId);
        console.log("praying: " + JSON.parse(sessionStorage.id));
        this.sessionId = JSON.parse(sessionStorage.id);
        if ('' + this.sessionId != 'default message') {
            console.log("inside if");
            // sessionStorage.id = JSON.stringify(this.sessionId);
            // Get friendsList
            this.friendService.getFriendsByPerson(this.sessionId).subscribe(function (allFriends) {
                _this.friendsModel = allFriends;
                // console.log("friends: " + this.friendsModel);
                // Retrieve data for each friend
                _this.friendsModel.forEach(function (element) {
                    // Get friend's data through userService
                    _this.promise = new Promise(function (resolve) {
                        resolve(_this.userService.getUserById('' + element.isFriendsWith));
                    });
                    // Process friend data and add to friends array
                    _this.promise.then(function (value) {
                        console.log("friend: " + value);
                        _this.friends.push(new _models_friend__WEBPACK_IMPORTED_MODULE_3__["Friend"](value.firstName + ' ' + value.lastName, value.pictureUrl, value.prefs));
                        if (value.prefs.length > 0) {
                            _this.posts.push(new _models_post__WEBPACK_IMPORTED_MODULE_6__["Post"](value.firstName + ' ' + value.lastName, value.pictureUrl, value.aboutMe, 'Likes: ' + value.prefs[0].genre));
                        }
                    });
                });
            });
            // Get currrent User's data
            this.promise = new Promise(function (resolve) {
                resolve(_this.userService.getUserById(_this.sessionId));
            });
            // Populate page with current User's data
            this.promise.then(function (value) {
                console.log(value);
                _this.currUser = value;
                // this.username = this.currUser.firstName + " " + this.currUser.lastName;
                // this.user_pic = value.pictureUrl;
            });
        }
        // ngDoCheck() {
        //   console.log("profile-page DoCheck");
        // }
        this.nav.show();
    };
    ProfilePageComponent.prototype.hidePost = function () {
        document.getElementById("post-buttons").addEventListener("click", function () {
            document.getElementById("post-unit").style.display = 'none';
        });
    };
    ProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/components/profile-page/profile-page.component.html"),
            styles: [__webpack_require__(/*! ./profile-page.component.css */ "./src/app/components/profile-page/profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_friends_service__WEBPACK_IMPORTED_MODULE_1__["FriendsService"],
            _services_genre_preference_service__WEBPACK_IMPORTED_MODULE_0__["GenrePreferenceService"],
            src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n   padding-left: 3rem;\r\n   padding-right: 3rem; \r\n   \r\n}\r\n\r\n#submitBtn {\r\n    background-color: #1db954;\r\n    outline: none;\r\n    border-color: #1db954;\r\n}\r\n\r\n#registrationContainer {\r\n    margin-top: 50px;\r\n    padding: 40px;\r\n    background-color: #fff;\r\n    margin-bottom: 50px;\r\n    box-shadow: 0 -2px 40px rgba(142,156,170,0.2);\r\n    border-radius: 5px;\r\n    border: 1.6px solid #000;\r\n    \r\n}\r\n\r\n#registration-main {\r\n    background-image:  linear-gradient(to right, rgba(32,1,34, 0.8) -23.76%, rgba(111,0,0, 0.6) 76.43%);\r\n    background-position: center center;\r\n    background-repeat:  no-repeat;\r\n    background-attachment: fixed;\r\n    background-size:  cover;\r\n    font-family: 'Montserrat', sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    height: 100%;\r\n    color: #000;\r\n    \r\n}\r\n\r\n#registrationHeader {\r\n   padding: 40px;\r\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"registration-main\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\">\r\n<br>\r\n<div class=\"container text-center\" id=\"registrationContainer\">\r\n  <h2 id=\"registrationHeader\"> Create an account </h2>\r\n  <p *ngIf=\"dataSaved && registerForm\" ngClass=\"success\">\r\n    User created successfully!\r\n  </p>\r\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onFormSubmit()\">\r\n    <div class=\"text-left\">\r\n      <label for=\"firstName\">First name</label>\r\n      <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" />\r\n      <div>\r\n        <!-- <div>First name is required</div> -->\r\n      </div>\r\n    </div>\r\n    \r\n    <br>\r\n    <div class=\"text-left\">\r\n      <label for=\"lastName\">Last name</label>\r\n      <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" />\r\n      <div>\r\n        <!-- <div>Last name is required</div> -->\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"text-left\">\r\n      <label for=\"lastName\">Email</label>\r\n      <input type=\"email\" formControlName=\"email\" class=\"form-control\" />\r\n      <div>\r\n        <!-- <div>Last name is required</div> -->\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"text-left\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" formControlName=\"password\" class=\"form-control\" />\r\n      <div>\r\n        <!-- <div>Last name is required</div> -->\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"text-left\">\r\n      <label for=\"phoneNumber\">Phone number</label>\r\n      <input type=\"text\" formControlName=\"phoneNumber\" class=\"form-control\" />\r\n      <div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"text-left\">\r\n      <label for=\"gender\">Gender</label>\r\n      <select formControlName=\"gender\" id=\"gender\" class=\"form-control\">\r\n        <option selected>Select gender</option>\r\n        <option>Male</option>\r\n        <option>Female</option>\r\n        <option>Other</option>\r\n      </select>\r\n    </div>\r\n    <br>\r\n    <div formGroupName=\"location\">\r\n      <div class=\"text-left\">\r\n        <label for=\"city\">City</label>\r\n        <input type=\"city\" formControlName=\"city\" class=\"form-control\" />\r\n      </div>\r\n      <br>\r\n      <div class=\"text-left\">\r\n        <label for=\"state\">State</label>\r\n        <select formControlName=\"state\" id=\"state\" class=\"form-control\">\r\n          <option value=\"\">N/A</option>\r\n          <option value=\"AK\">Alaska</option>\r\n          <option value=\"AL\">Alabama</option>\r\n          <option value=\"AR\">Arkansas</option>\r\n          <option value=\"AZ\">Arizona</option>\r\n          <option value=\"CA\">California</option>\r\n          <option value=\"CO\">Colorado</option>\r\n          <option value=\"CT\">Connecticut</option>\r\n          <option value=\"DC\">District of Columbia</option>\r\n          <option value=\"DE\">Delaware</option>\r\n          <option value=\"FL\">Florida</option>\r\n          <option value=\"GA\">Georgia</option>\r\n          <option value=\"HI\">Hawaii</option>\r\n          <option value=\"IA\">Iowa</option>\r\n          <option value=\"ID\">Idaho</option>\r\n          <option value=\"IL\">Illinois</option>\r\n          <option value=\"IN\">Indiana</option>\r\n          <option value=\"KS\">Kansas</option>\r\n          <option value=\"KY\">Kentucky</option>\r\n          <option value=\"LA\">Louisiana</option>\r\n          <option value=\"MA\">Massachusetts</option>\r\n          <option value=\"MD\">Maryland</option>\r\n          <option value=\"ME\">Maine</option>\r\n          <option value=\"MI\">Michigan</option>\r\n          <option value=\"MN\">Minnesota</option>\r\n          <option value=\"MO\">Missouri</option>\r\n          <option value=\"MS\">Mississippi</option>\r\n          <option value=\"MT\">Montana</option>\r\n          <option value=\"NC\">North Carolina</option>\r\n          <option value=\"ND\">North Dakota</option>\r\n          <option value=\"NE\">Nebraska</option>\r\n          <option value=\"NH\">New Hampshire</option>\r\n          <option value=\"NJ\">New Jersey</option>\r\n          <option value=\"NM\">New Mexico</option>\r\n          <option value=\"NV\">Nevada</option>\r\n          <option value=\"NY\">New York</option>\r\n          <option value=\"OH\">Ohio</option>\r\n          <option value=\"OK\">Oklahoma</option>\r\n          <option value=\"OR\">Oregon</option>\r\n          <option value=\"PA\">Pennsylvania</option>\r\n          <option value=\"PR\">Puerto Rico</option>\r\n          <option value=\"RI\">Rhode Island</option>\r\n          <option value=\"SC\">South Carolina</option>\r\n          <option value=\"SD\">South Dakota</option>\r\n          <option value=\"TN\">Tennessee</option>\r\n          <option value=\"TX\">Texas</option>\r\n          <option value=\"UT\">Utah</option>\r\n          <option value=\"VA\">Virginia</option>\r\n          <option value=\"VT\">Vermont</option>\r\n          <option value=\"WA\">Washington</option>\r\n          <option value=\"WI\">Wisconsin</option>\r\n          <option value=\"WV\">West Virginia</option>\r\n          <option value=\"WY\">Wyoming</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"text-left\">\r\n      <label for=\"orientation\">Orientation</label>\r\n      <select formControlName=\"orientation\" id=\"orientation\" class=\"form-control\">\r\n        <option selected>Select orientation</option>\r\n        <option>Straight</option>\r\n        <option>Gay</option>\r\n        <option>Bisexual</option>\r\n      </select>\r\n    </div>\r\n    <br>\r\n    <div class=\"text-left\">\r\n      <label for=\"aboutMe\">About me</label>\r\n      <input type=\"textarea\" formControlName=\"aboutMe\" class=\"form-control\" max-length=\"240\" />\r\n    <div>\r\n    <br>\r\n    <div class=\"text-left\">\r\n      <label for=\"pictureUrl\">Profile picture</label>\r\n      <input type=\"url\" formControlName=\"pictureUrl\" class=\"form-control\" placeholder=\"https://yourpictureURL.com\"/>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    <br>\r\n    <input class=\"btn btn-primary\" type=\"submit\" value=\"Create account\" id=\"submitBtn\">\r\n  </form>\r\n  <br>\r\n  <a href=\"/\"><button class=\"btn btn-outline-danger\">Home</button></a>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, registerService) {
        this.formBuilder = formBuilder;
        this.registerService = registerService;
        this.dataSaved = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            orientation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            aboutMe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            location: this.formBuilder.group({
                city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }),
            pictureUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    RegisterComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.dataSaved = false;
        var account = this.registrationForm.value;
        this.registerService.getAllUsers().subscribe(function (users) {
            // let maxIndex = users.length - 1;
            // let maxIndexItem = users[maxIndex];
            // account.id = maxIndexItem.id + 1;
            _this.createUser(account);
        });
        this.registrationForm.reset();
    };
    RegisterComponent.prototype.createUser = function (user) {
        var _this = this;
        this.registerService.createUser(user).subscribe(function (user) {
            console.log(user);
            _this.dataSaved = true;
            _this.loadAllUsers();
        }, function (err) {
            console.log(err);
        });
    };
    RegisterComponent.prototype.loadAllUsers = function () {
        this.allUsers$ = this.registerService.getAllUsers();
    };
    Object.defineProperty(RegisterComponent.prototype, "firstName", {
        get: function () {
            return this.registrationForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "lastName", {
        get: function () {
            return this.registrationForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registrationForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registrationForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "phoneNumber", {
        get: function () {
            return this.registrationForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "gender", {
        get: function () {
            return this.registrationForm.get('gender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "orientation", {
        get: function () {
            return this.registrationForm.get('orientation');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "aboutMe", {
        get: function () {
            return this.registrationForm.get('aboutMe');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "city", {
        get: function () {
            return this.registrationForm.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "state", {
        get: function () {
            return this.registrationForm.get('state');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "pictureUrl", {
        get: function () {
            return this.registrationForm.get('state');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-left\">Search for an artist or song</p>\r\n\r\n<form>\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" name=\"searchStr\"  [(ngModel)]=\"searchStr\" (keyup)=\"searchMusic()\" class=\"form-control\" placeholder=\"Search\">\r\n\r\n  </div>\r\n</form>\r\n\r\n<div *ngIf=\"searchRes\">\r\n  <div *ngFor=\"let res of searchRes\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"search-res well\">\r\n          <h4><a href=\"#\">{{res.name}}</a></h4>\r\n          <div>\r\n            <strong>Genres: </strong>\r\n            <span *ngFor=\"let genre of res.genres\">{{res.genres}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(function (res) {
            _this.searchRes = res.artists.items;
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")],
            providers: [src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/user-live-search/user-live-search.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/user-live-search/user-live-search.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    color: white;\r\n}\r\n\r\n.round {\r\n    color: black;\r\n    width: 100%;\r\n    border-radius: 15px;\r\n    border: 1px #000 solid;\r\n    padding: 5px 5px 5px 25px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 5;\r\n}\r\n\r\n.corner {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    height: 20px;\r\n    width: 20px;\r\n    z-index: 10;\r\n    border-radius: 10px;\r\n    border: none;\r\n    background: #000; /* Set the bg image here. with \"no-repeat\" */\r\n}\r\n\r\n.search {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 30px;\r\n}\r\n\r\n#nav-bar{\r\n    background-color: rgb(29,185,84);\r\n}\r\n\r\n#base{\r\n    border-style: solid;\r\n    display: flex;\r\n    width: 100vw;\r\n}\r\n\r\n#search-bar{\r\n    border-style: solid;\r\n    width: 25%;\r\n    position: relative;\r\n    left: -2%;\r\n}\r\n\r\n#search-results{\r\n    border-style: solid;\r\n    width: 50%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user-live-search/user-live-search.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-live-search/user-live-search.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"nav-bar\">\r\n  nav-bar-placeholder\r\n</div>\r\n<div class=\"container\" id=\"base\">\r\n  <div id=\"search-bar\">\r\n    <form id=\"search-form\">\r\n        <div class=\"search\">\r\n          <input type=\"text\" name=\"search\" class=\"round\" (keyup)=\"getUsers()\"/>\r\n          <input type=\"submit\" class=\"corner\" value=\"\" />\r\n        </div>\r\n    </form>\r\n  </div>\r\n  <div id=\"search-results\">\r\n    <div id=\"search-results-list\">\r\n      <div id=\"search-result-unit\" *ngFor=\"let friend of friends\">\r\n        <!-- PROFILE PIC -->\r\n        <a id=\"search-prof-pic-link\" href=\"\">\r\n          <img id=\"search-prof-pic\" src=\"{{friend.prof_pic}}\">\r\n          <figcaption id=\"search-handle\">{{friend.handle}}</figcaption>\r\n        </a>\r\n        <!-- TEXT BODY -->\r\n        <!-- SHOULD LIST TOP SONGS -->\r\n        <span id=\"search-text\">{{friend.songs}}</span>\r\n        <!-- SIDE BUTTONS -->\r\n        <div id=\"search-buttons-container\">\r\n          <button class=\"btn btn-success\" id=\"search-buttons\">+</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user-live-search/user-live-search.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-live-search/user-live-search.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserLiveSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLiveSearchComponent", function() { return UserLiveSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserLiveSearchComponent = /** @class */ (function () {
    function UserLiveSearchComponent(elementRef) {
        this.elementRef = elementRef;
    }
    UserLiveSearchComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(33, 33, 33)";
    };
    UserLiveSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-live-search',
            template: __webpack_require__(/*! ./user-live-search.component.html */ "./src/app/components/user-live-search/user-live-search.component.html"),
            styles: [__webpack_require__(/*! ./user-live-search.component.css */ "./src/app/components/user-live-search/user-live-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UserLiveSearchComponent);
    return UserLiveSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (allUsers) { return _this.users = allUsers; });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")],
            providers: [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/models/friend.ts":
/*!**********************************!*\
  !*** ./src/app/models/friend.ts ***!
  \**********************************/
/*! exports provided: Friend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Friend", function() { return Friend; });
var Friend = /** @class */ (function () {
    function Friend(handle, prof_pic, songs) {
        this.handle = handle;
        this.prof_pic = prof_pic;
        this.songs = songs;
    }
    return Friend;
}());



/***/ }),

/***/ "./src/app/models/post.ts":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(handle, prof_pic, text, likes) {
        this.handle = handle;
        this.prof_pic = prof_pic;
        this.text = text;
        this.likes = likes;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/services/friends.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/friends.service.ts ***!
  \*********************************************/
/*! exports provided: FriendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsService", function() { return FriendsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsService = /** @class */ (function () {
    function FriendsService(http) {
        this.http = http;
        this.url = "http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/friends";
    }
    FriendsService.prototype.getFriendsByPerson = function (id) {
        return this.http.get(this.url + "/p/" + id);
    };
    FriendsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FriendsService);
    return FriendsService;
}());



/***/ }),

/***/ "./src/app/services/genre-preference.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/genre-preference.service.ts ***!
  \******************************************************/
/*! exports provided: GenrePreferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenrePreferenceService", function() { return GenrePreferenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenrePreferenceService = /** @class */ (function () {
    function GenrePreferenceService(http) {
        this.http = http;
        this.url = 'http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/preferences';
    }
    GenrePreferenceService.prototype.getPreferencesByUserId = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    GenrePreferenceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GenrePreferenceService);
    return GenrePreferenceService;
}());



/***/ }),

/***/ "./src/app/services/navbar.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/navbar.service.ts ***!
  \********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visible = false;
    }
    NavbarService.prototype.hide = function () {
        this.visible = false;
    };
    NavbarService.prototype.show = function () {
        this.visible = true;
    };
    NavbarService.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.url = "http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/users";
    }
    RegisterService.prototype.createUser = function (user) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        var options = {
            headers: httpHeaders
        };
        return this.http.post(this.url, user, options);
    };
    RegisterService.prototype.postUser = function (user) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.url, user, {
            headers: httpHeaders,
            observe: 'response'
        });
    };
    RegisterService.prototype.getAllUsers = function () {
        return this.http.get(this.url);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/session-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/session-service.service.ts ***!
  \*****************************************************/
/*! exports provided: SessionServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionServiceService", function() { return SessionServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionServiceService = /** @class */ (function () {
    function SessionServiceService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    SessionServiceService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    SessionServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SessionServiceService);
    return SessionServiceService;
}());



/***/ }),

/***/ "./src/app/services/spotify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';

var SpotifyService = /** @class */ (function () {
    function SpotifyService(_http) {
        this._http = _http;
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        // let headers = new Headers();
        if (type === void 0) { type = 'artist'; }
        var headerDict = {
            'Authorization': 'Bearer BQApiT4C30Q19tzuZUUABl8bAxqFPvklpFnxpfm1PhFKcCGvrpA4NkeSd1edrWsokeR6DM7WDYuCWZDIuvQ'
        };
        var requestOptions = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"](headerDict),
        };
        // let options = new RequestOptions({ headers: headers });
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=6&type=' + type + '&market=US';
        return this._http.get(this.searchUrl, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    SpotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SpotifyService);
    return SpotifyService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.url = 'http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/users';
        this.loginUrl = 'http://ec2-54-191-35-75.us-west-2.compute.amazonaws.com:8082/logins';
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    UsersService.prototype.getUserById = function (id) {
        return this.http.get(this.url + "/" + id).toPromise();
    };
    UsersService.prototype.getUser = function (userEmail, userPassword) {
        return this.http.get(this.url + "/byemail/" + userEmail).toPromise();
        // let body = {
        //   emailAddress: userEmail,
        //   password: userPassword
        // }
        // let user = new Users(null, null, null, userEmail, userPassword,null);
        // console.log(user);
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json'
        //   })
        // };
        // return this.http.post<Users>(this.loginUrl, user, httpOptions);
    };
    UsersService.prototype.loginValid = function (id) {
        return this.http.get(this.url + "/logins/" + id).toPromise();
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\apbum\Documents\project2-angular-ANM\project2-angular-anm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map