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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-book.service.ts":
/*!*************************************!*\
  !*** ./src/app/add-book.service.ts ***!
  \*************************************/
/*! exports provided: AddBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookService", function() { return AddBookService; });
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


var AddBookService = /** @class */ (function () {
    function AddBookService(http) {
        this.http = http;
    }
    AddBookService.prototype.addBooks = function (formdata) {
        return this.http.post('/api/upload', formdata);
    };
    AddBookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddBookService);
    return AddBookService;
}());



/***/ }),

/***/ "./src/app/add-books/add-books.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-books/add-books.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-books/add-books.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-books/add-books.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"container\">\n  <h3 style=\"color: darkcyan;\">Upload Book</h3>\n  <form [formGroup]=\"myForm\"  (submit) = \"bookSubmit($event)\" enctype=\"multipart/form-data\">\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input id=\"book_name\" formControlName=\"boo_name\" type=\"text\" name =\"book_name\" class=\"validate\">\n        <label class=\"active\" for=\"book_name\">Book Name</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input id=\"author_name\" formControlName=\"autho_name\" type=\"text\" name =\"author_name\" class=\"validate\">\n        <label class=\"active\" for=\"author_name\">Author Name</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input id=\"price\" formControlName=\"pric\" type=\"number\" name =\"price\" class=\"validate\">\n        <label class=\"active\" for=\"price\">Price</label>\n      </div>\n      <div class=\"input-field col s6\">\n        <select name=\"condition\" formControlName=\"conditio\" id=\"condition\" class=\"form-control\">\n          <option value=\"\" disabled selected>Choose the condition</option>\n          <option value=\"New\">New</option>\n          <option value=\"Almost New\">Almost New</option>\n          <option value=\"Slight Damage\">Slight Damage</option>\n          <option value=\"Worn\">Worn</option>\n        </select>\n        <label for=\"condition\">Condition</label>\n      </div>\n    </div>\n    \n    <div class=\"file-field input-field\">\n      <div class=\"btn\">\n        <span>Image</span>\n        <input name=\"myImage\" type=\"file\" (change)=\"onFileSelected($event)\" #image>\n      </div>\n      <div class=\"file-path-wrapper\">\n        <input class=\"file-path validate\" type=\"text\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn\" id=\"btnProductAdd\" [disabled]=\"!myForm.valid || image.value == ''\" >Submit</button>\n  </form>\n  <br>\n</div>\n\n\n<!-- \n  <div class=\"col-md-8 col-md-offset-2\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"Bookname\">Book Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"bookname\">\n      </div>\n      <div>\n        <label for=\"image\">Image</label>\n        <input\n        type=\"file\"\n        (change)=\"onFileSelected($event)\" #image>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Authorname\">Author Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"authorname\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Price\">Price</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"price\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Condition\">Condition</label>\n        <select id=\"power\"  formControlName=\"condition\" >\n          <option class=\"form-control\" *ngFor=\"let pow of condition\" [value]=\"pow\" >{{pow}}</option>\n        </select>\n      </div>\n      <button\n      class=\"btn btn-primary\"\n      type=\"submit\"\n      [disabled]=\"!myForm.valid || image.value==''\">Submit</button>\n    </form>\n  </div> -->\n  \n  "

/***/ }),

/***/ "./src/app/add-books/add-books.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-books/add-books.component.ts ***!
  \**************************************************/
/*! exports provided: AddBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBooksComponent", function() { return AddBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-book.service */ "./src/app/add-book.service.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddBooksComponent = /** @class */ (function () {
    function AddBooksComponent(bookService, myHeader, router) {
        this.bookService = bookService;
        this.myHeader = myHeader;
        this.router = router;
        this.selectedFile = null;
        this.fd = new FormData();
    }
    AddBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            boo_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            autho_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pric: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            conditio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.myHeader.getUser().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.user = data;
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    AddBooksComponent.prototype.bookSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var book_name = target.querySelector("#book_name").value;
        var author_name = target.querySelector("#author_name").value;
        var price = target.querySelector("#price").value;
        var condition = target.querySelector("#condition").value;
        this.fd.append('book_name', book_name);
        this.fd.append('author_name', author_name);
        this.fd.append('price', price);
        this.fd.append('condition', condition);
        console.log('formdata' + this.fd);
        this.bookService.addBooks(this.fd).subscribe(function (data) {
            console.log(data);
            _this.book = data;
            if (data) {
                window.alert("Added " + _this.book.bookName + " to lists.");
                window.location.href = "/listing/add";
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    AddBooksComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        this.fd.append('bookimage', this.selectedFile, this.selectedFile.name);
    };
    AddBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-books',
            template: __webpack_require__(/*! ./add-books.component.html */ "./src/app/add-books/add-books.component.html"),
            styles: [__webpack_require__(/*! ./add-books.component.css */ "./src/app/add-books/add-books.component.css")]
        }),
        __metadata("design:paramtypes", [_add_book_service__WEBPACK_IMPORTED_MODULE_3__["AddBookService"], _header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddBooksComponent);
    return AddBooksComponent;
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

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'BookAdda';
    }
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _add_books_add_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-books/add-books.component */ "./src/app/add-books/add-books.component.ts");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header.service */ "./src/app/header.service.ts");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _add_book_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-book.service */ "./src/app/add-book.service.ts");
/* harmony import */ var _book_detail_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./book-detail.service */ "./src/app/book-detail.service.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
//modules
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//components










