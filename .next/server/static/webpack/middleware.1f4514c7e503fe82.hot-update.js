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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    providers: [],\n    secret: \"\",\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        authorized ({ auth, request }) {\n            const isLoggedIn = auth?.user;\n            const isOnDashboard = request.nextUrl.pathname.startsWith(\"/dashboard\");\n            if (isOnDashboard) {\n                if (isLoggedIn) return true;\n                return false;\n            } else if (isLoggedIn) {\n                return Response.redirect(new URL(\"/dashboard\", request.nextUrl));\n            }\n            return true;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXV0aGNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYTtJQUN4QkMsV0FBVyxFQUFFO0lBQ2JDLFFBQVE7SUFDUkMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsV0FBVztRQUNUQyxZQUFXLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO1lBQzFCLE1BQU1DLGFBQWFGLE1BQU1HO1lBQ3pCLE1BQU1DLGdCQUFnQkgsUUFBUUksT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQztZQUMxRCxJQUFJSCxlQUFlO2dCQUNqQixJQUFJRixZQUFZLE9BQU87Z0JBQ3ZCLE9BQU87WUFDVCxPQUFPLElBQUlBLFlBQVk7Z0JBQ3JCLE9BQU9NLFNBQVNDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGNBQWNULFFBQVFJLE9BQU87WUFDaEU7WUFDQSxPQUFPO1FBQ1Q7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXV0aGNvbmZpZy5qcz8wMWNhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdXRoQ29uZmlnID0ge1xyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgc2VjcmV0OiBcIlwiLFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGF1dGhvcml6ZWQoeyBhdXRoLCByZXF1ZXN0IH0pIHtcclxuICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IGF1dGg/LnVzZXI7XHJcbiAgICAgIGNvbnN0IGlzT25EYXNoYm9hcmQgPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgIGlmIChpc09uRGFzaGJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGlzTG9nZ2VkSW4pIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChpc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvZGFzaGJvYXJkXCIsIHJlcXVlc3QubmV4dFVybCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiYXV0aENvbmZpZyIsInByb3ZpZGVycyIsInNlY3JldCIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXF1ZXN0IiwiaXNMb2dnZWRJbiIsInVzZXIiLCJpc09uRGFzaGJvYXJkIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsIlJlc3BvbnNlIiwicmVkaXJlY3QiLCJVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./authconfig.js\n");

/***/ })

});