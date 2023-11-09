"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 8094:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_info_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/info-page.service */ 4614);



function AboutComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const person_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", person_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](person_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ae-u-bolder au-mb-3 text-", person_r1.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", person_r1.subtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", person_r1.sentence, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](person_r1.twitter);
  }
}
class AboutComponent {
  constructor(infoService) {
    this.infoService = infoService;
    this.team = [];
    this.loaded = false;
  }
  ngOnInit() {
    this.getTeam();
  }
  getTeam() {
    this.infoService.loadTeam().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe({
      next: data => {
        this.team = data;
      }
    });
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_info_page_service__WEBPACK_IMPORTED_MODULE_0__.InfoPageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 5,
    vars: 0,
    consts: [[1, "ae-grid", "au-xs-ta-center", "au-mb-4"], [1, "container"], [1, "row", "justify-content-center"], [1, "info-box", "ae-grid__item", "item-lg-4", "ae-kappa", "animate__animated", "animate__fadeIn", "col-4"], [1, "photo-container"], ["alt", "", "width", "100%", 1, "au-mb-3", "photo", 3, "src"], [1, "info"], [1, "name", "ae-u-bolder", "au-mt-2", "text-dark"], [1, "sentence", "au-lg-ta-left", "text-center", "text-dark"], ["target", "_blank", "href", "https://twitter.com/tonikin3", 1, "ae-u-bolder", "au-underline"], ["class", "info-box ae-grid__item item-lg-4 ae-kappa animate__animated animate__fadeIn col-4"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](3, AboutComponent_For_4_Template, 12, 8, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](3, ctx.team);
      }
    },
    styles: [".photo[_ngcontent-%COMP%]{\n  border-radius: 50%;\n}\n\n.info[_ngcontent-%COMP%]{\n  font-size: 20px !important;\n  padding: 0 15px;\n}\n\n@media screen and (min-width: 280px) {\n  .photo[_ngcontent-%COMP%]{\n    width: 60%;\n  }\n}\n\n@media screen and (min-width: 360px) {\n  .photo[_ngcontent-%COMP%]{\n    width: 60%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .photo[_ngcontent-%COMP%]{\n    width: 60%;\n    margin-top: 10px;\n  }\n\n  .info[_ngcontent-%COMP%]{\n    font-size: 30px;\n  }\n\n  .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{\n    font-size: 30px;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .photo[_ngcontent-%COMP%]{\n    width: 35%;\n  }\n\n  .info-box[_ngcontent-%COMP%]{\n    max-width: 700px !important;\n  }\n\n  .info[_ngcontent-%COMP%]{\n    font-size: 24px;\n    width: 700px;\n  }\n\n  .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{\n    font-size: 24px;\n  }\n\n  .sentence[_ngcontent-%COMP%]{\n    width: 700px;\n    font-size: 18px !important;\n  }\n\n  .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 16px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG97XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI4MHB4KSB7XHJcbiAgLnBob3Rve1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2MHB4KSB7XHJcbiAgLnBob3Rve1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBob3Rve1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5pbmZvIC5uYW1le1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLnBob3Rve1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcblxyXG4gIC5pbmZvLWJveHtcclxuICAgIG1heC13aWR0aDogNzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbmZve1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmluZm8gLm5hbWV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuc2VudGVuY2V7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbmZvIGF7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/item/item.component */ 8774);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/search/search.component */ 3346);
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projects/projects.component */ 2422);
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/skills/skills.component */ 8806);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ 1163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








// Routes
const appRoutes = [{
  path: 'about',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/about/about-routing.module */ 7468)).then(m => m.AboutRoutingModule)
}, {
  path: 'skills',
  component: _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent
}, {
  path: 'projects',
  component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent
}, {
  path: 'contact',
  component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent
}, {
  path: 'item/:id',
  component: _pages_item_item_component__WEBPACK_IMPORTED_MODULE_0__.ItemComponent
}, {
  path: 'search/:term',
  component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'about'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(appRoutes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_info_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/info-page.service */ 4614);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/products.service */ 832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/header/header.component */ 1074);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ 1777);






