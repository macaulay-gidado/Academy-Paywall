(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Auth/SignIn.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Auth/SignIn.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: 'SigninPage',
  metaInfo: function metaInfo() {
    return {
      title: "Signin",
      titleTemplate: '%s - AcadaApp'
    };
  },
  props: {
    errors: Object
  },
  data: function data() {
    return {
      form: {},
      ui: {
        loading: false
      }
    };
  },
  computed: {
    status: function status() {
      return this.$page.status;
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.ui.loading = true;
                _context.next = 3;
                return _this.$inertia.post(_this.route('signin.magic.link'), _this.form);

              case 3:
                _this.ui.loading = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Auth/SignIn.vue?vue&type=template&id=0b3f715c&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Auth/SignIn.vue?vue&type=template&id=0b3f715c& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("v-app", { attrs: { light: "" } }, [
    _c(
      "div",
      {
        staticClass:
          "d-flex align-items-center border-top border-top-5 border-primary bg-gray-700"
      },
      [
        _c("div", { staticClass: "container mt-lg-5" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c(
              "div",
              { staticClass: "col-12 col-sm-9 col-md-6 col-lg-4 my-5" },
              [
                _c("div", { staticClass: "text-center" }, [
                  _c(
                    "h1",
                    [
                      _c(
                        "inertia-link",
                        {
                          staticClass: "prevent-default",
                          attrs: { href: _vm.route("home") }
                        },
                        [
                          _vm._v(
                            "\r\n                                    AcadaApp\r\n                                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-card",
                  { staticClass: "py-5", attrs: { outlined: "" } },
                  [
                    _c(
                      "v-card-text",
                      [
                        _c("h2", { staticClass: "text-center my-3" }, [
                          _vm._v(
                            "\r\n                                    Sign in\r\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _vm.status
                          ? _c(
                              "v-alert",
                              {
                                attrs: {
                                  icon: "info",
                                  prominent: "",
                                  text: "",
                                  type: "info"
                                }
                              },
                              [
                                _vm._v(
                                  "\r\n                                   " +
                                    _vm._s(_vm.status) +
                                    "\r\n                                "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.submit($event)
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "tab-content py-3" },
                              [
                                _c("x-input", {
                                  attrs: {
                                    errors: _vm.errors,
                                    name: "email",
                                    type: "email",
                                    label: "Email"
                                  },
                                  model: {
                                    value: _vm.form.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "email", $$v)
                                    },
                                    expression: "form.email"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "x-button",
                                  {
                                    staticClass: "primary",
                                    attrs: {
                                      loading: _vm.ui.loading,
                                      type: "submit",
                                      dark: "",
                                      color: "accent-4",
                                      block: ""
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                            Sign in\r\n                                        "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Auth/SignIn.vue":
/*!*********************************************!*\
  !*** ./resources/js/Domain/Auth/SignIn.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignIn_vue_vue_type_template_id_0b3f715c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn.vue?vue&type=template&id=0b3f715c& */ "./resources/js/Domain/Auth/SignIn.vue?vue&type=template&id=0b3f715c&");
/* harmony import */ var _SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Auth/SignIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignIn_vue_vue_type_template_id_0b3f715c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignIn_vue_vue_type_template_id_0b3f715c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Auth/SignIn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Auth/SignIn.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Domain/Auth/SignIn.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignIn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Auth/SignIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Auth/SignIn.vue?vue&type=template&id=0b3f715c&":
/*!****************************************************************************!*\
  !*** ./resources/js/Domain/Auth/SignIn.vue?vue&type=template&id=0b3f715c& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_0b3f715c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignIn.vue?vue&type=template&id=0b3f715c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Auth/SignIn.vue?vue&type=template&id=0b3f715c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_0b3f715c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_0b3f715c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);