//services







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_8__["ListingComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"],
                _add_books_add_books_component__WEBPACK_IMPORTED_MODULE_10__["AddBooksComponent"],
                _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_11__["BookDetailComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__["WishlistComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"],
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_14__["EntryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: 'listing/add',
                        component: _add_books_add_books_component__WEBPACK_IMPORTED_MODULE_10__["AddBooksComponent"]
                    },
                    {
                        path: 'listing/:id',
                        component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_11__["BookDetailComponent"]
                    },
                    {
                        path: 'listing',
                        component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_8__["ListingComponent"]
                    },
                    {
                        path: 'signin',
                        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"]
                    },
                    {
                        path: 'signup',
                        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
                    },
                    {
                        path: 'wishlist',
                        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__["WishlistComponent"]
                    },
                    {
                        path: 'messages',
                        component: _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"]
                    },
                    {
                        path: '',
                        component: _entry_entry_component__WEBPACK_IMPORTED_MODULE_14__["EntryComponent"]
                    }
                ])
            ],
            providers: [_signup_service__WEBPACK_IMPORTED_MODULE_15__["SignupService"], _header_service__WEBPACK_IMPORTED_MODULE_16__["HeaderService"], _listing_service__WEBPACK_IMPORTED_MODULE_17__["ListingService"], _add_book_service__WEBPACK_IMPORTED_MODULE_18__["AddBookService"], _book_detail_service__WEBPACK_IMPORTED_MODULE_19__["BookDetailService"],
                _wishlist_service__WEBPACK_IMPORTED_MODULE_20__["WishlistService"], _message_service__WEBPACK_IMPORTED_MODULE_21__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-detail.service.ts":
/*!****************************************!*\
  !*** ./src/app/book-detail.service.ts ***!
  \****************************************/
/*! exports provided: BookDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailService", function() { return BookDetailService; });
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


var BookDetailService = /** @class */ (function () {
    function BookDetailService(http) {
        this.http = http;
    }
    BookDetailService.prototype.getBookDetail = function (bookId) {
        return this.http.post('/api/upload/item', {
            bookId: parseInt(bookId)
        });
    };
    BookDetailService.prototype.addWishList = function (u_email, book) {
        return this.http.post('/api/addWishList', {
            u_email: u_email,
            seller: book.seller,
            book_name: book.bookName,
            author_name: book.authorName,
            price: parseInt(book.price),
            image: book.image,
            condition: book.condition
        });
    };
    BookDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookDetailService);
    return BookDetailService;
}());



/***/ }),

