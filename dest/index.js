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

function useValues(fieldsConfig) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return Object.keys(fieldsConfig).reduce(function (acc, name) {
      var _fieldsConfig$name$de = fieldsConfig[name].defaultValue,
          defaultValue = _fieldsConfig$name$de === void 0 ? '' : _fieldsConfig$name$de;
      acc[name] = defaultValue;
      return acc;
    }, {});
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

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

function useUid() {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Date.now()),
      _useState6 = _slicedToArray(_useState5, 2),
      uid = _useState6[0],
      updateUid = _useState6[1];

  return [uid, function () {
    return updateUid(Date.now());
  }];
}

function useEventUid() {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      eventData = _useState8[0],
      set = _useState8[1];

  return [eventData, function (type) {
    set({
      type: type,
      uid: Date.now()
    });
  }];
}
/**
 * useForm
 * @param {Object} fieldsConfig
 */


function useForm(fieldsConfig) {
  var _useUid = useUid(),
      _useUid2 = _slicedToArray(_useUid, 2),
      fieldsUid = _useUid2[0],
      updateFieldsUid = _useUid2[1];

  var _useEventUid = useEventUid(),
      _useEventUid2 = _slicedToArray(_useEventUid, 2),
      eventData = _useEventUid2[0],
      updateEvent = _useEventUid2[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(fieldsConfig),
      _useState10 = _slicedToArray(_useState9, 2),
      userFields = _useState10[0],
      updateUserFields = _useState10[1];

  var _useValues = useValues(fieldsConfig),
      _useValues2 = _slicedToArray(_useValues, 2),
      values = _useValues2[0],
      setValue = _useValues2[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState12 = _slicedToArray(_useState11, 2),
      activeName = _useState12[0],
      setActiveName = _useState12[1];

  var _useErrors = useErrors(),
      _useErrors2 = _slicedToArray(_useErrors, 3),
      errors = _useErrors2[0],
      setError = _useErrors2[1],
      setErrors = _useErrors2[2];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isValidating = _useState14[0],
      setValidating = _useState14[1];

  var isMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var prevActiveName = usePrevious(activeName, true);

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

  var activeFieldAttrs = fieldsAttrs[activeName];

  var setValueCustom = function setValueCustom(name, value) {
    var _ref2 = fieldsProps[name] || {},
        ref = _ref2.ref;

    ref && ref.current && ref.current.focus();
    setValue(name, value);
    updateEvent('change');
  }; //Update value


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

    setValidating(true);
    onValidate(values).then(function () {
      setValidating(false);
      setError(name);
    }).catch(function (errStr) {
      setValidating(false);
      setError(name, errStr);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiBleHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbChvYmosIGNvbXBhcmVPYmopIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29tcGFyZU9iaik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn0gKi9cblxuLyogZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQodmFsdWVzLCBoYW5kbGVyLCBuYW1lKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvblJlcyA9IGhhbmRsZXIodmFsdWVzLCBuYW1lKTtcblxuICAgIGlmICghaXNQcm9taXNlKHZhbGlkYXRpb25SZXMpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvblJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXM7XG59ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJPYmplY3RCeUVtcHR5VmFsdWVzKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiAoYWNjW2tleV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG4iLCJpbXBvcnQge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VSZWYsXG4gICAgdXNlTWVtbyxcbiAgICBjcmVhdGVSZWZcbn0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICAgIGZpbHRlck9iamVjdEJ5RW1wdHlWYWx1ZXNcbn0gZnJvbSAnLi9oZWxwZXJzJztcblxuZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIHVzZUVycm9ycygpIHtcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IGN1c3RvbVNldEVycm9ycyA9IGN1cnJlbnRFcnJvcnMgPT4gc2V0RXJyb3JzKHByZXZFcnJvcnMgPT5cbiAgICAgICAgZmlsdGVyT2JqZWN0QnlFbXB0eVZhbHVlcyh7XG4gICAgICAgICAgICAuLi5wcmV2RXJyb3JzLFxuICAgICAgICAgICAgLi4uY3VycmVudEVycm9yc1xuICAgICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgY3VzdG9tU2V0RXJyb3IgPSAobmFtZSwgdmFsdWUpID0+IGN1c3RvbVNldEVycm9ycyh7IFtuYW1lXTogdmFsdWUgfSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGN1c3RvbVNldEVycm9yLFxuICAgICAgICBjdXN0b21TZXRFcnJvcnNcbiAgICBdO1xufVxuXG5mdW5jdGlvbiB1c2VWYWx1ZXMoZmllbGRzQ29uZmlnKSB7XG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkc0NvbmZpZykucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlID0gJycgfSA9IGZpZWxkc0NvbmZpZ1tuYW1lXTtcblxuICAgICAgICAgICAgYWNjW25hbWVdID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgfSk7XG4gICAgY29uc3Qgc2V0VmFsdWVzQ3VzdG9tID0gKG5ld1ZhbHVlcyA9IHt9KSA9PiBzZXRWYWx1ZXMocHJldlZhbHVlcyA9PiAoe1xuICAgICAgICAuLi5wcmV2VmFsdWVzLFxuICAgICAgICAuLi5uZXdWYWx1ZXNcbiAgICB9KSk7XG4gICAgY29uc3Qgc2V0VmFsdWUgPSAobmFtZSwgdmFsdWUpID0+IHNldFZhbHVlc0N1c3RvbSh7IFtuYW1lXTogdmFsdWUgfSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHNldFZhbHVlXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gdXNlVWlkKCkge1xuICAgIGNvbnN0IFt1aWQsIHVwZGF0ZVVpZF0gPSB1c2VTdGF0ZShEYXRlLm5vdygpKTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIHVpZCxcbiAgICAgICAgKCkgPT4gdXBkYXRlVWlkKERhdGUubm93KCkpXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gdXNlRXZlbnRVaWQoKSB7XG4gICAgY29uc3QgW2V2ZW50RGF0YSwgc2V0XSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIGV2ZW50RGF0YSxcbiAgICAgICAgdHlwZSA9PiB7XG4gICAgICAgICAgICBzZXQoe1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgdWlkOiBEYXRlLm5vdygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIF07XG59XG5cbi8qKlxuICogdXNlRm9ybVxuICogQHBhcmFtIHtPYmplY3R9IGZpZWxkc0NvbmZpZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9ybShmaWVsZHNDb25maWcpIHtcbiAgICBjb25zdCBbZmllbGRzVWlkLCB1cGRhdGVGaWVsZHNVaWRdID0gdXNlVWlkKCk7XG4gICAgY29uc3QgW2V2ZW50RGF0YSwgdXBkYXRlRXZlbnRdID0gdXNlRXZlbnRVaWQoKTtcbiAgICBjb25zdCBbdXNlckZpZWxkcywgdXBkYXRlVXNlckZpZWxkc10gPSB1c2VTdGF0ZShmaWVsZHNDb25maWcpO1xuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlXSA9IHVzZVZhbHVlcyhmaWVsZHNDb25maWcpO1xuICAgIGNvbnN0IFthY3RpdmVOYW1lLCBzZXRBY3RpdmVOYW1lXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3IsIHNldEVycm9yc10gPSB1c2VFcnJvcnMoKTtcbiAgICBjb25zdCBbaXNWYWxpZGF0aW5nLCBzZXRWYWxpZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBpc01vdW50ID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBwcmV2QWN0aXZlTmFtZSA9IHVzZVByZXZpb3VzKGFjdGl2ZU5hbWUsIHRydWUpO1xuICAgIGNvbnN0IHtcbiAgICAgICAgZmllbGRzQXR0cnMsXG4gICAgICAgIGZpZWxkc1Byb3BzXG4gICAgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModXNlckZpZWxkcykucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAvL0F0dHJzXG4gICAgICAgICAgICAgICAgcmVmLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIG9uRm9jdXMsXG4gICAgICAgICAgICAgICAgb25CbHVyLFxuICAgICAgICAgICAgICAgIC8vUHJvcHNcbiAgICAgICAgICAgICAgICBvblZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlT24gPSAnY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJyxcblxuICAgICAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgICAgIH0gPSB1c2VyRmllbGRzW25hbWVdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbbmFtZV07XG4gICAgICAgICAgICBjb25zdCBpbnB1dFJlZiA9IGNyZWF0ZVJlZigpO1xuXG4gICAgICAgICAgICBhY2MuZmllbGRzQXR0cnNbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAuLi5yZXN0LFxuXG4gICAgICAgICAgICAgICAgcmVmOiBlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgICAgICAgICAgcmVmICYmIHJlZi5jdXJyZW50ICYmIChyZWYuY3VycmVudCA9IGVsKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShuYW1lLCBlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXZlbnQoJ2NoYW5nZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJyAmJiBvbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgb25Gb2N1czogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZU5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXZlbnQoJ2ZvY3VzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG9uRm9jdXMgPT09ICdmdW5jdGlvbicgJiYgb25Gb2N1cyhlKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlTmFtZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUV2ZW50KCdibHVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG9uQmx1ciA9PT0gJ2Z1bmN0aW9uJyAmJiBvbkJsdXIoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYWNjLmZpZWxkc1Byb3BzW25hbWVdID0ge1xuICAgICAgICAgICAgICAgIG9uVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVPbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgcmVmOiBpbnB1dFJlZlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZmllbGRzQXR0cnM6IHt9LFxuICAgICAgICAgICAgZmllbGRzUHJvcHM6IHt9XG4gICAgICAgIH0pO1xuICAgIH0sIFtmaWVsZHNVaWRdKTtcbiAgICBjb25zdCBhY3RpdmVGaWVsZEF0dHJzID0gZmllbGRzQXR0cnNbYWN0aXZlTmFtZV07XG4gICAgY29uc3Qgc2V0VmFsdWVDdXN0b20gPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWYgfSA9IGZpZWxkc1Byb3BzW25hbWVdIHx8IHt9O1xuXG4gICAgICAgIHJlZlxuICAgICAgICAgICAgJiYgcmVmLmN1cnJlbnRcbiAgICAgICAgICAgICYmIHJlZi5jdXJyZW50LmZvY3VzKCk7XG5cbiAgICAgICAgc2V0VmFsdWUobmFtZSwgdmFsdWUpO1xuICAgICAgICB1cGRhdGVFdmVudCgnY2hhbmdlJyk7XG4gICAgfTtcblxuICAgIC8vVXBkYXRlIHZhbHVlXG4gICAgaWYgKGFjdGl2ZUZpZWxkQXR0cnMpIHtcbiAgICAgICAgYWN0aXZlRmllbGRBdHRycy52YWx1ZSA9IHZhbHVlc1thY3RpdmVOYW1lXTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL1NraXAgdmFsaWRhdGlvbiBvbiBmaWVsZCBtb3VudFxuICAgICAgICBpZiAoIWlzTW91bnQuY3VycmVudCkge1xuICAgICAgICAgICAgaXNNb3VudC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gZXZlbnREYXRhO1xuICAgICAgICAvL0lmIGZpZWxkcyBpcyBibHVyZWQsIHRoYW4gY3VycmVudCBuYW1lID09PSBsYXN0IGZvY3VzZWQgZmllbGQ7XG4gICAgICAgIGNvbnN0IGFjdHVhbEN1cnJlbnROYW1lID0gdHlwZSA9PT0gJ2JsdXInXG4gICAgICAgICAgICA/IHByZXZBY3RpdmVOYW1lXG4gICAgICAgICAgICA6IGFjdGl2ZU5hbWU7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG9uVmFsaWRhdGUsXG4gICAgICAgICAgICB2YWxpZGF0ZU9uXG4gICAgICAgIH0gPSBmaWVsZHNQcm9wc1thY3R1YWxDdXJyZW50TmFtZV0gfHwge307XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZGF0aW9uID0gKG5ldyBSZWdFeHAodHlwZSkpLnRlc3QodmFsaWRhdGVPbik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvblZhbGlkYXRlICE9PSAnZnVuY3Rpb24nIHx8ICFpc1ZhbGlkYXRpb24gfHwgaXNWYWxpZGF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRWYWxpZGF0aW5nKHRydWUpO1xuXG4gICAgICAgIG9uVmFsaWRhdGUodmFsdWVzKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZhbGlkYXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yKG5hbWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJTdHIgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZhbGlkYXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yKG5hbWUsIGVyclN0cik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbZXZlbnREYXRhLnVpZF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkc0F0dHJzLFxuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGlzVmFsaWRhdGluZyxcbiAgICAgICAgc2V0RXJyb3IsXG4gICAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZUN1c3RvbVxuICAgICAgICAvKiBoYW5kbGVTdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25zID0gT2JqZWN0LmtleXMoZmllbGRzUHJvcHMpLm1hcChrZXkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZHNQcm9wc1trZXldLm9uVmFsaWRhdGUodmFsdWVzKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc2V0VmFsaWRhdGluZyh0cnVlKTtcblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwodmFsaWRhdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0VmFsaWRhdGluZyhmYWxzZSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbGlkYXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcnMoZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfSAqL1xuICAgIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUVBOzs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQVZBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQWhDQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUE5RUE7QUFBQTtBQUNBO0FBOEVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBUEE7QUF3QkE7Ozs7Ozs7Ozs7O0FDcFBBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=