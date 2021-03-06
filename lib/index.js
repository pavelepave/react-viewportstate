"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Default breakpoint
 * @type {Number}
 */
var WINDOW_BREAKPOINT = 768;
/**
 * Pass viewport info to Child component
 * Update on resize evet
 * @param  {Component} Child 
 * @return {Component}
 */

var _default = function _default(Child) {
  /**
   * Returned component
   * @param {Number} breakpoint Mobile Breakpoint, default to 768
   */
  function Component(props) {
    var _useState = (0, _react.useState)({
      device: 'mobile',
      docWidth: 320,
      docHeight: 480
    }),
        _useState2 = _slicedToArray(_useState, 2),
        screenState = _useState2[0],
        setScreenState = _useState2[1];

    (0, _react.useEffect)(function () {
      /**
       * Update window info on resize
       */
      function onWindowResize() {
        var docWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var docHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var device = window.innerWidth > props.breakpoint ? 'desktop' : 'mobile';
        setScreenState({
          device: device,
          docWidth: docWidth,
          docHeight: docHeight
        });
      }

      onWindowResize();
      window.addEventListener('resize', onWindowResize);
      return function () {
        window.removeEventListener('resize', onWindowResize);
      };
    }, [screenState.device]);
    return /*#__PURE__*/_react["default"].createElement(Child, _extends({}, props, {
      screenState: screenState
    }));
  }

  Component.defaultProps = {
    breakpoint: WINDOW_BREAKPOINT
  };
  Component.propTypes = {
    breakpoint: _propTypes["default"].number
  };
  return Component;
};

exports["default"] = _default;