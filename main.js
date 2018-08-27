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

module.exports = "<section class=\"mat-typography\">\n    <!-- <mat-card>\n        <mat-form-field>\n            <input matInput [(ngModel)]=\"answer\" placeholder=\"Who has the best dev tutorials?\">\n        </mat-form-field>\n\n        <br>\n\n        <button mat-raised-button (click)=\"showAnswer()\">Answer me</button>\n        <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card>\n\n\n    <mat-card *ngIf=\"answerDisplay\">\n        <h1>{{ answerDisplay }}, you're damn right.</h1>\n    </mat-card> -->\n    <router-outlet></router-outlet>\n</section>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.answer = '';
        this.answerDisplay = '';
        this.showSpinner = false;
    }
    AppComponent.prototype.showAnswer = function () {
        var _this = this;
        this.showSpinner = true;
        setTimeout(function () {
            _this.answerDisplay = _this.answer;
            _this.showSpinner = false;
        }, 2000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_mod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.mod */ "./src/app/material.mod.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _item_selection_item_selection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-selection/item-selection.component */ "./src/app/item-selection/item-selection.component.ts");
/* harmony import */ var _item_select_card_item_select_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-select-card/item-select-card.component */ "./src/app/item-select-card/item-select-card.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-header/sub-header.component */ "./src/app/sub-header/sub-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] },
    { path: 'main-menu', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__["MainMenuComponent"] },
    {
        path: 'item-selection/:menuId',
        component: _item_selection_item_selection_component__WEBPACK_IMPORTED_MODULE_10__["ItemSelectionComponent"]
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__["MainMenuComponent"],
                _item_selection_item_selection_component__WEBPACK_IMPORTED_MODULE_10__["ItemSelectionComponent"],
                _item_select_card_item_select_card_component__WEBPACK_IMPORTED_MODULE_11__["ItemSelectCardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_13__["SubHeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material_mod__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span class=\"margin-0-auto\">{{title}}</span>\n    </mat-toolbar-row>\n</mat-toolbar>"

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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "parentPage", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shop-list-card {\n    margin: 0 20px;\n}\n\nmat-card-title {\n    font-size: 125%;\n}\n\nmat-list-item:nth-child(even) {\n    background-color: #FFFFFF;\n}\n\nmat-list-item:nth-child(odd) {\n    background-color: #EEEEEE;\n}\n\n.login-container {\n    margin-top: 40px;\n    padding: 20px;\n}\n\n.login-btn-box {\n    margin: 20px 20px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [parentPage]=parentPage [title]=title></app-header>\n\n<h2 class=\"text-center\">\n    Welcome to IIT Bhubaneswar\n</h2>\n<mat-card class=\"shop-list-card\">\n    <mat-card-header>\n        <mat-card-title>\n            <h3>Shops</h3>\n        </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <mat-list>\n            <mat-list-item>\n                Lokenath Juice Shop\n                <mat-icon matListIcon class=\"coral-color\">favorite</mat-icon>\n            </mat-list-item>\n        </mat-list>\n    </mat-card-content>\n</mat-card>\n<mat-card class=\"shop-list-card login-container\">\n    <mat-card-title>\n        <h3>Please login into account</h3>\n    </mat-card-title>\n    <mat-card-content>\n        <div class=\"text-center\">\n            <mat-form-field>\n                <mat-label>Email</mat-label>\n                <input matInput placeholder=\"Email\" type=\"email\">\n                <span matSuffix>@bhubaneswar_iit.com</span>\n                <mat-hint>Please provide your email</mat-hint>\n            </mat-form-field>\n        </div>\n        <div class=\"login-btn-box text-right\">\n            <button type=\"submit\" (click)=\"submitLogin()\" mat-raised-button color=\"primary\">Login</button>\n        </div>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.title = 'Babu-Food-Express';
        this.parentPage = "HOME";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.submitLogin = function () {
        this.router.navigateByUrl('/main-menu');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/item-select-card/item-select-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/item-select-card/item-select-card.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/item-select-card/item-select-card.component.html":
/*!******************************************************************!*\
  !*** ./src/app/item-select-card/item-select-card.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  item-select-card works!\n</p>\n"

/***/ }),

/***/ "./src/app/item-select-card/item-select-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/item-select-card/item-select-card.component.ts ***!
  \****************************************************************/
/*! exports provided: ItemSelectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSelectCardComponent", function() { return ItemSelectCardComponent; });
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

var ItemSelectCardComponent = /** @class */ (function () {
    function ItemSelectCardComponent() {
    }
    ItemSelectCardComponent.prototype.ngOnInit = function () {
    };
    ItemSelectCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-select-card',
            template: __webpack_require__(/*! ./item-select-card.component.html */ "./src/app/item-select-card/item-select-card.component.html"),
            styles: [__webpack_require__(/*! ./item-select-card.component.css */ "./src/app/item-select-card/item-select-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemSelectCardComponent);
    return ItemSelectCardComponent;
}());



/***/ }),

/***/ "./src/app/item-selection/item-selection.component.css":
/*!*************************************************************!*\
  !*** ./src/app/item-selection/item-selection.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list .mat-list-item.list-item {\n    height: 150px;\n    margin: 5px 5px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n}\n\n.mat-list .mat-list-item.list-item .mat-list-item-content {\n    align-items: flex-start;\n}\n\n.mat-list .mat-list-item.list-item img.mat-list-avatar {\n    width: 110px;\n    height: 110px;\n    border-radius: 0;\n}"

/***/ }),

