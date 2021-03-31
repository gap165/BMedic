(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-citas-agendadas-citas-agendadas-module"],{

/***/ "/dmR":
/*!*************************************************************************!*\
  !*** ./src/app/pages/citas-agendadas/citas-agendadas-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CitasAgendadasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasAgendadasPageRoutingModule", function() { return CitasAgendadasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _citas_agendadas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./citas-agendadas.page */ "cf8t");




const routes = [
    {
        path: '',
        component: _citas_agendadas_page__WEBPACK_IMPORTED_MODULE_3__["CitasAgendadasPage"]
    }
];
let CitasAgendadasPageRoutingModule = class CitasAgendadasPageRoutingModule {
};
CitasAgendadasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CitasAgendadasPageRoutingModule);



/***/ }),

/***/ "XE1G":
/*!*****************************************************************!*\
  !*** ./src/app/pages/citas-agendadas/citas-agendadas.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXRhcy1hZ2VuZGFkYXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "cf8t":
/*!***************************************************************!*\
  !*** ./src/app/pages/citas-agendadas/citas-agendadas.page.ts ***!
  \***************************************************************/
/*! exports provided: CitasAgendadasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasAgendadasPage", function() { return CitasAgendadasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_citas_agendadas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./citas-agendadas.page.html */ "ydDc");
/* harmony import */ var _citas_agendadas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./citas-agendadas.page.scss */ "XE1G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CitasAgendadasPage = class CitasAgendadasPage {
    constructor() { }
    ngOnInit() {
    }
};
CitasAgendadasPage.ctorParameters = () => [];
CitasAgendadasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-citas-agendadas',
        template: _raw_loader_citas_agendadas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_citas_agendadas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CitasAgendadasPage);



/***/ }),

/***/ "xwJk":
/*!*****************************************************************!*\
  !*** ./src/app/pages/citas-agendadas/citas-agendadas.module.ts ***!
  \*****************************************************************/
/*! exports provided: CitasAgendadasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasAgendadasPageModule", function() { return CitasAgendadasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _citas_agendadas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./citas-agendadas-routing.module */ "/dmR");
/* harmony import */ var _citas_agendadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./citas-agendadas.page */ "cf8t");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CitasAgendadasPageModule = class CitasAgendadasPageModule {
};
CitasAgendadasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _citas_agendadas_routing_module__WEBPACK_IMPORTED_MODULE_5__["CitasAgendadasPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_citas_agendadas_page__WEBPACK_IMPORTED_MODULE_6__["CitasAgendadasPage"]]
    })
], CitasAgendadasPageModule);



/***/ }),

/***/ "ydDc":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/citas-agendadas/citas-agendadas.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"citas medicas\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-citas-agendadas-citas-agendadas-module.js.map