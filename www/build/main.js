webpackJsonp([4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentPage = /** @class */ (function () {
    function AppointmentPage(navCtrl, navParams, dbFirebase, datePipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
        this.datePipe = datePipe;
    }
    AppointmentPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentPage');
    };
    AppointmentPage.prototype.isBeforeToday = function (date) {
        var now = new Date();
        var today = this.datePipe.transform(now, 'yyyy-MM-dd');
        var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
        return today > dateStr;
    };
    AppointmentPage.prototype.createAppointment = function (value) {
        var number = this.navParams.get('securityNumber');
        var appointment = {
            date: value.date,
            time: value.time,
            securityNumber: number
        };
        if (!this.isBeforeToday(appointment.date)) {
            this.dbFirebase.addRemainingAppointment(appointment);
            document.getElementById("modalBackground1").style.display = "block";
        }
        else {
            document.getElementById("modalBackground2").style.display = "block";
        }
    };
    AppointmentPage.prototype.exitModal = function () {
        document.getElementById("modalBackground2").style.display = "none";
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment',template:/*ion-inline-start:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\appointment\appointment.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img id="backButton" src="../../assets/imgs/back.png" alt="back" (click)="goBack()">\n      Medicitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="body">\n  <form (ngSubmit)="createAppointment(f.value)" #f="ngForm">\n    <p>Selecciona el tipo de cita</p>\n    <select>\n      <option value="doctor">Médico de familia</option>\n      <option value="nursing">Personal de enfermería</option>\n      <option value="specialist">Médico especialista</option>\n    </select>\n    <div id="appointmentDay">\n      <p>Selecciona el dia de tu cita</p>\n      <input type="date" name="date" ngModel required>\n      <img src="../../assets/imgs/calendario.png" alt="calendario">\n    </div>\n    <div id="appointmentTime">\n      <p>Selecciona la hora de tu cita</p>\n      <select id="time" name="time" ngModel required>\n        <option value="17:15">17:15</option>\n        <option value="17:45">17:45</option>\n        <option value="18:15">18:15</option>\n        <option value="18:30">18:30</option>\n        <option value="19:00">19:00</option>\n        <option value="19:45">19:45</option>\n      </select>\n      <img src="../../assets/imgs/reloj.png" alt="reloj">\n    </div>\n    <button ion-button id="save" type="submit" [disabled]="!f.valid">Confirmar</button>\n    </form>\n    <div id="modalBackground1">\n      <div class="modalBox">\n        <img id="tick" src="../../assets/imgs/tick.png" alt="tick">\n        <p>Su cita se ha realizado con exito</p>\n        <button ion-button class="confirm" (click)="goBack()">Confirmar</button>\n      </div>\n    </div>\n    <div id="modalBackground2">\n      <div class="modalBox">\n        <img id="sadFace" src="../../assets/imgs/sadFace.png" alt="sadFace">\n        <p>No puedes realizar una cita anterior a hoy</p>\n        <button ion-button class="confirm" (click)="exitModal()">Confirmar</button>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\appointment\appointment.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(40);
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
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorPage = /** @class */ (function () {
    function DoctorPage(navCtrl, navParams, dbFirebase, datePipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
        this.datePipe = datePipe;
        this.remainingAppointments = [];
    }
    DoctorPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorPage');
    };
    DoctorPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getRemainingAppointments().subscribe(function (listaCitas) { _this.remainingAppointments = listaCitas; _this.deleteOldRemainingAppointments(_this.remainingAppointments); });
    };
    DoctorPage.prototype.isToday = function (date) {
        var now = new Date();
        var today = this.datePipe.transform(now, 'yyyy-MM-dd');
        var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
        return today == dateStr;
    };
    DoctorPage.prototype.delayAppointment = function () {
        if (this.remainingAppointments.length > 1) {
            var appointment1 = this.remainingAppointments[0];
            var appointment2 = this.remainingAppointments[1];
            this.remainingAppointments[0] = appointment2;
            this.remainingAppointments[1] = appointment1;
        }
    };
    DoctorPage.prototype.deleteAppointment = function () {
        if (this.remainingAppointments.length > 0) {
            this.dbFirebase.addFinishedAppointment(this.remainingAppointments[0]);
            this.dbFirebase.deleteRemainingAppointment(this.remainingAppointments[0]);
        }
    };
    DoctorPage.prototype.isBeforeToday = function (date) {
        var now = new Date();
        var today = this.datePipe.transform(now, 'yyyy-MM-dd');
        var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
        return today > dateStr;
    };
    DoctorPage.prototype.deleteOldRemainingAppointments = function (remainingAppointments) {
        var i = 0;
        for (i = 0; i < remainingAppointments.length; i++) {
            if (this.isBeforeToday(remainingAppointments[i].date)) {
                this.dbFirebase.deleteRemainingAppointment(remainingAppointments[i]);
            }
        }
    };
    DoctorPage.prototype.deleteOldFinishedAppointments = function (finishedAppointments) {
        var i = 0;
        for (i = 0; i < finishedAppointments.length; i++) {
            if (this.isBeforeToday(finishedAppointments[i].date)) {
                this.dbFirebase.deleteFinishedAppointment(finishedAppointments[i]);
            }
        }
    };
    DoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctor',template:/*ion-inline-start:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\doctor\doctor.html"*/'\n<ng-container *ngFor=\'let remainingAppointment of appointments\'>\n    <p class="remainingAppointment" *ngIf=\'remainingAppointment.finished == 0 && isToday(remainingAppointment.date)\'>{{remainingAppointment.time}}</p>\n</ng-container><ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img id="backButton" src="../../assets/imgs/back.png" alt="back" (click)="goBack()">\n      Medicitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="body">\n  <p>Citas en tiempo real</p>\n  <div id="timeTable">\n    <ng-container *ngFor=\'let remainingAppointment of remainingAppointments\'>\n        <p class="remainingAppointment" *ngIf=\'isToday(remainingAppointment.date)\'>{{remainingAppointment.time}}</p>\n    </ng-container>\n  </div>\n  <button ion-button id="downButton" (click)="delayAppointment()">Retrasar paciente</button>\n  <button ion-button id="delete" (click)="deleteAppointment()">Llamar paciente</button>\n</ion-content>\n'/*ion-inline-end:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\doctor\doctor.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], DoctorPage);
    return DoctorPage;
}());

//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_doctor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(57);
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
 * Generated class for the SignInDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInDoctorPage = /** @class */ (function () {
    function SignInDoctorPage(navCtrl, navParams, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
    }
    SignInDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInDoctorPage');
    };
    SignInDoctorPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignInDoctorPage.prototype.signInDoctor = function (value) {
        var _this = this;
        this.dbFirebase.getDoctors().subscribe(function (doctors) {
            var i = 0;
            for (i = 0; i < doctors.length; i++) {
                if (doctors[i].date == value.date && doctors[i].doctorNumber == value.number) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__doctor_doctor__["a" /* DoctorPage */]);
                    return 0;
                }
            }
            alert("Doctor no válido");
        });
    };
    SignInDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in-doctor',template:/*ion-inline-start:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\sign-in-doctor\sign-in-doctor.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img id="backButton" src="../../assets/imgs/back.png" alt="back" (click)="goBack()">\n      Medicitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="body">\n  <form (ngSubmit)="signInDoctor(f.value)" #f="ngForm">\n    <div id="number">\n      <p>Número de colegiado</p>\n      <input type="number" name="number" ngModel required>\n    </div>\n    <div id="code">\n      <p>Código de seguridad</p>\n      <input type="date" name="date" ngModel required>\n    </div>\n    <button ion-button id="save" type="submit" [disabled]="!f.valid">Confirmar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\sign-in-doctor\sign-in-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], SignInDoctorPage);
    return SignInDoctorPage;
}());

//# sourceMappingURL=sign-in-doctor.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_options_patient_options__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(57);
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
 * Generated class for the SignInPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPatientPage = /** @class */ (function () {
    function SignInPatientPage(navCtrl, navParams, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
    }
    SignInPatientPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignInPatientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPatientPage');
    };
    SignInPatientPage.prototype.signInPatient = function (value) {
        var _this = this;
        this.dbFirebase.getUsers().subscribe(function (users) {
            var i = 0;
            for (i = 0; i < users.length; i++) {
                if (users[i].date == value.date && users[i].securityNumber == value.number) {
                    _this.securityNumber = value.number;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__patient_options_patient_options__["a" /* PatientOptionsPage */], { 'securityNumber': _this.securityNumber });
                    return 0;
                }
            }
            alert("Usuario no válido");
        });
    };
    SignInPatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in-patient',template:/*ion-inline-start:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\sign-in-patient\sign-in-patient.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img id="backButton" src="../../assets/imgs/back.png" alt="back" (click)="goBack()">\n      Medicitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="body">\n  <form (ngSubmit)="signInPatient(f.value)" #f="ngForm">\n    <div id="number">\n      <p>Número de afiliación a la seguridad social</p>\n      <input type="number" name="number" ngModel required>\n    </div>\n    <div id="code">\n      <p>Fecha de nacimiento</p>\n      <input type="date" name="date" ngModel required>\n    </div>\n    <button ion-button id="save" type="submit" [disabled]="!f.valid">Confirmar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\sign-in-patient\sign-in-patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], SignInPatientPage);
    return SignInPatientPage;
}());

