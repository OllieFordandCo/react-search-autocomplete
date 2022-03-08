"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchInput;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SearchIcon = require("./SearchIcon");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ClearIcon = require("./ClearIcon");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function SearchInput(_ref) {
  var searchString = _ref.searchString,
      setSearchString = _ref.setSearchString,
      autoFocus = _ref.autoFocus,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onClear = _ref.onClear,
      placeholder = _ref.placeholder,
      showIcon = _ref.showIcon,
      showClear = _ref.showClear;
  var ref = (0, _react.useRef)();
  var manualFocus = true;

  var setFocus = function setFocus() {
    manualFocus = false;
    ref.current.focus();
    manualFocus = true;
  };

  var handleOnFocus = function handleOnFocus() {
    manualFocus && onFocus();
  };

  return /*#__PURE__*/_react.default.createElement(StyledSearchInput, null, /*#__PURE__*/_react.default.createElement(_SearchIcon.SearchIcon, {
    showIcon: showIcon
  }), /*#__PURE__*/_react.default.createElement("input", {
    ref: ref,
    spellCheck: false,
    value: searchString,
    onInput: setSearchString,
    onBlur: onBlur,
    onFocus: handleOnFocus,
    placeholder: placeholder,
    autoFocus: autoFocus
  }), /*#__PURE__*/_react.default.createElement(_ClearIcon.ClearIcon, {
    showClear: showClear,
    setSearchString: setSearchString,
    searchString: searchString,
    onClear: onClear,
    setFocus: setFocus
  }));
}

SearchInput.defaultProps = {
  showIcon: true,
  showClear: true
};
SearchInput.propTypes = {
  searchString: _propTypes.default.string.isRequired,
  setSearchString: _propTypes.default.func.isRequired,
  autoFocus: _propTypes.default.bool,
  onBlur: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func,
  onClear: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  showClear: _propTypes.default.bool
};

var StyledSearchInput = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n\n  > input {\n    width: 100%;\n\n    padding: 0 0 0 13px;\n\n    border: none;\n    outline: none;\n\n    background-color: rgba(0, 0, 0, 0);\n    font-size: inherit;\n    font-family: inherit;\n\n    color: ", ";\n\n    ::placeholder {\n      /* Chrome, Firefox, Opera, Safari 10.1+ */\n      color: ", ";\n      opacity: 1; /* Firefox */\n    }\n\n    :-ms-input-placeholder {\n      /* Internet Explorer 10-11 */\n      color: ", ";\n    }\n\n    ::-ms-input-placeholder {\n      /* Microsoft Edge */\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.height;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.placeholderColor;
}, function (props) {
  return props.theme.placeholderColor;
}, function (props) {
  return props.theme.placeholderColor;
});