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

  return [values, setValuesCustom, setValue];
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
      _useValues2 = _slicedToArray(_useValues, 3),
      values = _useValues2[0],
      setValues = _useValues2[1],
      setValue = _useValues2[2];

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
          ref = _userFields$name.ref,
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
      acc.fieldsAttrs[name] = _objectSpread({
        name: name,
        value: value
      }, rest, {
        /* ref: el => {
            inputRef.current = el;
            ref && ref.current && (ref.current = el);
        }, */
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
        defaultValue: defaultValue
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
  console.info(prevActiveName, activeName);

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

    var _ref = fieldsProps[actualCurrentName] || {},
        onValidate = _ref.onValidate,
        validateOn = _ref.validateOn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiBleHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbChvYmosIGNvbXBhcmVPYmopIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29tcGFyZU9iaik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn0gKi9cblxuLyogZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQodmFsdWVzLCBoYW5kbGVyLCBuYW1lKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvblJlcyA9IGhhbmRsZXIodmFsdWVzLCBuYW1lKTtcblxuICAgIGlmICghaXNQcm9taXNlKHZhbGlkYXRpb25SZXMpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvblJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXM7XG59ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJPYmplY3RCeUVtcHR5VmFsdWVzKG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiAoYWNjW2tleV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG4iLCJpbXBvcnQge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VSZWYsXG4gICAgdXNlTWVtb1xufSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgZmlsdGVyT2JqZWN0QnlFbXB0eVZhbHVlc1xufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5mdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZWYuY3VycmVudDtcbn1cblxuZnVuY3Rpb24gdXNlRXJyb3JzKCkge1xuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgY3VzdG9tU2V0RXJyb3JzID0gY3VycmVudEVycm9ycyA9PiBzZXRFcnJvcnMocHJldkVycm9ycyA9PlxuICAgICAgICBmaWx0ZXJPYmplY3RCeUVtcHR5VmFsdWVzKHtcbiAgICAgICAgICAgIC4uLnByZXZFcnJvcnMsXG4gICAgICAgICAgICAuLi5jdXJyZW50RXJyb3JzXG4gICAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBjdXN0b21TZXRFcnJvciA9IChuYW1lLCB2YWx1ZSkgPT4gY3VzdG9tU2V0RXJyb3JzKHsgW25hbWVdOiB2YWx1ZSB9KTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgY3VzdG9tU2V0RXJyb3IsXG4gICAgICAgIGN1c3RvbVNldEVycm9yc1xuICAgIF07XG59XG5cbmZ1bmN0aW9uIHVzZVZhbHVlcyhmaWVsZHNDb25maWcpIHtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmllbGRzQ29uZmlnKS5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBkZWZhdWx0VmFsdWUgPSAnJyB9ID0gZmllbGRzQ29uZmlnW25hbWVdO1xuXG4gICAgICAgICAgICBhY2NbbmFtZV0gPSBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9KTtcbiAgICBjb25zdCBzZXRWYWx1ZXNDdXN0b20gPSAobmV3VmFsdWVzID0ge30pID0+IHNldFZhbHVlcyhwcmV2VmFsdWVzID0+ICh7XG4gICAgICAgIC4uLnByZXZWYWx1ZXMsXG4gICAgICAgIC4uLm5ld1ZhbHVlc1xuICAgIH0pKTtcbiAgICBjb25zdCBzZXRWYWx1ZSA9IChuYW1lLCB2YWx1ZSkgPT4gc2V0VmFsdWVzQ3VzdG9tKHsgW25hbWVdOiB2YWx1ZSB9KTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgc2V0VmFsdWVzQ3VzdG9tLFxuICAgICAgICBzZXRWYWx1ZVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIHVzZVVpZCgpIHtcbiAgICBjb25zdCBbdWlkLCB1cGRhdGVVaWRdID0gdXNlU3RhdGUoRGF0ZS5ub3coKSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICB1aWQsXG4gICAgICAgICgpID0+IHVwZGF0ZVVpZChEYXRlLm5vdygpKVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIHVzZUV2ZW50VWlkKCkge1xuICAgIGNvbnN0IFtldmVudERhdGEsIHNldF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBldmVudERhdGEsXG4gICAgICAgIHR5cGUgPT4ge1xuICAgICAgICAgICAgc2V0KHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIHVpZDogRGF0ZS5ub3coKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBdO1xufVxuXG4vKipcbiAqIHVzZUZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZHNDb25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcm0oZmllbGRzQ29uZmlnKSB7XG4gICAgY29uc3QgW2ZpZWxkc1VpZCwgdXBkYXRlRmllbGRzVWlkXSA9IHVzZVVpZCgpO1xuICAgIGNvbnN0IFtldmVudERhdGEsIHVwZGF0ZUV2ZW50XSA9IHVzZUV2ZW50VWlkKCk7XG4gICAgY29uc3QgW3VzZXJGaWVsZHMsIHVwZGF0ZVVzZXJGaWVsZHNdID0gdXNlU3RhdGUoZmllbGRzQ29uZmlnKTtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXMsIHNldFZhbHVlXSA9IHVzZVZhbHVlcyhmaWVsZHNDb25maWcpO1xuICAgIGNvbnN0IFthY3RpdmVOYW1lLCBzZXRBY3RpdmVOYW1lXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3IsIHNldEVycm9yc10gPSB1c2VFcnJvcnMoKTtcbiAgICBjb25zdCBbaXNWYWxpZGF0aW5nLCBzZXRWYWxpZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBpc01vdW50ID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBwcmV2QWN0aXZlTmFtZSA9IHVzZVByZXZpb3VzKGFjdGl2ZU5hbWUsIHRydWUpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBmaWVsZHNBdHRycyxcbiAgICAgICAgZmllbGRzUHJvcHNcbiAgICB9ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh1c2VyRmllbGRzKS5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIC8vQXR0cnNcbiAgICAgICAgICAgICAgICByZWYsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgICAgICAgICBvbkJsdXIsXG4gICAgICAgICAgICAgICAgLy9Qcm9wc1xuICAgICAgICAgICAgICAgIG9uVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVPbiA9ICdjaGFuZ2UnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnLFxuXG4gICAgICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICAgICAgfSA9IHVzZXJGaWVsZHNbbmFtZV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tuYW1lXTtcblxuICAgICAgICAgICAgYWNjLmZpZWxkc0F0dHJzW25hbWVdID0ge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgLi4ucmVzdCxcblxuICAgICAgICAgICAgICAgIC8qIHJlZjogZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICAgICAgICAgIHJlZiAmJiByZWYuY3VycmVudCAmJiAocmVmLmN1cnJlbnQgPSBlbCk7XG4gICAgICAgICAgICAgICAgfSwgKi9cblxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUobmFtZSwgZS50YXJnZXQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUV2ZW50KCdjaGFuZ2UnKTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygb25DaGFuZ2UgPT09ICdmdW5jdGlvbicgJiYgb25DaGFuZ2UoZSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG9uRm9jdXM6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUV2ZW50KCdmb2N1cycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvbkZvY3VzID09PSAnZnVuY3Rpb24nICYmIG9uRm9jdXMoZSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG9uQmx1cjogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZU5hbWUoKTtcblxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVFdmVudCgnYmx1cicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvbkJsdXIgPT09ICdmdW5jdGlvbicgJiYgb25CbHVyKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFjYy5maWVsZHNQcm9wc1tuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBvblZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlT24sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBmaWVsZHNBdHRyczoge30sXG4gICAgICAgICAgICBmaWVsZHNQcm9wczoge31cbiAgICAgICAgfSk7XG4gICAgfSwgW2ZpZWxkc1VpZF0pO1xuICAgIGNvbnN0IGFjdGl2ZUZpZWxkQXR0cnMgPSBmaWVsZHNBdHRyc1thY3RpdmVOYW1lXTtcblxuICAgIGNvbnNvbGUuaW5mbyhwcmV2QWN0aXZlTmFtZSwgYWN0aXZlTmFtZSk7XG5cbiAgICBpZiAoYWN0aXZlRmllbGRBdHRycykge1xuICAgICAgICBhY3RpdmVGaWVsZEF0dHJzLnZhbHVlID0gdmFsdWVzW2FjdGl2ZU5hbWVdO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vU2tpcCB2YWxpZGF0aW9uIG9uIGZpZWxkIG1vdW50XG4gICAgICAgIGlmICghaXNNb3VudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBpc01vdW50LmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBldmVudERhdGE7XG4gICAgICAgIC8vSWYgZmllbGRzIGlzIGJsdXJlZCwgdGhhbiBjdXJyZW50IG5hbWUgPT09IGxhc3QgZm9jdXNlZCBmaWVsZDtcbiAgICAgICAgY29uc3QgYWN0dWFsQ3VycmVudE5hbWUgPSB0eXBlID09PSAnYmx1cidcbiAgICAgICAgICAgID8gcHJldkFjdGl2ZU5hbWVcbiAgICAgICAgICAgIDogYWN0aXZlTmFtZTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgb25WYWxpZGF0ZSxcbiAgICAgICAgICAgIHZhbGlkYXRlT25cbiAgICAgICAgfSA9IGZpZWxkc1Byb3BzW2FjdHVhbEN1cnJlbnROYW1lXSB8fCB7fTtcblxuICAgICAgICBjb25zdCBpc1ZhbGlkYXRpb24gPSAobmV3IFJlZ0V4cCh0eXBlKSkudGVzdCh2YWxpZGF0ZU9uKTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uVmFsaWRhdGUgIT09ICdmdW5jdGlvbicgfHwgIWlzVmFsaWRhdGlvbiB8fCBpc1ZhbGlkYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFZhbGlkYXRpbmcodHJ1ZSk7XG5cbiAgICAgICAgb25WYWxpZGF0ZSh2YWx1ZXMpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsaWRhdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IobmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyclN0ciA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsaWRhdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IobmFtZSwgZXJyU3RyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sIFtldmVudERhdGEudWlkXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIGZpZWxkczogZmllbGRzQXR0cnMsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgaXNWYWxpZGF0aW5nLFxuICAgICAgICBzZXRFcnJvcixcbiAgICAgICAgc2V0VmFsdWVcbiAgICAgICAgLyogaGFuZGxlU3VibWl0OiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IE9iamVjdC5rZXlzKGZpZWxkc1Byb3BzKS5tYXAoa2V5ID0+XG4gICAgICAgICAgICAgICAgZmllbGRzUHJvcHNba2V5XS5vblZhbGlkYXRlKHZhbHVlcylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHNldFZhbGlkYXRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHZhbGlkYXRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHNldFZhbGlkYXRpbmcoZmFsc2UpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWxpZGF0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JzKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH0gKi9cbiAg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