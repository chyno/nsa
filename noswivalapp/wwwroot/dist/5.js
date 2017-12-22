webpackJsonp([5],{

/***/ 188:
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
var shared_module_1 = __webpack_require__(218);
var chat_component_1 = __webpack_require__(236);
var chat_routes_1 = __webpack_require__(290);
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [chat_routes_1.routing, shared_module_1.SharedModule],
            declarations: [chat_component_1.ChatComponent]
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;


/***/ }),

/***/ 190:
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

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),

/***/ 192:
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

/***/ 193:
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

/***/ 194:
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

/***/ 195:
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

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(199));


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(217));


/***/ }),

/***/ 199:
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

/***/ 200:
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

/***/ 201:
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

/***/ 202:
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

/***/ 203:
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

/***/ 204:
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

/***/ 205:
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

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(207));


/***/ }),

/***/ 207:
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

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(209);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, ".btn.btn-primary {\n  margin-bottom: 10px; }\n", ""]);

// exports


/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<appc-error-summary></appc-error-summary>\n\n<!--{{form.value | json}}-->\n<form class=\"{{formClass}}\" (ngSubmit)=\"submit()\" [formGroup]=\"form\" #formDir=\"ngForm\" role=\"form\">\n    <appc-dynamic-control *ngFor=\"let ctrl of controls\" [control]=\"ctrl\" [form]=\"form\" [frm]=\"formDir\"></appc-dynamic-control>\n\n    <div class=\"form-buttons\">\n        <button type=\"button\" *ngIf=\"displayCancel\" class=\"btn btn-secondary\" (click)=\"cancel()\">{{cancelText}}</button>\n        <button type=\"submit\" class=\"btn btn-primary\">{{btnText}}</button>\n    </div>\n\n</form>";

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(212));


/***/ }),

/***/ 212:
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

/***/ 213:
/***/ (function(module, exports) {

module.exports = "\n<!--tslint:disable-->\n<div #f=\"ngForm\" [formGroup]=\"form\" [ngSwitch]=\"control.type\" class=\"form-group {{control.class}}\" [class.has-danger]=\"invalid\"\n    [class.has-success]=\"valid\" [class.form-check]=\"control.type === 'checkbox'\">\n\n    <label *ngSwitchCase=\"'dropdown'\" [attr.for]=\"control.key\" class=\"col-form-label\">{{control.label}}</label>\n    <select *ngSwitchCase=\"'dropdown'\" [id]=\"control.key\" [formControlName]=\"control.key\" [class.is-valid]=\"valid\" [class.is-invalid]=\"invalid\"\n        class=\"form-control\">\n        <option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n\n    <!--This is not the switch case because of multiple control types-->\n    <label *ngIf=\"control.type === 'textbox' || control.type === 'email' || control.type === 'password'\" [attr.for]=\"control.key\"\n        class=\"col-form-label\">{{control.label}}</label>\n    <input *ngIf=\"control.type === 'textbox' || control.type === 'email' || control.type === 'password'\" [id]=\"control.key\" [formControlName]=\"control.key\"\n        [type]=\"control.type\" [placeholder]=\"control.placeholder\" [class.is-valid]=\"valid\" [class.is-invalid]=\"invalid\" class=\"form-control\">\n\n    <!--Calendar-->\n    <label *ngIf=\"control.type === 'calendar'\" class=\"sr-only\" [attr.for]=\"control.key\">{{control.value}}</label>\n    <div *ngIf=\"control.type === 'calendar'\" class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [id]=\"control.key\" [placeholder]=\"control.label\" ngbDatepicker #d=\"ngbDatepicker\"\n            [formControlName]=\"control.key\">\n        <div class=\"input-group-addon\" (click)=\"d.toggle()\">\n            <i class=\"fa fa-calendar\"></i>\n        </div>\n    </div>\n\n    <!--Textarea-->\n    <label *ngIf=\"control.type === 'textarea'\" [for]=\"control.key\">{{control.label}}</label>\n    <textarea *ngIf=\"control.type === 'textarea'\" class=\" form-control\" [id]=\"control.key\" rows=\"3\" [formControlName]=\"control.key\"\n        [class.is-valid]=\"valid\" [class.is-invalid]=\"invalid\"></textarea>\n\n    <!--Checkbox-->\n    <label *ngSwitchCase=\"'checkbox'\" [attr.for]=\"control.key\" class=\"custom-control custom-checkbox\">\n        <input #ck *ngSwitchCase=\"'checkbox'\" (change)=\"control.value = ck.checked\" [id]=\"control.key\" [formControlName]=\"control.key\"\n            [type]=\"control.type\" class=\"custom-control-input\">\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">{{control.label}}</span>\n    </label>\n\n    <!--Checkbox list-->\n    <div *ngIf=\"control.type === 'checkboxlist'\">\n        <div class=\"form-check form-check-inline\" *ngFor=\"let item of control.options.options\">\n            <label class=\"custom-control custom-checkbox\">\n                <input class=\"custom-control-input\" type=\"checkbox\" [id]=\"item.key\" [value]=\"item.key\" [checked]=\"f.value[control.key].indexOf(item.key)> -1\"\n                    (change)=\"control.updateCheckedOptions(item.key, $event, f)\">\n                <span class=\"custom-control-indicator\"></span>\n                <span class=\"custom-control-description\">{{item.value}}</span>\n            </label>\n        </div>\n    </div>\n\n    <div *ngIf=\"errorMessage(control)\" class=\"invalid-feedback\"> {{ errorMessage(control) }} </div>\n\n    <!-- <appc-control-error-message [form]=\"f\" [control]=\"control\"></appc-control-error-message> -->\n\n</div>";

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(215));


/***/ }),

