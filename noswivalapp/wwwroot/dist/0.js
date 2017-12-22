webpackJsonp([0],Array(187).concat([
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var shared_1 = __webpack_require__(198);
var profile_routes_1 = __webpack_require__(249);
var profile_component_1 = __webpack_require__(230);
var profile_service_1 = __webpack_require__(225);
var user_info_1 = __webpack_require__(231);
var update_password_1 = __webpack_require__(232);
var user_photo_1 = __webpack_require__(233);
var other_accounts_1 = __webpack_require__(234);
var two_factor_auth_1 = __webpack_require__(235);
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                profile_routes_1.routing,
                shared_1.SharedModule
            ],
            declarations: [
                profile_component_1.ProfileComponent,
                user_info_1.UserInfoComponent,
                update_password_1.UpdatePasswordComponent,
                user_photo_1.UserPhotoComponent,
                other_accounts_1.OtherAccountsComponent,
                two_factor_auth_1.TwoFactorAuthComponent,
                two_factor_auth_1.EnableAuthenticatorComponent,
                two_factor_auth_1.ResetAuthenticatorComponent,
                two_factor_auth_1.RecoveryCodesComponent,
            ],
            providers: [profile_service_1.ProfileService]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;


/***/ }),
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ControlBase = /** @class */ (function () {
    function ControlBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.placeholder = options.placeholder || '';
        this.required = !!options.required;
        this.minlength = options.minlength;
        this.maxlength = options.maxlength;
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || '';
        this.class = options.class || '';
    }
    return ControlBase;
}());
exports.ControlBase = ControlBase;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code, fieldLength) {
        var config = {
            required: 'This is a required field',
            minlength: 'Minimum length is ' + fieldLength,
            maxlength: 'Maximum length is ' + fieldLength,
            invalidCreditCard: 'Invalid credit card number',
            invalidEmailAddress: 'Invalid email address',
            invalidPassword: 'Password must be at least 6 characters long, and contain a number and special character.'
        };
        return config[code];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value &&
            control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return undefined;
        }
        else {
            return { invalidCreditCard: true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!"@#$%^&*]{6,100}$/)) {
            return undefined;
        }
        else {
            return { invalidPassword: true };
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(194));
__export(__webpack_require__(206));
__export(__webpack_require__(211));
__export(__webpack_require__(214));
__export(__webpack_require__(195));
__export(__webpack_require__(192));


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(190));
__export(__webpack_require__(200));
__export(__webpack_require__(201));
__export(__webpack_require__(202));
__export(__webpack_require__(203));
__export(__webpack_require__(204));
__export(__webpack_require__(205));


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(191);
var validation_service_1 = __webpack_require__(192);
var FormControlService = /** @class */ (function () {
    function FormControlService() {
    }
    FormControlService.prototype.toControlGroup = function (controls) {
        var group = {};
        controls.forEach(function (control) {
            var validators = [];
            // Required
            if (control.required) {
                validators.push(forms_1.Validators.required);
            }
            // Minlength
            if (control.minlength) {
                validators.push(forms_1.Validators.minLength(control.minlength));
            }
            // Maxlength
            if (control.maxlength) {
                validators.push(forms_1.Validators.maxLength(control.maxlength));
            }
            // Email
            if (control.type === 'email') {
                validators.push(forms_1.Validators.email);
            }
            // Password
            if (control.type === 'password' && control.required) {
                validators.push(validation_service_1.ValidationService.passwordValidator);
            }
            group[control.key] = new forms_1.FormControl(control.value || '', validators);
        });
        return new forms_1.FormGroup(group);
    };
    FormControlService = __decorate([
        core_1.Injectable()
    ], FormControlService);
    return FormControlService;
}());
exports.FormControlService = FormControlService;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(199));


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(217));


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(196));
__export(__webpack_require__(193));
__export(__webpack_require__(197));
__export(__webpack_require__(218));


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var PageHeadingComponent = /** @class */ (function () {
    function PageHeadingComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PageHeadingComponent.prototype, "text", void 0);
    PageHeadingComponent = __decorate([
        core_1.Component({
            selector: 'appc-page-heading',
            template: "<h4>{{text}}</h4>"
        })
    ], PageHeadingComponent);
    return PageHeadingComponent;
}());
exports.PageHeadingComponent = PageHeadingComponent;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_base_1 = __webpack_require__(190);
var ControlCalendar = /** @class */ (function (_super) {
    __extends(ControlCalendar, _super);
    function ControlCalendar(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = options.type || 'calendar';
        return _this;
        // this.value = this.value ? this.formatDate(new Date(this.value)) : '';
    }
    return ControlCalendar;
}(control_base_1.ControlBase));
exports.ControlCalendar = ControlCalendar;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_base_1 = __webpack_require__(190);
var ControlCheckboxList = /** @class */ (function (_super) {
    __extends(ControlCheckboxList, _super);
    function ControlCheckboxList(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.options = options;
        _this.type = 'checkboxlist';
        _this.value = options.value;
        return _this;
    }
    ControlCheckboxList.prototype.updateCheckedOptions = function (option, event, form) {
        var val = form.value[this.options.key];
        // Check if item already exists, then remove it
        if (val.indexOf(option) > -1) {
            val.splice(val.indexOf(option), 1);
        }
        else {
            val.push(option);
        }
    };
    return ControlCheckboxList;
}(control_base_1.ControlBase));
exports.ControlCheckboxList = ControlCheckboxList;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_base_1 = __webpack_require__(190);
var ControlCheckbox = /** @class */ (function (_super) {
    __extends(ControlCheckbox, _super);
    function ControlCheckbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.options = [];
        _this.type = 'checkbox';
        _this.value = options.value || false;
        return _this;
    }
    return ControlCheckbox;
}(control_base_1.ControlBase));
exports.ControlCheckbox = ControlCheckbox;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_base_1 = __webpack_require__(190);
var ControlDropdown = /** @class */ (function (_super) {
    __extends(ControlDropdown, _super);
    function ControlDropdown(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.options = [];
        _this.type = 'dropdown';
        _this.options = options.options || [];
        return _this;
    }
    return ControlDropdown;
}(control_base_1.ControlBase));
exports.ControlDropdown = ControlDropdown;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_base_1 = __webpack_require__(190);
var ControlTextarea = /** @class */ (function (_super) {
    __extends(ControlTextarea, _super);
    function ControlTextarea(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = options.type || 'textarea';
        return _this;
    }
    return ControlTextarea;
}(control_base_1.ControlBase));
exports.ControlTextarea = ControlTextarea;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_base_1 = __webpack_require__(190);
var ControlTextbox = /** @class */ (function (_super) {
    __extends(ControlTextbox, _super);
    function ControlTextbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = options.type || 'textbox';
        return _this;
    }
    return ControlTextbox;
}(control_base_1.ControlBase));
exports.ControlTextbox = ControlTextbox;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(207));


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(191);
var Subject_1 = __webpack_require__(52);
var form_control_service_1 = __webpack_require__(195);
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(_controlService) {
        this._controlService = _controlService;
        this.controls = [];
        this.reset = new Subject_1.Subject();
        this.btnText = 'Save'; // Default value at least
        this.cancelText = 'Cancel'; // Default value at least
        this.displayCancel = false; // By default cancel button will be hidden
        this.formClass = 'form-horizontal';
        // Note: don't keep name of output events as same as native events such as submit etc.
        this.onSubmit = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sortedControls = this.controls.sort(function (a, b) { return a.order - b.order; });
        this.form = this._controlService.toControlGroup(this.sortedControls);
        if (this.data) {
            this.data.subscribe(function (model) {
                if (model) {
                    _this.formatDateToDisplay(model, _this.sortedControls);
                    _this.form.patchValue(model);
                }
            });
        }
        this.reset.subscribe(function (reset) {
            if (reset) {
                _this.formDir.resetForm();
            }
        });
    };
    DynamicFormComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.formatDateToSave(this.form);
            this.onSubmit.emit(this.form.value);
        }
    };
    DynamicFormComponent.prototype.cancel = function () {
        this.onCancel.next();
    };
    DynamicFormComponent.prototype.formatDateToDisplay = function (model, controls) {
        var dateField = controls.filter(function (x) { return x.type === 'calendar'; });
        if (dateField && dateField.length > 0) {
            var controlKey = dateField[0].key;
            var stringDate = model[controlKey];
            var date = new Date(stringDate);
            model[controlKey] = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        }
    };
    DynamicFormComponent.prototype.formatDateToSave = function (form) {
        var dateField = this.sortedControls.filter(function (x) { return x.type === 'calendar'; });
        if (dateField && dateField.length > 0) {
            var controlKey = dateField[0].key;
            var objectDate = this.form.value[controlKey];
            var date = new Date(objectDate.year, objectDate.month - 1, objectDate.day);
            this.form.value[controlKey] = date;
        }
    };
    DynamicFormComponent.prototype.ngOnDestroy = function () {
        this.reset.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "controls", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "reset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Subject_1.Subject)
    ], DynamicFormComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "btnText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "cancelText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "displayCancel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "formClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DynamicFormComponent.prototype, "onSubmit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DynamicFormComponent.prototype, "onCancel", void 0);
    __decorate([
        core_1.ViewChild('formDir'),
        __metadata("design:type", forms_1.NgForm)
    ], DynamicFormComponent.prototype, "formDir", void 0);
    DynamicFormComponent = __decorate([
        core_1.Component({
            selector: 'appc-dynamic-form',
            styles: [__webpack_require__(208)],
            template: __webpack_require__(210)
        }),
        __metadata("design:paramtypes", [form_control_service_1.FormControlService])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(209);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, ".btn.btn-primary {\n  margin-bottom: 10px; }\n", ""]);

