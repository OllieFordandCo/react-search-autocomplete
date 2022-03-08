"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Results;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SearchIcon = require("./SearchIcon");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Results(props) {
  var results = props.results,
      onClick = props.onClick,
      setSearchString = props.setSearchString,
      showIcon = props.showIcon,
      maxResults = props.maxResults,
      resultStringKeyName = props.resultStringKeyName,
      onHover = props.onHover,
      formatResult = props.formatResult;

  var handleClick = function handleClick(result) {
    onClick(result);
    setSearchString(result[resultStringKeyName]);
  };

  return (results === null || results === void 0 ? void 0 : results.length) > 0 && /*#__PURE__*/_react.default.createElement(StyledResults, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "line"
  }), /*#__PURE__*/_react.default.createElement("ul", null, results.slice(0, maxResults).map(function (result) {
    return /*#__PURE__*/_react.default.createElement("li", {
      onMouseEnter: function onMouseEnter() {
        return onHover(result);
      },
      "data-test": "result",
      key: "rsa-result-".concat(result.id),
      onMouseDown: function onMouseDown() {
        return handleClick(result);
      },
      onClick: function onClick() {
        return handleClick(result);
      }
    }, /*#__PURE__*/_react.default.createElement(_SearchIcon.SearchIcon, {
      showIcon: showIcon
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "ellipsis",
      title: result[resultStringKeyName]
    }, formatResult(result[resultStringKeyName])));
  })));
}

Results.defaultProps = {
  results: [],
  setDisplayString: function setDisplayString() {},
  resultStringKeyName: 'name',
  formatResult: function formatResult(val) {
    return val;
  }
};
Results.propTypes = {
  results: _propTypes.default.array,
  onClick: _propTypes.default.func,
  setSearchString: _propTypes.default.func,
  showIcon: _propTypes.default.bool,
  maxResults: _propTypes.default.number,
  resultStringKeyName: _propTypes.default.string,
  formatResult: _propTypes.default.func
};

var StyledResults = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  position: absolute;\n  width: 100%;\n  background-color: white;\n  top: calc(100% - 5px);\n  left: -1px;\n  border: 1px solid #b8bbc3;\n  border-top: 0;\n  box-sizing: content-box;\n  border-radius: 0 0 4px 4px;\n\n  > div.line {\n    border-top-color: ", ";\n    border-top-style: solid;\n    border-top-width: 1px;\n    margin: 0 10px;\n  }\n\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 10px 0;\n    max-height: ", ";\n\n    > li {\n      display: flex;\n      align-items: center;\n      padding: 8px 0;\n\n      &:hover {\n        background-color: ", ";\n        cursor: default;\n      }\n\n      > div {\n        margin-left: 13px;\n      }\n    }\n  }\n\n  .ellipsis {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])), function (props) {
  return props.theme.lineColor;
}, function (props) {
  return props.theme.maxHeight;
}, function (props) {
  return props.theme.hoverBackgroundColor;
});