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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Form.js":
/*!*****************!*\
  !*** ./Form.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Form(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, typeof children === 'function' ? children(props) : children);
}
Form.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: isPromise, isEqual, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isPromise(obj) {
  return !!obj && (_typeof(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function isEqual(obj, compareObj) {
  return JSON.stringify(obj) === JSON.stringify(compareObj);
}
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./Form.js");
/* harmony import */ var _withForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withForm */ "./withForm.js");
/* empty/unused harmony star reexport */

/* harmony default export */ __webpack_exports__["default"] = (Object(_withForm__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./withForm.js":
/*!*********************!*\
  !*** ./withForm.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function withForm(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FormEnhancer, _Component);

    function FormEnhancer(props) {
      var _this;

      _classCallCheck(this, FormEnhancer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FormEnhancer).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getValues", function () {
        return _this.state.values;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateField", function (name, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var onValidation = _this.props.onValidation;
        var _options$silent = options.silent,
            silent = _options$silent === void 0 ? false : _options$silent;

        if (!silent) {
          _this.setState({
            isValidating: true
          });
        }

        return new Promise(function (res, rej) {
          var validationRes = onValidation(name, value);

          if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isPromise"])(validationRes)) {
            throw new Error('onValidation should returns promise');
          }

          validationRes.then(function () {
            _this.setState(function (state) {
              var errorsClone = _objectSpread({}, state.errors);

              delete errorsClone[name];
              return _objectSpread({
                errors: errorsClone
              }, !silent ? {
                isValidating: false
              } : {});
            });

            res(_defineProperty({}, name, value));
          }).catch(function (errors) {
            _this.setState(function (state) {
              return _objectSpread({
                errors: _objectSpread({}, state.errors, errors)
              }, !silent ? {
                isValidating: false
              } : {});
            });

            rej(errors);
          });
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateFields", function (fields) {
        var disableValidating = function disableValidating() {
          return _this.setState({
            isValidating: false
          });
        };

        var promises = fields.map(function (item) {
          return _this.validateField(item.name, item.value, {
            silent: true
          });
        });

        _this.setState({
          isValidating: true
        });

        return new Promise(function (res, rej) {
          Promise.all(promises).then(function (result) {
            disableValidating();
            res(result);
          }).catch(function (err) {
            disableValidating();
            rej(err);
          });
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValue", function (name, value) {
        if (!name) {
          return;
        }

        return new Promise(function (res) {
          _this.setState(function (state) {
            return {
              values: _objectSpread({}, state.values, _defineProperty({}, name, value))
            };
          }, function () {
            return res(_this.getValues());
          });
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
        var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
            setValue = _assertThisInitialize.setValue,
            validateField = _assertThisInitialize.validateField;

        var validateOnChange = _this.props.validateOnChange;
        var target = e.target;
        var name = target.name,
            value = target.value,
            type = target.type,
            checked = target.checked;
        var actualizedValue = type === 'checkbox' ? checked : value;

        if (!name) {
          throw new Error('name required');
        }

        setValue(name, actualizedValue).then(function () {
          return validateOnChange && validateField(name, actualizedValue);
        }).catch(function () {});
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
        e && e.preventDefault();

        var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
            getValues = _assertThisInitialize2.getValues,
            validateFields = _assertThisInitialize2.validateFields;

        var onSubmit = _this.props.onSubmit;
        var _this$state = _this.state,
            isErrors = _this$state.isErrors,
            isValidating = _this$state.isValidating;
        var formData = new FormData(e.target);
        var fields = [];

        if (isErrors || isValidating) {
          return false;
        }

        formData.forEach(function (value, name) {
          return fields.push({
            name: name,
            value: value
          });
        });
        validateFields(fields).then(function () {
          return onSubmit(getValues());
        }).catch(function () {});
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "collectProps", function () {
        return _objectSpread({
          values: _this.getValues(),
          setValue: _this.setValue,
          handleChange: _this.handleChange,
          handleSubmit: _this.handleSubmit
        }, _this.state);
      });

      _this.state = {
        values: _this.props.defaultValues || {},
        errors: {},
        isValidating: false,
        isErrors: false
      };
      return _this;
    }

    _createClass(FormEnhancer, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var errors = this.state.errors;

        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(errors, prevState.errors)) {
          this.setState({
            isErrors: !Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(errors)
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.collectProps(), children);
      }
    }]);

    return FormEnhancer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _defineProperty(_class, "propTypes", {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    defaultValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    validateOnChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    validateOnBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    validateOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onValidation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }), _defineProperty(_class, "defaultProps", {
    validateOnChange: true,
    validateOnBlur: true,
    validateOnFocus: true,
    onSubmit: function onSubmit() {},

    /**
     * On validation, invoke on every validation step (onChange, onSubmit, onBlur)
     * @param {String} name
     * @param {String} value
     * @returns {Object} new Promise
     */
    onValidation: function onValidation(name, value) {
      return new Promise(function (res) {
        return res(true);
      });
    }
  }), _temp;
}

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });