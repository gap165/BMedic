(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cita-paciente-cita-paciente-module"],{

/***/ "9HZV":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cita-paciente/cita-paciente-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CitaPacientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitaPacientePageRoutingModule", function() { return CitaPacientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cita_paciente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cita-paciente.page */ "dJ7w");




const routes = [
    {
        path: '',
        component: _cita_paciente_page__WEBPACK_IMPORTED_MODULE_3__["CitaPacientePage"]
    }
];
let CitaPacientePageRoutingModule = class CitaPacientePageRoutingModule {
};
CitaPacientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CitaPacientePageRoutingModule);



/***/ }),

/***/ "9qLE":
/*!*************************************************************!*\
  !*** ./src/app/pages/cita-paciente/cita-paciente.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXRhLXBhY2llbnRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "dJ7w":
/*!***********************************************************!*\
  !*** ./src/app/pages/cita-paciente/cita-paciente.page.ts ***!
  \***********************************************************/
/*! exports provided: CitaPacientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitaPacientePage", function() { return CitaPacientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cita_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cita-paciente.page.html */ "sQe3");
/* harmony import */ var _cita_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cita-paciente.page.scss */ "9qLE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CitaPacientePage = class CitaPacientePage {
    constructor() { }
    ngOnInit() {
    }
};
CitaPacientePage.ctorParameters = () => [];
CitaPacientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cita-paciente',
        template: _raw_loader_cita_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cita_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CitaPacientePage);



/***/ }),

/***/ "e3MK":
/*!*************************************************************!*\
  !*** ./src/app/pages/cita-paciente/cita-paciente.module.ts ***!
  \*************************************************************/
/*! exports provided: CitaPacientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitaPacientePageModule", function() { return CitaPacientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cita_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cita-paciente-routing.module */ "9HZV");
/* harmony import */ var _cita_paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cita-paciente.page */ "dJ7w");







let CitaPacientePageModule = class CitaPacientePageModule {
};
CitaPacientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cita_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__["CitaPacientePageRoutingModule"]
        ],
        declarations: [_cita_paciente_page__WEBPACK_IMPORTED_MODULE_6__["CitaPacientePage"]]
    })
], CitaPacientePageModule);



/***/ }),

/***/ "sQe3":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cita-paciente/cita-paciente.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>citaPaciente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-cita-paciente-cita-paciente-module.js.map