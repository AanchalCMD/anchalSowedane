/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

// Greet msg
var greetMsg = document.getElementById('greet-msg');
var date = new Date();
var hours = date.getHours();

if (greetMsg) {
  if (hours >= 0 & hours < 12) greetMsg.innerHTML = 'Good Morning';
  if (hours >= 12 & hours < 18) greetMsg.innerHTML = 'Good Afternoon';
  if (hours >= 18 & hours < 24) greetMsg.innerHTML = 'Good Evening';
} // Alert Messages
// 1. ORDER


var success_alert_div = document.querySelector('#success-alert');

if (success_alert_div) {
  setTimeout(function () {
    success_alert_div.remove();
  }, 2000);
} // 2. REGISTER


var register_success_alert_div = document.querySelector('#register-success-alert');
var remove_alert = document.querySelector('#remove-alert');

if (register_success_alert_div) {
  remove_alert.addEventListener('click', function () {
    register_success_alert_div.remove();
  });
} // 3. LOGIN


var login_alert_div = document.querySelector('#login-success-alert');

if (login_alert_div) {
  setTimeout(function () {
    login_alert_div.remove();
  }, 3000);
} // FOR RELOADING PAGE WHEN PRESSED BACK BUTTON


var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
  location.reload(true);
}

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n3 │ @import '~noty/src/noty.scss';\r\n  │         ^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  resources\\scss\\app.scss 3:9  root stylesheet\n    at processResult (C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\webpack\\lib\\NormalModule.js:743:19)\n    at C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\webpack\\lib\\NormalModule.js:844:5\n    at C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\sass\\sass.dart.js:96202:16)\n    at render_closure1.call$2 (C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\sass\\sass.dart.js:82137:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\sass\\sass.dart.js:28242:18)\n    at _FutureListener.handleError$1 (C:\\Users\\sahil\\VSCODE\\For Sowedane\\node_modules\\sass\\sass.dart.js:26764:21)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./resources/js/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/scss/app.scss"]();
/******/ 	
/******/ })()
;