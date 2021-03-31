(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "D2Ny":
/*!**************************************************!*\
  !*** ./src/app/components/input/input.module.ts ***!
  \**************************************************/
/*! exports provided: InputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return InputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input.component */ "LRb0");





let InputModule = class InputModule {
};
InputModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]],
    })
], InputModule);



/***/ }),

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");
/* harmony import */ var _components_input_input_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/input/input.module */ "D2Ny");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_input_input_module__WEBPACK_IMPORTED_MODULE_7__["InputModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-background {\n  --background: url('loM.jpg');\n}\n\n.login-background2 {\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  -webkit-backdrop-filter: blur(9.16106987px);\n          backdrop-filter: blur(9.16106987px);\n  --webkit-backdrop-filter: blur(9.161069869995117px);\n  background-color: rgba(0, 0, 0, 0.17);\n}\n\n.img {\n  width: 60%;\n  height: 60%;\n  margin: auto;\n  position: relative;\n  top: 2px;\n}\n\n.form-background {\n  position: relative;\n  margin-right: 24px;\n  margin-left: 24px;\n  margin: 12px;\n}\n\n.form-background ion-item {\n  --background: #dcd3d345;\n  color: white;\n  margin-top: 10px;\n}\n\n.form-background ion-item ion-icon {\n  margin-right: 12px;\n}\n\n.button-login {\n  color: palevioletred;\n  border: solid 1px white;\n  border-radius: 5px;\n  box-sizing: unset;\n  box-shadow: none !important;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUNHO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxtREFBQTtFQUNBLHFDQUFBO0FBRUw7O0FBQUc7RUFDQyxVQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFHTDs7QUFBRztFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFTDs7QUFESztFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR1A7O0FBRk87RUFDRSxrQkFBQTtBQUlUOztBQUdHO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQUwiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb24vbG9NLmpwZycpO1xyXG4gICB9XHJcbiAgIC5sb2dpbi1iYWNrZ3JvdW5kMntcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDkuMTYxMDY5ODY5OTk1MTE3cHgpO1xyXG4gICAgIC0td2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig5LjE2MTA2OTg2OTk5NTExN3B4KTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMTcpO1xyXG4gICB9XHJcbiAgIC5pbWd7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgIGhlaWdodDogNjAlOyBcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIHRvcDogMnB4O1xyXG4gICAgIH1cclxuICBcclxuICAgLmZvcm0tYmFja2dyb3VuZHtcclxuICAgICBcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgIG1hcmdpbjogMTJweDtcclxuICAgICBpb24taXRlbXtcclxuICAgICAgIC0tYmFja2dyb3VuZDogI2RjZDNkMzQ1O1xyXG4gICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICB9XHJcbiAgXHJcbiAgICAgfVxyXG4gIFxyXG4gICB9XHJcbiAgXHJcbiAgIC5idXR0b24tbG9naW57XHJcbiAgICAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbiAgICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgIGJveC1zaXppbmc6IHVuc2V0O1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICB9Il19 */");

/***/ }),

/***/ "LRb0":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./input.component.html */ "MeLy");
/* harmony import */ var _input_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.component.scss */ "P5M4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InputComponent = class InputComponent {
    constructor() { }
};
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
InputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-input',
        template: _raw_loader_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_input_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InputComponent);



/***/ }),

/***/ "MeLy":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item class=\"ion-margin-bottom\">\n  <ion-input [type]=\"type\" [placeholder]=\"placeholder\"></ion-input>\n  </ion-item>\n");

/***/ }),

/***/ "P5M4":
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height: 0px;\n}\nion-item ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px ;\n}\nion-item a {\n  font-size: 18px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUVJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0YscUJBQUE7RUFDQSxxQkFBQTtBQUROIiwiZmlsZSI6ImlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwcHg7XHJcblxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCA7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"login-background\">\n  <div class=\"login-background2\">\n    <ion-img class=\"img\" src=\"assets/icon/logoBM.png\"></ion-img>\n  \n    \n  \n      <form class=\"form-background\" >\n      <ion-item>  \n          <ion-input type=\"text\" placeholder=\"Usuario\" name=\"usuario\"  [(ngModel)]=\"usuario\" required>\n            <ion-icon name=\"person\"></ion-icon> </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-input type=\"password\" placeholder=\"Contraseña\" name=\"temporalclave\"  [(ngModel)]=\"temporalclave\" required>\n            <ion-icon name=\"lock-closed\"></ion-icon>  </ion-input>\n      </ion-item>\n  <br>\n      <ion-button \n      color=\"primary\"  \n      shape=\"round\" \n      expand=\"block\" \n      (click)=\"login()\">\n        INICIAR SESIÓN\n      </ion-button>\n  \n    </form>\n    \n    </div>\n\n \n</ion-content> \n\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_ws_b_medic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/ws-b-medic.service */ "Pgpz");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let LoginPage = class LoginPage {
    constructor(menu, webServiceMedica, storage, formBuilder, toastController, alertController, loadingController, router) {
        this.menu = menu;
        this.webServiceMedica = webServiceMedica;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.Datos = [];
        this.passwordShown = false;
        this.nameicon = 'eye-off';
        this.passwordtipo = 'password';
        this.usuario = 'administrador';
        this.temporalclave = '1234';
        this.menu.enable(false, 'first');
    }
    ngOnInit() { }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Por favor espere...",
            });
            loading.present();
            this.webServiceMedica
                .login(this.usuario, this.temporalclave)
                .subscribe((success) => {
                loading.dismiss();
                console.log('estiy aqui', success);
                if (success.usuario == undefined && success.temporalclave == undefined) {
                    this.mensajeToast("Datos Incorrectos");
                }
                else {
                    localStorage.setItem("id_rol", success.id_rol);
                    this.router.navigateByUrl('tabs/inicio');
                }
            }, (errornet) => {
                loading.dismiss();
                this.mensaje("No se pudo conectar con el Servicio API REST");
            });
        });
    }
    mensajeToast(texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texto,
                duration: 3000,
            });
            toast.present();
        });
    }
    mensaje(texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Alerta",
                message: texto,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    togglePass() {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordtipo = 'password';
            this.nameicon = 'eye-off';
        }
        else {
            this.passwordShown = true;
            this.passwordtipo = 'text';
            this.nameicon = 'eye';
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _service_ws_b_medic_service__WEBPACK_IMPORTED_MODULE_5__["WsBMedicService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map