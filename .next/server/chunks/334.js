"use strict";
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var _styles_breakpoint_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(708);
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(314);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const StyledTransportTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h2",  true ? {
  target: "e7pgvii5"
} : 0)("margin-top:136px;margin-bottom:48px;flex:0 0 30%;position:relative;font-weight:300;font-size:47px;line-height:150%;color:var(--primary);", _styles_breakpoint_css__WEBPACK_IMPORTED_MODULE_3__/* .onTableWidth */ .x, "{font-size:25px;line-height:160%;margin-left:31px;}" + ( true ? "" : 0));

const StyledTransportContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  true ? {
  target: "e7pgvii4"
} : 0)( true ? {
  name: "1qviwsl",
  styles: "display:flex;justify-content:space-between;margin-left:-80px"
} : 0);

const StyledWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  true ? {
  target: "e7pgvii3"
} : 0)( true ? {
  name: "1fttcpj",
  styles: "display:flex;flex-direction:column"
} : 0);

const TransportInfo = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  true ? {
  target: "e7pgvii2"
} : 0)("padding-top:80px;margin-left:-132px;padding-left:132px;height:310px;width:960px;cursor:pointer;&:hover{background-color:#E5E5E5;}", _styles_breakpoint_css__WEBPACK_IMPORTED_MODULE_3__/* .onTableWidth */ .x, "{margin-left:0px;}" + ( true ? "" : 0));

const StyledTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h3",  true ? {
  target: "e7pgvii1"
} : 0)( true ? {
  name: "1ul3ca4",
  styles: "font-weight:300;font-size:25px;line-height:160%"
} : 0);

const StyledText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  true ? {
  target: "e7pgvii0"
} : 0)( true ? {
  name: "ouxkmi",
  styles: "margin-top:19px;font-weight:300;font-size:18px;line-height:180%"
} : 0);

const AutoImage = () => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/truck.jpg",
    width: 880,
    height: 620,
    alt: "\u0433\u0440\u0443\u0437\u043E\u0432\u0438\u043A",
    objectFit: "cover",
    quality: 100
  });
};

const TrainImage = () => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/tanks.jpg",
    width: 880,
    height: 620,
    alt: "\u0433\u0440\u0443\u0437\u043E\u0432\u0438\u043A",
    objectFit: "cover",
    quality: 100
  });
};

const Transport = () => {
  const {
    0: imageType,
    1: setImageType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('auto');
  const images = {
    auto: AutoImage,
    train: TrainImage
  };
  const TransportImage = images[imageType];

  const hoverHandler = type => {
    setImageType(type);
  };

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Container_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(StyledTransportTitle, {
        children: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"
      })
    }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledTransportContainer, {
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(TransportImage, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledWrapper, {
        children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(TransportInfo, {
          onMouseEnter: () => hoverHandler('auto'),
          children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(StyledTitle, {
            children: "\u0410\u0432\u0442\u043E\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(StyledText, {
            children: "\u2014 \u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0430\u0432\u0442\u043E\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(StyledText, {
            children: "\u2014 \u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0445 \u0438 \u0442\u044F\u0436\u0435\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u0445 \u0433\u0440\u0443\u0437\u043E\u0432"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(StyledText, {
            children: "\u2014 \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432 \u043B\u044E\u0431\u0443\u044E \u0442\u043E\u0447\u043A\u0443 \u0420\u043E\u0441\u0441\u0438\u0438"
          })]
        }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(TransportInfo, {
          onMouseEnter: () => hoverHandler('train'),
          children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledTitle, {
            children: ["\u0416\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u044B\u0439", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), " \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"]
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(StyledText, {
            children: "\u041D\u0430 \u0437\u0430\u0432\u043E\u0434\u0435 \u0438\u043C\u0435\u0435\u0442\u0441\u044F \u0436/\u0434 \u0432\u0435\u0442\u043A\u0430, \u0437\u0430\u0445\u043E\u0434\u044F\u0449\u0430\u044F \u0432 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0437\u0434\u0430\u043D\u0438\u0435"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transport);

/***/ })

};
;