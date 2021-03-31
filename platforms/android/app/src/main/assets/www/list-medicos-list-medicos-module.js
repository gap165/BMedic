(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-medicos-list-medicos-module"],{

/***/ "3r4O":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-medicos/list-medicos.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW1lZGljb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "6I7O":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-medicos/list-medicos.module.ts ***!
  \***********************************************************/
/*! exports provided: ListMedicosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMedicosPageModule", function() { return ListMedicosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_medicos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-medicos-routing.module */ "u1yY");
/* harmony import */ var _list_medicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-medicos.page */ "tL6N");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ListMedicosPageModule = class ListMedicosPageModule {
};
ListMedicosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_medicos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListMedicosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_list_medicos_page__WEBPACK_IMPORTED_MODULE_6__["ListMedicosPage"]]
    })
], ListMedicosPageModule);



/***/ }),

/***/ "Dai9":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-medicos/list-medicos.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Medicos\"></app-header>\n\n<ion-content>\n    <ion-list>\n        <ion-card mode=\"ios\">\n        <ion-item *ngFor=\"let item of listamedicos\"> \n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"3\">\n                    <br>\n                    <ion-avatar>\n                        <img src=\"../assets/imagenes/medico.png\">\n                      </ion-avatar>\n                  \n                   </ion-col>\n                   <ion-col size=\"9\">\n                    <ion-label class=\"ion-text-wrap\">\n                      <ion-text>  \n                        <h3 class=\"ion-text-uppercase\" >Dr/a.: {{item.nombreD}}</h3>\n                      </ion-text>\n                      <ion-text>  \n                         <h3 >Dirección: {{item.direccion_doctor}}</h3>\n                       </ion-text>\n                       <ion-text>  \n                         <h3 >Celular: {{item.telefono_doctor}}</h3>\n                       </ion-text>\n                       <ion-text>  \n                         <h3 >Convencional: {{item.numero_doc}}</h3>\n                       </ion-text>\n                 </ion-label>\n                  </ion-col>\n              </ion-row>              \n                \n               \n              \n            </ion-grid>  \n       </ion-item>  \n    </ion-card>\n            \n </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "tL6N":
/*!*********************************************************!*\
  !*** ./src/app/pages/list-medicos/list-medicos.page.ts ***!
  \*********************************************************/
/*! exports provided: ListMedicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMedicosPage", function() { return ListMedicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_medicos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-medicos.page.html */ "Dai9");
/* harmony import */ var _list_medicos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-medicos.page.scss */ "3r4O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_ws_b_medic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/ws-b-medic.service */ "Pgpz");





let ListMedicosPage = class ListMedicosPage {
    constructor(webServiceMedica) {
        this.webServiceMedica = webServiceMedica;
        this.listamedicos = [];
        this.webServiceMedica
            .listmedicos()
            .subscribe((success) => {
            this.listamedicos = success;
            console.log('lista medicos', success);
        });
    }
    ngOnInit() {
    }
};
ListMedicosPage.ctorParameters = () => [
    { type: _service_ws_b_medic_service__WEBPACK_IMPORTED_MODULE_4__["WsBMedicService"] }
];
ListMedicosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-medicos',
        template: _raw_loader_list_medicos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_medicos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListMedicosPage);



/***/ }),

/***/ "u1yY":
/*!*******************************************************************!*\
  !*** ./src/app/pages/list-medicos/list-medicos-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListMedicosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMedicosPageRoutingModule", function() { return ListMedicosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_medicos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-medicos.page */ "tL6N");




const routes = [
    {
        path: '',
        component: _list_medicos_page__WEBPACK_IMPORTED_MODULE_3__["ListMedicosPage"]
    }
];
let ListMedicosPageRoutingModule = class ListMedicosPageRoutingModule {
};
ListMedicosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListMedicosPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=list-medicos-list-medicos-module.js.map