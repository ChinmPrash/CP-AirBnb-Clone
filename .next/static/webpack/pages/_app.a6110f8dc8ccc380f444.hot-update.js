self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_Airbnb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @badrap/bar-of-progress */ "./node_modules/@badrap/bar-of-progress/dist/index.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\Airbnb\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_Airbnb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var progress = new _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_5__.default({
  size: 4,
  color: "#FE95E",
  className: "z-50",
  delay: 100
});
next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__.default.events.on('routeChangeStart', progress.start);
next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__.default.events.on('routeChangeComplete', progress.finish);
next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__.default.events.on('routeCHangeError', progress.finish);

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJwcm9ncmVzcyIsIlByb2dyZXNzQmFyIiwic2l6ZSIsImNvbG9yIiwiY2xhc3NOYW1lIiwiZGVsYXkiLCJSb3V0ZXIiLCJzdGFydCIsImZpbmlzaCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxRQUFRLEdBQUcsSUFBSUMsNERBQUosQ0FBZ0I7QUFDL0JDLE1BQUksRUFBRSxDQUR5QjtBQUUvQkMsT0FBSyxFQUFFLFFBRndCO0FBRy9CQyxXQUFTLEVBQUUsTUFIb0I7QUFJL0JDLE9BQUssRUFBQztBQUp5QixDQUFoQixDQUFqQjtBQU9BQyxrRkFBQSxDQUFpQixrQkFBakIsRUFBcUNOLFFBQVEsQ0FBQ08sS0FBOUM7QUFDQUQsa0ZBQUEsQ0FBaUIscUJBQWpCLEVBQXdDTixRQUFRLENBQUNRLE1BQWpEO0FBQ0FGLGtGQUFBLENBQWlCLGtCQUFqQixFQUFxQ04sUUFBUSxDQUFDUSxNQUE5Qzs7QUFFQSxTQUFTQyxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2QyxzQkFBTyw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztLQUZRRixLO0FBS1QsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNjExMGY4ZGM4Y2NjMzgwZjQ0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlcidcblxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJAYmFkcmFwL2Jhci1vZi1wcm9ncmVzc1wiXG5cbmNvbnN0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzQmFyKHtcbiAgc2l6ZTogNCxcbiAgY29sb3I6IFwiI0ZFOTVFXCIsXG4gIGNsYXNzTmFtZTogXCJ6LTUwXCIsXG4gIGRlbGF5OjEwMFxufSlcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHByb2dyZXNzLnN0YXJ0KVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHByb2dyZXNzLmZpbmlzaClcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ0hhbmdlRXJyb3InLCBwcm9ncmVzcy5maW5pc2gpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9