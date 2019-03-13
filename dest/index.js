module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/filterObjectByEmptyValues.js":
/*!**************************************************!*\
  !*** ./src/helpers/filterObjectByEmptyValues.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filterObjectByEmptyValues; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function filterObjectByEmptyValues(obj) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    typeof value !== 'undefined' && (acc[key] = value);
    return acc;
  }, {});
}

/***/ }),

/***/ "./src/hooks/useErrors.js":
/*!********************************!*\
  !*** ./src/hooks/useErrors.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useErrors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_filterObjectByEmptyValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/filterObjectByEmptyValues */ "./src/helpers/filterObjectByEmptyValues.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useErrors() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var customSetErrors = function customSetErrors(currentErrors) {
    return setErrors(function (prevErrors) {
      return Object(_helpers_filterObjectByEmptyValues__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread({}, prevErrors, currentErrors));
    });
  };

  var customSetError = function customSetError(name, value) {
    return customSetErrors(_defineProperty({}, name, value));
  };

  return [errors, customSetError, customSetErrors];
}

/***/ }),

/***/ "./src/hooks/useEventUid.js":
/*!**********************************!*\
  !*** ./src/hooks/useEventUid.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventUid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useEventUid() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      eventData = _useState2[0],
      set = _useState2[1];

  return [eventData, function (type) {
    set({
      type: type,
      uid: Date.now()
    });
  }];
}

/***/ }),

/***/ "./src/hooks/usePrevious.js":
/*!**********************************!*\
  !*** ./src/hooks/usePrevious.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ "./src/hooks/useUid.js":
/*!*****************************!*\
  !*** ./src/hooks/useUid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useUid() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Date.now()),
      _useState2 = _slicedToArray(_useState, 2),
      uid = _useState2[0],
      updateUid = _useState2[1];

  return [uid, function () {
    return updateUid(Date.now());
  }];
}

/***/ }),

/***/ "./src/hooks/useValidating.js":
/*!************************************!*\
  !*** ./src/hooks/useValidating.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useValidating; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useValidating() {
  var defaultValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValues),
      _useState2 = _slicedToArray(_useState, 2),
      validatingObj = _useState2[0],
      setValidating = _useState2[1];

  var customSetValidating = function customSetValidating(name, sate) {
    return setValidating(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, name, sate));
    });
  };

  var values = Object.values(validatingObj);
  var isValidating = values.length ? !values.some(function (v) {
    return !v;
  }) : false;
  return [isValidating, customSetValidating, validatingObj];
}

/***/ }),

/***/ "./src/hooks/useValues.js":
/*!********************************!*\
  !*** ./src/hooks/useValues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useValues; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useValues(fieldsConfig) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return Object.keys(fieldsConfig).reduce(function (acc, name) {
      var _fieldsConfig$name$de = fieldsConfig[name].defaultValue,
          defaultValue = _fieldsConfig$name$de === void 0 ? '' : _fieldsConfig$name$de;
      acc[name] = defaultValue;
      return acc;
    }, {});
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var setValuesCustom = function setValuesCustom() {
    var newValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return setValues(function (prevValues) {
      return _objectSpread({}, prevValues, newValues);
    });
  };

  var setValue = function setValue(name, value) {
    return setValuesCustom(_defineProperty({}, name, value));
  };

  return [values, setValue];
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: useForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/usePrevious */ "./src/hooks/usePrevious.js");
/* harmony import */ var _hooks_useErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useErrors */ "./src/hooks/useErrors.js");
/* harmony import */ var _hooks_useValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useValues */ "./src/hooks/useValues.js");
/* harmony import */ var _hooks_useUid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useUid */ "./src/hooks/useUid.js");
/* harmony import */ var _hooks_useEventUid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useEventUid */ "./src/hooks/useEventUid.js");
/* harmony import */ var _hooks_useValidating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useValidating */ "./src/hooks/useValidating.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/*
    TODO:
    1. Update fields method
    2. Method for validation all fields or isValid for each field
*/

/**
 * useForm
 * @param {Object} fieldsConfig
 */

