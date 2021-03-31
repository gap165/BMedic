(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agendarcita-agendarcita-module"],{

/***/ "+jNm":
/*!*********************************************************!*\
  !*** ./src/app/pages/agendarcita/agendarcita.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VuZGFyY2l0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "GOF6":
/*!*******************************************************!*\
  !*** ./src/app/pages/agendarcita/agendarcita.page.ts ***!
  \*******************************************************/
/*! exports provided: AgendarcitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendarcitaPage", function() { return AgendarcitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agendarcita_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agendarcita.page.html */ "RFO6");
/* harmony import */ var _agendarcita_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agendarcita.page.scss */ "+jNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AgendarcitaPage = class AgendarcitaPage {
    constructor() {
        this.optionsRange = {
            monthPickerFormat: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
            monthFormat: 'MMM ,YYYY',
            weekdays: ['Dom', 'Lun', 'Mar', 'Mir', 'Jue', 'Vie', 'Sab'],
            weekStart: 1,
        };
    }
    ngOnInit() {
    }
};
AgendarcitaPage.ctorParameters = () => [];
AgendarcitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agendarcita',
        template: _raw_loader_agendarcita_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agendarcita_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgendarcitaPage);



/***/ }),

/***/ "LMrE":
/*!*********************************************************!*\
  !*** ./src/app/pages/agendarcita/agendarcita.module.ts ***!
  \*********************************************************/
/*! exports provided: AgendarcitaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendarcitaPageModule", function() { return AgendarcitaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agendarcita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agendarcita-routing.module */ "qJzc");
/* harmony import */ var _agendarcita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agendarcita.page */ "GOF6");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");









let AgendarcitaPageModule = class AgendarcitaPageModule {
};
AgendarcitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agendarcita_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendarcitaPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_agendarcita_page__WEBPACK_IMPORTED_MODULE_6__["AgendarcitaPage"]]
        /*   providers:[{provide: LOCALE_ID, useValue: 'es-ec'}] */
    })
], AgendarcitaPageModule);



/***/ }),

/***/ "RFO6":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agendarcita/agendarcita.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"agendar cita\"></app-header>\n\n<ion-content >\n    <br>\n        <ion-card>\n            <ion-calendar\n            [(ngModel)]=\"dateRange\" \n            [options]=\"optionsRange\" \n            [type]=\"type\" \n            [format]=\"'YYYY-MM-DD'\">\n            </ion-calendar>\n        </ion-card>\n      \n        <ion-item>\n            <ion-label>Hora de consulta</ion-label>\n            <ion-select placeholder=\"Seleccione\">\n              <ion-select-option value=\"f\">12:00</ion-select-option>\n              <ion-select-option value=\"m\">12:40</ion-select-option>\n            </ion-select>\n          </ion-item>  \n      \n           \n        <ion-item>\n            <ion-label>Medico</ion-label>\n            <ion-select placeholder=\"Seleccione\">\n              <ion-select-option value=\"f\">Juan</ion-select-option>\n              <ion-select-option value=\"m\">Pedro</ion-select-option>\n            </ion-select>\n          </ion-item>  \n   <br>\n          <ion-button color=\"primary\"  shape=\"round\" expand=\"block\" routerLink =\"/tabs/inicio\">\n            GUARDAR CITA MÉDICA\n          </ion-button>\n    \n</ion-content>");

/***/ }),

/***/ "qJzc":
/*!*****************************************************************!*\
  !*** ./src/app/pages/agendarcita/agendarcita-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AgendarcitaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendarcitaPageRoutingModule", function() { return AgendarcitaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agendarcita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agendarcita.page */ "GOF6");




const routes = [
    {
        path: '',
        component: _agendarcita_page__WEBPACK_IMPORTED_MODULE_3__["AgendarcitaPage"]
    }
];
let AgendarcitaPageRoutingModule = class AgendarcitaPageRoutingModule {
};
AgendarcitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgendarcitaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-agendarcita-agendarcita-module.js.map