//# sourceMappingURL=sign-in-patient.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_appointment__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_table_time_table__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientOptionsPage = /** @class */ (function () {
    function PatientOptionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PatientOptionsPage.prototype.goToAppointmentPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointment_appointment__["a" /* AppointmentPage */], { 'securityNumber': this.navParams.get('securityNumber') });
    };
    PatientOptionsPage.prototype.goToTimeTablePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__time_table_time_table__["a" /* TimeTablePage */], { 'securityNumber': this.navParams.get('securityNumber') });
    };
    PatientOptionsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PatientOptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientOptionsPage');
    };
    PatientOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patient-options',template:/*ion-inline-start:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\patient-options\patient-options.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img id="backButton" src="../../assets/imgs/back.png" alt="back" (click)="goBack()">\n      Medicitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="body">\n  <div id="frame">\n    <p>Elige a qué funcionalidad quieres acceder</p>\n    <button ion-button  id="patientButton" (click)="goToAppointmentPage()">Pedir cita</button>\n    <button ion-button id="doctorButton" (click)="goToTimeTablePage()">Ver horario</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\patient-options\patient-options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PatientOptionsPage);
    return PatientOptionsPage;
}());

//# sourceMappingURL=patient-options.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(285);
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
 * Generated class for the TimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeTablePage = /** @class */ (function () {
    function TimeTablePage(navCtrl, navParams, dbFirebase, datePipe, notifications) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
        this.datePipe = datePipe;
        this.notifications = notifications;
        this.finishedAppointments = [];
        this.remainingAppointments = [];
        this.notificationSent = false;
    }
    TimeTablePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    TimeTablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimeTablePage');
    };
    TimeTablePage.prototype.deleteOldRemainingAppointments = function (remainingAppointments) {
        var _this = this;
        var i = 0;
        for (i = 0; i < remainingAppointments.length; i++) {
            if (this.isBeforeToday(remainingAppointments[i].date)) {
                this.dbFirebase.deleteRemainingAppointment(remainingAppointments[i]);
                this.dbFirebase.getRemainingAppointments().subscribe(function (listaCitas) { _this.remainingAppointments = listaCitas; });
            }
        }
    };
    TimeTablePage.prototype.deleteOldFinishedAppointments = function (finishedAppointments) {
        var _this = this;
        var i = 0;
        for (i = 0; i < finishedAppointments.length; i++) {
            if (this.isBeforeToday(finishedAppointments[i].date)) {
                this.dbFirebase.deleteFinishedAppointment(finishedAppointments[i]);
                this.dbFirebase.getFinishedAppointments().subscribe(function (listaCitas) { _this.finishedAppointments = listaCitas; });
            }
        }
    };
    TimeTablePage.prototype.deleteOldAppointments = function () {
        var _this = this;
        this.dbFirebase.getFinishedAppointments().subscribe(function (listaCitas) {
            _this.finishedAppointments = listaCitas;
            _this.deleteOldFinishedAppointments(_this.finishedAppointments);
            _this.securityNumber = _this.navParams.get('securityNumber');
        });
        this.dbFirebase.getRemainingAppointments().subscribe(function (listaCitas) {
            _this.remainingAppointments = listaCitas;
            _this.deleteOldRemainingAppointments(_this.remainingAppointments);
            _this.securityNumber = _this.navParams.get('securityNumber');
            if (_this.remainingAppointments.length > 0 && _this.isToday(_this.remainingAppointments[0].date) && _this.remainingAppointments[0].securityNumber == _this.securityNumber) {
                console.log(_this.remainingAppointments[0].securityNumber + " - " + _this.securityNumber);
                _this.sendNotification();
            }
        });
    };
    TimeTablePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter TimeTablePage');
        this.deleteOldAppointments();
    };
    TimeTablePage.prototype.isToday = function (date) {
        var now = new Date();
        var today = this.datePipe.transform(now, 'yyyy-MM-dd');
        var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
        return today == dateStr;
    };
    TimeTablePage.prototype.isBeforeToday = function (date) {
        var now = new Date();
        var today = this.datePipe.transform(now, 'yyyy-MM-dd');
        var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
        return today > dateStr;
    };
    TimeTablePage.prototype.getColor = function (number) {
        if (number == this.securityNumber) {
            return '#3F7FBF';
        }
        else {
            return 'black';
        }
    };
    TimeTablePage.prototype.sendNotification = function () {
        if (!this.notificationSent) {
            this.notifications.schedule({
                id: 1,
                text: "¡Es tu turno! Puedes entrar a la consulta.",
                led: "white"
            });
            this.notificationSent = true;
        }
    };
    TimeTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time-table',template:/*ion-inline-start:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\time-table\time-table.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img id="backButton" src="../../assets/imgs/back.png" alt="back" (click)="goBack()">\n      Medicitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="body">\n  <p>Citas en tiempo real</p>\n  <div id="timeTable">\n    <ng-container *ngFor=\'let finishedAppointment of finishedAppointments\'>\n        <p class="finishedAppointment" [style.color]="getColor(finishedAppointment.securityNumber)">{{finishedAppointment.time}}</p>\n    </ng-container>\n    <ng-container *ngFor=\'let remainingAppointment of remainingAppointments\'>\n        <p class="remainingAppointment" *ngIf=\'isToday(remainingAppointment.date)\' [style.color]="getColor(remainingAppointment.securityNumber)">{{remainingAppointment.time}}</p>\n    </ng-container>\n  </div>\n  <p><span>Tu cita</span> tiene aproximadamente 20 minutos de retraso.</p>\n</ion-content>\n'/*ion-inline-end:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\time-table\time-table.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], TimeTablePage);
    return TimeTablePage;
}());

//# sourceMappingURL=time-table.js.map

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appointment/appointment.module": [
		551,
		3
	],
	"../pages/doctor/doctor.module": [
		552,
		2
	],
	"../pages/sign-in-doctor/sign-in-doctor.module": [
		553,
		1
	],
	"../pages/sign-in-patient/sign-in-patient.module": [
		554,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 264;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_doctor_sign_in_doctor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_patient_sign_in_patient__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.goToSignInPatientPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_in_patient_sign_in_patient__["a" /* SignInPatientPage */]);
    };
    HomePage.prototype.goToDoctorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_in_doctor_sign_in_doctor__["a" /* SignInDoctorPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Medicitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="body">\n  <div id="frame">\n    <p>Inicia sesión para acceder a la plataforma</p>\n    <button ion-button  id="patientButton" (click)="goToSignInPatientPage()">Iniciar como paciente</button>\n    <button ion-button id="doctorButton" (click)="goToDoctorPage()">Iniciar como personal sanitario</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(443);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fireBaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_doctor_doctor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_patient_options_patient_options__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_time_table_time_table__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_patient_sign_in_patient__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_doctor_sign_in_doctor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_firebase_db_firebase_db__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_local_notifications__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var fireBaseConfig = {
    apiKey: "AIzaSyDN7hcv1WbUqxI5I31NrQ7UDfo7OsDIKbU",
    authDomain: "medicitas-152e3.firebaseapp.com",
    databaseURL: "https://medicitas-152e3.firebaseio.com",
    projectId: "medicitas-152e3",
    storageBucket: "medicitas-152e3.appspot.com",
    messagingSenderId: "16303439601"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_doctor_doctor__["a" /* DoctorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_patient_options_patient_options__["a" /* PatientOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_time_table_time_table__["a" /* TimeTablePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_patient_sign_in_patient__["a" /* SignInPatientPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_doctor_sign_in_doctor__["a" /* SignInDoctorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/appointment/appointment.module#AppointmentPageModule', name: 'AppointmentPage', segment: 'appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor/doctor.module#DoctorPageModule', name: 'DoctorPage', segment: 'doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in-doctor/sign-in-doctor.module#SignInDoctorPageModule', name: 'SignInDoctorPage', segment: 'sign-in-doctor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in-patient/sign-in-patient.module#SignInPatientPageModule', name: 'SignInPatientPage', segment: 'sign-in-patient', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(fireBaseConfig),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["AngularFireDatabaseModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_doctor_doctor__["a" /* DoctorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_patient_options_patient_options__["a" /* PatientOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_time_table_time_table__["a" /* TimeTablePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_patient_sign_in_patient__["a" /* SignInPatientPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_doctor_sign_in_doctor__["a" /* SignInDoctorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_appointment_appointment__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_doctor_doctor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_patient_options_patient_options__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_time_table_time_table__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_patient_sign_in_patient__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_doctor_sign_in_doctor__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'AppointmentPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_appointment_appointment__["a" /* AppointmentPage */] },
            { title: 'DoctorPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_doctor_doctor__["a" /* DoctorPage */] },
            { title: 'PatientOptionsPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_patient_options_patient_options__["a" /* PatientOptionsPage */] },
            { title: 'TimeTablePage', component: __WEBPACK_IMPORTED_MODULE_8__pages_time_table_time_table__["a" /* TimeTablePage */] },
            { title: 'SignInPatientPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_patient_sign_in_patient__["a" /* SignInPatientPage */] },
            { title: 'SignInDoctorPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_doctor_sign_in_doctor__["a" /* SignInDoctorPage */] },
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"I:\Carlos\Documents\IonicProjects\MedicitasP2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
@Injectable()
export class FirebaseDbProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseDbProvider Provider');
  }

}*/
//import { HttpClient } from '@angular/common/http';


var FirebaseDbProvider = /** @class */ (function () {
    function FirebaseDbProvider(afDB) {
        this.afDB = afDB;
        this.finishedAppointmentsRef = this.afDB.list('finishedAppointments');
        this.remainingAppointmentsRef = this.afDB.list('remainingAppointments');
        this.usersRef = this.afDB.list('users');
        this.doctorsRef = this.afDB.list('doctors');
        console.log('Hello FirebaseDbProvider Provider');
    }
    FirebaseDbProvider.prototype.addFinishedAppointment = function (appointment) {
        return this.afDB.database.ref('finishedAppointments/' + appointment.date + appointment.time).set(appointment);
    };
    FirebaseDbProvider.prototype.deleteFinishedAppointment = function (appointment) {
        this.afDB.database.ref('finishedAppointments/' + appointment.date + appointment.time).remove();
    };
    FirebaseDbProvider.prototype.getFinishedAppointments = function () {
        return this.finishedAppointmentsRef.valueChanges();
    };
    FirebaseDbProvider.prototype.addRemainingAppointment = function (appointment) {
        return this.afDB.database.ref('remainingAppointments/' + appointment.date + appointment.time).set(appointment);
    };
    FirebaseDbProvider.prototype.deleteRemainingAppointment = function (appointment) {
        this.afDB.database.ref('remainingAppointments/' + appointment.date + appointment.time).remove();
    };
    FirebaseDbProvider.prototype.getRemainingAppointments = function () {
        return this.remainingAppointmentsRef.valueChanges();
    };
    FirebaseDbProvider.prototype.getUsers = function () {
        return this.usersRef.valueChanges();
    };
    FirebaseDbProvider.prototype.getDoctors = function () {
        return this.doctorsRef.valueChanges();
    };
    FirebaseDbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["AngularFireDatabase"]])
    ], FirebaseDbProvider);
    return FirebaseDbProvider;
}());

//# sourceMappingURL=firebase-db.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map