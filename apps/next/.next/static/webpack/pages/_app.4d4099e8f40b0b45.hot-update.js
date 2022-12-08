"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "../../packages/config/tamagui.config.ts":
/*!***********************************************!*\
  !*** ../../packages/config/tamagui.config.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var _my_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @my/ui */ \"../../packages/ui/src/index.tsx\");\n/* harmony import */ var _tamagui_font_inter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tamagui/font-inter */ \"../../node_modules/@tamagui/font-inter/dist/jsx/index.js\");\n/* harmony import */ var _tamagui_shorthands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tamagui/shorthands */ \"../../node_modules/@tamagui/shorthands/dist/jsx/index.js\");\n/* harmony import */ var _tamagui_theme_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tamagui/theme-base */ \"../../node_modules/@tamagui/theme-base/dist/esm/index.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ \"../../packages/config/animations.ts\");\n\n\n\n\n\nconst headingFont = (0,_tamagui_font_inter__WEBPACK_IMPORTED_MODULE_0__.createInterFont)({\n    size: {\n        6: 15\n    },\n    transform: {\n        6: \"uppercase\",\n        7: \"none\"\n    },\n    weight: {\n        6: \"400\",\n        7: \"700\"\n    },\n    color: {\n        6: \"$colorFocus\",\n        7: \"$color\"\n    },\n    letterSpacing: {\n        5: 2,\n        6: 1,\n        7: 0,\n        8: -1,\n        9: -2,\n        10: -3,\n        12: -4,\n        14: -5,\n        15: -6\n    },\n    face: {\n        700: {\n            normal: \"InterBold\"\n        }\n    }\n});\nconst bodyFont = (0,_tamagui_font_inter__WEBPACK_IMPORTED_MODULE_0__.createInterFont)({\n    face: {\n        700: {\n            normal: \"InterBold\"\n        }\n    }\n}, {\n    sizeSize: (size)=>Math.round(size * 1.1),\n    sizeLineHeight: (size)=>Math.round(size * 1.1 + (size > 20 ? 10 : 10))\n});\nconst config = (0,_my_ui__WEBPACK_IMPORTED_MODULE_3__.createTamagui)({\n    animations: _animations__WEBPACK_IMPORTED_MODULE_2__.animations,\n    defualtTheme: \"light\",\n    shouldAddPrefersColorThemes: true,\n    themeClassNameOnRoot: true,\n    shorthands: _tamagui_shorthands__WEBPACK_IMPORTED_MODULE_1__.shorthands,\n    fonts: {\n        heading: headingFont,\n        body: bodyFont\n    },\n    themes: _tamagui_theme_base__WEBPACK_IMPORTED_MODULE_4__.themes,\n    tokens: _tamagui_theme_base__WEBPACK_IMPORTED_MODULE_4__.tokens,\n    media: {\n        xs: {\n            maxWidth: 660\n        },\n        sm: {\n            maxWidth: 800\n        },\n        md: {\n            maxWidth: 1020\n        },\n        lg: {\n            maxWidth: 1280\n        },\n        xl: {\n            maxWidth: 1420\n        },\n        xxl: {\n            maxWidth: 1600\n        },\n        gtXs: {\n            minWidth: 660 + 1\n        },\n        gtSm: {\n            minWidth: 800 + 1\n        },\n        gtMd: {\n            minWidth: 1020 + 1\n        },\n        gtLg: {\n            minWidth: 1280 + 1\n        },\n        short: {\n            maxHeight: 820\n        },\n        tall: {\n            minHeight: 820\n        },\n        hoverNone: {\n            hover: \"none\"\n        },\n        pointerCoarse: {\n            pointer: \"coarse\"\n        }\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvY29uZmlnL3RhbWFndWkuY29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNlO0FBQ0w7QUFDSTtBQUVYO0FBRXpDLE1BQU1NLGNBQWNMLG9FQUFlQSxDQUFDO0lBQ2xDTSxNQUFNO1FBQ0osR0FBRztJQUNMO0lBQ0FDLFdBQVc7UUFDVCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0FDLFFBQVE7UUFDTixHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0FDLE9BQU87UUFDTCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0FDLGVBQWU7UUFDYixHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixJQUFJLENBQUM7UUFDTCxJQUFJLENBQUM7UUFDTCxJQUFJLENBQUM7UUFDTCxJQUFJLENBQUM7SUFDUDtJQUNBQyxNQUFNO1FBQ0osS0FBSztZQUFFQyxRQUFRO1FBQVk7SUFDN0I7QUFDRjtBQUVBLE1BQU1DLFdBQVdiLG9FQUFlQSxDQUM5QjtJQUNFVyxNQUFNO1FBQ0osS0FBSztZQUFFQyxRQUFRO1FBQVk7SUFDN0I7QUFDRixHQUNBO0lBQ0VFLFVBQVUsQ0FBQ1IsT0FBU1MsS0FBS0MsS0FBSyxDQUFDVixPQUFPO0lBQ3RDVyxnQkFBZ0IsQ0FBQ1gsT0FBU1MsS0FBS0MsS0FBSyxDQUFDVixPQUFPLE1BQU9BLENBQUFBLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFDeEU7QUFHSyxNQUFNWSxTQUFTbkIscURBQWFBLENBQUM7SUFDbENLLFVBQVVBLHFEQUFBQTtJQUNWZSxjQUFjO0lBQ2RDLDZCQUE2QixJQUFJO0lBQ2pDQyxzQkFBc0IsSUFBSTtJQUMxQnBCLFVBQVVBLDZEQUFBQTtJQUNWcUIsT0FBTztRQUNMQyxTQUFTbEI7UUFDVG1CLE1BQU1YO0lBQ1I7SUFDQVgsTUFBTUEseURBQUFBO0lBQ05DLE1BQU1BLHlEQUFBQTtJQUNOc0IsT0FBTztRQUNMQyxJQUFJO1lBQUVDLFVBQVU7UUFBSTtRQUNwQkMsSUFBSTtZQUFFRCxVQUFVO1FBQUk7UUFDcEJFLElBQUk7WUFBRUYsVUFBVTtRQUFLO1FBQ3JCRyxJQUFJO1lBQUVILFVBQVU7UUFBSztRQUNyQkksSUFBSTtZQUFFSixVQUFVO1FBQUs7UUFDckJLLEtBQUs7WUFBRUwsVUFBVTtRQUFLO1FBQ3RCTSxNQUFNO1lBQUVDLFVBQVUsTUFBTTtRQUFFO1FBQzFCQyxNQUFNO1lBQUVELFVBQVUsTUFBTTtRQUFFO1FBQzFCRSxNQUFNO1lBQUVGLFVBQVUsT0FBTztRQUFFO1FBQzNCRyxNQUFNO1lBQUVILFVBQVUsT0FBTztRQUFFO1FBQzNCSSxPQUFPO1lBQUVDLFdBQVc7UUFBSTtRQUN4QkMsTUFBTTtZQUFFQyxXQUFXO1FBQUk7UUFDdkJDLFdBQVc7WUFBRUMsT0FBTztRQUFPO1FBQzNCQyxlQUFlO1lBQUVDLFNBQVM7UUFBUztJQUNyQztBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uL3BhY2thZ2VzL2NvbmZpZy90YW1hZ3VpLmNvbmZpZy50cz8zYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhbWFndWkgfSBmcm9tICdAbXkvdWknXG5pbXBvcnQgeyBjcmVhdGVJbnRlckZvbnQgfSBmcm9tICdAdGFtYWd1aS9mb250LWludGVyJ1xuaW1wb3J0IHsgc2hvcnRoYW5kcyB9IGZyb20gJ0B0YW1hZ3VpL3Nob3J0aGFuZHMnXG5pbXBvcnQgeyB0aGVtZXMsIHRva2VucyB9IGZyb20gJ0B0YW1hZ3VpL3RoZW1lLWJhc2UnXG5cbmltcG9ydCB7IGFuaW1hdGlvbnMgfSBmcm9tICcuL2FuaW1hdGlvbnMnXG5cbmNvbnN0IGhlYWRpbmdGb250ID0gY3JlYXRlSW50ZXJGb250KHtcbiAgc2l6ZToge1xuICAgIDY6IDE1LFxuICB9LFxuICB0cmFuc2Zvcm06IHtcbiAgICA2OiAndXBwZXJjYXNlJyxcbiAgICA3OiAnbm9uZScsXG4gIH0sXG4gIHdlaWdodDoge1xuICAgIDY6ICc0MDAnLFxuICAgIDc6ICc3MDAnLFxuICB9LFxuICBjb2xvcjoge1xuICAgIDY6ICckY29sb3JGb2N1cycsXG4gICAgNzogJyRjb2xvcicsXG4gIH0sXG4gIGxldHRlclNwYWNpbmc6IHtcbiAgICA1OiAyLFxuICAgIDY6IDEsXG4gICAgNzogMCxcbiAgICA4OiAtMSxcbiAgICA5OiAtMixcbiAgICAxMDogLTMsXG4gICAgMTI6IC00LFxuICAgIDE0OiAtNSxcbiAgICAxNTogLTYsXG4gIH0sXG4gIGZhY2U6IHtcbiAgICA3MDA6IHsgbm9ybWFsOiAnSW50ZXJCb2xkJyB9LFxuICB9LFxufSlcblxuY29uc3QgYm9keUZvbnQgPSBjcmVhdGVJbnRlckZvbnQoXG4gIHtcbiAgICBmYWNlOiB7XG4gICAgICA3MDA6IHsgbm9ybWFsOiAnSW50ZXJCb2xkJyB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBzaXplU2l6ZTogKHNpemUpID0+IE1hdGgucm91bmQoc2l6ZSAqIDEuMSksXG4gICAgc2l6ZUxpbmVIZWlnaHQ6IChzaXplKSA9PiBNYXRoLnJvdW5kKHNpemUgKiAxLjEgKyAoc2l6ZSA+IDIwID8gMTAgOiAxMCkpLFxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBjcmVhdGVUYW1hZ3VpKHtcbiAgYW5pbWF0aW9ucyxcbiAgZGVmdWFsdFRoZW1lOiAnbGlnaHQnLFxuICBzaG91bGRBZGRQcmVmZXJzQ29sb3JUaGVtZXM6IHRydWUsXG4gIHRoZW1lQ2xhc3NOYW1lT25Sb290OiB0cnVlLFxuICBzaG9ydGhhbmRzLFxuICBmb250czoge1xuICAgIGhlYWRpbmc6IGhlYWRpbmdGb250LFxuICAgIGJvZHk6IGJvZHlGb250LFxuICB9LFxuICB0aGVtZXMsXG4gIHRva2VucyxcbiAgbWVkaWE6IHtcbiAgICB4czogeyBtYXhXaWR0aDogNjYwIH0sXG4gICAgc206IHsgbWF4V2lkdGg6IDgwMCB9LFxuICAgIG1kOiB7IG1heFdpZHRoOiAxMDIwIH0sXG4gICAgbGc6IHsgbWF4V2lkdGg6IDEyODAgfSxcbiAgICB4bDogeyBtYXhXaWR0aDogMTQyMCB9LFxuICAgIHh4bDogeyBtYXhXaWR0aDogMTYwMCB9LFxuICAgIGd0WHM6IHsgbWluV2lkdGg6IDY2MCArIDEgfSxcbiAgICBndFNtOiB7IG1pbldpZHRoOiA4MDAgKyAxIH0sXG4gICAgZ3RNZDogeyBtaW5XaWR0aDogMTAyMCArIDEgfSxcbiAgICBndExnOiB7IG1pbldpZHRoOiAxMjgwICsgMSB9LFxuICAgIHNob3J0OiB7IG1heEhlaWdodDogODIwIH0sXG4gICAgdGFsbDogeyBtaW5IZWlnaHQ6IDgyMCB9LFxuICAgIGhvdmVyTm9uZTogeyBob3ZlcjogJ25vbmUnIH0sXG4gICAgcG9pbnRlckNvYXJzZTogeyBwb2ludGVyOiAnY29hcnNlJyB9LFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJjcmVhdGVUYW1hZ3VpIiwiY3JlYXRlSW50ZXJGb250Iiwic2hvcnRoYW5kcyIsInRoZW1lcyIsInRva2VucyIsImFuaW1hdGlvbnMiLCJoZWFkaW5nRm9udCIsInNpemUiLCJ0cmFuc2Zvcm0iLCJ3ZWlnaHQiLCJjb2xvciIsImxldHRlclNwYWNpbmciLCJmYWNlIiwibm9ybWFsIiwiYm9keUZvbnQiLCJzaXplU2l6ZSIsIk1hdGgiLCJyb3VuZCIsInNpemVMaW5lSGVpZ2h0IiwiY29uZmlnIiwiZGVmdWFsdFRoZW1lIiwic2hvdWxkQWRkUHJlZmVyc0NvbG9yVGhlbWVzIiwidGhlbWVDbGFzc05hbWVPblJvb3QiLCJmb250cyIsImhlYWRpbmciLCJib2R5IiwibWVkaWEiLCJ4cyIsIm1heFdpZHRoIiwic20iLCJtZCIsImxnIiwieGwiLCJ4eGwiLCJndFhzIiwibWluV2lkdGgiLCJndFNtIiwiZ3RNZCIsImd0TGciLCJzaG9ydCIsIm1heEhlaWdodCIsInRhbGwiLCJtaW5IZWlnaHQiLCJob3Zlck5vbmUiLCJob3ZlciIsInBvaW50ZXJDb2Fyc2UiLCJwb2ludGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/config/tamagui.config.ts\n"));

/***/ })

});