function useForm(fieldsConfig) {
  var _useUid = Object(_hooks_useUid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _useUid2 = _slicedToArray(_useUid, 2),
      fieldsUid = _useUid2[0],
      updateFieldsUid = _useUid2[1];

  var _useEventUid = Object(_hooks_useEventUid__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useEventUid2 = _slicedToArray(_useEventUid, 2),
      eventData = _useEventUid2[0],
      updateEvent = _useEventUid2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(fieldsConfig),
      _useState2 = _slicedToArray(_useState, 2),
      userFields = _useState2[0],
      updateUserFields = _useState2[1];

  var _useValues = Object(_hooks_useValues__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldsConfig),
      _useValues2 = _slicedToArray(_useValues, 2),
      values = _useValues2[0],
      setValue = _useValues2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      activeName = _useState4[0],
      setActiveName = _useState4[1];

  var _useErrors = Object(_hooks_useErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useErrors2 = _slicedToArray(_useErrors, 3),
      errors = _useErrors2[0],
      setError = _useErrors2[1],
      setErrors = _useErrors2[2];

  var isMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var prevActiveName = Object(_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_1__["default"])(activeName, true);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object.keys(userFields).reduce(function (acc, name) {
      var _userFields$name = userFields[name],
          _ref = _userFields$name.ref,
          _onChange = _userFields$name.onChange,
          _onFocus = _userFields$name.onFocus,
          _onBlur = _userFields$name.onBlur,
          onValidate = _userFields$name.onValidate,
          _userFields$name$vali = _userFields$name.validateOn,
          validateOn = _userFields$name$vali === void 0 ? 'change' : _userFields$name$vali,
          _userFields$name$defa = _userFields$name.defaultValue,
          defaultValue = _userFields$name$defa === void 0 ? '' : _userFields$name$defa,
          rest = _objectWithoutProperties(_userFields$name, ["ref", "onChange", "onFocus", "onBlur", "onValidate", "validateOn", "defaultValue"]);

      var value = values[name];
      var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
      acc.fieldsAttrs[name] = _objectSpread({
        name: name,
        value: value
      }, rest, {
        ref: function ref(el) {
          inputRef.current = el;
          _ref && _ref.current && (_ref.current = el);
        },
        onChange: function onChange(e) {
          setValue(name, e.target.value);
          updateEvent('change');
          typeof _onChange === 'function' && _onChange(e);
        },
        onFocus: function onFocus(e) {
          setActiveName(name);
          updateEvent('focus');
          typeof _onFocus === 'function' && _onFocus(e);
        },
        onBlur: function onBlur(e) {
          setActiveName();
          updateEvent('blur');
          typeof _onBlur === 'function' && _onBlur(e);
        }
      });
      acc.fieldsProps[name] = {
        onValidate: onValidate,
        validateOn: validateOn,
        defaultValue: defaultValue,
        ref: inputRef
      };
      return acc;
    }, {
      fieldsAttrs: {},
      fieldsProps: {}
    });
  }, [fieldsUid]),
      fieldsAttrs = _useMemo.fieldsAttrs,
      fieldsProps = _useMemo.fieldsProps;

  var _useValidating = Object(_hooks_useValidating__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      _useValidating2 = _slicedToArray(_useValidating, 2),
      isValidating = _useValidating2[0],
      setValidating = _useValidating2[1];

  var activeFieldAttrs = fieldsAttrs[activeName];
  var setValueCustom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name, value) {
    var _ref2 = fieldsProps[name] || {},
        ref = _ref2.ref;

    ref && ref.current && ref.current.focus();
    setValue(name, value);
    updateEvent('change');
  }, []); //Update value

  if (activeFieldAttrs) {
    activeFieldAttrs.value = values[activeName];
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //Skip validation on field mount
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    var type = eventData.type; //If fields is blured, than current name === last focused field;

    var actualCurrentName = type === 'blur' ? prevActiveName : activeName;

    var _ref3 = fieldsProps[actualCurrentName] || {},
        onValidate = _ref3.onValidate,
        validateOn = _ref3.validateOn;

    var isValidation = new RegExp(type).test(validateOn);

    if (typeof onValidate !== 'function' || !isValidation || isValidating) {
      return;
    }

    setValidating(actualCurrentName, true);
    onValidate(values).then(function () {
      setValidating(actualCurrentName, false);
      setError(actualCurrentName);
    }).catch(function (errStr) {
      setValidating(actualCurrentName, false);
      setError(actualCurrentName, errStr);
    });
  }, [eventData.uid]);
  return {
    values: values,
    fields: fieldsAttrs,
    errors: errors,
    isValidating: isValidating,
    setError: setError,
    setValue: setValueCustom
    /* handleSubmit: () => {
        const validations = Object.keys(fieldsProps).map(key =>
            fieldsProps[key].onValidate(values)
        );
         setValidating(true);
         Promise.all(validations)
            .then(() => setValidating(false))
            .catch(err => {
                setValidating(false);
                setErrors(err);
            });
         return values;
    } */

  };
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });