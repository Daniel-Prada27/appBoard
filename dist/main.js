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

/***/ "./src/appIterator.js":
/*!****************************!*\
  !*** ./src/appIterator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goOverApps\": () => (/* binding */ goOverApps),\n/* harmony export */   \"nameField\": () => (/* binding */ nameField),\n/* harmony export */   \"optionedAppID\": () => (/* binding */ optionedAppID),\n/* harmony export */   \"optionedAppIndex\": () => (/* binding */ optionedAppIndex)\n/* harmony export */ });\n/* harmony import */ var _createAppModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAppModule.js */ \"./src/createAppModule.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nlet optionedAppIndex;\r\nlet nameField;\r\nlet optionedAppID;\r\n\r\n\r\nfunction goOverApps(event) {\r\n    \r\n    nameField = event.currentTarget.parentNode.querySelector('.app-name');\r\n    optionedAppID = event.currentTarget.parentNode.id;\r\n    console.log(optionedAppID);\r\n\r\n    for (let app in _index_js__WEBPACK_IMPORTED_MODULE_1__.storedAppArr) {\r\n        // console.log(JSON.stringify(storedAppArr[app]));\r\n        \r\n        if (_index_js__WEBPACK_IMPORTED_MODULE_1__.storedAppArr[app].id === optionedAppID) {\r\n\r\n            console.log(JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_1__.storedAppArr[app]));\r\n            optionedAppIndex = app;\r\n            return;\r\n        }\r\n\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://appboard/./src/appIterator.js?");

/***/ }),

