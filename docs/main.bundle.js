webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-task-module></app-task-module>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__ = __webpack_require__("./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_module_task_module_component__ = __webpack_require__("./src/app/task-module/task-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__task_module_task_module_component__["a" /* TaskModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__["Ng2OrderModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"footer\">\n  <p class=\"footer__title\">Made with\n    <img src=\"../../assets/icons/heart.png\" alt=\"heart\" style=\"height: 15px; width: 15px;\">\n    by\n    <span>\n      <a href=\"https://github.com/SierikovRoman\" target=\"_blank\" rel=\"noopener\" class=\"footer-author\"> Roman Sierikov </a>\n    </span>\n  </p>\n</section>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "/* Variables color */\nhtml {\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nbody {\n  position: relative;\n  margin: 0;\n  padding-bottom: 6rem;\n  min-height: 100%; }\n.footer {\n  height: 30px;\n  width: 100%;\n  background-color: #000;\n  position: absolute;\n  right: 0;\n  bottom: -20px;\n  left: 0;\n  color: #fff;\n  text-align: center;\n  line-height: 30px; }\n.footer__title {\n    font-size: 12px;\n    font-weight: 100;\n    margin-bottom: 0; }\n.footer-author {\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #fff;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n.footer-author:hover {\n      color: #fcce00;\n      text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">TODO</a>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_TASKS__ = __webpack_require__("./src/app/shared/TASKS.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_TASKS__["a" /* TASKS */];
    };
    TaskService.prototype.removeTask = function (i) {
        __WEBPACK_IMPORTED_MODULE_1__shared_TASKS__["a" /* TASKS */].splice(i, 1);
    };
    TaskService.prototype.addTask = function (task) {
        __WEBPACK_IMPORTED_MODULE_1__shared_TASKS__["a" /* TASKS */].push(task);
    };
    TaskService.prototype.editTask = function (id) {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__shared_TASKS__["a" /* TASKS */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_1__shared_TASKS__["a" /* TASKS */][i].id === id) {
                return __WEBPACK_IMPORTED_MODULE_1__shared_TASKS__["a" /* TASKS */][i];
            }
        }
    };
    TaskService.prototype.saveTask = function (editedtask) {
        var newTask = this.editTask(editedtask.id);
        newTask.title = editedtask.title;
        newTask.body = editedtask.body;
        newTask.priority = editedtask.priority;
        return newTask;
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/shared/TASKS.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TASKS; });
var TASKS = [{
        id: 1,
        title: 'A',
        body: 'Some text-1',
        priority: 'danger'
    },
    {
        id: 2,
        title: 'C',
        body: 'Some text-2',
        priority: 'warning'
    },
    {
        id: 4,
        title: 'B',
        body: 'Some text-3',
        priority: 'success'
    },
    {
        id: 3,
        title: 'D',
        body: 'Some text-4',
        priority: 'danger'
    },
    {
        id: 5,
        title: 'F',
        body: 'Some text-5',
        priority: 'danger'
    },
    {
        id: 7,
        title: 'E',
        body: 'Some text-7',
        priority: 'danger'
    },
    {
        id: 6,
        title: 'G',
        body: 'Some text-6',
        priority: 'danger'
    }];


/***/ }),