/***/ "./src/app/item-selection/item-selection.component.html":
/*!**************************************************************!*\
  !*** ./src/app/item-selection/item-selection.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sub-header></app-sub-header>\n<h2 class=\"text-center\">\n    Lokenath Juice Shop\n    <span class=\"coral-color\">></span> {{menuItem}}\n</h2>\n\n<mat-list>\n    <mat-list-item class=\"list-item\" *ngFor=\"let eachItem of menuItemList\">\n        <img matListAvatar [src]=\"eachItem.url\" alt=\"\">\n        <h3 matLine> {{eachItem.name}} </h3>\n        <p matLine>\n            <span> {{eachItem.caption}} </span>\n        </p>\n        <p matLine class=\"text-right\">\n            <span class=\"demo-2\">{{eachItem.currency}}. {{eachItem.price}} </span>\n        </p>\n    </mat-list-item>\n</mat-list>"

/***/ }),

/***/ "./src/app/item-selection/item-selection.component.ts":
/*!************************************************************!*\
  !*** ./src/app/item-selection/item-selection.component.ts ***!
  \************************************************************/
/*! exports provided: ItemSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSelectionComponent", function() { return ItemSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemSelectionComponent = /** @class */ (function () {
    function ItemSelectionComponent(route) {
        var _this = this;
        this.route = route;
        this.menuItem = "";
        this.menuItemList = [
            {
                "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/10/hyderabadi-chicken-biryani-recipe-1.jpg",
                "name": "Biriyani - chicken",
                "caption": "Popular throughout the Indian subcontinent",
                "price": "200",
                "currency": "₹Rs"
            },
            {
                "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/10/hyderabadi-chicken-biryani-recipe-1.jpg",
                "name": "Biriyani - mutton",
                "caption": "Popular throughout the Indian subcontinent",
                "price": "250",
                "currency": "₹Rs"
            },
            {
                "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/10/hyderabadi-chicken-biryani-recipe-1.jpg",
                "name": "Veg thali",
                "caption": "Popular throughout the Indian subcontinent",
                "price": "150",
                "currency": "₹Rs"
            }
        ];
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.menuItem = params['menuId'];
        });
    }
    ItemSelectionComponent.prototype.ngOnInit = function () {
    };
    ItemSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-selection',
            template: __webpack_require__(/*! ./item-selection.component.html */ "./src/app/item-selection/item-selection.component.html"),
            styles: [__webpack_require__(/*! ./item-selection.component.css */ "./src/app/item-selection/item-selection.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ItemSelectionComponent);
    return ItemSelectionComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-card {\n    max-width: 250px;\n    margin: 20px auto 60px;\n}\n\n.menu-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n}"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sub-header></app-sub-header>\n<h2 class=\"text-center\">\n    Lokenath Juice Shop\n</h2>\n<mat-card class=\"menu-card\" *ngFor=\"let menu of menuItems\">\n    <mat-card-header>\n        <mat-card-title>{{menu.name}}</mat-card-title>\n        <mat-card-subtitle>{{menu.caption}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image [src]=\"menu.url\" alt=\"{{menu.name}} image\">\n    <mat-card-actions class=\"text-right\">\n        <button mat-raised-button (click)=\"selectMenu(menu.name)\" color=\"primary\">Select</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(router) {
        this.router = router;
        this.menuItems = [
            {
                "name": "Benerages",
                "url": "https://www.tutorialspoint.com/food_and_beverage_services/images/non_alcoholic_beverages.jpg",
                "caption": "Tea, Coffee, Cold drinks, Mineral Water & many more.."
            },
            {
                "name": "Lunch",
                "url": "https://mk0restaurantsbepxr0.kinstacdn.com/wp-content/uploads/2015/08/Indian-Summer_more_Thali.jpg",
                "caption": "Chicken Meal, Biriyani, Veg Thali & many more.."
            },
            {
                "name": "Fruits",
                "url": "https://www.worldatlas.com/r/w728-h425-c728x425/upload/46/cb/e1/shutterstock-252338818.jpg",
                "caption": "Banana, Apple & more.."
            }
        ];
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent.prototype.selectMenu = function (menu) {
        this.router.navigateByUrl('/item-selection/' + menu);
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/material.mod.ts":
/*!*********************************!*\
  !*** ./src/app/material.mod.ts ***!
  \*********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  registration works!\n</p>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
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

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/sub-header/sub-header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sub-header/sub-header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-title {\n    font-size: 75%;\n}\n\n.location-icon {\n    vertical-align: middle;\n    font-size: 20px;\n}\n\n.change-loc-btn {\n    position: absolute;\n    right: 10px;\n    padding: 0 0 0 5px;\n}"

/***/ }),

