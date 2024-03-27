"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./authconfig.js":
/*!***********************!*\
  !*** ./authconfig.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    providers: [],\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        authorized ({ auth, request }) {\n            const isLoggedIn = auth?.user;\n            const isOnDashboard = request.nextUrl.pathname.startsWith(\"/dashboard\");\n            if (isOnDashboard) {\n                if (isLoggedIn) return true;\n                return false;\n            } else if (isLoggedIn) {\n                return Response.redirect(new URL(\"/dashboard\", request.nextUrl));\n            }\n            return true;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXV0aGNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYTtJQUN4QkMsV0FBVSxFQUFFO0lBQ1pDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVEMsWUFBVyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtZQUMxQixNQUFNQyxhQUFhRixNQUFNRztZQUN6QixNQUFNQyxnQkFBZ0JILFFBQVFJLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUM7WUFDMUQsSUFBSUgsZUFBZTtnQkFDakIsSUFBSUYsWUFBWSxPQUFPO2dCQUN2QixPQUFPO1lBQ1QsT0FBTyxJQUFJQSxZQUFZO2dCQUNyQixPQUFPTSxTQUFTQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxjQUFjVCxRQUFRSSxPQUFPO1lBQ2hFO1lBQ0EsT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2F1dGhjb25maWcuanM/MDFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXV0aENvbmZpZyA9IHtcclxuICBwcm92aWRlcnM6W10sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvbG9naW5cIixcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXV0aG9yaXplZCh7IGF1dGgsIHJlcXVlc3QgfSkge1xyXG4gICAgICBjb25zdCBpc0xvZ2dlZEluID0gYXV0aD8udXNlcjtcclxuICAgICAgY29uc3QgaXNPbkRhc2hib2FyZCA9IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgaWYgKGlzT25EYXNoYm9hcmQpIHtcclxuICAgICAgICBpZiAoaXNMb2dnZWRJbikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzTG9nZ2VkSW4pIHtcclxuICAgICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9kYXNoYm9hcmRcIiwgcmVxdWVzdC5uZXh0VXJsKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhdXRoQ29uZmlnIiwicHJvdmlkZXJzIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJhdXRob3JpemVkIiwiYXV0aCIsInJlcXVlc3QiLCJpc0xvZ2dlZEluIiwidXNlciIsImlzT25EYXNoYm9hcmQiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiUmVzcG9uc2UiLCJyZWRpcmVjdCIsIlVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./authconfig.js\n");

/***/ }),

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var _authconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authconfig */ \"(middleware)/./authconfig.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_authconfig__WEBPACK_IMPORTED_MODULE_1__.authConfig).auth);\nconst config = {\n    matcher: [\n        \"/((?!api|static|.*\\\\..*|_next).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBQ1M7QUFFMUMsaUVBQWVBLHFEQUFRQSxDQUFDQyxtREFBVUEsRUFBRUMsSUFBSSxFQUFDO0FBRWxDLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUFvQztBQUNoRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoQ29uZmlnIH0gZnJvbSBcIi4vYXV0aGNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aENvbmZpZykuYXV0aDtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogW1wiLygoPyFhcGl8c3RhdGljfC4qXFxcXC4uKnxfbmV4dCkuKilcIl0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhDb25maWciLCJhdXRoIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});