// exports


/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<appc-error-summary></appc-error-summary>\n\n<!--{{form.value | json}}-->\n<form class=\"{{formClass}}\" (ngSubmit)=\"submit()\" [formGroup]=\"form\" #formDir=\"ngForm\" role=\"form\">\n    <appc-dynamic-control *ngFor=\"let ctrl of controls\" [control]=\"ctrl\" [form]=\"form\" [frm]=\"formDir\"></appc-dynamic-control>\n\n    <div class=\"form-buttons\">\n        <button type=\"button\" *ngIf=\"displayCancel\" class=\"btn btn-secondary\" (click)=\"cancel()\">{{cancelText}}</button>\n        <button type=\"submit\" class=\"btn btn-primary\">{{btnText}}</button>\n    </div>\n\n</form>";

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(212));


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(191);
var validation_service_1 = __webpack_require__(192);
var controls_1 = __webpack_require__(194);
var DynamicFormControlComponent = /** @class */ (function () {
    function DynamicFormControlComponent() {
    }
    Object.defineProperty(DynamicFormControlComponent.prototype, "valid", {
        get: function () {
            return this.form.controls[this.control.key].valid && (this.form.controls[this.control.key].touched || this.frm.submitted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "invalid", {
        get: function () {
            return !this.form.controls[this.control.key].valid && (this.form.controls[this.control.key].touched || this.frm.submitted);
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormControlComponent.prototype.errorMessage = function (control) {
        // valid || (pristine && !submitted)
        var c = this.form.get(this.control.key);
        for (var propertyName in c.errors) {
            if (c.errors.hasOwnProperty(propertyName) && (c.touched || this.frm.submitted)) {
                return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.minlength || this.control.maxlength);
            }
        }
        return '';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", controls_1.ControlBase)
    ], DynamicFormControlComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], DynamicFormControlComponent.prototype, "form", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.NgForm)
    ], DynamicFormControlComponent.prototype, "frm", void 0);
    DynamicFormControlComponent = __decorate([
        core_1.Component({
            selector: 'appc-dynamic-control',
            template: __webpack_require__(213)
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormControlComponent);
    return DynamicFormControlComponent;
}());
exports.DynamicFormControlComponent = DynamicFormControlComponent;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "\n<!--tslint:disable-->\n<div #f=\"ngForm\" [formGroup]=\"form\" [ngSwitch]=\"control.type\" class=\"form-group {{control.class}}\" [class.has-danger]=\"invalid\"\n    [class.has-success]=\"valid\" [class.form-check]=\"control.type === 'checkbox'\">\n\n    <label *ngSwitchCase=\"'dropdown'\" [attr.for]=\"control.key\" class=\"col-form-label\">{{control.label}}</label>\n    <select *ngSwitchCase=\"'dropdown'\" [id]=\"control.key\" [formControlName]=\"control.key\" [class.is-valid]=\"valid\" [class.is-invalid]=\"invalid\"\n        class=\"form-control\">\n        <option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n\n    <!--This is not the switch case because of multiple control types-->\n    <label *ngIf=\"control.type === 'textbox' || control.type === 'email' || control.type === 'password'\" [attr.for]=\"control.key\"\n        class=\"col-form-label\">{{control.label}}</label>\n    <input *ngIf=\"control.type === 'textbox' || control.type === 'email' || control.type === 'password'\" [id]=\"control.key\" [formControlName]=\"control.key\"\n        [type]=\"control.type\" [placeholder]=\"control.placeholder\" [class.is-valid]=\"valid\" [class.is-invalid]=\"invalid\" class=\"form-control\">\n\n    <!--Calendar-->\n    <label *ngIf=\"control.type === 'calendar'\" class=\"sr-only\" [attr.for]=\"control.key\">{{control.value}}</label>\n    <div *ngIf=\"control.type === 'calendar'\" class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [id]=\"control.key\" [placeholder]=\"control.label\" ngbDatepicker #d=\"ngbDatepicker\"\n            [formControlName]=\"control.key\">\n        <div class=\"input-group-addon\" (click)=\"d.toggle()\">\n            <i class=\"fa fa-calendar\"></i>\n        </div>\n    </div>\n\n    <!--Textarea-->\n    <label *ngIf=\"control.type === 'textarea'\" [for]=\"control.key\">{{control.label}}</label>\n    <textarea *ngIf=\"control.type === 'textarea'\" class=\" form-control\" [id]=\"control.key\" rows=\"3\" [formControlName]=\"control.key\"\n        [class.is-valid]=\"valid\" [class.is-invalid]=\"invalid\"></textarea>\n\n    <!--Checkbox-->\n    <label *ngSwitchCase=\"'checkbox'\" [attr.for]=\"control.key\" class=\"custom-control custom-checkbox\">\n        <input #ck *ngSwitchCase=\"'checkbox'\" (change)=\"control.value = ck.checked\" [id]=\"control.key\" [formControlName]=\"control.key\"\n            [type]=\"control.type\" class=\"custom-control-input\">\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">{{control.label}}</span>\n    </label>\n\n    <!--Checkbox list-->\n    <div *ngIf=\"control.type === 'checkboxlist'\">\n        <div class=\"form-check form-check-inline\" *ngFor=\"let item of control.options.options\">\n            <label class=\"custom-control custom-checkbox\">\n                <input class=\"custom-control-input\" type=\"checkbox\" [id]=\"item.key\" [value]=\"item.key\" [checked]=\"f.value[control.key].indexOf(item.key)> -1\"\n                    (change)=\"control.updateCheckedOptions(item.key, $event, f)\">\n                <span class=\"custom-control-indicator\"></span>\n                <span class=\"custom-control-description\">{{item.value}}</span>\n            </label>\n        </div>\n    </div>\n\n    <div *ngIf=\"errorMessage(control)\" class=\"invalid-feedback\"> {{ errorMessage(control) }} </div>\n\n    <!-- <appc-control-error-message [form]=\"f\" [control]=\"control\"></appc-control-error-message> -->\n\n</div>";

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(215));


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var ErrorSummaryComponent = /** @class */ (function () {
    function ErrorSummaryComponent(ns) {
        this.ns = ns;
    }
    ErrorSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ns.getChangeEmitter()
            .subscribe(function (x) {
            if (x.add) {
                _this.notification = x.notification;
            }
            else {
                _this.notification = null;
            }
        });
    };
    ErrorSummaryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ErrorSummaryComponent = __decorate([
        core_1.Component({
            selector: 'appc-error-summary',
            template: __webpack_require__(216)
        }),
        __metadata("design:paramtypes", [core_2.NotificationsService])
    ], ErrorSummaryComponent);
    return ErrorSummaryComponent;
}());
exports.ErrorSummaryComponent = ErrorSummaryComponent;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{notification.type || 'danger'}}\" *ngIf=\"notification\">\n    <strong>{{notification?.title}}</strong>\n    <p *ngFor=\"let error of notification?.content?.errors\">\n        {{error.message}}\n    </p>\n</div>";

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
// tslint:disable-next-line:use-pipe-transform-interface
var UppercasePipe = /** @class */ (function () {
    function UppercasePipe() {
    }
    UppercasePipe.prototype.transform = function (value) {
        return value.toUpperCase();
    };
    UppercasePipe = __decorate([
        core_1.Pipe({
            name: 'appfUppercase'
        })
    ], UppercasePipe);
    return UppercasePipe;
}());
exports.UppercasePipe = UppercasePipe;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(53);
var forms_1 = __webpack_require__(191);
var ng_bootstrap_1 = __webpack_require__(80);
// Components
var forms_2 = __webpack_require__(193);
var components_1 = __webpack_require__(219);
// Directives
var directives_1 = __webpack_require__(196);
// Pipes
var pipes_1 = __webpack_require__(197);
// Services
var forms_3 = __webpack_require__(193);
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
            ],
            declarations: [
                components_1.SocialLoginComponent,
                forms_2.DynamicFormComponent,
                forms_2.DynamicFormControlComponent,
                forms_2.ErrorSummaryComponent,
                directives_1.PageHeadingComponent,
                pipes_1.UppercasePipe
            ],
            exports: [
                // Modules
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                // Providers, Components, directive, pipes
                components_1.SocialLoginComponent,
                forms_2.DynamicFormComponent,
                forms_2.DynamicFormControlComponent,
                forms_2.ErrorSummaryComponent,
                directives_1.PageHeadingComponent,
                pipes_1.UppercasePipe,
            ],
            providers: [
                forms_3.FormControlService
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(220));


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(221));


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var angular_oauth2_oidc_1 = __webpack_require__(32);
var core_2 = __webpack_require__(51);
var SocialLoginComponent = /** @class */ (function () {
    function SocialLoginComponent(oAuthService, globalRef) {
        this.oAuthService = oAuthService;
        this.globalRef = globalRef;
    }
    Object.defineProperty(SocialLoginComponent.prototype, "socialLogins", {
        get: function () {
            var _this = this;
            return this.globalRef.nativeGlobal.appData.loginProviders.slice().map(function (login) {
                return {
                    loginProvider: login,
                    providerKey: login,
                    providerDisplayName: login,
                    active: _this.activeLogins && _this.isActive(login)
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    SocialLoginComponent.prototype.loginCss = function (login) {
        if (login.toLowerCase() === 'microsoft') {
            return 'fa-windows';
        }
        if (login.toLowerCase() === 'stackexchange') {
            return 'fa-stack-exchange';
        }
        return "fa-" + login.toLowerCase();
    };
    SocialLoginComponent.prototype.redirect = function (provider) {
        this.oAuthService.initImplicitFlow(null, { provider: provider });
    };
    SocialLoginComponent.prototype.isActive = function (login) {
        return this.activeLogins.some(function (l) { return l.loginProvider === login; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SocialLoginComponent.prototype, "activeLogins", void 0);
    SocialLoginComponent = __decorate([
        core_1.Component({
            selector: 'appc-social-login',
            styles: [__webpack_require__(222)],
            template: __webpack_require__(224)
        }),
        __metadata("design:paramtypes", [angular_oauth2_oidc_1.OAuthService, core_2.GlobalRef])
    ], SocialLoginComponent);
    return SocialLoginComponent;
}());
exports.SocialLoginComponent = SocialLoginComponent;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(223);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "a.fa {\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px; }\n  a.fa:hover {\n    opacity: 0.7; }\n  a.fa.fa-facebook {\n    background: #3B5998;\n    color: white; }\n  a.fa.fa-twitter {\n    background: #55ACEE;\n    color: white; }\n  a.fa.fa-google {\n    background: #dd4b39;\n    color: white; }\n  a.fa.fa-linkedin {\n    background: #007bb5;\n    color: white; }\n  a.fa.fa-github {\n    background: #000000;\n    color: white; }\n  a.fa.fa-windows {\n    background: #2672EC;\n    color: white; }\n  a.fa.fa-paypal {\n    background: #0079c1;\n    color: white; }\n  a.fa.fa-yahoo {\n    background: #4c16c0;\n    color: white; }\n  a.fa.fa-stack-exchange {\n    background: #1f5296;\n    color: white; }\n  a.fa.fa-amazon {\n    background: #f5d993;\n    color: white; }\n  a.fa.active {\n    border: 5px solid #b4dab4; }\n", ""]);

// exports


/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = "<a class=\"fa\" [class.active]=\"login.active\" [ngClass]=\"loginCss(login.loginProvider)\" *ngFor=\"let login of socialLogins\"\n    (click)=\"redirect(login.loginProvider)\"></a>";

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var ProfileService = /** @class */ (function () {
    function ProfileService(dataService) {
        this.dataService = dataService;
        this.profileUrl = 'api/manage';
    }
    ProfileService.prototype.userInfo = function (userInfoModel) {
        var USER_INFO_URL = this.profileUrl + "/userinfo";
        if (userInfoModel) {
            return this.dataService.post(USER_INFO_URL, userInfoModel);
        }
        else {
            return this.dataService.get(USER_INFO_URL);
        }
    };
    ProfileService.prototype.changePassword = function (changePasswordModel) {
        // for external login accounts, there might not be an old password
        if (changePasswordModel.oldPassword) {
            return this.dataService.post(this.profileUrl + "/changepassword", changePasswordModel);
        }
        else {
            return this.dataService.post(this.profileUrl + "/setpassword", changePasswordModel);
        }
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.DataService])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;


/***/ }),
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var profile_service_1 = __webpack_require__(225);
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService) {
        this.profileService = profileService;
    }
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'appc-profile',
            template: __webpack_require__(250)
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(251));


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(255));


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(259));


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(263));


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(267));
__export(__webpack_require__(271));
__export(__webpack_require__(276));
__export(__webpack_require__(281));


