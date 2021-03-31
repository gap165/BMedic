(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historial-cliente-historial-cliente-module"],{

/***/ "1w3H":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial-cliente/historial-cliente.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"historial clínico\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "2GjC":
/*!*******************************************************************!*\
  !*** ./src/app/pages/historial-cliente/historial-cliente.page.ts ***!
  \*******************************************************************/
/*! exports provided: HistorialClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialClientePage", function() { return HistorialClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_historial_cliente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./historial-cliente.page.html */ "1w3H");
/* harmony import */ var _historial_cliente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial-cliente.page.scss */ "UVl6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HistorialClientePage = class HistorialClientePage {
    constructor() { }
    ngOnInit() {
    }
};
HistorialClientePage.ctorParameters = () => [];
HistorialClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-historial-cliente',
        template: _raw_loader_historial_cliente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_historial_cliente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistorialClientePage);



/***/ }),

/***/ "UVl6":
/*!*********************************************************************!*\
  !*** ./src/app/pages/historial-cliente/historial-cliente.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYWwtY2xpZW50ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "X99a":
/*!*********************************************************************!*\
  !*** ./src/app/pages/historial-cliente/historial-cliente.module.ts ***!
  \*********************************************************************/
/*! exports provided: HistorialClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialClientePageModule", function() { return HistorialClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _historial_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historial-cliente-routing.module */ "xuT/");
/* harmony import */ var _historial_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historial-cliente.page */ "2GjC");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let HistorialClientePageModule = class HistorialClientePageModule {
};
HistorialClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _historial_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialClientePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_historial_cliente_page__WEBPACK_IMPORTED_MODULE_6__["HistorialClientePage"]]
    })
], HistorialClientePageModule);



/***/ }),

/***/ "xuT/":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/historial-cliente/historial-cliente-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HistorialClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialClientePageRoutingModule", function() { return HistorialClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _historial_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial-cliente.page */ "2GjC");




const routes = [
    {
        path: '',
        component: _historial_cliente_page__WEBPACK_IMPORTED_MODULE_3__["HistorialClientePage"]
    }
];
let HistorialClientePageRoutingModule = class HistorialClientePageRoutingModule {
};
HistorialClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistorialClientePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-historial-cliente-historial-cliente-module.js.map