/***/ "./src/createAppModule.js":
/*!********************************!*\
  !*** ./src/createAppModule.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App),\n/* harmony export */   \"appendApp\": () => (/* binding */ appendApp),\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"createAppStructure\": () => (/* binding */ createAppStructure),\n/* harmony export */   \"justGetIcon\": () => (/* binding */ justGetIcon),\n/* harmony export */   \"optionedApp\": () => (/* binding */ optionedApp),\n/* harmony export */   \"optionedAppImg\": () => (/* binding */ optionedAppImg),\n/* harmony export */   \"optionedAppParentDiv\": () => (/* binding */ optionedAppParentDiv)\n/* harmony export */ });\n/* harmony import */ var _appIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appIterator.js */ \"./src/appIterator.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\nfunction appendApp(appObj) {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer.appendChild(createAppStructure(appObj));\r\n    console.log(\"Append success\");\r\n}\r\n\r\nlet optionedApp;\r\nlet optionedAppParentDiv;\r\nlet optionedAppImg;\r\n\r\nfunction createAppStructure(appObj) {\r\n    let parentDiv = document.createElement('div');\r\n    let iconDiv = document.createElement('div');\r\n    let iconImg = document.createElement('img');\r\n    let nameDiv = document.createElement('div');\r\n    let options = document.createElement('div');\r\n\r\n    parentDiv.classList.add(\"app\")\r\n    iconDiv.classList.add(\"app-logo\");\r\n    iconImg.classList.add(\"actual-logo\");\r\n    nameDiv.classList.add(\"app-name\");\r\n    options.classList.add('options-dots');\r\n\r\n    parentDiv.appendChild(iconDiv);\r\n    parentDiv.appendChild(options);\r\n    iconDiv.appendChild(iconImg);\r\n    parentDiv.appendChild(nameDiv);\r\n\r\n    options.textContent = '...';\r\n\r\n    parentDiv.id = `app-${counter}`;\r\n    iconDiv.id = `logo-div-${counter}`;\r\n    iconImg.id = `icon-${counter}`;\r\n\r\n    const currentIconDIv = document.getElementById(`logo-div-${counter}`)\r\n    const currentIconSlot = document.getElementById(`icon-${counter}`);\r\n\r\n    nameDiv.innerHTML = appObj.name;\r\n    iconImg.src = appObj.icon\r\n\r\n    parentDiv.addEventListener('click', () => {\r\n        if ((_index_js__WEBPACK_IMPORTED_MODULE_1__.popup.style.visibility === 'visible') || _index_js__WEBPACK_IMPORTED_MODULE_1__.editPopUp.classList.contains('show')) {\r\n            return;\r\n        }\r\n        window.open(`${appObj.link}`, '_blank');\r\n    })\r\n\r\n    options.addEventListener('click', (e)=> {\r\n        e.stopPropagation();\r\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.editPopUp.classList.toggle('show');\r\n\r\n        let appName = e.currentTarget.parentNode.querySelector('.app-name').textContent;\r\n        let parentAppDiv = e.currentTarget.parentNode;\r\n        optionedAppParentDiv = parentAppDiv;\r\n\r\n        optionedAppImg = parentAppDiv.querySelector('.actual-logo');\r\n\r\n        optionedApp = appName;\r\n        (0,_appIterator_js__WEBPACK_IMPORTED_MODULE_0__.goOverApps)(e);\r\n        console.log(appName);\r\n    })\r\n\r\n    // appArr.push(parentDiv);\r\n\r\n    counter++;\r\n    return parentDiv;\r\n}\r\n\r\nlet counter = 0;\r\n\r\n\r\nclass App {\r\n\r\n    constructor(appName, appLink, appIconUrl, appId) {\r\n        this.name = appName;\r\n        this.link = appLink;\r\n        this.icon = appIconUrl;\r\n        this.id = appId;\r\n        // ID = this.name\r\n    }\r\n\r\n    callName() {\r\n        console.log(this.name);\r\n    }\r\n\r\n}\r\n\r\n\r\n  function justGetIcon(url) {\r\n    return fetch(_index_js__WEBPACK_IMPORTED_MODULE_1__.proxyUrl + url).then(response => {\r\n    if (!response.ok) {\r\n      throw new Error('Network response was not ok');\r\n    }\r\n    return response.blob();\r\n  })\r\n  .then(blob => {\r\n    const faviconUrl = URL.createObjectURL(blob);\r\n    console.log(typeof(faviconUrl));\r\n    return faviconUrl;\r\n  })\r\n  .catch(error => {\r\n    console.error('There was a problem fetching the favicon:', error);\r\n  });\r\n  }\r\n  \r\n\r\n\n\n//# sourceURL=webpack://appboard/./src/createAppModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appArr\": () => (/* binding */ appArr),\n/* harmony export */   \"baseURL\": () => (/* binding */ baseURL),\n/* harmony export */   \"changeBtn\": () => (/* binding */ changeBtn),\n/* harmony export */   \"changeForm\": () => (/* binding */ changeForm),\n/* harmony export */   \"changePopup\": () => (/* binding */ changePopup),\n/* harmony export */   \"deleteBtn\": () => (/* binding */ deleteBtn),\n/* harmony export */   \"editAppLink\": () => (/* binding */ editAppLink),\n/* harmony export */   \"editAppName\": () => (/* binding */ editAppName),\n/* harmony export */   \"editPopUp\": () => (/* binding */ editPopUp),\n/* harmony export */   \"mainContainer\": () => (/* binding */ mainContainer),\n/* harmony export */   \"popup\": () => (/* binding */ popup),\n/* harmony export */   \"proxyUrl\": () => (/* binding */ proxyUrl),\n/* harmony export */   \"storedAppArr\": () => (/* binding */ storedAppArr)\n/* harmony export */ });\n/* harmony import */ var _appIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appIterator */ \"./src/appIterator.js\");\n/* harmony import */ var _createAppModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAppModule */ \"./src/createAppModule.js\");\n/* harmony import */ var _optionButtonsModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionButtonsModule */ \"./src/optionButtonsModule.js\");\n\r\n\r\n\r\n// import './style.css';\r\n\r\n\r\nconst body = document.getElementById('body');\r\nconst popup = document.getElementById('add-popup');\r\nconst changePopup = document.getElementById('change-popup');\r\n\r\nconst addForm = document.querySelector('.form')\r\nconst changeForm = document.getElementById('changeForm');\r\nconst inputField = document.querySelectorAll('.input');\r\n\r\nconst mainContainer = document.getElementById('main-container');\r\n\r\nconst addBtn = document.getElementById('new-app-btn');\r\n\r\nconst proxyUrl = 'https://cors-anywhere.herokuapp.com/';\r\nconst baseURL = 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url='\r\n\r\nconst editPopUp = document.querySelector('.edit-popup');\r\nconst changeBtn = document.getElementById('change-name-btn');\r\nconst deleteBtn = document.getElementById('delete-btn');\r\n\r\nconst editAppLink = document.getElementById('editAppLink');\r\nconst editAppName = document.getElementById('editAppName');\r\n\r\n\r\naddBtn.addEventListener('click', (e) => {\r\n    e.stopPropagation();\r\n    console.log(\"Btn prssed\");\r\n    console.log(e.target.id);\r\n})\r\n\r\nlet appArr = [];\r\n\r\nif (localStorage.getItem('storedAppArr') == null) {\r\n    localStorage.setItem('storedAppArr', JSON.stringify(appArr));\r\n}\r\n\r\n\r\nlet storedAppArr = JSON.parse(localStorage.getItem('storedAppArr')) || [];\r\nconsole.log(storedAppArr);\r\nconsole.log(\"first printed\");\r\n\r\n\r\n\r\naddBtn.addEventListener('click', (e) => {\r\n    if (popup.style.visibility === 'visible') {\r\n      body.click();\r\n    } else {\r\n      popup.style.cssText = 'transaddForm: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;';\r\n      body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';\r\n      addForm.reset();\r\n      e.stopPropagation();\r\n    }\r\n  })\r\n\r\n  popup.addEventListener('click', (e) => {\r\n    e.stopPropagation();\r\n  })\r\n\r\n  changePopup.addEventListener('click', (e) => {\r\n    e.stopPropagation();\r\n  })\r\n\r\n  addForm.addEventListener('submit', function (event) {\r\n    // Prevent the addForm from being submitted\r\n    event.preventDefault();\r\n    event.stopPropagation();\r\n    console.log(\"Submited\");\r\n\r\n    const newAppName = appName.value;\r\n    const newAppLink = appLink.value;\r\n    const newAppIconUrl = baseURL + newAppLink;\r\n    let newAppId = `app-${_createAppModule__WEBPACK_IMPORTED_MODULE_1__.counter}`\r\n\r\n    let newApp = new _createAppModule__WEBPACK_IMPORTED_MODULE_1__.App(newAppName,newAppLink, newAppIconUrl, newAppId);\r\n    // const newElement =\r\n\r\n    (0,_createAppModule__WEBPACK_IMPORTED_MODULE_1__.appendApp)(newApp)\r\n    appArr.push(newApp);\r\n    body.click();\r\n    console.log(newApp);\r\n    console.log(newApp.name)\r\n    console.log(appArr);\r\n\r\n    storedAppArr.push(newApp)\r\n    localStorage.setItem('storedAppArr', JSON.stringify(storedAppArr));\r\n    console.log(storedAppArr);\r\n\r\n  })\r\n\r\n\r\n\r\nwindow.onload = function() {\r\n\r\n    const storedArray = JSON.parse(localStorage.getItem('storedAppArr'));\r\n    console.log(storedArray);\r\n    console.log(\"printed\");\r\n\r\n    for (let app in storedArray) {\r\n        console.log(\"here\" + JSON.stringify(storedArray[app]));\r\n        (0,_createAppModule__WEBPACK_IMPORTED_MODULE_1__.appendApp)(storedArray[app])\r\n\r\n      }\r\n}\r\n\r\n\r\n\r\nbody.addEventListener('click', (e) => {\r\n    console.log(appArr);\r\n    console.log(popup.style.visibility);\r\n    if (popup.style.visibility === 'visible') {\r\n      popup.style.cssText = 'transaddForm: translate(-50%, -50%) scale(0.1); visibility: hidden;';\r\n      body.style.backgroundColor = 'rgba(224, 224, 224, 1)';\r\n    }\r\n    if (editPopUp.classList.contains('show')) {\r\n        editPopUp.classList.toggle('show');\r\n    }\r\n\r\n    if (changePopup.classList.contains('show')) {\r\n        changePopup.classList.toggle('show');\r\n    }\r\n\r\n  })\r\n\r\nchangeBtn.addEventListener('click', _optionButtonsModule__WEBPACK_IMPORTED_MODULE_2__.editName);\r\ndeleteBtn.addEventListener('click', _optionButtonsModule__WEBPACK_IMPORTED_MODULE_2__.deleteApp);\r\n\r\n\r\nchangeForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n    console.log(\"Submited\");\r\n\r\n    const newAppName = editAppName.value;\r\n    const newAppLink = editAppLink.value;\r\n    const newAppIconUrl = baseURL + newAppLink;\r\n\r\n    if (newAppName !== '') {\r\n        optionedStoredApp.name = newAppName;\r\n        _appIterator__WEBPACK_IMPORTED_MODULE_0__.nameField.innerHTML = newAppName;\r\n    }\r\n\r\n\r\n\r\n    console.log(newAppLink === '');\r\n\r\n    if (newAppLink !== '') {\r\n        optionedStoredApp.link = newAppLink;\r\n        optionedStoredApp.icon = newAppIconUrl;\r\n        _createAppModule__WEBPACK_IMPORTED_MODULE_1__.optionedAppImg.src = newAppIconUrl;\r\n    }\r\n\r\n    body.click();\r\n\r\n    localStorage.setItem('storedAppArr', JSON.stringify(storedAppArr));\r\n    console.log(storedAppArr);\r\n\r\n});\n\n//# sourceURL=webpack://appboard/./src/index.js?");