/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(13);
var profile_component_1 = __webpack_require__(230);
var user_info_1 = __webpack_require__(231);
var update_password_1 = __webpack_require__(232);
var user_photo_1 = __webpack_require__(233);
var other_accounts_1 = __webpack_require__(234);
var two_factor_auth_1 = __webpack_require__(235);
var routes = [
    {
        path: '', component: profile_component_1.ProfileComponent, children: [
            { path: '', redirectTo: 'userinfo' },
            { path: 'userinfo', component: user_info_1.UserInfoComponent },
            { path: 'updatepassword', component: update_password_1.UpdatePasswordComponent },
            { path: 'userphoto', component: user_photo_1.UserPhotoComponent },
            { path: 'otheraccounts', component: other_accounts_1.OtherAccountsComponent },
            { path: 'twofactorauth', component: two_factor_auth_1.TwoFactorAuthComponent }
        ]
    },
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <div class=\"col-12 col-lg-8\">\n\n        <nav class=\"navbar navbar-expand navbar-light bg-faded\">\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <!--Left nav-->\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"userinfo\">User info</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"updatepassword\">Update password</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"userphoto\">User photo</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"otheraccounts\">Other accounts</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"twofactorauth\">Two factor auth</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n\n        <router-outlet></router-outlet>\n    </div>\n</div>";

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var shared_1 = __webpack_require__(198);
var profile_service_1 = __webpack_require__(225);
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(profileService, ns) {
        this.profileService = profileService;
        this.ns = ns;
        this.controls = [
            new shared_1.ControlTextbox({
                key: 'firstName',
                label: 'First name',
                placeholder: 'Firstname',
                value: '',
                type: 'textbox',
                required: true,
                order: 1
            }),
            new shared_1.ControlTextbox({
                key: 'lastName',
                label: 'Last name',
                placeholder: 'Lastname',
                value: '',
                type: 'textbox',
                required: true,
                order: 2
            }),
            new shared_1.ControlTextbox({
                key: 'phoneNumber',
                label: 'Phone number',
                placeholder: 'Phone number',
                value: '',
                type: 'textbox',
                required: false,
                order: 3
            })
        ];
    }
    UserInfoComponent.prototype.ngOnInit = function () { };
    UserInfoComponent.prototype.save = function (model) {
        var _this = this;
        this.profileService.userInfo(model)
            .subscribe(function (res) {
            _this.ns.success("Name changed to " + res.firstName + " " + res.lastName);
        });
    };
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'appc-user-info',
            template: __webpack_require__(252),
            styles: [__webpack_require__(253)]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, core_2.NotificationsService])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = "<appc-dynamic-form (onSubmit)=\"save($event)\" [data]=\"profileService.userInfo()\" [controls]=\"controls\"></appc-dynamic-form>";

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(254);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var shared_1 = __webpack_require__(198);
var profile_service_1 = __webpack_require__(225);
var UpdatePasswordComponent = /** @class */ (function () {
    function UpdatePasswordComponent(profileService, ns) {
        this.profileService = profileService;
        this.ns = ns;
        this.controls = [
            new shared_1.ControlTextbox({
                key: 'oldPassword',
                label: 'Current password',
                placeholder: 'Current password',
                value: '',
                type: 'password',
                order: 1
            }),
            new shared_1.ControlTextbox({
                key: 'newPassword',
                label: 'New password',
                placeholder: 'New password',
                value: '',
                type: 'password',
                required: true,
                order: 2
            }),
            new shared_1.ControlTextbox({
                key: 'confirmPassword',
                label: 'Verify password',
                placeholder: 'Verify password',
                value: '',
                type: 'password',
                required: true,
                order: 3
            })
        ];
        this.reset = new core_1.EventEmitter();
    }
    UpdatePasswordComponent.prototype.ngOnInit = function () { };
    UpdatePasswordComponent.prototype.save = function (model) {
        var _this = this;
        this.profileService.changePassword(model)
            .subscribe(function (res) {
            _this.reset.emit(true);
            _this.ns.success('Password changed successfully');
        });
    };
    UpdatePasswordComponent = __decorate([
        core_1.Component({
            selector: 'appc-update-password',
            template: __webpack_require__(256),
            styles: [__webpack_require__(257)],
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, core_2.NotificationsService])
    ], UpdatePasswordComponent);
    return UpdatePasswordComponent;
}());
exports.UpdatePasswordComponent = UpdatePasswordComponent;


