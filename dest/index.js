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
 * @param {Function} [props.onValidate]
 * @returns [
 *      {} //Valid DOM attrs,
 *      {} //Component props
 * ]
 */


function useField(props) {
  var _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
      onValidate = props.onValidate,
      _ref = props.ref,
      _onChange = props.onChange,
      _onFocus = props.onFocus,
      _onBlur = props.onBlur,
      rest = _objectWithoutProperties(props, ["defaultValue", "onValidate", "ref", "onChange", "onFocus", "onBlur"]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(String(defaultValue)),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var isActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var setValueWrapper = function setValueWrapper() {
    inputRef.current && inputRef.current.focus();
    setValue.apply(void 0, arguments);
  };

  return [//Valid DOM attrs
  _objectSpread({
    value: value
  }, rest, {
    ref: function ref(el) {
      inputRef.current = el;
      _ref && _ref.current && (_ref.current = el);
    },
    onChange: function onChange(e) {
      setValue(e.target.value);
      typeof _onChange === 'function' && _onChange(e);
    },
    onFocus: function onFocus(e) {
      isActive.current = true;
      typeof _onFocus === 'function' && _onFocus(e);
    },
    onBlur: function onBlur(e) {
      isActive.current = false;
      typeof _onBlur === 'function' && _onBlur(e);
    }
  }), //Component props
  {
    onValidate: onValidate,
    setValue: setValueWrapper,
    isActive: isActive.current,
    ref: inputRef
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //Skip validation on field mount
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    var field = fieldsProps[actualCurrentName];

    if (!field || !field.onValidate) {
      return;
    }

    setValidating(true);
    field.onValidate(values).then(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiBleHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbChvYmosIGNvbXBhcmVPYmopIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29tcGFyZU9iaik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn0gKi9cblxuLyogZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQodmFsdWVzLCBoYW5kbGVyLCBuYW1lKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvblJlcyA9IGhhbmRsZXIodmFsdWVzLCBuYW1lKTtcblxuICAgIGlmICghaXNQcm9taXNlKHZhbGlkYXRpb25SZXMpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvblJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXM7XG59ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJPYmplY3RCeUVtcHR5VmFsdWVzKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiAoYWNjW2tleV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG4iLCJpbXBvcnQge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VSZWZcbn0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBmaWx0ZXJPYmplY3RCeUVtcHR5VmFsdWVzIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIHVzZUVycm9ycygpIHtcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IGN1c3RvbVNldEVycm9ycyA9IGN1cnJlbnRFcnJvcnMgPT4gc2V0RXJyb3JzKHByZXZFcnJvcnMgPT5cbiAgICAgICAgZmlsdGVyT2JqZWN0QnlFbXB0eVZhbHVlcyh7XG4gICAgICAgICAgICAuLi5wcmV2RXJyb3JzLFxuICAgICAgICAgICAgLi4uY3VycmVudEVycm9yc1xuICAgICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgY3VzdG9tU2V0RXJyb3IgPSAobmFtZSwgdmFsdWUpID0+IGN1c3RvbVNldEVycm9ycyh7IFtuYW1lXTogdmFsdWUgfSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGN1c3RvbVNldEVycm9yLFxuICAgICAgICBjdXN0b21TZXRFcnJvcnNcbiAgICBdO1xufVxuXG4vKipcbiAqIHVzZUZpZWxkXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gW3Byb3BzLmRlZmF1bHRWYWx1ZSA9ICcnXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BzLm9uVmFsaWRhdGVdXG4gKiBAcmV0dXJucyBbXG4gKiAgICAgIHt9IC8vVmFsaWQgRE9NIGF0dHJzLFxuICogICAgICB7fSAvL0NvbXBvbmVudCBwcm9wc1xuICogXVxuICovXG5mdW5jdGlvbiB1c2VGaWVsZChwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gJycsXG4gICAgICAgIG9uVmFsaWRhdGUsXG4gICAgICAgIHJlZixcbiAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgIG9uRm9jdXMsXG4gICAgICAgIG9uQmx1cixcbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFN0cmluZyhkZWZhdWx0VmFsdWUpKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBzZXRWYWx1ZVdyYXBwZXIgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50ICYmIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgc2V0VmFsdWUoLi4uYXJncyk7XG4gICAgfTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIC8vVmFsaWQgRE9NIGF0dHJzXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgLi4ucmVzdCxcblxuICAgICAgICAgICAgcmVmOiBlbCA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgICAgIHJlZiAmJiByZWYuY3VycmVudCAmJiAocmVmLmN1cnJlbnQgPSBlbCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9uQ2hhbmdlID09PSAnZnVuY3Rpb24nICYmIG9uQ2hhbmdlKGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25Gb2N1czogZSA9PiB7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmUuY3VycmVudCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0eXBlb2Ygb25Gb2N1cyA9PT0gJ2Z1bmN0aW9uJyAmJiBvbkZvY3VzKGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZS5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0eXBlb2Ygb25CbHVyID09PSAnZnVuY3Rpb24nICYmIG9uQmx1cihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvL0NvbXBvbmVudCBwcm9wc1xuICAgICAgICB7XG4gICAgICAgICAgICBvblZhbGlkYXRlLFxuICAgICAgICAgICAgc2V0VmFsdWU6IHNldFZhbHVlV3JhcHBlcixcbiAgICAgICAgICAgIGlzQWN0aXZlOiBpc0FjdGl2ZS5jdXJyZW50LFxuICAgICAgICAgICAgcmVmOiBpbnB1dFJlZlxuICAgICAgICB9XG4gICAgXTtcbn1cblxuLyoqXG4gKiB1c2VGb3JtXG4gKiBAcGFyYW0ge0FycmF5fSBmaWVsZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcm0oZmllbGRzQ29uZmlnKSB7XG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3IsIHNldEVycm9yc10gPSB1c2VFcnJvcnMoKTtcbiAgICBjb25zdCBpc01vdW50ID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBbaXNWYWxpZGF0aW5nLCBzZXRWYWxpZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZXMgPSBPYmplY3Qua2V5cyhmaWVsZHNDb25maWcpLnJlZHVjZSgoYWNjLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzQ29uZmlnW25hbWVdO1xuICAgICAgICBjb25zdCBbYXR0cnMsIHByb3BzXSA9IHVzZUZpZWxkKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAuLi5maWVsZFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgeyBpc0FjdGl2ZSB9ID0gcHJvcHM7XG5cbiAgICAgICAgYWNjLmZpZWxkc0F0dHJzW25hbWVdID0gYXR0cnM7XG4gICAgICAgIGFjYy5maWVsZHNQcm9wc1tuYW1lXSA9IHByb3BzO1xuICAgICAgICBhY2MudmFsdWVzW25hbWVdID0gYXR0cnMudmFsdWU7XG4gICAgICAgIGlzQWN0aXZlICYmIChhY2MuY3VycmVudE5hbWUgPSBuYW1lKTtcblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHtcbiAgICAgICAgY3VycmVudE5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgZmllbGRzQXR0cnM6IHt9LFxuICAgICAgICBmaWVsZHNQcm9wczoge30sXG4gICAgICAgIHZhbHVlczoge31cbiAgICB9KTtcbiAgICBjb25zdCB7XG4gICAgICAgIGZpZWxkc0F0dHJzLFxuICAgICAgICBmaWVsZHNQcm9wcyxcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICBjdXJyZW50TmFtZVxuICAgIH0gPSByZXM7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdmFsdWVzW2N1cnJlbnROYW1lXTtcbiAgICBjb25zdCBwcmV2Q3VycmVudE5hbWUgPSB1c2VQcmV2aW91cyhjdXJyZW50TmFtZSk7XG4gICAgLy9JZiBmaWVsZHMgaXMgYmx1cmVkLCB0aGFuIGN1cnJlbnQgbmFtZSA9PT0gbGFzdCBmb2N1c2VkIGZpZWxkO1xuICAgIGNvbnN0IGFjdHVhbEN1cnJlbnROYW1lID0gY3VycmVudE5hbWUgfHwgcHJldkN1cnJlbnROYW1lO1xuICAgIGNvbnN0IHNldFZhbHVlID0gKG5hbWUsIHZhbHVlKSA9PiBmaWVsZHNQcm9wc1tuYW1lXSAmJiBmaWVsZHNQcm9wc1tuYW1lXS5zZXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL1NraXAgdmFsaWRhdGlvbiBvbiBmaWVsZCBtb3VudFxuICAgICAgICBpZiAoIWlzTW91bnQuY3VycmVudCkge1xuICAgICAgICAgICAgaXNNb3VudC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUHJvcHNbYWN0dWFsQ3VycmVudE5hbWVdO1xuXG4gICAgICAgIGlmICghZmllbGQgfHwgIWZpZWxkLm9uVmFsaWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFZhbGlkYXRpbmcodHJ1ZSk7XG5cbiAgICAgICAgZmllbGRcbiAgICAgICAgICAgIC5vblZhbGlkYXRlKHZhbHVlcylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRWYWxpZGF0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihhY3R1YWxDdXJyZW50TmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyclN0ciA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsaWRhdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoYWN0dWFsQ3VycmVudE5hbWUsIGVyclN0cik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbY3VycmVudFZhbHVlXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIGZpZWxkczogZmllbGRzQXR0cnMsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgaXNWYWxpZGF0aW5nLFxuICAgICAgICBzZXRFcnJvcixcbiAgICAgICAgc2V0VmFsdWVcbiAgICAgICAgLyogaGFuZGxlU3VibWl0OiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IE9iamVjdC5rZXlzKGZpZWxkc1Byb3BzKS5tYXAoa2V5ID0+XG4gICAgICAgICAgICAgICAgZmllbGRzUHJvcHNba2V5XS5vblZhbGlkYXRlKHZhbHVlcylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHNldFZhbGlkYXRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHZhbGlkYXRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHNldFZhbGlkYXRpbmcoZmFsc2UpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWxpZGF0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JzKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH0gKi9cbiAgICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBM0JBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7Ozs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBREE7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBUEE7QUF3QkE7Ozs7Ozs7Ozs7O0FDbE1BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=