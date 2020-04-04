module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/camera.jpg":
/*!**********************************!*\
  !*** ./assets/images/camera.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/assets/images/camera.jpg";

/***/ }),

/***/ "./assets/images/console.jpg":
/*!***********************************!*\
  !*** ./assets/images/console.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/assets/images/console.jpg";

/***/ }),

/***/ "./assets/images/logo-black-white.png":
/*!********************************************!*\
  !*** ./assets/images/logo-black-white.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/assets/images/logo-black-white.png";

/***/ }),

/***/ "./assets/images/logo-white-transparent.png":
/*!**************************************************!*\
  !*** ./assets/images/logo-white-transparent.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/assets/images/logo-white-transparent.png";

/***/ }),

/***/ "./assets/images/micro.jpg":
/*!*********************************!*\
  !*** ./assets/images/micro.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/assets/images/micro.jpg";

/***/ }),

/***/ "./assets/videos/header-video.mp4":
/*!****************************************!*\
  !*** ./assets/videos/header-video.mp4 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/assets/videos/header-video.mp4";

/***/ }),

/***/ "./common/section-header/index.js":
/*!****************************************!*\
  !*** ./common/section-header/index.js ***!
  \****************************************/
/*! exports provided: SectionHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeader", function() { return SectionHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/common/section-header/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SectionHeader = props => {
  const {
    title,
    subtitle
  } = props;
  return __jsx("div", {
    className: "row justify-content-center mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-8 text-center mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "text-uppercase heading border-bottom mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, title), __jsx("p", {
    className: "mb-0 lead",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, subtitle)));
};

/***/ }),

/***/ "./components/about/index.js":
/*!***********************************!*\
  !*** ./components/about/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_section_header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/section-header/index */ "./common/section-header/index.js");
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/about/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = () => {
  const title = "About";
  const subtitle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.";
  return __jsx("section", {
    className: "section bg-light",
    id: "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_common_section_header_index__WEBPACK_IMPORTED_MODULE_1__["SectionHeader"], {
    title: title,
    subtitle: subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/calendar/index.js":
/*!**************************************!*\
  !*** ./components/calendar/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_section_header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/section-header/index */ "./common/section-header/index.js");
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/calendar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Calendar = () => {
  const title = "Check when to book a session";
  const subtitle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita  atque corrupti reiciendis.";
  return __jsx("section", {
    className: "section bg-light",
    id: "calendar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_common_section_header_index__WEBPACK_IMPORTED_MODULE_1__["SectionHeader"], {
    title: title,
    subtitle: subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./components/carousel/index.js":
/*!**************************************!*\
  !*** ./components/carousel/index.js ***!
  \**************************************/
/*! exports provided: VideosCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosCarousel", function() { return VideosCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Spinner */ "react-bootstrap/Spinner");
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/carousel/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const VideosCarousel = props => {
  const {
    videos
  } = props;
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: direction,
    1: setDirection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("right");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeIndex: index,
    direction: direction,
    onSelect: handleSelect,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, videos.length > 0 ? videos.map((link, index) => {
    let frame = __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "embed-responsive embed-responsive-16by9",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, __jsx("iframe", {
      className: "embed-responsive-item",
      title: "video",
      src: link,
      key: index,
      frameBorder: "0",
      allowFullScreen: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    })));

    return frame;
  }) : __jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animation: "border",
    role: "status",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Loading...")));
};

/***/ }),

/***/ "./components/contact/index.js":
/*!*************************************!*\
  !*** ./components/contact/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/contact/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Contact = () => {
  return __jsx("section", {
    id: "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Contact works"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/jumbo/index.js":
/*!***********************************!*\
  !*** ./components/jumbo/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rotating_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rotating-text */ "react-rotating-text");
/* harmony import */ var react_rotating_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rotating_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_videos_header_video_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/videos/header-video.mp4 */ "./assets/videos/header-video.mp4");
/* harmony import */ var _assets_videos_header_video_mp4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_videos_header_video_mp4__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/jumbo/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Jumbo = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("video", {
    id: "jumbo",
    playsInline: "playsinline",
    autoPlay: "autoplay",
    muted: "muted",
    loop: "loop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: _assets_videos_header_video_mp4__WEBPACK_IMPORTED_MODULE_2___default.a,
    type: "video/mp4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "container h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex h-100 text-center align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-100 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "We love to \xA0", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx(react_rotating_text__WEBPACK_IMPORTED_MODULE_1___default.a, {
    items: ["DESIGN", "PRODUCE", "RECORD", "CREATE"],
    typingInterval: 100,
    emptyPause: 1500,
    pause: 2000,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }))), __jsx("h1", {
    className: "display-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "April Road Studios"), __jsx("p", {
    className: "lead mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "based in Barcelona")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Jumbo);

/***/ }),