/***/ "./src/app/task-module/task-module.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"task__module\">\n  <div class=\"container\">\n    <p class=\"task__module-title\">Your tasks:</p>\n\n    <p>You have: {{length}} taks</p>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6\">\n        <form class=\"form-inline my-2 my-lg-2\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search task . . .\" [(ngModel)]=\"filter\" name=\"search\">\n        </form>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 my-2 my-lg-2 task__module-add\">\n          <button type=\"button\" class=\"btn btn-outline-warning btn-sm task__module-add--button\" data-toggle=\"modal\" data-target=\"#addTaskModal\">Add task</button>\n      </div>\n\n    </div>\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\" class=\"table-title action_id\" (click)=\"sort('id')\" style=\"cursor: pointer;\">#\n              <img src=\"./assets/icons/arrow.png\" alt=\"arrow\" [ngClass]=\"{ 'down': !reverse, 'up': reverse }\">\n            </th>\n            <th scope=\"col\" class=\"table-title action_pr\">Priority</th>\n            <th scope=\"col\" class=\"table-title action_tl\" (click)=\"sort('title')\" style=\"cursor: pointer;\">Title\n              <img src=\"./assets/icons/arrow.png\" alt=\"arrow\" [ngClass]=\"{ 'down': !reverse, 'up': reverse }\">\n            </th>\n            <th scope=\"col\" class=\"table-title action_bd\">Body</th>\n            <th scope=\"col\" class=\"table-title action_ac\">Action</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tasks\">\n          <tr *ngFor=\"let task of tasks | orderBy: key : reverse | filter:filter; let i = index\">\n            <th scope=\"row\" class=\"table-data\">{{task.id}}</th>\n            <td class=\"table-data\">\n              <span class=\"badge badge-success\" *ngIf=\"task.priority === 'success' \">Success</span>\n              <span class=\"badge badge-warning\" *ngIf=\"task.priority === 'warning' \">Warning</span>\n              <span class=\"badge badge-danger\" *ngIf=\"task.priority === 'danger' \">Danger</span>\n            </td>\n            <td class=\"table-data\">{{task.title}}</td>\n            <td class=\"table-data\" style=\"overflow: hidden; min-width: 14px; padding: 0.75rem 0.25rem;\">{{task.body}}</td>\n            <td class=\"task__card-action\">\n              <button type=\"button\" class=\"btn btn-outline-primary btn-sm table-btn\" (click)=\"editTask(task.id)\" data-toggle=\"modal\" data-target=\"#editTaskModal\">EDIT</button>\n              <button type=\"button\" class=\"btn btn-outline-danger btn-sm table-btn\" (click)=\"removeTask(i)\">DELETE</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    </div>\n</section>\n\n\n<!-- Add Task Modal -->\n<div class=\"modal fade\" id=\"addTaskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addTaskModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"addTaskModal\">Add new task</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form #addTaskForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"titleInput\">Title</label>\n              <input #taskTitle=\"ngModel\" type=\"text\" class=\"form-control\" id=\"titleInput\" placeholder=\"Title\" [(ngModel)]=\"newTaskTile\" name=\"taskTile\" required>\n              <div *ngIf=\"taskTitle.invalid && (taskTitle.dirty || taskTitle.touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"taskTitle.errors.required\">Title is required.</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"bodyInput\">Body</label>\n                <textarea #taskBody=\"ngModel\" type=\"text\" class=\"form-control\" id=\"bodyInput\" placeholder=\"Body\" rows=\"3\" [(ngModel)]=\"newTaskBody\" name=\"taskBody\" required></textarea>\n                <div *ngIf=\"taskBody.invalid && (taskBody.dirty || taskBody.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"taskBody.errors.required\">Body is required.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"bodyInput\">Priority</label>\n                <select #taskPriority=\"ngModel\" [(ngModel)]=\"selectedPriority\" name=\"priority\" placeholder=\"selectpriority\"  required>\n                  <option *ngFor=\"let p of priority\" [value]=\"p.name\">{{p.name}}</option>\n                </select>\n                <div *ngIf=\"taskPriority.invalid && (taskPriority.dirty || taskPriority.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"taskPriority.errors.required\">Priority is required.</div>\n                </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-info btn-block\" (click)=\"addTask(taskTitle, taskBody, taskPriority); addTaskForm.reset()\" [disabled]=\"!addTaskForm.form.valid\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- Edit Task Modal -->\n<div class=\"modal fade\" id=\"editTaskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editTaskModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"editModalLabel\">Edit task</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form #editTaskForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"titleInput\">Title</label>\n              <input #editedTitle=\"ngModel\" type=\"text\" class=\"form-control\" id=\"titleInput\" placeholder=\"Title\" value=\"{{edit_task.title}}\" [(ngModel)]=\"editedTaskTitle\" name=\"title\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"bodyInput\">Body</label>\n                <textarea #editedBody=\"ngModel\" type=\"text\" class=\"form-control\" id=\"bodyInput\" placeholder=\"Body\" rows=\"3\" value=\"{{edit_task.body}}\" [(ngModel)]=\"editedTaskBody\" name=\"body\" required></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"bodyInput\">Priority</label>\n                <select #editedPriority=\"ngModel\" [(ngModel)]=\"selectedPriority\" name=\"priority\" placeholder=\"selectpriority\" value=\"{{edit_task.priority}}\" required>\n                  <option *ngFor=\"let p of priority\" [value]=\"p.name\">{{p.name}}</option>\n                </select>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"saveTask(editedTitle, editedBody, editedPriority)\" [disabled]=\"!editTaskForm.form.valid\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/task-module/task-module.component.scss":
/***/ (function(module, exports) {

module.exports = "/* Variables color */\nbutton:focus {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none; }\ninput:focus {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none; }\n.task__module {\n  height: auto;\n  width: 100%; }\n.task__module-title {\n    font-size: 24px;\n    font-weight: 700;\n    color: #000;\n    text-align: center; }\n.task__module-add {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.task__module-add--button {\n      text-transform: uppercase; }\n.task__card {\n  height: auto;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  border: 0.5px solid rgba(158, 158, 158, 0.1);\n  border-radius: 5px;\n  -webkit-box-shadow: 0 5px 10px 0px rgba(180, 180, 180, 0.2);\n          box-shadow: 0 5px 10px 0px rgba(180, 180, 180, 0.2);\n  margin-top: 5px;\n  padding: 10px; }\n.task__card--title {\n    font-size: 18px;\n    font-weight: 200;\n    color: #000; }\n.task__card-action {\n    text-align: right; }\n.table {\n  border: 1px solid rgba(65, 65, 65, 0.1); }\n.action_ac {\n  text-align: right;\n  padding-right: 85px; }\n.down {\n  height: 10px;\n  width: 10px;\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-transition: 0.2s;\n  transition: 0.2s; }\n.up {\n  height: 10px;\n  width: 10px;\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n  -webkit-transition: 0.2s;\n  transition: 0.2s; }\n@media screen and (max-width: 485px) {\n  .task__module-add--button {\n    font-size: 11px; }\n  .table-title {\n    font-size: 11px; }\n  .table-data {\n    font-size: 11px; }\n  .table-btn {\n    font-size: 11px; }\n  .action_id {\n    padding: 0.75rem 0.55rem; }\n  .action_tl {\n    padding: 0.75rem 0.0rem; }\n  .action_ac {\n    padding-right: 45px; }\n  .down {\n    height: 5px;\n    width: 5px;\n    -webkit-filter: invert(100%);\n            filter: invert(100%);\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    -webkit-transition: 0.2s;\n    transition: 0.2s; }\n  .up {\n    height: 5px;\n    width: 5px;\n    -webkit-filter: invert(100%);\n            filter: invert(100%);\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-transition: 0.2s;\n    transition: 0.2s; } }\n"

/***/ }),

