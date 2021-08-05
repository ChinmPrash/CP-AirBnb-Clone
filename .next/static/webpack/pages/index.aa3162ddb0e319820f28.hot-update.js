self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Header */ "./Components/Header.js");
/* harmony import */ var _Components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Banner */ "./Components/Banner.js");
/* harmony import */ var _Components_SmallCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/SmallCard */ "./Components/SmallCard.js");
/* harmony import */ var _Components_MediumCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/MediumCard */ "./Components/MediumCard.js");
/* harmony import */ var _Components_LargeCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/LargeCard */ "./Components/LargeCard.js");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Footer */ "./Components/Footer.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "F:\\Airbnb\\pages\\index.js";







var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var exploreData = _ref.exploreData,
      cardsData = _ref.cardsData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Airbnb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Banner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-7xl mx-auto px-8 sm:px-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "pt-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-4xl font-semibold pb-5",
          children: "Explore Nearby"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid cols-3 xl:grid-cols-4",
          children: exploreData === null || exploreData === void 0 ? void 0 : exploreData.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_SmallCard__WEBPACK_IMPORTED_MODULE_4__.default, {
              img: item.img,
              distance: item.distance,
              location: item.location
            }, item.img, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-4xl font-semibold pb-5",
          children: "Live Anywhere"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex space-x-3 overflow-scroll scrollbar-hide p-3",
          children: cardsData === null || cardsData === void 0 ? void 0 : cardsData.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MediumCard__WEBPACK_IMPORTED_MODULE_5__.default, {
              img: item.img,
              title: item.title
            }, item.img, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_LargeCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        img: "https://links.papareact.com/4cj",
        title: "The Greatest Outdoors",
        description: "Wishlists Curated By Airbnb",
        button: "Get Inspired"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImV4cGxvcmVEYXRhIiwiY2FyZHNEYXRhIiwibWFwIiwiaXRlbSIsImltZyIsImRpc3RhbmNlIiwibG9jYXRpb24iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxPQUEwQztBQUFBOztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVFFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVVFO0FBQU0sZUFBUyxFQUFDLGlDQUFoQjtBQUFBLDhCQUVBO0FBQVMsaUJBQVMsRUFBQyxNQUFuQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVDO0FBQUssbUJBQVMsRUFBQywrREFBZjtBQUFBLG9CQUNDRCxXQURELGFBQ0NBLFdBREQsdUJBQ0NBLFdBQVcsQ0FBRUUsR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsZ0NBQ2IsOERBQUMsMERBQUQ7QUFDQSxpQkFBRyxFQUFFQSxJQUFJLENBQUNDLEdBRFY7QUFDZSxzQkFBUSxFQUFFRCxJQUFJLENBQUNFLFFBRDlCO0FBQ3dDLHNCQUFRLEVBQUVGLElBQUksQ0FBQ0c7QUFEdkQsZUFBZ0JILElBQUksQ0FBQ0MsR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWpCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQVlFO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLG1EQUFmO0FBQUEsb0JBRUVILFNBRkYsYUFFRUEsU0FGRix1QkFFRUEsU0FBUyxDQUFFQyxHQUFYLENBQWUsVUFBQUMsSUFBSTtBQUFBLGdDQUNqQiw4REFBQywyREFBRDtBQUEyQixpQkFBRyxFQUFFQSxJQUFJLENBQUNDLEdBQXJDO0FBQTBDLG1CQUFLLEVBQUVELElBQUksQ0FBQ0k7QUFBdEQsZUFBaUJKLElBQUksQ0FBQ0MsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEaUI7QUFBQSxXQUFuQjtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUF3QkUsOERBQUMsMERBQUQ7QUFBVyxXQUFHLEVBQUMsaUNBQWY7QUFBaUQsYUFBSyxFQUFDLHVCQUF2RDtBQUErRSxtQkFBVyxFQUFDLDZCQUEzRjtBQUF5SCxjQUFNLEVBQUM7QUFBaEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQXNDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkNEO0tBNUN1QkwsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYTMxNjJkZGIwZTMxOTgyMGYyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgU21hbGxDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvU21hbGxDYXJkJ1xuaW1wb3J0IE1lZGl1bUNhcmQgZnJvbSAnLi4vQ29tcG9uZW50cy9NZWRpdW1DYXJkJ1xuaW1wb3J0IExhcmdlQ2FyZCBmcm9tICcuLi9Db21wb25lbnRzL0xhcmdlQ2FyZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Gb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBleHBsb3JlRGF0YSwgY2FyZHNEYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BaXJibmI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPEJhbm5lciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC04IHNtOnB4LTE2XCI+XG4gICAgICBcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgcGItNVwiPkV4cGxvcmUgTmVhcmJ5PC9oMj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZCBjb2xzLTMgeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICB7ZXhwbG9yZURhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPFNtYWxsQ2FyZCBrZXk9e2l0ZW0uaW1nfVxuICAgICAgICAgICAgaW1nPXtpdGVtLmltZ30gZGlzdGFuY2U9e2l0ZW0uZGlzdGFuY2V9IGxvY2F0aW9uPXtpdGVtLmxvY2F0aW9ufSAvPlxuICAgICAgICApKX1cbiAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHBiLTVcIj5MaXZlIEFueXdoZXJlPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0zIG92ZXJmbG93LXNjcm9sbCBzY3JvbGxiYXItaGlkZSBwLTNcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXJkc0RhdGE/Lm1hcChpdGVtID0+IFxuICAgICAgICAgICAgICA8TWVkaXVtQ2FyZCBrZXk9e2l0ZW0uaW1nfSBpbWc9e2l0ZW0uaW1nfSB0aXRsZT17aXRlbS50aXRsZX0vPilcbiAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgPExhcmdlQ2FyZCBpbWc9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vNGNqXCIgdGl0bGU9XCJUaGUgR3JlYXRlc3QgT3V0ZG9vcnNcIiBkZXNjcmlwdGlvbj1cIldpc2hsaXN0cyBDdXJhdGVkIEJ5IEFpcmJuYlwiIGJ1dHRvbj1cIkdldCBJbnNwaXJlZFwiLz5cblxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBleHBsb3JlRGF0YSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3B5cFwiKVxuICAudGhlbihcbiAgICAocmVzKSA9PiByZXMuanNvbigpKVxuXG4gIGNvbnN0IGNhcmRzRGF0YSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3pwMVwiKVxuICAudGhlbihyZXMgPT5cbiAgICByZXMuanNvbigpKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGV4cGxvcmVEYXRhLFxuICAgICAgY2FyZHNEYXRhXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9