(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./assets/images/jumboBack.jpg":
/*!*************************************!*\
  !*** ./assets/images/jumboBack.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jumboBack.cea82c1f65737183d96ff1142ce2a1e9.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
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

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ./assets/images/jumboBack.jpg */ "./assets/images/jumboBack.jpg");
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.container-fluid, .container-xl, .container-lg, .container-md, .container-sm {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.ftco-navbar-light {\n  background: transparent !important;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 3;\n  top: 30px;\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light {\n    background: #000 !important;\n    top: 0;\n    position: relative;\n  }\n}\n.ftco-navbar-light .navbar-brand {\n  color: #fff;\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link {\n  font-size: 16px;\n  padding-top: 0.9rem;\n  padding-bottom: 0.9rem;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: #f0f0f0;\n  opacity: 1 !important;\n}\n.ftco-navbar-light .navbar-nav > .nav-item > .nav-link:hover {\n  color: #fff;\n}\n.ftco-navbar-light .navbar-nav > .nav-item .dropdown-menu {\n  border: none;\n  background: #fff;\n  box-shadow: 0px 10px 34px -20px rgba(0, 0, 0, 0.41);\n}\n.ftco-navbar-light .navbar-nav > .nav-item.ftco-seperator {\n  position: relative;\n  margin-left: 20px;\n  padding-left: 20px;\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light .navbar-nav > .nav-item.ftco-seperator {\n    padding-left: 0;\n    margin-left: 0;\n  }\n}\n.ftco-navbar-light .navbar-nav > .nav-item.ftco-seperator:before {\n  position: absolute;\n  content: \"\";\n  top: 10px;\n  bottom: 10px;\n  left: 0;\n  width: 2px;\n  background: rgba(255, 255, 255, 0.05);\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light .navbar-nav > .nav-item.ftco-seperator:before {\n    display: none;\n  }\n}\n.ftco-navbar-light .navbar-nav > .nav-item.cta > a {\n  padding-left: 0;\n  color: #fff;\n}\n.ftco-navbar-light .navbar-nav > .nav-item.cta > a span {\n  border: 2px solid #fff;\n  display: inline-block;\n  padding: 10px 20px;\n  border-radius: 4px;\n}\n.ftco-navbar-light .navbar-nav > .nav-item.cta.cta-colored span {\n  border-color: #78d5ef;\n}\n.ftco-navbar-light .navbar-nav > .nav-item.active > a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.ftco-navbar-light .navbar-toggler {\n  border: none;\n  color: rgba(255, 255, 255, 0.5) !important;\n  cursor: pointer;\n  padding-right: 0;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 0.1em;\n}\n.ftco-navbar-light.scrolled {\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  margin-top: -130px;\n  background: #f8f9fa !important;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n}\n.ftco-navbar-light.scrolled .nav-item.active > a {\n  color: #78d5ef !important;\n}\n@media (max-width: 991.98px) {\n  .ftco-navbar-light.scrolled .navbar-nav {\n    background: none;\n    border-radius: 0px;\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ftco-navbar-light.scrolled .navbar-nav {\n    background: none;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n}\n.ftco-navbar-light.scrolled .navbar-toggler {\n  border: none;\n  color: rgba(0, 0, 0, 0.5) !important;\n  border-color: rgba(0, 0, 0, 0.5) !important;\n  cursor: pointer;\n  padding-right: 0;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 0.1em;\n}\n.ftco-navbar-light.scrolled .nav-link {\n  padding-top: 0.9rem !important;\n  padding-bottom: 0.9rem !important;\n  color: #000 !important;\n}\n.ftco-navbar-light.scrolled .nav-link.active {\n  color: #78d5ef !important;\n}\n.ftco-navbar-light.scrolled.awake {\n  margin-top: 0px;\n  transition: 0.3s all ease-out;\n}\n.ftco-navbar-light.scrolled.sleep {\n  transition: 0.3s all ease-out;\n}\n.ftco-navbar-light.scrolled .navbar-brand {\n  color: #000;\n}\n\n/*****Header*****/\nheader {\n  position: relative;\n  background-color: black;\n  height: 75vh;\n  min-height: 25rem;\n  width: 100%;\n  overflow: hidden;\n}\n\nheader video {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: 0;\n  transform: translateX(-50%) translateY(-50%);\n}\n\nheader .container {\n  position: relative;\n  z-index: 2;\n}\n\nheader .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  opacity: 0.5;\n  z-index: 1;\n}\n\n@media (pointer: coarse) and (hover: none) {\n  header {\n    background: url(\"https://source.unsplash.com/XT5OInaElMw/1600x900\") black no-repeat center center scroll;\n  }\n\n  header video {\n    display: none;\n  }\n}\n/***** Slider *****/\n.home-slider {\n  z-index: 0;\n  position: relative;\n}\n.home-slider .slider-item {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: calc(100vh - 117px);\n  min-height: 800px;\n  position: relative;\n}\n.home-slider .slider-item .slider-text {\n  color: #fff;\n  height: calc(100vh - 117px);\n  min-height: 500px;\n}\n.home-slider .slider-item .slider-text h1 {\n  font-size: 52px;\n  color: #fff;\n  line-height: 1.2;\n  font-weight: 200;\n}\n@media (max-width: 991.98px) {\n  .home-slider .slider-item .slider-text h1 {\n    font-size: 40px;\n  }\n}\n.home-slider .slider-item .slider-text h1 strong {\n  font-weight: 800;\n}\n.home-slider .slider-item .slider-text .typewrite > .wrap {\n  position: relative;\n  border-right: 0.08em solid rgba(255, 255, 255, 0);\n}\n.home-slider .slider-item .slider-text .typewrite > .wrap:after {\n  position: absolute;\n  top: 0;\n  bottom: 12px;\n  right: -5px;\n  width: 4px;\n  content: \"\";\n  background: #fff;\n}\n.home-slider .slider-item .slider-text p {\n  font-size: 20px;\n  line-height: 1.5;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.8);\n}\n.home-slider .slider-item .slider-text p strong {\n  font-weight: 700;\n}\n.home-slider .slider-item .slider-text p strong a {\n  color: #fff;\n}\n.home-slider .slider-item .slider-text .breadcrumbs {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n  z-index: 99;\n}\n.home-slider .slider-item .slider-text .breadcrumbs span {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.home-slider .slider-item .slider-text .breadcrumbs span a {\n  color: #fff;\n}\n.home-slider .slider-item .slider-text .bread {\n  font-weight: 300 !important;\n}\n.home-slider .slider-item .slider-text .btn-primary {\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 30px;\n}\n.home-slider .slider-item .slider-text .btn-primary:hover, .home-slider .slider-item .slider-text .btn-primary:focus {\n  background: #fff !important;\n  color: #000;\n}\n.home-slider .slider-item.bread-wrap .slider-text {\n  color: #fff;\n  min-height: 750px;\n}\n\n.jumbotron {\n  background-image: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  min-height: 800px;\n}\n\n.service-image {\n  background-size: cover;\n}\n\n.react-rotating-text-cursor {\n  -webkit-animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;\n          animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;\n}\n\n@-webkit-keyframes blinking-cursor {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinking-cursor {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.section {\n  padding: 7em 0;\n  position: relative;\n}\n@media (max-width: 767.98px) {\n  .section {\n    padding: 6em 0;\n  }\n}\n.section .bg-light {\n  background: #f8f9fa !important;\n}\n\n.heading {\n  color: #000;\n}\n.heading.border-bottom {\n  position: relative;\n  padding-bottom: 30px;\n  border-bottom: none !important;\n}\n.heading.border-bottom:before {\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  width: 50px;\n  height: 2px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #007bff;\n}\n.heading.border-bottom.text-left:before {\n  left: 0;\n  transform: translateX(0);\n}\n\n.block-3 {\n  min-width: 100%;\n}\n.block-3 .text, .block-3 .image {\n  width: 100%;\n  padding: 10% 7%;\n  display: block;\n}\n@media (min-width: 768px) {\n  .block-3 .text, .block-3 .image {\n    width: 100%;\n    padding: 10% 7%;\n  }\n}\n.block-3 .text {\n  background: #f8faff;\n}\n.block-3 .text .subheading {\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #a3c2d1;\n}\n.block-3 .text .heading {\n  font-size: 30px;\n  margin-bottom: 30px;\n}\n.block-3 .text p:last-child {\n  margin-bottom: 0;\n}\n.block-3 .image {\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n@media (max-width: 767.98px) {\n  .block-3 .image {\n    height: 300px;\n  }\n}\n\n/*!\n * Bootstrap v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #78d5ef;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\na {\n  color: #78d5ef;\n  text-decoration: none;\n  background-color: transparent;\n}\na:hover {\n  color: #34c0e7;\n  text-decoration: underline;\n}\n\na:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nselect {\n  word-wrap: normal;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=radio],\ninput[type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=date],\ninput[type=time],\ninput[type=datetime-local],\ninput[type=month] {\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1, .h1 {\n  font-size: 2.5rem;\n}\n\nh2, .h2 {\n  font-size: 2rem;\n}\n\nh3, .h3 {\n  font-size: 1.75rem;\n}\n\nh4, .h4 {\n  font-size: 1.5rem;\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"— \";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid, .container-xl, .container-lg, .container-md, .container-sm {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-xl,\n.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,\n.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,\n.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,\n.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,\n.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.row-cols-3 > * {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.row-cols-6 > * {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n\n.col-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n\n.col-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n\n.col-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n\n.col-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n\n.col-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  order: -1;\n}\n\n.order-last {\n  order: 13;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n\n.order-11 {\n  order: 11;\n}\n\n.order-12 {\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.3333333333%;\n}\n\n.offset-2 {\n  margin-left: 16.6666666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.3333333333%;\n}\n\n.offset-5 {\n  margin-left: 41.6666666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.3333333333%;\n}\n\n.offset-8 {\n  margin-left: 66.6666666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.3333333333%;\n}\n\n.offset-11 {\n  margin-left: 91.6666666667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-sm-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-sm-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-sm-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-sm-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-sm-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-sm-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-sm-first {\n    order: -1;\n  }\n\n  .order-sm-last {\n    order: 13;\n  }\n\n  .order-sm-0 {\n    order: 0;\n  }\n\n  .order-sm-1 {\n    order: 1;\n  }\n\n  .order-sm-2 {\n    order: 2;\n  }\n\n  .order-sm-3 {\n    order: 3;\n  }\n\n  .order-sm-4 {\n    order: 4;\n  }\n\n  .order-sm-5 {\n    order: 5;\n  }\n\n  .order-sm-6 {\n    order: 6;\n  }\n\n  .order-sm-7 {\n    order: 7;\n  }\n\n  .order-sm-8 {\n    order: 8;\n  }\n\n  .order-sm-9 {\n    order: 9;\n  }\n\n  .order-sm-10 {\n    order: 10;\n  }\n\n  .order-sm-11 {\n    order: 11;\n  }\n\n  .order-sm-12 {\n    order: 12;\n  }\n\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n\n  .offset-sm-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-sm-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n\n  .offset-sm-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-sm-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n\n  .offset-sm-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-sm-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n\n  .offset-sm-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-sm-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-md-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-md-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-md-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-md-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-md-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-md-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-md-first {\n    order: -1;\n  }\n\n  .order-md-last {\n    order: 13;\n  }\n\n  .order-md-0 {\n    order: 0;\n  }\n\n  .order-md-1 {\n    order: 1;\n  }\n\n  .order-md-2 {\n    order: 2;\n  }\n\n  .order-md-3 {\n    order: 3;\n  }\n\n  .order-md-4 {\n    order: 4;\n  }\n\n  .order-md-5 {\n    order: 5;\n  }\n\n  .order-md-6 {\n    order: 6;\n  }\n\n  .order-md-7 {\n    order: 7;\n  }\n\n  .order-md-8 {\n    order: 8;\n  }\n\n  .order-md-9 {\n    order: 9;\n  }\n\n  .order-md-10 {\n    order: 10;\n  }\n\n  .order-md-11 {\n    order: 11;\n  }\n\n  .order-md-12 {\n    order: 12;\n  }\n\n  .offset-md-0 {\n    margin-left: 0;\n  }\n\n  .offset-md-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-md-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n\n  .offset-md-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-md-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n\n  .offset-md-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-md-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n\n  .offset-md-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-md-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-lg-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-lg-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-lg-first {\n    order: -1;\n  }\n\n  .order-lg-last {\n    order: 13;\n  }\n\n  .order-lg-0 {\n    order: 0;\n  }\n\n  .order-lg-1 {\n    order: 1;\n  }\n\n  .order-lg-2 {\n    order: 2;\n  }\n\n  .order-lg-3 {\n    order: 3;\n  }\n\n  .order-lg-4 {\n    order: 4;\n  }\n\n  .order-lg-5 {\n    order: 5;\n  }\n\n  .order-lg-6 {\n    order: 6;\n  }\n\n  .order-lg-7 {\n    order: 7;\n  }\n\n  .order-lg-8 {\n    order: 8;\n  }\n\n  .order-lg-9 {\n    order: 9;\n  }\n\n  .order-lg-10 {\n    order: 10;\n  }\n\n  .order-lg-11 {\n    order: 11;\n  }\n\n  .order-lg-12 {\n    order: 12;\n  }\n\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n\n  .offset-lg-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-lg-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n\n  .offset-lg-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-lg-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n\n  .offset-lg-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-lg-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n\n  .offset-lg-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-lg-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-xl-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-xl-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-xl-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-xl-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-xl-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-xl-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-xl-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-xl-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-xl-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-xl-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-xl-first {\n    order: -1;\n  }\n\n  .order-xl-last {\n    order: 13;\n  }\n\n  .order-xl-0 {\n    order: 0;\n  }\n\n  .order-xl-1 {\n    order: 1;\n  }\n\n  .order-xl-2 {\n    order: 2;\n  }\n\n  .order-xl-3 {\n    order: 3;\n  }\n\n  .order-xl-4 {\n    order: 4;\n  }\n\n  .order-xl-5 {\n    order: 5;\n  }\n\n  .order-xl-6 {\n    order: 6;\n  }\n\n  .order-xl-7 {\n    order: 7;\n  }\n\n  .order-xl-8 {\n    order: 8;\n  }\n\n  .order-xl-9 {\n    order: 9;\n  }\n\n  .order-xl-10 {\n    order: 10;\n  }\n\n  .order-xl-11 {\n    order: 11;\n  }\n\n  .order-xl-12 {\n    order: 12;\n  }\n\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xl-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-xl-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xl-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-xl-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xl-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-xl-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xl-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-xl-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid #dee2e6;\n}\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6;\n}\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #d9f3fb;\n}\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #b9e9f7;\n}\n\n.table-hover .table-primary:hover {\n  background-color: #c2ecf9;\n}\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #c2ecf9;\n}\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db;\n}\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #b3b7bb;\n}\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf;\n}\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #c8cbcf;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb;\n}\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #8fd19e;\n}\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb;\n}\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #b1dfbb;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #86cfda;\n}\n\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba;\n}\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffdf7e;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1;\n}\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffe8a1;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb;\n}\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #ed969e;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7;\n}\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #f1b0b7;\n}\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc;\n}\n\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c;\n}\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #454d55;\n}\n.table-dark.table-bordered {\n  border: 0;\n}\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.table-dark.table-hover tbody tr:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #eaf8fd;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n.form-control::-webkit-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row > .col,\n.form-row > [class*=col-] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  color: #6c757d;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n}\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745;\n}\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #34ce57;\n  background-color: #34ce57;\n}\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745;\n}\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #e4606d;\n  background-color: #e4606d;\n}\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545;\n}\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.form-inline .form-check {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .form-inline label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group,\n.form-inline .custom-select {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n.btn:hover {\n  color: #212529;\n  text-decoration: none;\n}\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #212529;\n  background-color: #78d5ef;\n  border-color: #78d5ef;\n}\n.btn-primary:hover {\n  color: #212529;\n  background-color: #56caeb;\n  border-color: #4ac7ea;\n}\n.btn-primary:focus, .btn-primary.focus {\n  color: #212529;\n  background-color: #56caeb;\n  border-color: #4ac7ea;\n  box-shadow: 0 0 0 0.2rem rgba(107, 187, 209, 0.5);\n}\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #212529;\n  background-color: #78d5ef;\n  border-color: #78d5ef;\n}\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n  color: #212529;\n  background-color: #4ac7ea;\n  border-color: #3fc3e8;\n}\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(107, 187, 209, 0.5);\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n.btn-secondary:focus, .btn-secondary.focus {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n.btn-success.disabled, .btn-success:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.btn-info:focus, .btn-info.focus {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n.btn-warning:focus, .btn-warning.focus {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-danger:focus, .btn-danger.focus {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n.btn-light:focus, .btn-light.focus {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n.btn-dark:focus, .btn-dark.focus {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n.btn-outline-primary {\n  color: #78d5ef;\n  border-color: #78d5ef;\n}\n.btn-outline-primary:hover {\n  color: #212529;\n  background-color: #78d5ef;\n  border-color: #78d5ef;\n}\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5);\n}\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #78d5ef;\n  background-color: transparent;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {\n  color: #212529;\n  background-color: #78d5ef;\n  border-color: #78d5ef;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5);\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success {\n  color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #78d5ef;\n  text-decoration: none;\n}\n.btn-link:hover {\n  color: #34c0e7;\n  text-decoration: underline;\n}\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n  box-shadow: none;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\n\ninput[type=submit].btn-block,\ninput[type=reset].btn-block,\ninput[type=button].btn-block {\n  width: 100%;\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto;\n  }\n}\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-menu[x-placement^=top], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left] {\n  right: auto;\n  bottom: auto;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #78d5ef;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n.btn-group-toggle > .btn input[type=radio],\n.btn-group-toggle > .btn input[type=checkbox],\n.btn-group-toggle > .btn-group > .btn input[type=radio],\n.btn-group-toggle > .btn-group > .btn input[type=checkbox] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-control-plaintext,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  flex: 1 1;\n  min-width: 0;\n  margin-bottom: 0;\n}\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .form-control-plaintext + .form-control,\n.input-group > .form-control-plaintext + .custom-select,\n.input-group > .form-control-plaintext + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px;\n}\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3;\n}\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4;\n}\n.input-group > .form-control:not(:last-child),\n.input-group > .custom-select:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .custom-file {\n  display: flex;\n  align-items: center;\n}\n.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend,\n.input-group-append {\n  display: flex;\n}\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group-prepend .btn:focus,\n.input-group-append .btn:focus {\n  z-index: 3;\n}\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n\n.input-group-prepend {\n  margin-right: -1px;\n}\n\n.input-group-append {\n  margin-left: -1px;\n}\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-text input[type=radio],\n.input-group-text input[type=checkbox] {\n  margin-top: 0;\n}\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px);\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem;\n}\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1rem;\n  height: 1.25rem;\n  opacity: 0;\n}\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #78d5ef;\n  background-color: #78d5ef;\n}\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #eaf8fd;\n}\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: white;\n  border-color: white;\n}\n.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d;\n}\n.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n.custom-control-label::before {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  background-color: #fff;\n  border: #adb5bd solid 1px;\n}\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background: no-repeat 50%/50% 50%;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\");\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #78d5ef;\n  background-color: #78d5ef;\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\");\n}\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(120, 213, 239, 0.5);\n}\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(120, 213, 239, 0.5);\n}\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(120, 213, 239, 0.5);\n}\n\n.custom-switch {\n  padding-left: 2.25rem;\n}\n.custom-switch .custom-control-label::before {\n  left: -2.25rem;\n  width: 1.75rem;\n  pointer-events: all;\n  border-radius: 0.5rem;\n}\n.custom-switch .custom-control-label::after {\n  top: calc(0.25rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc(1rem - 4px);\n  height: calc(1rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 0.5rem;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch .custom-control-label::after {\n    transition: none;\n  }\n}\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  background-color: #fff;\n  transform: translateX(0.75rem);\n}\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(120, 213, 239, 0.5);\n}\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-select:focus {\n  border-color: #eaf8fd;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.custom-select:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n.custom-select::-ms-expand {\n  display: none;\n}\n.custom-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n}\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: #eaf8fd;\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n.custom-file-input[disabled] ~ .custom-file-label, .custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef;\n}\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: \"Browse\";\n}\n.custom-file-input ~ .custom-file-label[data-browse]::after {\n  content: attr(data-browse);\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-range:focus {\n  outline: none;\n}\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n.custom-range::-moz-focus-outer {\n  border: 0;\n}\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #78d5ef;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.custom-range::-webkit-slider-thumb:active {\n  background-color: white;\n}\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #78d5ef;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n.custom-range::-moz-range-thumb:active {\n  background-color: white;\n}\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #78d5ef;\n  border: 0;\n  border-radius: 1rem;\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-ms-thumb {\n    -ms-transition: none;\n    transition: none;\n  }\n}\n.custom-range::-ms-thumb:active {\n  background-color: white;\n}\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n}\n.custom-range::-ms-fill-lower {\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n.custom-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.custom-range:disabled::-webkit-slider-runnable-track {\n  cursor: default;\n}\n.custom-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n.custom-range:disabled::-moz-range-track {\n  cursor: default;\n}\n.custom-range:disabled::-ms-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-control-label::before,\n.custom-file-label,\n.custom-select {\n    transition: none;\n  }\n}\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none;\n}\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n}\n.nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #78d5ef;\n}\n\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.navbar .container,\n.navbar .container-fluid,\n.navbar .container-sm,\n.navbar .container-md,\n.navbar .container-lg,\n.navbar .container-xl {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration: none;\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n.navbar-expand-sm > .container-fluid,\n.navbar-expand-sm > .container-sm,\n.navbar-expand-sm > .container-md,\n.navbar-expand-sm > .container-lg,\n.navbar-expand-sm > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm > .container,\n.navbar-expand-sm > .container-fluid,\n.navbar-expand-sm > .container-sm,\n.navbar-expand-sm > .container-md,\n.navbar-expand-sm > .container-lg,\n.navbar-expand-sm > .container-xl {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n}\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n.navbar-expand-md > .container-fluid,\n.navbar-expand-md > .container-sm,\n.navbar-expand-md > .container-md,\n.navbar-expand-md > .container-lg,\n.navbar-expand-md > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md > .container,\n.navbar-expand-md > .container-fluid,\n.navbar-expand-md > .container-sm,\n.navbar-expand-md > .container-md,\n.navbar-expand-md > .container-lg,\n.navbar-expand-md > .container-xl {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n}\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n.navbar-expand-lg > .container-fluid,\n.navbar-expand-lg > .container-sm,\n.navbar-expand-lg > .container-md,\n.navbar-expand-lg > .container-lg,\n.navbar-expand-lg > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg > .container,\n.navbar-expand-lg > .container-fluid,\n.navbar-expand-lg > .container-sm,\n.navbar-expand-lg > .container-md,\n.navbar-expand-lg > .container-lg,\n.navbar-expand-lg > .container-xl {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n}\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n.navbar-expand-xl > .container-fluid,\n.navbar-expand-xl > .container-sm,\n.navbar-expand-xl > .container-md,\n.navbar-expand-xl > .container-lg,\n.navbar-expand-xl > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl > .container,\n.navbar-expand-xl > .container-fluid,\n.navbar-expand-xl > .container-sm,\n.navbar-expand-xl > .container-md,\n.navbar-expand-xl > .container-lg,\n.navbar-expand-xl > .container-xl {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n}\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid,\n.navbar-expand > .container-sm,\n.navbar-expand > .container-md,\n.navbar-expand > .container-lg,\n.navbar-expand > .container-xl {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-expand .navbar-nav {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid,\n.navbar-expand > .container-sm,\n.navbar-expand > .container-md,\n.navbar-expand > .container-lg,\n.navbar-expand > .container-xl {\n  flex-wrap: nowrap;\n}\n.navbar-expand .navbar-collapse {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n.card-header + .list-group .list-group-item:first-child {\n  border-top: 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0;\n  width: 100%;\n}\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-deck .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-deck {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    flex: 1 0;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n\n.card-group > .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    flex: 1 0;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n.card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n.card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n.card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n.card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n  .card-columns {\n    -moz-column-count: 3;\n         column-count: 3;\n    grid-column-gap: 1.25rem;\n    -moz-column-gap: 1.25rem;\n         column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n.accordion > .card {\n  overflow: hidden;\n}\n.accordion > .card:not(:last-of-type) {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.accordion > .card:not(:first-of-type) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.accordion > .card > .card-header {\n  border-radius: 0;\n  margin-bottom: -1px;\n}\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: \"/\";\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #78d5ef;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n.page-link:hover {\n  z-index: 2;\n  color: #34c0e7;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link:focus {\n  z-index: 3;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.25);\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #78d5ef;\n  border-color: #78d5ef;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .badge {\n    transition: none;\n  }\n}\na.badge:hover, a.badge:focus {\n  text-decoration: none;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n\n.badge-primary {\n  color: #212529;\n  background-color: #78d5ef;\n}\na.badge-primary:hover, a.badge-primary:focus {\n  color: #212529;\n  background-color: #4ac7ea;\n}\na.badge-primary:focus, a.badge-primary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(120, 213, 239, 0.5);\n}\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d;\n}\na.badge-secondary:hover, a.badge-secondary:focus {\n  color: #fff;\n  background-color: #545b62;\n}\na.badge-secondary:focus, a.badge-secondary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\na.badge-success:hover, a.badge-success:focus {\n  color: #fff;\n  background-color: #1e7e34;\n}\na.badge-success:focus, a.badge-success.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\na.badge-info:hover, a.badge-info:focus {\n  color: #fff;\n  background-color: #117a8b;\n}\na.badge-info:focus, a.badge-info.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n}\na.badge-warning:hover, a.badge-warning:focus {\n  color: #212529;\n  background-color: #d39e00;\n}\na.badge-warning:focus, a.badge-warning.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\na.badge-danger:hover, a.badge-danger:focus {\n  color: #fff;\n  background-color: #bd2130;\n}\na.badge-danger:focus, a.badge-danger.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\na.badge-light:hover, a.badge-light:focus {\n  color: #212529;\n  background-color: #dae0e5;\n}\na.badge-light:focus, a.badge-light.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\na.badge-dark:hover, a.badge-dark:focus {\n  color: #fff;\n  background-color: #1d2124;\n}\na.badge-dark:focus, a.badge-dark.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n}\n\n.alert-dismissible {\n  padding-right: 4rem;\n}\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #3e6f7c;\n  background-color: #e4f7fc;\n  border-color: #d9f3fb;\n}\n.alert-primary hr {\n  border-top-color: #c2ecf9;\n}\n.alert-primary .alert-link {\n  color: #2d515a;\n}\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n.alert-secondary hr {\n  border-top-color: #c8cbcf;\n}\n.alert-secondary .alert-link {\n  color: #202326;\n}\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-success hr {\n  border-top-color: #b1dfbb;\n}\n.alert-success .alert-link {\n  color: #0b2e13;\n}\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.alert-info hr {\n  border-top-color: #abdde5;\n}\n.alert-info .alert-link {\n  color: #062c33;\n}\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert-warning hr {\n  border-top-color: #ffe8a1;\n}\n.alert-warning .alert-link {\n  color: #533f03;\n}\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.alert-danger hr {\n  border-top-color: #f1b0b7;\n}\n.alert-danger .alert-link {\n  color: #491217;\n}\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light hr {\n  border-top-color: #ececf6;\n}\n.alert-light .alert-link {\n  color: #686868;\n}\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n.alert-dark hr {\n  border-top-color: #b9bbbe;\n}\n.alert-dark .alert-link {\n  color: #040505;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #78d5ef;\n  transition: width 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n\n.media {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body {\n  flex: 1 1;\n}\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #78d5ef;\n  border-color: #78d5ef;\n}\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n\n.list-group-horizontal {\n  flex-direction: row;\n}\n.list-group-horizontal .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n.list-group-horizontal .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal .list-group-item.active {\n  margin-top: 0;\n}\n.list-group-horizontal .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n.list-group-horizontal .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row;\n  }\n  .list-group-horizontal-md .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n.list-group-flush .list-group-item {\n  border-right-width: 0;\n  border-left-width: 0;\n  border-radius: 0;\n}\n.list-group-flush .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n\n.list-group-item-primary {\n  color: #3e6f7c;\n  background-color: #d9f3fb;\n}\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #3e6f7c;\n  background-color: #c2ecf9;\n}\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #3e6f7c;\n  border-color: #3e6f7c;\n}\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba;\n}\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n.close:hover {\n  color: #000;\n  text-decoration: none;\n}\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  opacity: 0.75;\n}\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\na.close.disabled {\n  pointer-events: none;\n}\n\n.toast {\n  max-width: 350px;\n  overflow: hidden;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  opacity: 0;\n  border-radius: 0.25rem;\n}\n.toast:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.toast.showing {\n  opacity: 1;\n}\n.toast.show {\n  display: block;\n  opacity: 1;\n}\n.toast.hide {\n  display: none;\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.toast-body {\n  padding: 0.75rem;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal.modal-static .modal-dialog {\n  transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  display: flex;\n  max-height: calc(100% - 1rem);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: calc(100vh - 1rem);\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer {\n  flex-shrink: 0;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - 1rem);\n  content: \"\";\n}\n.modal-dialog-centered.modal-dialog-scrollable {\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n  max-height: none;\n}\n.modal-dialog-centered.modal-dialog-scrollable::before {\n  content: none;\n}\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.modal-header .close {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n.modal-footer > * {\n  margin: 0.25rem;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 3.5rem);\n  }\n\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-centered::before {\n    height: calc(100vh - 3.5rem);\n  }\n\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n.modal-xl {\n    max-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: 0.9;\n}\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.tooltip .arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=top] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=top] .arrow {\n  bottom: 0;\n}\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=top] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=right] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=right] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=right] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=bottom] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=bottom] .arrow {\n  top: 0;\n}\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=left] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=left] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=left] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top, .bs-popover-auto[x-placement^=top] {\n  margin-bottom: 0.5rem;\n}\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^=top] > .arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=top] > .arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=top] > .arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n\n.bs-popover-right, .bs-popover-auto[x-placement^=right] {\n  margin-left: 0.5rem;\n}\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^=right] > .arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=right] > .arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=right] > .arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=bottom] {\n  margin-top: 0.5rem;\n}\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=bottom] > .arrow {\n  top: calc(-0.5rem - 1px);\n}\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid #f7f7f7;\n}\n\n.bs-popover-left, .bs-popover-auto[x-placement^=left] {\n  margin-right: 0.5rem;\n}\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^=left] > .arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=left] > .arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=left] > .arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%);\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n.carousel-control-next {\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50%/100% 100%;\n}\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators li {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators li {\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n\n@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: spinner-border 0.75s linear infinite;\n          animation: spinner-border 0.75s linear infinite;\n}\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: spinner-grow 0.75s linear infinite;\n          animation: spinner-grow 0.75s linear infinite;\n}\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.bg-primary {\n  background-color: #78d5ef !important;\n}\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #4ac7ea !important;\n}\n\n.bg-secondary {\n  background-color: #6c757d !important;\n}\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important;\n}\n\n.bg-success {\n  background-color: #28a745 !important;\n}\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important;\n}\n\n.bg-info {\n  background-color: #17a2b8 !important;\n}\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important;\n}\n\n.bg-warning {\n  background-color: #ffc107 !important;\n}\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important;\n}\n\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important;\n}\n\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important;\n}\n\n.bg-dark {\n  background-color: #343a40 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-right-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-left-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #78d5ef !important;\n}\n\n.border-secondary {\n  border-color: #6c757d !important;\n}\n\n.border-success {\n  border-color: #28a745 !important;\n}\n\n.border-info {\n  border-color: #17a2b8 !important;\n}\n\n.border-warning {\n  border-color: #ffc107 !important;\n}\n\n.border-danger {\n  border-color: #dc3545 !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #343a40 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.rounded-sm {\n  border-radius: 0.2rem !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-lg {\n  border-radius: 0.3rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n\n  .d-sm-inline {\n    display: inline !important;\n  }\n\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-sm-block {\n    display: block !important;\n  }\n\n  .d-sm-table {\n    display: table !important;\n  }\n\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-sm-flex {\n    display: flex !important;\n  }\n\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n\n  .d-md-inline {\n    display: inline !important;\n  }\n\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-md-block {\n    display: block !important;\n  }\n\n  .d-md-table {\n    display: table !important;\n  }\n\n  .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-md-flex {\n    display: flex !important;\n  }\n\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n\n  .d-lg-inline {\n    display: inline !important;\n  }\n\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-lg-block {\n    display: block !important;\n  }\n\n  .d-lg-table {\n    display: table !important;\n  }\n\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-lg-flex {\n    display: flex !important;\n  }\n\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n\n  .d-xl-inline {\n    display: inline !important;\n  }\n\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xl-block {\n    display: block !important;\n  }\n\n  .d-xl-table {\n    display: table !important;\n  }\n\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xl-flex {\n    display: flex !important;\n  }\n\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n\n  .d-print-inline {\n    display: inline !important;\n  }\n\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-print-block {\n    display: block !important;\n  }\n\n  .d-print-table {\n    display: table !important;\n  }\n\n  .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-print-flex {\n    display: flex !important;\n  }\n\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive::before {\n  display: block;\n  content: \"\";\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9::before {\n  padding-top: 42.8571428571%;\n}\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-md-center {\n    align-items: center !important;\n  }\n\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-md-center {\n    align-content: center !important;\n  }\n\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-md-center {\n    align-self: center !important;\n  }\n\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n}\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n\n  .float-sm-right {\n    float: right !important;\n  }\n\n  .float-sm-none {\n    float: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n\n  .float-md-right {\n    float: right !important;\n  }\n\n  .float-md-none {\n    float: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n\n  .float-lg-right {\n    float: right !important;\n  }\n\n  .float-lg-none {\n    float: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n\n  .float-xl-right {\n    float: right !important;\n  }\n\n  .float-xl-none {\n    float: none !important;\n  }\n}\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.m-n1 {\n  margin: -0.25rem !important;\n}\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n\n.m-n2 {\n  margin: -0.5rem !important;\n}\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n\n.m-n3 {\n  margin: -1rem !important;\n}\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n\n.m-n4 {\n  margin: -1.5rem !important;\n}\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n\n.m-n5 {\n  margin: -3rem !important;\n}\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .mt-sm-0,\n.my-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-sm-0,\n.mx-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-sm-0,\n.my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-sm-0,\n.mx-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-sm-1,\n.my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-sm-1,\n.mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-sm-1,\n.my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-sm-1,\n.mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-sm-2,\n.my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-sm-2,\n.mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-sm-2,\n.my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-sm-2,\n.mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-sm-3,\n.my-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-sm-3,\n.mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-sm-3,\n.my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-sm-3,\n.mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-sm-4,\n.my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-sm-4,\n.mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-sm-4,\n.my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-sm-4,\n.mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-sm-5,\n.my-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-sm-5,\n.mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-sm-5,\n.my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-sm-5,\n.mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .pt-sm-0,\n.py-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-sm-0,\n.px-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-sm-0,\n.py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-sm-0,\n.px-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-sm-1,\n.py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-sm-1,\n.px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-sm-1,\n.py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-sm-1,\n.px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-sm-2,\n.py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-sm-2,\n.px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-sm-2,\n.py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-sm-2,\n.px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-sm-3,\n.py-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-sm-3,\n.px-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-sm-3,\n.py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-sm-3,\n.px-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-sm-4,\n.py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-sm-4,\n.px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-sm-4,\n.py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-sm-4,\n.px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-sm-5,\n.py-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-sm-5,\n.px-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-5,\n.py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-sm-5,\n.px-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-sm-n1,\n.my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-sm-n1,\n.mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-sm-n1,\n.my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-sm-n1,\n.mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-sm-n2,\n.my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-sm-n2,\n.mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-sm-n2,\n.my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-sm-n2,\n.mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-sm-n3,\n.my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-sm-n3,\n.mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-sm-n3,\n.my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-sm-n3,\n.mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-sm-n4,\n.my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-sm-n4,\n.mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-sm-n4,\n.my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-sm-n4,\n.mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-sm-n5,\n.my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-sm-n5,\n.mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-sm-n5,\n.my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-sm-n5,\n.mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mt-sm-auto,\n.my-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-sm-auto,\n.mx-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-auto,\n.my-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-sm-auto,\n.mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .mt-md-0,\n.my-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-md-0,\n.mx-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-md-0,\n.my-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-md-0,\n.mx-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-md-1,\n.my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-md-1,\n.mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-md-1,\n.my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-md-1,\n.mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-md-2,\n.my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-md-2,\n.mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-md-2,\n.my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-md-2,\n.mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-md-3,\n.my-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-md-3,\n.mx-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-md-3,\n.my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-md-3,\n.mx-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-md-4,\n.my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-md-4,\n.mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-md-4,\n.my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-md-4,\n.mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-md-5,\n.my-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-md-5,\n.mx-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-md-5,\n.my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-md-5,\n.mx-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .pt-md-0,\n.py-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-md-0,\n.px-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-md-0,\n.py-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-md-0,\n.px-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-md-1,\n.py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-md-1,\n.px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-md-1,\n.py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-md-1,\n.px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-md-2,\n.py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-md-2,\n.px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-md-2,\n.py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-md-2,\n.px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-md-3,\n.py-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-md-3,\n.px-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-md-3,\n.py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-md-3,\n.px-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-md-4,\n.py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-md-4,\n.px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-md-4,\n.py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-md-4,\n.px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-md-5,\n.py-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-md-5,\n.px-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-5,\n.py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-md-5,\n.px-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-md-n1,\n.my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-md-n1,\n.mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-md-n1,\n.my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-md-n1,\n.mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-md-n2,\n.my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-md-n2,\n.mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-md-n2,\n.my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-md-n2,\n.mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-md-n3,\n.my-md-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-md-n3,\n.mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-md-n3,\n.my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-md-n3,\n.mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-md-n4,\n.my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-md-n4,\n.mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-md-n4,\n.my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-md-n4,\n.mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-md-n5,\n.my-md-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-md-n5,\n.mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-md-n5,\n.my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-md-n5,\n.mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mt-md-auto,\n.my-md-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-md-auto,\n.mx-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-auto,\n.my-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-md-auto,\n.mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .mt-lg-0,\n.my-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-lg-0,\n.mx-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-lg-0,\n.my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-lg-0,\n.mx-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-lg-1,\n.my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-lg-1,\n.mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-lg-1,\n.my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-lg-1,\n.mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-lg-2,\n.my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-lg-2,\n.mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-lg-2,\n.my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-lg-2,\n.mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-lg-3,\n.my-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-lg-3,\n.mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-lg-3,\n.my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-lg-3,\n.mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-lg-4,\n.my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-lg-4,\n.mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-lg-4,\n.my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-lg-4,\n.mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-lg-5,\n.my-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-lg-5,\n.mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-lg-5,\n.my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-lg-5,\n.mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .pt-lg-0,\n.py-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-lg-0,\n.px-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-lg-0,\n.py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-lg-0,\n.px-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-lg-1,\n.py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-lg-1,\n.px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-lg-1,\n.py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-lg-1,\n.px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-lg-2,\n.py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-lg-2,\n.px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-lg-2,\n.py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-lg-2,\n.px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-lg-3,\n.py-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-lg-3,\n.px-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-lg-3,\n.py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-lg-3,\n.px-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-lg-4,\n.py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-lg-4,\n.px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-lg-4,\n.py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-lg-4,\n.px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-lg-5,\n.py-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-lg-5,\n.px-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-5,\n.py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-lg-5,\n.px-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-lg-n1,\n.my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-lg-n1,\n.mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-lg-n1,\n.my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-lg-n1,\n.mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-lg-n2,\n.my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-lg-n2,\n.mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-lg-n2,\n.my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-lg-n2,\n.mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-lg-n3,\n.my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-lg-n3,\n.mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-lg-n3,\n.my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-lg-n3,\n.mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-lg-n4,\n.my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-lg-n4,\n.mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-lg-n4,\n.my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-lg-n4,\n.mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-lg-n5,\n.my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-lg-n5,\n.mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-lg-n5,\n.my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-lg-n5,\n.mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mt-lg-auto,\n.my-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-lg-auto,\n.mx-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-auto,\n.my-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-lg-auto,\n.mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .mt-xl-0,\n.my-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-xl-0,\n.mx-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-xl-0,\n.my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-xl-0,\n.mx-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-xl-1,\n.my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-xl-1,\n.mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-xl-1,\n.my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-xl-1,\n.mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-xl-2,\n.my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-xl-2,\n.mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-xl-2,\n.my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-xl-2,\n.mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-xl-3,\n.my-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-xl-3,\n.mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-xl-3,\n.my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-xl-3,\n.mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-xl-4,\n.my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-xl-4,\n.mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-xl-4,\n.my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-xl-4,\n.mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-xl-5,\n.my-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-xl-5,\n.mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-xl-5,\n.my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-xl-5,\n.mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .pt-xl-0,\n.py-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-xl-0,\n.px-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-xl-0,\n.py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-xl-0,\n.px-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-xl-1,\n.py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-xl-1,\n.px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-xl-1,\n.py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-xl-1,\n.px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-xl-2,\n.py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-xl-2,\n.px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-xl-2,\n.py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-xl-2,\n.px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-xl-3,\n.py-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-xl-3,\n.px-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-xl-3,\n.py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-xl-3,\n.px-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-xl-4,\n.py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-xl-4,\n.px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-xl-4,\n.py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-xl-4,\n.px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-xl-5,\n.py-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-xl-5,\n.px-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-5,\n.py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-xl-5,\n.px-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-xl-n1,\n.my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-xl-n1,\n.mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-xl-n1,\n.my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-xl-n1,\n.mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-xl-n2,\n.my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-xl-n2,\n.mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-xl-n2,\n.my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-xl-n2,\n.mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-xl-n3,\n.my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-xl-n3,\n.mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-xl-n3,\n.my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-xl-n3,\n.mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-xl-n4,\n.my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-xl-n4,\n.mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-xl-n4,\n.my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-xl-n4,\n.mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-xl-n5,\n.my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-xl-n5,\n.mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-xl-n5,\n.my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-xl-n5,\n.mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mt-xl-auto,\n.my-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-xl-auto,\n.mx-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-auto,\n.my-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-xl-auto,\n.mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n\n  .text-sm-right {\n    text-align: right !important;\n  }\n\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n\n  .text-md-right {\n    text-align: right !important;\n  }\n\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n\n  .text-lg-right {\n    text-align: right !important;\n  }\n\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n\n  .text-xl-right {\n    text-align: right !important;\n  }\n\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-light {\n  font-weight: 300 !important;\n}\n\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n\n.font-italic {\n  font-style: italic !important;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.text-primary {\n  color: #78d5ef !important;\n}\n\na.text-primary:hover, a.text-primary:focus {\n  color: #34c0e7 !important;\n}\n\n.text-secondary {\n  color: #6c757d !important;\n}\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important;\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n\n.text-info {\n  color: #17a2b8 !important;\n}\n\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n\n.text-warning {\n  color: #ffc107 !important;\n}\n\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n\n.text-danger {\n  color: #dc3545 !important;\n}\n\na.text-danger:hover, a.text-danger:focus {\n  color: #a71d2a !important;\n}\n\n.text-light {\n  color: #f8f9fa !important;\n}\n\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important;\n}\n\n.text-dark {\n  color: #343a40 !important;\n}\n\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important;\n}\n\n.text-body {\n  color: #212529 !important;\n}\n\n.text-muted {\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-break {\n  word-break: break-word !important;\n  overflow-wrap: break-word !important;\n}\n\n.text-reset {\n  color: inherit !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media print {\n  *,\n*::before,\n*::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  a:not(.btn) {\n    text-decoration: underline;\n  }\n\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  pre {\n    white-space: pre-wrap !important;\n  }\n\n  pre,\nblockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\nimg {\n    page-break-inside: avoid;\n  }\n\n  p,\nh2,\nh3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\nh3 {\n    page-break-after: avoid;\n  }\n\n  @page {\n    size: a3;\n  }\n  body {\n    min-width: 992px !important;\n  }\n\n  .container {\n    min-width: 992px !important;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .badge {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n.table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n.table-bordered td {\n    border: 1px solid #dee2e6 !important;\n  }\n\n  .table-dark {\n    color: inherit;\n  }\n  .table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n    border-color: #dee2e6;\n  }\n\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6;\n  }\n}", "",{"version":3,"sources":["/home/nico/Desktop/repos/arstudios/styles.scss","/home/nico/Desktop/repos/arstudios/breakpoint.scss","/home/nico/Desktop/repos/arstudios/variables.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/bootstrap.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_root.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_reboot.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_variables.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/vendor/_rfs.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_hover.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_type.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_lists.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_images.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_image.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_border-radius.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_code.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_grid.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_grid.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_breakpoints.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_grid-framework.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_tables.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_table-row.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_forms.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_transition.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_forms.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_gradients.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_buttons.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_buttons.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_transitions.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_dropdown.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_caret.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_nav-divider.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_button-group.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_input-group.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_custom-forms.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_nav.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_navbar.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_card.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_breadcrumb.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_pagination.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_pagination.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_badge.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_badge.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_jumbotron.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_alert.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_alert.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_progress.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_media.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_list-group.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_list-group.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_close.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_toasts.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_modal.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_tooltip.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_reset-text.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_popover.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_carousel.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_clearfix.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_spinners.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_align.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_background-variant.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_background.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_borders.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_display.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_embed.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_flex.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_float.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_overflow.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_position.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_screenreaders.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_screen-reader.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_shadows.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_sizing.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_stretched-link.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_spacing.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_text.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_text-truncate.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_text-emphasis.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/mixins/_text-hide.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/utilities/_visibility.scss","/home/nico/Desktop/repos/arstudios/node_modules/bootstrap/scss/_print.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAmBhB;EACC,2BAAA;EACG,0BAAA;AAjBJ;;AAsBA;EACC,kCAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;AAnBD;AC4DM;ED/CN;IAQE,2BAAA;IACA,MAAA;IACA,kBAAA;EAjBA;AACF;AAmBC;EACC,WExCS;AFuBX;AAsBG;EACC,eAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,cAAA;EAIA,qBAAA;AAvBJ;AAoBI;EACC,WErDM;AFmCX;AAuBG;EACC,YAAA;EACA,gBE5DO;EF+DP,mDAAA;AArBJ;AAyBG;EACC,kBAAA;EACA,iBAAA;EACA,kBAAA;AAvBJ;AC0BM;EDNH;IAKE,eAAA;IACA,cAAA;EArBH;AACF;AAsBI;EACC,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,OAAA;EACA,UAAA;EACA,qCAAA;AApBL;ACWM;EDEF;IASE,aAAA;EAlBJ;AACF;AAsBI;EACC,eAAA;EACA,WE3FM;AFuEX;AAqBK;EACC,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,kBAAA;AAnBN;AAuBK;EACC,qBEhEI;AF2CV;AA0BI;EACC,+BAAA;AAxBL;AA6BC;EACC,YAAA;EACA,0CAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;EACA,qBAAA;AA3BF;AA8BC;EACC,eAAA;EACA,QAAA;EACA,OAAA;EACA,MAAA;EACA,kBAAA;EACA,8BAAA;EACA,yCAAA;AA5BF;AA+BI;EACC,yBAAA;AA7BL;AC/BM;EDiEJ;IAEE,gBAAA;IACA,kBAAA;IACA,6BAAA;IACA,8BAAA;EAhCF;AACF;ACvCM;ED0EJ;IAEE,gBAAA;IACA,0BAAA;IACA,2BAAA;EAjCF;AACF;AAoCE;EACC,YAAA;EACA,oCAAA;EACA,2CAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;EACA,qBAAA;AAlCH;AAqCE;EACC,8BAAA;EACA,iCAAA;EACA,sBAAA;AAnCH;AAoCG;EACC,yBAAA;AAlCJ;AAqCE;EACC,eAAA;EACA,6BAAA;AAnCH;AAqCE;EACC,6BAAA;AAnCH;AAsCE;EACC,WE5KQ;AFwIX;;AAyCA,iBAAA;AACA;EACC,kBAAA;EACA,uBAAA;EACA,YAAA;EACA,iBAAA;EACA,WAAA;EACA,gBAAA;AAtCD;;AAyCE;EACD,kBAAA;EACA,QAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EAIA,4CAAA;AAtCD;;AAyCE;EACD,kBAAA;EACA,UAAA;AAtCD;;AAyCE;EACD,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;EACA,YAAA;EACA,UAAA;AAtCD;;AAyCE;EACD;IACE,wGAAA;EAtCD;;EAwCD;IACE,aAAA;EArCD;AACF;AAwCA,mBAAA;AAEA;EACC,UAAA;EACA,kBAAA;AAvCD;AAwCC;EACC,sBAAA;EACA,4BAAA;EACA,kCAAA;EACA,2BAAA;EACA,iBAAA;EACA,kBAAA;AAtCF;AAuCE;EACC,WE3PQ;EF4PR,2BAAA;EACA,iBAAA;AArCH;AAsCG;EACC,eAAA;EACA,WEhQO;EFiQP,gBAAA;EACA,gBAAA;AApCJ;ACrJM;EDqLH;IAME,eAAA;EAlCH;AACF;AAmCI;EACC,gBAAA;AAjCL;AAoCG;EACC,kBAAA;EACG,iDAAA;AAlCP;AAmCO;EACC,kBAAA;EACA,MAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;EACA,gBEpRG;AFmPX;AAoCG;EACC,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,+BAAA;AAlCJ;AAmCI;EACC,gBAAA;AAjCL;AAkCK;EACC,WE/RK;AF+PX;AAoCG;EACC,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,WAAA;AAlCJ;AAmCI;EACC,iDAAA;AAjCL;AAkCK;EACC,WE5SK;AF4QX;AAoCG;EACC,2BAAA;AAlCJ;AAoCG;EACC,0CAAA;EA5SM,mBA6SiB;AA/B3B;AAgCI;EACC,2BAAA;EACA,WE7SM;AF+QX;AAoCG;EACC,WE/TO;EFiUP,iBAAA;AAnCJ;;AAyCA;EACE,oDAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;AAtCF;;AAyCA;EACE,sBAAA;AAtCF;;AAyCA;EACC,wFAAA;UAAA,gFAAA;AAtCD;;AAyCE;EACD;IACE,UAAA;EAtCD;EAwCD;IACE,UAAA;EAtCD;EAwCD;IACE,UAAA;EAtCD;AACF;;AA6BE;EACD;IACE,UAAA;EAtCD;EAwCD;IACE,UAAA;EAtCD;EAwCD;IACE,UAAA;EAtCD;AACF;AA2CA;EACC,cAAA;EACA,kBAAA;AAzCD;ACpPM;ED2RN;IAIE,cAAA;EAvCA;AACF;AAwCC;EACC,8BAAA;AAtCF;;AA0CA;EACC,WErWU;AF8TX;AAwCC;EACC,kBAAA;EACA,oBAAA;EACA,8BAAA;AAtCF;AAuCE;EACC,SAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,mBEnWO;AF8TV;AAwCG;EACC,OAAA;EACA,wBAAA;AAtCJ;;AA4CA;EACC,eAAA;AAzCD;AA0CC;EACC,WAAA;EACA,eAAA;EACA,cAAA;AAxCF;ACzSM;ED8UL;IAKE,WAAA;IACA,eAAA;EAtCD;AACF;AAwCC;EACC,mBAAA;AAtCF;AAuCE;EACC,eAAA;EACA,yBAAA;EACA,qBAAA;EACA,cAAA;AArCH;AAuCE;EACC,eAAA;EACA,mBAAA;AArCH;AAwCG;EACC,gBAAA;AAtCJ;AA0CC;EACC,sBAAA;EACA,kCAAA;EACA,4BAAA;AAxCF;ACvTM;ED4VL;IAKE,aAAA;EAtCD;AACF;;AGrYA;;;;;EAAA;ACCA;EAGI,eAAA;EAAA,iBAAA;EAAA,iBAAA;EAAA,eAAA;EAAA,cAAA;EAAA,iBAAA;EAAA,iBAAA;EAAA,gBAAA;EAAA,eAAA;EAAA,eAAA;EAAA,aAAA;EAAA,eAAA;EAAA,oBAAA;EAIA,kBAAA;EAAA,oBAAA;EAAA,kBAAA;EAAA,eAAA;EAAA,kBAAA;EAAA,iBAAA;EAAA,gBAAA;EAAA,eAAA;EAIA,kBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,uBAAA;EAKF,+MAAA;EACA,6GAAA;AJwZF;;AKxZA;;;EAGE,sBAAA;AL2ZF;;AKxZA;EACE,uBAAA;EACA,iBAAA;EACA,8BAAA;EACA,6CAAA;AL2ZF;;AKrZA;EACE,cAAA;ALwZF;;AK9YA;EACE,SAAA;EACA,kMCyO4B;ECzJxB,eAtCa;EFxCjB,gBCkP4B;EDjP5B,gBCsP4B;EDrP5B,cHzCS;EG0CT,gBAAA;EACA,sBHrDS;AFscX;;AKrYA;EACE,qBAAA;ALwYF;;AK/XA;EACE,uBAAA;EACA,SAAA;EACA,iBAAA;ALkYF;;AKrXA;EACE,aAAA;EACA,qBCoN4B;ANoK9B;;AKjXA;EACE,aAAA;EACA,mBCuF0B;AN6R5B;;AKzWA;;EAEE,0BAAA;EACA,yCAAA;UAAA,iCAAA;EACA,YAAA;EACA,gBAAA;EACA,sCAAA;UAAA,8BAAA;AL4WF;;AKzWA;EACE,mBAAA;EACA,kBAAA;EACA,oBAAA;AL4WF;;AKzWA;;;EAGE,aAAA;EACA,mBAAA;AL4WF;;AKzWA;;;;EAIE,gBAAA;AL4WF;;AKzWA;EACE,gBCqJ4B;ANuN9B;;AKzWA;EACE,qBAAA;EACA,cAAA;AL4WF;;AKzWA;EACE,gBAAA;AL4WF;;AKzWA;;EAEE,mBCwI4B;ANoO9B;;AKzWA;EExFI,cAAA;APqcJ;;AKpWA;;EAEE,kBAAA;EEnGE,cAAA;EFqGF,cAAA;EACA,wBAAA;ALuWF;;AKpWA;EAAM,eAAA;ALwWN;;AKvWA;EAAM,WAAA;AL2WN;;AKpWA;EACE,cCRwC;EDSxC,qBCRwC;EDSxC,6BAAA;ALuWF;AQvhBE;EHmLE,cCXsC;EDYtC,0BCXsC;ANkX1C;;AK9VA;EACE,cAAA;EACA,qBAAA;ALiWF;AQhiBE;EHkME,cAAA;EACA,qBAAA;ALiWJ;;AKxVA;;;;EAIE,iGC6D4B;ECjN1B,cAAA;APgfJ;;AKxVA;EAEE,aAAA;EAEA,mBAAA;EAEA,cAAA;ALwVF;;AKhVA;EAEE,gBAAA;ALkVF;;AK1UA;EACE,sBAAA;EACA,kBAAA;AL6UF;;AK1UA;EAGE,gBAAA;EACA,sBAAA;AL2UF;;AKnUA;EACE,yBAAA;ALsUF;;AKnUA;EACE,oBCoF4B;EDnF5B,uBCmF4B;EDlF5B,cHzQS;EG0QT,gBAAA;EACA,oBAAA;ALsUF;;AKnUA;EAGE,mBAAA;ALoUF;;AK5TA;EAEE,qBAAA;EACA,qBCqKsC;ANyJxC;;AKxTA;EAEE,gBAAA;AL0TF;;AKnTA;EACE,mBAAA;EACA,0CAAA;ALsTF;;AKnTA;;;;;EAKE,SAAA;EACA,oBAAA;EErPE,kBAAA;EFuPF,oBAAA;ALsTF;;AKnTA;;EAEE,iBAAA;ALsTF;;AKnTA;;EAEE,oBAAA;ALsTF;;AKhTA;EACE,iBAAA;ALmTF;;AK5SA;;;;EAIE,0BAAA;AL+SF;;AKtSI;;;;EACE,eAAA;AL4SN;;AKtSA;;;;EAIE,UAAA;EACA,kBAAA;ALySF;;AKtSA;;EAEE,sBAAA;EACA,UAAA;ALySF;;AKrSA;;;;EASE,2BAAA;ALmSF;;AKhSA;EACE,cAAA;EAEA,gBAAA;ALkSF;;AK/RA;EAME,YAAA;EAEA,UAAA;EACA,SAAA;EACA,SAAA;AL4RF;;AKvRA;EACE,cAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;EACA,qBAAA;EEjSI,iBAtCa;EFyUjB,oBAAA;EACA,cAAA;EACA,mBAAA;AL0RF;;AKvRA;EACE,wBAAA;AL0RF;;AKtRA;;EAEE,YAAA;ALyRF;;AKtRA;EAKE,oBAAA;EACA,wBAAA;ALqRF;;AK9QA;EACE,wBAAA;ALiRF;;AKzQA;EACE,aAAA;EACA,0BAAA;AL4QF;;AKrQA;EACE,qBAAA;ALwQF;;AKrQA;EACE,kBAAA;EACA,eAAA;ALwQF;;AKrQA;EACE,aAAA;ALwQF;;AKnQA;EACE,wBAAA;ALsQF;;AShuBA;;EAEE,qBHyS4B;EGvS5B,gBHyS4B;EGxS5B,gBHyS4B;ANyb9B;;AS9tBA;EFgHM,iBAtCa;APwpBnB;;ASjuBA;EF+GM,eAtCa;AP4pBnB;;ASpuBA;EF8GM,kBAtCa;APgqBnB;;ASvuBA;EF6GM,iBAtCa;APoqBnB;;AS1uBA;EF4GM,kBAtCa;APwqBnB;;AS7uBA;EF2GM,eAtCa;AP4qBnB;;AS/uBA;EFyGM,kBAtCa;EEjEjB,gBH2S4B;ANuc9B;;AS9uBA;EFmGM,eAtCa;EE3DjB,gBH8R4B;EG7R5B,gBHqR4B;AN4d9B;;AS/uBA;EF8FM,iBAtCa;EEtDjB,gBH0R4B;EGzR5B,gBHgR4B;ANke9B;;AShvBA;EFyFM,iBAtCa;EEjDjB,gBHsR4B;EGrR5B,gBH2Q4B;ANwe9B;;ASjvBA;EFoFM,iBAtCa;EE5CjB,gBHkR4B;EGjR5B,gBHsQ4B;AN8e9B;;AS5uBA;EACE,gBHiFO;EGhFP,mBHgFO;EG/EP,SAAA;EACA,wCAAA;AT+uBF;;ASvuBA;;EFMI,cAAA;EEHF,gBH8N4B;AN4gB9B;;ASvuBA;;EAEE,cHsQ4B;EGrQ5B,yBH8Q4B;AN4d9B;;ASluBA;EC/EE,eAAA;EACA,gBAAA;AVqzBF;;ASluBA;ECpFE,eAAA;EACA,gBAAA;AV0zBF;;ASpuBA;EACE,qBAAA;ATuuBF;ASruBE;EACE,oBHwP0B;AN+e9B;;AS7tBA;EFjCI,cAAA;EEmCF,yBAAA;ATguBF;;AS5tBA;EACE,mBHwBO;ECTH,kBAtCa;APuvBnB;;AS5tBA;EACE,cAAA;EF7CE,cAAA;EE+CF,cPhHS;AF+0BX;AS7tBE;EACE,aAAA;AT+tBJ;;AWl1BA;ECIE,eAAA;EAGA,YAAA;AZg1BF;;AWj1BA;EACE,gBLigCkC;EKhgClC,sBTfS;ESgBT,yBAAA;EEXE,sBP6O0B;EMvO5B,eAAA;EAGA,YAAA;AZy1BF;;AW30BA;EAEE,qBAAA;AX60BF;;AW10BA;EACE,qBAAA;EACA,cAAA;AX60BF;;AW10BA;EJkCI,cAAA;EIhCF,cTjCS;AF82BX;;Acp3BA;EPuEI,gBAAA;EOrEF,cZ0BQ;EYzBR,qBAAA;Adu3BF;Acp3BE;EACE,cAAA;Ads3BJ;;Acj3BA;EACE,sBAAA;EP0DE,gBAAA;EOxDF,WZhBS;EYiBT,yBZPS;EWLP,qBP+O0B;ANkpB9B;Acj3BE;EACE,UAAA;EPkDA,eAAA;EOhDA,gBR4Q0B;ANumB9B;;Ac72BA;EACE,cAAA;EPyCE,gBAAA;EOvCF,cZvBS;AFu4BX;Ac72BE;EPoCE,kBAAA;EOlCA,cAAA;EACA,kBAAA;Ad+2BJ;;Ac12BA;EACE,iBR4jCkC;EQ3jClC,kBAAA;Ad62BF;;Aer5BE;ECDA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;AhB05BF;AiBv2BI;EFtDF;ICWI,gBVoMiB;ENktBrB;AACF;AiB52BI;EFtDF;ICWI,gBVoMiB;ENutBrB;AACF;AiBj3BI;EFtDF;ICWI,gBVoMiB;EN4tBrB;AACF;AiBt3BI;EFtDF;ICWI,iBVoMiB;ENiuBrB;AACF;;Ae36BE;ECPA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;AhBs7BF;;AiBn4BI;EFrCE;IACE,gBT6Le;EN+uBrB;AACF;AiBz4BI;EFrCE;IACE,gBT6Le;ENovBrB;AACF;AiB94BI;EFrCE;IACE,gBT6Le;ENyvBrB;AACF;AiBn5BI;EFrCE;IACE,iBT6Le;EN8vBrB;AACF;Aex6BE;ECrBA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;AhBg8BF;;Aex6BE;EACE,eAAA;EACA,cAAA;Af26BJ;Aez6BI;;EAEE,gBAAA;EACA,eAAA;Af26BN;;AkB79BE;;;;;;EACE,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;AlBq+BJ;;AkBl9BM;EACE,aAAA;EACA,YAAA;EACA,eAAA;AlBq9BR;;AgBt7BE;EACE,cAAA;EACA,eAAA;AhBy7BJ;;AgB37BE;EACE,aAAA;EACA,cAAA;AhB87BJ;;AgBh8BE;EACE,wBAAA;EACA,yBAAA;AhBm8BJ;;AgBr8BE;EACE,aAAA;EACA,cAAA;AhBw8BJ;;AgB18BE;EACE,aAAA;EACA,cAAA;AhB68BJ;;AgB/8BE;EACE,wBAAA;EACA,yBAAA;AhBk9BJ;;AkB1+BM;EFMJ,cAAA;EACA,WAAA;EACA,eAAA;AhBw+BF;;AkB3+BQ;EFPN,uBAAA;EAIA,wBAAA;AhBm/BF;;AkBh/BQ;EFPN,wBAAA;EAIA,yBAAA;AhBw/BF;;AkBr/BQ;EFPN,aAAA;EAIA,cAAA;AhB6/BF;;AkB1/BQ;EFPN,wBAAA;EAIA,yBAAA;AhBkgCF;;AkB//BQ;EFPN,wBAAA;EAIA,yBAAA;AhBugCF;;AkBpgCQ;EFPN,aAAA;EAIA,cAAA;AhB4gCF;;AkBzgCQ;EFPN,wBAAA;EAIA,yBAAA;AhBihCF;;AkB9gCQ;EFPN,wBAAA;EAIA,yBAAA;AhBshCF;;AkBnhCQ;EFPN,aAAA;EAIA,cAAA;AhB2hCF;;AkBxhCQ;EFPN,wBAAA;EAIA,yBAAA;AhBgiCF;;AkB7hCQ;EFPN,wBAAA;EAIA,yBAAA;AhBqiCF;;AkBliCQ;EFPN,cAAA;EAIA,eAAA;AhB0iCF;;AkBliCM;EAAwB,SAAA;AlBsiC9B;;AkBpiCM;EAAuB,SAAA;AlBwiC7B;;AkBriCQ;EAAwB,QADb;AlB0iCnB;;AkBziCQ;EAAwB,QADb;AlB8iCnB;;AkB7iCQ;EAAwB,QADb;AlBkjCnB;;AkBjjCQ;EAAwB,QADb;AlBsjCnB;;AkBrjCQ;EAAwB,QADb;AlB0jCnB;;AkBzjCQ;EAAwB,QADb;AlB8jCnB;;AkB7jCQ;EAAwB,QADb;AlBkkCnB;;AkBjkCQ;EAAwB,QADb;AlBskCnB;;AkBrkCQ;EAAwB,QADb;AlB0kCnB;;AkBzkCQ;EAAwB,QADb;AlB8kCnB;;AkB7kCQ;EAAwB,SADb;AlBklCnB;;AkBjlCQ;EAAwB,SADb;AlBslCnB;;AkBrlCQ;EAAwB,SADb;AlB0lCnB;;AkBnlCU;EFRR,0BAAA;AhB+lCF;;AkBvlCU;EFRR,2BAAA;AhBmmCF;;AkB3lCU;EFRR,gBAAA;AhBumCF;;AkB/lCU;EFRR,2BAAA;AhB2mCF;;AkBnmCU;EFRR,2BAAA;AhB+mCF;;AkBvmCU;EFRR,gBAAA;AhBmnCF;;AkB3mCU;EFRR,2BAAA;AhBunCF;;AkB/mCU;EFRR,2BAAA;AhB2nCF;;AkBnnCU;EFRR,gBAAA;AhB+nCF;;AkBvnCU;EFRR,2BAAA;AhBmoCF;;AkB3nCU;EFRR,2BAAA;AhBuoCF;;AiBloCI;EC9BE;IACE,aAAA;IACA,YAAA;IACA,eAAA;ElBoqCN;;EgBroCA;IACE,cAAA;IACA,eAAA;EhBwoCF;;EgB1oCA;IACE,aAAA;IACA,cAAA;EhB6oCF;;EgB/oCA;IACE,wBAAA;IACA,yBAAA;EhBkpCF;;EgBppCA;IACE,aAAA;IACA,cAAA;EhBupCF;;EgBzpCA;IACE,aAAA;IACA,cAAA;EhB4pCF;;EgB9pCA;IACE,wBAAA;IACA,yBAAA;EhBiqCF;;EkBzrCI;IFMJ,cAAA;IACA,WAAA;IACA,eAAA;EhBurCA;;EkB1rCM;IFPN,uBAAA;IAIA,wBAAA;EhBksCA;;EkB/rCM;IFPN,wBAAA;IAIA,yBAAA;EhBusCA;;EkBpsCM;IFPN,aAAA;IAIA,cAAA;EhB4sCA;;EkBzsCM;IFPN,wBAAA;IAIA,yBAAA;EhBitCA;;EkB9sCM;IFPN,wBAAA;IAIA,yBAAA;EhBstCA;;EkBntCM;IFPN,aAAA;IAIA,cAAA;EhB2tCA;;EkBxtCM;IFPN,wBAAA;IAIA,yBAAA;EhBguCA;;EkB7tCM;IFPN,wBAAA;IAIA,yBAAA;EhBquCA;;EkBluCM;IFPN,aAAA;IAIA,cAAA;EhB0uCA;;EkBvuCM;IFPN,wBAAA;IAIA,yBAAA;EhB+uCA;;EkB5uCM;IFPN,wBAAA;IAIA,yBAAA;EhBovCA;;EkBjvCM;IFPN,cAAA;IAIA,eAAA;EhByvCA;;EkBjvCI;IAAwB,SAAA;ElBqvC5B;;EkBnvCI;IAAuB,SAAA;ElBuvC3B;;EkBpvCM;IAAwB,QADb;ElByvCjB;;EkBxvCM;IAAwB,QADb;ElB6vCjB;;EkB5vCM;IAAwB,QADb;ElBiwCjB;;EkBhwCM;IAAwB,QADb;ElBqwCjB;;EkBpwCM;IAAwB,QADb;ElBywCjB;;EkBxwCM;IAAwB,QADb;ElB6wCjB;;EkB5wCM;IAAwB,QADb;ElBixCjB;;EkBhxCM;IAAwB,QADb;ElBqxCjB;;EkBpxCM;IAAwB,QADb;ElByxCjB;;EkBxxCM;IAAwB,QADb;ElB6xCjB;;EkB5xCM;IAAwB,SADb;ElBiyCjB;;EkBhyCM;IAAwB,SADb;ElBqyCjB;;EkBpyCM;IAAwB,SADb;ElByyCjB;;EkBlyCQ;IFRR,cAAA;EhB8yCA;;EkBtyCQ;IFRR,0BAAA;EhBkzCA;;EkB1yCQ;IFRR,2BAAA;EhBszCA;;EkB9yCQ;IFRR,gBAAA;EhB0zCA;;EkBlzCQ;IFRR,2BAAA;EhB8zCA;;EkBtzCQ;IFRR,2BAAA;EhBk0CA;;EkB1zCQ;IFRR,gBAAA;EhBs0CA;;EkB9zCQ;IFRR,2BAAA;EhB00CA;;EkBl0CQ;IFRR,2BAAA;EhB80CA;;EkBt0CQ;IFRR,gBAAA;EhBk1CA;;EkB10CQ;IFRR,2BAAA;EhBs1CA;;EkB90CQ;IFRR,2BAAA;EhB01CA;AACF;AiBt1CI;EC9BE;IACE,aAAA;IACA,YAAA;IACA,eAAA;ElBu3CN;;EgBx1CA;IACE,cAAA;IACA,eAAA;EhB21CF;;EgB71CA;IACE,aAAA;IACA,cAAA;EhBg2CF;;EgBl2CA;IACE,wBAAA;IACA,yBAAA;EhBq2CF;;EgBv2CA;IACE,aAAA;IACA,cAAA;EhB02CF;;EgB52CA;IACE,aAAA;IACA,cAAA;EhB+2CF;;EgBj3CA;IACE,wBAAA;IACA,yBAAA;EhBo3CF;;EkB54CI;IFMJ,cAAA;IACA,WAAA;IACA,eAAA;EhB04CA;;EkB74CM;IFPN,uBAAA;IAIA,wBAAA;EhBq5CA;;EkBl5CM;IFPN,wBAAA;IAIA,yBAAA;EhB05CA;;EkBv5CM;IFPN,aAAA;IAIA,cAAA;EhB+5CA;;EkB55CM;IFPN,wBAAA;IAIA,yBAAA;EhBo6CA;;EkBj6CM;IFPN,wBAAA;IAIA,yBAAA;EhBy6CA;;EkBt6CM;IFPN,aAAA;IAIA,cAAA;EhB86CA;;EkB36CM;IFPN,wBAAA;IAIA,yBAAA;EhBm7CA;;EkBh7CM;IFPN,wBAAA;IAIA,yBAAA;EhBw7CA;;EkBr7CM;IFPN,aAAA;IAIA,cAAA;EhB67CA;;EkB17CM;IFPN,wBAAA;IAIA,yBAAA;EhBk8CA;;EkB/7CM;IFPN,wBAAA;IAIA,yBAAA;EhBu8CA;;EkBp8CM;IFPN,cAAA;IAIA,eAAA;EhB48CA;;EkBp8CI;IAAwB,SAAA;ElBw8C5B;;EkBt8CI;IAAuB,SAAA;ElB08C3B;;EkBv8CM;IAAwB,QADb;ElB48CjB;;EkB38CM;IAAwB,QADb;ElBg9CjB;;EkB/8CM;IAAwB,QADb;ElBo9CjB;;EkBn9CM;IAAwB,QADb;ElBw9CjB;;EkBv9CM;IAAwB,QADb;ElB49CjB;;EkB39CM;IAAwB,QADb;ElBg+CjB;;EkB/9CM;IAAwB,QADb;ElBo+CjB;;EkBn+CM;IAAwB,QADb;ElBw+CjB;;EkBv+CM;IAAwB,QADb;ElB4+CjB;;EkB3+CM;IAAwB,QADb;ElBg/CjB;;EkB/+CM;IAAwB,SADb;ElBo/CjB;;EkBn/CM;IAAwB,SADb;ElBw/CjB;;EkBv/CM;IAAwB,SADb;ElB4/CjB;;EkBr/CQ;IFRR,cAAA;EhBigDA;;EkBz/CQ;IFRR,0BAAA;EhBqgDA;;EkB7/CQ;IFRR,2BAAA;EhBygDA;;EkBjgDQ;IFRR,gBAAA;EhB6gDA;;EkBrgDQ;IFRR,2BAAA;EhBihDA;;EkBzgDQ;IFRR,2BAAA;EhBqhDA;;EkB7gDQ;IFRR,gBAAA;EhByhDA;;EkBjhDQ;IFRR,2BAAA;EhB6hDA;;EkBrhDQ;IFRR,2BAAA;EhBiiDA;;EkBzhDQ;IFRR,gBAAA;EhBqiDA;;EkB7hDQ;IFRR,2BAAA;EhByiDA;;EkBjiDQ;IFRR,2BAAA;EhB6iDA;AACF;AiBziDI;EC9BE;IACE,aAAA;IACA,YAAA;IACA,eAAA;ElB0kDN;;EgB3iDA;IACE,cAAA;IACA,eAAA;EhB8iDF;;EgBhjDA;IACE,aAAA;IACA,cAAA;EhBmjDF;;EgBrjDA;IACE,wBAAA;IACA,yBAAA;EhBwjDF;;EgB1jDA;IACE,aAAA;IACA,cAAA;EhB6jDF;;EgB/jDA;IACE,aAAA;IACA,cAAA;EhBkkDF;;EgBpkDA;IACE,wBAAA;IACA,yBAAA;EhBukDF;;EkB/lDI;IFMJ,cAAA;IACA,WAAA;IACA,eAAA;EhB6lDA;;EkBhmDM;IFPN,uBAAA;IAIA,wBAAA;EhBwmDA;;EkBrmDM;IFPN,wBAAA;IAIA,yBAAA;EhB6mDA;;EkB1mDM;IFPN,aAAA;IAIA,cAAA;EhBknDA;;EkB/mDM;IFPN,wBAAA;IAIA,yBAAA;EhBunDA;;EkBpnDM;IFPN,wBAAA;IAIA,yBAAA;EhB4nDA;;EkBznDM;IFPN,aAAA;IAIA,cAAA;EhBioDA;;EkB9nDM;IFPN,wBAAA;IAIA,yBAAA;EhBsoDA;;EkBnoDM;IFPN,wBAAA;IAIA,yBAAA;EhB2oDA;;EkBxoDM;IFPN,aAAA;IAIA,cAAA;EhBgpDA;;EkB7oDM;IFPN,wBAAA;IAIA,yBAAA;EhBqpDA;;EkBlpDM;IFPN,wBAAA;IAIA,yBAAA;EhB0pDA;;EkBvpDM;IFPN,cAAA;IAIA,eAAA;EhB+pDA;;EkBvpDI;IAAwB,SAAA;ElB2pD5B;;EkBzpDI;IAAuB,SAAA;ElB6pD3B;;EkB1pDM;IAAwB,QADb;ElB+pDjB;;EkB9pDM;IAAwB,QADb;ElBmqDjB;;EkBlqDM;IAAwB,QADb;ElBuqDjB;;EkBtqDM;IAAwB,QADb;ElB2qDjB;;EkB1qDM;IAAwB,QADb;ElB+qDjB;;EkB9qDM;IAAwB,QADb;ElBmrDjB;;EkBlrDM;IAAwB,QADb;ElBurDjB;;EkBtrDM;IAAwB,QADb;ElB2rDjB;;EkB1rDM;IAAwB,QADb;ElB+rDjB;;EkB9rDM;IAAwB,QADb;ElBmsDjB;;EkBlsDM;IAAwB,SADb;ElBusDjB;;EkBtsDM;IAAwB,SADb;ElB2sDjB;;EkB1sDM;IAAwB,SADb;ElB+sDjB;;EkBxsDQ;IFRR,cAAA;EhBotDA;;EkB5sDQ;IFRR,0BAAA;EhBwtDA;;EkBhtDQ;IFRR,2BAAA;EhB4tDA;;EkBptDQ;IFRR,gBAAA;EhBguDA;;EkBxtDQ;IFRR,2BAAA;EhBouDA;;EkB5tDQ;IFRR,2BAAA;EhBwuDA;;EkBhuDQ;IFRR,gBAAA;EhB4uDA;;EkBpuDQ;IFRR,2BAAA;EhBgvDA;;EkBxuDQ;IFRR,2BAAA;EhBovDA;;EkB5uDQ;IFRR,gBAAA;EhBwvDA;;EkBhvDQ;IFRR,2BAAA;EhB4vDA;;EkBpvDQ;IFRR,2BAAA;EhBgwDA;AACF;AiB5vDI;EC9BE;IACE,aAAA;IACA,YAAA;IACA,eAAA;ElB6xDN;;EgB9vDA;IACE,cAAA;IACA,eAAA;EhBiwDF;;EgBnwDA;IACE,aAAA;IACA,cAAA;EhBswDF;;EgBxwDA;IACE,wBAAA;IACA,yBAAA;EhB2wDF;;EgB7wDA;IACE,aAAA;IACA,cAAA;EhBgxDF;;EgBlxDA;IACE,aAAA;IACA,cAAA;EhBqxDF;;EgBvxDA;IACE,wBAAA;IACA,yBAAA;EhB0xDF;;EkBlzDI;IFMJ,cAAA;IACA,WAAA;IACA,eAAA;EhBgzDA;;EkBnzDM;IFPN,uBAAA;IAIA,wBAAA;EhB2zDA;;EkBxzDM;IFPN,wBAAA;IAIA,yBAAA;EhBg0DA;;EkB7zDM;IFPN,aAAA;IAIA,cAAA;EhBq0DA;;EkBl0DM;IFPN,wBAAA;IAIA,yBAAA;EhB00DA;;EkBv0DM;IFPN,wBAAA;IAIA,yBAAA;EhB+0DA;;EkB50DM;IFPN,aAAA;IAIA,cAAA;EhBo1DA;;EkBj1DM;IFPN,wBAAA;IAIA,yBAAA;EhBy1DA;;EkBt1DM;IFPN,wBAAA;IAIA,yBAAA;EhB81DA;;EkB31DM;IFPN,aAAA;IAIA,cAAA;EhBm2DA;;EkBh2DM;IFPN,wBAAA;IAIA,yBAAA;EhBw2DA;;EkBr2DM;IFPN,wBAAA;IAIA,yBAAA;EhB62DA;;EkB12DM;IFPN,cAAA;IAIA,eAAA;EhBk3DA;;EkB12DI;IAAwB,SAAA;ElB82D5B;;EkB52DI;IAAuB,SAAA;ElBg3D3B;;EkB72DM;IAAwB,QADb;ElBk3DjB;;EkBj3DM;IAAwB,QADb;ElBs3DjB;;EkBr3DM;IAAwB,QADb;ElB03DjB;;EkBz3DM;IAAwB,QADb;ElB83DjB;;EkB73DM;IAAwB,QADb;ElBk4DjB;;EkBj4DM;IAAwB,QADb;ElBs4DjB;;EkBr4DM;IAAwB,QADb;ElB04DjB;;EkBz4DM;IAAwB,QADb;ElB84DjB;;EkB74DM;IAAwB,QADb;ElBk5DjB;;EkBj5DM;IAAwB,QADb;ElBs5DjB;;EkBr5DM;IAAwB,SADb;ElB05DjB;;EkBz5DM;IAAwB,SADb;ElB85DjB;;EkB75DM;IAAwB,SADb;ElBk6DjB;;EkB35DQ;IFRR,cAAA;EhBu6DA;;EkB/5DQ;IFRR,0BAAA;EhB26DA;;EkBn6DQ;IFRR,2BAAA;EhB+6DA;;EkBv6DQ;IFRR,gBAAA;EhBm7DA;;EkB36DQ;IFRR,2BAAA;EhBu7DA;;EkB/6DQ;IFRR,2BAAA;EhB27DA;;EkBn7DQ;IFRR,gBAAA;EhB+7DA;;EkBv7DQ;IFRR,2BAAA;EhBm8DA;;EkB37DQ;IFRR,2BAAA;EhBu8DA;;EkB/7DQ;IFRR,gBAAA;EhB28DA;;EkBn8DQ;IFRR,2BAAA;EhB+8DA;;EkBv8DQ;IFRR,2BAAA;EhBm9DA;AACF;AmBvgEA;EACE,WAAA;EACA,mBbkIO;EajIP,cjBGS;AFsgEX;AmBtgEE;;EAEE,gBbsV0B;EarV1B,mBAAA;EACA,6BAAA;AnBwgEJ;AmBrgEE;EACE,sBAAA;EACA,gCAAA;AnBugEJ;AmBpgEE;EACE,6BAAA;AnBsgEJ;;AmB5/DE;;EAEE,ebgU0B;AN+rD9B;;AmBt/DA;EACE,yBAAA;AnBy/DF;AmBv/DE;;EAEE,yBAAA;AnBy/DJ;AmBr/DI;;EAEE,wBAAA;AnBu/DN;;AmBj/DE;;;;EAIE,SAAA;AnBo/DJ;;AmB3+DE;EACE,qCb4R0B;ANktD9B;;AQ7iEE;EW2EI,cjB7EK;EiB8EL,sCbiRwB;ANqtD9B;;AoBxjEI;;;EAGE,yBD2F+B;AnBg+DrC;AoBvjEM;;;;EAIE,qBDmFyE;AnBs+DjF;;AQ9jEE;EYiBM,yBAJe;ApBqjEvB;AoB/iEQ;;EAEE,yBARa;ApByjEvB;;AoB5kEI;;;EAGE,yBD2F+B;AnBo/DrC;AoB3kEM;;;;EAIE,qBDmFyE;AnB0/DjF;;AQllEE;EYiBM,yBAJe;ApBykEvB;AoBnkEQ;;EAEE,yBARa;ApB6kEvB;;AoBhmEI;;;EAGE,yBD2F+B;AnBwgErC;AoB/lEM;;;;EAIE,qBDmFyE;AnB8gEjF;;AQtmEE;EYiBM,yBAJe;ApB6lEvB;AoBvlEQ;;EAEE,yBARa;ApBimEvB;;AoBpnEI;;;EAGE,yBD2F+B;AnB4hErC;AoBnnEM;;;;EAIE,qBDmFyE;AnBkiEjF;;AQ1nEE;EYiBM,yBAJe;ApBinEvB;AoB3mEQ;;EAEE,yBARa;ApBqnEvB;;AoBxoEI;;;EAGE,yBD2F+B;AnBgjErC;AoBvoEM;;;;EAIE,qBDmFyE;AnBsjEjF;;AQ9oEE;EYiBM,yBAJe;ApBqoEvB;AoB/nEQ;;EAEE,yBARa;ApByoEvB;;AoB5pEI;;;EAGE,yBD2F+B;AnBokErC;AoB3pEM;;;;EAIE,qBDmFyE;AnB0kEjF;;AQlqEE;EYiBM,yBAJe;ApBypEvB;AoBnpEQ;;EAEE,yBARa;ApB6pEvB;;AoBhrEI;;;EAGE,yBD2F+B;AnBwlErC;AoB/qEM;;;;EAIE,qBDmFyE;AnB8lEjF;;AQtrEE;EYiBM,yBAJe;ApB6qEvB;AoBvqEQ;;EAEE,yBARa;ApBirEvB;;AoBpsEI;;;EAGE,yBD2F+B;AnB4mErC;AoBnsEM;;;;EAIE,qBDmFyE;AnBknEjF;;AQ1sEE;EYiBM,yBAJe;ApBisEvB;AoB3rEQ;;EAEE,yBARa;ApBqsEvB;;AoBxtEI;;;EAGE,sCdgWwB;AN23D9B;;AQxtEE;EYiBM,sCAJe;ApB+sEvB;AoBzsEQ;;EAEE,sCARa;ApBmtEvB;;AmB3nEI;EACE,WjBlHK;EiBmHL,yBjB1GK;EiB2GL,qBbmQwB;AN23D9B;AmBznEI;EACE,cjBlHK;EiBmHL,yBjBxHK;EiByHL,qBjBxHK;AFmvEX;;AmBtnEA;EACE,WjBlIS;EiBmIT,yBjB1HS;AFmvEX;AmBvnEE;;;EAGE,qBb+O0B;AN04D9B;AmBtnEE;EACE,SAAA;AnBwnEJ;AmBpnEI;EACE,2CbmOwB;ANm5D9B;AQ3vEE;EW4IM,WjBxJG;EiByJH,4Cb6NsB;ANq5D9B;;AiBlsEI;EEiGA;IAEI,cAAA;IACA,WAAA;IACA,gBAAA;IACA,iCAAA;EnBomEN;EmBjmEM;IACE,SAAA;EnBmmER;AACF;AiB9sEI;EEiGA;IAEI,cAAA;IACA,WAAA;IACA,gBAAA;IACA,iCAAA;EnB+mEN;EmB5mEM;IACE,SAAA;EnB8mER;AACF;AiBztEI;EEiGA;IAEI,cAAA;IACA,WAAA;IACA,gBAAA;IACA,iCAAA;EnB0nEN;EmBvnEM;IACE,SAAA;EnBynER;AACF;AiBpuEI;EEiGA;IAEI,cAAA;IACA,WAAA;IACA,gBAAA;IACA,iCAAA;EnBqoEN;EmBloEM;IACE,SAAA;EnBooER;AACF;AmB9oEI;EAEI,cAAA;EACA,WAAA;EACA,gBAAA;EACA,iCAAA;AnB+oER;AmB5oEQ;EACE,SAAA;AnB8oEV;;AqB3zEA;EACE,cAAA;EACA,WAAA;EACA,mCf6esC;Ee5etC,yBAAA;EdqHI,eAtCa;Ec5EjB,gBfsR4B;EerR5B,gBf0R4B;EezR5B,cnBPS;EmBQT,sBnBhBS;EmBiBT,4BAAA;EACA,yBAAA;ERbE,sBP6O0B;EgB5OxB,wEDkBJ;ArByzEF;AsBt0EI;EDLJ;ICMM,gBAAA;EtBy0EJ;AACF;AqB3zEE;EACE,6BAAA;EACA,SAAA;ArB6zEJ;AqBzzEE;EACE,kBAAA;EACA,0BAAA;ArB2zEJ;AuBj1EE;EACE,crBNO;EqBOP,sBrBfO;EqBgBP,qBjBwdoC;EiBvdpC,UAAA;EAKE,kDjBuXwB;ANw9D9B;AqB3zEE;EACE,cnBpCO;EmBsCP,UAAA;ArB4zEJ;AqB/zEE;EACE,cnBpCO;EmBsCP,UAAA;ArB4zEJ;AqB/zEE;EACE,cnBpCO;EmBsCP,UAAA;ArB4zEJ;AqB/zEE;EACE,cnBpCO;EmBsCP,UAAA;ArB4zEJ;AqB/zEE;EACE,cnBpCO;EmBsCP,UAAA;ArB4zEJ;AqBpzEE;EAEE,yBnBpDO;EmBsDP,UAAA;ArBozEJ;;AqB/yEE;EAME,cnB5DO;EmB6DP,sBnBrEO;AFk3EX;;AqBxyEA;;EAEE,cAAA;EACA,WAAA;ArB2yEF;;AqBjyEA;EACE,iCAAA;EACA,oCAAA;EACA,gBAAA;EdlBE,kBAAA;EcoBF,gBf4M4B;ANwlE9B;;AqBjyEA;EACE,+BAAA;EACA,kCAAA;Ed8BI,kBAtCa;EcUjB,gBfyI4B;AN2pE9B;;AqBjyEA;EACE,gCAAA;EACA,mCAAA;EduBI,mBAtCa;EciBjB,gBfmI4B;ANiqE9B;;AqB3xEA;EACE,cAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EdQI,eAtCa;EcgCjB,gBf+K4B;Ee9K5B,cnBhHS;EmBiHT,6BAAA;EACA,yBAAA;EACA,mBAAA;ArB8xEF;AqB5xEE;EAEE,gBAAA;EACA,eAAA;ArB6xEJ;;AqBjxEA;EACE,kCfwWsC;EevWtC,uBAAA;EdjBI,mBAtCa;EcyDjB,gBf2F4B;EOxO1B,qBP+O0B;ANmrE9B;;AqBjxEA;EACE,gCfiWsC;EehWtC,oBAAA;EdzBI,kBAtCa;EciEjB,gBfkF4B;EOvO1B,qBP8O0B;AN4rE9B;;AqB/wEE;EAEE,YAAA;ArBixEJ;;AqB7wEA;EACE,YAAA;ArBgxEF;;AqBxwEA;EACE,mBfsVsC;ANq7DxC;;AqBxwEA;EACE,cAAA;EACA,mBfuUsC;ANo8DxC;;AqBnwEA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;ArBswEF;AqBpwEE;;EAEE,kBAAA;EACA,iBAAA;ArBswEJ;;AqB7vEA;EACE,kBAAA;EACA,cAAA;EACA,qBf4SsC;ANo9DxC;;AqB7vEA;EACE,kBAAA;EACA,kBfwSsC;EevStC,qBAAA;ArBgwEF;AqB7vEE;EAEE,cnBtNO;AFo9EX;;AqB1vEA;EACE,gBAAA;ArB6vEF;;AqB1vEA;EACE,oBAAA;EACA,mBAAA;EACA,eAAA;EACA,qBfyRsC;ANo+DxC;AqB1vEE;EACE,gBAAA;EACA,aAAA;EACA,uBfoRoC;EenRpC,cAAA;ArB4vEJ;;AuBh8EE;EACE,aAAA;EACA,WAAA;EACA,mBjB6coC;ECpbpC,cAAA;EgBvBA,cF4MqC;ArBuvEzC;;AuBh8EE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,kBAAA;EhBoEE,mBAtCa;EgB5Bf,gBjB2O0B;EiB1O1B,WAAA;EACA,wCAAA;EV1DA,sBP6O0B;ANixE9B;;AuB/7EI;;;;EAEE,cAAA;AvBo8EN;;AuB1+EI;EA4CE,qBFiLmC;EE9KjC,oCjBmagC;EiBlahC,iRAAA;EACA,4BAAA;EACA,2DAAA;EACA,gEAAA;AvBg8ER;AuB77EM;EACE,qBFsKiC;EErKjC,gDAAA;AvB+7ER;;AuBv/EI;EAiEI,oCjBiZgC;EiBhZhC,kFAAA;AvB07ER;;AuB5/EI;EAyEE,qBFoJmC;EEjJjC,uCjBkeoC;EiBjepC,ujBAAA;AvBq7ER;AuBl7EM;EACE,qBF4IiC;EE3IjC,gDAAA;AvBo7ER;;AuB76EM;EACE,cFmIiC;ArB6yEzC;AuB76EM;;;EAEE,cAAA;AvBg7ER;;AuBz6EM;EACE,cFsHiC;ArBszEzC;AuB16EQ;EACE,qBFmH+B;ArByzEzC;AuBv6EQ;EACE,qBAAA;EC1IN,yBD2I2B;AvBy6E/B;AuBp6EQ;EACE,gDAAA;AvBs6EV;AuBn6EQ;EACE,qBAVqB;AvB+6E/B;;AuB55EM;EACE,qBApBuB;AvBm7E/B;AuB35EQ;EACE,qBAzBqB;EA0BrB,gDAAA;AvB65EV;;AuB5hFE;EACE,aAAA;EACA,WAAA;EACA,mBjB6coC;ECpbpC,cAAA;EgBvBA,cF4MqC;ArBm1EzC;;AuB5hFE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,kBAAA;EhBoEE,mBAtCa;EgB5Bf,gBjB2O0B;EiB1O1B,WAAA;EACA,wCAAA;EV1DA,sBP6O0B;AN62E9B;;AuB3hFI;;;;EAEE,cAAA;AvBgiFN;;AuBtkFI;EA4CE,qBFiLmC;EE9KjC,oCjBmagC;EiBlahC,4UAAA;EACA,4BAAA;EACA,2DAAA;EACA,gEAAA;AvB4hFR;AuBzhFM;EACE,qBFsKiC;EErKjC,gDAAA;AvB2hFR;;AuBnlFI;EAiEI,oCjBiZgC;EiBhZhC,kFAAA;AvBshFR;;AuBxlFI;EAyEE,qBFoJmC;EEjJjC,uCjBkeoC;EiBjepC,knBAAA;AvBihFR;AuB9gFM;EACE,qBF4IiC;EE3IjC,gDAAA;AvBghFR;;AuBzgFM;EACE,cFmIiC;ArBy4EzC;AuBzgFM;;;EAEE,cAAA;AvB4gFR;;AuBrgFM;EACE,cFsHiC;ArBk5EzC;AuBtgFQ;EACE,qBFmH+B;ArBq5EzC;AuBngFQ;EACE,qBAAA;EC1IN,yBD2I2B;AvBqgF/B;AuBhgFQ;EACE,gDAAA;AvBkgFV;AuB//EQ;EACE,qBAVqB;AvB2gF/B;;AuBx/EM;EACE,qBApBuB;AvB+gF/B;AuBv/EQ;EACE,qBAzBqB;EA0BrB,gDAAA;AvBy/EV;;AqB35EA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;ArB85EF;AqBz5EE;EACE,WAAA;ArB25EJ;AiBjnFI;EI2NA;IACE,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,gBAAA;ErBy5EJ;EqBr5EE;IACE,aAAA;IACA,cAAA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;ErBu5EJ;EqBn5EE;IACE,qBAAA;IACA,WAAA;IACA,sBAAA;ErBq5EJ;EqBj5EE;IACE,qBAAA;ErBm5EJ;EqBh5EE;;IAEE,WAAA;ErBk5EJ;EqB74EE;IACE,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,WAAA;IACA,eAAA;ErB+4EJ;EqB74EE;IACE,kBAAA;IACA,cAAA;IACA,aAAA;IACA,qBf2LkC;Ie1LlC,cAAA;ErB+4EJ;EqB54EE;IACE,mBAAA;IACA,uBAAA;ErB84EJ;EqB54EE;IACE,gBAAA;ErB84EJ;AACF;;AyBvtFA;EACE,qBAAA;EAEA,gBnB0R4B;EmBzR5B,cAAA;EACA,kBAAA;EAEA,sBAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,6BAAA;EACA,6BAAA;ECuFA,yBAAA;EnBuBI,eAtCa;EmBiBjB,gBpB8L4B;EOnS1B,sBP6O0B;EgB5OxB,qIGaJ;AzB2tFF;AsBnuFI;EGLJ;IHMM,gBAAA;EtBsuFJ;AACF;AQvuFE;EiBUE,cvBZO;EuBaP,qBAAA;AzBguFJ;AyB7tFE;EAEE,UAAA;EACA,kDnBgX0B;AN82E9B;AyB1tFE;EAEE,anBoZ0B;ANu0E9B;AyB5sFA;;EAEE,oBAAA;AzB8sFF;;AyBrsFE;ECvDA,cAAA;EFAE,yBlByEW;EoBvEb,qBpBuEa;ANyrFf;AQ5vFE;EkBAE,cAAA;EFNA,yBED2D;EAS3D,qBATqG;A1BwwFzG;A0B5vFE;EAEE,cAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,iDAAA;A1ByvFN;A0BpvFE;EAEE,cAAA;EACA,yBpB6CW;EoB5CX,qBpB4CW;ANysFf;A0B9uFE;EAGE,cAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;A1BwxF7L;A0BzuFI;EAKI,iDAAA;A1BuuFR;;AyBnuFE;ECvDA,WAAA;EFAE,yBlByEW;EoBvEb,qBpBuEa;ANutFf;AQ1xFE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;A1BsyFzG;A0B1xFE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,iDAAA;A1BuxFN;A0BlxFE;EAEE,WAAA;EACA,yBpB6CW;EoB5CX,qBpB4CW;ANuuFf;A0B5wFE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;A1BszF7L;A0BvwFI;EAKI,iDAAA;A1BqwFR;;AyBjwFE;ECvDA,WAAA;EFAE,yBlByEW;EoBvEb,qBpBuEa;ANqvFf;AQxzFE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;A1Bo0FzG;A0BxzFE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,+CAAA;A1BqzFN;A0BhzFE;EAEE,WAAA;EACA,yBpB6CW;EoB5CX,qBpB4CW;ANqwFf;A0B1yFE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;A1Bo1F7L;A0BryFI;EAKI,+CAAA;A1BmyFR;;AyB/xFE;ECvDA,WAAA;EFAE,yBlByEW;EoBvEb,qBpBuEa;ANmxFf;AQt1FE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;A1Bk2FzG;A0Bt1FE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,gDAAA;A1Bm1FN;A0B90FE;EAEE,WAAA;EACA,yBpB6CW;EoB5CX,qBpB4CW;ANmyFf;A0Bx0FE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;A1Bk3F7L;A0Bn0FI;EAKI,gDAAA;A1Bi0FR;;AyB7zFE;ECvDA,cAAA;EFAE,yBlByEW;EoBvEb,qBpBuEa;ANizFf;AQp3FE;EkBAE,cAAA;EFNA,yBED2D;EAS3D,qBATqG;A1Bg4FzG;A0Bp3FE;EAEE,cAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,gDAAA;A1Bi3FN;A0B52FE;EAEE,cAAA;EACA,yBpB6CW;EoB5CX,qBpB4CW;ANi0Ff;A0Bt2FE;EAGE,cAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;A1Bg5F7L;A0Bj2FI;EAKI,gDAAA;A1B+1FR;;AyB31FE;ECvDA,WAAA;EFAE,yBlByEW;EoBvEb,qBpBuEa;AN+0Ff;AQl5FE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;A1B85FzG;A0Bl5FE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,+CAAA;A1B+4FN;A0B14FE;EAEE,WAAA;EACA,yBpB6CW;EoB5CX,qBpB4CW;AN+1Ff;A0Bp4FE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;A1B86F7L;A0B/3FI;EAKI,+CAAA;A1B63FR;;AyBz3FE;ECvDA,cAAA;EFAE,yBlByEW;EoBvEb,qBpBuEa;AN62Ff;AQh7FE;EkBAE,cAAA;EFNA,yBED2D;EAS3D,qBATqG;A1B47FzG;A0Bh7FE;EAEE,cAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,iDAAA;A1B66FN;A0Bx6FE;EAEE,cAAA;EACA,yBpB6CW;EoB5CX,qBpB4CW;AN63Ff;A0Bl6FE;EAGE,cAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;A1B48F7L;A0B75FI;EAKI,iDAAA;A1B25FR;;AyBv5FE;ECvDA,WAAA;EFAE,yBlByEW;EoBvEb,qBpBuEa;AN24Ff;AQ98FE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;A1B09FzG;A0B98FE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,8CAAA;A1B28FN;A0Bt8FE;EAEE,WAAA;EACA,yBpB6CW;EoB5CX,qBpB4CW;AN25Ff;A0Bh8FE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;A1B0+F7L;A0B37FI;EAKI,8CAAA;A1By7FR;;AyB/6FE;ECHA,cpBea;EoBdb,qBpBca;ANw6Ff;AQ3+FE;EkBwDE,cALgD;EAMhD,yBpBUW;EoBTX,qBpBSW;AN66Ff;A0Bn7FE;EAEE,iDAAA;A1Bo7FJ;A0Bj7FE;EAEE,cpBDW;EoBEX,6BAAA;A1Bk7FJ;A0B/6FE;EAGE,cAAA;EACA,yBpBTW;EoBUX,qBpBVW;ANy7Ff;A0B76FI;EAKI,iDAAA;A1B26FR;;AyBx8FE;ECHA,cpBea;EoBdb,qBpBca;ANi8Ff;AQpgGE;EkBwDE,WALgD;EAMhD,yBpBUW;EoBTX,qBpBSW;ANs8Ff;A0B58FE;EAEE,iDAAA;A1B68FJ;A0B18FE;EAEE,cpBDW;EoBEX,6BAAA;A1B28FJ;A0Bx8FE;EAGE,WAAA;EACA,yBpBTW;EoBUX,qBpBVW;ANk9Ff;A0Bt8FI;EAKI,iDAAA;A1Bo8FR;;AyBj+FE;ECHA,cpBea;EoBdb,qBpBca;AN09Ff;AQ7hGE;EkBwDE,WALgD;EAMhD,yBpBUW;EoBTX,qBpBSW;AN+9Ff;A0Br+FE;EAEE,+CAAA;A1Bs+FJ;A0Bn+FE;EAEE,cpBDW;EoBEX,6BAAA;A1Bo+FJ;A0Bj+FE;EAGE,WAAA;EACA,yBpBTW;EoBUX,qBpBVW;AN2+Ff;A0B/9FI;EAKI,+CAAA;A1B69FR;;AyB1/FE;ECHA,cpBea;EoBdb,qBpBca;ANm/Ff;AQtjGE;EkBwDE,WALgD;EAMhD,yBpBUW;EoBTX,qBpBSW;ANw/Ff;A0B9/FE;EAEE,gDAAA;A1B+/FJ;A0B5/FE;EAEE,cpBDW;EoBEX,6BAAA;A1B6/FJ;A0B1/FE;EAGE,WAAA;EACA,yBpBTW;EoBUX,qBpBVW;ANogGf;A0Bx/FI;EAKI,gDAAA;A1Bs/FR;;AyBnhGE;ECHA,cpBea;EoBdb,qBpBca;AN4gGf;AQ/kGE;EkBwDE,cALgD;EAMhD,yBpBUW;EoBTX,qBpBSW;ANihGf;A0BvhGE;EAEE,+CAAA;A1BwhGJ;A0BrhGE;EAEE,cpBDW;EoBEX,6BAAA;A1BshGJ;A0BnhGE;EAGE,cAAA;EACA,yBpBTW;EoBUX,qBpBVW;AN6hGf;A0BjhGI;EAKI,+CAAA;A1B+gGR;;AyB5iGE;ECHA,cpBea;EoBdb,qBpBca;ANqiGf;AQxmGE;EkBwDE,WALgD;EAMhD,yBpBUW;EoBTX,qBpBSW;AN0iGf;A0BhjGE;EAEE,+CAAA;A1BijGJ;A0B9iGE;EAEE,cpBDW;EoBEX,6BAAA;A1B+iGJ;A0B5iGE;EAGE,WAAA;EACA,yBpBTW;EoBUX,qBpBVW;ANsjGf;A0B1iGI;EAKI,+CAAA;A1BwiGR;;AyBrkGE;ECHA,cpBea;EoBdb,qBpBca;AN8jGf;AQjoGE;EkBwDE,cALgD;EAMhD,yBpBUW;EoBTX,qBpBSW;ANmkGf;A0BzkGE;EAEE,iDAAA;A1B0kGJ;A0BvkGE;EAEE,cpBDW;EoBEX,6BAAA;A1BwkGJ;A0BrkGE;EAGE,cAAA;EACA,yBpBTW;EoBUX,qBpBVW;AN+kGf;A0BnkGI;EAKI,iDAAA;A1BikGR;;AyB9lGE;ECHA,cpBea;EoBdb,qBpBca;ANulGf;AQ1pGE;EkBwDE,WALgD;EAMhD,yBpBUW;EoBTX,qBpBSW;AN4lGf;A0BlmGE;EAEE,8CAAA;A1BmmGJ;A0BhmGE;EAEE,cpBDW;EoBEX,6BAAA;A1BimGJ;A0B9lGE;EAGE,WAAA;EACA,yBpBTW;EoBUX,qBpBVW;ANwmGf;A0B5lGI;EAKI,8CAAA;A1B0lGR;;AyB5mGA;EACE,gBnBoN4B;EmBnN5B,cnBkGwC;EmBjGxC,qBnBkGwC;AN6gG1C;AQprGE;EiBwEE,cnBgGsC;EmB/FtC,0BnBgGsC;AN+gG1C;AyB5mGE;EAEE,0BnB2FsC;EmB1FtC,gBAAA;AzB6mGJ;AyB1mGE;EAEE,cvBzFO;EuB0FP,oBAAA;AzB2mGJ;;AyBhmGA;ECJE,oBAAA;EnBuBI,kBAtCa;EmBiBjB,gBpBkI4B;EOvO1B,qBP8O0B;ANg+F9B;;AyBnmGA;ECRE,uBAAA;EnBuBI,mBAtCa;EmBiBjB,gBpBmI4B;EOxO1B,qBP+O0B;ANs+F9B;;AyBjmGA;EACE,cAAA;EACA,WAAA;AzBomGF;AyBjmGE;EACE,kBnB6T0B;ANsyF9B;;AyB3lGE;;;EACE,WAAA;AzBgmGJ;;A2BxuGA;ELMM,gCKLJ;A3B2uGF;AsBjuGI;EKXJ;ILYM,gBAAA;EtBouGJ;AACF;A2B9uGE;EACE,UAAA;A3BgvGJ;;A2B3uGE;EACE,aAAA;A3B8uGJ;;A2B1uGA;EACE,kBAAA;EACA,SAAA;EACA,gBAAA;ELXI,6BKYJ;A3B6uGF;AsBpvGI;EKGJ;ILFM,gBAAA;EtBuvGJ;AACF;;A4BnwGA;;;;EAIE,kBAAA;A5BswGF;;A4BnwGA;EACE,mBAAA;A5BswGF;A6BlvGI;EACE,qBAAA;EACA,oBvBkOwB;EuBjOxB,uBvBgOwB;EuB/NxB,WAAA;EAhCJ,uBAAA;EACA,qCAAA;EACA,gBAAA;EACA,oCAAA;A7BqxGF;A6BhuGI;EACE,cAAA;A7BkuGN;;A4B5wGA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,atB4pBkC;EsB3pBlC,aAAA;EACA,WAAA;EACA,gBtBkuBkC;EsBjuBlC,iBAAA;EACA,oBAAA;ErBsGI,eAtCa;EqB9DjB,c1BjBS;E0BkBT,gBAAA;EACA,gBAAA;EACA,sB1B9BS;E0B+BT,4BAAA;EACA,qCAAA;Ef3BE,sBP6O0B;AN8jG9B;;A4BvwGI;EACE,WAAA;EACA,OAAA;A5B0wGN;;A4BvwGI;EACE,QAAA;EACA,UAAA;A5B0wGN;;AiB9vGI;EWnBA;IACE,WAAA;IACA,OAAA;E5BqxGJ;;E4BlxGE;IACE,QAAA;IACA,UAAA;E5BqxGJ;AACF;AiB1wGI;EWnBA;IACE,WAAA;IACA,OAAA;E5BgyGJ;;E4B7xGE;IACE,QAAA;IACA,UAAA;E5BgyGJ;AACF;AiBrxGI;EWnBA;IACE,WAAA;IACA,OAAA;E5B2yGJ;;E4BxyGE;IACE,QAAA;IACA,UAAA;E5B2yGJ;AACF;AiBhyGI;EWnBA;IACE,WAAA;IACA,OAAA;E5BszGJ;;E4BnzGE;IACE,QAAA;IACA,UAAA;E5BszGJ;AACF;A4B/yGE;EACE,SAAA;EACA,YAAA;EACA,aAAA;EACA,uBtB+rBgC;ANknFpC;A6Bh1GI;EACE,qBAAA;EACA,oBvBkOwB;EuBjOxB,uBvBgOwB;EuB/NxB,WAAA;EAzBJ,aAAA;EACA,qCAAA;EACA,0BAAA;EACA,oCAAA;A7B42GF;A6B9zGI;EACE,cAAA;A7Bg0GN;;A4BrzGE;EACE,MAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,qBtBirBgC;ANuoFpC;A6Br2GI;EACE,qBAAA;EACA,oBvBkOwB;EuBjOxB,uBvBgOwB;EuB/NxB,WAAA;EAlBJ,mCAAA;EACA,eAAA;EACA,sCAAA;EACA,wBAAA;A7B03GF;A6Bn1GI;EACE,cAAA;A7Bq1GN;A4Bh0GI;EACE,iBAAA;A5Bk0GN;;A4B5zGE;EACE,MAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,sBtBgqBgC;AN+pFpC;A6B73GI;EACE,qBAAA;EACA,oBvBkOwB;EuBjOxB,uBvBgOwB;EuB/NxB,WAAA;A7B+3GN;A6Bp3GM;EACE,aAAA;A7Bs3GR;A6Bn3GM;EACE,qBAAA;EACA,qBvB+MsB;EuB9MtB,uBvB6MsB;EuB5MtB,WAAA;EA9BN,mCAAA;EACA,yBAAA;EACA,sCAAA;A7Bo5GF;A6Bn3GI;EACE,cAAA;A7Bq3GN;A4B/0GI;EACE,iBAAA;A5Bi1GN;;A4Bz0GE;EAIE,WAAA;EACA,YAAA;A5By0GJ;;A4Bp0GA;EE9GE,SAAA;EACA,gBAAA;EACA,gBAAA;EACA,6BAAA;A9Bs7GF;;A4Bp0GA;EACE,cAAA;EACA,WAAA;EACA,uBAAA;EACA,WAAA;EACA,gBtBoK4B;EsBnK5B,c1BtHS;E0BuHT,mBAAA;EACA,mBAAA;EACA,6BAAA;EACA,SAAA;A5Bu0GF;AQ37GE;EoBmIE,ctBqnBgC;EsBpnBhC,qBAAA;EJ9IA,yBtBJO;AF88GX;A4BxzGE;EAEE,W1B1JO;E0B2JP,qBAAA;EJrJA,yBlBuP0B;ANwtG9B;A4BtzGE;EAEE,c1B1JO;E0B2JP,oBAAA;EACA,6BAAA;A5BuzGJ;;A4B/yGA;EACE,cAAA;A5BkzGF;;A4B9yGA;EACE,cAAA;EACA,sBAAA;EACA,gBAAA;ErBpDI,mBAtCa;EqB4FjB,c1B9KS;E0B+KT,mBAAA;A5BizGF;;A4B7yGA;EACE,cAAA;EACA,uBAAA;EACA,c1BnLS;AFm+GX;;A+B1+GA;;EAEE,kBAAA;EACA,oBAAA;EACA,sBAAA;A/B6+GF;A+B3+GE;;EACE,kBAAA;EACA,cAAA;A/B8+GJ;AQ7+GE;;EuBII,UAAA;A/B6+GN;A+B3+GI;;;;EAGE,UAAA;A/B8+GN;;A+Bx+GA;EACE,aAAA;EACA,eAAA;EACA,2BAAA;A/B2+GF;A+Bz+GE;EACE,WAAA;A/B2+GJ;;A+Br+GE;;EAEE,iBAAA;A/Bw+GJ;A+Bp+GE;;ElBxBE,0BkB0B6B;ElBzB7B,6BkByB6B;A/Bu+GjC;A+Bp+GE;;ElBfE,yBkBiB4B;ElBhB5B,4BkBgB4B;A/Bu+GhC;;A+Bv9GA;EACE,wBAAA;EACA,uBAAA;A/B09GF;A+Bx9GE;EAGE,cAAA;A/Bw9GJ;A+Br9GE;EACE,eAAA;A/Bu9GJ;;A+Bn9GA;EACE,uBAAA;EACA,sBAAA;A/Bs9GF;;A+Bn9GA;EACE,sBAAA;EACA,qBAAA;A/Bs9GF;;A+Bl8GA;EACE,sBAAA;EACA,uBAAA;EACA,uBAAA;A/Bq8GF;A+Bn8GE;;EAEE,WAAA;A/Bq8GJ;A+Bl8GE;;EAEE,gBAAA;A/Bo8GJ;A+Bh8GE;;ElBlGE,6BkBoG8B;ElBnG9B,4BkBmG8B;A/Bm8GlC;A+Bh8GE;;ElBrHE,yBkBuH2B;ElBtH3B,0BkBsH2B;A/Bm8G/B;;A+Bj7GE;;EAEE,gBAAA;A/Bo7GJ;A+Bl7GI;;;;EAEE,kBAAA;EACA,sBAAA;EACA,oBAAA;A/Bs7GN;;AgC/kHA;EACE,kBAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;AhCklHF;AgChlHE;;;;EAIE,kBAAA;EACA,SAAA;EACA,YAAA;EACA,gBAAA;AhCklHJ;AgChlHI;;;;;;;;;;;;EAGE,iBAAA;AhC2lHN;AgCtlHE;;;EAGE,UAAA;AhCwlHJ;AgCplHE;EACE,UAAA;AhCslHJ;AgCjlHI;;EnBtBA,0BmBsBkD;EnBrBlD,6BmBqBkD;AhCslHtD;AgCrlHI;;EnBTA,yBmBSkD;EnBRlD,4BmBQkD;AhC0lHtD;AgCrlHE;EACE,aAAA;EACA,mBAAA;AhCulHJ;AgCrlHI;EnBhCA,0BmBiC4E;EnBhC5E,6BmBgC4E;AhCwlHhF;AgCvlHI;EnBpBA,yBmBoBqE;EnBnBrE,4BmBmBqE;AhC2lHzE;;AgChlHA;;EAEE,aAAA;AhCmlHF;AgC9kHE;;EACE,kBAAA;EACA,UAAA;AhCilHJ;AgC/kHI;;EACE,UAAA;AhCklHN;AgC9kHE;;;;;;;;EAIE,iBAAA;AhColHJ;;AgChlHA;EAAuB,kBAAA;AhColHvB;;AgCnlHA;EAAsB,iBAAA;AhCulHtB;;AgC/kHA;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EzBwBI,eAtCa;EyBgBjB,gB1B0L4B;E0BzL5B,gB1B8L4B;E0B7L5B,c9BnGS;E8BoGT,kBAAA;EACA,mBAAA;EACA,yB9B3GS;E8B4GT,yBAAA;EnB1GE,sBP6O0B;ANg9G9B;AgC/kHE;;EAEE,aAAA;AhCilHJ;;AgCvkHA;;EAEE,gC1BuXsC;ANmtGxC;;AgCvkHA;;;;;;EAME,oBAAA;EzBXI,kBAtCa;EyBmDjB,gB1BgG4B;EOvO1B,qBP8O0B;ANo+G9B;;AgCvkHA;;EAEE,kC1BqWsC;ANquGxC;;AgCvkHA;;;;;;EAME,uBAAA;EzB5BI,mBAtCa;EyBoEjB,gB1BgF4B;EOxO1B,qBP+O0B;ANo/G9B;;AgCvkHA;;EAEE,sBAAA;AhC0kHF;;AgC/jHA;;;;;;EnBzJI,0BmB+J2B;EnB9J3B,6BmB8J2B;AhCmkH/B;;AgChkHA;;;;;;EnBpJI,yBmB0J0B;EnBzJ1B,4BmByJ0B;AhCokH9B;;AiCxvHA;EACE,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,oBAAA;AjC2vHF;;AiCxvHA;EACE,oBAAA;EACA,kB3B6fsC;AN8vGxC;;AiCxvHA;EACE,kBAAA;EACA,OAAA;EACA,WAAA;EACA,W3ByfsC;E2BxftC,eAAA;EACA,UAAA;AjC2vHF;AiCzvHE;EACE,W/B9BO;E+B+BP,qB3B8N0B;EkBvP1B,yBlBuP0B;AN8hH9B;AiCvvHE;EAKI,kD3BoWwB;ANi5G9B;AiCjvHE;EACE,qB3B0boC;ANyzGxC;AiChvHE;EACE,W/BlDO;E+BmDP,uB3Bsf4C;E2Brf5C,mB3Bqf4C;AN6vGhD;AiC3uHI;EACE,c/BrDK;AFkyHX;AiC3uHM;EACE,yB/B5DG;AFyyHX;;AiCnuHA;EACE,kBAAA;EACA,gBAAA;EAEA,mBAAA;AjCquHF;AiCjuHE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,W3B4boC;E2B3bpC,Y3B2boC;E2B1bpC,oBAAA;EACA,WAAA;EACA,sB/B1FO;E+B2FP,yBAAA;AjCmuHJ;AiC9tHE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,W3B6aoC;E2B5apC,Y3B4aoC;E2B3apC,WAAA;EACA,iCAAA;AjCguHJ;;AiCttHE;EpB7GE,sBP6O0B;AN0lH9B;AiCrtHI;EACE,kOAAA;AjCutHN;AiCltHI;EACE,qB3B+HwB;EkBvP1B,yBlBuP0B;ANslH9B;AiCjtHI;EACE,+KAAA;AjCmtHN;AiC9sHI;EACE,0C3BwZ0C;ANwzGhD;AiC9sHI;EACE,0C3BqZ0C;AN2zGhD;;AiCtsHE;EAEE,kB3B8Z4C;AN0yGhD;AiCpsHI;EACE,8KAAA;AjCssHN;AiCjsHI;EACE,0C3B8X0C;ANq0GhD;;AiCzrHA;EACE,qBAAA;AjC4rHF;AiCzrHI;EACE,cAAA;EACA,c3BsY0C;E2BrY1C,mBAAA;EAEA,qB3BoY0C;ANszGhD;AiCvrHI;EACE,wBAAA;EACA,0BAAA;EACA,uB3B+X0C;E2B9X1C,wB3B8X0C;E2B7X1C,yB/BxLK;E+B0LL,qB3B0X0C;EgBpjB1C,yIW2LA;AjCwrHN;AsB92HI;EW8KA;IX7KE,gBAAA;EtBi3HJ;AACF;AiCxrHI;EACE,sB/BvMK;E+BwML,8BAAA;AjC0rHN;AiCrrHI;EACE,0C3BmV0C;ANo2GhD;;AiC3qHA;EACE,qBAAA;EACA,WAAA;EACA,mC3ByRsC;E2BxRtC,0CAAA;E1B/FI,eAtCa;E0BwIjB,gB3BkE4B;E2BjE5B,gB3BsE4B;E2BrE5B,c/B3NS;E+B4NT,sBAAA;EACA,uOAAA;EACA,yBAAA;EpBjOE,sBP6O0B;E2BT5B,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AjC4qHF;AiC1qHE;EACE,qB3B4PoC;E2B3PpC,UAAA;EAIE,kD3BwW8B;ANi0GpC;AiCtqHI;EAME,c/BlPK;E+BmPL,sB/B3PK;AF85HX;AiC/pHE;EAEE,YAAA;EACA,sB3BoI0B;E2BnI1B,sBAAA;AjCgqHJ;AiC7pHE;EACE,c/BhQO;E+BiQP,yB/BrQO;AFo6HX;AiC3pHE;EACE,aAAA;AjC6pHJ;AiCzpHE;EACE,kBAAA;EACA,0BAAA;AjC2pHJ;;AiCvpHA;EACE,kC3B+NsC;E2B9NtC,oB3BsH4B;E2BrH5B,uB3BqH4B;E2BpH5B,oB3BqH4B;ECjRxB,mBAtCa;AP61HnB;;AiCvpHA;EACE,gC3BwNsC;E2BvNtC,mB3BmH4B;E2BlH5B,sB3BkH4B;E2BjH5B,kB3BkH4B;ECtRxB,kBAtCa;APq2HnB;;AiClpHA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,mC3BsMsC;E2BrMtC,gBAAA;AjCqpHF;;AiClpHA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,mC3B8LsC;E2B7LtC,SAAA;EACA,UAAA;AjCqpHF;AiCnpHE;EACE,qB3B2KoC;E2B1KpC,kD3B+E0B;ANskH9B;AiCjpHE;EAEE,yB/BjUO;AFm9HX;AiC9oHI;EACE,iB3BiUa;AN+0GnB;AiC5oHE;EACE,0BAAA;AjC8oHJ;;AiC1oHA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;EACA,mC3B8JsC;E2B7JtC,yBAAA;EAEA,gB3BxD4B;E2ByD5B,gB3BpD4B;E2BqD5B,c/BrVS;E+BsVT,sB/B9VS;E+B+VT,yBAAA;EpB1VE,sBP6O0B;AN0vH9B;AiCzoHE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,6B3BwIoC;E2BvIpC,yBAAA;EACA,gB3BpE0B;E2BqE1B,c/BrWO;E+BsWP,iBAAA;ETxWA,yBtBHO;E+B6WP,oBAAA;EpB3WA,kCoB4WuB;AjC2oH3B;;AiCjoHA;EACE,WAAA;EACA,cAAA;EACA,UAAA;EACA,6BAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AjCooHF;AiCloHE;EACE,aAAA;AjCooHJ;AiChoHI;EAA0B,kE3B2Oe;ANw5G7C;AiCloHI;EAA0B,kE3B0Oe;AN25G7C;AiCpoHI;EAA0B,kE3ByOe;AN85G7C;AiCpoHE;EACE,SAAA;AjCsoHJ;AiCnoHE;EACE,W3B2NyC;E2B1NzC,Y3B0NyC;E2BzNzC,oBAAA;ET7YA,yBlBuP0B;E2BwJ1B,S3B0NyC;EO1mBzC,mBP2mByC;EgB1mBvC,oHWkZF;EXlZE,4GWkZF;EACA,wBAAA;UAAA,gBAAA;AjCooHJ;AsBlhII;EWqYF;IXpYI,wBAAA;IAAA,gBAAA;EtBqhIJ;AACF;AiCvoHI;ETrZA,uBlB8mByC;ANi7G7C;AiCroHE;EACE,W3BoMgC;E2BnMhC,c3BoMgC;E2BnMhC,kBAAA;EACA,e3BmMgC;E2BlMhC,yB/BjaO;E+BkaP,yBAAA;EpBjaA,mBPomBgC;ANq8GpC;AiCnoHE;EACE,W3BgMyC;E2B/LzC,Y3B+LyC;EkBtmBzC,yBlBuP0B;E2BkL1B,S3BgMyC;EO1mBzC,mBP2mByC;EgB1mBvC,iHW4aF;EX5aE,4GW4aF;EACA,qBAAA;OAAA,gBAAA;AjCooHJ;AsB5iII;EWgaF;IX/ZI,qBAAA;IAAA,gBAAA;EtB+iIJ;AACF;AiCvoHI;ET/aA,uBlB8mByC;AN28G7C;AiCroHE;EACE,W3B0KgC;E2BzKhC,c3B0KgC;E2BzKhC,kBAAA;EACA,e3ByKgC;E2BxKhC,yB/B3bO;E+B4bP,yBAAA;EpB3bA,mBPomBgC;AN+9GpC;AiCnoHE;EACE,W3BsKyC;E2BrKzC,Y3BqKyC;E2BpKzC,aAAA;EACA,oB3B9D0B;E2B+D1B,mB3B/D0B;EkBrY1B,yBlBuP0B;E2B+M1B,S3BmKyC;EO1mBzC,mBP2mByC;EgB1mBvC,gHWycF;EXzcE,4GWycF;EACA,gBAAA;AjCooHJ;AsBzkII;EW0bF;IXzbI,oBAAA;IAAA,gBAAA;EtB4kIJ;AACF;AiCvoHI;ET5cA,uBlB8mByC;ANw+G7C;AiCroHE;EACE,W3B6IgC;E2B5IhC,c3B6IgC;E2B5IhC,kBAAA;EACA,e3B4IgC;E2B3IhC,6BAAA;EACA,yBAAA;EACA,oBAAA;AjCuoHJ;AiCnoHE;EACE,yB/B/dO;EWCP,mBPomBgC;ANggHpC;AiCloHE;EACE,kBAAA;EACA,yB/BreO;EWCP,mBPomBgC;ANqgHpC;AiChoHI;EACE,yB/BzeK;AF2mIX;AiC/nHI;EACE,eAAA;AjCioHN;AiC9nHI;EACE,yB/BjfK;AFinIX;AiC7nHI;EACE,eAAA;AjC+nHN;AiC5nHI;EACE,yB/BzfK;AFunIX;;AiCznHA;;;EX9fM,4GWigBJ;AjC4nHF;AsBxnII;EWyfJ;;;IXxfM,gBAAA;EtB6nIJ;AACF;;AkCroIA;EACE,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AlCwoIF;;AkCroIA;EACE,cAAA;EACA,oBAAA;AlCwoIF;AQvoIE;E0BEE,qBAAA;AlCwoIJ;AkCpoIE;EACE,chChBO;EgCiBP,oBAAA;EACA,eAAA;AlCsoIJ;;AkC9nIA;EACE,gCAAA;AlCioIF;AkC/nIE;EACE,mBAAA;AlCioIJ;AkC9nIE;EACE,6BAAA;ErB3BA,+BPoO0B;EOnO1B,gCPmO0B;ANy7H9B;AQ3pIE;E0B6BI,qC5BqpB8B;AN4+GpC;AkC9nII;EACE,chC1CK;EgC2CL,6BAAA;EACA,yBAAA;AlCgoIN;AkC5nIE;;EAEE,chCjDO;EgCkDP,sBhC1DO;EgC2DP,kC5B0oBgC;ANo/GpC;AkC3nIE;EAEE,gBAAA;ErBlDA,yBqBoD2B;ErBnD3B,0BqBmD2B;AlC4nI/B;;AkClnIE;ErBvEE,sBP6O0B;ANg9H9B;AkClnIE;;EAEE,WhClFO;EgCmFP,yB5B0K0B;AN08H9B;;AkC1mIE;EACE,cAAA;EACA,kBAAA;AlC6mIJ;;AkCxmIE;EACE,aAAA;EACA,YAAA;EACA,kBAAA;AlC2mIJ;;AkCjmIE;EACE,aAAA;AlComIJ;AkClmIE;EACE,cAAA;AlComIJ;;AmCxsIA;EACE,kBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;EACA,oBAAA;AnC2sIF;AmCvsIE;;;;;;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;AnC8sIJ;AmC1rIA;EACE,qBAAA;EACA,sB7BqqBkC;E6BpqBlC,yB7BoqBkC;E6BnqBlC,kB7BiFO;ECTH,kBAtCa;E4BhCjB,oBAAA;EACA,mBAAA;AnC4rIF;AQtuIE;E2B6CE,qBAAA;AnC4rIJ;;AmCnrIA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AnCsrIF;AmCprIE;EACE,gBAAA;EACA,eAAA;AnCsrIJ;AmCnrIE;EACE,gBAAA;EACA,WAAA;AnCqrIJ;;AmC5qIA;EACE,qBAAA;EACA,mB7B4lBkC;E6B3lBlC,sB7B2lBkC;ANolHpC;;AmCnqIA;EACE,gBAAA;EACA,YAAA;EAGA,mBAAA;AnCoqIF;;AmChqIA;EACE,wBAAA;E5BSI,kBAtCa;E4B+BjB,cAAA;EACA,6BAAA;EACA,6BAAA;EtBrHE,sBP6O0B;AN4iI9B;AQ9wIE;E2B8GE,qBAAA;AnCmqIJ;;AmC7pIA;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,mCAAA;EACA,0BAAA;AnCgqIF;;AiBluII;EkB8EI;;;;;;IACE,gBAAA;IACA,eAAA;EnC6pIR;AACF;AiB3vII;EkByFA;IAoBI,qBAAA;IACA,2BAAA;EnCkpIN;EmChpIM;IACE,mBAAA;EnCkpIR;EmChpIQ;IACE,kBAAA;EnCkpIV;EmC/oIQ;IACE,qB7BgiBwB;I6B/hBxB,oB7B+hBwB;ENknHlC;EmC5oIM;;;;;;IACE,iBAAA;EnCmpIR;EmCroIM;IACE,wBAAA;IAGA,gBAAA;EnCqoIR;EmCloIM;IACE,aAAA;EnCooIR;AACF;AiB7wII;EkB8EI;;;;;;IACE,gBAAA;IACA,eAAA;EnCusIR;AACF;AiBryII;EkByFA;IAoBI,qBAAA;IACA,2BAAA;EnC4rIN;EmC1rIM;IACE,mBAAA;EnC4rIR;EmC1rIQ;IACE,kBAAA;EnC4rIV;EmCzrIQ;IACE,qB7BgiBwB;I6B/hBxB,oB7B+hBwB;EN4pHlC;EmCtrIM;;;;;;IACE,iBAAA;EnC6rIR;EmC/qIM;IACE,wBAAA;IAGA,gBAAA;EnC+qIR;EmC5qIM;IACE,aAAA;EnC8qIR;AACF;AiBvzII;EkB8EI;;;;;;IACE,gBAAA;IACA,eAAA;EnCivIR;AACF;AiB/0II;EkByFA;IAoBI,qBAAA;IACA,2BAAA;EnCsuIN;EmCpuIM;IACE,mBAAA;EnCsuIR;EmCpuIQ;IACE,kBAAA;EnCsuIV;EmCnuIQ;IACE,qB7BgiBwB;I6B/hBxB,oB7B+hBwB;ENssHlC;EmChuIM;;;;;;IACE,iBAAA;EnCuuIR;EmCztIM;IACE,wBAAA;IAGA,gBAAA;EnCytIR;EmCttIM;IACE,aAAA;EnCwtIR;AACF;AiBj2II;EkB8EI;;;;;;IACE,gBAAA;IACA,eAAA;EnC2xIR;AACF;AiBz3II;EkByFA;IAoBI,qBAAA;IACA,2BAAA;EnCgxIN;EmC9wIM;IACE,mBAAA;EnCgxIR;EmC9wIQ;IACE,kBAAA;EnCgxIV;EmC7wIQ;IACE,qB7BgiBwB;I6B/hBxB,oB7B+hBwB;ENgvHlC;EmC1wIM;;;;;;IACE,iBAAA;EnCixIR;EmCnwIM;IACE,wBAAA;IAGA,gBAAA;EnCmwIR;EmChwIM;IACE,aAAA;EnCkwIR;AACF;AmC/zII;EAoBI,qBAAA;EACA,2BAAA;AnC8yIR;AmCj0IQ;;;;;;EACE,gBAAA;EACA,eAAA;AnCw0IV;AmCrzIQ;EACE,mBAAA;AnCuzIV;AmCrzIU;EACE,kBAAA;AnCuzIZ;AmCpzIU;EACE,qB7BgiBwB;E6B/hBxB,oB7B+hBwB;ANuxHpC;AmCjzIQ;;;;;;EACE,iBAAA;AnCwzIV;AmC1yIQ;EACE,wBAAA;EAGA,gBAAA;AnC0yIV;AmCvyIQ;EACE,aAAA;AnCyyIV;;AmC3xIE;EACE,yB7B0gBgC;ANoxHpC;AQ9+IE;E2BmNI,yB7BugB8B;ANuxHpC;AmCzxII;EACE,yB7B+f8B;AN4xHpC;AQp/IE;E2B4NM,yB7B6f4B;AN8xHpC;AmCxxIM;EACE,yB7B2f4B;AN+xHpC;AmCtxII;;;;EAIE,yB7Bkf8B;ANsyHpC;AmCpxIE;EACE,yB7B2egC;E6B1ehC,gC7B+egC;ANuyHpC;AmCnxIE;EACE,+QAAA;AnCqxIJ;AmClxIE;EACE,yB7BkegC;ANkzHpC;AmCnxII;EACE,yB7Bke8B;ANmzHpC;AQ7gJE;E2B2PM,yB7B+d4B;ANszHpC;;AmC7wIE;EACE,WjCpRO;AFoiJX;AQphJE;E2BuQI,WjCvRK;AFuiJX;AmC3wII;EACE,+B7Boc8B;ANy0HpC;AQ1hJE;E2BgRM,gC7Bkc4B;AN20HpC;AmC1wIM;EACE,gC7Bgc4B;AN40HpC;AmCxwII;;;;EAIE,WjC5SK;AFsjJX;AmCtwIE;EACE,+B7BgbgC;E6B/ahC,sC7BobgC;ANo1HpC;AmCrwIE;EACE,qRAAA;AnCuwIJ;AmCpwIE;EACE,+B7BuagC;AN+1HpC;AmCrwII;EACE,WjC5TK;AFmkJX;AQnjJE;E2B+SM,WjC/TG;AFskJX;;AoClkJA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EAEA,qBAAA;EACA,sBlCXS;EkCYT,2BAAA;EACA,sCAAA;EvBRE,sBP6O0B;ANg2I9B;AoClkJE;EACE,eAAA;EACA,cAAA;ApCokJJ;AoChkJI;EvBRA,+BPoO0B;EOnO1B,gCPmO0B;ANw2I9B;AoC9jJI;EvBAA,mCPsN0B;EOrN1B,kCPqN0B;AN42I9B;;AoC5jJA;EAGE,cAAA;EAGA,eAAA;EACA,gB9BsxBkC;ANqyHpC;;AoCvjJA;EACE,sB9BgxBkC;AN0yHpC;;AoCvjJA;EACE,qBAAA;EACA,gBAAA;ApC0jJF;;AoCvjJA;EACE,gBAAA;ApC0jJF;;AQrmJE;E4BgDE,qBAAA;ApCyjJJ;AoCtjJE;EACE,oB9B+vBgC;ANyzHpC;;AoChjJA;EACE,wBAAA;EACA,gBAAA;EAEA,qC9BwvBkC;E8BvvBlC,6CAAA;ApCkjJF;AoChjJE;EvB1EE,0DuB2EuB;ApCkjJ3B;AoC9iJI;EACE,aAAA;ApCgjJN;;AoC3iJA;EACE,wBAAA;EACA,qC9BwuBkC;E8BvuBlC,0CAAA;ApC8iJF;AoC5iJE;EvB1FE,0DuB2FuB;ApC8iJ3B;;AoCriJA;EACE,uBAAA;EACA,uBAAA;EACA,sBAAA;EACA,gBAAA;ApCwiJF;;AoCriJA;EACE,uBAAA;EACA,sBAAA;ApCwiJF;;AoCpiJA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,gB9B8sBkC;ANy1HpC;;AoCpiJA;;;EAGE,cAAA;EACA,WAAA;ApCuiJF;;AoCpiJA;;EvBxHI,2CPqzBgC;EOpzBhC,4CPozBgC;AN62HpC;;AoCriJA;;EvB/GI,+CPuyBgC;EOtyBhC,8CPsyBgC;ANm3HpC;;AoCliJE;EACE,mB9BurBgC;AN82HpC;AiB9nJI;EmBuFJ;IAMI,aAAA;IACA,mBAAA;IACA,mBAAA;IACA,kBAAA;EpCqiJF;EoCniJE;IAEE,SAAA;IACA,kB9B2qB8B;I8B1qB9B,gBAAA;IACA,iB9ByqB8B;EN23HlC;AACF;;AoCxhJE;EACE,mB9B2pBgC;ANg4HpC;AiBhpJI;EmBiHJ;IAQI,aAAA;IACA,mBAAA;EpC2hJF;EoCxhJE;IAEE,SAAA;IACA,gBAAA;EpCyhJJ;EoCvhJI;IACE,cAAA;IACA,cAAA;EpCyhJN;EoCphJM;IvBhLJ,0BuBiLmC;IvBhLnC,6BuBgLmC;EpCuhJrC;EoCrhJQ;;IAGE,0BAAA;EpCshJV;EoCphJQ;;IAGE,6BAAA;EpCqhJV;EoCjhJM;IvBjLJ,yBuBkLkC;IvBjLlC,4BuBiLkC;EpCohJpC;EoClhJQ;;IAGE,yBAAA;EpCmhJV;EoCjhJQ;;IAGE,4BAAA;EpCkhJV;AACF;;AoCrgJE;EACE,sB9BglBgC;ANw7HpC;AiB1rJI;EmBgLJ;IAMI,oB9B6lBgC;S8B7lBhC,e9B6lBgC;I8B5lBhC,wB9B6lBgC;I8B7lBhC,wB9B6lBgC;S8B7lBhC,mB9B6lBgC;I8B5lBhC,UAAA;IACA,SAAA;EpCwgJF;EoCtgJE;IACE,qBAAA;IACA,WAAA;EpCwgJJ;AACF;;AoC9/IE;EACE,gBAAA;ApCigJJ;AoC//II;EACE,gBAAA;EvB5OF,6BuB6OgC;EvB5OhC,4BuB4OgC;ApCkgJpC;AoC//II;EvB9PA,yBuB+P6B;EvB9P7B,0BuB8P6B;ApCkgJjC;AoC//II;EvB3QA,gBuB4QyB;EACvB,mBAAA;ApCigJN;;AqCnxJA;EACE,aAAA;EACA,eAAA;EACA,qBAAA;EACA,mB/BiiCkC;E+B/hClC,gBAAA;EACA,yBnCJS;EWEP,sBP6O0B;AN2iJ9B;;AqChxJE;EACE,oB/BqhCgC;AN8vHpC;AqCjxJI;EACE,qBAAA;EACA,qB/BihC8B;E+BhhC9B,cnCZK;EmCaL,YAAA;ArCmxJN;AqCzwJE;EACE,0BAAA;ArC2wJJ;AqCxwJE;EACE,qBAAA;ArC0wJJ;AqCvwJE;EACE,cnChCO;AFyyJX;;AsChzJA;EACE,aAAA;E5BGA,eAAA;EACA,gBAAA;EGAE,sBP6O0B;ANqkJ9B;;AsCjzJA;EACE,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,iBhCmxBkC;EgClxBlC,chCsKwC;EgCrKxC,sBpCbS;EoCcT,yBAAA;AtCozJF;AsClzJE;EACE,UAAA;EACA,chCkKsC;EgCjKtC,qBAAA;EACA,yBpCjBO;EoCkBP,qBpCjBO;AFq0JX;AsCjzJE;EACE,UAAA;EACA,UhC4wBgC;EgC3wBhC,kDhCkX0B;ANi8I9B;;AsC7yJI;EACE,cAAA;EzBCF,+BP+M0B;EO9M1B,kCP8M0B;ANkmJ9B;AsC7yJI;EzBlBA,gCP6N0B;EO5N1B,mCP4N0B;ANsmJ9B;AsC5yJE;EACE,UAAA;EACA,WpC9CO;EoC+CP,yBhC8M0B;EgC7M1B,qBhC6M0B;ANimJ9B;AsC3yJE;EACE,cpC7CO;EoC8CP,oBAAA;EAEA,YAAA;EACA,sBpCxDO;EoCyDP,qBpCrDO;AFi2JX;;AuCl2JE;EACE,uBAAA;EhC2HE,kBAtCa;EgCnFf,gBjCsO0B;AN+nJ9B;AuCh2JM;E1BwBF,8BPgN0B;EO/M1B,iCP+M0B;AN4nJ9B;AuC/1JM;E1BKF,+BP8N0B;EO7N1B,kCP6N0B;ANgoJ9B;;AuCh3JE;EACE,uBAAA;EhC2HE,mBAtCa;EgCnFf,gBjCuO0B;AN4oJ9B;AuC92JM;E1BwBF,8BPiN0B;EOhN1B,iCPgN0B;ANyoJ9B;AuC72JM;E1BKF,+BP+N0B;EO9N1B,kCP8N0B;AN6oJ9B;;AwC53JA;EACE,qBAAA;EACA,qBAAA;EjCiEE,cAAA;EiC/DF,gBlC2R4B;EkC1R5B,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,wBAAA;E3BRE,sBP6O0B;EgB5OxB,qIkBSJ;AxC+3JF;AsBn4JI;EkBNJ;IlBOM,gBAAA;EtBs4JJ;AACF;AQn4JE;EgCGI,qBAAA;AxCm4JN;;AwC93JE;EACE,aAAA;AxCi4JJ;;AwC53JA;EACE,kBAAA;EACA,SAAA;AxC+3JF;;AwCx3JA;EACE,oBlC63BkC;EkC53BlC,mBlC43BkC;EOh6BhC,oBPm6BgC;AN6/HpC;;AwCn3JE;ECjDA,cAAA;EACA,yBnC6Ea;AN21Jf;AQ15JE;EiCVI,cAAA;EACA,yBAAA;AzCu6JN;AyCp6JI;EAEE,UAAA;EACA,iDAAA;AzCq6JN;;AwCh4JE;ECjDA,WAAA;EACA,yBnC6Ea;ANw2Jf;AQv6JE;EiCVI,WAAA;EACA,yBAAA;AzCo7JN;AyCj7JI;EAEE,UAAA;EACA,iDAAA;AzCk7JN;;AwC74JE;ECjDA,WAAA;EACA,yBnC6Ea;ANq3Jf;AQp7JE;EiCVI,WAAA;EACA,yBAAA;AzCi8JN;AyC97JI;EAEE,UAAA;EACA,+CAAA;AzC+7JN;;AwC15JE;ECjDA,WAAA;EACA,yBnC6Ea;ANk4Jf;AQj8JE;EiCVI,WAAA;EACA,yBAAA;AzC88JN;AyC38JI;EAEE,UAAA;EACA,gDAAA;AzC48JN;;AwCv6JE;ECjDA,cAAA;EACA,yBnC6Ea;AN+4Jf;AQ98JE;EiCVI,cAAA;EACA,yBAAA;AzC29JN;AyCx9JI;EAEE,UAAA;EACA,+CAAA;AzCy9JN;;AwCp7JE;ECjDA,WAAA;EACA,yBnC6Ea;AN45Jf;AQ39JE;EiCVI,WAAA;EACA,yBAAA;AzCw+JN;AyCr+JI;EAEE,UAAA;EACA,+CAAA;AzCs+JN;;AwCj8JE;ECjDA,cAAA;EACA,yBnC6Ea;ANy6Jf;AQx+JE;EiCVI,cAAA;EACA,yBAAA;AzCq/JN;AyCl/JI;EAEE,UAAA;EACA,iDAAA;AzCm/JN;;AwC98JE;ECjDA,WAAA;EACA,yBnC6Ea;ANs7Jf;AQr/JE;EiCVI,WAAA;EACA,yBAAA;AzCkgKN;AyC//JI;EAEE,UAAA;EACA,8CAAA;AzCggKN;;A0C7gKA;EACE,kBAAA;EACA,mBpCqzBkC;EoCnzBlC,yBxCDS;EWEP,qBP8O0B;ANiyJ9B;AiBx9JI;EyB5DJ;IAQI,kBAAA;E1CghKF;AACF;;A0C7gKA;EACE,gBAAA;EACA,eAAA;E7BTE,gB6BUqB;A1CghKzB;;A2C3hKA;EACE,kBAAA;EACA,wBAAA;EACA,mBrCq9BkC;EqCp9BlC,6BAAA;E9BHE,sBP6O0B;ANqzJ9B;;A2C1hKA;EAEE,cAAA;A3C4hKF;;A2CxhKA;EACE,gBrCgR4B;AN2wJ9B;;A2CnhKA;EACE,mBAAA;A3CshKF;A2CnhKE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,wBAAA;EACA,cAAA;A3CqhKJ;;A2C3gKE;EC9CA,cD+CqH;EnB1CnH,yBmB0CuB;EC7CzB,qBD6CqE;A3CghKvE;A4C3jKE;EACE,yBAAA;A5C6jKJ;A4C1jKE;EACE,cAAA;A5C4jKJ;;A2CvhKE;EC9CA,cD+CqH;EnB1CnH,yBmB0CuB;EC7CzB,qBD6CqE;A3C4hKvE;A4CvkKE;EACE,yBAAA;A5CykKJ;A4CtkKE;EACE,cAAA;A5CwkKJ;;A2CniKE;EC9CA,cD+CqH;EnB1CnH,yBmB0CuB;EC7CzB,qBD6CqE;A3CwiKvE;A4CnlKE;EACE,yBAAA;A5CqlKJ;A4CllKE;EACE,cAAA;A5ColKJ;;A2C/iKE;EC9CA,cD+CqH;EnB1CnH,yBmB0CuB;EC7CzB,qBD6CqE;A3CojKvE;A4C/lKE;EACE,yBAAA;A5CimKJ;A4C9lKE;EACE,cAAA;A5CgmKJ;;A2C3jKE;EC9CA,cD+CqH;EnB1CnH,yBmB0CuB;EC7CzB,qBD6CqE;A3CgkKvE;A4C3mKE;EACE,yBAAA;A5C6mKJ;A4C1mKE;EACE,cAAA;A5C4mKJ;;A2CvkKE;EC9CA,cD+CqH;EnB1CnH,yBmB0CuB;EC7CzB,qBD6CqE;A3C4kKvE;A4CvnKE;EACE,yBAAA;A5CynKJ;A4CtnKE;EACE,cAAA;A5CwnKJ;;A2CnlKE;EC9CA,cD+CqH;EnB1CnH,yBmB0CuB;EC7CzB,qBD6CqE;A3CwlKvE;A4CnoKE;EACE,yBAAA;A5CqoKJ;A4CloKE;EACE,cAAA;A5CooKJ;;A2C/lKE;EC9CA,cD+CqH;EnB1CnH,yBmB0CuB;EC7CzB,qBD6CqE;A3ComKvE;A4C/oKE;EACE,yBAAA;A5CipKJ;A4C9oKE;EACE,cAAA;A5CgpKJ;;A6CxpKE;EACE;IAAO,2BAAA;E7C4pKT;E6C3pKE;IAAK,wBAAA;E7C8pKP;AACF;;A6CjqKE;EACE;IAAO,2BAAA;E7C4pKT;E6C3pKE;IAAK,wBAAA;E7C8pKP;AACF;A6C3pKA;EACE,aAAA;EACA,YvC89BkC;EuC79BlC,gBAAA;EtCoHI,kBAtCa;EsC5EjB,yB3CVS;EWEP,sBP6O0B;ANy7J9B;;A6CzpKA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;EACA,W3CvBS;E2CwBT,kBAAA;EACA,mBAAA;EACA,yBvCo9BkC;EgBx+B9B,2BuBqBJ;A7C4pKF;AsB5qKI;EuBOJ;IvBNM,gBAAA;EtB+qKJ;AACF;;A6C9pKA;ErBaE,qMAAA;EqBXA,0BAAA;A7CiqKF;;A6C7pKE;EACE,0DAAA;UAAA,kDAAA;A7CgqKJ;A6C7pKM;EAJJ;IAKM,uBAAA;YAAA,eAAA;E7CgqKN;AACF;;A8C1sKA;EACE,aAAA;EACA,uBAAA;A9C6sKF;;A8C1sKA;EACE,SAAA;A9C6sKF;;A+C/sKA;EACE,aAAA;EACA,sBAAA;EAGA,eAAA;EACA,gBAAA;A/CgtKF;;A+CvsKA;EACE,WAAA;EACA,c7CbS;E6CcT,mBAAA;A/C0sKF;AQhtKE;EuCUE,UAAA;EACA,c7CnBO;E6CoBP,qBAAA;EACA,yB7C3BO;AFouKX;A+CtsKE;EACE,c7CvBO;E6CwBP,yB7C/BO;AFuuKX;;A+C/rKA;EACE,kBAAA;EACA,cAAA;EACA,wBAAA;EAEA,sB7ChDS;E6CiDT,sCAAA;A/CisKF;A+C/rKE;ElCrCE,+BPoO0B;EOnO1B,gCPmO0B;ANogK9B;A+C/rKE;ElC3BE,mCPsN0B;EOrN1B,kCPqN0B;ANwgK9B;A+C/rKE;EAEE,c7CtDO;E6CuDP,oBAAA;EACA,sB7C/DO;AF+vKX;A+C5rKE;EACE,UAAA;EACA,W7CrEO;E6CsEP,yBzCuL0B;EyCtL1B,qBzCsL0B;ANwgK9B;A+C3rKE;EACE,mBAAA;A/C6rKJ;A+C3rKI;EACE,gBAAA;EACA,qBzCgKwB;AN6hK9B;;A+C/qKI;EACE,mBAAA;A/CkrKN;A+C/qKQ;ElCrCJ,kCPsL0B;EOlM1B,0BkCmDuC;A/CirK3C;A+C9qKQ;ElCtDJ,gCPkM0B;EOtL1B,4BkC4CyC;A/CgrK7C;A+C7qKQ;EACE,aAAA;A/C+qKV;A+C5qKQ;EACE,qBzC+HoB;EyC9HpB,oBAAA;A/C8qKV;A+C5qKU;EACE,iBAAA;EACA,sBzC0HkB;ANojK9B;;AiBvuKI;E8BiCA;IACE,mBAAA;E/C0sKJ;E+CvsKM;IlCrCJ,kCPsL0B;IOlM1B,0BkCmDuC;E/CysKzC;E+CtsKM;IlCtDJ,gCPkM0B;IOtL1B,4BkC4CyC;E/CwsK3C;E+CrsKM;IACE,aAAA;E/CusKR;E+CpsKM;IACE,qBzC+HoB;IyC9HpB,oBAAA;E/CssKR;E+CpsKQ;IACE,iBAAA;IACA,sBzC0HkB;EN4kK5B;AACF;AiBhwKI;E8BiCA;IACE,mBAAA;E/CkuKJ;E+C/tKM;IlCrCJ,kCPsL0B;IOlM1B,0BkCmDuC;E/CiuKzC;E+C9tKM;IlCtDJ,gCPkM0B;IOtL1B,4BkC4CyC;E/CguK3C;E+C7tKM;IACE,aAAA;E/C+tKR;E+C5tKM;IACE,qBzC+HoB;IyC9HpB,oBAAA;E/C8tKR;E+C5tKQ;IACE,iBAAA;IACA,sBzC0HkB;ENomK5B;AACF;AiBxxKI;E8BiCA;IACE,mBAAA;E/C0vKJ;E+CvvKM;IlCrCJ,kCPsL0B;IOlM1B,0BkCmDuC;E/CyvKzC;E+CtvKM;IlCtDJ,gCPkM0B;IOtL1B,4BkC4CyC;E/CwvK3C;E+CrvKM;IACE,aAAA;E/CuvKR;E+CpvKM;IACE,qBzC+HoB;IyC9HpB,oBAAA;E/CsvKR;E+CpvKQ;IACE,iBAAA;IACA,sBzC0HkB;EN4nK5B;AACF;AiBhzKI;E8BiCA;IACE,mBAAA;E/CkxKJ;E+C/wKM;IlCrCJ,kCPsL0B;IOlM1B,0BkCmDuC;E/CixKzC;E+C9wKM;IlCtDJ,gCPkM0B;IOtL1B,4BkC4CyC;E/CgxK3C;E+C7wKM;IACE,aAAA;E/C+wKR;E+C5wKM;IACE,qBzC+HoB;IyC9HpB,oBAAA;E/C8wKR;E+C5wKQ;IACE,iBAAA;IACA,sBzC0HkB;ENopK5B;AACF;A+ChwKE;EACE,qBAAA;EACA,oBAAA;ElCjIA,gBkCkIuB;A/CkwK3B;A+ChwKI;EACE,mBAAA;A/CkwKN;A+C7vKI;EACE,sBAAA;A/C+vKN;;AgD54KE;EACE,cDwJsE;ECvJtE,yBDuJuC;A/CwvK3C;AQp4KE;EwCPM,cDmJkE;EClJlE,yBAAA;AhD84KR;AgD34KM;EACE,W9CdG;E8CeH,yBD6IkE;EC5IlE,qBD4IkE;A/CiwK1E;;AgD15KE;EACE,cDwJsE;ECvJtE,yBDuJuC;A/CswK3C;AQl5KE;EwCPM,cDmJkE;EClJlE,yBAAA;AhD45KR;AgDz5KM;EACE,W9CdG;E8CeH,yBD6IkE;EC5IlE,qBD4IkE;A/C+wK1E;;AgDx6KE;EACE,cDwJsE;ECvJtE,yBDuJuC;A/CoxK3C;AQh6KE;EwCPM,cDmJkE;EClJlE,yBAAA;AhD06KR;AgDv6KM;EACE,W9CdG;E8CeH,yBD6IkE;EC5IlE,qBD4IkE;A/C6xK1E;;AgDt7KE;EACE,cDwJsE;ECvJtE,yBDuJuC;A/CkyK3C;AQ96KE;EwCPM,cDmJkE;EClJlE,yBAAA;AhDw7KR;AgDr7KM;EACE,W9CdG;E8CeH,yBD6IkE;EC5IlE,qBD4IkE;A/C2yK1E;;AgDp8KE;EACE,cDwJsE;ECvJtE,yBDuJuC;A/CgzK3C;AQ57KE;EwCPM,cDmJkE;EClJlE,yBAAA;AhDs8KR;AgDn8KM;EACE,W9CdG;E8CeH,yBD6IkE;EC5IlE,qBD4IkE;A/CyzK1E;;AgDl9KE;EACE,cDwJsE;ECvJtE,yBDuJuC;A/C8zK3C;AQ18KE;EwCPM,cDmJkE;EClJlE,yBAAA;AhDo9KR;AgDj9KM;EACE,W9CdG;E8CeH,yBD6IkE;EC5IlE,qBD4IkE;A/Cu0K1E;;AgDh+KE;EACE,cDwJsE;ECvJtE,yBDuJuC;A/C40K3C;AQx9KE;EwCPM,cDmJkE;EClJlE,yBAAA;AhDk+KR;AgD/9KM;EACE,W9CdG;E8CeH,yBD6IkE;EC5IlE,qBD4IkE;A/Cq1K1E;;AgD9+KE;EACE,cDwJsE;ECvJtE,yBDuJuC;A/C01K3C;AQt+KE;EwCPM,cDmJkE;EClJlE,yBAAA;AhDg/KR;AgD7+KM;EACE,W9CdG;E8CeH,yBD6IkE;EC5IlE,qBD4IkE;A/Cm2K1E;;AiD//KA;EACE,YAAA;E1C8HI,iBAtCa;E0CtFjB,gB3CiS4B;E2ChS5B,cAAA;EACA,W/CMS;E+CLT,yB3ColCkC;E2CnlClC,YAAA;AjDkgLF;AQ7/KE;EyCDE,WAAA;EACA,qBAAA;AjDigLJ;AQ7/KE;EyCCI,aAAA;AjD+/KN;;AiDp/KA;EACE,UAAA;EACA,6BAAA;EACA,SAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AjDu/KF;;AiDj/KA;EACE,oBAAA;AjDo/KF;;AkD3hLA;EACE,gB5Cy4BkC;E4Cx4BlC,gBAAA;E3C6HI,mBAtCa;E2CpFjB,2C5C04BkC;E4Cz4BlC,4BAAA;EACA,oCAAA;EACA,gD5C24BkC;E4C14BlC,mCAAA;UAAA,2BAAA;EACA,UAAA;ErCLE,sBP64BgC;ANspJpC;AkD3hLE;EACE,sB5C63BgC;ANgqJpC;AkD1hLE;EACE,UAAA;AlD4hLJ;AkDzhLE;EACE,cAAA;EACA,UAAA;AlD2hLJ;AkDxhLE;EACE,aAAA;AlD0hLJ;;AkDthLA;EACE,aAAA;EACA,mBAAA;EACA,wBAAA;EACA,chD5BS;EgD6BT,2C5Ck3BkC;E4Cj3BlC,4BAAA;EACA,4CAAA;AlDyhLF;;AkDthLA;EACE,gB5Ci2BkC;ANwrJpC;;AmD7jLA;EAEE,gBAAA;AnD+jLF;AmD7jLE;EACE,kBAAA;EACA,gBAAA;AnD+jLJ;;AmD1jLA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,a7C+pBkC;E6C9pBlC,aAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EAGA,UAAA;AnD2jLF;;AmDpjLA;EACE,kBAAA;EACA,WAAA;EACA,c7C64BkC;E6C34BlC,oBAAA;AnDsjLF;AmDnjLE;E7BrCI,mC6BsCF;EACA,8B7Cm6BgC;ANkpJpC;AsBvlLI;E6BgCF;I7B/BI,gBAAA;EtB0lLJ;AACF;AmDxjLE;EACE,e7Ci6BgC;ANypJpC;AmDtjLE;EACE,sB7C85BgC;AN0pJpC;;AmDpjLA;EACE,aAAA;EACA,6BAAA;AnDujLF;AmDrjLE;EACE,8BAAA;EACA,gBAAA;AnDujLJ;AmDpjLE;;EAEE,cAAA;AnDsjLJ;AmDnjLE;EACE,gBAAA;AnDqjLJ;;AmDjjLA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;AnDojLF;AmDjjLE;EACE,cAAA;EACA,0BAAA;EACA,WAAA;AnDmjLJ;AmD/iLE;EACE,sBAAA;EACA,uBAAA;EACA,YAAA;AnDijLJ;AmD/iLI;EACE,gBAAA;AnDijLN;AmD9iLI;EACE,aAAA;AnDgjLN;;AmD1iLA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EAGA,oBAAA;EACA,sBjDjHS;EiDkHT,4BAAA;EACA,oCAAA;EtC9GE,qBP8O0B;E6C5H5B,UAAA;AnDyiLF;;AmDriLA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,a7CojBkC;E6CnjBlC,YAAA;EACA,aAAA;EACA,sBjDvHS;AF+pLX;AmDriLE;EAAS,UAAA;AnDwiLX;AmDviLE;EAAS,Y7C4zByB;AN8uJpC;;AmDriLA;EACE,aAAA;EACA,uBAAA;EACA,8BAAA;EACA,kB7C0zBkC;E6CzzBlC,gCAAA;EtClIE,0CP+6BgC;EO96BhC,2CP86BgC;AN6vJpC;AmDviLE;EACE,kB7CqzBgC;E6CnzBhC,8BAAA;AnDwiLJ;;AmDniLA;EACE,gBAAA;EACA,gB7C2I4B;AN25K9B;;AmDjiLA;EACE,kBAAA;EAGA,cAAA;EACA,a7CuwBkC;AN2xJpC;;AmD9hLA;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,6BAAA;EtCrJE,8CPi6BgC;EOh6BhC,6CPg6BgC;ANuxJpC;AmD5hLE;EACE,eAAA;AnD8hLJ;;AmDzhLA;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AnD4hLF;;AiBnqLI;EkC6IF;IACE,gB7CmwBgC;I6ClwBhC,oBAAA;EnD0hLF;;EmDvhLA;IACE,+BAAA;EnD0hLF;EmDxhLE;IACE,gCAAA;EnD0hLJ;;EmDthLA;IACE,+BAAA;EnDyhLF;EmDvhLE;IACE,4BAAA;EnDyhLJ;;EmDjhLA;IAAY,gB7C4uBsB;ENyyJlC;AACF;AiB5rLI;EkC0KF;;IAEE,gB7CouBgC;ENizJlC;AACF;AiBlsLI;EkCiLF;IAAY,iB7C8tBsB;ENuzJlC;AACF;AoDlwLA;EACE,kBAAA;EACA,a9CmrBkC;E8ClrBlC,cAAA;EACA,S9Cy1BkC;E+C71BlC,kM/CuR4B;E+CrR5B,kBAAA;EACA,gB/C+R4B;E+C9R5B,gB/CmS4B;E+ClS5B,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;EACA,oBAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;E9CgHI,mBAtCa;E6C9EjB,qBAAA;EACA,UAAA;ApD8wLF;AoD5wLE;EAAS,Y9C60ByB;ANk8JpC;AoD7wLE;EACE,kBAAA;EACA,cAAA;EACA,a9C60BgC;E8C50BhC,c9C60BgC;ANk8JpC;AoD7wLI;EACE,kBAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;ApD+wLN;;AoD1wLA;EACE,iBAAA;ApD6wLF;AoD3wLE;EACE,SAAA;ApD6wLJ;AoD3wLI;EACE,MAAA;EACA,6BAAA;EACA,sBlD7BK;AF0yLX;;AoDxwLA;EACE,iBAAA;ApD2wLF;AoDzwLE;EACE,OAAA;EACA,a9C+yBgC;E8C9yBhC,c9C6yBgC;AN89JpC;AoDzwLI;EACE,QAAA;EACA,oCAAA;EACA,wBlD7CK;AFwzLX;;AoDtwLA;EACE,iBAAA;ApDywLF;AoDvwLE;EACE,MAAA;ApDywLJ;AoDvwLI;EACE,SAAA;EACA,6BAAA;EACA,yBlD3DK;AFo0LX;;AoDpwLA;EACE,iBAAA;ApDuwLF;AoDrwLE;EACE,QAAA;EACA,a9CixBgC;E8ChxBhC,c9C+wBgC;ANw/JpC;AoDrwLI;EACE,OAAA;EACA,oCAAA;EACA,uBlD3EK;AFk1LX;;AoDlvLA;EACE,gB9C2uBkC;E8C1uBlC,uBAAA;EACA,WlD9GS;EkD+GT,kBAAA;EACA,sBlDrGS;EWNP,sBP6O0B;ANonL9B;;AsDt2LA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,ahDirBkC;EgDhrBlC,cAAA;EACA,gBhD22BkC;E+Ch3BlC,kM/CuR4B;E+CrR5B,kBAAA;EACA,gB/C+R4B;E+C9R5B,gB/CmS4B;E+ClS5B,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;EACA,oBAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;E9CgHI,mBAtCa;E+C7EjB,qBAAA;EACA,sBpDbS;EoDcT,4BAAA;EACA,oCAAA;EzCVE,qBP8O0B;ANgpL9B;AsDh3LE;EACE,kBAAA;EACA,cAAA;EACA,WhD22BgC;EgD12BhC,chD22BgC;EgD12BhC,gBAAA;AtDk3LJ;AsDh3LI;EAEE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;AtDi3LN;;AsD52LA;EACE,qBhD41BkC;ANmhKpC;AsD72LE;EACE,2BAAA;AtD+2LJ;AsD72LI;EACE,SAAA;EACA,6BAAA;EACA,qChDu1B8B;ANwhKpC;AsD52LI;EACE,WhD6LwB;EgD5LxB,6BAAA;EACA,sBpDpDK;AFk6LX;;AsDz2LA;EACE,mBhDw0BkC;ANoiKpC;AsD12LE;EACE,yBAAA;EACA,ahDo0BgC;EgDn0BhC,YhDk0BgC;EgDj0BhC,gBAAA;AtD42LJ;AsD12LI;EACE,OAAA;EACA,oCAAA;EACA,uChDg0B8B;AN4iKpC;AsDz2LI;EACE,ShDsKwB;EgDrKxB,oCAAA;EACA,wBpD3EK;AFs7LX;;AsDt2LA;EACE,kBhDizBkC;ANwjKpC;AsDv2LE;EACE,wBAAA;AtDy2LJ;AsDv2LI;EACE,MAAA;EACA,oCAAA;EACA,wChD4yB8B;AN6jKpC;AsDt2LI;EACE,QhDkJwB;EgDjJxB,oCAAA;EACA,yBpD/FK;AFu8LX;AsDn2LE;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,cAAA;EACA,WhDwxBgC;EgDvxBhC,oBAAA;EACA,WAAA;EACA,gCAAA;AtDq2LJ;;AsDj2LA;EACE,oBhDixBkC;ANmlKpC;AsDl2LE;EACE,0BAAA;EACA,ahD6wBgC;EgD5wBhC,YhD2wBgC;EgD1wBhC,gBAAA;AtDo2LJ;AsDl2LI;EACE,QAAA;EACA,oCAAA;EACA,sChDywB8B;AN2lKpC;AsDj2LI;EACE,UhD+GwB;EgD9GxB,oCAAA;EACA,uBpDlIK;AFq+LX;;AsD70LA;EACE,uBAAA;EACA,gBAAA;E/C3BI,eAtCa;E+CoEjB,yBhD2tBkC;EgD1tBlC,gCAAA;EzChJE,0CPu2BgC;EOt2BhC,2CPs2BgC;AN0nKpC;AsD90LE;EACE,aAAA;AtDg1LJ;;AsD50LA;EACE,uBAAA;EACA,cpD9JS;AF6+LX;;AuD1+LA;EACE,kBAAA;AvD6+LF;;AuD1+LA;EACE,mBAAA;AvD6+LF;;AuD1+LA;EACE,kBAAA;EACA,WAAA;EACA,gBAAA;AvD6+LF;AwDpgME;EACE,cAAA;EACA,WAAA;EACA,WAAA;AxDsgMJ;;AuD9+LA;EACE,kBAAA;EACA,aAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,mCAAA;UAAA,2BAAA;EjC5BI,sCiC6BJ;AvDi/LF;AsBzgMI;EiCiBJ;IjChBM,gBAAA;EtB4gMJ;AACF;;AuDn/LA;;;EAGE,cAAA;AvDs/LF;;AuDn/LA;;EAEE,2BAAA;AvDs/LF;;AuDn/LA;;EAEE,4BAAA;AvDs/LF;;AuD7+LE;EACE,UAAA;EACA,4BAAA;EACA,eAAA;AvDg/LJ;AuD7+LE;;;EAGE,UAAA;EACA,UAAA;AvD++LJ;AuD5+LE;;EAEE,UAAA;EACA,UAAA;EjCtEE,2BiCuEF;AvD8+LJ;AsBhjMI;EiC8DF;;IjC7DI,gBAAA;EtBojMJ;AACF;;AuD3+LA;;EAEE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UjDk9BmC;EiDj9BnC,WrDjGS;EqDkGT,kBAAA;EACA,YjDg9BmC;EgB7iC/B,8BiC8FJ;AvD6+LF;AsBtkMI;EiC2EJ;;IjC1EM,gBAAA;EtB0kMJ;AACF;AQvkME;;;E+CwFE,WrDxGO;EqDyGP,qBAAA;EACA,UAAA;EACA,YjDy8BiC;AN2iKrC;;AuDj/LA;EACE,OAAA;AvDo/LF;;AuD/+LA;EACE,QAAA;AvDk/LF;;AuD3+LA;;EAEE,qBAAA;EACA,WjDk8BmC;EiDj8BnC,YjDi8BmC;EiDh8BnC,mCAAA;AvD8+LF;;AuD5+LA;EACE,sNAAA;AvD++LF;;AuD7+LA;EACE,uNAAA;AvDg/LF;;AuDv+LA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EAEA,iBjDw5BmC;EiDv5BnC,gBjDu5BmC;EiDt5BnC,gBAAA;AvDy+LF;AuDv+LE;EACE,uBAAA;EACA,cAAA;EACA,WjDs5BiC;EiDr5BjC,WjDs5BiC;EiDr5BjC,iBjDu5BiC;EiDt5BjC,gBjDs5BiC;EiDr5BjC,mBAAA;EACA,eAAA;EACA,sBrDvKO;EqDwKP,4BAAA;EAEA,kCAAA;EACA,qCAAA;EACA,YAAA;EjCtKE,6BiCuKF;AvDw+LJ;AsB1oMI;EiCmJF;IjClJI,gBAAA;EtB6oMJ;AACF;AuD1+LE;EACE,UAAA;AvD4+LJ;;AuDn+LA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;EACA,oBAAA;EACA,WrDlMS;EqDmMT,kBAAA;AvDs+LF;;AyDrqMA;EACE;IAAK,yBAAA;EzDyqML;AACF;;AyD3qMA;EACE;IAAK,yBAAA;EzDyqML;AACF;AyDvqMA;EACE,qBAAA;EACA,WnDkkCsB;EmDjkCtB,YnDikCsB;EmDhkCtB,2BAAA;EACA,iCAAA;EACA,+BAAA;EAEA,kBAAA;EACA,uDAAA;UAAA,+CAAA;AzDwqMF;;AyDrqMA;EACE,WnD2jCwB;EmD1jCxB,YnD0jCwB;EmDzjCxB,mBnD2jCwB;AN6mK1B;;AyDjqMA;EACE;IACE,mBAAA;EzDoqMF;EyDlqMA;IACE,UAAA;EzDoqMF;AACF;;AyD1qMA;EACE;IACE,mBAAA;EzDoqMF;EyDlqMA;IACE,UAAA;EzDoqMF;AACF;AyDjqMA;EACE,qBAAA;EACA,WnDmiCsB;EmDliCtB,YnDkiCsB;EmDjiCtB,2BAAA;EACA,8BAAA;EAEA,kBAAA;EACA,UAAA;EACA,qDAAA;UAAA,6CAAA;AzDkqMF;;AyD/pMA;EACE,WnD4hCwB;EmD3hCxB,YnD2hCwB;ANuoK1B;;A0DrtMA;EAAqB,mCAAA;A1DytMrB;;A0DxtMA;EAAqB,8BAAA;A1D4tMrB;;A0D3tMA;EAAqB,iCAAA;A1D+tMrB;;A0D9tMA;EAAqB,iCAAA;A1DkuMrB;;A0DjuMA;EAAqB,sCAAA;A1DquMrB;;A0DpuMA;EAAqB,mCAAA;A1DwuMrB;;A2D1uME;EACE,oCAAA;A3D6uMJ;;AQnuME;;;EmDLI,oCAAA;A3D8uMN;;A2DpvME;EACE,oCAAA;A3DuvMJ;;AQ7uME;;;EmDLI,oCAAA;A3DwvMN;;A2D9vME;EACE,oCAAA;A3DiwMJ;;AQvvME;;;EmDLI,oCAAA;A3DkwMN;;A2DxwME;EACE,oCAAA;A3D2wMJ;;AQjwME;;;EmDLI,oCAAA;A3D4wMN;;A2DlxME;EACE,oCAAA;A3DqxMJ;;AQ3wME;;;EmDLI,oCAAA;A3DsxMN;;A2D5xME;EACE,oCAAA;A3D+xMJ;;AQrxME;;;EmDLI,oCAAA;A3DgyMN;;A2DtyME;EACE,oCAAA;A3DyyMJ;;AQ/xME;;;EmDLI,oCAAA;A3D0yMN;;A2DhzME;EACE,oCAAA;A3DmzMJ;;AQzyME;;;EmDLI,oCAAA;A3DozMN;;A4DnzMA;EACE,iCAAA;A5DszMF;;A4DnzMA;EACE,wCAAA;A5DszMF;;A6Dj0MA;EAAkB,oCAAA;A7Dq0MlB;;A6Dp0MA;EAAkB,wCAAA;A7Dw0MlB;;A6Dv0MA;EAAkB,0CAAA;A7D20MlB;;A6D10MA;EAAkB,2CAAA;A7D80MlB;;A6D70MA;EAAkB,yCAAA;A7Di1MlB;;A6D/0MA;EAAmB,oBAAA;A7Dm1MnB;;A6Dl1MA;EAAmB,wBAAA;A7Ds1MnB;;A6Dr1MA;EAAmB,0BAAA;A7Dy1MnB;;A6Dx1MA;EAAmB,2BAAA;A7D41MnB;;A6D31MA;EAAmB,yBAAA;A7D+1MnB;;A6D51ME;EACE,gCAAA;A7D+1MJ;;A6Dh2ME;EACE,gCAAA;A7Dm2MJ;;A6Dp2ME;EACE,gCAAA;A7Du2MJ;;A6Dx2ME;EACE,gCAAA;A7D22MJ;;A6D52ME;EACE,gCAAA;A7D+2MJ;;A6Dh3ME;EACE,gCAAA;A7Dm3MJ;;A6Dp3ME;EACE,gCAAA;A7Du3MJ;;A6Dx3ME;EACE,gCAAA;A7D23MJ;;A6Dv3MA;EACE,6BAAA;A7D03MF;;A6Dn3MA;EACE,gCAAA;A7Ds3MF;;A6Dn3MA;EACE,iCAAA;A7Ds3MF;;A6Dn3MA;EACE,0CAAA;EACA,2CAAA;A7Ds3MF;;A6Dn3MA;EACE,2CAAA;EACA,8CAAA;A7Ds3MF;;A6Dn3MA;EACE,8CAAA;EACA,6CAAA;A7Ds3MF;;A6Dn3MA;EACE,0CAAA;EACA,6CAAA;A7Ds3MF;;A6Dn3MA;EACE,gCAAA;A7Ds3MF;;A6Dn3MA;EACE,6BAAA;A7Ds3MF;;A6Dn3MA;EACE,+BAAA;A7Ds3MF;;A6Dn3MA;EACE,2BAAA;A7Ds3MF;;AwD97ME;EACE,cAAA;EACA,WAAA;EACA,WAAA;AxDi8MJ;;A8D17MM;EAAwB,wBAAA;A9D87M9B;;A8D97MM;EAAwB,0BAAA;A9Dk8M9B;;A8Dl8MM;EAAwB,gCAAA;A9Ds8M9B;;A8Dt8MM;EAAwB,yBAAA;A9D08M9B;;A8D18MM;EAAwB,yBAAA;A9D88M9B;;A8D98MM;EAAwB,6BAAA;A9Dk9M9B;;A8Dl9MM;EAAwB,8BAAA;A9Ds9M9B;;A8Dt9MM;EAAwB,wBAAA;A9D09M9B;;A8D19MM;EAAwB,+BAAA;A9D89M9B;;AiB76MI;E6CjDE;IAAwB,wBAAA;E9Dm+M5B;;E8Dn+MI;IAAwB,0BAAA;E9Du+M5B;;E8Dv+MI;IAAwB,gCAAA;E9D2+M5B;;E8D3+MI;IAAwB,yBAAA;E9D++M5B;;E8D/+MI;IAAwB,yBAAA;E9Dm/M5B;;E8Dn/MI;IAAwB,6BAAA;E9Du/M5B;;E8Dv/MI;IAAwB,8BAAA;E9D2/M5B;;E8D3/MI;IAAwB,wBAAA;E9D+/M5B;;E8D//MI;IAAwB,+BAAA;E9DmgN5B;AACF;AiBn9MI;E6CjDE;IAAwB,wBAAA;E9DwgN5B;;E8DxgNI;IAAwB,0BAAA;E9D4gN5B;;E8D5gNI;IAAwB,gCAAA;E9DghN5B;;E8DhhNI;IAAwB,yBAAA;E9DohN5B;;E8DphNI;IAAwB,yBAAA;E9DwhN5B;;E8DxhNI;IAAwB,6BAAA;E9D4hN5B;;E8D5hNI;IAAwB,8BAAA;E9DgiN5B;;E8DhiNI;IAAwB,wBAAA;E9DoiN5B;;E8DpiNI;IAAwB,+BAAA;E9DwiN5B;AACF;AiBx/MI;E6CjDE;IAAwB,wBAAA;E9D6iN5B;;E8D7iNI;IAAwB,0BAAA;E9DijN5B;;E8DjjNI;IAAwB,gCAAA;E9DqjN5B;;E8DrjNI;IAAwB,yBAAA;E9DyjN5B;;E8DzjNI;IAAwB,yBAAA;E9D6jN5B;;E8D7jNI;IAAwB,6BAAA;E9DikN5B;;E8DjkNI;IAAwB,8BAAA;E9DqkN5B;;E8DrkNI;IAAwB,wBAAA;E9DykN5B;;E8DzkNI;IAAwB,+BAAA;E9D6kN5B;AACF;AiB7hNI;E6CjDE;IAAwB,wBAAA;E9DklN5B;;E8DllNI;IAAwB,0BAAA;E9DslN5B;;E8DtlNI;IAAwB,gCAAA;E9D0lN5B;;E8D1lNI;IAAwB,yBAAA;E9D8lN5B;;E8D9lNI;IAAwB,yBAAA;E9DkmN5B;;E8DlmNI;IAAwB,6BAAA;E9DsmN5B;;E8DtmNI;IAAwB,8BAAA;E9D0mN5B;;E8D1mNI;IAAwB,wBAAA;E9D8mN5B;;E8D9mNI;IAAwB,+BAAA;E9DknN5B;AACF;A8DzmNA;EAEI;IAAqB,wBAAA;E9D2mNvB;;E8D3mNE;IAAqB,0BAAA;E9D+mNvB;;E8D/mNE;IAAqB,gCAAA;E9DmnNvB;;E8DnnNE;IAAqB,yBAAA;E9DunNvB;;E8DvnNE;IAAqB,yBAAA;E9D2nNvB;;E8D3nNE;IAAqB,6BAAA;E9D+nNvB;;E8D/nNE;IAAqB,8BAAA;E9DmoNvB;;E8DnoNE;IAAqB,wBAAA;E9DuoNvB;;E8DvoNE;IAAqB,+BAAA;E9D2oNvB;AACF;A+DjqNA;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;A/DmqNF;A+DjqNE;EACE,cAAA;EACA,WAAA;A/DmqNJ;A+DhqNE;;;;;EAKE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;A/DkqNJ;;A+DzpNI;EACE,2BAAA;A/D4pNN;;A+D7pNI;EACE,mBAAA;A/DgqNN;;A+DjqNI;EACE,gBAAA;A/DoqNN;;A+DrqNI;EACE,iBAAA;A/DwqNN;;AgEjsNI;EAAgC,8BAAA;AhEqsNpC;;AgEpsNI;EAAgC,iCAAA;AhEwsNpC;;AgEvsNI;EAAgC,sCAAA;AhE2sNpC;;AgE1sNI;EAAgC,yCAAA;AhE8sNpC;;AgE5sNI;EAA8B,0BAAA;AhEgtNlC;;AgE/sNI;EAA8B,4BAAA;AhEmtNlC;;AgEltNI;EAA8B,kCAAA;AhEstNlC;;AgErtNI;EAA8B,yBAAA;AhEytNlC;;AgExtNI;EAA8B,uBAAA;AhE4tNlC;;AgE3tNI;EAA8B,uBAAA;AhE+tNlC;;AgE9tNI;EAA8B,yBAAA;AhEkuNlC;;AgEjuNI;EAA8B,yBAAA;AhEquNlC;;AgEnuNI;EAAoC,sCAAA;AhEuuNxC;;AgEtuNI;EAAoC,oCAAA;AhE0uNxC;;AgEzuNI;EAAoC,kCAAA;AhE6uNxC;;AgE5uNI;EAAoC,yCAAA;AhEgvNxC;;AgE/uNI;EAAoC,wCAAA;AhEmvNxC;;AgEjvNI;EAAiC,kCAAA;AhEqvNrC;;AgEpvNI;EAAiC,gCAAA;AhEwvNrC;;AgEvvNI;EAAiC,8BAAA;AhE2vNrC;;AgE1vNI;EAAiC,gCAAA;AhE8vNrC;;AgE7vNI;EAAiC,+BAAA;AhEiwNrC;;AgE/vNI;EAAkC,oCAAA;AhEmwNtC;;AgElwNI;EAAkC,kCAAA;AhEswNtC;;AgErwNI;EAAkC,gCAAA;AhEywNtC;;AgExwNI;EAAkC,uCAAA;AhE4wNtC;;AgE3wNI;EAAkC,sCAAA;AhE+wNtC;;AgE9wNI;EAAkC,iCAAA;AhEkxNtC;;AgEhxNI;EAAgC,2BAAA;AhEoxNpC;;AgEnxNI;EAAgC,iCAAA;AhEuxNpC;;AgEtxNI;EAAgC,+BAAA;AhE0xNpC;;AgEzxNI;EAAgC,6BAAA;AhE6xNpC;;AgE5xNI;EAAgC,+BAAA;AhEgyNpC;;AgE/xNI;EAAgC,8BAAA;AhEmyNpC;;AiBvxNI;E+ClDA;IAAgC,8BAAA;EhE80NlC;;EgE70NE;IAAgC,iCAAA;EhEi1NlC;;EgEh1NE;IAAgC,sCAAA;EhEo1NlC;;EgEn1NE;IAAgC,yCAAA;EhEu1NlC;;EgEr1NE;IAA8B,0BAAA;EhEy1NhC;;EgEx1NE;IAA8B,4BAAA;EhE41NhC;;EgE31NE;IAA8B,kCAAA;EhE+1NhC;;EgE91NE;IAA8B,yBAAA;EhEk2NhC;;EgEj2NE;IAA8B,uBAAA;EhEq2NhC;;EgEp2NE;IAA8B,uBAAA;EhEw2NhC;;EgEv2NE;IAA8B,yBAAA;EhE22NhC;;EgE12NE;IAA8B,yBAAA;EhE82NhC;;EgE52NE;IAAoC,sCAAA;EhEg3NtC;;EgE/2NE;IAAoC,oCAAA;EhEm3NtC;;EgEl3NE;IAAoC,kCAAA;EhEs3NtC;;EgEr3NE;IAAoC,yCAAA;EhEy3NtC;;EgEx3NE;IAAoC,wCAAA;EhE43NtC;;EgE13NE;IAAiC,kCAAA;EhE83NnC;;EgE73NE;IAAiC,gCAAA;EhEi4NnC;;EgEh4NE;IAAiC,8BAAA;EhEo4NnC;;EgEn4NE;IAAiC,gCAAA;EhEu4NnC;;EgEt4NE;IAAiC,+BAAA;EhE04NnC;;EgEx4NE;IAAkC,oCAAA;EhE44NpC;;EgE34NE;IAAkC,kCAAA;EhE+4NpC;;EgE94NE;IAAkC,gCAAA;EhEk5NpC;;EgEj5NE;IAAkC,uCAAA;EhEq5NpC;;EgEp5NE;IAAkC,sCAAA;EhEw5NpC;;EgEv5NE;IAAkC,iCAAA;EhE25NpC;;EgEz5NE;IAAgC,2BAAA;EhE65NlC;;EgE55NE;IAAgC,iCAAA;EhEg6NlC;;EgE/5NE;IAAgC,+BAAA;EhEm6NlC;;EgEl6NE;IAAgC,6BAAA;EhEs6NlC;;EgEr6NE;IAAgC,+BAAA;EhEy6NlC;;EgEx6NE;IAAgC,8BAAA;EhE46NlC;AACF;AiBj6NI;E+ClDA;IAAgC,8BAAA;EhEu9NlC;;EgEt9NE;IAAgC,iCAAA;EhE09NlC;;EgEz9NE;IAAgC,sCAAA;EhE69NlC;;EgE59NE;IAAgC,yCAAA;EhEg+NlC;;EgE99NE;IAA8B,0BAAA;EhEk+NhC;;EgEj+NE;IAA8B,4BAAA;EhEq+NhC;;EgEp+NE;IAA8B,kCAAA;EhEw+NhC;;EgEv+NE;IAA8B,yBAAA;EhE2+NhC;;EgE1+NE;IAA8B,uBAAA;EhE8+NhC;;EgE7+NE;IAA8B,uBAAA;EhEi/NhC;;EgEh/NE;IAA8B,yBAAA;EhEo/NhC;;EgEn/NE;IAA8B,yBAAA;EhEu/NhC;;EgEr/NE;IAAoC,sCAAA;EhEy/NtC;;EgEx/NE;IAAoC,oCAAA;EhE4/NtC;;EgE3/NE;IAAoC,kCAAA;EhE+/NtC;;EgE9/NE;IAAoC,yCAAA;EhEkgOtC;;EgEjgOE;IAAoC,wCAAA;EhEqgOtC;;EgEngOE;IAAiC,kCAAA;EhEugOnC;;EgEtgOE;IAAiC,gCAAA;EhE0gOnC;;EgEzgOE;IAAiC,8BAAA;EhE6gOnC;;EgE5gOE;IAAiC,gCAAA;EhEghOnC;;EgE/gOE;IAAiC,+BAAA;EhEmhOnC;;EgEjhOE;IAAkC,oCAAA;EhEqhOpC;;EgEphOE;IAAkC,kCAAA;EhEwhOpC;;EgEvhOE;IAAkC,gCAAA;EhE2hOpC;;EgE1hOE;IAAkC,uCAAA;EhE8hOpC;;EgE7hOE;IAAkC,sCAAA;EhEiiOpC;;EgEhiOE;IAAkC,iCAAA;EhEoiOpC;;EgEliOE;IAAgC,2BAAA;EhEsiOlC;;EgEriOE;IAAgC,iCAAA;EhEyiOlC;;EgExiOE;IAAgC,+BAAA;EhE4iOlC;;EgE3iOE;IAAgC,6BAAA;EhE+iOlC;;EgE9iOE;IAAgC,+BAAA;EhEkjOlC;;EgEjjOE;IAAgC,8BAAA;EhEqjOlC;AACF;AiB1iOI;E+ClDA;IAAgC,8BAAA;EhEgmOlC;;EgE/lOE;IAAgC,iCAAA;EhEmmOlC;;EgElmOE;IAAgC,sCAAA;EhEsmOlC;;EgErmOE;IAAgC,yCAAA;EhEymOlC;;EgEvmOE;IAA8B,0BAAA;EhE2mOhC;;EgE1mOE;IAA8B,4BAAA;EhE8mOhC;;EgE7mOE;IAA8B,kCAAA;EhEinOhC;;EgEhnOE;IAA8B,yBAAA;EhEonOhC;;EgEnnOE;IAA8B,uBAAA;EhEunOhC;;EgEtnOE;IAA8B,uBAAA;EhE0nOhC;;EgEznOE;IAA8B,yBAAA;EhE6nOhC;;EgE5nOE;IAA8B,yBAAA;EhEgoOhC;;EgE9nOE;IAAoC,sCAAA;EhEkoOtC;;EgEjoOE;IAAoC,oCAAA;EhEqoOtC;;EgEpoOE;IAAoC,kCAAA;EhEwoOtC;;EgEvoOE;IAAoC,yCAAA;EhE2oOtC;;EgE1oOE;IAAoC,wCAAA;EhE8oOtC;;EgE5oOE;IAAiC,kCAAA;EhEgpOnC;;EgE/oOE;IAAiC,gCAAA;EhEmpOnC;;EgElpOE;IAAiC,8BAAA;EhEspOnC;;EgErpOE;IAAiC,gCAAA;EhEypOnC;;EgExpOE;IAAiC,+BAAA;EhE4pOnC;;EgE1pOE;IAAkC,oCAAA;EhE8pOpC;;EgE7pOE;IAAkC,kCAAA;EhEiqOpC;;EgEhqOE;IAAkC,gCAAA;EhEoqOpC;;EgEnqOE;IAAkC,uCAAA;EhEuqOpC;;EgEtqOE;IAAkC,sCAAA;EhE0qOpC;;EgEzqOE;IAAkC,iCAAA;EhE6qOpC;;EgE3qOE;IAAgC,2BAAA;EhE+qOlC;;EgE9qOE;IAAgC,iCAAA;EhEkrOlC;;EgEjrOE;IAAgC,+BAAA;EhEqrOlC;;EgEprOE;IAAgC,6BAAA;EhEwrOlC;;EgEvrOE;IAAgC,+BAAA;EhE2rOlC;;EgE1rOE;IAAgC,8BAAA;EhE8rOlC;AACF;AiBnrOI;E+ClDA;IAAgC,8BAAA;EhEyuOlC;;EgExuOE;IAAgC,iCAAA;EhE4uOlC;;EgE3uOE;IAAgC,sCAAA;EhE+uOlC;;EgE9uOE;IAAgC,yCAAA;EhEkvOlC;;EgEhvOE;IAA8B,0BAAA;EhEovOhC;;EgEnvOE;IAA8B,4BAAA;EhEuvOhC;;EgEtvOE;IAA8B,kCAAA;EhE0vOhC;;EgEzvOE;IAA8B,yBAAA;EhE6vOhC;;EgE5vOE;IAA8B,uBAAA;EhEgwOhC;;EgE/vOE;IAA8B,uBAAA;EhEmwOhC;;EgElwOE;IAA8B,yBAAA;EhEswOhC;;EgErwOE;IAA8B,yBAAA;EhEywOhC;;EgEvwOE;IAAoC,sCAAA;EhE2wOtC;;EgE1wOE;IAAoC,oCAAA;EhE8wOtC;;EgE7wOE;IAAoC,kCAAA;EhEixOtC;;EgEhxOE;IAAoC,yCAAA;EhEoxOtC;;EgEnxOE;IAAoC,wCAAA;EhEuxOtC;;EgErxOE;IAAiC,kCAAA;EhEyxOnC;;EgExxOE;IAAiC,gCAAA;EhE4xOnC;;EgE3xOE;IAAiC,8BAAA;EhE+xOnC;;EgE9xOE;IAAiC,gCAAA;EhEkyOnC;;EgEjyOE;IAAiC,+BAAA;EhEqyOnC;;EgEnyOE;IAAkC,oCAAA;EhEuyOpC;;EgEtyOE;IAAkC,kCAAA;EhE0yOpC;;EgEzyOE;IAAkC,gCAAA;EhE6yOpC;;EgE5yOE;IAAkC,uCAAA;EhEgzOpC;;EgE/yOE;IAAkC,sCAAA;EhEmzOpC;;EgElzOE;IAAkC,iCAAA;EhEszOpC;;EgEpzOE;IAAgC,2BAAA;EhEwzOlC;;EgEvzOE;IAAgC,iCAAA;EhE2zOlC;;EgE1zOE;IAAgC,+BAAA;EhE8zOlC;;EgE7zOE;IAAgC,6BAAA;EhEi0OlC;;EgEh0OE;IAAgC,+BAAA;EhEo0OlC;;EgEn0OE;IAAgC,8BAAA;EhEu0OlC;AACF;AiEl3OI;EAAwB,sBAAA;AjEq3O5B;;AiEp3OI;EAAwB,uBAAA;AjEw3O5B;;AiEv3OI;EAAwB,sBAAA;AjE23O5B;;AiBv0OI;EgDtDA;IAAwB,sBAAA;EjEk4O1B;;EiEj4OE;IAAwB,uBAAA;EjEq4O1B;;EiEp4OE;IAAwB,sBAAA;EjEw4O1B;AACF;AiBr1OI;EgDtDA;IAAwB,sBAAA;EjE+4O1B;;EiE94OE;IAAwB,uBAAA;EjEk5O1B;;EiEj5OE;IAAwB,sBAAA;EjEq5O1B;AACF;AiBl2OI;EgDtDA;IAAwB,sBAAA;EjE45O1B;;EiE35OE;IAAwB,uBAAA;EjE+5O1B;;EiE95OE;IAAwB,sBAAA;EjEk6O1B;AACF;AiB/2OI;EgDtDA;IAAwB,sBAAA;EjEy6O1B;;EiEx6OE;IAAwB,uBAAA;EjE46O1B;;EiE36OE;IAAwB,sBAAA;EjE+6O1B;AACF;AkEr7OE;EAAsB,yBAAA;AlEw7OxB;;AkEx7OE;EAAsB,2BAAA;AlE47OxB;;AmE37OE;EAAyB,2BAAA;AnE+7O3B;;AmE/7OE;EAAyB,6BAAA;AnEm8O3B;;AmEn8OE;EAAyB,6BAAA;AnEu8O3B;;AmEv8OE;EAAyB,0BAAA;AnE28O3B;;AmE38OE;EAAyB,mCAAA;EAAA,2BAAA;AnE+8O3B;;AmE18OA;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,a7DoqBkC;ANyyNpC;;AmE18OA;EACE,eAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,a7D4pBkC;ANizNpC;;AmEz8OE;EADF;IAEI,wBAAA;IAAA,gBAAA;IACA,MAAA;IACA,a7DopBgC;ENyzNlC;AACF;;AoEv+OA;ECEE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;ArEy+OF;;AqE/9OE;EAEE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;EACA,mBAAA;ArEi+OJ;;AsE9/OA;EAAa,8DAAA;AtEkgPb;;AsEjgPA;EAAU,wDAAA;AtEqgPV;;AsEpgPA;EAAa,uDAAA;AtEwgPb;;AsEvgPA;EAAe,2BAAA;AtE2gPf;;AuE1gPI;EAAuB,qBAAA;AvE8gP3B;;AuE9gPI;EAAuB,qBAAA;AvEkhP3B;;AuElhPI;EAAuB,qBAAA;AvEshP3B;;AuEthPI;EAAuB,sBAAA;AvE0hP3B;;AuE1hPI;EAAuB,sBAAA;AvE8hP3B;;AuE9hPI;EAAuB,sBAAA;AvEkiP3B;;AuEliPI;EAAuB,sBAAA;AvEsiP3B;;AuEtiPI;EAAuB,sBAAA;AvE0iP3B;;AuE1iPI;EAAuB,uBAAA;AvE8iP3B;;AuE9iPI;EAAuB,uBAAA;AvEkjP3B;;AuE9iPA;EAAU,0BAAA;AvEkjPV;;AuEjjPA;EAAU,2BAAA;AvEqjPV;;AuEjjPA;EAAc,2BAAA;AvEqjPd;;AuEpjPA;EAAc,4BAAA;AvEwjPd;;AuEtjPA;EAAU,uBAAA;AvE0jPV;;AuEzjPA;EAAU,wBAAA;AvE6jPV;;AwE3kPE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EAEA,oBAAA;EACA,WAAA;EAEA,kCAAA;AxE4kPJ;;AyEllPQ;EAAgC,oBAAA;AzEslPxC;;AyErlPQ;;EAEE,wBAAA;AzEwlPV;;AyEtlPQ;;EAEE,0BAAA;AzEylPV;;AyEvlPQ;;EAEE,2BAAA;AzE0lPV;;AyExlPQ;;EAEE,yBAAA;AzE2lPV;;AyE1mPQ;EAAgC,0BAAA;AzE8mPxC;;AyE7mPQ;;EAEE,8BAAA;AzEgnPV;;AyE9mPQ;;EAEE,gCAAA;AzEinPV;;AyE/mPQ;;EAEE,iCAAA;AzEknPV;;AyEhnPQ;;EAEE,+BAAA;AzEmnPV;;AyEloPQ;EAAgC,yBAAA;AzEsoPxC;;AyEroPQ;;EAEE,6BAAA;AzEwoPV;;AyEtoPQ;;EAEE,+BAAA;AzEyoPV;;AyEvoPQ;;EAEE,gCAAA;AzE0oPV;;AyExoPQ;;EAEE,8BAAA;AzE2oPV;;AyE1pPQ;EAAgC,uBAAA;AzE8pPxC;;AyE7pPQ;;EAEE,2BAAA;AzEgqPV;;AyE9pPQ;;EAEE,6BAAA;AzEiqPV;;AyE/pPQ;;EAEE,8BAAA;AzEkqPV;;AyEhqPQ;;EAEE,4BAAA;AzEmqPV;;AyElrPQ;EAAgC,yBAAA;AzEsrPxC;;AyErrPQ;;EAEE,6BAAA;AzEwrPV;;AyEtrPQ;;EAEE,+BAAA;AzEyrPV;;AyEvrPQ;;EAEE,gCAAA;AzE0rPV;;AyExrPQ;;EAEE,8BAAA;AzE2rPV;;AyE1sPQ;EAAgC,uBAAA;AzE8sPxC;;AyE7sPQ;;EAEE,2BAAA;AzEgtPV;;AyE9sPQ;;EAEE,6BAAA;AzEitPV;;AyE/sPQ;;EAEE,8BAAA;AzEktPV;;AyEhtPQ;;EAEE,4BAAA;AzEmtPV;;AyEluPQ;EAAgC,qBAAA;AzEsuPxC;;AyEruPQ;;EAEE,yBAAA;AzEwuPV;;AyEtuPQ;;EAEE,2BAAA;AzEyuPV;;AyEvuPQ;;EAEE,4BAAA;AzE0uPV;;AyExuPQ;;EAEE,0BAAA;AzE2uPV;;AyE1vPQ;EAAgC,2BAAA;AzE8vPxC;;AyE7vPQ;;EAEE,+BAAA;AzEgwPV;;AyE9vPQ;;EAEE,iCAAA;AzEiwPV;;AyE/vPQ;;EAEE,kCAAA;AzEkwPV;;AyEhwPQ;;EAEE,gCAAA;AzEmwPV;;AyElxPQ;EAAgC,0BAAA;AzEsxPxC;;AyErxPQ;;EAEE,8BAAA;AzEwxPV;;AyEtxPQ;;EAEE,gCAAA;AzEyxPV;;AyEvxPQ;;EAEE,iCAAA;AzE0xPV;;AyExxPQ;;EAEE,+BAAA;AzE2xPV;;AyE1yPQ;EAAgC,wBAAA;AzE8yPxC;;AyE7yPQ;;EAEE,4BAAA;AzEgzPV;;AyE9yPQ;;EAEE,8BAAA;AzEizPV;;AyE/yPQ;;EAEE,+BAAA;AzEkzPV;;AyEhzPQ;;EAEE,6BAAA;AzEmzPV;;AyEl0PQ;EAAgC,0BAAA;AzEs0PxC;;AyEr0PQ;;EAEE,8BAAA;AzEw0PV;;AyEt0PQ;;EAEE,gCAAA;AzEy0PV;;AyEv0PQ;;EAEE,iCAAA;AzE00PV;;AyEx0PQ;;EAEE,+BAAA;AzE20PV;;AyE11PQ;EAAgC,wBAAA;AzE81PxC;;AyE71PQ;;EAEE,4BAAA;AzEg2PV;;AyE91PQ;;EAEE,8BAAA;AzEi2PV;;AyE/1PQ;;EAEE,+BAAA;AzEk2PV;;AyEh2PQ;;EAEE,6BAAA;AzEm2PV;;AyE31PQ;EAAwB,2BAAA;AzE+1PhC;;AyE91PQ;;EAEE,+BAAA;AzEi2PV;;AyE/1PQ;;EAEE,iCAAA;AzEk2PV;;AyEh2PQ;;EAEE,kCAAA;AzEm2PV;;AyEj2PQ;;EAEE,gCAAA;AzEo2PV;;AyEn3PQ;EAAwB,0BAAA;AzEu3PhC;;AyEt3PQ;;EAEE,8BAAA;AzEy3PV;;AyEv3PQ;;EAEE,gCAAA;AzE03PV;;AyEx3PQ;;EAEE,iCAAA;AzE23PV;;AyEz3PQ;;EAEE,+BAAA;AzE43PV;;AyE34PQ;EAAwB,wBAAA;AzE+4PhC;;AyE94PQ;;EAEE,4BAAA;AzEi5PV;;AyE/4PQ;;EAEE,8BAAA;AzEk5PV;;AyEh5PQ;;EAEE,+BAAA;AzEm5PV;;AyEj5PQ;;EAEE,6BAAA;AzEo5PV;;AyEn6PQ;EAAwB,0BAAA;AzEu6PhC;;AyEt6PQ;;EAEE,8BAAA;AzEy6PV;;AyEv6PQ;;EAEE,gCAAA;AzE06PV;;AyEx6PQ;;EAEE,iCAAA;AzE26PV;;AyEz6PQ;;EAEE,+BAAA;AzE46PV;;AyE37PQ;EAAwB,wBAAA;AzE+7PhC;;AyE97PQ;;EAEE,4BAAA;AzEi8PV;;AyE/7PQ;;EAEE,8BAAA;AzEk8PV;;AyEh8PQ;;EAEE,+BAAA;AzEm8PV;;AyEj8PQ;;EAEE,6BAAA;AzEo8PV;;AyE97PI;EAAmB,uBAAA;AzEk8PvB;;AyEj8PI;;EAEE,2BAAA;AzEo8PN;;AyEl8PI;;EAEE,6BAAA;AzEq8PN;;AyEn8PI;;EAEE,8BAAA;AzEs8PN;;AyEp8PI;;EAEE,4BAAA;AzEu8PN;;AiBh9PI;EwDlDI;IAAgC,oBAAA;EzEugQtC;;EyEtgQM;;IAEE,wBAAA;EzEygQR;;EyEvgQM;;IAEE,0BAAA;EzE0gQR;;EyExgQM;;IAEE,2BAAA;EzE2gQR;;EyEzgQM;;IAEE,yBAAA;EzE4gQR;;EyE3hQM;IAAgC,0BAAA;EzE+hQtC;;EyE9hQM;;IAEE,8BAAA;EzEiiQR;;EyE/hQM;;IAEE,gCAAA;EzEkiQR;;EyEhiQM;;IAEE,iCAAA;EzEmiQR;;EyEjiQM;;IAEE,+BAAA;EzEoiQR;;EyEnjQM;IAAgC,yBAAA;EzEujQtC;;EyEtjQM;;IAEE,6BAAA;EzEyjQR;;EyEvjQM;;IAEE,+BAAA;EzE0jQR;;EyExjQM;;IAEE,gCAAA;EzE2jQR;;EyEzjQM;;IAEE,8BAAA;EzE4jQR;;EyE3kQM;IAAgC,uBAAA;EzE+kQtC;;EyE9kQM;;IAEE,2BAAA;EzEilQR;;EyE/kQM;;IAEE,6BAAA;EzEklQR;;EyEhlQM;;IAEE,8BAAA;EzEmlQR;;EyEjlQM;;IAEE,4BAAA;EzEolQR;;EyEnmQM;IAAgC,yBAAA;EzEumQtC;;EyEtmQM;;IAEE,6BAAA;EzEymQR;;EyEvmQM;;IAEE,+BAAA;EzE0mQR;;EyExmQM;;IAEE,gCAAA;EzE2mQR;;EyEzmQM;;IAEE,8BAAA;EzE4mQR;;EyE3nQM;IAAgC,uBAAA;EzE+nQtC;;EyE9nQM;;IAEE,2BAAA;EzEioQR;;EyE/nQM;;IAEE,6BAAA;EzEkoQR;;EyEhoQM;;IAEE,8BAAA;EzEmoQR;;EyEjoQM;;IAEE,4BAAA;EzEooQR;;EyEnpQM;IAAgC,qBAAA;EzEupQtC;;EyEtpQM;;IAEE,yBAAA;EzEypQR;;EyEvpQM;;IAEE,2BAAA;EzE0pQR;;EyExpQM;;IAEE,4BAAA;EzE2pQR;;EyEzpQM;;IAEE,0BAAA;EzE4pQR;;EyE3qQM;IAAgC,2BAAA;EzE+qQtC;;EyE9qQM;;IAEE,+BAAA;EzEirQR;;EyE/qQM;;IAEE,iCAAA;EzEkrQR;;EyEhrQM;;IAEE,kCAAA;EzEmrQR;;EyEjrQM;;IAEE,gCAAA;EzEorQR;;EyEnsQM;IAAgC,0BAAA;EzEusQtC;;EyEtsQM;;IAEE,8BAAA;EzEysQR;;EyEvsQM;;IAEE,gCAAA;EzE0sQR;;EyExsQM;;IAEE,iCAAA;EzE2sQR;;EyEzsQM;;IAEE,+BAAA;EzE4sQR;;EyE3tQM;IAAgC,wBAAA;EzE+tQtC;;EyE9tQM;;IAEE,4BAAA;EzEiuQR;;EyE/tQM;;IAEE,8BAAA;EzEkuQR;;EyEhuQM;;IAEE,+BAAA;EzEmuQR;;EyEjuQM;;IAEE,6BAAA;EzEouQR;;EyEnvQM;IAAgC,0BAAA;EzEuvQtC;;EyEtvQM;;IAEE,8BAAA;EzEyvQR;;EyEvvQM;;IAEE,gCAAA;EzE0vQR;;EyExvQM;;IAEE,iCAAA;EzE2vQR;;EyEzvQM;;IAEE,+BAAA;EzE4vQR;;EyE3wQM;IAAgC,wBAAA;EzE+wQtC;;EyE9wQM;;IAEE,4BAAA;EzEixQR;;EyE/wQM;;IAEE,8BAAA;EzEkxQR;;EyEhxQM;;IAEE,+BAAA;EzEmxQR;;EyEjxQM;;IAEE,6BAAA;EzEoxQR;;EyE5wQM;IAAwB,2BAAA;EzEgxQ9B;;EyE/wQM;;IAEE,+BAAA;EzEkxQR;;EyEhxQM;;IAEE,iCAAA;EzEmxQR;;EyEjxQM;;IAEE,kCAAA;EzEoxQR;;EyElxQM;;IAEE,gCAAA;EzEqxQR;;EyEpyQM;IAAwB,0BAAA;EzEwyQ9B;;EyEvyQM;;IAEE,8BAAA;EzE0yQR;;EyExyQM;;IAEE,gCAAA;EzE2yQR;;EyEzyQM;;IAEE,iCAAA;EzE4yQR;;EyE1yQM;;IAEE,+BAAA;EzE6yQR;;EyE5zQM;IAAwB,wBAAA;EzEg0Q9B;;EyE/zQM;;IAEE,4BAAA;EzEk0QR;;EyEh0QM;;IAEE,8BAAA;EzEm0QR;;EyEj0QM;;IAEE,+BAAA;EzEo0QR;;EyEl0QM;;IAEE,6BAAA;EzEq0QR;;EyEp1QM;IAAwB,0BAAA;EzEw1Q9B;;EyEv1QM;;IAEE,8BAAA;EzE01QR;;EyEx1QM;;IAEE,gCAAA;EzE21QR;;EyEz1QM;;IAEE,iCAAA;EzE41QR;;EyE11QM;;IAEE,+BAAA;EzE61QR;;EyE52QM;IAAwB,wBAAA;EzEg3Q9B;;EyE/2QM;;IAEE,4BAAA;EzEk3QR;;EyEh3QM;;IAEE,8BAAA;EzEm3QR;;EyEj3QM;;IAEE,+BAAA;EzEo3QR;;EyEl3QM;;IAEE,6BAAA;EzEq3QR;;EyE/2QE;IAAmB,uBAAA;EzEm3QrB;;EyEl3QE;;IAEE,2BAAA;EzEq3QJ;;EyEn3QE;;IAEE,6BAAA;EzEs3QJ;;EyEp3QE;;IAEE,8BAAA;EzEu3QJ;;EyEr3QE;;IAEE,4BAAA;EzEw3QJ;AACF;AiBl4QI;EwDlDI;IAAgC,oBAAA;EzEw7QtC;;EyEv7QM;;IAEE,wBAAA;EzE07QR;;EyEx7QM;;IAEE,0BAAA;EzE27QR;;EyEz7QM;;IAEE,2BAAA;EzE47QR;;EyE17QM;;IAEE,yBAAA;EzE67QR;;EyE58QM;IAAgC,0BAAA;EzEg9QtC;;EyE/8QM;;IAEE,8BAAA;EzEk9QR;;EyEh9QM;;IAEE,gCAAA;EzEm9QR;;EyEj9QM;;IAEE,iCAAA;EzEo9QR;;EyEl9QM;;IAEE,+BAAA;EzEq9QR;;EyEp+QM;IAAgC,yBAAA;EzEw+QtC;;EyEv+QM;;IAEE,6BAAA;EzE0+QR;;EyEx+QM;;IAEE,+BAAA;EzE2+QR;;EyEz+QM;;IAEE,gCAAA;EzE4+QR;;EyE1+QM;;IAEE,8BAAA;EzE6+QR;;EyE5/QM;IAAgC,uBAAA;EzEggRtC;;EyE//QM;;IAEE,2BAAA;EzEkgRR;;EyEhgRM;;IAEE,6BAAA;EzEmgRR;;EyEjgRM;;IAEE,8BAAA;EzEogRR;;EyElgRM;;IAEE,4BAAA;EzEqgRR;;EyEphRM;IAAgC,yBAAA;EzEwhRtC;;EyEvhRM;;IAEE,6BAAA;EzE0hRR;;EyExhRM;;IAEE,+BAAA;EzE2hRR;;EyEzhRM;;IAEE,gCAAA;EzE4hRR;;EyE1hRM;;IAEE,8BAAA;EzE6hRR;;EyE5iRM;IAAgC,uBAAA;EzEgjRtC;;EyE/iRM;;IAEE,2BAAA;EzEkjRR;;EyEhjRM;;IAEE,6BAAA;EzEmjRR;;EyEjjRM;;IAEE,8BAAA;EzEojRR;;EyEljRM;;IAEE,4BAAA;EzEqjRR;;EyEpkRM;IAAgC,qBAAA;EzEwkRtC;;EyEvkRM;;IAEE,yBAAA;EzE0kRR;;EyExkRM;;IAEE,2BAAA;EzE2kRR;;EyEzkRM;;IAEE,4BAAA;EzE4kRR;;EyE1kRM;;IAEE,0BAAA;EzE6kRR;;EyE5lRM;IAAgC,2BAAA;EzEgmRtC;;EyE/lRM;;IAEE,+BAAA;EzEkmRR;;EyEhmRM;;IAEE,iCAAA;EzEmmRR;;EyEjmRM;;IAEE,kCAAA;EzEomRR;;EyElmRM;;IAEE,gCAAA;EzEqmRR;;EyEpnRM;IAAgC,0BAAA;EzEwnRtC;;EyEvnRM;;IAEE,8BAAA;EzE0nRR;;EyExnRM;;IAEE,gCAAA;EzE2nRR;;EyEznRM;;IAEE,iCAAA;EzE4nRR;;EyE1nRM;;IAEE,+BAAA;EzE6nRR;;EyE5oRM;IAAgC,wBAAA;EzEgpRtC;;EyE/oRM;;IAEE,4BAAA;EzEkpRR;;EyEhpRM;;IAEE,8BAAA;EzEmpRR;;EyEjpRM;;IAEE,+BAAA;EzEopRR;;EyElpRM;;IAEE,6BAAA;EzEqpRR;;EyEpqRM;IAAgC,0BAAA;EzEwqRtC;;EyEvqRM;;IAEE,8BAAA;EzE0qRR;;EyExqRM;;IAEE,gCAAA;EzE2qRR;;EyEzqRM;;IAEE,iCAAA;EzE4qRR;;EyE1qRM;;IAEE,+BAAA;EzE6qRR;;EyE5rRM;IAAgC,wBAAA;EzEgsRtC;;EyE/rRM;;IAEE,4BAAA;EzEksRR;;EyEhsRM;;IAEE,8BAAA;EzEmsRR;;EyEjsRM;;IAEE,+BAAA;EzEosRR;;EyElsRM;;IAEE,6BAAA;EzEqsRR;;EyE7rRM;IAAwB,2BAAA;EzEisR9B;;EyEhsRM;;IAEE,+BAAA;EzEmsRR;;EyEjsRM;;IAEE,iCAAA;EzEosRR;;EyElsRM;;IAEE,kCAAA;EzEqsRR;;EyEnsRM;;IAEE,gCAAA;EzEssRR;;EyErtRM;IAAwB,0BAAA;EzEytR9B;;EyExtRM;;IAEE,8BAAA;EzE2tRR;;EyEztRM;;IAEE,gCAAA;EzE4tRR;;EyE1tRM;;IAEE,iCAAA;EzE6tRR;;EyE3tRM;;IAEE,+BAAA;EzE8tRR;;EyE7uRM;IAAwB,wBAAA;EzEivR9B;;EyEhvRM;;IAEE,4BAAA;EzEmvRR;;EyEjvRM;;IAEE,8BAAA;EzEovRR;;EyElvRM;;IAEE,+BAAA;EzEqvRR;;EyEnvRM;;IAEE,6BAAA;EzEsvRR;;EyErwRM;IAAwB,0BAAA;EzEywR9B;;EyExwRM;;IAEE,8BAAA;EzE2wRR;;EyEzwRM;;IAEE,gCAAA;EzE4wRR;;EyE1wRM;;IAEE,iCAAA;EzE6wRR;;EyE3wRM;;IAEE,+BAAA;EzE8wRR;;EyE7xRM;IAAwB,wBAAA;EzEiyR9B;;EyEhyRM;;IAEE,4BAAA;EzEmyRR;;EyEjyRM;;IAEE,8BAAA;EzEoyRR;;EyElyRM;;IAEE,+BAAA;EzEqyRR;;EyEnyRM;;IAEE,6BAAA;EzEsyRR;;EyEhyRE;IAAmB,uBAAA;EzEoyRrB;;EyEnyRE;;IAEE,2BAAA;EzEsyRJ;;EyEpyRE;;IAEE,6BAAA;EzEuyRJ;;EyEryRE;;IAEE,8BAAA;EzEwyRJ;;EyEtyRE;;IAEE,4BAAA;EzEyyRJ;AACF;AiBnzRI;EwDlDI;IAAgC,oBAAA;EzEy2RtC;;EyEx2RM;;IAEE,wBAAA;EzE22RR;;EyEz2RM;;IAEE,0BAAA;EzE42RR;;EyE12RM;;IAEE,2BAAA;EzE62RR;;EyE32RM;;IAEE,yBAAA;EzE82RR;;EyE73RM;IAAgC,0BAAA;EzEi4RtC;;EyEh4RM;;IAEE,8BAAA;EzEm4RR;;EyEj4RM;;IAEE,gCAAA;EzEo4RR;;EyEl4RM;;IAEE,iCAAA;EzEq4RR;;EyEn4RM;;IAEE,+BAAA;EzEs4RR;;EyEr5RM;IAAgC,yBAAA;EzEy5RtC;;EyEx5RM;;IAEE,6BAAA;EzE25RR;;EyEz5RM;;IAEE,+BAAA;EzE45RR;;EyE15RM;;IAEE,gCAAA;EzE65RR;;EyE35RM;;IAEE,8BAAA;EzE85RR;;EyE76RM;IAAgC,uBAAA;EzEi7RtC;;EyEh7RM;;IAEE,2BAAA;EzEm7RR;;EyEj7RM;;IAEE,6BAAA;EzEo7RR;;EyEl7RM;;IAEE,8BAAA;EzEq7RR;;EyEn7RM;;IAEE,4BAAA;EzEs7RR;;EyEr8RM;IAAgC,yBAAA;EzEy8RtC;;EyEx8RM;;IAEE,6BAAA;EzE28RR;;EyEz8RM;;IAEE,+BAAA;EzE48RR;;EyE18RM;;IAEE,gCAAA;EzE68RR;;EyE38RM;;IAEE,8BAAA;EzE88RR;;EyE79RM;IAAgC,uBAAA;EzEi+RtC;;EyEh+RM;;IAEE,2BAAA;EzEm+RR;;EyEj+RM;;IAEE,6BAAA;EzEo+RR;;EyEl+RM;;IAEE,8BAAA;EzEq+RR;;EyEn+RM;;IAEE,4BAAA;EzEs+RR;;EyEr/RM;IAAgC,qBAAA;EzEy/RtC;;EyEx/RM;;IAEE,yBAAA;EzE2/RR;;EyEz/RM;;IAEE,2BAAA;EzE4/RR;;EyE1/RM;;IAEE,4BAAA;EzE6/RR;;EyE3/RM;;IAEE,0BAAA;EzE8/RR;;EyE7gSM;IAAgC,2BAAA;EzEihStC;;EyEhhSM;;IAEE,+BAAA;EzEmhSR;;EyEjhSM;;IAEE,iCAAA;EzEohSR;;EyElhSM;;IAEE,kCAAA;EzEqhSR;;EyEnhSM;;IAEE,gCAAA;EzEshSR;;EyEriSM;IAAgC,0BAAA;EzEyiStC;;EyExiSM;;IAEE,8BAAA;EzE2iSR;;EyEziSM;;IAEE,gCAAA;EzE4iSR;;EyE1iSM;;IAEE,iCAAA;EzE6iSR;;EyE3iSM;;IAEE,+BAAA;EzE8iSR;;EyE7jSM;IAAgC,wBAAA;EzEikStC;;EyEhkSM;;IAEE,4BAAA;EzEmkSR;;EyEjkSM;;IAEE,8BAAA;EzEokSR;;EyElkSM;;IAEE,+BAAA;EzEqkSR;;EyEnkSM;;IAEE,6BAAA;EzEskSR;;EyErlSM;IAAgC,0BAAA;EzEylStC;;EyExlSM;;IAEE,8BAAA;EzE2lSR;;EyEzlSM;;IAEE,gCAAA;EzE4lSR;;EyE1lSM;;IAEE,iCAAA;EzE6lSR;;EyE3lSM;;IAEE,+BAAA;EzE8lSR;;EyE7mSM;IAAgC,wBAAA;EzEinStC;;EyEhnSM;;IAEE,4BAAA;EzEmnSR;;EyEjnSM;;IAEE,8BAAA;EzEonSR;;EyElnSM;;IAEE,+BAAA;EzEqnSR;;EyEnnSM;;IAEE,6BAAA;EzEsnSR;;EyE9mSM;IAAwB,2BAAA;EzEknS9B;;EyEjnSM;;IAEE,+BAAA;EzEonSR;;EyElnSM;;IAEE,iCAAA;EzEqnSR;;EyEnnSM;;IAEE,kCAAA;EzEsnSR;;EyEpnSM;;IAEE,gCAAA;EzEunSR;;EyEtoSM;IAAwB,0BAAA;EzE0oS9B;;EyEzoSM;;IAEE,8BAAA;EzE4oSR;;EyE1oSM;;IAEE,gCAAA;EzE6oSR;;EyE3oSM;;IAEE,iCAAA;EzE8oSR;;EyE5oSM;;IAEE,+BAAA;EzE+oSR;;EyE9pSM;IAAwB,wBAAA;EzEkqS9B;;EyEjqSM;;IAEE,4BAAA;EzEoqSR;;EyElqSM;;IAEE,8BAAA;EzEqqSR;;EyEnqSM;;IAEE,+BAAA;EzEsqSR;;EyEpqSM;;IAEE,6BAAA;EzEuqSR;;EyEtrSM;IAAwB,0BAAA;EzE0rS9B;;EyEzrSM;;IAEE,8BAAA;EzE4rSR;;EyE1rSM;;IAEE,gCAAA;EzE6rSR;;EyE3rSM;;IAEE,iCAAA;EzE8rSR;;EyE5rSM;;IAEE,+BAAA;EzE+rSR;;EyE9sSM;IAAwB,wBAAA;EzEktS9B;;EyEjtSM;;IAEE,4BAAA;EzEotSR;;EyEltSM;;IAEE,8BAAA;EzEqtSR;;EyEntSM;;IAEE,+BAAA;EzEstSR;;EyEptSM;;IAEE,6BAAA;EzEutSR;;EyEjtSE;IAAmB,uBAAA;EzEqtSrB;;EyEptSE;;IAEE,2BAAA;EzEutSJ;;EyErtSE;;IAEE,6BAAA;EzEwtSJ;;EyEttSE;;IAEE,8BAAA;EzEytSJ;;EyEvtSE;;IAEE,4BAAA;EzE0tSJ;AACF;AiBpuSI;EwDlDI;IAAgC,oBAAA;EzE0xStC;;EyEzxSM;;IAEE,wBAAA;EzE4xSR;;EyE1xSM;;IAEE,0BAAA;EzE6xSR;;EyE3xSM;;IAEE,2BAAA;EzE8xSR;;EyE5xSM;;IAEE,yBAAA;EzE+xSR;;EyE9ySM;IAAgC,0BAAA;EzEkzStC;;EyEjzSM;;IAEE,8BAAA;EzEozSR;;EyElzSM;;IAEE,gCAAA;EzEqzSR;;EyEnzSM;;IAEE,iCAAA;EzEszSR;;EyEpzSM;;IAEE,+BAAA;EzEuzSR;;EyEt0SM;IAAgC,yBAAA;EzE00StC;;EyEz0SM;;IAEE,6BAAA;EzE40SR;;EyE10SM;;IAEE,+BAAA;EzE60SR;;EyE30SM;;IAEE,gCAAA;EzE80SR;;EyE50SM;;IAEE,8BAAA;EzE+0SR;;EyE91SM;IAAgC,uBAAA;EzEk2StC;;EyEj2SM;;IAEE,2BAAA;EzEo2SR;;EyEl2SM;;IAEE,6BAAA;EzEq2SR;;EyEn2SM;;IAEE,8BAAA;EzEs2SR;;EyEp2SM;;IAEE,4BAAA;EzEu2SR;;EyEt3SM;IAAgC,yBAAA;EzE03StC;;EyEz3SM;;IAEE,6BAAA;EzE43SR;;EyE13SM;;IAEE,+BAAA;EzE63SR;;EyE33SM;;IAEE,gCAAA;EzE83SR;;EyE53SM;;IAEE,8BAAA;EzE+3SR;;EyE94SM;IAAgC,uBAAA;EzEk5StC;;EyEj5SM;;IAEE,2BAAA;EzEo5SR;;EyEl5SM;;IAEE,6BAAA;EzEq5SR;;EyEn5SM;;IAEE,8BAAA;EzEs5SR;;EyEp5SM;;IAEE,4BAAA;EzEu5SR;;EyEt6SM;IAAgC,qBAAA;EzE06StC;;EyEz6SM;;IAEE,yBAAA;EzE46SR;;EyE16SM;;IAEE,2BAAA;EzE66SR;;EyE36SM;;IAEE,4BAAA;EzE86SR;;EyE56SM;;IAEE,0BAAA;EzE+6SR;;EyE97SM;IAAgC,2BAAA;EzEk8StC;;EyEj8SM;;IAEE,+BAAA;EzEo8SR;;EyEl8SM;;IAEE,iCAAA;EzEq8SR;;EyEn8SM;;IAEE,kCAAA;EzEs8SR;;EyEp8SM;;IAEE,gCAAA;EzEu8SR;;EyEt9SM;IAAgC,0BAAA;EzE09StC;;EyEz9SM;;IAEE,8BAAA;EzE49SR;;EyE19SM;;IAEE,gCAAA;EzE69SR;;EyE39SM;;IAEE,iCAAA;EzE89SR;;EyE59SM;;IAEE,+BAAA;EzE+9SR;;EyE9+SM;IAAgC,wBAAA;EzEk/StC;;EyEj/SM;;IAEE,4BAAA;EzEo/SR;;EyEl/SM;;IAEE,8BAAA;EzEq/SR;;EyEn/SM;;IAEE,+BAAA;EzEs/SR;;EyEp/SM;;IAEE,6BAAA;EzEu/SR;;EyEtgTM;IAAgC,0BAAA;EzE0gTtC;;EyEzgTM;;IAEE,8BAAA;EzE4gTR;;EyE1gTM;;IAEE,gCAAA;EzE6gTR;;EyE3gTM;;IAEE,iCAAA;EzE8gTR;;EyE5gTM;;IAEE,+BAAA;EzE+gTR;;EyE9hTM;IAAgC,wBAAA;EzEkiTtC;;EyEjiTM;;IAEE,4BAAA;EzEoiTR;;EyEliTM;;IAEE,8BAAA;EzEqiTR;;EyEniTM;;IAEE,+BAAA;EzEsiTR;;EyEpiTM;;IAEE,6BAAA;EzEuiTR;;EyE/hTM;IAAwB,2BAAA;EzEmiT9B;;EyEliTM;;IAEE,+BAAA;EzEqiTR;;EyEniTM;;IAEE,iCAAA;EzEsiTR;;EyEpiTM;;IAEE,kCAAA;EzEuiTR;;EyEriTM;;IAEE,gCAAA;EzEwiTR;;EyEvjTM;IAAwB,0BAAA;EzE2jT9B;;EyE1jTM;;IAEE,8BAAA;EzE6jTR;;EyE3jTM;;IAEE,gCAAA;EzE8jTR;;EyE5jTM;;IAEE,iCAAA;EzE+jTR;;EyE7jTM;;IAEE,+BAAA;EzEgkTR;;EyE/kTM;IAAwB,wBAAA;EzEmlT9B;;EyEllTM;;IAEE,4BAAA;EzEqlTR;;EyEnlTM;;IAEE,8BAAA;EzEslTR;;EyEplTM;;IAEE,+BAAA;EzEulTR;;EyErlTM;;IAEE,6BAAA;EzEwlTR;;EyEvmTM;IAAwB,0BAAA;EzE2mT9B;;EyE1mTM;;IAEE,8BAAA;EzE6mTR;;EyE3mTM;;IAEE,gCAAA;EzE8mTR;;EyE5mTM;;IAEE,iCAAA;EzE+mTR;;EyE7mTM;;IAEE,+BAAA;EzEgnTR;;EyE/nTM;IAAwB,wBAAA;EzEmoT9B;;EyEloTM;;IAEE,4BAAA;EzEqoTR;;EyEnoTM;;IAEE,8BAAA;EzEsoTR;;EyEpoTM;;IAEE,+BAAA;EzEuoTR;;EyEroTM;;IAEE,6BAAA;EzEwoTR;;EyEloTE;IAAmB,uBAAA;EzEsoTrB;;EyEroTE;;IAEE,2BAAA;EzEwoTJ;;EyEtoTE;;IAEE,6BAAA;EzEyoTJ;;EyEvoTE;;IAEE,8BAAA;EzE0oTJ;;EyExoTE;;IAEE,4BAAA;EzE2oTJ;AACF;A0E3sTA;EAAkB,4GAAA;A1E8sTlB;;A0E1sTA;EAAiB,8BAAA;A1E8sTjB;;A0E7sTA;EAAiB,8BAAA;A1EitTjB;;A0EhtTA;EAAiB,8BAAA;A1EotTjB;;A0EntTA;ECTE,gBAAA;EACA,uBAAA;EACA,mBAAA;A3EguTF;;A0EjtTI;EAAwB,2BAAA;A1EqtT5B;;A0EptTI;EAAwB,4BAAA;A1EwtT5B;;A0EvtTI;EAAwB,6BAAA;A1E2tT5B;;AiBtrTI;EyDvCA;IAAwB,2BAAA;E1EkuT1B;;E0EjuTE;IAAwB,4BAAA;E1EquT1B;;E0EpuTE;IAAwB,6BAAA;E1EwuT1B;AACF;AiBpsTI;EyDvCA;IAAwB,2BAAA;E1E+uT1B;;E0E9uTE;IAAwB,4BAAA;E1EkvT1B;;E0EjvTE;IAAwB,6BAAA;E1EqvT1B;AACF;AiBjtTI;EyDvCA;IAAwB,2BAAA;E1E4vT1B;;E0E3vTE;IAAwB,4BAAA;E1E+vT1B;;E0E9vTE;IAAwB,6BAAA;E1EkwT1B;AACF;AiB9tTI;EyDvCA;IAAwB,2BAAA;E1EywT1B;;E0ExwTE;IAAwB,4BAAA;E1E4wT1B;;E0E3wTE;IAAwB,6BAAA;E1E+wT1B;AACF;A0E1wTA;EAAmB,oCAAA;A1E6wTnB;;A0E5wTA;EAAmB,oCAAA;A1EgxTnB;;A0E/wTA;EAAmB,qCAAA;A1EmxTnB;;A0E/wTA;EAAuB,2BAAA;A1EmxTvB;;A0ElxTA;EAAuB,+BAAA;A1EsxTvB;;A0ErxTA;EAAuB,2BAAA;A1EyxTvB;;A0ExxTA;EAAuB,2BAAA;A1E4xTvB;;A0E3xTA;EAAuB,8BAAA;A1E+xTvB;;A0E9xTA;EAAuB,6BAAA;A1EkyTvB;;A0E9xTA;EAAc,sBAAA;A1EkyTd;;A4Ez0TE;EACE,yBAAA;A5E40TJ;;AQl0TE;EoELM,yBAAA;A5E20TR;;A4Ej1TE;EACE,yBAAA;A5Eo1TJ;;AQ10TE;EoELM,yBAAA;A5Em1TR;;A4Ez1TE;EACE,yBAAA;A5E41TJ;;AQl1TE;EoELM,yBAAA;A5E21TR;;A4Ej2TE;EACE,yBAAA;A5Eo2TJ;;AQ11TE;EoELM,yBAAA;A5Em2TR;;A4Ez2TE;EACE,yBAAA;A5E42TJ;;AQl2TE;EoELM,yBAAA;A5E22TR;;A4Ej3TE;EACE,yBAAA;A5Eo3TJ;;AQ12TE;EoELM,yBAAA;A5Em3TR;;A4Ez3TE;EACE,yBAAA;A5E43TJ;;AQl3TE;EoELM,yBAAA;A5E23TR;;A4Ej4TE;EACE,yBAAA;A5Eo4TJ;;AQ13TE;EoELM,yBAAA;A5Em4TR;;A0E51TA;EAAa,yBAAA;A1Eg2Tb;;A0E/1TA;EAAc,yBAAA;A1Em2Td;;A0Ej2TA;EAAiB,oCAAA;A1Eq2TjB;;A0Ep2TA;EAAiB,0CAAA;A1Ew2TjB;;A0Ep2TA;EGvDE,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,6BAAA;EACA,SAAA;A7E+5TF;;A0Ex2TA;EAAwB,gCAAA;A1E42TxB;;A0E12TA;EACE,iCAAA;EACA,oCAAA;A1E62TF;;A0Ex2TA;EAAc,yBAAA;A1E42Td;;A8E76TA;EACE,8BAAA;A9Eg7TF;;A8E76TA;EACE,6BAAA;A9Eg7TF;;A+Eh7TE;EACE;;;IAKE,4BAAA;IAEA,2BAAA;E/Eg7TJ;;E+E56TI;IACE,0BAAA;E/E+6TN;;E+Et6TE;IACE,6BAAA;E/Ey6TJ;;E+E35TE;IACE,gCAAA;E/E85TJ;;E+E55TE;;IAEE,yBAAA;IACA,wBAAA;E/E+5TJ;;E+Ev5TE;IACE,2BAAA;E/E05TJ;;E+Ev5TE;;IAEE,wBAAA;E/E05TJ;;E+Ev5TE;;;IAGE,UAAA;IACA,SAAA;E/E05TJ;;E+Ev5TE;;IAEE,uBAAA;E/E05TJ;;E+El5TE;IACE,QzE4hC8B;ENy3RlC;E+En5TE;IACE,2BAAA;E/Eq5TJ;;E+En5TE;IACE,2BAAA;E/Es5TJ;;E+El5TE;IACE,aAAA;E/Eq5TJ;;E+En5TE;IACE,sBAAA;E/Es5TJ;;E+En5TE;IACE,oCAAA;E/Es5TJ;E+Ep5TI;;IAEE,iCAAA;E/Es5TN;;E+Ej5TI;;IAEE,oCAAA;E/Eo5TN;;E+Eh5TE;IACE,cAAA;E/Em5TJ;E+Ej5TI;;;;IAIE,qB7E7HG;EFghUT;;E+E/4TE;IACE,cAAA;IACA,qB7EnIK;EFqhUT;AACF","file":"styles.scss","sourcesContent":["// Override default variables before the import\n@import './variables.scss';\n@import './breakpoint.scss';\n\n@mixin border-radius($radius) {\n  -webkit-border-radius: $radius;\n     -moz-border-radius: $radius;\n      -ms-border-radius: $radius;\n          border-radius: $radius;\n}\n\n@mixin transition($transition) {\n    -moz-transition:    all $transition ease;\n    -o-transition:      all $transition ease;\n    -webkit-transition: all $transition ease;\n    -ms-transition: \t\tall $transition ease;\n    transition:         all $transition ease;\n}\n\n.container-fluid {\n\tpadding-right:0 !important;\n    padding-left:0 !important;\n}\n\n// /***** Top menu *****/\n\n.ftco-navbar-light {\n\tbackground: transparent!important;\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tz-index: 3;\n\ttop: 30px;\n\t@include media-breakpoint-down(md) {\n\t\tbackground: $black!important;\n\t\ttop: 0;\n\t\tposition: relative;\n\t}\n\n\t.navbar-brand {\n\t\tcolor: $white;\n\t}\n\t\n\t.navbar-nav {\n\t\t> .nav-item {\n\t\t\t> .nav-link {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tpadding-top: .9rem;\n\t\t\t\tpadding-bottom: .9rem;\n\t\t\t\tpadding-left: 20px;\n\t\t\t\tpadding-right: 20px;\n\t\t\t\tcolor: darken($white, 6%);\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: $white;\n\t\t\t\t}\n\t\t\t\topacity: 1!important;\n\t\t\t}\n\n\t\t\t.dropdown-menu{\n\t\t\t\tborder: none;\n\t\t\t\tbackground: $white;\n\t\t\t\t-webkit-box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41);\n\t\t\t\t-moz-box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41);\n\t\t\t\tbox-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41);\n\t\t\t}\n\n\t\t\t\n\t\t\t&.ftco-seperator {\n\t\t\t\tposition: relative;\n\t\t\t\tmargin-left: 20px;\n\t\t\t\tpadding-left: 20px;\n\t\t\t\t@include media-breakpoint-down(md) {\n\t\t\t\t\tpadding-left: 0;\n\t\t\t\t\tmargin-left: 0;\n\t\t\t\t}\n\t\t\t\t&:before {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tcontent: \"\";\n\t\t\t\t\ttop: 10px;\n\t\t\t\t\tbottom: 10px;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 2px;\n\t\t\t\t\tbackground: rgba($white, .05);\n\t\t\t\t\t@include media-breakpoint-down(md) {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t&.cta {\n\t\t\t\t> a {\n\t\t\t\t\tpadding-left: 0;\n\t\t\t\t\tcolor: $white;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tborder: 2px solid $white;\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tpadding: 10px 20px;\n\t\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.cta-colored {\n\t\t\t\t\tspan {\n\t\t\t\t\t\tborder-color: $primary;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t&.active {\n\t\t\t\t> a {\n\t\t\t\t\tcolor: rgba(255,255,255,.5);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.navbar-toggler {\n\t\tborder: none;\n\t\tcolor: rgba(255,255,255,.5)!important;\n\t\tcursor: pointer;\n\t\tpadding-right: 0;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 16px;\n\t\tletter-spacing: .1em;\n\t}\n\t\n\t&.scrolled  {\n\t\tposition: fixed;\n\t\tright: 0;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin-top: -130px;\n\t\tbackground: $whitesmoke!important;\n\t\tbox-shadow: 0 0 10px 0 rgba(0,0,0,.1);\n\t\t.nav-item {\n\t\t\t&.active {\n\t\t\t\t> a {\n\t\t\t\t\tcolor: $primary!important;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.navbar-nav {\n\t\t\t@include media-breakpoint-down(md) {\n\t\t\t\tbackground: none;\n\t\t\t\tborder-radius: 0px;\n\t\t\t\tpadding-left: 0rem!important;\n\t\t\t\tpadding-right: 0rem!important;\n\t\t\t}\n\t\t}\n\n\t\t.navbar-nav {\n\t\t\t@include media-breakpoint-down(sm) {\n\t\t\t\tbackground: none;\n\t\t\t\tpadding-left: 0!important;\n\t\t\t\tpadding-right: 0!important;\n\t\t\t}\n\t\t}\n\n\t\t.navbar-toggler {\n\t\t\tborder: none;\n\t\t\tcolor: rgba(0,0,0,.5)!important;\n\t\t\tborder-color: rgba(0,0,0,.5)!important;\n\t\t\tcursor: pointer;\n\t\t\tpadding-right: 0;\n\t\t\ttext-transform: uppercase;\n\t\t\tfont-size: 16px;\n\t\t\tletter-spacing: .1em;\n\n\t\t}\n\t\t.nav-link {\n\t\t\tpadding-top: .9rem!important;\n\t\t\tpadding-bottom: .9rem!important;\n\t\t\tcolor: $black!important;\n\t\t\t&.active {\n\t\t\t\tcolor: $primary!important;\n\t\t\t}\n\t\t}\n\t\t&.awake {\n\t\t\tmargin-top: 0px;\n\t\t\ttransition: .3s all ease-out;\n\t\t}\n\t\t&.sleep {\n\t\t\ttransition: .3s all ease-out;\t\n\t\t}\n\n\t\t.navbar-brand {\n\t\t\tcolor: $black;\n\t\t}\n\t}\n}\n\n/*****Header*****/\nheader {\n\tposition: relative;\n\tbackground-color: black;\n\theight: 75vh;\n\tmin-height: 25rem;\n\twidth: 100%;\n\toverflow: hidden;\n  }\n  \n  header video {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmin-width: 100%;\n\tmin-height: 100%;\n\twidth: auto;\n\theight: auto;\n\tz-index: 0;\n\t-ms-transform: translateX(-50%) translateY(-50%);\n\t-moz-transform: translateX(-50%) translateY(-50%);\n\t-webkit-transform: translateX(-50%) translateY(-50%);\n\ttransform: translateX(-50%) translateY(-50%);\n  }\n  \n  header .container {\n\tposition: relative;\n\tz-index: 2;\n  }\n  \n  header .overlay {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: black;\n\topacity: 0.5;\n\tz-index: 1;\n  }\n  \n  @media (pointer: coarse) and (hover: none) {\n\theader {\n\t  background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;\n\t}\n\theader video {\n\t  display: none;\n\t}\n  }\n\n/***** Slider *****/\n\n.home-slider {\n\tz-index: 0;\n\tposition: relative;\n\t.slider-item {\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center center;\n\t\theight: calc(100vh - 117px);\n\t\tmin-height: 800px;\n\t\tposition: relative;\n\t\t.slider-text {\n\t\t\tcolor: $white;\n\t\t\theight: calc(100vh - 117px);\n\t\t\tmin-height: 500px;\n\t\t\th1 {\n\t\t\t\tfont-size: 52px;\n\t\t\t\tcolor: $white;\n\t\t\t\tline-height: 1.2;\n\t\t\t\tfont-weight: 200;\n\t\t\t\t@include media-breakpoint-down(md) {\n\t\t\t\t\tfont-size: 40px;\n\t\t\t\t}\n\t\t\t\tstrong{\n\t\t\t\t\tfont-weight: 800;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.typewrite > .wrap {\n\t\t\t\tposition: relative;\n\t\t\t    border-right: 0.08em solid rgba(255,255,255,0);\n\t\t\t    &:after{\n\t\t\t    \tposition: absolute;\n\t\t\t    \ttop: 0;\n\t\t\t    \tbottom: 12px;\n\t\t\t    \tright: -5px;\n\t\t\t    \twidth: 4px;\n\t\t\t    \tcontent: '';\n\t\t\t    \tbackground: $white;\n\t\t\t    }\n\t\t\t}\n\t\t\tp {\n\t\t\t\tfont-size: 20px;\n\t\t\t\tline-height: 1.5;\n\t\t\t\tfont-weight: 300;\n\t\t\t\tcolor: rgba(255,255,255,.8);\n\t\t\t\tstrong{\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\ta{\n\t\t\t\t\t\tcolor: $white;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.breadcrumbs{\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tletter-spacing: 1px;\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tz-index: 99;\n\t\t\t\tspan{\n\t\t\t\t\tborder-bottom: 2px solid rgba(255,255,255,.1);\n\t\t\t\t\ta{\n\t\t\t\t\t\tcolor: $white;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.bread{\n\t\t\t\tfont-weight: 300 !important;\n\t\t\t}\n\t\t\t.btn-primary{\n\t\t\t\tborder: 1px solid rgba(255,255,255,.4);\n\t\t\t\t@include border-radius(30px);\n\t\t\t\t&:hover, &:focus{\n\t\t\t\t\tbackground: $white !important;\n\t\t\t\t\tcolor: $black;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&.bread-wrap{\n\t\t\t// min-height: 400px !important;\n\t\t\t.slider-text {\n\t\t\t\tcolor: $white;\n\t\t\t\t// height: calc(100vh - 117px);\n\t\t\t\tmin-height: 750px;\n\t\t\t}\n\t\t}\n\t}\n}\n\n.jumbotron{\n  background-image: url(\"./assets/images/jumboBack.jpg\");\n  background-size: cover;\n  background-position: center;\n  min-height: 800px;\n}\n\n.service-image {\n  background-size: cover;\n}\n\n.react-rotating-text-cursor {\n\tanimation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;\n  }\n  \n  @keyframes blinking-cursor {\n\t0% {\n\t  opacity: 0;\n\t}\n\t50% {\n\t  opacity: 1;\n\t}\n\t100% {\n\t  opacity: 0;\n\t}\n  }\n\n//Servicios\n\n.section {\n\tpadding: 7em 0;\n\tposition: relative;\n\t@include media-breakpoint-down(sm){\n\t\tpadding: 6em 0;\n\t}\n\t.bg-light {\n\t\tbackground: $whitesmoke !important;\n\t}\n}\n\n.heading {\n\tcolor: $black;\n\t&.border-bottom {\n\t\tposition: relative;\n\t\tpadding-bottom: 30px;\n\t\tborder-bottom: none!important;\n\t\t&:before {\n\t\t\tbottom: 0;\n\t\t\tposition: absolute;\n\t\t\tcontent: \"\";\n\t\t\twidth: 50px;\n\t\t\theight: 2px;\n\t\t\tleft: 50%;\n\t\t\ttransform: translateX(-50%);\n\t\t\tbackground: $blue;\n\t\t}\n\t\t&.text-left {\n\t\t\t&:before {\n\t\t\t\tleft: 0;\n\t\t\t\ttransform: translateX(0);\n\t\t\t}\n\t\t}\n\t}\n}\n\n.block-3 {\n\tmin-width: 100%;\n\t.text, .image {\n\t\twidth: 100%;\n\t\tpadding: 10% 7%;\n\t\tdisplay: block;\n\t\t@include media-breakpoint-up(md) {\n\t\t\twidth: 100%;\n\t\t\tpadding: 10% 7%;\t\n\t\t}\n\t}\n\t.text {\n\t\tbackground: #f8faff;\n\t\t.subheading {\n\t\t\tfont-size: 13px;\n\t\t\ttext-transform: uppercase;\n\t\t\tletter-spacing: .1em;\n\t\t\tcolor: darken(#E7EFF3, 20%);\n\t\t}\n\t\t.heading {\n\t\t\tfont-size: 30px;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\t\tp {\n\t\t\t&:last-child {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t}\n\t}\n\t.image {\n\t\tbackground-size: cover;\n\t\tbackground-position: center center;\n\t\tbackground-repeat: no-repeat;\n\t\t@include media-breakpoint-down(sm) {\n\t\t\theight: 300px;\n\t\t}\n\t}\n}\n\n// Import Bootstrap and its default variables\n@import \"~bootstrap/scss/bootstrap.scss\";\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n    $n: index($breakpoint-names, $name);\n    @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n  }\n  \n  // Minimum breakpoint width. Null for the smallest (first) breakpoint.\n  //\n  //    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n  //    576px\n  @function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n    $min: map-get($breakpoints, $name);\n    @return if($min != 0, $min, null);\n  }\n  \n  // Maximum breakpoint width. Null for the largest (last) breakpoint.\n  // The maximum value is calculated as the minimum of the next one less 0.02px\n  // to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\n  // See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n  // Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n  // See https://bugs.webkit.org/show_bug.cgi?id=178261\n  //\n  //    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n  //    767.98px\n  @function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n    $next: breakpoint-next($name, $breakpoints);\n    @return if($next, breakpoint-min($next, $breakpoints) - .02px, null);\n  }\n  \n  // Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.\n  // Useful for making responsive utilities.\n  //\n  //    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n  //    \"\"  (Returns a blank string)\n  //    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n  //    \"-sm\"\n  @function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n    @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n  }\n  \n  // Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n  // Makes the @content apply to the given breakpoint and wider.\n  @mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n    $min: breakpoint-min($name, $breakpoints);\n    @if $min {\n      @media (min-width: $min) {\n        @content;\n      }\n    } @else {\n      @content;\n    }\n  }\n  \n  // Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n  // Makes the @content apply to the given breakpoint and narrower.\n  @mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n    $max: breakpoint-max($name, $breakpoints);\n    @if $max {\n      @media (max-width: $max) {\n        @content;\n      }\n    } @else {\n      @content;\n    }\n  }\n  \n  // Media that spans multiple breakpoint widths.\n  // Makes the @content apply between the min and max breakpoints\n  @mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n    $min: breakpoint-min($lower, $breakpoints);\n    $max: breakpoint-max($upper, $breakpoints);\n  \n    @if $min != null and $max != null {\n      @media (min-width: $min) and (max-width: $max) {\n        @content;\n      }\n    } @else if $max == null {\n      @include media-breakpoint-up($lower, $breakpoints) {\n        @content;\n      }\n    } @else if $min == null {\n      @include media-breakpoint-down($upper, $breakpoints) {\n        @content;\n      }\n    }\n  }\n  \n  // Media between the breakpoint's minimum and maximum widths.\n  // No minimum for the smallest breakpoint, and no maximum for the largest one.\n  // Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n  @mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n    $min: breakpoint-min($name, $breakpoints);\n    $max: breakpoint-max($name, $breakpoints);\n  \n    @if $min != null and $max != null {\n      @media (min-width: $min) and (max-width: $max) {\n        @content;\n      }\n    } @else if $max == null {\n      @include media-breakpoint-up($name, $breakpoints) {\n        @content;\n      }\n    } @else if $min == null {\n      @include media-breakpoint-down($name, $breakpoints) {\n        @content;\n      }\n    }\n  }\n  ","$white:    #fff !default;\n$whitesmoke: #f8f9fa !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n$grays: () !default;\n$grays: map-merge((\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n), $grays);\n\n$blue:    #007bff !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #e83e8c !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #28a745 !default;\n$teal:    #20c997 !default;\n$cyan:    #17a2b8 !default;\n\n$primary: #78d5ef !default;\n\n$colors: () !default;\n$colors: map-merge((\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n), $colors);\n\n$primary:       $primary !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$theme-colors: () !default;\n$theme-colors: map-merge((\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n), $theme-colors);\n// stylelint-enable\n\n// Set a specific jump point for requesting color jumps\n$theme-color-interval:      8% !default;\n\n// The yiq lightness value that determines when the lightness of color changes from \"dark\" to \"light\". Acceptable values are between 0 and 255.\n$yiq-contrasted-threshold:  150 !default;\n\n// Customize the light and dark text colors for use in our YIQ color contrast function.\n$yiq-text-dark:             $gray-900 !default;\n$yiq-text-light:            $white !default;\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n\n$enable-rounded:            true !default;","/*!\n * Bootstrap v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n@import \"functions\";\n@import \"variables\";\n@import \"mixins\";\n@import \"root\";\n@import \"reboot\";\n@import \"type\";\n@import \"images\";\n@import \"code\";\n@import \"grid\";\n@import \"tables\";\n@import \"forms\";\n@import \"buttons\";\n@import \"transitions\";\n@import \"dropdown\";\n@import \"button-group\";\n@import \"input-group\";\n@import \"custom-forms\";\n@import \"nav\";\n@import \"navbar\";\n@import \"card\";\n@import \"breadcrumb\";\n@import \"pagination\";\n@import \"badge\";\n@import \"jumbotron\";\n@import \"alert\";\n@import \"progress\";\n@import \"media\";\n@import \"list-group\";\n@import \"close\";\n@import \"toasts\";\n@import \"modal\";\n@import \"tooltip\";\n@import \"popover\";\n@import \"carousel\";\n@import \"spinners\";\n@import \"utilities\";\n@import \"print\";\n","// Do not forget to update getting-started/theming.md!\n:root {\n  // Custom variable values only support SassScript inside `#{}`.\n  @each $color, $value in $colors {\n    --#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors {\n    --#{$color}: #{$value};\n  }\n\n  @each $bp, $value in $grid-breakpoints {\n    --breakpoint-#{$bp}: #{$value};\n  }\n\n  // Use `inspect` for lists so that quoted items keep the quotes.\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\n  --font-family-sans-serif: #{inspect($font-family-sans-serif)};\n  --font-family-monospace: #{inspect($font-family-monospace)};\n}\n","// stylelint-disable at-rule-no-vendor-prefix, declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\n\n// Reboot\n//\n// Normalization of HTML elements, manually forked from Normalize.css to remove\n// styles targeting irrelevant browsers while applying new styles.\n//\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\n\n\n// Document\n//\n// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\n// 2. Change the default font family in all browsers.\n// 3. Correct the line height in all browsers.\n// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\n// 5. Change the default tap highlight to be completely transparent in iOS.\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; // 1\n}\n\nhtml {\n  font-family: sans-serif; // 2\n  line-height: 1.15; // 3\n  -webkit-text-size-adjust: 100%; // 4\n  -webkit-tap-highlight-color: rgba($black, 0); // 5\n}\n\n// Shim for \"new\" HTML5 structural elements to display correctly (IE10, older browsers)\n// TODO: remove in v5\n// stylelint-disable-next-line selector-list-comma-newline-after\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\n// Body\n//\n// 1. Remove the margin in all browsers.\n// 2. As a best practice, apply a default `background-color`.\n// 3. Set an explicit initial text-align value so that we can later use\n//    the `inherit` value on things like `<th>` elements.\n\nbody {\n  margin: 0; // 1\n  font-family: $font-family-base;\n  @include font-size($font-size-base);\n  font-weight: $font-weight-base;\n  line-height: $line-height-base;\n  color: $body-color;\n  text-align: left; // 3\n  background-color: $body-bg; // 2\n}\n\n// Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\n// on elements that programmatically receive focus but wouldn't normally show a visible\n// focus outline. In general, this would mean that the outline is only applied if the\n// interaction that led to the element receiving programmatic focus was a keyboard interaction,\n// or the browser has somehow determined that the user is primarily a keyboard user and/or\n// wants focus outlines to always be presented.\n//\n// See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\n// and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\n\n// Content grouping\n//\n// 1. Add the correct box sizing in Firefox.\n// 2. Show the overflow in Edge and IE.\n\nhr {\n  box-sizing: content-box; // 1\n  height: 0; // 1\n  overflow: visible; // 2\n}\n\n\n//\n// Typography\n//\n\n// Remove top margins from headings\n//\n// By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\n// margin for easier control within type scales as it avoids margin collapsing.\n// stylelint-disable-next-line selector-list-comma-newline-after\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: $headings-margin-bottom;\n}\n\n// Reset margins on paragraphs\n//\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\n// bottom margin to use `rem` units instead of `em`.\np {\n  margin-top: 0;\n  margin-bottom: $paragraph-margin-bottom;\n}\n\n// Abbreviations\n//\n// 1. Duplicate behavior to the data-* attribute for our tooltip plugin\n// 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n// 3. Add explicit cursor to indicate changed behavior.\n// 4. Remove the bottom border in Firefox 39-.\n// 5. Prevent the text-decoration to be skipped.\n\nabbr[title],\nabbr[data-original-title] { // 1\n  text-decoration: underline; // 2\n  text-decoration: underline dotted; // 2\n  cursor: help; // 3\n  border-bottom: 0; // 4\n  text-decoration-skip-ink: none; // 5\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: $dt-font-weight;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; // Undo browser default\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: $font-weight-bolder; // Add the correct font weight in Chrome, Edge, and Safari\n}\n\nsmall {\n  @include font-size(80%); // Add the correct font size in all browsers\n}\n\n//\n// Prevent `sub` and `sup` elements from affecting the line height in\n// all browsers.\n//\n\nsub,\nsup {\n  position: relative;\n  @include font-size(75%);\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub { bottom: -.25em; }\nsup { top: -.5em; }\n\n\n//\n// Links\n//\n\na {\n  color: $link-color;\n  text-decoration: $link-decoration;\n  background-color: transparent; // Remove the gray background on active links in IE 10.\n\n  @include hover() {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n}\n\n// And undo these styles for placeholder links/named anchors (without href).\n// It would be more straightforward to just use a[href] in previous block, but that\n// causes specificity issues in many other styles that are too complex to fix.\n// See https://github.com/twbs/bootstrap/issues/19402\n\na:not([href]) {\n  color: inherit;\n  text-decoration: none;\n\n  @include hover() {\n    color: inherit;\n    text-decoration: none;\n  }\n}\n\n\n//\n// Code\n//\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: $font-family-monospace;\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\n}\n\npre {\n  // Remove browser default top margin\n  margin-top: 0;\n  // Reset browser default of `1em` to use `rem`s\n  margin-bottom: 1rem;\n  // Don't allow content to break outside\n  overflow: auto;\n}\n\n\n//\n// Figures\n//\n\nfigure {\n  // Apply a consistent margin strategy (matches our type styles).\n  margin: 0 0 1rem;\n}\n\n\n//\n// Images and content\n//\n\nimg {\n  vertical-align: middle;\n  border-style: none; // Remove the border on images inside links in IE 10-.\n}\n\nsvg {\n  // Workaround for the SVG overflow bug in IE10/11 is still required.\n  // See https://github.com/twbs/bootstrap/issues/26878\n  overflow: hidden;\n  vertical-align: middle;\n}\n\n\n//\n// Tables\n//\n\ntable {\n  border-collapse: collapse; // Prevent double borders\n}\n\ncaption {\n  padding-top: $table-cell-padding;\n  padding-bottom: $table-cell-padding;\n  color: $table-caption-color;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  // Matches default `<td>` alignment by inheriting from the `<body>`, or the\n  // closest parent with a set `text-align`.\n  text-align: inherit;\n}\n\n\n//\n// Forms\n//\n\nlabel {\n  // Allow labels to use `margin` for spacing.\n  display: inline-block;\n  margin-bottom: $label-margin-bottom;\n}\n\n// Remove the default `border-radius` that macOS Chrome adds.\n//\n// Details at https://github.com/twbs/bootstrap/issues/24093\nbutton {\n  // stylelint-disable-next-line property-blacklist\n  border-radius: 0;\n}\n\n// Work around a Firefox/IE bug where the transparent `button` background\n// results in a loss of the default `button` focus styles.\n//\n// Credit: https://github.com/suitcss/base/\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0; // Remove the margin in Firefox and Safari\n  font-family: inherit;\n  @include font-size(inherit);\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible; // Show the overflow in Edge\n}\n\nbutton,\nselect {\n  text-transform: none; // Remove the inheritance of text transform in Firefox\n}\n\n// Remove the inheritance of word-wrap in Safari.\n//\n// Details at https://github.com/twbs/bootstrap/issues/24990\nselect {\n  word-wrap: normal;\n}\n\n\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n//    controls in Android 4.\n// 2. Correct the inability to style clickable types in iOS and Safari.\nbutton,\n[type=\"button\"], // 1\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n}\n\n// Opinionated: add \"hand\" cursor to non-disabled button elements.\n@if $enable-pointer-cursor-for-buttons {\n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    &:not(:disabled) {\n      cursor: pointer;\n    }\n  }\n}\n\n// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box; // 1. Add the correct box sizing in IE 10-\n  padding: 0; // 2. Remove the padding in IE 10-\n}\n\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  // Remove the default appearance of temporal inputs to avoid a Mobile Safari\n  // bug where setting a custom line-height prevents text from being vertically\n  // centered within the input.\n  // See https://bugs.webkit.org/show_bug.cgi?id=139848\n  // and https://github.com/twbs/bootstrap/issues/11266\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  overflow: auto; // Remove the default vertical scrollbar in IE.\n  // Textareas should really only resize vertically so they don't break their (horizontal) containers.\n  resize: vertical;\n}\n\nfieldset {\n  // Browsers set a default `min-width: min-content;` on fieldsets,\n  // unlike e.g. `<div>`s, which have `min-width: 0;` by default.\n  // So we reset that to ensure fieldsets behave more like a standard block element.\n  // See https://github.com/twbs/bootstrap/issues/12359\n  // and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n  min-width: 0;\n  // Reset the default outline behavior of fieldsets so they don't affect page layout.\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n// 1. Correct the text wrapping in Edge and IE.\n// 2. Correct the color inheritance from `fieldset` elements in IE.\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%; // 1\n  padding: 0;\n  margin-bottom: .5rem;\n  @include font-size(1.5rem);\n  line-height: inherit;\n  color: inherit; // 2\n  white-space: normal; // 1\n}\n\nprogress {\n  vertical-align: baseline; // Add the correct vertical alignment in Chrome, Firefox, and Opera.\n}\n\n// Correct the cursor style of increment and decrement buttons in Chrome.\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"] {\n  // This overrides the extra rounded corners on search inputs in iOS so that our\n  // `.form-control` class can properly style them. Note that this cannot simply\n  // be added to `.form-control` as it's not specific enough. For details, see\n  // https://github.com/twbs/bootstrap/issues/11586.\n  outline-offset: -2px; // 2. Correct the outline style in Safari.\n  -webkit-appearance: none;\n}\n\n//\n// Remove the inner padding in Chrome and Safari on macOS.\n//\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n//\n// 1. Correct the inability to style clickable types in iOS and Safari.\n// 2. Change font properties to `inherit` in Safari.\n//\n\n::-webkit-file-upload-button {\n  font: inherit; // 2\n  -webkit-appearance: button; // 1\n}\n\n//\n// Correct element displays\n//\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item; // Add the correct display in all browsers\n  cursor: pointer;\n}\n\ntemplate {\n  display: none; // Add the correct display in IE\n}\n\n// Always hide an element with the `hidden` HTML attribute (from PureCSS).\n// Needed for proper display in IE 10-.\n[hidden] {\n  display: none !important;\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n$grays: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$grays: map-merge(\n  (\n    \"100\": $gray-100,\n    \"200\": $gray-200,\n    \"300\": $gray-300,\n    \"400\": $gray-400,\n    \"500\": $gray-500,\n    \"600\": $gray-600,\n    \"700\": $gray-700,\n    \"800\": $gray-800,\n    \"900\": $gray-900\n  ),\n  $grays\n);\n\n$blue:    #007bff !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #e83e8c !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #28a745 !default;\n$teal:    #20c997 !default;\n$cyan:    #17a2b8 !default;\n\n$colors: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$colors: map-merge(\n  (\n    \"blue\":       $blue,\n    \"indigo\":     $indigo,\n    \"purple\":     $purple,\n    \"pink\":       $pink,\n    \"red\":        $red,\n    \"orange\":     $orange,\n    \"yellow\":     $yellow,\n    \"green\":      $green,\n    \"teal\":       $teal,\n    \"cyan\":       $cyan,\n    \"white\":      $white,\n    \"gray\":       $gray-600,\n    \"gray-dark\":  $gray-800\n  ),\n  $colors\n);\n\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$theme-colors: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$theme-colors: map-merge(\n  (\n    \"primary\":    $primary,\n    \"secondary\":  $secondary,\n    \"success\":    $success,\n    \"info\":       $info,\n    \"warning\":    $warning,\n    \"danger\":     $danger,\n    \"light\":      $light,\n    \"dark\":       $dark\n  ),\n  $theme-colors\n);\n\n// Set a specific jump point for requesting color jumps\n$theme-color-interval:      8% !default;\n\n// The yiq lightness value that determines when the lightness of color changes from \"dark\" to \"light\". Acceptable values are between 0 and 255.\n$yiq-contrasted-threshold:  150 !default;\n\n// Customize the light and dark text colors for use in our YIQ color contrast function.\n$yiq-text-dark:             $gray-900 !default;\n$yiq-text-light:            $white !default;\n\n// Characters which are escaped by the escape-svg function\n$escaped-characters: (\n  (\"<\",\"%3c\"),\n  (\">\",\"%3e\"),\n  (\"#\",\"%23\"),\n) !default;\n\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                                true !default;\n$enable-rounded:                              true !default;\n$enable-shadows:                              false !default;\n$enable-gradients:                            false !default;\n$enable-transitions:                          true !default;\n$enable-prefers-reduced-motion-media-query:   true !default;\n$enable-hover-media-query:                    false !default; // Deprecated, no longer affects any compiled CSS\n$enable-grid-classes:                         true !default;\n$enable-pointer-cursor-for-buttons:           true !default;\n$enable-print-styles:                         true !default;\n$enable-responsive-font-sizes:                false !default;\n$enable-validation-icons:                     true !default;\n$enable-deprecation-messages:                 true !default;\n\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer: 1rem !default;\n$spacers: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$spacers: map-merge(\n  (\n    0: 0,\n    1: ($spacer * .25),\n    2: ($spacer * .5),\n    3: $spacer,\n    4: ($spacer * 1.5),\n    5: ($spacer * 3)\n  ),\n  $spacers\n);\n\n// This variable affects the `.h-*` and `.w-*` classes.\n$sizes: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$sizes: map-merge(\n  (\n    25: 25%,\n    50: 50%,\n    75: 75%,\n    100: 100%,\n    auto: auto\n  ),\n  $sizes\n);\n\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              theme-color(\"primary\") !default;\n$link-decoration:                         none !default;\n$link-hover-color:                        darken($link-color, 15%) !default;\n$link-hover-decoration:                   underline !default;\n// Darken percentage for links with `.text-*` class (e.g. `.text-success`)\n$emphasized-link-hover-darken-percentage: 15% !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px\n) !default;\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           30px !default;\n$grid-row-columns:            6 !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$line-height-lg:              1.5 !default;\n$line-height-sm:              1.5 !default;\n\n$border-width:                1px !default;\n$border-color:                $gray-300 !default;\n\n$border-radius:               .25rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-sm:            .2rem !default;\n\n$rounded-pill:                50rem !default;\n\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n\n$component-active-color:      $white !default;\n$component-active-bg:         theme-color(\"primary\") !default;\n\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n$transition-collapse:         height .35s ease !default;\n\n$embed-responsive-aspect-ratios: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$embed-responsive-aspect-ratios: join(\n  (\n    (21 9),\n    (16 9),\n    (4 3),\n    (1 1),\n  ),\n  $embed-responsive-aspect-ratios\n);\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n$font-family-base:            $font-family-sans-serif !default;\n// stylelint-enable value-keyword-case\n\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-lg:                $font-size-base * 1.25 !default;\n$font-size-sm:                $font-size-base * .875 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n$line-height-base:            1.5 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n\n$headings-margin-bottom:      $spacer / 2 !default;\n$headings-font-family:        null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              null !default;\n\n$display1-size:               6rem !default;\n$display2-size:               5.5rem !default;\n$display3-size:               4.5rem !default;\n$display4-size:               3.5rem !default;\n\n$display1-weight:             300 !default;\n$display2-weight:             300 !default;\n$display3-weight:             300 !default;\n$display4-weight:             300 !default;\n$display-line-height:         $headings-line-height !default;\n\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             80% !default;\n\n$text-muted:                  $gray-600 !default;\n\n$blockquote-small-color:      $gray-600 !default;\n$blockquote-small-font-size:  $small-font-size !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n\n$hr-border-color:             rgba($black, .1) !default;\n$hr-border-width:             $border-width !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$kbd-box-shadow:              inset 0 -.1rem 0 rgba($black, .25) !default;\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-bg:                     #fcf8e3 !default;\n\n$hr-margin-y:                 $spacer !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n$table-cell-padding:          .75rem !default;\n$table-cell-padding-sm:       .3rem !default;\n\n$table-color:                 $body-color !default;\n$table-bg:                    null !default;\n$table-accent-bg:             rgba($black, .05) !default;\n$table-hover-color:           $table-color !default;\n$table-hover-bg:              rgba($black, .075) !default;\n$table-active-bg:             $table-hover-bg !default;\n\n$table-border-width:          $border-width !default;\n$table-border-color:          $border-color !default;\n\n$table-head-bg:               $gray-200 !default;\n$table-head-color:            $gray-700 !default;\n\n$table-dark-color:            $white !default;\n$table-dark-bg:               $gray-800 !default;\n$table-dark-accent-bg:        rgba($white, .05) !default;\n$table-dark-hover-color:      $table-dark-color !default;\n$table-dark-hover-bg:         rgba($white, .075) !default;\n$table-dark-border-color:     lighten($table-dark-bg, 7.5%) !default;\n\n$table-striped-order:         odd !default;\n\n$table-caption-color:         $text-muted !default;\n\n$table-bg-level:              -9 !default;\n$table-border-level:          -6 !default;\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:       .2rem !default;\n$input-btn-focus-color:       rgba($component-active-bg, .25) !default;\n$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n$input-btn-line-height-sm:    $line-height-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n$input-btn-line-height-lg:    $line-height-lg !default;\n\n$input-btn-border-width:      $border-width !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n$btn-line-height-sm:          $input-btn-line-height-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n$btn-line-height-lg:          $input-btn-line-height-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-disabled-color:     $gray-600 !default;\n\n$btn-block-spacing-y:         .5rem !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n\n// Forms\n\n$label-margin-bottom:                   .5rem !default;\n\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n$input-line-height-sm:                  $input-btn-line-height-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n$input-line-height-lg:                  $input-btn-line-height-lg !default;\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n\n$input-color:                           $gray-700 !default;\n$input-border-color:                    $gray-400 !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              lighten($component-active-bg, 25%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               $gray-600 !default;\n$input-plaintext-color:                 $body-color !default;\n\n$input-height-border:                   $input-border-width * 2 !default;\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height-sm * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height-lg * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-text-margin-top:                  .25rem !default;\n\n$form-check-input-gutter:               1.25rem !default;\n$form-check-input-margin-y:             .3rem !default;\n$form-check-input-margin-x:             .25rem !default;\n\n$form-check-inline-margin-x:            .75rem !default;\n$form-check-inline-input-margin-x:      .3125rem !default;\n\n$form-grid-gutter-width:                10px !default;\n$form-group-margin-bottom:              1rem !default;\n\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n\n$custom-forms-transition:               background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$custom-control-gutter:                 .5rem !default;\n$custom-control-spacer-x:               1rem !default;\n$custom-control-cursor:                 null !default;\n\n$custom-control-indicator-size:         1rem !default;\n$custom-control-indicator-bg:           $input-bg !default;\n\n$custom-control-indicator-bg-size:      50% 50% !default;\n$custom-control-indicator-box-shadow:   $input-box-shadow !default;\n$custom-control-indicator-border-color: $gray-500 !default;\n$custom-control-indicator-border-width: $input-border-width !default;\n\n$custom-control-label-color:            null !default;\n\n$custom-control-indicator-disabled-bg:          $input-disabled-bg !default;\n$custom-control-label-disabled-color:           $gray-600 !default;\n\n$custom-control-indicator-checked-color:        $component-active-color !default;\n$custom-control-indicator-checked-bg:           $component-active-bg !default;\n$custom-control-indicator-checked-disabled-bg:  rgba(theme-color(\"primary\"), .5) !default;\n$custom-control-indicator-checked-box-shadow:   none !default;\n$custom-control-indicator-checked-border-color: $custom-control-indicator-checked-bg !default;\n\n$custom-control-indicator-focus-box-shadow:     $input-focus-box-shadow !default;\n$custom-control-indicator-focus-border-color:   $input-focus-border-color !default;\n\n$custom-control-indicator-active-color:         $component-active-color !default;\n$custom-control-indicator-active-bg:            lighten($component-active-bg, 35%) !default;\n$custom-control-indicator-active-box-shadow:    none !default;\n$custom-control-indicator-active-border-color:  $custom-control-indicator-active-bg !default;\n\n$custom-checkbox-indicator-border-radius:       $border-radius !default;\n$custom-checkbox-indicator-icon-checked:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$custom-control-indicator-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/></svg>\") !default;\n\n$custom-checkbox-indicator-indeterminate-bg:           $component-active-bg !default;\n$custom-checkbox-indicator-indeterminate-color:        $custom-control-indicator-checked-color !default;\n$custom-checkbox-indicator-icon-indeterminate:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'><path stroke='#{$custom-checkbox-indicator-indeterminate-color}' d='M0 2h4'/></svg>\") !default;\n$custom-checkbox-indicator-indeterminate-box-shadow:   none !default;\n$custom-checkbox-indicator-indeterminate-border-color: $custom-checkbox-indicator-indeterminate-bg !default;\n\n$custom-radio-indicator-border-radius:          50% !default;\n$custom-radio-indicator-icon-checked:           url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'><circle r='3' fill='#{$custom-control-indicator-checked-color}'/></svg>\") !default;\n\n$custom-switch-width:                           $custom-control-indicator-size * 1.75 !default;\n$custom-switch-indicator-border-radius:         $custom-control-indicator-size / 2 !default;\n$custom-switch-indicator-size:                  subtract($custom-control-indicator-size, $custom-control-indicator-border-width * 4) !default;\n\n$custom-select-padding-y:           $input-padding-y !default;\n$custom-select-padding-x:           $input-padding-x !default;\n$custom-select-font-family:         $input-font-family !default;\n$custom-select-font-size:           $input-font-size !default;\n$custom-select-height:              $input-height !default;\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$custom-select-font-weight:         $input-font-weight !default;\n$custom-select-line-height:         $input-line-height !default;\n$custom-select-color:               $input-color !default;\n$custom-select-disabled-color:      $gray-600 !default;\n$custom-select-bg:                  $input-bg !default;\n$custom-select-disabled-bg:         $gray-200 !default;\n$custom-select-bg-size:             8px 10px !default; // In pixels because image dimensions\n$custom-select-indicator-color:     $gray-800 !default;\n$custom-select-indicator:           url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'><path fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>\") !default;\n$custom-select-background:          escape-svg($custom-select-indicator) no-repeat right $custom-select-padding-x center / $custom-select-bg-size !default; // Used so we can have multiple background elements (e.g., arrow and feedback icon)\n\n$custom-select-feedback-icon-padding-right: add(1em * .75, (2 * $custom-select-padding-y * .75) + $custom-select-padding-x + $custom-select-indicator-padding) !default;\n$custom-select-feedback-icon-position:      center right ($custom-select-padding-x + $custom-select-indicator-padding) !default;\n$custom-select-feedback-icon-size:          $input-height-inner-half $input-height-inner-half !default;\n\n$custom-select-border-width:        $input-border-width !default;\n$custom-select-border-color:        $input-border-color !default;\n$custom-select-border-radius:       $border-radius !default;\n$custom-select-box-shadow:          inset 0 1px 2px rgba($black, .075) !default;\n\n$custom-select-focus-border-color:  $input-focus-border-color !default;\n$custom-select-focus-width:         $input-focus-width !default;\n$custom-select-focus-box-shadow:    0 0 0 $custom-select-focus-width $input-btn-focus-color !default;\n\n$custom-select-padding-y-sm:        $input-padding-y-sm !default;\n$custom-select-padding-x-sm:        $input-padding-x-sm !default;\n$custom-select-font-size-sm:        $input-font-size-sm !default;\n$custom-select-height-sm:           $input-height-sm !default;\n\n$custom-select-padding-y-lg:        $input-padding-y-lg !default;\n$custom-select-padding-x-lg:        $input-padding-x-lg !default;\n$custom-select-font-size-lg:        $input-font-size-lg !default;\n$custom-select-height-lg:           $input-height-lg !default;\n\n$custom-range-track-width:          100% !default;\n$custom-range-track-height:         .5rem !default;\n$custom-range-track-cursor:         pointer !default;\n$custom-range-track-bg:             $gray-300 !default;\n$custom-range-track-border-radius:  1rem !default;\n$custom-range-track-box-shadow:     inset 0 .25rem .25rem rgba($black, .1) !default;\n\n$custom-range-thumb-width:                   1rem !default;\n$custom-range-thumb-height:                  $custom-range-thumb-width !default;\n$custom-range-thumb-bg:                      $component-active-bg !default;\n$custom-range-thumb-border:                  0 !default;\n$custom-range-thumb-border-radius:           1rem !default;\n$custom-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$custom-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$custom-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in IE/Edge\n$custom-range-thumb-active-bg:               lighten($component-active-bg, 35%) !default;\n$custom-range-thumb-disabled-bg:             $gray-500 !default;\n\n$custom-file-height:                $input-height !default;\n$custom-file-height-inner:          $input-height-inner !default;\n$custom-file-focus-border-color:    $input-focus-border-color !default;\n$custom-file-focus-box-shadow:      $input-focus-box-shadow !default;\n$custom-file-disabled-bg:           $input-disabled-bg !default;\n\n$custom-file-padding-y:             $input-padding-y !default;\n$custom-file-padding-x:             $input-padding-x !default;\n$custom-file-line-height:           $input-line-height !default;\n$custom-file-font-family:           $input-font-family !default;\n$custom-file-font-weight:           $input-font-weight !default;\n$custom-file-color:                 $input-color !default;\n$custom-file-bg:                    $input-bg !default;\n$custom-file-border-width:          $input-border-width !default;\n$custom-file-border-color:          $input-border-color !default;\n$custom-file-border-radius:         $input-border-radius !default;\n$custom-file-box-shadow:            $input-box-shadow !default;\n$custom-file-button-color:          $custom-file-color !default;\n$custom-file-button-bg:             $input-group-addon-bg !default;\n$custom-file-text: (\n  en: \"Browse\"\n) !default;\n\n\n// Form validation\n\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $small-font-size !default;\n$form-feedback-valid-color:         theme-color(\"success\") !default;\n$form-feedback-invalid-color:       theme-color(\"danger\") !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}' viewBox='0 0 12 12'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;\n\n$form-validation-states: () !default;\n// stylelint-disable-next-line scss/dollar-variable-default\n$form-validation-states: map-merge(\n  (\n    \"valid\": (\n      \"color\": $form-feedback-valid-color,\n      \"icon\": $form-feedback-icon-valid\n    ),\n    \"invalid\": (\n      \"color\": $form-feedback-invalid-color,\n      \"icon\": $form-feedback-icon-invalid\n    ),\n  ),\n  $form-validation-states\n);\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-modal:                      1050 !default;\n$zindex-popover:                    1060 !default;\n$zindex-tooltip:                    1070 !default;\n\n\n// Navs\n\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             $gray-300 !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n$nav-divider-color:                 $gray-200 !default;\n$nav-divider-margin-y:              $spacer / 2 !default;\n\n\n// Navbar\n\n$navbar-padding-y:                  $spacer / 2 !default;\n$navbar-padding-x:                  $spacer !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n\n$navbar-dark-color:                 rgba($white, .5) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n\n$navbar-light-color:                rgba($black, .5) !default;\n$navbar-light-hover-color:          rgba($black, .7) !default;\n$navbar-light-active-color:         rgba($black, .9) !default;\n$navbar-light-disabled-color:       rgba($black, .3) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba($black, .1) !default;\n\n$navbar-light-brand-color:                $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:          $navbar-light-active-color !default;\n$navbar-dark-brand-color:                 $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    $body-color !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black, .15) !default;\n$dropdown-border-radius:            $border-radius !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;\n$dropdown-divider-bg:               $gray-200 !default;\n$dropdown-divider-margin-y:         $nav-divider-margin-y !default;\n$dropdown-box-shadow:               0 .5rem 1rem rgba($black, .175) !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         darken($gray-900, 5%) !default;\n$dropdown-link-hover-bg:            $gray-100 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-600 !default;\n\n$dropdown-item-padding-y:           .25rem !default;\n$dropdown-item-padding-x:           1.5rem !default;\n\n$dropdown-header-color:             $gray-600 !default;\n\n\n// Pagination\n\n$pagination-padding-y:              .5rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n$pagination-line-height:            1.25 !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-color:           $gray-300 !default;\n\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     $gray-300 !default;\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $pagination-active-bg !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  $gray-300 !default;\n\n\n// Jumbotron\n\n$jumbotron-padding:                 2rem !default;\n$jumbotron-color:                   null !default;\n$jumbotron-bg:                      $gray-200 !default;\n\n\n// Cards\n\n$card-spacer-y:                     .75rem !default;\n$card-spacer-x:                     1.25rem !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black, .125) !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           $white !default;\n\n$card-img-overlay-padding:          1.25rem !default;\n\n$card-group-margin:                 $grid-gutter-width / 2 !default;\n$card-deck-margin:                  $card-group-margin !default;\n\n$card-columns-count:                3 !default;\n$card-columns-gap:                  1.25rem !default;\n$card-columns-margin:               $card-spacer-y !default;\n\n\n// Tooltips\n\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-border-radius:             $border-radius !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 .25rem !default;\n$tooltip-padding-x:                 .5rem !default;\n$tooltip-margin:                    0 !default;\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n\n// Form tooltips must come after regular tooltips\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   $line-height-base !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n\n\n// Popovers\n\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black, .2) !default;\n$popover-border-radius:             $border-radius-lg !default;\n$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;\n$popover-box-shadow:                0 .25rem .5rem rgba($black, .2) !default;\n\n$popover-header-bg:                 darken($popover-bg, 3%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          .75rem !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $popover-header-padding-y !default;\n$popover-body-padding-x:            $popover-header-padding-x !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n\n\n// Toasts\n\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .25rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba($white, .85) !default;\n$toast-border-width:                1px !default;\n$toast-border-color:                rgba(0, 0, 0, .1) !default;\n$toast-border-radius:               .25rem !default;\n$toast-box-shadow:                  0 .25rem .75rem rgba($black, .1) !default;\n\n$toast-header-color:                $gray-600 !default;\n$toast-header-background-color:     rgba($white, .85) !default;\n$toast-header-border-color:         rgba(0, 0, 0, .05) !default;\n\n\n// Badges\n\n$badge-font-size:                   75% !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-padding-y:                   .25em !default;\n$badge-padding-x:                   .4em !default;\n$badge-border-radius:               $border-radius !default;\n\n$badge-transition:                  $btn-transition !default;\n$badge-focus-width:                 $input-btn-focus-width !default;\n\n$badge-pill-padding-x:              .6em !default;\n// Use a higher than normal value to ensure completely rounded edges when\n// customizing padding or font-size on labels.\n$badge-pill-border-radius:          10rem !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:               1rem !default;\n\n// Margin between elements in footer, must be lower than or equal to 2 * $modal-inner-padding\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black, .2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-border-radius:       $border-radius-lg !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       0 .25rem .5rem rgba($black, .5) !default;\n$modal-content-box-shadow-sm-up:    0 .5rem 1rem rgba($black, .5) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $border-color !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding-y:            1rem !default;\n$modal-header-padding-x:            1rem !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-xl:                          1140px !default;\n$modal-lg:                          800px !default;\n$modal-md:                          500px !default;\n$modal-sm:                          300px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-y:                   .75rem !default;\n$alert-padding-x:                   1.25rem !default;\n$alert-margin-bottom:               1rem !default;\n$alert-border-radius:               $border-radius !default;\n$alert-link-font-weight:            $font-weight-bold !default;\n$alert-border-width:                $border-width !default;\n\n$alert-bg-level:                    -10 !default;\n$alert-border-level:                -9 !default;\n$alert-color-level:                 6 !default;\n\n\n// Progress bars\n\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               inset 0 .1rem .1rem rgba($black, .1) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   theme-color(\"primary\") !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n\n\n// List group\n\n$list-group-color:                  null !default;\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black, .125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         .75rem !default;\n$list-group-item-padding-x:         1.25rem !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            $gray-300 !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              0 1px 2px rgba($black, .075) !default;\n\n\n// Figures\n\n$figure-caption-font-size:          90% !default;\n$figure-caption-color:              $gray-600 !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-font-size:              null !default;\n\n$breadcrumb-padding-y:              .75rem !default;\n$breadcrumb-padding-x:              1rem !default;\n$breadcrumb-item-padding:           .5rem !default;\n\n$breadcrumb-margin-bottom:          1rem !default;\n\n$breadcrumb-bg:                     $gray-200 !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n\n$breadcrumb-border-radius:          $border-radius !default;\n\n\n// Carousel\n\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n\n$carousel-control-icon-width:        20px !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' width='8' height='8' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' width='8' height='8' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n\n\n// Spinners\n\n$spinner-width:         2rem !default;\n$spinner-height:        $spinner-width !default;\n$spinner-border-width:  .25em !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n\n\n// Close\n\n$close-font-size:                   $font-size-base * 1.5 !default;\n$close-font-weight:                 $font-weight-bold !default;\n$close-color:                       $black !default;\n$close-text-shadow:                 0 1px 0 $white !default;\n\n\n// Code\n\n$code-font-size:                    87.5% !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .2rem !default;\n$kbd-padding-x:                     .4rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         $gray-900 !default;\n$pre-scrollable-max-height:         340px !default;\n\n\n// Utilities\n\n$displays: none, inline, inline-block, block, table, table-row, table-cell, flex, inline-flex !default;\n$overflows: auto, hidden !default;\n$positions: static, relative, absolute, fixed, sticky !default;\n\n\n// Printing\n\n$print-page-size:                   a3 !default;\n$print-body-min-width:              map-get($grid-breakpoints, \"lg\") !default;\n","// stylelint-disable property-blacklist, scss/dollar-variable-default\n\n// SCSS RFS mixin\n//\n// Automated font-resizing\n//\n// See https://github.com/twbs/rfs\n\n// Configuration\n\n// Base font size\n$rfs-base-font-size: 1.25rem !default;\n$rfs-font-size-unit: rem !default;\n\n// Breakpoint at where font-size starts decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n// Resize font-size based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != \"number\" or $rfs-factor <= 1 {\n  @error \"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\";\n}\n\n// Generate enable or disable classes. Possibilities: false, \"enable\" or \"disable\"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-responsive-font-sizes to false\n$enable-responsive-font-sizes: true !default;\n\n// Cache $rfs-base-font-size unit\n$rfs-base-font-size-unit: unit($rfs-base-font-size);\n\n// Remove px-unit from $rfs-base-font-size for calculations\n@if $rfs-base-font-size-unit == \"px\" {\n  $rfs-base-font-size: $rfs-base-font-size / ($rfs-base-font-size * 0 + 1);\n}\n@else if $rfs-base-font-size-unit == \"rem\" {\n  $rfs-base-font-size: $rfs-base-font-size / ($rfs-base-font-size * 0 + 1 / $rfs-rem-value);\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == \"px\" {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == \"rem\" or $rfs-breakpoint-unit-cache == \"em\" {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1 / $rfs-rem-value);\n}\n\n// Responsive font-size mixin\n@mixin rfs($fs, $important: false) {\n  // Cache $fs unit\n  $fs-unit: if(type-of($fs) == \"number\", unit($fs), false);\n\n  // Add !important suffix if needed\n  $rfs-suffix: if($important, \" !important\", \"\");\n\n  // If $fs isn't a number (like inherit) or $fs has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n  @if not $fs-unit or $fs-unit != \"\" and $fs-unit != \"px\" and $fs-unit != \"rem\" or $fs == 0 {\n    font-size: #{$fs}#{$rfs-suffix};\n  }\n  @else {\n    // Variables for storing static and fluid rescaling\n    $rfs-static: null;\n    $rfs-fluid: null;\n\n    // Remove px-unit from $fs for calculations\n    @if $fs-unit == \"px\" {\n      $fs: $fs / ($fs * 0 + 1);\n    }\n    @else if $fs-unit == \"rem\" {\n      $fs: $fs / ($fs * 0 + 1 / $rfs-rem-value);\n    }\n\n    // Set default font-size\n    @if $rfs-font-size-unit == rem {\n      $rfs-static: #{$fs / $rfs-rem-value}rem#{$rfs-suffix};\n    }\n    @else if $rfs-font-size-unit == px {\n      $rfs-static: #{$fs}px#{$rfs-suffix};\n    }\n    @else {\n      @error \"`#{$rfs-font-size-unit}` is not a valid unit for $rfs-font-size-unit. Use `px` or `rem`.\";\n    }\n\n    // Only add media query if font-size is bigger as the minimum font-size\n    // If $rfs-factor == 1, no rescaling will take place\n    @if $fs > $rfs-base-font-size and $enable-responsive-font-sizes {\n      $min-width: null;\n      $variable-unit: null;\n\n      // Calculate minimum font-size for given font-size\n      $fs-min: $rfs-base-font-size + ($fs - $rfs-base-font-size) / $rfs-factor;\n\n      // Calculate difference between given font-size and minimum font-size for given font-size\n      $fs-diff: $fs - $fs-min;\n\n      // Base font-size formatting\n      // No need to check if the unit is valid, because we did that before\n      $min-width: if($rfs-font-size-unit == rem, #{$fs-min / $rfs-rem-value}rem, #{$fs-min}px);\n\n      // If two-dimensional, use smallest of screen width and height\n      $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n      // Calculate the variable width between 0 and $rfs-breakpoint\n      $variable-width: #{$fs-diff * 100 / $rfs-breakpoint}#{$variable-unit};\n\n      // Set the calculated font-size.\n      $rfs-fluid: calc(#{$min-width} + #{$variable-width}) #{$rfs-suffix};\n    }\n\n    // Rendering\n    @if $rfs-fluid == null {\n      // Only render static font-size if no fluid font-size is available\n      font-size: $rfs-static;\n    }\n    @else {\n      $mq-value: null;\n\n      // RFS breakpoint formatting\n      @if $rfs-breakpoint-unit == em or $rfs-breakpoint-unit == rem {\n        $mq-value: #{$rfs-breakpoint / $rfs-rem-value}#{$rfs-breakpoint-unit};\n      }\n      @else if $rfs-breakpoint-unit == px {\n        $mq-value: #{$rfs-breakpoint}px;\n      }\n      @else {\n        @error \"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\";\n      }\n\n      @if $rfs-class == \"disable\" {\n        // Adding an extra class increases specificity,\n        // which prevents the media query to override the font size\n        &,\n        .disable-responsive-font-size &,\n        &.disable-responsive-font-size {\n          font-size: $rfs-static;\n        }\n      }\n      @else {\n        font-size: $rfs-static;\n      }\n\n      @if $rfs-two-dimensional {\n        @media (max-width: #{$mq-value}), (max-height: #{$mq-value}) {\n          @if $rfs-class == \"enable\" {\n            .enable-responsive-font-size &,\n            &.enable-responsive-font-size {\n              font-size: $rfs-fluid;\n            }\n          }\n          @else {\n            font-size: $rfs-fluid;\n          }\n\n          @if $rfs-safari-iframe-resize-bug-fix {\n            // stylelint-disable-next-line length-zero-no-unit\n            min-width: 0vw;\n          }\n        }\n      }\n      @else {\n        @media (max-width: #{$mq-value}) {\n          @if $rfs-class == \"enable\" {\n            .enable-responsive-font-size &,\n            &.enable-responsive-font-size {\n              font-size: $rfs-fluid;\n            }\n          }\n          @else {\n            font-size: $rfs-fluid;\n          }\n\n          @if $rfs-safari-iframe-resize-bug-fix {\n            // stylelint-disable-next-line length-zero-no-unit\n            min-width: 0vw;\n          }\n        }\n      }\n    }\n  }\n}\n\n// The font-size & responsive-font-size mixin uses RFS to rescale font sizes\n@mixin font-size($fs, $important: false) {\n  @include rfs($fs, $important);\n}\n\n@mixin responsive-font-size($fs, $important: false) {\n  @include rfs($fs, $important);\n}\n","// Hover mixin and `$enable-hover-media-query` are deprecated.\n//\n// Originally added during our alphas and maintained during betas, this mixin was\n// designed to prevent `:hover` stickiness on iOS-an issue where hover styles\n// would persist after initial touch.\n//\n// For backward compatibility, we've kept these mixins and updated them to\n// always return their regular pseudo-classes instead of a shimmed media query.\n//\n// Issue: https://github.com/twbs/bootstrap/issues/25195\n\n@mixin hover() {\n  &:hover { @content; }\n}\n\n@mixin hover-focus() {\n  &:hover,\n  &:focus {\n    @content;\n  }\n}\n\n@mixin plain-hover-focus() {\n  &,\n  &:hover,\n  &:focus {\n    @content;\n  }\n}\n\n@mixin hover-focus-active() {\n  &:hover,\n  &:focus,\n  &:active {\n    @content;\n  }\n}\n","// stylelint-disable declaration-no-important, selector-list-comma-newline-after\n\n//\n// Headings\n//\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: $headings-margin-bottom;\n  font-family: $headings-font-family;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: $headings-color;\n}\n\nh1, .h1 { @include font-size($h1-font-size); }\nh2, .h2 { @include font-size($h2-font-size); }\nh3, .h3 { @include font-size($h3-font-size); }\nh4, .h4 { @include font-size($h4-font-size); }\nh5, .h5 { @include font-size($h5-font-size); }\nh6, .h6 { @include font-size($h6-font-size); }\n\n.lead {\n  @include font-size($lead-font-size);\n  font-weight: $lead-font-weight;\n}\n\n// Type display classes\n.display-1 {\n  @include font-size($display1-size);\n  font-weight: $display1-weight;\n  line-height: $display-line-height;\n}\n.display-2 {\n  @include font-size($display2-size);\n  font-weight: $display2-weight;\n  line-height: $display-line-height;\n}\n.display-3 {\n  @include font-size($display3-size);\n  font-weight: $display3-weight;\n  line-height: $display-line-height;\n}\n.display-4 {\n  @include font-size($display4-size);\n  font-weight: $display4-weight;\n  line-height: $display-line-height;\n}\n\n\n//\n// Horizontal rules\n//\n\nhr {\n  margin-top: $hr-margin-y;\n  margin-bottom: $hr-margin-y;\n  border: 0;\n  border-top: $hr-border-width solid $hr-border-color;\n}\n\n\n//\n// Emphasis\n//\n\nsmall,\n.small {\n  @include font-size($small-font-size);\n  font-weight: $font-weight-normal;\n}\n\nmark,\n.mark {\n  padding: $mark-padding;\n  background-color: $mark-bg;\n}\n\n\n//\n// Lists\n//\n\n.list-unstyled {\n  @include list-unstyled();\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled();\n}\n.list-inline-item {\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: $list-inline-padding;\n  }\n}\n\n\n//\n// Misc\n//\n\n// Builds on `abbr`\n.initialism {\n  @include font-size(90%);\n  text-transform: uppercase;\n}\n\n// Blockquotes\n.blockquote {\n  margin-bottom: $spacer;\n  @include font-size($blockquote-font-size);\n}\n\n.blockquote-footer {\n  display: block;\n  @include font-size($blockquote-small-font-size);\n  color: $blockquote-small-color;\n\n  &::before {\n    content: \"\\2014\\00A0\"; // em dash, nbsp\n  }\n}\n","// Lists\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n@mixin list-unstyled() {\n  padding-left: 0;\n  list-style: none;\n}\n","// Responsive images (ensure images don't scale beyond their parents)\n//\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\n// We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n// which weren't expecting the images within themselves to be involuntarily resized.\n// See also https://github.com/twbs/bootstrap/issues/18178\n.img-fluid {\n  @include img-fluid();\n}\n\n\n// Image thumbnails\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  background-color: $thumbnail-bg;\n  border: $thumbnail-border-width solid $thumbnail-border-color;\n  @include border-radius($thumbnail-border-radius);\n  @include box-shadow($thumbnail-box-shadow);\n\n  // Keep them at most 100% wide\n  @include img-fluid();\n}\n\n//\n// Figures\n//\n\n.figure {\n  // Ensures the caption's text aligns with the image.\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: $spacer / 2;\n  line-height: 1;\n}\n\n.figure-caption {\n  @include font-size($figure-caption-font-size);\n  color: $figure-caption-color;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n\n@mixin img-fluid() {\n  // Part 1: Set a maximum relative to the parent\n  max-width: 100%;\n  // Part 2: Override the height to auto, otherwise images will be stretched\n  // when setting a width and height attribute on the img element.\n  height: auto;\n}\n\n\n// Retina image\n//\n// Short retina mixin for setting background-image and -size.\n\n@mixin img-retina($file-1x, $file-2x, $width-1x, $height-1x) {\n  background-image: url($file-1x);\n\n  // Autoprefixer takes care of adding -webkit-min-device-pixel-ratio and -o-min-device-pixel-ratio,\n  // but doesn't convert dppx=>dpi.\n  // There's no such thing as unprefixed min-device-pixel-ratio since it's nonstandard.\n  // Compatibility info: https://caniuse.com/#feat=css-media-resolution\n  @media only screen and (min-resolution: 192dpi), // IE9-11 don't support dppx\n    only screen and (min-resolution: 2dppx) { // Standardized\n    background-image: url($file-2x);\n    background-size: $width-1x $height-1x;\n  }\n  @include deprecate(\"`img-retina()`\", \"v4.3.0\", \"v5\");\n}\n","// stylelint-disable property-blacklist\n// Single side border-radius\n\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: $radius;\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: $radius;\n    border-top-right-radius: $radius;\n  }\n}\n\n@mixin border-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: $radius;\n    border-bottom-right-radius: $radius;\n  }\n}\n\n@mixin border-bottom-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: $radius;\n    border-bottom-left-radius: $radius;\n  }\n}\n\n@mixin border-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: $radius;\n    border-bottom-left-radius: $radius;\n  }\n}\n\n@mixin border-top-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: $radius;\n  }\n}\n\n@mixin border-top-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: $radius;\n  }\n}\n\n@mixin border-bottom-right-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: $radius;\n  }\n}\n\n@mixin border-bottom-left-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: $radius;\n  }\n}\n","// Inline code\ncode {\n  @include font-size($code-font-size);\n  color: $code-color;\n  word-wrap: break-word;\n\n  // Streamline the style when inside anchors to avoid broken underline and more\n  a > & {\n    color: inherit;\n  }\n}\n\n// User input typically entered via keyboard\nkbd {\n  padding: $kbd-padding-y $kbd-padding-x;\n  @include font-size($kbd-font-size);\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  @include border-radius($border-radius-sm);\n  @include box-shadow($kbd-box-shadow);\n\n  kbd {\n    padding: 0;\n    @include font-size(100%);\n    font-weight: $nested-kbd-font-weight;\n    @include box-shadow(none);\n  }\n}\n\n// Blocks of code\npre {\n  display: block;\n  @include font-size($code-font-size);\n  color: $pre-color;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    @include font-size(inherit);\n    color: inherit;\n    word-break: normal;\n  }\n}\n\n// Enable scrollable blocks of code\n.pre-scrollable {\n  max-height: $pre-scrollable-max-height;\n  overflow-y: scroll;\n}\n","// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-grid-classes {\n  // Single container class with breakpoint max-widths\n  .container {\n    @include make-container();\n    @include make-container-max-widths();\n  }\n\n  // 100% wide container at all breakpoints\n  .container-fluid {\n    @include make-container();\n  }\n\n  // Responsive containers that are 100% wide until a breakpoint\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    .container-#{$breakpoint} {\n      @extend .container-fluid;\n    }\n\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\n      %responsive-container-#{$breakpoint} {\n        max-width: $container-max-width;\n      }\n\n      @each $name, $width in $grid-breakpoints {\n        @if ($container-max-width > $width or $breakpoint == $name) {\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\n            @extend %responsive-container-#{$breakpoint};\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Row\n//\n// Rows contain your columns.\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n  }\n\n  // Remove the negative margin from default .row, then the horizontal padding\n  // from all immediate children columns (to prevent runaway style inheritance).\n  .no-gutters {\n    margin-right: 0;\n    margin-left: 0;\n\n    > .col,\n    > [class*=\"col-\"] {\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }\n}\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","/// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-container($gutter: $grid-gutter-width) {\n  width: 100%;\n  padding-right: $gutter / 2;\n  padding-left: $gutter / 2;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n\n// For each breakpoint, define the maximum width of the container in a media query\n@mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint, $container-max-width in $max-widths {\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      max-width: $container-max-width;\n    }\n  }\n}\n\n@mixin make-row($gutter: $grid-gutter-width) {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -$gutter / 2;\n  margin-left: -$gutter / 2;\n}\n\n@mixin make-col-ready($gutter: $grid-gutter-width) {\n  position: relative;\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we use `flex` values\n  // later on to override this initial width.\n  width: 100%;\n  padding-right: $gutter / 2;\n  padding-left: $gutter / 2;\n}\n\n@mixin make-col($size, $columns: $grid-columns) {\n  flex: 0 0 percentage($size / $columns);\n  // Add a `max-width` to ensure content within each column does not blow out\n  // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari\n  // do not appear to require this.\n  max-width: percentage($size / $columns);\n}\n\n@mixin make-col-auto() {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; // Reset earlier grid tiers\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: $size / $columns;\n  margin-left: if($num == 0, 0, percentage($num));\n}\n\n// Row columns\n//\n// Specify on a parent element(e.g., .row) to force immediate children into NN\n// numberof columns. Supports wrapping to new lines, but does not do a Masonry\n// style grid.\n@mixin row-cols($count) {\n  & > * {\n    flex: 0 0 100% / $count;\n    max-width: 100% / $count;\n  }\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n != null and $n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.02px\n// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  $max: breakpoint-max($name, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($name, $breakpoints) {\n      @content;\n    }\n  }\n}\n","// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  // Common properties for all breakpoints\n  %grid-column {\n    position: relative;\n    width: 100%;\n    padding-right: $gutter / 2;\n    padding-left: $gutter / 2;\n  }\n\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    // Allow columns to stretch full width below their breakpoints\n    @for $i from 1 through $columns {\n      .col#{$infix}-#{$i} {\n        @extend %grid-column;\n      }\n    }\n    .col#{$infix},\n    .col#{$infix}-auto {\n      @extend %grid-column;\n    }\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n      }\n\n      @for $i from 1 through $grid-row-columns {\n        .row-cols#{$infix}-#{$i} {\n          @include row-cols($i);\n        }\n      }\n\n      .col#{$infix}-auto {\n        @include make-col-auto();\n      }\n\n      @for $i from 1 through $columns {\n        .col#{$infix}-#{$i} {\n          @include make-col($i, $columns);\n        }\n      }\n\n      .order#{$infix}-first { order: -1; }\n\n      .order#{$infix}-last { order: $columns + 1; }\n\n      @for $i from 0 through $columns {\n        .order#{$infix}-#{$i} { order: $i; }\n      }\n\n      // `$columns - 1` because offsetting by the width of an entire row isn't possible\n      @for $i from 0 through ($columns - 1) {\n        @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\n          .offset#{$infix}-#{$i} {\n            @include make-col-offset($i, $columns);\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Basic Bootstrap table\n//\n\n.table {\n  width: 100%;\n  margin-bottom: $spacer;\n  color: $table-color;\n  background-color: $table-bg; // Reset for nesting within parents with `background-color`.\n\n  th,\n  td {\n    padding: $table-cell-padding;\n    vertical-align: top;\n    border-top: $table-border-width solid $table-border-color;\n  }\n\n  thead th {\n    vertical-align: bottom;\n    border-bottom: (2 * $table-border-width) solid $table-border-color;\n  }\n\n  tbody + tbody {\n    border-top: (2 * $table-border-width) solid $table-border-color;\n  }\n}\n\n\n//\n// Condensed table w/ half padding\n//\n\n.table-sm {\n  th,\n  td {\n    padding: $table-cell-padding-sm;\n  }\n}\n\n\n// Border versions\n//\n// Add or remove borders all around the table and between all the columns.\n\n.table-bordered {\n  border: $table-border-width solid $table-border-color;\n\n  th,\n  td {\n    border: $table-border-width solid $table-border-color;\n  }\n\n  thead {\n    th,\n    td {\n      border-bottom-width: 2 * $table-border-width;\n    }\n  }\n}\n\n.table-borderless {\n  th,\n  td,\n  thead th,\n  tbody + tbody {\n    border: 0;\n  }\n}\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  tbody tr:nth-of-type(#{$table-striped-order}) {\n    background-color: $table-accent-bg;\n  }\n}\n\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  tbody tr {\n    @include hover() {\n      color: $table-hover-color;\n      background-color: $table-hover-bg;\n    }\n  }\n}\n\n\n// Table backgrounds\n//\n// Exact selectors below required to override `.table-striped` and prevent\n// inheritance to nested tables.\n\n@each $color, $value in $theme-colors {\n  @include table-row-variant($color, theme-color-level($color, $table-bg-level), theme-color-level($color, $table-border-level));\n}\n\n@include table-row-variant(active, $table-active-bg);\n\n\n// Dark styles\n//\n// Same table markup, but inverted color scheme: dark background and light text.\n\n// stylelint-disable-next-line no-duplicate-selectors\n.table {\n  .thead-dark {\n    th {\n      color: $table-dark-color;\n      background-color: $table-dark-bg;\n      border-color: $table-dark-border-color;\n    }\n  }\n\n  .thead-light {\n    th {\n      color: $table-head-color;\n      background-color: $table-head-bg;\n      border-color: $table-border-color;\n    }\n  }\n}\n\n.table-dark {\n  color: $table-dark-color;\n  background-color: $table-dark-bg;\n\n  th,\n  td,\n  thead th {\n    border-color: $table-dark-border-color;\n  }\n\n  &.table-bordered {\n    border: 0;\n  }\n\n  &.table-striped {\n    tbody tr:nth-of-type(#{$table-striped-order}) {\n      background-color: $table-dark-accent-bg;\n    }\n  }\n\n  &.table-hover {\n    tbody tr {\n      @include hover() {\n        color: $table-dark-hover-color;\n        background-color: $table-dark-hover-bg;\n      }\n    }\n  }\n}\n\n\n// Responsive tables\n//\n// Generate series of `.table-responsive-*` classes for configuring the screen\n// size of where your table will overflow.\n\n.table-responsive {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        display: block;\n        width: 100%;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n\n        // Prevent double border on horizontal scroll due to use of `display: block;`\n        > .table-bordered {\n          border: 0;\n        }\n      }\n    }\n  }\n}\n","// Tables\n\n@mixin table-row-variant($state, $background, $border: null) {\n  // Exact selectors below required to override `.table-striped` and prevent\n  // inheritance to nested tables.\n  .table-#{$state} {\n    &,\n    > th,\n    > td {\n      background-color: $background;\n    }\n\n    @if $border != null {\n      th,\n      td,\n      thead th,\n      tbody + tbody {\n        border-color: $border;\n      }\n    }\n  }\n\n  // Hover states for `.table-hover`\n  // Note: this is not available for cells or rows within `thead` or `tfoot`.\n  .table-hover {\n    $hover-background: darken($background, 5%);\n\n    .table-#{$state} {\n      @include hover() {\n        background-color: $hover-background;\n\n        > td,\n        > th {\n          background-color: $hover-background;\n        }\n      }\n    }\n  }\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Textual form controls\n//\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: $input-height;\n  padding: $input-padding-y $input-padding-x;\n  font-family: $input-font-family;\n  @include font-size($input-font-size);\n  font-weight: $input-font-weight;\n  line-height: $input-line-height;\n  color: $input-color;\n  background-color: $input-bg;\n  background-clip: padding-box;\n  border: $input-border-width solid $input-border-color;\n\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\n  @include border-radius($input-border-radius, 0);\n\n  @include box-shadow($input-box-shadow);\n  @include transition($input-transition);\n\n  // Unstyle the caret on `<select>`s in IE10+.\n  &::-ms-expand {\n    background-color: transparent;\n    border: 0;\n  }\n\n  // Remove select outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $input-color;\n  }\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  @include form-control-focus($ignore-warning: true);\n\n  // Placeholder\n  &::placeholder {\n    color: $input-placeholder-color;\n    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\n    opacity: 1;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &:disabled,\n  &[readonly] {\n    background-color: $input-disabled-bg;\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\n    opacity: 1;\n  }\n}\n\nselect.form-control {\n  &:focus::-ms-value {\n    // Suppress the nested default white text on blue background highlight given to\n    // the selected option text when the (still closed) <select> receives focus\n    // in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\n    // match the appearance of the native widget.\n    // See https://github.com/twbs/bootstrap/issues/19398.\n    color: $input-color;\n    background-color: $input-bg;\n  }\n}\n\n// Make file inputs better match text inputs by forcing them to new lines.\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n\n//\n// Labels\n//\n\n// For use with horizontal and inline forms, when you need the label (or legend)\n// text to align with the form controls.\n.col-form-label {\n  padding-top: add($input-padding-y, $input-border-width);\n  padding-bottom: add($input-padding-y, $input-border-width);\n  margin-bottom: 0; // Override the `<label>/<legend>` default\n  @include font-size(inherit); // Override the `<legend>` default\n  line-height: $input-line-height;\n}\n\n.col-form-label-lg {\n  padding-top: add($input-padding-y-lg, $input-border-width);\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n}\n\n.col-form-label-sm {\n  padding-top: add($input-padding-y-sm, $input-border-width);\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n}\n\n\n// Readonly controls as plain text\n//\n// Apply class to a readonly input to make it appear like regular plain\n// text (without any border, background color, focus indicator)\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y 0;\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\n  @include font-size($input-font-size);\n  line-height: $input-line-height;\n  color: $input-plaintext-color;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: $input-border-width 0;\n\n  &.form-control-sm,\n  &.form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\n\n.form-control-sm {\n  height: $input-height-sm;\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n  @include border-radius($input-border-radius-sm);\n}\n\n.form-control-lg {\n  height: $input-height-lg;\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n  @include border-radius($input-border-radius-lg);\n}\n\n// stylelint-disable-next-line no-duplicate-selectors\nselect.form-control {\n  &[size],\n  &[multiple] {\n    height: auto;\n  }\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n// Form groups\n//\n// Designed to help with the organization and spacing of vertical forms. For\n// horizontal forms, use the predefined grid classes.\n\n.form-group {\n  margin-bottom: $form-group-margin-bottom;\n}\n\n.form-text {\n  display: block;\n  margin-top: $form-text-margin-top;\n}\n\n\n// Form grid\n//\n// Special replacement for our grid system's `.row` for tighter form layouts.\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -$form-grid-gutter-width / 2;\n  margin-left: -$form-grid-gutter-width / 2;\n\n  > .col,\n  > [class*=\"col-\"] {\n    padding-right: $form-grid-gutter-width / 2;\n    padding-left: $form-grid-gutter-width / 2;\n  }\n}\n\n\n// Checkboxes and radios\n//\n// Indent the labels to position radios/checkboxes as hanging controls.\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: $form-check-input-gutter;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: $form-check-input-margin-y;\n  margin-left: -$form-check-input-gutter;\n\n  // Use [disabled] and :disabled for workaround https://github.com/twbs/bootstrap/issues/28247\n  &[disabled] ~ .form-check-label,\n  &:disabled ~ .form-check-label {\n    color: $text-muted;\n  }\n}\n\n.form-check-label {\n  margin-bottom: 0; // Override default `<label>` bottom margin\n}\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0; // Override base .form-check\n  margin-right: $form-check-inline-margin-x;\n\n  // Undo .form-check-input defaults and add some `margin-right`.\n  .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: $form-check-inline-input-margin-x;\n    margin-left: 0;\n  }\n}\n\n\n// Form validation\n//\n// Provide feedback to users when form field values are valid or invalid. Works\n// primarily for client-side validation via scoped `:invalid` and `:valid`\n// pseudo-classes but also includes `.is-invalid` and `.is-valid` classes for\n// server side validation.\n\n@each $state, $data in $form-validation-states {\n  @include form-validation-state($state, map-get($data, color), map-get($data, icon));\n}\n\n// Inline forms\n//\n// Make forms appear inline(-block) by adding the `.form-inline` class. Inline\n// forms begin stacked on extra small (mobile) devices and then go inline when\n// viewports reach <768px.\n//\n// Requires wrapping inputs and labels with `.form-group` for proper display of\n// default HTML form controls and our custom form controls (e.g., input groups).\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; // Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height)\n\n  // Because we use flex, the initial sizing of checkboxes is collapsed and\n  // doesn't occupy the full-width (which is what we want for xs grid tier),\n  // so we force that here.\n  .form-check {\n    width: 100%;\n  }\n\n  // Kick in the inline\n  @include media-breakpoint-up(sm) {\n    label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0;\n    }\n\n    // Inline-block all the things for \"inline\"\n    .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0;\n    }\n\n    // Allow folks to *not* use `.form-group`\n    .form-control {\n      display: inline-block;\n      width: auto; // Prevent labels from stacking above inputs in `.form-group`\n      vertical-align: middle;\n    }\n\n    // Make static controls behave like regular ones\n    .form-control-plaintext {\n      display: inline-block;\n    }\n\n    .input-group,\n    .custom-select {\n      width: auto;\n    }\n\n    // Remove default margin on radios/checkboxes that were used for stacking, and\n    // then undo the floating of radios and checkboxes to match.\n    .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0;\n    }\n    .form-check-input {\n      position: relative;\n      flex-shrink: 0;\n      margin-top: 0;\n      margin-right: $form-check-input-margin-x;\n      margin-left: 0;\n    }\n\n    .custom-control {\n      align-items: center;\n      justify-content: center;\n    }\n    .custom-control-label {\n      margin-bottom: 0;\n    }\n  }\n}\n","// stylelint-disable property-blacklist\n@mixin transition($transition...) {\n  @if $enable-transitions {\n    @if length($transition) == 0 {\n      transition: $transition-base;\n    } @else {\n      transition: $transition;\n    }\n  }\n\n  @if $enable-prefers-reduced-motion-media-query {\n    @media (prefers-reduced-motion: reduce) {\n      transition: none;\n    }\n  }\n}\n","// Form control focus state\n//\n// Generate a customized focus state and for any input with the specified color,\n// which defaults to the `$input-focus-border-color` variable.\n//\n// We highly encourage you to not customize the default value, but instead use\n// this to tweak colors on an as-needed basis. This aesthetic change is based on\n// WebKit's default styles, but applicable to a wider range of browsers. Its\n// usability and accessibility should be taken into account with any change.\n//\n// Example usage: change the default blue border and shadow to white for better\n// contrast against a dark gray background.\n@mixin form-control-focus($ignore-warning: false) {\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    // Avoid using mixin so we can pass custom focus shadow properly\n    @if $enable-shadows {\n      box-shadow: $input-box-shadow, $input-focus-box-shadow;\n    } @else {\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n  @include deprecate(\"The `form-control-focus()` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n\n// This mixin uses an `if()` technique to be compatible with Dart Sass\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\n@mixin form-validation-state-selector($state) {\n  @if ($state == \"valid\" or $state == \"invalid\") {\n    .was-validated #{if(&, \"&\", \"\")}:#{$state},\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state($state, $color, $icon) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: color-yiq($color);\n    background-color: rgba($color, $form-feedback-tooltip-opacity);\n    @include border-radius($form-feedback-tooltip-border-radius);\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .custom-select {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $custom-select-feedback-icon-padding-right;\n        background: $custom-select-background, escape-svg($icon) $custom-select-bg no-repeat $custom-select-feedback-icon-position / $custom-select-feedback-icon-size;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      ~ .form-check-label {\n        color: $color;\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n    }\n  }\n\n  .custom-control-input {\n    @include form-validation-state-selector($state) {\n      ~ .custom-control-label {\n        color: $color;\n\n        &::before {\n          border-color: $color;\n        }\n      }\n\n      &:checked {\n        ~ .custom-control-label::before {\n          border-color: lighten($color, 10%);\n          @include gradient-bg(lighten($color, 10%));\n        }\n      }\n\n      &:focus {\n        ~ .custom-control-label::before {\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n        }\n\n        &:not(:checked) ~ .custom-control-label::before {\n          border-color: $color;\n        }\n      }\n    }\n  }\n\n  // custom file\n  .custom-file-input {\n    @include form-validation-state-selector($state) {\n      ~ .custom-file-label {\n        border-color: $color;\n      }\n\n      &:focus {\n        ~ .custom-file-label {\n          border-color: $color;\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n        }\n      }\n    }\n  }\n}\n","// Gradients\n\n@mixin gradient-bg($color) {\n  @if $enable-gradients {\n    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x;\n  } @else {\n    background-color: $color;\n  }\n}\n\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n  background-repeat: repeat-x;\n}\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Base styles\n//\n\n.btn {\n  display: inline-block;\n  font-family: $btn-font-family;\n  font-weight: $btn-font-weight;\n  color: $body-color;\n  text-align: center;\n  white-space: $btn-white-space;\n  vertical-align: middle;\n  cursor: if($enable-pointer-cursor-for-buttons, pointer, null);\n  user-select: none;\n  background-color: transparent;\n  border: $btn-border-width solid transparent;\n  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);\n  @include transition($btn-transition);\n\n  @include hover() {\n    color: $body-color;\n    text-decoration: none;\n  }\n\n  &:focus,\n  &.focus {\n    outline: 0;\n    box-shadow: $btn-focus-box-shadow;\n  }\n\n  // Disabled comes first so active can properly restyle\n  &.disabled,\n  &:disabled {\n    opacity: $btn-disabled-opacity;\n    @include box-shadow(none);\n  }\n\n  &:not(:disabled):not(.disabled):active,\n  &:not(:disabled):not(.disabled).active {\n    @include box-shadow($btn-active-box-shadow);\n\n    &:focus {\n      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);\n    }\n  }\n}\n\n// Future-proof disabling of clicks on `<a>` elements\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n\n//\n// Alternate buttons\n//\n\n@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @include button-variant($value, $value);\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}\n\n\n//\n// Link buttons\n//\n\n// Make a button look and behave like a link\n.btn-link {\n  font-weight: $font-weight-normal;\n  color: $link-color;\n  text-decoration: $link-decoration;\n\n  @include hover() {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus,\n  &.focus {\n    text-decoration: $link-hover-decoration;\n    box-shadow: none;\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $btn-link-disabled-color;\n    pointer-events: none;\n  }\n\n  // No need for an active state here\n}\n\n\n//\n// Button Sizes\n//\n\n.btn-lg {\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);\n}\n\n.btn-sm {\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);\n}\n\n\n//\n// Block button\n//\n\n.btn-block {\n  display: block;\n  width: 100%;\n\n  // Vertically space out multiple block buttons\n  + .btn-block {\n    margin-top: $btn-block-spacing-y;\n  }\n}\n\n// Specificity overrides\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  &.btn-block {\n    width: 100%;\n  }\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n@mixin button-variant($background, $border, $hover-background: darken($background, 7.5%), $hover-border: darken($border, 10%), $active-background: darken($background, 10%), $active-border: darken($border, 12.5%)) {\n  color: color-yiq($background);\n  @include gradient-bg($background);\n  border-color: $border;\n  @include box-shadow($btn-box-shadow);\n\n  @include hover() {\n    color: color-yiq($hover-background);\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n  }\n\n  &:focus,\n  &.focus {\n    color: color-yiq($hover-background);\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n    // Avoid using mixin so we can pass custom focus shadow properly\n    @if $enable-shadows {\n      box-shadow: $btn-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\n    } @else {\n      box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\n    }\n  }\n\n  // Disabled comes first so active can properly restyle\n  &.disabled,\n  &:disabled {\n    color: color-yiq($background);\n    background-color: $background;\n    border-color: $border;\n    // Remove CSS gradients if they're enabled\n    @if $enable-gradients {\n      background-image: none;\n    }\n  }\n\n  &:not(:disabled):not(.disabled):active,\n  &:not(:disabled):not(.disabled).active,\n  .show > &.dropdown-toggle {\n    color: color-yiq($active-background);\n    background-color: $active-background;\n    @if $enable-gradients {\n      background-image: none; // Remove the gradient for the pressed/active state\n    }\n    border-color: $active-border;\n\n    &:focus {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      @if $enable-shadows and $btn-active-box-shadow != none {\n        box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\n      } @else {\n        box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\n      }\n    }\n  }\n}\n\n@mixin button-outline-variant($color, $color-hover: color-yiq($color), $active-background: $color, $active-border: $color) {\n  color: $color;\n  border-color: $color;\n\n  @include hover() {\n    color: $color-hover;\n    background-color: $active-background;\n    border-color: $active-border;\n  }\n\n  &:focus,\n  &.focus {\n    box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $color;\n    background-color: transparent;\n  }\n\n  &:not(:disabled):not(.disabled):active,\n  &:not(:disabled):not(.disabled).active,\n  .show > &.dropdown-toggle {\n    color: color-yiq($active-background);\n    background-color: $active-background;\n    border-color: $active-border;\n\n    &:focus {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      @if $enable-shadows and $btn-active-box-shadow != none {\n        box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5);\n      } @else {\n        box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n      }\n    }\n  }\n}\n\n// Button sizes\n@mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {\n  padding: $padding-y $padding-x;\n  @include font-size($font-size);\n  line-height: $line-height;\n  // Manually declare to provide an override to the browser default\n  @include border-radius($border-radius, 0);\n}\n",".fade {\n  @include transition($transition-fade);\n\n  &:not(.show) {\n    opacity: 0;\n  }\n}\n\n.collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n}\n","// The dropdown wrapper (`<div>`)\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n\n  // Generate the caret automatically\n  @include caret();\n}\n\n// The dropdown menu\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: $zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  float: left;\n  min-width: $dropdown-min-width;\n  padding: $dropdown-padding-y 0;\n  margin: $dropdown-spacer 0 0; // override default ul\n  @include font-size($dropdown-font-size);\n  color: $dropdown-color;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  list-style: none;\n  background-color: $dropdown-bg;\n  background-clip: padding-box;\n  border: $dropdown-border-width solid $dropdown-border-color;\n  @include border-radius($dropdown-border-radius);\n  @include box-shadow($dropdown-box-shadow);\n}\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-left {\n      right: auto;\n      left: 0;\n    }\n\n    .dropdown-menu#{$infix}-right {\n      right: 0;\n      left: auto;\n    }\n  }\n}\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n// Just add .dropup after the standard .dropdown class and you're set.\n.dropup {\n  .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(up);\n  }\n}\n\n.dropright {\n  .dropdown-menu {\n    top: 0;\n    right: auto;\n    left: 100%;\n    margin-top: 0;\n    margin-left: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(right);\n    &::after {\n      vertical-align: 0;\n    }\n  }\n}\n\n.dropleft {\n  .dropdown-menu {\n    top: 0;\n    right: 100%;\n    left: auto;\n    margin-top: 0;\n    margin-right: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(left);\n    &::before {\n      vertical-align: 0;\n    }\n  }\n}\n\n// When enabled Popper.js, reset basic dropdown position\n// stylelint-disable-next-line no-duplicate-selectors\n.dropdown-menu {\n  &[x-placement^=\"top\"],\n  &[x-placement^=\"right\"],\n  &[x-placement^=\"bottom\"],\n  &[x-placement^=\"left\"] {\n    right: auto;\n    bottom: auto;\n  }\n}\n\n// Dividers (basically an `<hr>`) within the dropdown\n.dropdown-divider {\n  @include nav-divider($dropdown-divider-bg, $dropdown-divider-margin-y, true);\n}\n\n// Links, buttons, and more within the dropdown menu\n//\n// `<button>`-specific styles are denoted with `// For <button>s`\n.dropdown-item {\n  display: block;\n  width: 100%; // For `<button>`s\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  clear: both;\n  font-weight: $font-weight-normal;\n  color: $dropdown-link-color;\n  text-align: inherit; // For `<button>`s\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\n  background-color: transparent; // For `<button>`s\n  border: 0; // For `<button>`s\n\n  // Prevent dropdown overflow if there's no padding\n  // See https://github.com/twbs/bootstrap/pull/27703\n  @if $dropdown-padding-y == 0 {\n    &:first-child {\n      @include border-top-radius($dropdown-inner-border-radius);\n    }\n\n    &:last-child {\n      @include border-bottom-radius($dropdown-inner-border-radius);\n    }\n  }\n\n  @include hover-focus() {\n    color: $dropdown-link-hover-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-hover-bg);\n  }\n\n  &.active,\n  &:active {\n    color: $dropdown-link-active-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-active-bg);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $dropdown-link-disabled-color;\n    pointer-events: none;\n    background-color: transparent;\n    // Remove CSS gradients if they're enabled\n    @if $enable-gradients {\n      background-image: none;\n    }\n  }\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: $dropdown-padding-y $dropdown-item-padding-x;\n  margin-bottom: 0; // for use with heading elements\n  @include font-size($font-size-sm);\n  color: $dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Dropdown text\n.dropdown-item-text {\n  display: block;\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  color: $dropdown-link-color;\n}\n","@mixin caret-down() {\n  border-top: $caret-width solid;\n  border-right: $caret-width solid transparent;\n  border-bottom: 0;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-up() {\n  border-top: 0;\n  border-right: $caret-width solid transparent;\n  border-bottom: $caret-width solid;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-right() {\n  border-top: $caret-width solid transparent;\n  border-right: 0;\n  border-bottom: $caret-width solid transparent;\n  border-left: $caret-width solid;\n}\n\n@mixin caret-left() {\n  border-top: $caret-width solid transparent;\n  border-right: $caret-width solid;\n  border-bottom: $caret-width solid transparent;\n}\n\n@mixin caret($direction: down) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $caret-spacing;\n      vertical-align: $caret-vertical-align;\n      content: \"\";\n      @if $direction == down {\n        @include caret-down();\n      } @else if $direction == up {\n        @include caret-up();\n      } @else if $direction == right {\n        @include caret-right();\n      }\n    }\n\n    @if $direction == left {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $caret-spacing;\n        vertical-align: $caret-vertical-align;\n        content: \"\";\n        @include caret-left();\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}\n","// Horizontal dividers\n//\n// Dividers (basically an hr) within dropdowns and nav lists\n\n@mixin nav-divider($color: $nav-divider-color, $margin-y: $nav-divider-margin-y, $ignore-warning: false) {\n  height: 0;\n  margin: $margin-y 0;\n  overflow: hidden;\n  border-top: 1px solid $color;\n  @include deprecate(\"The `nav-divider()` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n","// stylelint-disable selector-no-qualifying-type\n\n// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n\n  > .btn {\n    position: relative;\n    flex: 1 1 auto;\n\n    // Bring the hover, focused, and \"active\" buttons to the front to overlay\n    // the borders properly\n    @include hover() {\n      z-index: 1;\n    }\n    &:focus,\n    &:active,\n    &.active {\n      z-index: 1;\n    }\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  .input-group {\n    width: auto;\n  }\n}\n\n.btn-group {\n  // Prevent double borders when buttons are next to each other\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-left: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-right-radius(0);\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) > .btn {\n    @include border-left-radius(0);\n  }\n}\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n//\n// Split button dropdowns\n//\n\n.dropdown-toggle-split {\n  padding-right: $btn-padding-x * .75;\n  padding-left: $btn-padding-x * .75;\n\n  &::after,\n  .dropup &::after,\n  .dropright &::after {\n    margin-left: 0;\n  }\n\n  .dropleft &::before {\n    margin-right: 0;\n  }\n}\n\n.btn-sm + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-sm * .75;\n  padding-left: $btn-padding-x-sm * .75;\n}\n\n.btn-lg + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-lg * .75;\n  padding-left: $btn-padding-x-lg * .75;\n}\n\n\n// The clickable button for toggling the menu\n// Set the same inset shadow as the :active state\n.btn-group.show .dropdown-toggle {\n  @include box-shadow($btn-active-box-shadow);\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Vertical button groups\n//\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  > .btn,\n  > .btn-group {\n    width: 100%;\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-top: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-bottom-radius(0);\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) > .btn {\n    @include border-top-radius(0);\n  }\n}\n\n\n// Checkbox and radio options\n//\n// In order to support the browser's form validation feedback, powered by the\n// `required` attribute, we have to \"hide\" the inputs via `clip`. We cannot use\n// `display: none;` or `visibility: hidden;` as that also hides the popover.\n// Simply visually hiding the inputs via `opacity` would leave them clickable in\n// certain cases which is prevented by using `clip` and `pointer-events`.\n// This way, we ensure a DOM element is visible to position the popover from.\n//\n// See https://github.com/twbs/bootstrap/pull/12794 and\n// https://github.com/twbs/bootstrap/pull/14559 for more information.\n\n.btn-group-toggle {\n  > .btn,\n  > .btn-group > .btn {\n    margin-bottom: 0; // Override default `<label>` value\n\n    input[type=\"radio\"],\n    input[type=\"checkbox\"] {\n      position: absolute;\n      clip: rect(0, 0, 0, 0);\n      pointer-events: none;\n    }\n  }\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Base styles\n//\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // For form validation feedback\n  align-items: stretch;\n  width: 100%;\n\n  > .form-control,\n  > .form-control-plaintext,\n  > .custom-select,\n  > .custom-file {\n    position: relative; // For focus state's z-index\n    flex: 1 1 0%;\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\n    margin-bottom: 0;\n\n    + .form-control,\n    + .custom-select,\n    + .custom-file {\n      margin-left: -$input-border-width;\n    }\n  }\n\n  // Bring the \"active\" form control to the top of surrounding elements\n  > .form-control:focus,\n  > .custom-select:focus,\n  > .custom-file .custom-file-input:focus ~ .custom-file-label {\n    z-index: 3;\n  }\n\n  // Bring the custom file input above the label\n  > .custom-file .custom-file-input:focus {\n    z-index: 4;\n  }\n\n  > .form-control,\n  > .custom-select {\n    &:not(:last-child) { @include border-right-radius(0); }\n    &:not(:first-child) { @include border-left-radius(0); }\n  }\n\n  // Custom file inputs have more complex markup, thus requiring different\n  // border-radius overrides.\n  > .custom-file {\n    display: flex;\n    align-items: center;\n\n    &:not(:last-child) .custom-file-label,\n    &:not(:last-child) .custom-file-label::after { @include border-right-radius(0); }\n    &:not(:first-child) .custom-file-label { @include border-left-radius(0); }\n  }\n}\n\n\n// Prepend and append\n//\n// While it requires one extra layer of HTML for each, dedicated prepend and\n// append elements allow us to 1) be less clever, 2) simplify our selectors, and\n// 3) support HTML5 form validation.\n\n.input-group-prepend,\n.input-group-append {\n  display: flex;\n\n  // Ensure buttons are always above inputs for more visually pleasing borders.\n  // This isn't needed for `.input-group-text` since it shares the same border-color\n  // as our inputs.\n  .btn {\n    position: relative;\n    z-index: 2;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n\n  .btn + .btn,\n  .btn + .input-group-text,\n  .input-group-text + .input-group-text,\n  .input-group-text + .btn {\n    margin-left: -$input-border-width;\n  }\n}\n\n.input-group-prepend { margin-right: -$input-border-width; }\n.input-group-append { margin-left: -$input-border-width; }\n\n\n// Textual addons\n//\n// Serves as a catch-all element for any text or radio/checkbox input you wish\n// to prepend or append to an input.\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: $input-padding-y $input-padding-x;\n  margin-bottom: 0; // Allow use of <label> elements by overriding our default margin-bottom\n  @include font-size($input-font-size); // Match inputs\n  font-weight: $font-weight-normal;\n  line-height: $input-line-height;\n  color: $input-group-addon-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $input-group-addon-bg;\n  border: $input-border-width solid $input-group-addon-border-color;\n  @include border-radius($input-border-radius);\n\n  // Nuke default margins from checkboxes and radios to vertically center within.\n  input[type=\"radio\"],\n  input[type=\"checkbox\"] {\n    margin-top: 0;\n  }\n}\n\n\n// Sizing\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: $input-height-lg;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: $input-height-sm;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n  @include border-radius($input-border-radius-sm);\n}\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: $custom-select-padding-x + $custom-select-indicator-padding;\n}\n\n\n// Prepend and append rounded corners\n//\n// These rulesets must come after the sizing ones to properly override sm and lg\n// border-radius values when extending. They're more specific than we'd like\n// with the `.input-group >` part, but without it, we cannot override the sizing.\n\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  @include border-right-radius(0);\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  @include border-left-radius(0);\n}\n","// Embedded icons from Open Iconic.\n// Released under MIT and copyright 2014 Waybury.\n// https://useiconic.com/open\n\n\n// Checkboxes and radios\n//\n// Base class takes care of all the key behavioral aspects.\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: $font-size-base * $line-height-base;\n  padding-left: $custom-control-gutter + $custom-control-indicator-size;\n}\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: $custom-control-spacer-x;\n}\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1; // Put the input behind the label so it doesn't overlay text\n  width: $custom-control-indicator-size;\n  height: ($font-size-base * $line-height-base + $custom-control-indicator-size) / 2;\n  opacity: 0;\n\n  &:checked ~ .custom-control-label::before {\n    color: $custom-control-indicator-checked-color;\n    border-color: $custom-control-indicator-checked-border-color;\n    @include gradient-bg($custom-control-indicator-checked-bg);\n    @include box-shadow($custom-control-indicator-checked-box-shadow);\n  }\n\n  &:focus ~ .custom-control-label::before {\n    // the mixin is not used here to make sure there is feedback\n    @if $enable-shadows {\n      box-shadow: $input-box-shadow, $input-focus-box-shadow;\n    } @else {\n      box-shadow: $custom-control-indicator-focus-box-shadow;\n    }\n  }\n\n  &:focus:not(:checked) ~ .custom-control-label::before {\n    border-color: $custom-control-indicator-focus-border-color;\n  }\n\n  &:not(:disabled):active ~ .custom-control-label::before {\n    color: $custom-control-indicator-active-color;\n    background-color: $custom-control-indicator-active-bg;\n    border-color: $custom-control-indicator-active-border-color;\n    @include box-shadow($custom-control-indicator-active-box-shadow);\n  }\n\n  // Use [disabled] and :disabled to work around https://github.com/twbs/bootstrap/issues/28247\n  &[disabled],\n  &:disabled {\n    ~ .custom-control-label {\n      color: $custom-control-label-disabled-color;\n\n      &::before {\n        background-color: $custom-control-indicator-disabled-bg;\n      }\n    }\n  }\n}\n\n// Custom control indicators\n//\n// Build the custom controls out of pseudo-elements.\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  color: $custom-control-label-color;\n  vertical-align: top;\n  cursor: $custom-control-cursor;\n\n  // Background-color and (when enabled) gradient\n  &::before {\n    position: absolute;\n    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;\n    left: -($custom-control-gutter + $custom-control-indicator-size);\n    display: block;\n    width: $custom-control-indicator-size;\n    height: $custom-control-indicator-size;\n    pointer-events: none;\n    content: \"\";\n    background-color: $custom-control-indicator-bg;\n    border: $custom-control-indicator-border-color solid $custom-control-indicator-border-width;\n    @include box-shadow($custom-control-indicator-box-shadow);\n  }\n\n  // Foreground (icon)\n  &::after {\n    position: absolute;\n    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;\n    left: -($custom-control-gutter + $custom-control-indicator-size);\n    display: block;\n    width: $custom-control-indicator-size;\n    height: $custom-control-indicator-size;\n    content: \"\";\n    background: no-repeat 50% / #{$custom-control-indicator-bg-size};\n  }\n}\n\n\n// Checkboxes\n//\n// Tweak just a few things for checkboxes.\n\n.custom-checkbox {\n  .custom-control-label::before {\n    @include border-radius($custom-checkbox-indicator-border-radius);\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-image: escape-svg($custom-checkbox-indicator-icon-checked);\n    }\n  }\n\n  .custom-control-input:indeterminate ~ .custom-control-label {\n    &::before {\n      border-color: $custom-checkbox-indicator-indeterminate-border-color;\n      @include gradient-bg($custom-checkbox-indicator-indeterminate-bg);\n      @include box-shadow($custom-checkbox-indicator-indeterminate-box-shadow);\n    }\n    &::after {\n      background-image: escape-svg($custom-checkbox-indicator-icon-indeterminate);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      background-color: $custom-control-indicator-checked-disabled-bg;\n    }\n    &:indeterminate ~ .custom-control-label::before {\n      background-color: $custom-control-indicator-checked-disabled-bg;\n    }\n  }\n}\n\n// Radios\n//\n// Tweak just a few things for radios.\n\n.custom-radio {\n  .custom-control-label::before {\n    // stylelint-disable-next-line property-blacklist\n    border-radius: $custom-radio-indicator-border-radius;\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-image: escape-svg($custom-radio-indicator-icon-checked);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      background-color: $custom-control-indicator-checked-disabled-bg;\n    }\n  }\n}\n\n\n// switches\n//\n// Tweak a few things for switches\n\n.custom-switch {\n  padding-left: $custom-switch-width + $custom-control-gutter;\n\n  .custom-control-label {\n    &::before {\n      left: -($custom-switch-width + $custom-control-gutter);\n      width: $custom-switch-width;\n      pointer-events: all;\n      // stylelint-disable-next-line property-blacklist\n      border-radius: $custom-switch-indicator-border-radius;\n    }\n\n    &::after {\n      top: add(($font-size-base * $line-height-base - $custom-control-indicator-size) / 2, $custom-control-indicator-border-width * 2);\n      left: add(-($custom-switch-width + $custom-control-gutter), $custom-control-indicator-border-width * 2);\n      width: $custom-switch-indicator-size;\n      height: $custom-switch-indicator-size;\n      background-color: $custom-control-indicator-border-color;\n      // stylelint-disable-next-line property-blacklist\n      border-radius: $custom-switch-indicator-border-radius;\n      @include transition(transform .15s ease-in-out, $custom-forms-transition);\n    }\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-color: $custom-control-indicator-bg;\n      transform: translateX($custom-switch-width - $custom-control-indicator-size);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      background-color: $custom-control-indicator-checked-disabled-bg;\n    }\n  }\n}\n\n\n// Select\n//\n// Replaces the browser default select with a custom one, mostly pulled from\n// https://primer.github.io/.\n//\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: $custom-select-height;\n  padding: $custom-select-padding-y ($custom-select-padding-x + $custom-select-indicator-padding) $custom-select-padding-y $custom-select-padding-x;\n  font-family: $custom-select-font-family;\n  @include font-size($custom-select-font-size);\n  font-weight: $custom-select-font-weight;\n  line-height: $custom-select-line-height;\n  color: $custom-select-color;\n  vertical-align: middle;\n  background: $custom-select-bg $custom-select-background;\n  border: $custom-select-border-width solid $custom-select-border-color;\n  @include border-radius($custom-select-border-radius, 0);\n  @include box-shadow($custom-select-box-shadow);\n  appearance: none;\n\n  &:focus {\n    border-color: $custom-select-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      box-shadow: $custom-select-box-shadow, $custom-select-focus-box-shadow;\n    } @else {\n      box-shadow: $custom-select-focus-box-shadow;\n    }\n\n    &::-ms-value {\n      // For visual consistency with other platforms/browsers,\n      // suppress the default white text on blue background highlight given to\n      // the selected option text when the (still closed) <select> receives focus\n      // in IE and (under certain conditions) Edge.\n      // See https://github.com/twbs/bootstrap/issues/19398.\n      color: $input-color;\n      background-color: $input-bg;\n    }\n  }\n\n  &[multiple],\n  &[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: $custom-select-padding-x;\n    background-image: none;\n  }\n\n  &:disabled {\n    color: $custom-select-disabled-color;\n    background-color: $custom-select-disabled-bg;\n  }\n\n  // Hides the default caret in IE11\n  &::-ms-expand {\n    display: none;\n  }\n\n  // Remove outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $custom-select-color;\n  }\n}\n\n.custom-select-sm {\n  height: $custom-select-height-sm;\n  padding-top: $custom-select-padding-y-sm;\n  padding-bottom: $custom-select-padding-y-sm;\n  padding-left: $custom-select-padding-x-sm;\n  @include font-size($custom-select-font-size-sm);\n}\n\n.custom-select-lg {\n  height: $custom-select-height-lg;\n  padding-top: $custom-select-padding-y-lg;\n  padding-bottom: $custom-select-padding-y-lg;\n  padding-left: $custom-select-padding-x-lg;\n  @include font-size($custom-select-font-size-lg);\n}\n\n\n// File\n//\n// Custom file input.\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: $custom-file-height;\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: $custom-file-height;\n  margin: 0;\n  opacity: 0;\n\n  &:focus ~ .custom-file-label {\n    border-color: $custom-file-focus-border-color;\n    box-shadow: $custom-file-focus-box-shadow;\n  }\n\n  // Use [disabled] and :disabled to work around https://github.com/twbs/bootstrap/issues/28247\n  &[disabled] ~ .custom-file-label,\n  &:disabled ~ .custom-file-label {\n    background-color: $custom-file-disabled-bg;\n  }\n\n  @each $lang, $value in $custom-file-text {\n    &:lang(#{$lang}) ~ .custom-file-label::after {\n      content: $value;\n    }\n  }\n\n  ~ .custom-file-label[data-browse]::after {\n    content: attr(data-browse);\n  }\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: $custom-file-height;\n  padding: $custom-file-padding-y $custom-file-padding-x;\n  font-family: $custom-file-font-family;\n  font-weight: $custom-file-font-weight;\n  line-height: $custom-file-line-height;\n  color: $custom-file-color;\n  background-color: $custom-file-bg;\n  border: $custom-file-border-width solid $custom-file-border-color;\n  @include border-radius($custom-file-border-radius);\n  @include box-shadow($custom-file-box-shadow);\n\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: $custom-file-height-inner;\n    padding: $custom-file-padding-y $custom-file-padding-x;\n    line-height: $custom-file-line-height;\n    color: $custom-file-button-color;\n    content: \"Browse\";\n    @include gradient-bg($custom-file-button-bg);\n    border-left: inherit;\n    @include border-radius(0 $custom-file-border-radius $custom-file-border-radius 0);\n  }\n}\n\n// Range\n//\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\n// elements cannot be mixed. As such, there are no shared styles for focus or\n// active states on prefixed selectors.\n\n.custom-range {\n  width: 100%;\n  height: add($custom-range-thumb-height, $custom-range-thumb-focus-box-shadow-width * 2);\n  padding: 0; // Need to reset padding\n  background-color: transparent;\n  appearance: none;\n\n  &:focus {\n    outline: none;\n\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\n    // No box-shadow() mixin for focus accessibility.\n    &::-webkit-slider-thumb { box-shadow: $custom-range-thumb-focus-box-shadow; }\n    &::-moz-range-thumb     { box-shadow: $custom-range-thumb-focus-box-shadow; }\n    &::-ms-thumb            { box-shadow: $custom-range-thumb-focus-box-shadow; }\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    margin-top: ($custom-range-track-height - $custom-range-thumb-height) / 2; // Webkit specific\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent; // Why?\n    cursor: $custom-range-track-cursor;\n    background-color: $custom-range-track-bg;\n    border-color: transparent;\n    @include border-radius($custom-range-track-border-radius);\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-moz-range-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-moz-range-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent;\n    cursor: $custom-range-track-cursor;\n    background-color: $custom-range-track-bg;\n    border-color: transparent; // Firefox specific?\n    @include border-radius($custom-range-track-border-radius);\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-ms-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    margin-top: 0; // Edge specific\n    margin-right: $custom-range-thumb-focus-box-shadow-width; // Workaround that overflowed box-shadow is hidden.\n    margin-left: $custom-range-thumb-focus-box-shadow-width;  // Workaround that overflowed box-shadow is hidden.\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-ms-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent;\n    cursor: $custom-range-track-cursor;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: $custom-range-thumb-height / 2;\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-ms-fill-lower {\n    background-color: $custom-range-track-bg;\n    @include border-radius($custom-range-track-border-radius);\n  }\n\n  &::-ms-fill-upper {\n    margin-right: 15px; // arbitrary?\n    background-color: $custom-range-track-bg;\n    @include border-radius($custom-range-track-border-radius);\n  }\n\n  &:disabled {\n    &::-webkit-slider-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n\n    &::-webkit-slider-runnable-track {\n      cursor: default;\n    }\n\n    &::-moz-range-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n\n    &::-moz-range-track {\n      cursor: default;\n    }\n\n    &::-ms-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n  }\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  @include transition($custom-forms-transition);\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s, `<ul>`s or `<ol>`s.\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: $nav-link-padding-y $nav-link-padding-x;\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n\n  // Disabled state lightens text\n  &.disabled {\n    color: $nav-link-disabled-color;\n    pointer-events: none;\n    cursor: default;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\n\n  .nav-item {\n    margin-bottom: -$nav-tabs-border-width;\n  }\n\n  .nav-link {\n    border: $nav-tabs-border-width solid transparent;\n    @include border-top-radius($nav-tabs-border-radius);\n\n    @include hover-focus() {\n      border-color: $nav-tabs-link-hover-border-color;\n    }\n\n    &.disabled {\n      color: $nav-link-disabled-color;\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-tabs-link-active-color;\n    background-color: $nav-tabs-link-active-bg;\n    border-color: $nav-tabs-link-active-border-color;\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: -$nav-tabs-border-width;\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  .nav-link {\n    @include border-radius($nav-pills-border-radius);\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: $nav-pills-link-active-color;\n    background-color: $nav-pills-link-active-bg;\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","// Contents\n//\n// Navbar\n// Navbar brand\n// Navbar nav\n// Navbar text\n// Navbar divider\n// Responsive navbar\n// Navbar position\n// Navbar themes\n\n\n// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding: $navbar-padding-y $navbar-padding-x;\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properties so that content nested within behave properly.\n  %container-flex-properties {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .container,\n  .container-fluid {\n    @extend %container-flex-properties;\n  }\n\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\n      @extend %container-flex-properties;\n    }\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: $navbar-brand-padding-y;\n  padding-bottom: $navbar-brand-padding-y;\n  margin-right: $navbar-padding-x;\n  @include font-size($navbar-brand-font-size);\n  line-height: inherit;\n  white-space: nowrap;\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .dropdown-menu {\n    position: static;\n    float: none;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  display: inline-block;\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\n  @include font-size($navbar-toggler-font-size);\n  line-height: 1;\n  background-color: transparent; // remove default button style\n  border: $border-width solid transparent; // remove default button style\n  @include border-radius($navbar-toggler-border-radius);\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        %container-navbar-expand-#{$breakpoint} {\n          padding-right: 0;\n          padding-left: 0;\n        }\n\n        > .container,\n        > .container-fluid {\n          @extend %container-navbar-expand-#{$breakpoint};\n        }\n\n        @each $size, $container-max-width in $container-max-widths {\n          > .container#{breakpoint-infix($size, $container-max-widths)} {\n            @extend %container-navbar-expand-#{$breakpoint};\n          }\n        }\n      }\n\n      @include media-breakpoint-up($next) {\n        flex-flow: row nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: $navbar-nav-link-padding-x;\n            padding-left: $navbar-nav-link-padding-x;\n          }\n        }\n\n        // For nesting containers, have to redeclare for alignment purposes\n        %container-nesting-#{$breakpoint} {\n          flex-wrap: nowrap;\n        }\n\n        > .container,\n        > .container-fluid {\n          @extend %container-nesting-#{$breakpoint};\n        }\n\n        @each $size, $container-max-width in $container-max-widths {\n          > .container#{breakpoint-infix($size, $container-max-widths)} {\n            @extend %container-nesting-#{$breakpoint};\n          }\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n\n          // Changes flex-bases to auto because of an IE10 bug\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n      }\n    }\n  }\n}\n\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n// Dark links against a light background\n.navbar-light {\n  .navbar-brand {\n    color: $navbar-light-brand-color;\n\n    @include hover-focus() {\n      color: $navbar-light-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-light-color;\n\n      @include hover-focus() {\n        color: $navbar-light-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-light-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .active > .nav-link,\n    .nav-link.show,\n    .nav-link.active {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-light-color;\n    border-color: $navbar-light-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-light-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-light-color;\n    a {\n      color: $navbar-light-active-color;\n\n      @include hover-focus() {\n        color: $navbar-light-active-color;\n      }\n    }\n  }\n}\n\n// White links against a dark background\n.navbar-dark {\n  .navbar-brand {\n    color: $navbar-dark-brand-color;\n\n    @include hover-focus() {\n      color: $navbar-dark-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-dark-color;\n\n      @include hover-focus() {\n        color: $navbar-dark-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-dark-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .active > .nav-link,\n    .nav-link.show,\n    .nav-link.active {\n      color: $navbar-dark-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-dark-color;\n    border-color: $navbar-dark-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-dark-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-dark-color;\n    a {\n      color: $navbar-dark-active-color;\n\n      @include hover-focus() {\n        color: $navbar-dark-active-color;\n      }\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\n  height: $card-height;\n  word-wrap: break-word;\n  background-color: $card-bg;\n  background-clip: border-box;\n  border: $card-border-width solid $card-border-color;\n  @include border-radius($card-border-radius);\n\n  > hr {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  > .list-group:first-child {\n    .list-group-item:first-child {\n      @include border-top-radius($card-border-radius);\n    }\n  }\n\n  > .list-group:last-child {\n    .list-group-item:last-child {\n      @include border-bottom-radius($card-border-radius);\n    }\n  }\n}\n\n.card-body {\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\n  // as much space as possible, ensuring footers are aligned to the bottom.\n  flex: 1 1 auto;\n  // Workaround for the image size bug in IE\n  // See: https://github.com/twbs/bootstrap/pull/28855\n  min-height: 1px;\n  padding: $card-spacer-x;\n  color: $card-color;\n}\n\n.card-title {\n  margin-bottom: $card-spacer-y;\n}\n\n.card-subtitle {\n  margin-top: -$card-spacer-y / 2;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link {\n  @include hover() {\n    text-decoration: none;\n  }\n\n  + .card-link {\n    margin-left: $card-spacer-x;\n  }\n}\n\n//\n// Optional textual caps\n//\n\n.card-header {\n  padding: $card-spacer-y $card-spacer-x;\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-bottom: $card-border-width solid $card-border-color;\n\n  &:first-child {\n    @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);\n  }\n\n  + .list-group {\n    .list-group-item:first-child {\n      border-top: 0;\n    }\n  }\n}\n\n.card-footer {\n  padding: $card-spacer-y $card-spacer-x;\n  background-color: $card-cap-bg;\n  border-top: $card-border-width solid $card-border-color;\n\n  &:last-child {\n    @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);\n  }\n}\n\n\n//\n// Header navs\n//\n\n.card-header-tabs {\n  margin-right: -$card-spacer-x / 2;\n  margin-bottom: -$card-spacer-y;\n  margin-left: -$card-spacer-x / 2;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -$card-spacer-x / 2;\n  margin-left: -$card-spacer-x / 2;\n}\n\n// Card image\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: $card-img-overlay-padding;\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0; // For IE: https://github.com/twbs/bootstrap/issues/29396\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\n}\n\n.card-img,\n.card-img-top {\n  @include border-top-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-bottom {\n  @include border-bottom-radius($card-inner-border-radius);\n}\n\n\n// Card deck\n\n.card-deck {\n  .card {\n    margin-bottom: $card-deck-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -$card-deck-margin;\n    margin-left: -$card-deck-margin;\n\n    .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-right: $card-deck-margin;\n      margin-bottom: 0; // Override the default\n      margin-left: $card-deck-margin;\n    }\n  }\n}\n\n\n//\n// Card groups\n//\n\n.card-group {\n  // The child selector allows nested `.card` within `.card-group`\n  // to display properly.\n  > .card {\n    margin-bottom: $card-group-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    // The child selector allows nested `.card` within `.card-group`\n    // to display properly.\n    > .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-bottom: 0;\n\n      + .card {\n        margin-left: 0;\n        border-left: 0;\n      }\n\n      // Handle rounded corners\n      @if $enable-rounded {\n        &:not(:last-child) {\n          @include border-right-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-blacklist\n            border-top-right-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-blacklist\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &:not(:first-child) {\n          @include border-left-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-blacklist\n            border-top-left-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-blacklist\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n//\n// Columns\n//\n\n.card-columns {\n  .card {\n    margin-bottom: $card-columns-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    column-count: $card-columns-count;\n    column-gap: $card-columns-gap;\n    orphans: 1;\n    widows: 1;\n\n    .card {\n      display: inline-block; // Don't let them vertically span multiple columns\n      width: 100%; // Don't let their width change\n    }\n  }\n}\n\n\n//\n// Accordion\n//\n\n.accordion {\n  > .card {\n    overflow: hidden;\n\n    &:not(:last-of-type) {\n      border-bottom: 0;\n      @include border-bottom-radius(0);\n    }\n\n    &:not(:first-of-type) {\n      @include border-top-radius(0);\n    }\n\n    > .card-header {\n      @include border-radius(0);\n      margin-bottom: -$card-border-width;\n    }\n  }\n}\n",".breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: $breadcrumb-padding-y $breadcrumb-padding-x;\n  margin-bottom: $breadcrumb-margin-bottom;\n  @include font-size($breadcrumb-font-size);\n  list-style: none;\n  background-color: $breadcrumb-bg;\n  @include border-radius($breadcrumb-border-radius);\n}\n\n.breadcrumb-item {\n  // The separator between breadcrumbs (by default, a forward-slash: \"/\")\n  + .breadcrumb-item {\n    padding-left: $breadcrumb-item-padding;\n\n    &::before {\n      display: inline-block; // Suppress underlining of the separator in modern browsers\n      padding-right: $breadcrumb-item-padding;\n      color: $breadcrumb-divider-color;\n      content: escape-svg($breadcrumb-divider);\n    }\n  }\n\n  // IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n  // without `<ul>`s. The `::before` pseudo-element generates an element\n  // *within* the .breadcrumb-item and thereby inherits the `text-decoration`.\n  //\n  // To trick IE into suppressing the underline, we give the pseudo-element an\n  // underline and then immediately remove it.\n  + .breadcrumb-item:hover::before {\n    text-decoration: underline;\n  }\n  // stylelint-disable-next-line no-duplicate-selectors\n  + .breadcrumb-item:hover::before {\n    text-decoration: none;\n  }\n\n  &.active {\n    color: $breadcrumb-active-color;\n  }\n}\n",".pagination {\n  display: flex;\n  @include list-unstyled();\n  @include border-radius();\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: $pagination-padding-y $pagination-padding-x;\n  margin-left: -$pagination-border-width;\n  line-height: $pagination-line-height;\n  color: $pagination-color;\n  background-color: $pagination-bg;\n  border: $pagination-border-width solid $pagination-border-color;\n\n  &:hover {\n    z-index: 2;\n    color: $pagination-hover-color;\n    text-decoration: none;\n    background-color: $pagination-hover-bg;\n    border-color: $pagination-hover-border-color;\n  }\n\n  &:focus {\n    z-index: 3;\n    outline: $pagination-focus-outline;\n    box-shadow: $pagination-focus-box-shadow;\n  }\n}\n\n.page-item {\n  &:first-child {\n    .page-link {\n      margin-left: 0;\n      @include border-left-radius($border-radius);\n    }\n  }\n  &:last-child {\n    .page-link {\n      @include border-right-radius($border-radius);\n    }\n  }\n\n  &.active .page-link {\n    z-index: 3;\n    color: $pagination-active-color;\n    background-color: $pagination-active-bg;\n    border-color: $pagination-active-border-color;\n  }\n\n  &.disabled .page-link {\n    color: $pagination-disabled-color;\n    pointer-events: none;\n    // Opinionated: remove the \"hand\" cursor set previously for .page-link\n    cursor: auto;\n    background-color: $pagination-disabled-bg;\n    border-color: $pagination-disabled-border-color;\n  }\n}\n\n\n//\n// Sizing\n//\n\n.pagination-lg {\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $line-height-lg, $border-radius-lg);\n}\n\n.pagination-sm {\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $line-height-sm, $border-radius-sm);\n}\n","// Pagination\n\n@mixin pagination-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {\n  .page-link {\n    padding: $padding-y $padding-x;\n    @include font-size($font-size);\n    line-height: $line-height;\n  }\n\n  .page-item {\n    &:first-child {\n      .page-link {\n        @include border-left-radius($border-radius);\n      }\n    }\n    &:last-child {\n      .page-link {\n        @include border-right-radius($border-radius);\n      }\n    }\n  }\n}\n","// Base class\n//\n// Requires one of the contextual, color modifier classes for `color` and\n// `background-color`.\n\n.badge {\n  display: inline-block;\n  padding: $badge-padding-y $badge-padding-x;\n  @include font-size($badge-font-size);\n  font-weight: $badge-font-weight;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  @include border-radius($badge-border-radius);\n  @include transition($badge-transition);\n\n  @at-root a#{&} {\n    @include hover-focus() {\n      text-decoration: none;\n    }\n  }\n\n  // Empty badges collapse automatically\n  &:empty {\n    display: none;\n  }\n}\n\n// Quick fix for badges in buttons\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n// Pill badges\n//\n// Make them extra rounded with a modifier to replace v3's badges.\n\n.badge-pill {\n  padding-right: $badge-pill-padding-x;\n  padding-left: $badge-pill-padding-x;\n  @include border-radius($badge-pill-border-radius);\n}\n\n// Colors\n//\n// Contextual variations (linked badges get darker on :hover).\n\n@each $color, $value in $theme-colors {\n  .badge-#{$color} {\n    @include badge-variant($value);\n  }\n}\n","@mixin badge-variant($bg) {\n  color: color-yiq($bg);\n  background-color: $bg;\n\n  @at-root a#{&} {\n    @include hover-focus() {\n      color: color-yiq($bg);\n      background-color: darken($bg, 10%);\n    }\n\n    &:focus,\n    &.focus {\n      outline: 0;\n      box-shadow: 0 0 0 $badge-focus-width rgba($bg, .5);\n    }\n  }\n}\n",".jumbotron {\n  padding: $jumbotron-padding ($jumbotron-padding / 2);\n  margin-bottom: $jumbotron-padding;\n  color: $jumbotron-color;\n  background-color: $jumbotron-bg;\n  @include border-radius($border-radius-lg);\n\n  @include media-breakpoint-up(sm) {\n    padding: ($jumbotron-padding * 2) $jumbotron-padding;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  @include border-radius(0);\n}\n","//\n// Base styles\n//\n\n.alert {\n  position: relative;\n  padding: $alert-padding-y $alert-padding-x;\n  margin-bottom: $alert-margin-bottom;\n  border: $alert-border-width solid transparent;\n  @include border-radius($alert-border-radius);\n}\n\n// Headings for larger alerts\n.alert-heading {\n  // Specified to prevent conflicts of changing $headings-color\n  color: inherit;\n}\n\n// Provide class for links that match alerts\n.alert-link {\n  font-weight: $alert-link-font-weight;\n}\n\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissible {\n  padding-right: $close-font-size + $alert-padding-x * 2;\n\n  // Adjust close link position\n  .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: $alert-padding-y $alert-padding-x;\n    color: inherit;\n  }\n}\n\n\n// Alternate styles\n//\n// Generate contextual modifier classes for colorizing the alert.\n\n@each $color, $value in $theme-colors {\n  .alert-#{$color} {\n    @include alert-variant(theme-color-level($color, $alert-bg-level), theme-color-level($color, $alert-border-level), theme-color-level($color, $alert-color-level));\n  }\n}\n","@mixin alert-variant($background, $border, $color) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n\n  hr {\n    border-top-color: darken($border, 5%);\n  }\n\n  .alert-link {\n    color: darken($color, 10%);\n  }\n}\n","// Disable animation if transitions are disabled\n@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    from { background-position: $progress-height 0; }\n    to { background-position: 0 0; }\n  }\n}\n\n.progress {\n  display: flex;\n  height: $progress-height;\n  overflow: hidden; // force rounded corners by cropping it\n  @include font-size($progress-font-size);\n  background-color: $progress-bg;\n  @include border-radius($progress-border-radius);\n  @include box-shadow($progress-box-shadow);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: $progress-bar-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $progress-bar-bg;\n  @include transition($progress-bar-transition);\n}\n\n.progress-bar-striped {\n  @include gradient-striped();\n  background-size: $progress-height $progress-height;\n}\n\n@if $enable-transitions {\n  .progress-bar-animated {\n    animation: progress-bar-stripes $progress-bar-animation-timing;\n\n    @if $enable-prefers-reduced-motion-media-query {\n      @media (prefers-reduced-motion: reduce) {\n        animation: none;\n      }\n    }\n  }\n}\n",".media {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body {\n  flex: 1;\n}\n","// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n\n  // No need to set list-style: none; since .list-group-item is block level\n  padding-left: 0; // reset padding because ul and ol\n  margin-bottom: 0;\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\n// list items. Includes an extra `.active` modifier class for selected items.\n\n.list-group-item-action {\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\n  color: $list-group-action-color;\n  text-align: inherit; // For `<button>`s (anchors inherit)\n\n  // Hover state\n  @include hover-focus() {\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\n    color: $list-group-action-hover-color;\n    text-decoration: none;\n    background-color: $list-group-hover-bg;\n  }\n\n  &:active {\n    color: $list-group-action-active-color;\n    background-color: $list-group-action-active-bg;\n  }\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: $list-group-item-padding-y $list-group-item-padding-x;\n  color: $list-group-color;\n  background-color: $list-group-bg;\n  border: $list-group-border-width solid $list-group-border-color;\n\n  &:first-child {\n    @include border-top-radius($list-group-border-radius);\n  }\n\n  &:last-child {\n    @include border-bottom-radius($list-group-border-radius);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $list-group-disabled-color;\n    pointer-events: none;\n    background-color: $list-group-disabled-bg;\n  }\n\n  // Include both here for `<a>`s and `<button>`s\n  &.active {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: $list-group-active-color;\n    background-color: $list-group-active-bg;\n    border-color: $list-group-active-border-color;\n  }\n\n  & + & {\n    border-top-width: 0;\n\n    &.active {\n      margin-top: -$list-group-border-width;\n      border-top-width: $list-group-border-width;\n    }\n  }\n}\n\n\n// Horizontal\n//\n// Change the layout of list group items from vertical (default) to horizontal.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .list-group-horizontal#{$infix} {\n      flex-direction: row;\n\n      .list-group-item {\n        &:first-child {\n          @include border-bottom-left-radius($list-group-border-radius);\n          @include border-top-right-radius(0);\n        }\n\n        &:last-child {\n          @include border-top-right-radius($list-group-border-radius);\n          @include border-bottom-left-radius(0);\n        }\n\n        &.active {\n          margin-top: 0;\n        }\n\n        & + .list-group-item {\n          border-top-width: $list-group-border-width;\n          border-left-width: 0;\n\n          &.active {\n            margin-left: -$list-group-border-width;\n            border-left-width: $list-group-border-width;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Flush list items\n//\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\n// useful within other components (e.g., cards).\n\n.list-group-flush {\n  .list-group-item {\n    border-right-width: 0;\n    border-left-width: 0;\n    @include border-radius(0);\n\n    &:first-child {\n      border-top-width: 0;\n    }\n  }\n\n  &:last-child {\n    .list-group-item:last-child {\n      border-bottom-width: 0;\n    }\n  }\n}\n\n\n// Contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $color, $value in $theme-colors {\n  @include list-group-item-variant($color, theme-color-level($color, -9), theme-color-level($color, 6));\n}\n","// List Groups\n\n@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    &.list-group-item-action {\n      @include hover-focus() {\n        color: $color;\n        background-color: darken($background, 5%);\n      }\n\n      &.active {\n        color: $white;\n        background-color: $color;\n        border-color: $color;\n      }\n    }\n  }\n}\n",".close {\n  float: right;\n  @include font-size($close-font-size);\n  font-weight: $close-font-weight;\n  line-height: 1;\n  color: $close-color;\n  text-shadow: $close-text-shadow;\n  opacity: .5;\n\n  // Override <a>'s hover style\n  @include hover() {\n    color: $close-color;\n    text-decoration: none;\n  }\n\n  &:not(:disabled):not(.disabled) {\n    @include hover-focus() {\n      opacity: .75;\n    }\n  }\n}\n\n// Additional properties for button version\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n// stylelint-disable-next-line selector-no-qualifying-type\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  appearance: none;\n}\n\n// Future-proof disabling of clicks on `<a>` elements\n\n// stylelint-disable-next-line selector-no-qualifying-type\na.close.disabled {\n  pointer-events: none;\n}\n",".toast {\n  max-width: $toast-max-width;\n  overflow: hidden; // cheap rounded corners on nested items\n  @include font-size($toast-font-size);\n  color: $toast-color;\n  background-color: $toast-background-color;\n  background-clip: padding-box;\n  border: $toast-border-width solid $toast-border-color;\n  box-shadow: $toast-box-shadow;\n  backdrop-filter: blur(10px);\n  opacity: 0;\n  @include border-radius($toast-border-radius);\n\n  &:not(:last-child) {\n    margin-bottom: $toast-padding-x;\n  }\n\n  &.showing {\n    opacity: 1;\n  }\n\n  &.show {\n    display: block;\n    opacity: 1;\n  }\n\n  &.hide {\n    display: none;\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: $toast-padding-y $toast-padding-x;\n  color: $toast-header-color;\n  background-color: $toast-header-background-color;\n  background-clip: padding-box;\n  border-bottom: $toast-border-width solid $toast-header-border-color;\n}\n\n.toast-body {\n  padding: $toast-padding-x; // apply to both vertical and horizontal\n}\n","// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and stuff\n\n\n.modal-open {\n  // Kill the scroll on the body\n  overflow: hidden;\n\n  .modal {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n}\n\n// Container that the modal scrolls within\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n  // We deliberately don't use `-webkit-overflow-scrolling: touch;` due to a\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\n  // See also https://github.com/twbs/bootstrap/issues/17695\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: $modal-dialog-margin;\n  // allow clicks to pass through for custom click handling to close modal\n  pointer-events: none;\n\n  // When fading in the modal, animate it to slide down\n  .modal.fade & {\n    @include transition($modal-transition);\n    transform: $modal-fade-transform;\n  }\n  .modal.show & {\n    transform: $modal-show-transform;\n  }\n\n  // When trying to close, animate focus to scale\n  .modal.modal-static & {\n    transform: $modal-scale-transform;\n  }\n}\n\n.modal-dialog-scrollable {\n  display: flex; // IE10/11\n  max-height: subtract(100%, $modal-dialog-margin * 2);\n\n  .modal-content {\n    max-height: subtract(100vh, $modal-dialog-margin * 2); // IE10/11\n    overflow: hidden;\n  }\n\n  .modal-header,\n  .modal-footer {\n    flex-shrink: 0;\n  }\n\n  .modal-body {\n    overflow-y: auto;\n  }\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: subtract(100%, $modal-dialog-margin * 2);\n\n  // Ensure `modal-dialog-centered` extends the full height of the view (IE10/11)\n  &::before {\n    display: block; // IE10\n    height: subtract(100vh, $modal-dialog-margin * 2);\n    content: \"\";\n  }\n\n  // Ensure `.modal-body` shows scrollbar (IE10/11)\n  &.modal-dialog-scrollable {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n\n    .modal-content {\n      max-height: none;\n    }\n\n    &::before {\n      content: none;\n    }\n  }\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\n  // counteract the pointer-events: none; in the .modal-dialog\n  color: $modal-content-color;\n  pointer-events: auto;\n  background-color: $modal-content-bg;\n  background-clip: padding-box;\n  border: $modal-content-border-width solid $modal-content-border-color;\n  @include border-radius($modal-content-border-radius);\n  @include box-shadow($modal-content-box-shadow-xs);\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal-backdrop;\n  width: 100vw;\n  height: 100vh;\n  background-color: $modal-backdrop-bg;\n\n  // Fade for backdrop\n  &.fade { opacity: 0; }\n  &.show { opacity: $modal-backdrop-opacity; }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  display: flex;\n  align-items: flex-start; // so the close btn always stays on the upper right corner\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\n  padding: $modal-header-padding;\n  border-bottom: $modal-header-border-width solid $modal-header-border-color;\n  @include border-top-radius($modal-content-inner-border-radius);\n\n  .close {\n    padding: $modal-header-padding;\n    // auto on the left force icon to the right even when there is no .modal-title\n    margin: (-$modal-header-padding-y) (-$modal-header-padding-x) (-$modal-header-padding-y) auto;\n  }\n}\n\n// Title text within header\n.modal-title {\n  margin-bottom: 0;\n  line-height: $modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\n  // when there should be a fixed height on `.modal-dialog`.\n  flex: 1 1 auto;\n  padding: $modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; // vertically center\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items\n  padding: $modal-inner-padding - $modal-footer-margin-between / 2;\n  border-top: $modal-footer-border-width solid $modal-footer-border-color;\n  @include border-bottom-radius($modal-content-inner-border-radius);\n\n  // Place margin between footer elements\n  // This solution is far from ideal because of the universal selector usage,\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\n  // stylelint-disable-next-line selector-max-universal\n  > * {\n    margin: $modal-footer-margin-between / 2;\n  }\n}\n\n// Measure scrollbar width for padding body during modal show/hide\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n// Scale up the modal\n@include media-breakpoint-up(sm) {\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    max-width: $modal-md;\n    margin: $modal-dialog-margin-y-sm-up auto;\n  }\n\n  .modal-dialog-scrollable {\n    max-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n\n    .modal-content {\n      max-height: subtract(100vh, $modal-dialog-margin-y-sm-up * 2);\n    }\n  }\n\n  .modal-dialog-centered {\n    min-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n\n    &::before {\n      height: subtract(100vh, $modal-dialog-margin-y-sm-up * 2);\n    }\n  }\n\n  .modal-content {\n    @include box-shadow($modal-content-box-shadow-sm-up);\n  }\n\n  .modal-sm { max-width: $modal-sm; }\n}\n\n@include media-breakpoint-up(lg) {\n  .modal-lg,\n  .modal-xl {\n    max-width: $modal-lg;\n  }\n}\n\n@include media-breakpoint-up(xl) {\n  .modal-xl { max-width: $modal-xl; }\n}\n","// Base class\n.tooltip {\n  position: absolute;\n  z-index: $zindex-tooltip;\n  display: block;\n  margin: $tooltip-margin;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($tooltip-font-size);\n  // Allow breaking very long words so they don't overflow the tooltip's bounds\n  word-wrap: break-word;\n  opacity: 0;\n\n  &.show { opacity: $tooltip-opacity; }\n\n  .arrow {\n    position: absolute;\n    display: block;\n    width: $tooltip-arrow-width;\n    height: $tooltip-arrow-height;\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-tooltip-top {\n  padding: $tooltip-arrow-height 0;\n\n  .arrow {\n    bottom: 0;\n\n    &::before {\n      top: 0;\n      border-width: $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-top-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-right {\n  padding: 0 $tooltip-arrow-height;\n\n  .arrow {\n    left: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      right: 0;\n      border-width: ($tooltip-arrow-width / 2) $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-right-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-bottom {\n  padding: $tooltip-arrow-height 0;\n\n  .arrow {\n    top: 0;\n\n    &::before {\n      bottom: 0;\n      border-width: 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-bottom-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-left {\n  padding: 0 $tooltip-arrow-height;\n\n  .arrow {\n    right: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      left: 0;\n      border-width: ($tooltip-arrow-width / 2) 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-left-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-auto {\n  &[x-placement^=\"top\"] {\n    @extend .bs-tooltip-top;\n  }\n  &[x-placement^=\"right\"] {\n    @extend .bs-tooltip-right;\n  }\n  &[x-placement^=\"bottom\"] {\n    @extend .bs-tooltip-bottom;\n  }\n  &[x-placement^=\"left\"] {\n    @extend .bs-tooltip-left;\n  }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: $tooltip-max-width;\n  padding: $tooltip-padding-y $tooltip-padding-x;\n  color: $tooltip-color;\n  text-align: center;\n  background-color: $tooltip-bg;\n  @include border-radius($tooltip-border-radius);\n}\n","@mixin reset-text() {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size or word-wrap.\n  font-style: normal;\n  font-weight: $font-weight-normal;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n}\n",".popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: $zindex-popover;\n  display: block;\n  max-width: $popover-max-width;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($popover-font-size);\n  // Allow breaking very long words so they don't overflow the popover's bounds\n  word-wrap: break-word;\n  background-color: $popover-bg;\n  background-clip: padding-box;\n  border: $popover-border-width solid $popover-border-color;\n  @include border-radius($popover-border-radius);\n  @include box-shadow($popover-box-shadow);\n\n  .arrow {\n    position: absolute;\n    display: block;\n    width: $popover-arrow-width;\n    height: $popover-arrow-height;\n    margin: 0 $popover-border-radius;\n\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-popover-top {\n  margin-bottom: $popover-arrow-height;\n\n  > .arrow {\n    bottom: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      bottom: 0;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      bottom: $popover-border-width;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-right {\n  margin-left: $popover-arrow-height;\n\n  > .arrow {\n    left: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover's rounded corners\n\n    &::before {\n      left: 0;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      left: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-bottom {\n  margin-top: $popover-arrow-height;\n\n  > .arrow {\n    top: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      top: 0;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      top: $popover-border-width;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-color;\n    }\n  }\n\n  // This will remove the popover-header's border just below the arrow\n  .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: $popover-arrow-width;\n    margin-left: -$popover-arrow-width / 2;\n    content: \"\";\n    border-bottom: $popover-border-width solid $popover-header-bg;\n  }\n}\n\n.bs-popover-left {\n  margin-right: $popover-arrow-height;\n\n  > .arrow {\n    right: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover's rounded corners\n\n    &::before {\n      right: 0;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      right: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-auto {\n  &[x-placement^=\"top\"] {\n    @extend .bs-popover-top;\n  }\n  &[x-placement^=\"right\"] {\n    @extend .bs-popover-right;\n  }\n  &[x-placement^=\"bottom\"] {\n    @extend .bs-popover-bottom;\n  }\n  &[x-placement^=\"left\"] {\n    @extend .bs-popover-left;\n  }\n}\n\n\n// Offset the popover to account for the popover arrow\n.popover-header {\n  padding: $popover-header-padding-y $popover-header-padding-x;\n  margin-bottom: 0; // Reset the default from Reboot\n  @include font-size($font-size-base);\n  color: $popover-header-color;\n  background-color: $popover-header-bg;\n  border-bottom: $popover-border-width solid darken($popover-header-bg, 5%);\n  @include border-top-radius($popover-inner-border-radius);\n\n  &:empty {\n    display: none;\n  }\n}\n\n.popover-body {\n  padding: $popover-body-padding-y $popover-body-padding-x;\n  color: $popover-body-color;\n}\n","// Notes on the classes:\n//\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\n//    we're preventing all actions instead\n// 2. The .carousel-item-left and .carousel-item-right is used to indicate where\n//    the active slide is heading.\n// 3. .active.carousel-item is the current slide.\n// 4. .active.carousel-item-left and .active.carousel-item-right is the current\n//    slide in its in-transition state. Only one of these occurs at a time.\n// 5. .carousel-item-next.carousel-item-left and .carousel-item-prev.carousel-item-right\n//    is the upcoming slide in transition.\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  @include clearfix();\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  @include transition($carousel-transition);\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%);\n}\n\n\n//\n// Alternate transitions\n//\n\n.carousel-fade {\n  .carousel-item {\n    opacity: 0;\n    transition-property: opacity;\n    transform: none;\n  }\n\n  .carousel-item.active,\n  .carousel-item-next.carousel-item-left,\n  .carousel-item-prev.carousel-item-right {\n    z-index: 1;\n    opacity: 1;\n  }\n\n  .active.carousel-item-left,\n  .active.carousel-item-right {\n    z-index: 0;\n    opacity: 0;\n    @include transition(opacity 0s $carousel-transition-duration);\n  }\n}\n\n\n//\n// Left/right controls for nav\n//\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  // Use flex for alignment (1-3)\n  display: flex; // 1. allow flex styles\n  align-items: center; // 2. vertically center contents\n  justify-content: center; // 3. horizontally center contents\n  width: $carousel-control-width;\n  color: $carousel-control-color;\n  text-align: center;\n  opacity: $carousel-control-opacity;\n  @include transition($carousel-control-transition);\n\n  // Hover/focus state\n  @include hover-focus() {\n    color: $carousel-control-color;\n    text-decoration: none;\n    outline: 0;\n    opacity: $carousel-control-hover-opacity;\n  }\n}\n.carousel-control-prev {\n  left: 0;\n  @if $enable-gradients {\n    background-image: linear-gradient(90deg, rgba($black, .25), rgba($black, .001));\n  }\n}\n.carousel-control-next {\n  right: 0;\n  @if $enable-gradients {\n    background-image: linear-gradient(270deg, rgba($black, .25), rgba($black, .001));\n  }\n}\n\n// Icons for within\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: $carousel-control-icon-width;\n  height: $carousel-control-icon-width;\n  background: no-repeat 50% / 100% 100%;\n}\n.carousel-control-prev-icon {\n  background-image: escape-svg($carousel-control-prev-icon-bg);\n}\n.carousel-control-next-icon {\n  background-image: escape-svg($carousel-control-next-icon-bg);\n}\n\n\n// Optional indicator pips\n//\n// Add an ordered list with the following class and add a list item for each\n// slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0; // override <ol> default\n  // Use the .carousel-control's width as margin so we don't overlay those\n  margin-right: $carousel-control-width;\n  margin-left: $carousel-control-width;\n  list-style: none;\n\n  li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: $carousel-indicator-width;\n    height: $carousel-indicator-height;\n    margin-right: $carousel-indicator-spacer;\n    margin-left: $carousel-indicator-spacer;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: $carousel-indicator-active-bg;\n    background-clip: padding-box;\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\n    border-top: $carousel-indicator-hit-area-height solid transparent;\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\n    opacity: .5;\n    @include transition($carousel-indicator-transition);\n  }\n\n  .active {\n    opacity: 1;\n  }\n}\n\n\n// Optional captions\n//\n//\n\n.carousel-caption {\n  position: absolute;\n  right: (100% - $carousel-caption-width) / 2;\n  bottom: 20px;\n  left: (100% - $carousel-caption-width) / 2;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: $carousel-caption-color;\n  text-align: center;\n}\n","@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n}\n","//\n// Rotating border\n//\n\n@keyframes spinner-border {\n  to { transform: rotate(360deg); }\n}\n\n.spinner-border {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: text-bottom;\n  border: $spinner-border-width solid currentColor;\n  border-right-color: transparent;\n  // stylelint-disable-next-line property-blacklist\n  border-radius: 50%;\n  animation: spinner-border .75s linear infinite;\n}\n\n.spinner-border-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n  border-width: $spinner-border-width-sm;\n}\n\n//\n// Growing circle\n//\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n.spinner-grow {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  // stylelint-disable-next-line property-blacklist\n  border-radius: 50%;\n  opacity: 0;\n  animation: spinner-grow .75s linear infinite;\n}\n\n.spinner-grow-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n}\n","// stylelint-disable declaration-no-important\n\n.align-baseline    { vertical-align: baseline !important; } // Browser default\n.align-top         { vertical-align: top !important; }\n.align-middle      { vertical-align: middle !important; }\n.align-bottom      { vertical-align: bottom !important; }\n.align-text-bottom { vertical-align: text-bottom !important; }\n.align-text-top    { vertical-align: text-top !important; }\n","// stylelint-disable declaration-no-important\n\n// Contextual backgrounds\n\n@mixin bg-variant($parent, $color, $ignore-warning: false) {\n  #{$parent} {\n    background-color: $color !important;\n  }\n  a#{$parent},\n  button#{$parent} {\n    @include hover-focus() {\n      background-color: darken($color, 10%) !important;\n    }\n  }\n  @include deprecate(\"The `bg-variant` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n\n@mixin bg-gradient-variant($parent, $color) {\n  #{$parent} {\n    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x !important;\n  }\n}\n","// stylelint-disable declaration-no-important\n\n@each $color, $value in $theme-colors {\n  @include bg-variant(\".bg-#{$color}\", $value, true);\n}\n\n@if $enable-gradients {\n  @each $color, $value in $theme-colors {\n    @include bg-gradient-variant(\".bg-gradient-#{$color}\", $value);\n  }\n}\n\n.bg-white {\n  background-color: $white !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n","// stylelint-disable property-blacklist, declaration-no-important\n\n//\n// Border\n//\n\n.border         { border: $border-width solid $border-color !important; }\n.border-top     { border-top: $border-width solid $border-color !important; }\n.border-right   { border-right: $border-width solid $border-color !important; }\n.border-bottom  { border-bottom: $border-width solid $border-color !important; }\n.border-left    { border-left: $border-width solid $border-color !important; }\n\n.border-0        { border: 0 !important; }\n.border-top-0    { border-top: 0 !important; }\n.border-right-0  { border-right: 0 !important; }\n.border-bottom-0 { border-bottom: 0 !important; }\n.border-left-0   { border-left: 0 !important; }\n\n@each $color, $value in $theme-colors {\n  .border-#{$color} {\n    border-color: $value !important;\n  }\n}\n\n.border-white {\n  border-color: $white !important;\n}\n\n//\n// Border-radius\n//\n\n.rounded-sm {\n  border-radius: $border-radius-sm !important;\n}\n\n.rounded {\n  border-radius: $border-radius !important;\n}\n\n.rounded-top {\n  border-top-left-radius: $border-radius !important;\n  border-top-right-radius: $border-radius !important;\n}\n\n.rounded-right {\n  border-top-right-radius: $border-radius !important;\n  border-bottom-right-radius: $border-radius !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: $border-radius !important;\n  border-bottom-left-radius: $border-radius !important;\n}\n\n.rounded-left {\n  border-top-left-radius: $border-radius !important;\n  border-bottom-left-radius: $border-radius !important;\n}\n\n.rounded-lg {\n  border-radius: $border-radius-lg !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: $rounded-pill !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Utilities for common `display` values\n//\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @each $value in $displays {\n      .d#{$infix}-#{$value} { display: $value !important; }\n    }\n  }\n}\n\n\n//\n// Utilities for toggling `display` in print\n//\n\n@media print {\n  @each $value in $displays {\n    .d-print-#{$value} { display: $value !important; }\n  }\n}\n","// Credit: Nicolas Gallagher and SUIT CSS.\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n\n  &::before {\n    display: block;\n    content: \"\";\n  }\n\n  .embed-responsive-item,\n  iframe,\n  embed,\n  object,\n  video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n}\n\n@each $embed-responsive-aspect-ratio in $embed-responsive-aspect-ratios {\n  $embed-responsive-aspect-ratio-x: nth($embed-responsive-aspect-ratio, 1);\n  $embed-responsive-aspect-ratio-y: nth($embed-responsive-aspect-ratio, 2);\n\n  .embed-responsive-#{$embed-responsive-aspect-ratio-x}by#{$embed-responsive-aspect-ratio-y} {\n    &::before {\n      padding-top: percentage($embed-responsive-aspect-ratio-y / $embed-responsive-aspect-ratio-x);\n    }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n// Flex variation\n//\n// Custom styles for additional flex alignment options.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .flex#{$infix}-row            { flex-direction: row !important; }\n    .flex#{$infix}-column         { flex-direction: column !important; }\n    .flex#{$infix}-row-reverse    { flex-direction: row-reverse !important; }\n    .flex#{$infix}-column-reverse { flex-direction: column-reverse !important; }\n\n    .flex#{$infix}-wrap         { flex-wrap: wrap !important; }\n    .flex#{$infix}-nowrap       { flex-wrap: nowrap !important; }\n    .flex#{$infix}-wrap-reverse { flex-wrap: wrap-reverse !important; }\n    .flex#{$infix}-fill         { flex: 1 1 auto !important; }\n    .flex#{$infix}-grow-0       { flex-grow: 0 !important; }\n    .flex#{$infix}-grow-1       { flex-grow: 1 !important; }\n    .flex#{$infix}-shrink-0     { flex-shrink: 0 !important; }\n    .flex#{$infix}-shrink-1     { flex-shrink: 1 !important; }\n\n    .justify-content#{$infix}-start   { justify-content: flex-start !important; }\n    .justify-content#{$infix}-end     { justify-content: flex-end !important; }\n    .justify-content#{$infix}-center  { justify-content: center !important; }\n    .justify-content#{$infix}-between { justify-content: space-between !important; }\n    .justify-content#{$infix}-around  { justify-content: space-around !important; }\n\n    .align-items#{$infix}-start    { align-items: flex-start !important; }\n    .align-items#{$infix}-end      { align-items: flex-end !important; }\n    .align-items#{$infix}-center   { align-items: center !important; }\n    .align-items#{$infix}-baseline { align-items: baseline !important; }\n    .align-items#{$infix}-stretch  { align-items: stretch !important; }\n\n    .align-content#{$infix}-start   { align-content: flex-start !important; }\n    .align-content#{$infix}-end     { align-content: flex-end !important; }\n    .align-content#{$infix}-center  { align-content: center !important; }\n    .align-content#{$infix}-between { align-content: space-between !important; }\n    .align-content#{$infix}-around  { align-content: space-around !important; }\n    .align-content#{$infix}-stretch { align-content: stretch !important; }\n\n    .align-self#{$infix}-auto     { align-self: auto !important; }\n    .align-self#{$infix}-start    { align-self: flex-start !important; }\n    .align-self#{$infix}-end      { align-self: flex-end !important; }\n    .align-self#{$infix}-center   { align-self: center !important; }\n    .align-self#{$infix}-baseline { align-self: baseline !important; }\n    .align-self#{$infix}-stretch  { align-self: stretch !important; }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .float#{$infix}-left  { float: left !important; }\n    .float#{$infix}-right { float: right !important; }\n    .float#{$infix}-none  { float: none !important; }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n@each $value in $overflows {\n  .overflow-#{$value} { overflow: $value !important; }\n}\n","// stylelint-disable declaration-no-important\n\n// Common values\n@each $position in $positions {\n  .position-#{$position} { position: $position !important; }\n}\n\n// Shorthand\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.sticky-top {\n  @supports (position: sticky) {\n    position: sticky;\n    top: 0;\n    z-index: $zindex-sticky;\n  }\n}\n","//\n// Screenreaders\n//\n\n.sr-only {\n  @include sr-only();\n}\n\n.sr-only-focusable {\n  @include sr-only-focusable();\n}\n","// Only display content to screen readers\n//\n// See: https://a11yproject.com/posts/how-to-hide-content/\n// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/\n\n@mixin sr-only() {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px; // Fix for https://github.com/twbs/bootstrap/issues/25686\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n// Use in conjunction with .sr-only to only display content when it's focused.\n//\n// Useful for \"Skip to main content\" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n//\n// Credit: HTML5 Boilerplate\n\n@mixin sr-only-focusable() {\n  &:active,\n  &:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    overflow: visible;\n    clip: auto;\n    white-space: normal;\n  }\n}\n","// stylelint-disable declaration-no-important\n\n.shadow-sm { box-shadow: $box-shadow-sm !important; }\n.shadow { box-shadow: $box-shadow !important; }\n.shadow-lg { box-shadow: $box-shadow-lg !important; }\n.shadow-none { box-shadow: none !important; }\n","// stylelint-disable declaration-no-important\n\n// Width and height\n\n@each $prop, $abbrev in (width: w, height: h) {\n  @each $size, $length in $sizes {\n    .#{$abbrev}-#{$size} { #{$prop}: $length !important; }\n  }\n}\n\n.mw-100 { max-width: 100% !important; }\n.mh-100 { max-height: 100% !important; }\n\n// Viewport additional helpers\n\n.min-vw-100 { min-width: 100vw !important; }\n.min-vh-100 { min-height: 100vh !important; }\n\n.vw-100 { width: 100vw !important; }\n.vh-100 { height: 100vh !important; }\n","//\n// Stretched link\n//\n\n.stretched-link {\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    // Just in case `pointer-events: none` is set on a parent\n    pointer-events: auto;\n    content: \"\";\n    // IE10 bugfix, see https://stackoverflow.com/questions/16947967/ie10-hover-pseudo-class-doesnt-work-without-background-color\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n","// stylelint-disable declaration-no-important\n\n// Margin and Padding\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @each $prop, $abbrev in (margin: m, padding: p) {\n      @each $size, $length in $spacers {\n        .#{$abbrev}#{$infix}-#{$size} { #{$prop}: $length !important; }\n        .#{$abbrev}t#{$infix}-#{$size},\n        .#{$abbrev}y#{$infix}-#{$size} {\n          #{$prop}-top: $length !important;\n        }\n        .#{$abbrev}r#{$infix}-#{$size},\n        .#{$abbrev}x#{$infix}-#{$size} {\n          #{$prop}-right: $length !important;\n        }\n        .#{$abbrev}b#{$infix}-#{$size},\n        .#{$abbrev}y#{$infix}-#{$size} {\n          #{$prop}-bottom: $length !important;\n        }\n        .#{$abbrev}l#{$infix}-#{$size},\n        .#{$abbrev}x#{$infix}-#{$size} {\n          #{$prop}-left: $length !important;\n        }\n      }\n    }\n\n    // Negative margins (e.g., where `.mb-n1` is negative version of `.mb-1`)\n    @each $size, $length in $spacers {\n      @if $size != 0 {\n        .m#{$infix}-n#{$size} { margin: -$length !important; }\n        .mt#{$infix}-n#{$size},\n        .my#{$infix}-n#{$size} {\n          margin-top: -$length !important;\n        }\n        .mr#{$infix}-n#{$size},\n        .mx#{$infix}-n#{$size} {\n          margin-right: -$length !important;\n        }\n        .mb#{$infix}-n#{$size},\n        .my#{$infix}-n#{$size} {\n          margin-bottom: -$length !important;\n        }\n        .ml#{$infix}-n#{$size},\n        .mx#{$infix}-n#{$size} {\n          margin-left: -$length !important;\n        }\n      }\n    }\n\n    // Some special margin utils\n    .m#{$infix}-auto { margin: auto !important; }\n    .mt#{$infix}-auto,\n    .my#{$infix}-auto {\n      margin-top: auto !important;\n    }\n    .mr#{$infix}-auto,\n    .mx#{$infix}-auto {\n      margin-right: auto !important;\n    }\n    .mb#{$infix}-auto,\n    .my#{$infix}-auto {\n      margin-bottom: auto !important;\n    }\n    .ml#{$infix}-auto,\n    .mx#{$infix}-auto {\n      margin-left: auto !important;\n    }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Text\n//\n\n.text-monospace { font-family: $font-family-monospace !important; }\n\n// Alignment\n\n.text-justify  { text-align: justify !important; }\n.text-wrap     { white-space: normal !important; }\n.text-nowrap   { white-space: nowrap !important; }\n.text-truncate { @include text-truncate(); }\n\n// Responsive alignment\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .text#{$infix}-left   { text-align: left !important; }\n    .text#{$infix}-right  { text-align: right !important; }\n    .text#{$infix}-center { text-align: center !important; }\n  }\n}\n\n// Transformation\n\n.text-lowercase  { text-transform: lowercase !important; }\n.text-uppercase  { text-transform: uppercase !important; }\n.text-capitalize { text-transform: capitalize !important; }\n\n// Weight and italics\n\n.font-weight-light   { font-weight: $font-weight-light !important; }\n.font-weight-lighter { font-weight: $font-weight-lighter !important; }\n.font-weight-normal  { font-weight: $font-weight-normal !important; }\n.font-weight-bold    { font-weight: $font-weight-bold !important; }\n.font-weight-bolder  { font-weight: $font-weight-bolder !important; }\n.font-italic         { font-style: italic !important; }\n\n// Contextual colors\n\n.text-white { color: $white !important; }\n\n@each $color, $value in $theme-colors {\n  @include text-emphasis-variant(\".text-#{$color}\", $value, true);\n}\n\n.text-body { color: $body-color !important; }\n.text-muted { color: $text-muted !important; }\n\n.text-black-50 { color: rgba($black, .5) !important; }\n.text-white-50 { color: rgba($white, .5) !important; }\n\n// Misc\n\n.text-hide {\n  @include text-hide($ignore-warning: true);\n}\n\n.text-decoration-none { text-decoration: none !important; }\n\n.text-break {\n  word-break: break-word !important; // IE & < Edge 18\n  overflow-wrap: break-word !important;\n}\n\n// Reset\n\n.text-reset { color: inherit !important; }\n","// Text truncate\n// Requires inline-block or block for proper styling\n\n@mixin text-truncate() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n","// stylelint-disable declaration-no-important\n\n// Typography\n\n@mixin text-emphasis-variant($parent, $color, $ignore-warning: false) {\n  #{$parent} {\n    color: $color !important;\n  }\n  @if $emphasized-link-hover-darken-percentage != 0 {\n    a#{$parent} {\n      @include hover-focus() {\n        color: darken($color, $emphasized-link-hover-darken-percentage) !important;\n      }\n    }\n  }\n  @include deprecate(\"`text-emphasis-variant()`\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n","// CSS image replacement\n@mixin text-hide($ignore-warning: false) {\n  // stylelint-disable-next-line font-family-no-missing-generic-family-keyword\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n\n  @include deprecate(\"`text-hide()`\", \"v4.1.0\", \"v5\", $ignore-warning);\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Visibility utilities\n//\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type\n\n// Source: https://github.com/h5bp/main.css/blob/master/src/_print.css\n\n// ==========================================================================\n// Print styles.\n// Inlined to avoid the additional HTTP request:\n// https://www.phpied.com/delay-loading-your-print-css/\n// ==========================================================================\n\n@if $enable-print-styles {\n  @media print {\n    *,\n    *::before,\n    *::after {\n      // Bootstrap specific; comment out `color` and `background`\n      //color: $black !important; // Black prints faster\n      text-shadow: none !important;\n      //background: transparent !important;\n      box-shadow: none !important;\n    }\n\n    a {\n      &:not(.btn) {\n        text-decoration: underline;\n      }\n    }\n\n    // Bootstrap specific; comment the following selector out\n    //a[href]::after {\n    //  content: \" (\" attr(href) \")\";\n    //}\n\n    abbr[title]::after {\n      content: \" (\" attr(title) \")\";\n    }\n\n    // Bootstrap specific; comment the following selector out\n    //\n    // Don't show links that are fragment identifiers,\n    // or use the `javascript:` pseudo protocol\n    //\n\n    //a[href^=\"#\"]::after,\n    //a[href^=\"javascript:\"]::after {\n    // content: \"\";\n    //}\n\n    pre {\n      white-space: pre-wrap !important;\n    }\n    pre,\n    blockquote {\n      border: $border-width solid $gray-500; // Bootstrap custom code; using `$border-width` instead of 1px\n      page-break-inside: avoid;\n    }\n\n    //\n    // Printing Tables:\n    // https://web.archive.org/web/20180815150934/http://css-discuss.incutio.com/wiki/Printing_Tables\n    //\n\n    thead {\n      display: table-header-group;\n    }\n\n    tr,\n    img {\n      page-break-inside: avoid;\n    }\n\n    p,\n    h2,\n    h3 {\n      orphans: 3;\n      widows: 3;\n    }\n\n    h2,\n    h3 {\n      page-break-after: avoid;\n    }\n\n    // Bootstrap specific changes start\n\n    // Specify a size and min-width to make printing closer across browsers.\n    // We don't set margin here because it breaks `size` in Chrome. We also\n    // don't use `!important` on `size` as it breaks in Chrome.\n    @page {\n      size: $print-page-size;\n    }\n    body {\n      min-width: $print-body-min-width !important;\n    }\n    .container {\n      min-width: $print-body-min-width !important;\n    }\n\n    // Bootstrap components\n    .navbar {\n      display: none;\n    }\n    .badge {\n      border: $border-width solid $black;\n    }\n\n    .table {\n      border-collapse: collapse !important;\n\n      td,\n      th {\n        background-color: $white !important;\n      }\n    }\n\n    .table-bordered {\n      th,\n      td {\n        border: 1px solid $gray-300 !important;\n      }\n    }\n\n    .table-dark {\n      color: inherit;\n\n      th,\n      td,\n      thead th,\n      tbody + tbody {\n        border-color: $table-border-color;\n      }\n    }\n\n    .table .thead-dark th {\n      color: inherit;\n      border-color: $table-border-color;\n    }\n\n    // Bootstrap specific changes end\n  }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/nico/Desktop/repos/arstudios/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles.scss",
      function () {
        var newContent = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /home/nico/Desktop/repos/arstudios/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map