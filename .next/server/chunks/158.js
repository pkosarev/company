"use strict";
exports.id = 158;
exports.ids = [158];
exports.modules = {

/***/ 158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link_NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var _styles_breakpoint_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(708);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const StyledHeaderMenu = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("nav",  true ? {
  target: "e3gmwt13"
} : 0)( true ? {
  name: "1buq5ki",
  styles: "margin:0 0 0 auto"
} : 0);

const StyledMenu = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(StyledHeaderMenu,  true ? {
  target: "e3gmwt12"
} : 0)("padding:5px 0;", _styles_breakpoint_css__WEBPACK_IMPORTED_MODULE_3__/* .onSDesctopWidth */ .U, "{display:none;}" + ( true ? "" : 0));

const StyledMenuList = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("ul",  true ? {
  target: "e3gmwt11"
} : 0)( true ? {
  name: "5kov97",
  styles: "display:flex;flex-wrap:wrap"
} : 0);

const StyledMenuItem = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("li",  true ? {
  target: "e3gmwt10"
} : 0)("margin:0 80px 0 0;", _styles_breakpoint_css__WEBPACK_IMPORTED_MODULE_3__/* .onSDesctopWidth */ .U, "{margin:0 10px 0 0;}" + ( true ? "" : 0));

const Navigation = () => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledMenu, {
    children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledMenuList, {
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledMenuItem, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Link_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          active: true,
          href: '/',
          children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
        })
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledMenuItem, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Link_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: '/',
          children: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0438 \u0423\u0441\u043B\u0443\u0433\u0438"
        })
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledMenuItem, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Link_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: '/',
          children: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"
        })
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledMenuItem, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Link_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: '/',
          children: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"
        })
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledMenuItem, {
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Link_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: '/',
          children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ onTableWidth),
/* harmony export */   "U": () => (/* binding */ onSDesctopWidth)
/* harmony export */ });
const tableWidth = '768px';
const sDesctopWidth = '1280px';
const onTableWidth = `@media screen and (max-width: ${tableWidth})`;
const onSDesctopWidth = `@media screen and (max-width: ${sDesctopWidth})`;

/***/ })

};
;