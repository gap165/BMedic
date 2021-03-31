(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacto-contacto-module"],{

/***/ "8QqG":
/*!*************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.ts ***!
  \*************************************************/
/*! exports provided: ContactoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPage", function() { return ContactoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contacto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contacto.page.html */ "qJZv");
/* harmony import */ var _contacto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacto.page.scss */ "OfNj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContactoPage = class ContactoPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactoPage.ctorParameters = () => [];
ContactoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacto',
        template: _raw_loader_contacto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactoPage);



/***/ }),

/***/ "Br6P":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.module.ts ***!
  \***************************************************/
/*! exports provided: ContactoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPageModule", function() { return ContactoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contacto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacto-routing.module */ "KHpE");
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto.page */ "8QqG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ContactoPageModule = class ContactoPageModule {
};
ContactoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contacto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]]
    })
], ContactoPageModule);



/***/ }),

/***/ "KHpE":
/*!***********************************************************!*\
  !*** ./src/app/pages/contacto/contacto-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPageRoutingModule", function() { return ContactoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacto.page */ "8QqG");




const routes = [
    {
        path: '',
        component: _contacto_page__WEBPACK_IMPORTED_MODULE_3__["ContactoPage"]
    }
];
let ContactoPageRoutingModule = class ContactoPageRoutingModule {
};
ContactoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactoPageRoutingModule);



/***/ }),

/***/ "OfNj":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "qJZv":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacto/contacto.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Quienes Somos\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-contacto-contacto-module.js.map