/***/ 215:
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

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{notification.type || 'danger'}}\" *ngIf=\"notification\">\n    <strong>{{notification?.title}}</strong>\n    <p *ngFor=\"let error of notification?.content?.errors\">\n        {{error.message}}\n    </p>\n</div>";

/***/ }),

/***/ 217:
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

/***/ 218:
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

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(220));


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(221));


/***/ }),

/***/ 221:
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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(223);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "a.fa {\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px; }\n  a.fa:hover {\n    opacity: 0.7; }\n  a.fa.fa-facebook {\n    background: #3B5998;\n    color: white; }\n  a.fa.fa-twitter {\n    background: #55ACEE;\n    color: white; }\n  a.fa.fa-google {\n    background: #dd4b39;\n    color: white; }\n  a.fa.fa-linkedin {\n    background: #007bb5;\n    color: white; }\n  a.fa.fa-github {\n    background: #000000;\n    color: white; }\n  a.fa.fa-windows {\n    background: #2672EC;\n    color: white; }\n  a.fa.fa-paypal {\n    background: #0079c1;\n    color: white; }\n  a.fa.fa-yahoo {\n    background: #4c16c0;\n    color: white; }\n  a.fa.fa-stack-exchange {\n    background: #1f5296;\n    color: white; }\n  a.fa.fa-amazon {\n    background: #f5d993;\n    color: white; }\n  a.fa.active {\n    border: 5px solid #b4dab4; }\n", ""]);

// exports


/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<a class=\"fa\" [class.active]=\"login.active\" [ngClass]=\"loginCss(login.loginProvider)\" *ngFor=\"let login of socialLogins\"\n    (click)=\"redirect(login.loginProvider)\"></a>";

/***/ }),

/***/ 236:
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
var signalr_client_1 = __webpack_require__(286);
var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.message = '';
        this.messages = [];
    }
    ChatComponent.prototype.sendMessage = function () {
        var data = "Sent: " + this.message;
        this._hubConnection.invoke('send', data);
        this.messages.push(data);
        this.message = '';
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._hubConnection = new signalr_client_1.HubConnection('/chathub');
        this._hubConnection.on('send', function (data) {
            var received = "Received: " + data;
            _this.messages.push(received);
        });
        this._hubConnection.start()
            .then(function () {
            console.log('Hub connection started');
        })
            .catch(function (err) {
            console.log('Error while establishing connection');
        });
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'appc-chat',
            template: __webpack_require__(287),
            styles: [__webpack_require__(288)]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(337);

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<h1>SignalR demo</h1>\n\n<div class=\"row\">\n  <form class=\"form-inline\" (ngSubmit)=\"sendMessage()\" #messageForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label class=\"sr-only\" for=\"message\">Message</label>\n      <input type=\"text\" class=\"form-control\" id=\"message\" placeholder=\"your message...\" name=\"message\" [(ngModel)]=\"message\" required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!messageForm.valid\">Send Message</button>\n  </form>\n</div>\n<div class=\"row\" *ngIf=\"messages.length > 0\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Messages</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let message of messages; let i = index\">\n          <td>{{i + 1}}</td>\n          <td>{{message}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"messages.length <= 0\">\n  <span>No messages</span>\n</div>";

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(289);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(13);
var chat_component_1 = __webpack_require__(236);
var routes = [
    { path: '', component: chat_component_1.ChatComponent, data: { state: 'chat' } }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ })

});
//# sourceMappingURL=5.js.map