/***/ "./components/navbar/index.js":
/*!************************************!*\
  !*** ./components/navbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_custom_hooks_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/custom-hooks/on-scroll */ "./services/custom-hooks/on-scroll/index.js");
/* harmony import */ var _jumbo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jumbo */ "./components/jumbo/index.js");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-hash-link */ "react-router-hash-link");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_logo_white_transparent_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/logo-white-transparent.png */ "./assets/images/logo-white-transparent.png");
/* harmony import */ var _assets_images_logo_white_transparent_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_white_transparent_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_logo_black_white_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/logo-black-white.png */ "./assets/images/logo-black-white.png");
/* harmony import */ var _assets_images_logo_black_white_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_black_white_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/navbar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Navbar = () => {
  const scrolled = Object(_services_custom_hooks_on_scroll__WEBPACK_IMPORTED_MODULE_1__["useScroll"])();
  let navClass = "navbar navbar-expand-lg navbar-dark ftco_navbar fixed-top ftco-navbar-light " + (scrolled ? "scrolled awake" : "");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("nav", {
    className: navClass,
    id: "ftco-navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__["HashLink"], {
    className: "navbar-brand",
    smooth: true,
    to: "#jumbo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: scrolled ? _assets_images_logo_black_white_png__WEBPACK_IMPORTED_MODULE_5___default.a : _assets_images_logo_white_transparent_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    width: "30",
    height: "30",
    className: "d-inline-block align-top",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), "\xA0 April Road Studios"), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#ftco-nav",
    "aria-controls": "ftco-nav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon pl-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "ftco-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "navbar-nav ml-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx(react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__["HashLink"], {
    smooth: true,
    to: "#about",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "About us")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx(react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__["HashLink"], {
    smooth: true,
    to: "#services",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Services")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx(react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__["HashLink"], {
    smooth: true,
    to: "#sessions",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Live Sessions")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx(react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__["HashLink"], {
    smooth: true,
    to: "#calendar",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Calendar")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx(react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__["HashLink"], {
    smooth: true,
    to: "#rider",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Rider")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx(react_router_hash_link__WEBPACK_IMPORTED_MODULE_3__["HashLink"], {
    smooth: true,
    to: "#contact",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Contact")))))), __jsx(_jumbo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/rider/index.js":
/*!***********************************!*\
  !*** ./components/rider/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_section_header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/section-header/index */ "./common/section-header/index.js");
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/rider/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rider = () => {
  const title = "Rider";
  const subtitle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.";
  return __jsx("section", {
    className: "section",
    id: "rider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_common_section_header_index__WEBPACK_IMPORTED_MODULE_1__["SectionHeader"], {
    title: title,
    subtitle: subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Rider);

/***/ }),

/***/ "./components/servicios/index.js":
/*!***************************************!*\
  !*** ./components/servicios/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_console_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/console.jpg */ "./assets/images/console.jpg");