/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "<appc-dynamic-form (onSubmit)=\"save($event)\" [controls]=\"controls\" [reset]=\"reset\"></appc-dynamic-form>";

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(258);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var UserPhotoComponent = /** @class */ (function () {
    function UserPhotoComponent(dataService, ns) {
        this.dataService = dataService;
        this.ns = ns;
        this.URL = 'api/manage/photo';
    }
    UserPhotoComponent.prototype.ngOnInit = function () {
        this.getImage();
    };
    UserPhotoComponent.prototype.fileChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.imageToUpload = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.selectedImage = {
                    mimetype: e.target.result.split(',')[0].split(':')[1].split(';')[0],
                    url: e.target.result
                };
            };
            reader.readAsDataURL(this.imageToUpload);
        }
    };
    UserPhotoComponent.prototype.upload = function () {
        var _this = this;
        var file = new FormData();
        file.append('file', this.imageToUpload);
        this.dataService
            .post(this.URL, file)
            .subscribe(function (res) {
            _this.ns.success('Success', 'Image changed successfully');
            _this.existingImage = _this.selectedImage.url;
            _this.selectedImage = undefined;
        });
    };
    UserPhotoComponent.prototype.cancel = function () {
        this.selectedImage = undefined;
    };
    UserPhotoComponent.prototype.getImage = function () {
        var _this = this;
        this.dataService.getImage(this.URL)
            .subscribe(function (base64String) {
            _this.existingImage = 'data:image/png;base64,' + base64String;
        });
    };
    UserPhotoComponent = __decorate([
        core_1.Component({
            selector: 'appc-user-photo',
            template: __webpack_require__(260),
            styles: [__webpack_require__(261)]
        }),
        __metadata("design:paramtypes", [core_2.DataService,
            core_2.NotificationsService])
    ], UserPhotoComponent);
    return UserPhotoComponent;
}());
exports.UserPhotoComponent = UserPhotoComponent;


