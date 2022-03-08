"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ClearIcon = function ClearIcon(_ref) {
  var showClear = _ref.showClear,
      setSearchString = _ref.setSearchString,
      searchString = _ref.searchString,
      setFocus = _ref.setFocus,
      onClear = _ref.onClear;

  var handleClearSearchString = function handleClearSearchString() {
    setSearchString({
      target: {
        value: ''
      }
    });
    setFocus();
    onClear();
  };

  if (!showClear) {
    return null;
  }

  if (searchString.length <= 0) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(StyledClearIcon, {
    className: "clear-icon",
    onClick: handleClearSearchString
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: 20,
    height: 20,
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  })));
};

exports.ClearIcon = ClearIcon;

var StyledClearIcon = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  > svg {\n    fill: ", ";\n  }\n"])), function (props) {
  return props.theme.clearIconMargin;
}, function (props) {
  return props.theme.iconColor;
});

ClearIcon.propTypes = {
  searchString: _propTypes.default.string.isRequired,
  setSearchString: _propTypes.default.func.isRequired,
  setFocus: _propTypes.default.func,
  showClear: _propTypes.default.bool,
  onClear: _propTypes.default.func,
  onSearch: _propTypes.default.func
};