/***/ }),

/***/ "./src/optionButtonsModule.js":
/*!************************************!*\
  !*** ./src/optionButtonsModule.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteApp\": () => (/* binding */ deleteApp),\n/* harmony export */   \"editName\": () => (/* binding */ editName)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _appIterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appIterator */ \"./src/appIterator.js\");\n/* harmony import */ var _createAppModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAppModule */ \"./src/createAppModule.js\");\n\r\n\r\n\r\n\r\nfunction deleteApp() {\r\n\r\n    ___WEBPACK_IMPORTED_MODULE_0__.mainContainer.removeChild(_createAppModule__WEBPACK_IMPORTED_MODULE_2__.optionedAppParentDiv);\r\n    ___WEBPACK_IMPORTED_MODULE_0__.storedAppArr.splice(_appIterator__WEBPACK_IMPORTED_MODULE_1__.optionedAppIndex, 1);\r\n    localStorage.setItem('storedAppArr', JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.storedAppArr));\r\n\r\n    // indexToRemove = null;\r\n}\r\n\r\nfunction editName(e) {\r\n    e.stopPropagation();\r\n    ___WEBPACK_IMPORTED_MODULE_0__.changeForm.reset();\r\n    ___WEBPACK_IMPORTED_MODULE_0__.editAppName.value = ___WEBPACK_IMPORTED_MODULE_0__.storedAppArr[_appIterator__WEBPACK_IMPORTED_MODULE_1__.optionedAppIndex].name;\r\n    ___WEBPACK_IMPORTED_MODULE_0__.editAppLink.value = ___WEBPACK_IMPORTED_MODULE_0__.storedAppArr[_appIterator__WEBPACK_IMPORTED_MODULE_1__.optionedAppIndex].link;\r\n    ___WEBPACK_IMPORTED_MODULE_0__.editPopUp.classList.toggle('show');\r\n    ___WEBPACK_IMPORTED_MODULE_0__.changePopup.classList.toggle('show');\r\n    // Create a popup to change the App Name, then do the logic storedAppArr[optionedAppIndex].name = bla bla\r\n    // Instant change in DOM\r\n\r\n}\r\n\n\n//# sourceURL=webpack://appboard/./src/optionButtonsModule.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;