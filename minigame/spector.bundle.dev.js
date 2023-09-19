/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/embeddedFrontend/styles/captureMenu.scss":
/*!******************************************************!*\
  !*** ./src/embeddedFrontend/styles/captureMenu.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".captureMenuComponent {\n  position: absolute;\n  padding: 7px;\n  z-index: 99999;\n  top: 10px;\n  left: 50%;\n  margin-left: -209px;\n  height: 40px;\n  width: 400px;\n  border: 2px solid #222;\n  background-color: #2c2c2c;\n  visibility: hidden;\n  display: none;\n  color: #f9f9f9;\n  font-family: Consolas, monaco, monospace;\n  font-size: 14px;\n  font-weight: 500;\n}\n.captureMenuComponent.active {\n  visibility: visible;\n  display: block;\n}\n.captureMenuComponent, .captureMenuComponent:after, .captureMenuComponent:before {\n  box-sizing: content-box;\n}\n\n.captureMenuLogComponent {\n  position: absolute;\n  padding: 7px;\n  z-index: 80000;\n  top: 66px;\n  left: 50%;\n  margin-left: -209px;\n  height: 40px;\n  width: 400px;\n  border: 2px solid #222;\n  background-color: #2c2c2c;\n  visibility: hidden;\n  display: none;\n  color: #f9f9f9;\n  font-family: Consolas, monaco, monospace;\n  font-size: 14px;\n  font-weight: 500;\n}\n.captureMenuLogComponent.active {\n  visibility: visible;\n  display: block;\n}\n.captureMenuLogComponent, .captureMenuLogComponent:after, .captureMenuLogComponent:before {\n  box-sizing: content-box;\n}\n.captureMenuLogComponent span.error {\n  color: red;\n}\n\n.canvasListComponent {\n  float: left;\n  width: 50%;\n  height: 100%;\n}\n.canvasListComponent [commandName=onCanvasSelection] {\n  vertical-align: center;\n  line-height: 40px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 190px;\n  display: inline-block;\n  overflow: hidden;\n  margin: 0px 5px;\n}\n.canvasListComponent [commandName=onCanvasSelection]:hover {\n  color: #c9c9c9;\n  cursor: pointer;\n  transition: color 0.3s;\n  -webkit-transition: color 0.3s;\n  -moz-transition: color 0.3s;\n}\n.canvasListComponent ul {\n  margin: 0px;\n  padding: 7px;\n  list-style: none;\n  position: absolute;\n  top: 54px;\n  left: -2px;\n  width: 400px;\n  border: 2px solid #222;\n  background-color: #2c2c2c;\n}\n.canvasListComponent ul li {\n  margin: 5px;\n}\n.canvasListComponent ul li:hover {\n  color: #c9c9c9;\n  cursor: pointer;\n  transition: color 0.3s;\n  -webkit-transition: color 0.3s;\n  -moz-transition: color 0.3s;\n}\n\n.captureMenuActionsComponent {\n  float: left;\n  width: 30%;\n  height: 100%;\n  margin-top: 7.5px;\n}\n.captureMenuActionsComponent div {\n  float: left;\n}\n.captureMenuActionsComponent [commandName=onCaptureRequested] {\n  border-radius: 50%;\n  background: #2c2c2c;\n  border: 2px solid red;\n  width: 21px;\n  height: 21px;\n}\n.captureMenuActionsComponent [commandName=onCaptureRequested]:hover {\n  background: red;\n  cursor: pointer;\n  transition: background 0.3s;\n  -webkit-transition: background 0.3s;\n  -moz-transition: background 0.3s;\n}\n.captureMenuActionsComponent [commandName=onPlayRequested], .captureMenuActionsComponent [commandName=onPlayNextFrameRequested] {\n  width: 21px;\n  height: 21px;\n  border: 2px solid #f9f9f9;\n  border-radius: 50%;\n  margin-left: 9px;\n}\n.captureMenuActionsComponent [commandName=onPlayRequested]:before, .captureMenuActionsComponent [commandName=onPlayNextFrameRequested]:before {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  margin-top: 6px;\n  margin-left: 4px;\n  width: 7px;\n  height: 7px;\n  border-top: 2px solid #f9f9f9;\n  border-right: 2px solid #f9f9f9;\n  background-color: #f9f9f9;\n  -moz-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  z-index: -20;\n}\n.captureMenuActionsComponent [commandName=onPlayRequested]:after, .captureMenuActionsComponent [commandName=onPlayNextFrameRequested]:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 8px;\n  height: 20px;\n  background-color: #2c2c2c;\n  z-index: -10;\n}\n.captureMenuActionsComponent [commandName=onPlayRequested]:hover, .captureMenuActionsComponent [commandName=onPlayNextFrameRequested]:hover {\n  cursor: pointer;\n  border: 2px solid #c9c9c9;\n  transition: border 0.3s;\n  -webkit-transition: border 0.3s;\n  -moz-transition: border 0.3s;\n}\n.captureMenuActionsComponent [commandName=onPauseRequested] {\n  width: 21px;\n  height: 21px;\n  border: 2px solid #f9f9f9;\n  border-radius: 50%;\n  margin-left: 9px;\n}\n.captureMenuActionsComponent [commandName=onPauseRequested]:before {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 2px;\n  height: 13px;\n  margin-left: 12px;\n  margin-top: 4px;\n  background-color: #f9f9f9;\n}\n.captureMenuActionsComponent [commandName=onPauseRequested]:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 2px;\n  height: 13px;\n  margin-left: 7px;\n  margin-top: 4px;\n  background-color: #f9f9f9;\n}\n.captureMenuActionsComponent [commandName=onPauseRequested]:hover {\n  cursor: pointer;\n  border: 2px solid #c9c9c9;\n  transition: border 0.3s;\n  -webkit-transition: border 0.3s;\n  -moz-transition: border 0.3s;\n}\n.captureMenuActionsComponent [commandName=onPlayNextFrameRequested]:before {\n  background-color: #2c2c2c;\n}\n\n.fpsCounterComponent {\n  float: left;\n  width: 20%;\n  vertical-align: center;\n  line-height: 40px;\n  white-space: nowrap;\n}", "",{"version":3,"sources":["webpack://./src/embeddedFrontend/styles/captureMenu.scss","webpack://./src/embeddedFrontend/styles/_main.scss"],"names":[],"mappings":"AAUA;EACE,kBAAA;EACA,YALY;EAMZ,cAAA;EACA,SANQ;EAOR,SAAA;EACA,mBAAA;EACA,YAd2B;EAe3B,YAhB0B;EAiB1B,sBAAA;EACA,yBCjBe;EDmBf,kBAAA;EACA,aAAA;EACA,cCpBU;EDsBV,wCAAA;EACD,eAAA;EACC,gBAAA;AAVF;AAYE;EACE,mBAAA;EACA,cAAA;AAVJ;AAaE;EACE,uBAAA;AAXJ;;AAeA;EACE,kBAAA;EACA,YAnCY;EAoCZ,cAAA;EACA,SAAA;EACA,SAAA;EACA,mBAAA;EACA,YA5C2B;EA6C3B,YA9C0B;EA+C1B,sBAAA;EACA,yBC/Ce;EDiDf,kBAAA;EACA,aAAA;EACA,cClDU;EDoDV,wCAAA;EACD,eAAA;EACC,gBAAA;AAdF;AAgBE;EACE,mBAAA;EACA,cAAA;AAdJ;AAiBE;EACE,uBAAA;AAfJ;AAkBE;EACE,UAAA;AAhBJ;;AAoBA;EACE,WAAA;EACA,UAAA;EACA,YAAA;AAjBF;AAmBE;EACE,sBAAA;EACA,iBA9EyB;EA+EzB,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;AAjBJ;AAmBI;EACE,cCpFY;EDqFZ,eAAA;EACA,sBAAA;EACA,8BAAA;EACA,2BAAA;AAjBN;AAqBE;EACE,WAAA;EACA,YA7FU;EA8FV,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAvGwB;EAwGxB,sBAAA;EACA,yBCxGa;ADqFjB;AAsBI;EACE,WCrGG;ADiFT;AAsBM;EACE,cC5GU;ED6GV,eAAA;EACA,sBAAA;EACA,8BAAA;EACA,2BAAA;AApBR;;AA2BA;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,iBAAA;AAxBF;AA0BE;EACE,WAAA;AAxBJ;AA2BE;EACE,kBAAA;EACA,mBCtIa;EDuIb,qBAAA;EACA,WAAA;EACA,YAAA;AAzBJ;AA2BI;EACE,eAAA;EACA,eAAA;EACA,2BAAA;EACA,mCAAA;EACA,gCAAA;AAzBN;AA6BE;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;AA3BJ;AA6BI;EACE,WAAA;EACA,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,UAAA;EACA,WAAA;EACA,6BAAA;EACA,+BAAA;EACA,yBCpKM;EDqKN,6BAAA;EACA,gCAAA;EACA,wBAAA;EACA,YAAA;AA3BN;AA8BI;EACC,WAAA;EACC,kBAAA;EACA,qBAAA;EACA,UAAA;EACA,YAAA;EACA,yBClLW;EDmLX,YAAA;AA5BN;AA+BI;EACE,eAAA;EACA,yBAAA;EACA,uBAAA;EACA,+BAAA;EACA,4BAAA;AA7BN;AAgCE;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;AA9BJ;AAgCI;EACE,WAAA;EACA,kBAAA;EACA,qBAAA;EACA,UAvMG;EAwMH,YAAA;EACA,iBAAA;EACA,eAAA;EACA,yBC5MM;AD8KZ;AAiCI;EACE,WAAA;EACA,kBAAA;EACA,qBAAA;EACA,UAlNG;EAmNH,YAAA;EACA,gBAAA;EACA,eAAA;EACA,yBCvNM;ADwLZ;AAkCI;EACE,eAAA;EACA,yBAAA;EACA,uBAAA;EACA,+BAAA;EACA,4BAAA;AAhCN;AAuCI;EACE,yBCxOW;ADmMjB;;AA0CA;EACE,WAAA;EACA,UAAA;EACA,sBAAA;EACA,iBAjP2B;EAkP3B,mBAAA;AAvCF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/embeddedFrontend/styles/resultView.scss":
/*!*****************************************************!*\
  !*** ./src/embeddedFrontend/styles/resultView.scss ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The main window */\n.resultViewComponent {\n  position: absolute;\n  z-index: 99999;\n  border: 1px solid black;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #222;\n  opacity: 1;\n  visibility: hidden;\n  display: none;\n  color: #f9f9f9;\n  font-family: Consolas, monaco, monospace;\n  font-size: 14px;\n  font-weight: 500;\n}\n.resultViewComponent.active {\n  visibility: visible;\n  display: block;\n}\n.resultViewComponent, .resultViewComponent:after, .resultViewComponent:before {\n  box-sizing: content-box;\n}\n\n.resultViewMenuComponent {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  line-height: 40px;\n  flex: 1 100%;\n  display: flex;\n  flex-flow: row wrap;\n  height: 42px;\n  outline: 0 none;\n  border-bottom: 2px solid #222;\n  box-sizing: border-box;\n  list-style: none;\n  margin: 0;\n  background: #2c2c2c;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n}\n.resultViewMenuComponent .resultViewMenuOpen {\n  display: none;\n  visibility: hidden;\n}\n.resultViewMenuComponent a {\n  outline: 0 none;\n  text-decoration: none;\n  display: block;\n  padding: 0 20px 0 20px;\n  color: #cccccc;\n  background: #2c2c2c;\n  box-sizing: border-box;\n  height: 100%;\n}\n.resultViewMenuComponent a.active {\n  background: #222;\n  color: white;\n  font-weight: 400;\n  border-bottom: 2px solid #F0640D;\n}\n.resultViewMenuComponent a:hover {\n  background: #222;\n  color: #c9c9c9;\n  cursor: pointer;\n  transition: color 0.3s;\n  -webkit-transition: color 0.3s;\n  -moz-transition: color 0.3s;\n}\n.resultViewMenuComponent a:hover.active {\n  color: #F0640D;\n  transition: color 0;\n  -webkit-transition: color 0;\n  -moz-transition: color 0;\n}\n.resultViewMenuComponent a.clearSearch {\n  padding: 0px;\n  margin-left: -30px;\n  margin-right: 20px;\n  z-index: 9000;\n  color: #f9f9f9;\n}\n.resultViewMenuComponent a.clearSearch:hover {\n  background: #2c2c2c;\n  color: #F0640D;\n}\n@media all and (max-width: 1024px) {\n  .resultViewMenuComponent {\n    padding: 0px;\n    position: absolute;\n    overflow-y: visible;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 999999;\n    display: block;\n  }\n  .resultViewMenuComponent .resultViewMenuOpen {\n    display: block;\n    visibility: visible;\n  }\n  .resultViewMenuComponent li:not(.resultViewMenuSmall) {\n    display: none;\n    visibility: hidden;\n  }\n  .resultViewMenuComponent li {\n    background: #2c2c2c;\n  }\n  .resultViewMenuComponent li.searchContainer {\n    background: #464646;\n  }\n  .resultViewMenuComponent a.active {\n    background: #2c2c2c;\n  }\n}\n.resultViewMenuComponent input {\n  border: 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  padding: 0 20px 0 20px;\n  background: #464646;\n  color: #f9f9f9;\n  height: 40px;\n  position: relative;\n  top: -1px;\n  box-sizing: border-box;\n}\n.resultViewMenuComponent input:focus {\n  border: 0;\n  outline: 0 none;\n}\n.resultViewMenuComponent .clearSearch {\n  position: relative;\n  background: transparent;\n  display: inline;\n  padding: 0px;\n  margin-left: -30px;\n  z-index: 9000;\n  color: #F0640D;\n}\n.resultViewMenuComponent .clearSearch:hover {\n  background: transparent !important;\n}\n.resultViewMenuComponent ::-webkit-input-placeholder { /* WebKit, Blink, Edge */\n  color: #cccccc;\n}\n.resultViewMenuComponent :-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n  color: #cccccc;\n}\n.resultViewMenuComponent ::-moz-placeholder { /* Mozilla Firefox 19+ */\n  color: #cccccc;\n}\n.resultViewMenuComponent :-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: #cccccc;\n}\n\n.resultViewContentComponent {\n  position: absolute;\n  top: 40px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.informationColumnLeftComponent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 50%;\n  overflow: auto;\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.informationColumnRightComponent {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.captureListComponent {\n  position: absolute;\n  top: 40px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n  z-index: 9000;\n  display: none;\n  visibility: hidden;\n  overflow-y: visible;\n  overflow-x: hidden;\n}\n.captureListComponent.active {\n  display: block;\n  visibility: visible;\n}\n.captureListComponent .openCaptureFile {\n  border: 1px dashed #f9f9f9;\n  display: block;\n  margin: 5px;\n  padding: 5px;\n  text-align: center;\n  font-style: italic;\n}\n.captureListComponent .openCaptureFile span {\n  line-height: 100%;\n  vertical-align: middle;\n}\n.captureListComponent ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n}\n.captureListComponent ul li {\n  margin: 5px;\n  border: 1px solid #606060;\n}\n.captureListComponent ul li img {\n  width: 295px;\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, #c9c9c9), color-stop(0.25, transparent)), -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.25, #c9c9c9), color-stop(0.25, transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.75, transparent), color-stop(0.75, #c9c9c9)), -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.75, transparent), color-stop(0.75, #c9c9c9));\n  background-image: -moz-linear-gradient(45deg, #d9d9d9 25%, transparent 25%), -moz-linear-gradient(-45deg, #d9d9d9 25%, transparent 25%), -moz-linear-gradient(45deg, transparent 75%, #d9d9d9 75%), -moz-linear-gradient(-45deg, transparent 75%, #d9d9d9 75%);\n  -webkit-background-size: 50px 51px;\n  -moz-background-size: 50px 50px;\n  background-size: 50px 50px;\n  background-position: 0 0, 25px 0, 25px -25px, 0px 25px;\n  display: block;\n}\n.captureListComponent ul li span {\n  display: block;\n  text-align: center;\n  border: 5px solid #222;\n}\n.captureListComponent ul li span .captureListItemSave {\n  color: #f9f9f9;\n  font-size: 16px;\n  margin-left: 10px;\n  position: relative;\n  padding: 3px 8px 3px 32px;\n}\n.captureListComponent ul li span .captureListItemSave:before, .captureListComponent ul li span .captureListItemSave:after {\n  box-sizing: border-box;\n  content: \"\";\n  position: absolute;\n}\n.captureListComponent ul li span .captureListItemSave:before {\n  background: #d9d9d9;\n  border-color: #f9f9f9;\n  border-style: solid;\n  border-width: 7px 2px 1px;\n  border-radius: 1px;\n  height: 16px;\n  left: 8px;\n  top: 5px;\n  width: 16px;\n}\n.captureListComponent ul li span .captureListItemSave:after {\n  background: #f9f9f9;\n  border-color: #d9d9d9;\n  border-style: solid;\n  border-width: 1px 1px 1px 4px;\n  height: 5px;\n  left: 13px;\n  top: 5px;\n  width: 7px;\n}\n.captureListComponent ul li:hover {\n  cursor: pointer;\n}\n.captureListComponent ul li.active span {\n  background: #F0640D;\n  border: 5px solid #F0640D;\n}\n.captureListComponent ul li.active span .captureListItemSave:before {\n  background: #F0640D;\n}\n.captureListComponent ul li.active span .captureListItemSave:after {\n  border-color: #F0640D;\n}\n\n.visualStateListComponent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  padding: 5px;\n  right: 80%;\n  overflow-y: visible;\n  overflow-x: hidden;\n}\n.visualStateListComponent ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.visualStateListComponent ul li {\n  margin: 20px 15px 0px 15px;\n  border: 1px solid #606060;\n}\n.visualStateListComponent ul li img {\n  display: block;\n  padding: 0px;\n  box-sizing: border-box;\n  max-height: 600px;\n  width: 100%;\n  margin: 0 auto;\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, #c9c9c9), color-stop(0.25, transparent)), -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.25, #c9c9c9), color-stop(0.25, transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.75, transparent), color-stop(0.75, #c9c9c9)), -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.75, transparent), color-stop(0.75, #c9c9c9));\n  background-image: -moz-linear-gradient(45deg, #d9d9d9 25%, transparent 25%), -moz-linear-gradient(-45deg, #d9d9d9 25%, transparent 25%), -moz-linear-gradient(45deg, transparent 75%, #d9d9d9 75%), -moz-linear-gradient(-45deg, transparent 75%, #d9d9d9 75%);\n  -webkit-background-size: 50px 51px;\n  -moz-background-size: 50px 50px;\n  background-size: 50px 50px;\n  background-position: 0 0, 25px 0, 25px -25px, 0px 25px;\n}\n.visualStateListComponent ul li:hover {\n  cursor: pointer;\n}\n.visualStateListComponent ul li span {\n  border: 5px solid #222;\n  background: #222;\n  box-sizing: border-box;\n  display: inline-block;\n  width: 100%;\n  margin: 0px;\n  padding: 5px;\n  word-wrap: break-word;\n}\n.visualStateListComponent ul li.active {\n  border: 2px solid #F0640D;\n}\n\n.commandListComponent {\n  position: absolute;\n  top: 0;\n  left: 20%;\n  right: 40%;\n  bottom: 0;\n  color: lightgray;\n}\n.commandListComponent ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  overflow-y: visible;\n  overflow-x: hidden;\n  height: 100%;\n}\n.commandListComponent ul li {\n  padding: 8px;\n}\n.commandListComponent ul li span {\n  word-wrap: break-word;\n  line-height: 22px;\n}\n.commandListComponent ul li:hover {\n  color: #f9f9f9;\n  cursor: pointer;\n  transition: color 0.3s;\n  -webkit-transition: color 0.3s;\n  -moz-transition: color 0.3s;\n}\n.commandListComponent ul li:nth-child(even) {\n  background: #2c2c2c;\n}\n.commandListComponent ul li:nth-child(odd) {\n  background: #222;\n}\n.commandListComponent ul li .important {\n  font-weight: 800;\n}\n.commandListComponent ul li .important.deprecated {\n  color: red;\n}\n.commandListComponent ul li .important.unused {\n  color: yellow;\n}\n.commandListComponent ul li .important.disabled {\n  color: gray;\n}\n.commandListComponent ul li .important.redundant {\n  color: orange;\n}\n.commandListComponent ul li .important.valid {\n  color: greenyellow;\n}\n.commandListComponent ul li .marker {\n  font-size: 16px;\n  font-weight: 900;\n  color: greenyellow;\n}\n.commandListComponent ul li.active {\n  background: #f37628;\n  color: #222;\n}\n.commandListComponent ul li.drawCall {\n  background: #5db0d7;\n  color: #222;\n}\n.commandListComponent ul li a {\n  margin-left: 5px;\n  margin-right: 5px;\n  color: #5db0d7;\n  background: #222;\n  padding: 5px;\n  font-weight: 900;\n  display: inline-block;\n}\n\n.commandDetailComponent {\n  position: absolute;\n  top: 0;\n  left: 60%;\n  right: 0;\n  bottom: 0;\n  overflow-y: visible;\n  overflow-x: hidden;\n}\n\n.jsonGroupComponent {\n  display: block;\n  margin: 10px;\n  padding: 10px;\n  padding-bottom: 5px;\n}\n.jsonGroupComponent .jsonGroupComponentTitle {\n  display: block;\n  font-size: 16px;\n  color: #5db0d7;\n  border-bottom: 1px solid #5db0d7;\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  text-transform: capitalize;\n}\n.jsonGroupComponent ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.jsonGroupComponent ul li:nth-child(even) {\n  background: #222;\n}\n.jsonGroupComponent ul li:nth-child(odd) {\n  background: #222;\n}\n\n.jsonItemComponentKey {\n  color: #F0640D;\n}\n\n.jsonItemComponentValue {\n  white-space: pre-wrap;\n}\n\n.jsonItemImageHolder {\n  width: 50%;\n  margin: auto;\n}\n.jsonItemImageHolder .jsonItemImage {\n  margin: 5px;\n  display: block;\n  border: 1px solid #606060;\n  width: 100%;\n}\n.jsonItemImageHolder .jsonItemImage img {\n  width: 100%;\n  display: block;\n  margin: auto;\n  max-width: 256px;\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, #c9c9c9), color-stop(0.25, transparent)), -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.25, #c9c9c9), color-stop(0.25, transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.75, transparent), color-stop(0.75, #c9c9c9)), -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.75, transparent), color-stop(0.75, #c9c9c9));\n  background-image: -moz-linear-gradient(45deg, #d9d9d9 25%, transparent 25%), -moz-linear-gradient(-45deg, #d9d9d9 25%, transparent 25%), -moz-linear-gradient(45deg, transparent 75%, #d9d9d9 75%), -moz-linear-gradient(-45deg, transparent 75%, #d9d9d9 75%);\n  -webkit-background-size: 50px 51px;\n  -moz-background-size: 50px 50px;\n  background-size: 50px 50px;\n  background-position: 0 0, 25px 0, 25px -25px, 0px 25px;\n}\n.jsonItemImageHolder .jsonItemImage span {\n  margin: 0px;\n  padding: 5px;\n  word-wrap: break-word;\n  display: inline-block;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n[commandName=onOpenSourceClicked]:hover {\n  color: #f9f9f9;\n  cursor: pointer;\n  transition: color 0.3s;\n  -webkit-transition: color 0.3s;\n  -moz-transition: color 0.3s;\n}\n\n.jsonVisualStateItemComponent {\n  text-align: center;\n  padding: 10px;\n}\n.jsonVisualStateItemComponent img {\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, #c9c9c9), color-stop(0.25, transparent)), -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.25, #c9c9c9), color-stop(0.25, transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.75, transparent), color-stop(0.75, #c9c9c9)), -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.75, transparent), color-stop(0.75, #c9c9c9));\n  background-image: -moz-linear-gradient(45deg, #d9d9d9 25%, transparent 25%), -moz-linear-gradient(-45deg, #d9d9d9 25%, transparent 25%), -moz-linear-gradient(45deg, transparent 75%, #d9d9d9 75%), -moz-linear-gradient(-45deg, transparent 75%, #d9d9d9 75%);\n  -webkit-background-size: 50px 51px;\n  -moz-background-size: 50px 50px;\n  background-size: 50px 50px;\n  background-position: 0 0, 25px 0, 25px -25px, 0px 25px;\n  border: 1px solid #606060;\n  margin: 5px;\n  width: 100%;\n  max-width: 512px;\n  max-height: 800px;\n}\n.jsonVisualStateItemComponent span {\n  display: block;\n}\n\n.jsonContentComponent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 10px;\n  overflow-y: visible;\n  overflow-x: hidden;\n}\n\n.jsonItemComponentValue {\n  word-break: break-all;\n  white-space: normal;\n}\n\n.jsonSourceItemComponentOpen {\n  font-weight: bold;\n  color: #5db0d7;\n  text-decoration: underline;\n}\n\n.sourceCodeMenuComponentContainer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 48px;\n  right: 40%;\n}\n\n.sourceCodeMenuComponentFooter {\n  position: absolute;\n  left: 0;\n  right: 40%;\n  bottom: 0;\n  padding: 0 15px;\n}\n\n.sourceCodeMenuComponent {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 13px;\n  font-weight: 300;\n  line-height: 40px;\n  flex: 1 100%;\n  display: flex;\n  flex-flow: row wrap;\n  height: 42px;\n  outline: 0 none;\n  border-bottom: 2px solid #222;\n  box-sizing: border-box;\n  list-style: none;\n  margin: 0;\n  background: #2c2c2c;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n}\n.sourceCodeMenuComponent .resultViewMenuOpen {\n  display: none;\n  visibility: hidden;\n}\n.sourceCodeMenuComponent a {\n  outline: 0 none;\n  text-decoration: none;\n  display: block;\n  padding: 0 20px 0 20px;\n  color: #cccccc;\n  background: #2c2c2c;\n  box-sizing: border-box;\n  height: 100%;\n}\n.sourceCodeMenuComponent a.active {\n  background: #222;\n  color: white;\n  font-weight: 400;\n  border-bottom: 2px solid #F0640D;\n}\n.sourceCodeMenuComponent a:hover {\n  background: #222;\n  color: #c9c9c9;\n  cursor: pointer;\n  transition: color 0.3s;\n  -webkit-transition: color 0.3s;\n  -moz-transition: color 0.3s;\n}\n.sourceCodeMenuComponent a:hover.active {\n  color: #F0640D;\n  transition: color 0;\n  -webkit-transition: color 0;\n  -moz-transition: color 0;\n}\n.sourceCodeMenuComponent a.clearSearch {\n  display: inline-block;\n  padding: 0px;\n  margin-left: -30px;\n  margin-right: 20px;\n  z-index: 9000;\n  color: #f9f9f9;\n}\n.sourceCodeMenuComponent a.clearSearch:hover {\n  background: #2c2c2c;\n  color: #F0640D;\n}\n.sourceCodeMenuComponent input {\n  border: 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  padding: 0 20px 0 20px;\n  background: #464646;\n  color: #f9f9f9;\n  height: 100%;\n  position: relative;\n  top: -1px;\n  box-sizing: border-box;\n}\n.sourceCodeMenuComponent input:focus {\n  border: 0;\n  outline: 0 none;\n}\n.sourceCodeMenuComponent .clearSearch {\n  position: relative;\n  background: transparent;\n  display: inline;\n  padding: 0px;\n  margin-left: -30px;\n  z-index: 9000;\n  color: #F0640D;\n}\n.sourceCodeMenuComponent .clearSearch:hover {\n  background: transparent !important;\n}\n.sourceCodeMenuComponent ::-webkit-input-placeholder { /* WebKit, Blink, Edge */\n  color: #cccccc;\n}\n.sourceCodeMenuComponent :-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n  color: #cccccc;\n}\n.sourceCodeMenuComponent ::-moz-placeholder { /* Mozilla Firefox 19+ */\n  color: #cccccc;\n}\n.sourceCodeMenuComponent :-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: #cccccc;\n}\n\n.sourceCodeComponent {\n  position: absolute;\n  top: 42px;\n  left: 0;\n  bottom: 48px;\n  right: 40%;\n  background: #222;\n  z-index: 9000;\n  overflow-x: visible;\n  overflow: auto;\n}\n.sourceCodeComponent .sourceCodeComponentTitle {\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 50px;\n  color: #F0640D;\n  padding: 1em;\n  margin: 0.5em 0;\n}", "",{"version":3,"sources":["webpack://./src/embeddedFrontend/styles/resultView.scss","webpack://./src/embeddedFrontend/styles/_main.scss"],"names":[],"mappings":"AAEA,oBAAA;AACA;EACE,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,sBCTU;EDUV,UAAA;EACA,kBAAA;EACA,aAAA;EACA,cCXU;EDaV,wCAAA;EACA,eAAA;EACA,gBAAA;AADF;AAGE;EACE,mBAAA;EACA,cAAA;AADJ;AAIE;EACE,uBAAA;AAFJ;;AAUA;EACE,qCAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAPW;EAQX,YAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,6BAAA;EACC,sBAAA;EACD,gBAAA;EACA,SAAA;EAEA,mBChDe;EDkDf,oBAAA;EACA,iBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EAEA,2BAAA;EACA,mBAAA;EACA,yBAAA;AAXF;AAaE;EACE,aAAA;EACA,kBAAA;AAXJ;AAcE;EACE,eAAA;EACA,qBAAA;EACA,cAAA;EACA,sBAAA;EACA,cAAA;EACA,mBCvEa;EDwEb,sBAAA;EACA,YAAA;AAZJ;AAcI;EACE,gBC7EM;ED8EN,YAAA;EACA,gBAAA;EACA,gCAAA;AAZN;AAeI;EACE,gBCpFM;EDqFN,cCjFY;EDkFZ,eAAA;EACA,sBAAA;EACA,8BAAA;EACA,2BAAA;AAbN;AAeM;EACE,cCvFc;EDwFd,mBAAA;EACA,2BAAA;EACA,wBAAA;AAbR;AAiBI;EAEE,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,cCvGM;ADuFZ;AAkBM;EACE,mBC3GS;ED4GT,cCxGc;ADwFtB;AAqBE;EAjFF;IAmGI,YAAA;IACA,kBAAA;IACA,mBAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;IACA,WAAA;IACA,eAAA;IACA,cAAA;EAnCF;EAUE;IACE,cAAA;IACA,mBAAA;EARJ;EAWE;IACE,aAAA;IACA,kBAAA;EATJ;EAYE;IACE,mBC7HW;EDmHf;EAYE;IACE,mBAAA;EAVJ;EAuBE;IACE,mBC9IW;EDyHf;AACF;AAwBE;EACE,SAAA;EACA,qCAAA;EACA,gBAAA;EACA,sBAAA;EAIA,mBAAA;EACA,cC1JQ;ED2JR,YA9HS;EA+HT,kBAAA;EACA,SAAA;EACA,sBAAA;AAzBJ;AA2BI;EAEE,SAAA;EAEA,eAAA;AA3BN;AA+BE;EACE,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,cC5KkB;AD+ItB;AA+BI;EACE,kCAAA;AA7BN;AAiCE,uDAAA,wBAAA;EACE,cAAA;AA/BJ;AAiCE,6CAAA,4BAAA;EACE,cAAA;AA/BJ;AAiCE,8CAAA,wBAAA;EACE,cAAA;AA/BJ;AAiCE,kDAAA,4BAAA;EACE,cAAA;AA/BJ;;AAmCA;EACE,kBAAA;EACA,SAzKW;EA0KX,OAAA;EACA,SAAA;EACA,QAAA;AAhCF;;AAmCA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;AAhCF;;AAmCA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,SAAA;EACA,QAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;AAhCF;;AAmCA;EACE,kBAAA;EACA,SAvMW;EAwMX,OAAA;EACA,SAAA;EACA,QAAA;EACA,gBC1OU;ED2OV,aAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AAhCF;AAkCE;EACE,cAAA;EACA,mBAAA;AAhCJ;AAmCE;EACE,0BAAA;EACA,cAAA;EACA,WCjPK;EDkPL,YClPK;EDmPL,kBAAA;EACA,kBAAA;AAjCJ;AAmCI;EACE,iBAAA;EACA,sBAAA;AAjCN;AAqCE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,2BAAA;AAnCJ;AAqCI;EACE,WC1QG;ED2QH,yBAAA;AAnCN;AAqCM;EACE,YAAA;ECzQN,gaACC;EAID,8PACE;EAKF,kCAAA;EACA,+BAAA;EACA,0BAAA;EAEA,sDAAA;ED4PM,cAAA;AA9BR;AAiCM;EACE,cAAA;EACA,kBAAA;EACA,sBAAA;AA/BR;AAiCQ;EACE,cC/RE;EDgSF,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;AA/BV;AAiCU;EACE,sBAAA;EACA,WAAA;EACA,kBAAA;AA/BZ;AAiCU;EACE,mBC1SM;ED2SN,qBC5SA;ED6SA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;AA/BZ;AAiCU;EACE,mBCtTA;EDuTA,qBCtTM;EDuTN,mBAAA;EACA,6BAAA;EACA,WAAA;EACA,UAAA;EACA,QAAA;EACA,UAAA;AA/BZ;AAoCM;EACE,eAAA;AAlCR;AAsCQ;EACE,mBCrUY;EDsUZ,yBAAA;AApCV;AAuCY;EACE,mBC1UQ;ADqStB;AAuCY;EACE,qBC7UQ;ADwStB;;AA+CA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;EACA,kBAAA;AA5CF;AA8CE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AA5CJ;AA6CI;EACE,0BAAA;EACA,yBAAA;AA3CN;AA6CM;EACE,cAAA;EACA,YAAA;EACA,sBAAA;EACA,iBAAA;EACA,WAAA;EACA,cAAA;ECvWN,gaACC;EAID,8PACE;EAKF,kCAAA;EACA,+BAAA;EACA,0BAAA;EAEA,sDAAA;ADmTF;AAyCM;EACE,eAAA;AAvCR;AA0CM;EACI,sBAAA;EACA,gBC9XE;ED+XF,sBAAA;EACA,qBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;AAxCV;AA2CM;EAEM,yBAAA;AA1CZ;;AAqDA;EACE,kBAAA;EACA,MAAA;EACA,SA5D8B;EA6D9B,UAL4B;EAM5B,SAAA;EACA,gBAAA;AAlDF;AAoDE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AAlDJ;AAoDI;EACE,YAAA;AAlDN;AAoDM;EACE,qBAAA;EACA,iBAAA;AAlDR;AAqDM;EC5YF,cA9BQ;EA+BR,eAAA;EACA,sBAAA;EACA,8BAAA;EACA,2BAAA;AD0VJ;AAkDM;EACE,mBChbS;ADgYjB;AAmDM;EACE,gBCrbI;ADoYZ;AAoDM;EACE,gBAAA;AAlDR;AAqDQ;EACI,UAAA;AAnDZ;AAqDQ;EACI,aAAA;AAnDZ;AAqDQ;EACI,WAAA;AAnDZ;AAqDQ;EACI,aAAA;AAnDZ;AAqDQ;EACI,kBAAA;AAnDZ;AAuDM;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;AArDR;AAwDM;EACE,mBAAA;EACA,WAAA;AAtDR;AAyDM;EACE,mBCndU;EDodV,WAAA;AAvDR;AA0DM;EACE,gBCtdC;EDudD,iBCvdC;EDwdD,cC1dU;ED2dV,gBCjeI;EDkeJ,YC1dC;ED2dD,gBAAA;EACA,qBAAA;AAxDR;;AA8DA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,mBAAA;EACA,kBAAA;AA3DF;;AA8DA;EACE,cAAA;EACA,YAAA;EACA,aAAA;EACA,mBChfO;ADqbT;AA6DE;EACE,cAAA;EACA,eAAA;EACA,cCvfc;EDwfd,gCAAA;EACA,mBCvfK;EDwfL,kBCxfK;EDyfL,0BAAA;AA3DJ;AA8DE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AA5DJ;AA+DM;EACE,gBC3gBI;AD8cZ;AAgEM;EACE,gBC/gBI;ADidZ;;AAoEA;EACE,cCjhBoB;ADgdtB;;AAoEA;EACE,qBAAA;AAjEF;;AAoEA;EACE,UAAA;EACA,YAAA;AAjEF;AAmEE;EACE,WAAA;EACA,cAAA;EACA,yBAAA;EACA,WAAA;AAjEJ;AAmEI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,gBAAA;EC9hBJ,gaACC;EAID,8PACE;EAKF,kCAAA;EACA,+BAAA;EACA,0BAAA;EAEA,sDAAA;ADodF;AA+DI;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,qBAAA;EACA,WAAA;EACA,sBAAA;AA7DN;;AAmEE;EC3hBE,cA9BQ;EA+BR,eAAA;EACA,sBAAA;EACA,8BAAA;EACA,2BAAA;AD4dJ;;AAgEA;EACE,kBAAA;EACA,aAAA;AA7DF;AA+DE;ECvjBA,gaACC;EAID,8PACE;EAKF,kCAAA;EACA,+BAAA;EACA,0BAAA;EAEA,sDAAA;ED0iBE,yBAAA;EACA,WC/jBK;EDgkBL,WAAA;EACA,gBAAA;EACA,iBAAA;AAxDJ;AA2DE;EACE,cAAA;AAzDJ;;AA6DA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AA1DF;;AA6DA;EACE,qBAAA;EACA,mBAAA;AA1DF;;AA6DA;EACE,iBAAA;EACA,cC9lBgB;ED+lBhB,0BAAA;AA1DF;;AA6DA;EACE,kBAAA;EACA,OAAA;EACA,MAAA;EACA,YAAA;EACA,UA1N4B;AAgK9B;;AA6DA;EACE,kBAAA;EACA,OAAA;EACA,UAhO4B;EAiO5B,SAAA;EACA,eAAA;AA1DF;;AA6DA;EACE,qCAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBA9lBW;EA+lBX,YAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,6BAAA;EACC,sBAAA;EACD,gBAAA;EACA,SAAA;EAEA,mBCvoBe;EDyoBf,oBAAA;EACA,iBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EAEA,2BAAA;EACA,mBAAA;EACA,yBAAA;AA9DF;AAgEE;EACE,aAAA;EACA,kBAAA;AA9DJ;AAiEE;EACE,eAAA;EACA,qBAAA;EACA,cAAA;EACA,sBAAA;EACA,cAAA;EACA,mBC9pBa;ED+pBb,sBAAA;EACA,YAAA;AA/DJ;AAiEI;EACE,gBCpqBM;EDqqBN,YAAA;EACA,gBAAA;EACA,gCAAA;AA/DN;AAkEI;EACE,gBC3qBM;ED4qBN,cCxqBY;EDyqBZ,eAAA;EACA,sBAAA;EACA,8BAAA;EACA,2BAAA;AAhEN;AAkEM;EACE,cC9qBc;ED+qBd,mBAAA;EACA,2BAAA;EACA,wBAAA;AAhER;AAoEI;EACE,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,cC9rBM;AD4nBZ;AAoEM;EACE,mBClsBS;EDmsBT,cC/rBc;AD6nBtB;AAuEE;EACE,SAAA;EACA,qCAAA;EACA,gBAAA;EACA,sBAAA;EAIA,mBAAA;EACA,cChtBQ;EDitBR,YAAA;EACA,kBAAA;EACA,SAAA;EACA,sBAAA;AAxEJ;AA0EI;EAEE,SAAA;EAEA,eAAA;AA1EN;AA8EE;EACE,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,cCluBkB;ADspBtB;AA8EI;EACE,kCAAA;AA5EN;AAgFE,uDAAA,wBAAA;EACE,cAAA;AA9EJ;AAgFE,6CAAA,4BAAA;EACE,cAAA;AA9EJ;AAgFE,8CAAA,wBAAA;EACE,cAAA;AA9EJ;AAgFE,kDAAA,4BAAA;EACE,cAAA;AA9EJ;;AAkFA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,UA9W4B;EA+W5B,gBClwBU;EDmwBV,aAAA;EAEA,mBAAA;EACA,cAAA;AAhFF;AAkFE;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,cCvwBkB;EDwwBlB,YAAA;EACA,eAAA;AAhFJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/backend/analysers/baseAnalyser.ts":
/*!***********************************************!*\
  !*** ./src/backend/analysers/baseAnalyser.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseAnalyser": () => (/* binding */ BaseAnalyser)
/* harmony export */ });
class BaseAnalyser {
    constructor(options) {
        this.options = options;
    }
    appendAnalysis(capture) {
        capture.analyses = capture.analyses || [];
        const analysis = this.getAnalysis(capture);
        capture.analyses.push(analysis);
    }
    getAnalysis(capture) {
        const analysis = {
            analyserName: this.analyserName,
        };
        this.appendToAnalysis(capture, analysis);
        return analysis;
    }
}


/***/ }),

/***/ "./src/backend/analysers/captureAnalyser.ts":
/*!**************************************************!*\
  !*** ./src/backend/analysers/captureAnalyser.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureAnalyser": () => (/* binding */ CaptureAnalyser)
/* harmony export */ });
/* harmony import */ var _commandsAnalyser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commandsAnalyser */ "./src/backend/analysers/commandsAnalyser.ts");
/* harmony import */ var _commandsSummaryAnalyser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commandsSummaryAnalyser */ "./src/backend/analysers/commandsSummaryAnalyser.ts");
/* harmony import */ var _primitivesAnalyser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primitivesAnalyser */ "./src/backend/analysers/primitivesAnalyser.ts");



class CaptureAnalyser {
    constructor(contextInformation) {
        this.contextInformation = contextInformation;
        this.analysers = [];
        this.initAnalysers();
    }
    appendAnalyses(capture) {
        for (const analyserName in this.analysers) {
            if (this.analysers.hasOwnProperty(analyserName)) {
                const analyser = this.analysers[analyserName];
                analyser.appendAnalysis(capture);
            }
        }
    }
    initAnalysers() {
        this.analysers.push(new _commandsAnalyser__WEBPACK_IMPORTED_MODULE_0__.CommandsAnalyser(this.contextInformation), new _commandsSummaryAnalyser__WEBPACK_IMPORTED_MODULE_1__.CommandsSummaryAnalyser(this.contextInformation), new _primitivesAnalyser__WEBPACK_IMPORTED_MODULE_2__.PrimitivesAnalyser(this.contextInformation));
    }
}


/***/ }),

/***/ "./src/backend/analysers/commandsAnalyser.ts":
/*!***************************************************!*\
  !*** ./src/backend/analysers/commandsAnalyser.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandsAnalyser": () => (/* binding */ CommandsAnalyser)
/* harmony export */ });
/* harmony import */ var _baseAnalyser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseAnalyser */ "./src/backend/analysers/baseAnalyser.ts");

class CommandsAnalyser extends _baseAnalyser__WEBPACK_IMPORTED_MODULE_0__.BaseAnalyser {
    get analyserName() {
        return CommandsAnalyser.analyserName;
    }
    appendToAnalysis(capture, analysis) {
        if (!capture.commands) {
            return;
        }
        const unorderedItems = {};
        for (const command of capture.commands) {
            unorderedItems[command.name] = unorderedItems[command.name] || 0;
            unorderedItems[command.name]++;
        }
        // Create items array
        const items = Object.keys(unorderedItems).map((key) => {
            return [key, unorderedItems[key]];
        });
        // Sort the array based on the second element
        items.sort((first, second) => {
            const difference = second[1] - first[1];
            // Alpha order in case of equality
            if (difference === 0) {
                return first[0].localeCompare(second[0]);
            }
            return difference;
        });
        // Appends to state
        for (const item of items) {
            const commandName = item[0];
            analysis[commandName] = item[1];
        }
    }
}
CommandsAnalyser.analyserName = "Commands";


/***/ }),

/***/ "./src/backend/analysers/commandsSummaryAnalyser.ts":
/*!**********************************************************!*\
  !*** ./src/backend/analysers/commandsSummaryAnalyser.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandsSummaryAnalyser": () => (/* binding */ CommandsSummaryAnalyser)
/* harmony export */ });
/* harmony import */ var _baseAnalyser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseAnalyser */ "./src/backend/analysers/baseAnalyser.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");


class CommandsSummaryAnalyser extends _baseAnalyser__WEBPACK_IMPORTED_MODULE_0__.BaseAnalyser {
    get analyserName() {
        return CommandsSummaryAnalyser.analyserName;
    }
    appendToAnalysis(capture, analysis) {
        if (!capture.commands) {
            return;
        }
        analysis.total = capture.commands.length;
        analysis.draw = 0;
        analysis.clear = 0;
        for (const command of capture.commands) {
            if (command.name === "clear") {
                analysis.clear++;
            }
            else if (_utils_drawCommands__WEBPACK_IMPORTED_MODULE_1__.drawCommands.indexOf(command.name) > -1) {
                analysis.draw++;
            }
        }
    }
}
CommandsSummaryAnalyser.analyserName = "CommandsSummary";


/***/ }),

/***/ "./src/backend/analysers/primitivesAnalyser.ts":
/*!*****************************************************!*\
  !*** ./src/backend/analysers/primitivesAnalyser.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimitivesAnalyser": () => (/* binding */ PrimitivesAnalyser)
/* harmony export */ });
/* harmony import */ var _baseAnalyser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseAnalyser */ "./src/backend/analysers/baseAnalyser.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class PrimitivesAnalyser extends _baseAnalyser__WEBPACK_IMPORTED_MODULE_0__.BaseAnalyser {
    get analyserName() {
        return PrimitivesAnalyser.analyserName;
    }
    appendToAnalysis(capture, analysis) {
        if (!capture.commands) {
            return;
        }
        const primitives = {
            total: 0,
            totalTriangles: 0,
            totalTriangleStrip: 0,
            totalTriangleFan: 0,
            totalLines: 0,
            totalLineStrip: 0,
            totalLineLoop: 0,
            totalPoints: 0,
        };
        for (const command of capture.commands) {
            if (command.name === "drawArrays" && command.commandArguments.length >= 3) {
                this.appendToPrimitives(primitives, command.commandArguments[0], command.commandArguments[2]);
            }
            else if (command.name === "drawArraysInstanced" && command.commandArguments.length >= 3) {
                this.appendToPrimitives(primitives, command.commandArguments[0], command.commandArguments[2]);
            }
            else if (command.name === "drawArraysInstancedANGLE" && command.commandArguments.length >= 3) {
                this.appendToPrimitives(primitives, command.commandArguments[0], command.commandArguments[2]);
            }
            else if (command.name === "drawElements" && command.commandArguments.length >= 2) {
                this.appendToPrimitives(primitives, command.commandArguments[0], command.commandArguments[1]);
            }
            else if (command.name === "drawElementsInstanced" && command.commandArguments.length >= 2) {
                this.appendToPrimitives(primitives, command.commandArguments[0], command.commandArguments[1]);
            }
            else if (command.name === "drawElementsInstancedANGLE" && command.commandArguments.length >= 2) {
                this.appendToPrimitives(primitives, command.commandArguments[0], command.commandArguments[1]);
            }
            else if (command.name === "drawRangeElements" && command.commandArguments.length >= 4) {
                this.appendToPrimitives(primitives, command.commandArguments[0], command.commandArguments[3]);
            }
        }
        analysis["total"] = primitives.total;
        analysis["triangles"] = primitives.totalTriangles;
        analysis["triangleStrip"] = primitives.totalTriangleStrip;
        analysis["triangleFan"] = primitives.totalTriangleFan;
        analysis["lines"] = primitives.totalLines;
        analysis["lineStrip"] = primitives.totalLineStrip;
        analysis["lineLoop"] = primitives.totalLineLoop;
        analysis["points"] = primitives.totalPoints;
    }
    appendToPrimitives(primitives, mode, count) {
        if (mode === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.POINTS.value) {
            primitives.totalPoints += count;
        }
        else if (mode === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.LINES.value) {
            primitives.totalLines += count;
        }
        else if (mode === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.LINE_STRIP.value) {
            primitives.totalLineStrip += count;
        }
        else if (mode === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.LINE_LOOP.value) {
            primitives.totalLineLoop += count;
        }
        else if (mode === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRIANGLES.value) {
            primitives.totalTriangles += count;
        }
        else if (mode === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRIANGLE_STRIP.value) {
            primitives.totalTriangleStrip += count;
        }
        else if (mode === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRIANGLE_FAN.value) {
            primitives.totalTriangleFan += count;
        }
        primitives.total += count;
    }
}
PrimitivesAnalyser.analyserName = "Primitives";


/***/ }),

/***/ "./src/backend/commands/MultiDrawArraysInstancedBaseInstanceWEBGL.ts":
/*!***************************************************************************!*\
  !*** ./src/backend/commands/MultiDrawArraysInstancedBaseInstanceWEBGL.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDrawArraysInstancedBaseInstanceWEBGL": () => (/* binding */ MultiDrawArraysInstancedBaseInstanceWEBGL)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class MultiDrawArraysInstancedBaseInstanceWEBGL extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return MultiDrawArraysInstancedBaseInstanceWEBGL.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "multiDrawArraysInstancedBaseInstanceWEBGL"));
        stringified.push(`drawCount=${args[9]}`);
        stringified.push(args[2]);
        stringified.push(args[4]);
        stringified.push(args[6]);
        stringified.push(args[8]);
        return stringified;
    }
}
MultiDrawArraysInstancedBaseInstanceWEBGL.commandName = "multiDrawArraysInstancedBaseInstanceWEBGL";


/***/ }),

/***/ "./src/backend/commands/MultiDrawArraysInstancedWEBGL.ts":
/*!***************************************************************!*\
  !*** ./src/backend/commands/MultiDrawArraysInstancedWEBGL.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDrawArraysInstancedWEBGL": () => (/* binding */ MultiDrawArraysInstancedWEBGL)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class MultiDrawArraysInstancedWEBGL extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return MultiDrawArraysInstancedWEBGL.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArrays"));
        stringified.push(`drawCount=${args[7]}`);
        stringified.push(args[2]);
        stringified.push(args[4]);
        stringified.push(args[6]);
        return stringified;
    }
}
MultiDrawArraysInstancedWEBGL.commandName = "multiDrawArraysInstancedWEBGL";


/***/ }),

/***/ "./src/backend/commands/MultiDrawArraysWEBGL.ts":
/*!******************************************************!*\
  !*** ./src/backend/commands/MultiDrawArraysWEBGL.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDrawArraysWEBGL": () => (/* binding */ MultiDrawArraysWEBGL)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class MultiDrawArraysWEBGL extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return MultiDrawArraysWEBGL.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArrays"));
        stringified.push(`drawCount=${args[5]}`);
        stringified.push(args[2]);
        stringified.push(args[4]);
        return stringified;
    }
}
MultiDrawArraysWEBGL.commandName = "multiDrawArraysWEBGL";


/***/ }),

/***/ "./src/backend/commands/MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.ts":
/*!***************************************************************************************!*\
  !*** ./src/backend/commands/MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL": () => (/* binding */ MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArrays"));
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[3], "drawArrays"));
        stringified.push(`drawCount=${args[11]}`);
        stringified.push(args[2]);
        stringified.push(args[4]);
        stringified.push(args[6]);
        stringified.push(args[8]);
        stringified.push(args[10]);
        return stringified;
    }
}
MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.commandName = "multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL";


/***/ }),

/***/ "./src/backend/commands/MultiDrawElementsInstancedWEBGL.ts":
/*!*****************************************************************!*\
  !*** ./src/backend/commands/MultiDrawElementsInstancedWEBGL.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDrawElementsInstancedWEBGL": () => (/* binding */ MultiDrawElementsInstancedWEBGL)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class MultiDrawElementsInstancedWEBGL extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return MultiDrawElementsInstancedWEBGL.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArrays"));
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[3], "drawArrays"));
        stringified.push(`drawCount=${args[8]}`);
        stringified.push(args[2]);
        stringified.push(args[5]);
        stringified.push(args[7]);
        return stringified;
    }
}
MultiDrawElementsInstancedWEBGL.commandName = "multiDrawElementsInstancedWEBGL";


/***/ }),

/***/ "./src/backend/commands/MultiDrawElementsWEBGL.ts":
/*!********************************************************!*\
  !*** ./src/backend/commands/MultiDrawElementsWEBGL.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiDrawElementsWEBGL": () => (/* binding */ MultiDrawElementsWEBGL)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class MultiDrawElementsWEBGL extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return MultiDrawElementsWEBGL.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArrays"));
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[3], "drawArrays"));
        stringified.push(`drawCount=${args[6]}`);
        stringified.push(args[2]);
        stringified.push(args[5]);
        return stringified;
    }
}
MultiDrawElementsWEBGL.commandName = "multiDrawElementsWEBGL";


/***/ }),

/***/ "./src/backend/commands/baseCommand.ts":
/*!*********************************************!*\
  !*** ./src/backend/commands/baseCommand.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseCommand": () => (/* binding */ BaseCommand)
/* harmony export */ });
/* harmony import */ var _shared_utils_stackTrace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/stackTrace */ "./src/shared/utils/stackTrace.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webGlObjects/baseWebGlObject */ "./src/backend/webGlObjects/baseWebGlObject.ts");



class BaseCommand {
    constructor(options) {
        this.options = options;
    }
    createCapture(functionInformation, commandCaptureId, marker) {
        // Removes the spector internal calls to leave only th relevant part.
        const stackTrace = _shared_utils_stackTrace__WEBPACK_IMPORTED_MODULE_0__.StackTrace.getStackTrace(4, 1);
        // Includes uniform functions special cases to prevent lots of inheritence.
        const text = (functionInformation.name.indexOf("uniform") === 0) ?
            this.stringifyUniform(functionInformation.arguments) :
            this.stringify(functionInformation.arguments, functionInformation.result);
        const commandCapture = {
            id: commandCaptureId,
            startTime: functionInformation.startTime,
            commandEndTime: functionInformation.endTime,
            endTime: 0,
            name: functionInformation.name,
            commandArguments: functionInformation.arguments,
            result: functionInformation.result,
            stackTrace,
            status: 0 /* CommandCaptureStatus.Unknown */,
            marker,
            text,
        };
        this.transformCapture(commandCapture);
        for (let i = 0; i < commandCapture.commandArguments.length; i++) {
            const argument = commandCapture.commandArguments[i];
            if (argument && argument.length && argument.length > 50) {
                commandCapture.commandArguments[i] = "Array Length: " + argument.length;
            }
        }
        if (commandCapture.commandArguments) {
            const argumentsArray = [];
            for (let i = 0; i < commandCapture.commandArguments.length; i++) {
                const commandArgument = commandCapture.commandArguments[i];
                if (commandArgument === undefined) {
                    argumentsArray.push(undefined);
                }
                else if (commandArgument === null) {
                    argumentsArray.push(null);
                }
                else {
                    argumentsArray.push(JSON.parse(this.stringifyJSON(commandArgument)));
                }
            }
            commandCapture.commandArguments = argumentsArray;
        }
        if (commandCapture.result) {
            commandCapture.result = JSON.parse(this.stringifyJSON(commandCapture.result));
        }
        return commandCapture;
    }
    stringifyJSON(value) {
        try {
            const str = JSON.stringify(value);
            return str;
        }
        catch (e) {
            return null;
        }
    }
    transformCapture(commandCapture) {
        // Nothing by default.
    }
    stringify(args, result) {
        let stringified = this.spiedCommandName;
        if (args && args.length > 0) {
            stringified += ": " + this.stringifyArgs(args).join(", ");
        }
        if (result !== undefined && result !== null) {
            stringified += " -> " + this.stringifyResult(result);
        }
        return stringified;
    }
    stringifyUniform(args) {
        let stringified = this.spiedCommandName;
        if (args && args.length > 0) {
            const stringifiedArgs = [];
            stringifiedArgs.push(this.stringifyValue(args[0]));
            for (let i = 1; i < args.length; i++) {
                if (typeof args[i] === "number") {
                    const arg = args[i] + "";
                    stringifiedArgs.push(arg);
                }
                else {
                    const arg = this.stringifyValue(args[i]);
                    stringifiedArgs.push(arg);
                }
            }
            stringified += ": " + stringifiedArgs.join(", ");
        }
        return stringified;
    }
    stringifyArgs(args) {
        const stringified = [];
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            const stringifiedValue = this.stringifyValue(arg);
            stringified.push(stringifiedValue);
        }
        return stringified;
    }
    stringifyResult(result) {
        if (!result) {
            return undefined;
        }
        return this.stringifyValue(result);
    }
    stringifyValue(value) {
        if (value === null) {
            return "null";
        }
        if (value === undefined) {
            return "undefined";
        }
        const tag = _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_2__.WebGlObjects.getWebGlObjectTag(value);
        if (tag) {
            return tag.displayText;
        }
        if (typeof value === "number" && _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.isWebGlConstant(value)) {
            return _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(value, this.spiedCommandName);
        }
        if (typeof value === "string") {
            return value;
        }
        if (value instanceof HTMLImageElement) {
            return value.src;
        }
        if (value instanceof ArrayBuffer) {
            return "[--(" + value.byteLength + ")--]";
        }
        if (value.length) {
            return "[..(" + value.length + ")..]";
        }
        // DataView
        if (value.byteLength) {
            return "[..(" + value.byteLength + ")..]";
        }
        return value;
    }
}


/***/ }),

/***/ "./src/backend/commands/bindAttribLocation.ts":
/*!****************************************************!*\
  !*** ./src/backend/commands/bindAttribLocation.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindAttribLocation": () => (/* binding */ BindAttribLocation)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class BindAttribLocation extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return BindAttribLocation.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        // Program
        if (args.length > 0) {
            const arg = args[0];
            const stringifiedValue = this.stringifyValue(arg);
            stringified.push(stringifiedValue);
        }
        // Index
        if (args.length > 1) {
            const arg = "" + args[1];
            stringified.push(arg);
        }
        // Name
        if (args.length > 2) {
            stringified.push(args[2]);
        }
        return stringified;
    }
}
BindAttribLocation.commandName = "bindAttribLocation";


/***/ }),

/***/ "./src/backend/commands/blitFrameBuffer.ts":
/*!*************************************************!*\
  !*** ./src/backend/commands/blitFrameBuffer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlitFrameBuffer": () => (/* binding */ BlitFrameBuffer)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class BlitFrameBuffer extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return BlitFrameBuffer.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        const readFrameBuffer = this.options.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.READ_FRAMEBUFFER_BINDING.value);
        const readFrameBufferTag = this.options.tagWebGlObject(readFrameBuffer);
        stringified.push("READ FROM: " + this.stringifyValue(readFrameBufferTag));
        const drawFrameBuffer = this.options.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DRAW_FRAMEBUFFER_BINDING.value);
        const drawFrameBufferTag = this.options.tagWebGlObject(drawFrameBuffer);
        stringified.push("WRITE TO: " + this.stringifyValue(drawFrameBufferTag));
        for (let i = 0; i < 8; i++) {
            stringified.push(args[i]);
        }
        if ((args[8] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BUFFER_BIT.value) === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BUFFER_BIT.value) {
            stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BUFFER_BIT.name);
        }
        if ((args[8] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BUFFER_BIT.value) === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BUFFER_BIT.value) {
            stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BUFFER_BIT.name);
        }
        if ((args[8] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_BUFFER_BIT.value) === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_BUFFER_BIT.value) {
            stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_BUFFER_BIT.name);
        }
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[9], "blitFrameBuffer"));
        return stringified;
    }
}
BlitFrameBuffer.commandName = "blitFrameBuffer";


/***/ }),

/***/ "./src/backend/commands/bufferSubData.ts":
/*!***********************************************!*\
  !*** ./src/backend/commands/bufferSubData.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BufferSubData": () => (/* binding */ BufferSubData)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class BufferSubData extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return BufferSubData.commandName;
    }
    stringifyArgs(args) {
        var _a, _b;
        const stringified = [];
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            if (i > 0 && typeof arg === "number") {
                stringified.push((_b = (_a = args[i]) === null || _a === void 0 ? void 0 : _a.toFixed(0)) !== null && _b !== void 0 ? _b : "0");
            }
            else {
                const stringifiedValue = this.stringifyValue(arg);
                stringified.push(stringifiedValue);
            }
        }
        return stringified;
    }
}
BufferSubData.commandName = "bufferSubData";


/***/ }),

/***/ "./src/backend/commands/clear.ts":
/*!***************************************!*\
  !*** ./src/backend/commands/clear.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clear": () => (/* binding */ Clear)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class Clear extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return Clear.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        if ((args[0] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BUFFER_BIT.value) === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BUFFER_BIT.value) {
            stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BUFFER_BIT.name);
        }
        if ((args[0] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BUFFER_BIT.value) === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BUFFER_BIT.value) {
            stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BUFFER_BIT.name);
        }
        if ((args[0] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_BUFFER_BIT.value) === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_BUFFER_BIT.value) {
            stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_BUFFER_BIT.name);
        }
        return stringified;
    }
}
Clear.commandName = "clear";


/***/ }),

/***/ "./src/backend/commands/defaultCommand.ts":
/*!************************************************!*\
  !*** ./src/backend/commands/defaultCommand.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultCommand": () => (/* binding */ DefaultCommand)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

const deprecatedCommands = [
    "lineWidth",
];
class DefaultCommand extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    constructor(options, commandName) {
        super(options);
        this.internalSpiedCommandName = commandName;
        this.isDeprecated = (deprecatedCommands.indexOf(this.spiedCommandName) > -1);
    }
    get spiedCommandName() {
        return this.internalSpiedCommandName;
    }
    transformCapture(commandCapture) {
        if (this.isDeprecated) {
            commandCapture.status = 50 /* CommandCaptureStatus.Deprecated */;
        }
    }
}


/***/ }),

/***/ "./src/backend/commands/disableVertexAttribArray.ts":
/*!**********************************************************!*\
  !*** ./src/backend/commands/disableVertexAttribArray.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisableVertexAttribArray": () => (/* binding */ DisableVertexAttribArray)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class DisableVertexAttribArray extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DisableVertexAttribArray.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(args[0]);
        return stringified;
    }
}
DisableVertexAttribArray.commandName = "disableVertexAttribArray";


/***/ }),

/***/ "./src/backend/commands/drawArrays.ts":
/*!********************************************!*\
  !*** ./src/backend/commands/drawArrays.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawArrays": () => (/* binding */ DrawArrays)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawArrays extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawArrays.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArrays"));
        stringified.push(args[1]);
        stringified.push(args[2]);
        return stringified;
    }
}
DrawArrays.commandName = "drawArrays";


/***/ }),

/***/ "./src/backend/commands/drawArraysInstanced.ts":
/*!*****************************************************!*\
  !*** ./src/backend/commands/drawArraysInstanced.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawArraysInstanced": () => (/* binding */ DrawArraysInstanced)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawArraysInstanced extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawArraysInstanced.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArraysInstanced"));
        stringified.push(args[1]);
        stringified.push(args[2]);
        stringified.push(args[3]);
        return stringified;
    }
}
DrawArraysInstanced.commandName = "drawArraysInstanced";


/***/ }),

/***/ "./src/backend/commands/drawArraysInstancedAngle.ts":
/*!**********************************************************!*\
  !*** ./src/backend/commands/drawArraysInstancedAngle.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawArraysInstancedAngle": () => (/* binding */ DrawArraysInstancedAngle)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawArraysInstancedAngle extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawArraysInstancedAngle.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArraysInstancedANGLE"));
        stringified.push(args[1]);
        stringified.push(args[2]);
        stringified.push(args[3]);
        return stringified;
    }
}
DrawArraysInstancedAngle.commandName = "drawArraysInstancedANGLE";


/***/ }),

/***/ "./src/backend/commands/drawArraysInstancedBaseInstanceWEBGL.ts":
/*!**********************************************************************!*\
  !*** ./src/backend/commands/drawArraysInstancedBaseInstanceWEBGL.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawArraysInstancedBaseInstanceWEBGL": () => (/* binding */ DrawArraysInstancedBaseInstanceWEBGL)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawArraysInstancedBaseInstanceWEBGL extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawArraysInstancedBaseInstanceWEBGL.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawArraysInstanced"));
        stringified.push(args[1]);
        stringified.push(args[2]);
        stringified.push(args[3]);
        stringified.push(`baseInstance = ${args[4]}`);
        return stringified;
    }
}
DrawArraysInstancedBaseInstanceWEBGL.commandName = "drawArraysInstancedBaseInstanceWEBGL";


/***/ }),

/***/ "./src/backend/commands/drawElements.ts":
/*!**********************************************!*\
  !*** ./src/backend/commands/drawElements.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawElements": () => (/* binding */ DrawElements)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawElements extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawElements.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawElements"));
        stringified.push(args[1]);
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[2], "drawElements"));
        stringified.push(args[3]);
        return stringified;
    }
}
DrawElements.commandName = "drawElements";


/***/ }),

/***/ "./src/backend/commands/drawElementsInstanced.ts":
/*!*******************************************************!*\
  !*** ./src/backend/commands/drawElementsInstanced.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawElementsInstanced": () => (/* binding */ DrawElementsInstanced)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawElementsInstanced extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawElementsInstanced.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawElementsInstanced"));
        stringified.push(args[1]);
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[2], "drawElementsInstanced"));
        stringified.push(args[3]);
        stringified.push(args[4]);
        return stringified;
    }
}
DrawElementsInstanced.commandName = "drawElementsInstanced";


/***/ }),

/***/ "./src/backend/commands/drawElementsInstancedAngle.ts":
/*!************************************************************!*\
  !*** ./src/backend/commands/drawElementsInstancedAngle.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawElementsInstancedAngle": () => (/* binding */ DrawElementsInstancedAngle)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawElementsInstancedAngle extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawElementsInstancedAngle.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawElementsInstancedANGLE"));
        stringified.push(args[1]);
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[2], "drawElementsInstancedANGLE"));
        stringified.push(args[3]);
        stringified.push(args[4]);
        return stringified;
    }
}
DrawElementsInstancedAngle.commandName = "drawElementsInstancedANGLE";


/***/ }),

/***/ "./src/backend/commands/drawElementsInstancedBaseVertexBaseInstanceWEBGL.ts":
/*!**********************************************************************************!*\
  !*** ./src/backend/commands/drawElementsInstancedBaseVertexBaseInstanceWEBGL.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawElementsInstancedBaseVertexBaseInstanceWEBGL": () => (/* binding */ DrawElementsInstancedBaseVertexBaseInstanceWEBGL)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawElementsInstancedBaseVertexBaseInstanceWEBGL extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawElementsInstancedBaseVertexBaseInstanceWEBGL.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawElementsInstanced"));
        stringified.push(args[1]);
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[2], "drawElementsInstanced"));
        stringified.push(args[3]);
        stringified.push(args[4]);
        stringified.push(`baseVertex = ${args[5]}`);
        stringified.push(`baseInstance = ${args[6]}`);
        return stringified;
    }
}
DrawElementsInstancedBaseVertexBaseInstanceWEBGL.commandName = "drawElementsInstancedBaseVertexBaseInstanceWEBGL";


/***/ }),

/***/ "./src/backend/commands/drawRangeElements.ts":
/*!***************************************************!*\
  !*** ./src/backend/commands/drawRangeElements.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawRangeElements": () => (/* binding */ DrawRangeElements)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class DrawRangeElements extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return DrawRangeElements.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "drawRangeElements"));
        stringified.push(args[1]);
        stringified.push(args[2]);
        stringified.push(args[3]);
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[4], "drawRangeElements"));
        stringified.push(args[5]);
        return stringified;
    }
}
DrawRangeElements.commandName = "drawRangeElements";


/***/ }),

/***/ "./src/backend/commands/enableVertexAttribArray.ts":
/*!*********************************************************!*\
  !*** ./src/backend/commands/enableVertexAttribArray.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnableVertexAttribArray": () => (/* binding */ EnableVertexAttribArray)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class EnableVertexAttribArray extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return EnableVertexAttribArray.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(args[0]);
        return stringified;
    }
}
EnableVertexAttribArray.commandName = "enableVertexAttribArray";


/***/ }),

/***/ "./src/backend/commands/getActiveAttrib.ts":
/*!*************************************************!*\
  !*** ./src/backend/commands/getActiveAttrib.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetActiveAttrib": () => (/* binding */ GetActiveAttrib)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class GetActiveAttrib extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return GetActiveAttrib.commandName;
    }
    stringifyResult(result) {
        if (!result) {
            return undefined;
        }
        return `name: ${result.name}, size: ${result.size}, type: ${result.type}`;
    }
}
GetActiveAttrib.commandName = "getActiveAttrib";


/***/ }),

/***/ "./src/backend/commands/getActiveUniform.ts":
/*!**************************************************!*\
  !*** ./src/backend/commands/getActiveUniform.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetActiveUniform": () => (/* binding */ GetActiveUniform)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class GetActiveUniform extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return GetActiveUniform.commandName;
    }
    stringifyResult(result) {
        if (!result) {
            return undefined;
        }
        return `name: ${result.name}, size: ${result.size}, type: ${result.type}`;
    }
}
GetActiveUniform.commandName = "getActiveUniform";


/***/ }),

/***/ "./src/backend/commands/getAttribLocation.ts":
/*!***************************************************!*\
  !*** ./src/backend/commands/getAttribLocation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAttribLocation": () => (/* binding */ GetAttribLocation)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class GetAttribLocation extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return GetAttribLocation.commandName;
    }
    stringifyResult(result) {
        var _a;
        if (result === undefined || result === null) {
            return undefined;
        }
        return (_a = result === null || result === void 0 ? void 0 : result.toFixed(0)) !== null && _a !== void 0 ? _a : "0";
    }
}
GetAttribLocation.commandName = "getAttribLocation";


/***/ }),

/***/ "./src/backend/commands/getExtension.ts":
/*!**********************************************!*\
  !*** ./src/backend/commands/getExtension.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetExtension": () => (/* binding */ GetExtension)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class GetExtension extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return GetExtension.commandName;
    }
    stringifyResult(result) {
        return result ? "true" : "false";
    }
}
GetExtension.commandName = "getExtension";


/***/ }),

/***/ "./src/backend/commands/getParameter.ts":
/*!**********************************************!*\
  !*** ./src/backend/commands/getParameter.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetParameter": () => (/* binding */ GetParameter)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webGlObjects/baseWebGlObject */ "./src/backend/webGlObjects/baseWebGlObject.ts");


class GetParameter extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return GetParameter.commandName;
    }
    stringifyResult(result) {
        if (!result) {
            return "null";
        }
        const tag = _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_1__.WebGlObjects.getWebGlObjectTag(result);
        if (tag) {
            return tag.displayText;
        }
        return result;
    }
}
GetParameter.commandName = "getParameter";


/***/ }),

/***/ "./src/backend/commands/getShaderPrecisionFormat.ts":
/*!**********************************************************!*\
  !*** ./src/backend/commands/getShaderPrecisionFormat.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetShaderPrecisionFormat": () => (/* binding */ GetShaderPrecisionFormat)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class GetShaderPrecisionFormat extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return GetShaderPrecisionFormat.commandName;
    }
    stringifyResult(result) {
        if (!result) {
            return undefined;
        }
        return `min: ${result.rangeMin}, max: ${result.rangeMax}, precision: ${result.precision}`;
    }
}
GetShaderPrecisionFormat.commandName = "getShaderPrecisionFormat";


/***/ }),

/***/ "./src/backend/commands/getTransformFeedbackVarying.ts":
/*!*************************************************************!*\
  !*** ./src/backend/commands/getTransformFeedbackVarying.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetTransformFeedbackVarying": () => (/* binding */ GetTransformFeedbackVarying)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class GetTransformFeedbackVarying extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return GetTransformFeedbackVarying.commandName;
    }
    stringifyResult(result) {
        if (!result) {
            return undefined;
        }
        return `name: ${result.name}, size: ${result.size}, type: ${result.type}`;
    }
}
GetTransformFeedbackVarying.commandName = "getTransformFeedbackVarying";


/***/ }),

/***/ "./src/backend/commands/scissor.ts":
/*!*****************************************!*\
  !*** ./src/backend/commands/scissor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scissor": () => (/* binding */ Scissor)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class Scissor extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return Scissor.commandName;
    }
    stringifyArgs(args) {
        var _a, _b;
        const stringified = [];
        for (let i = 0; i < 4; i++) {
            stringified.push((_b = (_a = args[i]) === null || _a === void 0 ? void 0 : _a.toFixed(0)) !== null && _b !== void 0 ? _b : "0");
        }
        return stringified;
    }
}
Scissor.commandName = "scissor";


/***/ }),

/***/ "./src/backend/commands/stencilFunc.ts":
/*!*********************************************!*\
  !*** ./src/backend/commands/stencilFunc.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StencilFunc": () => (/* binding */ StencilFunc)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/formatHelper */ "./src/backend/utils/formatHelper.ts");



class StencilFunc extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return StencilFunc.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "stencilFunc"));
        stringified.push((0,_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__.formatBinary)(args[1]));
        stringified.push((0,_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__.formatBinary)(args[2]));
        return stringified;
    }
}
StencilFunc.commandName = "stencilFunc";


/***/ }),

/***/ "./src/backend/commands/stencilFuncSeparate.ts":
/*!*****************************************************!*\
  !*** ./src/backend/commands/stencilFuncSeparate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StencilFuncSeparate": () => (/* binding */ StencilFuncSeparate)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/formatHelper */ "./src/backend/utils/formatHelper.ts");



class StencilFuncSeparate extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return StencilFuncSeparate.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "stencilFuncSeparate"));
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[1], "stencilFuncSeparate"));
        stringified.push((0,_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__.formatBinary)(args[2]));
        stringified.push((0,_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__.formatBinary)(args[3]));
        return stringified;
    }
}
StencilFuncSeparate.commandName = "stencilFuncSeparate";


/***/ }),

/***/ "./src/backend/commands/stencilMask.ts":
/*!*********************************************!*\
  !*** ./src/backend/commands/stencilMask.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StencilMask": () => (/* binding */ StencilMask)
/* harmony export */ });
/* harmony import */ var _utils_formatHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/formatHelper */ "./src/backend/utils/formatHelper.ts");
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");


class StencilMask extends _baseCommand__WEBPACK_IMPORTED_MODULE_1__.BaseCommand {
    get spiedCommandName() {
        return StencilMask.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push((0,_utils_formatHelper__WEBPACK_IMPORTED_MODULE_0__.formatBinary)(args[0]));
        return stringified;
    }
}
StencilMask.commandName = "stencilMask";


/***/ }),

/***/ "./src/backend/commands/stencilMaskSeparate.ts":
/*!*****************************************************!*\
  !*** ./src/backend/commands/stencilMaskSeparate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StencilMaskSeparate": () => (/* binding */ StencilMaskSeparate)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/formatHelper */ "./src/backend/utils/formatHelper.ts");



class StencilMaskSeparate extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return StencilMaskSeparate.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[0], "stencilMaskSeparate"));
        stringified.push((0,_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__.formatBinary)(args[1]));
        return stringified;
    }
}
StencilMaskSeparate.commandName = "stencilMaskSeparate";


/***/ }),

/***/ "./src/backend/commands/vertexAttribPointer.ts":
/*!*****************************************************!*\
  !*** ./src/backend/commands/vertexAttribPointer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexAttribPointer": () => (/* binding */ VertexAttribPointer)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class VertexAttribPointer extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return VertexAttribPointer.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        stringified.push(args[0]);
        stringified.push(args[1]);
        stringified.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(args[2], "vertexAttribPointer"));
        stringified.push(args[3]);
        stringified.push(args[4]);
        stringified.push(args[5]);
        return stringified;
    }
}
VertexAttribPointer.commandName = "vertexAttribPointer";


/***/ }),

/***/ "./src/backend/commands/viewport.ts":
/*!******************************************!*\
  !*** ./src/backend/commands/viewport.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Viewport": () => (/* binding */ Viewport)
/* harmony export */ });
/* harmony import */ var _baseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommand */ "./src/backend/commands/baseCommand.ts");

class Viewport extends _baseCommand__WEBPACK_IMPORTED_MODULE_0__.BaseCommand {
    get spiedCommandName() {
        return Viewport.commandName;
    }
    stringifyArgs(args) {
        const stringified = [];
        for (let i = 0; i < 4; i++) {
            stringified.push(args[i].toFixed(0));
        }
        return stringified;
    }
}
Viewport.commandName = "viewport";


/***/ }),

/***/ "./src/backend/recorders/baseRecorder.ts":
/*!***********************************************!*\
  !*** ./src/backend/recorders/baseRecorder.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseRecorder": () => (/* binding */ BaseRecorder)
/* harmony export */ });
/* harmony import */ var _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/time */ "./src/shared/utils/time.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webGlObjects/baseWebGlObject */ "./src/backend/webGlObjects/baseWebGlObject.ts");



class BaseRecorder {
    constructor(options) {
        this.options = options;
        this.createCommandNames = this.getCreateCommandNames();
        this.updateCommandNames = this.getUpdateCommandNames();
        this.deleteCommandNames = this.getDeleteCommandNames();
        this.startTime = _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now;
        this.memoryPerSecond = {};
        this.totalMemory = 0;
        this.frameMemory = 0;
        this.capturing = false;
        BaseRecorder.initializeByteSizeFormat();
    }
    static initializeByteSizeFormat() {
        if (this.byteSizePerInternalFormat) {
            return;
        }
        this.byteSizePerInternalFormat = {
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.R8.value]: 1,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.R16F.value]: 2,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.R32F.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.R8UI.value]: 1,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RG8.value]: 2,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RG16F.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RG32F.value]: 8,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ALPHA.value]: 1,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGB.value]: 3,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.LUMINANCE.value]: 1,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.LUMINANCE_ALPHA.value]: 2,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_COMPONENT.value]: 1,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_STENCIL.value]: 2,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SRGB_EXT.value]: 3,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SRGB_ALPHA_EXT.value]: 4,
            // [WebGlConstants.RGUI.value]: 2,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGB8.value]: 3,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SRGB8.value]: 3,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGB565.value]: 2,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.R11F_G11F_B10F.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGB9_E5.value]: 2,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGB16F.value]: 6,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGB32F.value]: 12,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGB8UI.value]: 3,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA8.value]: 4,
            // [WebGlConstants.SRGB_APLHA8.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGB5_A1.value]: 2,
            // [WebGlConstants.RGBA4444.value]: 2,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA16F.value]: 8,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA32F.value]: 16,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA8UI.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_R11_EAC.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_SIGNED_R11_EAC.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RG11_EAC.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_SIGNED_RG11_EAC.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGB8_ETC2.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGBA8_ETC2_EAC.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_SRGB8_ETC2.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2.value]: 4,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGB_S3TC_DXT1_EXT.value]: 0.5,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGBA_S3TC_DXT3_EXT.value]: 1,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGBA_S3TC_DXT5_EXT.value]: 1,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGB_PVRTC_4BPPV1_IMG.value]: 0.5,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG.value]: 0.5,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGB_PVRTC_2BPPV1_IMG.value]: 0.25,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG.value]: 0.25,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGB_ETC1_WEBGL.value]: 0.5,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGB_ATC_WEBGL.value]: 0.5,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL.value]: 1,
            [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL.value]: 1,
        };
    }
    registerCallbacks(onFunctionCallbacks) {
        for (const command of this.createCommandNames) {
            onFunctionCallbacks[command] = onFunctionCallbacks[command] || [];
            onFunctionCallbacks[command].push(this.createWithoutSideEffects.bind(this));
        }
        for (const command of this.updateCommandNames) {
            onFunctionCallbacks[command] = onFunctionCallbacks[command] || [];
            onFunctionCallbacks[command].push(this.updateWithoutSideEffects.bind(this));
        }
        for (const command of this.deleteCommandNames) {
            onFunctionCallbacks[command] = onFunctionCallbacks[command] || [];
            onFunctionCallbacks[command].push(this.deleteWithoutSideEffects.bind(this));
        }
    }
    startCapture() {
        this.frameMemory = 0;
        this.capturing = true;
    }
    stopCapture() {
        this.frameMemory = 0;
        this.capturing = false;
    }
    appendRecordedInformation(capture) {
        capture.frameMemory[this.objectName] = this.frameMemory;
        capture.memory[this.objectName] = this.memoryPerSecond;
    }
    create(functionInformation) {
        // Nothing tracked currently on create.
    }
    createWithoutSideEffects(functionInformation) {
        this.options.toggleCapture(false);
        this.create(functionInformation);
        this.options.toggleCapture(true);
    }
    updateWithoutSideEffects(functionInformation) {
        if (!functionInformation || functionInformation.arguments.length === 0) {
            return;
        }
        this.options.toggleCapture(false);
        const target = functionInformation.arguments[0];
        const instance = this.getBoundInstance(target);
        if (!instance) {
            this.options.toggleCapture(true);
            return;
        }
        const tag = _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_2__.WebGlObjects.getWebGlObjectTag(instance);
        if (!tag) {
            this.options.toggleCapture(true);
            return;
        }
        const targetString = this.getWebGlConstant(target);
        const size = this.update(functionInformation, targetString, instance);
        this.changeMemorySize(size);
        this.options.toggleCapture(true);
    }
    deleteWithoutSideEffects(functionInformation) {
        if (!functionInformation || !functionInformation.arguments || functionInformation.arguments.length < 1) {
            return;
        }
        const instance = functionInformation.arguments[0];
        if (!instance) {
            return;
        }
        this.options.toggleCapture(false);
        const size = this.delete(instance);
        this.changeMemorySize(-size);
        this.options.toggleCapture(true);
    }
    changeMemorySize(size) {
        this.totalMemory += size;
        if (this.capturing) {
            this.frameMemory += size;
        }
        const timeInMilliseconds = _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now - this.startTime;
        const timeInSeconds = Math.round(timeInMilliseconds / 1000);
        this.memoryPerSecond[timeInSeconds] = this.totalMemory;
    }
    getWebGlConstant(value) {
        const constant = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByValue[value];
        return constant ? constant.name : value + "";
    }
    getByteSizeForInternalFormat(internalFormat) {
        const bytesPerElements = BaseRecorder.byteSizePerInternalFormat[internalFormat];
        return bytesPerElements || 4;
    }
}


/***/ }),

/***/ "./src/backend/recorders/bufferRecorder.ts":
/*!*************************************************!*\
  !*** ./src/backend/recorders/bufferRecorder.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BufferRecorder": () => (/* binding */ BufferRecorder)
/* harmony export */ });
/* harmony import */ var _baseRecorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRecorder */ "./src/backend/recorders/baseRecorder.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class BufferRecorder extends _baseRecorder__WEBPACK_IMPORTED_MODULE_0__.BaseRecorder {
    get objectName() {
        return "Buffer";
    }
    getCreateCommandNames() {
        return ["createBuffer"];
    }
    getUpdateCommandNames() {
        return ["bufferData"];
    }
    getDeleteCommandNames() {
        return ["deleteBuffer"];
    }
    getBoundInstance(target) {
        const gl = this.options.context;
        if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ARRAY_BUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ARRAY_BUFFER_BINDING.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ELEMENT_ARRAY_BUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ELEMENT_ARRAY_BUFFER_BINDING.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COPY_READ_BUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COPY_READ_BUFFER_BINDING.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COPY_WRITE_BUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COPY_WRITE_BUFFER_BINDING.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRANSFORM_FEEDBACK_BUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_BINDING.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BUFFER_BINDING.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.PIXEL_PACK_BUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.PIXEL_PACK_BUFFER_BINDING.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.PIXEL_UNPACK_BUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.PIXEL_UNPACK_BUFFER_BINDING.value);
        }
        return undefined;
    }
    delete(instance) {
        const customData = instance.__SPECTOR_Object_CustomData;
        if (!customData) {
            return 0;
        }
        return customData.length;
    }
    update(functionInformation, target, instance) {
        const customData = this.getCustomData(target, functionInformation);
        if (!customData) {
            return 0;
        }
        const previousLength = instance.__SPECTOR_Object_CustomData ? instance.__SPECTOR_Object_CustomData.length : 0;
        instance.__SPECTOR_Object_CustomData = customData;
        return customData.length - previousLength;
    }
    getCustomData(target, functionInformation) {
        const length = this.getLength(functionInformation);
        if (functionInformation.arguments.length >= 4) {
            return {
                target,
                length,
                usage: functionInformation.arguments[2],
                offset: functionInformation.arguments[3],
                sourceLength: functionInformation.arguments[1] ? functionInformation.arguments[1].length : -1,
            };
        }
        if (functionInformation.arguments.length === 3) {
            return {
                target,
                length,
                usage: functionInformation.arguments[2],
            };
        }
        return undefined;
    }
    getLength(functionInformation) {
        /* tslint:disable */
        let length = -1;
        let offset = 0;
        if (functionInformation.arguments.length === 5) {
            length = functionInformation.arguments[4];
            offset = functionInformation.arguments[3];
        }
        if (length <= 0) {
            if (typeof functionInformation.arguments[1] === "number") {
                length = functionInformation.arguments[1];
            }
            else if (functionInformation.arguments[1]) {
                length = functionInformation.arguments[1].byteLength || functionInformation.arguments[1].length || 0;
            }
            else {
                length = 0;
            }
        }
        return length - offset;
    }
}


/***/ }),

/***/ "./src/backend/recorders/programRecorder.ts":
/*!**************************************************!*\
  !*** ./src/backend/recorders/programRecorder.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramRecorder": () => (/* binding */ ProgramRecorder)
/* harmony export */ });
/* harmony import */ var _baseRecorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRecorder */ "./src/backend/recorders/baseRecorder.ts");
/* harmony import */ var _utils_readProgramHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/readProgramHelper */ "./src/backend/utils/readProgramHelper.ts");


class ProgramRecorder extends _baseRecorder__WEBPACK_IMPORTED_MODULE_0__.BaseRecorder {
    get objectName() {
        return "Program";
    }
    getCreateCommandNames() {
        return ["createProgram"];
    }
    getUpdateCommandNames() {
        return ["linkProgram"];
    }
    getDeleteCommandNames() {
        return ["deleteProgram"];
    }
    getBoundInstance(target) {
        return target;
    }
    delete(instance) {
        const customData = instance.__SPECTOR_Object_CustomData;
        if (!customData) {
            return 0;
        }
        return customData.length;
    }
    update(functionInformation, target, instance) {
        if (functionInformation.arguments.length >= 1 && !functionInformation.arguments[0]) {
            return 0;
        }
        const customData = this.getCustomData(instance);
        if (!customData) {
            return 0;
        }
        const previousLength = instance.__SPECTOR_Object_CustomData ? instance.__SPECTOR_Object_CustomData.length : 0;
        instance.__SPECTOR_Object_CustomData = customData;
        return customData.length - previousLength;
    }
    getCustomData(program) {
        const context = this.options.context;
        const programCapture = _utils_readProgramHelper__WEBPACK_IMPORTED_MODULE_1__.ReadProgramHelper.getProgramData(context, program);
        return programCapture;
    }
}


/***/ }),

/***/ "./src/backend/recorders/renderBufferRecorder.ts":
/*!*******************************************************!*\
  !*** ./src/backend/recorders/renderBufferRecorder.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderBufferRecorder": () => (/* binding */ RenderBufferRecorder)
/* harmony export */ });
/* harmony import */ var _baseRecorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRecorder */ "./src/backend/recorders/baseRecorder.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class RenderBufferRecorder extends _baseRecorder__WEBPACK_IMPORTED_MODULE_0__.BaseRecorder {
    get objectName() {
        return "Renderbuffer";
    }
    getCreateCommandNames() {
        return ["createRenderbuffer"];
    }
    getUpdateCommandNames() {
        return ["renderbufferStorage", "renderbufferStorageMultisample"];
    }
    getDeleteCommandNames() {
        return ["deleteRenderbuffer"];
    }
    getBoundInstance(target) {
        const gl = this.options.context;
        if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RENDERBUFFER.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RENDERBUFFER_BINDING.value);
        }
        return undefined;
    }
    delete(instance) {
        const customData = instance.__SPECTOR_Object_CustomData;
        if (!customData) {
            return 0;
        }
        return customData.length;
    }
    update(functionInformation, target, instance) {
        const customData = this.getCustomData(functionInformation, target);
        if (!customData) {
            return 0;
        }
        const previousLength = instance.__SPECTOR_Object_CustomData ? instance.__SPECTOR_Object_CustomData.length : 0;
        customData.length = customData.width * customData.height * this.getByteSizeForInternalFormat(customData.internalFormat);
        instance.__SPECTOR_Object_CustomData = customData;
        return customData.length - previousLength;
    }
    getCustomData(functionInformation, target) {
        // renderbufferStorage
        if (functionInformation.arguments.length === 4) {
            return {
                target,
                internalFormat: functionInformation.arguments[1],
                width: functionInformation.arguments[2],
                height: functionInformation.arguments[3],
                length: 0,
                samples: 0,
            };
        }
        return {
            target,
            internalFormat: functionInformation.arguments[2],
            width: functionInformation.arguments[3],
            height: functionInformation.arguments[4],
            length: 0,
            samples: functionInformation.arguments[1],
        };
    }
}


/***/ }),

/***/ "./src/backend/recorders/texture2DRecorder.ts":
/*!****************************************************!*\
  !*** ./src/backend/recorders/texture2DRecorder.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture2DRecorder": () => (/* binding */ Texture2DRecorder)
/* harmony export */ });
/* harmony import */ var _baseRecorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRecorder */ "./src/backend/recorders/baseRecorder.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class Texture2DRecorder extends _baseRecorder__WEBPACK_IMPORTED_MODULE_0__.BaseRecorder {
    get objectName() {
        return "Texture2d";
    }
    getCreateCommandNames() {
        return ["createTexture"];
    }
    getUpdateCommandNames() {
        return ["texImage2D", "compressedTexImage2D", "texStorage2D"];
    }
    getDeleteCommandNames() {
        return ["deleteTexture"];
    }
    getBoundInstance(target) {
        const gl = this.options.context;
        if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BINDING_2D.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_X.value ||
            target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_Y.value ||
            target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_Z.value ||
            target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_X.value ||
            target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_Y.value ||
            target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_Z.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BINDING_CUBE_MAP.value);
        }
        return undefined;
    }
    delete(instance) {
        const customData = instance.__SPECTOR_Object_CustomData;
        if (!customData) {
            return 0;
        }
        if (customData.target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY.name || customData.target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_3D.name) {
            return 0;
        }
        return customData.length;
    }
    update(functionInformation, target, instance) {
        const customData = this.getCustomData(functionInformation, target, instance);
        if (!customData) {
            return 0;
        }
        const previousLength = instance.__SPECTOR_Object_CustomData ? instance.__SPECTOR_Object_CustomData.length : 0;
        if (customData.isCompressed) {
            // Compressed textures are worth the size of their data.
            if (functionInformation.arguments.length >= 7) {
                const viewOrSize = functionInformation.arguments[6];
                customData.length = (typeof viewOrSize === "number") ? viewOrSize : viewOrSize === null || viewOrSize === void 0 ? void 0 : viewOrSize.byteLength;
            }
        }
        else {
            const cubeMapMultiplier = target === "TEXTURE_2D" ? 1 : 6;
            let internalFormat = customData.internalFormat;
            // @ivanpopelyshev: this hack is made according to tests on PixiJS applications
            // Float textures is not a rare case
            // WebGL1 does not have RGBA32F, RGBA16F, we need to look in `type` field
            if (internalFormat === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA.value) {
                if (customData.type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FLOAT.value) {
                    internalFormat = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA32F.value;
                }
                if (customData.type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.HALF_FLOAT_OES.value) {
                    internalFormat = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA16F.value;
                }
            }
            // @ivanpopelyshev: This calculation should be fine for most cases, but not if we start counting mips
            // TODO: move width/height inside and make pluggable functions based on compressed textures extensions
            customData.length = (customData.width * customData.height * cubeMapMultiplier * this.getByteSizeForInternalFormat(internalFormat));
        }
        customData.length = customData.length | 0;
        instance.__SPECTOR_Object_CustomData = customData;
        return customData.length - previousLength;
    }
    getCustomData(functionInformation, target, instance) {
        if (functionInformation.name === "texImage2D") {
            return this.getTexImage2DCustomData(functionInformation, target, instance);
        }
        else if (functionInformation.name === "compressedTexImage2D") {
            return this.getCompressedTexImage2DCustomData(functionInformation, target, instance);
        }
        else if (functionInformation.name === "texStorage2D") {
            return this.getTexStorage2DCustomData(functionInformation, target, instance);
        }
        return undefined;
    }
    getTexStorage2DCustomData(functionInformation, target, instance) {
        let customData;
        if (functionInformation.arguments.length === 5) {
            // Custom data required to display the texture.
            customData = {
                target,
                // number of level: functionInformation.arguments[1],
                internalFormat: functionInformation.arguments[2],
                width: functionInformation.arguments[3],
                height: functionInformation.arguments[4],
                length: 0,
                isCompressed: false,
            };
        }
        // else NO DATA.
        return customData;
    }
    getCompressedTexImage2DCustomData(functionInformation, target, instance) {
        if (functionInformation.arguments[1] !== 0) {
            // Only manage main lod... so far.
            return undefined;
        }
        let customData;
        if (functionInformation.arguments.length >= 7) {
            // Custom data required to display the texture.
            customData = {
                target,
                // level: functionInformation.arguments[1],
                internalFormat: functionInformation.arguments[2],
                width: functionInformation.arguments[3],
                height: functionInformation.arguments[4],
                length: 0,
                isCompressed: true,
            };
        }
        // else NO DATA.
        return customData;
    }
    getTexImage2DCustomData(functionInformation, target, instance) {
        if (functionInformation.arguments[1] !== 0) {
            // Only manage main lod... so far.
            return undefined;
        }
        let customData;
        if (functionInformation.arguments.length >= 8) {
            // Custom data required to display the texture.
            customData = {
                target,
                // level: functionInformation.arguments[1],
                internalFormat: functionInformation.arguments[2],
                width: functionInformation.arguments[3],
                height: functionInformation.arguments[4],
                format: functionInformation.arguments[6],
                type: functionInformation.arguments[7],
                length: 0,
                isCompressed: false,
            };
        }
        else if (functionInformation.arguments.length === 6) {
            // Custom data required to display the texture.
            customData = {
                target,
                // level: functionInformation.arguments[1],
                internalFormat: functionInformation.arguments[2],
                width: functionInformation.arguments[5].width,
                height: functionInformation.arguments[5].height,
                format: functionInformation.arguments[3],
                type: functionInformation.arguments[4],
                length: 0,
                isCompressed: false,
            };
        }
        // else NO DATA.
        return customData;
    }
}


/***/ }),

/***/ "./src/backend/recorders/texture3DRecorder.ts":
/*!****************************************************!*\
  !*** ./src/backend/recorders/texture3DRecorder.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture3DRecorder": () => (/* binding */ Texture3DRecorder)
/* harmony export */ });
/* harmony import */ var _baseRecorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRecorder */ "./src/backend/recorders/baseRecorder.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class Texture3DRecorder extends _baseRecorder__WEBPACK_IMPORTED_MODULE_0__.BaseRecorder {
    get objectName() {
        return "Texture3d";
    }
    getCreateCommandNames() {
        return ["createTexture"];
    }
    getUpdateCommandNames() {
        return ["texImage3D", "compressedTexImage3D", "texStorage3D"];
    }
    getDeleteCommandNames() {
        return ["deleteTexture"];
    }
    getBoundInstance(target) {
        const gl = this.options.context;
        if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BINDING_2D_ARRAY.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_3D.value) {
            return gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BINDING_3D.value);
        }
        return undefined;
    }
    delete(instance) {
        const customData = instance.__SPECTOR_Object_CustomData;
        if (!customData) {
            return 0;
        }
        if (customData.target !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY.name && customData.target !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_3D.name) {
            return 0;
        }
        return customData.length;
    }
    update(functionInformation, target, instance) {
        if (functionInformation.arguments.length >= 2 && functionInformation.arguments[1] !== 0) {
            return 0;
        }
        const customData = this.getCustomData(functionInformation, target, instance);
        if (!customData) {
            return 0;
        }
        const previousLength = instance.__SPECTOR_Object_CustomData ? instance.__SPECTOR_Object_CustomData.length : 0;
        if (customData.isCompressed) {
            // Compressed textures are worth the size of their data.
            if (functionInformation.arguments.length >= 7) {
                const viewOrSize = functionInformation.arguments[6];
                customData.length = (typeof viewOrSize === "number") ? viewOrSize : viewOrSize === null || viewOrSize === void 0 ? void 0 : viewOrSize.byteLength;
            }
        }
        else {
            customData.length = customData.width * customData.height * customData.depth
                * this.getByteSizeForInternalFormat(customData.internalFormat);
        }
        customData.length = customData.length | 0;
        instance.__SPECTOR_Object_CustomData = customData;
        return customData.length - previousLength;
    }
    getCustomData(functionInformation, target, instance) {
        if (functionInformation.name === "texImage3D") {
            return this.getTexImage3DCustomData(functionInformation, target, instance);
        }
        else if (functionInformation.name === "compressedTexImage3D") {
            return this.getCompressedTexImage3DCustomData(functionInformation, target, instance);
        }
        else if (functionInformation.name === "texStorage3D") {
            return this.getTexStorage3DCustomData(functionInformation, target, instance);
        }
        return undefined;
    }
    getTexStorage3DCustomData(functionInformation, target, instance) {
        let customData;
        if (functionInformation.arguments.length === 6) {
            // Custom data required to display the texture.
            customData = {
                target,
                // level: functionInformation.arguments[1],
                internalFormat: functionInformation.arguments[2],
                width: functionInformation.arguments[3],
                height: functionInformation.arguments[4],
                depth: functionInformation.arguments[5],
                length: 0,
                isCompressed: false,
            };
        }
        // else NO DATA.
        return customData;
    }
    getCompressedTexImage3DCustomData(functionInformation, target, instance) {
        if (functionInformation.arguments[1] !== 0) {
            // Only manage main lod... so far.
            return undefined;
        }
        let customData;
        if (functionInformation.arguments.length >= 8) {
            // Custom data required to display the texture.
            customData = {
                target,
                // level: functionInformation.arguments[1],
                internalFormat: functionInformation.arguments[2],
                width: functionInformation.arguments[3],
                height: functionInformation.arguments[4],
                depth: functionInformation.arguments[5],
                length: 0,
                isCompressed: true,
            };
        }
        // else NO DATA.
        return customData;
    }
    getTexImage3DCustomData(functionInformation, target, instance) {
        if (functionInformation.arguments[1] !== 0) {
            // Only manage main lod... so far.
            return undefined;
        }
        let customData;
        if (functionInformation.arguments.length >= 9) {
            // Custom data required to display the texture.
            customData = {
                target,
                // level: functionInformation.arguments[1],
                internalFormat: functionInformation.arguments[2],
                width: functionInformation.arguments[3],
                height: functionInformation.arguments[4],
                depth: functionInformation.arguments[5],
                format: functionInformation.arguments[7],
                type: functionInformation.arguments[8],
                length: 0,
                isCompressed: false,
            };
        }
        // else NO DATA.
        return customData;
    }
}


/***/ }),

/***/ "./src/backend/spies/canvasSpy.ts":
/*!****************************************!*\
  !*** ./src/backend/spies/canvasSpy.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasSpy": () => (/* binding */ CanvasSpy)
/* harmony export */ });
/* harmony import */ var _shared_utils_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/observable */ "./src/shared/utils/observable.ts");
/* harmony import */ var _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/originFunctionHelper */ "./src/backend/utils/originFunctionHelper.ts");


class CanvasSpy {
    constructor(canvas) {
        this.canvas = canvas;
        this.onContextRequested = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this.init();
    }
    init() {
        // Needs both this.
        // tslint:disable-next-line
        const self = this;
        const getContextSpied = function () {
            const OriginalCanvasConstructor = this instanceof HTMLCanvasElement ?
                HTMLCanvasElement :
                OffscreenCanvas;
            const context = (self.canvas) ?
                _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.executeOriginFunction(this, "getContext", arguments) :
                _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.executePrototypeOriginFunction(this, OriginalCanvasConstructor, "getContext", arguments);
            if (arguments.length > 0 && arguments[0] === "2d") {
                return context;
            }
            if (context) {
                const contextAttributes = Array.prototype.slice.call(arguments);
                const isWebgl2 = (contextAttributes[0] === "webgl2" ||
                    contextAttributes[0] === "experimental-webgl2");
                const version = isWebgl2 ? 2 : 1;
                self.onContextRequested.trigger({
                    context,
                    contextVersion: version,
                });
            }
            return context;
        };
        if (this.canvas) {
            _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.storeOriginFunction(this.canvas, "getContext");
            this.canvas.getContext = getContextSpied;
        }
        else {
            _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.storePrototypeOriginFunction(HTMLCanvasElement, "getContext");
            HTMLCanvasElement.prototype.getContext = getContextSpied;
            if (typeof OffscreenCanvas !== "undefined") {
                _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.storePrototypeOriginFunction(OffscreenCanvas, "getContext");
                OffscreenCanvas.prototype.getContext = getContextSpied;
            }
        }
    }
}


/***/ }),

/***/ "./src/backend/spies/commandSpy.ts":
/*!*****************************************!*\
  !*** ./src/backend/spies/commandSpy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandSpy": () => (/* binding */ CommandSpy)
/* harmony export */ });
/* harmony import */ var _commands_bufferSubData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commands/bufferSubData */ "./src/backend/commands/bufferSubData.ts");
/* harmony import */ var _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/originFunctionHelper */ "./src/backend/utils/originFunctionHelper.ts");
/* harmony import */ var _shared_utils_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/time */ "./src/shared/utils/time.ts");
/* harmony import */ var _commands_bindAttribLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commands/bindAttribLocation */ "./src/backend/commands/bindAttribLocation.ts");
/* harmony import */ var _commands_blitFrameBuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commands/blitFrameBuffer */ "./src/backend/commands/blitFrameBuffer.ts");
/* harmony import */ var _commands_clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commands/clear */ "./src/backend/commands/clear.ts");
/* harmony import */ var _commands_defaultCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commands/defaultCommand */ "./src/backend/commands/defaultCommand.ts");
/* harmony import */ var _commands_disableVertexAttribArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commands/disableVertexAttribArray */ "./src/backend/commands/disableVertexAttribArray.ts");
/* harmony import */ var _commands_drawArrays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commands/drawArrays */ "./src/backend/commands/drawArrays.ts");
/* harmony import */ var _commands_drawArraysInstanced__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commands/drawArraysInstanced */ "./src/backend/commands/drawArraysInstanced.ts");
/* harmony import */ var _commands_drawArraysInstancedAngle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commands/drawArraysInstancedAngle */ "./src/backend/commands/drawArraysInstancedAngle.ts");
/* harmony import */ var _commands_drawElements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../commands/drawElements */ "./src/backend/commands/drawElements.ts");
/* harmony import */ var _commands_drawElementsInstancedAngle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../commands/drawElementsInstancedAngle */ "./src/backend/commands/drawElementsInstancedAngle.ts");
/* harmony import */ var _commands_drawElementsInstanced__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../commands/drawElementsInstanced */ "./src/backend/commands/drawElementsInstanced.ts");
/* harmony import */ var _commands_drawRangeElements__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../commands/drawRangeElements */ "./src/backend/commands/drawRangeElements.ts");
/* harmony import */ var _commands_getActiveAttrib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../commands/getActiveAttrib */ "./src/backend/commands/getActiveAttrib.ts");
/* harmony import */ var _commands_getActiveUniform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../commands/getActiveUniform */ "./src/backend/commands/getActiveUniform.ts");
/* harmony import */ var _commands_getAttribLocation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../commands/getAttribLocation */ "./src/backend/commands/getAttribLocation.ts");
/* harmony import */ var _commands_getExtension__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../commands/getExtension */ "./src/backend/commands/getExtension.ts");
/* harmony import */ var _commands_getParameter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../commands/getParameter */ "./src/backend/commands/getParameter.ts");
/* harmony import */ var _commands_getShaderPrecisionFormat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../commands/getShaderPrecisionFormat */ "./src/backend/commands/getShaderPrecisionFormat.ts");
/* harmony import */ var _commands_getTransformFeedbackVarying__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../commands/getTransformFeedbackVarying */ "./src/backend/commands/getTransformFeedbackVarying.ts");
/* harmony import */ var _commands_MultiDrawArraysInstancedBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../commands/MultiDrawArraysInstancedBaseInstanceWEBGL */ "./src/backend/commands/MultiDrawArraysInstancedBaseInstanceWEBGL.ts");
/* harmony import */ var _commands_MultiDrawArraysInstancedWEBGL__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../commands/MultiDrawArraysInstancedWEBGL */ "./src/backend/commands/MultiDrawArraysInstancedWEBGL.ts");
/* harmony import */ var _commands_MultiDrawArraysWEBGL__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../commands/MultiDrawArraysWEBGL */ "./src/backend/commands/MultiDrawArraysWEBGL.ts");
/* harmony import */ var _commands_MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../commands/MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL */ "./src/backend/commands/MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.ts");
/* harmony import */ var _commands_MultiDrawElementsInstancedWEBGL__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../commands/MultiDrawElementsInstancedWEBGL */ "./src/backend/commands/MultiDrawElementsInstancedWEBGL.ts");
/* harmony import */ var _commands_MultiDrawElementsWEBGL__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../commands/MultiDrawElementsWEBGL */ "./src/backend/commands/MultiDrawElementsWEBGL.ts");
/* harmony import */ var _commands_drawArraysInstancedBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../commands/drawArraysInstancedBaseInstanceWEBGL */ "./src/backend/commands/drawArraysInstancedBaseInstanceWEBGL.ts");
/* harmony import */ var _commands_drawElementsInstancedBaseVertexBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../commands/drawElementsInstancedBaseVertexBaseInstanceWEBGL */ "./src/backend/commands/drawElementsInstancedBaseVertexBaseInstanceWEBGL.ts");
/* harmony import */ var _commands_scissor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../commands/scissor */ "./src/backend/commands/scissor.ts");
/* harmony import */ var _commands_stencilMask__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../commands/stencilMask */ "./src/backend/commands/stencilMask.ts");
/* harmony import */ var _commands_stencilMaskSeparate__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../commands/stencilMaskSeparate */ "./src/backend/commands/stencilMaskSeparate.ts");
/* harmony import */ var _commands_stencilFunc__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../commands/stencilFunc */ "./src/backend/commands/stencilFunc.ts");
/* harmony import */ var _commands_stencilFuncSeparate__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../commands/stencilFuncSeparate */ "./src/backend/commands/stencilFuncSeparate.ts");
/* harmony import */ var _commands_vertexAttribPointer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../commands/vertexAttribPointer */ "./src/backend/commands/vertexAttribPointer.ts");
/* harmony import */ var _commands_viewport__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../commands/viewport */ "./src/backend/commands/viewport.ts");
/* harmony import */ var _commands_enableVertexAttribArray__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../commands/enableVertexAttribArray */ "./src/backend/commands/enableVertexAttribArray.ts");






































class CommandSpy {
    constructor(options) {
        this.spiedCommandName = options.spiedCommandName;
        this.spiedCommandRunningContext = options.spiedCommandRunningContext;
        this.spiedCommand = this.spiedCommandRunningContext[this.spiedCommandName];
        _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.storeOriginFunction(this.spiedCommandRunningContext, this.spiedCommandName);
        this.callback = options.callback;
        this.commandOptions = {
            context: options.context,
            contextVersion: options.contextVersion,
            extensions: options.extensions,
            toggleCapture: options.toggleCapture,
        };
        this.initCustomCommands();
        this.initCommand();
    }
    spy() {
        this.spiedCommandRunningContext[this.spiedCommandName] = this.overloadedCommand;
    }
    unSpy() {
        this.spiedCommandRunningContext[this.spiedCommandName] = this.spiedCommand;
    }
    createCapture(functionInformation, commandCaptureId, marker) {
        return this.command.createCapture(functionInformation, commandCaptureId, marker);
    }
    initCommand() {
        // tslint:disable-next-line:prefer-conditional-expression
        if (CommandSpy.customCommandsConstructors[this.spiedCommandName]) {
            this.command = CommandSpy.customCommandsConstructors[this.spiedCommandName](this.commandOptions);
        }
        else {
            this.command = new _commands_defaultCommand__WEBPACK_IMPORTED_MODULE_6__.DefaultCommand(this.commandOptions, this.spiedCommandName);
        }
        this.overloadedCommand = this.getSpy();
    }
    getSpy() {
        // Needs both this.
        // tslint:disable-next-line
        const self = this;
        // Needs arguments access.
        // tslint:disable-next-line:only-arrow-functions
        return function () {
            const before = _shared_utils_time__WEBPACK_IMPORTED_MODULE_2__.Time.now;
            const result = _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.executeOriginFunction(self.spiedCommandRunningContext, self.spiedCommandName, arguments);
            const after = _shared_utils_time__WEBPACK_IMPORTED_MODULE_2__.Time.now;
            const functionInformation = {
                name: self.spiedCommandName,
                arguments,
                result,
                startTime: before,
                endTime: after,
            };
            self.callback(self, functionInformation);
            return result;
        };
    }
    initCustomCommands() {
        if (CommandSpy.customCommandsConstructors) {
            return;
        }
        CommandSpy.customCommandsConstructors = {
            [_commands_bindAttribLocation__WEBPACK_IMPORTED_MODULE_3__.BindAttribLocation.commandName]: (options) => new _commands_bindAttribLocation__WEBPACK_IMPORTED_MODULE_3__.BindAttribLocation(options),
            [_commands_blitFrameBuffer__WEBPACK_IMPORTED_MODULE_4__.BlitFrameBuffer.commandName]: (options) => new _commands_blitFrameBuffer__WEBPACK_IMPORTED_MODULE_4__.BlitFrameBuffer(options),
            [_commands_bufferSubData__WEBPACK_IMPORTED_MODULE_0__.BufferSubData.commandName]: (options) => new _commands_bufferSubData__WEBPACK_IMPORTED_MODULE_0__.BufferSubData(options),
            [_commands_clear__WEBPACK_IMPORTED_MODULE_5__.Clear.commandName]: (options) => new _commands_clear__WEBPACK_IMPORTED_MODULE_5__.Clear(options),
            [_commands_disableVertexAttribArray__WEBPACK_IMPORTED_MODULE_7__.DisableVertexAttribArray.commandName]: (options) => new _commands_disableVertexAttribArray__WEBPACK_IMPORTED_MODULE_7__.DisableVertexAttribArray(options),
            [_commands_drawArrays__WEBPACK_IMPORTED_MODULE_8__.DrawArrays.commandName]: (options) => new _commands_drawArrays__WEBPACK_IMPORTED_MODULE_8__.DrawArrays(options),
            [_commands_drawArraysInstanced__WEBPACK_IMPORTED_MODULE_9__.DrawArraysInstanced.commandName]: (options) => new _commands_drawArraysInstanced__WEBPACK_IMPORTED_MODULE_9__.DrawArraysInstanced(options),
            [_commands_drawArraysInstancedAngle__WEBPACK_IMPORTED_MODULE_10__.DrawArraysInstancedAngle.commandName]: (options) => new _commands_drawArraysInstancedAngle__WEBPACK_IMPORTED_MODULE_10__.DrawArraysInstancedAngle(options),
            [_commands_drawElements__WEBPACK_IMPORTED_MODULE_11__.DrawElements.commandName]: (options) => new _commands_drawElements__WEBPACK_IMPORTED_MODULE_11__.DrawElements(options),
            [_commands_drawElementsInstanced__WEBPACK_IMPORTED_MODULE_13__.DrawElementsInstanced.commandName]: (options) => new _commands_drawElementsInstanced__WEBPACK_IMPORTED_MODULE_13__.DrawElementsInstanced(options),
            [_commands_drawElementsInstancedAngle__WEBPACK_IMPORTED_MODULE_12__.DrawElementsInstancedAngle.commandName]: (options) => new _commands_drawElementsInstancedAngle__WEBPACK_IMPORTED_MODULE_12__.DrawElementsInstancedAngle(options),
            [_commands_drawRangeElements__WEBPACK_IMPORTED_MODULE_14__.DrawRangeElements.commandName]: (options) => new _commands_drawRangeElements__WEBPACK_IMPORTED_MODULE_14__.DrawRangeElements(options),
            [_commands_getActiveAttrib__WEBPACK_IMPORTED_MODULE_15__.GetActiveAttrib.commandName]: (options) => new _commands_getActiveAttrib__WEBPACK_IMPORTED_MODULE_15__.GetActiveAttrib(options),
            [_commands_getActiveUniform__WEBPACK_IMPORTED_MODULE_16__.GetActiveUniform.commandName]: (options) => new _commands_getActiveUniform__WEBPACK_IMPORTED_MODULE_16__.GetActiveUniform(options),
            [_commands_getAttribLocation__WEBPACK_IMPORTED_MODULE_17__.GetAttribLocation.commandName]: (options) => new _commands_getAttribLocation__WEBPACK_IMPORTED_MODULE_17__.GetAttribLocation(options),
            [_commands_getExtension__WEBPACK_IMPORTED_MODULE_18__.GetExtension.commandName]: (options) => new _commands_getExtension__WEBPACK_IMPORTED_MODULE_18__.GetExtension(options),
            [_commands_getParameter__WEBPACK_IMPORTED_MODULE_19__.GetParameter.commandName]: (options) => new _commands_getParameter__WEBPACK_IMPORTED_MODULE_19__.GetParameter(options),
            [_commands_getShaderPrecisionFormat__WEBPACK_IMPORTED_MODULE_20__.GetShaderPrecisionFormat.commandName]: (options) => new _commands_getShaderPrecisionFormat__WEBPACK_IMPORTED_MODULE_20__.GetShaderPrecisionFormat(options),
            [_commands_getTransformFeedbackVarying__WEBPACK_IMPORTED_MODULE_21__.GetTransformFeedbackVarying.commandName]: (options) => new _commands_getTransformFeedbackVarying__WEBPACK_IMPORTED_MODULE_21__.GetTransformFeedbackVarying(options),
            [_commands_MultiDrawArraysInstancedBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_22__.MultiDrawArraysInstancedBaseInstanceWEBGL.commandName]: (options) => new _commands_MultiDrawArraysInstancedBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_22__.MultiDrawArraysInstancedBaseInstanceWEBGL(options),
            [_commands_MultiDrawArraysInstancedWEBGL__WEBPACK_IMPORTED_MODULE_23__.MultiDrawArraysInstancedWEBGL.commandName]: (options) => new _commands_MultiDrawArraysInstancedWEBGL__WEBPACK_IMPORTED_MODULE_23__.MultiDrawArraysInstancedWEBGL(options),
            [_commands_MultiDrawArraysWEBGL__WEBPACK_IMPORTED_MODULE_24__.MultiDrawArraysWEBGL.commandName]: (options) => new _commands_MultiDrawArraysWEBGL__WEBPACK_IMPORTED_MODULE_24__.MultiDrawArraysWEBGL(options),
            [_commands_MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_25__.MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.commandName]: (options) => new _commands_MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_25__.MultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(options),
            [_commands_MultiDrawElementsInstancedWEBGL__WEBPACK_IMPORTED_MODULE_26__.MultiDrawElementsInstancedWEBGL.commandName]: (options) => new _commands_MultiDrawElementsInstancedWEBGL__WEBPACK_IMPORTED_MODULE_26__.MultiDrawElementsInstancedWEBGL(options),
            [_commands_MultiDrawElementsWEBGL__WEBPACK_IMPORTED_MODULE_27__.MultiDrawElementsWEBGL.commandName]: (options) => new _commands_MultiDrawElementsWEBGL__WEBPACK_IMPORTED_MODULE_27__.MultiDrawElementsWEBGL(options),
            [_commands_drawArraysInstancedBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_28__.DrawArraysInstancedBaseInstanceWEBGL.commandName]: (options) => new _commands_drawArraysInstancedBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_28__.DrawArraysInstancedBaseInstanceWEBGL(options),
            [_commands_drawElementsInstancedBaseVertexBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_29__.DrawElementsInstancedBaseVertexBaseInstanceWEBGL.commandName]: (options) => new _commands_drawElementsInstancedBaseVertexBaseInstanceWEBGL__WEBPACK_IMPORTED_MODULE_29__.DrawElementsInstancedBaseVertexBaseInstanceWEBGL(options),
            [_commands_scissor__WEBPACK_IMPORTED_MODULE_30__.Scissor.commandName]: (options) => new _commands_scissor__WEBPACK_IMPORTED_MODULE_30__.Scissor(options),
            [_commands_stencilMask__WEBPACK_IMPORTED_MODULE_31__.StencilMask.commandName]: (options) => new _commands_stencilMask__WEBPACK_IMPORTED_MODULE_31__.StencilMask(options),
            [_commands_stencilMaskSeparate__WEBPACK_IMPORTED_MODULE_32__.StencilMaskSeparate.commandName]: (options) => new _commands_stencilMaskSeparate__WEBPACK_IMPORTED_MODULE_32__.StencilMaskSeparate(options),
            [_commands_stencilFunc__WEBPACK_IMPORTED_MODULE_33__.StencilFunc.commandName]: (options) => new _commands_stencilFunc__WEBPACK_IMPORTED_MODULE_33__.StencilFunc(options),
            [_commands_stencilFuncSeparate__WEBPACK_IMPORTED_MODULE_34__.StencilFuncSeparate.commandName]: (options) => new _commands_stencilFuncSeparate__WEBPACK_IMPORTED_MODULE_34__.StencilFuncSeparate(options),
            [_commands_vertexAttribPointer__WEBPACK_IMPORTED_MODULE_35__.VertexAttribPointer.commandName]: (options) => new _commands_vertexAttribPointer__WEBPACK_IMPORTED_MODULE_35__.VertexAttribPointer(options),
            [_commands_viewport__WEBPACK_IMPORTED_MODULE_36__.Viewport.commandName]: (options) => new _commands_viewport__WEBPACK_IMPORTED_MODULE_36__.Viewport(options),
            [_commands_enableVertexAttribArray__WEBPACK_IMPORTED_MODULE_37__.EnableVertexAttribArray.commandName]: (options) => new _commands_enableVertexAttribArray__WEBPACK_IMPORTED_MODULE_37__.EnableVertexAttribArray(options),
        };
    }
}


/***/ }),

/***/ "./src/backend/spies/contextSpy.ts":
/*!*****************************************!*\
  !*** ./src/backend/spies/contextSpy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextSpy": () => (/* binding */ ContextSpy)
/* harmony export */ });
/* harmony import */ var _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/time */ "./src/shared/utils/time.ts");
/* harmony import */ var _shared_utils_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/merge */ "./src/shared/utils/merge.ts");
/* harmony import */ var _analysers_captureAnalyser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../analysers/captureAnalyser */ "./src/backend/analysers/captureAnalyser.ts");
/* harmony import */ var _commandSpy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commandSpy */ "./src/backend/spies/commandSpy.ts");
/* harmony import */ var _stateSpy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateSpy */ "./src/backend/spies/stateSpy.ts");
/* harmony import */ var _recorderSpy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recorderSpy */ "./src/backend/spies/recorderSpy.ts");
/* harmony import */ var _webGlObjectSpy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webGlObjectSpy */ "./src/backend/spies/webGlObjectSpy.ts");
/* harmony import */ var _shared_utils_observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/observable */ "./src/shared/utils/observable.ts");
/* harmony import */ var _shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils/logger */ "./src/shared/utils/logger.ts");
/* harmony import */ var _states_information_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../states/information/extensions */ "./src/backend/states/information/extensions.ts");
/* harmony import */ var _states_information_compressedTextures__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../states/information/compressedTextures */ "./src/backend/states/information/compressedTextures.ts");
/* harmony import */ var _states_information_capabilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../states/information/capabilities */ "./src/backend/states/information/capabilities.ts");












class ContextSpy {
    constructor(options) {
        this.options = options;
        this.commandId = 0;
        this.context = options.context;
        this.version = options.version;
        this.onMaxCommand = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_7__.Observable();
        this.capturing = false;
        this.globalCapturing = true;
        this.contextInformation = {
            context: this.context,
            contextVersion: this.version,
            toggleCapture: this.toggleGlobalCapturing.bind(this),
            tagWebGlObject: this.tagWebGlObject.bind(this),
            extensions: {},
        };
        this.commandSpies = {};
        this.stateSpy = new _stateSpy__WEBPACK_IMPORTED_MODULE_4__.StateSpy(this.contextInformation);
        this.recorderSpy = new _recorderSpy__WEBPACK_IMPORTED_MODULE_5__.RecorderSpy(this.contextInformation);
        this.webGlObjectSpy = new _webGlObjectSpy__WEBPACK_IMPORTED_MODULE_6__.WebGlObjectSpy(this.contextInformation);
        this.analyser = new _analysers_captureAnalyser__WEBPACK_IMPORTED_MODULE_2__.CaptureAnalyser(this.contextInformation);
        this.initStaticCapture();
        if (options.recordAlways) {
            this.spy();
        }
    }
    spy() {
        this.spyContext(this.context);
        const { extensions } = this.contextInformation;
        for (const extensionName in extensions) {
            if (extensions.hasOwnProperty(extensionName)) {
                this.spyContext(extensions[extensionName]);
            }
        }
    }
    unSpy() {
        for (const member in this.commandSpies) {
            if (this.commandSpies.hasOwnProperty(member)) {
                this.commandSpies[member].unSpy();
            }
        }
    }
    startCapture(maxCommands = 0, quickCapture = false, fullCapture = false) {
        const startTime = _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now;
        this.maxCommands = maxCommands;
        if (!this.options.recordAlways) {
            this.spy();
        }
        this.capturing = true;
        this.commandId = 0;
        this.currentCapture = {
            canvas: this.canvasCapture,
            context: this.contextCapture,
            commands: [],
            initState: {},
            endState: {},
            startTime,
            listenCommandsStartTime: 0,
            listenCommandsEndTime: 0,
            endTime: 0,
            analyses: [],
            frameMemory: {},
            memory: {},
        };
        // Refreshes canvas info in case it changed beffore the capture.
        this.currentCapture.canvas.width = this.context.canvas.width;
        this.currentCapture.canvas.height = this.context.canvas.height;
        this.currentCapture.canvas.clientWidth = this.context.canvas.clientWidth || this.context.canvas.width;
        this.currentCapture.canvas.clientHeight = this.context.canvas.clientHeight || this.context.canvas.height;
        this.stateSpy.startCapture(this.currentCapture, quickCapture, fullCapture);
        this.recorderSpy.startCapture();
        this.currentCapture.listenCommandsStartTime = _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now;
    }
    stopCapture() {
        const listenCommandsEndTime = _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now;
        if (!this.options.recordAlways) {
            this.unSpy();
        }
        this.capturing = false;
        this.stateSpy.stopCapture(this.currentCapture);
        this.recorderSpy.stopCapture();
        this.currentCapture.listenCommandsEndTime = listenCommandsEndTime;
        this.currentCapture.endTime = _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now;
        this.recorderSpy.appendRecordedInformation(this.currentCapture);
        this.analyser.appendAnalyses(this.currentCapture);
        return this.currentCapture;
    }
    isCapturing() {
        return this.globalCapturing && this.capturing;
    }
    setMarker(marker) {
        this.marker = marker;
    }
    clearMarker() {
        this.marker = null;
    }
    log(value) {
        this.currentCapture.commands.push({
            name: "LOG",
            text: value,
            commandArguments: [],
            commandEndTime: _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now,
            endTime: _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now,
            stackTrace: [],
            marker: "",
            status: 40 /* CommandCaptureStatus.Valid */,
            startTime: _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now,
            result: undefined,
            id: this.getNextCommandCaptureId()
        });
    }
    getNextCommandCaptureId() {
        return this.commandId++;
    }
    onCommand(commandSpy, functionInformation) {
        if (!this.globalCapturing) {
            return;
        }
        this.webGlObjectSpy.tagWebGlObjects(functionInformation);
        this.recorderSpy.recordCommand(functionInformation);
        if (this.isCapturing()) {
            const commandCapture = commandSpy.createCapture(functionInformation, this.getNextCommandCaptureId(), this.marker);
            this.stateSpy.captureState(commandCapture);
            this.currentCapture.commands.push(commandCapture);
            commandCapture.endTime = _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now;
            if (this.maxCommands > 0 && this.currentCapture.commands.length === this.maxCommands) {
                this.onMaxCommand.trigger(this);
            }
        }
    }
    spyContext(bindingContext) {
        const members = [];
        for (const member in bindingContext) {
            if (member) {
                members.push(member);
            }
        }
        for (let i = 0; i < members.length; i++) {
            const member = members[i];
            if (~ContextSpy.unSpyableMembers.indexOf(member)) {
                continue;
            }
            try {
                const isFunction = typeof bindingContext[member] !== "number";
                if (isFunction) {
                    this.spyFunction(member, bindingContext);
                }
            }
            catch (e) {
                _shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.error("Cant Spy member: " + member);
                _shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.error(e);
            }
        }
    }
    initStaticCapture() {
        const extensionsState = new _states_information_extensions__WEBPACK_IMPORTED_MODULE_9__.Extensions(this.contextInformation);
        const extensions = extensionsState.getExtensions();
        for (const extensionName in extensions) {
            if (extensions.hasOwnProperty(extensionName)) {
                this.contextInformation.extensions[extensionName] = extensions[extensionName];
            }
        }
        const capabilitiesState = new _states_information_capabilities__WEBPACK_IMPORTED_MODULE_11__.Capabilities(this.contextInformation);
        const compressedTextures = new _states_information_compressedTextures__WEBPACK_IMPORTED_MODULE_10__.CompressedTextures(this.contextInformation);
        this.contextCapture = {
            version: this.version,
            contextAttributes: this.context.getContextAttributes(),
            capabilities: capabilitiesState.getStateData(),
            extensions: extensionsState.getStateData(),
            compressedTextures: compressedTextures.getStateData(),
        };
        this.canvasCapture = {
            width: this.context.canvas.width,
            height: this.context.canvas.height,
            clientWidth: this.context.canvas.clientWidth || this.context.canvas.width,
            clientHeight: this.context.canvas.clientHeight || this.context.canvas.height,
            browserAgent: navigator ? navigator.userAgent : "",
        };
    }
    spyFunction(member, bindingContext) {
        if (member.indexOf("__SPECTOR_Origin_") === 0) {
            return;
        }
        if (!this.commandSpies[member]) {
            const options = (0,_shared_utils_merge__WEBPACK_IMPORTED_MODULE_1__.merge)(this.contextInformation, {
                spiedCommandName: member,
                spiedCommandRunningContext: bindingContext,
                callback: this.onCommand.bind(this),
            });
            this.commandSpies[member] = new _commandSpy__WEBPACK_IMPORTED_MODULE_3__.CommandSpy(options);
        }
        this.commandSpies[member].spy();
    }
    toggleGlobalCapturing(capture) {
        this.globalCapturing = capture;
    }
    tagWebGlObject(object) {
        return this.webGlObjectSpy.tagWebGlObject(object);
    }
}
ContextSpy.unSpyableMembers = [
    "canvas",
    "drawingBufferWidth",
    "drawingBufferHeight",
    "drawingBufferColorSpace",
    "unpackColorSpace",
    "glp", // WebGl Insight internal method.
];


/***/ }),

/***/ "./src/backend/spies/recorderSpy.ts":
/*!******************************************!*\
  !*** ./src/backend/spies/recorderSpy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecorderSpy": () => (/* binding */ RecorderSpy)
/* harmony export */ });
/* harmony import */ var _recorders_bufferRecorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recorders/bufferRecorder */ "./src/backend/recorders/bufferRecorder.ts");
/* harmony import */ var _recorders_renderBufferRecorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recorders/renderBufferRecorder */ "./src/backend/recorders/renderBufferRecorder.ts");
/* harmony import */ var _recorders_texture2DRecorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recorders/texture2DRecorder */ "./src/backend/recorders/texture2DRecorder.ts");
/* harmony import */ var _recorders_texture3DRecorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recorders/texture3DRecorder */ "./src/backend/recorders/texture3DRecorder.ts");
/* harmony import */ var _recorders_programRecorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recorders/programRecorder */ "./src/backend/recorders/programRecorder.ts");





class RecorderSpy {
    constructor(contextInformation) {
        this.contextInformation = contextInformation;
        this.onCommandCallbacks = {};
        this.recorders = [];
        this.initRecorders();
    }
    recordCommand(functionInformation) {
        const callbacks = this.onCommandCallbacks[functionInformation.name];
        if (callbacks) {
            for (const callback of callbacks) {
                callback(functionInformation);
            }
        }
    }
    startCapture() {
        for (const recorder of this.recorders) {
            recorder.startCapture();
        }
    }
    stopCapture() {
        for (const recorder of this.recorders) {
            recorder.stopCapture();
        }
    }
    appendRecordedInformation(capture) {
        for (const recorder of this.recorders) {
            recorder.appendRecordedInformation(capture);
        }
    }
    initRecorders() {
        this.recorders.push(new _recorders_bufferRecorder__WEBPACK_IMPORTED_MODULE_0__.BufferRecorder(this.contextInformation), new _recorders_renderBufferRecorder__WEBPACK_IMPORTED_MODULE_1__.RenderBufferRecorder(this.contextInformation), new _recorders_texture2DRecorder__WEBPACK_IMPORTED_MODULE_2__.Texture2DRecorder(this.contextInformation), new _recorders_texture3DRecorder__WEBPACK_IMPORTED_MODULE_3__.Texture3DRecorder(this.contextInformation), new _recorders_programRecorder__WEBPACK_IMPORTED_MODULE_4__.ProgramRecorder(this.contextInformation));
        for (const recorder of this.recorders) {
            recorder.registerCallbacks(this.onCommandCallbacks);
        }
    }
}


/***/ }),

/***/ "./src/backend/spies/stateSpy.ts":
/*!***************************************!*\
  !*** ./src/backend/spies/stateSpy.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateSpy": () => (/* binding */ StateSpy)
/* harmony export */ });
/* harmony import */ var _states_context_alignmentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/context/alignmentState */ "./src/backend/states/context/alignmentState.ts");
/* harmony import */ var _states_context_blendState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/context/blendState */ "./src/backend/states/context/blendState.ts");
/* harmony import */ var _states_context_clearState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/context/clearState */ "./src/backend/states/context/clearState.ts");
/* harmony import */ var _states_context_colorState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states/context/colorState */ "./src/backend/states/context/colorState.ts");
/* harmony import */ var _states_context_coverageState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states/context/coverageState */ "./src/backend/states/context/coverageState.ts");
/* harmony import */ var _states_context_cullState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../states/context/cullState */ "./src/backend/states/context/cullState.ts");
/* harmony import */ var _states_context_depthState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states/context/depthState */ "./src/backend/states/context/depthState.ts");
/* harmony import */ var _states_context_drawState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../states/context/drawState */ "./src/backend/states/context/drawState.ts");
/* harmony import */ var _states_context_mipmapHintState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../states/context/mipmapHintState */ "./src/backend/states/context/mipmapHintState.ts");
/* harmony import */ var _states_context_polygonOffsetState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../states/context/polygonOffsetState */ "./src/backend/states/context/polygonOffsetState.ts");
/* harmony import */ var _states_context_scissorState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../states/context/scissorState */ "./src/backend/states/context/scissorState.ts");
/* harmony import */ var _states_context_stencilState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../states/context/stencilState */ "./src/backend/states/context/stencilState.ts");
/* harmony import */ var _states_context_visualState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../states/context/visualState */ "./src/backend/states/context/visualState.ts");
/* harmony import */ var _states_drawCalls_drawCallState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../states/drawCalls/drawCallState */ "./src/backend/states/drawCalls/drawCallState.ts");














class StateSpy {
    constructor(contextInformation) {
        this.contextInformation = contextInformation;
        this.stateTrackers = [];
        this.onCommandCapturedCallbacks = {};
        this.initStateTrackers();
    }
    startCapture(currentCapture, quickCapture, fullCapture) {
        for (const stateTracker of this.stateTrackers) {
            const state = stateTracker.startCapture(true, quickCapture, fullCapture);
            if (stateTracker.requireStartAndStopStates) {
                currentCapture.initState[stateTracker.stateName] = state;
            }
        }
    }
    stopCapture(currentCapture) {
        for (const stateTracker of this.stateTrackers) {
            const state = stateTracker.stopCapture();
            if (stateTracker.requireStartAndStopStates) {
                currentCapture.endState[stateTracker.stateName] = state;
            }
        }
    }
    captureState(commandCapture) {
        const callbacks = this.onCommandCapturedCallbacks[commandCapture.name];
        if (callbacks) {
            for (const callback of callbacks) {
                callback(commandCapture);
            }
        }
    }
    initStateTrackers() {
        this.stateTrackers.push(new _states_context_alignmentState__WEBPACK_IMPORTED_MODULE_0__.AlignmentState(this.contextInformation), new _states_context_blendState__WEBPACK_IMPORTED_MODULE_1__.BlendState(this.contextInformation), new _states_context_clearState__WEBPACK_IMPORTED_MODULE_2__.ClearState(this.contextInformation), new _states_context_colorState__WEBPACK_IMPORTED_MODULE_3__.ColorState(this.contextInformation), new _states_context_coverageState__WEBPACK_IMPORTED_MODULE_4__.CoverageState(this.contextInformation), new _states_context_cullState__WEBPACK_IMPORTED_MODULE_5__.CullState(this.contextInformation), new _states_context_depthState__WEBPACK_IMPORTED_MODULE_6__.DepthState(this.contextInformation), new _states_context_drawState__WEBPACK_IMPORTED_MODULE_7__.DrawState(this.contextInformation), new _states_context_mipmapHintState__WEBPACK_IMPORTED_MODULE_8__.MipmapHintState(this.contextInformation), new _states_context_polygonOffsetState__WEBPACK_IMPORTED_MODULE_9__.PolygonOffsetState(this.contextInformation), new _states_context_scissorState__WEBPACK_IMPORTED_MODULE_10__.ScissorState(this.contextInformation), new _states_context_stencilState__WEBPACK_IMPORTED_MODULE_11__.StencilState(this.contextInformation), new _states_context_visualState__WEBPACK_IMPORTED_MODULE_12__.VisualState(this.contextInformation), new _states_drawCalls_drawCallState__WEBPACK_IMPORTED_MODULE_13__.DrawCallState(this.contextInformation));
        for (const tracker of this.stateTrackers) {
            tracker.registerCallbacks(this.onCommandCapturedCallbacks);
        }
    }
}


/***/ }),

/***/ "./src/backend/spies/timeSpy.ts":
/*!**************************************!*\
  !*** ./src/backend/spies/timeSpy.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSpy": () => (/* binding */ TimeSpy)
/* harmony export */ });
/* harmony import */ var _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/time */ "./src/shared/utils/time.ts");
/* harmony import */ var _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/originFunctionHelper */ "./src/backend/utils/originFunctionHelper.ts");
/* harmony import */ var _shared_utils_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/observable */ "./src/shared/utils/observable.ts");



// tslint:disable:ban-types
// tslint:disable:only-arrow-functions
class TimeSpy {
    constructor(spiedScope) {
        this.spiedScope = spiedScope || window;
        this.lastFrame = 0;
        this.speedRatio = 1;
        this.willPlayNextFrame = false;
        this.onFrameStart = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this.onFrameEnd = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this.onError = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this.lastSixtyFramesDuration = [];
        this.lastSixtyFramesCurrentIndex = 0;
        this.lastSixtyFramesPreviousStart = 0;
        for (let i = 0; i < TimeSpy.fpsWindowSize; i++) {
            this.lastSixtyFramesDuration[i] = 0;
        }
        this.init();
    }
    playNextFrame() {
        this.willPlayNextFrame = true;
    }
    changeSpeedRatio(ratio) {
        this.speedRatio = ratio;
    }
    static getRequestAnimationFrameFunctionNames() {
        return [...TimeSpy.requestAnimationFrameFunctions];
    }
    addRequestAnimationFrameFunctionName(functionName) {
        TimeSpy.requestAnimationFrameFunctions.push(functionName);
    }
    getSpiedScope() {
        return this.spiedScope;
    }
    setSpiedScope(spiedScope) {
        this.spiedScope = spiedScope;
    }
    getFps() {
        let accumulator = 0;
        for (let i = 0; i < TimeSpy.fpsWindowSize; i++) {
            accumulator += this.lastSixtyFramesDuration[i];
        }
        if (accumulator === 0) {
            return 0;
        }
        return 1000 * 60 / accumulator;
    }
    init() {
        for (const Spy of TimeSpy.requestAnimationFrameFunctions) {
            this.spyRequestAnimationFrame(Spy, this.spiedScope);
        }
        for (const Spy of TimeSpy.setTimerFunctions) {
            this.spySetTimer(Spy);
        }
        if (this.spiedScope["VRDisplay"]) {
            this.spiedScope.addEventListener("vrdisplaypresentchange", (event) => {
                this.spyRequestAnimationFrame("requestAnimationFrame", event.display);
            });
        }
    }
    spyRequestAnimationFrame(functionName, owner) {
        // Needs both this.
        // tslint:disable-next-line
        const self = this;
        _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.storeOriginFunction(owner, functionName);
        owner[functionName] = function () {
            const callback = arguments[0];
            const onCallback = self.getCallback(self, callback, () => { self.spiedScope[functionName](callback); });
            const result = _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.executeOriginFunction(owner, functionName, [onCallback]);
            return result;
        };
    }
    spySetTimer(functionName) {
        // Needs both this.
        // tslint:disable-next-line
        const self = this;
        const owner = this.spiedScope;
        const needsReplay = (functionName === "setTimeout");
        _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.storeOriginFunction(owner, functionName);
        // tslint:disable-next-line:only-arrow-functions
        owner[functionName] = function () {
            const callback = arguments[0];
            const time = arguments[1];
            const args = Array.prototype.slice.call(arguments);
            if (TimeSpy.setTimerCommonValues.indexOf(time) > -1) {
                args[0] = self.getCallback(self, callback, needsReplay ?
                    () => { owner[functionName](callback); } : null);
            }
            const result = _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_1__.OriginFunctionHelper.executeOriginFunction(owner, functionName, args);
            return result;
        };
    }
    getCallback(self, callback, skippedCalback = null) {
        return function () {
            const now = _shared_utils_time__WEBPACK_IMPORTED_MODULE_0__.Time.now;
            self.lastFrame = ++self.lastFrame % self.speedRatio;
            if (self.willPlayNextFrame || (self.speedRatio && !self.lastFrame)) {
                self.onFrameStart.trigger(self);
                try {
                    callback.apply(self.spiedScope, arguments);
                }
                catch (e) {
                    self.onError.trigger(e);
                }
                self.lastSixtyFramesCurrentIndex = (self.lastSixtyFramesCurrentIndex + 1) % TimeSpy.fpsWindowSize;
                self.lastSixtyFramesDuration[self.lastSixtyFramesCurrentIndex] =
                    now - self.lastSixtyFramesPreviousStart;
                self.onFrameEnd.trigger(self);
                self.willPlayNextFrame = false;
            }
            else {
                if (skippedCalback) {
                    skippedCalback();
                }
            }
            self.lastSixtyFramesPreviousStart = now;
        };
    }
}
TimeSpy.requestAnimationFrameFunctions = ["requestAnimationFrame",
    "msRequestAnimationFrame",
    "webkitRequestAnimationFrame",
    "mozRequestAnimationFrame",
    "oRequestAnimationFrame",
];
TimeSpy.setTimerFunctions = ["setTimeout",
    "setInterval",
];
TimeSpy.setTimerCommonValues = [0, 15, 16, 33, 32, 40];
TimeSpy.fpsWindowSize = 60;


/***/ }),

/***/ "./src/backend/spies/webGlObjectSpy.ts":
/*!*********************************************!*\
  !*** ./src/backend/spies/webGlObjectSpy.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebGlObjectSpy": () => (/* binding */ WebGlObjectSpy)
/* harmony export */ });
/* harmony import */ var _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webGlObjects/webGlObjects */ "./src/backend/webGlObjects/webGlObjects.ts");

// tslint:disable:ban-types
// tslint:disable:only-arrow-functions
class WebGlObjectSpy {
    constructor(contextInformation) {
        this.contextInformation = contextInformation;
        this.webGlObjects = [];
        this.initWebglObjects();
    }
    tagWebGlObjects(functionInformation) {
        for (const webGlObject of this.webGlObjects) {
            for (let i = 0; i < functionInformation.arguments.length; i++) {
                const arg = functionInformation.arguments[i];
                if (webGlObject.tagWebGlObject(arg)) {
                    break;
                }
            }
            if (webGlObject.tagWebGlObject(functionInformation.result)) {
                break;
            }
        }
    }
    tagWebGlObject(object) {
        for (const webGlObject of this.webGlObjects) {
            const tag = webGlObject.tagWebGlObject(object);
            if (tag) {
                return tag;
            }
        }
        return undefined;
    }
    initWebglObjects() {
        this.webGlObjects.push(new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.Buffer(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.FrameBuffer(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.Program(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.Query(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.Renderbuffer(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.Sampler(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.Sync(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.Texture(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.TransformFeedback(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.UniformLocation(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.VertexArrayObject(), new _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_0__.Shader());
    }
}


/***/ }),

/***/ "./src/backend/spies/xrSpy.ts":
/*!************************************!*\
  !*** ./src/backend/spies/xrSpy.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XRSpy": () => (/* binding */ XRSpy)
/* harmony export */ });
/* harmony import */ var _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/originFunctionHelper */ "./src/backend/utils/originFunctionHelper.ts");
/* harmony import */ var _timeSpy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeSpy */ "./src/backend/spies/timeSpy.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// tslint:disable:max-classes-per-file
class XRSpy {
    constructor(timeSpy) {
        this.timeSpy = timeSpy;
        this.init();
    }
    spyXRSession(session) {
        if (this.currentXRSession) {
            this.unspyXRSession();
        }
        for (const Spy of _timeSpy__WEBPACK_IMPORTED_MODULE_1__.TimeSpy.getRequestAnimationFrameFunctionNames()) {
            _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_0__.OriginFunctionHelper.resetOriginFunction(this.timeSpy.getSpiedScope(), Spy);
        }
        this.timeSpy.spyRequestAnimationFrame("requestAnimationFrame", session);
        this.currentXRSession = session;
    }
    unspyXRSession() {
        if (!this.currentXRSession) {
            return;
        }
        _utils_originFunctionHelper__WEBPACK_IMPORTED_MODULE_0__.OriginFunctionHelper.resetOriginFunction(this.currentXRSession, "requestAnimationFrame");
        this.currentXRSession = undefined;
        // listen to the regular frames again.
        for (const Spy of _timeSpy__WEBPACK_IMPORTED_MODULE_1__.TimeSpy.getRequestAnimationFrameFunctionNames()) {
            this.timeSpy.spyRequestAnimationFrame(Spy, this.timeSpy.getSpiedScope());
        }
    }
    init() {
        if (!navigator.xr) {
            return;
        }
        // define XR Polyfills.
        // we do them here in xrSpy.init so that we don't try to initialize them *unless* we are using WebXR,
        // since not all browsers will support experimental WebXR APIs.
        class XRWebGLLayerSpector extends XRWebGLLayer {
            constructor(session, context, layerInit) {
                super(session, context, layerInit);
                this.glContext = context;
            }
            getContext() {
                return this.glContext;
            }
        }
        class XRWebGLBindingSpector extends XRWebGLBinding {
            constructor(session, context) {
                super(session, context);
                this.glContext = context;
            }
            createProjectionLayer(init) {
                const layer = super.createProjectionLayer(init);
                layer.glContext = this.glContext;
                return layer;
            }
        }
        window.XRWebGLLayer = XRWebGLLayerSpector;
        window.XRWebGLBinding = XRWebGLBindingSpector;
        // polyfill request session so Spector gets access to the session object.
        const existingRequestSession = navigator.xr.requestSession;
        Object.defineProperty(navigator.xr, "requestSessionInternal", { writable: true });
        navigator.xr.requestSessionInternal = existingRequestSession;
        const newRequestSession = (sessionMode, sessionInit) => {
            const modifiedSessionPromise = (mode, init) => {
                return navigator.xr.requestSessionInternal(mode, init).then((session) => {
                    // listen to the XR Session here! When we do that, we'll stop listening to window.requestAnimationFrame
                    // and start listening to session.requestAnimationFrame
                    // Feed the gl context through the session
                    const spectorSession = session;
                    spectorSession._updateRenderState = session.updateRenderState;
                    spectorSession.updateRenderState = (renderStateInit) => __awaiter(this, void 0, void 0, function* () {
                        if (renderStateInit.baseLayer) {
                            const polyfilledBaseLayer = renderStateInit.baseLayer;
                            spectorSession.glContext = polyfilledBaseLayer.getContext();
                        }
                        if (renderStateInit.layers) {
                            for (const layer of renderStateInit.layers) {
                                const layerAny = layer;
                                if (layerAny.glContext) {
                                    spectorSession.glContext = layerAny.glContext;
                                }
                            }
                        }
                        return spectorSession._updateRenderState(renderStateInit);
                    });
                    this.spyXRSession(spectorSession);
                    session.addEventListener("end", () => {
                        this.unspyXRSession();
                    });
                    return Promise.resolve(session);
                });
            };
            return modifiedSessionPromise(sessionMode, sessionInit);
        };
        Object.defineProperty(navigator.xr, "requestSession", { writable: true });
        navigator.xr.requestSession = newRequestSession;
    }
}


/***/ }),

/***/ "./src/backend/states/baseState.ts":
/*!*****************************************!*\
  !*** ./src/backend/states/baseState.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseState": () => (/* binding */ BaseState)
/* harmony export */ });
/* harmony import */ var _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webGlObjects/baseWebGlObject */ "./src/backend/webGlObjects/baseWebGlObject.ts");

class BaseState {
    constructor(options) {
        this.options = options;
        this.context = options.context;
        this.contextVersion = options.contextVersion;
        this.extensions = options.extensions;
        this.toggleCapture = options.toggleCapture;
        this.consumeCommands = this.getConsumeCommands();
        this.changeCommandsByState = this.getChangeCommandsByState();
        this.commandNameToStates = this.getCommandNameToStates();
    }
    get requireStartAndStopStates() {
        return true;
    }
    startCapture(loadFromContext, quickCapture, fullCapture) {
        this.quickCapture = quickCapture;
        this.fullCapture = fullCapture;
        this.capturedCommandsByState = {};
        if (loadFromContext && this.requireStartAndStopStates) {
            this.currentState = {};
            this.readFromContextNoSideEffects();
        }
        this.copyCurrentStateToPrevious();
        this.currentState = {};
        return this.previousState;
    }
    stopCapture() {
        if (this.requireStartAndStopStates) {
            this.readFromContextNoSideEffects();
        }
        this.analyse(undefined);
        return this.currentState;
    }
    registerCallbacks(callbacks) {
        for (const stateName in this.changeCommandsByState) {
            if (this.changeCommandsByState.hasOwnProperty(stateName)) {
                for (const changeCommand of this.changeCommandsByState[stateName]) {
                    callbacks[changeCommand] = callbacks[changeCommand] || [];
                    callbacks[changeCommand].push(this.onChangeCommand.bind(this));
                }
            }
        }
        for (const commandName of this.consumeCommands) {
            callbacks[commandName] = callbacks[commandName] || [];
            callbacks[commandName].push(this.onConsumeCommand.bind(this));
        }
    }
    getStateData() {
        return this.currentState;
    }
    getConsumeCommands() {
        return [];
    }
    getChangeCommandsByState() {
        return {};
    }
    copyCurrentStateToPrevious() {
        if (!this.currentState) {
            return;
        }
        this.previousState = this.currentState;
    }
    onChangeCommand(command) {
        const stateNames = this.commandNameToStates[command.name];
        for (const stateName of stateNames) {
            if (!this.isValidChangeCommand(command, stateName)) {
                return;
            }
            this.capturedCommandsByState[stateName] = this.capturedCommandsByState[stateName] || [];
            this.capturedCommandsByState[stateName].push(command);
        }
    }
    isValidChangeCommand(command, stateName) {
        return true;
    }
    onConsumeCommand(command) {
        if (!this.isValidConsumeCommand(command)) {
            return;
        }
        this.readFromContextNoSideEffects();
        this.analyse(command);
        this.storeCommandIds();
        command[this.stateName] = this.currentState;
        this.startCapture(false, this.quickCapture, this.fullCapture);
    }
    isValidConsumeCommand(command) {
        this.lastCommandName = command === null || command === void 0 ? void 0 : command.name;
        return true;
    }
    analyse(consumeCommand) {
        for (const stateName in this.capturedCommandsByState) {
            if (this.capturedCommandsByState.hasOwnProperty(stateName)) {
                const commands = this.capturedCommandsByState[stateName];
                const lengthM1 = commands.length - 1;
                if (lengthM1 >= 0) {
                    if (consumeCommand) {
                        for (let i = 0; i < lengthM1; i++) {
                            const redundantCommand = commands[i];
                            redundantCommand.consumeCommandId = consumeCommand.id;
                            this.changeCommandCaptureStatus(redundantCommand, 30 /* CommandCaptureStatus.Redundant */);
                        }
                        const isStateEnabled = this.isStateEnableNoSideEffects(stateName, consumeCommand.commandArguments);
                        const command = commands[lengthM1];
                        command.consumeCommandId = consumeCommand.id;
                        if (!this.areStatesEquals(this.currentState[stateName], this.previousState[stateName])) {
                            if (isStateEnabled) {
                                this.changeCommandCaptureStatus(command, 40 /* CommandCaptureStatus.Valid */);
                            }
                            else {
                                this.changeCommandCaptureStatus(command, 20 /* CommandCaptureStatus.Disabled */);
                            }
                        }
                        else {
                            this.changeCommandCaptureStatus(command, 30 /* CommandCaptureStatus.Redundant */);
                        }
                    }
                    else {
                        for (let i = 0; i < commands.length; i++) {
                            const command = commands[i];
                            this.changeCommandCaptureStatus(command, 10 /* CommandCaptureStatus.Unused */);
                        }
                    }
                }
            }
        }
    }
    storeCommandIds() {
        const commandIdsStates = ["unusedCommandIds", "disabledCommandIds", "redundantCommandIds", "validCommandIds"];
        for (const commandIdsStatus of commandIdsStates) {
            this.currentState[commandIdsStatus] = [];
        }
        for (const stateName in this.capturedCommandsByState) {
            if (this.capturedCommandsByState.hasOwnProperty(stateName)) {
                const commands = this.capturedCommandsByState[stateName];
                for (const command of commands) {
                    switch (command.status) {
                        case 10 /* CommandCaptureStatus.Unused */:
                            this.currentState["unusedCommandIds"].push(command.id);
                            break;
                        case 20 /* CommandCaptureStatus.Disabled */:
                            this.currentState["disabledCommandIds"].push(command.id);
                            break;
                        case 30 /* CommandCaptureStatus.Redundant */:
                            this.currentState["redundantCommandIds"].push(command.id);
                            break;
                        case 40 /* CommandCaptureStatus.Valid */:
                            this.currentState["validCommandIds"].push(command.id);
                            break;
                    }
                }
            }
        }
        for (const commandIdsStatus of commandIdsStates) {
            if (!this.currentState[commandIdsStatus].length) {
                delete this.currentState[commandIdsStatus];
            }
        }
    }
    changeCommandCaptureStatus(capture, status) {
        if (capture.status < status) {
            capture.status = status;
            return true;
        }
        return false;
    }
    areStatesEquals(a, b) {
        if (typeof a !== typeof b) {
            return false;
        }
        if (a && !b) {
            return false;
        }
        if (b && !a) {
            return false;
        }
        if (a === undefined || a === null) {
            return true;
        }
        if (a.length && b.length && typeof a !== "string") {
            if (a.length !== b.length) {
                return false;
            }
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        }
        return a === b;
    }
    isStateEnable(stateName, args) {
        return true;
    }
    getSpectorData(object) {
        if (!object) {
            return undefined;
        }
        return {
            __SPECTOR_Object_TAG: _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.WebGlObjects.getWebGlObjectTag(object) || this.options.tagWebGlObject(object),
            __SPECTOR_Object_CustomData: object.__SPECTOR_Object_CustomData,
            __SPECTOR_Metadata: object.__SPECTOR_Metadata,
        };
    }
    readFromContextNoSideEffects() {
        this.toggleCapture(false);
        this.readFromContext();
        this.toggleCapture(true);
    }
    isStateEnableNoSideEffects(stateName, args) {
        this.toggleCapture(false);
        const enable = this.isStateEnable(stateName, args);
        this.toggleCapture(true);
        return enable;
    }
    getCommandNameToStates() {
        const result = {};
        for (const stateName in this.changeCommandsByState) {
            if (this.changeCommandsByState.hasOwnProperty(stateName)) {
                for (const changeCommand of this.changeCommandsByState[stateName]) {
                    result[changeCommand] = result[changeCommand] || [];
                    result[changeCommand].push(stateName);
                }
            }
        }
        return result;
    }
}


/***/ }),

/***/ "./src/backend/states/context/alignmentState.ts":
/*!******************************************************!*\
  !*** ./src/backend/states/context/alignmentState.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentState": () => (/* binding */ AlignmentState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");


// tslint:disable:max-line-length
class AlignmentState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return AlignmentState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.PACK_ALIGNMENT, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNPACK_ALIGNMENT, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNPACK_COLORSPACE_CONVERSION_WEBGL, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNPACK_FLIP_Y_WEBGL, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNPACK_PREMULTIPLY_ALPHA_WEBGL, changeCommands: ["pixelStorei"] }];
    }
    getWebgl2Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.PACK_ROW_LENGTH, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.PACK_SKIP_PIXELS, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.PACK_SKIP_ROWS, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNPACK_IMAGE_HEIGHT, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNPACK_SKIP_PIXELS, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNPACK_SKIP_ROWS, changeCommands: ["pixelStorei"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNPACK_SKIP_IMAGES, changeCommands: ["pixelStorei"] }];
    }
    getConsumeCommands() {
        return ["readPixels", "texImage2D", "texSubImage2D"];
    }
    isValidChangeCommand(command, stateName) {
        return _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByName[stateName].value === command.commandArguments[0];
    }
}
AlignmentState.stateName = "AlignmentState";


/***/ }),

/***/ "./src/backend/states/context/blendState.ts":
/*!**************************************************!*\
  !*** ./src/backend/states/context/blendState.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlendState": () => (/* binding */ BlendState)
/* harmony export */ });
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



// tslint:disable:max-line-length
class BlendState extends _parameterState__WEBPACK_IMPORTED_MODULE_1__.ParameterState {
    get stateName() {
        return BlendState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND_COLOR, changeCommands: ["blendColor"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND_DST_ALPHA, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["blendFunc", "blendFuncSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND_DST_RGB, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["blendFunc", "blendFuncSeparate"] },
            // { constant: WebGlConstants.BLEND_EQUATION, returnType: ParameterReturnType.GlEnum, changeCommands: ["blendEquation", "blendEquationSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND_EQUATION_ALPHA, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["blendEquation", "blendEquationSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND_EQUATION_RGB, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["blendEquation", "blendEquationSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND_SRC_ALPHA, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["blendFunc", "blendFuncSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND_SRC_RGB, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["blendFunc", "blendFuncSeparate"] }];
    }
    isValidChangeCommand(command, stateName) {
        if (command.name === "enable" || command.name === "disable") {
            return command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND.value;
        }
        return true;
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands;
    }
    isStateEnable(stateName, args) {
        return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BLEND.value);
    }
}
BlendState.stateName = "BlendState";


/***/ }),

/***/ "./src/backend/states/context/clearState.ts":
/*!**************************************************!*\
  !*** ./src/backend/states/context/clearState.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClearState": () => (/* binding */ ClearState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class ClearState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return ClearState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_CLEAR_VALUE, changeCommands: ["clearColor"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_CLEAR_VALUE, changeCommands: ["clearDepth"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_CLEAR_VALUE, changeCommands: ["clearStencil"] }];
    }
    getConsumeCommands() {
        return ["clear"];
    }
    isStateEnable(stateName, args) {
        switch (stateName) {
            case _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_CLEAR_VALUE.name:
                return _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_BUFFER_BIT.value === (args[0] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_BUFFER_BIT.value);
            case _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_CLEAR_VALUE.name:
                return _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BUFFER_BIT.value === (args[0] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BUFFER_BIT.value);
            case _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_CLEAR_VALUE.name:
                return _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BUFFER_BIT.value ===
                    (args[0] & _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BUFFER_BIT.value);
        }
        return false;
    }
}
ClearState.stateName = "ClearState";


/***/ }),

/***/ "./src/backend/states/context/colorState.ts":
/*!**************************************************!*\
  !*** ./src/backend/states/context/colorState.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorState": () => (/* binding */ ColorState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



class ColorState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return ColorState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_WRITEMASK, changeCommands: ["colorMask"] }];
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands;
    }
}
ColorState.stateName = "ColorState";


/***/ }),

/***/ "./src/backend/states/context/coverageState.ts":
/*!*****************************************************!*\
  !*** ./src/backend/states/context/coverageState.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverageState": () => (/* binding */ CoverageState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



class CoverageState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return CoverageState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_COVERAGE_VALUE, changeCommands: ["sampleCoverage"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_COVERAGE_INVERT, changeCommands: ["sampleCoverage"] }];
    }
    getWebgl2Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_COVERAGE, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_ALPHA_TO_COVERAGE, changeCommands: ["enable", "disable"] }];
    }
    isValidChangeCommand(command, stateName) {
        if (command.name === "enable" || command.name === "disable") {
            if (command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_COVERAGE.value) {
                return stateName === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_COVERAGE.name;
            }
            if (command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_ALPHA_TO_COVERAGE.value) {
                return stateName === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_ALPHA_TO_COVERAGE.name;
            }
            return false;
        }
        return true;
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands;
    }
    isStateEnable(stateName, args) {
        if (this.contextVersion === 2) {
            return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_COVERAGE.value);
        }
        return false;
    }
}
CoverageState.stateName = "CoverageState";


/***/ }),

/***/ "./src/backend/states/context/cullState.ts":
/*!*************************************************!*\
  !*** ./src/backend/states/context/cullState.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CullState": () => (/* binding */ CullState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



// tslint:disable:max-line-length
class CullState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return CullState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.CULL_FACE, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.CULL_FACE_MODE, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["cullFace"] }];
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands;
    }
    isValidChangeCommand(command, stateName) {
        if (command.name === "enable" || command.name === "disable") {
            return command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.CULL_FACE.value;
        }
        return true;
    }
    isStateEnable(stateName, args) {
        return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.CULL_FACE.value);
    }
}
CullState.stateName = "CullState";


/***/ }),

/***/ "./src/backend/states/context/depthState.ts":
/*!**************************************************!*\
  !*** ./src/backend/states/context/depthState.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepthState": () => (/* binding */ DepthState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



// tslint:disable:max-line-length
class DepthState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return DepthState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_TEST, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_FUNC, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["depthFunc"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_RANGE, changeCommands: ["depthRange"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_WRITEMASK, changeCommands: ["depthMask"] }];
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands;
    }
    isValidChangeCommand(command, stateName) {
        if (command.name === "enable" || command.name === "disable") {
            return command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_TEST.value;
        }
        return true;
    }
    isStateEnable(stateName, args) {
        return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_TEST.value);
    }
}
DepthState.stateName = "DepthState";


/***/ }),

/***/ "./src/backend/states/context/drawState.ts":
/*!*************************************************!*\
  !*** ./src/backend/states/context/drawState.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawState": () => (/* binding */ DrawState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



// tslint:disable:max-line-length
class DrawState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return DrawState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DITHER, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VIEWPORT, changeCommands: ["viewPort"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRONT_FACE, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["frontFace"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAGMENT_SHADER_DERIVATIVE_HINT_OES, changeCommands: ["hint"] }];
    }
    getWebgl2Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RASTERIZER_DISCARD, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAGMENT_SHADER_DERIVATIVE_HINT, changeCommands: ["hint"] }];
    }
    isValidChangeCommand(command, stateName) {
        if (command.name === "enable" || command.name === "disable") {
            if (command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DITHER.value) {
                return stateName === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DITHER.name;
            }
            if (command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RASTERIZER_DISCARD.value) {
                return stateName === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RASTERIZER_DISCARD.name;
            }
            return false;
        }
        if (command.name === "hint") {
            if (command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAGMENT_SHADER_DERIVATIVE_HINT_OES.value) {
                return stateName === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAGMENT_SHADER_DERIVATIVE_HINT_OES.name;
            }
            if (command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAGMENT_SHADER_DERIVATIVE_HINT.value) {
                return stateName === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAGMENT_SHADER_DERIVATIVE_HINT.name;
            }
            return false;
        }
        return true;
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands;
    }
    isStateEnable(stateName, args) {
        switch (stateName) {
            case _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DITHER.name:
                return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DITHER.value);
            case _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RASTERIZER_DISCARD.name:
                return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RASTERIZER_DISCARD.value);
        }
        return true;
    }
}
DrawState.stateName = "DrawState";


/***/ }),

/***/ "./src/backend/states/context/mipmapHintState.ts":
/*!*******************************************************!*\
  !*** ./src/backend/states/context/mipmapHintState.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MipmapHintState": () => (/* binding */ MipmapHintState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class MipmapHintState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return MipmapHintState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.GENERATE_MIPMAP_HINT, changeCommands: ["hint"] }];
    }
    getConsumeCommands() {
        return ["generateMipmap"];
    }
}
MipmapHintState.stateName = "MipmapHintState";


/***/ }),

/***/ "./src/backend/states/context/polygonOffsetState.ts":
/*!**********************************************************!*\
  !*** ./src/backend/states/context/polygonOffsetState.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolygonOffsetState": () => (/* binding */ PolygonOffsetState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



class PolygonOffsetState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return PolygonOffsetState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.POLYGON_OFFSET_FILL, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.POLYGON_OFFSET_FACTOR, changeCommands: ["polygonOffset"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.POLYGON_OFFSET_UNITS, changeCommands: ["polygonOffset"] }];
    }
    isValidChangeCommand(command, stateName) {
        if (command.name === "enable" || command.name === "disable") {
            return command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.POLYGON_OFFSET_FILL.value;
        }
        return true;
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands;
    }
    isStateEnable(stateName, args) {
        return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.POLYGON_OFFSET_FILL.value);
    }
}
PolygonOffsetState.stateName = "PolygonOffsetState";


/***/ }),

/***/ "./src/backend/states/context/scissorState.ts":
/*!****************************************************!*\
  !*** ./src/backend/states/context/scissorState.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScissorState": () => (/* binding */ ScissorState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



class ScissorState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return ScissorState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SCISSOR_TEST, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SCISSOR_BOX, changeCommands: ["scissor"] }];
    }
    isValidChangeCommand(command, stateName) {
        if (command.name === "enable" || command.name === "disable") {
            return command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SCISSOR_TEST.value;
        }
        return true;
    }
    getConsumeCommands() {
        return [..._utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands, "clear"];
    }
    isStateEnable(stateName, args) {
        return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SCISSOR_TEST.value);
    }
}
ScissorState.stateName = "ScissorState";


/***/ }),

/***/ "./src/backend/states/context/stencilState.ts":
/*!****************************************************!*\
  !*** ./src/backend/states/context/stencilState.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StencilState": () => (/* binding */ StencilState)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");



class StencilState extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return StencilState.stateName;
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_TEST, changeCommands: ["enable", "disable"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_FAIL, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["stencilOp", "stencilOpSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_FUNC, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["stencilFunc", "stencilFuncSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_PASS_DEPTH_FAIL, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["stencilOp", "stencilOpSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_PASS_DEPTH_PASS, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["stencilOp", "stencilOpSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_REF, changeCommands: ["stencilFunc", "stencilFuncSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_VALUE_MASK, returnType: 30 /* ParameterReturnType.GlUint */, changeCommands: ["stencilFunc", "stencilFuncSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_WRITEMASK, returnType: 30 /* ParameterReturnType.GlUint */, changeCommands: ["stencilMask", "stencilMaskSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_FAIL, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["stencilOp", "stencilOpSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_FUNC, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["stencilFunc", "stencilFuncSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_PASS_DEPTH_FAIL, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["stencilOp", "stencilOpSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_PASS_DEPTH_PASS, returnType: 20 /* ParameterReturnType.GlEnum */, changeCommands: ["stencilOp", "stencilOpSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_REF, changeCommands: ["stencilFunc", "stencilFuncSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_VALUE_MASK, returnType: 30 /* ParameterReturnType.GlUint */, changeCommands: ["stencilFunc", "stencilFuncSeparate"] },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_WRITEMASK, returnType: 30 /* ParameterReturnType.GlUint */, changeCommands: ["stencilMask", "stencilMaskSeparate"] }];
    }
    readFromContext() {
        super.readFromContext();
        const gl = this.context;
        const target = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value;
        const attachment = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_ATTACHMENT.value;
        const frameBuffer = gl.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_BINDING.value);
        let value = 0;
        if (!frameBuffer) {
            value = this.readParameterFromContext({ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BITS });
        }
        else {
            const type = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE.value);
            if (type !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.NONE.value) {
                if (this.contextVersion > 1) {
                    value = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE.value);
                }
                else {
                    const storage = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME.value);
                    if (storage === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RENDERBUFFER.value) {
                        value = gl.getRenderbufferParameter(gl.RENDERBUFFER, gl.RENDERBUFFER_STENCIL_SIZE);
                    }
                }
            }
        }
        this.currentState[_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BITS.name] = "" + value;
    }
    isValidChangeCommand(command, stateName) {
        if (command.name === "enable" || command.name === "disable") {
            return command.commandArguments[0] === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_TEST.value;
        }
        if (command.name === "stencilOp" || command.name === "stencilOpSeparate") {
            return StencilState.stencilOpStates.indexOf(command.commandArguments[0]) > 0;
        }
        if (command.name === "stencilFunc" || command.name === "stencilFuncSeparate") {
            return StencilState.stencilFuncStates.indexOf(command.commandArguments[0]) > 0;
        }
        if (command.name === "stencilMask" || command.name === "stencilMaskSeparate") {
            return StencilState.stencilMaskStates.indexOf(command.commandArguments[0]) > 0;
        }
        return true;
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_2__.drawCommands;
    }
    isStateEnable(stateName, args) {
        return this.context.isEnabled(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_TEST.value);
    }
}
StencilState.stateName = "StencilState";
StencilState.stencilOpStates = [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_FAIL.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_PASS_DEPTH_FAIL.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_PASS_DEPTH_PASS.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_FAIL.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_PASS_DEPTH_FAIL.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_PASS_DEPTH_PASS.value];
StencilState.stencilFuncStates = [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_FUNC.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_REF.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_VALUE_MASK.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_FUNC.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_REF.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_VALUE_MASK.value];
StencilState.stencilMaskStates = [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BACK_WRITEMASK.value,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_WRITEMASK.value];


/***/ }),

/***/ "./src/backend/states/context/visualState.ts":
/*!***************************************************!*\
  !*** ./src/backend/states/context/visualState.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualState": () => (/* binding */ VisualState)
/* harmony export */ });
/* harmony import */ var _baseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseState */ "./src/backend/states/baseState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_readPixelsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/readPixelsHelper */ "./src/backend/utils/readPixelsHelper.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");
/* harmony import */ var _shared_utils_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/logger */ "./src/shared/utils/logger.ts");





class VisualState extends _baseState__WEBPACK_IMPORTED_MODULE_0__.BaseState {
    constructor(options) {
        super(options);
        this.captureFrameBuffer = options.context.createFramebuffer();
        this.workingCanvas = document.createElement("canvas");
        this.workingContext2D = this.workingCanvas.getContext("2d");
        this.captureCanvas = document.createElement("canvas");
        this.captureContext2D = this.captureCanvas.getContext("2d");
        this.captureContext2D.imageSmoothingEnabled = true;
        this.captureContext2D.mozImageSmoothingEnabled = true;
        this.captureContext2D.oImageSmoothingEnabled = true;
        this.captureContext2D.webkitImageSmoothingEnabled = true;
        this.captureContext2D.msImageSmoothingEnabled = true;
    }
    get stateName() {
        return VisualState.stateName;
    }
    getConsumeCommands() {
        return ["clear", "clearBufferfv", "clearBufferiv", "clearBufferuiv", "clearBufferfi", ..._utils_drawCommands__WEBPACK_IMPORTED_MODULE_3__.drawCommands];
    }
    readFromContext() {
        const gl = this.context;
        this.currentState["Attachments"] = [];
        // Check the framebuffer status.
        const frameBuffer = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_BINDING.value);
        if (!frameBuffer) {
            this.currentState["FrameBuffer"] = null;
            // In case of the main canvas, we draw the entire screen instead of the viewport only.
            // This will help for instance in VR use cases.
            this.getCapture(gl, "Canvas COLOR_ATTACHMENT", 0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, 0, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNSIGNED_BYTE.value);
            return;
        }
        // Get FrameBuffer Viewport size to adapt the created screenshot.
        const viewport = gl.getParameter(gl.VIEWPORT);
        const x = viewport[0];
        const y = viewport[1];
        const width = viewport[2];
        const height = viewport[3];
        this.currentState["FrameBuffer"] = this.getSpectorData(frameBuffer);
        // Check FBO status.
        const status = this.context.checkFramebufferStatus(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value);
        this.currentState["FrameBufferStatus"] = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByValue[status].name;
        if (status !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_COMPLETE.value) {
            return;
        }
        // Capture all the attachments.
        const drawBuffersExtension = this.extensions[_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_DRAW_BUFFERS_WEBGL.extensionName];
        if (drawBuffersExtension) {
            const maxDrawBuffers = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_DRAW_BUFFERS_WEBGL.value);
            for (let i = 0; i < maxDrawBuffers; i++) {
                this.readFrameBufferAttachmentFromContext(this.context, frameBuffer, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByName["COLOR_ATTACHMENT" + i + "_WEBGL"], x, y, width, height);
            }
        }
        else if (this.contextVersion > 1) {
            const context2 = this.context;
            const maxDrawBuffers = context2.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_DRAW_BUFFERS.value);
            for (let i = 0; i < maxDrawBuffers; i++) {
                this.readFrameBufferAttachmentFromContext(this.context, frameBuffer, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByName["COLOR_ATTACHMENT" + i], x, y, width, height);
            }
        }
        else {
            this.readFrameBufferAttachmentFromContext(this.context, frameBuffer, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByName.COLOR_ATTACHMENT0, x, y, width, height);
        }
    }
    readFrameBufferAttachmentFromContext(gl, frameBuffer, webglConstant, x, y, width, height) {
        const target = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value;
        const type = this.context.getFramebufferAttachmentParameter(target, webglConstant.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE.value);
        if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.NONE.value) {
            return;
        }
        const storage = this.context.getFramebufferAttachmentParameter(target, webglConstant.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME.value);
        if (!storage) {
            return;
        }
        const componentType = this.contextVersion > 1 ?
            this.context.getFramebufferAttachmentParameter(target, webglConstant.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE.value) :
            _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNSIGNED_BYTE.value;
        if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RENDERBUFFER.value) {
            this.readFrameBufferAttachmentFromRenderBuffer(gl, frameBuffer, webglConstant, x, y, width, height, target, componentType, storage);
        }
        else if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE.value) {
            this.readFrameBufferAttachmentFromTexture(gl, frameBuffer, webglConstant, x, y, width, height, target, componentType, storage);
        }
    }
    readFrameBufferAttachmentFromRenderBuffer(gl, frameBuffer, webglConstant, x, y, width, height, target, componentType, storage) {
        let samples = 0;
        let internalFormat = 0;
        if (storage.__SPECTOR_Object_CustomData) {
            const info = storage.__SPECTOR_Object_CustomData;
            width = info.width;
            height = info.height;
            samples = info.samples;
            internalFormat = info.internalFormat;
            if (!samples && !_utils_readPixelsHelper__WEBPACK_IMPORTED_MODULE_2__.ReadPixelsHelper.isSupportedCombination(componentType, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RGBA.value, internalFormat)) {
                return;
            }
        }
        else {
            width += x;
            height += y;
        }
        x = y = 0;
        if (samples) {
            const gl2 = gl; // Samples only available in WebGL 2.
            const renderBuffer = gl.createRenderbuffer();
            const boundRenderBuffer = gl.getParameter(gl.RENDERBUFFER_BINDING);
            gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, internalFormat, width, height);
            gl.bindRenderbuffer(gl.RENDERBUFFER, boundRenderBuffer);
            gl.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, this.captureFrameBuffer);
            gl.framebufferRenderbuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_ATTACHMENT0.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RENDERBUFFER.value, renderBuffer);
            const readFrameBuffer = gl2.getParameter(gl2.READ_FRAMEBUFFER_BINDING);
            const drawFrameBuffer = gl2.getParameter(gl2.DRAW_FRAMEBUFFER_BINDING);
            gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, frameBuffer);
            gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, this.captureFrameBuffer);
            gl2.blitFramebuffer(0, 0, width, height, 0, 0, width, height, gl.COLOR_BUFFER_BIT, gl.NEAREST);
            gl2.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, this.captureFrameBuffer);
            gl2.bindFramebuffer(gl2.READ_FRAMEBUFFER, readFrameBuffer);
            gl2.bindFramebuffer(gl2.DRAW_FRAMEBUFFER, drawFrameBuffer);
            const status = this.context.checkFramebufferStatus(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value);
            if (status === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_COMPLETE.value) {
                this.getCapture(gl, webglConstant.name, x, y, width, height, 0, 0, componentType);
            }
            gl.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, frameBuffer);
            gl.deleteRenderbuffer(renderBuffer);
        }
        else {
            gl.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, this.captureFrameBuffer);
            gl.framebufferRenderbuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_ATTACHMENT0.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RENDERBUFFER.value, storage);
            const status = this.context.checkFramebufferStatus(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value);
            if (status === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_COMPLETE.value) {
                this.getCapture(gl, webglConstant.name, x, y, width, height, 0, 0, componentType);
            }
            gl.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, frameBuffer);
        }
    }
    readFrameBufferAttachmentFromTexture(gl, frameBuffer, webglConstant, x, y, width, height, target, componentType, storage) {
        let textureLayer = 0;
        if (this.contextVersion > 1) {
            textureLayer = this.context.getFramebufferAttachmentParameter(target, webglConstant.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER.value);
        }
        const textureLevel = this.context.getFramebufferAttachmentParameter(target, webglConstant.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL.value);
        const textureCubeMapFace = this.context.getFramebufferAttachmentParameter(target, webglConstant.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE.value);
        const textureCubeMapFaceName = textureCubeMapFace > 0 ? _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByValue[textureCubeMapFace].name : _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D.name;
        // Adapt to constraints defines in the custom data if any.
        let knownAsTextureArray = false;
        let textureType = componentType;
        if (storage.__SPECTOR_Object_CustomData) {
            const info = storage.__SPECTOR_Object_CustomData;
            width = info.width;
            height = info.height;
            textureType = info.type;
            knownAsTextureArray = info.target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY.name;
            if (!_utils_readPixelsHelper__WEBPACK_IMPORTED_MODULE_2__.ReadPixelsHelper.isSupportedCombination(info.type, info.format, info.internalFormat)) {
                return;
            }
        }
        else {
            width += x;
            height += y;
        }
        x = y = 0;
        gl.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, this.captureFrameBuffer);
        if (textureLayer > 0 || knownAsTextureArray) {
            gl.framebufferTextureLayer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_ATTACHMENT0.value, storage, textureLevel, textureLayer);
        }
        else {
            gl.framebufferTexture2D(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COLOR_ATTACHMENT0.value, textureCubeMapFace ? textureCubeMapFace : _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D.value, storage, textureLevel);
        }
        const status = this.context.checkFramebufferStatus(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value);
        if (status === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_COMPLETE.value) {
            this.getCapture(gl, webglConstant.name, x, y, width, height, textureCubeMapFace, textureLayer, textureType);
        }
        gl.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value, frameBuffer);
    }
    getCapture(gl, name, x, y, width, height, textureCubeMapFace, textureLayer, type) {
        const attachmentVisualState = {
            attachmentName: name,
            src: null,
            textureCubeMapFace: textureCubeMapFace ? _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByValue[textureCubeMapFace].name : null,
            textureLayer,
        };
        if (!this.quickCapture) {
            try {
                // Read the pixels from the context.
                const pixels = _utils_readPixelsHelper__WEBPACK_IMPORTED_MODULE_2__.ReadPixelsHelper.readPixels(gl, x, y, width, height, type);
                if (pixels) {
                    // Copy the pixels to a working 2D canvas same size.
                    this.workingCanvas.width = width;
                    this.workingCanvas.height = height;
                    const imageData = this.workingContext2D.createImageData(Math.ceil(width), Math.ceil(height));
                    imageData.data.set(pixels);
                    this.workingContext2D.putImageData(imageData, 0, 0);
                    // Copy the pixels to a resized capture 2D canvas.
                    if (!this.fullCapture) {
                        const imageAspectRatio = width / height;
                        if (imageAspectRatio < 1) {
                            this.captureCanvas.width =
                                VisualState.captureBaseSize * imageAspectRatio;
                            this.captureCanvas.height =
                                VisualState.captureBaseSize;
                        }
                        else if (imageAspectRatio > 1) {
                            this.captureCanvas.width =
                                VisualState.captureBaseSize;
                            this.captureCanvas.height =
                                VisualState.captureBaseSize / imageAspectRatio;
                        }
                        else {
                            this.captureCanvas.width =
                                VisualState.captureBaseSize;
                            this.captureCanvas.height =
                                VisualState.captureBaseSize;
                        }
                    }
                    else {
                        this.captureCanvas.width = this.workingCanvas.width;
                        this.captureCanvas.height = this.workingCanvas.height;
                    }
                    this.captureCanvas.width = Math.max(this.captureCanvas.width, 1);
                    this.captureCanvas.height = Math.max(this.captureCanvas.height, 1);
                    // Scale and draw to flip Y to reorient readPixels.
                    this.captureContext2D.globalCompositeOperation = "copy";
                    this.captureContext2D.scale(1, -1); // Y flip
                    this.captureContext2D.translate(0, -this.captureCanvas.height); // so we can draw at 0,0
                    this.captureContext2D.drawImage(this.workingCanvas, 0, 0, width, height, 0, 0, this.captureCanvas.width, this.captureCanvas.height);
                    this.captureContext2D.setTransform(1, 0, 0, 1, 0, 0);
                    this.captureContext2D.globalCompositeOperation = "source-over";
                    // get the screen capture
                    attachmentVisualState.src = this.captureCanvas.toDataURL();
                }
            }
            catch (e) {
                // Do nothing in case of error at this level.
                _shared_utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.warn("Spector can not capture the visual state: " + e);
            }
        }
        this.currentState["Attachments"].push(attachmentVisualState);
    }
    analyse(consumeCommand) {
        // Nothing to analyse on visual state.
    }
}
VisualState.stateName = "VisualState";
VisualState.captureBaseSize = 256;


/***/ }),

/***/ "./src/backend/states/drawCalls/drawCallState.ts":
/*!*******************************************************!*\
  !*** ./src/backend/states/drawCalls/drawCallState.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawCallState": () => (/* binding */ DrawCallState)
/* harmony export */ });
/* harmony import */ var _baseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseState */ "./src/backend/states/baseState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _drawCallTextureInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawCallTextureInputState */ "./src/backend/states/drawCalls/drawCallTextureInputState.ts");
/* harmony import */ var _drawCallUboInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawCallUboInputState */ "./src/backend/states/drawCalls/drawCallUboInputState.ts");
/* harmony import */ var _utils_programRecompilerHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/programRecompilerHelper */ "./src/backend/utils/programRecompilerHelper.ts");
/* harmony import */ var _utils_drawCommands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/drawCommands */ "./src/backend/utils/drawCommands.ts");
/* harmony import */ var _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webGlObjects/webGlObjects */ "./src/backend/webGlObjects/webGlObjects.ts");
/* harmony import */ var _utils_readProgramHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/readProgramHelper */ "./src/backend/utils/readProgramHelper.ts");








class DrawCallState extends _baseState__WEBPACK_IMPORTED_MODULE_0__.BaseState {
    constructor(options) {
        super(options);
        this.drawCallTextureInputState = new _drawCallTextureInputState__WEBPACK_IMPORTED_MODULE_2__.DrawCallTextureInputState(options);
        this.drawCallUboInputState = new _drawCallUboInputState__WEBPACK_IMPORTED_MODULE_3__.DrawCallUboInputState(options);
    }
    get stateName() {
        return DrawCallState.stateName;
    }
    get requireStartAndStopStates() {
        return false;
    }
    getConsumeCommands() {
        return _utils_drawCommands__WEBPACK_IMPORTED_MODULE_5__.drawCommands;
    }
    getChangeCommandsByState() {
        return {};
    }
    readFromContext() {
        var _a, _b;
        const program = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.CURRENT_PROGRAM.value);
        if (!program) {
            return;
        }
        this.currentState.frameBuffer = this.readFrameBufferFromContext();
        const programCapture = program.__SPECTOR_Object_CustomData ?
            program.__SPECTOR_Object_CustomData :
            _utils_readProgramHelper__WEBPACK_IMPORTED_MODULE_7__.ReadProgramHelper.getProgramData(this.context, program);
        this.currentState.programStatus = Object.assign({}, programCapture.programStatus);
        this.currentState.programStatus.program = this.getSpectorData(program);
        this.currentState.programStatus.RECOMPILABLE = _utils_programRecompilerHelper__WEBPACK_IMPORTED_MODULE_4__.ProgramRecompilerHelper.isBuildableProgram(program);
        if (this.currentState.programStatus.RECOMPILABLE) {
            _webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_6__.Program.saveInGlobalStore(program);
        }
        this.currentState.shaders = programCapture.shaders;
        if (((_a = this.lastCommandName) === null || _a === void 0 ? void 0 : _a.indexOf("Elements")) >= 0) {
            const elementArrayBuffer = this.context.getParameter(this.context.ELEMENT_ARRAY_BUFFER_BINDING);
            if (elementArrayBuffer) {
                this.currentState.elementArray = {};
                this.currentState.elementArray.arrayBuffer = this.getSpectorData(elementArrayBuffer);
            }
        }
        const attributes = this.context.getProgramParameter(program, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ACTIVE_ATTRIBUTES.value);
        this.currentState.attributes = [];
        for (let i = 0; i < attributes; i++) {
            const attributeState = this.readAttributeFromContext(program, i);
            this.currentState.attributes.push(attributeState);
        }
        const uniforms = this.context.getProgramParameter(program, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ACTIVE_UNIFORMS.value);
        this.currentState.uniforms = [];
        const uniformIndices = [];
        for (let i = 0; i < uniforms; i++) {
            uniformIndices.push(i);
            const uniformState = this.readUniformFromContext(program, i);
            this.currentState.uniforms.push(uniformState);
        }
        if (this.contextVersion > 1) {
            const uniformBlocks = this.context.getProgramParameter(program, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ACTIVE_UNIFORM_BLOCKS.value);
            this.currentState.uniformBlocks = [];
            for (let i = 0; i < uniformBlocks; i++) {
                const uniformBlockState = this.readUniformBlockFromContext(program, i);
                this.currentState.uniformBlocks.push(uniformBlockState);
            }
            this.readUniformsFromContextIntoState(program, uniformIndices, this.currentState.uniforms, this.currentState.uniformBlocks);
            const transformFeedbackActive = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRANSFORM_FEEDBACK_ACTIVE.value);
            if (transformFeedbackActive) {
                const transformFeedbackModeValue = this.context.getProgramParameter(program, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_MODE.value);
                this.currentState.transformFeedbackMode = this.getWebGlConstant(transformFeedbackModeValue);
                this.currentState.transformFeedbacks = [];
                const transformFeedbacks = this.context.getProgramParameter(program, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRANSFORM_FEEDBACK_VARYINGS.value);
                for (let i = 0; i < transformFeedbacks; i++) {
                    const transformFeedbackState = this.readTransformFeedbackFromContext(program, i);
                    this.currentState.transformFeedbacks.push(transformFeedbackState);
                }
            }
        }
        // Insert texture state at the end of the uniform datas.
        for (let i = 0; i < uniformIndices.length; i++) {
            const uniformState = this.currentState.uniforms[i];
            const values = (_b = uniformState.value) !== null && _b !== void 0 ? _b : uniformState.values;
            if (values !== null && values !== undefined) {
                const textureTarget = DrawCallState.samplerTypes[uniformState.typeValue];
                if (textureTarget) {
                    if (values.length) {
                        uniformState.textures = [];
                        for (let j = 0; j < values.length; j++) {
                            uniformState.textures.push(this.readTextureFromContext(values[j].value, textureTarget));
                        }
                    }
                    else {
                        uniformState.texture = this.readTextureFromContext(values, textureTarget);
                    }
                }
            }
            delete uniformState.typeValue;
        }
    }
    readFrameBufferFromContext() {
        const frameBuffer = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_BINDING.value);
        if (!frameBuffer) {
            return null;
        }
        const frameBufferState = {};
        frameBufferState.frameBuffer = this.getSpectorData(frameBuffer);
        const depthAttachment = this.readFrameBufferAttachmentFromContext(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_ATTACHMENT.value);
        if (depthAttachment) {
            frameBufferState.depthAttachment = this.readFrameBufferAttachmentFromContext(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_ATTACHMENT.value);
        }
        const stencilAttachment = this.readFrameBufferAttachmentFromContext(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_ATTACHMENT.value);
        if (stencilAttachment) {
            frameBufferState.stencilAttachment = this.readFrameBufferAttachmentFromContext(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_ATTACHMENT.value);
        }
        const drawBuffersExtension = this.extensions[_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_DRAW_BUFFERS_WEBGL.extensionName];
        if (drawBuffersExtension) {
            frameBufferState.colorAttachments = [];
            const maxDrawBuffers = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_DRAW_BUFFERS_WEBGL.value);
            for (let i = 0; i < maxDrawBuffers; i++) {
                const attachment = this.readFrameBufferAttachmentFromContext(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByName["COLOR_ATTACHMENT" + i + "_WEBGL"].value);
                if (attachment) {
                    frameBufferState.colorAttachments.push(attachment);
                }
            }
        }
        else if (this.contextVersion > 1) {
            const context2 = this.context;
            // Already covered ny the introspection of depth and stencil.
            // frameBufferState.depthStencilAttachment = this.readFrameBufferAttachmentFromContext(WebGlConstants.DEPTH_STENCIL_ATTACHMENT.value);
            frameBufferState.colorAttachments = [];
            const maxDrawBuffers = context2.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_DRAW_BUFFERS.value);
            for (let i = 0; i < maxDrawBuffers; i++) {
                const attachment = this.readFrameBufferAttachmentFromContext(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByName["COLOR_ATTACHMENT" + i].value);
                if (attachment) {
                    frameBufferState.colorAttachments.push(attachment);
                }
            }
        }
        else {
            const attachment = this.readFrameBufferAttachmentFromContext(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByName.COLOR_ATTACHMENT0.value);
            if (attachment) {
                frameBufferState.colorAttachments = [attachment];
            }
        }
        return frameBufferState;
    }
    readFrameBufferAttachmentFromContext(attachment) {
        const target = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER.value;
        const type = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE.value);
        if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.NONE.value) {
            return undefined;
        }
        const attachmentState = {};
        const storage = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME.value);
        if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RENDERBUFFER.value) {
            attachmentState.type = "RENDERBUFFER";
            attachmentState.buffer = this.getSpectorData(storage);
            // Check for custom data.
            if (storage) {
                const customData = storage.__SPECTOR_Object_CustomData;
                if (customData) {
                    if (customData.internalFormat) {
                        attachmentState.internalFormat = this.getWebGlConstant(customData.internalFormat);
                    }
                    attachmentState.width = customData.width;
                    attachmentState.height = customData.height;
                    attachmentState.msaaSamples = customData.samples;
                }
            }
        }
        else if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE.value) {
            attachmentState.type = "TEXTURE";
            attachmentState.texture = this.getSpectorData(storage);
            attachmentState.textureLevel = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL.value);
            const cubeMapFace = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE.value);
            attachmentState.textureCubeMapFace = this.getWebGlConstant(cubeMapFace);
            this.drawCallTextureInputState.appendTextureState(attachmentState, storage, null, this.fullCapture);
        }
        if (this.extensions["EXT_sRGB"]) {
            attachmentState.encoding = this.getWebGlConstant(this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT.value));
        }
        if (this.contextVersion > 1) {
            attachmentState.alphaSize = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE.value);
            attachmentState.blueSize = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE.value);
            attachmentState.encoding = this.getWebGlConstant(this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING.value));
            attachmentState.componentType = this.getWebGlConstant(this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE.value));
            attachmentState.depthSize = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE.value);
            attachmentState.greenSize = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE.value);
            attachmentState.redSize = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_RED_SIZE.value);
            attachmentState.stencilSize = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE.value);
            if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE.value) {
                attachmentState.textureLayer = this.context.getFramebufferAttachmentParameter(target, attachment, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER.value);
            }
        }
        return attachmentState;
    }
    readAttributeFromContext(program, activeAttributeIndex) {
        const info = this.context.getActiveAttrib(program, activeAttributeIndex);
        const location = this.context.getAttribLocation(program, info.name);
        if (location === -1) {
            return {
                name: info.name,
                size: info.size,
                type: this.getWebGlConstant(info.type),
                location: -1,
            };
        }
        const unbufferedValue = this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.CURRENT_VERTEX_ATTRIB.value);
        const boundBuffer = this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING.value);
        const attributeState = {
            name: info.name,
            size: info.size,
            type: this.getWebGlConstant(info.type),
            location,
            offsetPointer: this.context.getVertexAttribOffset(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_POINTER.value),
            bufferBinding: this.getSpectorData(boundBuffer),
            enabled: this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_ENABLED.value),
            arraySize: this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_SIZE.value),
            stride: this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_STRIDE.value),
            arrayType: this.getWebGlConstant(this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_TYPE.value)),
            normalized: this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_NORMALIZED.value),
            vertexAttrib: Array.prototype.slice.call(unbufferedValue),
        };
        if (this.extensions[_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE.extensionName]) {
            attributeState.divisor = this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE.value);
        }
        else if (this.contextVersion > 1) {
            attributeState.integer = this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_INTEGER.value);
            attributeState.divisor = this.context.getVertexAttrib(location, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERTEX_ATTRIB_ARRAY_DIVISOR.value);
        }
        this.appendBufferCustomData(attributeState, boundBuffer);
        return attributeState;
    }
    readUniformFromContext(program, activeUniformIndex) {
        const info = this.context.getActiveUniform(program, activeUniformIndex);
        const location = this.context.getUniformLocation(program, info.name);
        if (location) {
            if (info.size > 1 && info.name && info.name.indexOf("[0]") === info.name.length - 3) {
                const values = [];
                for (let i = 0; i < info.size; i++) {
                    const locationInArray = this.context.getUniformLocation(program, info.name.replace("[0]", "[" + i + "]"));
                    if (locationInArray) {
                        let value = this.context.getUniform(program, locationInArray);
                        if (value.length) {
                            value = Array.prototype.slice.call(value);
                        }
                        values.push({ value });
                    }
                }
                const uniformState = {
                    name: info.name.replace("[0]", ""),
                    size: info.size,
                    type: this.getWebGlConstant(info.type),
                    typeValue: info.type,
                    location: this.getSpectorData(location),
                    values,
                };
                return uniformState;
            }
            else {
                let value = this.context.getUniform(program, location);
                if (value.length) {
                    value = Array.prototype.slice.call(value);
                }
                const uniformState = {
                    name: info.name,
                    size: info.size,
                    type: this.getWebGlConstant(info.type),
                    typeValue: info.type,
                    location: this.getSpectorData(location),
                    value,
                };
                return uniformState;
            }
        }
        else {
            const uniformState = {
                name: info.name,
                size: info.size,
                type: this.getWebGlConstant(info.type),
                typeValue: info.type,
            };
            return uniformState;
        }
    }
    readTextureFromContext(textureUnit, target) {
        const activeTexture = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ACTIVE_TEXTURE.value);
        this.context.activeTexture(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE0.value + textureUnit);
        const textureState = {
            magFilter: this.getWebGlConstant(this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MAG_FILTER.value)),
            minFilter: this.getWebGlConstant(this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MIN_FILTER.value)),
            wrapS: this.getWebGlConstant(this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_WRAP_S.value)),
            wrapT: this.getWebGlConstant(this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_WRAP_T.value)),
        };
        if (this.extensions[_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MAX_ANISOTROPY_EXT.extensionName]) {
            textureState.anisotropy = this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MAX_ANISOTROPY_EXT.value);
        }
        if (this.contextVersion > 1) {
            textureState.baseLevel = this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BASE_LEVEL.value);
            textureState.immutable = this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_IMMUTABLE_FORMAT.value);
            textureState.immutableLevels = this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_IMMUTABLE_LEVELS.value);
            textureState.maxLevel = this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MAX_LEVEL.value);
            const sampler = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLER_BINDING.value);
            if (sampler) {
                textureState.sampler = this.getSpectorData(sampler);
                const context2 = this.context;
                textureState.samplerMaxLod = context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MAX_LOD.value);
                textureState.samplerMinLod = context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MIN_LOD.value);
                textureState.samplerCompareFunc = this.getWebGlConstant(context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_COMPARE_FUNC.value));
                textureState.samplerCompareMode = this.getWebGlConstant(context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_COMPARE_MODE.value));
                textureState.samplerWrapS = this.getWebGlConstant(context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_WRAP_S.value));
                textureState.samplerWrapT = this.getWebGlConstant(context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_WRAP_T.value));
                textureState.samplerWrapR = this.getWebGlConstant(context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_WRAP_R.value));
                textureState.samplerMagFilter = this.getWebGlConstant(context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MAG_FILTER.value));
                textureState.samplerMinFilter = this.getWebGlConstant(context2.getSamplerParameter(sampler, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MIN_FILTER.value));
            }
            else {
                textureState.maxLod = this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MAX_LOD.value);
                textureState.minLod = this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_MIN_LOD.value);
                textureState.compareFunc = this.getWebGlConstant(this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_COMPARE_FUNC.value));
                textureState.compareMode = this.getWebGlConstant(this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_COMPARE_MODE.value));
                textureState.wrapR = this.getWebGlConstant(this.context.getTexParameter(target.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_WRAP_R.value));
            }
        }
        const storage = this.getTextureStorage(target);
        if (storage) {
            // Null will prevent the visual target to be captured.
            const textureStateTarget = this.quickCapture ? null : target;
            this.drawCallTextureInputState.appendTextureState(textureState, storage, textureStateTarget, this.fullCapture);
        }
        this.context.activeTexture(activeTexture);
        return textureState;
    }
    getTextureStorage(target) {
        if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D) {
            return this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BINDING_2D.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP) {
            return this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BINDING_CUBE_MAP.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_3D) {
            return this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BINDING_3D.value);
        }
        else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY) {
            return this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_BINDING_2D_ARRAY.value);
        }
        return undefined;
    }
    readUniformsFromContextIntoState(program, uniformIndices, uniformsState, uniformBlockState) {
        const context2 = this.context;
        const typeValues = context2.getActiveUniforms(program, uniformIndices, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_TYPE.value);
        const sizes = context2.getActiveUniforms(program, uniformIndices, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_SIZE.value);
        const blockIndices = context2.getActiveUniforms(program, uniformIndices, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BLOCK_INDEX.value);
        const offsets = context2.getActiveUniforms(program, uniformIndices, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_OFFSET.value);
        const arrayStrides = context2.getActiveUniforms(program, uniformIndices, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_ARRAY_STRIDE.value);
        const matrixStrides = context2.getActiveUniforms(program, uniformIndices, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_MATRIX_STRIDE.value);
        const rowMajors = context2.getActiveUniforms(program, uniformIndices, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_IS_ROW_MAJOR.value);
        for (let i = 0; i < uniformIndices.length; i++) {
            const uniformState = uniformsState[i];
            uniformState.type = this.getWebGlConstant(typeValues[i]);
            uniformState.size = sizes[i];
            uniformState.blockIndice = blockIndices[i];
            if (uniformState.blockIndice > -1) {
                uniformState.blockName = context2.getActiveUniformBlockName(program, uniformState.blockIndice);
            }
            uniformState.offset = offsets[i];
            uniformState.arrayStride = arrayStrides[i];
            uniformState.matrixStride = matrixStrides[i];
            uniformState.rowMajor = rowMajors[i];
            if (uniformState.blockIndice > -1) {
                const bindingPoint = uniformBlockState[blockIndices[i]].bindingPoint;
                uniformState.value = this.drawCallUboInputState.getUboValue(bindingPoint, uniformState.offset, uniformState.size, typeValues[i]);
            }
        }
    }
    readTransformFeedbackFromContext(program, index) {
        const context2 = this.context;
        const info = context2.getTransformFeedbackVarying(program, index);
        const boundBuffer = context2.getIndexedParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_BINDING.value, index);
        const transformFeedbackState = {
            name: info.name,
            size: info.size,
            type: this.getWebGlConstant(info.type),
            buffer: this.getSpectorData(boundBuffer),
            bufferSize: context2.getIndexedParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_SIZE.value, index),
            bufferStart: context2.getIndexedParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_START.value, index),
        };
        this.appendBufferCustomData(transformFeedbackState, boundBuffer);
        return transformFeedbackState;
    }
    readUniformBlockFromContext(program, index) {
        const context2 = this.context;
        const bindingPoint = context2.getActiveUniformBlockParameter(program, index, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BLOCK_BINDING.value);
        const boundBuffer = context2.getIndexedParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BUFFER_BINDING.value, bindingPoint);
        const uniformBlockState = {
            name: context2.getActiveUniformBlockName(program, index),
            bindingPoint,
            size: context2.getActiveUniformBlockParameter(program, index, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BLOCK_DATA_SIZE.value),
            activeUniformCount: context2.getActiveUniformBlockParameter(program, index, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BLOCK_ACTIVE_UNIFORMS.value),
            vertex: context2.getActiveUniformBlockParameter(program, index, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER.value),
            fragment: context2.getActiveUniformBlockParameter(program, index, _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER.value),
            buffer: this.getSpectorData(boundBuffer),
            // Do not display Ptr data.
            // bufferSize: context2.getIndexedParameter(WebGlConstants.UNIFORM_BUFFER_SIZE.value, bindingPoint),
            // bufferStart: context2.getIndexedParameter(WebGlConstants.UNIFORM_BUFFER_START.value, bindingPoint),
        };
        this.appendBufferCustomData(uniformBlockState, boundBuffer);
        return uniformBlockState;
    }
    appendBufferCustomData(state, buffer) {
        if (buffer) {
            // Check for custom data.
            const customData = buffer.__SPECTOR_Object_CustomData;
            if (customData) {
                if (customData.usage) {
                    state.bufferUsage = this.getWebGlConstant(customData.usage);
                }
                state.bufferLength = customData.length;
                if (customData.offset) {
                    state.bufferOffset = customData.offset;
                }
                if (customData.sourceLength) {
                    state.bufferSourceLength = customData.sourceLength;
                }
            }
        }
    }
    getWebGlConstant(value) {
        const constant = _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstantsByValue[value];
        return constant ? constant.name : value;
    }
}
DrawCallState.stateName = "DrawCall";
DrawCallState.samplerTypes = {
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLER_2D.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLER_CUBE.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLER_3D.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_3D,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLER_2D_SHADOW.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLER_2D_ARRAY.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLER_2D_ARRAY_SHADOW.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLER_CUBE_SHADOW.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.INT_SAMPLER_2D.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.INT_SAMPLER_3D.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_3D,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.INT_SAMPLER_CUBE.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.INT_SAMPLER_2D_ARRAY.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNSIGNED_INT_SAMPLER_2D.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNSIGNED_INT_SAMPLER_3D.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_3D,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNSIGNED_INT_SAMPLER_CUBE.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_CUBE_MAP,
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.UNSIGNED_INT_SAMPLER_2D_ARRAY.value]: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.TEXTURE_2D_ARRAY,
};


/***/ }),

/***/ "./src/backend/states/drawCalls/drawCallTextureInputState.ts":
/*!*******************************************************************!*\
  !*** ./src/backend/states/drawCalls/drawCallTextureInputState.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawCallTextureInputState": () => (/* binding */ DrawCallTextureInputState)
/* harmony export */ });
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _utils_readPixelsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/readPixelsHelper */ "./src/backend/utils/readPixelsHelper.ts");
/* harmony import */ var _context_visualState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/visualState */ "./src/backend/states/context/visualState.ts");



class DrawCallTextureInputState {
    constructor(options) {
        this.context = options.context;
        this.captureFrameBuffer = options.context.createFramebuffer();
        this.workingCanvas = document.createElement("canvas");
        this.workingContext2D = this.workingCanvas.getContext("2d");
        this.captureCanvas = document.createElement("canvas");
        this.captureContext2D = this.captureCanvas.getContext("2d");
        this._setSmoothing(true);
    }
    appendTextureState(state, storage, target = null, fullCapture) {
        if (!storage) {
            return;
        }
        // Check for custom data.
        const customData = storage.__SPECTOR_Object_CustomData;
        if (!customData) {
            return;
        }
        this.fullCapture = fullCapture;
        if (customData.type) {
            state.textureType = this.getWebGlConstant(customData.type);
        }
        if (customData.format) {
            state.format = this.getWebGlConstant(customData.format);
        }
        if (customData.internalFormat) {
            state.internalFormat = this.getWebGlConstant(customData.internalFormat);
        }
        state.width = customData.width;
        state.height = customData.height;
        if (customData.depth) {
            state.depth = customData.depth;
        }
        if (target) {
            const pixelated = state["samplerMagFilter"] === "NEAREST" || state["magFilter"] === "NEAREST";
            state.visual = this.getTextureVisualState(target, storage, customData, pixelated);
        }
    }
    getTextureVisualState(target, storage, info, pixelated) {
        try {
            const gl = this.context;
            const visual = {};
            if (!_utils_readPixelsHelper__WEBPACK_IMPORTED_MODULE_1__.ReadPixelsHelper.isSupportedCombination(info.type, info.format, info.internalFormat)) {
                return visual;
            }
            // Check the framebuffer status.
            const currentFrameBuffer = this.context.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER_BINDING.value);
            gl.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER.value, this.captureFrameBuffer);
            try {
                const textureLevel = 0;
                const width = info.width;
                const height = info.height;
                if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_3D && info.depth) {
                    const gl2 = gl;
                    for (let i = 0; i < info.depth; i++) {
                        // Limit to 6 the visible texture...
                        if (i > 2 && i < (info.depth - 3)) {
                            continue;
                        }
                        gl2.framebufferTextureLayer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.COLOR_ATTACHMENT0.value, storage, textureLevel, i);
                        visual["3D Layer " + i] = this.getCapture(gl, 0, 0, width, height, info.type, pixelated);
                    }
                }
                else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_2D_ARRAY && info.depth) {
                    const gl2 = gl;
                    // Limit to 6 the visible texture...
                    for (let i = 0; i < info.depth; i++) {
                        if (i > 2 && i < (info.depth - 3)) {
                            continue;
                        }
                        gl2.framebufferTextureLayer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.COLOR_ATTACHMENT0.value, storage, textureLevel, i);
                        visual["Layer " + i] = this.getCapture(gl, 0, 0, width, height, info.type, pixelated);
                    }
                }
                else if (target === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_CUBE_MAP) {
                    for (const face of DrawCallTextureInputState.cubeMapFaces) {
                        gl.framebufferTexture2D(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.COLOR_ATTACHMENT0.value, face.value, storage, textureLevel);
                        visual[face.name] = this.getCapture(gl, 0, 0, width, height, info.type, pixelated);
                    }
                }
                else {
                    gl.framebufferTexture2D(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.COLOR_ATTACHMENT0.value, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_2D.value, storage, textureLevel);
                    visual[_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_2D.name] = this.getCapture(gl, 0, 0, width, height, info.type, pixelated);
                }
            }
            catch (e) {
                // Something went wrong during the capture.
            }
            gl.bindFramebuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER.value, currentFrameBuffer);
            return visual;
        }
        catch (e) {
            // Do nothing, probably an incompatible format, should add more combinaison check upfront.
        }
        return undefined;
    }
    getCapture(gl, x, y, width, height, type, pixelated) {
        try {
            // Check FBO status.
            const status = this.context.checkFramebufferStatus(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER.value);
            if (status !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAMEBUFFER_COMPLETE.value) {
                return undefined;
            }
            // In case of texStorage.
            type = type || _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_BYTE.value;
            // Read the pixels from the context.
            const pixels = _utils_readPixelsHelper__WEBPACK_IMPORTED_MODULE_1__.ReadPixelsHelper.readPixels(gl, x, y, width, height, type);
            if (!pixels) {
                return undefined;
            }
            // Copy the pixels to a working 2D canvas same size.
            this.workingCanvas.width = width;
            this.workingCanvas.height = height;
            const imageData = this.workingContext2D.createImageData(width, height);
            imageData.data.set(pixels);
            this.workingContext2D.putImageData(imageData, 0, 0);
            if (!this.fullCapture) {
                // Copy the pixels to a resized capture 2D canvas.
                const imageAspectRatio = width / height;
                if (imageAspectRatio < 1) {
                    this.captureCanvas.width = _context_visualState__WEBPACK_IMPORTED_MODULE_2__.VisualState.captureBaseSize * imageAspectRatio;
                    this.captureCanvas.height = _context_visualState__WEBPACK_IMPORTED_MODULE_2__.VisualState.captureBaseSize;
                }
                else if (imageAspectRatio > 1) {
                    this.captureCanvas.width = _context_visualState__WEBPACK_IMPORTED_MODULE_2__.VisualState.captureBaseSize;
                    this.captureCanvas.height = _context_visualState__WEBPACK_IMPORTED_MODULE_2__.VisualState.captureBaseSize / imageAspectRatio;
                }
                else {
                    this.captureCanvas.width = _context_visualState__WEBPACK_IMPORTED_MODULE_2__.VisualState.captureBaseSize;
                    this.captureCanvas.height = _context_visualState__WEBPACK_IMPORTED_MODULE_2__.VisualState.captureBaseSize;
                }
            }
            else {
                this.captureCanvas.width = this.workingCanvas.width;
                this.captureCanvas.height = this.workingCanvas.height;
            }
            this.captureCanvas.width = Math.max(this.captureCanvas.width, 1);
            this.captureCanvas.height = Math.max(this.captureCanvas.height, 1);
            // Scale and draw to flip Y to reorient readPixels.
            this.captureContext2D.globalCompositeOperation = "copy";
            this.captureContext2D.scale(1, -1); // Y flip
            this.captureContext2D.translate(0, -this.captureCanvas.height); // so we can draw at 0,0
            this._setSmoothing(!pixelated);
            this.captureContext2D.drawImage(this.workingCanvas, 0, 0, width, height, 0, 0, this.captureCanvas.width, this.captureCanvas.height);
            this.captureContext2D.setTransform(1, 0, 0, 1, 0, 0);
            this.captureContext2D.globalCompositeOperation = "source-over";
            // get the screen capture
            const src = this.captureCanvas.toDataURL();
            return src;
        }
        catch (e) {
            // TODO. Nothing to do here... so far.
        }
        return undefined;
    }
    getWebGlConstant(value) {
        const constant = _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstantsByValue[value];
        return constant ? constant.name : value + "";
    }
    _setSmoothing(smooth) {
        this.captureContext2D.imageSmoothingEnabled = smooth;
        this.captureContext2D.mozImageSmoothingEnabled = smooth;
        this.captureContext2D.oImageSmoothingEnabled = smooth;
        this.captureContext2D.webkitImageSmoothingEnabled = smooth;
        this.captureContext2D.msImageSmoothingEnabled = smooth;
    }
}
DrawCallTextureInputState.captureBaseSize = 64;
DrawCallTextureInputState.cubeMapFaces = [
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_X,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_Y,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_Z,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_X,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_Y,
    _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_Z,
];


/***/ }),

/***/ "./src/backend/states/drawCalls/drawCallUboInputState.ts":
/*!***************************************************************!*\
  !*** ./src/backend/states/drawCalls/drawCallUboInputState.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawCallUboInputState": () => (/* binding */ DrawCallUboInputState)
/* harmony export */ });
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");

class DrawCallUboInputState {
    constructor(options) {
        this.context = options.context;
    }
    getUboValue(bindingPoint, offset, size, type) {
        const uboType = DrawCallUboInputState.uboTypes[type];
        if (!uboType) {
            return undefined;
        }
        const destination = new uboType.arrayBufferView(size * uboType.lengthMultiplier);
        const context2 = this.context;
        const ownerbuffer = context2.getIndexedParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNIFORM_BUFFER_BINDING.value, bindingPoint);
        if (ownerbuffer) {
            const startOffset = context2.getIndexedParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNIFORM_BUFFER_START.value, bindingPoint);
            const boundBuffer = context2.getParameter(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNIFORM_BUFFER_BINDING.value);
            try {
                context2.bindBuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNIFORM_BUFFER.value, ownerbuffer);
                context2.getBufferSubData(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNIFORM_BUFFER.value, startOffset + offset, destination);
            }
            catch (e) {
                // Prevent back fromats to break the capture.
                return undefined;
            }
            if (boundBuffer) {
                context2.bindBuffer(_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNIFORM_BUFFER.value, boundBuffer);
            }
        }
        return Array.prototype.slice.call(destination);
    }
}
DrawCallUboInputState.uboTypes = {
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BOOL.value]: { arrayBufferView: Uint8Array, lengthMultiplier: 1 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BOOL_VEC2.value]: { arrayBufferView: Uint8Array, lengthMultiplier: 2 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BOOL_VEC3.value]: { arrayBufferView: Uint8Array, lengthMultiplier: 3 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.BOOL_VEC4.value]: { arrayBufferView: Uint8Array, lengthMultiplier: 4 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.INT.value]: { arrayBufferView: Int32Array, lengthMultiplier: 1 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.INT_VEC2.value]: { arrayBufferView: Int32Array, lengthMultiplier: 2 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.INT_VEC3.value]: { arrayBufferView: Int32Array, lengthMultiplier: 3 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.INT_VEC4.value]: { arrayBufferView: Int32Array, lengthMultiplier: 4 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_INT.value]: { arrayBufferView: Uint32Array, lengthMultiplier: 1 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_INT_VEC2.value]: { arrayBufferView: Uint32Array, lengthMultiplier: 2 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_INT_VEC3.value]: { arrayBufferView: Uint32Array, lengthMultiplier: 3 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_INT_VEC4.value]: { arrayBufferView: Uint32Array, lengthMultiplier: 4 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT.value]: { arrayBufferView: Float32Array, lengthMultiplier: 1 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_VEC2.value]: { arrayBufferView: Float32Array, lengthMultiplier: 2 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_VEC3.value]: { arrayBufferView: Float32Array, lengthMultiplier: 3 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_VEC4.value]: { arrayBufferView: Float32Array, lengthMultiplier: 4 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT2.value]: { arrayBufferView: Float32Array, lengthMultiplier: 4 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT2x3.value]: { arrayBufferView: Float32Array, lengthMultiplier: 6 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT2x4.value]: { arrayBufferView: Float32Array, lengthMultiplier: 8 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT3.value]: { arrayBufferView: Float32Array, lengthMultiplier: 9 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT3x2.value]: { arrayBufferView: Float32Array, lengthMultiplier: 6 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT3x4.value]: { arrayBufferView: Float32Array, lengthMultiplier: 12 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT4.value]: { arrayBufferView: Float32Array, lengthMultiplier: 16 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT4x2.value]: { arrayBufferView: Float32Array, lengthMultiplier: 8 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT_MAT4x3.value]: { arrayBufferView: Float32Array, lengthMultiplier: 12 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.SAMPLER_2D.value]: { arrayBufferView: Uint8Array, lengthMultiplier: 1 },
    [_types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.SAMPLER_CUBE.value]: { arrayBufferView: Uint8Array, lengthMultiplier: 1 },
};


/***/ }),

/***/ "./src/backend/states/information/capabilities.ts":
/*!********************************************************!*\
  !*** ./src/backend/states/information/capabilities.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capabilities": () => (/* binding */ Capabilities)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class Capabilities extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return "Capabilities";
    }
    constructor(options) {
        super(options);
        this.currentState = this.startCapture(true, this.quickCapture, this.fullCapture);
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RENDERER },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VENDOR },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.VERSION },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SHADING_LANGUAGE_VERSION },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLES },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SAMPLE_BUFFERS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.RED_BITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.GREEN_BITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.BLUE_BITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ALPHA_BITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.DEPTH_BITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.STENCIL_BITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.SUBPIXEL_BITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.LINE_WIDTH },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ALIASED_LINE_WIDTH_RANGE },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.ALIASED_POINT_SIZE_RANGE },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.IMPLEMENTATION_COLOR_READ_FORMAT, returnType: 20 /* ParameterReturnType.GlEnum */ },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.IMPLEMENTATION_COLOR_READ_TYPE, returnType: 20 /* ParameterReturnType.GlEnum */ },
            // { constant: WebGlConstants.UNIFORM_BUFFER_OFFSET_ALIGNMENT },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_COMBINED_TEXTURE_IMAGE_UNITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_CUBE_MAP_TEXTURE_SIZE },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_FRAGMENT_UNIFORM_VECTORS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_RENDERBUFFER_SIZE },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_TEXTURE_IMAGE_UNITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_TEXTURE_SIZE },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VARYING_VECTORS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VERTEX_ATTRIBS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VERTEX_TEXTURE_IMAGE_UNITS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VERTEX_UNIFORM_VECTORS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VIEWPORT_DIMS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_TEXTURE_MAX_ANISOTROPY_EXT },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_COLOR_ATTACHMENTS_WEBGL },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_DRAW_BUFFERS_WEBGL }];
    }
    getWebgl2Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_3D_TEXTURE_SIZE },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_ARRAY_TEXTURE_LAYERS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_CLIENT_WAIT_TIMEOUT_WEBGL },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_COLOR_ATTACHMENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_COMBINED_UNIFORM_BLOCKS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_DRAW_BUFFERS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_ELEMENT_INDEX },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_ELEMENTS_INDICES },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_ELEMENTS_VERTICES },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_FRAGMENT_INPUT_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_FRAGMENT_UNIFORM_BLOCKS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_FRAGMENT_UNIFORM_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_PROGRAM_TEXEL_OFFSET },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_SAMPLES },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_SERVER_WAIT_TIMEOUT },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_TEXTURE_LOD_BIAS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_UNIFORM_BLOCK_SIZE },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_UNIFORM_BUFFER_BINDINGS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VARYING_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VERTEX_OUTPUT_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VERTEX_UNIFORM_BLOCKS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MAX_VERTEX_UNIFORM_COMPONENTS },
            { constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.MIN_PROGRAM_TEXEL_OFFSET }];
    }
}


/***/ }),

/***/ "./src/backend/states/information/compressedTextures.ts":
/*!**************************************************************!*\
  !*** ./src/backend/states/information/compressedTextures.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompressedTextures": () => (/* binding */ CompressedTextures)
/* harmony export */ });
/* harmony import */ var _parameterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parameterState */ "./src/backend/states/parameterState.ts");
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/webglConstants */ "./src/backend/types/webglConstants.ts");


class CompressedTextures extends _parameterState__WEBPACK_IMPORTED_MODULE_0__.ParameterState {
    get stateName() {
        return "CompressedTextures";
    }
    constructor(options) {
        super(options);
        this.currentState = this.startCapture(true, this.quickCapture, this.fullCapture);
    }
    getWebgl1Parameters() {
        return [{ constant: _types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.COMPRESSED_TEXTURE_FORMATS }];
    }
    stringifyParameterValue(value, parameter) {
        const formats = [];
        for (const format of value) {
            formats.push(_types_webglConstants__WEBPACK_IMPORTED_MODULE_1__.WebGlConstants.stringifyWebGlConstant(format, "getParameter"));
        }
        return formats;
    }
}


/***/ }),

/***/ "./src/backend/states/information/extensions.ts":
/*!******************************************************!*\
  !*** ./src/backend/states/information/extensions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Extensions": () => (/* binding */ Extensions)
/* harmony export */ });
/* harmony import */ var _baseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseState */ "./src/backend/states/baseState.ts");

class Extensions extends _baseState__WEBPACK_IMPORTED_MODULE_0__.BaseState {
    constructor(options) {
        super(options);
        this.extensionDefinition = [
            [{ name: "ANGLE_instanced_arrays", description: "" },
                { name: "EXT_blend_minmax", description: "" },
                { name: "EXT_color_buffer_float", description: "" },
                { name: "EXT_color_buffer_half_float", description: "" },
                { name: "EXT_disjoint_timer_query", description: "" },
                { name: "EXT_frag_depth", description: "" },
                { name: "EXT_sRGB", description: "" },
                { name: "EXT_shader_texture_lod", description: "" },
                { name: "EXT_texture_filter_anisotropic", description: "" },
                { name: "OES_element_index_uint", description: "" },
                { name: "OES_standard_derivatives", description: "" },
                { name: "OES_texture_float", description: "" },
                { name: "OES_texture_float_linear", description: "" },
                { name: "OES_texture_half_float", description: "" },
                { name: "OES_texture_half_float_linear", description: "" },
                { name: "OES_vertex_array_object", description: "" },
                { name: "WEBGL_color_buffer_float", description: "" },
                { name: "WEBGL_compressed_texture_astc", description: "" },
                { name: "WEBGL_compressed_texture_atc", description: "" },
                { name: "WEBGL_compressed_texture_etc", description: "" },
                { name: "WEBGL_compressed_texture_etc1", description: "" },
                { name: "WEBGL_compressed_texture_pvrtc", description: "" },
                { name: "WEBGL_compressed_texture_s3tc", description: "" },
                // { name: "WEBGL_debug_renderer_info", description: "" },
                // { name: "WEBGL_debug_shaders", description: "" },
                { name: "WEBGL_depth_texture", description: "" },
                { name: "WEBGL_draw_buffers", description: "" }],
            // ,
            // WebGl2
            [{ name: "EXT_color_buffer_float", description: "" },
                { name: "EXT_disjoint_timer_query", description: "" },
                { name: "EXT_disjoint_timer_query_webgl2", description: "" },
                { name: "EXT_texture_filter_anisotropic", description: "" },
                { name: "OES_texture_float_linear", description: "" },
                { name: "WEBGL_compressed_texture_astc", description: "" },
                { name: "WEBGL_compressed_texture_atc", description: "" },
                { name: "WEBGL_compressed_texture_etc", description: "" },
                { name: "WEBGL_compressed_texture_etc1", description: "" },
                { name: "WEBGL_compressed_texture_pvrtc", description: "" },
                { name: "WEBGL_compressed_texture_s3tc", description: "" },
                // { name: "WEBGL_debug_renderer_info", description: "" },
                // { name: "WEBGL_debug_shaders", description: "" },
                { name: "WEBGL_multi_draw", description: "" },
                { name: "WEBGL_multi_draw_instanced_base_vertex_base_instance", description: "" },
                { name: "WEBGL_draw_instanced_base_vertex_base_instance", description: "" },
            ],
        ];
        this.currentState = this.startCapture(true, this.quickCapture, this.fullCapture);
    }
    get stateName() {
        return "Extensions";
    }
    getExtensions() {
        return this.extensions;
    }
    readFromContext() {
        const extensionList = this.contextVersion === 1 ? this.extensionDefinition[0] : this.extensionDefinition[1];
        for (const parameter of extensionList) {
            const value = this.context.getExtension(parameter.name);
            if (value) {
                this.currentState[parameter.name] = true;
                this.extensions[parameter.name] = value;
            }
            else {
                this.currentState[parameter.name] = false;
            }
        }
    }
}


/***/ }),

/***/ "./src/backend/states/parameterState.ts":
/*!**********************************************!*\
  !*** ./src/backend/states/parameterState.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterState": () => (/* binding */ ParameterState)
/* harmony export */ });
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");
/* harmony import */ var _baseState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseState */ "./src/backend/states/baseState.ts");
/* harmony import */ var _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webGlObjects/baseWebGlObject */ "./src/backend/webGlObjects/baseWebGlObject.ts");
/* harmony import */ var _utils_formatHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/formatHelper */ "./src/backend/utils/formatHelper.ts");




class ParameterState extends _baseState__WEBPACK_IMPORTED_MODULE_1__.BaseState {
    getWebgl1Parameters() {
        return [];
    }
    getWebgl2Parameters() {
        return [];
    }
    getChangeCommandsByState() {
        this.parameters = [];
        this.parameters.push(this.getWebgl1Parameters());
        if (this.contextVersion > 1) {
            this.parameters.push(this.getWebgl2Parameters());
        }
        const changeCommandsByState = {};
        for (let version = 1; version <= this.contextVersion; version++) {
            if (version > this.parameters.length) {
                break;
            }
            if (!this.parameters[version - 1]) {
                continue;
            }
            for (const parameter of this.parameters[version - 1]) {
                if (parameter.changeCommands) {
                    for (const command of parameter.changeCommands) {
                        changeCommandsByState[parameter.constant.name] = changeCommandsByState[parameter.constant.name] || [];
                        changeCommandsByState[parameter.constant.name].push(command);
                    }
                }
            }
        }
        return changeCommandsByState;
    }
    readFromContext() {
        for (let version = 1; version <= this.contextVersion; version++) {
            if (version > this.parameters.length) {
                break;
            }
            for (const parameter of this.parameters[version - 1]) {
                const value = this.readParameterFromContext(parameter);
                if (value === null || value === undefined) {
                    const stringValue = this.stringifyParameterValue(value, parameter);
                    this.currentState[parameter.constant.name] = stringValue;
                    continue;
                }
                const tag = _webGlObjects_baseWebGlObject__WEBPACK_IMPORTED_MODULE_2__.WebGlObjects.getWebGlObjectTag(value);
                if (tag) {
                    this.currentState[parameter.constant.name] = tag;
                }
                else {
                    const stringValue = this.stringifyParameterValue(value, parameter);
                    this.currentState[parameter.constant.name] = stringValue;
                }
            }
        }
    }
    readParameterFromContext(parameter) {
        if (parameter.constant.extensionName && !this.extensions[parameter.constant.extensionName]) {
            return `Extension ${parameter.constant.extensionName} is unavailable.`;
        }
        const value = this.context.getParameter(parameter.constant.value);
        return value;
    }
    stringifyParameterValue(value, parameter) {
        if (value === null) {
            return "null";
        }
        if (value === undefined) {
            return "undefined";
        }
        if (parameter.returnType === 30 /* ParameterReturnType.GlUint */) {
            value = (0,_utils_formatHelper__WEBPACK_IMPORTED_MODULE_3__.formatBinary)(value);
            return value;
        }
        if (typeof value === "number" && _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.isWebGlConstant(value)) {
            if (parameter.returnType === 20 /* ParameterReturnType.GlEnum */) {
                const commandName = parameter.changeCommands ? parameter.changeCommands[0] || "" : "";
                value = _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.stringifyWebGlConstant(value, commandName);
                return value;
            }
            else {
                return value;
            }
        }
        else if (value.length && typeof value !== "string") {
            const newValue = [];
            for (let i = 0; i < value.length; i++) {
                newValue.push(value[i]);
            }
            return newValue;
        }
        return value;
    }
}


/***/ }),

/***/ "./src/backend/types/webglConstants.ts":
/*!*********************************************!*\
  !*** ./src/backend/types/webglConstants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebGlConstants": () => (/* binding */ WebGlConstants),
/* harmony export */   "WebGlConstantsByName": () => (/* binding */ WebGlConstantsByName),
/* harmony export */   "WebGlConstantsByValue": () => (/* binding */ WebGlConstantsByValue)
/* harmony export */ });
// tslint:disable:max-file-line-count
// tslint:disable:interface-name
// tslint:disable:max-line-length
// tslint:disable:variable-name
class WebGlConstants {
    static isWebGlConstant(value) {
        return WebGlConstantsByValue[value] !== null && WebGlConstantsByValue[value] !== undefined;
    }
    static stringifyWebGlConstant(value, command) {
        if (value === undefined || value === null) {
            return "";
        }
        if (value === 0) {
            const meaning = this.zeroMeaningByCommand[command];
            if (meaning) {
                return meaning;
            }
            return "0";
        }
        else if (value === 1) {
            const meaning = this.oneMeaningByCommand[command];
            if (meaning) {
                return meaning;
            }
            return "1";
        }
        const webglConstant = WebGlConstantsByValue[value];
        return webglConstant ? webglConstant.name : value + "";
    }
}
WebGlConstants.DEPTH_BUFFER_BIT = { name: "DEPTH_BUFFER_BIT", value: 256, description: "Passed to clear to clear the current depth buffer." };
WebGlConstants.STENCIL_BUFFER_BIT = { name: "STENCIL_BUFFER_BIT", value: 1024, description: "Passed to clear to clear the current stencil buffer." };
WebGlConstants.COLOR_BUFFER_BIT = { name: "COLOR_BUFFER_BIT", value: 16384, description: "Passed to clear to clear the current color buffer." };
WebGlConstants.POINTS = { name: "POINTS", value: 0, description: "Passed to drawElements or drawArrays to draw single points." };
WebGlConstants.LINES = { name: "LINES", value: 1, description: "Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it." };
WebGlConstants.LINE_LOOP = { name: "LINE_LOOP", value: 2, description: "Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment." };
WebGlConstants.LINE_STRIP = { name: "LINE_STRIP", value: 3, description: "Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last." };
WebGlConstants.TRIANGLES = { name: "TRIANGLES", value: 4, description: "Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle." };
WebGlConstants.TRIANGLE_STRIP = { name: "TRIANGLE_STRIP", value: 5, description: "Passed to drawElements or drawArrays to draw a connected group of triangles." };
WebGlConstants.TRIANGLE_FAN = { name: "TRIANGLE_FAN", value: 6, description: "Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan." };
WebGlConstants.ZERO = { name: "ZERO", value: 0, description: "Passed to blendFunc or blendFuncSeparate to turn off a component." };
WebGlConstants.ONE = { name: "ONE", value: 1, description: "Passed to blendFunc or blendFuncSeparate to turn on a component." };
WebGlConstants.SRC_COLOR = { name: "SRC_COLOR", value: 768, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color." };
WebGlConstants.ONE_MINUS_SRC_COLOR = { name: "ONE_MINUS_SRC_COLOR", value: 769, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color." };
WebGlConstants.SRC_ALPHA = { name: "SRC_ALPHA", value: 770, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha." };
WebGlConstants.ONE_MINUS_SRC_ALPHA = { name: "ONE_MINUS_SRC_ALPHA", value: 771, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha." };
WebGlConstants.DST_ALPHA = { name: "DST_ALPHA", value: 772, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha." };
WebGlConstants.ONE_MINUS_DST_ALPHA = { name: "ONE_MINUS_DST_ALPHA", value: 773, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha." };
WebGlConstants.DST_COLOR = { name: "DST_COLOR", value: 774, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color." };
WebGlConstants.ONE_MINUS_DST_COLOR = { name: "ONE_MINUS_DST_COLOR", value: 775, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color." };
WebGlConstants.SRC_ALPHA_SATURATE = { name: "SRC_ALPHA_SATURATE", value: 776, description: "Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha." };
WebGlConstants.CONSTANT_COLOR = { name: "CONSTANT_COLOR", value: 32769, description: "Passed to blendFunc or blendFuncSeparate to specify a constant color blend function." };
WebGlConstants.ONE_MINUS_CONSTANT_COLOR = { name: "ONE_MINUS_CONSTANT_COLOR", value: 32770, description: "Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function." };
WebGlConstants.CONSTANT_ALPHA = { name: "CONSTANT_ALPHA", value: 32771, description: "Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function." };
WebGlConstants.ONE_MINUS_CONSTANT_ALPHA = { name: "ONE_MINUS_CONSTANT_ALPHA", value: 32772, description: "Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function." };
WebGlConstants.FUNC_ADD = { name: "FUNC_ADD", value: 32774, description: "Passed to blendEquation or blendEquationSeparate to set an addition blend function." };
WebGlConstants.FUNC_SUBSTRACT = { name: "FUNC_SUBSTRACT", value: 32778, description: "Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination)." };
WebGlConstants.FUNC_REVERSE_SUBTRACT = { name: "FUNC_REVERSE_SUBTRACT", value: 32779, description: "Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source)." };
WebGlConstants.BLEND_EQUATION = { name: "BLEND_EQUATION", value: 32777, description: "Passed to getParameter to get the current RGB blend function." };
WebGlConstants.BLEND_EQUATION_RGB = { name: "BLEND_EQUATION_RGB", value: 32777, description: "Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION" };
WebGlConstants.BLEND_EQUATION_ALPHA = { name: "BLEND_EQUATION_ALPHA", value: 34877, description: "Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION" };
WebGlConstants.BLEND_DST_RGB = { name: "BLEND_DST_RGB", value: 32968, description: "Passed to getParameter to get the current destination RGB blend function." };
WebGlConstants.BLEND_SRC_RGB = { name: "BLEND_SRC_RGB", value: 32969, description: "Passed to getParameter to get the current destination RGB blend function." };
WebGlConstants.BLEND_DST_ALPHA = { name: "BLEND_DST_ALPHA", value: 32970, description: "Passed to getParameter to get the current destination alpha blend function." };
WebGlConstants.BLEND_SRC_ALPHA = { name: "BLEND_SRC_ALPHA", value: 32971, description: "Passed to getParameter to get the current source alpha blend function." };
WebGlConstants.BLEND_COLOR = { name: "BLEND_COLOR", value: 32773, description: "Passed to getParameter to return a the current blend color." };
WebGlConstants.ARRAY_BUFFER_BINDING = { name: "ARRAY_BUFFER_BINDING", value: 34964, description: "Passed to getParameter to get the array buffer binding." };
WebGlConstants.ELEMENT_ARRAY_BUFFER_BINDING = { name: "ELEMENT_ARRAY_BUFFER_BINDING", value: 34965, description: "Passed to getParameter to get the current element array buffer." };
WebGlConstants.LINE_WIDTH = { name: "LINE_WIDTH", value: 2849, description: "Passed to getParameter to get the current lineWidth (set by the lineWidth method)." };
WebGlConstants.ALIASED_POINT_SIZE_RANGE = { name: "ALIASED_POINT_SIZE_RANGE", value: 33901, description: "Passed to getParameter to get the current size of a point drawn with gl.POINTS" };
WebGlConstants.ALIASED_LINE_WIDTH_RANGE = { name: "ALIASED_LINE_WIDTH_RANGE", value: 33902, description: "Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1." };
WebGlConstants.CULL_FACE_MODE = { name: "CULL_FACE_MODE", value: 2885, description: "Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK" };
WebGlConstants.FRONT_FACE = { name: "FRONT_FACE", value: 2886, description: "Passed to getParameter to determine the current value of frontFace. Should return CW or CCW." };
WebGlConstants.DEPTH_RANGE = { name: "DEPTH_RANGE", value: 2928, description: "Passed to getParameter to return a length-2 array of floats giving the current depth range." };
WebGlConstants.DEPTH_WRITEMASK = { name: "DEPTH_WRITEMASK", value: 2930, description: "Passed to getParameter to determine if the depth write mask is enabled." };
WebGlConstants.DEPTH_CLEAR_VALUE = { name: "DEPTH_CLEAR_VALUE", value: 2931, description: "Passed to getParameter to determine the current depth clear value." };
WebGlConstants.DEPTH_FUNC = { name: "DEPTH_FUNC", value: 2932, description: "Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL." };
WebGlConstants.STENCIL_CLEAR_VALUE = { name: "STENCIL_CLEAR_VALUE", value: 2961, description: "Passed to getParameter to get the value the stencil will be cleared to." };
WebGlConstants.STENCIL_FUNC = { name: "STENCIL_FUNC", value: 2962, description: "Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL." };
WebGlConstants.STENCIL_FAIL = { name: "STENCIL_FAIL", value: 2964, description: "Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP." };
WebGlConstants.STENCIL_PASS_DEPTH_FAIL = { name: "STENCIL_PASS_DEPTH_FAIL", value: 2965, description: "Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP." };
WebGlConstants.STENCIL_PASS_DEPTH_PASS = { name: "STENCIL_PASS_DEPTH_PASS", value: 2966, description: "Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP." };
WebGlConstants.STENCIL_REF = { name: "STENCIL_REF", value: 2967, description: "Passed to getParameter to get the reference value used for stencil tests." };
WebGlConstants.STENCIL_VALUE_MASK = { name: "STENCIL_VALUE_MASK", value: 2963, description: " " };
WebGlConstants.STENCIL_WRITEMASK = { name: "STENCIL_WRITEMASK", value: 2968, description: " " };
WebGlConstants.STENCIL_BACK_FUNC = { name: "STENCIL_BACK_FUNC", value: 34816, description: " " };
WebGlConstants.STENCIL_BACK_FAIL = { name: "STENCIL_BACK_FAIL", value: 34817, description: " " };
WebGlConstants.STENCIL_BACK_PASS_DEPTH_FAIL = { name: "STENCIL_BACK_PASS_DEPTH_FAIL", value: 34818, description: " " };
WebGlConstants.STENCIL_BACK_PASS_DEPTH_PASS = { name: "STENCIL_BACK_PASS_DEPTH_PASS", value: 34819, description: " " };
WebGlConstants.STENCIL_BACK_REF = { name: "STENCIL_BACK_REF", value: 36003, description: " " };
WebGlConstants.STENCIL_BACK_VALUE_MASK = { name: "STENCIL_BACK_VALUE_MASK", value: 36004, description: " " };
WebGlConstants.STENCIL_BACK_WRITEMASK = { name: "STENCIL_BACK_WRITEMASK", value: 36005, description: " " };
WebGlConstants.VIEWPORT = { name: "VIEWPORT", value: 2978, description: "Returns an Int32Array with four elements for the current viewport dimensions." };
WebGlConstants.SCISSOR_BOX = { name: "SCISSOR_BOX", value: 3088, description: "Returns an Int32Array with four elements for the current scissor box dimensions." };
WebGlConstants.COLOR_CLEAR_VALUE = { name: "COLOR_CLEAR_VALUE", value: 3106, description: " " };
WebGlConstants.COLOR_WRITEMASK = { name: "COLOR_WRITEMASK", value: 3107, description: " " };
WebGlConstants.UNPACK_ALIGNMENT = { name: "UNPACK_ALIGNMENT", value: 3317, description: " " };
WebGlConstants.PACK_ALIGNMENT = { name: "PACK_ALIGNMENT", value: 3333, description: " " };
WebGlConstants.MAX_TEXTURE_SIZE = { name: "MAX_TEXTURE_SIZE", value: 3379, description: " " };
WebGlConstants.MAX_VIEWPORT_DIMS = { name: "MAX_VIEWPORT_DIMS", value: 3386, description: " " };
WebGlConstants.SUBPIXEL_BITS = { name: "SUBPIXEL_BITS", value: 3408, description: " " };
WebGlConstants.RED_BITS = { name: "RED_BITS", value: 3410, description: " " };
WebGlConstants.GREEN_BITS = { name: "GREEN_BITS", value: 3411, description: " " };
WebGlConstants.BLUE_BITS = { name: "BLUE_BITS", value: 3412, description: " " };
WebGlConstants.ALPHA_BITS = { name: "ALPHA_BITS", value: 3413, description: " " };
WebGlConstants.DEPTH_BITS = { name: "DEPTH_BITS", value: 3414, description: " " };
WebGlConstants.STENCIL_BITS = { name: "STENCIL_BITS", value: 3415, description: " " };
WebGlConstants.POLYGON_OFFSET_UNITS = { name: "POLYGON_OFFSET_UNITS", value: 10752, description: " " };
WebGlConstants.POLYGON_OFFSET_FACTOR = { name: "POLYGON_OFFSET_FACTOR", value: 32824, description: " " };
WebGlConstants.TEXTURE_BINDING_2D = { name: "TEXTURE_BINDING_2D", value: 32873, description: " " };
WebGlConstants.SAMPLE_BUFFERS = { name: "SAMPLE_BUFFERS", value: 32936, description: " " };
WebGlConstants.SAMPLES = { name: "SAMPLES", value: 32937, description: " " };
WebGlConstants.SAMPLE_COVERAGE_VALUE = { name: "SAMPLE_COVERAGE_VALUE", value: 32938, description: " " };
WebGlConstants.SAMPLE_COVERAGE_INVERT = { name: "SAMPLE_COVERAGE_INVERT", value: 32939, description: " " };
WebGlConstants.COMPRESSED_TEXTURE_FORMATS = { name: "COMPRESSED_TEXTURE_FORMATS", value: 34467, description: " " };
WebGlConstants.VENDOR = { name: "VENDOR", value: 7936, description: " " };
WebGlConstants.RENDERER = { name: "RENDERER", value: 7937, description: " " };
WebGlConstants.VERSION = { name: "VERSION", value: 7938, description: " " };
WebGlConstants.IMPLEMENTATION_COLOR_READ_TYPE = { name: "IMPLEMENTATION_COLOR_READ_TYPE", value: 35738, description: " " };
WebGlConstants.IMPLEMENTATION_COLOR_READ_FORMAT = { name: "IMPLEMENTATION_COLOR_READ_FORMAT", value: 35739, description: " " };
WebGlConstants.BROWSER_DEFAULT_WEBGL = { name: "BROWSER_DEFAULT_WEBGL", value: 37444, description: " " };
WebGlConstants.STATIC_DRAW = { name: "STATIC_DRAW", value: 35044, description: "Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often." };
WebGlConstants.STREAM_DRAW = { name: "STREAM_DRAW", value: 35040, description: "Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often." };
WebGlConstants.DYNAMIC_DRAW = { name: "DYNAMIC_DRAW", value: 35048, description: "Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often." };
WebGlConstants.ARRAY_BUFFER = { name: "ARRAY_BUFFER", value: 34962, description: "Passed to bindBuffer or bufferData to specify the type of buffer being used." };
WebGlConstants.ELEMENT_ARRAY_BUFFER = { name: "ELEMENT_ARRAY_BUFFER", value: 34963, description: "Passed to bindBuffer or bufferData to specify the type of buffer being used." };
WebGlConstants.BUFFER_SIZE = { name: "BUFFER_SIZE", value: 34660, description: "Passed to getBufferParameter to get a buffer's size." };
WebGlConstants.BUFFER_USAGE = { name: "BUFFER_USAGE", value: 34661, description: "Passed to getBufferParameter to get the hint for the buffer passed in when it was created." };
WebGlConstants.CURRENT_VERTEX_ATTRIB = { name: "CURRENT_VERTEX_ATTRIB", value: 34342, description: "Passed to getVertexAttrib to read back the current vertex attribute." };
WebGlConstants.VERTEX_ATTRIB_ARRAY_ENABLED = { name: "VERTEX_ATTRIB_ARRAY_ENABLED", value: 34338, description: " " };
WebGlConstants.VERTEX_ATTRIB_ARRAY_SIZE = { name: "VERTEX_ATTRIB_ARRAY_SIZE", value: 34339, description: " " };
WebGlConstants.VERTEX_ATTRIB_ARRAY_STRIDE = { name: "VERTEX_ATTRIB_ARRAY_STRIDE", value: 34340, description: " " };
WebGlConstants.VERTEX_ATTRIB_ARRAY_TYPE = { name: "VERTEX_ATTRIB_ARRAY_TYPE", value: 34341, description: " " };
WebGlConstants.VERTEX_ATTRIB_ARRAY_NORMALIZED = { name: "VERTEX_ATTRIB_ARRAY_NORMALIZED", value: 34922, description: " " };
WebGlConstants.VERTEX_ATTRIB_ARRAY_POINTER = { name: "VERTEX_ATTRIB_ARRAY_POINTER", value: 34373, description: " " };
WebGlConstants.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = { name: "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", value: 34975, description: " " };
WebGlConstants.CULL_FACE = { name: "CULL_FACE", value: 2884, description: "Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method." };
WebGlConstants.FRONT = { name: "FRONT", value: 1028, description: "Passed to cullFace to specify that only front faces should be drawn." };
WebGlConstants.BACK = { name: "BACK", value: 1029, description: "Passed to cullFace to specify that only back faces should be drawn." };
WebGlConstants.FRONT_AND_BACK = { name: "FRONT_AND_BACK", value: 1032, description: "Passed to cullFace to specify that front and back faces should be drawn." };
WebGlConstants.BLEND = { name: "BLEND", value: 3042, description: "Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method." };
WebGlConstants.DEPTH_TEST = { name: "DEPTH_TEST", value: 2929, description: "Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test." };
WebGlConstants.DITHER = { name: "DITHER", value: 3024, description: "Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method." };
WebGlConstants.POLYGON_OFFSET_FILL = { name: "POLYGON_OFFSET_FILL", value: 32823, description: "Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test." };
WebGlConstants.SAMPLE_ALPHA_TO_COVERAGE = { name: "SAMPLE_ALPHA_TO_COVERAGE", value: 32926, description: "Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels." };
WebGlConstants.SAMPLE_COVERAGE = { name: "SAMPLE_COVERAGE", value: 32928, description: "Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling." };
WebGlConstants.SCISSOR_TEST = { name: "SCISSOR_TEST", value: 3089, description: "Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test." };
WebGlConstants.STENCIL_TEST = { name: "STENCIL_TEST", value: 2960, description: "Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test." };
WebGlConstants.NO_ERROR = { name: "NO_ERROR", value: 0, description: "Returned from getError." };
WebGlConstants.INVALID_ENUM = { name: "INVALID_ENUM", value: 1280, description: "Returned from getError." };
WebGlConstants.INVALID_VALUE = { name: "INVALID_VALUE", value: 1281, description: "Returned from getError." };
WebGlConstants.INVALID_OPERATION = { name: "INVALID_OPERATION", value: 1282, description: "Returned from getError." };
WebGlConstants.OUT_OF_MEMORY = { name: "OUT_OF_MEMORY", value: 1285, description: "Returned from getError." };
WebGlConstants.CONTEXT_LOST_WEBGL = { name: "CONTEXT_LOST_WEBGL", value: 37442, description: "Returned from getError." };
WebGlConstants.CW = { name: "CW", value: 2304, description: "Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction" };
WebGlConstants.CCW = { name: "CCW", value: 2305, description: "Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction" };
WebGlConstants.DONT_CARE = { name: "DONT_CARE", value: 4352, description: "There is no preference for this behavior." };
WebGlConstants.FASTEST = { name: "FASTEST", value: 4353, description: "The most efficient behavior should be used." };
WebGlConstants.NICEST = { name: "NICEST", value: 4354, description: "The most correct or the highest quality option should be used." };
WebGlConstants.GENERATE_MIPMAP_HINT = { name: "GENERATE_MIPMAP_HINT", value: 33170, description: "Hint for the quality of filtering when generating mipmap images with WebGLRenderingContext.generateMipmap()." };
WebGlConstants.BYTE = { name: "BYTE", value: 5120, description: " " };
WebGlConstants.UNSIGNED_BYTE = { name: "UNSIGNED_BYTE", value: 5121, description: " " };
WebGlConstants.SHORT = { name: "SHORT", value: 5122, description: " " };
WebGlConstants.UNSIGNED_SHORT = { name: "UNSIGNED_SHORT", value: 5123, description: " " };
WebGlConstants.INT = { name: "INT", value: 5124, description: " " };
WebGlConstants.UNSIGNED_INT = { name: "UNSIGNED_INT", value: 5125, description: " " };
WebGlConstants.FLOAT = { name: "FLOAT", value: 5126, description: " " };
WebGlConstants.DEPTH_COMPONENT = { name: "DEPTH_COMPONENT", value: 6402, description: " " };
WebGlConstants.ALPHA = { name: "ALPHA", value: 6406, description: " " };
WebGlConstants.RGB = { name: "RGB", value: 6407, description: " " };
WebGlConstants.RGBA = { name: "RGBA", value: 6408, description: " " };
WebGlConstants.LUMINANCE = { name: "LUMINANCE", value: 6409, description: " " };
WebGlConstants.LUMINANCE_ALPHA = { name: "LUMINANCE_ALPHA", value: 6410, description: " " };
WebGlConstants.UNSIGNED_SHORT_4_4_4_4 = { name: "UNSIGNED_SHORT_4_4_4_4", value: 32819, description: " " };
WebGlConstants.UNSIGNED_SHORT_5_5_5_1 = { name: "UNSIGNED_SHORT_5_5_5_1", value: 32820, description: " " };
WebGlConstants.UNSIGNED_SHORT_5_6_5 = { name: "UNSIGNED_SHORT_5_6_5", value: 33635, description: " " };
WebGlConstants.FRAGMENT_SHADER = { name: "FRAGMENT_SHADER", value: 35632, description: "Passed to createShader to define a fragment shader." };
WebGlConstants.VERTEX_SHADER = { name: "VERTEX_SHADER", value: 35633, description: "Passed to createShader to define a vertex shader" };
WebGlConstants.COMPILE_STATUS = { name: "COMPILE_STATUS", value: 35713, description: "Passed to getShaderParamter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error" };
WebGlConstants.DELETE_STATUS = { name: "DELETE_STATUS", value: 35712, description: "Passed to getShaderParamter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise." };
WebGlConstants.LINK_STATUS = { name: "LINK_STATUS", value: 35714, description: "Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error." };
WebGlConstants.VALIDATE_STATUS = { name: "VALIDATE_STATUS", value: 35715, description: "Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found." };
WebGlConstants.ATTACHED_SHADERS = { name: "ATTACHED_SHADERS", value: 35717, description: "Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred." };
WebGlConstants.ACTIVE_ATTRIBUTES = { name: "ACTIVE_ATTRIBUTES", value: 35721, description: "Passed to getProgramParameter to get the number of attributes active in a program." };
WebGlConstants.ACTIVE_UNIFORMS = { name: "ACTIVE_UNIFORMS", value: 35718, description: "Passed to getProgramParamter to get the number of uniforms active in a program." };
WebGlConstants.MAX_VERTEX_ATTRIBS = { name: "MAX_VERTEX_ATTRIBS", value: 34921, description: " " };
WebGlConstants.MAX_VERTEX_UNIFORM_VECTORS = { name: "MAX_VERTEX_UNIFORM_VECTORS", value: 36347, description: " " };
WebGlConstants.MAX_VARYING_VECTORS = { name: "MAX_VARYING_VECTORS", value: 36348, description: " " };
WebGlConstants.MAX_COMBINED_TEXTURE_IMAGE_UNITS = { name: "MAX_COMBINED_TEXTURE_IMAGE_UNITS", value: 35661, description: " " };
WebGlConstants.MAX_VERTEX_TEXTURE_IMAGE_UNITS = { name: "MAX_VERTEX_TEXTURE_IMAGE_UNITS", value: 35660, description: " " };
WebGlConstants.MAX_TEXTURE_IMAGE_UNITS = { name: "MAX_TEXTURE_IMAGE_UNITS", value: 34930, description: "Implementation dependent number of maximum texture units. At least 8." };
WebGlConstants.MAX_FRAGMENT_UNIFORM_VECTORS = { name: "MAX_FRAGMENT_UNIFORM_VECTORS", value: 36349, description: " " };
WebGlConstants.SHADER_TYPE = { name: "SHADER_TYPE", value: 35663, description: " " };
WebGlConstants.SHADING_LANGUAGE_VERSION = { name: "SHADING_LANGUAGE_VERSION", value: 35724, description: " " };
WebGlConstants.CURRENT_PROGRAM = { name: "CURRENT_PROGRAM", value: 35725, description: " " };
WebGlConstants.NEVER = { name: "NEVER", value: 512, description: "Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn." };
WebGlConstants.ALWAYS = { name: "ALWAYS", value: 519, description: "Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn." };
WebGlConstants.LESS = { name: "LESS", value: 513, description: "Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value." };
WebGlConstants.EQUAL = { name: "EQUAL", value: 514, description: "Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value." };
WebGlConstants.LEQUAL = { name: "LEQUAL", value: 515, description: "Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value." };
WebGlConstants.GREATER = { name: "GREATER", value: 516, description: "Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value." };
WebGlConstants.GEQUAL = { name: "GEQUAL", value: 518, description: "Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value." };
WebGlConstants.NOTEQUAL = { name: "NOTEQUAL", value: 517, description: "Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value." };
WebGlConstants.KEEP = { name: "KEEP", value: 7680, description: " " };
WebGlConstants.REPLACE = { name: "REPLACE", value: 7681, description: " " };
WebGlConstants.INCR = { name: "INCR", value: 7682, description: " " };
WebGlConstants.DECR = { name: "DECR", value: 7683, description: " " };
WebGlConstants.INVERT = { name: "INVERT", value: 5386, description: " " };
WebGlConstants.INCR_WRAP = { name: "INCR_WRAP", value: 34055, description: " " };
WebGlConstants.DECR_WRAP = { name: "DECR_WRAP", value: 34056, description: " " };
WebGlConstants.NEAREST = { name: "NEAREST", value: 9728, description: " " };
WebGlConstants.LINEAR = { name: "LINEAR", value: 9729, description: " " };
WebGlConstants.NEAREST_MIPMAP_NEAREST = { name: "NEAREST_MIPMAP_NEAREST", value: 9984, description: " " };
WebGlConstants.LINEAR_MIPMAP_NEAREST = { name: "LINEAR_MIPMAP_NEAREST", value: 9985, description: " " };
WebGlConstants.NEAREST_MIPMAP_LINEAR = { name: "NEAREST_MIPMAP_LINEAR", value: 9986, description: " " };
WebGlConstants.LINEAR_MIPMAP_LINEAR = { name: "LINEAR_MIPMAP_LINEAR", value: 9987, description: " " };
WebGlConstants.TEXTURE_MAG_FILTER = { name: "TEXTURE_MAG_FILTER", value: 10240, description: " " };
WebGlConstants.TEXTURE_MIN_FILTER = { name: "TEXTURE_MIN_FILTER", value: 10241, description: " " };
WebGlConstants.TEXTURE_WRAP_S = { name: "TEXTURE_WRAP_S", value: 10242, description: " " };
WebGlConstants.TEXTURE_WRAP_T = { name: "TEXTURE_WRAP_T", value: 10243, description: " " };
WebGlConstants.TEXTURE_2D = { name: "TEXTURE_2D", value: 3553, description: " " };
WebGlConstants.TEXTURE = { name: "TEXTURE", value: 5890, description: " " };
WebGlConstants.TEXTURE_CUBE_MAP = { name: "TEXTURE_CUBE_MAP", value: 34067, description: " " };
WebGlConstants.TEXTURE_BINDING_CUBE_MAP = { name: "TEXTURE_BINDING_CUBE_MAP", value: 34068, description: " " };
WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_X = { name: "TEXTURE_CUBE_MAP_POSITIVE_X", value: 34069, description: " " };
WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_X = { name: "TEXTURE_CUBE_MAP_NEGATIVE_X", value: 34070, description: " " };
WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_Y = { name: "TEXTURE_CUBE_MAP_POSITIVE_Y", value: 34071, description: " " };
WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_Y = { name: "TEXTURE_CUBE_MAP_NEGATIVE_Y", value: 34072, description: " " };
WebGlConstants.TEXTURE_CUBE_MAP_POSITIVE_Z = { name: "TEXTURE_CUBE_MAP_POSITIVE_Z", value: 34073, description: " " };
WebGlConstants.TEXTURE_CUBE_MAP_NEGATIVE_Z = { name: "TEXTURE_CUBE_MAP_NEGATIVE_Z", value: 34074, description: " " };
WebGlConstants.MAX_CUBE_MAP_TEXTURE_SIZE = { name: "MAX_CUBE_MAP_TEXTURE_SIZE", value: 34076, description: " " };
WebGlConstants.TEXTURE0 = { name: "TEXTURE0", value: 33984, description: "A texture unit." };
WebGlConstants.TEXTURE1 = { name: "TEXTURE1", value: 33985, description: "A texture unit." };
WebGlConstants.TEXTURE2 = { name: "TEXTURE2", value: 33986, description: "A texture unit." };
WebGlConstants.TEXTURE3 = { name: "TEXTURE3", value: 33987, description: "A texture unit." };
WebGlConstants.TEXTURE4 = { name: "TEXTURE4", value: 33988, description: "A texture unit." };
WebGlConstants.TEXTURE5 = { name: "TEXTURE5", value: 33989, description: "A texture unit." };
WebGlConstants.TEXTURE6 = { name: "TEXTURE6", value: 33990, description: "A texture unit." };
WebGlConstants.TEXTURE7 = { name: "TEXTURE7", value: 33991, description: "A texture unit." };
WebGlConstants.TEXTURE8 = { name: "TEXTURE8", value: 33992, description: "A texture unit." };
WebGlConstants.TEXTURE9 = { name: "TEXTURE9", value: 33993, description: "A texture unit." };
WebGlConstants.TEXTURE10 = { name: "TEXTURE10", value: 33994, description: "A texture unit." };
WebGlConstants.TEXTURE11 = { name: "TEXTURE11", value: 33995, description: "A texture unit." };
WebGlConstants.TEXTURE12 = { name: "TEXTURE12", value: 33996, description: "A texture unit." };
WebGlConstants.TEXTURE13 = { name: "TEXTURE13", value: 33997, description: "A texture unit." };
WebGlConstants.TEXTURE14 = { name: "TEXTURE14", value: 33998, description: "A texture unit." };
WebGlConstants.TEXTURE15 = { name: "TEXTURE15", value: 33999, description: "A texture unit." };
WebGlConstants.TEXTURE16 = { name: "TEXTURE16", value: 34000, description: "A texture unit." };
WebGlConstants.TEXTURE17 = { name: "TEXTURE17", value: 34001, description: "A texture unit." };
WebGlConstants.TEXTURE18 = { name: "TEXTURE18", value: 34002, description: "A texture unit." };
WebGlConstants.TEXTURE19 = { name: "TEXTURE19", value: 34003, description: "A texture unit." };
WebGlConstants.TEXTURE20 = { name: "TEXTURE20", value: 34004, description: "A texture unit." };
WebGlConstants.TEXTURE21 = { name: "TEXTURE21", value: 34005, description: "A texture unit." };
WebGlConstants.TEXTURE22 = { name: "TEXTURE22", value: 34006, description: "A texture unit." };
WebGlConstants.TEXTURE23 = { name: "TEXTURE23", value: 34007, description: "A texture unit." };
WebGlConstants.TEXTURE24 = { name: "TEXTURE24", value: 34008, description: "A texture unit." };
WebGlConstants.TEXTURE25 = { name: "TEXTURE25", value: 34009, description: "A texture unit." };
WebGlConstants.TEXTURE26 = { name: "TEXTURE26", value: 34010, description: "A texture unit." };
WebGlConstants.TEXTURE27 = { name: "TEXTURE27", value: 34011, description: "A texture unit." };
WebGlConstants.TEXTURE28 = { name: "TEXTURE28", value: 34012, description: "A texture unit." };
WebGlConstants.TEXTURE29 = { name: "TEXTURE29", value: 34013, description: "A texture unit." };
WebGlConstants.TEXTURE30 = { name: "TEXTURE30", value: 34014, description: "A texture unit." };
WebGlConstants.TEXTURE31 = { name: "TEXTURE31", value: 34015, description: "A texture unit." };
WebGlConstants.ACTIVE_TEXTURE = { name: "ACTIVE_TEXTURE", value: 34016, description: "The current active texture unit." };
WebGlConstants.REPEAT = { name: "REPEAT", value: 10497, description: " " };
WebGlConstants.CLAMP_TO_EDGE = { name: "CLAMP_TO_EDGE", value: 33071, description: " " };
WebGlConstants.MIRRORED_REPEAT = { name: "MIRRORED_REPEAT", value: 33648, description: " " };
WebGlConstants.FLOAT_VEC2 = { name: "FLOAT_VEC2", value: 35664, description: " " };
WebGlConstants.FLOAT_VEC3 = { name: "FLOAT_VEC3", value: 35665, description: " " };
WebGlConstants.FLOAT_VEC4 = { name: "FLOAT_VEC4", value: 35666, description: " " };
WebGlConstants.INT_VEC2 = { name: "INT_VEC2", value: 35667, description: " " };
WebGlConstants.INT_VEC3 = { name: "INT_VEC3", value: 35668, description: " " };
WebGlConstants.INT_VEC4 = { name: "INT_VEC4", value: 35669, description: " " };
WebGlConstants.BOOL = { name: "BOOL", value: 35670, description: " " };
WebGlConstants.BOOL_VEC2 = { name: "BOOL_VEC2", value: 35671, description: " " };
WebGlConstants.BOOL_VEC3 = { name: "BOOL_VEC3", value: 35672, description: " " };
WebGlConstants.BOOL_VEC4 = { name: "BOOL_VEC4", value: 35673, description: " " };
WebGlConstants.FLOAT_MAT2 = { name: "FLOAT_MAT2", value: 35674, description: " " };
WebGlConstants.FLOAT_MAT3 = { name: "FLOAT_MAT3", value: 35675, description: " " };
WebGlConstants.FLOAT_MAT4 = { name: "FLOAT_MAT4", value: 35676, description: " " };
WebGlConstants.SAMPLER_2D = { name: "SAMPLER_2D", value: 35678, description: " " };
WebGlConstants.SAMPLER_CUBE = { name: "SAMPLER_CUBE", value: 35680, description: " " };
WebGlConstants.LOW_FLOAT = { name: "LOW_FLOAT", value: 36336, description: " " };
WebGlConstants.MEDIUM_FLOAT = { name: "MEDIUM_FLOAT", value: 36337, description: " " };
WebGlConstants.HIGH_FLOAT = { name: "HIGH_FLOAT", value: 36338, description: " " };
WebGlConstants.LOW_INT = { name: "LOW_INT", value: 36339, description: " " };
WebGlConstants.MEDIUM_INT = { name: "MEDIUM_INT", value: 36340, description: " " };
WebGlConstants.HIGH_INT = { name: "HIGH_INT", value: 36341, description: " " };
WebGlConstants.FRAMEBUFFER = { name: "FRAMEBUFFER", value: 36160, description: " " };
WebGlConstants.RENDERBUFFER = { name: "RENDERBUFFER", value: 36161, description: " " };
WebGlConstants.RGBA4 = { name: "RGBA4", value: 32854, description: " " };
WebGlConstants.RGB5_A1 = { name: "RGB5_A1", value: 32855, description: " " };
WebGlConstants.RGB565 = { name: "RGB565", value: 36194, description: " " };
WebGlConstants.DEPTH_COMPONENT16 = { name: "DEPTH_COMPONENT16", value: 33189, description: " " };
WebGlConstants.STENCIL_INDEX = { name: "STENCIL_INDEX", value: 6401, description: " " };
WebGlConstants.STENCIL_INDEX8 = { name: "STENCIL_INDEX8", value: 36168, description: " " };
WebGlConstants.DEPTH_STENCIL = { name: "DEPTH_STENCIL", value: 34041, description: " " };
WebGlConstants.RENDERBUFFER_WIDTH = { name: "RENDERBUFFER_WIDTH", value: 36162, description: " " };
WebGlConstants.RENDERBUFFER_HEIGHT = { name: "RENDERBUFFER_HEIGHT", value: 36163, description: " " };
WebGlConstants.RENDERBUFFER_INTERNAL_FORMAT = { name: "RENDERBUFFER_INTERNAL_FORMAT", value: 36164, description: " " };
WebGlConstants.RENDERBUFFER_RED_SIZE = { name: "RENDERBUFFER_RED_SIZE", value: 36176, description: " " };
WebGlConstants.RENDERBUFFER_GREEN_SIZE = { name: "RENDERBUFFER_GREEN_SIZE", value: 36177, description: " " };
WebGlConstants.RENDERBUFFER_BLUE_SIZE = { name: "RENDERBUFFER_BLUE_SIZE", value: 36178, description: " " };
WebGlConstants.RENDERBUFFER_ALPHA_SIZE = { name: "RENDERBUFFER_ALPHA_SIZE", value: 36179, description: " " };
WebGlConstants.RENDERBUFFER_DEPTH_SIZE = { name: "RENDERBUFFER_DEPTH_SIZE", value: 36180, description: " " };
WebGlConstants.RENDERBUFFER_STENCIL_SIZE = { name: "RENDERBUFFER_STENCIL_SIZE", value: 36181, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = { name: "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", value: 36048, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = { name: "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", value: 36049, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = { name: "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", value: 36050, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = { name: "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", value: 36051, description: " " };
WebGlConstants.COLOR_ATTACHMENT0 = { name: "COLOR_ATTACHMENT0", value: 36064, description: " " };
WebGlConstants.DEPTH_ATTACHMENT = { name: "DEPTH_ATTACHMENT", value: 36096, description: " " };
WebGlConstants.STENCIL_ATTACHMENT = { name: "STENCIL_ATTACHMENT", value: 36128, description: " " };
WebGlConstants.DEPTH_STENCIL_ATTACHMENT = { name: "DEPTH_STENCIL_ATTACHMENT", value: 33306, description: " " };
WebGlConstants.NONE = { name: "NONE", value: 0, description: " " };
WebGlConstants.FRAMEBUFFER_COMPLETE = { name: "FRAMEBUFFER_COMPLETE", value: 36053, description: " " };
WebGlConstants.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = { name: "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", value: 36054, description: " " };
WebGlConstants.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = { name: "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", value: 36055, description: " " };
WebGlConstants.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = { name: "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", value: 36057, description: " " };
WebGlConstants.FRAMEBUFFER_UNSUPPORTED = { name: "FRAMEBUFFER_UNSUPPORTED", value: 36061, description: " " };
WebGlConstants.FRAMEBUFFER_BINDING = { name: "FRAMEBUFFER_BINDING", value: 36006, description: " " };
WebGlConstants.RENDERBUFFER_BINDING = { name: "RENDERBUFFER_BINDING", value: 36007, description: " " };
WebGlConstants.MAX_RENDERBUFFER_SIZE = { name: "MAX_RENDERBUFFER_SIZE", value: 34024, description: " " };
WebGlConstants.INVALID_FRAMEBUFFER_OPERATION = { name: "INVALID_FRAMEBUFFER_OPERATION", value: 1286, description: " " };
WebGlConstants.UNPACK_FLIP_Y_WEBGL = { name: "UNPACK_FLIP_Y_WEBGL", value: 37440, description: " " };
WebGlConstants.UNPACK_PREMULTIPLY_ALPHA_WEBGL = { name: "UNPACK_PREMULTIPLY_ALPHA_WEBGL", value: 37441, description: " " };
WebGlConstants.UNPACK_COLORSPACE_CONVERSION_WEBGL = { name: "UNPACK_COLORSPACE_CONVERSION_WEBGL", value: 37443, description: " " };
WebGlConstants.READ_BUFFER = { name: "READ_BUFFER", value: 3074, description: " " };
WebGlConstants.UNPACK_ROW_LENGTH = { name: "UNPACK_ROW_LENGTH", value: 3314, description: " " };
WebGlConstants.UNPACK_SKIP_ROWS = { name: "UNPACK_SKIP_ROWS", value: 3315, description: " " };
WebGlConstants.UNPACK_SKIP_PIXELS = { name: "UNPACK_SKIP_PIXELS", value: 3316, description: " " };
WebGlConstants.PACK_ROW_LENGTH = { name: "PACK_ROW_LENGTH", value: 3330, description: " " };
WebGlConstants.PACK_SKIP_ROWS = { name: "PACK_SKIP_ROWS", value: 3331, description: " " };
WebGlConstants.PACK_SKIP_PIXELS = { name: "PACK_SKIP_PIXELS", value: 3332, description: " " };
WebGlConstants.TEXTURE_BINDING_3D = { name: "TEXTURE_BINDING_3D", value: 32874, description: " " };
WebGlConstants.UNPACK_SKIP_IMAGES = { name: "UNPACK_SKIP_IMAGES", value: 32877, description: " " };
WebGlConstants.UNPACK_IMAGE_HEIGHT = { name: "UNPACK_IMAGE_HEIGHT", value: 32878, description: " " };
WebGlConstants.MAX_3D_TEXTURE_SIZE = { name: "MAX_3D_TEXTURE_SIZE", value: 32883, description: " " };
WebGlConstants.MAX_ELEMENTS_VERTICES = { name: "MAX_ELEMENTS_VERTICES", value: 33000, description: " " };
WebGlConstants.MAX_ELEMENTS_INDICES = { name: "MAX_ELEMENTS_INDICES", value: 33001, description: " " };
WebGlConstants.MAX_TEXTURE_LOD_BIAS = { name: "MAX_TEXTURE_LOD_BIAS", value: 34045, description: " " };
WebGlConstants.MAX_FRAGMENT_UNIFORM_COMPONENTS = { name: "MAX_FRAGMENT_UNIFORM_COMPONENTS", value: 35657, description: " " };
WebGlConstants.MAX_VERTEX_UNIFORM_COMPONENTS = { name: "MAX_VERTEX_UNIFORM_COMPONENTS", value: 35658, description: " " };
WebGlConstants.MAX_ARRAY_TEXTURE_LAYERS = { name: "MAX_ARRAY_TEXTURE_LAYERS", value: 35071, description: " " };
WebGlConstants.MIN_PROGRAM_TEXEL_OFFSET = { name: "MIN_PROGRAM_TEXEL_OFFSET", value: 35076, description: " " };
WebGlConstants.MAX_PROGRAM_TEXEL_OFFSET = { name: "MAX_PROGRAM_TEXEL_OFFSET", value: 35077, description: " " };
WebGlConstants.MAX_VARYING_COMPONENTS = { name: "MAX_VARYING_COMPONENTS", value: 35659, description: " " };
WebGlConstants.FRAGMENT_SHADER_DERIVATIVE_HINT = { name: "FRAGMENT_SHADER_DERIVATIVE_HINT", value: 35723, description: " " };
WebGlConstants.RASTERIZER_DISCARD = { name: "RASTERIZER_DISCARD", value: 35977, description: " " };
WebGlConstants.VERTEX_ARRAY_BINDING = { name: "VERTEX_ARRAY_BINDING", value: 34229, description: " " };
WebGlConstants.MAX_VERTEX_OUTPUT_COMPONENTS = { name: "MAX_VERTEX_OUTPUT_COMPONENTS", value: 37154, description: " " };
WebGlConstants.MAX_FRAGMENT_INPUT_COMPONENTS = { name: "MAX_FRAGMENT_INPUT_COMPONENTS", value: 37157, description: " " };
WebGlConstants.MAX_SERVER_WAIT_TIMEOUT = { name: "MAX_SERVER_WAIT_TIMEOUT", value: 37137, description: " " };
WebGlConstants.MAX_ELEMENT_INDEX = { name: "MAX_ELEMENT_INDEX", value: 36203, description: " " };
WebGlConstants.RED = { name: "RED", value: 6403, description: " " };
WebGlConstants.RGB8 = { name: "RGB8", value: 32849, description: " " };
WebGlConstants.RGBA8 = { name: "RGBA8", value: 32856, description: " " };
WebGlConstants.RGB10_A2 = { name: "RGB10_A2", value: 32857, description: " " };
WebGlConstants.TEXTURE_3D = { name: "TEXTURE_3D", value: 32879, description: " " };
WebGlConstants.TEXTURE_WRAP_R = { name: "TEXTURE_WRAP_R", value: 32882, description: " " };
WebGlConstants.TEXTURE_MIN_LOD = { name: "TEXTURE_MIN_LOD", value: 33082, description: " " };
WebGlConstants.TEXTURE_MAX_LOD = { name: "TEXTURE_MAX_LOD", value: 33083, description: " " };
WebGlConstants.TEXTURE_BASE_LEVEL = { name: "TEXTURE_BASE_LEVEL", value: 33084, description: " " };
WebGlConstants.TEXTURE_MAX_LEVEL = { name: "TEXTURE_MAX_LEVEL", value: 33085, description: " " };
WebGlConstants.TEXTURE_COMPARE_MODE = { name: "TEXTURE_COMPARE_MODE", value: 34892, description: " " };
WebGlConstants.TEXTURE_COMPARE_FUNC = { name: "TEXTURE_COMPARE_FUNC", value: 34893, description: " " };
WebGlConstants.SRGB = { name: "SRGB", value: 35904, description: " " };
WebGlConstants.SRGB8 = { name: "SRGB8", value: 35905, description: " " };
WebGlConstants.SRGB8_ALPHA8 = { name: "SRGB8_ALPHA8", value: 35907, description: " " };
WebGlConstants.COMPARE_REF_TO_TEXTURE = { name: "COMPARE_REF_TO_TEXTURE", value: 34894, description: " " };
WebGlConstants.RGBA32F = { name: "RGBA32F", value: 34836, description: " " };
WebGlConstants.RGB32F = { name: "RGB32F", value: 34837, description: " " };
WebGlConstants.RGBA16F = { name: "RGBA16F", value: 34842, description: " " };
WebGlConstants.RGB16F = { name: "RGB16F", value: 34843, description: " " };
WebGlConstants.TEXTURE_2D_ARRAY = { name: "TEXTURE_2D_ARRAY", value: 35866, description: " " };
WebGlConstants.TEXTURE_BINDING_2D_ARRAY = { name: "TEXTURE_BINDING_2D_ARRAY", value: 35869, description: " " };
WebGlConstants.R11F_G11F_B10F = { name: "R11F_G11F_B10F", value: 35898, description: " " };
WebGlConstants.RGB9_E5 = { name: "RGB9_E5", value: 35901, description: " " };
WebGlConstants.RGBA32UI = { name: "RGBA32UI", value: 36208, description: " " };
WebGlConstants.RGB32UI = { name: "RGB32UI", value: 36209, description: " " };
WebGlConstants.RGBA16UI = { name: "RGBA16UI", value: 36214, description: " " };
WebGlConstants.RGB16UI = { name: "RGB16UI", value: 36215, description: " " };
WebGlConstants.RGBA8UI = { name: "RGBA8UI", value: 36220, description: " " };
WebGlConstants.RGB8UI = { name: "RGB8UI", value: 36221, description: " " };
WebGlConstants.RGBA32I = { name: "RGBA32I", value: 36226, description: " " };
WebGlConstants.RGB32I = { name: "RGB32I", value: 36227, description: " " };
WebGlConstants.RGBA16I = { name: "RGBA16I", value: 36232, description: " " };
WebGlConstants.RGB16I = { name: "RGB16I", value: 36233, description: " " };
WebGlConstants.RGBA8I = { name: "RGBA8I", value: 36238, description: " " };
WebGlConstants.RGB8I = { name: "RGB8I", value: 36239, description: " " };
WebGlConstants.RED_INTEGER = { name: "RED_INTEGER", value: 36244, description: " " };
WebGlConstants.RGB_INTEGER = { name: "RGB_INTEGER", value: 36248, description: " " };
WebGlConstants.RGBA_INTEGER = { name: "RGBA_INTEGER", value: 36249, description: " " };
WebGlConstants.R8 = { name: "R8", value: 33321, description: " " };
WebGlConstants.RG8 = { name: "RG8", value: 33323, description: " " };
WebGlConstants.R16F = { name: "R16F", value: 33325, description: " " };
WebGlConstants.R32F = { name: "R32F", value: 33326, description: " " };
WebGlConstants.RG16F = { name: "RG16F", value: 33327, description: " " };
WebGlConstants.RG32F = { name: "RG32F", value: 33328, description: " " };
WebGlConstants.R8I = { name: "R8I", value: 33329, description: " " };
WebGlConstants.R8UI = { name: "R8UI", value: 33330, description: " " };
WebGlConstants.R16I = { name: "R16I", value: 33331, description: " " };
WebGlConstants.R16UI = { name: "R16UI", value: 33332, description: " " };
WebGlConstants.R32I = { name: "R32I", value: 33333, description: " " };
WebGlConstants.R32UI = { name: "R32UI", value: 33334, description: " " };
WebGlConstants.RG8I = { name: "RG8I", value: 33335, description: " " };
WebGlConstants.RG8UI = { name: "RG8UI", value: 33336, description: " " };
WebGlConstants.RG16I = { name: "RG16I", value: 33337, description: " " };
WebGlConstants.RG16UI = { name: "RG16UI", value: 33338, description: " " };
WebGlConstants.RG32I = { name: "RG32I", value: 33339, description: " " };
WebGlConstants.RG32UI = { name: "RG32UI", value: 33340, description: " " };
WebGlConstants.R8_SNORM = { name: "R8_SNORM", value: 36756, description: " " };
WebGlConstants.RG8_SNORM = { name: "RG8_SNORM", value: 36757, description: " " };
WebGlConstants.RGB8_SNORM = { name: "RGB8_SNORM", value: 36758, description: " " };
WebGlConstants.RGBA8_SNORM = { name: "RGBA8_SNORM", value: 36759, description: " " };
WebGlConstants.RGB10_A2UI = { name: "RGB10_A2UI", value: 36975, description: " " };
WebGlConstants.TEXTURE_IMMUTABLE_FORMAT = { name: "TEXTURE_IMMUTABLE_FORMAT", value: 37167, description: " " };
WebGlConstants.TEXTURE_IMMUTABLE_LEVELS = { name: "TEXTURE_IMMUTABLE_LEVELS", value: 33503, description: " " };
WebGlConstants.UNSIGNED_INT_2_10_10_10_REV = { name: "UNSIGNED_INT_2_10_10_10_REV", value: 33640, description: " " };
WebGlConstants.UNSIGNED_INT_10F_11F_11F_REV = { name: "UNSIGNED_INT_10F_11F_11F_REV", value: 35899, description: " " };
WebGlConstants.UNSIGNED_INT_5_9_9_9_REV = { name: "UNSIGNED_INT_5_9_9_9_REV", value: 35902, description: " " };
WebGlConstants.FLOAT_32_UNSIGNED_INT_24_8_REV = { name: "FLOAT_32_UNSIGNED_INT_24_8_REV", value: 36269, description: " " };
WebGlConstants.UNSIGNED_INT_24_8 = { name: "UNSIGNED_INT_24_8", value: 34042, description: " " };
WebGlConstants.HALF_FLOAT = { name: "HALF_FLOAT", value: 5131, description: " " };
WebGlConstants.RG = { name: "RG", value: 33319, description: " " };
WebGlConstants.RG_INTEGER = { name: "RG_INTEGER", value: 33320, description: " " };
WebGlConstants.INT_2_10_10_10_REV = { name: "INT_2_10_10_10_REV", value: 36255, description: " " };
WebGlConstants.CURRENT_QUERY = { name: "CURRENT_QUERY", value: 34917, description: " " };
WebGlConstants.QUERY_RESULT = { name: "QUERY_RESULT", value: 34918, description: " " };
WebGlConstants.QUERY_RESULT_AVAILABLE = { name: "QUERY_RESULT_AVAILABLE", value: 34919, description: " " };
WebGlConstants.ANY_SAMPLES_PASSED = { name: "ANY_SAMPLES_PASSED", value: 35887, description: " " };
WebGlConstants.ANY_SAMPLES_PASSED_CONSERVATIVE = { name: "ANY_SAMPLES_PASSED_CONSERVATIVE", value: 36202, description: " " };
WebGlConstants.MAX_DRAW_BUFFERS = { name: "MAX_DRAW_BUFFERS", value: 34852, description: " " };
WebGlConstants.DRAW_BUFFER0 = { name: "DRAW_BUFFER0", value: 34853, description: " " };
WebGlConstants.DRAW_BUFFER1 = { name: "DRAW_BUFFER1", value: 34854, description: " " };
WebGlConstants.DRAW_BUFFER2 = { name: "DRAW_BUFFER2", value: 34855, description: " " };
WebGlConstants.DRAW_BUFFER3 = { name: "DRAW_BUFFER3", value: 34856, description: " " };
WebGlConstants.DRAW_BUFFER4 = { name: "DRAW_BUFFER4", value: 34857, description: " " };
WebGlConstants.DRAW_BUFFER5 = { name: "DRAW_BUFFER5", value: 34858, description: " " };
WebGlConstants.DRAW_BUFFER6 = { name: "DRAW_BUFFER6", value: 34859, description: " " };
WebGlConstants.DRAW_BUFFER7 = { name: "DRAW_BUFFER7", value: 34860, description: " " };
WebGlConstants.DRAW_BUFFER8 = { name: "DRAW_BUFFER8", value: 34861, description: " " };
WebGlConstants.DRAW_BUFFER9 = { name: "DRAW_BUFFER9", value: 34862, description: " " };
WebGlConstants.DRAW_BUFFER10 = { name: "DRAW_BUFFER10", value: 34863, description: " " };
WebGlConstants.DRAW_BUFFER11 = { name: "DRAW_BUFFER11", value: 34864, description: " " };
WebGlConstants.DRAW_BUFFER12 = { name: "DRAW_BUFFER12", value: 34865, description: " " };
WebGlConstants.DRAW_BUFFER13 = { name: "DRAW_BUFFER13", value: 34866, description: " " };
WebGlConstants.DRAW_BUFFER14 = { name: "DRAW_BUFFER14", value: 34867, description: " " };
WebGlConstants.DRAW_BUFFER15 = { name: "DRAW_BUFFER15", value: 34868, description: " " };
WebGlConstants.MAX_COLOR_ATTACHMENTS = { name: "MAX_COLOR_ATTACHMENTS", value: 36063, description: " " };
WebGlConstants.COLOR_ATTACHMENT1 = { name: "COLOR_ATTACHMENT1", value: 36065, description: " " };
WebGlConstants.COLOR_ATTACHMENT2 = { name: "COLOR_ATTACHMENT2", value: 36066, description: " " };
WebGlConstants.COLOR_ATTACHMENT3 = { name: "COLOR_ATTACHMENT3", value: 36067, description: " " };
WebGlConstants.COLOR_ATTACHMENT4 = { name: "COLOR_ATTACHMENT4", value: 36068, description: " " };
WebGlConstants.COLOR_ATTACHMENT5 = { name: "COLOR_ATTACHMENT5", value: 36069, description: " " };
WebGlConstants.COLOR_ATTACHMENT6 = { name: "COLOR_ATTACHMENT6", value: 36070, description: " " };
WebGlConstants.COLOR_ATTACHMENT7 = { name: "COLOR_ATTACHMENT7", value: 36071, description: " " };
WebGlConstants.COLOR_ATTACHMENT8 = { name: "COLOR_ATTACHMENT8", value: 36072, description: " " };
WebGlConstants.COLOR_ATTACHMENT9 = { name: "COLOR_ATTACHMENT9", value: 36073, description: " " };
WebGlConstants.COLOR_ATTACHMENT10 = { name: "COLOR_ATTACHMENT10", value: 36074, description: " " };
WebGlConstants.COLOR_ATTACHMENT11 = { name: "COLOR_ATTACHMENT11", value: 36075, description: " " };
WebGlConstants.COLOR_ATTACHMENT12 = { name: "COLOR_ATTACHMENT12", value: 36076, description: " " };
WebGlConstants.COLOR_ATTACHMENT13 = { name: "COLOR_ATTACHMENT13", value: 36077, description: " " };
WebGlConstants.COLOR_ATTACHMENT14 = { name: "COLOR_ATTACHMENT14", value: 36078, description: " " };
WebGlConstants.COLOR_ATTACHMENT15 = { name: "COLOR_ATTACHMENT15", value: 36079, description: " " };
WebGlConstants.SAMPLER_3D = { name: "SAMPLER_3D", value: 35679, description: " " };
WebGlConstants.SAMPLER_2D_SHADOW = { name: "SAMPLER_2D_SHADOW", value: 35682, description: " " };
WebGlConstants.SAMPLER_2D_ARRAY = { name: "SAMPLER_2D_ARRAY", value: 36289, description: " " };
WebGlConstants.SAMPLER_2D_ARRAY_SHADOW = { name: "SAMPLER_2D_ARRAY_SHADOW", value: 36292, description: " " };
WebGlConstants.SAMPLER_CUBE_SHADOW = { name: "SAMPLER_CUBE_SHADOW", value: 36293, description: " " };
WebGlConstants.INT_SAMPLER_2D = { name: "INT_SAMPLER_2D", value: 36298, description: " " };
WebGlConstants.INT_SAMPLER_3D = { name: "INT_SAMPLER_3D", value: 36299, description: " " };
WebGlConstants.INT_SAMPLER_CUBE = { name: "INT_SAMPLER_CUBE", value: 36300, description: " " };
WebGlConstants.INT_SAMPLER_2D_ARRAY = { name: "INT_SAMPLER_2D_ARRAY", value: 36303, description: " " };
WebGlConstants.UNSIGNED_INT_SAMPLER_2D = { name: "UNSIGNED_INT_SAMPLER_2D", value: 36306, description: " " };
WebGlConstants.UNSIGNED_INT_SAMPLER_3D = { name: "UNSIGNED_INT_SAMPLER_3D", value: 36307, description: " " };
WebGlConstants.UNSIGNED_INT_SAMPLER_CUBE = { name: "UNSIGNED_INT_SAMPLER_CUBE", value: 36308, description: " " };
WebGlConstants.UNSIGNED_INT_SAMPLER_2D_ARRAY = { name: "UNSIGNED_INT_SAMPLER_2D_ARRAY", value: 36311, description: " " };
WebGlConstants.MAX_SAMPLES = { name: "MAX_SAMPLES", value: 36183, description: " " };
WebGlConstants.SAMPLER_BINDING = { name: "SAMPLER_BINDING", value: 35097, description: " " };
WebGlConstants.PIXEL_PACK_BUFFER = { name: "PIXEL_PACK_BUFFER", value: 35051, description: " " };
WebGlConstants.PIXEL_UNPACK_BUFFER = { name: "PIXEL_UNPACK_BUFFER", value: 35052, description: " " };
WebGlConstants.PIXEL_PACK_BUFFER_BINDING = { name: "PIXEL_PACK_BUFFER_BINDING", value: 35053, description: " " };
WebGlConstants.PIXEL_UNPACK_BUFFER_BINDING = { name: "PIXEL_UNPACK_BUFFER_BINDING", value: 35055, description: " " };
WebGlConstants.COPY_READ_BUFFER = { name: "COPY_READ_BUFFER", value: 36662, description: " " };
WebGlConstants.COPY_WRITE_BUFFER = { name: "COPY_WRITE_BUFFER", value: 36663, description: " " };
WebGlConstants.COPY_READ_BUFFER_BINDING = { name: "COPY_READ_BUFFER_BINDING", value: 36662, description: " " };
WebGlConstants.COPY_WRITE_BUFFER_BINDING = { name: "COPY_WRITE_BUFFER_BINDING", value: 36663, description: " " };
WebGlConstants.FLOAT_MAT2x3 = { name: "FLOAT_MAT2x3", value: 35685, description: " " };
WebGlConstants.FLOAT_MAT2x4 = { name: "FLOAT_MAT2x4", value: 35686, description: " " };
WebGlConstants.FLOAT_MAT3x2 = { name: "FLOAT_MAT3x2", value: 35687, description: " " };
WebGlConstants.FLOAT_MAT3x4 = { name: "FLOAT_MAT3x4", value: 35688, description: " " };
WebGlConstants.FLOAT_MAT4x2 = { name: "FLOAT_MAT4x2", value: 35689, description: " " };
WebGlConstants.FLOAT_MAT4x3 = { name: "FLOAT_MAT4x3", value: 35690, description: " " };
WebGlConstants.UNSIGNED_INT_VEC2 = { name: "UNSIGNED_INT_VEC2", value: 36294, description: " " };
WebGlConstants.UNSIGNED_INT_VEC3 = { name: "UNSIGNED_INT_VEC3", value: 36295, description: " " };
WebGlConstants.UNSIGNED_INT_VEC4 = { name: "UNSIGNED_INT_VEC4", value: 36296, description: " " };
WebGlConstants.UNSIGNED_NORMALIZED = { name: "UNSIGNED_NORMALIZED", value: 35863, description: " " };
WebGlConstants.SIGNED_NORMALIZED = { name: "SIGNED_NORMALIZED", value: 36764, description: " " };
WebGlConstants.VERTEX_ATTRIB_ARRAY_INTEGER = { name: "VERTEX_ATTRIB_ARRAY_INTEGER", value: 35069, description: " " };
WebGlConstants.VERTEX_ATTRIB_ARRAY_DIVISOR = { name: "VERTEX_ATTRIB_ARRAY_DIVISOR", value: 35070, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_MODE = { name: "TRANSFORM_FEEDBACK_BUFFER_MODE", value: 35967, description: " " };
WebGlConstants.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = { name: "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", value: 35968, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_VARYINGS = { name: "TRANSFORM_FEEDBACK_VARYINGS", value: 35971, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_START = { name: "TRANSFORM_FEEDBACK_BUFFER_START", value: 35972, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_SIZE = { name: "TRANSFORM_FEEDBACK_BUFFER_SIZE", value: 35973, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = { name: "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN", value: 35976, description: " " };
WebGlConstants.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = { name: "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", value: 35978, description: " " };
WebGlConstants.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = { name: "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", value: 35979, description: " " };
WebGlConstants.INTERLEAVED_ATTRIBS = { name: "INTERLEAVED_ATTRIBS", value: 35980, description: " " };
WebGlConstants.SEPARATE_ATTRIBS = { name: "SEPARATE_ATTRIBS", value: 35981, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_BUFFER = { name: "TRANSFORM_FEEDBACK_BUFFER", value: 35982, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_BUFFER_BINDING = { name: "TRANSFORM_FEEDBACK_BUFFER_BINDING", value: 35983, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK = { name: "TRANSFORM_FEEDBACK", value: 36386, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_PAUSED = { name: "TRANSFORM_FEEDBACK_PAUSED", value: 36387, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_ACTIVE = { name: "TRANSFORM_FEEDBACK_ACTIVE", value: 36388, description: " " };
WebGlConstants.TRANSFORM_FEEDBACK_BINDING = { name: "TRANSFORM_FEEDBACK_BINDING", value: 36389, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = { name: "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING", value: 33296, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = { name: "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE", value: 33297, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_RED_SIZE = { name: "FRAMEBUFFER_ATTACHMENT_RED_SIZE", value: 33298, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = { name: "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE", value: 33299, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = { name: "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE", value: 33300, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = { name: "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE", value: 33301, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = { name: "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE", value: 33302, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = { name: "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE", value: 33303, description: " " };
WebGlConstants.FRAMEBUFFER_DEFAULT = { name: "FRAMEBUFFER_DEFAULT", value: 33304, description: " " };
WebGlConstants.DEPTH24_STENCIL8 = { name: "DEPTH24_STENCIL8", value: 35056, description: " " };
WebGlConstants.DRAW_FRAMEBUFFER_BINDING = { name: "DRAW_FRAMEBUFFER_BINDING", value: 36006, description: " " };
WebGlConstants.READ_FRAMEBUFFER = { name: "READ_FRAMEBUFFER", value: 36008, description: " " };
WebGlConstants.DRAW_FRAMEBUFFER = { name: "DRAW_FRAMEBUFFER", value: 36009, description: " " };
WebGlConstants.READ_FRAMEBUFFER_BINDING = { name: "READ_FRAMEBUFFER_BINDING", value: 36010, description: " " };
WebGlConstants.RENDERBUFFER_SAMPLES = { name: "RENDERBUFFER_SAMPLES", value: 36011, description: " " };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = { name: "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER", value: 36052, description: " " };
WebGlConstants.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = { name: "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE", value: 36182, description: " " };
WebGlConstants.UNIFORM_BUFFER = { name: "UNIFORM_BUFFER", value: 35345, description: " " };
WebGlConstants.UNIFORM_BUFFER_BINDING = { name: "UNIFORM_BUFFER_BINDING", value: 35368, description: " " };
WebGlConstants.UNIFORM_BUFFER_START = { name: "UNIFORM_BUFFER_START", value: 35369, description: " " };
WebGlConstants.UNIFORM_BUFFER_SIZE = { name: "UNIFORM_BUFFER_SIZE", value: 35370, description: " " };
WebGlConstants.MAX_VERTEX_UNIFORM_BLOCKS = { name: "MAX_VERTEX_UNIFORM_BLOCKS", value: 35371, description: " " };
WebGlConstants.MAX_FRAGMENT_UNIFORM_BLOCKS = { name: "MAX_FRAGMENT_UNIFORM_BLOCKS", value: 35373, description: " " };
WebGlConstants.MAX_COMBINED_UNIFORM_BLOCKS = { name: "MAX_COMBINED_UNIFORM_BLOCKS", value: 35374, description: " " };
WebGlConstants.MAX_UNIFORM_BUFFER_BINDINGS = { name: "MAX_UNIFORM_BUFFER_BINDINGS", value: 35375, description: " " };
WebGlConstants.MAX_UNIFORM_BLOCK_SIZE = { name: "MAX_UNIFORM_BLOCK_SIZE", value: 35376, description: " " };
WebGlConstants.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = { name: "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", value: 35377, description: " " };
WebGlConstants.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = { name: "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", value: 35379, description: " " };
WebGlConstants.UNIFORM_BUFFER_OFFSET_ALIGNMENT = { name: "UNIFORM_BUFFER_OFFSET_ALIGNMENT", value: 35380, description: " " };
WebGlConstants.ACTIVE_UNIFORM_BLOCKS = { name: "ACTIVE_UNIFORM_BLOCKS", value: 35382, description: " " };
WebGlConstants.UNIFORM_TYPE = { name: "UNIFORM_TYPE", value: 35383, description: " " };
WebGlConstants.UNIFORM_SIZE = { name: "UNIFORM_SIZE", value: 35384, description: " " };
WebGlConstants.UNIFORM_BLOCK_INDEX = { name: "UNIFORM_BLOCK_INDEX", value: 35386, description: " " };
WebGlConstants.UNIFORM_OFFSET = { name: "UNIFORM_OFFSET", value: 35387, description: " " };
WebGlConstants.UNIFORM_ARRAY_STRIDE = { name: "UNIFORM_ARRAY_STRIDE", value: 35388, description: " " };
WebGlConstants.UNIFORM_MATRIX_STRIDE = { name: "UNIFORM_MATRIX_STRIDE", value: 35389, description: " " };
WebGlConstants.UNIFORM_IS_ROW_MAJOR = { name: "UNIFORM_IS_ROW_MAJOR", value: 35390, description: " " };
WebGlConstants.UNIFORM_BLOCK_BINDING = { name: "UNIFORM_BLOCK_BINDING", value: 35391, description: " " };
WebGlConstants.UNIFORM_BLOCK_DATA_SIZE = { name: "UNIFORM_BLOCK_DATA_SIZE", value: 35392, description: " " };
WebGlConstants.UNIFORM_BLOCK_ACTIVE_UNIFORMS = { name: "UNIFORM_BLOCK_ACTIVE_UNIFORMS", value: 35394, description: " " };
WebGlConstants.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = { name: "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES", value: 35395, description: " " };
WebGlConstants.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = { name: "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER", value: 35396, description: " " };
WebGlConstants.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = { name: "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER", value: 35398, description: " " };
WebGlConstants.OBJECT_TYPE = { name: "OBJECT_TYPE", value: 37138, description: " " };
WebGlConstants.SYNC_CONDITION = { name: "SYNC_CONDITION", value: 37139, description: " " };
WebGlConstants.SYNC_STATUS = { name: "SYNC_STATUS", value: 37140, description: " " };
WebGlConstants.SYNC_FLAGS = { name: "SYNC_FLAGS", value: 37141, description: " " };
WebGlConstants.SYNC_FENCE = { name: "SYNC_FENCE", value: 37142, description: " " };
WebGlConstants.SYNC_GPU_COMMANDS_COMPLETE = { name: "SYNC_GPU_COMMANDS_COMPLETE", value: 37143, description: " " };
WebGlConstants.UNSIGNALED = { name: "UNSIGNALED", value: 37144, description: " " };
WebGlConstants.SIGNALED = { name: "SIGNALED", value: 37145, description: " " };
WebGlConstants.ALREADY_SIGNALED = { name: "ALREADY_SIGNALED", value: 37146, description: " " };
WebGlConstants.TIMEOUT_EXPIRED = { name: "TIMEOUT_EXPIRED", value: 37147, description: " " };
WebGlConstants.CONDITION_SATISFIED = { name: "CONDITION_SATISFIED", value: 37148, description: " " };
WebGlConstants.WAIT_FAILED = { name: "WAIT_FAILED", value: 37149, description: " " };
WebGlConstants.SYNC_FLUSH_COMMANDS_BIT = { name: "SYNC_FLUSH_COMMANDS_BIT", value: 1, description: " " };
WebGlConstants.COLOR = { name: "COLOR", value: 6144, description: " " };
WebGlConstants.DEPTH = { name: "DEPTH", value: 6145, description: " " };
WebGlConstants.STENCIL = { name: "STENCIL", value: 6146, description: " " };
WebGlConstants.MIN = { name: "MIN", value: 32775, description: " " };
WebGlConstants.MAX = { name: "MAX", value: 32776, description: " " };
WebGlConstants.DEPTH_COMPONENT24 = { name: "DEPTH_COMPONENT24", value: 33190, description: " " };
WebGlConstants.STREAM_READ = { name: "STREAM_READ", value: 35041, description: " " };
WebGlConstants.STREAM_COPY = { name: "STREAM_COPY", value: 35042, description: " " };
WebGlConstants.STATIC_READ = { name: "STATIC_READ", value: 35045, description: " " };
WebGlConstants.STATIC_COPY = { name: "STATIC_COPY", value: 35046, description: " " };
WebGlConstants.DYNAMIC_READ = { name: "DYNAMIC_READ", value: 35049, description: " " };
WebGlConstants.DYNAMIC_COPY = { name: "DYNAMIC_COPY", value: 35050, description: " " };
WebGlConstants.DEPTH_COMPONENT32F = { name: "DEPTH_COMPONENT32F", value: 36012, description: " " };
WebGlConstants.DEPTH32F_STENCIL8 = { name: "DEPTH32F_STENCIL8", value: 36013, description: " " };
WebGlConstants.INVALID_INDEX = { name: "INVALID_INDEX", value: 4294967295, description: " " };
WebGlConstants.TIMEOUT_IGNORED = { name: "TIMEOUT_IGNORED", value: -1, description: " " };
WebGlConstants.MAX_CLIENT_WAIT_TIMEOUT_WEBGL = { name: "MAX_CLIENT_WAIT_TIMEOUT_WEBGL", value: 37447, description: " " };
// extensions
WebGlConstants.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = { name: "VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE", value: 35070, description: "Describes the frequency divisor used for instanced rendering.", extensionName: "ANGLE_instanced_arrays" };
WebGlConstants.UNMASKED_VENDOR_WEBGL = { name: "UNMASKED_VENDOR_WEBGL", value: 37445, description: "Passed to getParameter to get the vendor string of the graphics driver.", extensionName: "ANGLE_instanced_arrays" };
WebGlConstants.UNMASKED_RENDERER_WEBGL = { name: "UNMASKED_RENDERER_WEBGL", value: 37446, description: "Passed to getParameter to get the renderer string of the graphics driver.", extensionName: "WEBGL_debug_renderer_info" };
WebGlConstants.MAX_TEXTURE_MAX_ANISOTROPY_EXT = { name: "MAX_TEXTURE_MAX_ANISOTROPY_EXT", value: 34047, description: "Returns the maximum available anisotropy.", extensionName: "EXT_texture_filter_anisotropic" };
WebGlConstants.TEXTURE_MAX_ANISOTROPY_EXT = { name: "TEXTURE_MAX_ANISOTROPY_EXT", value: 34046, description: "Passed to texParameter to set the desired maximum anisotropy for a texture.", extensionName: "EXT_texture_filter_anisotropic" };
WebGlConstants.COMPRESSED_RGB_S3TC_DXT1_EXT = { name: "COMPRESSED_RGB_S3TC_DXT1_EXT", value: 33776, description: "A DXT1-compressed image in an RGB image format.", extensionName: "WEBGL_compressed_texture_s3tc" };
WebGlConstants.COMPRESSED_RGBA_S3TC_DXT1_EXT = { name: "COMPRESSED_RGBA_S3TC_DXT1_EXT", value: 33777, description: "A DXT1-compressed image in an RGB image format with a simple on/off alpha value.", extensionName: "WEBGL_compressed_texture_s3tc" };
WebGlConstants.COMPRESSED_RGBA_S3TC_DXT3_EXT = { name: "COMPRESSED_RGBA_S3TC_DXT3_EXT", value: 33778, description: "A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.", extensionName: "WEBGL_compressed_texture_s3tc" };
WebGlConstants.COMPRESSED_RGBA_S3TC_DXT5_EXT = { name: "COMPRESSED_RGBA_S3TC_DXT5_EXT", value: 33779, description: "A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.", extensionName: "WEBGL_compressed_texture_s3tc" };
WebGlConstants.COMPRESSED_R11_EAC = { name: "COMPRESSED_R11_EAC", value: 37488, description: "One-channel (red) unsigned format compression.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_SIGNED_R11_EAC = { name: "COMPRESSED_SIGNED_R11_EAC", value: 37489, description: "One-channel (red) signed format compression.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_RG11_EAC = { name: "COMPRESSED_RG11_EAC", value: 37490, description: "Two-channel (red and green) unsigned format compression.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_SIGNED_RG11_EAC = { name: "COMPRESSED_SIGNED_RG11_EAC", value: 37491, description: "Two-channel (red and green) signed format compression.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_RGB8_ETC2 = { name: "COMPRESSED_RGB8_ETC2", value: 37492, description: "Compresses RBG8 data with no alpha channel.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_RGBA8_ETC2_EAC = { name: "COMPRESSED_RGBA8_ETC2_EAC", value: 37493, description: "Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_SRGB8_ETC2 = { name: "COMPRESSED_SRGB8_ETC2", value: 37494, description: "Compresses sRBG8 data with no alpha channel.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = { name: "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", value: 37495, description: "Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = { name: "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", value: 37496, description: "Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = { name: "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", value: 37497, description: "Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.", extensionName: "WEBGL_compressed_texture_etc" };
WebGlConstants.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = { name: "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", value: 35840, description: "RGB compression in 4-bit mode. One block for each 4×4 pixels.", extensionName: "WEBGL_compressed_texture_pvrtc" };
WebGlConstants.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = { name: "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", value: 35842, description: "RGBA compression in 4-bit mode. One block for each 4×4 pixels.", extensionName: "WEBGL_compressed_texture_pvrtc" };
WebGlConstants.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = { name: "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", value: 35841, description: "RGB compression in 2-bit mode. One block for each 8×4 pixels.", extensionName: "WEBGL_compressed_texture_pvrtc" };
WebGlConstants.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = { name: "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", value: 35843, description: "RGBA compression in 2-bit mode. One block for each 8×4 pixe", extensionName: "WEBGL_compressed_texture_pvrtc" };
WebGlConstants.COMPRESSED_RGB_ETC1_WEBGL = { name: "COMPRESSED_RGB_ETC1_WEBGL", value: 36196, description: "Compresses 24-bit RGB data with no alpha channel.", extensionName: "WEBGL_compressed_texture_etc1" };
WebGlConstants.COMPRESSED_RGB_ATC_WEBGL = { name: "COMPRESSED_RGB_ATC_WEBGL", value: 35986, description: "Compresses RGB textures with no alpha channel.", extensionName: "WEBGL_compressed_texture_atc" };
WebGlConstants.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = { name: "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", value: 35986, description: "Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp).", extensionName: "WEBGL_compressed_texture_atc" };
WebGlConstants.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = { name: "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", value: 34798, description: "Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient).", extensionName: "WEBGL_compressed_texture_atc" };
WebGlConstants.UNSIGNED_INT_24_8_WEBGL = { name: "UNSIGNED_INT_24_8_WEBGL", value: 34042, description: "Unsigned integer type for 24-bit depth texture data.", extensionName: "WEBGL_depth_texture" };
WebGlConstants.HALF_FLOAT_OES = { name: "HALF_FLOAT_OES", value: 36193, description: "Half floating-point type (16-bit).", extensionName: "OES_texture_half_float" };
// public static readonly RGBA32F_EXT: WebGlConstant = { name: "RGBA32F_EXT", value: 34836, description: "RGBA 32-bit floating-point color-renderable format.", extensionName: "WEBGL_color_buffer_float" };
// public static readonly RGB32F_EXT: WebGlConstant = { name: "RGB32F_EXT", value: 34837, description: "RGB 32-bit floating-point color-renderable format.", extensionName: "WEBGL_color_buffer_float" };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = { name: "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", value: 33297, description: " ", extensionName: "WEBGL_color_buffer_float" };
WebGlConstants.UNSIGNED_NORMALIZED_EXT = { name: "UNSIGNED_NORMALIZED_EXT", value: 35863, description: " ", extensionName: "WEBGL_color_buffer_float" };
WebGlConstants.MIN_EXT = { name: "MIN_EXT", value: 32775, description: "Produces the minimum color components of the source and destination colors.", extensionName: "EXT_blend_minmax" };
WebGlConstants.MAX_EXT = { name: "MAX_EXT", value: 32776, description: "Produces the maximum color components of the source and destination colors.", extensionName: "EXT_blend_minmax" };
WebGlConstants.SRGB_EXT = { name: "SRGB_EXT", value: 35904, description: "Unsized sRGB format that leaves the precision up to the driver.", extensionName: "EXT_sRGB" };
WebGlConstants.SRGB_ALPHA_EXT = { name: "SRGB_ALPHA_EXT", value: 35906, description: "Unsized sRGB format with unsized alpha component.", extensionName: "EXT_sRGB" };
WebGlConstants.SRGB8_ALPHA8_EXT = { name: "SRGB8_ALPHA8_EXT", value: 35907, description: "Sized (8-bit) sRGB and alpha formats.", extensionName: "EXT_sRGB" };
WebGlConstants.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = { name: "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT", value: 33296, description: "Returns the framebuffer color encoding.", extensionName: "EXT_sRGB" };
WebGlConstants.FRAGMENT_SHADER_DERIVATIVE_HINT_OES = { name: "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", value: 35723, description: "Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.", extensionName: "OES_standard_derivatives" };
WebGlConstants.COLOR_ATTACHMENT0_WEBGL = { name: "COLOR_ATTACHMENT0_WEBGL", value: 36064, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT1_WEBGL = { name: "COLOR_ATTACHMENT1_WEBGL", value: 36065, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT2_WEBGL = { name: "COLOR_ATTACHMENT2_WEBGL", value: 36066, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT3_WEBGL = { name: "COLOR_ATTACHMENT3_WEBGL", value: 36067, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT4_WEBGL = { name: "COLOR_ATTACHMENT4_WEBGL", value: 36068, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT5_WEBGL = { name: "COLOR_ATTACHMENT5_WEBGL", value: 36069, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT6_WEBGL = { name: "COLOR_ATTACHMENT6_WEBGL", value: 36070, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT7_WEBGL = { name: "COLOR_ATTACHMENT7_WEBGL", value: 36071, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT8_WEBGL = { name: "COLOR_ATTACHMENT8_WEBGL", value: 36072, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT9_WEBGL = { name: "COLOR_ATTACHMENT9_WEBGL", value: 36073, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT10_WEBGL = { name: "COLOR_ATTACHMENT10_WEBGL", value: 36074, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT11_WEBGL = { name: "COLOR_ATTACHMENT11_WEBGL", value: 36075, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT12_WEBGL = { name: "COLOR_ATTACHMENT12_WEBGL", value: 36076, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT13_WEBGL = { name: "COLOR_ATTACHMENT13_WEBGL", value: 36077, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT14_WEBGL = { name: "COLOR_ATTACHMENT14_WEBGL", value: 36078, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.COLOR_ATTACHMENT15_WEBGL = { name: "COLOR_ATTACHMENT15_WEBGL", value: 36079, description: "Framebuffer color attachment point", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER0_WEBGL = { name: "DRAW_BUFFER0_WEBGL", value: 34853, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER1_WEBGL = { name: "DRAW_BUFFER1_WEBGL", value: 34854, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER2_WEBGL = { name: "DRAW_BUFFER2_WEBGL", value: 34855, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER3_WEBGL = { name: "DRAW_BUFFER3_WEBGL", value: 34856, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER4_WEBGL = { name: "DRAW_BUFFER4_WEBGL", value: 34857, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER5_WEBGL = { name: "DRAW_BUFFER5_WEBGL", value: 34858, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER6_WEBGL = { name: "DRAW_BUFFER6_WEBGL", value: 34859, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER7_WEBGL = { name: "DRAW_BUFFER7_WEBGL", value: 34860, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER8_WEBGL = { name: "DRAW_BUFFER8_WEBGL", value: 34861, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER9_WEBGL = { name: "DRAW_BUFFER9_WEBGL", value: 34862, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER10_WEBGL = { name: "DRAW_BUFFER10_WEBGL", value: 34863, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER11_WEBGL = { name: "DRAW_BUFFER11_WEBGL", value: 34864, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER12_WEBGL = { name: "DRAW_BUFFER12_WEBGL", value: 34865, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER13_WEBGL = { name: "DRAW_BUFFER13_WEBGL", value: 34866, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER14_WEBGL = { name: "DRAW_BUFFER14_WEBGL", value: 34867, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.DRAW_BUFFER15_WEBGL = { name: "DRAW_BUFFER15_WEBGL", value: 34868, description: "Draw buffer", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.MAX_COLOR_ATTACHMENTS_WEBGL = { name: "MAX_COLOR_ATTACHMENTS_WEBGL", value: 36063, description: "Maximum number of framebuffer color attachment points", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.MAX_DRAW_BUFFERS_WEBGL = { name: "MAX_DRAW_BUFFERS_WEBGL", value: 34852, description: "Maximum number of draw buffers", extensionName: "WEBGL_draw_buffers" };
WebGlConstants.VERTEX_ARRAY_BINDING_OES = { name: "VERTEX_ARRAY_BINDING_OES", value: 34229, description: "The bound vertex array object (VAO).", extensionName: "VERTEX_ARRAY_BINDING_OES" };
WebGlConstants.QUERY_COUNTER_BITS_EXT = { name: "QUERY_COUNTER_BITS_EXT", value: 34916, description: "The number of bits used to hold the query result for the given target.", extensionName: "EXT_disjoint_timer_query" };
WebGlConstants.CURRENT_QUERY_EXT = { name: "CURRENT_QUERY_EXT", value: 34917, description: "The currently active query.", extensionName: "EXT_disjoint_timer_query" };
WebGlConstants.QUERY_RESULT_EXT = { name: "QUERY_RESULT_EXT", value: 34918, description: "The query result.", extensionName: "EXT_disjoint_timer_query" };
WebGlConstants.QUERY_RESULT_AVAILABLE_EXT = { name: "QUERY_RESULT_AVAILABLE_EXT", value: 34919, description: "A Boolean indicating whether or not a query result is available.", extensionName: "EXT_disjoint_timer_query" };
WebGlConstants.TIME_ELAPSED_EXT = { name: "TIME_ELAPSED_EXT", value: 35007, description: "Elapsed time (in nanoseconds).", extensionName: "EXT_disjoint_timer_query" };
WebGlConstants.TIMESTAMP_EXT = { name: "TIMESTAMP_EXT", value: 36392, description: "The current time.", extensionName: "EXT_disjoint_timer_query" };
WebGlConstants.GPU_DISJOINT_EXT = { name: "GPU_DISJOINT_EXT", value: 36795, description: "A Boolean indicating whether or not the GPU performed any disjoint operation.", extensionName: "EXT_disjoint_timer_query" };
WebGlConstants.zeroMeaningByCommand = {
    getError: "NO_ERROR",
    blendFunc: "ZERO",
    blendFuncSeparate: "ZERO",
    readBuffer: "NONE",
    getFramebufferAttachmentParameter: "NONE",
    texParameterf: "NONE",
    texParameteri: "NONE",
    drawArrays: "POINTS",
    drawElements: "POINTS",
    drawArraysInstanced: "POINTS",
    drawArraysInstancedAngle: "POINTS",
    drawBuffers: "POINTS",
    drawElementsInstanced: "POINTS",
    drawRangeElements: "POINTS",
};
WebGlConstants.oneMeaningByCommand = {
    blendFunc: "ONE",
    blendFuncSeparate: "ONE",
    drawArrays: "LINES",
    drawElements: "LINES",
    drawArraysInstanced: "LINES",
    drawArraysInstancedAngle: "LINES",
    drawBuffers: "LINES",
    drawElementsInstanced: "LINES",
    drawRangeElements: "LINES",
};
const WebGlConstantsByName = {};
const WebGlConstantsByValue = {};
(function init() {
    for (const name in WebGlConstants) {
        if (WebGlConstants.hasOwnProperty(name)) {
            const constant = WebGlConstants[name];
            WebGlConstantsByName[constant.name] = constant;
            WebGlConstantsByValue[constant.value] = constant;
        }
    }
})();


/***/ }),

/***/ "./src/backend/utils/drawCommands.ts":
/*!*******************************************!*\
  !*** ./src/backend/utils/drawCommands.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawCommands": () => (/* binding */ drawCommands)
/* harmony export */ });
const drawCommands = [
    "drawArrays",
    "drawElements",
    "drawArraysInstanced",
    "drawArraysInstancedANGLE",
    "drawElementsInstanced",
    "drawElementsInstancedANGLE",
    "drawRangeElements",
    "multiDrawArraysWEBGL",
    "multiDrawElementsWEBGL",
    "multiDrawArraysInstancedWEBGL",
    "multiDrawElementsInstancedWEBGL",
    "multiDrawArraysInstancedBaseInstanceWEBGL",
    "multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL",
    "drawArraysInstancedBaseInstanceWEBGL",
    "drawElementsInstancedBaseVertexBaseInstanceWEBGL"
];


/***/ }),

/***/ "./src/backend/utils/formatHelper.ts":
/*!*******************************************!*\
  !*** ./src/backend/utils/formatHelper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatBinary": () => (/* binding */ formatBinary)
/* harmony export */ });
function formatBinary(value) {
    if (value === undefined || value === null) {
        return "";
    }
    return `${value.toFixed(0)} (0b${(value >>> 0).toString(2)})`;
}


/***/ }),

/***/ "./src/backend/utils/originFunctionHelper.ts":
/*!***************************************************!*\
  !*** ./src/backend/utils/originFunctionHelper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OriginFunctionHelper": () => (/* binding */ OriginFunctionHelper)
/* harmony export */ });
class OriginFunctionHelper {
    static storeOriginFunction(object, functionName) {
        if (!object) {
            return;
        }
        if (!object[functionName]) {
            return;
        }
        const originFunctionName = this.getOriginFunctionName(functionName);
        if (object[originFunctionName]) {
            return;
        }
        object[originFunctionName] = object[functionName];
    }
    static resetOriginFunction(object, functionName) {
        if (!object) {
            return;
        }
        if (!object[functionName]) {
            return;
        }
        const originFunctionName = this.getOriginFunctionName(functionName);
        if (!object[originFunctionName]) {
            return;
        }
        object[functionName] = object[originFunctionName];
        delete object[originFunctionName];
    }
    static storePrototypeOriginFunction(object, functionName) {
        if (!object) {
            return;
        }
        if (!object.prototype[functionName]) {
            return;
        }
        const originFunctionName = this.getOriginFunctionName(functionName);
        if (object.prototype[originFunctionName]) {
            return;
        }
        object.prototype[originFunctionName] = object.prototype[functionName];
    }
    static executePrototypeOriginFunction(object, objectType, functionName, args) {
        if (!object) {
            return;
        }
        const originFunctionName = this.getOriginFunctionName(functionName);
        if (!objectType.prototype[originFunctionName]) {
            return;
        }
        if (!object[originFunctionName]) {
            object[originFunctionName] = objectType.prototype[originFunctionName];
        }
        return this.executeFunction(object, originFunctionName, args);
    }
    static executeOriginFunction(object, functionName, args) {
        if (!object) {
            return;
        }
        const originFunctionName = this.getOriginFunctionName(functionName);
        if (!object[originFunctionName]) {
            return;
        }
        return this.executeFunction(object, originFunctionName, args);
    }
    // tslint:disable
    static executeFunction(object, functionName, args) {
        const a = args;
        if (a === undefined || a.length === 0) {
            return object[functionName]();
        }
        const length = a.length;
        switch (length) {
            case 1:
                return object[functionName](a[0]);
            case 2:
                return object[functionName](a[0], a[1]);
            case 3:
                return object[functionName](a[0], a[1], a[2]);
            case 4:
                return object[functionName](a[0], a[1], a[2], a[3]);
            case 5:
                return object[functionName](a[0], a[1], a[2], a[3], a[4]);
            case 6:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5]);
            case 7:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
            case 8:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
            case 9:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
            case 10:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9]);
            case 11:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10]);
            case 12:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11]);
            case 13:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12]);
            case 14:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13]);
            case 15:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14]);
            case 16:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
            case 17:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15], a[16]);
            case 18:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15], a[16], a[17]);
            case 19:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15], a[16], a[17], a[18]);
            case 20:
                return object[functionName](a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15], a[16], a[17], a[18], a[19]);
            default:
                return object[functionName].apply(object, a);
        }
    }
    static getOriginFunctionName(functionName) {
        return this.originFunctionPrefix + functionName;
    }
}
OriginFunctionHelper.originFunctionPrefix = "__SPECTOR_Origin_";


/***/ }),

/***/ "./src/backend/utils/programRecompilerHelper.ts":
/*!******************************************************!*\
  !*** ./src/backend/utils/programRecompilerHelper.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramRecompilerHelper": () => (/* binding */ ProgramRecompilerHelper)
/* harmony export */ });
class ProgramRecompilerHelper {
    static isBuildableProgram(program) {
        if (!program) {
            return false;
        }
        if (!program[this.rebuildProgramFunctionName]) {
            return false;
        }
        return true;
    }
    static rebuildProgram(program, vertexSourceCode, fragmentSourceCode, onCompiled, onError) {
        if (!this.isBuildableProgram(program)) {
            return;
        }
        // Recompile the shader sources.
        program[this.rebuildProgramFunctionName](vertexSourceCode, fragmentSourceCode, onCompiled, onError);
    }
}
ProgramRecompilerHelper.rebuildProgramFunctionName = "__SPECTOR_rebuildProgram";


/***/ }),

/***/ "./src/backend/utils/readPixelsHelper.ts":
/*!***********************************************!*\
  !*** ./src/backend/utils/readPixelsHelper.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadPixelsHelper": () => (/* binding */ ReadPixelsHelper)
/* harmony export */ });
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");

class ReadPixelsHelper {
    static isSupportedCombination(type, format, internalFormat) {
        // In case of texStorage.
        type = type || _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_BYTE.value;
        format = format || _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGBA.value;
        // Only reads RGB RGBA.
        if (format !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGB.value &&
            format !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGBA.value) {
            return false;
        }
        // Only reads 8 16 32.
        if (internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGB.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGBA.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGBA8.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGBA16F.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGBA32F.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGB16F.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.RGB32F.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.R11F_G11F_B10F.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.SRGB8.value &&
            internalFormat !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.SRGB8_ALPHA8.value) {
            return false;
        }
        return this.isSupportedComponentType(type);
    }
    static readPixels(gl, x, y, width, height, type) {
        // Empty error list.
        gl.getError();
        // If type is UNSIGNED_NORMALIZED, we passed in a component type that isn't a pixel format type.
        // So we have to convert it to a valid pixel format type.
        if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_NORMALIZED.value) {
            type = _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_BYTE.value;
        }
        // prepare destination storage.
        const size = width * height * 4;
        let pixels;
        if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_BYTE.value) {
            pixels = new Uint8Array(size);
        }
        else {
            type = _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT.value;
            pixels = new Float32Array(size);
        }
        // Read the pixels from the frame buffer.
        gl.readPixels(x, y, width, height, gl.RGBA, type, pixels);
        if (gl.getError()) {
            return undefined;
        }
        // In case of unsigned bytes, return directly.
        if (type === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_BYTE.value) {
            return pixels;
        }
        // Else, attempt to convert.
        const newPixels = new Uint8Array(width * height * 4);
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                newPixels[i * width * 4 + j * 4 + 0] = Math.min(Math.max(pixels[i * width * 4 + j * 4 + 0], 0), 1) * 255;
                newPixels[i * width * 4 + j * 4 + 1] = Math.min(Math.max(pixels[i * width * 4 + j * 4 + 1], 0), 1) * 255;
                newPixels[i * width * 4 + j * 4 + 2] = Math.min(Math.max(pixels[i * width * 4 + j * 4 + 2], 0), 1) * 255;
                newPixels[i * width * 4 + j * 4 + 3] = Math.min(Math.max(pixels[i * width * 4 + j * 4 + 3], 0), 1) * 255;
            }
        }
        return newPixels;
    }
    static isSupportedComponentType(type) {
        // Only reads https://www.khronos.org/registry/webgl/specs/latest/2.0/ texImage2D supported combination.
        if (type !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_BYTE.value &&
            type !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_SHORT_4_4_4_4.value &&
            type !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_SHORT_5_5_5_1.value &&
            type !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.UNSIGNED_SHORT_5_6_5.value &&
            type !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.HALF_FLOAT.value &&
            type !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.HALF_FLOAT_OES.value &&
            type !== _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FLOAT.value) {
            return false;
        }
        return true;
    }
}


/***/ }),

/***/ "./src/backend/utils/readProgramHelper.ts":
/*!************************************************!*\
  !*** ./src/backend/utils/readProgramHelper.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadProgramHelper": () => (/* binding */ ReadProgramHelper)
/* harmony export */ });
/* harmony import */ var _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/webglConstants */ "./src/backend/types/webglConstants.ts");

class ReadProgramHelper {
    static getProgramData(context, program) {
        const programStatus = {
            LINK_STATUS: context.getProgramParameter(program, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.LINK_STATUS.value),
            VALIDATE_STATUS: context.getProgramParameter(program, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.VALIDATE_STATUS.value),
        };
        const webGLshaders = context.getAttachedShaders(program);
        const shaders = new Array(2);
        let length = 0;
        for (const shader of webGLshaders) {
            const shaderState = this.readShaderFromContext(context, shader);
            length += shaderState.source.length;
            if (shaderState.shaderType === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAGMENT_SHADER.name) {
                shaders[1] = shaderState;
            }
            else {
                shaders[0] = shaderState;
            }
        }
        return {
            programStatus,
            shaders,
            length,
        };
    }
    static readShaderFromContext(context, shader) {
        const source = context.getShaderSource(shader);
        const ext = context.getExtension("WEBGL_debug_shaders");
        const translatedSource = ext ? ext.getTranslatedShaderSource(shader) : null;
        const shaderTypeValue = context.getShaderParameter(shader, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.SHADER_TYPE.value);
        const isFragment = shaderTypeValue === _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAGMENT_SHADER.value;
        const nameInMetadata = (shader && shader.__SPECTOR_Metadata && shader.__SPECTOR_Metadata.name);
        let name = nameInMetadata ?
            shader.__SPECTOR_Metadata.name :
            this.readNameFromShaderSource(source);
        if (!name) {
            name = (isFragment) ? "Fragment" : "Vertex";
        }
        return {
            COMPILE_STATUS: context.getShaderParameter(shader, _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.COMPILE_STATUS.value),
            shaderType: isFragment ? _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.FRAGMENT_SHADER.name : _types_webglConstants__WEBPACK_IMPORTED_MODULE_0__.WebGlConstants.VERTEX_SHADER.name,
            name,
            source,
            translatedSource,
        };
    }
    // Thx to https://github.com/spite/ShaderEditorExtension/blob/7b9483fdf5c417573906bae4139ca8bc7b8a49ca/src/panel.js#L689
    // This helps displaying SHADER_NAME used in the extension.
    static readNameFromShaderSource(source) {
        try {
            let name = "";
            let match;
            const shaderNameRegex = /#define[\s]+SHADER_NAME[\s]+([\S]+)(\n|$)/gi;
            match = shaderNameRegex.exec(source);
            if (match !== null) {
                if (match.index === shaderNameRegex.lastIndex) {
                    shaderNameRegex.lastIndex++;
                }
                name = match[1];
            }
            if (name === "") {
                // #define SHADER_NAME_B64 44K344Kn44O844OA44O8
                // #define SHADER_NAME_B64 8J+YjvCfmIE=
                const shaderName64Regex = /#define[\s]+SHADER_NAME_B64[\s]+([\S]+)(\n|$)/gi;
                match = shaderName64Regex.exec(source);
                if (match !== null) {
                    if (match.index === shaderName64Regex.lastIndex) {
                        shaderName64Regex.lastIndex++;
                    }
                    name = match[1];
                }
                if (name) {
                    name = decodeURIComponent(atob(name));
                }
            }
            return name;
        }
        catch (e) {
            return null;
        }
    }
}


/***/ }),

/***/ "./src/backend/webGlObjects/baseWebGlObject.ts":
/*!*****************************************************!*\
  !*** ./src/backend/webGlObjects/baseWebGlObject.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseWebGlObject": () => (/* binding */ BaseWebGlObject),
/* harmony export */   "WebGlObjects": () => (/* binding */ WebGlObjects)
/* harmony export */ });
class WebGlObjects {
    static getWebGlObjectTag(object) {
        return object[WebGlObjects.SPECTOROBJECTTAGKEY];
    }
    static attachWebGlObjectTag(object, tag) {
        tag.displayText = WebGlObjects.stringifyWebGlObjectTag(tag);
        object[WebGlObjects.SPECTOROBJECTTAGKEY] = tag;
    }
    static stringifyWebGlObjectTag(tag) {
        if (!tag) {
            return "No tag available.";
        }
        return `${tag.typeName} - ID: ${tag.id}`;
    }
}
WebGlObjects.SPECTOROBJECTTAGKEY = "__SPECTOR_Object_TAG";
// tslint:disable-next-line:max-classes-per-file
class BaseWebGlObject {
    constructor() {
        this.id = 0;
    }
    // tslint:disable-next-line:ban-types
    get type() {
        return window[this.typeName] || null;
    }
    tagWebGlObject(webGlObject) {
        if (!this.type) {
            return undefined;
        }
        let tag;
        if (!webGlObject) {
            return tag;
        }
        tag = WebGlObjects.getWebGlObjectTag(webGlObject);
        if (tag) {
            return tag;
        }
        if (webGlObject instanceof this.type) {
            const id = this.getNextId();
            tag = {
                typeName: this.typeName,
                id,
            };
            WebGlObjects.attachWebGlObjectTag(webGlObject, tag);
            return tag;
        }
        return tag;
    }
    getNextId() {
        return this.id++;
    }
}


/***/ }),

/***/ "./src/backend/webGlObjects/webGlObjects.ts":
/*!**************************************************!*\
  !*** ./src/backend/webGlObjects/webGlObjects.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Buffer": () => (/* binding */ Buffer),
/* harmony export */   "FrameBuffer": () => (/* binding */ FrameBuffer),
/* harmony export */   "Program": () => (/* binding */ Program),
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "Renderbuffer": () => (/* binding */ Renderbuffer),
/* harmony export */   "Sampler": () => (/* binding */ Sampler),
/* harmony export */   "Shader": () => (/* binding */ Shader),
/* harmony export */   "Sync": () => (/* binding */ Sync),
/* harmony export */   "Texture": () => (/* binding */ Texture),
/* harmony export */   "TransformFeedback": () => (/* binding */ TransformFeedback),
/* harmony export */   "UniformLocation": () => (/* binding */ UniformLocation),
/* harmony export */   "VertexArrayObject": () => (/* binding */ VertexArrayObject)
/* harmony export */ });
/* harmony import */ var _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseWebGlObject */ "./src/backend/webGlObjects/baseWebGlObject.ts");
// tslint:disable:max-classes-per-file

class Buffer extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLBuffer"; }
}
class FrameBuffer extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLFramebuffer"; }
}
class Program extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLProgram"; }
    static saveInGlobalStore(object) {
        const tag = _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.WebGlObjects.getWebGlObjectTag(object);
        if (!tag) {
            return;
        }
        this.store[tag.id] = object;
    }
    static getFromGlobalStore(id) {
        return this.store[id];
    }
    static updateInGlobalStore(id, newProgram) {
        if (!newProgram) {
            return;
        }
        const program = this.getFromGlobalStore(id);
        if (!program) {
            return;
        }
        const tag = _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.WebGlObjects.getWebGlObjectTag(program);
        if (!tag) {
            return;
        }
        _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.WebGlObjects.attachWebGlObjectTag(newProgram, tag);
        this.store[tag.id] = newProgram;
    }
}
Program.store = {};
class Query extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLQuery"; }
}
class Renderbuffer extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLRenderbuffer"; }
}
class Sampler extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLSampler"; }
}
class Shader extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLShader"; }
}
class Sync extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLSync"; }
}
class Texture extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLTexture"; }
}
class TransformFeedback extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLTransformFeedback"; }
}
class UniformLocation extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLUniformLocation"; }
}
class VertexArrayObject extends _baseWebGlObject__WEBPACK_IMPORTED_MODULE_0__.BaseWebGlObject {
    get typeName() { return "WebGLVertexArrayObject"; }
}


/***/ }),

/***/ "./src/embeddedFrontend/captureMenu/canvasListComponent.ts":
/*!*****************************************************************!*\
  !*** ./src/embeddedFrontend/captureMenu/canvasListComponent.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasListComponent": () => (/* binding */ CanvasListComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class CanvasListComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
        this.onCanvasSelection = this.createEvent("onCanvasSelection");
    }
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <div class="canvasListComponent">
            <span commandName="onCanvasSelection">
                ${state.currentCanvasInformation ? `${state.currentCanvasInformation.id} (${state.currentCanvasInformation.width}*${state.currentCanvasInformation.height})` : "Choose Canvas..."}
            </span>
            <ul childrenContainer="true" style="${state.showList ? "display:block;visibility:visible" : "display:none;visibility:hidden"}"></ul>
        </div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/captureMenu/canvasListItemComponent.ts":
/*!*********************************************************************!*\
  !*** ./src/embeddedFrontend/captureMenu/canvasListItemComponent.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasListItemComponent": () => (/* binding */ CanvasListItemComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class CanvasListItemComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
        this.onCanvasSelected = this.createEvent("onCanvasSelected");
    }
    render(state, stateId) {
        const liHolder = document.createElement("li");
        const textHolder = document.createElement("span");
        textHolder.innerText = `Id: ${state.id} - Size: ${state.width}*${state.height}`;
        liHolder.appendChild(textHolder);
        this.mapEventListener(liHolder, "click", "onCanvasSelected", state, stateId);
        return liHolder;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/captureMenu/captureMenu.ts":
/*!*********************************************************!*\
  !*** ./src/embeddedFrontend/captureMenu/captureMenu.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureMenu": () => (/* binding */ CaptureMenu)
/* harmony export */ });
/* harmony import */ var _styles_captureMenu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/captureMenu.scss */ "./src/embeddedFrontend/styles/captureMenu.scss");
/* harmony import */ var _shared_utils_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/observable */ "./src/shared/utils/observable.ts");
/* harmony import */ var _mvx_mvx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mvx/mvx */ "./src/embeddedFrontend/mvx/mvx.ts");
/* harmony import */ var _captureMenuComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captureMenuComponent */ "./src/embeddedFrontend/captureMenu/captureMenuComponent.ts");
/* harmony import */ var _canvasListItemComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvasListItemComponent */ "./src/embeddedFrontend/captureMenu/canvasListItemComponent.ts");
/* harmony import */ var _captureMenuActionsComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./captureMenuActionsComponent */ "./src/embeddedFrontend/captureMenu/captureMenuActionsComponent.ts");
/* harmony import */ var _canvasListComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvasListComponent */ "./src/embeddedFrontend/captureMenu/canvasListComponent.ts");
/* harmony import */ var _fpsCounterComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fpsCounterComponent */ "./src/embeddedFrontend/captureMenu/fpsCounterComponent.ts");
/* harmony import */ var _shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils/logger */ "./src/shared/utils/logger.ts");
// Import application Styles.









class CaptureMenu {
    constructor(options = {}) {
        this.options = options;
        this.rootPlaceHolder = options.rootPlaceHolder || document.body;
        this.mvx = new _mvx_mvx__WEBPACK_IMPORTED_MODULE_2__.MVX(this.rootPlaceHolder);
        this.isTrackingCanvas = false;
        this.onCanvasSelected = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this.onCaptureRequested = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this.onPauseRequested = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this.onPlayRequested = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this.onPlayNextFrameRequested = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this.captureMenuComponent = new _captureMenuComponent__WEBPACK_IMPORTED_MODULE_3__.CaptureMenuComponent();
        this.canvasListComponent = new _canvasListComponent__WEBPACK_IMPORTED_MODULE_6__.CanvasListComponent();
        this.canvasListItemComponent = new _canvasListItemComponent__WEBPACK_IMPORTED_MODULE_4__.CanvasListItemComponent();
        this.actionsComponent = new _captureMenuActionsComponent__WEBPACK_IMPORTED_MODULE_5__.CaptureMenuActionsComponent();
        this.fpsCounterComponent = new _fpsCounterComponent__WEBPACK_IMPORTED_MODULE_7__.FpsCounterComponent();
        this.rootStateId = this.mvx.addRootState({
            visible: true,
            logLevel: _shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.LogLevel.info,
            logText: CaptureMenu.SelectCanvasHelpText,
            logVisible: !this.options.hideLog,
        }, this.captureMenuComponent);
        this.canvasListStateId = this.mvx.addChildState(this.rootStateId, { currentCanvasInformation: null, showList: false }, this.canvasListComponent);
        this.actionsStateId = this.mvx.addChildState(this.rootStateId, true, this.actionsComponent);
        this.fpsStateId = this.mvx.addChildState(this.rootStateId, 0, this.fpsCounterComponent);
        this.actionsComponent.onCaptureRequested.add(() => {
            const currentCanvasInformation = this.getSelectedCanvasInformation();
            if (currentCanvasInformation) {
                this.updateMenuStateLog(_shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.LogLevel.info, CaptureMenu.PleaseWaitHelpText, true);
            }
            // Defer to ensure the log displays.
            setTimeout(() => {
                this.onCaptureRequested.trigger(currentCanvasInformation);
            }, 200);
        });
        this.actionsComponent.onPauseRequested.add(() => {
            this.onPauseRequested.trigger(this.getSelectedCanvasInformation());
            this.mvx.updateState(this.actionsStateId, false);
        });
        this.actionsComponent.onPlayRequested.add(() => {
            this.onPlayRequested.trigger(this.getSelectedCanvasInformation());
            this.mvx.updateState(this.actionsStateId, true);
        });
        this.actionsComponent.onPlayNextFrameRequested.add(() => {
            this.onPlayNextFrameRequested.trigger(this.getSelectedCanvasInformation());
        });
        this.canvasListComponent.onCanvasSelection.add((eventArgs) => {
            this.mvx.updateState(this.canvasListStateId, {
                currentCanvasInformation: null,
                showList: !eventArgs.state.showList,
            });
            this.updateMenuStateLog(_shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.LogLevel.info, CaptureMenu.SelectCanvasHelpText);
            this.onCanvasSelected.trigger(null);
            if (this.isTrackingCanvas) {
                this.trackPageCanvases();
            }
            if (eventArgs.state.showList) {
                this.showMenuStateLog();
            }
            else {
                this.hideMenuStateLog();
            }
        });
        this.canvasListItemComponent.onCanvasSelected.add((eventArgs) => {
            this.mvx.updateState(this.canvasListStateId, {
                currentCanvasInformation: eventArgs.state,
                showList: false,
            });
            this.onCanvasSelected.trigger(eventArgs.state);
            this.updateMenuStateLog(_shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.LogLevel.info, CaptureMenu.ActionsHelpText);
            this.showMenuStateLog();
        });
    }
    getSelectedCanvasInformation() {
        const canvasListState = this.mvx.getGenericState(this.canvasListStateId);
        return canvasListState.currentCanvasInformation;
    }
    trackPageCanvases() {
        this.isTrackingCanvas = true;
        if (document.body) {
            const canvases = document.body.querySelectorAll("canvas");
            this.updateCanvasesList(canvases);
        }
    }
    updateCanvasesList(canvases) {
        this.updateCanvasesListInformationInternal(canvases, (info) => {
            return {
                id: info.id,
                width: info.width,
                height: info.height,
                ref: info,
            };
        });
    }
    updateCanvasesListInformation(canvasesInformation) {
        this.updateCanvasesListInformationInternal(canvasesInformation, (info) => {
            return {
                id: info.id,
                width: info.width,
                height: info.height,
                ref: info.ref,
            };
        });
    }
    display() {
        this.updateMenuStateVisibility(true);
    }
    hide() {
        this.updateMenuStateVisibility(false);
    }
    captureComplete(errorText) {
        if (errorText) {
            this.updateMenuStateLog(_shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.LogLevel.error, errorText);
        }
        else {
            this.updateMenuStateLog(_shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.LogLevel.info, CaptureMenu.ActionsHelpText);
        }
    }
    setFPS(fps) {
        this.mvx.updateState(this.fpsStateId, fps);
    }
    updateCanvasesListInformationInternal(canvasesInformation, convertToListInfo) {
        // Create a consumable information list for the view.
        this.mvx.removeChildrenStates(this.canvasListStateId);
        const canvasesInformationClone = [];
        for (let i = 0; i < canvasesInformation.length; i++) {
            const canvas = canvasesInformation[i];
            const canvasInformationClone = convertToListInfo(canvas);
            canvasesInformationClone.push(canvasInformationClone);
            this.mvx.addChildState(this.canvasListStateId, canvasInformationClone, this.canvasListItemComponent);
        }
        // Auto Select in the list if only one canvas.
        const canvasesCount = canvasesInformationClone.length;
        const canvasListState = this.mvx.getGenericState(this.canvasListStateId);
        const visible = canvasListState.showList;
        if (!visible) {
            if (canvasesCount === 1) {
                const canvasToSelect = canvasesInformationClone[0];
                this.mvx.updateState(this.canvasListStateId, {
                    currentCanvasInformation: canvasToSelect,
                    showList: visible,
                });
                this.updateMenuStateLog(_shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.LogLevel.info, CaptureMenu.ActionsHelpText);
                this.onCanvasSelected.trigger(canvasToSelect);
            }
            else {
                this.updateMenuStateLog(_shared_utils_logger__WEBPACK_IMPORTED_MODULE_8__.LogLevel.info, CaptureMenu.SelectCanvasHelpText);
                this.onCanvasSelected.trigger(null);
            }
        }
    }
    hideMenuStateLog() {
        const menuState = this.mvx.getGenericState(this.rootStateId);
        this.mvx.updateState(this.rootStateId, {
            visible: menuState.visible,
            logLevel: menuState.logLevel,
            logText: menuState.logText,
            logVisible: false,
        });
    }
    showMenuStateLog() {
        const menuState = this.mvx.getGenericState(this.rootStateId);
        this.mvx.updateState(this.rootStateId, {
            visible: menuState.visible,
            logLevel: menuState.logLevel,
            logText: menuState.logText,
            logVisible: !this.options.hideLog,
        });
    }
    updateMenuStateLog(logLevel, logText, immediate = false) {
        const menuState = this.mvx.getGenericState(this.rootStateId);
        this.mvx.updateState(this.rootStateId, {
            visible: menuState.visible,
            logLevel,
            logText,
            logVisible: !this.options.hideLog,
        }, immediate);
    }
    updateMenuStateVisibility(visible) {
        const menuState = this.mvx.getGenericState(this.rootStateId);
        this.mvx.updateState(this.rootStateId, {
            visible,
            logLevel: menuState.logLevel,
            logText: menuState.logText,
            logVisible: menuState.logVisible,
        });
    }
}
CaptureMenu.SelectCanvasHelpText = "Please, select a canvas in the list above.";
CaptureMenu.ActionsHelpText = "Record with the red button, you can also pause or continue playing the current scene.";
CaptureMenu.PleaseWaitHelpText = "Capturing, be patient (this can take up to 3 minutes)...";


/***/ }),

/***/ "./src/embeddedFrontend/captureMenu/captureMenuActionsComponent.ts":
/*!*************************************************************************!*\
  !*** ./src/embeddedFrontend/captureMenu/captureMenuActionsComponent.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureMenuActionsComponent": () => (/* binding */ CaptureMenuActionsComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class CaptureMenuActionsComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
        this.onCaptureRequested = this.createEvent("onCaptureRequested");
        this.onPlayRequested = this.createEvent("onPlayRequested");
        this.onPauseRequested = this.createEvent("onPauseRequested");
        this.onPlayNextFrameRequested = this.createEvent("onPlayNextFrameRequested");
    }
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <div class="captureMenuActionsComponent">
            <div commandName="onCaptureRequested">
            </div>
            $${!state ?
            `<div commandName="onPlayRequested">
                </div>
                <div commandName="onPlayNextFrameRequested">
                </div>`
            :
                `<div commandName="onPauseRequested">
                </div>`}
        </div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/captureMenu/captureMenuComponent.ts":
/*!******************************************************************!*\
  !*** ./src/embeddedFrontend/captureMenu/captureMenuComponent.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureMenuComponent": () => (/* binding */ CaptureMenuComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/logger */ "./src/shared/utils/logger.ts");
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");


class CaptureMenuComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `<div>
            <div childrenContainer="true" class="captureMenuComponent ${state ? "active" : ""}">
            </div>
            <div class="captureMenuLogComponent ${state.logVisible ? "active" : ""}">
                <span class="${state.logLevel === _shared_utils_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.error ? "error" : ""}">${state.logText}<span>
            </div>
        </div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/captureMenu/fpsCounterComponent.ts":
/*!*****************************************************************!*\
  !*** ./src/embeddedFrontend/captureMenu/fpsCounterComponent.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FpsCounterComponent": () => (/* binding */ FpsCounterComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class FpsCounterComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const textHolder = document.createElement("span");
        textHolder.className = "fpsCounterComponent";
        textHolder.innerText = state.toFixed(2) + " Fps";
        return textHolder;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/mvx/baseComponent.ts":
/*!***************************************************!*\
  !*** ./src/embeddedFrontend/mvx/baseComponent.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent),
/* harmony export */   "BaseNoneGenericComponent": () => (/* binding */ BaseNoneGenericComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/observable */ "./src/shared/utils/observable.ts");

class BaseNoneGenericComponent {
    constructor() {
        this.dummyTextGeneratorElement = document.createElement("div");
    }
    createFromHtml(html) {
        // IE 11 Compatibility prevents to reuse the div.
        const dummyElement = document.createElement("div");
        dummyElement.innerHTML = html;
        return dummyElement.firstElementChild;
    }
    // THX to http://2ality.com/2015/01/template-strings-html.html
    htmlTemplate(literalSections, ...substs) {
        // Use raw literal sections: we don’t want
        // backslashes (\n etc.) to be interpreted
        const raw = literalSections.raw;
        let result = "";
        substs.forEach((subst, i) => {
            // Retrieve the literal section preceding
            // the current substitution
            let lit = raw[i];
            // In the example, map() returns an array:
            // If substitution is an array (and not a string),
            // we turn it into a string
            if (Array.isArray(subst)) {
                subst = subst.join("");
            }
            // If the substitution is preceded by a dollar sign,
            // we do not escape special characters in it
            if (lit && lit.length > 0 && lit[lit.length - 1] === "$") {
                lit = lit.slice(0, -1);
            }
            // otherwise escape by default by precaution.
            else {
                subst = this.htmlEscape(subst);
            }
            result += lit;
            result += subst;
        });
        // Take care of last literal section
        // (Never fails, because an empty template string
        // produces one literal section, an empty string)
        result += raw[raw.length - 1]; // (A)
        return result;
    }
    htmlEscape(str) {
        if (str === null || str === undefined || str.length === 0) {
            return str;
        }
        this.dummyTextGeneratorElement.innerText = str;
        return this.dummyTextGeneratorElement.innerHTML;
        // Keep as a ref:
        // http://stackoverflow.com/questions/1219860/html-encoding-lost-when-attribute-read-from-input-field
        // THX to http://2ality.com/2015/01/template-strings-html.html
        // return str.replace(/&/g, '&amp;') // first!
        //         .replace(/>/g, '&gt;')
        //         .replace(/</g, '&lt;')
        //         .replace(/"/g, '&quot;')
        //         .replace(/'/g, '&#39;')
        //         .replace(/`/g, '&#96;');
    }
}
// tslint:disable-next-line:max-classes-per-file
class BaseComponent extends BaseNoneGenericComponent {
    constructor() {
        super();
        this.events = {};
    }
    addEventListener(command, callback, context = null) {
        if (this.events[command]) {
            return this.events[command].add(callback, context);
        }
        return -1;
    }
    removeEventListener(command, listenerId) {
        if (this.events[command]) {
            this.events[command].remove(listenerId);
        }
    }
    renderElementFromTemplate(template, state, stateId) {
        const element = this.createFromHtml(template);
        this.bindCommands(element, state, stateId);
        return element;
    }
    bindCommands(domNode, state, stateId) {
        const commandName = domNode.getAttribute("commandname");
        if (commandName) {
            this.bindCommand(domNode, state, stateId);
        }
        const commandContainers = domNode.querySelectorAll("[commandName]");
        for (let i = 0; i < commandContainers.length; i++) {
            const commandContainer = commandContainers[i];
            this.bindCommand(commandContainer, state, stateId);
        }
    }
    bindCommand(commandContainer, state, stateId) {
        const commandName = commandContainer.getAttribute("commandname");
        let commandEventBinding = commandContainer.getAttribute("commandeventbinding") || "";
        if (commandEventBinding.length === 0) {
            commandEventBinding = "click";
        }
        const commandCapture = commandContainer.getAttribute("usecapture") === "true";
        const stopPropagation = commandContainer.getAttribute("stoppropagation") === "true";
        this.createEvent(commandName);
        this.mapEventListener(commandContainer, commandEventBinding, commandName, state, stateId, commandCapture, stopPropagation);
    }
    mapEventListener(domElement, domEvent, eventName, state, stateId, commandCapture = false, stopPropagation = false) {
        // Really need to keep both this in the next command.
        // tslint:disable-next-line
        const self = this;
        if (stopPropagation) {
            domElement.addEventListener(domEvent, function (e) {
                e.stopPropagation();
                e.preventDefault();
                self.triggerEvent(eventName, this, state, stateId);
                return false;
            }, commandCapture);
        }
        else {
            domElement.addEventListener(domEvent, function () {
                self.triggerEvent(eventName, this, state, stateId);
            }, commandCapture);
        }
    }
    createEvent(commandName) {
        if (!this.events[commandName]) {
            const event = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
            this.events[commandName] = event;
        }
        return this.events[commandName];
    }
    triggerEvent(commandName, element, state, stateId) {
        this.events[commandName].trigger({
            sender: element,
            stateId,
            state,
        });
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/mvx/componentInstance.ts":
/*!*******************************************************!*\
  !*** ./src/embeddedFrontend/mvx/componentInstance.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentInstance": () => (/* binding */ ComponentInstance)
/* harmony export */ });
class ComponentInstance {
    constructor(component) {
        this.component = component;
    }
    render(state, stateId, lastOperation) {
        if (lastOperation === 0 /* LastOperation.Processed */) {
            return;
        }
        if (lastOperation === 50 /* LastOperation.Delete */) {
            this.removeNode();
            return;
        }
        this.domNode = this.component.render(state, stateId);
    }
    composeInContainer(parentContainer, indexInContainer, lastOperation) {
        if (lastOperation === 50 /* LastOperation.Delete */) {
            this.removeNode();
            return null;
        }
        const currentChildrenContainer = this.cachedCurrentChildrenContainer;
        if (lastOperation === 0 /* LastOperation.Processed */) {
            return currentChildrenContainer;
        }
        const element = this.domNode;
        const newChildrenContainer = element.getAttribute("childrencontainer") ? element : element.querySelector("[childrenContainer]");
        if (newChildrenContainer && currentChildrenContainer) {
            const children = currentChildrenContainer.children;
            while (children.length > 0) {
                newChildrenContainer.appendChild(children[0]);
            }
        }
        this.cachedCurrentChildrenContainer = newChildrenContainer;
        if (indexInContainer >= parentContainer.children.length) {
            parentContainer.appendChild(element);
            if (this.cachedCurrentDomNode && lastOperation === 40 /* LastOperation.Update */) {
                if (this.cachedCurrentDomNode.remove) {
                    this.cachedCurrentDomNode.remove();
                }
                else if (this.cachedCurrentDomNode.parentNode) {
                    this.cachedCurrentDomNode.parentNode.removeChild(this.cachedCurrentDomNode);
                }
            }
        }
        else {
            const currentElement = parentContainer.children[indexInContainer];
            parentContainer.insertBefore(element, currentElement);
            if (lastOperation === 40 /* LastOperation.Update */) {
                parentContainer.removeChild(currentElement);
            }
        }
        this.cachedCurrentDomNode = this.domNode;
        return newChildrenContainer;
    }
    removeNode() {
        if (this.domNode && this.domNode.parentElement) {
            if (this.domNode.remove) {
                this.domNode.remove();
            }
            else if (this.domNode.parentNode) {
                this.domNode.parentNode.removeChild(this.domNode);
            }
        }
        if (this.cachedCurrentDomNode && this.cachedCurrentDomNode.parentElement) {
            if (this.cachedCurrentDomNode.remove) {
                this.cachedCurrentDomNode.remove();
            }
            else if (this.cachedCurrentDomNode.parentNode) {
                this.cachedCurrentDomNode.parentNode.removeChild(this.cachedCurrentDomNode);
            }
        }
    }
}
ComponentInstance.idGenerator = 0;


/***/ }),

/***/ "./src/embeddedFrontend/mvx/compositor.ts":
/*!************************************************!*\
  !*** ./src/embeddedFrontend/mvx/compositor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Compositor": () => (/* binding */ Compositor)
/* harmony export */ });
class Compositor {
    constructor(placeHolder, stateStore) {
        this.placeHolder = placeHolder;
        this.stateStore = stateStore;
    }
    compose(rootStateId) {
        // First pass to render each dirty node.
        const dirtyStates = this.stateStore.getStatesToProcess();
        let render = false;
        for (const dirtyStateKey in dirtyStates) {
            if (dirtyStates.hasOwnProperty(dirtyStateKey)) {
                const dirtyStateId = dirtyStates[dirtyStateKey];
                const lastOperationForDirtyState = this.stateStore.getLastOperation(dirtyStateId);
                const componentInstance = this.stateStore.getComponentInstance(dirtyStateId);
                const state = this.stateStore.getData(dirtyStateId);
                componentInstance.render(state, dirtyStateId, lastOperationForDirtyState);
                render = true;
            }
        }
        // early exist if nothing was touched.
        if (!render) {
            return;
        }
        // Recursively apply the new rendered nodes to the dom.
        const lastOperation = this.stateStore.getLastOperation(rootStateId);
        this.composeInContainer(this.placeHolder, Number.MAX_VALUE, rootStateId, lastOperation);
    }
    composeChildren(stateId, container) {
        if (!container) {
            return;
        }
        const children = this.stateStore.getChildrenIds(stateId);
        let currentChildIndexInDom = 0;
        for (let i = 0; i < children.length; i++) {
            const childId = children[i];
            const lastOperation = this.stateStore.getLastOperation(childId);
            // Recurse.
            this.composeInContainer(container, currentChildIndexInDom, childId, lastOperation);
            // Reindex in case of deleted nodes.
            if (lastOperation !== 50 /* LastOperation.Delete */) {
                currentChildIndexInDom++;
            }
        }
    }
    composeInContainer(parentContainer, indexInContainer, stateId, lastOperation) {
        const componentInstance = this.stateStore.getComponentInstance(stateId);
        const childrenContainer = componentInstance.composeInContainer(parentContainer, indexInContainer, lastOperation);
        // Recursion path.
        this.composeChildren(stateId, childrenContainer);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/mvx/mvx.ts":
/*!*****************************************!*\
  !*** ./src/embeddedFrontend/mvx/mvx.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MVX": () => (/* binding */ MVX)
/* harmony export */ });
/* harmony import */ var _compositor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compositor */ "./src/embeddedFrontend/mvx/compositor.ts");
/* harmony import */ var _stateStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateStore */ "./src/embeddedFrontend/mvx/stateStore.ts");
/* harmony import */ var _componentInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentInstance */ "./src/embeddedFrontend/mvx/componentInstance.ts");



class MVX {
    constructor(placeHolder) {
        this.stateStore = new _stateStore__WEBPACK_IMPORTED_MODULE_1__.StateStore();
        this.compositor = new _compositor__WEBPACK_IMPORTED_MODULE_0__.Compositor(placeHolder, this.stateStore);
        this.willRender = false;
        this.rootStateId = -1;
    }
    addRootState(data, component, immediate = false) {
        const componentInstance = new _componentInstance__WEBPACK_IMPORTED_MODULE_2__.ComponentInstance(component);
        const stateId = this.stateStore.add(data, componentInstance);
        this.rootStateId = stateId;
        this.setForRender(immediate);
        return stateId;
    }
    addChildState(parentId, data, component, immediate = false) {
        const id = this.insertChildState(parentId, data, Number.MAX_VALUE, component);
        this.setForRender(immediate);
        return id;
    }
    insertChildState(parentId, data, index, component, immediate = false) {
        const componentInstance = new _componentInstance__WEBPACK_IMPORTED_MODULE_2__.ComponentInstance(component);
        const id = this.stateStore.insertChildAt(parentId, index, data, componentInstance);
        this.setForRender(immediate);
        return id;
    }
    updateState(id, data, immediate = false) {
        this.stateStore.update(id, data);
        this.setForRender(immediate);
    }
    removeState(id, immediate = false) {
        this.stateStore.remove(id);
        this.setForRender(immediate);
    }
    removeChildrenStates(id, immediate = false) {
        this.stateStore.removeChildren(id);
        this.setForRender(immediate);
    }
    getState(id) {
        return this.stateStore.getData(id);
    }
    getGenericState(id) {
        return this.getState(id);
    }
    getChildrenState(id) {
        return this.stateStore.getChildrenIds(id).map((childId) => this.stateStore.getData(id));
    }
    getChildrenGenericState(id) {
        return this.getChildrenState(id);
    }
    hasChildren(id) {
        return this.stateStore.hasChildren(id);
    }
    updateAllChildrenState(id, updateCallback) {
        const childrenIds = this.stateStore.getChildrenIds(id);
        for (const childId of childrenIds) {
            const state = this.getGenericState(childId);
            updateCallback(state);
            this.updateState(childId, state);
        }
    }
    updateAllChildrenGenericState(id, updateCallback) {
        this.updateAllChildrenState(id, updateCallback);
    }
    setForRender(immediate) {
        if (false) {}
    }
    compose() {
        if (false) {}
    }
}
MVX.REFRESHRATEINMILLISECONDS = 100;


/***/ }),

/***/ "./src/embeddedFrontend/mvx/stateStore.ts":
/*!************************************************!*\
  !*** ./src/embeddedFrontend/mvx/stateStore.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateStore": () => (/* binding */ StateStore)
/* harmony export */ });
class StateStore {
    constructor() {
        this.store = {};
        this.idGenerator = 0;
        this.pendingOperation = {};
    }
    getLastOperation(id) {
        return this.store[id].lastOperation;
    }
    getData(id) {
        return this.store[id].data;
    }
    getComponentInstance(id) {
        return this.store[id].componentInstance;
    }
    getParentId(id) {
        if (this.store[id].parent) {
            return this.store[id].parent.id;
        }
        return -1;
    }
    getChildrenIds(id) {
        const result = [];
        for (const child of this.store[id].children) {
            result.push(child.id);
        }
        return result;
    }
    hasChildren(id) {
        return this.store[id].children.length > 0;
    }
    add(data, componentInstance) {
        const id = this.getNewId();
        this.pendingOperation[id] = id;
        this.store[id] = {
            data,
            id,
            parent: null,
            children: [],
            componentInstance,
            lastOperation: 20 /* LastOperation.Add */,
        };
        return id;
    }
    update(id, data) {
        const currentState = this.store[id];
        this.pendingOperation[id] = id;
        // Update the state to not lose references.
        this.store[id].data = data;
        this.store[id].lastOperation = 40 /* LastOperation.Update */;
    }
    addChild(parentId, data, componentInstance) {
        const parent = this.store[parentId];
        const id = this.add(data, componentInstance);
        this.pendingOperation[id] = id;
        const child = this.store[id];
        child.parent = parent;
        parent.children.push(child);
        return id;
    }
    insertChildAt(parentId, index, data, componentInstance) {
        const parent = this.store[parentId];
        const id = this.add(data, componentInstance);
        this.pendingOperation[id] = id;
        const child = this.store[id];
        child.parent = parent;
        if (index >= parent.children.length) {
            parent.children.push(child);
        }
        else if (index >= 0) {
            parent.children.splice(index, 0, child);
        }
        else {
            parent.children.unshift(child);
        }
        return id;
    }
    removeChildById(parentId, id) {
        const parent = this.store[parentId];
        for (let i = parent.children.length - 1; i >= 0; i--) {
            const state = parent.children[i];
            if (state.id === id) {
                this.removeChildAt(parentId, i);
                break;
            }
        }
    }
    removeChildAt(parentId, index) {
        const parent = this.store[parentId];
        let child;
        if (index > (parent.children.length - 1)) {
            child = parent.children[parent.children.length - 1];
            parent.children[parent.children.length - 1].parent = null;
            parent.children.splice(parent.children.length - 1, 1);
        }
        else if (index >= 0) {
            child = parent.children[index];
            parent.children[index].parent = null;
            parent.children.splice(index, 1);
        }
        else {
            child = parent.children[0];
            parent.children[0].parent = null;
            parent.children.splice(0, 1);
        }
        child.parent = null;
        this.remove(child.id);
    }
    remove(id) {
        const child = this.store[id];
        if (child.parent) {
            const parent = this.store[child.parent.id];
            this.removeChildById(child.parent.id, id);
        }
        else {
            this.removeChildren(id);
            this.store[id].lastOperation = 50 /* LastOperation.Delete */;
            this.pendingOperation[id] = id;
        }
    }
    removeChildren(id) {
        const state = this.store[id];
        while (state.children.length) {
            this.remove(state.children[0].id);
        }
    }
    getStatesToProcess() {
        return this.pendingOperation;
    }
    flushPendingOperations() {
        for (const id in this.pendingOperation) {
            if (this.pendingOperation[id]) {
                if (this.store[id].lastOperation === 50 /* LastOperation.Delete */) {
                    delete this.store[id];
                }
                else {
                    this.store[id].lastOperation = 0 /* LastOperation.Processed */;
                }
            }
        }
        this.pendingOperation = {};
    }
    getNewId() {
        return ++this.idGenerator;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/JSON/jsonContentComponent.ts":
/*!**********************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/JSON/jsonContentComponent.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSONContentComponent": () => (/* binding */ JSONContentComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class JSONContentComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <div class="jsonContentComponent" childrenContainer="true">
        </div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/JSON/jsonGroupComponent.ts":
/*!********************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/JSON/jsonGroupComponent.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSONGroupComponent": () => (/* binding */ JSONGroupComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class JSONGroupComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <div class="jsonGroupComponent">
            <div class="jsonGroupComponentTitle">${state ? state.replace(/([A-Z])/g, " $1").trim() : ""}</div>
            <ul childrenContainer="true"></ul>
        </div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/JSON/jsonHelpItemComponent.ts":
/*!***********************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/JSON/jsonHelpItemComponent.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSONHelpItemComponent": () => (/* binding */ JSONHelpItemComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class JSONHelpItemComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
            <li><span class="jsonItemComponentKey">${state.key}: </span>
                <span class="jsonItemComponentValue">${state.value} (<a href="${state.help}" target="_blank" class="jsonSourceItemComponentOpen">Open help page</a>)
                </span>
            <li>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/JSON/jsonImageItemComponent.ts":
/*!************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/JSON/jsonImageItemComponent.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSONImageItemComponent": () => (/* binding */ JSONImageItemComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class JSONImageItemComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <li class="jsonItemImageHolder"><div class="jsonItemImage"><img src="${state.value}" style="${state.pixelated ? "image-rendering: pixelated;" : ""}" /><span>${state.key}</span></div></li>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/JSON/jsonItemComponent.ts":
/*!*******************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/JSON/jsonItemComponent.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSONItemComponent": () => (/* binding */ JSONItemComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class JSONItemComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
            <li><span class="jsonItemComponentKey">${state.key}: </span><span class="jsonItemComponentValue">${state.value}</span><li>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/JSON/jsonVisualStateItemComponent.ts":
/*!******************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/JSON/jsonVisualStateItemComponent.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSONVisualStateItemComponent": () => (/* binding */ JSONVisualStateItemComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class JSONVisualStateItemComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const divHolder = document.createElement("div");
        divHolder.className = "jsonVisualStateItemComponent";
        if (state.Attachments) {
            for (const imageState of state.Attachments) {
                if (!imageState.src) {
                    continue;
                }
                const img = document.createElement("img");
                img.src = encodeURI(imageState.src);
                divHolder.appendChild(img);
                if (state.Attachments.length > 1) {
                    const attachment = document.createElement("span");
                    attachment.innerText = imageState.attachmentName;
                    divHolder.appendChild(attachment);
                }
            }
        }
        else {
            const status = document.createElement("span");
            status.innerText = state.FrameBufferStatus;
            divHolder.appendChild(status);
        }
        const fbo = document.createElement("span");
        fbo.innerText = state.FrameBuffer ? state.FrameBuffer.__SPECTOR_Object_TAG.displayText : "Canvas frame buffer";
        divHolder.appendChild(fbo);
        return divHolder;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/captureList/captureListComponent.ts":
/*!*****************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/captureList/captureListComponent.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureListComponent": () => (/* binding */ CaptureListComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/observable */ "./src/shared/utils/observable.ts");
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");
/* harmony import */ var _shared_utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/logger */ "./src/shared/utils/logger.ts");



class CaptureListComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor() {
        super();
        this.onCaptureLoaded = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    }
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <div class="captureListComponent ${state ? "active" : ""}">
            <div class="openCaptureFile">
                <Span>Drag files here to open a previously saved capture.</span>
            </div>
            <ul childrenContainer="true"></ul>
        </div>`;
        const element = this.renderElementFromTemplate(htmlString, state, stateId);
        const openCaptureFileElement = element.querySelector(".openCaptureFile");
        openCaptureFileElement.addEventListener("dragenter", (e) => { this.drag(e); return false; }, false);
        openCaptureFileElement.addEventListener("dragover", (e) => { this.drag(e); return false; }, false);
        openCaptureFileElement.addEventListener("drop", (e) => { this.drop(e); }, false);
        return element;
    }
    drag(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    drop(eventDrop) {
        eventDrop.stopPropagation();
        eventDrop.preventDefault();
        this.loadFiles(eventDrop);
    }
    loadFiles(event) {
        let filesToLoad = null;
        // Handling data transfer via drag'n'drop
        if (event && event.dataTransfer && event.dataTransfer.files) {
            filesToLoad = event.dataTransfer.files;
        }
        // Handling files from input files
        if (event && event.target && event.target.files) {
            filesToLoad = event.target.files;
        }
        // Load the files.
        if (filesToLoad && filesToLoad.length > 0) {
            for (let i = 0; i < filesToLoad.length; i++) {
                const name = filesToLoad[i].name.toLowerCase();
                const extension = name.split(".").pop();
                const type = filesToLoad[i].type;
                if (extension === "json") {
                    const fileToLoad = filesToLoad[i];
                    const reader = new FileReader();
                    reader.onerror = (e) => {
                        _shared_utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error("Error while reading file: " + fileToLoad.name + e);
                    };
                    reader.onload = (e) => {
                        // target doesn't have result from ts 1.3
                        try {
                            const capture = JSON.parse(e.target["result"]);
                            this.onCaptureLoaded.trigger(capture);
                        }
                        catch (exception) {
                            _shared_utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error("Error while reading file: " + fileToLoad.name + exception);
                        }
                    };
                    reader.readAsText(fileToLoad);
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/captureList/captureListItemComponent.ts":
/*!*********************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/captureList/captureListItemComponent.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureListItemComponent": () => (/* binding */ CaptureListItemComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class CaptureListItemComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
        this.onCaptureSelected = this.createEvent("onCaptureSelected");
        this.onSaveRequested = this.createEvent("onSaveRequested");
    }
    render(state, stateId) {
        const liHolder = document.createElement("li");
        if (state.active) {
            liHolder.className = "active";
        }
        if (state.capture.endState.VisualState.Attachments) {
            for (const imageState of state.capture.endState.VisualState.Attachments) {
                const img = document.createElement("img");
                img.src = encodeURI(imageState.src);
                liHolder.appendChild(img);
            }
        }
        else {
            const status = document.createElement("span");
            status.innerText = state.capture.endState.VisualState.FrameBufferStatus;
            liHolder.appendChild(status);
        }
        const text = document.createElement("span");
        text.innerText = new Date(state.capture.startTime).toTimeString().split(" ")[0];
        liHolder.appendChild(text);
        const save = document.createElement("a");
        save.href = "#";
        save.className = "captureListItemSave";
        this.mapEventListener(save, "click", "onSaveRequested", state, stateId, false, true);
        text.appendChild(save);
        this.mapEventListener(liHolder, "click", "onCaptureSelected", state, stateId);
        return liHolder;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/commandList/commandDetailComponent.ts":
/*!*******************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/commandList/commandDetailComponent.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandDetailComponent": () => (/* binding */ CommandDetailComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class CommandDetailComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <div class="commandDetailComponent" childrenContainer="true">
        </div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/commandList/commandListComponent.ts":
/*!*****************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/commandList/commandListComponent.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandListComponent": () => (/* binding */ CommandListComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class CommandListComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <div class="commandListComponent">
            <ul childrenContainer="true"></ul>
        </div>`;
        const element = this.renderElementFromTemplate(htmlString, state, stateId);
        return element;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/commandList/commandListItemComponent.ts":
/*!*********************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/commandList/commandListItemComponent.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandListItemComponent": () => (/* binding */ CommandListItemComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");
/* harmony import */ var _ux_scrollIntoViewHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ux/scrollIntoViewHelper */ "./src/embeddedFrontend/ux/scrollIntoViewHelper.ts");


class CommandListItemComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
        this.onCommandSelected = this.createEvent("onCommandSelected");
        this.onVertexSelected = this.createEvent("onVertexSelected");
        this.onFragmentSelected = this.createEvent("onFragmentSelected");
    }
    render(state, stateId) {
        const liHolder = document.createElement("li");
        let status = "unknown";
        switch (state.capture.status) {
            case 50 /* CommandCaptureStatus.Deprecated */:
                status = "deprecated";
                break;
            case 10 /* CommandCaptureStatus.Unused */:
                status = "unused";
                break;
            case 20 /* CommandCaptureStatus.Disabled */:
                status = "disabled";
                break;
            case 30 /* CommandCaptureStatus.Redundant */:
                status = "redundant";
                break;
            case 40 /* CommandCaptureStatus.Valid */:
                status = "valid";
                break;
        }
        if (state.capture.VisualState) {
            liHolder.className = " drawCall";
        }
        if (state.active) {
            liHolder.className = " active";
            setTimeout(() => {
                _ux_scrollIntoViewHelper__WEBPACK_IMPORTED_MODULE_1__.ScrollIntoViewHelper.scrollIntoView(liHolder);
            }, 1);
        }
        if (state.capture.marker) {
            const markerElement = document.createElement("span");
            markerElement.className = status + " marker important";
            markerElement.innerText = state.capture.marker + " ";
            markerElement.style.fontWeight = "1000";
            liHolder.appendChild(markerElement);
        }
        if (state.capture.name === "LOG") {
            const logElement = document.createElement("span");
            logElement.className = status + " marker important";
            logElement.innerText = state.capture.text + " ";
            logElement.style.fontWeight = "1000";
            liHolder.appendChild(logElement);
        }
        else {
            const textElement = document.createElement("span");
            let text = state.capture.text;
            text = text.replace(state.capture.name, `<span class=" ${status} important">${state.capture.name}</span>`);
            textElement.innerHTML = text;
            liHolder.appendChild(textElement);
        }
        if (state.capture.VisualState && state.capture.name !== "clear") {
            try {
                const vertexShader = state.capture.DrawCall.shaders[0];
                const fragmentShader = state.capture.DrawCall.shaders[1];
                const vertexElement = document.createElement("a");
                vertexElement.innerText = vertexShader.name;
                vertexElement.href = "#";
                liHolder.appendChild(vertexElement);
                this.mapEventListener(vertexElement, "click", "onVertexSelected", state, stateId);
                const fragmentElement = document.createElement("a");
                fragmentElement.innerText = fragmentShader.name;
                fragmentElement.href = "#";
                liHolder.appendChild(fragmentElement);
                this.mapEventListener(fragmentElement, "click", "onFragmentSelected", state, stateId);
            }
            catch (e) {
                // Do nothing but prevent crashing.
            }
        }
        this.mapEventListener(liHolder, "click", "onCommandSelected", state, stateId);
        return liHolder;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/commandList/mdnCommandLinkHelper.ts":
/*!*****************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/commandList/mdnCommandLinkHelper.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDNCommandLinkHelper": () => (/* binding */ MDNCommandLinkHelper)
/* harmony export */ });
class MDNCommandLinkHelper {
    static getMDNLink(commandName) {
        const webgl2Name = MDNCommandLinkHelper.WebGL2Functions[commandName];
        if (webgl2Name) {
            return MDNCommandLinkHelper.WebGL2RootUrl + webgl2Name;
        }
        const webglName = MDNCommandLinkHelper.WebGLFunctions[commandName];
        if (webglName) {
            return MDNCommandLinkHelper.WebGLRootUrl + webglName;
        }
        const angleInstancedArraysExtName = MDNCommandLinkHelper.AngleInstancedArraysExtFunctions[commandName];
        if (angleInstancedArraysExtName) {
            return MDNCommandLinkHelper.AngleInstancedArraysExtRootUrl + angleInstancedArraysExtName;
        }
        return MDNCommandLinkHelper.WebGLRootUrl + commandName;
    }
}
MDNCommandLinkHelper.WebGL2RootUrl = "https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/";
MDNCommandLinkHelper.WebGLRootUrl = "https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/";
MDNCommandLinkHelper.AngleInstancedArraysExtRootUrl = "https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/";
MDNCommandLinkHelper.WebGL2Functions = {
    beginQuery: "beginQuery",
    beginTransformFeedback: "beginTransformFeedback",
    bindBufferBase: "bindBufferBase",
    bindBufferRange: "bindBufferRange",
    bindSampler: "bindSampler",
    bindTransformFeedback: "bindTransformFeedback",
    bindVertexArray: "bindVertexArray",
    blitFramebuffer: "blitFramebuffer",
    clearBufferfv: "clearBuffer",
    clearBufferiv: "clearBuffer",
    clearBufferuiv: "clearBuffer",
    clearBufferfi: "clearBuffer",
    clientWaitSync: "clientWaitSync",
    compressedTexImage3D: "compressedTexImage3D",
    compressedTexSubImage3D: "compressedTexSubImage3D",
    copyBufferSubData: "copyBufferSubData",
    copyTexSubImage3D: "copyTexSubImage3D",
    createQuery: "createQuery",
    createSampler: "createSampler",
    createTransformFeedback: "createTransformFeedback",
    createVertexArray: "createVertexArray",
    deleteQuery: "deleteQuery",
    deleteSampler: "deleteSampler",
    deleteSync: "deleteSync",
    deleteTransformFeedback: "deleteTransformFeedback",
    deleteVertexArray: "deleteVertexArray",
    drawArraysInstanced: "drawArraysInstanced",
    drawBuffers: "drawBuffers",
    drawElementsInstanced: "drawElementsInstanced",
    drawRangeElements: "drawRangeElements",
    endQuery: "endQuery",
    endTransformFeedback: "endTransformFeedback",
    fenceSync: "fenceSync",
    framebufferTextureLayer: "framebufferTextureLayer",
    getActiveUniformBlockName: "getActiveUniformBlockName",
    getActiveUniformBlockParameter: "getActiveUniformBlockParameter",
    getActiveUniforms: "getActiveUniforms",
    getBufferSubData: "getBufferSubData",
    getFragDataLocation: "getFragDataLocation",
    getIndexedParameter: "getIndexedParameter",
    getInternalformatParameter: "getInternalformatParameter",
    getQuery: "getQuery",
    getQueryParameter: "getQueryParameter",
    getSamplerParameter: "getSamplerParameter",
    getSyncParameter: "getSyncParameter",
    getTransformFeedbackVarying: "getTransformFeedbackVarying",
    getUniformBlockIndex: "getUniformBlockIndex",
    getUniformIndices: "getUniformIndices",
    invalidateFramebuffer: "invalidateFramebuffer",
    invalidateSubFramebuffer: "invalidateSubFramebuffer",
    isQuery: "isQuery",
    isSampler: "isSampler",
    isSync: "isSync",
    isTransformFeedback: "isTransformFeedback",
    isVertexArray: "isVertexArray",
    pauseTransformFeedback: "pauseTransformFeedback",
    readBuffer: "readBuffer",
    renderbufferStorageMultisample: "renderbufferStorageMultisample",
    resumeTransformFeedback: "resumeTransformFeedback",
    samplerParameteri: "samplerParameter",
    samplerParameterf: "samplerParameter",
    texImage3D: "texImage3D",
    texStorage2D: "texStorage2D",
    texStorage3D: "texStorage3D",
    texSubImage3D: "texSubImage3D",
    transformFeedbackVaryings: "transformFeedbackVaryings",
    uniform1ui: "uniform",
    uniform2ui: "uniform",
    uniform3ui: "uniform",
    uniform4ui: "uniform",
    uniform1fv: "uniform",
    uniform2fv: "uniform",
    uniform3fv: "uniform",
    uniform4fv: "uniform",
    uniform1iv: "uniform",
    uniform2iv: "uniform",
    uniform3iv: "uniform",
    uniform4iv: "uniform",
    uniform1uiv: "uniform",
    uniform2uiv: "uniform",
    uniform3uiv: "uniform",
    uniform4uiv: "uniform",
    uniformBlockBinding: "uniformBlockBinding",
    uniformMatrix2fv: "uniformMatrix",
    uniformMatrix3x2fv: "uniformMatrix",
    uniformMatrix4x2fv: "uniformMatrix",
    uniformMatrix2x3fv: "uniformMatrix",
    uniformMatrix3fv: "uniformMatrix",
    uniformMatrix4x3fv: "uniformMatrix",
    uniformMatrix2x4fv: "uniformMatrix",
    uniformMatrix3x4fv: "uniformMatrix",
    uniformMatrix4fv: "uniformMatrix",
    vertexAttribDivisor: "vertexAttribDivisor",
    vertexAttribI4i: "vertexAttribI",
    vertexAttribI4ui: "vertexAttribI",
    vertexAttribI4iv: "vertexAttribI",
    vertexAttribI4uiv: "vertexAttribI",
    vertexAttribIPointer: "vertexAttribIPointer",
    waitSync: "waitSync",
};
MDNCommandLinkHelper.WebGLFunctions = {
    uniform1f: "uniform",
    uniform1fv: "uniform",
    uniform1i: "uniform",
    uniform1iv: "uniform",
    uniform2f: "uniform",
    uniform2fv: "uniform",
    uniform2i: "uniform",
    uniform2iv: "uniform",
    uniform3f: "uniform",
    uniform3i: "uniform",
    uniform3iv: "uniform",
    uniform4f: "uniform",
    uniform4fv: "uniform",
    uniform4i: "uniform",
    uniform4iv: "uniform",
    uniformMatrix2fv: "uniformMatrix",
    uniformMatrix3fv: "uniformMatrix",
    uniformMatrix4fv: "uniformMatrix",
    vertexAttrib1f: "vertexAttrib",
    vertexAttrib2f: "vertexAttrib",
    vertexAttrib3f: "vertexAttrib",
    vertexAttrib4f: "vertexAttrib",
    vertexAttrib1fv: "vertexAttrib",
    vertexAttrib2fv: "vertexAttrib",
    vertexAttrib3fv: "vertexAttrib",
    vertexAttrib4fv: "vertexAttrib",
};
MDNCommandLinkHelper.AngleInstancedArraysExtFunctions = {
    drawArraysInstancedANGLE: "drawArraysInstancedANGLE",
    drawElementsInstancedANGLE: "drawElementsInstancedANGLE",
    vertexAttribDivisorANGLE: "vertexAttribDivisorANGLE",
};


/***/ }),

/***/ "./src/embeddedFrontend/resultView/content/resultViewContentComponent.ts":
/*!*******************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/content/resultViewContentComponent.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultViewContentComponent": () => (/* binding */ ResultViewContentComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class ResultViewContentComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = '<div childrenContainer="true" class="resultViewContentComponent"></div>';
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/information/informationColumnComponent.ts":
/*!***********************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/information/informationColumnComponent.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationColumnComponent": () => (/* binding */ InformationColumnComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class InformationColumnComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
                <div childrenContainer="true" class="${state ? "informationColumnLeftComponent" : "informationColumnRightComponent"}"></div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/menu/resultViewMenuComponent.ts":
/*!*************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/menu/resultViewMenuComponent.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultViewMenuComponent": () => (/* binding */ ResultViewMenuComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class ResultViewMenuComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
        this.onCapturesClicked = this.createEvent("onCapturesClicked");
        this.onCommandsClicked = this.createEvent("onCommandsClicked");
        this.onInformationClicked = this.createEvent("onInformationClicked");
        this.onInitStateClicked = this.createEvent("onInitStateClicked");
        this.onEndStateClicked = this.createEvent("onEndStateClicked");
        this.onCloseClicked = this.createEvent("onCloseClicked");
        this.onSearchTextChanged = this.createEvent("onSearchTextChanged");
        this.onSearchTextCleared = this.createEvent("onSearchTextCleared");
    }
    render(state, stateId) {
        const htmlString = this.htmlTemplate `<ul class="resultViewMenuComponent">
                <li class="resultViewMenuOpen resultViewMenuSmall"><a href="#" role="button">Menu</a></li>

                <li class="searchContainer">
                    <input type="text" placeHolder="Search..." value="${state.searchText}" commandName="onSearchTextChanged" commandEventBinding="change">
                    <a class="clearSearch" stoppropagation="true" CommandName="onSearchTextCleared">X</a>
                </li>
                <li><a class="${state.status === 0 /* MenuStatus.Captures */ ? "active" : ""} href="#" role="button" commandName="onCapturesClicked">Captures</a></li>
                <li><a class="${state.status === 10 /* MenuStatus.Information */ ? "active" : ""} href="#" role="button" commandName="onInformationClicked">Information</a></li>
                <li><a class="${state.status === 20 /* MenuStatus.InitState */ ? "active" : ""} href="#" role="button" commandName="onInitStateClicked">Init State</a></li>
                <li>
                    <a class="${state.status === 40 /* MenuStatus.Commands */ ? "active" : ""} href="#" role="button" commandName="onCommandsClicked">
                        Commands${state.commandCount > 0 ? " (" + state.commandCount + ")" : ""}
                    </a>
                </li>
                <li><a class="${state.status === 30 /* MenuStatus.EndState */ ? "active" : ""} href="#" role="button" commandName="onEndStateClicked">End State</a></li>
                <li><a role="button" commandName="onCloseClicked" stoppropagation="true">Close</a></li>
            </ul>`;
        const element = this.renderElementFromTemplate(htmlString, state, stateId);
        const openButton = element.querySelector(".resultViewMenuOpen");
        const lis = element.querySelectorAll("li:not(.resultViewMenuSmall)");
        openButton.addEventListener("click", (_) => {
            if (openButton.getAttribute("open") === "true") {
                openButton.setAttribute("open", "false");
                if (lis) {
                    for (let i = 0; i < lis.length; i++) {
                        lis[i].style.display = "none";
                        lis[i].style.visibility = "hidden";
                    }
                }
            }
            else {
                openButton.setAttribute("open", "true");
                if (lis) {
                    for (let i = 0; i < lis.length; i++) {
                        lis[i].style.display = "block";
                        lis[i].style.visibility = "visible";
                    }
                }
            }
        });
        return element;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/resultView.ts":
/*!*******************************************************!*\
  !*** ./src/embeddedFrontend/resultView/resultView.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultView": () => (/* binding */ ResultView)
/* harmony export */ });
/* harmony import */ var _styles_resultView_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/resultView.scss */ "./src/embeddedFrontend/styles/resultView.scss");
/* harmony import */ var _shared_utils_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/observable */ "./src/shared/utils/observable.ts");
/* harmony import */ var _mvx_mvx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mvx/mvx */ "./src/embeddedFrontend/mvx/mvx.ts");
/* harmony import */ var _captureList_captureListComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captureList/captureListComponent */ "./src/embeddedFrontend/resultView/captureList/captureListComponent.ts");
/* harmony import */ var _captureList_captureListItemComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./captureList/captureListItemComponent */ "./src/embeddedFrontend/resultView/captureList/captureListItemComponent.ts");
/* harmony import */ var _visualStateList_visualStateListComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visualStateList/visualStateListComponent */ "./src/embeddedFrontend/resultView/visualStateList/visualStateListComponent.ts");
/* harmony import */ var _visualStateList_visualStateListItemComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visualStateList/visualStateListItemComponent */ "./src/embeddedFrontend/resultView/visualStateList/visualStateListItemComponent.ts");
/* harmony import */ var _commandList_commandListComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commandList/commandListComponent */ "./src/embeddedFrontend/resultView/commandList/commandListComponent.ts");
/* harmony import */ var _commandList_commandListItemComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commandList/commandListItemComponent */ "./src/embeddedFrontend/resultView/commandList/commandListItemComponent.ts");
/* harmony import */ var _commandList_commandDetailComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commandList/commandDetailComponent */ "./src/embeddedFrontend/resultView/commandList/commandDetailComponent.ts");
/* harmony import */ var _JSON_jsonContentComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSON/jsonContentComponent */ "./src/embeddedFrontend/resultView/JSON/jsonContentComponent.ts");
/* harmony import */ var _JSON_jsonGroupComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./JSON/jsonGroupComponent */ "./src/embeddedFrontend/resultView/JSON/jsonGroupComponent.ts");
/* harmony import */ var _JSON_jsonItemComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JSON/jsonItemComponent */ "./src/embeddedFrontend/resultView/JSON/jsonItemComponent.ts");
/* harmony import */ var _JSON_jsonImageItemComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./JSON/jsonImageItemComponent */ "./src/embeddedFrontend/resultView/JSON/jsonImageItemComponent.ts");
/* harmony import */ var _JSON_jsonHelpItemComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./JSON/jsonHelpItemComponent */ "./src/embeddedFrontend/resultView/JSON/jsonHelpItemComponent.ts");
/* harmony import */ var _JSON_jsonVisualStateItemComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./JSON/jsonVisualStateItemComponent */ "./src/embeddedFrontend/resultView/JSON/jsonVisualStateItemComponent.ts");
/* harmony import */ var _menu_resultViewMenuComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu/resultViewMenuComponent */ "./src/embeddedFrontend/resultView/menu/resultViewMenuComponent.ts");
/* harmony import */ var _content_resultViewContentComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./content/resultViewContentComponent */ "./src/embeddedFrontend/resultView/content/resultViewContentComponent.ts");
/* harmony import */ var _resultViewComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resultViewComponent */ "./src/embeddedFrontend/resultView/resultViewComponent.ts");
/* harmony import */ var _sourceCode_sourceCodeComponent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sourceCode/sourceCodeComponent */ "./src/embeddedFrontend/resultView/sourceCode/sourceCodeComponent.ts");
/* harmony import */ var _information_informationColumnComponent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./information/informationColumnComponent */ "./src/embeddedFrontend/resultView/information/informationColumnComponent.ts");
/* harmony import */ var _commandList_mdnCommandLinkHelper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./commandList/mdnCommandLinkHelper */ "./src/embeddedFrontend/resultView/commandList/mdnCommandLinkHelper.ts");
// Import application Styles.






















class ResultView {
    constructor(rootPlaceHolder = null) {
        this.rootPlaceHolder = rootPlaceHolder;
        this.onSourceCodeChanged = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this.rootPlaceHolder = this.rootPlaceHolder || document.body;
        this.mvx = new _mvx_mvx__WEBPACK_IMPORTED_MODULE_2__.MVX(this.rootPlaceHolder);
        this.searchText = "";
        this.currentCommandId = -1;
        this.visible = false;
        this.commandCount = 0;
        this.commandListStateId = -1;
        this.commandDetailStateId = -1;
        this.currentCaptureStateId = -1;
        this.currentCommandStateId = -1;
        this.currentVisualStateId = -1;
        this.visualStateListStateId = -1;
        this.initVisualStateId = -1;
        this.sourceCodeComponentStateId = -1;
        this.captureListComponent = new _captureList_captureListComponent__WEBPACK_IMPORTED_MODULE_3__.CaptureListComponent();
        this.captureListItemComponent = new _captureList_captureListItemComponent__WEBPACK_IMPORTED_MODULE_4__.CaptureListItemComponent();
        this.visualStateListComponent = new _visualStateList_visualStateListComponent__WEBPACK_IMPORTED_MODULE_5__.VisualStateListComponent();
        this.visualStateListItemComponent = new _visualStateList_visualStateListItemComponent__WEBPACK_IMPORTED_MODULE_6__.VisualStateListItemComponent();
        this.commandListComponent = new _commandList_commandListComponent__WEBPACK_IMPORTED_MODULE_7__.CommandListComponent();
        this.commandListItemComponent = new _commandList_commandListItemComponent__WEBPACK_IMPORTED_MODULE_8__.CommandListItemComponent();
        this.commandDetailComponent = new _commandList_commandDetailComponent__WEBPACK_IMPORTED_MODULE_9__.CommandDetailComponent();
        this.jsonContentComponent = new _JSON_jsonContentComponent__WEBPACK_IMPORTED_MODULE_10__.JSONContentComponent();
        this.jsonGroupComponent = new _JSON_jsonGroupComponent__WEBPACK_IMPORTED_MODULE_11__.JSONGroupComponent();
        this.jsonItemComponent = new _JSON_jsonItemComponent__WEBPACK_IMPORTED_MODULE_12__.JSONItemComponent();
        this.jsonImageItemComponent = new _JSON_jsonImageItemComponent__WEBPACK_IMPORTED_MODULE_13__.JSONImageItemComponent();
        this.jsonHelpItemComponent = new _JSON_jsonHelpItemComponent__WEBPACK_IMPORTED_MODULE_14__.JSONHelpItemComponent();
        this.jsonVisualStateItemComponent = new _JSON_jsonVisualStateItemComponent__WEBPACK_IMPORTED_MODULE_15__.JSONVisualStateItemComponent();
        this.resultViewMenuComponent = new _menu_resultViewMenuComponent__WEBPACK_IMPORTED_MODULE_16__.ResultViewMenuComponent();
        this.resultViewContentComponent = new _content_resultViewContentComponent__WEBPACK_IMPORTED_MODULE_17__.ResultViewContentComponent();
        this.resultViewComponent = new _resultViewComponent__WEBPACK_IMPORTED_MODULE_18__.ResultViewComponent();
        this.sourceCodeComponent = new _sourceCode_sourceCodeComponent__WEBPACK_IMPORTED_MODULE_19__.SourceCodeComponent();
        this.informationColumnComponent = new _information_informationColumnComponent__WEBPACK_IMPORTED_MODULE_20__.InformationColumnComponent();
        this.rootStateId = this.mvx.addRootState(null, this.resultViewComponent);
        this.menuStateId = this.mvx.addChildState(this.rootStateId, null, this.resultViewMenuComponent);
        this.contentStateId = this.mvx.addChildState(this.rootStateId, null, this.resultViewContentComponent);
        this.captureListStateId = this.mvx.addChildState(this.rootStateId, false, this.captureListComponent);
        this.initKeyboardEvents();
        this.initMenuComponent();
        this.captureListComponent.onCaptureLoaded.add((capture) => {
            this.addCapture(capture);
        });
        this.captureListItemComponent.onCaptureSelected.add((captureEventArgs) => {
            this.selectCapture(captureEventArgs.stateId);
        });
        this.captureListItemComponent.onSaveRequested.add((captureEventArgs) => {
            this.saveCapture(captureEventArgs.state.capture);
        });
        this.visualStateListItemComponent.onVisualStateSelected.add((visualStateEventArgs) => {
            this.selectVisualState(visualStateEventArgs.stateId);
        });
        this.commandListItemComponent.onCommandSelected.add((commandEventArgs) => {
            this.selectCommand(commandEventArgs.stateId);
        });
        this.commandListItemComponent.onVertexSelected.add((commandEventArgs) => {
            this.selectCommand(commandEventArgs.stateId);
            this.openShader(false);
        });
        this.commandListItemComponent.onFragmentSelected.add((commandEventArgs) => {
            this.selectCommand(commandEventArgs.stateId);
            this.openShader(true);
        });
        this.sourceCodeComponent.onSourceCodeCloseClicked.add(() => {
            this.displayCurrentCapture();
        });
        this.sourceCodeComponent.onTranslatedVertexSourceClicked.add((sourceCodeState) => {
            const state = this.mvx.getGenericState(this.sourceCodeComponentStateId);
            state.fragment = false;
            state.translated = true;
            this.mvx.updateState(this.sourceCodeComponentStateId, state);
        });
        this.sourceCodeComponent.onTranslatedFragmentSourceClicked.add((sourceCodeState) => {
            const state = this.mvx.getGenericState(this.sourceCodeComponentStateId);
            state.fragment = true;
            state.translated = true;
            this.mvx.updateState(this.sourceCodeComponentStateId, state);
        });
        this.sourceCodeComponent.onVertexSourceClicked.add((sourceCodeState) => {
            const state = this.mvx.getGenericState(this.sourceCodeComponentStateId);
            state.fragment = false;
            state.translated = false;
            this.mvx.updateState(this.sourceCodeComponentStateId, state);
        });
        this.sourceCodeComponent.onFragmentSourceClicked.add((sourceCodeState) => {
            const state = this.mvx.getGenericState(this.sourceCodeComponentStateId);
            state.fragment = true;
            state.translated = false;
            this.mvx.updateState(this.sourceCodeComponentStateId, state);
        });
        this.sourceCodeComponent.onSourceCodeChanged.add((sourceCodeState) => {
            this.onSourceCodeChanged.trigger({
                programId: sourceCodeState.state.programId,
                sourceFragment: sourceCodeState.state.sourceFragment,
                sourceVertex: sourceCodeState.state.sourceVertex,
                translatedSourceFragment: sourceCodeState.state.translatedSourceFragment,
                translatedSourceVertex: sourceCodeState.state.translatedSourceVertex,
            });
        });
        this.sourceCodeComponent.onBeautifyChanged.add((sourceCodeState) => {
            const state = this.mvx.getGenericState(this.sourceCodeComponentStateId);
            state.beautify = sourceCodeState.sender.checked;
            this.mvx.updateState(this.sourceCodeComponentStateId, state);
        });
        this.updateViewState();
    }
    saveCapture(capture) {
        const captureInString = JSON.stringify(capture, null, 4);
        const blob = new Blob([captureInString], { type: "octet/stream" });
        const fileName = "capture " + new Date(capture.startTime).toTimeString().split(" ")[0] + ".json";
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, fileName);
        }
        else {
            const a = document.createElement("a");
            const url = window.URL.createObjectURL(blob);
            a.setAttribute("href", url);
            a.setAttribute("download", fileName);
            a.click();
        }
    }
    selectCapture(captureStateId) {
        this.currentCommandId = -1;
        this.currentCaptureStateId = captureStateId;
        this.displayCurrentCapture();
    }
    selectCommand(commandStateId) {
        this.currentCommandStateId = commandStateId;
        this.currentVisualStateId = this.displayCurrentCommand();
        this.displayCurrentVisualState();
    }
    selectVisualState(visualStateId) {
        this.currentVisualStateId = visualStateId;
        this.currentCommandStateId = this.displayCurrentVisualState();
        this.displayCurrentCommand();
    }
    display() {
        this.visible = true;
        this.updateViewState();
    }
    hide() {
        this.visible = false;
        this.updateViewState();
    }
    addCapture(capture) {
        const captureSateId = this.mvx.insertChildState(this.captureListStateId, {
            capture,
            active: false,
        }, 0, this.captureListItemComponent);
        this.selectCapture(captureSateId);
        return captureSateId;
    }
    showSourceCodeError(error) {
        this.sourceCodeComponent.showError(error);
    }
    initKeyboardEvents() {
        this.rootPlaceHolder.addEventListener("keydown", (event) => {
            if (this.mvx.getGenericState(this.menuStateId).status !== 40 /* MenuStatus.Commands */) {
                return;
            }
            if (event.keyCode === 38) {
                event.preventDefault();
                event.stopPropagation();
                this.selectPreviousCommand();
            }
            else if (event.keyCode === 40) {
                event.preventDefault();
                event.stopPropagation();
                this.selectNextCommand();
            }
            else if (event.keyCode === 33) {
                event.preventDefault();
                event.stopPropagation();
                this.selectPreviousVisualState();
            }
            else if (event.keyCode === 34) {
                event.preventDefault();
                event.stopPropagation();
                this.selectNextVisualState();
            }
        });
    }
    openShader(fragment) {
        this.mvx.removeChildrenStates(this.contentStateId);
        const commandState = this.mvx.getGenericState(this.currentCommandStateId);
        this.sourceCodeComponentStateId = this.mvx.addChildState(this.contentStateId, {
            programId: commandState.capture.DrawCall.programStatus.program.__SPECTOR_Object_TAG.id,
            nameVertex: commandState.capture.DrawCall.shaders[0].name,
            nameFragment: commandState.capture.DrawCall.shaders[1].name,
            sourceVertex: commandState.capture.DrawCall.shaders[0].source,
            sourceFragment: commandState.capture.DrawCall.shaders[1].source,
            translatedSourceVertex: commandState.capture.DrawCall.shaders[0].translatedSource,
            translatedSourceFragment: commandState.capture.DrawCall.shaders[1].translatedSource,
            fragment,
            translated: false,
            editable: commandState.capture.DrawCall.programStatus.RECOMPILABLE,
            beautify: true
        }, this.sourceCodeComponent);
        this.commandDetailStateId = this.mvx.addChildState(this.contentStateId, null, this.commandDetailComponent);
        this.displayCurrentCommandDetail(commandState);
    }
    selectPreviousCommand() {
        const commandState = this.mvx.getGenericState(this.currentCommandStateId);
        if (commandState.previousCommandStateId < 0) {
            return;
        }
        this.selectCommand(commandState.previousCommandStateId);
    }
    selectNextCommand() {
        const commandState = this.mvx.getGenericState(this.currentCommandStateId);
        if (commandState.nextCommandStateId < 0) {
            return;
        }
        this.selectCommand(commandState.nextCommandStateId);
    }
    selectPreviousVisualState() {
        const visualState = this.mvx.getGenericState(this.currentVisualStateId);
        if (visualState.previousVisualStateId < 0) {
            return;
        }
        this.selectVisualState(visualState.previousVisualStateId);
    }
    selectNextVisualState() {
        const visualState = this.mvx.getGenericState(this.currentVisualStateId);
        if (visualState.nextVisualStateId < 0) {
            return;
        }
        this.selectVisualState(visualState.nextVisualStateId);
    }
    initMenuComponent() {
        this.mvx.updateState(this.menuStateId, {
            status: 0 /* MenuStatus.Captures */,
            searchText: this.searchText,
            commandCount: 0,
        });
        this.resultViewMenuComponent.onCloseClicked.add((_) => {
            this.hide();
        });
        this.resultViewMenuComponent.onCapturesClicked.add((_) => {
            this.displayCaptures();
        });
        this.resultViewMenuComponent.onCommandsClicked.add((_) => {
            this.displayCurrentCapture();
        });
        this.resultViewMenuComponent.onInformationClicked.add((_) => {
            this.displayInformation();
        });
        this.resultViewMenuComponent.onInitStateClicked.add((_) => {
            this.displayInitState();
        });
        this.resultViewMenuComponent.onEndStateClicked.add((_) => {
            this.displayEndState();
        });
        this.resultViewMenuComponent.onSearchTextChanged.add((menu) => {
            this.search(menu.sender.value);
        });
        this.resultViewMenuComponent.onSearchTextCleared.add((menu) => {
            this.mvx.updateState(this.menuStateId, {
                status: menu.state.status,
                searchText: "",
                commandCount: menu.state.commandCount,
            });
            this.search("");
        });
    }
    onCaptureRelatedAction(menuStatus) {
        const captureState = this.mvx.getGenericState(this.currentCaptureStateId);
        this.commandCount = captureState.capture.commands.length;
        this.mvx.removeChildrenStates(this.contentStateId);
        this.mvx.updateState(this.menuStateId, {
            status: menuStatus,
            searchText: this.searchText,
            commandCount: this.commandCount,
        });
        if (this.mvx.getGenericState(this.captureListStateId)) {
            this.mvx.updateState(this.captureListStateId, false);
        }
        return captureState.capture;
    }
    displayCaptures() {
        this.mvx.updateState(this.menuStateId, {
            status: 0 /* MenuStatus.Captures */,
            searchText: this.searchText,
            commandCount: this.commandCount,
        });
        this.mvx.updateState(this.captureListStateId, true);
    }
    displayInformation() {
        const capture = this.onCaptureRelatedAction(10 /* MenuStatus.Information */);
        const leftId = this.mvx.addChildState(this.contentStateId, true, this.informationColumnComponent);
        const rightId = this.mvx.addChildState(this.contentStateId, false, this.informationColumnComponent);
        const leftJsonContentStateId = this.mvx.addChildState(leftId, null, this.jsonContentComponent);
        this.displayJSONGroup(leftJsonContentStateId, "Canvas", capture.canvas);
        this.displayJSONGroup(leftJsonContentStateId, "Context", capture.context);
        const rightJsonContentStateId = this.mvx.addChildState(rightId, null, this.jsonContentComponent);
        for (const analysis of capture.analyses) {
            if (analysis.analyserName === "Primitives") {
                this.displayJSONGroup(rightJsonContentStateId, "Vertices count", analysis);
            }
            else {
                this.displayJSONGroup(rightJsonContentStateId, analysis.analyserName, analysis);
            }
        }
        this.displayJSONGroup(rightJsonContentStateId, "Frame Memory Changes", capture.frameMemory);
        this.displayJSONGroup(rightJsonContentStateId, "Total Memory (seconds since application start: bytes)", capture.memory);
    }
    displayJSON(parentGroupId, json) {
        if (json.VisualState) {
            this.mvx.addChildState(parentGroupId, json.VisualState, this.jsonVisualStateItemComponent);
        }
        for (const key in json) {
            if (key === "VisualState" || key === "analyserName" || key === "source" || key === "translatedSource") {
                continue;
            }
            const value = json[key];
            if (key === "visual") {
                for (const target in value) {
                    if (value.hasOwnProperty(target) && value[target]) {
                        this.mvx.addChildState(parentGroupId, {
                            key: target,
                            value: value[target],
                            pixelated: json["samplerMagFilter"] === "NEAREST" || json["magFilter"] === "NEAREST",
                        }, this.jsonImageItemComponent);
                    }
                }
            }
            else {
                const result = this.getJSONAsString(parentGroupId, key, value);
                if (result === null || result === undefined) {
                    continue;
                }
                else if (this.toFilter(key) && this.toFilter(value)) {
                    continue;
                }
                this.mvx.addChildState(parentGroupId, {
                    key,
                    value: result,
                }, this.jsonItemComponent);
            }
            if (value && value.__SPECTOR_Metadata) {
                this.displayJSONGroup(parentGroupId, "Metadata", value.__SPECTOR_Metadata);
            }
        }
    }
    getJSONAsString(parentGroupId, key, json) {
        if (json === null) {
            return "null";
        }
        if (json === undefined) {
            return "undefined";
        }
        if (typeof json === "number") {
            // Do not consider the isFinite case yet for browser compat.
            if (Math.floor(json) === json) {
                return json.toFixed(0);
            }
            return json.toFixed(4);
        }
        if (typeof json === "string") {
            return json;
        }
        if (typeof json === "boolean") {
            return json ? "true" : "false";
        }
        if (json.length === 0) {
            return "Empty Array";
        }
        if (json.length) {
            const arrayResult = [];
            for (let i = 0; i < json.length; i++) {
                const resultItem = this.getJSONAsString(parentGroupId, `${key}(${i.toFixed(0)})`, json[i]);
                if (resultItem !== null) {
                    arrayResult.push(resultItem);
                }
            }
            return arrayResult.length === 0 ? null : arrayResult.join(", ");
        }
        if (json.help) {
            this.mvx.addChildState(parentGroupId, {
                key,
                value: json.name,
                help: json.help,
            }, this.jsonHelpItemComponent);
            return null;
        }
        if (json.__SPECTOR_Object_TAG) {
            return json.__SPECTOR_Object_TAG.displayText;
        }
        if (json.displayText) {
            return json.displayText;
        }
        if (typeof json === "object") {
            this.displayJSONGroup(parentGroupId, key, json);
        }
        return null;
    }
    displayJSONGroup(parentGroupId, title, json) {
        if (!json) {
            return;
        }
        const groupId = this.mvx.addChildState(parentGroupId, title, this.jsonGroupComponent);
        this.displayJSON(groupId, json);
        if (!this.mvx.hasChildren(groupId)) {
            this.mvx.removeState(groupId);
        }
    }
    displayInitState() {
        const capture = this.onCaptureRelatedAction(20 /* MenuStatus.InitState */);
        const jsonContentStateId = this.mvx.addChildState(this.contentStateId, null, this.jsonContentComponent);
        this.displayJSON(jsonContentStateId, capture.initState);
    }
    displayEndState() {
        const capture = this.onCaptureRelatedAction(30 /* MenuStatus.EndState */);
        const jsonContentStateId = this.mvx.addChildState(this.contentStateId, null, this.jsonContentComponent);
        this.displayJSON(jsonContentStateId, capture.endState);
    }
    displayCurrentCapture() {
        const capture = this.onCaptureRelatedAction(40 /* MenuStatus.Commands */);
        this.mvx.updateAllChildrenGenericState(this.captureListStateId, (state) => { state.active = false; return state; });
        this.mvx.updateState(this.currentCaptureStateId, {
            capture,
            active: true,
        });
        this.createVisualStates(capture);
        this.commandListStateId = this.mvx.addChildState(this.contentStateId, null, this.commandListComponent);
        this.commandDetailStateId = this.mvx.addChildState(this.contentStateId, null, this.commandDetailComponent);
        this.createCommands(capture);
    }
    displayCurrentCommand() {
        if (this.mvx.getGenericState(this.menuStateId).status !== 40 /* MenuStatus.Commands */) {
            return -1;
        }
        const commandState = this.mvx.getGenericState(this.currentCommandStateId);
        const command = commandState.capture;
        this.currentCommandId = command.id;
        this.mvx.updateAllChildrenGenericState(this.commandListStateId, (state) => { state.active = false; return state; });
        this.mvx.updateState(this.currentCommandStateId, {
            capture: command,
            visualStateId: commandState.visualStateId,
            previousCommandStateId: commandState.previousCommandStateId,
            nextCommandStateId: commandState.nextCommandStateId,
            active: true,
        });
        return this.displayCurrentCommandDetail(commandState);
    }
    displayCurrentCommandDetail(commandState) {
        const command = commandState.capture;
        this.mvx.removeChildrenStates(this.commandDetailStateId);
        const visualState = this.mvx.getGenericState(commandState.visualStateId);
        this.mvx.addChildState(this.commandDetailStateId, visualState.VisualState, this.jsonVisualStateItemComponent);
        let status = "Unknown";
        switch (command.status) {
            case 50 /* CommandCaptureStatus.Deprecated */:
                status = "Deprecated";
                break;
            case 10 /* CommandCaptureStatus.Unused */:
                status = "Unused";
                break;
            case 20 /* CommandCaptureStatus.Disabled */:
                status = "Disabled";
                break;
            case 30 /* CommandCaptureStatus.Redundant */:
                status = "Redundant";
                break;
            case 40 /* CommandCaptureStatus.Valid */:
                status = "Valid";
                break;
        }
        const helpLink = _commandList_mdnCommandLinkHelper__WEBPACK_IMPORTED_MODULE_21__.MDNCommandLinkHelper.getMDNLink(command.name);
        if (command.result) {
            this.displayJSONGroup(this.commandDetailStateId, "Global", {
                name: { help: helpLink, name: command.name },
                duration: command.commandEndTime - command.startTime,
                result: command.result,
                status,
            });
        }
        else if (command.name !== "LOG") {
            this.displayJSONGroup(this.commandDetailStateId, "Global", {
                name: { help: helpLink, name: command.name },
                duration: command.commandEndTime - command.startTime,
                status,
            });
        }
        for (const key in command) {
            if (key === "VisualState" || key === "result") {
                continue;
            }
            else if (typeof command[key] === "object") {
                this.displayJSONGroup(this.commandDetailStateId, key, command[key]);
            }
        }
        return commandState.visualStateId;
    }
    displayCurrentVisualState() {
        if (this.mvx.getGenericState(this.menuStateId).status !== 40 /* MenuStatus.Commands */) {
            return null;
        }
        const visualState = this.mvx.getGenericState(this.currentVisualStateId);
        if (visualState.commandStateId === Number.MIN_VALUE) {
            this.displayInitState();
        }
        else if (visualState.commandStateId === Number.MAX_VALUE) {
            this.displayEndState();
        }
        this.mvx.updateAllChildrenGenericState(this.visualStateListStateId, (state) => { state.active = false; return state; });
        visualState.active = true;
        this.mvx.updateState(this.currentVisualStateId, visualState);
        return visualState.commandStateId;
    }
    createVisualStates(capture) {
        this.visualStateListStateId = this.mvx.addChildState(this.contentStateId, null, this.visualStateListComponent);
        this.mvx.removeChildrenStates(this.visualStateListStateId);
        this.initVisualStateId = this.mvx.addChildState(this.visualStateListStateId, {
            VisualState: capture.initState.VisualState,
            time: capture.startTime,
            commandStateId: Number.MIN_VALUE,
            active: false,
        }, this.visualStateListItemComponent);
    }
    createCommands(capture) {
        this.mvx.removeChildrenStates(this.commandListStateId);
        let tempVisualStateId = this.initVisualStateId;
        let visualStateSet = false;
        let previousCommandState = null;
        let previousCommandStateId = -1;
        let previousVisualState = null;
        let previousVisualStateId = -1;
        for (let i = 0; i < capture.commands.length; i++) {
            const commandCapture = capture.commands[i];
            if (this.toFilter(commandCapture.marker) &&
                this.toFilter(commandCapture.name) &&
                commandCapture.id !== this.currentCommandId &&
                (commandCapture.name !== "LOG" || this.toFilter(commandCapture.text))) {
                continue;
            }
            const commandState = {
                capture: commandCapture,
                previousCommandStateId,
                nextCommandStateId: -1,
                visualStateId: undefined,
                active: false,
            };
            const commandStateId = this.mvx.addChildState(this.commandListStateId, commandState, this.commandListItemComponent);
            if (previousCommandState) {
                previousCommandState = this.mvx.getGenericState(previousCommandStateId);
                previousCommandState.nextCommandStateId = commandStateId;
                this.mvx.updateState(previousCommandStateId, previousCommandState);
            }
            previousCommandStateId = commandStateId;
            previousCommandState = commandState;
            if (commandCapture.VisualState) {
                const visualState = {
                    VisualState: commandCapture.VisualState,
                    time: commandCapture.endTime,
                    commandStateId,
                    active: false,
                    previousVisualStateId,
                    nextVisualStateId: -1,
                };
                tempVisualStateId = this.mvx.addChildState(this.visualStateListStateId, visualState, this.visualStateListItemComponent);
                if (previousVisualState) {
                    previousVisualState = this.mvx.getGenericState(previousVisualStateId);
                    previousVisualState.nextVisualStateId = tempVisualStateId;
                    this.mvx.updateState(previousVisualStateId, previousVisualState);
                }
                previousVisualState = visualState;
                previousVisualStateId = tempVisualStateId;
                visualStateSet = true;
            }
            else if (!visualStateSet) {
                const initVisualState = this.mvx.getGenericState(this.initVisualStateId);
                initVisualState.commandStateId = commandStateId;
                initVisualState.previousVisualStateId = -1;
                initVisualState.nextVisualStateId = -1;
                this.mvx.updateState(this.initVisualStateId, initVisualState);
                previousVisualState = initVisualState;
                previousVisualStateId = tempVisualStateId;
                visualStateSet = true;
            }
            commandState.visualStateId = tempVisualStateId;
            this.mvx.updateState(commandStateId, commandState);
            if ((this.currentCommandId === -1 && i === 0)
                || (this.currentCommandId === commandCapture.id)) {
                this.currentCommandStateId = commandStateId;
                this.displayCurrentCommand();
                this.currentVisualStateId = tempVisualStateId;
                this.displayCurrentVisualState();
            }
        }
    }
    updateViewState() {
        this.mvx.updateState(this.rootStateId, this.visible);
    }
    toFilter(text) {
        text += "";
        text = text.toLowerCase();
        if (this.searchText && this.searchText.length > 2 && text.indexOf(this.searchText.toLowerCase()) === -1) {
            return true;
        }
        return false;
    }
    search(text) {
        this.searchText = text;
        const status = this.mvx.getGenericState(this.menuStateId).status;
        switch (status) {
            case 0 /* MenuStatus.Captures */:
                this.displayCurrentCapture();
                break;
            case 40 /* MenuStatus.Commands */:
                this.displayCurrentCapture();
                break;
            case 30 /* MenuStatus.EndState */:
                this.displayEndState();
                break;
            case 10 /* MenuStatus.Information */:
                this.displayInformation();
                break;
            case 20 /* MenuStatus.InitState */:
                this.displayInitState();
                break;
        }
        this.searchText = "";
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/resultViewComponent.ts":
/*!****************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/resultViewComponent.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultViewComponent": () => (/* binding */ ResultViewComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class ResultViewComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
            <div childrenContainer="true" class="resultViewComponent ${state ? "active" : ""}">
            </div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/sourceCode/sourceCodeComponent.ts":
/*!***************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/sourceCode/sourceCodeComponent.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceCodeComponent": () => (/* binding */ SourceCodeComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class SourceCodeComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
        this.onTranslatedVertexSourceClicked = this.createEvent("onTranslatedVertexSourceClicked");
        this.onTranslatedFragmentSourceClicked = this.createEvent("onTranslatedFragmentSourceClicked");
        this.onVertexSourceClicked = this.createEvent("onVertexSourceClicked");
        this.onFragmentSourceClicked = this.createEvent("onFragmentSourceClicked");
        this.onSourceCodeCloseClicked = this.createEvent("onSourceCodeCloseClicked");
        this.onSourceCodeChanged = this.createEvent("onSourceCodeChanged");
        this.onBeautifyChanged = this.createEvent("onBeautifyChanged");
    }
    showError(errorMessage) {
        if (!this.editor) {
            return;
        }
        errorMessage = errorMessage || "";
        const annotations = [];
        if (errorMessage) {
            const errorChecker = /^.*ERROR:\W([0-9]+):([0-9]+):(.*)$/gm;
            let errors = errorChecker.exec(errorMessage);
            while (errors != null) {
                annotations.push({
                    row: +errors[2] - 1,
                    column: errors[1],
                    text: errors[3] || "Error",
                    type: "error", // also warning and information
                });
                errors = errorChecker.exec(errorMessage);
            }
        }
        this.editor.getSession().setAnnotations(annotations);
    }
    render(state, stateId) {
        const source = state.fragment ? state.sourceFragment : state.sourceVertex;
        let originalShader;
        // tslint:disable-next-line:prefer-conditional-expression
        if (state.translated) {
            originalShader = state.fragment ? state.translatedSourceFragment : state.translatedSourceVertex;
        }
        else {
            originalShader = source !== null && source !== void 0 ? source : "";
        }
        const displayedShader = state.beautify ? this._indentIfdef(this._beautify(originalShader)) : originalShader;
        const htmlString = this.htmlTemplate `
        <div class="sourceCodeComponentContainer">
            <div class="sourceCodeMenuComponentContainer">
                <ul class="sourceCodeMenuComponent">
                    $${state.translatedSourceVertex ? this.htmlTemplate `<li><a class="${!state.fragment && state.translated ? "active" : ""}" href="#" role="button" commandName="onTranslatedVertexSourceClicked">Translated Vertex</a></li>` : ""}
                    $${state.translatedSourceFragment ? this.htmlTemplate `<li><a class="${state.fragment && state.translated ? "active" : ""}" href="#" role="button" commandName="onTranslatedFragmentSourceClicked">Translated Fragment</a></li>` : ""}
                    <li><a class="${!state.fragment && !state.translated ? "active" : ""}" href="#" role="button" commandName="onVertexSourceClicked">Vertex</a></li>
                    <li><a class="${state.fragment && !state.translated ? "active" : ""}" href="#" role="button" commandName="onFragmentSourceClicked">Fragment</a></li>
                    <li><a href="#" role="button" commandName="onSourceCodeCloseClicked">Close</a></li>
                </ul>
            </div>
            $${this.htmlTemplate `<div class="sourceCodeComponent">${displayedShader}</div>`}
            <div class="sourceCodeMenuComponentFooter">
                <p>
                    <label><input type="checkbox" commandName="onBeautifyChanged" ${state.beautify ? "checked" : ""} /> Beautify</label>
                </p>
            </div>
        </div>`;
        const element = this.renderElementFromTemplate(htmlString.replace(/<br>/g, "\n"), state, stateId);
        this.editor = ace.edit(element.querySelector(".sourceCodeComponent"));
        this.editor.setTheme("ace/theme/monokai");
        this.editor.getSession().setMode("ace/mode/glsl");
        this.editor.setShowPrintMargin(false);
        let timeoutId = -1;
        this.editor.setReadOnly(!state.editable && !state.translated);
        this.editor.getSession().on("change", (e) => {
            if (timeoutId !== -1) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                this._triggerCompilation(this.editor, state, element, stateId);
            }, 1500);
        });
        return element;
    }
    _triggerCompilation(editor, state, element, stateId) {
        if (state.fragment) {
            state.sourceFragment = editor.getValue();
        }
        else {
            state.sourceVertex = editor.getValue();
        }
        this.triggerEvent("onSourceCodeChanged", element, state, stateId);
    }
    /**
     * Beautify the given string : correct indentation according to brackets
     */
    _beautify(glsl, level = 0) {
        let spaces = "";
        for (let i = 0; i < level; i++) {
            spaces += "    "; // 4 spaces
        }
        const untrimmedGlsl = glsl;
        glsl = glsl.trim();
        // If preprocessor, indent the preprocessor line and beautify the rest
        if (glsl[0] === "#") {
            // Figure out if we trimmed away a newline
            const preprocessorStart = untrimmedGlsl.indexOf("#");
            const newline = untrimmedGlsl.indexOf("\n");
            let preservedNewline = "";
            if (newline !== -1) {
                if (newline < preprocessorStart) {
                    preservedNewline = spaces + "\n";
                }
            }
            const firstLineEnd = glsl.indexOf("\n");
            const preprocessorLineEnd = (firstLineEnd !== -1) ? firstLineEnd : glsl.length;
            const preprocessorLine = glsl.substr(0, preprocessorLineEnd);
            const rest = glsl.substr(preprocessorLineEnd + 1);
            return preservedNewline + spaces + preprocessorLine + "\n" + this._beautify(rest, level);
        }
        // return condition : no brackets at all
        glsl = this._adaptComments(glsl);
        const brackets = this._getBracket(glsl);
        const firstBracket = brackets.firstIteration;
        const lastBracket = brackets.lastIteration;
        let result;
        // If no brackets, return the indented string
        if (firstBracket === -1) {
            glsl = spaces + glsl; // indent first line
            glsl = glsl.replace(/;(?![^\(]*\))\s*(\/\/.*)?/g, (x) => x.trim() + "\n");
            glsl = glsl.replace(/\s*([*+-/=><\s]*=)\s*/g, (x) => " " + x.trim() + " "); // space around =, *=, +=, -=, /=, ==, >=, <=
            glsl = glsl.replace(/\s*(,)\s*/g, (x) => x.trim() + " "); // space after ,
            glsl = glsl.replace(/\n[ \t]+/g, "\n"); // trim Start
            glsl = glsl.replace(/\n/g, "\n" + spaces); // indentation
            glsl = glsl.replace(/\s+$/g, "");
            glsl = glsl.replace(/\n+$/g, "");
            result = glsl;
        }
        else {
            // if brackets, beautify the inside
            // let insideWithBrackets = glsl.substr(firstBracket, lastBracket-firstBracket+1);
            const left = glsl.substr(0, firstBracket).trim();
            const right = glsl.substr(lastBracket + 1, glsl.length).trim();
            const inside = glsl.substr(firstBracket + 1, lastBracket - firstBracket - 1).trim();
            const prettyLeft = (left === "") ? spaces + "{" : this._beautify(left, level) + " {\n";
            const prettyInside = this._beautify(inside, level + 1);
            const prettyRight = this._beautify(right, level);
            result = prettyLeft + prettyInside + "\n" + spaces + "}\n" + prettyRight;
            result = result.replace(/\s*\n+\s*;/g, ";"); // Orphan ;
        }
        result = result.replace(SourceCodeComponent.semicolonReplacementKeyRegex, ";");
        result = result.replace(SourceCodeComponent.openCurlyReplacementKeyRegex, "{");
        result = result.replace(SourceCodeComponent.closeCurlyReplacementKeyRegex, "}");
        return result;
    }
    _adaptComments(str) {
        let singleLineComment = false;
        let multiLineComment = false;
        for (let index = 0; index < str.length; index++) {
            const char = str[index];
            if (char === "/") {
                if (str[index - 1] === "*") {
                    multiLineComment = false;
                }
                else if (str[index + 1] === "*") {
                    if (!singleLineComment) {
                        multiLineComment = true;
                        index++;
                    }
                }
                else if (str[index + 1] === "/") {
                    if (!multiLineComment) {
                        singleLineComment = true;
                        index++;
                    }
                }
            }
            else if (char === "\n") {
                singleLineComment = false;
            }
            else if (char === ";") {
                if (singleLineComment || multiLineComment) {
                    str = str.substr(0, index) + SourceCodeComponent.semicolonReplacementKey + str.substr(index + 1);
                }
            }
            else if (char === "{") {
                if (singleLineComment || multiLineComment) {
                    str = str.substr(0, index) + SourceCodeComponent.openCurlyReplacementKey + str.substr(index + 1);
                }
            }
            else if (char === "}") {
                if (singleLineComment || multiLineComment) {
                    str = str.substr(0, index) + SourceCodeComponent.closeCurlyReplacementKey + str.substr(index + 1);
                }
            }
        }
        return str;
    }
    /**
     * Returns the position of the first "{" and the corresponding "}"
     * @param str the Shader source code as a string
     * @param searchFrom Search open brackets from this position
     */
    _getBracket(str, searchFrom = -1) {
        const fb = str.indexOf("{", searchFrom);
        const arr = str.substr(fb + 1).split("");
        let counter = 1;
        let currentPosInString = fb;
        let lastBracketIndex = 0;
        for (const char of arr) {
            currentPosInString++;
            if (char === "{") {
                counter++;
            }
            if (char === "}") {
                counter--;
            }
            if (counter === 0) {
                lastBracketIndex = currentPosInString;
                break;
            }
        }
        // More open than close.
        if (fb > -1 && lastBracketIndex === 0) {
            return this._getBracket(str, fb + 1);
        }
        return { firstIteration: fb, lastIteration: lastBracketIndex };
    }
    _indentIfdef(str) {
        let level = 0;
        const arr2 = str.split("\n");
        for (let index = 0; index < arr2.length; index++) {
            const line = arr2[index];
            if (line.indexOf("#endif") !== -1) {
                level--;
            }
            if (line.indexOf("#else") !== -1) {
                level--;
            }
            let spaces = "";
            for (let i = 0; i < level; i++) {
                spaces += "    "; // 4 spaces
            }
            arr2[index] = spaces + line;
            if (line.indexOf("#if") !== -1 || line.indexOf("#else") !== -1) {
                level++;
            }
        }
        return arr2.join("\n");
    }
}
SourceCodeComponent.semicolonReplacementKey = "[[[semicolonReplacementKey]]]";
SourceCodeComponent.semicolonReplacementKeyRegex = new RegExp("\\[\\[\\[semicolonReplacementKey\\]\\]\\]", "g");
SourceCodeComponent.openCurlyReplacementKey = "[[[openCurlyReplacementKey]]]";
SourceCodeComponent.openCurlyReplacementKeyRegex = new RegExp("\\[\\[\\[openCurlyReplacementKey\\]\\]\\]", "g");
SourceCodeComponent.closeCurlyReplacementKey = "[[[closeCurlyReplacementKey]]]";
SourceCodeComponent.closeCurlyReplacementKeyRegex = new RegExp("\\[\\[\\[closeCurlyReplacementKey\\]\\]\\]", "g");


/***/ }),

/***/ "./src/embeddedFrontend/resultView/visualStateList/visualStateListComponent.ts":
/*!*************************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/visualStateList/visualStateListComponent.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualStateListComponent": () => (/* binding */ VisualStateListComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");

class VisualStateListComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    render(state, stateId) {
        const htmlString = this.htmlTemplate `
        <div class="visualStateListComponent">
            <ul childrenContainer="true"></ul>
        </div>`;
        return this.renderElementFromTemplate(htmlString, state, stateId);
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/resultView/visualStateList/visualStateListItemComponent.ts":
/*!*****************************************************************************************!*\
  !*** ./src/embeddedFrontend/resultView/visualStateList/visualStateListItemComponent.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualStateListItemComponent": () => (/* binding */ VisualStateListItemComponent)
/* harmony export */ });
/* harmony import */ var _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mvx/baseComponent */ "./src/embeddedFrontend/mvx/baseComponent.ts");
/* harmony import */ var _ux_scrollIntoViewHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ux/scrollIntoViewHelper */ "./src/embeddedFrontend/ux/scrollIntoViewHelper.ts");


class VisualStateListItemComponent extends _mvx_baseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
        this.onVisualStateSelected = this.createEvent("onVisualStateSelected");
    }
    render(state, stateId) {
        const liHolder = document.createElement("li");
        if (state.active) {
            liHolder.className = "active";
            setTimeout(() => {
                _ux_scrollIntoViewHelper__WEBPACK_IMPORTED_MODULE_1__.ScrollIntoViewHelper.scrollIntoView(liHolder);
            }, 1);
        }
        if (state.VisualState.Attachments) {
            for (const imageState of state.VisualState.Attachments) {
                if (!imageState.src) {
                    continue;
                }
                const img = document.createElement("img");
                img.src = encodeURI(imageState.src);
                liHolder.appendChild(img);
                if (state.VisualState.Attachments.length > 1) {
                    const attachment = document.createElement("span");
                    attachment.innerText = imageState.attachmentName;
                    liHolder.appendChild(attachment);
                }
                if (imageState.textureLayer) {
                    const layer = document.createElement("span");
                    layer.innerText = "Layer: " + imageState.textureLayer;
                    liHolder.appendChild(layer);
                }
                if (imageState.textureCubeMapFace) {
                    const face = document.createElement("span");
                    face.innerText = imageState.textureCubeMapFace;
                    liHolder.appendChild(face);
                }
            }
        }
        else {
            const status = document.createElement("span");
            status.innerText = state.VisualState.FrameBufferStatus;
            liHolder.appendChild(status);
        }
        const fbo = document.createElement("span");
        fbo.innerText = (state.VisualState.FrameBuffer) ?
            "Frame buffer: " + state.VisualState.FrameBuffer.__SPECTOR_Object_TAG.id :
            "Canvas frame buffer";
        liHolder.appendChild(fbo);
        this.mapEventListener(liHolder, "click", "onVisualStateSelected", state, stateId);
        return liHolder;
    }
}


/***/ }),

/***/ "./src/embeddedFrontend/ux/scrollIntoViewHelper.ts":
/*!*********************************************************!*\
  !*** ./src/embeddedFrontend/ux/scrollIntoViewHelper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollIntoViewHelper": () => (/* binding */ ScrollIntoViewHelper)
/* harmony export */ });
class ScrollIntoViewHelper {
    static scrollIntoView(element) {
        const elementRect = element.getBoundingClientRect();
        let parentElement = element.parentElement;
        while (parentElement) {
            if (parentElement.clientHeight !== parentElement.offsetHeight) {
                break;
            }
            parentElement = parentElement.parentElement;
        }
        if (!parentElement) {
            return;
        }
        const parentRect = parentElement.getBoundingClientRect();
        if (elementRect.top < parentRect.top) {
            element.scrollIntoView(true);
        }
        else if (elementRect.bottom > parentRect.bottom) {
            element.scrollIntoView(false);
        }
    }
}


/***/ }),

/***/ "./src/shared/utils/logger.ts":
/*!************************************!*\
  !*** ./src/shared/utils/logger.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["noLog"] = 0] = "noLog";
    LogLevel[LogLevel["error"] = 1] = "error";
    LogLevel[LogLevel["warning"] = 2] = "warning";
    LogLevel[LogLevel["info"] = 3] = "info";
})(LogLevel || (LogLevel = {}));
class Logger {
    static error(msg, ...restOfMsg) {
        if (this.level > 0) {
            // tslint:disable-next-line:no-console
            console.error(msg, restOfMsg);
        }
    }
    static warn(msg, ...restOfMsg) {
        if (this.level > 1) {
            // tslint:disable-next-line:no-console
            console.warn(msg, restOfMsg);
        }
    }
    static info(msg, ...restOfMsg) {
        if (this.level > 2) {
            // tslint:disable-next-line:no-console
            console.log(msg, restOfMsg);
        }
    }
}
Logger.level = LogLevel.warning;


/***/ }),

/***/ "./src/shared/utils/merge.ts":
/*!***********************************!*\
  !*** ./src/shared/utils/merge.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
function merge(first, second) {
    const result = {};
    for (const id in first) {
        if (first.hasOwnProperty(id)) {
            result[id] = first[id];
        }
    }
    for (const id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}


/***/ }),

/***/ "./src/shared/utils/observable.ts":
/*!****************************************!*\
  !*** ./src/shared/utils/observable.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
class Observable {
    constructor() {
        this.callbacks = [];
        this.counter = -1;
    }
    add(callback, context) {
        this.counter++;
        if (context) {
            callback = callback.bind(context);
        }
        this.callbacks[this.counter] = callback;
        return this.counter;
    }
    remove(id) {
        delete this.callbacks[id];
    }
    clear() {
        this.callbacks = {};
    }
    trigger(value) {
        for (const key in this.callbacks) {
            if (this.callbacks.hasOwnProperty(key)) {
                this.callbacks[key](value);
            }
        }
    }
}


/***/ }),

/***/ "./src/shared/utils/stackTrace.ts":
/*!****************************************!*\
  !*** ./src/shared/utils/stackTrace.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackTrace": () => (/* binding */ StackTrace)
/* harmony export */ });
class StackTrace {
    static getStackTrace(removeFirstNCalls = 0, removeLastNCalls = 0) {
        const callstack = [];
        try {
            throw new Error("Errorator.");
        }
        catch (err) {
            if (err.stack) {
                const lines = err.stack.split("\n");
                for (let i = 0, len = lines.length; i < len; i++) {
                    if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
                        callstack.push(lines[i]);
                    }
                    else if (lines[i].indexOf("    at ") === 0) {
                        lines[i] = lines[i].replace("    at ", "");
                        callstack.push(lines[i]);
                    }
                    else if (lines[i].indexOf("/<@http") !== -1) {
                        lines[i] = lines[i].substring(lines[i].indexOf("/<@http") + 3);
                        callstack.push(lines[i]);
                    }
                    else if (lines[i].indexOf("@http") !== -1) {
                        lines[i] = lines[i].replace("@http", " (http");
                        lines[i] = lines[i] + ")";
                        callstack.push(lines[i]);
                    }
                }
            }
            else if (err.message) {
                const lines = err.message.split("\n");
                for (let i = 0, len = lines.length; i < len; i++) {
                    if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
                        let entry = lines[i];
                        // Append next line also since it has the file info
                        if (lines[i + 1]) {
                            entry += " at " + lines[i + 1];
                            i++;
                        }
                        callstack.push(entry);
                    }
                }
            }
        }
        if (!callstack) {
            // tslint:disable-next-line:no-arg
            let currentFunction = arguments.callee.caller;
            while (currentFunction) {
                const fn = currentFunction.toString();
                const fname = fn.substring(fn.indexOf("function") + 8, fn.indexOf("")) || "anonymous";
                callstack.push(fname);
                currentFunction = currentFunction.caller;
            }
        }
        // Remove this call and Spy.
        if (callstack) {
            callstack.shift();
            for (let i = 0; i < removeFirstNCalls; i++) {
                if (callstack.length > 0) {
                    callstack.shift();
                }
                else {
                    break;
                }
            }
            for (let i = 0; i < removeLastNCalls; i++) {
                if (callstack.length > 0) {
                    callstack.pop();
                }
                else {
                    break;
                }
            }
        }
        return callstack;
    }
}


/***/ }),

/***/ "./src/shared/utils/time.ts":
/*!**********************************!*\
  !*** ./src/shared/utils/time.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Time": () => (/* binding */ Time)
/* harmony export */ });
class Time {
    constructor() {
        if (window.performance && window.performance.now) {
            this.nowFunction = this.dateBasedPerformanceNow.bind(this);
        }
        else {
            const date = new Date();
            this.nowFunction = date.getTime.bind(date);
        }
    }
    dateBasedPerformanceNow() {
        if (performance.timing && performance.timing.navigationStart) {
            return performance.timing.navigationStart + performance.now();
        }
        else {
            return performance.now();
        }
    }
    static get now() {
        return Time.instance.nowFunction();
    }
}
Time.instance = new Time();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/spector.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmbeddedFrontend": () => (/* binding */ EmbeddedFrontend),
/* harmony export */   "Spector": () => (/* binding */ Spector)
/* harmony export */ });
/* harmony import */ var _backend_utils_programRecompilerHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend/utils/programRecompilerHelper */ "./src/backend/utils/programRecompilerHelper.ts");
/* harmony import */ var _shared_utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/utils/logger */ "./src/shared/utils/logger.ts");
/* harmony import */ var _shared_utils_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/utils/observable */ "./src/shared/utils/observable.ts");
/* harmony import */ var _backend_spies_contextSpy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend/spies/contextSpy */ "./src/backend/spies/contextSpy.ts");
/* harmony import */ var _backend_spies_timeSpy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend/spies/timeSpy */ "./src/backend/spies/timeSpy.ts");
/* harmony import */ var _backend_spies_canvasSpy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backend/spies/canvasSpy */ "./src/backend/spies/canvasSpy.ts");
/* harmony import */ var _backend_webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backend/webGlObjects/webGlObjects */ "./src/backend/webGlObjects/webGlObjects.ts");
/* harmony import */ var _embeddedFrontend_captureMenu_captureMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./embeddedFrontend/captureMenu/captureMenu */ "./src/embeddedFrontend/captureMenu/captureMenu.ts");
/* harmony import */ var _embeddedFrontend_resultView_resultView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./embeddedFrontend/resultView/resultView */ "./src/embeddedFrontend/resultView/resultView.ts");
/* harmony import */ var _backend_spies_xrSpy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./backend/spies/xrSpy */ "./src/backend/spies/xrSpy.ts");










const CAPTURE_LIMIT = 10000; // Limit command count to 10000 record (to be kept in sync with the documentation)
const EmbeddedFrontend = {
    CaptureMenu: _embeddedFrontend_captureMenu_captureMenu__WEBPACK_IMPORTED_MODULE_7__.CaptureMenu,
    ResultView: _embeddedFrontend_resultView_resultView__WEBPACK_IMPORTED_MODULE_8__.ResultView,
};
class Spector {
    constructor(options = {}) {
        this.noFrameTimeout = -1;
        this.options = Object.assign({ enableXRCapture: false }, options);
        this.captureNextFrames = 0;
        this.captureNextCommands = 0;
        this.quickCapture = false;
        this.fullCapture = false;
        this.retry = 0;
        this.contexts = [];
        this.timeSpy = new _backend_spies_timeSpy__WEBPACK_IMPORTED_MODULE_4__.TimeSpy();
        this.onCaptureStarted = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this.onCapture = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this.onError = new _shared_utils_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this.timeSpy.onFrameStart.add(this.onFrameStart, this);
        this.timeSpy.onFrameEnd.add(this.onFrameEnd, this);
        this.timeSpy.onError.add(this.onErrorInternal, this);
        // if we want to capture WebXR sessions, we have to polyfill a bunch of stuff to ensure Spector.JS has access to the session
        // and the GL context. So we do that here.
        if (this.options.enableXRCapture) {
            this.xrSpy = new _backend_spies_xrSpy__WEBPACK_IMPORTED_MODULE_9__.XRSpy(this.timeSpy);
        }
    }
    static getFirstAvailable3dContext(canvas) {
        // Custom detection to run in the extension.
        return this.tryGetContextFromHelperField(canvas) ||
            this.tryGetContextFromCanvas(canvas, "webgl") ||
            this.tryGetContextFromCanvas(canvas, "experimental-webgl") ||
            this.tryGetContextFromCanvas(canvas, "webgl2") ||
            this.tryGetContextFromCanvas(canvas, "experimental-webgl2");
    }
    static tryGetContextFromHelperField(canvas) {
        const type = canvas instanceof HTMLCanvasElement ?
            canvas.getAttribute("__spector_context_type") :
            canvas.__spector_context_type;
        if (type) {
            return this.tryGetContextFromCanvas(canvas, type);
        }
        return undefined;
    }
    static tryGetContextFromCanvas(canvas, type) {
        let context;
        try {
            // Cast canvas to any because lib.dom.d.ts types are not suitably
            // general to allow for custom canvas context types that are
            // potentially specified by __spector_context_type:
            context = canvas.getContext(type);
        }
        catch (e) {
            // Nothing to do here, canvas has not been found.;
        }
        return context;
    }
    displayUI(disableTracking = false) {
        if (false) {}
    }
    getResultUI() {
        if (false) {}
        return this.resultView;
    }
    getCaptureUI() {
        if (!this.captureMenu) {
            this.captureMenu = new _embeddedFrontend_captureMenu_captureMenu__WEBPACK_IMPORTED_MODULE_7__.CaptureMenu();
        }
        return this.captureMenu;
    }
    rebuildProgramFromProgramId(programId, vertexSourceCode, fragmentSourceCode, onCompiled, onError) {
        const program = _backend_webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_6__.Program.getFromGlobalStore(programId);
        this.rebuildProgram(program, vertexSourceCode, fragmentSourceCode, onCompiled, onError);
    }
    rebuildProgram(program, vertexSourceCode, fragmentSourceCode, onCompiled, onError) {
        _backend_utils_programRecompilerHelper__WEBPACK_IMPORTED_MODULE_0__.ProgramRecompilerHelper.rebuildProgram(program, vertexSourceCode, fragmentSourceCode, onCompiled, onError);
    }
    referenceNewProgram(programId, program) {
        _backend_webGlObjects_webGlObjects__WEBPACK_IMPORTED_MODULE_6__.Program.updateInGlobalStore(programId, program);
    }
    pause() {
        this.timeSpy.changeSpeedRatio(0);
    }
    play() {
        this.timeSpy.changeSpeedRatio(1);
    }
    playNextFrame() {
        this.timeSpy.playNextFrame();
    }
    drawOnlyEveryXFrame(x) {
        this.timeSpy.changeSpeedRatio(x);
    }
    getFps() {
        return this.timeSpy.getFps();
    }
    spyCanvases() {
        if (this.canvasSpy) {
            this.onErrorInternal("Already spying canvas.");
            return;
        }
        this.canvasSpy = new _backend_spies_canvasSpy__WEBPACK_IMPORTED_MODULE_5__.CanvasSpy();
        this.canvasSpy.onContextRequested.add(this.spyContext, this);
    }
    spyCanvas(canvas) {
        if (this.canvasSpy) {
            this.onErrorInternal("Already spying canvas.");
            return;
        }
        this.canvasSpy = new _backend_spies_canvasSpy__WEBPACK_IMPORTED_MODULE_5__.CanvasSpy(canvas);
        this.canvasSpy.onContextRequested.add(this.spyContext, this);
    }
    getAvailableContexts() {
        return this.getAvailableContexts();
    }
    captureCanvas(canvas, commandCount = 0, quickCapture = false, fullCapture = false) {
        const contextSpy = this.getAvailableContextSpyByCanvas(canvas);
        if (!contextSpy) {
            const context = Spector.getFirstAvailable3dContext(canvas);
            if (context) {
                this.captureContext(context, commandCount, quickCapture, fullCapture);
            }
            else {
                _shared_utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error("No webgl context available on the chosen canvas.");
            }
        }
        else {
            this.captureContextSpy(contextSpy, commandCount, quickCapture, fullCapture);
        }
    }
    captureContext(context, commandCount = 0, quickCapture = false, fullCapture = false) {
        let contextSpy = this.getAvailableContextSpyByCanvas(context.canvas);
        if (!contextSpy) {
            if (context.getIndexedParameter) {
                contextSpy = new _backend_spies_contextSpy__WEBPACK_IMPORTED_MODULE_3__.ContextSpy({
                    context,
                    version: 2,
                    recordAlways: false,
                });
            }
            else {
                contextSpy = new _backend_spies_contextSpy__WEBPACK_IMPORTED_MODULE_3__.ContextSpy({
                    context,
                    version: 1,
                    recordAlways: false,
                });
            }
            contextSpy.onMaxCommand.add(this.stopCapture, this);
            this.contexts.push({
                canvas: contextSpy.context.canvas,
                contextSpy,
            });
        }
        if (contextSpy) {
            this.captureContextSpy(contextSpy, commandCount, quickCapture, fullCapture);
        }
    }
    captureXRContext(commandCount = 0, quickCapture = false, fullCapture = false) {
        this.captureContext(this.getXRContext(), commandCount, quickCapture, fullCapture);
    }
    captureContextSpy(contextSpy, commandCount = 0, quickCapture = false, fullCapture = false) {
        this.quickCapture = quickCapture;
        this.fullCapture = fullCapture;
        if (this.capturingContext) {
            this.onErrorInternal("Already capturing a context.");
        }
        else {
            this.retry = 0;
            this.capturingContext = contextSpy;
            this.capturingContext.setMarker(this.marker);
            // Limit the shown command count
            commandCount = Math.min(commandCount, CAPTURE_LIMIT);
            if (commandCount > 0) {
                this.captureCommands(commandCount);
            }
            else {
                // Capture only one frame.
                this.captureFrames(1);
            }
            this.noFrameTimeout = setTimeout(() => {
                if (commandCount > 0) {
                    this.stopCapture();
                }
                else if (this.capturingContext && this.retry > 1) {
                    this.onErrorInternal("No frames with gl commands detected. Try moving the camera.");
                }
                else {
                    this.onErrorInternal("No frames detected. Try moving the camera or implementing requestAnimationFrame.");
                }
            }, 10 * 1000);
        }
    }
    captureNextFrame(obj, quickCapture = false, fullCapture = false) {
        if (obj instanceof HTMLCanvasElement || (self.OffscreenCanvas && obj instanceof OffscreenCanvas)) {
            this.captureCanvas(obj, 0, quickCapture, fullCapture);
        }
        else {
            this.captureContext(obj, 0, quickCapture, fullCapture);
        }
    }
    startCapture(obj, commandCount, quickCapture = false, fullCapture = false) {
        if (obj instanceof HTMLCanvasElement || (self.OffscreenCanvas && obj instanceof OffscreenCanvas)) {
            this.captureCanvas(obj, commandCount, quickCapture, fullCapture);
        }
        else {
            this.captureContext(obj, commandCount, quickCapture, fullCapture);
        }
    }
    stopCapture() {
        if (this.capturingContext) {
            const capture = this.capturingContext.stopCapture();
            if (capture.commands.length > 0) {
                if (this.noFrameTimeout > -1) {
                    clearTimeout(this.noFrameTimeout);
                }
                this.triggerCapture(capture);
                this.capturingContext = undefined;
                this.captureNextFrames = 0;
                this.captureNextCommands = 0;
                return capture;
            }
            else if (this.captureNextCommands === 0) {
                this.retry++;
                this.captureFrames(1);
            }
        }
        return undefined;
    }
    setMarker(marker) {
        this.marker = marker;
        if (this.capturingContext) {
            this.capturingContext.setMarker(marker);
        }
    }
    clearMarker() {
        this.marker = null;
        if (this.capturingContext) {
            this.capturingContext.clearMarker();
        }
    }
    addRequestAnimationFrameFunctionName(functionName) {
        this.timeSpy.addRequestAnimationFrameFunctionName(functionName);
    }
    setSpiedScope(spiedScope) {
        this.timeSpy.setSpiedScope(spiedScope);
    }
    log(value) {
        if (this.capturingContext) {
            this.capturingContext.log(value);
        }
    }
    captureFrames(frameCount) {
        this.captureNextFrames = frameCount;
        this.captureNextCommands = 0;
        this.playNextFrame();
    }
    captureCommands(commandCount) {
        this.captureNextFrames = 0;
        this.captureNextCommands = commandCount;
        this.play();
        if (this.capturingContext) {
            this.onCaptureStarted.trigger(undefined);
            this.capturingContext.startCapture(commandCount, this.quickCapture, this.fullCapture);
        }
        else {
            this.onErrorInternal("No context to capture from.");
            this.captureNextCommands = 0;
        }
    }
    spyContext(contextInformation) {
        let contextSpy = this.getAvailableContextSpyByCanvas(contextInformation.context.canvas);
        if (!contextSpy) {
            contextSpy = new _backend_spies_contextSpy__WEBPACK_IMPORTED_MODULE_3__.ContextSpy({
                context: contextInformation.context,
                version: contextInformation.contextVersion,
                recordAlways: true,
            });
            contextSpy.onMaxCommand.add(this.stopCapture, this);
            this.contexts.push({
                canvas: contextSpy.context.canvas,
                contextSpy,
            });
        }
        contextSpy.spy();
    }
    getAvailableContextSpyByCanvas(canvas) {
        for (const availableContext of this.contexts) {
            if (availableContext.canvas === canvas) {
                return availableContext.contextSpy;
            }
        }
        return undefined;
    }
    getXRContext() {
        if (!this.options.enableXRCapture) {
            _shared_utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error("Cannot retrieve WebXR context if capturing WebXR is disabled.");
        }
        if (!this.xrSpy.currentXRSession) {
            _shared_utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error("No currently active WebXR session.");
        }
        return this.xrSpy.currentXRSession.glContext;
    }
    onFrameStart() {
        if (this.captureNextCommands > 0) {
            // Nothing to do here but preventing to drop the capturing context.
        }
        else if (this.captureNextFrames > 0) {
            if (this.capturingContext) {
                this.onCaptureStarted.trigger(undefined);
                this.capturingContext.startCapture(0, this.quickCapture, this.fullCapture);
            }
            this.captureNextFrames--;
        }
        else {
            this.capturingContext = undefined;
        }
    }
    onFrameEnd() {
        if (this.captureNextCommands > 0) {
            // Nothing to do here but preventing to drop the capturing context.
        }
        else if (this.captureNextFrames === 0) {
            this.stopCapture();
        }
    }
    triggerCapture(capture) {
        if (this.captureMenu) {
            this.captureMenu.captureComplete(null);
        }
        this.onCapture.trigger(capture);
    }
    onErrorInternal(error) {
        _shared_utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(error);
        if (this.noFrameTimeout > -1) {
            clearTimeout(this.noFrameTimeout);
        }
        if (this.capturingContext) {
            this.capturingContext = undefined;
            this.captureNextFrames = 0;
            this.captureNextCommands = 0;
            this.retry = 0;
            if (this.captureMenu) {
                this.captureMenu.captureComplete(error);
            }
            this.onError.trigger(error);
        }
        else {
            throw error;
        }
    }
}

})();

window.SPECTOR = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=spector.bundle.dev.js.map