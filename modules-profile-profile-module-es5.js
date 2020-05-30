function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-profile-profile-module"], {
  /***/
  "./src/app/modules/profile/components/page-profile/ads/ads.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/profile/components/page-profile/ads/ads.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PageProfileAdsComponent */

  /***/
  function srcAppModulesProfileComponentsPageProfileAdsAdsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageProfileAdsComponent", function () {
      return PageProfileAdsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../components/preloader/preloader.component */
    "./src/app/components/preloader/preloader.component.ts");
    /* harmony import */


    var _components_ad_ad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../components/ad/ad.component */
    "./src/app/components/ad/ad.component.ts");

    var _c0 = ["preloader"];

    function PageProfileAdsComponent_div_1_app_ad_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ad", 5);
      }

      if (rf & 2) {
        var ad_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ad", ad_r3)("inProfile", true);
      }
    }

    function PageProfileAdsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageProfileAdsComponent_div_1_app_ad_1_Template, 1, 2, "app-ad", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ads);
      }
    }

    var PageProfileAdsComponent = /*#__PURE__*/function () {
      function PageProfileAdsComponent(serviceProfile, serviceAuth) {
        _classCallCheck(this, PageProfileAdsComponent);

        this.serviceProfile = serviceProfile;
        this.serviceAuth = serviceAuth;
        this.subscriptions = [];
        this.limit = 3;
        this.offset = 0;
        this.ads = [];
        this.isLoading = false;
        this.isLoadAll = false;
      }

      _createClass(PageProfileAdsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadMoreForScroll = this.loadMore.bind(this);
          var s1 = this.serviceAuth.profile$.subscribe(function (x) {
            _this.profile = x; // может прийти null. При этом отправку данных не делаем.

            if (!x) {
              return;
            }

            _this.send();
          });
          this.subscriptions.push(s1);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
          this.removeScroll();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.addScroll();
        }
      }, {
        key: "addScroll",
        value: function addScroll() {
          window.addEventListener('scroll', this.loadMoreForScroll);
        }
      }, {
        key: "removeScroll",
        value: function removeScroll() {
          window.removeEventListener('scroll', this.loadMoreForScroll);
        }
      }, {
        key: "send",
        value: function send() {
          var _this2 = this;

          this.isLoading = true;
          var s = this.serviceProfile.getAds(this.limit, this.offset).subscribe(function (x) {
            var _this2$ads;

            (_this2$ads = _this2.ads).push.apply(_this2$ads, _toConsumableArray(x));

            _this2.offset += _this2.limit;

            if (x.length < _this2.limit) {
              _this2.isLoadAll = true;
              return;
            }

            _this2.loadMore();
          }, function (err) {
            return _this2.isLoading = false;
          }, function () {
            return _this2.isLoading = false;
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          var rect = this.preloader.nativeElement.getBoundingClientRect();

          if (rect.top > window.innerHeight || this.isLoading || this.isLoadAll) {
            return;
          }

          this.send();
        }
      }]);

      return PageProfileAdsComponent;
    }();

    PageProfileAdsComponent.ɵfac = function PageProfileAdsComponent_Factory(t) {
      return new (t || PageProfileAdsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    PageProfileAdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageProfileAdsComponent,
      selectors: [["app-page-profile-ads"]],
      viewQuery: function PageProfileAdsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.preloader = _t.first);
        }
      },
      decls: 5,
      vars: 4,
      consts: [[1, "page-profile-ads"], [4, "ngIf"], [3, "hidden"], ["preloader", ""], ["viewOpt", "line", 3, "ad", "inProfile", 4, "ngFor", "ngForOf"], ["viewOpt", "line", 3, "ad", "inProfile"]],
      template: function PageProfileAdsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageProfileAdsComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-preloader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ads.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("not-visible", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLoadAll);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_4__["PreloaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_ad_ad_component__WEBPACK_IMPORTED_MODULE_5__["AdComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9jb21wb25lbnRzL3BhZ2UtcHJvZmlsZS9hZHMvYWRzLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageProfileAdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-profile-ads',
          templateUrl: './ads.component.html',
          styleUrls: ['./ads.component.less']
        }]
      }], function () {
        return [{
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, {
        preloader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['preloader', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/profile/components/page-profile/info/info.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/profile/components/page-profile/info/info.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PageProfileInfoComponent */

  /***/
  function srcAppModulesProfileComponentsPageProfileInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageProfileInfoComponent", function () {
      return PageProfileInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../helpers */
    "./src/app/helpers.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _validators_change_old_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../validators/change-old-password */
    "./src/app/validators/change-old-password.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["avatar"];

    function PageProfileInfoComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageProfileInfoComponent_ng_container_5_Template_div_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deletePhoto($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.url + "/resample/0/320/" + ctx_r1.profile.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PageProfileInfoComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.form.value), " ");
      }
    }

    var PageProfileInfoComponent = /*#__PURE__*/function () {
      function PageProfileInfoComponent(fb, serviceProfile, serviceAuth, router) {
        _classCallCheck(this, PageProfileInfoComponent);

        this.fb = fb;
        this.serviceProfile = serviceProfile;
        this.serviceAuth = serviceAuth;
        this.router = router;
        this.subscriptions = [];
        this.attentionMsg = 'Вы точно хотите удалить профиль?\nОн и все сопутствующие данные удалятся безвовзравно.\nПосле восстановить уже не получится.';
        this.avatarSave = '';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.isProdMode = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production;
        this.form = this.fb.group({
          files: '',
          avatar: '',
          name: '',
          email: '',
          passwordOld: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].minLenPassword)],
          passwordNew: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].minLenPassword)],
          passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].minLenPassword)]
        }, {
          validators: _validators_change_old_password__WEBPACK_IMPORTED_MODULE_4__["ChangeOldPassword"].PasswordsValidator
        });
      }

      _createClass(PageProfileInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var s = this.serviceAuth.profile$.subscribe(function (x) {
            _this3.profile = x;

            if (!x) {
              return;
            }

            _this3.form.patchValue(x);
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(_ref) {
          var _this4 = this;

          var target = _ref.target;

          if (this.form.invalid) {
            if (this.form.hasError('passwordsError')) {
              console.log(this.form.getError('passwordsError'));
            }

            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var newFormData = _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].getNewFormData(this.form.value);

          var btnSubmit = target.querySelector('[type="submit"]');
          target.classList.add('sx-loading');
          btnSubmit.disabled = true;
          var s = this.serviceProfile.update(newFormData).subscribe(function (x) {
            target.reset();

            _this4.form.reset();

            _this4.serviceAuth.profile$.next(x);

            _this4.avatarSave = '';

            _this4.form.patchValue({
              passwordOld: '',
              passwordNew: '',
              passwordConfirm: ''
            });
          }, function (err) {
            btnSubmit.disabled = false;
            target.classList.remove('sx-loading');
          }, function () {
            btnSubmit.disabled = false;
            target.classList.remove('sx-loading');
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "deleteProfile",
        value: function deleteProfile(_ref2) {
          var _this5 = this;

          var target = _ref2.target;

          if (!confirm(this.attentionMsg)) {
            return;
          }

          target.disable = true;
          var s = this.serviceProfile["delete"]().subscribe(function (x) {
            // отписку не делаем, т.к. нужно чтоб она по любому отработала
            _this5.serviceAuth.logout().subscribe(function (x) {
              return _this5.serviceAuth.JWT = '';
            });

            _this5.router.navigate(['/main']).then();
          }, function (err) {
            return target.disable = false;
          }, function () {
            return target.disable = false;
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "addPhoto",
        value: function addPhoto(_ref3) {
          var target = _ref3.target;

          _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].addPhoto(target, this.form);
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(_ref4) {
          var target = _ref4.target;
          var avatarTag = this.avatar.nativeElement;

          if (avatarTag.classList.contains('sx-statement')) {
            avatarTag.classList.remove('sx-statement');
            this.form.get('avatar').setValue(this.avatarSave);
          } else {
            avatarTag.classList.add('sx-statement');
            this.avatarSave = this.form.get('avatar').value;
            this.form.get('avatar').setValue('');
            this.form.markAsDirty();
          }
        }
      }]);

      return PageProfileInfoComponent;
    }();

    PageProfileInfoComponent.ɵfac = function PageProfileInfoComponent_Factory(t) {
      return new (t || PageProfileInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    PageProfileInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageProfileInfoComponent,
      selectors: [["app-page-profile-info"]],
      viewQuery: function PageProfileInfoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
        }
      },
      decls: 47,
      vars: 7,
      consts: [[1, "page-profile-info"], [1, "page-profile-info_flexbox"], [1, "page-profile-info_avatar"], ["avatar", ""], [4, "ngIf"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "hidden", "formControlName", "files"], ["type", "file", "accept", "image/jpeg,image/png", 3, "change"], ["formControlName", "email", "type", "email", "readonly", "readonly"], ["formControlName", "name", "type", "text"], ["formControlName", "passwordOld", "type", "text"], ["formControlName", "passwordNew", "type", "text"], ["formControlName", "passwordConfirm", "type", "text"], ["type", "submit", "value", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", 3, "disabled"], [1, "form_row", "align-right"], [1, "text-mute"], ["class", "form_row", 4, "ngIf"], [1, "hr"], [1, "align-right"], [3, "click"], ["title", "\u0443\u0434\u0430\u043B\u0438\u0442\u044C", 1, "page-profile-info_avatar_delete", 3, "click"], [3, "src"]],
      template: function PageProfileInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageProfileInfoComponent_ng_container_5_Template, 4, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PageProfileInfoComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0410\u0432\u0430\u0442\u0430\u0440:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PageProfileInfoComponent_Template_input_change_12_listener($event) {
            return ctx.addPhoto($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0415-\u043C\u044D\u0439\u043B:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0418\u043C\u044F:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u0430\u0440\u043E\u043B\u044C:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u043F\u043E\u0432\u0442\u043E\u0440):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PageProfileInfoComponent_div_40_Template, 3, 3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageProfileInfoComponent_Template_button_click_45_listener($event) {
            return ctx.deleteProfile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile == null ? null : ctx.profile.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.form.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 5, ctx.profile == null ? null : ctx.profile.createdAt), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isProdMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]],
      styles: [".page-profile-info_flexbox[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page-profile-info_flexbox[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.page-profile-info_flexbox[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  flex: 0 0 15em;\n}\n.page-profile-info_flexbox[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1em;\n}\n.page-profile-info_avatar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15em;\n  height: 20em;\n  overflow: hidden;\n  background-color: whitesmoke;\n}\n.page-profile-info_avatar.sx-statement[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.page-profile-info_avatar_delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  width: 1em;\n  height: 1em;\n  background-color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n}\n.page-profile-info_avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.page-profile-info[_ngcontent-%COMP%]   .form.sx-loading[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0QvbG9jYWxob3N0L2FsdGFpci9hbHRhaXItZnJvbnQvc3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvY29tcG9uZW50cy9wYWdlLXByb2ZpbGUvaW5mby9pbmZvLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvY29tcG9uZW50cy9wYWdlLXByb2ZpbGUvaW5mby9pbmZvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQ0FSO0FERVE7RUFDSSxnQkFBQTtBQ0FaO0FERVk7RUFDSSxjQUFBO0FDQWhCO0FER1k7RUFDSSxnQkFBQTtBQ0RoQjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0pSO0FETVE7RUFFUSxZQUFBO0FDTGhCO0FEU1E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FDUFo7QURwQkk7RUErQlEsZUFBQTtFQUNBLGdCQUFBO0FDUlo7QUR6Q0E7RUFzRFEsWUFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudHMvcGFnZS1wcm9maWxlL2luZm8vaW5mby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXByb2ZpbGUtaW5mbyB7XG4gICAgJl9mbGV4Ym94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMTVlbTsgLy8gMjQwcHggLyAxNnB4XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07IC8vIDE2cHggLyAxNnB4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX2F2YXRhciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxNWVtOyAvLyAyNDBweCAvIDE2cHhcbiAgICAgICAgaGVpZ2h0OiAyMGVtOyAvLyAzMjBweCAvIDE2cHhcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcblxuICAgICAgICAmLnN4LXN0YXRlbWVudCB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfZGVsZXRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07IC8vIDI0cHggLyAxNnB4XG4gICAgICAgICAgICB3aWR0aDogMWVtOyAvLyAyNHB4IC8gMjRweFxuICAgICAgICAgICAgaGVpZ2h0OiAxZW07IC8vIDI0cHggLyAyNHB4XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLnN4LWxvYWRpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxufVxuIiwiLnBhZ2UtcHJvZmlsZS1pbmZvX2ZsZXhib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBhZ2UtcHJvZmlsZS1pbmZvX2ZsZXhib3ggPiAqIHtcbiAgZmxleC1iYXNpczogMTAwJTtcbn1cbi5wYWdlLXByb2ZpbGUtaW5mb19mbGV4Ym94ID4gKjpmaXJzdC1jaGlsZCB7XG4gIGZsZXg6IDAgMCAxNWVtO1xufVxuLnBhZ2UtcHJvZmlsZS1pbmZvX2ZsZXhib3ggPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5wYWdlLXByb2ZpbGUtaW5mb19hdmF0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTVlbTtcbiAgaGVpZ2h0OiAyMGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnBhZ2UtcHJvZmlsZS1pbmZvX2F2YXRhci5zeC1zdGF0ZW1lbnQgaW1nIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnBhZ2UtcHJvZmlsZS1pbmZvX2F2YXRhcl9kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFnZS1wcm9maWxlLWluZm9fYXZhdGFyIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5wYWdlLXByb2ZpbGUtaW5mbyAuZm9ybS5zeC1sb2FkaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageProfileInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-profile-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['avatar', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/profile/components/page-profile/page-profile.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/profile/components/page-profile/page-profile.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PageProfileComponent */

  /***/
  function srcAppModulesProfileComponentsPageProfilePageProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageProfileComponent", function () {
      return PageProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PageProfileComponent = /*#__PURE__*/function () {
      function PageProfileComponent(serviceAuth, router) {
        _classCallCheck(this, PageProfileComponent);

        this.serviceAuth = serviceAuth;
        this.router = router;
        this.subscriptions = [];
      }

      _createClass(PageProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this6 = this;

          var s = this.serviceAuth.logout().subscribe(function (x) {
            _this6.serviceAuth.JWT = '';
            localStorage.clear();

            _this6.serviceAuth.profile$.next(null);

            _this6.router.navigate(['/main']).then();
          });
          this.subscriptions.push(s);
        }
      }]);

      return PageProfileComponent;
    }();

    PageProfileComponent.ɵfac = function PageProfileComponent_Factory(t) {
      return new (t || PageProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PageProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageProfileComponent,
      selectors: [["app-page-profile"]],
      decls: 18,
      vars: 0,
      consts: [[1, "page-profile"], [1, "page-profile_cols"], [1, "page-profile_cols_col", "sx-menu"], [1, "page-profile_links"], [1, "text-eclipse"], ["href", "javascript:void(0)", "routerLink", "/profile/info", "routerLinkActive", "active"], ["href", "javascript:void(0)", "routerLink", "/profile/ads", "routerLinkActive", "active"], ["href", "javascript:void(0)", "routerLink", "/profile/settings", "routerLinkActive", "active"], ["href", "javascript:void(0)", 3, "click"], [1, "page-profile_cols_col", "sx-content"]],
      template: function PageProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041C\u043E\u0438 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageProfileComponent_Template_a_click_14_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0412\u044B\u0445\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".page-profile[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.page-profile_cols[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page-profile_cols_col[_ngcontent-%COMP%]    + .page-profile_cols_col[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.page-profile_cols_col.sx-content[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.page-profile_links[_ngcontent-%COMP%] {\n  display: block;\n  width: 15em;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.page-profile_links[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  padding-top: 0.5em;\n  border-top: whitesmoke solid 0.0625em;\n}\n.page-profile_links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0QvbG9jYWxob3N0L2FsdGFpci9hbHRhaXItZnJvbnQvc3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvY29tcG9uZW50cy9wYWdlLXByb2ZpbGUvcGFnZS1wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvY29tcG9uZW50cy9wYWdlLXByb2ZpbGUvcGFnZS1wcm9maWxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQ0RKO0FER0k7RUFDSSxhQUFBO0FDRFI7QURJWTtFQUNJLGdCQUFBO0FDRmhCO0FEUVk7RUFDSSxnQkFBQTtBQ05oQjtBRFdJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDVFI7QURXUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQ1RaO0FEREk7RUFjUSxxQkFBQTtBQ1ZaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudHMvcGFnZS1wcm9maWxlL3BhZ2UtcHJvZmlsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9jc3NfdmFyaWFibGVzXCI7XG5cbi5wYWdlLXByb2ZpbGUge1xuICAgIG1hcmdpbi10b3A6IDFlbTsgLy8gMTZweCAvIDE2cHhcblxuICAgICZfY29scyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgJl9jb2wge1xuICAgICAgICAgICAgJiArICYge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07IC8vIDE2cHggLyAxNnB4XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc3gtbWVudSB7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc3gtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfbGlua3Mge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDE1ZW07IC8vIDI0MHB4IC8gMTZweFxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgJiA+IGxpICsgbGkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07IC8vIDhweCAvIDE2cHhcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTsgLy8gOHB4IC8gMTZweFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogd2hpdGVzbW9rZSBzb2xpZCBAMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYS5hY3RpdmUge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnBhZ2UtcHJvZmlsZSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5wYWdlLXByb2ZpbGVfY29scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZS1wcm9maWxlX2NvbHNfY29sICsgLnBhZ2UtcHJvZmlsZV9jb2xzX2NvbCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4ucGFnZS1wcm9maWxlX2NvbHNfY29sLnN4LWNvbnRlbnQge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xufVxuLnBhZ2UtcHJvZmlsZV9saW5rcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTVlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnBhZ2UtcHJvZmlsZV9saW5rcyA+IGxpICsgbGkge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBib3JkZXItdG9wOiB3aGl0ZXNtb2tlIHNvbGlkIDAuMDYyNWVtO1xufVxuLnBhZ2UtcHJvZmlsZV9saW5rcyBhLmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-profile',
          templateUrl: './page-profile.component.html',
          styleUrls: ['./page-profile.component.less']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/profile/components/page-profile/settings/settings.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/profile/components/page-profile/settings/settings.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: PageProfileSettingsComponent */

  /***/
  function srcAppModulesProfileComponentsPageProfileSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageProfileSettingsComponent", function () {
      return PageProfileSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageProfileSettingsComponent = function PageProfileSettingsComponent() {
      _classCallCheck(this, PageProfileSettingsComponent);
    };

    PageProfileSettingsComponent.ɵfac = function PageProfileSettingsComponent_Factory(t) {
      return new (t || PageProfileSettingsComponent)();
    };

    PageProfileSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageProfileSettingsComponent,
      selectors: [["app-page-profile-settings"]],
      decls: 1,
      vars: 0,
      consts: [[1, "page-profile-settings"]],
      template: function PageProfileSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9jb21wb25lbnRzL3BhZ2UtcHJvZmlsZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageProfileSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-profile-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.less']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/profile/profile-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/profile/profile-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppModulesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/page-profile/page-profile.component */
    "./src/app/modules/profile/components/page-profile/page-profile.component.ts");
    /* harmony import */


    var _components_page_profile_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-profile/info/info.component */
    "./src/app/modules/profile/components/page-profile/info/info.component.ts");
    /* harmony import */


    var _components_page_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/page-profile/settings/settings.component */
    "./src/app/modules/profile/components/page-profile/settings/settings.component.ts");
    /* harmony import */


    var _components_page_profile_ads_ads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page-profile/ads/ads.component */
    "./src/app/modules/profile/components/page-profile/ads/ads.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'info',
      pathMatch: 'full'
    }, {
      path: '',
      component: _components_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_3__["PageProfileComponent"],
      children: [{
        path: 'info',
        component: _components_page_profile_info_info_component__WEBPACK_IMPORTED_MODULE_4__["PageProfileInfoComponent"]
      }, {
        path: 'settings',
        component: _components_page_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["PageProfileSettingsComponent"]
      }, {
        path: 'ads',
        component: _components_page_profile_ads_ads_component__WEBPACK_IMPORTED_MODULE_6__["PageProfileAdsComponent"]
      }]
    }, {
      path: '**',
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
    ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileRoutingModule_Factory(t) {
        return new (t || ProfileRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/profile/profile.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/profile/profile.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppModulesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-profile/page-profile.component */
    "./src/app/modules/profile/components/page-profile/page-profile.component.ts");
    /* harmony import */


    var _components_page_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/page-profile/settings/settings.component */
    "./src/app/modules/profile/components/page-profile/settings/settings.component.ts");
    /* harmony import */


    var _components_page_profile_info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page-profile/info/info.component */
    "./src/app/modules/profile/components/page-profile/info/info.component.ts");
    /* harmony import */


    var _components_page_profile_ads_ads_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/page-profile/ads/ads.component */
    "./src/app/modules/profile/components/page-profile/ads/ads.component.ts");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/modules/profile/profile-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_components_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_4__["PageProfileComponent"], _components_page_profile_info_info_component__WEBPACK_IMPORTED_MODULE_6__["PageProfileInfoComponent"], _components_page_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["PageProfileSettingsComponent"], _components_page_profile_ads_ads_component__WEBPACK_IMPORTED_MODULE_7__["PageProfileAdsComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_4__["PageProfileComponent"], _components_page_profile_info_info_component__WEBPACK_IMPORTED_MODULE_6__["PageProfileInfoComponent"], _components_page_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["PageProfileSettingsComponent"], _components_page_profile_ads_ads_component__WEBPACK_IMPORTED_MODULE_7__["PageProfileAdsComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/validators/change-old-password.ts":
  /*!***************************************************!*\
    !*** ./src/app/validators/change-old-password.ts ***!
    \***************************************************/

  /*! exports provided: ChangeOldPassword */

  /***/
  function srcAppValidatorsChangeOldPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeOldPassword", function () {
      return ChangeOldPassword;
    });

    var ChangeOldPassword = function ChangeOldPassword() {
      _classCallCheck(this, ChangeOldPassword);
    };

    ChangeOldPassword.PasswordsValidator = function (control) {
      var passwordOld = control.get('passwordOld').value;
      var passwordNew = control.get('passwordNew').value;
      var passwordConfirm = control.get('passwordConfirm').value;

      if (passwordOld) {
        passwordOld = passwordOld.trim();
      }

      if (passwordNew) {
        passwordNew = passwordNew.trim();
      }

      if (passwordConfirm) {
        passwordConfirm = passwordConfirm.trim();
      }

      if (!passwordOld && !passwordNew && !passwordConfirm || passwordOld && passwordNew === passwordConfirm) {
        return null;
      }

      return {
        passwordsError: 'ошибка в паролях'
      };
    };
    /***/

  }
}]);
//# sourceMappingURL=modules-profile-profile-module-es5.js.map