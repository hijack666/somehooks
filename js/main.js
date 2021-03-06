(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FRONT\tryingAngular\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "KWkD":
/*!*******************************************!*\
  !*** ./src/app/service/twitch.service.ts ***!
  \*******************************************/
/*! exports provided: TwitchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitchService", function() { return TwitchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TwitchService = class TwitchService {
    constructor(http) {
        this.http = http;
        // streamer = '';
        this.streamerId = '';
        this.callhost = '';
    }
    getAuth() {
        // e.preventDefault();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Client-id': '4teskombu99lkpk9ajepfjwn1ovzm9',
            Authorization: 'Bearer 8jvm9tkhqprdnp2rfdnrr02qx0nvs5',
            redirect_uri: 'http://localhost',
            response_type: 'code',
        });
        // const params = new HttpParams();
        // params.append('response_type', 'code');
        // params.append('client_id', '4teskombu99lkpk9ajepfjwn1ovzm9');
        // params.append('redirect_params', 'http://localhost');
        // params.append('redirect_uri', 'http://localhost');
        // params.append('scope', 'viewing_activity_read');
        return this.http.get(`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=4teskombu99lkpk9ajepfjwn1ovzm9&redirect_uri=http://localhost`, {
            headers,
        });
    }
    fetchTwitch(streamer) {
        return this.http.get(`https://api.twitch.tv/helix/streams?user_login=${streamer}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'client-id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
                Authorization: 'Bearer 8jvm9tkhqprdnp2rfdnrr02qx0nvs5'
            })
        });
    }
    followHookPost(req) {
        return this.http.post('https://api.twitch.tv/helix/webhooks/hub', req, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'client-id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
                Authorization: 'Bearer 8jvm9tkhqprdnp2rfdnrr02qx0nvs5'
            })
        });
    }
    // streamHookPost(req: ReqStream): Observable<ReqStream[]> {
    streamHookPost(reqstream) {
        // return this.http.post<any>('https://api.twitch.tv/helix/webhooks/hub', req,
        return this.http.post('https://api.twitch.tv/helix/webhooks/hub', reqstream, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'client-id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
                Authorization: 'Bearer 8jvm9tkhqprdnp2rfdnrr02qx0nvs5',
                responseType: 'json',
            })
        });
    }
};
TwitchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TwitchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TwitchService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_twitch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/twitch.service */ "KWkD");






let AppComponent = class AppComponent {
    constructor(twitchService) {
        this.twitchService = twitchService;
        this.streamer = '';
        this.error = '';
        this.streamerId = '';
        this.host = '';
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            streamer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            host: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        // this.fetchTwitch();
        // this.followHookPost();
        // this.getAuth();
        // this.streamHookPost();
        // this.fetchTwitch();
    }
    // getAuth() {
    //   this.twitchService.getAuth()
    //     .subscribe(response => {
    //       console.log(response)
    //     }, er => {
    //       console.log(er)
    //     }, () => {
    //       console.log('final')
    //     })
    // }
    // submit() {
    // const formData = {...this.form.value };
    // this.streamer = formData.streamer;
    // this.form.reset();
    // }
    fetchTwitch() {
        const formData = Object.assign({}, this.form.value);
        this.streamer = formData.streamer;
        this.host = formData.host;
        this.twitchService.fetchTwitch(this.streamer)
            .subscribe(response => {
            console.log(response);
            this.streamerId = response.data[0].user_id;
            // let streamerId = response.user
            console.log(this.streamerId);
        }, errorFetch => {
            console.log(errorFetch);
        }, () => {
            console.log('final');
        });
    }
    followHookPost() {
        this.twitchService.followHookPost({
            'hub.mode': 'subscribe',
            'hub.topic': 'https://api.twitch.tv/helix/users/follows?first=1&to_id=73477451',
            'hub.callback': 'https://webhook.site/10593087-135d-411a-96c5-78edef3e0012',
            'hub.lease_seconds': '864000'
        })
            .subscribe(resp => {
            console.log(resp);
        }, err => {
            console.log(err);
            this.error = err.message;
        });
    }
    streamHookPost() {
        this.twitchService.streamHookPost({
            'hub.mode': 'subscribe',
            'hub.callback': `${this.host}`,
            'hub.topic': `https://api.twitch.tv/helix/streams?user_id=${this.streamerId}`,
            'hub.lease_seconds': '864000',
        })
            .subscribe(resp => {
            console.log(resp);
        }, err => {
            console.log(err);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_twitch_service__WEBPACK_IMPORTED_MODULE_5__["TwitchService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_service_twitch_service__WEBPACK_IMPORTED_MODULE_5__["TwitchService"]],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\n    <!-- <button (click)=\"getAuth()\">login</button> -->\n    <form class=\"card\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n        <input type=\"text\" formControlName=\"streamer\">\n        <input type=\"text\" formControlName=\"host\">\n        <button type='submit' (click)=\"fetchTwitch()\">get streamerId</button>\n    </form>\n    \n    \n    <button (click)=\"streamHookPost()\">HOOK</button>\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_twitch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/twitch.service */ "KWkD");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        ],
        providers: [
            _service_twitch_service__WEBPACK_IMPORTED_MODULE_7__["TwitchService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".red {\n  background: red;\n  font-weight: bold;\n  color: #fff;\n}\n\n.blue {\n  background: blue;\n  font-size: 1.5em;\n  color: #fff;\n}\n\np {\n  font-size: 1.5em;\n  text-align: center;\n}\n\n.wrap {\n  border: 1px dashed green;\n  padding: 1rem;\n}\n\ninput.ng-invalid.ng-touched {\n  border-color: red;\n}\n\ninput.ng-valid.ng-touched {\n  border-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUdJO0VBQ0ksaUJBQUE7QUFBUjs7QUFHSTtFQUNJLG1CQUFBO0FBRFIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBncmVlbjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nLXZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(module => {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        const applicationRef = module.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        const appComponent = applicationRef.components[0];
        // enableDebugTools(appComponent);
    }
})
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map