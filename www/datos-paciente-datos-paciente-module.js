(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datos-paciente-datos-paciente-module"],{

/***/ "46Xq":
/*!***********************************************************************!*\
  !*** ./src/app/pages/datos-paciente/datos-paciente-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: DatosPacientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPacientePageRoutingModule", function() { return DatosPacientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datos_paciente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datos-paciente.page */ "V6QU");




const routes = [
    {
        path: '',
        component: _datos_paciente_page__WEBPACK_IMPORTED_MODULE_3__["DatosPacientePage"]
    }
];
let DatosPacientePageRoutingModule = class DatosPacientePageRoutingModule {
};
DatosPacientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatosPacientePageRoutingModule);



/***/ }),

/***/ "9moX":
/*!***************************************************************!*\
  !*** ./src/app/pages/datos-paciente/datos-paciente.module.ts ***!
  \***************************************************************/
/*! exports provided: DatosPacientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPacientePageModule", function() { return DatosPacientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _datos_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datos-paciente-routing.module */ "46Xq");
/* harmony import */ var _datos_paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datos-paciente.page */ "V6QU");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let DatosPacientePageModule = class DatosPacientePageModule {
};
DatosPacientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _datos_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatosPacientePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_datos_paciente_page__WEBPACK_IMPORTED_MODULE_6__["DatosPacientePage"]]
    })
], DatosPacientePageModule);



/***/ }),

/***/ "Osgw":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos-paciente/datos-paciente.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Datos\"></app-header>\n\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "Rkg4":
/*!***************************************************************!*\
  !*** ./src/app/pages/datos-paciente/datos-paciente.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRvcy1wYWNpZW50ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "V6QU":
/*!*************************************************************!*\
  !*** ./src/app/pages/datos-paciente/datos-paciente.page.ts ***!
  \*************************************************************/
/*! exports provided: DatosPacientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPacientePage", function() { return DatosPacientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datos_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datos-paciente.page.html */ "Osgw");
/* harmony import */ var _datos_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datos-paciente.page.scss */ "Rkg4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DatosPacientePage = class DatosPacientePage {
    constructor() { }
    ngOnInit() {
    }
};
DatosPacientePage.ctorParameters = () => [];
DatosPacientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-datos-paciente',
        template: _raw_loader_datos_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_datos_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DatosPacientePage);



/***/ })

}]);
//# sourceMappingURL=datos-paciente-datos-paciente-module.js.map