/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <figure class=\"figure\">\n    <img [src]=\"selectedImage?.url || existingImage\" class=\"figure-img img-fluid rounded\" style=\"width: 200px;height: 200px;\">\n    <figcaption class=\"figure-caption text-right\">{{selectedImage?.name}}</figcaption>\n  </figure>\n</div>\n\n<div class=\"row justify-content-center\" *ngIf=\"!selectedImage\">\n  <label class=\"custom-file\">\n    <input type=\"file\" id=\"file\" class=\"custom-file-input\" (change)=\"fileChange($event)\">\n    <span class=\"custom-file-control\"></span>\n  </label>\n</div>\n\n<div class=\"row justify-content-center\">\n  <div class=\"btn-group\" *ngIf=\"selectedImage\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"upload()\">Use this</button>\n  </div>\n</div>";

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(262);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var OtherAccountsComponent = /** @class */ (function () {
    function OtherAccountsComponent(dataService) {
        this.dataService = dataService;
    }
    OtherAccountsComponent.prototype.ngOnInit = function () {
        this.getLogins();
    };
    OtherAccountsComponent.prototype.getLogins = function () {
        var _this = this;
        this.dataService.get('api/manage/getlogins')
            .subscribe(function (logins) { return _this.logins = logins; });
    };
    OtherAccountsComponent = __decorate([
        core_1.Component({
            selector: 'appc-other-accounts',
            template: __webpack_require__(264),
            styles: [__webpack_require__(265)]
        }),
        __metadata("design:paramtypes", [core_2.DataService])
    ], OtherAccountsComponent);
    return OtherAccountsComponent;
}());
exports.OtherAccountsComponent = OtherAccountsComponent;


