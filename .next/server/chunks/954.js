"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SideMenu_SideMenu)
});

// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(777);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./public/arrow-up.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrowUp = function SvgArrowUp(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 49,
    height: 49,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.054.352 24.407 0l.353.352 24.054 24-.706.708-23.2-23.148v46.794h-1V1.911L.705 25.06 0 24.352l24.054-24Z",
    fill: "#1C1C1C"
  })));
};

/* harmony default export */ const arrow_up = (SvgArrowUp);
;// CONCATENATED MODULE: ./public/Union.svg
var Union_path;

function Union_extends() { Union_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Union_extends.apply(this, arguments); }



var SvgUnion = function SvgUnion(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Union_extends({
    width: 30,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Union_path || (Union_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30 0H0v2h30V0Zm0 10H0v2h30v-2Z",
    fill: "#1C1C1C"
  })));
};

/* harmony default export */ const Union = (SvgUnion);
// EXTERNAL MODULE: ./styles/breakpoint.css.ts
var breakpoint_css = __webpack_require__(708);
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
;// CONCATENATED MODULE: ./pages/components/SideMenu/SideMenu.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const SideNav = base_default()("div",  true ? {
  target: "e1yzap367"
} : 0)("width:80px;background-color:var(--gray);padding-top:20px;", breakpoint_css/* onSDesctopWidth */.U, "{display:none;}" + ( true ? "" : 0));

const Menu = base_default()("div",  true ? {
  target: "e1yzap366"
} : 0)( true ? {
  name: "y1kcg9",
  styles: "margin-top:20px;font-size:14px;line-height:16px;text-align:right;letter-spacing:0.1em;text-transform:uppercase;color:#1C1C1C;transform:rotate(90deg)"
} : 0);

const StyledWrapper = base_default()("div",  true ? {
  target: "e1yzap365"
} : 0)( true ? {
  name: "h7498k",
  styles: "display:flex;flex-direction:column;align-items:center;margin-top:44px"
} : 0);

const StyledHamburger = /*#__PURE__*/base_default()(Union,  true ? {
  target: "e1yzap364"
} : 0)( true ? {
  name: "1azpx8r",
  styles: "margin-bottom:20px"
} : 0);

const SideBarContainer = base_default()("div",  true ? {
  target: "e1yzap363"
} : 0)( true ? {
  name: "jwwtmd",
  styles: "display:flex;align-items:center;justify-content:space-between;flex-direction:column;height:100%"
} : 0);

const ScrollDown = base_default()("div",  true ? {
  target: "e1yzap362"
} : 0)( true ? {
  name: "1py7svu",
  styles: "margin-top:709px;width:143px;font-size:14px;line-height:16px;letter-spacing:0.1em;text-transform:uppercase;color:#1C1C1C;transform:rotate(90deg)"
} : 0);

const StyledArrowDown = /*#__PURE__*/base_default()(arrow_up,  true ? {
  target: "e1yzap361"
} : 0)( true ? {
  name: "l1yjr",
  styles: "display:block;margin-top:70px;transform:rotate(180deg)"
} : 0);

const StyledArrowUp = /*#__PURE__*/base_default()(arrow_up,  true ? {
  target: "e1yzap360"
} : 0)( true ? {
  name: "18wgsbw",
  styles: "display:block;margin-top:auto;margin-bottom:10px"
} : 0);

const SideMenu = () => {
  return jsx_runtime_.jsx(SideNav, {
    children: (0,jsx_runtime_.jsxs)(SideBarContainer, {
      children: [(0,jsx_runtime_.jsxs)(StyledWrapper, {
        children: [jsx_runtime_.jsx(StyledHamburger, {}), jsx_runtime_.jsx(Menu, {
          children: "\u041C\u0435\u043D\u044E"
        })]
      }), jsx_runtime_.jsx(ScrollDown, {
        children: "\u041B\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u0432\u043D\u0438\u0437"
      }), jsx_runtime_.jsx(StyledArrowDown, {}), jsx_runtime_.jsx(StyledArrowUp, {})]
    })
  });
};

/* harmony default export */ const SideMenu_SideMenu = (SideMenu);

/***/ })

};
;