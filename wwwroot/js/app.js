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

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gcp_miniappkit_jssdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gcp-miniappkit-jssdk */ \"./node_modules/gcp-miniappkit-jssdk/dist/index.modern.js\");\n\n\ngcp_miniappkit_jssdk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(\"mock\")\n\ngcp_miniappkit_jssdk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUserInfo().then((user) => {\n  console.log(user)\n})\n\n\n//# sourceURL=webpack://miniapp-dotnet-core-example/./app/index.js?");

/***/ }),

/***/ "./node_modules/gcp-miniappkit-jssdk/dist/index.modern.js":
/*!****************************************************************!*\
  !*** ./node_modules/gcp-miniappkit-jssdk/dist/index.modern.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SDK\": () => (/* binding */ g),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar e=0;function t(t){return\"__private_\"+e+++\"_\"+t}function s(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError(\"attempted to use private field on non-instance\");return e}class i{constructor(){this.stack=[]}get list(){return this.stack}add(e){this.stack=this.stack.concat(e)}clear(){this.stack.forEach(e=>{var t;return null==e||null===(t=e.destroy)||void 0===t?void 0:t.call(e)}),this.stack=[]}remove(e){this.stack=this.stack.filter(t=>t!==e)}}class o{constructor(e){this._data=e,this._id=(new Date).toISOString()+\"-\"+String(Math.random()).slice(2);const t=e.onCompleted;this.onCompleted=void 0===t?()=>!1:t,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}get id(){return this._id}get data(){return this._data}get promise(){return this._promise}resolve(e){this.clearTimeout(),this._resolve(e),this.onCompleted()}reject(e=\"\"){this.clearTimeout(),this._reject(e),this.onCompleted()}setExpiration(e=(()=>!1),t=0){t&&(this.timeoutId=setTimeout(()=>{e(),this.reject({code:504,message:\"timeout\"})},t))}clearTimeout(){clearTimeout(this.timeoutId)}}const r=\"gcp-miniapp-jssdk\";class n{constructor(e){this._eventListener=e=>{const t=e.detail,s=this.queue.list.filter(e=>!e.removed).find(e=>{var s,i;return\"string\"==typeof(null==t?void 0:t.id)?(null===(s=e.data)||void 0===s?void 0:s.id)===(null==t?void 0:t.id):(null===(i=e.data)||void 0===i?void 0:i.topic)===(null==t?void 0:t.topic)});if(s){var i;const e=null==t||null===(i=t.message)||void 0===i?void 0:i.error;e?s.reject(e):s.resolve(null==t?void 0:t.message)}},this.queue=new i,this.platform=e,this.eventListener=this._eventListener.bind(this),window.addEventListener(\"GCPWebViewBridge\",this.eventListener)}addTaskToQueue(e,t=3e4){var s,i;const r=new o(e);return r.onCompleted=()=>{var e,t;r.removed=!0,null===(e=this.queue)||void 0===e||null===(t=e.remove)||void 0===t||t.call(e,r)},r.setExpiration(void 0,t),null===(s=this.queue)||void 0===s||null===(i=s.add)||void 0===i||i.call(s,r),r}postMessage(e){switch(this.platform){case\"ios\":window.webkit.messageHandlers.GCPWebViewBridge.postMessage(e);break;case\"android\":window.GCPWebViewBridge.postMessage(JSON.stringify(e))}}clear(){this.queue.clear()}}function a(e,t=\"\"){if(!t)return e;if(!e)return;const s=t.split(\".\"),i=e[s.shift()];return i?a(i,s.join(\".\")):void 0}const c={\"Content-Type\":\"application/json\"},d={},l={};var u=t(\"platform\"),h=t(\"messenger\"),m=t(\"state\"),v=t(\"useOnlyMocks\");class g{constructor(){Object.defineProperty(this,v,{value:p}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),s(this,u)[u]=a(window,\"webkit.messageHandlers.GCPWebViewBridge.postMessage\")?\"ios\":a(window,\"GCPWebViewBridge.postMessage\")?\"android\":\"web\",s(this,h)[h]=new n(s(this,u)[u]),s(this,m)[m]=new WeakMap}static load(){return window[r]||(window[r]=new g),window[r]}init(e=\"mock\"){return e&&\"string\"==typeof e?(\"mock\"===e&&(s(this,m)[m].set(l,!0),console.warn(\"Using mock as AccessToken. Don't forget to set real BundleID!\")),s(this,m)[m].set(d,e),Promise.resolve()):Promise.reject(new Error(\"invalid bundleID. Use .init(bundleID) with your id or 'mock'\"))}get platform(){return s(this,u)[u]}get messenger(){return s(this,h)[h]}createMessageToNativeBase(e){const t=s(this,m)[m].get(d);return{id:`${Date.now()}-${Math.random().toFixed(5)}`,topic:e,message:{bundle_id:String(t)}}}getAccessToken(){const e=this.createMessageToNativeBase(\"GetAccessToken\"),t=this.messenger.addTaskToQueue(e);return s(this,v)[v]()?t.resolve({token:\"acess_token_mock_AAA111\",isMock:!0}):this.messenger.postMessage(e),t.promise}processPayment({deepLink:e,qr:t}){const i=this.createMessageToNativeBase(\"ProcessPayment\");i.message=Object.assign({},i.message,{qr:t,deepLink:e});const o=this.messenger.addTaskToQueue(i,42e4);return s(this,v)[v]()?o.resolve({txId:\"mock_tx_id_123\",status:\"success\",isMock:!0}):this.messenger.postMessage(i),o.promise}getUserInfo(){const e=function(e,t={}){const s=t.headers,i=t.baseUrl,o=void 0===i?\"https://miniapp-tw.gcp.toyota-wallet.com\":i,r=function(e,t){if(null==e)return{};var s,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(s=r[i])>=0||(o[s]=e[s]);return o}(t,[\"headers\",\"baseUrl\"]);return t=>fetch(o+e,Object.assign({method:\"GET\",headers:Object.assign({},c,t&&{Authorization:\"Bearer \"+t}||{},s||{}),credentials:\"same-origin\"},r)).then(e=>{const t=e.ok;if(!t)throw new Error(JSON.stringify({ok:t,status:e.status,statusText:e.statusText},void 0,2));return e.json()})}(\"/v1/userinfo\");return this.getAccessToken().then(({token:t,isMock:s})=>s?Promise.resolve({email:\"john123@example.com\",first_name:\"John\",last_name:\"Doe\",isMock:!0}):e(t))}}var p=function(){return!(\"web\"!==s(this,u)[u]&&!s(this,m)[m].get(l))};const w=()=>Promise.resolve(),f={get:(e,t)=>\"default\"===t||\"__esModule\"===t?new Proxy({},{get:()=>w}):w},k=\"undefined\"!=typeof window?g.load():new Proxy({},f);var b=Object.freeze(k);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (b);\n\n\n//# sourceURL=webpack://miniapp-dotnet-core-example/./node_modules/gcp-miniappkit-jssdk/dist/index.modern.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;