/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = "<appc-social-login *ngIf=\"logins\" [activeLogins]=\"logins\"></appc-social-login>";

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(266);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var TwoFactorAuthComponent = /** @class */ (function () {
    function TwoFactorAuthComponent(dataService) {
        this.dataService = dataService;
    }
    TwoFactorAuthComponent.prototype.ngOnInit = function () {
        this.get2fModel();
    };
    TwoFactorAuthComponent.prototype.get2fModel = function () {
        var _this = this;
        this.dataService.post('api/manage/twofactorauthentication')
            .subscribe(function (res) { return _this.model = res; });
    };
    TwoFactorAuthComponent = __decorate([
        core_1.Component({
            selector: 'appc-two-factor-auth',
            template: __webpack_require__(268),
            styles: [__webpack_require__(269)]
        }),
        __metadata("design:paramtypes", [core_2.DataService])
    ], TwoFactorAuthComponent);
    return TwoFactorAuthComponent;
}());
exports.TwoFactorAuthComponent = TwoFactorAuthComponent;


/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\">\n  <h1>Highly EXPERIMENTAL Feature: </h1>\n  <p>Don't enable two factor auth for a user yet, it isn't fully working.</p>\n</div>\n\n{{model | json}}\n\n<appc-recovery-codes [model]=\"model\" *ngIf=\"model?.is2faEnabled\"></appc-recovery-codes>\n\n<h5>Authenticator app</h5>\n\n<button *ngIf=\"!model?.hasAuthenticator\" (click)=\"enableAuthenticator = true\" class=\"btn btn-default\">Add authenticator app</button>\n\n<div *ngIf=\"model?.hasAuthenticator || enableAuthenticator\">\n  <appc-enable-authenticator></appc-enable-authenticator>\n</div>";

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(270);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(272));


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var EnableAuthenticatorComponent = /** @class */ (function () {
    function EnableAuthenticatorComponent(dataService) {
        this.dataService = dataService;
    }
    EnableAuthenticatorComponent.prototype.ngOnInit = function () {
        this.enableauthenticator();
    };
    EnableAuthenticatorComponent.prototype.enableauthenticator = function () {
        var _this = this;
        this.dataService.get('api/manage/enableauthenticator')
            .subscribe(function (res) {
            _this.model = res;
            _this.setupQr();
        });
    };
    EnableAuthenticatorComponent.prototype.verify = function (form) {
        if (form.valid) {
            this.dataService.post('api/manage/enableauthenticator', form.value).subscribe();
        }
    };
    EnableAuthenticatorComponent.prototype.onReset = function () {
        this.enableauthenticator();
    };
    EnableAuthenticatorComponent.prototype.setupQr = function () {
        this.qrCode.nativeElement.innerHTML = '';
        var qr = new QRCode(this.qrCode.nativeElement, {
            text: this.model.authenticatorUri,
            width: 150,
            height: 150
        });
        console.log(qr);
    };
    __decorate([
        core_1.ViewChild('qrcode'),
        __metadata("design:type", core_1.ElementRef)
    ], EnableAuthenticatorComponent.prototype, "qrCode", void 0);
    EnableAuthenticatorComponent = __decorate([
        core_1.Component({
            selector: 'appc-enable-authenticator',
            template: __webpack_require__(273),
            styles: [__webpack_require__(274)]
        }),
        __metadata("design:paramtypes", [core_2.DataService])
    ], EnableAuthenticatorComponent);
    return EnableAuthenticatorComponent;
}());
exports.EnableAuthenticatorComponent = EnableAuthenticatorComponent;


