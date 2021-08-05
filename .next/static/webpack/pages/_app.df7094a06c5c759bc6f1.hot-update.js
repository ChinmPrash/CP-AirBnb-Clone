self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

var customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = function _default() {
  var customRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (path) {
    var keys = [];
    var matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    var matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return function (pathname, params) {
      var res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;

            // unnamed params should be removed as they
            // are not allowed to be used in the destination
            if (typeof key.name === 'number') {
              delete res.params[key.name];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;
exports.getSafeParamName = void 0;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // ensure only a-zA-Z are used for param names for proper interpolating
// with path-to-regexp


var getSafeParamName = function getSafeParamName(paramName) {
  var newParamName = '';

  for (var i = 0; i < paramName.length; i++) {
    var charCode = paramName.charCodeAt(i);

    if (charCode > 64 && charCode < 91 || // A-Z
    charCode > 96 && charCode < 123 // a-z
    ) {
        newParamName += paramName[i];
      }
  }

  return newParamName;
};

exports.getSafeParamName = getSafeParamName;

function matchHas(req, has, query) {
  var params = {};
  var initialQueryValues = [];

  if (false) {}

  if (true) {
    initialQueryValues = Array.from(new URLSearchParams(location.search).values());
  }

  var allMatch = has.every(function (hasItem) {
    var value;
    var key = hasItem.key;

    switch (hasItem.type) {
      case 'header':
        {
          key = key.toLowerCase();
          value = req.headers[key];
          break;
        }

      case 'cookie':
        {
          value = req.cookies[hasItem.key];
          break;
        }

      case 'query':
        {
          // preserve initial encoding of query values
          value = query[key];

          if (initialQueryValues.includes(value || '')) {
            value = encodeURIComponent(value);
          }

          break;
        }

      case 'host':
        {
          var _ref = (req == null ? void 0 : req.headers) || {},
              host = _ref.host; // remove port from host if present


          var hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
          value = hostname;
          break;
        }

      default:
        {
          break;
        }
    }

    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      var matcher = new RegExp("^".concat(hasItem.value, "$"));
      var matches = value.match(matcher);

      if (matches) {
        if (matches.groups) {
          Object.keys(matches.groups).forEach(function (groupKey) {
            params[groupKey] = matches.groups[groupKey];
          });
        } else if (hasItem.type === 'host' && matches[0]) {
          params.host = matches[0];
        }

        return true;
      }
    }

    return false;
  });

  if (allMatch) {
    return params;
  }

  return false;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (value.includes(":".concat(key))) {
      value = value.replace(new RegExp(":".concat(key, "\\*"), 'g'), ":".concat(key, "--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(key, "\\?"), 'g'), ":".concat(key, "--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(key, "\\+"), 'g'), ":".concat(key, "--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(key, "(?!\\w)"), 'g'), "--ESCAPED_PARAM_COLON".concat(key));
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile("/".concat(value), {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  var parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  var hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    var _URL = new URL(destination),
        pathname = _URL.pathname,
        searchParams = _URL.searchParams,
        hash = _URL.hash,
        hostname = _URL.hostname,
        port = _URL.port,
        protocol = _URL.protocol,
        search = _URL.search,
        href = _URL.href;

    parsedDestination = {
      pathname: pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash: hash,
      protocol: protocol,
      hostname: hostname,
      port: port,
      search: search,
      href: href
    };
  }

  var destQuery = parsedDestination.query;
  var destPath = "".concat(parsedDestination.pathname).concat(parsedDestination.hash || '');
  var destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  var destPathParams = destPathParamKeys.map(function (key) {
    return key.name;
  });
  var destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  var newUrl; // update any params in query values

  for (var _i2 = 0, _Object$entries = Object.entries(destQuery); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        strOrArray = _Object$entries$_i[1];

    var value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  var paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(function (name) {
      return name !== 'nextInternalLocale';
    });
  }

  if (appendParamsToQuery && !paramKeys.some(function (key) {
    return destPathParams.includes(key);
  })) {
    var _iterator = _createForOfIteratorHelper(paramKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _key = _step.value;

        if (!(_key in destQuery)) {
          destQuery[_key] = params[_key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  try {
    newUrl = destinationCompiler(params);

    var _newUrl$split = newUrl.split('#'),
        _newUrl$split2 = _slicedToArray(_newUrl$split, 2),
        _pathname = _newUrl$split2[0],
        _hash = _newUrl$split2[1];

    parsedDestination.pathname = _pathname;
    parsedDestination.hash = "".concat(_hash ? '#' : '').concat(_hash || '');
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl: newUrl,
    parsedDestination: parsedDestination
  };
}

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


/***/ }),

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
next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__.default.events.on('routeChampionStart', progress.start);

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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


/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/router.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/router.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=exports.route=void 0;var _pathMatch=_interopRequireDefault(__webpack_require__(/*! ../lib/router/utils/path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));var _normalizeTrailingSlash=__webpack_require__(/*! ../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");var _normalizeLocalePath=__webpack_require__(/*! ../lib/i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");var _prepareDestination=__webpack_require__(/*! ../lib/router/utils/prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const route=(0,_pathMatch.default)();exports.route=route;const customRouteTypes=new Set(['rewrite','redirect','header']);function replaceBasePath(basePath,pathname){// If replace ends up replacing the full url it'll be `undefined`, meaning we have to default it to `/`
return pathname.replace(basePath,'')||'/';}class Router{constructor({basePath='',headers=[],fsRoutes=[],rewrites={beforeFiles:[],afterFiles:[],fallback:[]},redirects=[],catchAllRoute,dynamicRoutes=[],pageChecker,useFileSystemPublicRoutes,locales=[]}){this.basePath=void 0;this.headers=void 0;this.fsRoutes=void 0;this.redirects=void 0;this.rewrites=void 0;this.catchAllRoute=void 0;this.pageChecker=void 0;this.dynamicRoutes=void 0;this.useFileSystemPublicRoutes=void 0;this.locales=void 0;this.basePath=basePath;this.headers=headers;this.fsRoutes=fsRoutes;this.rewrites=rewrites;this.redirects=redirects;this.pageChecker=pageChecker;this.catchAllRoute=catchAllRoute;this.dynamicRoutes=dynamicRoutes;this.useFileSystemPublicRoutes=useFileSystemPublicRoutes;this.locales=locales;}setDynamicRoutes(routes=[]){this.dynamicRoutes=routes;}addFsRoute(fsRoute){this.fsRoutes.unshift(fsRoute);}async execute(req,res,parsedUrl){// memoize page check calls so we don't duplicate checks for pages
const pageChecks={};const memoizedPageChecker=async p=>{p=(0,_normalizeLocalePath.normalizeLocalePath)(p,this.locales).pathname;if(pageChecks[p]){return pageChecks[p];}const result=this.pageChecker(p);pageChecks[p]=result;return result;};let parsedUrlUpdated=parsedUrl;const applyCheckTrue=async checkParsedUrl=>{const originalFsPathname=checkParsedUrl.pathname;const fsPathname=replaceBasePath(this.basePath,originalFsPathname);for(const fsRoute of this.fsRoutes){const fsParams=fsRoute.match(fsPathname);if(fsParams){checkParsedUrl.pathname=fsPathname;const fsResult=await fsRoute.fn(req,res,fsParams,checkParsedUrl);if(fsResult.finished){return true;}checkParsedUrl.pathname=originalFsPathname;}}let matchedPage=await memoizedPageChecker(fsPathname);// If we didn't match a page check dynamic routes
if(!matchedPage){const normalizedFsPathname=(0,_normalizeLocalePath.normalizeLocalePath)(fsPathname,this.locales).pathname;for(const dynamicRoute of this.dynamicRoutes){if(dynamicRoute.match(normalizedFsPathname)){matchedPage=true;}}}// Matched a page or dynamic route so render it using catchAllRoute
if(matchedPage){const pageParams=this.catchAllRoute.match(checkParsedUrl.pathname);checkParsedUrl.pathname=fsPathname;checkParsedUrl.query._nextBubbleNoFallback='1';const result=await this.catchAllRoute.fn(req,res,pageParams,checkParsedUrl);return result.finished;}};/*
      Desired routes order
      - headers
      - redirects
      - Check filesystem (including pages), if nothing found continue
      - User rewrites (checking filesystem and pages each match)
    */const allRoutes=[...this.headers,...this.redirects,...this.rewrites.beforeFiles,...this.fsRoutes,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[{type:'route',name:'page checker',requireBasePath:false,match:route('/:path*'),fn:async(checkerReq,checkerRes,params,parsedCheckerUrl)=>{let{pathname}=parsedCheckerUrl;pathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname||'/');if(!pathname){return{finished:false};}if(await memoizedPageChecker(pathname)){return this.catchAllRoute.fn(checkerReq,checkerRes,params,parsedCheckerUrl);}return{finished:false};}}]:[]),...this.rewrites.afterFiles,...(this.rewrites.fallback.length?[{type:'route',name:'dynamic route/page check',requireBasePath:false,match:route('/:path*'),fn:async(_checkerReq,_checkerRes,_params,parsedCheckerUrl)=>{return{finished:await applyCheckTrue(parsedCheckerUrl)};}},...this.rewrites.fallback]:[]),// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[this.catchAllRoute]:[])];const originallyHadBasePath=!this.basePath||req._nextHadBasePath;for(const testRoute of allRoutes){// if basePath is being used, the basePath will still be included
// in the pathname here to allow custom-routes to require containing
// it or not, filesystem routes and pages must always include the basePath
// if it is set
let currentPathname=parsedUrlUpdated.pathname;const originalPathname=currentPathname;const requireBasePath=testRoute.requireBasePath!==false;const isCustomRoute=customRouteTypes.has(testRoute.type);const isPublicFolderCatchall=testRoute.name==='public folder catchall';const keepBasePath=isCustomRoute||isPublicFolderCatchall;const keepLocale=isCustomRoute;const currentPathnameNoBasePath=replaceBasePath(this.basePath,currentPathname);if(!keepBasePath){currentPathname=currentPathnameNoBasePath;}const localePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(currentPathnameNoBasePath,this.locales);const activeBasePath=keepBasePath?this.basePath:'';if(keepLocale){if(!testRoute.internal&&parsedUrl.query.__nextLocale&&!localePathResult.detectedLocale){currentPathname=`${activeBasePath}/${parsedUrl.query.__nextLocale}${currentPathnameNoBasePath==='/'?'':currentPathnameNoBasePath}`;}if(req.__nextHadTrailingSlash&&!currentPathname.endsWith('/')){currentPathname+='/';}}else{currentPathname=`${req._nextHadBasePath?activeBasePath:''}${activeBasePath&&localePathResult.pathname==='/'?'':localePathResult.pathname}`;}let newParams=testRoute.match(currentPathname);if(testRoute.has&&newParams){const hasParams=(0,_prepareDestination.matchHas)(req,testRoute.has,parsedUrlUpdated.query);if(hasParams){Object.assign(newParams,hasParams);}else{newParams=false;}}// Check if the match function matched
if(newParams){// since we require basePath be present for non-custom-routes we
// 404 here when we matched an fs route
if(!keepBasePath){if(!originallyHadBasePath&&!req._nextDidRewrite){if(requireBasePath){// consider this a non-match so the 404 renders
return false;}// page checker occurs before rewrites so we need to continue
// to check those since they don't always require basePath
continue;}parsedUrlUpdated.pathname=currentPathname;}const result=await testRoute.fn(req,res,newParams,parsedUrlUpdated);// The response was handled
if(result.finished){return true;}// since the fs route didn't match we need to re-add the basePath
// to continue checking rewrites with the basePath present
if(!keepBasePath){parsedUrlUpdated.pathname=originalPathname;}if(result.pathname){parsedUrlUpdated.pathname=result.pathname;}if(result.query){parsedUrlUpdated.query={...parsedUrlUpdated.query,...result.query};}// check filesystem
if(testRoute.check===true){if(await applyCheckTrue(parsedUrlUpdated)){return true;}}}}return false;}}exports.default=Router;
//# sourceMappingURL=router.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwYXRoVG9SZWdleHAiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiX2RlZmF1bHQiLCJjdXN0b21Sb3V0ZSIsInBhdGgiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwibWF0Y2hlciIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwYXRobmFtZSIsInBhcmFtcyIsInJlcyIsIm5hbWUiLCJtYXRjaEhhcyIsImNvbXBpbGVOb25QYXRoIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiX3F1ZXJ5c3RyaW5nIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJnZXRTYWZlUGFyYW1OYW1lIiwicGFyYW1OYW1lIiwibmV3UGFyYW1OYW1lIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlIiwiY2hhckNvZGVBdCIsInJlcSIsInF1ZXJ5IiwiaW5pdGlhbFF1ZXJ5VmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJ2YWx1ZXMiLCJhbGxNYXRjaCIsImV2ZXJ5IiwiaGFzSXRlbSIsInZhbHVlIiwidHlwZSIsInRvTG93ZXJDYXNlIiwiaGVhZGVycyIsImNvb2tpZXMiLCJpbmNsdWRlcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3QiLCJob3N0bmFtZSIsInNwbGl0IiwiUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ3JvdXBzIiwiZm9yRWFjaCIsImdyb3VwS2V5IiwicmVwbGFjZSIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsInN1YnN0ciIsImRlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiYXNzaWduIiwiaGFkTG9jYWxlIiwiX19uZXh0TG9jYWxlIiwiX19uZXh0RGVmYXVsdExvY2FsZSIsInN0YXJ0c1dpdGgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsInBvcnQiLCJwcm90b2NvbCIsImhyZWYiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwibWFwIiwiZGVzdGluYXRpb25Db21waWxlciIsIm5ld1VybCIsImVudHJpZXMiLCJzdHJPckFycmF5IiwiaXNBcnJheSIsInBhcmFtS2V5cyIsImZpbHRlciIsInNvbWUiLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJwcm9ncmVzcyIsIlByb2dyZXNzQmFyIiwic2l6ZSIsImNvbG9yIiwiY2xhc3NOYW1lIiwiZGVsYXkiLCJSb3V0ZXIiLCJzdGFydCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7OztBQ2ZhOzs7Ozs7Ozs7Ozs7OztBQUFBQSxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsb0JBQUEsR0FBcUJBLGVBQUEsR0FBZ0JBLGlDQUFBLEdBQWtDQSxzQkFBQSxHQUF1QixLQUFLLENBQW5HOztBQUFxRyxJQUFJQyxZQUFZLEdBQUNDLHVCQUF1QixDQUFDQyxtQkFBTyxDQUFDLG9HQUFELENBQVIsQ0FBeEM7O0FBQXVGSCxvQkFBQSxHQUFxQkMsWUFBckI7O0FBQWtDLFNBQVNHLHdCQUFULEdBQW1DO0FBQUMsTUFBRyxPQUFPQyxPQUFQLEtBQWlCLFVBQXBCLEVBQStCLE9BQU8sSUFBUDtBQUFZLE1BQUlDLEtBQUssR0FBQyxJQUFJRCxPQUFKLEVBQVY7O0FBQXdCRCwwQkFBd0IsR0FBQyxvQ0FBVTtBQUFDLFdBQU9FLEtBQVA7QUFBYyxHQUFsRDs7QUFBbUQsU0FBT0EsS0FBUDtBQUFjOztBQUFBLFNBQVNKLHVCQUFULENBQWlDSyxHQUFqQyxFQUFxQztBQUFDLE1BQUdBLEdBQUcsSUFBRUEsR0FBRyxDQUFDQyxVQUFaLEVBQXVCO0FBQUMsV0FBT0QsR0FBUDtBQUFZOztBQUFBLE1BQUdBLEdBQUcsS0FBRyxJQUFOLElBQVksT0FBT0EsR0FBUCxLQUFhLFFBQWIsSUFBdUIsT0FBT0EsR0FBUCxLQUFhLFVBQW5ELEVBQThEO0FBQUMsV0FBTTtBQUFDLGlCQUFRQTtBQUFULEtBQU47QUFBcUI7O0FBQUEsTUFBSUQsS0FBSyxHQUFDRix3QkFBd0IsRUFBbEM7O0FBQXFDLE1BQUdFLEtBQUssSUFBRUEsS0FBSyxDQUFDRyxHQUFOLENBQVVGLEdBQVYsQ0FBVixFQUF5QjtBQUFDLFdBQU9ELEtBQUssQ0FBQ0ksR0FBTixDQUFVSCxHQUFWLENBQVA7QUFBdUI7O0FBQUEsTUFBSUksTUFBTSxHQUFDLEVBQVg7QUFBYyxNQUFJQyxxQkFBcUIsR0FBQ0MsTUFBTSxDQUFDQyxjQUFQLElBQXVCRCxNQUFNLENBQUNFLHdCQUF4RDs7QUFBaUYsT0FBSSxJQUFJQyxHQUFSLElBQWVULEdBQWYsRUFBbUI7QUFBQyxRQUFHTSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1osR0FBckMsRUFBeUNTLEdBQXpDLENBQUgsRUFBaUQ7QUFBQyxVQUFJSSxJQUFJLEdBQUNSLHFCQUFxQixHQUFDQyxNQUFNLENBQUNFLHdCQUFQLENBQWdDUixHQUFoQyxFQUFvQ1MsR0FBcEMsQ0FBRCxHQUEwQyxJQUF4RTs7QUFBNkUsVUFBR0ksSUFBSSxLQUFHQSxJQUFJLENBQUNWLEdBQUwsSUFBVVUsSUFBSSxDQUFDQyxHQUFsQixDQUFQLEVBQThCO0FBQUNSLGNBQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBNkJLLEdBQTdCLEVBQWlDSSxJQUFqQztBQUF3QyxPQUF2RSxNQUEyRTtBQUFDVCxjQUFNLENBQUNLLEdBQUQsQ0FBTixHQUFZVCxHQUFHLENBQUNTLEdBQUQsQ0FBZjtBQUFzQjtBQUFDO0FBQUM7O0FBQUFMLFFBQU0sV0FBTixHQUFlSixHQUFmOztBQUFtQixNQUFHRCxLQUFILEVBQVM7QUFBQ0EsU0FBSyxDQUFDZSxHQUFOLENBQVVkLEdBQVYsRUFBY0ksTUFBZDtBQUF1Qjs7QUFBQSxTQUFPQSxNQUFQO0FBQWU7O0FBQUEsSUFBTVcsY0FBYyxHQUFDO0FBQUNDLFdBQVMsRUFBQyxLQUFYO0FBQWlCQyxXQUFTLEVBQUM7QUFBM0IsQ0FBckI7QUFBcUR4QixzQkFBQSxHQUF1QnNCLGNBQXZCOztBQUFzQyxJQUFNRyx5QkFBeUIsbUNBQUtILGNBQUw7QUFBb0JJLFFBQU0sRUFBQztBQUEzQixFQUEvQjs7QUFBZ0UxQixpQ0FBQSxHQUFrQ3lCLHlCQUFsQzs7QUFBNEQsSUFBSUUsUUFBUSxHQUFDLFNBQVRBLFFBQVMsR0FBcUI7QUFBQSxNQUFwQkMsV0FBb0IsdUVBQVIsS0FBUTtBQUFDLFNBQU8sVUFBQUMsSUFBSSxFQUFFO0FBQUMsUUFBTUMsSUFBSSxHQUFDLEVBQVg7QUFBYyxRQUFNQyxZQUFZLEdBQUM5QixZQUFZLENBQUNBLFlBQWIsQ0FBMEI0QixJQUExQixFQUErQkMsSUFBL0IsRUFBb0NGLFdBQVcsR0FBQ0gseUJBQUQsR0FBMkJILGNBQTFFLENBQW5CO0FBQTZHLFFBQU1VLE9BQU8sR0FBQy9CLFlBQVksQ0FBQ2dDLGdCQUFiLENBQThCRixZQUE5QixFQUEyQ0QsSUFBM0MsQ0FBZDtBQUErRCxXQUFNLFVBQUNJLFFBQUQsRUFBVUMsTUFBVixFQUFtQjtBQUFDLFVBQU1DLEdBQUcsR0FBQ0YsUUFBUSxJQUFFLElBQVYsR0FBZSxLQUFmLEdBQXFCRixPQUFPLENBQUNFLFFBQUQsQ0FBdEM7O0FBQWlELFVBQUcsQ0FBQ0UsR0FBSixFQUFRO0FBQUMsZUFBTyxLQUFQO0FBQWM7O0FBQUEsVUFBR1IsV0FBSCxFQUFlO0FBQUEsbURBQWtCRSxJQUFsQjtBQUFBOztBQUFBO0FBQUMsOERBQXNCO0FBQUEsZ0JBQVpkLEdBQVk7O0FBQUM7QUFDbm9EO0FBQ0EsZ0JBQUcsT0FBT0EsR0FBRyxDQUFDcUIsSUFBWCxLQUFrQixRQUFyQixFQUE4QjtBQUFDLHFCQUFPRCxHQUFHLENBQUNELE1BQUosQ0FBV25CLEdBQUcsQ0FBQ3FCLElBQWYsQ0FBUDtBQUE2QjtBQUFDO0FBRjhpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTdpRDs7QUFBQSw2Q0FBVUYsTUFBVixHQUFvQkMsR0FBRyxDQUFDRCxNQUF4QjtBQUFpQyxLQUYyNUM7QUFFejVDLEdBRml0QztBQUUvc0MsQ0FGNHFDOztBQUUzcUNuQyxlQUFBLEdBQWdCMkIsUUFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnZGOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEzQixrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZ0JBQUEsR0FBaUJzQyxRQUFqQjtBQUEwQnRDLHNCQUFBLEdBQXVCdUMsY0FBdkI7QUFBc0N2QyxlQUFBLEdBQWdCd0Msa0JBQWhCO0FBQW1DeEMsd0JBQUEsR0FBeUIsS0FBSyxDQUE5Qjs7QUFBZ0MsSUFBSXlDLFlBQVksR0FBQ3RDLG1CQUFPLENBQUMsMkZBQUQsQ0FBeEI7O0FBQTBDLElBQUl1QyxpQkFBaUIsR0FBQ3ZDLG1CQUFPLENBQUMseUdBQUQsQ0FBN0I7O0FBQXNELElBQUlGLFlBQVksR0FBQ0MsdUJBQXVCLENBQUNDLG1CQUFPLENBQUMsb0dBQUQsQ0FBUixDQUF4Qzs7QUFBdUYsU0FBU0Msd0JBQVQsR0FBbUM7QUFBQyxNQUFHLE9BQU9DLE9BQVAsS0FBaUIsVUFBcEIsRUFBK0IsT0FBTyxJQUFQO0FBQVksTUFBSUMsS0FBSyxHQUFDLElBQUlELE9BQUosRUFBVjs7QUFBd0JELDBCQUF3QixHQUFDLG9DQUFVO0FBQUMsV0FBT0UsS0FBUDtBQUFjLEdBQWxEOztBQUFtRCxTQUFPQSxLQUFQO0FBQWM7O0FBQUEsU0FBU0osdUJBQVQsQ0FBaUNLLEdBQWpDLEVBQXFDO0FBQUMsTUFBR0EsR0FBRyxJQUFFQSxHQUFHLENBQUNDLFVBQVosRUFBdUI7QUFBQyxXQUFPRCxHQUFQO0FBQVk7O0FBQUEsTUFBR0EsR0FBRyxLQUFHLElBQU4sSUFBWSxPQUFPQSxHQUFQLEtBQWEsUUFBYixJQUF1QixPQUFPQSxHQUFQLEtBQWEsVUFBbkQsRUFBOEQ7QUFBQyxXQUFNO0FBQUMsaUJBQVFBO0FBQVQsS0FBTjtBQUFxQjs7QUFBQSxNQUFJRCxLQUFLLEdBQUNGLHdCQUF3QixFQUFsQzs7QUFBcUMsTUFBR0UsS0FBSyxJQUFFQSxLQUFLLENBQUNHLEdBQU4sQ0FBVUYsR0FBVixDQUFWLEVBQXlCO0FBQUMsV0FBT0QsS0FBSyxDQUFDSSxHQUFOLENBQVVILEdBQVYsQ0FBUDtBQUF1Qjs7QUFBQSxNQUFJSSxNQUFNLEdBQUMsRUFBWDtBQUFjLE1BQUlDLHFCQUFxQixHQUFDQyxNQUFNLENBQUNDLGNBQVAsSUFBdUJELE1BQU0sQ0FBQ0Usd0JBQXhEOztBQUFpRixPQUFJLElBQUlDLEdBQVIsSUFBZVQsR0FBZixFQUFtQjtBQUFDLFFBQUdNLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDWixHQUFyQyxFQUF5Q1MsR0FBekMsQ0FBSCxFQUFpRDtBQUFDLFVBQUlJLElBQUksR0FBQ1IscUJBQXFCLEdBQUNDLE1BQU0sQ0FBQ0Usd0JBQVAsQ0FBZ0NSLEdBQWhDLEVBQW9DUyxHQUFwQyxDQUFELEdBQTBDLElBQXhFOztBQUE2RSxVQUFHSSxJQUFJLEtBQUdBLElBQUksQ0FBQ1YsR0FBTCxJQUFVVSxJQUFJLENBQUNDLEdBQWxCLENBQVAsRUFBOEI7QUFBQ1IsY0FBTSxDQUFDQyxjQUFQLENBQXNCSCxNQUF0QixFQUE2QkssR0FBN0IsRUFBaUNJLElBQWpDO0FBQXdDLE9BQXZFLE1BQTJFO0FBQUNULGNBQU0sQ0FBQ0ssR0FBRCxDQUFOLEdBQVlULEdBQUcsQ0FBQ1MsR0FBRCxDQUFmO0FBQXNCO0FBQUM7QUFBQzs7QUFBQUwsUUFBTSxXQUFOLEdBQWVKLEdBQWY7O0FBQW1CLE1BQUdELEtBQUgsRUFBUztBQUFDQSxTQUFLLENBQUNlLEdBQU4sQ0FBVWQsR0FBVixFQUFjSSxNQUFkO0FBQXVCOztBQUFBLFNBQU9BLE1BQVA7QUFBZSxDLENBQUE7QUFDcHBDOzs7QUFDQSxJQUFNZ0MsZ0JBQWdCLEdBQUMsU0FBakJBLGdCQUFpQixDQUFBQyxTQUFTLEVBQUU7QUFBQyxNQUFJQyxZQUFZLEdBQUMsRUFBakI7O0FBQW9CLE9BQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRixTQUFTLENBQUNHLE1BQXhCLEVBQStCRCxDQUFDLEVBQWhDLEVBQW1DO0FBQUMsUUFBTUUsUUFBUSxHQUFDSixTQUFTLENBQUNLLFVBQVYsQ0FBcUJILENBQXJCLENBQWY7O0FBQXVDLFFBQUdFLFFBQVEsR0FBQyxFQUFULElBQWFBLFFBQVEsR0FBQyxFQUF0QixJQUEwQjtBQUMvSkEsWUFBUSxHQUFDLEVBQVQsSUFBYUEsUUFBUSxHQUFDLEdBRDRHLENBQ3pHO0FBRHlHLE1BRWpJO0FBQUNILG9CQUFZLElBQUVELFNBQVMsQ0FBQ0UsQ0FBRCxDQUF2QjtBQUE0QjtBQUFDOztBQUFBLFNBQU9ELFlBQVA7QUFBcUIsQ0FGcEQ7O0FBRXFEN0Msd0JBQUEsR0FBeUIyQyxnQkFBekI7O0FBQTBDLFNBQVNMLFFBQVQsQ0FBa0JZLEdBQWxCLEVBQXNCekMsR0FBdEIsRUFBMEIwQyxLQUExQixFQUFnQztBQUFDLE1BQU1oQixNQUFNLEdBQUMsRUFBYjtBQUFnQixNQUFJaUIsa0JBQWtCLEdBQUMsRUFBdkI7O0FBQTBCLGFBQStCLEVBQTBEOztBQUFBLFlBQStCO0FBQUNBLHNCQUFrQixHQUFDQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxJQUFJQyxlQUFKLENBQW9CQyxRQUFRLENBQUNDLE1BQTdCLEVBQXFDQyxNQUFyQyxFQUFYLENBQW5CO0FBQThFOztBQUFBLE1BQU1DLFFBQVEsR0FBQ2xELEdBQUcsQ0FBQ21ELEtBQUosQ0FBVSxVQUFBQyxPQUFPLEVBQUU7QUFBQyxRQUFJQyxLQUFKO0FBQVUsUUFBSTlDLEdBQUcsR0FBQzZDLE9BQU8sQ0FBQzdDLEdBQWhCOztBQUFvQixZQUFPNkMsT0FBTyxDQUFDRSxJQUFmO0FBQXFCLFdBQUksUUFBSjtBQUFhO0FBQUMvQyxhQUFHLEdBQUNBLEdBQUcsQ0FBQ2dELFdBQUosRUFBSjtBQUFzQkYsZUFBSyxHQUFDWixHQUFHLENBQUNlLE9BQUosQ0FBWWpELEdBQVosQ0FBTjtBQUF1QjtBQUFPOztBQUFBLFdBQUksUUFBSjtBQUFhO0FBQUM4QyxlQUFLLEdBQUNaLEdBQUcsQ0FBQ2dCLE9BQUosQ0FBWUwsT0FBTyxDQUFDN0MsR0FBcEIsQ0FBTjtBQUErQjtBQUFPOztBQUFBLFdBQUksT0FBSjtBQUFZO0FBQUM7QUFDMWtCOEMsZUFBSyxHQUFDWCxLQUFLLENBQUNuQyxHQUFELENBQVg7O0FBQWlCLGNBQUdvQyxrQkFBa0IsQ0FBQ2UsUUFBbkIsQ0FBNEJMLEtBQUssSUFBRSxFQUFuQyxDQUFILEVBQTBDO0FBQUNBLGlCQUFLLEdBQUNNLGtCQUFrQixDQUFDTixLQUFELENBQXhCO0FBQWlDOztBQUFBO0FBQU87O0FBQUEsV0FBSSxNQUFKO0FBQVc7QUFBQSxxQkFBYSxDQUFDWixHQUFHLElBQUUsSUFBTCxHQUFVLEtBQUssQ0FBZixHQUFpQkEsR0FBRyxDQUFDZSxPQUF0QixLQUFnQyxFQUE3QztBQUFBLGNBQU9JLElBQVAsUUFBT0EsSUFBUCxFQUFnRDs7O0FBQy9KLGNBQU1DLFFBQVEsR0FBQ0QsSUFBSSxJQUFFLElBQU4sR0FBVyxLQUFLLENBQWhCLEdBQWtCQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLEVBQW1CUCxXQUFuQixFQUFqQztBQUFrRUYsZUFBSyxHQUFDUSxRQUFOO0FBQWU7QUFBTzs7QUFBQTtBQUFRO0FBQUM7QUFBTztBQUYwVTs7QUFFelUsUUFBRyxDQUFDVCxPQUFPLENBQUNDLEtBQVQsSUFBZ0JBLEtBQW5CLEVBQXlCO0FBQUMzQixZQUFNLENBQUNRLGdCQUFnQixDQUFDM0IsR0FBRCxDQUFqQixDQUFOLEdBQThCOEMsS0FBOUI7QUFBb0MsYUFBTyxJQUFQO0FBQWEsS0FBM0UsTUFBZ0YsSUFBR0EsS0FBSCxFQUFTO0FBQUMsVUFBTTlCLE9BQU8sR0FBQyxJQUFJd0MsTUFBSixZQUFlWCxPQUFPLENBQUNDLEtBQXZCLE9BQWQ7QUFBK0MsVUFBTVcsT0FBTyxHQUFDWCxLQUFLLENBQUNZLEtBQU4sQ0FBWTFDLE9BQVosQ0FBZDs7QUFBbUMsVUFBR3lDLE9BQUgsRUFBVztBQUFDLFlBQUdBLE9BQU8sQ0FBQ0UsTUFBWCxFQUFrQjtBQUFDOUQsZ0JBQU0sQ0FBQ2lCLElBQVAsQ0FBWTJDLE9BQU8sQ0FBQ0UsTUFBcEIsRUFBNEJDLE9BQTVCLENBQW9DLFVBQUFDLFFBQVEsRUFBRTtBQUFDMUMsa0JBQU0sQ0FBQzBDLFFBQUQsQ0FBTixHQUFpQkosT0FBTyxDQUFDRSxNQUFSLENBQWVFLFFBQWYsQ0FBakI7QUFBMkMsV0FBMUY7QUFBNkYsU0FBaEgsTUFBcUgsSUFBR2hCLE9BQU8sQ0FBQ0UsSUFBUixLQUFlLE1BQWYsSUFBdUJVLE9BQU8sQ0FBQyxDQUFELENBQWpDLEVBQXFDO0FBQUN0QyxnQkFBTSxDQUFDa0MsSUFBUCxHQUFZSSxPQUFPLENBQUMsQ0FBRCxDQUFuQjtBQUF3Qjs7QUFBQSxlQUFPLElBQVA7QUFBYTtBQUFDOztBQUFBLFdBQU8sS0FBUDtBQUFjLEdBRmhILENBQWY7O0FBRWlJLE1BQUdkLFFBQUgsRUFBWTtBQUFDLFdBQU94QixNQUFQO0FBQWU7O0FBQUEsU0FBTyxLQUFQO0FBQWM7O0FBQUEsU0FBU0ksY0FBVCxDQUF3QnVCLEtBQXhCLEVBQThCM0IsTUFBOUIsRUFBcUM7QUFBQyxNQUFHLENBQUMyQixLQUFLLENBQUNLLFFBQU4sQ0FBZSxHQUFmLENBQUosRUFBd0I7QUFBQyxXQUFPTCxLQUFQO0FBQWM7O0FBQUEsa0NBQWlCakQsTUFBTSxDQUFDaUIsSUFBUCxDQUFZSyxNQUFaLENBQWpCLGtDQUFxQztBQUFqQyxRQUFNbkIsR0FBRyxtQkFBVDs7QUFBa0MsUUFBRzhDLEtBQUssQ0FBQ0ssUUFBTixZQUFtQm5ELEdBQW5CLEVBQUgsRUFBNkI7QUFBQzhDLFdBQUssR0FBQ0EsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLElBQUlOLE1BQUosWUFBZXhELEdBQWYsVUFBd0IsR0FBeEIsQ0FBZCxhQUErQ0EsR0FBL0MsZ0NBQStFOEQsT0FBL0UsQ0FBdUYsSUFBSU4sTUFBSixZQUFleEQsR0FBZixVQUF3QixHQUF4QixDQUF2RixhQUF3SEEsR0FBeEgsK0JBQXVKOEQsT0FBdkosQ0FBK0osSUFBSU4sTUFBSixZQUFleEQsR0FBZixVQUF3QixHQUF4QixDQUEvSixhQUFnTUEsR0FBaE0sMkJBQTJOOEQsT0FBM04sQ0FBbU8sSUFBSU4sTUFBSixZQUFleEQsR0FBZixjQUE0QixHQUE1QixDQUFuTyxpQ0FBNFJBLEdBQTVSLEVBQU47QUFBMFM7QUFBQzs7QUFBQThDLE9BQUssR0FBQ0EsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLDJCQUFkLEVBQTBDLE1BQTFDLEVBQWtEQSxPQUFsRCxDQUEwRCx1QkFBMUQsRUFBa0YsR0FBbEYsRUFBdUZBLE9BQXZGLENBQStGLHdCQUEvRixFQUF3SCxHQUF4SCxFQUE2SEEsT0FBN0gsQ0FBcUksMkJBQXJJLEVBQWlLLEdBQWpLLEVBQXNLQSxPQUF0SyxDQUE4Syw0QkFBOUssRUFBMk0sR0FBM00sQ0FBTixDQUF2WixDQUE2bUI7QUFDOXFDOztBQUNBLFNBQU83RSxZQUFZLENBQUM4RSxPQUFiLFlBQXlCakIsS0FBekIsR0FBaUM7QUFBQ2tCLFlBQVEsRUFBQztBQUFWLEdBQWpDLEVBQW1EN0MsTUFBbkQsRUFBMkQ4QyxNQUEzRCxDQUFrRSxDQUFsRSxDQUFQO0FBQTZFOztBQUFBLFNBQVN6QyxrQkFBVCxDQUE0QjBDLFdBQTVCLEVBQXdDL0MsTUFBeEMsRUFBK0NnQixLQUEvQyxFQUFxRGdDLG1CQUFyRCxFQUF5RTtBQUFDLE1BQUlDLGlCQUFpQixHQUFDLEVBQXRCLENBQUQsQ0FBMEI7O0FBQ2hMakMsT0FBSyxHQUFDdEMsTUFBTSxDQUFDd0UsTUFBUCxDQUFjLEVBQWQsRUFBaUJsQyxLQUFqQixDQUFOO0FBQThCLE1BQU1tQyxTQUFTLEdBQUNuQyxLQUFLLENBQUNvQyxZQUF0QjtBQUFtQyxTQUFPcEMsS0FBSyxDQUFDb0MsWUFBYjtBQUEwQixTQUFPcEMsS0FBSyxDQUFDcUMsbUJBQWI7O0FBQWlDLE1BQUdOLFdBQVcsQ0FBQ08sVUFBWixDQUF1QixHQUF2QixDQUFILEVBQStCO0FBQUNMLHFCQUFpQixHQUFDLENBQUMsR0FBRTFDLGlCQUFpQixDQUFDZ0QsZ0JBQXJCLEVBQXVDUixXQUF2QyxDQUFsQjtBQUF1RSxHQUF2RyxNQUEyRztBQUFBLGVBQXNFLElBQUlTLEdBQUosQ0FBUVQsV0FBUixDQUF0RTtBQUFBLFFBQU9oRCxRQUFQLFFBQU9BLFFBQVA7QUFBQSxRQUFnQjBELFlBQWhCLFFBQWdCQSxZQUFoQjtBQUFBLFFBQTZCQyxJQUE3QixRQUE2QkEsSUFBN0I7QUFBQSxRQUFrQ3ZCLFFBQWxDLFFBQWtDQSxRQUFsQztBQUFBLFFBQTJDd0IsSUFBM0MsUUFBMkNBLElBQTNDO0FBQUEsUUFBZ0RDLFFBQWhELFFBQWdEQSxRQUFoRDtBQUFBLFFBQXlEdEMsTUFBekQsUUFBeURBLE1BQXpEO0FBQUEsUUFBZ0V1QyxJQUFoRSxRQUFnRUEsSUFBaEU7O0FBQTJGWixxQkFBaUIsR0FBQztBQUFDbEQsY0FBUSxFQUFSQSxRQUFEO0FBQVVpQixXQUFLLEVBQUMsQ0FBQyxHQUFFVixZQUFZLENBQUN3RCxzQkFBaEIsRUFBd0NMLFlBQXhDLENBQWhCO0FBQXNFQyxVQUFJLEVBQUpBLElBQXRFO0FBQTJFRSxjQUFRLEVBQVJBLFFBQTNFO0FBQW9GekIsY0FBUSxFQUFSQSxRQUFwRjtBQUE2RndCLFVBQUksRUFBSkEsSUFBN0Y7QUFBa0dyQyxZQUFNLEVBQU5BLE1BQWxHO0FBQXlHdUMsVUFBSSxFQUFKQTtBQUF6RyxLQUFsQjtBQUFrSTs7QUFBQSxNQUFNRSxTQUFTLEdBQUNkLGlCQUFpQixDQUFDakMsS0FBbEM7QUFBd0MsTUFBTWdELFFBQVEsYUFBSWYsaUJBQWlCLENBQUNsRCxRQUF0QixTQUFpQ2tELGlCQUFpQixDQUFDUyxJQUFsQixJQUF3QixFQUF6RCxDQUFkO0FBQTRFLE1BQU1PLGlCQUFpQixHQUFDLEVBQXhCO0FBQTJCbkcsY0FBWSxDQUFDQSxZQUFiLENBQTBCa0csUUFBMUIsRUFBbUNDLGlCQUFuQztBQUFzRCxNQUFNQyxjQUFjLEdBQUNELGlCQUFpQixDQUFDRSxHQUFsQixDQUFzQixVQUFBdEYsR0FBRztBQUFBLFdBQUVBLEdBQUcsQ0FBQ3FCLElBQU47QUFBQSxHQUF6QixDQUFyQjtBQUEwRCxNQUFJa0UsbUJBQW1CLEdBQUN0RyxZQUFZLENBQUM4RSxPQUFiLENBQXFCb0IsUUFBckIsRUFBOEI7QUFDenZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFDbkIsWUFBUSxFQUFDO0FBQVYsR0FOMnRCLENBQXhCO0FBTWpyQixNQUFJd0IsTUFBSixDQVBvSSxDQU96SDs7QUFDN0Isc0NBQTRCM0YsTUFBTSxDQUFDNEYsT0FBUCxDQUFlUCxTQUFmLENBQTVCLHVDQUFzRDtBQUFBO0FBQUEsUUFBNUNsRixHQUE0QztBQUFBLFFBQXhDMEYsVUFBd0M7O0FBQUMsUUFBSTVDLEtBQUssR0FBQ1QsS0FBSyxDQUFDc0QsT0FBTixDQUFjRCxVQUFkLElBQTBCQSxVQUFVLENBQUMsQ0FBRCxDQUFwQyxHQUF3Q0EsVUFBbEQ7O0FBQTZELFFBQUc1QyxLQUFILEVBQVM7QUFBQztBQUM5SDtBQUNBQSxXQUFLLEdBQUN2QixjQUFjLENBQUN1QixLQUFELEVBQU8zQixNQUFQLENBQXBCO0FBQW9DOztBQUFBK0QsYUFBUyxDQUFDbEYsR0FBRCxDQUFULEdBQWU4QyxLQUFmO0FBQXNCLEdBVjRGLENBVTVGO0FBQzFEOzs7QUFDQSxNQUFJOEMsU0FBUyxHQUFDL0YsTUFBTSxDQUFDaUIsSUFBUCxDQUFZSyxNQUFaLENBQWQsQ0Fac0osQ0FZcEg7O0FBQ2xDLE1BQUdtRCxTQUFILEVBQWE7QUFBQ3NCLGFBQVMsR0FBQ0EsU0FBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUF4RSxJQUFJO0FBQUEsYUFBRUEsSUFBSSxLQUFHLG9CQUFUO0FBQUEsS0FBckIsQ0FBVjtBQUErRDs7QUFBQSxNQUFHOEMsbUJBQW1CLElBQUUsQ0FBQ3lCLFNBQVMsQ0FBQ0UsSUFBVixDQUFlLFVBQUE5RixHQUFHO0FBQUEsV0FBRXFGLGNBQWMsQ0FBQ2xDLFFBQWYsQ0FBd0JuRCxHQUF4QixDQUFGO0FBQUEsR0FBbEIsQ0FBekIsRUFBMkU7QUFBQSwrQ0FBa0I0RixTQUFsQjtBQUFBOztBQUFBO0FBQUMsMERBQTJCO0FBQUEsWUFBakI1RixJQUFpQjs7QUFBQyxZQUFHLEVBQUVBLElBQUcsSUFBSWtGLFNBQVQsQ0FBSCxFQUF1QjtBQUFDQSxtQkFBUyxDQUFDbEYsSUFBRCxDQUFULEdBQWVtQixNQUFNLENBQUNuQixJQUFELENBQXJCO0FBQTRCO0FBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjs7QUFBQSxNQUFHO0FBQUN3RixVQUFNLEdBQUNELG1CQUFtQixDQUFDcEUsTUFBRCxDQUExQjs7QUFBRCx3QkFBeURxRSxNQUFNLENBQUNqQyxLQUFQLENBQWEsR0FBYixDQUF6RDtBQUFBO0FBQUEsUUFBMENyQyxTQUExQztBQUFBLFFBQW1EMkQsS0FBbkQ7O0FBQTJFVCxxQkFBaUIsQ0FBQ2xELFFBQWxCLEdBQTJCQSxTQUEzQjtBQUFvQ2tELHFCQUFpQixDQUFDUyxJQUFsQixhQUEwQkEsS0FBSSxHQUFDLEdBQUQsR0FBSyxFQUFuQyxTQUF3Q0EsS0FBSSxJQUFFLEVBQTlDO0FBQW1ELFdBQU9ULGlCQUFpQixDQUFDM0IsTUFBekI7QUFBaUMsR0FBdE0sQ0FBc00sT0FBTXNELEdBQU4sRUFBVTtBQUFDLFFBQUdBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZdEMsS0FBWixDQUFrQiw4Q0FBbEIsQ0FBSCxFQUFxRTtBQUFDLFlBQU0sSUFBSXVDLEtBQUosMktBQU47QUFBOEw7O0FBQUEsVUFBTUYsR0FBTjtBQUFXLEdBYnJqQixDQWFxakI7QUFDM3NCO0FBQ0E7QUFDQTs7O0FBQ0EzQixtQkFBaUIsQ0FBQ2pDLEtBQWxCLG1DQUE0QkEsS0FBNUIsR0FBcUNpQyxpQkFBaUIsQ0FBQ2pDLEtBQXZEO0FBQThELFNBQU07QUFBQ3FELFVBQU0sRUFBTkEsTUFBRDtBQUFRcEIscUJBQWlCLEVBQWpCQTtBQUFSLEdBQU47QUFBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJoRztBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU04QixRQUFRLEdBQUcsSUFBSUMsNERBQUosQ0FBZ0I7QUFDL0JDLE1BQUksRUFBRSxDQUR5QjtBQUUvQkMsT0FBSyxFQUFFLFFBRndCO0FBRy9CQyxXQUFTLEVBQUUsTUFIb0I7QUFJL0JDLE9BQUssRUFBQztBQUp5QixDQUFoQixDQUFqQjtBQU9BQyxrRkFBQSxDQUFpQixvQkFBakIsRUFBdUNOLFFBQVEsQ0FBQ08sS0FBaEQ7O0FBRUEsU0FBU0MsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkMsc0JBQU8sOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7S0FGUUYsSztBQUtULCtEQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMENBQTBDO0FBQ25FO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDJDQUEyQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0Esb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlEQUFpRCxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLHdPQUF3TyxVQUFVLEVBQUU7QUFDcFA7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixpQzs7Ozs7Ozs7Ozs7QUNyWmEsa0JBQWtCLE1BQU0sZUFBZSxDQUFDLGFBQWEsUUFBUSxzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBZ0MsR0FBRyw0QkFBNEIsbUJBQU8sQ0FBQywwR0FBdUMsRUFBRSx5QkFBeUIsbUJBQU8sQ0FBQyxpSEFBbUMsRUFBRSx3QkFBd0IsbUJBQU8sQ0FBQyw2SEFBeUMsRUFBRSxxQ0FBcUMsZ0NBQWdDLGNBQWMscUNBQXFDLGFBQWEsT0FBTyxnRUFBZ0UsNENBQTRDO0FBQ2puQiwyQ0FBMkMsYUFBYSxhQUFhLDZDQUE2Qyx5Q0FBeUMsOEZBQThGLEVBQUUscUJBQXFCLG9CQUFvQixxQkFBcUIsc0JBQXNCLHFCQUFxQiwwQkFBMEIsd0JBQXdCLDBCQUEwQixzQ0FBc0Msb0JBQW9CLHVCQUF1QixxQkFBcUIsdUJBQXVCLHVCQUF1Qix5QkFBeUIsNkJBQTZCLGlDQUFpQyxpQ0FBaUMseURBQXlELHNCQUFzQiw0QkFBNEIsMkJBQTJCLG9CQUFvQixnQ0FBZ0MsaUNBQWlDO0FBQ3Y1QixvQkFBb0Isb0NBQW9DLHdFQUF3RSxrQkFBa0Isc0JBQXNCLGlDQUFpQyxxQkFBcUIsZ0JBQWdCLCtCQUErQiw0Q0FBNEMsaURBQWlELG1FQUFtRSxvQ0FBb0MseUNBQXlDLGFBQWEsbUNBQW1DLGlFQUFpRSxzQkFBc0IsYUFBYSw2Q0FBNkMsc0RBQXNEO0FBQ2p2QixpQkFBaUIsMEdBQTBHLDhDQUE4Qyw2Q0FBNkMsb0JBQW9CO0FBQzFPLGdCQUFnQixtRUFBbUUsbUNBQW1DLCtDQUErQyw0RUFBNEUsMEJBQTBCO0FBQzNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdJQUF3SSxJQUFJLFNBQVMsa0JBQWtCLDRFQUE0RSxjQUFjLE9BQU8saUJBQWlCLHdDQUF3Qyw2RUFBNkUsT0FBTyxrQkFBa0Isc0VBQXNFLHVKQUF1SixPQUFPLG1EQUFtRDtBQUNudUI7QUFDQSw2REFBNkQsaUVBQWlFLGtDQUFrQztBQUNoSztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUNBQXVDLHdEQUF3RCx5REFBeUQsdUVBQXVFLHlEQUF5RCwrQkFBK0IsK0VBQStFLGtCQUFrQiwyQ0FBMkMsNEdBQTRHLG1EQUFtRCxlQUFlLHdGQUF3RixtQkFBbUIsZUFBZSxHQUFHLDZCQUE2QixFQUFFLDZEQUE2RCxHQUFHLCtEQUErRCx1QkFBdUIsS0FBSyxtQkFBbUIsdUNBQXVDLEVBQUUsNkVBQTZFLEdBQUcsK0NBQStDLDZCQUE2QiwyRkFBMkYsY0FBYyxvQ0FBb0MsS0FBSyxrQkFBa0I7QUFDbDFDLGNBQWM7QUFDZDtBQUNBLGtCQUFrQixpREFBaUQsb0JBQW9CO0FBQ3ZGLGNBQWM7QUFDZDtBQUNBLFVBQVUsMkNBQTJDLG9FQUFvRTtBQUN6SCxvQkFBb0IsYUFBYTtBQUNqQztBQUNBLGtCQUFrQiw0Q0FBNEMsb0JBQW9CLDJDQUEyQyxpQkFBaUIsd0JBQXdCLDRDQUE0QztBQUNsTiwyQkFBMkIsMkNBQTJDLGdCQUFnQixlQUFlLGVBQWU7QUFDcEgsa0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZjcwOTRhMDZjNWM3NTliYzZmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGF0aFRvUmVnZXhwPWV4cG9ydHMuZGVmYXVsdD1leHBvcnRzLmN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9ZXhwb3J0cy5tYXRjaGVyT3B0aW9ucz12b2lkIDA7dmFyIHBhdGhUb1JlZ2V4cD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwibmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwXCIpKTtleHBvcnRzLnBhdGhUb1JlZ2V4cD1wYXRoVG9SZWdleHA7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31jb25zdCBtYXRjaGVyT3B0aW9ucz17c2Vuc2l0aXZlOmZhbHNlLGRlbGltaXRlcjonLyd9O2V4cG9ydHMubWF0Y2hlck9wdGlvbnM9bWF0Y2hlck9wdGlvbnM7Y29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucz17Li4ubWF0Y2hlck9wdGlvbnMsc3RyaWN0OnRydWV9O2V4cG9ydHMuY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucz1jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zO3ZhciBfZGVmYXVsdD0oY3VzdG9tUm91dGU9ZmFsc2UpPT57cmV0dXJuIHBhdGg9Pntjb25zdCBrZXlzPVtdO2NvbnN0IG1hdGNoZXJSZWdleD1wYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKHBhdGgsa2V5cyxjdXN0b21Sb3V0ZT9jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOm1hdGNoZXJPcHRpb25zKTtjb25zdCBtYXRjaGVyPXBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCxrZXlzKTtyZXR1cm4ocGF0aG5hbWUscGFyYW1zKT0+e2NvbnN0IHJlcz1wYXRobmFtZT09bnVsbD9mYWxzZTptYXRjaGVyKHBhdGhuYW1lKTtpZighcmVzKXtyZXR1cm4gZmFsc2U7fWlmKGN1c3RvbVJvdXRlKXtmb3IoY29uc3Qga2V5IG9mIGtleXMpey8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbi8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuaWYodHlwZW9mIGtleS5uYW1lPT09J251bWJlcicpe2RlbGV0ZSByZXMucGFyYW1zW2tleS5uYW1lXTt9fX1yZXR1cm57Li4ucGFyYW1zLC4uLnJlcy5wYXJhbXN9O307fTt9O2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGgtbWF0Y2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXRjaEhhcz1tYXRjaEhhcztleHBvcnRzLmNvbXBpbGVOb25QYXRoPWNvbXBpbGVOb25QYXRoO2V4cG9ydHMuZGVmYXVsdD1wcmVwYXJlRGVzdGluYXRpb247ZXhwb3J0cy5nZXRTYWZlUGFyYW1OYW1lPXZvaWQgMDt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIHBhdGhUb1JlZ2V4cD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwibmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIGVuc3VyZSBvbmx5IGEtekEtWiBhcmUgdXNlZCBmb3IgcGFyYW0gbmFtZXMgZm9yIHByb3BlciBpbnRlcnBvbGF0aW5nXG4vLyB3aXRoIHBhdGgtdG8tcmVnZXhwXG5jb25zdCBnZXRTYWZlUGFyYW1OYW1lPXBhcmFtTmFtZT0+e2xldCBuZXdQYXJhbU5hbWU9Jyc7Zm9yKGxldCBpPTA7aTxwYXJhbU5hbWUubGVuZ3RoO2krKyl7Y29uc3QgY2hhckNvZGU9cGFyYW1OYW1lLmNoYXJDb2RlQXQoaSk7aWYoY2hhckNvZGU+NjQmJmNoYXJDb2RlPDkxfHwvLyBBLVpcbmNoYXJDb2RlPjk2JiZjaGFyQ29kZTwxMjMvLyBhLXpcbil7bmV3UGFyYW1OYW1lKz1wYXJhbU5hbWVbaV07fX1yZXR1cm4gbmV3UGFyYW1OYW1lO307ZXhwb3J0cy5nZXRTYWZlUGFyYW1OYW1lPWdldFNhZmVQYXJhbU5hbWU7ZnVuY3Rpb24gbWF0Y2hIYXMocmVxLGhhcyxxdWVyeSl7Y29uc3QgcGFyYW1zPXt9O2xldCBpbml0aWFsUXVlcnlWYWx1ZXM9W107aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtpbml0aWFsUXVlcnlWYWx1ZXM9T2JqZWN0LnZhbHVlcyhyZXEuX19ORVhUX0lOSVRfUVVFUlkpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe2luaXRpYWxRdWVyeVZhbHVlcz1BcnJheS5mcm9tKG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKS52YWx1ZXMoKSk7fWNvbnN0IGFsbE1hdGNoPWhhcy5ldmVyeShoYXNJdGVtPT57bGV0IHZhbHVlO2xldCBrZXk9aGFzSXRlbS5rZXk7c3dpdGNoKGhhc0l0ZW0udHlwZSl7Y2FzZSdoZWFkZXInOntrZXk9a2V5LnRvTG93ZXJDYXNlKCk7dmFsdWU9cmVxLmhlYWRlcnNba2V5XTticmVhazt9Y2FzZSdjb29raWUnOnt2YWx1ZT1yZXEuY29va2llc1toYXNJdGVtLmtleV07YnJlYWs7fWNhc2UncXVlcnknOnsvLyBwcmVzZXJ2ZSBpbml0aWFsIGVuY29kaW5nIG9mIHF1ZXJ5IHZhbHVlc1xudmFsdWU9cXVlcnlba2V5XTtpZihpbml0aWFsUXVlcnlWYWx1ZXMuaW5jbHVkZXModmFsdWV8fCcnKSl7dmFsdWU9ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTt9YnJlYWs7fWNhc2UnaG9zdCc6e2NvbnN0e2hvc3R9PShyZXE9PW51bGw/dm9pZCAwOnJlcS5oZWFkZXJzKXx8e307Ly8gcmVtb3ZlIHBvcnQgZnJvbSBob3N0IGlmIHByZXNlbnRcbmNvbnN0IGhvc3RuYW1lPWhvc3Q9PW51bGw/dm9pZCAwOmhvc3Quc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO3ZhbHVlPWhvc3RuYW1lO2JyZWFrO31kZWZhdWx0OnticmVhazt9fWlmKCFoYXNJdGVtLnZhbHVlJiZ2YWx1ZSl7cGFyYW1zW2dldFNhZmVQYXJhbU5hbWUoa2V5KV09dmFsdWU7cmV0dXJuIHRydWU7fWVsc2UgaWYodmFsdWUpe2NvbnN0IG1hdGNoZXI9bmV3IFJlZ0V4cChgXiR7aGFzSXRlbS52YWx1ZX0kYCk7Y29uc3QgbWF0Y2hlcz12YWx1ZS5tYXRjaChtYXRjaGVyKTtpZihtYXRjaGVzKXtpZihtYXRjaGVzLmdyb3Vwcyl7T2JqZWN0LmtleXMobWF0Y2hlcy5ncm91cHMpLmZvckVhY2goZ3JvdXBLZXk9PntwYXJhbXNbZ3JvdXBLZXldPW1hdGNoZXMuZ3JvdXBzW2dyb3VwS2V5XTt9KTt9ZWxzZSBpZihoYXNJdGVtLnR5cGU9PT0naG9zdCcmJm1hdGNoZXNbMF0pe3BhcmFtcy5ob3N0PW1hdGNoZXNbMF07fXJldHVybiB0cnVlO319cmV0dXJuIGZhbHNlO30pO2lmKGFsbE1hdGNoKXtyZXR1cm4gcGFyYW1zO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGNvbXBpbGVOb25QYXRoKHZhbHVlLHBhcmFtcyl7aWYoIXZhbHVlLmluY2x1ZGVzKCc6Jykpe3JldHVybiB2YWx1ZTt9Zm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJhbXMpKXtpZih2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKXt2YWx1ZT12YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1NgKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTmApLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwnZycpLGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCdnJyksYC0tRVNDQVBFRF9QQVJBTV9DT0xPTiR7a2V5fWApO319dmFsdWU9dmFsdWUucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCdcXFxcJDEnKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCcrJykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0NPTE9OL2csJzonKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywnPycpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywnKicpOy8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuLy8gY29ycmVjdGx5XG5yZXR1cm4gcGF0aFRvUmVnZXhwLmNvbXBpbGUoYC8ke3ZhbHVlfWAse3ZhbGlkYXRlOmZhbHNlfSkocGFyYW1zKS5zdWJzdHIoMSk7fWZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihkZXN0aW5hdGlvbixwYXJhbXMscXVlcnksYXBwZW5kUGFyYW1zVG9RdWVyeSl7bGV0IHBhcnNlZERlc3RpbmF0aW9uPXt9Oy8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbnF1ZXJ5PU9iamVjdC5hc3NpZ24oe30scXVlcnkpO2NvbnN0IGhhZExvY2FsZT1xdWVyeS5fX25leHRMb2NhbGU7ZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZTtkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZTtpZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe3BhcnNlZERlc3RpbmF0aW9uPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTt9ZWxzZXtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsaGFzaCxob3N0bmFtZSxwb3J0LHByb3RvY29sLHNlYXJjaCxocmVmfT1uZXcgVVJMKGRlc3RpbmF0aW9uKTtwYXJzZWREZXN0aW5hdGlvbj17cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksaGFzaCxwcm90b2NvbCxob3N0bmFtZSxwb3J0LHNlYXJjaCxocmVmfTt9Y29uc3QgZGVzdFF1ZXJ5PXBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5O2NvbnN0IGRlc3RQYXRoPWAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lfSR7cGFyc2VkRGVzdGluYXRpb24uaGFzaHx8Jyd9YDtjb25zdCBkZXN0UGF0aFBhcmFtS2V5cz1bXTtwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLGRlc3RQYXRoUGFyYW1LZXlzKTtjb25zdCBkZXN0UGF0aFBhcmFtcz1kZXN0UGF0aFBhcmFtS2V5cy5tYXAoa2V5PT5rZXkubmFtZSk7bGV0IGRlc3RpbmF0aW9uQ29tcGlsZXI9cGF0aFRvUmVnZXhwLmNvbXBpbGUoZGVzdFBhdGgsLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbi8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4vLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4vLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG57dmFsaWRhdGU6ZmFsc2V9KTtsZXQgbmV3VXJsOy8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuZm9yKGNvbnN0W2tleSxzdHJPckFycmF5XW9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpe2xldCB2YWx1ZT1BcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpP3N0ck9yQXJyYXlbMF06c3RyT3JBcnJheTtpZih2YWx1ZSl7Ly8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4vLyBjb3JyZWN0bHlcbnZhbHVlPWNvbXBpbGVOb25QYXRoKHZhbHVlLHBhcmFtcyk7fWRlc3RRdWVyeVtrZXldPXZhbHVlO30vLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4vLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxubGV0IHBhcmFtS2V5cz1PYmplY3Qua2V5cyhwYXJhbXMpOy8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuaWYoaGFkTG9jYWxlKXtwYXJhbUtleXM9cGFyYW1LZXlzLmZpbHRlcihuYW1lPT5uYW1lIT09J25leHRJbnRlcm5hbExvY2FsZScpO31pZihhcHBlbmRQYXJhbXNUb1F1ZXJ5JiYhcGFyYW1LZXlzLnNvbWUoa2V5PT5kZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKSl7Zm9yKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpe2lmKCEoa2V5IGluIGRlc3RRdWVyeSkpe2Rlc3RRdWVyeVtrZXldPXBhcmFtc1trZXldO319fXRyeXtuZXdVcmw9ZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpO2NvbnN0W3BhdGhuYW1lLGhhc2hdPW5ld1VybC5zcGxpdCgnIycpO3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lPXBhdGhuYW1lO3BhcnNlZERlc3RpbmF0aW9uLmhhc2g9YCR7aGFzaD8nIyc6Jyd9JHtoYXNofHwnJ31gO2RlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2g7fWNhdGNoKGVycil7aWYoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5Lykpe3Rocm93IG5ldyBFcnJvcihgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLW11bHRpLW1hdGNoYCk7fXRocm93IGVycjt9Ly8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3Rcbi8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xucGFyc2VkRGVzdGluYXRpb24ucXVlcnk9ey4uLnF1ZXJ5LC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5fTtyZXR1cm57bmV3VXJsLHBhcnNlZERlc3RpbmF0aW9ufTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVwYXJlLWRlc3RpbmF0aW9uLmpzLm1hcCIsImltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXInXG5cbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIlxuXG5jb25zdCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzc0Jhcih7XG4gIHNpemU6IDQsXG4gIGNvbG9yOiBcIiNGRTk1RVwiLFxuICBjbGFzc05hbWU6IFwiei01MFwiLFxuICBkZWxheToxMDBcbn0pXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbXBpb25TdGFydCcsIHByb2dyZXNzLnN0YXJ0KVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1leHBvcnRzLnJvdXRlPXZvaWQgMDt2YXIgX3BhdGhNYXRjaD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2hcIikpO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX3ByZXBhcmVEZXN0aW5hdGlvbj1yZXF1aXJlKFwiLi4vbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3Qgcm91dGU9KDAsX3BhdGhNYXRjaC5kZWZhdWx0KSgpO2V4cG9ydHMucm91dGU9cm91dGU7Y29uc3QgY3VzdG9tUm91dGVUeXBlcz1uZXcgU2V0KFsncmV3cml0ZScsJ3JlZGlyZWN0JywnaGVhZGVyJ10pO2Z1bmN0aW9uIHJlcGxhY2VCYXNlUGF0aChiYXNlUGF0aCxwYXRobmFtZSl7Ly8gSWYgcmVwbGFjZSBlbmRzIHVwIHJlcGxhY2luZyB0aGUgZnVsbCB1cmwgaXQnbGwgYmUgYHVuZGVmaW5lZGAsIG1lYW5pbmcgd2UgaGF2ZSB0byBkZWZhdWx0IGl0IHRvIGAvYFxucmV0dXJuIHBhdGhuYW1lLnJlcGxhY2UoYmFzZVBhdGgsJycpfHwnLyc7fWNsYXNzIFJvdXRlcntjb25zdHJ1Y3Rvcih7YmFzZVBhdGg9JycsaGVhZGVycz1bXSxmc1JvdXRlcz1bXSxyZXdyaXRlcz17YmVmb3JlRmlsZXM6W10sYWZ0ZXJGaWxlczpbXSxmYWxsYmFjazpbXX0scmVkaXJlY3RzPVtdLGNhdGNoQWxsUm91dGUsZHluYW1pY1JvdXRlcz1bXSxwYWdlQ2hlY2tlcix1c2VGaWxlU3lzdGVtUHVibGljUm91dGVzLGxvY2FsZXM9W119KXt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmhlYWRlcnM9dm9pZCAwO3RoaXMuZnNSb3V0ZXM9dm9pZCAwO3RoaXMucmVkaXJlY3RzPXZvaWQgMDt0aGlzLnJld3JpdGVzPXZvaWQgMDt0aGlzLmNhdGNoQWxsUm91dGU9dm9pZCAwO3RoaXMucGFnZUNoZWNrZXI9dm9pZCAwO3RoaXMuZHluYW1pY1JvdXRlcz12b2lkIDA7dGhpcy51c2VGaWxlU3lzdGVtUHVibGljUm91dGVzPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5oZWFkZXJzPWhlYWRlcnM7dGhpcy5mc1JvdXRlcz1mc1JvdXRlczt0aGlzLnJld3JpdGVzPXJld3JpdGVzO3RoaXMucmVkaXJlY3RzPXJlZGlyZWN0czt0aGlzLnBhZ2VDaGVja2VyPXBhZ2VDaGVja2VyO3RoaXMuY2F0Y2hBbGxSb3V0ZT1jYXRjaEFsbFJvdXRlO3RoaXMuZHluYW1pY1JvdXRlcz1keW5hbWljUm91dGVzO3RoaXMudXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcz11c2VGaWxlU3lzdGVtUHVibGljUm91dGVzO3RoaXMubG9jYWxlcz1sb2NhbGVzO31zZXREeW5hbWljUm91dGVzKHJvdXRlcz1bXSl7dGhpcy5keW5hbWljUm91dGVzPXJvdXRlczt9YWRkRnNSb3V0ZShmc1JvdXRlKXt0aGlzLmZzUm91dGVzLnVuc2hpZnQoZnNSb3V0ZSk7fWFzeW5jIGV4ZWN1dGUocmVxLHJlcyxwYXJzZWRVcmwpey8vIG1lbW9pemUgcGFnZSBjaGVjayBjYWxscyBzbyB3ZSBkb24ndCBkdXBsaWNhdGUgY2hlY2tzIGZvciBwYWdlc1xuY29uc3QgcGFnZUNoZWNrcz17fTtjb25zdCBtZW1vaXplZFBhZ2VDaGVja2VyPWFzeW5jIHA9PntwPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHAsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtpZihwYWdlQ2hlY2tzW3BdKXtyZXR1cm4gcGFnZUNoZWNrc1twXTt9Y29uc3QgcmVzdWx0PXRoaXMucGFnZUNoZWNrZXIocCk7cGFnZUNoZWNrc1twXT1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O2xldCBwYXJzZWRVcmxVcGRhdGVkPXBhcnNlZFVybDtjb25zdCBhcHBseUNoZWNrVHJ1ZT1hc3luYyBjaGVja1BhcnNlZFVybD0+e2NvbnN0IG9yaWdpbmFsRnNQYXRobmFtZT1jaGVja1BhcnNlZFVybC5wYXRobmFtZTtjb25zdCBmc1BhdGhuYW1lPXJlcGxhY2VCYXNlUGF0aCh0aGlzLmJhc2VQYXRoLG9yaWdpbmFsRnNQYXRobmFtZSk7Zm9yKGNvbnN0IGZzUm91dGUgb2YgdGhpcy5mc1JvdXRlcyl7Y29uc3QgZnNQYXJhbXM9ZnNSb3V0ZS5tYXRjaChmc1BhdGhuYW1lKTtpZihmc1BhcmFtcyl7Y2hlY2tQYXJzZWRVcmwucGF0aG5hbWU9ZnNQYXRobmFtZTtjb25zdCBmc1Jlc3VsdD1hd2FpdCBmc1JvdXRlLmZuKHJlcSxyZXMsZnNQYXJhbXMsY2hlY2tQYXJzZWRVcmwpO2lmKGZzUmVzdWx0LmZpbmlzaGVkKXtyZXR1cm4gdHJ1ZTt9Y2hlY2tQYXJzZWRVcmwucGF0aG5hbWU9b3JpZ2luYWxGc1BhdGhuYW1lO319bGV0IG1hdGNoZWRQYWdlPWF3YWl0IG1lbW9pemVkUGFnZUNoZWNrZXIoZnNQYXRobmFtZSk7Ly8gSWYgd2UgZGlkbid0IG1hdGNoIGEgcGFnZSBjaGVjayBkeW5hbWljIHJvdXRlc1xuaWYoIW1hdGNoZWRQYWdlKXtjb25zdCBub3JtYWxpemVkRnNQYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShmc1BhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7Zm9yKGNvbnN0IGR5bmFtaWNSb3V0ZSBvZiB0aGlzLmR5bmFtaWNSb3V0ZXMpe2lmKGR5bmFtaWNSb3V0ZS5tYXRjaChub3JtYWxpemVkRnNQYXRobmFtZSkpe21hdGNoZWRQYWdlPXRydWU7fX19Ly8gTWF0Y2hlZCBhIHBhZ2Ugb3IgZHluYW1pYyByb3V0ZSBzbyByZW5kZXIgaXQgdXNpbmcgY2F0Y2hBbGxSb3V0ZVxuaWYobWF0Y2hlZFBhZ2Upe2NvbnN0IHBhZ2VQYXJhbXM9dGhpcy5jYXRjaEFsbFJvdXRlLm1hdGNoKGNoZWNrUGFyc2VkVXJsLnBhdGhuYW1lKTtjaGVja1BhcnNlZFVybC5wYXRobmFtZT1mc1BhdGhuYW1lO2NoZWNrUGFyc2VkVXJsLnF1ZXJ5Ll9uZXh0QnViYmxlTm9GYWxsYmFjaz0nMSc7Y29uc3QgcmVzdWx0PWF3YWl0IHRoaXMuY2F0Y2hBbGxSb3V0ZS5mbihyZXEscmVzLHBhZ2VQYXJhbXMsY2hlY2tQYXJzZWRVcmwpO3JldHVybiByZXN1bHQuZmluaXNoZWQ7fX07LypcbiAgICAgIERlc2lyZWQgcm91dGVzIG9yZGVyXG4gICAgICAtIGhlYWRlcnNcbiAgICAgIC0gcmVkaXJlY3RzXG4gICAgICAtIENoZWNrIGZpbGVzeXN0ZW0gKGluY2x1ZGluZyBwYWdlcyksIGlmIG5vdGhpbmcgZm91bmQgY29udGludWVcbiAgICAgIC0gVXNlciByZXdyaXRlcyAoY2hlY2tpbmcgZmlsZXN5c3RlbSBhbmQgcGFnZXMgZWFjaCBtYXRjaClcbiAgICAqL2NvbnN0IGFsbFJvdXRlcz1bLi4udGhpcy5oZWFkZXJzLC4uLnRoaXMucmVkaXJlY3RzLC4uLnRoaXMucmV3cml0ZXMuYmVmb3JlRmlsZXMsLi4udGhpcy5mc1JvdXRlcywvLyBXZSBvbmx5IGNoZWNrIHRoZSBjYXRjaC1hbGwgcm91dGUgaWYgcHVibGljIHBhZ2Ugcm91dGVzIGhhc24ndCBiZWVuXG4vLyBkaXNhYmxlZFxuLi4uKHRoaXMudXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcz9be3R5cGU6J3JvdXRlJyxuYW1lOidwYWdlIGNoZWNrZXInLHJlcXVpcmVCYXNlUGF0aDpmYWxzZSxtYXRjaDpyb3V0ZSgnLzpwYXRoKicpLGZuOmFzeW5jKGNoZWNrZXJSZXEsY2hlY2tlclJlcyxwYXJhbXMscGFyc2VkQ2hlY2tlclVybCk9PntsZXR7cGF0aG5hbWV9PXBhcnNlZENoZWNrZXJVcmw7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lfHwnLycpO2lmKCFwYXRobmFtZSl7cmV0dXJue2ZpbmlzaGVkOmZhbHNlfTt9aWYoYXdhaXQgbWVtb2l6ZWRQYWdlQ2hlY2tlcihwYXRobmFtZSkpe3JldHVybiB0aGlzLmNhdGNoQWxsUm91dGUuZm4oY2hlY2tlclJlcSxjaGVja2VyUmVzLHBhcmFtcyxwYXJzZWRDaGVja2VyVXJsKTt9cmV0dXJue2ZpbmlzaGVkOmZhbHNlfTt9fV06W10pLC4uLnRoaXMucmV3cml0ZXMuYWZ0ZXJGaWxlcywuLi4odGhpcy5yZXdyaXRlcy5mYWxsYmFjay5sZW5ndGg/W3t0eXBlOidyb3V0ZScsbmFtZTonZHluYW1pYyByb3V0ZS9wYWdlIGNoZWNrJyxyZXF1aXJlQmFzZVBhdGg6ZmFsc2UsbWF0Y2g6cm91dGUoJy86cGF0aConKSxmbjphc3luYyhfY2hlY2tlclJlcSxfY2hlY2tlclJlcyxfcGFyYW1zLHBhcnNlZENoZWNrZXJVcmwpPT57cmV0dXJue2ZpbmlzaGVkOmF3YWl0IGFwcGx5Q2hlY2tUcnVlKHBhcnNlZENoZWNrZXJVcmwpfTt9fSwuLi50aGlzLnJld3JpdGVzLmZhbGxiYWNrXTpbXSksLy8gV2Ugb25seSBjaGVjayB0aGUgY2F0Y2gtYWxsIHJvdXRlIGlmIHB1YmxpYyBwYWdlIHJvdXRlcyBoYXNuJ3QgYmVlblxuLy8gZGlzYWJsZWRcbi4uLih0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM/W3RoaXMuY2F0Y2hBbGxSb3V0ZV06W10pXTtjb25zdCBvcmlnaW5hbGx5SGFkQmFzZVBhdGg9IXRoaXMuYmFzZVBhdGh8fHJlcS5fbmV4dEhhZEJhc2VQYXRoO2Zvcihjb25zdCB0ZXN0Um91dGUgb2YgYWxsUm91dGVzKXsvLyBpZiBiYXNlUGF0aCBpcyBiZWluZyB1c2VkLCB0aGUgYmFzZVBhdGggd2lsbCBzdGlsbCBiZSBpbmNsdWRlZFxuLy8gaW4gdGhlIHBhdGhuYW1lIGhlcmUgdG8gYWxsb3cgY3VzdG9tLXJvdXRlcyB0byByZXF1aXJlIGNvbnRhaW5pbmdcbi8vIGl0IG9yIG5vdCwgZmlsZXN5c3RlbSByb3V0ZXMgYW5kIHBhZ2VzIG11c3QgYWx3YXlzIGluY2x1ZGUgdGhlIGJhc2VQYXRoXG4vLyBpZiBpdCBpcyBzZXRcbmxldCBjdXJyZW50UGF0aG5hbWU9cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZTtjb25zdCBvcmlnaW5hbFBhdGhuYW1lPWN1cnJlbnRQYXRobmFtZTtjb25zdCByZXF1aXJlQmFzZVBhdGg9dGVzdFJvdXRlLnJlcXVpcmVCYXNlUGF0aCE9PWZhbHNlO2NvbnN0IGlzQ3VzdG9tUm91dGU9Y3VzdG9tUm91dGVUeXBlcy5oYXModGVzdFJvdXRlLnR5cGUpO2NvbnN0IGlzUHVibGljRm9sZGVyQ2F0Y2hhbGw9dGVzdFJvdXRlLm5hbWU9PT0ncHVibGljIGZvbGRlciBjYXRjaGFsbCc7Y29uc3Qga2VlcEJhc2VQYXRoPWlzQ3VzdG9tUm91dGV8fGlzUHVibGljRm9sZGVyQ2F0Y2hhbGw7Y29uc3Qga2VlcExvY2FsZT1pc0N1c3RvbVJvdXRlO2NvbnN0IGN1cnJlbnRQYXRobmFtZU5vQmFzZVBhdGg9cmVwbGFjZUJhc2VQYXRoKHRoaXMuYmFzZVBhdGgsY3VycmVudFBhdGhuYW1lKTtpZigha2VlcEJhc2VQYXRoKXtjdXJyZW50UGF0aG5hbWU9Y3VycmVudFBhdGhuYW1lTm9CYXNlUGF0aDt9Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShjdXJyZW50UGF0aG5hbWVOb0Jhc2VQYXRoLHRoaXMubG9jYWxlcyk7Y29uc3QgYWN0aXZlQmFzZVBhdGg9a2VlcEJhc2VQYXRoP3RoaXMuYmFzZVBhdGg6Jyc7aWYoa2VlcExvY2FsZSl7aWYoIXRlc3RSb3V0ZS5pbnRlcm5hbCYmcGFyc2VkVXJsLnF1ZXJ5Ll9fbmV4dExvY2FsZSYmIWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe2N1cnJlbnRQYXRobmFtZT1gJHthY3RpdmVCYXNlUGF0aH0vJHtwYXJzZWRVcmwucXVlcnkuX19uZXh0TG9jYWxlfSR7Y3VycmVudFBhdGhuYW1lTm9CYXNlUGF0aD09PScvJz8nJzpjdXJyZW50UGF0aG5hbWVOb0Jhc2VQYXRofWA7fWlmKHJlcS5fX25leHRIYWRUcmFpbGluZ1NsYXNoJiYhY3VycmVudFBhdGhuYW1lLmVuZHNXaXRoKCcvJykpe2N1cnJlbnRQYXRobmFtZSs9Jy8nO319ZWxzZXtjdXJyZW50UGF0aG5hbWU9YCR7cmVxLl9uZXh0SGFkQmFzZVBhdGg/YWN0aXZlQmFzZVBhdGg6Jyd9JHthY3RpdmVCYXNlUGF0aCYmbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZT09PScvJz8nJzpsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lfWA7fWxldCBuZXdQYXJhbXM9dGVzdFJvdXRlLm1hdGNoKGN1cnJlbnRQYXRobmFtZSk7aWYodGVzdFJvdXRlLmhhcyYmbmV3UGFyYW1zKXtjb25zdCBoYXNQYXJhbXM9KDAsX3ByZXBhcmVEZXN0aW5hdGlvbi5tYXRjaEhhcykocmVxLHRlc3RSb3V0ZS5oYXMscGFyc2VkVXJsVXBkYXRlZC5xdWVyeSk7aWYoaGFzUGFyYW1zKXtPYmplY3QuYXNzaWduKG5ld1BhcmFtcyxoYXNQYXJhbXMpO31lbHNle25ld1BhcmFtcz1mYWxzZTt9fS8vIENoZWNrIGlmIHRoZSBtYXRjaCBmdW5jdGlvbiBtYXRjaGVkXG5pZihuZXdQYXJhbXMpey8vIHNpbmNlIHdlIHJlcXVpcmUgYmFzZVBhdGggYmUgcHJlc2VudCBmb3Igbm9uLWN1c3RvbS1yb3V0ZXMgd2Vcbi8vIDQwNCBoZXJlIHdoZW4gd2UgbWF0Y2hlZCBhbiBmcyByb3V0ZVxuaWYoIWtlZXBCYXNlUGF0aCl7aWYoIW9yaWdpbmFsbHlIYWRCYXNlUGF0aCYmIXJlcS5fbmV4dERpZFJld3JpdGUpe2lmKHJlcXVpcmVCYXNlUGF0aCl7Ly8gY29uc2lkZXIgdGhpcyBhIG5vbi1tYXRjaCBzbyB0aGUgNDA0IHJlbmRlcnNcbnJldHVybiBmYWxzZTt9Ly8gcGFnZSBjaGVja2VyIG9jY3VycyBiZWZvcmUgcmV3cml0ZXMgc28gd2UgbmVlZCB0byBjb250aW51ZVxuLy8gdG8gY2hlY2sgdGhvc2Ugc2luY2UgdGhleSBkb24ndCBhbHdheXMgcmVxdWlyZSBiYXNlUGF0aFxuY29udGludWU7fXBhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU9Y3VycmVudFBhdGhuYW1lO31jb25zdCByZXN1bHQ9YXdhaXQgdGVzdFJvdXRlLmZuKHJlcSxyZXMsbmV3UGFyYW1zLHBhcnNlZFVybFVwZGF0ZWQpOy8vIFRoZSByZXNwb25zZSB3YXMgaGFuZGxlZFxuaWYocmVzdWx0LmZpbmlzaGVkKXtyZXR1cm4gdHJ1ZTt9Ly8gc2luY2UgdGhlIGZzIHJvdXRlIGRpZG4ndCBtYXRjaCB3ZSBuZWVkIHRvIHJlLWFkZCB0aGUgYmFzZVBhdGhcbi8vIHRvIGNvbnRpbnVlIGNoZWNraW5nIHJld3JpdGVzIHdpdGggdGhlIGJhc2VQYXRoIHByZXNlbnRcbmlmKCFrZWVwQmFzZVBhdGgpe3BhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU9b3JpZ2luYWxQYXRobmFtZTt9aWYocmVzdWx0LnBhdGhuYW1lKXtwYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPXJlc3VsdC5wYXRobmFtZTt9aWYocmVzdWx0LnF1ZXJ5KXtwYXJzZWRVcmxVcGRhdGVkLnF1ZXJ5PXsuLi5wYXJzZWRVcmxVcGRhdGVkLnF1ZXJ5LC4uLnJlc3VsdC5xdWVyeX07fS8vIGNoZWNrIGZpbGVzeXN0ZW1cbmlmKHRlc3RSb3V0ZS5jaGVjaz09PXRydWUpe2lmKGF3YWl0IGFwcGx5Q2hlY2tUcnVlKHBhcnNlZFVybFVwZGF0ZWQpKXtyZXR1cm4gdHJ1ZTt9fX19cmV0dXJuIGZhbHNlO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9