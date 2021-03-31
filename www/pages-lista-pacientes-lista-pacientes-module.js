(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lista-pacientes-lista-pacientes-module"],{

/***/ "BDJU":
/*!***************************************************************!*\
  !*** ./src/app/pages/lista-pacientes/lista-pacientes.page.ts ***!
  \***************************************************************/
/*! exports provided: ListaPacientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPacientesPage", function() { return ListaPacientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_pacientes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista-pacientes.page.html */ "chcB");
/* harmony import */ var _lista_pacientes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-pacientes.page.scss */ "RAl0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ListaPacientesPage = class ListaPacientesPage {
    constructor() { }
    ngOnInit() {
    }
};
ListaPacientesPage.ctorParameters = () => [];
ListaPacientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lista-pacientes',
        template: _raw_loader_lista_pacientes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_pacientes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListaPacientesPage);



/***/ }),

/***/ "CGH8":
/*!*************************************************************************!*\
  !*** ./src/app/pages/lista-pacientes/lista-pacientes-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListaPacientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPacientesPageRoutingModule", function() { return ListaPacientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lista_pacientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-pacientes.page */ "BDJU");




const routes = [
    {
        path: '',
        component: _lista_pacientes_page__WEBPACK_IMPORTED_MODULE_3__["ListaPacientesPage"]
    }
];
let ListaPacientesPageRoutingModule = class ListaPacientesPageRoutingModule {
};
ListaPacientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListaPacientesPageRoutingModule);



/***/ }),

/***/ "RAl0":
/*!*****************************************************************!*\
  !*** ./src/app/pages/lista-pacientes/lista-pacientes.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1wYWNpZW50ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "chcB":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-pacientes/lista-pacientes.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>listaPacientes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "yKb8":
/*!*****************************************************************!*\
  !*** ./src/app/pages/lista-pacientes/lista-pacientes.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListaPacientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPacientesPageModule", function() { return ListaPacientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lista_pacientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-pacientes-routing.module */ "CGH8");
/* harmony import */ var _lista_pacientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-pacientes.page */ "BDJU");







let ListaPacientesPageModule = class ListaPacientesPageModule {
};
ListaPacientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lista_pacientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaPacientesPageRoutingModule"]
        ],
        declarations: [_lista_pacientes_page__WEBPACK_IMPORTED_MODULE_6__["ListaPacientesPage"]]
    })
], ListaPacientesPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-lista-pacientes-lista-pacientes-module.js.map