/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = "<p>\n  To use an authenticator app go through the following steps:</p>\n<ol class=\"list\">\n  <li>\n    <p>\n      Download a two-factor authenticator app like Microsoft Authenticator for\n      <a href=\"https://go.microsoft.com/fwlink/?Linkid=825071\">Windows Phone</a>,\n      <a href=\"https://go.microsoft.com/fwlink/?Linkid=825072\">Android</a> and\n      <a href=\"https://go.microsoft.com/fwlink/?Linkid=825073\">iOS</a> or Google Authenticator for\n      <a href=\"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=en\">Android</a> and\n      <a href=\"https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8\">iOS</a>.\n    </p>\n  </li>\n  <li>\n    <p>Scan the QR Code or enter this key\n      <kbd>{{model?.sharedKey}}</kbd> into your two factor authenticator app. Spaces and casing do not matter.</p>\n    <div class=\"alert alert-info\">To enable QR code generation please read our\n      <a href=\"https://go.microsoft.com/fwlink/?Linkid=852423\">documentation</a>.</div>\n\n    <!-- QR code is set here -->\n    <div #qrcode></div>\n\n    <div id=\"qrCodeData\" [attr.data-url]=\"model?.authenticatorUri\"></div>\n  </li>\n  <li>\n    <p>\n      Once you have scanned the QR code or input the key above, your two factor authentication app will provide you with a unique\n      code. Enter the code in the confirmation box below.\n    </p>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n\n        <form (ngSubmit)=\"verify(verifyForm)\" #verifyForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"code\">Code</label>\n            <input type=\"text\" class=\"form-control\" id=\"code\" required [(ngModel)]=\"verifyCode\" name=\"code\" #code=\"ngModel\">\n            <div [hidden]=\"code.valid || code.pristine\" class=\"alert alert-danger\">\n              Code is required\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!verifyForm.form.valid\">Verify</button>\n        </form>\n\n      </div>\n    </div>\n  </li>\n</ol>\n\n<appc-reset-authenticator (reset)=\"onReset()\"></appc-reset-authenticator>";

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(275);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(277));


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var ResetAuthenticatorComponent = /** @class */ (function () {
    function ResetAuthenticatorComponent(dataService, ns) {
        this.dataService = dataService;
        this.ns = ns;
        this.reset = new core_1.EventEmitter();
    }
    ResetAuthenticatorComponent.prototype.ngOnInit = function () {
    };
    ResetAuthenticatorComponent.prototype.resetAuthenticator = function () {
        var _this = this;
        this.dataService.post('api/manage/resetauthenticator')
            .subscribe(function () {
            _this.ns.success('Authenticator key reset');
            _this.reset.emit(null);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ResetAuthenticatorComponent.prototype, "reset", void 0);
    ResetAuthenticatorComponent = __decorate([
        core_1.Component({
            selector: 'appc-reset-authenticator',
            template: __webpack_require__(278),
            styles: [__webpack_require__(279)]
        }),
        __metadata("design:paramtypes", [core_2.DataService, core_2.NotificationsService])
    ], ResetAuthenticatorComponent);
    return ResetAuthenticatorComponent;
}());
exports.ResetAuthenticatorComponent = ResetAuthenticatorComponent;


/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" role=\"alert\">\n  <p>\n    <span class=\"glyphicon glyphicon-warning-sign\"></span>\n    <strong>If you reset your authenticator key your authenticator app will not work until you reconfigure it.</strong>\n  </p>\n  <p>\n    This process disables 2FA until you verify your authenticator app and will also reset your 2FA recovery codes. If you do\n    not complete your authenticator app configuration you may lose access to your account.\n  </p>\n</div>\n<div>\n  <button (click)=\"resetAuthenticator()\" class=\"btn btn-danger\" type=\"submit\">Reset authenticator key</button>\n</div>";

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(280);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(282));


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(51);
var RecoveryCodesComponent = /** @class */ (function () {
    function RecoveryCodesComponent(dataService, ns) {
        this.dataService = dataService;
        this.ns = ns;
    }
    RecoveryCodesComponent.prototype.ngOnInit = function () { };
    RecoveryCodesComponent.prototype.disableTwoFactorWarning = function () {
        var _this = this;
        this.dataService.post('api/manage/disable2fa')
            .subscribe(function () {
            _this.ns.success('Two factor authentication disabled');
        });
    };
    RecoveryCodesComponent.prototype.generateRecoveryCodes = function () {
        var _this = this;
        this.dataService.post('api/manage/generaterecoverycodes')
            .subscribe(function (codes) {
            _this.ns.success('Recovery codes are', codes.join('|'));
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RecoveryCodesComponent.prototype, "model", void 0);
    RecoveryCodesComponent = __decorate([
        core_1.Component({
            selector: 'appc-recovery-codes',
            template: __webpack_require__(283),
            styles: [__webpack_require__(284)]
        }),
        __metadata("design:paramtypes", [core_2.DataService, core_2.NotificationsService])
    ], RecoveryCodesComponent);
    return RecoveryCodesComponent;
}());
exports.RecoveryCodesComponent = RecoveryCodesComponent;


/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"model?.recoveryCodesLeft === 0\">\n  <div class=\"alert alert-danger\">\n    <strong>You have no recovery codes left.</strong>\n    <p>You must\n      <a asp-action=\"GenerateRecoveryCodes\">generate a new set of recovery codes</a> before you can log in with a recovery code.</p>\n  </div>\n</div>\n<div *ngIf=\"model?.recoveryCodesLeft === 1\">\n  <div class=\"alert alert-danger\">\n    <strong>You have 1 recovery code left.</strong>\n    <p>You can\n      <a asp-action=\"GenerateRecoveryCodes\">generate a new set of recovery codes</a>.</p>\n  </div>\n</div>\n<div *ngIf=\"model?.recoveryCodesLeft <= 3\">\n  <div class=\"alert alert-warning\">\n    <strong>You have {{model?.recoveryCodesLeft}} recovery codes left.</strong>\n    <p>You should\n      <a asp-action=\"GenerateRecoveryCodes\">generate a new set of recovery codes</a>.</p>\n  </div>\n</div>\n\n<button (click)=\"disableTwoFactorWarning()\" class=\"btn btn-default\">Disable 2FA</button>\n<button (click)=\"generateRecoveryCodes()\" class=\"btn btn-default\">Reset recovery codes</button>";

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(285);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })
]));
//# sourceMappingURL=0.js.map