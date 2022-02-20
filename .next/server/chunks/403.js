"use strict";
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const StyledLink = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a",  true ? {
  target: "euxr6bg0"
} : 0)("font-size:14px;line-height:16px;letter-spacing:0.1em;text-transform:uppercase;color:var(--white);&:hover{text-decoration:underline;}opacity:", ({
  isActive
}) => isActive ? 1 : 0.4, ";" + ( true ? "" : 0));

const NavLink = props => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledLink, {
      isActive: props.active,
      href: props.href,
      children: props.children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ })

};
;