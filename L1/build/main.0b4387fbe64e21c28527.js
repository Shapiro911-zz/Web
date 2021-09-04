/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web/./public/css/style.css?");

/***/ }),

/***/ "./public/js/calcDateDiff.js":
/*!***********************************!*\
  !*** ./public/js/calcDateDiff.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calcDateDiff)\n/* harmony export */ });\n\r\n\r\nfunction calcDateDiff(dateFromString, dateToString) {\r\n    if (dateFromString < dateToString) {\r\n        [dateFromString, dateToString] = [dateToString, dateFromString];\r\n    }\r\n\r\n    const dateFrom = luxon.DateTime.fromISO(dateFromString);\r\n    const dateTo = luxon.DateTime.fromISO(dateToString);\r\n\r\n    const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject()\r\n    return diff;\r\n}\n\n//# sourceURL=webpack://web/./public/js/calcDateDiff.js?");

/***/ }),

/***/ "./public/js/changeSection.js":
/*!************************************!*\
  !*** ./public/js/changeSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeSection\": () => (/* binding */ changeSection)\n/* harmony export */ });\n\r\nconst sections = document.querySelectorAll('.section');\r\nfunction changeSection(buttons, check) {\r\n    if (!check.classList.contains('active')) {\r\n        buttons.forEach((button) => {\r\n            button.classList.toggle('active');\r\n        })\r\n        sections.forEach((section) => {\r\n            section.classList.toggle('active');\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://web/./public/js/changeSection.js?");

/***/ }),

/***/ "./public/js/countdown.js":
/*!********************************!*\
  !*** ./public/js/countdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"stop\": () => (/* binding */ stop)\n/* harmony export */ });\n/* harmony import */ var _output_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.js */ \"./public/js/output.js\");\n\r\n\r\n\r\nlet finishSound = new Howl({\r\n    src: ['https://assets.codepen.io/21542/howler-push.mp3']\r\n});\r\n\r\nlet countTime, updatedTime;\r\nfunction start(hours, mins, secs) {\r\n    let currentTime;\r\n    if (document.getElementById('timer').innerText == '') {\r\n        updatedTime = luxon.DateTime.local();\r\n        countTime = luxon.DateTime.local().plus({ hours: hours, minutes: mins, seconds: secs });\r\n    };\r\n    timer = setInterval(() => {\r\n        currentTime = countTime.diff(updatedTime).toObject();\r\n        if (currentTime.milliseconds <= 0) {\r\n            clearInterval(timer);\r\n            finishSound.play();\r\n        }\r\n        updatedTime = luxon.DateTime.fromISO(updatedTime).plus({ seconds: 1 });\r\n        (0,_output_js__WEBPACK_IMPORTED_MODULE_0__.timerResult)(luxon.Duration.fromObject(currentTime).toFormat('hh:mm:ss'));\r\n    }, 1000);\r\n}\r\n\r\nfunction stop() {\r\n    clearInterval(timer);\r\n}\n\n//# sourceURL=webpack://web/./public/js/countdown.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _output_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.js */ \"./public/js/output.js\");\n/* harmony import */ var _calcDateDiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcDateDiff.js */ \"./public/js/calcDateDiff.js\");\n/* harmony import */ var _countdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countdown.js */ \"./public/js/countdown.js\");\n/* harmony import */ var _changeSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeSection.js */ \"./public/js/changeSection.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./public/css/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst form = document.getElementById('calcDate');\r\n\r\nform.onsubmit = function (event) {\r\n    event.preventDefault();\r\n    const formData = new FormData(event.target);\r\n    const dateFrom = formData.get('dateFrom');\r\n    const dateTo = formData.get('dateTo');\r\n\r\n    if (!dateFrom || !dateTo) {\r\n        (0,_output_js__WEBPACK_IMPORTED_MODULE_0__.printError)('Error');\r\n        return;\r\n    };\r\n\r\n    const dateDiff = (0,_calcDateDiff_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dateFrom, dateTo);\r\n    (0,_output_js__WEBPACK_IMPORTED_MODULE_0__.printResult)(dateDiff);\r\n}\r\n\r\nconst playButton = document.getElementById('play');\r\n\r\nplayButton.onclick = function (event) {\r\n    event.preventDefault();\r\n\r\n    if (playButton.classList.contains('active')) {\r\n        playButton.classList.toggle('active');\r\n        playButton.innerText = \"Play\";\r\n        (0,_countdown_js__WEBPACK_IMPORTED_MODULE_2__.stop)();\r\n    }\r\n    else {\r\n        const hours = document.getElementById('hourInput').value;\r\n        const mins = document.getElementById('minInput').value;\r\n        const secs = document.getElementById('secInput').value;\r\n        playButton.classList.toggle('active');\r\n        playButton.innerText = \"Stop\";\r\n        (0,_countdown_js__WEBPACK_IMPORTED_MODULE_2__.start)(hours, mins, secs);\r\n    }\r\n}\r\n\r\nconst changeSectionButtons = document.querySelectorAll('.changeSectionButton');\r\nchangeSectionButtons.forEach((changeSectionButton) => {\r\n    changeSectionButton.addEventListener('click', function (event) {\r\n        (0,_changeSection_js__WEBPACK_IMPORTED_MODULE_3__.changeSection)(changeSectionButtons, event.target);\r\n    })\r\n});\n\n//# sourceURL=webpack://web/./public/js/main.js?");

/***/ }),

/***/ "./public/js/output.js":
/*!*****************************!*\
  !*** ./public/js/output.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printError\": () => (/* binding */ printError),\n/* harmony export */   \"printResult\": () => (/* binding */ printResult),\n/* harmony export */   \"timerResult\": () => (/* binding */ timerResult)\n/* harmony export */ });\nconst paragraph = document.getElementById('output');\r\nconst timer = document.getElementById('timer');\r\n\r\nfunction printError(errorText) {\r\n    paragraph.innerText = errorText;\r\n};\r\n\r\nfunction printResult(result) {\r\n    paragraph.innerText = `Years: ${result.years}\r\n    Month: ${result.months}\r\n    Days: ${result.days}`;\r\n}\r\n\r\nfunction timerResult(time) {\r\n    timer.innerText = time;\r\n}\n\n//# sourceURL=webpack://web/./public/js/output.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/main.js");
/******/ 	
/******/ })()
;