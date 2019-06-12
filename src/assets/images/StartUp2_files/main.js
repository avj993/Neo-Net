(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<!-- <router-outlet></router-outlet> -->\n<!-- <div style=\"width:100%; height:1000px; background-color:snow;\">\n</div> -->\n<slideshow [height]=\"'300px'\" [autoPlay]=\"true\" [showArrows]=\"true\" [imageUrls]=\"imageSources\"\n  [autoPlayWaitForLazyLoad]=\"true\" showDots=\"true\">\n</slideshow>\n<section class=\"row wwa\">\n  <div class=\"col-md-4\">\n    <h1>Who We Are?</h1>\n    <hr />\n    <br />\n    <p>\n      Contents here We are renowned aluminium wire mesh importer and supplier based out in mumbai having a full fledged\n      warehouse and manufacturing facility.\n    </p>\n    <button class=\"btn readbtn\">Read More</button>\n  </div>\n\n  <div class=\"col-md-8\">\n    <div class=\"col-md-4 imgcont\">\n      <img src=\"../assets/images/ab1.jpg\">\n      <label>Our Mission</label>\n      <br/>\n      <a>Read More -></a>\n    </div>\n    <div class=\"col-md-4 imgcont\">\n      <img src=\"../assets/images/ab1.jpg\">\n      <label>Our Approach</label>\n    <br/>\n      <a>Read More -></a>\n    </div>\n    <div class=\"col-md-4 imgcont\">\n      <img src=\"../assets/images/ab1.jpg\">\n      <label>Our Vision</label>\n    <br/>\n      <a>Read More -></a>\n    </div>\n  </div>\n</section>\n<section class=\"wwa\">\n  <h1 class=\"leftborder\">Our Products</h1>\n  <div class=\"row opcontainer\">\n    <div class=\"col-md-3 imgcont\">\n      <img src=\"../assets/images/ab1.jpg\">\n    </div>\n    <div class=\"col-md-3 imgcont\">\n      <img src=\"../assets/images/ab1.jpg\">\n    </div>\n    <div class=\"col-md-3 imgcont\">\n      <img src=\"../assets/images/ab1.jpg\">\n    </div>\n    <div class=\"col-md-3 imgcont\">\n      <img src=\"../assets/images/ab1.jpg\">\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wwa {\n  padding: 0 5em; }\n  .wwa hr {\n    height: 4px;\n    background-color: lightgrey;\n    width: 30%;\n    align-items: left;\n    float: left;\n    clear: both;\n    margin: 0px; }\n  .readbtn {\n  background-color: lightgrey;\n  color: white; }\n  .imgcont {\n  padding: 1em; }\n  .leftborder {\n  padding: 1em; }\n  .opcontainer {\n  margin: 0 5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmovRG9jdW1lbnRzL3N0YXJ0dXAtcHJvL3N0YXJ0LXVwMi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hdmovRG9jdW1lbnRzL3N0YXJ0dXAtcHJvL3N0YXJ0LXVwMi9zcmMvdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFhLEVBV2Q7RUFaRDtJQUdJLFlBQVc7SUFDWCw0QkNOYTtJRE9iLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsWUFBVztJQUNYLFlBQVc7SUFDWCxZQUFXLEVBQ1o7RUFJSDtFQUNFLDRCQ2pCZTtFRGtCZixhQUFZLEVBQ2I7RUFDRDtFQUNFLGFBQVksRUFDYjtFQUNEO0VBQ0UsYUFBWSxFQUNiO0VBQ0Q7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWVzLnNjc3NcIjtcblxuLnd3YXtcbiAgcGFkZGluZzowIDVlbTtcbiAgaHJ7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgXG59XG5cbi5yZWFkYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pbWdjb250e1xuICBwYWRkaW5nOiAxZW07XG59XG4ubGVmdGJvcmRlcntcbiAgcGFkZGluZzogMWVtO1xufVxuLm9wY29udGFpbmVye1xuICBtYXJnaW46IDAgNWVtO1xufSIsIiR0aGVtZSA6bGlnaHRncmV5OyJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'start-up2';
        this.imageSources = ["../assets/images/2000px--Insert_image_here-.svg.png", "../assets/images/logo.png", "../assets/images/logo.png"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_6__["SlideshowModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-padding\">\n  <div class=\"row enqtop\">\n    <div class=\"col-12 col-sm-6 enqleft\">\n      <span><span class=\"glyphicon glyphicon-earphone\"></span>--no here--</span>\n      <span><span class=\"glyphicon glyphicon-envelope\"></span>--mail here--</span>\n    </div>\n    <div class=\"enqright col-12 col-sm-6\">\n      <span>\n        Download Catalogue\n      </span>\n      <button class=\"btn enqbtn\">Enquire Now</button>\n    </div>\n  </div>\n  <div #fixer class=\"mainheader\" [ngClass]=\"{'fixed': fixeing}\">\n   <div class=\"col-xs-4 imgCont\">\n     <img class=\"imgtag\" src=\"../../assets/images/logo.png\">\n   </div>\n   <nav class=\"col-xs-9\">\n    <a href=\"/html/\" class=\"anchorAct\">Home</a> \n    <a href=\"/css/\">About Us</a> \n    <a href=\"/js/\">Products</a> \n    <a href=\"/jquery/\">Certification</a>\n    <a>Contact Us</a>\n    </nav>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n  width: 100%;\n  margin-bottom: 3em; }\n\n.enqtop {\n  height: auto;\n  color: white;\n  border-top: 0.5em solid lightgrey;\n  background-color: #292929;\n  margin: 0px;\n  padding: 0 3em; }\n\n.enqbtn {\n  color: white;\n  background-color: lightgrey;\n  margin-left: 10px;\n  padding: 1em 2em;\n  font-size: 15px;\n  border-radius: 1px; }\n\n.glyphicon {\n  color: lightgrey;\n  padding: 0 .5em; }\n\n.enqright {\n  text-align: right; }\n\n.enqleft {\n  margin-top: .5em; }\n\n.mainheader {\n  position: relative;\n  padding: 0 5em;\n  display: flex; }\n\n.fixed {\n  position: fixed;\n  top: 0;\n  width: 100%; }\n\n.imgtag {\n  width: 12em;\n  height: 6em; }\n\nnav {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between; }\n\nnav a {\n    padding: .5em 1em;\n    margin: 1em;\n    font-size: 1.1em;\n    color: black; }\n\n.anchorAct {\n  background-color: lightgrey;\n  border-radius: 30px;\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmovRG9jdW1lbnRzL3N0YXJ0dXAtcHJvL3N0YXJ0LXVwMi9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXZqL0RvY3VtZW50cy9zdGFydHVwLXByby9zdGFydC11cDIvc3JjL3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFVO0VBRVYsbUJBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsYUFBVztFQUNYLGFBQVk7RUFDWixrQ0NiZTtFRGNmLDBCQUFpQztFQUNqQyxZQUFXO0VBQ1gsZUFBYyxFQUNiOztBQUVIO0VBQ0UsYUFBWTtFQUNaLDRCQ3JCZTtFRHNCZixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGdCQUFjO0VBQ2QsbUJBQWtCLEVBQ25COztBQUNDO0VBQ0UsaUJDNUJhO0VENkJiLGdCQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0g7RUFDRSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGdCQUFjO0VBQ2QsT0FBTTtFQUNOLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2Isd0JBQXNCO0VBQ3RCLCtCQUE4QixFQVEvQjs7QUFYRDtJQU1JLGtCQUFnQjtJQUNoQixZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGFBQVcsRUFDWjs7QUFHSDtFQUNFLDRCQ2xFZTtFRG1FZixvQkFBbUI7RUFDbkIsd0JBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi90aGVtZXMuc2Nzc1wiO1xuXG46aG9zdHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6MTAwJTtcblxuICBtYXJnaW4tYm90dG9tOjNlbTtcbn1cblxuLmVucXRvcHtcbiAgaGVpZ2h0OmF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogLjVlbSBzb2xpZCAkdGhlbWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcbiAgbWFyZ2luOiAwcHg7IFxuICBwYWRkaW5nOiAwIDNlbTtcbiAgfVxuXG4uZW5xYnRue1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG4gIC5nbHlwaGljb257XG4gICAgY29sb3I6JHRoZW1lO1xuICAgIHBhZGRpbmc6MCAuNWVtO1xuICB9XG4gIC5lbnFyaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAuZW5xbGVmdHtcbiAgICAgIG1hcmdpbi10b3A6IC41ZW07XG4gIH1cbi5tYWluaGVhZGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZpeGVke1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltZ3RhZ3tcbiAgd2lkdGg6IDEyZW07XG4gIGhlaWdodDogNmVtO1xufVxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGF7XG4gICAgcGFkZGluZzouNWVtIDFlbTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG59XG5cbi5hbmNob3JBY3R7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbn1cblxuIiwiJHRoZW1lIDpsaWdodGdyZXk7Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.fixeing = false;
    }
    HeaderComponent.prototype.onWindowScroll = function () {
        if ((this.sticky < window.pageYOffset) && (this.fixeing == false)) {
            this.fixeing = true;
        }
        else if ((this.sticky >= window.pageYOffset) && (this.fixeing == true)) {
            this.fixeing = false;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.sticky = this.headFixer.nativeElement.offsetTop;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fixer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "headFixer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/avj/Documents/startup-pro/start-up2/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/avj/Documents/startup-pro/start-up2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map