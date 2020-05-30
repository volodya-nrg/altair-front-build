function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-adm-adm-module"], {
  /***/
  "./src/app/interfaces/response/prop.ts":
  /*!*********************************************!*\
    !*** ./src/app/interfaces/response/prop.ts ***!
    \*********************************************/

  /*! exports provided: PropsAssignedForCat */

  /***/
  function srcAppInterfacesResponsePropTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropsAssignedForCat", function () {
      return PropsAssignedForCat;
    });

    var PropsAssignedForCat = function PropsAssignedForCat(x) {
      _classCallCheck(this, PropsAssignedForCat);

      this.propId = 0;
      this.title = '';
      this.comment = '';
      this.pos = 1;
      this.isRequire = false;
      this.isCanAsFilter = false;
      this.propId = x.propId;
      this.title = x.title + (x.privateComment ? " (".concat(x.privateComment, ")") : '');
      this.comment = x.propComment;
      this.pos = x.propPos;
      this.isRequire = x.propIsRequire;
      this.isCanAsFilter = x.propIsCanAsFilter;
    };
    /***/

  },

  /***/
  "./src/app/modules/adm/adm-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/adm/adm-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AdmRoutingModule */

  /***/
  function srcAppModulesAdmAdmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmRoutingModule", function () {
      return AdmRoutingModule;
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


    var _components_page_adm_page_adm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/page-adm/page-adm.component */
    "./src/app/modules/adm/components/page-adm/page-adm.component.ts");

    var routes = [{
      path: '',
      component: _components_page_adm_page_adm_component__WEBPACK_IMPORTED_MODULE_2__["PageAdmComponent"]
    }];

    var AdmRoutingModule = function AdmRoutingModule() {
      _classCallCheck(this, AdmRoutingModule);
    };

    AdmRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdmRoutingModule
    });
    AdmRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdmRoutingModule_Factory(t) {
        return new (t || AdmRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdmRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmRoutingModule, [{
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
  "./src/app/modules/adm/adm.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/modules/adm/adm.module.ts ***!
    \*******************************************/

  /*! exports provided: AdmModule */

  /***/
  function srcAppModulesAdmAdmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmModule", function () {
      return AdmModule;
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


    var _adm_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adm-routing.module */
    "./src/app/modules/adm/adm-routing.module.ts");
    /* harmony import */


    var _components_dynamic_prop_dynamic_prop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dynamic-prop/dynamic-prop.component */
    "./src/app/modules/adm/components/dynamic-prop/dynamic-prop.component.ts");
    /* harmony import */


    var _components_dynamic_props_dynamic_props_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/dynamic-props/dynamic-props.component */
    "./src/app/modules/adm/components/dynamic-props/dynamic-props.component.ts");
    /* harmony import */


    var _components_dynamic_value_dynamic_value_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/dynamic-value/dynamic-value.component */
    "./src/app/modules/adm/components/dynamic-value/dynamic-value.component.ts");
    /* harmony import */


    var _components_dynamic_values_dynamic_values_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/dynamic-values/dynamic-values.component */
    "./src/app/modules/adm/components/dynamic-values/dynamic-values.component.ts");
    /* harmony import */


    var _components_forms_ads_forms_ads_delete_ads_adid_forms_ads_delete_ads_adid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/forms-ads/forms-ads-delete-ads-adid/forms-ads-delete-ads-adid.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-delete-ads-adid/forms-ads-delete-ads-adid.component.ts");
    /* harmony import */


    var _components_forms_ads_forms_ads_get_ads_adid_forms_ads_get_ads_adid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/forms-ads/forms-ads-get-ads-adid/forms-ads-get-ads-adid.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-get-ads-adid/forms-ads-get-ads-adid.component.ts");
    /* harmony import */


    var _components_forms_ads_forms_ads_get_ads_forms_ads_get_ads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/forms-ads/forms-ads-get-ads/forms-ads-get-ads.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-get-ads/forms-ads-get-ads.component.ts");
    /* harmony import */


    var _components_forms_ads_forms_ads_post_ads_forms_ads_post_ads_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/forms-ads/forms-ads-post-ads/forms-ads-post-ads.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-post-ads/forms-ads-post-ads.component.ts");
    /* harmony import */


    var _components_forms_ads_forms_ads_put_ads_adid_forms_ads_put_ads_adid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/forms-ads/forms-ads-put-ads-adid/forms-ads-put-ads-adid.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-put-ads-adid/forms-ads-put-ads-adid.component.ts");
    /* harmony import */


    var _components_forms_cats_forms_cats_delete_cats_catid_forms_cats_delete_cats_catid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/forms-cats/forms-cats-delete-cats-catid/forms-cats-delete-cats-catid.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-delete-cats-catid/forms-cats-delete-cats-catid.component.ts");
    /* harmony import */


    var _components_forms_cats_forms_cats_get_cats_catid_forms_cats_get_cats_catid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/forms-cats/forms-cats-get-cats-catid/forms-cats-get-cats-catid.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-get-cats-catid/forms-cats-get-cats-catid.component.ts");
    /* harmony import */


    var _components_forms_cats_forms_cats_get_cats_forms_cats_get_cats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/forms-cats/forms-cats-get-cats/forms-cats-get-cats.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-get-cats/forms-cats-get-cats.component.ts");
    /* harmony import */


    var _components_forms_cats_forms_cats_post_cats_forms_cats_post_cats_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/forms-cats/forms-cats-post-cats/forms-cats-post-cats.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-post-cats/forms-cats-post-cats.component.ts");
    /* harmony import */


    var _components_forms_cats_forms_cats_put_cats_catid_forms_cats_put_cats_catid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/forms-cats/forms-cats-put-cats-catid/forms-cats-put-cats-catid.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-put-cats-catid/forms-cats-put-cats-catid.component.ts");
    /* harmony import */


    var _components_forms_kind_props_forms_kind_props_delete_forms_kind_props_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/forms-kind-props/forms-kind-props-delete/forms-kind-props-delete.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-delete/forms-kind-props-delete.component.ts");
    /* harmony import */


    var _components_forms_kind_props_forms_kind_props_get_all_forms_kind_props_get_all_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/forms-kind-props/forms-kind-props-get-all/forms-kind-props-get-all.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-get-all/forms-kind-props-get-all.component.ts");
    /* harmony import */


    var _components_forms_kind_props_forms_kind_props_get_one_forms_kind_props_get_one_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/forms-kind-props/forms-kind-props-get-one/forms-kind-props-get-one.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-get-one/forms-kind-props-get-one.component.ts");
    /* harmony import */


    var _components_forms_kind_props_forms_kind_props_post_forms_kind_props_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/forms-kind-props/forms-kind-props-post/forms-kind-props-post.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-post/forms-kind-props-post.component.ts");
    /* harmony import */


    var _components_forms_kind_props_forms_kind_props_put_forms_kind_props_put_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/forms-kind-props/forms-kind-props-put/forms-kind-props-put.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-put/forms-kind-props-put.component.ts");
    /* harmony import */


    var _components_forms_pages_forms_pages_ad_adid_forms_pages_ad_adid_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/forms-pages/forms-pages-ad-adid/forms-pages-ad-adid.component */
    "./src/app/modules/adm/components/forms-pages/forms-pages-ad-adid/forms-pages-ad-adid.component.ts");
    /* harmony import */


    var _components_forms_pages_forms_pages_main_forms_pages_main_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/forms-pages/forms-pages-main/forms-pages-main.component */
    "./src/app/modules/adm/components/forms-pages/forms-pages-main/forms-pages-main.component.ts");
    /* harmony import */


    var _components_forms_props_forms_props_delete_props_propid_forms_props_delete_props_propid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/forms-props/forms-props-delete-props-propid/forms-props-delete-props-propid.component */
    "./src/app/modules/adm/components/forms-props/forms-props-delete-props-propid/forms-props-delete-props-propid.component.ts");
    /* harmony import */


    var _components_forms_props_forms_props_get_props_forms_props_get_props_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/forms-props/forms-props-get-props/forms-props-get-props.component */
    "./src/app/modules/adm/components/forms-props/forms-props-get-props/forms-props-get-props.component.ts");
    /* harmony import */


    var _components_forms_props_forms_props_get_props_propid_forms_props_get_props_propid_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/forms-props/forms-props-get-props-propid/forms-props-get-props-propid.component */
    "./src/app/modules/adm/components/forms-props/forms-props-get-props-propid/forms-props-get-props-propid.component.ts");
    /* harmony import */


    var _components_forms_props_forms_props_post_props_forms_props_post_props_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/forms-props/forms-props-post-props/forms-props-post-props.component */
    "./src/app/modules/adm/components/forms-props/forms-props-post-props/forms-props-post-props.component.ts");
    /* harmony import */


    var _components_forms_props_forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/forms-props/forms-props-post-put-prop/forms-props-post-put-prop.component */
    "./src/app/modules/adm/components/forms-props/forms-props-post-put-prop/forms-props-post-put-prop.component.ts");
    /* harmony import */


    var _components_forms_props_forms_props_put_props_propid_forms_props_put_props_propid_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/forms-props/forms-props-put-props-propid/forms-props-put-props-propid.component */
    "./src/app/modules/adm/components/forms-props/forms-props-put-props-propid/forms-props-put-props-propid.component.ts");
    /* harmony import */


    var _components_forms_search_forms_search_ads_forms_search_ads_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/forms-search/forms-search-ads/forms-search-ads.component */
    "./src/app/modules/adm/components/forms-search/forms-search-ads/forms-search-ads.component.ts");
    /* harmony import */


    var _components_forms_test_forms_test_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/forms-test/forms-test.component */
    "./src/app/modules/adm/components/forms-test/forms-test.component.ts");
    /* harmony import */


    var _components_forms_users_forms_users_delete_users_userid_forms_users_delete_users_userid_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/forms-users/forms-users-delete-users-userid/forms-users-delete-users-userid.component */
    "./src/app/modules/adm/components/forms-users/forms-users-delete-users-userid/forms-users-delete-users-userid.component.ts");
    /* harmony import */


    var _components_forms_users_forms_users_get_users_forms_users_get_users_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/forms-users/forms-users-get-users/forms-users-get-users.component */
    "./src/app/modules/adm/components/forms-users/forms-users-get-users/forms-users-get-users.component.ts");
    /* harmony import */


    var _components_forms_users_forms_users_get_users_userid_forms_users_get_users_userid_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/forms-users/forms-users-get-users-userid/forms-users-get-users-userid.component */
    "./src/app/modules/adm/components/forms-users/forms-users-get-users-userid/forms-users-get-users-userid.component.ts");
    /* harmony import */


    var _components_forms_users_forms_users_post_users_forms_users_post_users_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/forms-users/forms-users-post-users/forms-users-post-users.component */
    "./src/app/modules/adm/components/forms-users/forms-users-post-users/forms-users-post-users.component.ts");
    /* harmony import */


    var _components_forms_users_forms_users_put_users_userid_forms_users_put_users_userid_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/forms-users/forms-users-put-users-userid/forms-users-put-users-userid.component */
    "./src/app/modules/adm/components/forms-users/forms-users-put-users-userid/forms-users-put-users-userid.component.ts");
    /* harmony import */


    var _components_page_adm_page_adm_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/page-adm/page-adm.component */
    "./src/app/modules/adm/components/page-adm/page-adm.component.ts");
    /* harmony import */


    var _pipes_pretty_json_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./pipes/pretty-json.pipe */
    "./src/app/modules/adm/pipes/pretty-json.pipe.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");

    var AdmModule = function AdmModule() {
      _classCallCheck(this, AdmModule);
    };

    AdmModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdmModule
    });
    AdmModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdmModule_Factory(t) {
        return new (t || AdmModule)();
      },
      imports: [[_adm_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdmRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_40__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdmModule, {
        declarations: [_components_dynamic_prop_dynamic_prop_component__WEBPACK_IMPORTED_MODULE_4__["DynamicPropComponent"], _components_dynamic_props_dynamic_props_component__WEBPACK_IMPORTED_MODULE_5__["DynamicPropsComponent"], _components_dynamic_value_dynamic_value_component__WEBPACK_IMPORTED_MODULE_6__["DynamicValueComponent"], _components_dynamic_values_dynamic_values_component__WEBPACK_IMPORTED_MODULE_7__["DynamicValuesComponent"], _components_forms_ads_forms_ads_delete_ads_adid_forms_ads_delete_ads_adid_component__WEBPACK_IMPORTED_MODULE_8__["FormsAdsDeleteAdsAdidComponent"], _components_forms_ads_forms_ads_get_ads_adid_forms_ads_get_ads_adid_component__WEBPACK_IMPORTED_MODULE_9__["FormsAdsGetAdsAdidComponent"], _components_forms_ads_forms_ads_get_ads_forms_ads_get_ads_component__WEBPACK_IMPORTED_MODULE_10__["FormsAdsGetAdsComponent"], _components_forms_ads_forms_ads_post_ads_forms_ads_post_ads_component__WEBPACK_IMPORTED_MODULE_11__["FormsAdsPostAdsComponent"], _components_forms_ads_forms_ads_put_ads_adid_forms_ads_put_ads_adid_component__WEBPACK_IMPORTED_MODULE_12__["FormsAdsPutAdsAdidComponent"], _components_forms_cats_forms_cats_delete_cats_catid_forms_cats_delete_cats_catid_component__WEBPACK_IMPORTED_MODULE_13__["FormsCatsDeleteCatsCatidComponent"], _components_forms_cats_forms_cats_get_cats_catid_forms_cats_get_cats_catid_component__WEBPACK_IMPORTED_MODULE_14__["FormsCatsGetCatsCatidComponent"], _components_forms_cats_forms_cats_get_cats_forms_cats_get_cats_component__WEBPACK_IMPORTED_MODULE_15__["FormsCatsGetCatsComponent"], _components_forms_cats_forms_cats_post_cats_forms_cats_post_cats_component__WEBPACK_IMPORTED_MODULE_16__["FormsCatsPostCatsComponent"], _components_forms_cats_forms_cats_put_cats_catid_forms_cats_put_cats_catid_component__WEBPACK_IMPORTED_MODULE_17__["FormsCatsPutCatsCatidComponent"], _components_forms_kind_props_forms_kind_props_delete_forms_kind_props_delete_component__WEBPACK_IMPORTED_MODULE_18__["FormsKindPropsDeleteComponent"], _components_forms_kind_props_forms_kind_props_get_all_forms_kind_props_get_all_component__WEBPACK_IMPORTED_MODULE_19__["FormsKindPropsGetAllComponent"], _components_forms_kind_props_forms_kind_props_get_one_forms_kind_props_get_one_component__WEBPACK_IMPORTED_MODULE_20__["FormsKindPropsGetOneComponent"], _components_forms_kind_props_forms_kind_props_post_forms_kind_props_post_component__WEBPACK_IMPORTED_MODULE_21__["FormsKindPropsPostComponent"], _components_forms_kind_props_forms_kind_props_put_forms_kind_props_put_component__WEBPACK_IMPORTED_MODULE_22__["FormsKindPropsPutComponent"], _components_forms_pages_forms_pages_ad_adid_forms_pages_ad_adid_component__WEBPACK_IMPORTED_MODULE_23__["FormsPagesAdAdidComponent"], _components_forms_pages_forms_pages_main_forms_pages_main_component__WEBPACK_IMPORTED_MODULE_24__["FormsPagesMainComponent"], _components_forms_props_forms_props_delete_props_propid_forms_props_delete_props_propid_component__WEBPACK_IMPORTED_MODULE_25__["FormsPropsDeletePropsPropidComponent"], _components_forms_props_forms_props_get_props_forms_props_get_props_component__WEBPACK_IMPORTED_MODULE_26__["FormsPropsGetPropsComponent"], _components_forms_props_forms_props_get_props_propid_forms_props_get_props_propid_component__WEBPACK_IMPORTED_MODULE_27__["FormsPropsGetPropsPropidComponent"], _components_forms_props_forms_props_post_props_forms_props_post_props_component__WEBPACK_IMPORTED_MODULE_28__["FormsPropsPostPropsComponent"], _components_forms_props_forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_29__["FormsPropsPostPutPropComponent"], _components_forms_props_forms_props_put_props_propid_forms_props_put_props_propid_component__WEBPACK_IMPORTED_MODULE_30__["FormsPropsPutPropsPropidComponent"], _components_forms_search_forms_search_ads_forms_search_ads_component__WEBPACK_IMPORTED_MODULE_31__["FormsSearchAdsComponent"], _components_forms_test_forms_test_component__WEBPACK_IMPORTED_MODULE_32__["FormsTestComponent"], _components_forms_users_forms_users_delete_users_userid_forms_users_delete_users_userid_component__WEBPACK_IMPORTED_MODULE_33__["FormsUsersDeleteUsersUseridComponent"], _components_forms_users_forms_users_get_users_forms_users_get_users_component__WEBPACK_IMPORTED_MODULE_34__["FormsUsersGetUsersComponent"], _components_forms_users_forms_users_get_users_userid_forms_users_get_users_userid_component__WEBPACK_IMPORTED_MODULE_35__["FormsUsersGetUsersUseridComponent"], _components_forms_users_forms_users_post_users_forms_users_post_users_component__WEBPACK_IMPORTED_MODULE_36__["FormsUsersPostUsersComponent"], _components_forms_users_forms_users_put_users_userid_forms_users_put_users_userid_component__WEBPACK_IMPORTED_MODULE_37__["FormsUsersPutUsersUseridComponent"], _components_page_adm_page_adm_component__WEBPACK_IMPORTED_MODULE_38__["PageAdmComponent"], _pipes_pretty_json_pipe__WEBPACK_IMPORTED_MODULE_39__["PrettyJsonPipe"]],
        imports: [_adm_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdmRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_40__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_dynamic_prop_dynamic_prop_component__WEBPACK_IMPORTED_MODULE_4__["DynamicPropComponent"], _components_dynamic_props_dynamic_props_component__WEBPACK_IMPORTED_MODULE_5__["DynamicPropsComponent"], _components_dynamic_value_dynamic_value_component__WEBPACK_IMPORTED_MODULE_6__["DynamicValueComponent"], _components_dynamic_values_dynamic_values_component__WEBPACK_IMPORTED_MODULE_7__["DynamicValuesComponent"], _components_forms_ads_forms_ads_delete_ads_adid_forms_ads_delete_ads_adid_component__WEBPACK_IMPORTED_MODULE_8__["FormsAdsDeleteAdsAdidComponent"], _components_forms_ads_forms_ads_get_ads_adid_forms_ads_get_ads_adid_component__WEBPACK_IMPORTED_MODULE_9__["FormsAdsGetAdsAdidComponent"], _components_forms_ads_forms_ads_get_ads_forms_ads_get_ads_component__WEBPACK_IMPORTED_MODULE_10__["FormsAdsGetAdsComponent"], _components_forms_ads_forms_ads_post_ads_forms_ads_post_ads_component__WEBPACK_IMPORTED_MODULE_11__["FormsAdsPostAdsComponent"], _components_forms_ads_forms_ads_put_ads_adid_forms_ads_put_ads_adid_component__WEBPACK_IMPORTED_MODULE_12__["FormsAdsPutAdsAdidComponent"], _components_forms_cats_forms_cats_delete_cats_catid_forms_cats_delete_cats_catid_component__WEBPACK_IMPORTED_MODULE_13__["FormsCatsDeleteCatsCatidComponent"], _components_forms_cats_forms_cats_get_cats_catid_forms_cats_get_cats_catid_component__WEBPACK_IMPORTED_MODULE_14__["FormsCatsGetCatsCatidComponent"], _components_forms_cats_forms_cats_get_cats_forms_cats_get_cats_component__WEBPACK_IMPORTED_MODULE_15__["FormsCatsGetCatsComponent"], _components_forms_cats_forms_cats_post_cats_forms_cats_post_cats_component__WEBPACK_IMPORTED_MODULE_16__["FormsCatsPostCatsComponent"], _components_forms_cats_forms_cats_put_cats_catid_forms_cats_put_cats_catid_component__WEBPACK_IMPORTED_MODULE_17__["FormsCatsPutCatsCatidComponent"], _components_forms_kind_props_forms_kind_props_delete_forms_kind_props_delete_component__WEBPACK_IMPORTED_MODULE_18__["FormsKindPropsDeleteComponent"], _components_forms_kind_props_forms_kind_props_get_all_forms_kind_props_get_all_component__WEBPACK_IMPORTED_MODULE_19__["FormsKindPropsGetAllComponent"], _components_forms_kind_props_forms_kind_props_get_one_forms_kind_props_get_one_component__WEBPACK_IMPORTED_MODULE_20__["FormsKindPropsGetOneComponent"], _components_forms_kind_props_forms_kind_props_post_forms_kind_props_post_component__WEBPACK_IMPORTED_MODULE_21__["FormsKindPropsPostComponent"], _components_forms_kind_props_forms_kind_props_put_forms_kind_props_put_component__WEBPACK_IMPORTED_MODULE_22__["FormsKindPropsPutComponent"], _components_forms_pages_forms_pages_ad_adid_forms_pages_ad_adid_component__WEBPACK_IMPORTED_MODULE_23__["FormsPagesAdAdidComponent"], _components_forms_pages_forms_pages_main_forms_pages_main_component__WEBPACK_IMPORTED_MODULE_24__["FormsPagesMainComponent"], _components_forms_props_forms_props_delete_props_propid_forms_props_delete_props_propid_component__WEBPACK_IMPORTED_MODULE_25__["FormsPropsDeletePropsPropidComponent"], _components_forms_props_forms_props_get_props_forms_props_get_props_component__WEBPACK_IMPORTED_MODULE_26__["FormsPropsGetPropsComponent"], _components_forms_props_forms_props_get_props_propid_forms_props_get_props_propid_component__WEBPACK_IMPORTED_MODULE_27__["FormsPropsGetPropsPropidComponent"], _components_forms_props_forms_props_post_props_forms_props_post_props_component__WEBPACK_IMPORTED_MODULE_28__["FormsPropsPostPropsComponent"], _components_forms_props_forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_29__["FormsPropsPostPutPropComponent"], _components_forms_props_forms_props_put_props_propid_forms_props_put_props_propid_component__WEBPACK_IMPORTED_MODULE_30__["FormsPropsPutPropsPropidComponent"], _components_forms_search_forms_search_ads_forms_search_ads_component__WEBPACK_IMPORTED_MODULE_31__["FormsSearchAdsComponent"], _components_forms_test_forms_test_component__WEBPACK_IMPORTED_MODULE_32__["FormsTestComponent"], _components_forms_users_forms_users_delete_users_userid_forms_users_delete_users_userid_component__WEBPACK_IMPORTED_MODULE_33__["FormsUsersDeleteUsersUseridComponent"], _components_forms_users_forms_users_get_users_forms_users_get_users_component__WEBPACK_IMPORTED_MODULE_34__["FormsUsersGetUsersComponent"], _components_forms_users_forms_users_get_users_userid_forms_users_get_users_userid_component__WEBPACK_IMPORTED_MODULE_35__["FormsUsersGetUsersUseridComponent"], _components_forms_users_forms_users_post_users_forms_users_post_users_component__WEBPACK_IMPORTED_MODULE_36__["FormsUsersPostUsersComponent"], _components_forms_users_forms_users_put_users_userid_forms_users_put_users_userid_component__WEBPACK_IMPORTED_MODULE_37__["FormsUsersPutUsersUseridComponent"], _components_page_adm_page_adm_component__WEBPACK_IMPORTED_MODULE_38__["PageAdmComponent"], _pipes_pretty_json_pipe__WEBPACK_IMPORTED_MODULE_39__["PrettyJsonPipe"]],
          imports: [_adm_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdmRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_40__["SharedModule"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/dynamic-prop/dynamic-prop.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/adm/components/dynamic-prop/dynamic-prop.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DynamicPropComponent */

  /***/
  function srcAppModulesAdmComponentsDynamicPropDynamicPropComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicPropComponent", function () {
      return DynamicPropComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DynamicPropComponent = function DynamicPropComponent() {
      _classCallCheck(this, DynamicPropComponent);

      this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    DynamicPropComponent.ɵfac = function DynamicPropComponent_Factory(t) {
      return new (t || DynamicPropComponent)();
    };

    DynamicPropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DynamicPropComponent,
      selectors: [["app-dynamic-prop"]],
      inputs: {
        index: "index",
        propAssigned: "propAssigned"
      },
      outputs: {
        removed: "removed"
      },
      decls: 23,
      vars: 2,
      consts: [[1, "dynamic-prop", 3, "formGroup"], ["type", "hidden", "formControlName", "propId"], [1, "dynamic-prop_title"], [1, "dynamic-prop_content"], [1, "dynamic-prop_inputs"], ["formControlName", "comment", "type", "text", "placeholder", "\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 (\u043F\u043E\u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E\u043C)"], ["formControlName", "pos", "type", "number", "placeholder", "\u043F\u043E\u0437\u0438\u0446\u0438\u044F"], [1, "dynamic-prop_dop"], ["formControlName", "isRequire", "type", "checkbox"], ["formControlName", "isCanAsFilter", "type", "checkbox"], ["type", "button", 3, "click"]],
      template: function DynamicPropComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u043A\u0430\u043A \u0444\u0438\u043B\u044C\u0442\u0440 (\u0442\u043E\u0436\u0435) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicPropComponent_Template_button_click_21_listener() {
            return ctx.removed.emit(ctx.index);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.propAssigned);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.propAssigned.get("title").value, " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: [".dynamic-prop[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n  padding-bottom: 0.5em;\n  padding-left: 1em;\n  border-bottom: whitesmoke solid 0.0625em;\n}\n.dynamic-prop_title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.dynamic-prop_content[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 0.5em;\n}\n.dynamic-prop_content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.dynamic-prop_content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1em;\n}\n.dynamic-prop_content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  flex: 0 0 1em;\n}\n.dynamic-prop_inputs[_ngcontent-%COMP%] {\n  display: flex;\n}\n.dynamic-prop_inputs[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.dynamic-prop_inputs[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1em;\n}\n.dynamic-prop_inputs[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  flex: 0 0 4em;\n}\n.dynamic-prop_dop[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  display: flex;\n}\n.dynamic-prop_dop[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.dynamic-prop_dop[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1em;\n}\n.dynamic-prop[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .dynamic-prop[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0QvbG9jYWxob3N0L2FsdGFpci9hbHRhaXItZnJvbnQvc3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL2R5bmFtaWMtcHJvcC9keW5hbWljLXByb3AuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZHluYW1pYy1wcm9wL2R5bmFtaWMtcHJvcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FDREo7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FESVE7RUFDSSxnQkFBQTtBQ0ZaO0FESVk7RUFDSSxnQkFBQTtBQ0ZoQjtBREtZO0VBQ0ksYUFBQTtBQ0hoQjtBRFFJO0VBQ0ksYUFBQTtBQ05SO0FEUVE7RUFDSSxnQkFBQTtBQ05aO0FEUVk7RUFDSSxnQkFBQTtBQ05oQjtBRFNZO0VBQ0ksYUFBQTtBQ1BoQjtBRFlJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FDVlI7QURZUTtFQUNJLGdCQUFBO0FDVlo7QURZWTtFQUNJLGdCQUFBO0FDVmhCO0FEekNBOztFQXlEUSxjQUFBO0VBQ0EsV0FBQTtBQ1pSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG0vY29tcG9uZW50cy9keW5hbWljLXByb3AvZHluYW1pYy1wcm9wLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Nzc192YXJpYWJsZXNcIjtcblxuLmR5bmFtaWMtcHJvcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07IC8vIDE2cHggLyAxNnB4XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtOyAvLyAxNnB4IC8gMTZweFxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlc21va2Ugc29saWQgQDFweDtcblxuICAgICZfdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAmX2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTsgLy8gOHB4IC8gMTZlbVxuXG4gICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG5cbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07IC8vIDE2cHggLyAxNnB4XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDFlbTsgLy8gMTZweCAvIDE2cHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfaW5wdXRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtOyAvLyAxNnB4IC8gMTZweFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA0ZW07IC8vIDY0cHggLyAxNnB4LiBtaW4td2lkdGggaW5wdXQgPSA0ZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfZG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07IC8vIDhweCAvIDE2cHhcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIiwiLmR5bmFtaWMtcHJvcCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBib3JkZXItYm90dG9tOiB3aGl0ZXNtb2tlIHNvbGlkIDAuMDYyNWVtO1xufVxuLmR5bmFtaWMtcHJvcF90aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmR5bmFtaWMtcHJvcF9jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG4uZHluYW1pYy1wcm9wX2NvbnRlbnQgPiAqIHtcbiAgZmxleC1iYXNpczogMTAwJTtcbn1cbi5keW5hbWljLXByb3BfY29udGVudCA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmR5bmFtaWMtcHJvcF9jb250ZW50ID4gKjpsYXN0LWNoaWxkIHtcbiAgZmxleDogMCAwIDFlbTtcbn1cbi5keW5hbWljLXByb3BfaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5keW5hbWljLXByb3BfaW5wdXRzID4gKiB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG59XG4uZHluYW1pYy1wcm9wX2lucHV0cyA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmR5bmFtaWMtcHJvcF9pbnB1dHMgPiAqOmxhc3QtY2hpbGQge1xuICBmbGV4OiAwIDAgNGVtO1xufVxuLmR5bmFtaWMtcHJvcF9kb3Age1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5keW5hbWljLXByb3BfZG9wID4gKiB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG59XG4uZHluYW1pYy1wcm9wX2RvcCA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmR5bmFtaWMtcHJvcCBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi5keW5hbWljLXByb3AgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicPropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dynamic-prop',
          templateUrl: './dynamic-prop.component.html',
          styleUrls: ['./dynamic-prop.component.less']
        }]
      }], null, {
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        propAssigned: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/dynamic-props/dynamic-props.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/adm/components/dynamic-props/dynamic-props.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DynamicPropsComponent */

  /***/
  function srcAppModulesAdmComponentsDynamicPropsDynamicPropsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicPropsComponent", function () {
      return DynamicPropsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _interfaces_response_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../interfaces/response/prop */
    "./src/app/interfaces/response/prop.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dynamic_prop_dynamic_prop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dynamic-prop/dynamic-prop.component */
    "./src/app/modules/adm/components/dynamic-prop/dynamic-prop.component.ts");

    var _c0 = ["select"];

    function DynamicPropsComponent_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var x_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", x_r3.propId)("disabled", ctx_r1.isSelected(x_r3.propId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", x_r3.title, " ", x_r3.privateComment ? " (" + x_r3.privateComment + ")" : "", " ");
      }
    }

    function DynamicPropsComponent_app_dynamic_prop_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dynamic-prop", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function DynamicPropsComponent_app_dynamic_prop_11_Template_app_dynamic_prop_removed_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.propsAssignedFormArray.removeAt($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r5)("propAssigned", p_r4);
      }
    }

    var DynamicPropsComponent = /*#__PURE__*/function () {
      function DynamicPropsComponent(fb, serviceManager) {
        _classCallCheck(this, DynamicPropsComponent);

        this.fb = fb;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.propsReserv = [];
      }

      _createClass(DynamicPropsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this.propsReserv = x.props;
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
        key: "addItem",
        value: function addItem() {
          var _this2 = this;

          var propId = parseInt(this.select.nativeElement.value, 10);

          if (!propId) {
            return;
          }

          this.propsReserv.forEach(function (x, i) {
            if (x.propId !== propId) {
              return;
            }

            var tmp = {
              propId: x.propId,
              title: x.title,
              comment: x.comment,
              propPos: _this2.propsAssignedFormArray.length + 1,
              privateComment: x.privateComment,
              propIsRequire: false,
              propIsCanAsFilter: false,
              kindPropId: 0,
              name: '',
              suffix: '',
              kindPropName: '',
              propComment: '',
              values: []
            };

            _this2.propsAssignedFormArray.push(_this2.fb.group(new _interfaces_response_prop__WEBPACK_IMPORTED_MODULE_1__["PropsAssignedForCat"](tmp)));

            return false; // только один раз
          });
          this.select.nativeElement.value = 0;
        }
      }, {
        key: "isSelected",
        value: function isSelected(id) {
          var result = false;

          if (!this.propsAssignedFormArray.length) {
            return result;
          }

          this.propsAssignedFormArray.controls.forEach(function (x) {
            if (x.get('propId').value === id) {
              result = true;
              return false;
            }
          });
          return result;
        }
      }]);

      return DynamicPropsComponent;
    }();

    DynamicPropsComponent.ɵfac = function DynamicPropsComponent_Factory(t) {
      return new (t || DynamicPropsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"]));
    };

    DynamicPropsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DynamicPropsComponent,
      selectors: [["app-dynamic-props"]],
      viewQuery: function DynamicPropsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
        }
      },
      inputs: {
        propsAssignedFormArray: "propsAssignedFormArray"
      },
      decls: 12,
      vars: 2,
      consts: [[1, "dynamic-props"], [1, "dynamic-props_header"], ["select", ""], ["value", "0"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [1, "dynamic-props_body"], [3, "index", "propAssigned", "removed", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], [3, "index", "propAssigned", "removed"]],
      template: function DynamicPropsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicPropsComponent_option_6_Template, 2, 4, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicPropsComponent_Template_button_click_8_listener() {
            return ctx.addItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DynamicPropsComponent_app_dynamic_prop_11_Template, 1, 2, "app-dynamic-prop", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.propsReserv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.propsAssignedFormArray.controls);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _dynamic_prop_dynamic_prop_component__WEBPACK_IMPORTED_MODULE_5__["DynamicPropComponent"]],
      styles: [".dynamic-props_header[_ngcontent-%COMP%] {\n  display: flex;\n}\n.dynamic-props_header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.dynamic-props_header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1em;\n}\n.dynamic-props_header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  flex: 0 0 1em;\n}\n.dynamic-props_body[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.dynamic-props[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0QvbG9jYWxob3N0L2FsdGFpci9hbHRhaXItZnJvbnQvc3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL2R5bmFtaWMtcHJvcHMvZHluYW1pYy1wcm9wcy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG0vY29tcG9uZW50cy9keW5hbWljLXByb3BzL2R5bmFtaWMtcHJvcHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxhQUFBO0FDRlI7QURJUTtFQUNJLGdCQUFBO0FDRlo7QURJWTtFQUNJLGdCQUFBO0FDRmhCO0FES1k7RUFDSSxhQUFBO0FDSGhCO0FEUUk7RUFDSSxlQUFBO0FDTlI7QURaQTtFQXNCUSxjQUFBO0VBQ0EsV0FBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG0vY29tcG9uZW50cy9keW5hbWljLXByb3BzL2R5bmFtaWMtcHJvcHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY3NzX3ZhcmlhYmxlc1wiO1xuXG4uZHluYW1pYy1wcm9wcyB7XG4gICAgJl9oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG5cbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07IC8vIDE2cHggLyAxNnB4XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDFlbTsgLy8gMTZweCAvIDE2cHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfYm9keSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTsgLy8gMTZweCAvIDE2cHhcbiAgICB9XG5cbiAgICBzZWxlY3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIiwiLmR5bmFtaWMtcHJvcHNfaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5keW5hbWljLXByb3BzX2hlYWRlciA+ICoge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xufVxuLmR5bmFtaWMtcHJvcHNfaGVhZGVyID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4uZHluYW1pYy1wcm9wc19oZWFkZXIgPiAqOmxhc3QtY2hpbGQge1xuICBmbGV4OiAwIDAgMWVtO1xufVxuLmR5bmFtaWMtcHJvcHNfYm9keSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5keW5hbWljLXByb3BzIHNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicPropsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dynamic-props',
          templateUrl: './dynamic-props.component.html',
          styleUrls: ['./dynamic-props.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"]
        }];
      }, {
        propsAssignedFormArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['select', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/dynamic-value/dynamic-value.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/adm/components/dynamic-value/dynamic-value.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DynamicValueComponent */

  /***/
  function srcAppModulesAdmComponentsDynamicValueDynamicValueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicValueComponent", function () {
      return DynamicValueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DynamicValueComponent = function DynamicValueComponent() {
      _classCallCheck(this, DynamicValueComponent);

      this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    DynamicValueComponent.ɵfac = function DynamicValueComponent_Factory(t) {
      return new (t || DynamicValueComponent)();
    };

    DynamicValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DynamicValueComponent,
      selectors: [["app-dynamic-value"]],
      inputs: {
        index: "index",
        value: "value"
      },
      outputs: {
        removed: "removed"
      },
      decls: 10,
      vars: 1,
      consts: [[1, "dynamic-value", 3, "formGroup"], ["type", "hidden", "formControlName", "valueId"], ["type", "hidden", "formControlName", "propId"], ["formControlName", "title", "type", "text", "placeholder", "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"], ["formControlName", "pos", "type", "number", "placeholder", "\u043F\u043E\u0437\u0438\u0446\u0438\u044F"], ["type", "button", 3, "click"]],
      template: function DynamicValueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicValueComponent_Template_button_click_8_listener() {
            return ctx.removed.emit(ctx.index);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.value);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: [".dynamic-value[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.5em;\n  padding-bottom: 0.5em;\n  padding-left: 1em;\n  border-bottom: whitesmoke solid 0.0625em;\n}\n.dynamic-value[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.dynamic-value[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1em;\n}\n.dynamic-value[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0 0 4em;\n}\n.dynamic-value[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  flex: 0 0 1em;\n}\n.dynamic-value[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .dynamic-value[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0QvbG9jYWxob3N0L2FsdGFpci9hbHRhaXItZnJvbnQvc3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL2R5bmFtaWMtdmFsdWUvZHluYW1pYy12YWx1ZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG0vY29tcG9uZW50cy9keW5hbWljLXZhbHVlL2R5bmFtaWMtdmFsdWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUNESjtBREdJO0VBQ0ksZ0JBQUE7QUNEUjtBREdRO0VBQ0ksZ0JBQUE7QUNEWjtBRElRO0VBQ0ksYUFBQTtBQ0ZaO0FES1E7RUFDSSxhQUFBO0FDSFo7QURoQkE7O0VBd0JRLGNBQUE7RUFDQSxXQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL2R5bmFtaWMtdmFsdWUvZHluYW1pYy12YWx1ZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9jc3NfdmFyaWFibGVzXCI7XG5cbi5keW5hbWljLXZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtOyAvLyA4cHggLyAxNnB4XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtOyAvLyA4cHggLyAxNnB4XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07IC8vIDE2cHggLyAxNnB4XG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGVzbW9rZSBzb2xpZCBAMXB4O1xuXG4gICAgJiA+ICoge1xuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTsgLy8gMTZweCAvIDE2cHhcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCA0ZW07IC8vIDY0cHggLyAxNnB4LiBtaW4td2lkdGggaW5wdXQgPSA0ZW1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgMWVtOyAvLyAxNnB4IC8gMTZweFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIiwiLmR5bmFtaWMtdmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGVzbW9rZSBzb2xpZCAwLjA2MjVlbTtcbn1cbi5keW5hbWljLXZhbHVlID4gKiB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG59XG4uZHluYW1pYy12YWx1ZSA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmR5bmFtaWMtdmFsdWUgPiAqOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCA0ZW07XG59XG4uZHluYW1pYy12YWx1ZSA+ICo6bGFzdC1jaGlsZCB7XG4gIGZsZXg6IDAgMCAxZW07XG59XG4uZHluYW1pYy12YWx1ZSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi5keW5hbWljLXZhbHVlIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dynamic-value',
          templateUrl: './dynamic-value.component.html',
          styleUrls: ['./dynamic-value.component.less']
        }]
      }], null, {
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/dynamic-values/dynamic-values.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/adm/components/dynamic-values/dynamic-values.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DynamicValuesComponent */

  /***/
  function srcAppModulesAdmComponentsDynamicValuesDynamicValuesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicValuesComponent", function () {
      return DynamicValuesComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dynamic_value_dynamic_value_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dynamic-value/dynamic-value.component */
    "./src/app/modules/adm/components/dynamic-value/dynamic-value.component.ts");

    function DynamicValuesComponent_app_dynamic_value_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dynamic-value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function DynamicValuesComponent_app_dynamic_value_7_Template_app_dynamic_value_removed_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.valuesFormArray.removeAt($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r2)("value", value_r1);
      }
    }

    var DynamicValuesComponent = /*#__PURE__*/function () {
      function DynamicValuesComponent(fb) {
        _classCallCheck(this, DynamicValuesComponent);

        this.fb = fb;
        this.values = [];
      }

      _createClass(DynamicValuesComponent, [{
        key: "addItem",
        value: function addItem() {
          this.valuesFormArray.push(this.fb.group({
            valueId: 0,
            title: '',
            pos: this.valuesFormArray.length + 1,
            propId: this.propId
          }));
        }
      }]);

      return DynamicValuesComponent;
    }();

    DynamicValuesComponent.ɵfac = function DynamicValuesComponent_Factory(t) {
      return new (t || DynamicValuesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    DynamicValuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DynamicValuesComponent,
      selectors: [["app-dynamic-values"]],
      inputs: {
        propId: "propId",
        valuesFormArray: "valuesFormArray"
      },
      decls: 8,
      vars: 1,
      consts: [[1, "dynamic-values"], [1, "dynamic-values_header"], ["type", "button", 3, "click"], [1, "dynamic-values_body"], [3, "index", "value", "removed", 4, "ngFor", "ngForOf"], [3, "index", "value", "removed"]],
      template: function DynamicValuesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicValuesComponent_Template_button_click_4_listener() {
            return ctx.addItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicValuesComponent_app_dynamic_value_7_Template, 1, 2, "app-dynamic-value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.valuesFormArray.controls);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _dynamic_value_dynamic_value_component__WEBPACK_IMPORTED_MODULE_3__["DynamicValueComponent"]],
      styles: [".dynamic-values_header[_ngcontent-%COMP%] {\n  display: flex;\n}\n.dynamic-values_header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.dynamic-values_header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1em;\n}\n.dynamic-values_header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  background-color: whitesmoke;\n}\n.dynamic-values_header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  flex: 0 0 1em;\n}\n.dynamic-values_body[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0QvbG9jYWxob3N0L2FsdGFpci9hbHRhaXItZnJvbnQvc3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL2R5bmFtaWMtdmFsdWVzL2R5bmFtaWMtdmFsdWVzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL2R5bmFtaWMtdmFsdWVzL2R5bmFtaWMtdmFsdWVzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksYUFBQTtBQ0ZSO0FESVE7RUFDSSxnQkFBQTtBQ0ZaO0FESVk7RUFDSSxnQkFBQTtBQ0ZoQjtBREtZO0VBQ0ksNEJBQUE7QUNIaEI7QURNWTtFQUNJLGFBQUE7QUNKaEI7QURTSTtFQUNJLGVBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZHluYW1pYy12YWx1ZXMvZHluYW1pYy12YWx1ZXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY3NzX3ZhcmlhYmxlc1wiO1xuXG4uZHluYW1pYy12YWx1ZXMge1xuICAgICZfaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtOyAvLyAxNnB4IC8gMTZweFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAxZW07IC8vIDE2cHggLyAxNnB4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX2JvZHkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxufVxuIiwiLmR5bmFtaWMtdmFsdWVzX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZHluYW1pYy12YWx1ZXNfaGVhZGVyID4gKiB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG59XG4uZHluYW1pYy12YWx1ZXNfaGVhZGVyID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4uZHluYW1pYy12YWx1ZXNfaGVhZGVyID4gKjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4uZHluYW1pYy12YWx1ZXNfaGVhZGVyID4gKjpsYXN0LWNoaWxkIHtcbiAgZmxleDogMCAwIDFlbTtcbn1cbi5keW5hbWljLXZhbHVlc19ib2R5IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicValuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dynamic-values',
          templateUrl: './dynamic-values.component.html',
          styleUrls: ['./dynamic-values.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        propId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valuesFormArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-ads/forms-ads-delete-ads-adid/forms-ads-delete-ads-adid.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-ads/forms-ads-delete-ads-adid/forms-ads-delete-ads-adid.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: FormsAdsDeleteAdsAdidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsAdsFormsAdsDeleteAdsAdidFormsAdsDeleteAdsAdidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsAdsDeleteAdsAdidComponent", function () {
      return FormsAdsDeleteAdsAdidComponent;
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


    var _services_ad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/ad.service */
    "./src/app/services/ad.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsAdsDeleteAdsAdidComponent = /*#__PURE__*/function () {
      function FormsAdsDeleteAdsAdidComponent(fb, serviceAds) {
        _classCallCheck(this, FormsAdsDeleteAdsAdidComponent);

        this.fb = fb;
        this.serviceAds = serviceAds;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsAdsDeleteAdsAdidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            adId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref) {
          var _this3 = this;

          var target = _ref.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceAds["delete"](this.form.get('adId').value).subscribe(function (x) {
            _this3.json.emit(x);

            _this3.form.reset();
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsAdsDeleteAdsAdidComponent;
    }();

    FormsAdsDeleteAdsAdidComponent.ɵfac = function FormsAdsDeleteAdsAdidComponent_Factory(t) {
      return new (t || FormsAdsDeleteAdsAdidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ad_service__WEBPACK_IMPORTED_MODULE_2__["AdService"]));
    };

    FormsAdsDeleteAdsAdidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsAdsDeleteAdsAdidComponent,
      selectors: [["app-forms-ads-delete-ads-adid"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "adId", 1, "form_100"], ["type", "submit"]],
      template: function FormsAdsDeleteAdsAdidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " DELETE: /api/v1/ads/:adId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsAdsDeleteAdsAdidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtYWRzL2Zvcm1zLWFkcy1kZWxldGUtYWRzLWFkaWQvZm9ybXMtYWRzLWRlbGV0ZS1hZHMtYWRpZC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsAdsDeleteAdsAdidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-ads-delete-ads-adid',
          templateUrl: './forms-ads-delete-ads-adid.component.html',
          styleUrls: ['./forms-ads-delete-ads-adid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_ad_service__WEBPACK_IMPORTED_MODULE_2__["AdService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-ads/forms-ads-get-ads-adid/forms-ads-get-ads-adid.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-ads/forms-ads-get-ads-adid/forms-ads-get-ads-adid.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: FormsAdsGetAdsAdidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsAdsFormsAdsGetAdsAdidFormsAdsGetAdsAdidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsAdsGetAdsAdidComponent", function () {
      return FormsAdsGetAdsAdidComponent;
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


    var _services_ad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/ad.service */
    "./src/app/services/ad.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsAdsGetAdsAdidComponent = /*#__PURE__*/function () {
      function FormsAdsGetAdsAdidComponent(fb, serviceAds) {
        _classCallCheck(this, FormsAdsGetAdsAdidComponent);

        this.fb = fb;
        this.serviceAds = serviceAds;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsAdsGetAdsAdidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            adId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref2) {
          var _this4 = this;

          var target = _ref2.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceAds.getOne(this.form.get('adId').value).subscribe(function (x) {
            return _this4.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsAdsGetAdsAdidComponent;
    }();

    FormsAdsGetAdsAdidComponent.ɵfac = function FormsAdsGetAdsAdidComponent_Factory(t) {
      return new (t || FormsAdsGetAdsAdidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ad_service__WEBPACK_IMPORTED_MODULE_2__["AdService"]));
    };

    FormsAdsGetAdsAdidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsAdsGetAdsAdidComponent,
      selectors: [["app-forms-ads-get-ads-adid"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "adId", 1, "form_100"], ["type", "submit"]],
      template: function FormsAdsGetAdsAdidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/ads/:adId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsAdsGetAdsAdidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtYWRzL2Zvcm1zLWFkcy1nZXQtYWRzLWFkaWQvZm9ybXMtYWRzLWdldC1hZHMtYWRpZC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsAdsGetAdsAdidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-ads-get-ads-adid',
          templateUrl: './forms-ads-get-ads-adid.component.html',
          styleUrls: ['./forms-ads-get-ads-adid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_ad_service__WEBPACK_IMPORTED_MODULE_2__["AdService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-ads/forms-ads-get-ads/forms-ads-get-ads.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-ads/forms-ads-get-ads/forms-ads-get-ads.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: FormsAdsGetAdsComponent */

  /***/
  function srcAppModulesAdmComponentsFormsAdsFormsAdsGetAdsFormsAdsGetAdsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsAdsGetAdsComponent", function () {
      return FormsAdsGetAdsComponent;
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


    var _services_ad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/ad.service */
    "./src/app/services/ad.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormsAdsGetAdsComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r1.catId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "|----".repeat(cat_r1.deep), " ", cat_r1.name, " ");
      }
    }

    var FormsAdsGetAdsComponent = /*#__PURE__*/function () {
      function FormsAdsGetAdsComponent(fb, serviceAds, serviceManager) {
        _classCallCheck(this, FormsAdsGetAdsComponent);

        this.fb = fb;
        this.serviceAds = serviceAds;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.catTreeOneLevel = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsAdsGetAdsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.form = this.fb.group({
            catId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            limit: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            offset: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]
          });
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this5.catTreeOneLevel = _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].getCatTreeAsOneLevel(x.catsTree);
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
        key: "submitForm",
        value: function submitForm(_ref3) {
          var _this6 = this;

          var target = _ref3.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceAds.getFromCat(this.form.value).subscribe(function (x) {
            return _this6.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsAdsGetAdsComponent;
    }();

    FormsAdsGetAdsComponent.ɵfac = function FormsAdsGetAdsComponent_Factory(t) {
      return new (t || FormsAdsGetAdsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]));
    };

    FormsAdsGetAdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsAdsGetAdsComponent,
      selectors: [["app-forms-ads-get-ads"]],
      outputs: {
        json: "json"
      },
      decls: 24,
      vars: 5,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["formControlName", "catId", 1, "form_100"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "limit", "min", "1", "value", "0", 1, "form_100"], ["type", "number", "formControlName", "offset", "min", "0", "value", "0", 1, "form_100"], ["type", "submit"], [3, "value"]],
      template: function FormsAdsGetAdsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/ads ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsAdsGetAdsComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormsAdsGetAdsComponent_option_10_Template, 2, 3, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u043B\u0438\u043C\u0438\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "offset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catTreeOneLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 3, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtYWRzL2Zvcm1zLWFkcy1nZXQtYWRzL2Zvcm1zLWFkcy1nZXQtYWRzLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsAdsGetAdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-ads-get-ads',
          templateUrl: './forms-ads-get-ads.component.html',
          styleUrls: ['./forms-ads-get-ads.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-ads/forms-ads-post-ads/forms-ads-post-ads.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-ads/forms-ads-post-ads/forms-ads-post-ads.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: FormsAdsPostAdsComponent */

  /***/
  function srcAppModulesAdmComponentsFormsAdsFormsAdsPostAdsFormsAdsPostAdsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsAdsPostAdsComponent", function () {
      return FormsAdsPostAdsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _components_ad_form_ad_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../components/ad-form/ad-form.component */
    "./src/app/components/ad-form/ad-form.component.ts");

    var FormsAdsPostAdsComponent = function FormsAdsPostAdsComponent() {
      _classCallCheck(this, FormsAdsPostAdsComponent);

      this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    FormsAdsPostAdsComponent.ɵfac = function FormsAdsPostAdsComponent_Factory(t) {
      return new (t || FormsAdsPostAdsComponent)();
    };

    FormsAdsPostAdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsAdsPostAdsComponent,
      selectors: [["app-forms-ads-post-ads"]],
      outputs: {
        json: "json"
      },
      decls: 5,
      vars: 0,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], ["mode", "private", 3, "json"]],
      template: function FormsAdsPostAdsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " POST: /api/v1/ads ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-ad-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function FormsAdsPostAdsComponent_Template_app_ad_form_json_4_listener($event) {
            return ctx.json.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_1__["ToggleActiveDirective"], _components_ad_form_ad_form_component__WEBPACK_IMPORTED_MODULE_2__["AdFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtYWRzL2Zvcm1zLWFkcy1wb3N0LWFkcy9mb3Jtcy1hZHMtcG9zdC1hZHMuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsAdsPostAdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-ads-post-ads',
          templateUrl: './forms-ads-post-ads.component.html',
          styleUrls: ['./forms-ads-post-ads.component.less']
        }]
      }], function () {
        return [];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-ads/forms-ads-put-ads-adid/forms-ads-put-ads-adid.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-ads/forms-ads-put-ads-adid/forms-ads-put-ads-adid.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: FormsAdsPutAdsAdidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsAdsFormsAdsPutAdsAdidFormsAdsPutAdsAdidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsAdsPutAdsAdidComponent", function () {
      return FormsAdsPutAdsAdidComponent;
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


    var _components_ad_form_ad_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../components/ad-form/ad-form.component */
    "./src/app/components/ad-form/ad-form.component.ts");
    /* harmony import */


    var _services_ad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/ad.service */
    "./src/app/services/ad.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");

    var _c0 = ["formPostPutWrap"];

    var FormsAdsPutAdsAdidComponent = /*#__PURE__*/function () {
      function FormsAdsPutAdsAdidComponent(fb, serviceAds) {
        _classCallCheck(this, FormsAdsPutAdsAdidComponent);

        this.fb = fb;
        this.serviceAds = serviceAds;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsAdsPutAdsAdidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            adId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
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
        key: "submitForm",
        value: function submitForm(_ref4) {
          var _this7 = this;

          var target = _ref4.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceAds.getOne(this.form.get('adId').value).subscribe(function (x) {
            _this7.json.emit(x);

            _this7.formPostPutWrap.nativeElement.classList.remove('hidden');

            _this7.adForm.ad = x;
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsAdsPutAdsAdidComponent;
    }();

    FormsAdsPutAdsAdidComponent.ɵfac = function FormsAdsPutAdsAdidComponent_Factory(t) {
      return new (t || FormsAdsPutAdsAdidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"]));
    };

    FormsAdsPutAdsAdidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsAdsPutAdsAdidComponent,
      selectors: [["app-forms-ads-put-ads-adid"]],
      viewQuery: function FormsAdsPutAdsAdidComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_ad_form_ad_form_component__WEBPACK_IMPORTED_MODULE_2__["AdFormComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formPostPutWrap = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.adForm = _t.first);
        }
      },
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 1,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "adId", 1, "form_100"], ["type", "submit"], [1, "hidden"], ["formPostPutWrap", ""], ["mode", "private", 3, "json"]],
      template: function FormsAdsPutAdsAdidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PUT: /api/v1/ads/:adId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsAdsPutAdsAdidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-ad-form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function FormsAdsPutAdsAdidComponent_Template_app_ad_form_json_13_listener($event) {
            return ctx.json.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_ad_form_ad_form_component__WEBPACK_IMPORTED_MODULE_2__["AdFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtYWRzL2Zvcm1zLWFkcy1wdXQtYWRzLWFkaWQvZm9ybXMtYWRzLXB1dC1hZHMtYWRpZC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsAdsPutAdsAdidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-ads-put-ads-adid',
          templateUrl: './forms-ads-put-ads-adid.component.html',
          styleUrls: ['./forms-ads-put-ads-adid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        formPostPutWrap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formPostPutWrap', {
            "static": true
          }]
        }],
        adForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_ad_form_ad_form_component__WEBPACK_IMPORTED_MODULE_2__["AdFormComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-cats/forms-cats-delete-cats-catid/forms-cats-delete-cats-catid.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-cats/forms-cats-delete-cats-catid/forms-cats-delete-cats-catid.component.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: FormsCatsDeleteCatsCatidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsCatsFormsCatsDeleteCatsCatidFormsCatsDeleteCatsCatidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsCatsDeleteCatsCatidComponent", function () {
      return FormsCatsDeleteCatsCatidComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../helpers */
    "./src/app/helpers.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_cat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/cat.service */
    "./src/app/services/cat.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormsCatsDeleteCatsCatidComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r1.catId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "|----".repeat(cat_r1.deep), " ", cat_r1.name, " ");
      }
    }

    var FormsCatsDeleteCatsCatidComponent = /*#__PURE__*/function () {
      function FormsCatsDeleteCatsCatidComponent(fb, serviceCats, serviceManager) {
        _classCallCheck(this, FormsCatsDeleteCatsCatidComponent);

        this.fb = fb;
        this.serviceCats = serviceCats;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.catTreeOneLevel = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsCatsDeleteCatsCatidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.formDeleteCatsCatId = this.fb.group({
            catId: 0
          });
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this8.catTreeOneLevel = _helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].getCatTreeAsOneLevel(x.catsTree);
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
        key: "submitFormDeleteCatsCatId",
        value: function submitFormDeleteCatsCatId(_ref5) {
          var _this9 = this;

          var target = _ref5.target;

          if (this.formDeleteCatsCatId.invalid) {
            for (var key in this.formDeleteCatsCatId.controls) {
              var formControl = this.formDeleteCatsCatId.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceCats["delete"](this.formDeleteCatsCatId.get('catId').value).subscribe(function (x) {
            _this9.json.emit(x);

            target.reset();

            _this9.formDeleteCatsCatId.reset();
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsCatsDeleteCatsCatidComponent;
    }();

    FormsCatsDeleteCatsCatidComponent.ɵfac = function FormsCatsDeleteCatsCatidComponent_Factory(t) {
      return new (t || FormsCatsDeleteCatsCatidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cat_service__WEBPACK_IMPORTED_MODULE_3__["CatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]));
    };

    FormsCatsDeleteCatsCatidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsCatsDeleteCatsCatidComponent,
      selectors: [["app-forms-cats-delete-cats-catid"]],
      outputs: {
        json: "json"
      },
      decls: 16,
      vars: 5,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["formControlName", "catId", 1, "form_100"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"]],
      template: function FormsCatsDeleteCatsCatidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " DELETE: /api/v1/cats/:catId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsCatsDeleteCatsCatidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitFormDeleteCatsCatId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "catId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormsCatsDeleteCatsCatidComponent_option_10_Template, 2, 3, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formDeleteCatsCatId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catTreeOneLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 3, ctx.formDeleteCatsCatId.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtY2F0cy9mb3Jtcy1jYXRzLWRlbGV0ZS1jYXRzLWNhdGlkL2Zvcm1zLWNhdHMtZGVsZXRlLWNhdHMtY2F0aWQuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsCatsDeleteCatsCatidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-cats-delete-cats-catid',
          templateUrl: './forms-cats-delete-cats-catid.component.html',
          styleUrls: ['./forms-cats-delete-cats-catid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_cat_service__WEBPACK_IMPORTED_MODULE_3__["CatService"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-cats/forms-cats-get-cats-catid/forms-cats-get-cats-catid.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-cats/forms-cats-get-cats-catid/forms-cats-get-cats-catid.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: FormsCatsGetCatsCatidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsCatsFormsCatsGetCatsCatidFormsCatsGetCatsCatidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsCatsGetCatsCatidComponent", function () {
      return FormsCatsGetCatsCatidComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../helpers */
    "./src/app/helpers.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_cat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/cat.service */
    "./src/app/services/cat.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormsCatsGetCatsCatidComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r1.catId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "|----".repeat(cat_r1.deep), " ", cat_r1.name, " ");
      }
    }

    var FormsCatsGetCatsCatidComponent = /*#__PURE__*/function () {
      function FormsCatsGetCatsCatidComponent(fb, serviceCats, serviceManager) {
        _classCallCheck(this, FormsCatsGetCatsCatidComponent);

        this.fb = fb;
        this.serviceCats = serviceCats;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.catTreeOneLevel = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsCatsGetCatsCatidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.formGetCatsCatId = this.fb.group({
            catId: 0,
            withPropsOnlyFiltered: false
          });
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this10.catTreeOneLevel = _helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].getCatTreeAsOneLevel(x.catsTree);
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
        key: "submitFormGetCatsCatId",
        value: function submitFormGetCatsCatId(_ref6) {
          var _this11 = this;

          var target = _ref6.target;

          if (this.formGetCatsCatId.invalid) {
            for (var key in this.formGetCatsCatId.controls) {
              var formControl = this.formGetCatsCatId.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var catId = parseInt(this.formGetCatsCatId.get('catId').value, 10);
          var isWithPropsOnlyFiltered = this.formGetCatsCatId.get('withPropsOnlyFiltered').value;
          var s = this.serviceCats.getCatId(catId, isWithPropsOnlyFiltered).subscribe(function (x) {
            return _this11.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsCatsGetCatsCatidComponent;
    }();

    FormsCatsGetCatsCatidComponent.ɵfac = function FormsCatsGetCatsCatidComponent_Factory(t) {
      return new (t || FormsCatsGetCatsCatidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cat_service__WEBPACK_IMPORTED_MODULE_3__["CatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]));
    };

    FormsCatsGetCatsCatidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsCatsGetCatsCatidComponent,
      selectors: [["app-forms-cats-get-cats-catid"]],
      outputs: {
        json: "json"
      },
      decls: 20,
      vars: 5,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["formControlName", "catId", 1, "form_100"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "checkbox", "formControlName", "withPropsOnlyFiltered"], ["type", "submit"], [3, "value"]],
      template: function FormsCatsGetCatsCatidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/cats/:catId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsCatsGetCatsCatidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitFormGetCatsCatId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "catId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormsCatsGetCatsCatidComponent_option_10_Template, 2, 3, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0441\u0432-\u0432\u0430 \u043A\u0430\u043A \u0444\u0438\u043B\u044C\u0442\u0440\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGetCatsCatId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catTreeOneLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 3, ctx.formGetCatsCatId.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtY2F0cy9mb3Jtcy1jYXRzLWdldC1jYXRzLWNhdGlkL2Zvcm1zLWNhdHMtZ2V0LWNhdHMtY2F0aWQuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsCatsGetCatsCatidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-cats-get-cats-catid',
          templateUrl: './forms-cats-get-cats-catid.component.html',
          styleUrls: ['./forms-cats-get-cats-catid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_cat_service__WEBPACK_IMPORTED_MODULE_3__["CatService"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-cats/forms-cats-get-cats/forms-cats-get-cats.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-cats/forms-cats-get-cats/forms-cats-get-cats.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FormsCatsGetCatsComponent */

  /***/
  function srcAppModulesAdmComponentsFormsCatsFormsCatsGetCatsFormsCatsGetCatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsCatsGetCatsComponent", function () {
      return FormsCatsGetCatsComponent;
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


    var _services_cat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/cat.service */
    "./src/app/services/cat.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsCatsGetCatsComponent = /*#__PURE__*/function () {
      function FormsCatsGetCatsComponent(fb, serviceCats) {
        _classCallCheck(this, FormsCatsGetCatsComponent);

        this.fb = fb;
        this.serviceCats = serviceCats;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsCatsGetCatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGetCats = this.fb.group({
            asTree: false
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitFormGetCats",
        value: function submitFormGetCats(_ref7) {
          var _this12 = this;

          var target = _ref7.target;

          if (this.formGetCats.invalid) {
            for (var key in this.formGetCats.controls) {
              var formControl = this.formGetCats.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var fn = this.formGetCats.get('asTree').value ? this.serviceCats.getTree() : this.serviceCats.getList();
          var s = fn.subscribe(function (x) {
            return _this12.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsCatsGetCatsComponent;
    }();

    FormsCatsGetCatsComponent.ɵfac = function FormsCatsGetCatsComponent_Factory(t) {
      return new (t || FormsCatsGetCatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cat_service__WEBPACK_IMPORTED_MODULE_2__["CatService"]));
    };

    FormsCatsGetCatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsCatsGetCatsComponent,
      selectors: [["app-forms-cats-get-cats"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], ["type", "checkbox", "formControlName", "asTree"], ["type", "submit"]],
      template: function FormsCatsGetCatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/cats ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsCatsGetCatsComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitFormGetCats($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u043A\u0430\u043A \u0434\u0435\u0440\u0435\u0432\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGetCats);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.formGetCats.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtY2F0cy9mb3Jtcy1jYXRzLWdldC1jYXRzL2Zvcm1zLWNhdHMtZ2V0LWNhdHMuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsCatsGetCatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-cats-get-cats',
          templateUrl: './forms-cats-get-cats.component.html',
          styleUrls: ['./forms-cats-get-cats.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_cat_service__WEBPACK_IMPORTED_MODULE_2__["CatService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-cats/forms-cats-post-cats/forms-cats-post-cats.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-cats/forms-cats-post-cats/forms-cats-post-cats.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: FormsCatsPostCatsComponent */

  /***/
  function srcAppModulesAdmComponentsFormsCatsFormsCatsPostCatsFormsCatsPostCatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsCatsPostCatsComponent", function () {
      return FormsCatsPostCatsComponent;
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


    var _services_cat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/cat.service */
    "./src/app/services/cat.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dynamic_props_dynamic_props_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../dynamic-props/dynamic-props.component */
    "./src/app/modules/adm/components/dynamic-props/dynamic-props.component.ts");

    function FormsCatsPostCatsComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r1.catId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "|----".repeat(cat_r1.deep), " ", cat_r1.name, " ");
      }
    }

    var FormsCatsPostCatsComponent = /*#__PURE__*/function () {
      function FormsCatsPostCatsComponent(fb, serviceCats, serviceManager) {
        _classCallCheck(this, FormsCatsPostCatsComponent);

        this.fb = fb;
        this.serviceCats = serviceCats;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.catTreeOneLevel = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsCatsPostCatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            parentId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            pos: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            priceAlias: '',
            priceSuffix: '',
            titleHelp: '',
            titleComment: '',
            isAutogenerateTitle: false,
            propsAssignedForCat: this.fb.array([])
          });
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this13.catTreeOneLevel = _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].getCatTreeAsOneLevel(x.catsTree);
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
        key: "submitFormPostCats",
        value: function submitFormPostCats(_ref8) {
          var _this14 = this;

          var target = _ref8.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceCats.post(this.form.value).subscribe(function (x) {
            _this14.json.emit(x);

            target.reset();

            _this14.form.reset();

            _this14.form.get('propsAssignedForCat').clear();
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsCatsPostCatsComponent;
    }();

    FormsCatsPostCatsComponent.ɵfac = function FormsCatsPostCatsComponent_Factory(t) {
      return new (t || FormsCatsPostCatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cat_service__WEBPACK_IMPORTED_MODULE_3__["CatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]));
    };

    FormsCatsPostCatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsCatsPostCatsComponent,
      selectors: [["app-forms-cats-post-cats"]],
      outputs: {
        json: "json"
      },
      decls: 48,
      vars: 6,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["formControlName", "name", "type", "text", 1, "form_100"], ["formControlName", "parentId", 1, "form_100"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "pos", 1, "form_100"], ["type", "text", "formControlName", "priceAlias", 1, "form_100"], ["type", "text", "formControlName", "priceSuffix", 1, "form_100"], ["type", "text", "formControlName", "titleHelp", 1, "form_100"], ["type", "text", "formControlName", "titleComment", 1, "form_100"], ["type", "checkbox", "formControlName", "isAutogenerateTitle"], ["formArrayName", "propsAssignedForCat", 3, "propsAssignedFormArray"], ["type", "submit"], [3, "value"]],
      template: function FormsCatsPostCatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " POST: /api/v1/cats ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsCatsPostCatsComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitFormPostCats($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "parentId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormsCatsPostCatsComponent_option_14_Template, 2, 3, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u043F\u043E\u0437\u0438\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0430\u043B\u0438\u0430\u0441 \u0434\u043B\u044F \u0446\u0435\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0441\u0443\u0444\u0444\u0438\u043A \u043D\u0430 \u0446\u0435\u043D\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0432\u0441\u043F\u043E\u043C\u043E\u0433-\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043F\u043E\u0434 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " isAutogenerateTitle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-dynamic-props", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catTreeOneLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("propsAssignedFormArray", ctx.form.get("propsAssignedForCat"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 4, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _dynamic_props_dynamic_props_component__WEBPACK_IMPORTED_MODULE_7__["DynamicPropsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtY2F0cy9mb3Jtcy1jYXRzLXBvc3QtY2F0cy9mb3Jtcy1jYXRzLXBvc3QtY2F0cy5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsCatsPostCatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-cats-post-cats',
          templateUrl: './forms-cats-post-cats.component.html',
          styleUrls: ['./forms-cats-post-cats.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_cat_service__WEBPACK_IMPORTED_MODULE_3__["CatService"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-cats/forms-cats-put-cats-catid/forms-cats-put-cats-catid.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-cats/forms-cats-put-cats-catid/forms-cats-put-cats-catid.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: FormsCatsPutCatsCatidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsCatsFormsCatsPutCatsCatidFormsCatsPutCatsCatidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsCatsPutCatsCatidComponent", function () {
      return FormsCatsPutCatsCatidComponent;
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


    var _interfaces_response_prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../interfaces/response/prop */
    "./src/app/interfaces/response/prop.ts");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../helpers */
    "./src/app/helpers.ts");
    /* harmony import */


    var _services_cat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/cat.service */
    "./src/app/services/cat.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dynamic_props_dynamic_props_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../dynamic-props/dynamic-props.component */
    "./src/app/modules/adm/components/dynamic-props/dynamic-props.component.ts");

    var _c0 = ["formPutEl"];

    function FormsCatsPutCatsCatidComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r3.catId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "|----".repeat(cat_r3.deep), " ", cat_r3.name, " ");
      }
    }

    function FormsCatsPutCatsCatidComponent_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r4.catId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "|----".repeat(cat_r4.deep), " ", cat_r4.name, " ");
      }
    }

    var FormsCatsPutCatsCatidComponent = /*#__PURE__*/function () {
      function FormsCatsPutCatsCatidComponent(fb, serviceCats, serviceManager) {
        _classCallCheck(this, FormsCatsPutCatsCatidComponent);

        this.fb = fb;
        this.serviceCats = serviceCats;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.catTreeOneLevel = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsCatsPutCatsCatidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.formGet = this.fb.group({
            catId: 0
          });
          this.formPut = this.fb.group({
            catId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            slug: '',
            parentId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            pos: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            isDisabled: false,
            priceAlias: '',
            priceSuffix: '',
            titleHelp: '',
            titleComment: '',
            isAutogenerateTitle: false,
            propsAssignedForCat: this.fb.array([])
          });
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this15.catTreeOneLevel = _helpers__WEBPACK_IMPORTED_MODULE_3__["Helpers"].getCatTreeAsOneLevel(x.catsTree);
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
        key: "submitFormGetCatDataForPut",
        value: function submitFormGetCatDataForPut(_ref9) {
          var _this16 = this;

          var target = _ref9.target;

          if (this.formGet.invalid) {
            for (var key in this.formGet.controls) {
              var formControl = this.formGet.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var catId = this.formGet.get('catId').value;
          var s = this.serviceCats.getCatId(catId, false).subscribe(function (x) {
            _this16.json.emit(x);

            _this16.formPutEl.nativeElement.classList.remove('hidden');

            _this16.formPut.reset();

            _this16.formPut.get('propsAssignedForCat').clear();

            _this16.formPut.patchValue(x); // преобразуем нормально в массивы св-ва и их значения


            var aProps = x.props.map(function (y) {
              return _this16.fb.group(new _interfaces_response_prop__WEBPACK_IMPORTED_MODULE_2__["PropsAssignedForCat"](y));
            });

            _this16.formPut.setControl('propsAssignedForCat', _this16.fb.array(aProps));
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "submitFormPutCatsCatId",
        value: function submitFormPutCatsCatId(_ref10) {
          var _this17 = this;

          var target = _ref10.target;

          if (this.formPut.invalid) {
            for (var key in this.formPut.controls) {
              var formControl = this.formPut.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceCats.put(this.formPut.get('catId').value, this.formPut.value).subscribe(function (x) {
            return _this17.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsCatsPutCatsCatidComponent;
    }();

    FormsCatsPutCatsCatidComponent.ɵfac = function FormsCatsPutCatsCatidComponent_Factory(t) {
      return new (t || FormsCatsPutCatsCatidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cat_service__WEBPACK_IMPORTED_MODULE_4__["CatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"]));
    };

    FormsCatsPutCatsCatidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsCatsPutCatsCatidComponent,
      selectors: [["app-forms-cats-put-cats-catid"]],
      viewQuery: function FormsCatsPutCatsCatidComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formPutEl = _t.first);
        }
      },
      outputs: {
        json: "json"
      },
      decls: 67,
      vars: 8,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["formControlName", "catId", 1, "form_100"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [1, "form", "hidden", 3, "formGroup", "ngSubmit"], ["formPutEl", ""], ["type", "hidden", "formControlName", "catId"], ["type", "text", "formControlName", "name", 1, "form_100"], ["type", "text", "formControlName", "slug", "readonly", "readonly", 1, "form_100"], ["formControlName", "parentId", 1, "form_100"], ["type", "number", "formControlName", "pos", 1, "form_100"], ["type", "text", "formControlName", "priceAlias", 1, "form_100"], ["type", "text", "formControlName", "priceSuffix", 1, "form_100"], ["type", "text", "formControlName", "titleHelp", 1, "form_100"], ["type", "text", "formControlName", "titleComment", 1, "form_100"], ["type", "checkbox", "formControlName", "isAutogenerateTitle"], ["type", "checkbox", "formControlName", "isDisabled"], ["formArrayName", "propsAssignedForCat", 3, "propsAssignedFormArray"], [3, "value"]],
      template: function FormsCatsPutCatsCatidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PUT: /api/v1/cats/:catId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsCatsPutCatsCatidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitFormGetCatDataForPut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormsCatsPutCatsCatidComponent_option_10_Template, 2, 3, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsCatsPutCatsCatidComponent_Template_form_ngSubmit_13_listener($event) {
            return ctx.submitFormPutCatsCatId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "slug");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "id \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FormsCatsPutCatsCatidComponent_option_29_Template, 2, 3, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u043F\u043E\u0437\u0438\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0430\u043B\u0438\u0430\u0441 \u0434\u043B\u044F \u0446\u0435\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0441\u0443\u0444\u0444\u0438\u043A \u043D\u0430 \u0446\u0435\u043D\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0432\u0441\u043F\u043E\u043C\u043E\u0433-\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043F\u043E\u0434 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " isAutogenerateTitle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " is_disabled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-dynamic-props", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catTreeOneLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formPut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catTreeOneLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("propsAssignedFormArray", ctx.formPut.get("propsAssignedForCat"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 6, ctx.formPut.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_6__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _dynamic_props_dynamic_props_component__WEBPACK_IMPORTED_MODULE_8__["DynamicPropsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtY2F0cy9mb3Jtcy1jYXRzLXB1dC1jYXRzLWNhdGlkL2Zvcm1zLWNhdHMtcHV0LWNhdHMtY2F0aWQuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsCatsPutCatsCatidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-cats-put-cats-catid',
          templateUrl: './forms-cats-put-cats-catid.component.html',
          styleUrls: ['./forms-cats-put-cats-catid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_cat_service__WEBPACK_IMPORTED_MODULE_4__["CatService"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        formPutEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formPutEl', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-delete/forms-kind-props-delete.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-kind-props/forms-kind-props-delete/forms-kind-props-delete.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: FormsKindPropsDeleteComponent */

  /***/
  function srcAppModulesAdmComponentsFormsKindPropsFormsKindPropsDeleteFormsKindPropsDeleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsKindPropsDeleteComponent", function () {
      return FormsKindPropsDeleteComponent;
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


    var _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/kind-props.service */
    "./src/app/services/kind-props.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsKindPropsDeleteComponent = /*#__PURE__*/function () {
      function FormsKindPropsDeleteComponent(fb, serviceKindProps) {
        _classCallCheck(this, FormsKindPropsDeleteComponent);

        this.fb = fb;
        this.serviceKindProps = serviceKindProps;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsKindPropsDeleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            kindPropId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref11) {
          var _this18 = this;

          var target = _ref11.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceKindProps["delete"](this.form.get('kindPropId').value).subscribe(function (x) {
            _this18.json.emit(x);

            _this18.form.reset();
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsKindPropsDeleteComponent;
    }();

    FormsKindPropsDeleteComponent.ɵfac = function FormsKindPropsDeleteComponent_Factory(t) {
      return new (t || FormsKindPropsDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]));
    };

    FormsKindPropsDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsKindPropsDeleteComponent,
      selectors: [["app-forms-kind-props-delete"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "kindPropId", 1, "form_100"], ["type", "submit"]],
      template: function FormsKindPropsDeleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " DELETE: /api/v1/kind_props/:kindPropId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsKindPropsDeleteComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u0442\u0438\u043F\u0430 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMta2luZC1wcm9wcy9mb3Jtcy1raW5kLXByb3BzLWRlbGV0ZS9mb3Jtcy1raW5kLXByb3BzLWRlbGV0ZS5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsKindPropsDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-kind-props-delete',
          templateUrl: './forms-kind-props-delete.component.html',
          styleUrls: ['./forms-kind-props-delete.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-get-all/forms-kind-props-get-all.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-kind-props/forms-kind-props-get-all/forms-kind-props-get-all.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: FormsKindPropsGetAllComponent */

  /***/
  function srcAppModulesAdmComponentsFormsKindPropsFormsKindPropsGetAllFormsKindPropsGetAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsKindPropsGetAllComponent", function () {
      return FormsKindPropsGetAllComponent;
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


    var _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/kind-props.service */
    "./src/app/services/kind-props.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");

    var FormsKindPropsGetAllComponent = /*#__PURE__*/function () {
      function FormsKindPropsGetAllComponent(fb, serviceKindProps) {
        _classCallCheck(this, FormsKindPropsGetAllComponent);

        this.fb = fb;
        this.serviceKindProps = serviceKindProps;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsKindPropsGetAllComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref12) {
          var _this19 = this;

          var target = _ref12.target;
          var s = this.serviceKindProps.getAll().subscribe(function (x) {
            return _this19.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsKindPropsGetAllComponent;
    }();

    FormsKindPropsGetAllComponent.ɵfac = function FormsKindPropsGetAllComponent_Factory(t) {
      return new (t || FormsKindPropsGetAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]));
    };

    FormsKindPropsGetAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsKindPropsGetAllComponent,
      selectors: [["app-forms-kind-props-get-all"]],
      outputs: {
        json: "json"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], ["type", "submit"]],
      template: function FormsKindPropsGetAllComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/kind_props ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsKindPropsGetAllComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMta2luZC1wcm9wcy9mb3Jtcy1raW5kLXByb3BzLWdldC1hbGwvZm9ybXMta2luZC1wcm9wcy1nZXQtYWxsLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsKindPropsGetAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-kind-props-get-all',
          templateUrl: './forms-kind-props-get-all.component.html',
          styleUrls: ['./forms-kind-props-get-all.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-get-one/forms-kind-props-get-one.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-kind-props/forms-kind-props-get-one/forms-kind-props-get-one.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: FormsKindPropsGetOneComponent */

  /***/
  function srcAppModulesAdmComponentsFormsKindPropsFormsKindPropsGetOneFormsKindPropsGetOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsKindPropsGetOneComponent", function () {
      return FormsKindPropsGetOneComponent;
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


    var _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/kind-props.service */
    "./src/app/services/kind-props.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsKindPropsGetOneComponent = /*#__PURE__*/function () {
      function FormsKindPropsGetOneComponent(fb, serviceKindProps) {
        _classCallCheck(this, FormsKindPropsGetOneComponent);

        this.fb = fb;
        this.serviceKindProps = serviceKindProps;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsKindPropsGetOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            kindPropId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref13) {
          var _this20 = this;

          var target = _ref13.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceKindProps.getOne(this.form.get('kindPropId').value).subscribe(function (x) {
            return _this20.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsKindPropsGetOneComponent;
    }();

    FormsKindPropsGetOneComponent.ɵfac = function FormsKindPropsGetOneComponent_Factory(t) {
      return new (t || FormsKindPropsGetOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]));
    };

    FormsKindPropsGetOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsKindPropsGetOneComponent,
      selectors: [["app-forms-kind-props-get-one"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "kindPropId", 1, "form_100"], ["type", "submit"]],
      template: function FormsKindPropsGetOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/kind_props/:kindPropId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsKindPropsGetOneComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u0432\u0438\u0434\u0430 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMta2luZC1wcm9wcy9mb3Jtcy1raW5kLXByb3BzLWdldC1vbmUvZm9ybXMta2luZC1wcm9wcy1nZXQtb25lLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsKindPropsGetOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-kind-props-get-one',
          templateUrl: './forms-kind-props-get-one.component.html',
          styleUrls: ['./forms-kind-props-get-one.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-post/forms-kind-props-post.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-kind-props/forms-kind-props-post/forms-kind-props-post.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: FormsKindPropsPostComponent */

  /***/
  function srcAppModulesAdmComponentsFormsKindPropsFormsKindPropsPostFormsKindPropsPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsKindPropsPostComponent", function () {
      return FormsKindPropsPostComponent;
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


    var _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/kind-props.service */
    "./src/app/services/kind-props.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsKindPropsPostComponent = /*#__PURE__*/function () {
      function FormsKindPropsPostComponent(fb, serviceKindProps) {
        _classCallCheck(this, FormsKindPropsPostComponent);

        this.fb = fb;
        this.serviceKindProps = serviceKindProps;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsKindPropsPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref14) {
          var _this21 = this;

          var target = _ref14.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceKindProps.create(this.form.value).subscribe(function (x) {
            _this21.json.emit(x);

            _this21.form.reset();
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsKindPropsPostComponent;
    }();

    FormsKindPropsPostComponent.ɵfac = function FormsKindPropsPostComponent_Factory(t) {
      return new (t || FormsKindPropsPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]));
    };

    FormsKindPropsPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsKindPropsPostComponent,
      selectors: [["app-forms-kind-props-post"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "text", "formControlName", "name", 1, "form_100"], ["type", "submit"]],
      template: function FormsKindPropsPostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " POST: /api/v1/kind_props ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsKindPropsPostComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMta2luZC1wcm9wcy9mb3Jtcy1raW5kLXByb3BzLXBvc3QvZm9ybXMta2luZC1wcm9wcy1wb3N0LmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsKindPropsPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-kind-props-post',
          templateUrl: './forms-kind-props-post.component.html',
          styleUrls: ['./forms-kind-props-post.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-put/forms-kind-props-put.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-kind-props/forms-kind-props-put/forms-kind-props-put.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: FormsKindPropsPutComponent */

  /***/
  function srcAppModulesAdmComponentsFormsKindPropsFormsKindPropsPutFormsKindPropsPutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsKindPropsPutComponent", function () {
      return FormsKindPropsPutComponent;
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


    var _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/kind-props.service */
    "./src/app/services/kind-props.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["formPut"];

    var FormsKindPropsPutComponent = /*#__PURE__*/function () {
      function FormsKindPropsPutComponent(fb, serviceKindProps) {
        _classCallCheck(this, FormsKindPropsPutComponent);

        this.fb = fb;
        this.serviceKindProps = serviceKindProps;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsKindPropsPutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGet = this.fb.group({
            kindPropId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
          this.form = this.fb.group({
            kindPropId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
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
        key: "submitFormGet",
        value: function submitFormGet(_ref15) {
          var _this22 = this;

          var target = _ref15.target;

          if (this.formGet.invalid) {
            for (var key in this.formGet.controls) {
              var formControl = this.formGet.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var kindPropId = this.formGet.get('kindPropId').value;
          var s = this.serviceKindProps.getOne(kindPropId).subscribe(function (x) {
            _this22.json.emit(x);

            _this22.formPut.nativeElement.classList.remove('hidden');

            _this22.form.reset();

            _this22.form.patchValue(x);
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "submitFormPut",
        value: function submitFormPut(_ref16) {
          var _this23 = this;

          var target = _ref16.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceKindProps.update(this.form.get('kindPropId').value, this.form.value).subscribe(function (x) {
            return _this23.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsKindPropsPutComponent;
    }();

    FormsKindPropsPutComponent.ɵfac = function FormsKindPropsPutComponent_Factory(t) {
      return new (t || FormsKindPropsPutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]));
    };

    FormsKindPropsPutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsKindPropsPutComponent,
      selectors: [["app-forms-kind-props-put"]],
      viewQuery: function FormsKindPropsPutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formPut = _t.first);
        }
      },
      outputs: {
        json: "json"
      },
      decls: 23,
      vars: 5,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "kindPropId", 1, "form_100"], ["type", "submit"], [1, "form", "hidden", 3, "formGroup", "ngSubmit"], ["formPut", ""], ["type", "hidden", "formControlName", "kindPropId"], ["type", "text", "formControlName", "name", 1, "form_100"]],
      template: function FormsKindPropsPutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PUT: /api/v1/kind_props/:kindPropId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsKindPropsPutComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitFormGet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u0432\u0438\u0434\u0430 \u0441\u0432-\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsKindPropsPutComponent_Template_form_ngSubmit_11_listener($event) {
            return ctx.submitFormPut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 3, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMta2luZC1wcm9wcy9mb3Jtcy1raW5kLXByb3BzLXB1dC9mb3Jtcy1raW5kLXByb3BzLXB1dC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsKindPropsPutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-kind-props-put',
          templateUrl: './forms-kind-props-put.component.html',
          styleUrls: ['./forms-kind-props-put.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_kind_props_service__WEBPACK_IMPORTED_MODULE_2__["KindPropsService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        formPut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formPut', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-pages/forms-pages-ad-adid/forms-pages-ad-adid.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-pages/forms-pages-ad-adid/forms-pages-ad-adid.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: FormsPagesAdAdidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsPagesFormsPagesAdAdidFormsPagesAdAdidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPagesAdAdidComponent", function () {
      return FormsPagesAdAdidComponent;
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


    var _services_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/pages.service */
    "./src/app/services/pages.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsPagesAdAdidComponent = /*#__PURE__*/function () {
      function FormsPagesAdAdidComponent(fb, servicePages) {
        _classCallCheck(this, FormsPagesAdAdidComponent);

        this.fb = fb;
        this.servicePages = servicePages;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsPagesAdAdidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            adId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref17) {
          var _this24 = this;

          var target = _ref17.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.servicePages.pageAd(this.form.get('adId').value).subscribe(function (x) {
            return _this24.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsPagesAdAdidComponent;
    }();

    FormsPagesAdAdidComponent.ɵfac = function FormsPagesAdAdidComponent_Factory(t) {
      return new (t || FormsPagesAdAdidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]));
    };

    FormsPagesAdAdidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsPagesAdAdidComponent,
      selectors: [["app-forms-pages-ad-adid"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "adId", 1, "form_100"], ["type", "submit"]],
      template: function FormsPagesAdAdidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/pages/ad/:adId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsPagesAdAdidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "adId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtcGFnZXMvZm9ybXMtcGFnZXMtYWQtYWRpZC9mb3Jtcy1wYWdlcy1hZC1hZGlkLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsPagesAdAdidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-pages-ad-adid',
          templateUrl: './forms-pages-ad-adid.component.html',
          styleUrls: ['./forms-pages-ad-adid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-pages/forms-pages-main/forms-pages-main.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-pages/forms-pages-main/forms-pages-main.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: FormsPagesMainComponent */

  /***/
  function srcAppModulesAdmComponentsFormsPagesFormsPagesMainFormsPagesMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPagesMainComponent", function () {
      return FormsPagesMainComponent;
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


    var _services_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/pages.service */
    "./src/app/services/pages.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsPagesMainComponent = /*#__PURE__*/function () {
      function FormsPagesMainComponent(fb, servicePages) {
        _classCallCheck(this, FormsPagesMainComponent);

        this.fb = fb;
        this.servicePages = servicePages;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsPagesMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            limit: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref18) {
          var _this25 = this;

          var target = _ref18.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.servicePages.pageMain(this.form.get('limit').value).subscribe(function (x) {
            return _this25.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsPagesMainComponent;
    }();

    FormsPagesMainComponent.ɵfac = function FormsPagesMainComponent_Factory(t) {
      return new (t || FormsPagesMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]));
    };

    FormsPagesMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsPagesMainComponent,
      selectors: [["app-forms-pages-main"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "limit", 1, "form_100"], ["type", "submit"]],
      template: function FormsPagesMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/pages/main ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsPagesMainComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtcGFnZXMvZm9ybXMtcGFnZXMtbWFpbi9mb3Jtcy1wYWdlcy1tYWluLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsPagesMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-pages-main',
          templateUrl: './forms-pages-main.component.html',
          styleUrls: ['./forms-pages-main.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-props/forms-props-delete-props-propid/forms-props-delete-props-propid.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-props/forms-props-delete-props-propid/forms-props-delete-props-propid.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: FormsPropsDeletePropsPropidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsPropsFormsPropsDeletePropsPropidFormsPropsDeletePropsPropidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPropsDeletePropsPropidComponent", function () {
      return FormsPropsDeletePropsPropidComponent;
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


    var _services_prop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/prop.service */
    "./src/app/services/prop.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsPropsDeletePropsPropidComponent = /*#__PURE__*/function () {
      function FormsPropsDeletePropsPropidComponent(fb, serviceProps) {
        _classCallCheck(this, FormsPropsDeletePropsPropidComponent);

        this.fb = fb;
        this.serviceProps = serviceProps;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsPropsDeletePropsPropidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            propId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref19) {
          var _this26 = this;

          var target = _ref19.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceProps["delete"](this.form.get('propId').value).subscribe(function (x) {
            _this26.json.emit(x);

            _this26.form.reset();
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsPropsDeletePropsPropidComponent;
    }();

    FormsPropsDeletePropsPropidComponent.ɵfac = function FormsPropsDeletePropsPropidComponent_Factory(t) {
      return new (t || FormsPropsDeletePropsPropidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_prop_service__WEBPACK_IMPORTED_MODULE_2__["PropService"]));
    };

    FormsPropsDeletePropsPropidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsPropsDeletePropsPropidComponent,
      selectors: [["app-forms-props-delete-props-propid"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "propId", 1, "form_100"], ["type", "submit"]],
      template: function FormsPropsDeletePropsPropidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " DELETE: /api/v1/props/:propId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsPropsDeletePropsPropidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtcHJvcHMvZm9ybXMtcHJvcHMtZGVsZXRlLXByb3BzLXByb3BpZC9mb3Jtcy1wcm9wcy1kZWxldGUtcHJvcHMtcHJvcGlkLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsPropsDeletePropsPropidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-props-delete-props-propid',
          templateUrl: './forms-props-delete-props-propid.component.html',
          styleUrls: ['./forms-props-delete-props-propid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_prop_service__WEBPACK_IMPORTED_MODULE_2__["PropService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-props/forms-props-get-props-propid/forms-props-get-props-propid.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-props/forms-props-get-props-propid/forms-props-get-props-propid.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: FormsPropsGetPropsPropidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsPropsFormsPropsGetPropsPropidFormsPropsGetPropsPropidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPropsGetPropsPropidComponent", function () {
      return FormsPropsGetPropsPropidComponent;
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


    var _services_prop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/prop.service */
    "./src/app/services/prop.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsPropsGetPropsPropidComponent = /*#__PURE__*/function () {
      function FormsPropsGetPropsPropidComponent(fb, serviceProps) {
        _classCallCheck(this, FormsPropsGetPropsPropidComponent);

        this.fb = fb;
        this.serviceProps = serviceProps;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsPropsGetPropsPropidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            propId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref20) {
          var _this27 = this;

          var target = _ref20.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceProps.getOne(this.form.get('propId').value).subscribe(function (x) {
            return _this27.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsPropsGetPropsPropidComponent;
    }();

    FormsPropsGetPropsPropidComponent.ɵfac = function FormsPropsGetPropsPropidComponent_Factory(t) {
      return new (t || FormsPropsGetPropsPropidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_prop_service__WEBPACK_IMPORTED_MODULE_2__["PropService"]));
    };

    FormsPropsGetPropsPropidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsPropsGetPropsPropidComponent,
      selectors: [["app-forms-props-get-props-propid"]],
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "propId", 1, "form_100"], ["type", "submit"]],
      template: function FormsPropsGetPropsPropidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/props/:propId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsPropsGetPropsPropidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtcHJvcHMvZm9ybXMtcHJvcHMtZ2V0LXByb3BzLXByb3BpZC9mb3Jtcy1wcm9wcy1nZXQtcHJvcHMtcHJvcGlkLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsPropsGetPropsPropidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-props-get-props-propid',
          templateUrl: './forms-props-get-props-propid.component.html',
          styleUrls: ['./forms-props-get-props-propid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_prop_service__WEBPACK_IMPORTED_MODULE_2__["PropService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-props/forms-props-get-props/forms-props-get-props.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-props/forms-props-get-props/forms-props-get-props.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: FormsPropsGetPropsComponent */

  /***/
  function srcAppModulesAdmComponentsFormsPropsFormsPropsGetPropsFormsPropsGetPropsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPropsGetPropsComponent", function () {
      return FormsPropsGetPropsComponent;
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


    var _services_prop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/prop.service */
    "./src/app/services/prop.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormsPropsGetPropsComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r1.catId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "|----".repeat(cat_r1.deep), " ", cat_r1.name, " ");
      }
    }

    var FormsPropsGetPropsComponent = /*#__PURE__*/function () {
      function FormsPropsGetPropsComponent(fb, serviceProps, serviceManager) {
        _classCallCheck(this, FormsPropsGetPropsComponent);

        this.fb = fb;
        this.serviceProps = serviceProps;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.catTreeOneLevel = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsPropsGetPropsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.form = this.fb.group({
            catId: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this28.catTreeOneLevel = _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].getCatTreeAsOneLevel(x.catsTree);
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
        key: "submitForm",
        value: function submitForm(_ref21) {
          var _this29 = this;

          var target = _ref21.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceProps.getPropsFullForCat(this.form.get('catId').value).subscribe(function (x) {
            return _this29.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsPropsGetPropsComponent;
    }();

    FormsPropsGetPropsComponent.ɵfac = function FormsPropsGetPropsComponent_Factory(t) {
      return new (t || FormsPropsGetPropsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_prop_service__WEBPACK_IMPORTED_MODULE_3__["PropService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]));
    };

    FormsPropsGetPropsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsPropsGetPropsComponent,
      selectors: [["app-forms-props-get-props"]],
      outputs: {
        json: "json"
      },
      decls: 16,
      vars: 5,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["formControlName", "catId", 1, "form_100"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"]],
      template: function FormsPropsGetPropsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/props ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsPropsGetPropsComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormsPropsGetPropsComponent_option_10_Template, 2, 3, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catTreeOneLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 3, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtcHJvcHMvZm9ybXMtcHJvcHMtZ2V0LXByb3BzL2Zvcm1zLXByb3BzLWdldC1wcm9wcy5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsPropsGetPropsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-props-get-props',
          templateUrl: './forms-props-get-props.component.html',
          styleUrls: ['./forms-props-get-props.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_prop_service__WEBPACK_IMPORTED_MODULE_3__["PropService"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-props/forms-props-post-props/forms-props-post-props.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-props/forms-props-post-props/forms-props-post-props.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: FormsPropsPostPropsComponent */

  /***/
  function srcAppModulesAdmComponentsFormsPropsFormsPropsPostPropsFormsPropsPostPropsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPropsPostPropsComponent", function () {
      return FormsPropsPostPropsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../forms-props-post-put-prop/forms-props-post-put-prop.component */
    "./src/app/modules/adm/components/forms-props/forms-props-post-put-prop/forms-props-post-put-prop.component.ts");

    var FormsPropsPostPropsComponent = /*#__PURE__*/function () {
      function FormsPropsPostPropsComponent() {
        _classCallCheck(this, FormsPropsPostPropsComponent);

        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsPropsPostPropsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return FormsPropsPostPropsComponent;
    }();

    FormsPropsPostPropsComponent.ɵfac = function FormsPropsPostPropsComponent_Factory(t) {
      return new (t || FormsPropsPostPropsComponent)();
    };

    FormsPropsPostPropsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsPropsPostPropsComponent,
      selectors: [["app-forms-props-post-props"]],
      outputs: {
        json: "json"
      },
      decls: 5,
      vars: 0,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [3, "json"]],
      template: function FormsPropsPostPropsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " POST: /api/v1/props ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-forms-props-post-put-prop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function FormsPropsPostPropsComponent_Template_app_forms_props_post_put_prop_json_4_listener($event) {
            return ctx.json.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_1__["ToggleActiveDirective"], _forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_2__["FormsPropsPostPutPropComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtcHJvcHMvZm9ybXMtcHJvcHMtcG9zdC1wcm9wcy9mb3Jtcy1wcm9wcy1wb3N0LXByb3BzLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsPropsPostPropsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-props-post-props',
          templateUrl: './forms-props-post-props.component.html',
          styleUrls: ['./forms-props-post-props.component.less']
        }]
      }], function () {
        return [];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-props/forms-props-post-put-prop/forms-props-post-put-prop.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-props/forms-props-post-put-prop/forms-props-post-put-prop.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: FormsPropsPostPutPropComponent */

  /***/
  function srcAppModulesAdmComponentsFormsPropsFormsPropsPostPutPropFormsPropsPostPutPropComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPropsPostPutPropComponent", function () {
      return FormsPropsPostPutPropComponent;
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


    var _services_prop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/prop.service */
    "./src/app/services/prop.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dynamic_values_dynamic_values_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../dynamic-values/dynamic-values.component */
    "./src/app/modules/adm/components/dynamic-values/dynamic-values.component.ts");

    function FormsPropsPostPutPropComponent_option_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var kind_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", kind_r1.kindPropId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kind_r1.name, " ");
      }
    }

    var FormsPropsPostPutPropComponent = /*#__PURE__*/function () {
      function FormsPropsPostPutPropComponent(fb, serviceProps, serviceManager) {
        _classCallCheck(this, FormsPropsPostPutPropComponent);

        this.fb = fb;
        this.serviceProps = serviceProps;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.defaultControls = {};
        this.kindProps = [];
        this.values = [];
        this.tagKindNumber = this.serviceManager.tagKindNumber;
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultControls = {
          propId: 0,
          title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          kindPropId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          suffix: '',
          comment: '',
          privateComment: '',
          selectAsTextarea: '',
          values: this.fb.array(this.values)
        };
      }

      _createClass(FormsPropsPostPutPropComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.form = this.fb.group(this.defaultControls);
          this.form.get('kindPropId').valueChanges.subscribe(function (x) {
            _this30.curKindPropName = '';

            _this30.kindProps.forEach(function (y) {
              if (y.kindPropId == x) {
                _this30.curKindPropName = y.name;
              }
            });

            if (_this30.curKindPropName !== 'select') {
              _this30.form.get('selectAsTextarea').setValue('');
            }

            if (_this30.tagKindNumber.indexOf(_this30.curKindPropName) === -1) {
              var tmp = _this30.form.get('values');

              tmp.clear();
            }
          });
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this30.kindProps = x.kindProps;
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
        key: "submitForm",
        value: function submitForm(_ref22) {
          var _this31 = this;

          var target = _ref22.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var propId = this.form.get('propId').value;
          var fn = propId ? this.serviceProps.update(propId, this.form.value) : this.serviceProps.create(this.form.value);
          var s = fn.subscribe(function (x) {
            return _this31.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "editPropFull",
        set: function set(x) {
          var _this32 = this;

          this.form.reset();
          this.form.patchValue(x);
          this.form.get('kindPropId').setValue(this.form.get('kindPropId').value.toString()); // нужна именно строчка

          var tmp = this.form.get('values');
          tmp.clear();
          x.values.forEach(function (y) {
            return tmp.push(_this32.fb.group(y));
          });
          this._editPropFull = x;
        },
        get: function get() {
          return this._editPropFull;
        }
      }]);

      return FormsPropsPostPutPropComponent;
    }();

    FormsPropsPostPutPropComponent.ɵfac = function FormsPropsPostPutPropComponent_Factory(t) {
      return new (t || FormsPropsPostPutPropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_prop_service__WEBPACK_IMPORTED_MODULE_2__["PropService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"]));
    };

    FormsPropsPostPutPropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsPropsPostPutPropComponent,
      selectors: [["app-forms-props-post-put-prop"]],
      outputs: {
        json: "json"
      },
      decls: 40,
      vars: 8,
      consts: [[1, "form", 3, "formGroup", "ngSubmit"], ["type", "hidden", "formControlName", "propId"], [1, "form_row"], [1, "form_title"], ["type", "text", "formControlName", "title", 1, "form_100"], ["type", "text", "formControlName", "name", 1, "form_100"], ["type", "text", "formControlName", "suffix", 1, "form_100"], ["type", "text", "formControlName", "comment", 1, "form_100"], ["type", "text", "formControlName", "privateComment", 1, "form_100"], ["formControlName", "kindPropId", 1, "form_100"], ["value", "0", "selected", "selected"], [3, "value", 4, "ngFor", "ngForOf"], [3, "hidden"], ["formControlName", "selectAsTextarea"], ["formArrayName", "values", 3, "propId", "valuesFormArray"], ["type", "submit"], [3, "value"]],
      template: function FormsPropsPostPutPropComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsPropsPostPutPropComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "[name=] *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0441\u0443\u0444\u0444\u0438\u043A\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u043F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0440\u0430\u0437\u043D\u043E\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C \u0442\u0435\u0433\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FormsPropsPostPutPropComponent_option_27_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0432-\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-dynamic-values", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kindProps);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.editPropFull || ctx.curKindPropName != "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("propId", ctx.form.get("propId").value)("valuesFormArray", ctx.form.get("values"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 6, ctx.form.value), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _dynamic_values_dynamic_values_component__WEBPACK_IMPORTED_MODULE_5__["DynamicValuesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtcHJvcHMvZm9ybXMtcHJvcHMtcG9zdC1wdXQtcHJvcC9mb3Jtcy1wcm9wcy1wb3N0LXB1dC1wcm9wLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsPropsPostPutPropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-props-post-put-prop',
          templateUrl: './forms-props-post-put-prop.component.html',
          styleUrls: ['./forms-props-post-put-prop.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_prop_service__WEBPACK_IMPORTED_MODULE_2__["PropService"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-props/forms-props-put-props-propid/forms-props-put-props-propid.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-props/forms-props-put-props-propid/forms-props-put-props-propid.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: FormsPropsPutPropsPropidComponent */

  /***/
  function srcAppModulesAdmComponentsFormsPropsFormsPropsPutPropsPropidFormsPropsPutPropsPropidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsPropsPutPropsPropidComponent", function () {
      return FormsPropsPutPropsPropidComponent;
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


    var _forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../forms-props-post-put-prop/forms-props-post-put-prop.component */
    "./src/app/modules/adm/components/forms-props/forms-props-post-put-prop/forms-props-post-put-prop.component.ts");
    /* harmony import */


    var _services_prop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/prop.service */
    "./src/app/services/prop.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");

    var _c0 = ["formPutWrapper"];

    var FormsPropsPutPropsPropidComponent = /*#__PURE__*/function () {
      function FormsPropsPutPropsPropidComponent(fb, serviceProps) {
        _classCallCheck(this, FormsPropsPutPropsPropidComponent);

        this.fb = fb;
        this.serviceProps = serviceProps;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsPropsPutPropsPropidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            propId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
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
        key: "submitForm",
        value: function submitForm(_ref23) {
          var _this33 = this;

          var target = _ref23.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceProps.getOne(this.form.get('propId').value).subscribe(function (x) {
            _this33.formPutWrapper.nativeElement.classList.remove('hidden');

            _this33.formsPropsPostPutProp.editPropFull = x;
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsPropsPutPropsPropidComponent;
    }();

    FormsPropsPutPropsPropidComponent.ɵfac = function FormsPropsPutPropsPropidComponent_Factory(t) {
      return new (t || FormsPropsPutPropsPropidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_prop_service__WEBPACK_IMPORTED_MODULE_3__["PropService"]));
    };

    FormsPropsPutPropsPropidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsPropsPutPropsPropidComponent,
      selectors: [["app-forms-props-put-props-propid"]],
      viewQuery: function FormsPropsPutPropsPropidComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_2__["FormsPropsPostPutPropComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formPutWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formsPropsPostPutProp = _t.first);
        }
      },
      outputs: {
        json: "json"
      },
      decls: 14,
      vars: 1,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "propId", 1, "form_100"], ["type", "submit"], [1, "hidden"], ["formPutWrapper", ""], [3, "json"]],
      template: function FormsPropsPutPropsPropidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PUT: /api/v1/props/:propId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsPropsPutPropsPropidComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id \u0441\u0432-\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-forms-props-post-put-prop", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function FormsPropsPutPropsPropidComponent_Template_app_forms_props_post_put_prop_json_13_listener($event) {
            return ctx.json.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_2__["FormsPropsPostPutPropComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtcHJvcHMvZm9ybXMtcHJvcHMtcHV0LXByb3BzLXByb3BpZC9mb3Jtcy1wcm9wcy1wdXQtcHJvcHMtcHJvcGlkLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsPropsPutPropsPropidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-props-put-props-propid',
          templateUrl: './forms-props-put-props-propid.component.html',
          styleUrls: ['./forms-props-put-props-propid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_prop_service__WEBPACK_IMPORTED_MODULE_3__["PropService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        formPutWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formPutWrapper', {
            "static": true
          }]
        }],
        formsPropsPostPutProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_forms_props_post_put_prop_forms_props_post_put_prop_component__WEBPACK_IMPORTED_MODULE_2__["FormsPropsPostPutPropComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-search/forms-search-ads/forms-search-ads.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-search/forms-search-ads/forms-search-ads.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: FormsSearchAdsComponent */

  /***/
  function srcAppModulesAdmComponentsFormsSearchFormsSearchAdsFormsSearchAdsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsSearchAdsComponent", function () {
      return FormsSearchAdsComponent;
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


    var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormsSearchAdsComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r1.catId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "|----".repeat(cat_r1.deep), " ", cat_r1.name, " ");
      }
    }

    var FormsSearchAdsComponent = /*#__PURE__*/function () {
      function FormsSearchAdsComponent(fb, serviceSearch, serviceManager) {
        _classCallCheck(this, FormsSearchAdsComponent);

        this.fb = fb;
        this.serviceSearch = serviceSearch;
        this.serviceManager = serviceManager;
        this.subscriptions = [];
        this.catTreeOneLevel = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsSearchAdsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.form = this.fb.group({
            query: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            catId: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            limit: [5, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10)]],
            offset: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]]
          });
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this34.catTreeOneLevel = _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].getCatTreeAsOneLevel(x.catsTree);
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
        key: "submitForm",
        value: function submitForm(_ref24) {
          var _this35 = this;

          var target = _ref24.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var query = this.form.get('query').value;
          var catId = this.form.get('catId').value;
          var limit = this.form.get('limit').value;
          var offset = this.form.get('offset').value;
          var s = this.serviceSearch.ads(query, catId, limit, offset).subscribe(function (x) {
            return _this35.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsSearchAdsComponent;
    }();

    FormsSearchAdsComponent.ɵfac = function FormsSearchAdsComponent_Factory(t) {
      return new (t || FormsSearchAdsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]));
    };

    FormsSearchAdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsSearchAdsComponent,
      selectors: [["app-forms-search-ads"]],
      outputs: {
        json: "json"
      },
      decls: 28,
      vars: 5,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "text", "formControlName", "query", 1, "form_100"], ["formControlName", "catId", 1, "form_100"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "limit", 1, "form_100"], ["type", "number", "formControlName", "offset", 1, "form_100"], ["type", "submit"], [3, "value"]],
      template: function FormsSearchAdsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/search/ads ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsSearchAdsComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0430\u044F \u0444\u0440\u0430\u0437\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "id \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormsSearchAdsComponent_option_14_Template, 2, 3, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "offset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catTreeOneLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 3, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtc2VhcmNoL2Zvcm1zLXNlYXJjaC1hZHMvZm9ybXMtc2VhcmNoLWFkcy5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsSearchAdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-search-ads',
          templateUrl: './forms-search-ads.component.html',
          styleUrls: ['./forms-search-ads.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
        }, {
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-test/forms-test.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-test/forms-test.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FormsTestComponent */

  /***/
  function srcAppModulesAdmComponentsFormsTestFormsTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsTestComponent", function () {
      return FormsTestComponent;
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


    var _services_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");

    var FormsTestComponent = /*#__PURE__*/function () {
      function FormsTestComponent(fb, serviceTest) {
        _classCallCheck(this, FormsTestComponent);

        this.fb = fb;
        this.serviceTest = serviceTest;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref25) {
          var _this36 = this;

          var target = _ref25.target;
          var s = this.serviceTest.request().subscribe(function (x) {
            return _this36.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsTestComponent;
    }();

    FormsTestComponent.ɵfac = function FormsTestComponent_Factory(t) {
      return new (t || FormsTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"]));
    };

    FormsTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsTestComponent,
      selectors: [["app-forms-test"]],
      outputs: {
        json: "json"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], ["type", "submit"]],
      template: function FormsTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/test ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsTestComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtdGVzdC9mb3Jtcy10ZXN0LmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-test',
          templateUrl: './forms-test.component.html',
          styleUrls: ['./forms-test.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-users/forms-users-delete-users-userid/forms-users-delete-users-userid.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-users/forms-users-delete-users-userid/forms-users-delete-users-userid.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: FormsUsersDeleteUsersUseridComponent */

  /***/
  function srcAppModulesAdmComponentsFormsUsersFormsUsersDeleteUsersUseridFormsUsersDeleteUsersUseridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsUsersDeleteUsersUseridComponent", function () {
      return FormsUsersDeleteUsersUseridComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsUsersDeleteUsersUseridComponent = /*#__PURE__*/function () {
      function FormsUsersDeleteUsersUseridComponent(fb, serviceUsers) {
        _classCallCheck(this, FormsUsersDeleteUsersUseridComponent);

        this.fb = fb;
        this.serviceUsers = serviceUsers;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsUsersDeleteUsersUseridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            userId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref26) {
          var _this37 = this;

          var target = _ref26.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceUsers["delete"](this.form.get('userId').value).subscribe(function (x) {
            _this37.json.emit(x);

            _this37.form.reset();
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsUsersDeleteUsersUseridComponent;
    }();

    FormsUsersDeleteUsersUseridComponent.ɵfac = function FormsUsersDeleteUsersUseridComponent_Factory(t) {
      return new (t || FormsUsersDeleteUsersUseridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    FormsUsersDeleteUsersUseridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsUsersDeleteUsersUseridComponent,
      selectors: [["app-forms-users-delete-users-userid"]],
      outputs: {
        json: "json"
      },
      decls: 15,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "userId", 1, "form_100"], ["type", "submit"]],
      template: function FormsUsersDeleteUsersUseridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " DELETE: /api/v1/users/:userId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsUsersDeleteUsersUseridComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "userId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtdXNlcnMvZm9ybXMtdXNlcnMtZGVsZXRlLXVzZXJzLXVzZXJpZC9mb3Jtcy11c2Vycy1kZWxldGUtdXNlcnMtdXNlcmlkLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsUsersDeleteUsersUseridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-users-delete-users-userid',
          templateUrl: './forms-users-delete-users-userid.component.html',
          styleUrls: ['./forms-users-delete-users-userid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-users/forms-users-get-users-userid/forms-users-get-users-userid.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-users/forms-users-get-users-userid/forms-users-get-users-userid.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: FormsUsersGetUsersUseridComponent */

  /***/
  function srcAppModulesAdmComponentsFormsUsersFormsUsersGetUsersUseridFormsUsersGetUsersUseridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsUsersGetUsersUseridComponent", function () {
      return FormsUsersGetUsersUseridComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsUsersGetUsersUseridComponent = /*#__PURE__*/function () {
      function FormsUsersGetUsersUseridComponent(fb, serviceUsers) {
        _classCallCheck(this, FormsUsersGetUsersUseridComponent);

        this.fb = fb;
        this.serviceUsers = serviceUsers;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsUsersGetUsersUseridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            userId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref27) {
          var _this38 = this;

          var target = _ref27.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceUsers.getUser(this.form.get('userId').value).subscribe(function (x) {
            return _this38.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsUsersGetUsersUseridComponent;
    }();

    FormsUsersGetUsersUseridComponent.ɵfac = function FormsUsersGetUsersUseridComponent_Factory(t) {
      return new (t || FormsUsersGetUsersUseridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    FormsUsersGetUsersUseridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsUsersGetUsersUseridComponent,
      selectors: [["app-forms-users-get-users-userid"]],
      outputs: {
        json: "json"
      },
      decls: 15,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "userId", 1, "form_100"], ["type", "submit"]],
      template: function FormsUsersGetUsersUseridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/users/:userId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsUsersGetUsersUseridComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "userId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtdXNlcnMvZm9ybXMtdXNlcnMtZ2V0LXVzZXJzLXVzZXJpZC9mb3Jtcy11c2Vycy1nZXQtdXNlcnMtdXNlcmlkLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsUsersGetUsersUseridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-users-get-users-userid',
          templateUrl: './forms-users-get-users-userid.component.html',
          styleUrls: ['./forms-users-get-users-userid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-users/forms-users-get-users/forms-users-get-users.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-users/forms-users-get-users/forms-users-get-users.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: FormsUsersGetUsersComponent */

  /***/
  function srcAppModulesAdmComponentsFormsUsersFormsUsersGetUsersFormsUsersGetUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsUsersGetUsersComponent", function () {
      return FormsUsersGetUsersComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");

    var FormsUsersGetUsersComponent = /*#__PURE__*/function () {
      function FormsUsersGetUsersComponent(fb, serviceUsers) {
        _classCallCheck(this, FormsUsersGetUsersComponent);

        this.fb = fb;
        this.serviceUsers = serviceUsers;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsUsersGetUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitFormGetUsers",
        value: function submitFormGetUsers(_ref28) {
          var _this39 = this;

          var target = _ref28.target;
          var s = this.serviceUsers.getUsers().subscribe(function (x) {
            return _this39.json.emit(x);
          });
          this.subscriptions.push(s);
        }
      }]);

      return FormsUsersGetUsersComponent;
    }();

    FormsUsersGetUsersComponent.ɵfac = function FormsUsersGetUsersComponent_Factory(t) {
      return new (t || FormsUsersGetUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    FormsUsersGetUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsUsersGetUsersComponent,
      selectors: [["app-forms-users-get-users"]],
      outputs: {
        json: "json"
      },
      decls: 8,
      vars: 1,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], ["type", "submit"]],
      template: function FormsUsersGetUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET: /api/v1/users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsUsersGetUsersComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.submitFormGetUsers($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtdXNlcnMvZm9ybXMtdXNlcnMtZ2V0LXVzZXJzL2Zvcm1zLXVzZXJzLWdldC11c2Vycy5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsUsersGetUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-users-get-users',
          templateUrl: './forms-users-get-users.component.html',
          styleUrls: ['./forms-users-get-users.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-users/forms-users-post-users/forms-users-post-users.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-users/forms-users-post-users/forms-users-post-users.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: FormsUsersPostUsersComponent */

  /***/
  function srcAppModulesAdmComponentsFormsUsersFormsUsersPostUsersFormsUsersPostUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsUsersPostUsersComponent", function () {
      return FormsUsersPostUsersComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FormsUsersPostUsersComponent = /*#__PURE__*/function () {
      function FormsUsersPostUsersComponent(fb, serviceUsers) {
        _classCallCheck(this, FormsUsersPostUsersComponent);

        this.fb = fb;
        this.serviceUsers = serviceUsers;
        this.subscriptions = [];
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsUsersPostUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].minLenPassword)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].minLenPassword)]],
            files: '',
            name: '',
            isEmailConfirmed: false
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(_ref29) {
          var _this40 = this;

          var target = _ref29.target;

          if (this.form.invalid) {
            for (var key in this.form.controls) {
              var formControl = this.form.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var newFormData = _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].getNewFormData(this.form.value);

          var s = this.serviceUsers.create(newFormData).subscribe(function (x) {
            _this40.json.emit(x);

            target.reset();

            _this40.form.reset();
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "addPhoto",
        value: function addPhoto(_ref30) {
          var target = _ref30.target;

          _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].addPhoto(target, this.form);
        }
      }]);

      return FormsUsersPostUsersComponent;
    }();

    FormsUsersPostUsersComponent.ɵfac = function FormsUsersPostUsersComponent_Factory(t) {
      return new (t || FormsUsersPostUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    FormsUsersPostUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsUsersPostUsersComponent,
      selectors: [["app-forms-users-post-users"]],
      outputs: {
        json: "json"
      },
      decls: 36,
      vars: 4,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "hidden", "formControlName", "files"], ["type", "file", "accept", "image/jpeg,image/png", 1, "form_100", 3, "change"], ["type", "text", "formControlName", "name", 1, "form_100"], ["type", "email", "formControlName", "email", 1, "form_100"], ["type", "text", "formControlName", "password", 1, "form_100"], ["type", "text", "formControlName", "passwordConfirm", 1, "form_100"], ["type", "checkbox", "formControlName", "isEmailConfirmed", "value", "true"], ["type", "submit"]],
      template: function FormsUsersPostUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " POST: /api/v1/users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsUsersPostUsersComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.submitForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormsUsersPostUsersComponent_Template_input_change_10_listener($event) {
            return ctx.addPhoto($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "passwordConfirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " is_email_confirmed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 2, ctx.form.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtdXNlcnMvZm9ybXMtdXNlcnMtcG9zdC11c2Vycy9mb3Jtcy11c2Vycy1wb3N0LXVzZXJzLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsUsersPostUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-users-post-users',
          templateUrl: './forms-users-post-users.component.html',
          styleUrls: ['./forms-users-post-users.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/forms-users/forms-users-put-users-userid/forms-users-put-users-userid.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/modules/adm/components/forms-users/forms-users-put-users-userid/forms-users-put-users-userid.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: FormsUsersPutUsersUseridComponent */

  /***/
  function srcAppModulesAdmComponentsFormsUsersFormsUsersPutUsersUseridFormsUsersPutUsersUseridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsUsersPutUsersUseridComponent", function () {
      return FormsUsersPutUsersUseridComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["formPutTag"];

    function FormsUsersPutUsersUseridComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsUsersPutUsersUseridComponent_div_20_Template_div_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.removePhoto($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.url + "/resample/0/100/" + ctx_r1.formPut.get("avatar").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var FormsUsersPutUsersUseridComponent = /*#__PURE__*/function () {
      function FormsUsersPutUsersUseridComponent(fb, serviceUsers) {
        _classCallCheck(this, FormsUsersPutUsersUseridComponent);

        this.fb = fb;
        this.serviceUsers = serviceUsers;
        this.subscriptions = [];
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.json = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FormsUsersPutUsersUseridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGet = this.fb.group({
            userId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
          this.formPut = this.fb.group({
            userId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: '',
            passwordConfirm: '',
            files: '',
            avatar: '',
            name: '',
            isEmailConfirmed: false
          });
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
        key: "submitFormGetUsersUserId",
        value: function submitFormGetUsersUserId(_ref31) {
          var _this41 = this;

          var target = _ref31.target;

          if (this.formGet.invalid) {
            for (var key in this.formGet.controls) {
              var formControl = this.formGet.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var s = this.serviceUsers.getUser(this.formGet.get('userId').value).subscribe(function (x) {
            _this41.json.emit(x);

            _this41.formPutTag.nativeElement.classList.remove('hidden');

            _this41.formPut.patchValue(x);
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "submitFormPutUsersUserId",
        value: function submitFormPutUsersUserId(_ref32) {
          var _this42 = this;

          var target = _ref32.target;

          if (this.formPut.invalid) {
            for (var key in this.formPut.controls) {
              var formControl = this.formPut.get(key);

              if (formControl.status === 'INVALID') {
                console.log('INVALID:', key);
              }
            }

            return;
          }

          var newFormData = _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].getNewFormData(this.formPut.value);

          var s = this.serviceUsers.update(this.formPut.get('userId').value, newFormData).subscribe(function (x) {
            _this42.json.emit(x);

            target.reset();

            _this42.formPut.reset();

            _this42.formPut.patchValue(x);

            _this42.formPut.get('password').setValue(''); // чтоб не было null


            _this42.formPut.get('passwordConfirm').setValue(''); // чтоб не было null

          });
          this.subscriptions.push(s);
        }
      }, {
        key: "addPhoto",
        value: function addPhoto(_ref33) {
          var target = _ref33.target;

          _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].addPhoto(target, this.formPut);
        }
      }, {
        key: "removePhoto",
        value: function removePhoto(_ref34) {
          var target = _ref34.target;
          this.formPut.get('avatar').setValue('');
        }
      }]);

      return FormsUsersPutUsersUseridComponent;
    }();

    FormsUsersPutUsersUseridComponent.ɵfac = function FormsUsersPutUsersUseridComponent_Factory(t) {
      return new (t || FormsUsersPutUsersUseridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    FormsUsersPutUsersUseridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsUsersPutUsersUseridComponent,
      selectors: [["app-forms-users-put-users-userid"]],
      viewQuery: function FormsUsersPutUsersUseridComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formPutTag = _t.first);
        }
      },
      outputs: {
        json: "json"
      },
      decls: 46,
      vars: 6,
      consts: [[1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form_row"], [1, "form_title"], ["type", "number", "formControlName", "userId", 1, "form_100"], ["type", "submit"], [1, "form", "hidden", 3, "formGroup", "ngSubmit"], ["formPutTag", ""], ["type", "hidden", "formControlName", "userId"], ["type", "hidden", "formControlName", "files"], ["type", "file", "accept", "image/jpeg,image/png", 1, "form_100", 3, "change"], ["class", "form_thumbnails", 4, "ngIf"], ["type", "text", "formControlName", "name", 1, "form_100"], ["type", "email", "formControlName", "email", "readonly", "readonly", 1, "form_100"], ["type", "text", "formControlName", "password", 1, "form_100"], ["type", "text", "formControlName", "passwordConfirm", 1, "form_100"], ["type", "checkbox", "formControlName", "isEmailConfirmed", "value", "true"], [1, "form_thumbnails"], [1, "form_thumbnails_thumbnail"], [1, "form_thumbnails_thumbnail_close", 3, "click"], [3, "src"]],
      template: function FormsUsersPutUsersUseridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PUT: /api/v1/user ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsUsersPutUsersUseridComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.submitFormGetUsersUserId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "userId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsUsersPutUsersUseridComponent_Template_form_ngSubmit_12_listener($event) {
            return ctx.submitFormPutUsersUserId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormsUsersPutUsersUseridComponent_Template_input_change_19_listener($event) {
            return ctx.addPhoto($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormsUsersPutUsersUseridComponent_div_20_Template, 4, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "passwordConfirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " is_email_confirmed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formPut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formPut.get("avatar").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 4, ctx.formPut.value), " ");
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleActiveDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtL2NvbXBvbmVudHMvZm9ybXMtdXNlcnMvZm9ybXMtdXNlcnMtcHV0LXVzZXJzLXVzZXJpZC9mb3Jtcy11c2Vycy1wdXQtdXNlcnMtdXNlcmlkLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsUsersPutUsersUseridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms-users-put-users-userid',
          templateUrl: './forms-users-put-users-userid.component.html',
          styleUrls: ['./forms-users-put-users-userid.component.less']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, {
        json: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        formPutTag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formPutTag', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/components/page-adm/page-adm.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/adm/components/page-adm/page-adm.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageAdmComponent */

  /***/
  function srcAppModulesAdmComponentsPageAdmPageAdmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageAdmComponent", function () {
      return PageAdmComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/manager.service */
    "./src/app/services/manager.service.ts");
    /* harmony import */


    var _directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../directives/toggle-active.directive */
    "./src/app/directives/toggle-active.directive.ts");
    /* harmony import */


    var _forms_cats_forms_cats_get_cats_forms_cats_get_cats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../forms-cats/forms-cats-get-cats/forms-cats-get-cats.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-get-cats/forms-cats-get-cats.component.ts");
    /* harmony import */


    var _forms_cats_forms_cats_get_cats_catid_forms_cats_get_cats_catid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../forms-cats/forms-cats-get-cats-catid/forms-cats-get-cats-catid.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-get-cats-catid/forms-cats-get-cats-catid.component.ts");
    /* harmony import */


    var _forms_cats_forms_cats_post_cats_forms_cats_post_cats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../forms-cats/forms-cats-post-cats/forms-cats-post-cats.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-post-cats/forms-cats-post-cats.component.ts");
    /* harmony import */


    var _forms_cats_forms_cats_put_cats_catid_forms_cats_put_cats_catid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../forms-cats/forms-cats-put-cats-catid/forms-cats-put-cats-catid.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-put-cats-catid/forms-cats-put-cats-catid.component.ts");
    /* harmony import */


    var _forms_cats_forms_cats_delete_cats_catid_forms_cats_delete_cats_catid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../forms-cats/forms-cats-delete-cats-catid/forms-cats-delete-cats-catid.component */
    "./src/app/modules/adm/components/forms-cats/forms-cats-delete-cats-catid/forms-cats-delete-cats-catid.component.ts");
    /* harmony import */


    var _forms_users_forms_users_get_users_forms_users_get_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../forms-users/forms-users-get-users/forms-users-get-users.component */
    "./src/app/modules/adm/components/forms-users/forms-users-get-users/forms-users-get-users.component.ts");
    /* harmony import */


    var _forms_users_forms_users_get_users_userid_forms_users_get_users_userid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../forms-users/forms-users-get-users-userid/forms-users-get-users-userid.component */
    "./src/app/modules/adm/components/forms-users/forms-users-get-users-userid/forms-users-get-users-userid.component.ts");
    /* harmony import */


    var _forms_users_forms_users_post_users_forms_users_post_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../forms-users/forms-users-post-users/forms-users-post-users.component */
    "./src/app/modules/adm/components/forms-users/forms-users-post-users/forms-users-post-users.component.ts");
    /* harmony import */


    var _forms_users_forms_users_put_users_userid_forms_users_put_users_userid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../forms-users/forms-users-put-users-userid/forms-users-put-users-userid.component */
    "./src/app/modules/adm/components/forms-users/forms-users-put-users-userid/forms-users-put-users-userid.component.ts");
    /* harmony import */


    var _forms_users_forms_users_delete_users_userid_forms_users_delete_users_userid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../forms-users/forms-users-delete-users-userid/forms-users-delete-users-userid.component */
    "./src/app/modules/adm/components/forms-users/forms-users-delete-users-userid/forms-users-delete-users-userid.component.ts");
    /* harmony import */


    var _forms_ads_forms_ads_get_ads_forms_ads_get_ads_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../forms-ads/forms-ads-get-ads/forms-ads-get-ads.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-get-ads/forms-ads-get-ads.component.ts");
    /* harmony import */


    var _forms_ads_forms_ads_get_ads_adid_forms_ads_get_ads_adid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../forms-ads/forms-ads-get-ads-adid/forms-ads-get-ads-adid.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-get-ads-adid/forms-ads-get-ads-adid.component.ts");
    /* harmony import */


    var _forms_ads_forms_ads_post_ads_forms_ads_post_ads_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../forms-ads/forms-ads-post-ads/forms-ads-post-ads.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-post-ads/forms-ads-post-ads.component.ts");
    /* harmony import */


    var _forms_ads_forms_ads_put_ads_adid_forms_ads_put_ads_adid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../forms-ads/forms-ads-put-ads-adid/forms-ads-put-ads-adid.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-put-ads-adid/forms-ads-put-ads-adid.component.ts");
    /* harmony import */


    var _forms_ads_forms_ads_delete_ads_adid_forms_ads_delete_ads_adid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../forms-ads/forms-ads-delete-ads-adid/forms-ads-delete-ads-adid.component */
    "./src/app/modules/adm/components/forms-ads/forms-ads-delete-ads-adid/forms-ads-delete-ads-adid.component.ts");
    /* harmony import */


    var _forms_props_forms_props_get_props_forms_props_get_props_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../forms-props/forms-props-get-props/forms-props-get-props.component */
    "./src/app/modules/adm/components/forms-props/forms-props-get-props/forms-props-get-props.component.ts");
    /* harmony import */


    var _forms_props_forms_props_get_props_propid_forms_props_get_props_propid_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../forms-props/forms-props-get-props-propid/forms-props-get-props-propid.component */
    "./src/app/modules/adm/components/forms-props/forms-props-get-props-propid/forms-props-get-props-propid.component.ts");
    /* harmony import */


    var _forms_props_forms_props_post_props_forms_props_post_props_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../forms-props/forms-props-post-props/forms-props-post-props.component */
    "./src/app/modules/adm/components/forms-props/forms-props-post-props/forms-props-post-props.component.ts");
    /* harmony import */


    var _forms_props_forms_props_put_props_propid_forms_props_put_props_propid_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../forms-props/forms-props-put-props-propid/forms-props-put-props-propid.component */
    "./src/app/modules/adm/components/forms-props/forms-props-put-props-propid/forms-props-put-props-propid.component.ts");
    /* harmony import */


    var _forms_props_forms_props_delete_props_propid_forms_props_delete_props_propid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../forms-props/forms-props-delete-props-propid/forms-props-delete-props-propid.component */
    "./src/app/modules/adm/components/forms-props/forms-props-delete-props-propid/forms-props-delete-props-propid.component.ts");
    /* harmony import */


    var _forms_kind_props_forms_kind_props_get_all_forms_kind_props_get_all_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../forms-kind-props/forms-kind-props-get-all/forms-kind-props-get-all.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-get-all/forms-kind-props-get-all.component.ts");
    /* harmony import */


    var _forms_kind_props_forms_kind_props_get_one_forms_kind_props_get_one_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../forms-kind-props/forms-kind-props-get-one/forms-kind-props-get-one.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-get-one/forms-kind-props-get-one.component.ts");
    /* harmony import */


    var _forms_kind_props_forms_kind_props_post_forms_kind_props_post_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../forms-kind-props/forms-kind-props-post/forms-kind-props-post.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-post/forms-kind-props-post.component.ts");
    /* harmony import */


    var _forms_kind_props_forms_kind_props_put_forms_kind_props_put_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../forms-kind-props/forms-kind-props-put/forms-kind-props-put.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-put/forms-kind-props-put.component.ts");
    /* harmony import */


    var _forms_kind_props_forms_kind_props_delete_forms_kind_props_delete_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../forms-kind-props/forms-kind-props-delete/forms-kind-props-delete.component */
    "./src/app/modules/adm/components/forms-kind-props/forms-kind-props-delete/forms-kind-props-delete.component.ts");
    /* harmony import */


    var _forms_pages_forms_pages_ad_adid_forms_pages_ad_adid_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../forms-pages/forms-pages-ad-adid/forms-pages-ad-adid.component */
    "./src/app/modules/adm/components/forms-pages/forms-pages-ad-adid/forms-pages-ad-adid.component.ts");
    /* harmony import */


    var _forms_pages_forms_pages_main_forms_pages_main_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../forms-pages/forms-pages-main/forms-pages-main.component */
    "./src/app/modules/adm/components/forms-pages/forms-pages-main/forms-pages-main.component.ts");
    /* harmony import */


    var _forms_search_forms_search_ads_forms_search_ads_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../forms-search/forms-search-ads/forms-search-ads.component */
    "./src/app/modules/adm/components/forms-search/forms-search-ads/forms-search-ads.component.ts");
    /* harmony import */


    var _forms_test_forms_test_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ../forms-test/forms-test.component */
    "./src/app/modules/adm/components/forms-test/forms-test.component.ts");
    /* harmony import */


    var _pipes_pretty_json_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../../pipes/pretty-json.pipe */
    "./src/app/modules/adm/pipes/pretty-json.pipe.ts");

    var PageAdmComponent = /*#__PURE__*/function () {
      function PageAdmComponent(serviceManager) {
        _classCallCheck(this, PageAdmComponent);

        this.serviceManager = serviceManager;
        this.subscriptions = [];
      }

      _createClass(PageAdmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          document.body.classList.add('sx-adm');
          var s = this.serviceManager.settings$.subscribe(function (x) {
            return _this43.catTree = x.catsTree;
          });
          this.subscriptions.push(s);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          document.body.classList.remove('sx-adm');
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }]);

      return PageAdmComponent;
    }();

    PageAdmComponent.ɵfac = function PageAdmComponent_Factory(t) {
      return new (t || PageAdmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_1__["ManagerService"]));
    };

    PageAdmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageAdmComponent,
      selectors: [["app-page-adm"]],
      decls: 76,
      vars: 3,
      consts: [[1, "page-adm"], [1, "page-adm_columns"], [1, "page-adm_list"], [1, "page-adm_box"], ["appToggleActive", "", 1, "page-adm_box_title"], [1, "page-adm_box_body"], [3, "json"], [1, "page-adm_json-result"]],
      template: function PageAdmComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-forms-cats-get-cats", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_cats_get_cats_json_9_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-forms-cats-get-cats-catid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_cats_get_cats_catid_json_10_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-forms-cats-post-cats", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_cats_post_cats_json_11_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-forms-cats-put-cats-catid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_cats_put_cats_catid_json_12_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-forms-cats-delete-cats-catid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_cats_delete_cats_catid_json_13_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-forms-users-get-users", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_users_get_users_json_19_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-forms-users-get-users-userid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_users_get_users_userid_json_20_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-forms-users-post-users", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_users_post_users_json_21_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-forms-users-put-users-userid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_users_put_users_userid_json_22_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-forms-users-delete-users-userid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_users_delete_users_userid_json_23_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-forms-ads-get-ads", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_ads_get_ads_json_29_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-forms-ads-get-ads-adid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_ads_get_ads_adid_json_30_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-forms-ads-post-ads", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_ads_post_ads_json_31_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-forms-ads-put-ads-adid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_ads_put_ads_adid_json_32_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-forms-ads-delete-ads-adid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_ads_delete_ads_adid_json_33_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0434\u043B\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-forms-props-get-props", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_props_get_props_json_39_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-forms-props-get-props-propid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_props_get_props_propid_json_40_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-forms-props-post-props", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_props_post_props_json_41_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-forms-props-put-props-propid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_props_put_props_propid_json_42_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "app-forms-props-delete-props-propid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_props_delete_props_propid_json_43_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u0420\u0430\u0437\u043D\u043E\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u0438 \u0442\u0438\u043F\u043E\u0432 \u0441\u0432-\u0432 \u0434\u043B\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-forms-kind-props-get-all", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_kind_props_get_all_json_49_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-forms-kind-props-get-one", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_kind_props_get_one_json_50_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "app-forms-kind-props-post", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_kind_props_post_json_51_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "app-forms-kind-props-put", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_kind_props_put_json_52_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "app-forms-kind-props-delete", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_kind_props_delete_json_53_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "app-forms-pages-ad-adid", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_pages_ad_adid_json_59_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "app-forms-pages-main", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_pages_main_json_60_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u041F\u043E\u0438\u0441\u043A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "app-forms-search-ads", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_search_ads_json_66_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u0422\u0435\u0441\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "app-forms-test", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("json", function PageAdmComponent_Template_app_forms_test_json_72_listener($event) {
            return ctx.jsonResult = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "pre", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "prettyJson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 1, ctx.jsonResult));
        }
      },
      directives: [_directives_toggle_active_directive__WEBPACK_IMPORTED_MODULE_2__["ToggleActiveDirective"], _forms_cats_forms_cats_get_cats_forms_cats_get_cats_component__WEBPACK_IMPORTED_MODULE_3__["FormsCatsGetCatsComponent"], _forms_cats_forms_cats_get_cats_catid_forms_cats_get_cats_catid_component__WEBPACK_IMPORTED_MODULE_4__["FormsCatsGetCatsCatidComponent"], _forms_cats_forms_cats_post_cats_forms_cats_post_cats_component__WEBPACK_IMPORTED_MODULE_5__["FormsCatsPostCatsComponent"], _forms_cats_forms_cats_put_cats_catid_forms_cats_put_cats_catid_component__WEBPACK_IMPORTED_MODULE_6__["FormsCatsPutCatsCatidComponent"], _forms_cats_forms_cats_delete_cats_catid_forms_cats_delete_cats_catid_component__WEBPACK_IMPORTED_MODULE_7__["FormsCatsDeleteCatsCatidComponent"], _forms_users_forms_users_get_users_forms_users_get_users_component__WEBPACK_IMPORTED_MODULE_8__["FormsUsersGetUsersComponent"], _forms_users_forms_users_get_users_userid_forms_users_get_users_userid_component__WEBPACK_IMPORTED_MODULE_9__["FormsUsersGetUsersUseridComponent"], _forms_users_forms_users_post_users_forms_users_post_users_component__WEBPACK_IMPORTED_MODULE_10__["FormsUsersPostUsersComponent"], _forms_users_forms_users_put_users_userid_forms_users_put_users_userid_component__WEBPACK_IMPORTED_MODULE_11__["FormsUsersPutUsersUseridComponent"], _forms_users_forms_users_delete_users_userid_forms_users_delete_users_userid_component__WEBPACK_IMPORTED_MODULE_12__["FormsUsersDeleteUsersUseridComponent"], _forms_ads_forms_ads_get_ads_forms_ads_get_ads_component__WEBPACK_IMPORTED_MODULE_13__["FormsAdsGetAdsComponent"], _forms_ads_forms_ads_get_ads_adid_forms_ads_get_ads_adid_component__WEBPACK_IMPORTED_MODULE_14__["FormsAdsGetAdsAdidComponent"], _forms_ads_forms_ads_post_ads_forms_ads_post_ads_component__WEBPACK_IMPORTED_MODULE_15__["FormsAdsPostAdsComponent"], _forms_ads_forms_ads_put_ads_adid_forms_ads_put_ads_adid_component__WEBPACK_IMPORTED_MODULE_16__["FormsAdsPutAdsAdidComponent"], _forms_ads_forms_ads_delete_ads_adid_forms_ads_delete_ads_adid_component__WEBPACK_IMPORTED_MODULE_17__["FormsAdsDeleteAdsAdidComponent"], _forms_props_forms_props_get_props_forms_props_get_props_component__WEBPACK_IMPORTED_MODULE_18__["FormsPropsGetPropsComponent"], _forms_props_forms_props_get_props_propid_forms_props_get_props_propid_component__WEBPACK_IMPORTED_MODULE_19__["FormsPropsGetPropsPropidComponent"], _forms_props_forms_props_post_props_forms_props_post_props_component__WEBPACK_IMPORTED_MODULE_20__["FormsPropsPostPropsComponent"], _forms_props_forms_props_put_props_propid_forms_props_put_props_propid_component__WEBPACK_IMPORTED_MODULE_21__["FormsPropsPutPropsPropidComponent"], _forms_props_forms_props_delete_props_propid_forms_props_delete_props_propid_component__WEBPACK_IMPORTED_MODULE_22__["FormsPropsDeletePropsPropidComponent"], _forms_kind_props_forms_kind_props_get_all_forms_kind_props_get_all_component__WEBPACK_IMPORTED_MODULE_23__["FormsKindPropsGetAllComponent"], _forms_kind_props_forms_kind_props_get_one_forms_kind_props_get_one_component__WEBPACK_IMPORTED_MODULE_24__["FormsKindPropsGetOneComponent"], _forms_kind_props_forms_kind_props_post_forms_kind_props_post_component__WEBPACK_IMPORTED_MODULE_25__["FormsKindPropsPostComponent"], _forms_kind_props_forms_kind_props_put_forms_kind_props_put_component__WEBPACK_IMPORTED_MODULE_26__["FormsKindPropsPutComponent"], _forms_kind_props_forms_kind_props_delete_forms_kind_props_delete_component__WEBPACK_IMPORTED_MODULE_27__["FormsKindPropsDeleteComponent"], _forms_pages_forms_pages_ad_adid_forms_pages_ad_adid_component__WEBPACK_IMPORTED_MODULE_28__["FormsPagesAdAdidComponent"], _forms_pages_forms_pages_main_forms_pages_main_component__WEBPACK_IMPORTED_MODULE_29__["FormsPagesMainComponent"], _forms_search_forms_search_ads_forms_search_ads_component__WEBPACK_IMPORTED_MODULE_30__["FormsSearchAdsComponent"], _forms_test_forms_test_component__WEBPACK_IMPORTED_MODULE_31__["FormsTestComponent"]],
      pipes: [_pipes_pretty_json_pipe__WEBPACK_IMPORTED_MODULE_32__["PrettyJsonPipe"]],
      styles: [".page-adm {\n  margin-top: 1em;\n}\n.page-adm_columns {\n  display: flex;\n}\n.page-adm_columns > * {\n  flex-basis: 100%;\n}\n.page-adm_columns > *:first-child {\n  box-sizing: border-box;\n  flex: 0 0 35em;\n  padding-right: 1em;\n  border-right: lightgray solid 0.0625em;\n}\n.page-adm_columns > *:not(:first-child) {\n  box-sizing: border-box;\n  padding: 1em;\n  margin-left: 1em;\n  background-color: #fafafa;\n}\n.page-adm_json-result {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  padding: 0;\n  margin: 0;\n}\n.page-adm_box .page-adm_box {\n  margin-top: 0.5em;\n}\n.page-adm_box > .page-adm_box_title {\n  box-sizing: border-box;\n  background-color: whitesmoke;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: lightgray solid 0.0625em;\n  font-weight: bold;\n}\n.page-adm_box > .page-adm_box_title.sx-active + .page-adm_box_body {\n  display: block;\n}\n.page-adm_box > .page-adm_box_body {\n  display: none;\n  box-sizing: border-box;\n  padding-left: 1em;\n}\n.page-adm_box > .page-adm_box_body > .page-adm_box {\n  margin-top: 0.5em;\n}\n.page-adm_box > .page-adm_box_body .page-adm_box_title {\n  background-color: #f8f8f8;\n}\n.page-adm_box .form {\n  padding: 1em;\n  border: lightgray solid 1px;\n  border-top: 0;\n}\n.page-adm_list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.page-adm_list > li + li {\n  margin-top: 0.5em;\n}\n.page-adm_prop-full {\n  padding: 0.5em;\n  background-color: floralwhite;\n}\n.page-adm_prop-full_title {\n  font-weight: bold;\n}\n.page-adm_prop-full_input {\n  margin-top: 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0QvbG9jYWxob3N0L2FsdGFpci9hbHRhaXItZnJvbnQvc3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL3BhZ2UtYWRtL3BhZ2UtYWRtLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL3BhZ2UtYWRtL3BhZ2UtYWRtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQ0RKO0FER0k7RUFDSSxhQUFBO0FDRFI7QURHUTtFQUNJLGdCQUFBO0FDRFo7QURHWTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUNEaEI7QURJWTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNGaEI7QURPSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0xSO0FEU1E7RUFDSSxpQkFBQTtBQ1BaO0FEVVE7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQ1JaO0FEV1E7RUFDSSxjQUFBO0FDVFo7QURZUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDVlo7QURhUTtFQUNJLGlCQUFBO0FDWFo7QURjUTtFQUNJLHlCQUFBO0FDWlo7QURqQkk7RUFpQ1EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ2JaO0FEaUJJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2ZSO0FEaUJRO0VBQ0ksaUJBQUE7QUNmWjtBRG1CSTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtBQ2pCUjtBRG1CUTtFQUNJLGlCQUFBO0FDakJaO0FEb0JRO0VBQ0ksaUJBQUE7QUNsQloiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbS9jb21wb25lbnRzL3BhZ2UtYWRtL3BhZ2UtYWRtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Nzc192YXJpYWJsZXNcIjtcblxuLnBhZ2UtYWRtIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07IC8vIDE2cHggLyAxNnB4XG5cbiAgICAmX2NvbHVtbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDM1ZW07IC8vIDU2MHB4IC8gMTZweFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTsgLy8gMTZweCAvIDE2cHhcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IGxpZ2h0Z3JheSBzb2xpZCBAMXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTsgLy8gMTZweCAvIDE2cHhcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtOyAvLyAxNnB4IC8gMTZweFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4od2hpdGVzbW9rZSwgMiUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9qc29uLXJlc3VsdCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJl9ib3gge1xuICAgICAgICAmICYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAmID4gJl90aXRsZSB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTsgLy8gOHB4IDE2cHggLyAxNnB4XG4gICAgICAgICAgICBib3JkZXI6IGxpZ2h0Z3JheSBzb2xpZCBAMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAmID4gJl90aXRsZS5zeC1hY3RpdmUgKyAmX2JvZHkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmID4gJl9ib2R5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07IC8vIDE2cHggLyAxNnB4XG4gICAgICAgIH1cblxuICAgICAgICAmID4gJl9ib2R5ID4gJiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTsgLy8gOHB4IC8gMTZweFxuICAgICAgICB9XG5cbiAgICAgICAgJiA+ICZfYm9keSAmX3RpdGxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4od2hpdGVzbW9rZSwgMSUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgICAgcGFkZGluZzogMWVtOyAvLyAxNnB4IC8gMTZweFxuICAgICAgICAgICAgYm9yZGVyOiBsaWdodGdyYXkgc29saWQgMXB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAmID4gbGkgKyBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTsgLy8gOHB4IC8gMTZweFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9wcm9wLWZ1bGwge1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XG5cbiAgICAgICAgJl90aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfaW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucGFnZS1hZG0ge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4ucGFnZS1hZG1fY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZS1hZG1fY29sdW1ucyA+ICoge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xufVxuLnBhZ2UtYWRtX2NvbHVtbnMgPiAqOmZpcnN0LWNoaWxkIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleDogMCAwIDM1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJpZ2h0OiBsaWdodGdyYXkgc29saWQgMC4wNjI1ZW07XG59XG4ucGFnZS1hZG1fY29sdW1ucyA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4ucGFnZS1hZG1fanNvbi1yZXN1bHQge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLnBhZ2UtYWRtX2JveCAucGFnZS1hZG1fYm94IHtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG4ucGFnZS1hZG1fYm94ID4gLnBhZ2UtYWRtX2JveF90aXRsZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXI6IGxpZ2h0Z3JheSBzb2xpZCAwLjA2MjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFnZS1hZG1fYm94ID4gLnBhZ2UtYWRtX2JveF90aXRsZS5zeC1hY3RpdmUgKyAucGFnZS1hZG1fYm94X2JvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYWdlLWFkbV9ib3ggPiAucGFnZS1hZG1fYm94X2JvZHkge1xuICBkaXNwbGF5OiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cbi5wYWdlLWFkbV9ib3ggPiAucGFnZS1hZG1fYm94X2JvZHkgPiAucGFnZS1hZG1fYm94IHtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG4ucGFnZS1hZG1fYm94ID4gLnBhZ2UtYWRtX2JveF9ib2R5IC5wYWdlLWFkbV9ib3hfdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuLnBhZ2UtYWRtX2JveCAuZm9ybSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiBsaWdodGdyYXkgc29saWQgMXB4O1xuICBib3JkZXItdG9wOiAwO1xufVxuLnBhZ2UtYWRtX2xpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucGFnZS1hZG1fbGlzdCA+IGxpICsgbGkge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cbi5wYWdlLWFkbV9wcm9wLWZ1bGwge1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XG59XG4ucGFnZS1hZG1fcHJvcC1mdWxsX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFnZS1hZG1fcHJvcC1mdWxsX2lucHV0IHtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG4iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageAdmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-adm',
          templateUrl: './page-adm.component.html',
          styleUrls: ['./page-adm.component.less'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_manager_service__WEBPACK_IMPORTED_MODULE_1__["ManagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/adm/pipes/pretty-json.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/adm/pipes/pretty-json.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: PrettyJsonPipe */

  /***/
  function srcAppModulesAdmPipesPrettyJsonPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrettyJsonPipe", function () {
      return PrettyJsonPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PrettyJsonPipe = /*#__PURE__*/function () {
      function PrettyJsonPipe() {
        _classCallCheck(this, PrettyJsonPipe);
      }

      _createClass(PrettyJsonPipe, [{
        key: "transform",
        value: function transform(value) {
          var res = JSON.stringify(value, null, '    ');
          return res;
        }
      }]);

      return PrettyJsonPipe;
    }();

    PrettyJsonPipe.ɵfac = function PrettyJsonPipe_Factory(t) {
      return new (t || PrettyJsonPipe)();
    };

    PrettyJsonPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "prettyJson",
      type: PrettyJsonPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrettyJsonPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'prettyJson'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/kind-props.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/kind-props.service.ts ***!
    \************************************************/

  /*! exports provided: KindPropsService */

  /***/
  function srcAppServicesKindPropsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KindPropsService", function () {
      return KindPropsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var KindPropsService = /*#__PURE__*/function () {
      function KindPropsService(http) {
        _classCallCheck(this, KindPropsService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
      }

      _createClass(KindPropsService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(this.url, "/kind_props"));
        }
      }, {
        key: "getOne",
        value: function getOne(elId) {
          return this.http.get("".concat(this.url, "/kind_props/").concat(elId));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.http.post("".concat(this.url, "/kind_props"), data);
        }
      }, {
        key: "update",
        value: function update(elId, data) {
          return this.http.put("".concat(this.url, "/kind_props/").concat(elId), data);
        }
      }, {
        key: "delete",
        value: function _delete(elId) {
          return this.http["delete"]("".concat(this.url, "/kind_props/").concat(elId));
        }
      }]);

      return KindPropsService;
    }();

    KindPropsService.ɵfac = function KindPropsService_Factory(t) {
      return new (t || KindPropsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    KindPropsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KindPropsService,
      factory: KindPropsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KindPropsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/test.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/test.service.ts ***!
    \******************************************/

  /*! exports provided: TestService */

  /***/
  function srcAppServicesTestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestService", function () {
      return TestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TestService = /*#__PURE__*/function () {
      function TestService(http) {
        _classCallCheck(this, TestService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
      }

      _createClass(TestService, [{
        key: "request",
        value: function request() {
          return this.http.get("".concat(this.url, "/test"));
        }
      }]);

      return TestService;
    }();

    TestService.ɵfac = function TestService_Factory(t) {
      return new (t || TestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TestService,
      factory: TestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get("".concat(this.url, "/users"));
        }
      }, {
        key: "getUser",
        value: function getUser(userId) {
          return this.http.get("".concat(this.url, "/users/").concat(userId));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.http.post("".concat(this.url, "/users"), data);
        }
      }, {
        key: "update",
        value: function update(userId, data) {
          return this.http.put("".concat(this.url, "/users/").concat(userId), data);
        }
      }, {
        key: "delete",
        value: function _delete(userId) {
          return this.http["delete"]("".concat(this.url, "/users/").concat(userId));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-adm-adm-module-es5.js.map