/***/ "./src/app/sub-header/sub-header.component.html":
/*!******************************************************!*\
  !*** ./src/app/sub-header/sub-header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-stroked-button (click)=\"gotoMenu()\">Menu</button>\n        <span class=\"sub-title margin-0-auto\">\n          <mat-icon class=\"location-icon\">room</mat-icon>\n          Your Location: MHR\n        </span>\n        <button mat-button mat-raised-button color=\"accent\" [matMenuTriggerFor]=\"menu\" class=\"change-loc-btn\">\n          Change\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>LBC</button>\n            <button mat-menu-item>MHR</button>\n            <button mat-menu-item>SHR</button>\n            <button mat-menu-item>MAIN B</button>\n        </mat-menu>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/sub-header/sub-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sub-header/sub-header.component.ts ***!
  \****************************************************/
/*! exports provided: SubHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubHeaderComponent", function() { return SubHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubHeaderComponent = /** @class */ (function () {
    function SubHeaderComponent(router) {
        this.router = router;
    }
    SubHeaderComponent.prototype.ngOnInit = function () {
    };
    SubHeaderComponent.prototype.gotoMenu = function () {
        this.router.navigateByUrl('/main-menu');
    };
    SubHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-header',
            template: __webpack_require__(/*! ./sub-header.component.html */ "./src/app/sub-header/sub-header.component.html"),
            styles: [__webpack_require__(/*! ./sub-header.component.css */ "./src/app/sub-header/sub-header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SubHeaderComponent);
    return SubHeaderComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/babu-food-exp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map