/***/ "./src/app/task-module/task-module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskModuleComponent = /** @class */ (function () {
    function TaskModuleComponent(ts) {
        this.ts = ts;
        this.edit_task = '';
        this.key = ' ';
        this.reverse = false;
        this.priority = [
            { name: 'success' },
            { name: 'warning' },
            { name: 'danger' },
        ];
    }
    // Get all tasks
    TaskModuleComponent.prototype.getTasks = function () {
        this.tasks = this.ts.getTasks();
        this.length = this.tasks.length;
    };
    // Remove task with specific id
    TaskModuleComponent.prototype.removeTask = function (id) {
        this.ts.removeTask(id);
        this.getTasks();
    };
    // Get max id from all tasks
    TaskModuleComponent.prototype.getMaxId = function () {
        var all_id = this.tasks.map(function (item) {
            return item.id;
        });
        var max = Math.max.apply(Math, all_id);
        return max;
    };
    // Add new task
    TaskModuleComponent.prototype.addTask = function (title, body, priority) {
        var maxId = this.getMaxId();
        var newId = maxId + 1;
        var task = {
            id: newId,
            title: title.value,
            body: body.value,
            priority: priority.value
        };
        this.ts.addTask(task);
        this.getTasks();
        $('#addTaskModal').modal('hide');
    };
    // Edit task with specific id
    TaskModuleComponent.prototype.editTask = function (id) {
        this.edit_task = this.ts.editTask(id);
    };
    // Save edited task
    TaskModuleComponent.prototype.saveTask = function (title, body, priority) {
        var editedtask = {
            id: this.edit_task.id,
            title: title.value,
            body: body.value,
            priority: priority.value
        };
        this.ts.saveTask(editedtask);
        this.getTasks();
        $('#editTaskModal').modal('hide');
    };
    TaskModuleComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
        console.log(this.tasks);
    };
    TaskModuleComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TaskModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-module',
            template: __webpack_require__("./src/app/task-module/task-module.component.html"),
            styles: [__webpack_require__("./src/app/task-module/task-module.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]])
    ], TaskModuleComponent);
    return TaskModuleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map