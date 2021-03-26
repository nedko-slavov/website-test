module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/Column.tsx":
/*!**************************************!*\
  !*** ./components/layout/Column.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/nedko/Sites/website-test/components/layout/Column.tsx\";\n\n\nconst Column = ({\n  children,\n  colWidth,\n  className\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: `col-${colWidth} ${className}`,\n  children: children\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined);\n\nColumn.defaultProps = {\n  className: ''\n};\nColumn.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  colWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9Db2x1bW4udHN4Pzg0YzUiXSwibmFtZXMiOlsiQ29sdW1uIiwiY2hpbGRyZW4iLCJjb2xXaWR0aCIsImNsYXNzTmFtZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBLE1BQU1BLE1BQTRCLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDLFVBQVo7QUFBc0JDO0FBQXRCLENBQUQsa0JBQ25DO0FBQUssV0FBUyxFQUFHLE9BQU1ELFFBQVMsSUFBR0MsU0FBVSxFQUE3QztBQUFBLFlBQWlERjtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBSUFELE1BQU0sQ0FBQ0ksWUFBUCxHQUFzQjtBQUNwQkQsV0FBUyxFQUFFO0FBRFMsQ0FBdEI7QUFJQUgsTUFBTSxDQUFDSyxTQUFQLEdBQW1CO0FBQ2pCSixVQUFRLEVBQUVLLGlEQUFTLENBQUNDLFNBQVYsQ0FBb0IsQ0FBQ0QsaURBQVMsQ0FBQ0UsT0FBVixDQUFrQkYsaURBQVMsQ0FBQ0csSUFBNUIsQ0FBRCxFQUFvQ0gsaURBQVMsQ0FBQ0csSUFBOUMsQ0FBcEIsRUFBeUVDLFVBRGxFO0FBRWpCUCxXQUFTLEVBQUVHLGlEQUFTLENBQUNLLE1BRko7QUFHakJULFVBQVEsRUFBRUksaURBQVMsQ0FBQ0ssTUFBVixDQUFpQkQ7QUFIVixDQUFuQjtBQU1lVixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L0NvbHVtbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29sdW1uTm9kZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgQ29sdW1uOiBSZWFjdC5GQzxDb2x1bW5Ob2RlPiA9ICh7IGNoaWxkcmVuLCBjb2xXaWR0aCwgY2xhc3NOYW1lIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtJHtjb2xXaWR0aH0gJHtjbGFzc05hbWV9YH0+e2NoaWxkcmVufTwvZGl2PlxuKTtcblxuQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbkNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xXaWR0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Column.tsx\n");

/***/ }),

/***/ "./components/layout/Container.tsx":
/*!*****************************************!*\
  !*** ./components/layout/Container.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/nedko/Sites/website-test/components/layout/Container.tsx\";\n\n\nconst Container = ({\n  children,\n  className\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: `container ${className}`,\n  children: children\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined);\n\nContainer.defaultProps = {\n  className: ''\n};\nContainer.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9Db250YWluZXIudHN4PzlkMzYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQSxNQUFNQSxTQUE2QixHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsa0JBQ3BDO0FBQUssV0FBUyxFQUFHLGFBQVlBLFNBQVUsRUFBdkM7QUFBQSxZQUEyQ0Q7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQUlBRCxTQUFTLENBQUNHLFlBQVYsR0FBeUI7QUFDdkJELFdBQVMsRUFBRTtBQURZLENBQXpCO0FBSUFGLFNBQVMsQ0FBQ0ksU0FBVixHQUFzQjtBQUNwQkgsVUFBUSxFQUFFSSxpREFBUyxDQUFDQyxTQUFWLENBQW9CLENBQUNELGlEQUFTLENBQUNFLE9BQVYsQ0FBa0JGLGlEQUFTLENBQUNHLElBQTVCLENBQUQsRUFBb0NILGlEQUFTLENBQUNHLElBQTlDLENBQXBCLEVBQXlFQyxVQUQvRDtBQUVwQlAsV0FBUyxFQUFFRyxpREFBUyxDQUFDSztBQUZELENBQXRCO0FBS2VWLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvQ29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBIdG1sTm9kZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgQ29udGFpbmVyOiBSZWFjdC5GQzxIdG1sTm9kZT4gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgJHtjbGFzc05hbWV9YH0+e2NoaWxkcmVufTwvZGl2PlxuKTtcblxuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksIFByb3BUeXBlcy5ub2RlXSkuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Container.tsx\n");

/***/ }),

/***/ "./components/layout/Row.tsx":
/*!***********************************!*\
  !*** ./components/layout/Row.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/nedko/Sites/website-test/components/layout/Row.tsx\";\n\n\nconst Row = ({\n  children,\n  className\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: `row ${className}`,\n  children: children\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined);\n\nRow.defaultProps = {\n  className: ''\n};\nRow.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9Sb3cudHN4PzJmM2YiXSwibmFtZXMiOlsiUm93IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQSxNQUFNQSxHQUF1QixHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsa0JBQzlCO0FBQUssV0FBUyxFQUFHLE9BQU1BLFNBQVUsRUFBakM7QUFBQSxZQUFxQ0Q7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQUlBRCxHQUFHLENBQUNHLFlBQUosR0FBbUI7QUFDakJELFdBQVMsRUFBRTtBQURNLENBQW5CO0FBSUFGLEdBQUcsQ0FBQ0ksU0FBSixHQUFnQjtBQUNkSCxVQUFRLEVBQUVJLGlEQUFTLENBQUNDLFNBQVYsQ0FBb0IsQ0FBQ0QsaURBQVMsQ0FBQ0UsT0FBVixDQUFrQkYsaURBQVMsQ0FBQ0csSUFBNUIsQ0FBRCxFQUFvQ0gsaURBQVMsQ0FBQ0csSUFBOUMsQ0FBcEIsRUFBeUVDLFVBRHJFO0FBRWRQLFdBQVMsRUFBRUcsaURBQVMsQ0FBQ0s7QUFGUCxDQUFoQjtBQUtlVixrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L1Jvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSHRtbE5vZGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFJvdzogUmVhY3QuRkM8SHRtbE5vZGU+ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7Y2xhc3NOYW1lfWB9PntjaGlsZHJlbn08L2Rpdj5cbik7XG5cblJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLCBQcm9wVHlwZXMubm9kZV0pLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Row.tsx\n");

/***/ }),

/***/ "./components/layout/index.tsx":
/*!*************************************!*\
  !*** ./components/layout/index.tsx ***!
  \*************************************/
/*! exports provided: Container, Row, Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./components/layout/Container.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ \"./components/layout/Row.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Row\", function() { return _Row__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ \"./components/layout/Column.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Column\", function() { return _Column__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c3g/OTUwNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gJy4vQ29udGFpbmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm93IH0gZnJvbSAnLi9Sb3cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2x1bW4gfSBmcm9tICcuL0NvbHVtbic7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout/index.tsx\");\n\nvar _jsxFileName = \"/Users/nedko/Sites/website-test/pages/index.tsx\";\n\n\nconst Home = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Hello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFjLEdBQUcsbUJBQ3JCO0FBQUEseUJBQ0UscUVBQUMsNERBQUQ7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBUWVBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPG1haW4+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMT5IZWxsbzwvaDE+XG4gICAgPC9Db250YWluZXI+XG4gIDwvbWFpbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });