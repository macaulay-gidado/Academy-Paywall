(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LayoutApp',
  data: function data() {
    return {
      active: 0,
      drawer: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['auth', 'authenticated', 'navDrawer'])),
  methods: {
    navItems: function navItems() {
      if (this.authenticated && this.auth.profile_complete) {
        return [// {
        //   route: 'home',
        //   title: 'Home',
        //   icon: 'home',
        // },
        {
          route: 'account.show',
          param: {
            account: this.auth.username
          },
          title: 'Account',
          icon: 'account_circle'
        }, {
          route: 'account.edit',
          param: {
            account: this.auth.username
          },
          title: 'Edit Account',
          icon: 'edit'
        }, {
          route: 'account.course.create',
          param: {
            account: this.auth.username
          },
          title: 'New course',
          icon: 'add_circle'
        }, {
          route: 'account.course.list',
          param: {
            account: this.auth.username
          },
          title: 'Courses',
          icon: 'library_books'
        }, {
          route: 'account.student.list',
          param: {
            account: this.auth.username
          },
          title: 'Students',
          icon: 'people'
        }, {
          route: 'account.payment.gateway',
          param: {
            account: this.auth.username
          },
          title: 'Payment',
          icon: 'local_atm'
        }, {
          route: 'account.subscription.show',
          param: {
            account: this.auth.username
          },
          title: 'Subscription',
          icon: 'account_balance'
        }];
      } else {
        return [{
          route: 'home',
          title: 'Home',
          icon: 'home'
        }];
      }
    },
    signout: function signout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$inertia.post(route('signout'));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.active = this.navItems().findIndex(function (item) {
      return item.route == _this2.route().current();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "" },
          scopedSlots: _vm._u(
            [
              _vm.auth.profile_complete
                ? {
                    key: "prepend",
                    fn: function() {
                      return [
                        _c(
                          "v-list-item",
                          [
                            _c(
                              "v-list-item-avatar",
                              [
                                _c("avatar", {
                                  attrs: {
                                    src: _vm.auth.avatar,
                                    color: _vm.auth.theme_color
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", {
                                  domProps: { innerHTML: _vm._s(_vm.auth.name) }
                                }),
                                _vm._v(" "),
                                _c("v-list-item-subtitle", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.auth.at_username)
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr")
                      ]
                    },
                    proxy: true
                  }
                : null,
              {
                key: "append",
                fn: function() {
                  return [
                    _c(
                      "div",
                      { staticClass: "pa-2" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "red",
                            attrs: { block: "", dark: "" },
                            on: { click: _vm.signout }
                          },
                          [_vm._v("Signout")]
                        )
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              }
            ],
            null,
            true
          ),
          model: {
            value: _vm.$store.state.navDrawer,
            callback: function($$v) {
              _vm.$set(_vm.$store.state, "navDrawer", $$v)
            },
            expression: "$store.state.navDrawer"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-item-group",
                {
                  model: {
                    value: _vm.active,
                    callback: function($$v) {
                      _vm.active = $$v
                    },
                    expression: "active"
                  }
                },
                _vm._l(_vm.navItems(), function(item, i) {
                  return _c(
                    "inertia-link",
                    {
                      key: i,
                      staticClass: "prevent-default",
                      attrs: { href: _vm.route(item.route, item.param) }
                    },
                    [
                      _c(
                        "v-list-item",
                        {
                          attrs: {
                            color: _vm.authenticated
                              ? _vm.auth.theme_color
                              : "primary"
                          }
                        },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", {
                                domProps: { textContent: _vm._s(item.icon) }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", {
                                domProps: { textContent: _vm._s(item.title) }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            app: "",
            color: _vm.authenticated ? _vm.auth.theme_color : "primary",
            dark: ""
          }
        },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                _vm.$store.state.navDrawer = !_vm.$store.state.navDrawer
              }
            }
          }),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass: "white--text",
              staticStyle: { "text-decoration": "none" },
              attrs: { href: _vm.route("home") }
            },
            [
              _c("v-toolbar-title", { attrs: { dark: "" } }, [
                _vm._v("AcadaApp")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.authenticated
            ? _c(
                "inertia-link",
                {
                  staticClass: "prevent-default mx-1",
                  attrs: {
                    href: _vm.auth.username
                      ? _vm.route("account.show", {
                          account: _vm.auth.username
                        })
                      : "#"
                  }
                },
                [
                  _c("avatar", {
                    attrs: {
                      src: _vm.auth.avatar,
                      color: _vm.auth.theme_color,
                      size: "40"
                    }
                  })
                ],
                1
              )
            : !_vm.route().current("signin")
            ? _c(
                "inertia-link",
                { attrs: { href: _vm.route("signin") } },
                [
                  _c("v-btn", { attrs: { dark: "", color: "primary" } }, [
                    _vm._v("Sign in")
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [_c("v-container", { attrs: { fluid: "" } }, [_vm._t("default")], 2)],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { app: "" } },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("small", [
            _vm._v("Need help ? "),
            _c("a", { attrs: { href: "mailto: support@acadaapp.com" } }, [
              _vm._v("support@acadaapp.com")
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/layouts/App.vue":
/*!**************************************!*\
  !*** ./resources/js/layouts/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9087fe26& */ "./resources/js/layouts/App.vue?vue&type=template&id=9087fe26&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/layouts/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/App.vue?vue&type=template&id=9087fe26&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/App.vue?vue&type=template&id=9087fe26& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9087fe26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);