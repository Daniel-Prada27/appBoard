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

/***/ "./src/createAppModule.js":
/*!********************************!*\
  !*** ./src/createAppModule.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendApp\": () => (/* binding */ appendApp),\n/* harmony export */   \"createAppStructure\": () => (/* binding */ createAppStructure)\n/* harmony export */ });\nfunction appendApp(container, counter) {\r\n    container.appendChild(createAppStructure(counter));\r\n    console.log(\"Append success\");\r\n}\r\n\r\nfunction createAppStructure(counter) {\r\n    let parentDiv = document.createElement('div');\r\n    let iconDiv = document.createElement('div');\r\n    let iconImg = document.createElement('img');\r\n    let nameDiv = document.createElement('div');\r\n\r\n    parentDiv.classList.add(\"app\")\r\n    iconDiv.classList.add(\"app-logo\");\r\n    iconImg.classList.add(\"actual-logo\");\r\n    nameDiv.classList.add(\"app-name\");\r\n\r\n    parentDiv.appendChild(iconDiv);\r\n    iconDiv.appendChild(iconImg);\r\n    parentDiv.appendChild(nameDiv);\r\n\r\n    parentDiv.id = `app-${counter}`;\r\n\r\n    return parentDiv;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://appboard/./src/createAppModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createAppModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAppModule */ \"./src/createAppModule.js\");\n\r\n\r\n\r\nconst body = document.getElementById('body');\r\nconst popup = document.getElementById('add-popup');\r\n\r\nconst form = document.querySelector('.form')\r\nconst inputField = document.querySelectorAll('.input');\r\n\r\nconst mainContainer = document.getElementById('main-container');\r\n\r\nconst addBtn = document.getElementById('new-app-btn');\r\n\r\n\r\nconst appLogo = document .querySelector(\".app-logo\")\r\n\r\n\r\nconst proxyUrl = 'https://cors-anywhere.herokuapp.com/';\r\nconst url = 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://standardjs.com/index.html#is-there-an-automatic-formatter';\r\nfetch(proxyUrl + url)\r\n  .then(response => {\r\n    if (!response.ok) {\r\n      throw new Error('Network response was not ok');\r\n    }\r\n    return response.blob();\r\n  })\r\n  .then(blob => {\r\n    const faviconUrl = URL.createObjectURL(blob);\r\n    const img = document.querySelector('.actual-logo');\r\n    img.src = faviconUrl;\r\n    appLogo.appendChild(img);\r\n  })\r\n  .catch(error => {\r\n    console.error('There was a problem fetching the favicon:', error);\r\n  });\r\n\r\n\r\n  for (let i = 0; i < inputField.length; i++) {\r\n    inputField[i].addEventListener('click', (e) => {\r\n      e.stopPropagation();\r\n    })\r\n  }\r\n\r\nconsole.log(addBtn);\r\n\r\naddBtn.addEventListener('click', (e) => {\r\n    e.stopPropagation;\r\n    console.log(\"Btn prssed\");\r\n    console.log(e.target.id);\r\n})\r\n\r\nlet appArr = [];\r\n\r\n\r\n\r\naddBtn.addEventListener('click', (e) => {\r\n    if (popup.style.visibility === 'visible') {\r\n      body.click();\r\n    } else {\r\n      popup.style.cssText = 'transform: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;';\r\n      body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';\r\n      form.reset();\r\n      e.stopPropagation();\r\n    }\r\n  })\r\n\r\n  form.addEventListener('submit', function (event) {\r\n    // Prevent the form from being submitted\r\n    event.preventDefault();\r\n    event.stopPropagation();\r\n    console.log(\"Submited\");\r\n  }) \r\n\r\n  body.addEventListener('click', () => {\r\n    console.log(popup.style.visibility);\r\n    if (popup.style.visibility === 'visible') {\r\n      popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';\r\n      body.style.backgroundColor = 'rgba(224, 224, 224, 1)';\r\n    }\r\n  })\r\n\r\n\r\n;(0,_createAppModule__WEBPACK_IMPORTED_MODULE_0__.appendApp)(mainContainer, 2);\n\n//# sourceURL=webpack://appboard/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;