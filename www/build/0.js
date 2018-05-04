webpackJsonp([0],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditPageModule", function() { return ContactEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_edit__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactEditPageModule = /** @class */ (function () {
    function ContactEditPageModule() {
    }
    ContactEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_edit__["a" /* ContactEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_edit__["a" /* ContactEditPage */]),
            ],
        })
    ], ContactEditPageModule);
    return ContactEditPageModule;
}());

//# sourceMappingURL=contact-edit.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_contact_contact__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactEditPage = /** @class */ (function () {
    function ContactEditPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        // maneira 1
        this.contact = this.navParams.data.contact || {};
        this.createForm();
        // // maneira 2
        // this.contact = { };
        // this.createForm();
        // if (this.navParams.data.key) {
        //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
        //     subscribe.unsubscribe();
        //     this.contact = c;
        //     this.createForm();
        //   })
        // }
        this.setupPageTitle();
    }
    ContactEditPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.contact ? 'Alterando contato' : 'Novo contato';
    };
    ContactEditPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.contact.key],
            // name: [this.contact.name, Validators.required],
            // tel: [this.contact.tel, Validators.required],
            nameProduto: [this.contact.nameProduto, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            codProturo: [this.contact.codProturo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            qtdProturo: [this.contact.qtdProturo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dataVencimento: [this.contact.dataVencimento, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    ContactEditPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ContactEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactEditPage');
    };
    ContactEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact-edit',template:/*ion-inline-start:"/Users/admin/Documents/workspace/IonicProjects/AppControleProduto/src/pages/contact-edit/contact-edit.html"*/'<!--\n  Generated template for the ContactEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n\n    <ion-item>\n      <ion-label stacked>Nome Produto</ion-label>\n      <ion-input type="text" formControlName="nameProduto"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.nameProduto.valid && (form.controls.nameProduto.dirty || form.controls.nameProduto.touched)"\n      color="danger">\n      <div [hidden]="!form.controls.nameProduto.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Código Produto</ion-label>\n      <ion-input type="text" formControlName="codProturo"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.codProturo.valid && (form.controls.codProturo.dirty || form.controls.codProturo.touched)"\n      color="danger">\n      <div [hidden]="!form.controls.codProturo.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Quantidade Produto</ion-label>\n      <ion-input type="text" formControlName="qtdProturo"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.qtdProturo.valid && (form.controls.qtdProturo.dirty || form.controls.qtdProturo.touched)"\n      color="danger">\n      <div [hidden]="!form.controls.qtdProturo.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Data Vencimento Produto</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" max="2030" type="text" formControlName="dataVencimento"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.dataVencimento.valid && (form.controls.dataVencimento.dirty || form.controls.dataVencimento.touched)"\n      color="danger">\n      <div [hidden]="!form.controls.dataVencimento.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/workspace/IonicProjects/AppControleProduto/src/pages/contact-edit/contact-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__providers_contact_contact__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
    ], ContactEditPage);
    return ContactEditPage;
}());

//# sourceMappingURL=contact-edit.js.map

/***/ })

});
//# sourceMappingURL=0.js.map