/***/ "./src/app/book-detail/book-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"row\">\n  <div *ngIf=\"Book !== undefined\" class=\"col s5\" style=\"padding-left:20px; \"  >\n    <br>\n    <div class=\"col s8\" style=\"padding:10px; margin-top: 12px; height: 500px; border: 1px solid #C8C8C8\">\n      <img src=\"{{Book[0].image}}\" style=\"width: 100%; height: 100%;\" alt=\"\">\n    </div>\n    \n  </div>\n  \n  <div *ngIf=\"Book !== undefined\"class=\"col s7\" style=\"padding: 25px;\">\n    \n    \n    <ul class=\"collection with-header\">\n      <li class=\"collection-header\"><h5 style=\"color: #FFB300; height: 35px;\">Book Details</h5></li>\n      <li class=\"collection-item\" style=\"padding-top: 20px; height: 60px;\">\n        \n        <div class=\"col s6\" style=\"font-size: 20px;\"> Book: </div>\n        <div class=\"col s6\" style=\"text-transform: capitalize;\">\n          {{Book[0].bookName}}\n        </div>\n        \n      </li>\n      <li class=\"collection-item\" style=\"padding-top: 20px; height: 60px;\">\n        <div class=\"col s6\" style=\"font-size: 20px;\"> Auhtor: </div>\n        <div class=\"col s6\" style=\"text-transform: capitalize;\">\n          {{Book[0].authorName}}\n        </div>\n        \n      </li>\n      <li class=\"collection-item\" style=\"padding-top: 20px; height: 60px;\">\n        <div class=\"col s6\" style=\"font-size: 20px;\"> Price: </div>\n        <div class=\"col s6\" style=\"text-transform: capitalize;\">\n          Rs. {{Book[0].price}}\n        </div>\n        \n      </li>\n      <li class=\"collection-item\" style=\"padding-top: 20px; height: 60px;\">\n        <div class=\"col s6\" style=\"font-size: 20px;\"> Condition: </div>\n        <div class=\"col s6\" style=\"text-transform: capitalize;\">\n          {{Book[0].condition}}\n        </div>\n        \n      </li>\n      <li class=\"collection-item\" style=\"padding-top: 20px; height: 60px;\">\n        <div class=\"col s6\" style=\"font-size: 20px;\"> Seller: </div>\n        <div class=\"col s6\" style=\"text-transform: capitalize;\">\n          {{Book[0].seller}}\n        </div>\n        \n      </li>\n      \n      <li class=\"collection-item\" style=\"padding-top: 20px; height: 70px; \">\n        <div class=\"row\"> \n          <div class=\"col s4\" style=\"padding-top: 15px; \">\n            <a (click) = \"addToWish()\" class=\"waves-effect waves-light btn\">Add to Wishlist</a>\n          </div>\n          \n          <div class=\"col s8\">\n            <div class=\"row\">\n              <form  [formGroup]=\"myForm\" (submit) = \"sendMessage($event)\"class=\"col s12\">\n                <div class=\"row\" style=\"margin-bottom: 0px;\">\n                  <div class=\" col s7\" >\n                    <input formControlName=\"u_mesg\" style=\"padding-top: 4px;\" placeholder=\"Contact Seller\" id=\"message\" type=\"text\" autocomplete=\"off\" class=\"validate\" required >\n                  </div>\n                  <div class=\" col s5\" style=\"padding-top: 15px;\">\n                    <button type=\"submit\" class=\"waves-effect waves-light btn\" id=\"btnProductAdd\" [disabled]=\"!myForm.valid\" >Send Message</button>  \n                  </div>\n                </div>\n              </form>  \n            </div>\n          </div>\n        </div>\n      </li>\n      \n    </ul>\n    \n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.ts ***!
  \******************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _book_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book-detail.service */ "./src/app/book-detail.service.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(route, myHeader, router, bookDetail, myMsg) {
        this.route = route;
        this.myHeader = myHeader;
        this.router = router;
        this.bookDetail = bookDetail;
        this.myMsg = myMsg;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            u_mesg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        //let id = this.route.snapshot.paramMap.get('id');  //vague approach
        this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this.bookId = id;
        });
        this.bookDetail.getBookDetail(this.bookId).subscribe(function (data) {
            console.log(data);
            _this.Book = data;
        });
        this.myHeader.getUser().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.user = data;
            }
            else {
                window.alert('Login again to continue!');
                // window.location.href = "/signin";
                _this.router.navigate(['signin']);
            }
        });
    };
    BookDetailComponent.prototype.sendMessage = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var u_message = target.querySelector("#message").value;
        console.log(u_message);
        this.myMsg.sendMsg(this.user.name, this.Book[0], u_message).subscribe(function (data) {
            if (data) {
                console.log(data);
                window.alert("Mesage sent to " + _this.Book[0].seller);
                target.querySelector("#message").value = '';
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    BookDetailComponent.prototype.addToWish = function () {
        var _this = this;
        this.bookDetail.addWishList(this.user.email, this.Book[0]).subscribe(function (data) {
            _this.wish = data;
            console.log(_this.wish.msg);
            if (_this.wish.msg == "Added Book") {
                window.alert("Added " + _this.wish.wishlist.bookName + " to wishlist.");
            }
            else if (_this.wish.msg == "Already in Wishlist") {
                window.alert("Book already in Wishlist.");
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.css */ "./src/app/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _book_detail_service__WEBPACK_IMPORTED_MODULE_3__["BookDetailService"], _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/entry/entry.component.css":
/*!*******************************************!*\
  !*** ./src/app/entry/entry.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signin-btn{\n    background-color: salmon;\n    height: 80px; \n    width: 35%;\n    padding-top: 22px;\n    border-radius: 35px;\n    font-size: 20px;\n    font-weight: bold;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    \n}\n\n#signin-btn:hover{ /* IE 9 */\n    -webkit-transform: scale(1.08); /* Safari 3-8 */\n    transform: scale(1.08); \n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n    border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n\n    /* Position the tooltip */\n    position: absolute;\n    z-index: 1;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}"

/***/ }),

/***/ "./src/app/entry/entry.component.html":
/*!********************************************!*\
  !*** ./src/app/entry/entry.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom: 0px;\">\n  <div class=\"col s12\" style=\" opacity: 0.98; height: 100vh; background-image: url('https://wallpapercave.com/wp/mEF1kPI.jpg');background-repeat: no-repeat; background-size: cover;\">\n    \n    <div class=\"row\" style=\"padding-top: 10%;\">\n      <div class=\"col s2\"></div>\n      <div class=\"col s8\">\n        <h1 align = \"center\" style=\" color: white;\">Books<span style=\"color: #FFB300; \">Adda</span> - Buy and Sell</h1>\n      </div>\n    </div>\n    \n    <div class=\"row\" style=\"padding-top: 2%\">\n      <div class=\"col s6\" align = \"right\" >\n        \n        <a routerLink = '/signup'  class=\"waves-effect waves-light btn\"  id = \"signin-btn\">Sign Up</a>\n        \n      </div>\n      \n      \n      <div class=\"col s6\">\n        \n        <a routerLink = '/signin' class=\"waves-effect waves-light btn\"  id = \"signin-btn\">Sign In</a>\n        \n      </div>\n    </div>\n    \n    <div class=\"row\" style=\"padding-top: 15%;\">\n      <div class=\"col s2\"></div>\n      <div class=\"col s8\" align = \"center\" >\n        <h6 style=\"color: white; font-weight: bold; \">\"I am a reader not because I don't have a life, but because I choose to have many\" - <span style=\"color: #FFB300\">Waterstones</span></h6>\n      </div>\n    </div>\n    \n  </div> \n</div>"

/***/ }),

/***/ "./src/app/entry/entry.component.ts":
/*!******************************************!*\
  !*** ./src/app/entry/entry.component.ts ***!
  \******************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
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

var EntryComponent = /** @class */ (function () {
    function EntryComponent() {
    }
    EntryComponent.prototype.ngOnInit = function () {
    };
    EntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! ./entry.component.html */ "./src/app/entry/entry.component.html"),
            styles: [__webpack_require__(/*! ./entry.component.css */ "./src/app/entry/entry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/header.service.ts":
/*!***********************************!*\
  !*** ./src/app/header.service.ts ***!
  \***********************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
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


var HeaderService = /** @class */ (function () {
    function HeaderService(http) {
        this.http = http;
    }
    HeaderService.prototype.getUser = function () {
        return this.http.get('/api/home');
    };
    HeaderService.prototype.logOutUser = function () {
        return this.http.get('/api/home/logout');
    };
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeaderService);
    return HeaderService;
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

module.exports = "<div class=\"row\">\n  <div class=\"navbar-fixed\">\n     <nav>\n         <div class=\"nav-wrapper\">\n             <a routerLink = \"/listing\" class=\"brand-logo\" style=\"padding-left: 5px; font-size: 30px;\">BooksAdda</a>\n             <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n             <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n                 <li><a routerLink = \"/messages\">Messages</a></li> \n                 <li><a routerLink = \"/wishlist\">WishList</a></li>\n                 <li><a href = \"/listing/add\">Add Books</a></li>\n                 <li class=\"active\"><a (click) = \"SignOut()\" id=\"user-name\" style=\"text-transform: capitalize;\" *ngIf=\"user !== undefined\"><b>SignOut {{user.name}}</b></a></li>\n             </ul>\n         </div>\n     </nav> \n    </div>             \n </div>\n"

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
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HeaderComponent(myHeader, route) {
        this.myHeader = myHeader;
        this.route = route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myHeader.getUser().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.user = data;
            }
        });
    };
    HeaderComponent.prototype.SignOut = function () {
        this.myHeader.logOutUser().subscribe(function (data) {
            console.log(data);
        });
        this.route.navigate(['signin']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/listing.service.ts":
/*!************************************!*\
  !*** ./src/app/listing.service.ts ***!
  \************************************/
/*! exports provided: ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
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


var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.getBooks = function () {
        return this.http.get('/api/upload');
    };
    ListingService.prototype.getUserBooks = function (name) {
        return this.http.post('/api/upload/seller', {
            u_name: name
        });
    };
    ListingService.prototype.getSearchBooks = function (b_search, searchBy) {
        return this.http.post('/api/upload/search', {
            b_search: b_search,
            searchBy: searchBy
        });
    };
    ListingService.prototype.filterByPrice = function (priceval) {
        return this.http.post('/api/upload/price', {
            priceval: priceval
        });
    };
    ListingService.prototype.filterByCondn = function (condnVal) {
        return this.http.post('/api/upload/condition', {
            condnVal: condnVal
        });
    };
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#carder{\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n}\n#carder:hover{ /* IE 9 */\n    -webkit-transform: scale(1.02); /* Safari 3-8 */\n    transform: scale(1.02); \n}\n#searchBox{\n    background-color: white;\n    border-radius: 15px;\n    padding-left: 10px;\n    height: 42px;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    \n}\n#searchBox:focus{ /* IE 9 */\n    -webkit-transform: scale(1.05); /* Safari 3-8 */\n    transform: scale(1.05); \n}\n#Searchbtn{\n    background-color: white;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    color: salmon;\n    border-radius: 15px;\n}\n#Searchbtn:hover{ /* IE 9 */\n    -webkit-transform: scale(1.05); /* Safari 3-8 */\n    transform: scale(1.05); \n}\n\n"

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- special header -->\n<div class=\"row\">\n    <div class=\"navbar-fixed\">\n        <nav>\n            <div class=\"nav-wrapper\">\n                <div class=\"row\">\n                    <div class=\"col s2\" >\n                        <a href = \"/listing\" class=\"brand-logo\" style=\"padding-left: 5px; font-size: 30px;\">BooksAdda</a>\n                        <a routerLink=\"/listing\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n                    </div>\n                    <div class=\"col s5\" >\n                        <div class=\"row\">\n                            <form  (submit) = \"searchBook($event)\"class=\"col s12\">\n                                <div class=\"row\">\n                                    <div class=\" col s7\" >\n                                        <input placeholder = \"Search\" id=\"searchBox\" type=\"text\" autocomplete=\"off\" class=\"validate\" required >\n                                    </div>\n                                    <div class=\" col s2\" >\n                                        <button type=\"submit\" (click) = \"whichBtn('Book')\" class=\"waves-effect waves-light btn\" id=\"Searchbtn\">Book</button>  \n                                    </div>\n                                    <div class=\" col s3\" >\n                                        <button type=\"submit\" (click) = \"whichBtn('Author')\" class=\"waves-effect waves-light btn\" id=\"Searchbtn\">Author</button>  \n                                    </div>\n                                </div>\n                            </form>  \n                        </div>\n                    </div>\n                    \n                    <div class=\"col s5\" style=\"padding-right: 0px;\">\n                        <ul id=\"nav-mobile\" class=\" right hide-on-med-and-down\">\n                            <li><a routerLink = \"/messages\">Messages</a></li> \n                            <li><a routerLink = \"/wishlist\">WishList</a></li>\n                            <li><a href = \"/listing/add\">Add Books</a></li>\n                            <li class=\"active\"><a (click) = \"SignOut()\" id=\"user-name\" style=\"text-transform: capitalize;\" *ngIf=\"user !== undefined\"><b>SignOut {{user.name}}</b></a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div> \n        </nav> \n    </div>             \n</div>\n\n\n<!-- listing -->\n\n<div class=\"row\">\n    \n    <div class=\"col s2\" style=\"border-right: 2px solid #C8C8C8; height: 100vh; position: fixed;\">\n        <!-- Filter panel -->\n        <div class=\"row\">\n            <div class=\"col s12\">\n                \n                <div class=\"row\">\n                    \n                    <form action=\"#\" class = \"col s12\" >\n                        <h5 style=\" color: #A0A0A0;\">Price</h5>\n                        <p>\n                            <label (click) = \"filterPrice('All')\">\n                                <input class=\"with-gap\" name=\"Fprice\" type=\"radio\" checked />\n                                <span> All </span>\n                            </label>\n                        </p>\n                        <p>\n                            <label (click) = \"filterPrice('Below 200')\">\n                                <input class=\"with-gap\" name=\"Fprice\" type=\"radio\" />\n                                <span> Below 200</span>\n                            </label>\n                        </p>\n                        <p>\n                            <label (click) = \"filterPrice('200-500')\">\n                                <input class=\"with-gap\" name=\"Fprice\" type=\"radio\" />\n                                <span>200 - 500</span>\n                            </label>\n                        </p>\n                        <p>\n                            <label (click) = \"filterPrice('500-800')\">\n                                <input class=\"with-gap\" name=\"Fprice\" type=\"radio\" />\n                                <span>500 - 800</span>\n                            </label>\n                        </p>\n                        <p>\n                            <label (click) = \"filterPrice('Above 800')\">\n                                <input class=\"with-gap\" name=\"Fprice\" type=\"radio\" />\n                                <span> Above 800 </span>\n                            </label>\n                        </p>\n                    </form> \n                </div>\n                <hr style=\"border-color: #F0F0F0 ;\">\n                <div class=\"row\">\n                    \n                    <form action=\"#\" class=\"col s12\">\n                        <h5 style=\"color: #A0A0A0;\">Condition</h5>\n                        <p>\n                            <label (click) = \"filterByCondn('All')\">\n                                <input class=\"with-gap\" name=\"Fcondtn\" type=\"radio\" checked />\n                                <span>All</span>\n                            </label>\n                        </p>\n                        <p>\n                            <label (click) = \"filterByCondn('New')\">\n                                <input class=\"with-gap\" name=\"Fcondtn\" type=\"radio\" />\n                                <span>New</span>\n                            </label>\n                        </p>\n                        <p>\n                            <label (click) = \"filterByCondn('Almost New')\">\n                                <input class=\"with-gap\" name=\"Fcondtn\" type=\"radio\" />\n                                <span>Almost New</span>\n                            </label>\n                        </p>\n                        <p>\n                            <label (click) = \"filterByCondn('Slight Damage')\">\n                                <input class=\"with-gap\" name=\"Fcondtn\" type=\"radio\" />\n                                <span>Slight Damage</span>\n                            </label>\n                        </p>\n                        <p>\n                            <label (click) = \"filterByCondn('Worn')\">\n                                <input class=\"with-gap\" name=\"Fcondtn\" type=\"radio\" />\n                                <span>Worn</span>\n                            </label>\n                        </p>\n                    </form> \n                </div>\n            </div>   \n        </div>\n    </div>\n    \n    <div class=\"col s10\" style=\"padding-top: 20px; padding-left: 4%; margin-left: 16%; \">\n        <!-- Teal page content  -->\n        <div class=\"row\" id=\"book-list\">\n            \n            <div *ngFor=\"let book of books\" (click) = \"onSelect(book)\" class=\"col s4 m4\" id = \"carder\">\n                <div class=\"card\" style=\"width: 90%;\">\n                    <div class=\"card-image\">\n                        <img src= \"{{book.image}}\" style=\"height: 300px;\">\n                        <span class=\"card-title\" style = \"font-size: 25px;\">{{book.bookName}}</span>\n                    </div>\n                    <div class=\"card-content\" style=\"height: 70px;\">\n                        <div class = \"row\">\n                            <div class = \"col s6 \">\n                                <span>{{book.authorName}}</span>\n                            </div>\n                            <div class = \"col s6 \">\n                                <span style = \"font-weight:bold; margin-left: 50px;\" >Rs. {{book.price}}</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-action\">\n                        <b style=\"color: #FFB300;\">{{book.condition}}</b>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    \n</div>\n\n"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingComponent = /** @class */ (function () {
    function ListingComponent(myList, myHeader, router) {
        this.myList = myList;
        this.myHeader = myHeader;
        this.router = router;
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myHeader.getUser().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.user = data;
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
        this.myList.getBooks().subscribe(function (data) {
            console.log(data);
            _this.books = data;
        });
    };
    ListingComponent.prototype.SignOut = function () {
        this.myHeader.logOutUser().subscribe(function (data) {
            console.log(data);
        });
        this.router.navigate(['signin']);
    };
    ListingComponent.prototype.whichBtn = function (searchType) {
        console.log('type ' + searchType);
        this.searchBy = searchType;
    };
    ListingComponent.prototype.searchBook = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var b_search = target.querySelector("#searchBox").value;
        console.log(b_search);
        this.myList.getSearchBooks(b_search, this.searchBy).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.books = data;
                target.querySelector("#searchBox").value = '';
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    ListingComponent.prototype.filterPrice = function (Fprice) {
        var _this = this;
        console.log('filter by : ' + Fprice);
        this.myList.filterByPrice(Fprice).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.books = data;
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    ListingComponent.prototype.filterByCondn = function (Fcondn) {
        var _this = this;
        console.log('filter by : ' + Fcondn);
        this.myList.filterByCondn(Fcondn).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.books = data;
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    ListingComponent.prototype.onSelect = function (selectedBook) {
        this.router.navigate(['/listing', selectedBook.id]);
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"], _header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
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


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.sendMsg = function (u_email, book, u_message) {
        console.log(book.seller);
        console.log(u_email);
        return this.http.post('/api/message', {
            m_reciever: book.seller,
            m_sender: u_email,
            m_bookName: book.bookName,
            m_message: u_message
        });
    };
    MessageService.prototype.getMsg = function (bookname) {
        //console.log('service' +bookname)
        return this.http.post('/api/message/book', {
            b_name: bookname
        });
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#messagearea{\n    height: 250px;\n    overflow-y: auto;\n}\n\n\n#messagearea::-webkit-scrollbar-track\n{\n\tborder-radius: 5px;\n\tbackground-color:#DBDBDB;\n}\n\n\n#messagearea::-webkit-scrollbar\n{\n    width: 12px;\n    border-radius: 5px;\n\tbackground-color: #F5F5F5;\n}\n\n\n#messagearea::-webkit-scrollbar-thumb\n{\n\tborder-radius: 5px;\n\tbackground-color: #ABABAB;\n}"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"row\" style=\"padding: 10px;\">\n  <ul *ngIf=\"userBooks !== undefined\" class=\"collection\">\n    <li *ngFor=\"let book of userBooks; let bindex = index\" class=\"collection-item\" style=\"padding-top: 20px; \">\n      <div class=\"row\">\n        \n        \n        <div class=\"col s3\">\n          <div class=\"card\" style=\"width: 100%;\">\n            <div class=\"card-image\">\n              <img src=\"{{book.image}}\" height=\"250px;\">\n              <span class=\"card-title\" style = \"font-size: 20px;\">{{book.bookName}}</span>\n            </div>\n            <div class=\"card-content\" style=\"height: 70px;\">\n              <div class = \"row\">\n                <div class = \"col s6 \" >\n                  <span style = \"font-size: 15px;\">{{book.authorName}}</span>\n                </div>\n                <div class = \"col s6 \">\n                  <span style = \"font-weight:bold; margin-left: 50px;\" >Rs. {{book.price}}</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-action\">\n              <b style=\"color: #FFB300;\">{{book.condition}}</b>\n            </div>\n          </div>\n        </div>\n        \n        \n        <div class=\"col s9\" >\n          <div class=\"row\">\n            <h4 align = \"right\" style=\"color: #FFB300;text-transform: capitalize; padding-right:12px;\">{{book.bookName}}</h4>\n          </div>\n          <div class=\"row\">\n            <div class=\"col s12\" id=\"messagearea\" >\n              <ul *ngIf=\"bookMsgs[bindex] !== undefined\"  class=\"collection with-header\" >\n                <li *ngFor=\"let msg of bookMsgs[bindex]\" class=\"collection-item\" style=\"padding-top: 10px; height: 45px;\">\n                  \n                  <div *ngIf=\"msg.sender != book.seller\" class=\"col s4\" style=\"font-size: 15px; text-transform: capitalize; color: salmon; font-weight: bold; \">{{msg.sender}} :</div>\n                  <div *ngIf=\"msg.sender == book.seller\" class=\"col s4\" style=\"font-size: 15px; text-transform: capitalize; color: darkcyan; font-weight: bold; \">{{msg.sender}} :</div>\n                  <div class=\"col s8\" >\n                    \"{{msg.message}}\"\n                  </div>\n                  \n                </li>\n              </ul>\n              \n            </div>\n          </div>\n        </div>\n        \n        \n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageComponent = /** @class */ (function () {
    function MessageComponent(myHeader, router, myMsg, myList) {
        this.myHeader = myHeader;
        this.router = router;
        this.myMsg = myMsg;
        this.myList = myList;
        this.bookMsgs = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myHeader.getUser().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.user = data;
                console.log(_this.user.email);
                _this.myList.getUserBooks(_this.user.name).subscribe(function (data) {
                    console.log(data);
                    if (data) {
                        _this.userBooks = data;
                    }
                    for (var _i = 0, _a = _this.userBooks; _i < _a.length; _i++) {
                        var book = _a[_i];
                        // console.log(book.bookName)
                        _this.myMsg.getMsg(book.bookName).subscribe(function (data) {
                            console.log(data);
                            _this.bookMsgs.push(data);
                            console.log(_this.bookMsgs);
                        });
                    }
                });
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _listing_service__WEBPACK_IMPORTED_MODULE_3__["ListingService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signin-btn{\n    background-color: salmon;\n    height: 80px; \n    width: 65%;\n    padding-top: 22px;\n    border-radius: 35px;\n    font-size: 20px;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    \n}\n\n#signin-btn:hover{ /* IE 9 */\n    -webkit-transform: scale(1.08); /* Safari 3-8 */\n    transform: scale(1.08); \n}"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"margin-bottom: 0px;\">\n  \n  <div class=\"col s6\" style=\" height: 100vh; background-image: url('http://theiphonewalls.com/wp-content/uploads/2013/11/Library-books-shelf.jpg'); background-size: contain;\">\n    <div class=\"row\" style=\"padding-top: 280px;\">\n      <div class=\"col s3\"></div>\n      <div class=\"col s6\" align = \"center\">\n        <a routerLink = '/signup' class=\"waves-effect waves-light btn\"  id = \"signin-btn\">Sign Up</a>\n      </div>\n      \n    </div>\n  </div>\n  \n  <div class=\"col s6\">\n    <h2 align = \"center\" style=\"color: #ff5c6c;\">Sign In</h2>\n    \n    <form  [formGroup]=\"myForm\" (submit) = \"signInSubmit($event)\"  class=\"col s12\" id=\"reg-form\">\n      \n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"u_email\" formControlName=\"u_email\" type=\"email\" class=\"validate\">\n          <label for=\"u_email\">Email Address</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">mode_edit</i>\n          <input id=\"u_password\" formControlName=\"u_password\" type=\"password\" class=\"validate\">\n          <label for=\"u_password\">Password</label>\n        </div>\n      </div>\n      <br>\n      <button type=\"submit\" class=\"btn\" id=\"btnProductAdd\" style=\"margin-left: 7%; width: 93%;\" [disabled]=\"!myForm.valid\">Submit</button>\n      \n    </form>\n    \n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(mySignInService, myHeader, router) {
        this.mySignInService = mySignInService;
        this.myHeader = myHeader;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myHeader.getUser().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.router.navigate(['listing']);
            }
        });
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            u_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            u_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    SigninComponent.prototype.signInSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var u_email = target.querySelector("#u_email").value;
        var u_password = target.querySelector("#u_password").value;
        this.mySignInService.checkUser(u_email, u_password).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.router.navigate(['listing']);
            }
            else {
                window.alert('Invalid credentials!');
                window.location.href = "/signin";
                // console.log('hi');
            }
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"], _header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup.service.ts":
/*!***********************************!*\
  !*** ./src/app/signup.service.ts ***!
  \***********************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
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


var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
    }
    SignupService.prototype.checkUser = function (email, password) {
        return this.http.post('/api/signup/check', {
            u_email: email,
            u_password: password
        });
    };
    SignupService.prototype.registerUser = function (name, college, phone, email, password) {
        return this.http.post('/api/signup', {
            u_name: name,
            u_college: college,
            u_phone: phone,
            u_email: email,
            u_password: password
        });
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signin-btn{\n    background-color: salmon;\n    height: 80px; \n    width: 65%;\n    padding-top: 22px;\n    border-radius: 35px;\n    font-size: 20px;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    \n}\n\n#signin-btn:hover{ /* IE 9 */\n    -webkit-transform: scale(1.08); /* Safari 3-8 */\n    transform: scale(1.08); \n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"margin-bottom: 0px;\">\n  \n  <div class=\"col s6\" style=\" height: 100vh; background-image: url('http://theiphonewalls.com/wp-content/uploads/2013/11/Library-books-shelf.jpg'); background-size: contain;\">\n    <div class=\"row\" style=\"padding-top: 280px;\">\n      <div class=\"col s3\"></div>\n      <div class=\"col s6\" align = \"center\">\n        <a routerLink = '/signin' class=\"waves-effect waves-light btn\"  id = \"signin-btn\">Sign In</a>\n      </div>\n      \n    </div>\n  </div>\n  \n  <div class=\"col s6\">\n    <h2 align = \"center\" style=\"color: #ff5c6c;\">Sign Up</h2>\n    \n    <form [formGroup]=\"myForm\" (submit) = \"signupSubmit($event)\"  class=\"col s12\" id=\"reg-form\">\n      \n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"u_name\" formControlName=\"u_name\" type=\"text\" class=\"validate\" >\n          <label for=\"u_name\">Name</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">school</i>\n          <input id=\"u_college\" formControlName=\"u_college\" type=\"text\" class=\"validate\" >\n          <label for=\"u_college\">College</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">phone</i>\n          <input id=\"u_phone\" formControlName=\"u_phone\" type=\"text\" class=\"validate\" maxlength=\"10\" minlength=\"10\" >\n          <label for=\"u_phone\">Phone</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"u_email\" formControlName=\"u_email\" type=\"email\" class=\"validate\" >\n          <label for=\"u_email\">Email Address</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input id=\"u_password\" formControlName=\"u_password\" type=\"password\" class=\"validate\">\n          <label for=\"u_password\">Password</label>\n        </div>\n      </div>\n      <div class=\"input-field col s12\">\n      <button type=\"submit\" class=\"btn\" id=\"btnProductAdd\" style=\"margin-left: 5px;\" [disabled]=\"!myForm.valid\">Submit</button>\n    </div>\n    </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(mySignupService, router) {
        this.mySignupService = mySignupService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            u_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            u_college: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            u_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            u_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            u_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    SignupComponent.prototype.signupSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var u_name = target.querySelector("#u_name").value;
        var u_college = target.querySelector("#u_college").value;
        var u_phone = target.querySelector("#u_phone").value;
        var u_email = target.querySelector("#u_email").value;
        var u_password = target.querySelector("#u_password").value;
        this.mySignupService.registerUser(u_name, u_college, u_phone, u_email, u_password).subscribe(function (data) {
            if (data) {
                _this.router.navigate(['signin']);
            }
            else {
                window.alert('Email already exists!');
                window.location.href = "/";
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/wishlist.service.ts":
/*!*************************************!*\
  !*** ./src/app/wishlist.service.ts ***!
  \*************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
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


var WishlistService = /** @class */ (function () {
    function WishlistService(http) {
        this.http = http;
    }
    WishlistService.prototype.myWishList = function (email) {
        return this.http.post('/api/addWishList/wish', {
            u_email: email
        });
    };
    WishlistService.prototype.deleteWish = function (b_user, b_name, ba_name) {
        return this.http.post('/api/addWishList/delete', {
            u_email: b_user,
            book_name: b_name,
            author_name: ba_name
        });
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n\n<div class=\"row\" style=\"padding: 10px;\">\n    <ul *ngIf=\"user !== undefined\" class=\"collection\">\n        <li *ngFor=\"let book of WishBooks\" class=\"collection-item\" style=\"padding-top: 20px; \">\n            <div class=\"row\">\n                <div class=\"col s3\">\n                    <div class=\"card\" style=\"width: 100%;\" >\n                        <div class=\"card-image\">\n                            <img src=\"{{book.image}}\" height=\"250px;\">\n                            <span class=\"card-title\" style = \"font-size: 20px;\">{{book.bookName}}</span>\n                        </div>\n                        <div class=\"card-content\" style=\"height: 70px;\">\n                            <div class = \"row\">\n                                <div class = \"col s6 \">\n                                    <span style=\"font-size: 15x;\">{{book.authorName}}</span>\n                                </div>\n                                <div class = \"col s6 \">\n                                    <span style = \"font-size: 15px; margin-left: 50px;\" >Rs. {{book.price}}</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card-action\">\n                            <b style=\"color: #FFB300;\">{{book.condition}}</b>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"col s6\">\n                    <ul class=\"collection with-header\">\n                        <li class=\"collection-header\" style=\"height: 108px;\"><h4 style=\"color: #FFB300;\">Book Details</h4></li>\n                        <li class=\"collection-item\" style=\"padding-top: 10px; height: 45px;\">\n                            \n                            <div class=\"col s6\" style=\"font-size: 15px;\"> Book: </div>\n                            <div class=\"col s6\" style=\"text-transform: capitalize;\">\n                                {{book.bookName}}\n                            </div>\n                            \n                        </li>\n                        <li class=\"collection-item\" style=\"padding-top: 10px; height: 45px;\">\n                            <div class=\"col s6\" style=\"font-size: 15px;\"> Auhtor: </div>\n                            <div class=\"col s6\" style=\"text-transform: capitalize;\">\n                                {{book.authorName}}\n                            </div>\n                            \n                        </li>\n                        <li class=\"collection-item\" style=\"padding-top: 10px; height: 45px;\">\n                            <div class=\"col s6\" style=\"font-size: 15px;\"> Price: </div>\n                            <div class=\"col s6\" style=\"text-transform: capitalize;\">\n                                Rs. {{book.price}}\n                            </div>\n                            \n                        </li>\n                        <li class=\"collection-item\" style=\"padding-top: 10px; height: 45px;\">\n                            <div class=\"col s6\" style=\"font-size: 15px;\"> Condition: </div>\n                            <div class=\"col s6\" style=\"text-transform: capitalize;\">\n                                {{book.condition}}\n                            </div>\n                            \n                        </li>\n                        <li class=\"collection-item\" style=\"padding-top: 10px; height: 45px;\">\n                            <div class=\"col s6\" style=\"font-size: 15px;\"> Seller: </div>\n                            <div class=\"col s6\" style=\"text-transform: capitalize;\">\n                                {{book.seller}}\n                            </div>\n                            \n                        </li>\n                        \n                    </ul>\n                </div>\n                <div class=\"col s3\" >\n                    \n                    <div class=\"row\" align= \"right\">\n                        <i (click) = \"deleteWish(book.user, book.bookName, book.authorName)\" style=\"cursor: pointer;\" class=\"material-icons prefix\">close</i>\n                    </div>\n                    <div class=\"row\" align= \"center\" style=\"padding-top: 40%;\">\n                        <a class=\"waves-effect waves-light btn\" style=\"width: 170px;  border-radius: 20px;\">Buy Book</a>\n                    </div>\n                </div>\n            </div>        \n        </li>\n    </ul>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
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




var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(myHeader, router, myWish) {
        this.myHeader = myHeader;
        this.router = router;
        this.myWish = myWish;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myHeader.getUser().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.user = data;
                console.log(_this.user.email);
                _this.myWish.myWishList(_this.user.email).subscribe(function (data) {
                    console.log(data);
                    _this.WishBooks = data;
                });
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    WishlistComponent.prototype.deleteWish = function (b_user, b_name, ba_name) {
        var _this = this;
        console.log('Book user ' + b_user, 'Book name ' + b_name, ' Author name ' + ba_name);
        this.myWish.deleteWish(b_user, b_name, ba_name).subscribe(function (data) {
            if (data) {
                console.log(data);
                window.alert('Book removed from Wishlist!');
                window.location.href = "/wishlist";
            }
            else {
                window.alert('Login again to continue!');
                _this.router.navigate(['signin']);
            }
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"]])
    ], WishlistComponent);
    return WishlistComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /home/kartikey/Desktop/ExitAssignment/Kartikey BookAdda/bookFrontTest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map