/* harmony import */ var _assets_images_console_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_console_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_camera_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/camera.jpg */ "./assets/images/camera.jpg");
/* harmony import */ var _assets_images_camera_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_camera_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_micro_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/micro.jpg */ "./assets/images/micro.jpg");
/* harmony import */ var _assets_images_micro_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_micro_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./components/servicios/service.js");
/* harmony import */ var _common_section_header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/section-header/index */ "./common/section-header/index.js");
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/servicios/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Servicios = () => {
  const title = "services";
  const description = " Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return __jsx("section", {
    className: "section",
    id: "services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_common_section_header_index__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    title: title,
    subtitle: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row no-gutters justify-content-center pl-0 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_service__WEBPACK_IMPORTED_MODULE_4__["Service"], {
    image: _assets_images_console_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx(_service__WEBPACK_IMPORTED_MODULE_4__["Service"], {
    image: _assets_images_micro_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    right: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx(_service__WEBPACK_IMPORTED_MODULE_4__["Service"], {
    image: _assets_images_camera_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Servicios);

/***/ }),

/***/ "./components/servicios/service.js":
/*!*****************************************!*\
  !*** ./components/servicios/service.js ***!
  \*****************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/servicios/service.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const backImage = image => {
  return {
    backgroundImage: "url(" + image + ")"
  };
};

const Service = props => {
  return __jsx("div", {
    className: "block-3 d-md-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: props.right ? "image order-2" : "image",
    style: backImage(props.image),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "subheading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Illustration"), __jsx("h2", {
    className: "heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Even the all-powerful Pointing has no control"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.")));
};

/***/ }),

/***/ "./components/youtube/index.js":
/*!*************************************!*\
  !*** ./components/youtube/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/youtube */ "./services/youtube/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel */ "./components/carousel/index.js");
/* harmony import */ var _common_section_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/section-header/index */ "./common/section-header/index.js");
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/components/youtube/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Youtube = () => {
  const {
    0: videos,
    1: setvideos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const subtitle = " Ultimas Grabaciones en nuestro estudio. Te estamos esperando para realizar tu proxima creacion!";
  const title = "Live Sessions";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _services_youtube__WEBPACK_IMPORTED_MODULE_1__["default"].getVideos().then(responseJson => {
      // console.log(responseJson.items);
      setvideos(responseJson.items.map(item => "https://www.youtube.com/embed/" + item.id.videoId));
    }).catch(err => console.error(err));
  }, []);
  return __jsx("section", {
    className: "section",
    id: "sessions",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_common_section_header_index__WEBPACK_IMPORTED_MODULE_3__["SectionHeader"], {
    title: title,
    subtitle: subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(_carousel__WEBPACK_IMPORTED_MODULE_2__["VideosCarousel"], {
    videos: videos,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Youtube);

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: API_KEY_YOUTUBE, API_KEY_CALENDAR, CHANNEL_ID, RESULTS, YOUTUBE_URL, CALENDAR_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY_YOUTUBE", function() { return API_KEY_YOUTUBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY_CALENDAR", function() { return API_KEY_CALENDAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_ID", function() { return CHANNEL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULTS", function() { return RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_URL", function() { return YOUTUBE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_URL", function() { return CALENDAR_URL; });
const API_KEY_YOUTUBE = "AIzaSyDsYBYm-_l5FP4wGUxF0flHNq3xELb1J_c";
const API_KEY_CALENDAR = "AIzaSyAa75ENYBYuR0iACuf7iYQQV37vbhEVzdE";
const CHANNEL_ID = "UCl2QUPd8gFPKMZN5b-MNL6g";
const RESULTS = 9; //https://www.googleapis.com/youtube/v3/search?key=AIzaSyDsYBYm-_l5FP4wGUxF0flHNq3xELb1J_c&channelId=UCl2QUPd8gFPKMZN5b-MNL6g&part=snippet,id&order=date&maxResults=9

const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY_YOUTUBE}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${RESULTS}`;
const CALENDAR_URL = "https://calendar.google.com/calendar?cid=bmljb2xhc3RhY2NhcmlAZ21haWwuY29t";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar/index.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/about */ "./components/about/index.js");
/* harmony import */ var _components_servicios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/servicios */ "./components/servicios/index.js");
/* harmony import */ var _components_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/youtube */ "./components/youtube/index.js");
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/calendar */ "./components/calendar/index.js");
/* harmony import */ var _components_rider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/rider */ "./components/rider/index.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contact */ "./components/contact/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/nico/Desktop/repos/arstudios/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["StaticRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "app",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, __jsx("header", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
})), __jsx(_components_about__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}), __jsx(_components_servicios__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}), __jsx(_components_calendar__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}), __jsx(_components_rider__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}))));

/***/ }),

/***/ "./services/custom-hooks/on-scroll/index.js":
/*!**************************************************!*\
  !*** ./services/custom-hooks/on-scroll/index.js ***!
  \**************************************************/
/*! exports provided: useScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return useScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useScroll = () => {
  // setting initial value to true
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // running on mount

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 200;

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    }; // setting the event handler from web API


    document.addEventListener("scroll", onScroll); // cleaning up from the web API

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);
  return scroll;
};

/***/ }),

/***/ "./services/youtube/index.js":
/*!***********************************!*\
  !*** ./services/youtube/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./constants.js");

const YotubeService = {
  getVideos: async () => {
    return await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__["YOUTUBE_URL"]).then(response => {
      return response.json();
    }).catch(err => console.error(err));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (YotubeService);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nico/Desktop/repos/arstudios/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Carousel":
/*!*******************************************!*\
  !*** external "react-bootstrap/Carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "react-bootstrap/Spinner":
/*!******************************************!*\
  !*** external "react-bootstrap/Spinner" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Spinner");

/***/ }),

/***/ "react-rotating-text":
/*!**************************************!*\
  !*** external "react-rotating-text" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rotating-text");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-hash-link":
/*!*****************************************!*\
  !*** external "react-router-hash-link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-hash-link");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map