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

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: filterObjectByEmptyValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterObjectByEmptyValues", function() { return filterObjectByEmptyValues; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* export function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

export function isEqual(obj, compareObj) {
    return JSON.stringify(obj) === JSON.stringify(compareObj);
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
} */

/* export function validateField(values, handler, name) {
    const validationRes = handler(values, name);

    if (!isPromise(validationRes)) {
        return Promise.resolve(validationRes);
    }

    return validationRes;
} */
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
}

function useErrors() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var customSetErrors = function customSetErrors(currentErrors) {
    return setErrors(function (prevErrors) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["filterObjectByEmptyValues"])(_objectSpread({}, prevErrors, currentErrors));
    });
  };

  var customSetError = function customSetError(name, value) {
    return customSetErrors(_defineProperty({}, name, value));
  };

  return [errors, customSetError, customSetErrors];
}
/**
 * useField
 * @param {Object} props
 * @param {String|Number} [props.defaultValue = '']
 * @param {Function} [props.onValidate = values => Promise.resolve(true)]
 * @returns [
 *      {} //Valid DOM attrs,
 *      {} //Component props
 * ]
 */


function useField(props) {
  var _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
      _props$onValidate = props.onValidate,
      onValidate = _props$onValidate === void 0 ? function () {
    return Promise.resolve(true);
  } : _props$onValidate,
      rest = _objectWithoutProperties(props, ["defaultValue", "onValidate"]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(String(defaultValue)),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var isActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  return [//Valid DOM attrs
  _objectSpread({
    value: value
  }, rest, {
    onChange: function onChange(e) {
      console.info('123123');
      setValue(e.target.value);
    },
    onBlur: function onBlur() {
      isActive.current = false;
    },
    onFocus: function onFocus() {
      isActive.current = true;
    }
  }), //Component props
  {
    setValue: setValue,
    onValidate: onValidate,
    isActive: isActive.current
  }];
}
/**
 * useForm
 * @param {Array} fields
 */


function useForm(fieldsConfig) {
  var _useErrors = useErrors(),
      _useErrors2 = _slicedToArray(_useErrors, 3),
      errors = _useErrors2[0],
      setError = _useErrors2[1],
      setErrors = _useErrors2[2];

  var isMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isValidating = _useState6[0],
      setValidating = _useState6[1];

  var res = Object.keys(fieldsConfig).reduce(function (acc, name) {
    var field = fieldsConfig[name];

    var _useField = useField(_objectSpread({
      name: name
    }, field)),
        _useField2 = _slicedToArray(_useField, 2),
        attrs = _useField2[0],
        props = _useField2[1];

    var isActive = props.isActive;
    acc.fieldsAttrs[name] = attrs;
    acc.fieldsProps[name] = props;
    acc.values[name] = attrs.value;
    isActive && (acc.currentName = name);
    return acc;
  }, {
    currentName: undefined,
    fieldsAttrs: {},
    fieldsProps: {},
    values: {}
  });
  var fieldsAttrs = res.fieldsAttrs,
      fieldsProps = res.fieldsProps,
      values = res.values,
      currentName = res.currentName;
  var currentValue = values[currentName];
  var prevCurrentName = usePrevious(currentName); //If fields is blured, than current name === last focused field;

  var actualCurrentName = currentName || prevCurrentName;

  var setValue = function setValue(name, value) {
    return fieldsProps[name] && fieldsProps[name].setValue(value);
  };

  console.info(values, 'ppp');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //Skip validation on field mount
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    setValidating(true);
    fieldsProps[actualCurrentName].onValidate(values).then(function () {
      setValidating(false);
      setError(actualCurrentName);
    }).catch(function (errStr) {
      setValidating(false);
      setError(actualCurrentName, errStr);
    });
  }, [currentValue]);
  return {
    values: values,
    fields: fieldsAttrs,
    errors: errors,
    isValidating: isValidating,
    setError: setError,
    setValue: setValue
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