class AppComponent {
  constructor(infoPageService, productsService) {
    this.infoPageService = infoPageService;
    this.productsService = productsService;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_info_page_service__WEBPACK_IMPORTED_MODULE_0__.InfoPageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [[1, "ae-container-fluid", "rk-main"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/header/header.component */ 1074);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ 1777);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/item/item.component */ 8774);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/search/search.component */ 3346);
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects/projects.component */ 2422);
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/skills/skills.component */ 8806);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ 1163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
// Angular Modules

// Http Client Module

// Font Awesome Module

// Routes

// Reactive Forms Module

// Modules










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _pages_item_item_component__WEBPACK_IMPORTED_MODULE_5__.ItemComponent, _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__.SearchComponent, _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsComponent, _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__.SkillsComponent, _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 1163:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contact.service */ 9734);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);







function ContactComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "animateTransform", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sending Email...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ContactComponent {
  constructor(contactService, router, builder) {
    this.contactService = contactService;
    this.router = router;
    this.builder = builder;
    this.form = this.builder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  ngOnInit() {}
  sendEmail(values) {
    this.contactService.loading = true;
    this.contactService.sendMessage(values).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: () => {
        this.contactService.loading = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          position: 'center',
          icon: 'success',
          title: 'Email Sent',
          showConfirmButton: true
        }).then(result => {
          if (result.value) {
            this.router.navigate(['/about']);
          }
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_1__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 17,
    vars: 3,
    consts: [[1, "col-12", "col-sm-10", "col-lg-6", "col-xl-6", "mx-auto"], [1, "card", "animate__animated", "animate__fadeIn", "mb-3"], [1, "card-header", "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "name", "type", "text", "placeholder", "Name", 1, "form-control"], ["formControlName", "email", "type", "text", "placeholder", "Email", 1, "form-control"], ["formControlName", "phone", "type", "text", "placeholder", "Phone", 1, "form-control"], ["formControlName", "message", "rows", "3", "placeholder", "Message", 1, "form-control"], ["type", "submit", 1, "form-control", "btn", "btn-dark", "btn-block", "mt-2", 3, "disabled"], ["align", "center", "class", "p-3"], ["align", "center", 1, "p-3"], ["version", "1.1", "id", "loader-1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "40px", "height", "40px", "viewBox", "0 0 40 40", "enable-background", "new 0 0 40 40", 0, "xml", "space", "preserve"], ["opacity", "0.2", "fill", "#000", "d", "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"], ["fill", "#000", "d", "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n          C22.32,8.481,24.301,9.057,26.013,10.047z"], ["attributeType", "xml", "attributeName", "transform", "type", "rotate", "from", "0 20 20", "to", "360 20 20", "dur", "0.5s", "repeatCount", "indefinite"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_5_listener() {
          return ctx.sendEmail(ctx.form.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ContactComponent_Conditional_16_Template, 7, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](16, ctx.contactService.loading ? 16 : -1);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8774:
/*!**********************************************!*\
  !*** ./src/app/pages/item/item.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemComponent: () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products.service */ 832);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);





const _c0 = a0 => ({
  "background-image": a0,
  "background-size": "contain",
  "background-repeat": "no-repeat",
  "background-position": "center top",
  height: "400px"
});
function ItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p", 6)(9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Client: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Practices");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9)(14, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Source Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, "url(assets/productos/" + ctx_r0.id + "/main.jpg)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.product.subtitulo1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.product.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.product.subtitulo1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.product.desc1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/productos/", ctx_r0.id, "/pic-1.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class ItemComponent {
  constructor(route, productService) {
    this.route = route;
    this.productService = productService;
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.subs)).subscribe(parameters => {
      this.productService.getProduct(parameters['id']).subscribe(product => {
        this.id = parameters['id'];
        this.product = product;
      });
    });
  }
  ngOnDestroy() {
    this.subs.next();
    this.subs.complete();
  }
  static #_ = this.ɵfac = function ItemComponent_Factory(t) {
    return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ItemComponent,
    selectors: [["app-item"]],
    decls: 1,
    vars: 1,
    consts: [[1, "rk-portfolio-cover", "item-inside-1", "pb-0", 3, "ngStyle"], [1, "ae-container-fluid"], [1, "ae-grid", "ae-grid--collapse", "rk-portfolio-info"], [1, "ae-grid__item", "item-lg-8", "item-sm--center", "au-xs-ta-center", "au-lg-ta-left"], [1, "rk-portfolio-inner-title"], [1, "ae-grid__item", "item-lg-4", "au-xs-ta-center", "au-lg-ta-right", "rk-portfolio-details"], [1, "rk-portfolio-inner-client"], [1, "ae-lambda"], [1, "ae-u-bolder"], [1, "au-underline", "rk-portfolio-inner-website"], ["target", "_blank", 1, "ae-kappa", 3, "href"], [1, "ae-kappa", "ae-u-bold", "rk-portfolio-inner-date"], [1, "ae-container-fluid", "ae-container-fluid--inner", "rk-portfolio--inner"], [1, "ae-grid", "ae-grid--collapse", "au-xs-ptp-1"], [1, "ae-grid__item", "item-lg-5", "au-lg-ptp-1"], [1, "ae-eta"], [1, "ae-grid__item", "item-lg-6", "item-lg--offset-1"], ["alt", "Urku Portfolio", 1, "img-fluid", 3, "src"]],
    template: function ItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ItemComponent_Conditional_0_Template, 27, 9, "section");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.product ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2422:
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products.service */ 832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



function ProjectsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "animateTransform", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Please wait");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c0 = a1 => ["/item", a1];
function ProjectsComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", product_r3.titulo, " - ", product_r3.categoria, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, product_r3.cod));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/productos/", product_r3.url, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Title : ", product_r3.titulo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Category : ", product_r3.categoria, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("% Complexity : ", product_r3.complexity, "");
  }
}
function ProjectsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](1, ProjectsComponent_Conditional_2_For_2_Template, 12, 9, "div", 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](1, ctx_r1.productsService.products);
  }
}
class ProjectsComponent {
  constructor(productsService) {
    this.productsService = productsService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 3,
    vars: 2,
    consts: [[1, "ae-container-fluid", "ae-container-fluid--inner", "rk-portfolio"], ["align", "center"], ["class", "ae-masonry ae-masonry-md-2 ae-masonry-xl-4"], ["version", "1.1", "id", "loader-1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "40px", "height", "40px", "viewBox", "0 0 40 40", "enable-background", "new 0 0 40 40", 0, "xml", "space", "preserve"], ["opacity", "0.2", "fill", "#000", "d", "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"], ["fill", "#000", "d", "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n      C22.32,8.481,24.301,9.057,26.013,10.047z"], ["attributeType", "xml", "attributeName", "transform", "type", "rotate", "from", "0 20 20", "to", "360 20 20", "dur", "0.5s", "repeatCount", "indefinite"], [1, "ae-masonry", "ae-masonry-md-2", "ae-masonry-xl-4"], [1, "items"], [1, "responsive-title"], [1, "rk-item", "ae-masonry__item", "animate__animated", "animate__fadeIn", "item", 3, "routerLink"], ["alt", "", 3, "src"], [1, "item-meta"], ["class", "items"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_Conditional_1_Template, 9, 0, "div", 1)(2, ProjectsComponent_Conditional_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx.productsService.loading ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, !ctx.productsService.loading ? 2 : -1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".responsive-title[_ngcontent-%COMP%]{\n  display: none;\n}\n\n\n\n@media (max-width: 576px) {\n  .responsive-title[_ngcontent-%COMP%]{\n    text-align: center;\n    display: block;\n  }\n\n  .item[_ngcontent-%COMP%]{\n    padding-bottom: 25px;\n    margin-bottom: 25px;\n    border-bottom: 1px solid #ccc;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zaXZlLXRpdGxle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnJlc3BvbnNpdmUtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5pdGVte1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3346:
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products.service */ 832);



const _c0 = a1 => ["/item", a1];
function SearchComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, product_r1.cod));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/productos/", product_r1.url, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Title : ", product_r1.titulo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Category : ", product_r1.categoria, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("% Complexity : ", product_r1.complexity, "");
  }
}
class SearchComponent {
  constructor(route, productsService) {
    this.route = route;
    this.productsService = productsService;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productsService.searchProduct(params.term);
    });
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["app-search"]],
    decls: 3,
    vars: 0,
    consts: [[1, "ae-masonry", "ae-masonry-md-2", "ae-masonry-xl-4"], [1, "rk-item", "ae-masonry__item", "animate__animated", "animate__fadeIn", 3, "routerLink"], ["alt", "", 3, "src"], [1, "item-meta"], ["class", "rk-item ae-masonry__item animate__animated animate__fadeIn", 3, "routerLink"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](1, SearchComponent_For_2_Template, 9, 7, "a", 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](1, ctx.productsService.filterProduct);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8806:
/*!**************************************************!*\
  !*** ./src/app/pages/skills/skills.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/skills.service */ 8889);


function SkillsComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", skill_r1.icon, " icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r1.name);
  }
}
class SkillsComponent {
  constructor(skillsService) {
    this.skillsService = skillsService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SkillsComponent_Factory(t) {
    return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SkillsComponent,
    selectors: [["app-skills"]],
    decls: 4,
    vars: 0,
    consts: [[1, "container"], [1, "row", "d-flex", "justify-content-around", "flex-wrap", "my-0", "py-3"], [1, "col-12", "col-md-4", "col-lg-3", "col-lg-2", "box", "animate__animated", "animate__fadeIn"], [1, "skill-box"], [1, "skill-title"], [1, "text"], ["class", "col-12 col-md-4 col-lg-3 col-lg-2 box animate__animated animate__fadeIn"]],
    template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](2, SkillsComponent_For_3_Template, 6, 4, "div", 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](2, ctx.skillsService.skills);
      }
    },
    styles: ["\n\n\n\n\n\n\n\n\n\n.fa-html5[_ngcontent-%COMP%]{\n  color: #DE4B25;\n}\n\n.fa-css3-alt[_ngcontent-%COMP%]{\n  color: #2174F8;\n}\n\n.fa-js-square[_ngcontent-%COMP%]{\n  color: #F8DC00;\n}\n\n.fa-node-js[_ngcontent-%COMP%]{\n  color: #8CC03F;\n}\n\n.fa-php[_ngcontent-%COMP%]{\n  color: #848FBC;\n}\n\n.fa-angular[_ngcontent-%COMP%]{\n  color: #BE002E;\n}\n\n.fa-bootstrap[_ngcontent-%COMP%]{\n  color: #4D218F;\n}\n\n.fa-react[_ngcontent-%COMP%]{\n  color: #61DAFB;\n}\n\n.skill-box[_ngcontent-%COMP%]{\n  padding: 5px;\n  margin-left: 2px;\n  margin-bottom: 30px;\n  \n\n}\n\n\n\n\n\n\n\n\n.skill-title[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem;\n}\n\n.icon[_ngcontent-%COMP%]{\n  font-size: 90px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYm94e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAyNzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbi5mYS1odG1sNXtcclxuICBjb2xvcjogI0RFNEIyNTtcclxufVxyXG5cclxuLmZhLWNzczMtYWx0e1xyXG4gIGNvbG9yOiAjMjE3NEY4O1xyXG59XHJcblxyXG4uZmEtanMtc3F1YXJle1xyXG4gIGNvbG9yOiAjRjhEQzAwO1xyXG59XHJcblxyXG4uZmEtbm9kZS1qc3tcclxuICBjb2xvcjogIzhDQzAzRjtcclxufVxyXG5cclxuLmZhLXBocHtcclxuICBjb2xvcjogIzg0OEZCQztcclxufVxyXG5cclxuLmZhLWFuZ3VsYXJ7XHJcbiAgY29sb3I6ICNCRTAwMkU7XHJcbn1cclxuXHJcbi5mYS1ib290c3RyYXB7XHJcbiAgY29sb3I6ICM0RDIxOEY7XHJcbn1cclxuXHJcbi5mYS1yZWFjdHtcclxuICBjb2xvcjogIzYxREFGQjtcclxufVxyXG5cclxuLnNraWxsLWJveHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7ICovXHJcbn1cclxuXHJcbi8qIC5za2lsbC1ib3g6aG92ZXJ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxufSAqL1xyXG5cclxuLnNraWxsLXRpdGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmljb257XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9734:
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactService: () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class ContactService {
  constructor(http) {
    this.http = http;
    this.loading = false;
    this.URI = 'https://server-potfolio.herokuapp.com/send-email';
  }
  sendMessage(values) {
    return this.http.post(this.URI, values);
  }
  static #_ = this.ɵfac = function ContactService_Factory(t) {
    return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ContactService,
    factory: ContactService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4614:
/*!***********************************************!*\
  !*** ./src/app/services/info-page.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoPageService: () => (/* binding */ InfoPageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class InfoPageService {
  constructor(http) {
    this.http = http;
    this.info = {};
    this.loaded = false;
    this.loadInfo();
  }
  loadInfo() {
    return this.http.get('assets/data/data-page.json');
  }
  loadTeam() {
    return this.http.get('https://angular-html-a7dde.firebaseio.com/team.json');
  }
  static #_ = this.ɵfac = function InfoPageService_Factory(t) {
    return new (t || InfoPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InfoPageService,
    factory: InfoPageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 832:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsService: () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var D_Programming_portfolio_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class ProductsService {
  constructor(http) {
    this.http = http;
    this.loading = true;
    this.products = [];
    this.filterProduct = [];
    this.loadProducts();
  }
  loadProducts() {
    return this.http.get('https://angular-html-a7dde.firebaseio.com/products_idx.json');
  }
  getProduct(id) {
    return this.http.get(`https://angular-html-a7dde.firebaseio.com/products/${id}.json`);
  }
  searchProduct(term) {
    var _this = this;
    return (0,D_Programming_portfolio_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.products.length === 0) {
        // Load Products
        yield _this.loadProducts();
        // Run after having the products
        // Apply Filter
        _this.productsFilter(term);
      } else {
        // Apply Filter
        _this.productsFilter(term);
        // this.filterProduct = this.products.filter(product => {
        //   return true;
        // });
      }
    })();
  }

  productsFilter(term) {
    this.filterProduct = [];
    term = term.toLocaleLowerCase();
    this.products.forEach(prod => {
      const lowerTitle = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(term) >= 0 || lowerTitle.indexOf(term) >= 0) {
        this.filterProduct.push(prod);
      }
    });
  }
  static #_ = this.ɵfac = function ProductsService_Factory(t) {
    return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProductsService,
    factory: ProductsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8889:
/*!********************************************!*\
  !*** ./src/app/services/skills.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsService: () => (/* binding */ SkillsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class SkillsService {
  constructor(http) {
    this.http = http;
    this.skills = [];
    this.loadSkills();
  }
  loadSkills() {
    this.http.get('https://angular-html-a7dde.firebaseio.com/skills.json').subscribe(resp => {
      this.skills = resp;
    });
  }
  static #_ = this.ɵfac = function SkillsService_Factory(t) {
    return new (t || SkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SkillsService,
    factory: SkillsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1777:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 1713);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 3707);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 5897);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_info_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/info-page.service */ 4614);







class FooterComponent {
  constructor(infoPageService) {
    this.infoPageService = infoPageService;
    this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCircle;
    this.farCircle = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircle;
    this.faSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSquare;
    this.farSquare = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSquare;
    this.faStackOverflow = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faStackOverflow;
    this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGithub;
    this.faMedium = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMedium;
    this.info = {};
    this.year = new Date().getFullYear();
    this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
  }
  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.infoPageService.loadInfo().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
      next: data => {
        this.info = data;
      }
    });
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_info_page_service__WEBPACK_IMPORTED_MODULE_1__.InfoPageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 27,
    vars: 7,
    consts: [[1, "ae-container-fluid", "rk-footer"], [1, "ae-grid", "ae-grid--collapse"], [1, "ae-grid__item", "item-lg-4", "au-xs-ta-center", "au-lg-ta-left"], [1, "rk-footer__text", "rk-footer__copy"], [1, "ae-u-bold"], [1, "ae-u-bolder"], [1, "ae-grid__item", "item-lg-4", "au-xs-ta-center"], ["target", "_blank", 1, "rk-social-btn", 3, "href"], [1, "fab", "fa-github"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fas", "fa-code"], [1, "ae-grid__item", "item-lg-4", "au-xs-ta-center", "au-lg-ta-right"], [1, "rk-footer__text", "rk-footer__contact"], [1, "rk-dark-color", 3, "href"], [1, "rk-footer__text", "rk-footer__by"], ["href", "http://pixeden.com", 1, "ae-u-bolder"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12)(19, "p", 13)(20, "span", 5)(21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "My Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Theme by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Pixeden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.year, " TONY GONZALEZ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.version, " All Right Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx.info.github, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx.info.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx.info.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx.info.codersRank, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("href", "mailTo:", ctx.info.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1074:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_info_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/info-page.service */ 4614);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);






class HeaderComponent {
  constructor(infoPageService, router) {
    this.infoPageService = infoPageService;
    this.router = router;
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.info = {};
  }
  ngOnInit() {
    this.search.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(400), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.subs)).subscribe(value => {
      if (value) this.searchProduct(value);
    });
    this.getInfo();
  }
  ngOnDestroy() {
    this.subs.next();
    this.subs.complete();
  }
  searchProduct(term) {
    this.router.navigate(['/search', term]);
  }
  getInfo() {
    this.infoPageService.loadInfo().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
      next: data => {
        this.info = data;
      }
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_info_page_service__WEBPACK_IMPORTED_MODULE_0__.InfoPageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 38,
    vars: 2,
    consts: [[1, "ae-container-fluid", "ae-container-fluid--full", "rk-header"], ["type", "checkbox", "id", "mobile-menu", 1, "rk-mobile-menu"], ["for", "mobile-menu"], [0, "xlink", "href", "assets/img/symbols.svg#bar"], [1, "ae-container-fluid", "rk-topbar"], [1, "rk-logo"], ["routerLink", "about", 1, "title"], [1, "rk-navigation"], [1, "rk-menu"], ["routerLinkActive", "active", 1, "rk-menu__item"], ["routerLink", "about", 1, "rk-menu__link"], ["routerLink", "skills", 1, "rk-menu__link"], ["routerLink", "projects", 1, "rk-menu__link"], ["routerLink", "contact", 1, "rk-menu__link"], [1, "rk-menu__item"], ["href", "https://drive.google.com/file/d/1Jwq7QDsbJ4Z7xZ4oxQCACr_4h_1GEcte/view?usp=sharing", "target", "_blank", 1, "rk-menu__link"], [1, "rk-search"], ["type", "text", "placeholder", "Search...", "id", "urku-search", 1, "rk-search-field", 3, "formControl"], ["txtSearch", ""], ["for", "urku-search"], [0, "xlink", "href", "assets/img/symbols.svg#icon-search"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 4)(10, "h1", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "tm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "nav", 7)(16, "ul", 8)(17, "li", 9)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "li", 9)(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li", 9)(24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li", 9)(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "li", 14)(30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "use", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.info.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.search);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: ["@media screen and (min-width: 280px){\n  .title[_ngcontent-%COMP%]{\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 369px){\n  .title[_ngcontent-%COMP%]{\n    font-size: 24px;\n  }\n}\n\n@media screen and (min-width: 768px){\n  .title[_ngcontent-%COMP%]{\n    font-size: 30px;\n  }\n}\n\n@media screen and (min-width: 1024px){\n  .title[_ngcontent-%COMP%]{\n    font-size: 26px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjgwcHgpe1xyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2OXB4KXtcclxuICAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  version: 'v1.0.0'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map