"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_RESULTS = exports.DEFAULT_INPUT_DEBOUNCE = void 0;
exports.default = ReactSearchAutocomplete;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fuse = _interopRequireDefault(require("fuse.js"));

var _config = require("../config/config");

var _Results = _interopRequireDefault(require("./Results"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../utils/utils");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_INPUT_DEBOUNCE = 200;
exports.DEFAULT_INPUT_DEBOUNCE = DEFAULT_INPUT_DEBOUNCE;
var MAX_RESULTS = 10;
exports.MAX_RESULTS = MAX_RESULTS;

function ReactSearchAutocomplete(props) {
  var items = props.items,
      fuseOptions = props.fuseOptions,
      inputDebounce = props.inputDebounce,
      onSearch = props.onSearch,
      onHover = props.onHover,
      onSelect = props.onSelect,
      onFocus = props.onFocus,
      onClear = props.onClear,
      showIcon = props.showIcon,
      showClear = props.showClear,
      maxResults = props.maxResults,
      placeholder = props.placeholder,
      autoFocus = props.autoFocus,
      styling = props.styling,
      resultStringKeyName = props.resultStringKeyName,
      inputSearchString = props.inputSearchString,
      formatResult = props.formatResult;

  var theme = _objectSpread(_objectSpread({}, _config.defaultTheme), styling);

  var options = _objectSpread(_objectSpread({}, _config.defaultFuseOptions), fuseOptions);

  var fuse = new _fuse.default(items, options);
  fuse.setCollection(items);

  var _useState = (0, _react.useState)(inputSearchString),
      _useState2 = _slicedToArray(_useState, 2),
      searchString = _useState2[0],
      setSearchString = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  var callOnSearch = function callOnSearch(keyword) {
    var newResults = [];

    if ((keyword === null || keyword === void 0 ? void 0 : keyword.length) >= 0) {
      newResults = fuseResults(keyword);
      setResults(newResults);
      onSearch(keyword, newResults);
    } else {
      setResults(newResults);
    }
  };

  var handleOnSearch = _react.default.useCallback(inputDebounce > 0 ? (0, _utils.debounce)(function (keyword) {
    return callOnSearch(keyword);
  }, inputDebounce) : function (keyword) {
    return callOnSearch(keyword);
  }, [items]);

  (0, _react.useLayoutEffect)(function () {
    setSearchString(inputSearchString);
  }, [inputSearchString]);
  (0, _react.useEffect)(function () {
    (searchString === null || searchString === void 0 ? void 0 : searchString.length) > 0 && (results === null || results === void 0 ? void 0 : results.length) > 0 && setResults(fuseResults(searchString));
  }, [items]);

  var handleOnClick = function handleOnClick(result) {
    setResults([]);
    onSelect(result);
  };

  var fuseResults = function fuseResults(keyword) {
    return fuse.search(keyword, {
      limit: maxResults
    }).map(function (result) {
      return _objectSpread({}, result.item);
    }).slice(0, maxResults);
  };

  var handleSetSearchString = function handleSetSearchString(_ref) {
    var target = _ref.target;
    var keyword = target.value;
    setSearchString(keyword);
    handleOnSearch(keyword);
  };

  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(StyledReactSearchAutocomplete, null, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    searchString: searchString,
    setSearchString: handleSetSearchString,
    autoFocus: autoFocus,
    onBlur: function onBlur() {
      return setResults([]);
    },
    onFocus: onFocus,
    onClear: onClear,
    placeholder: placeholder,
    showIcon: showIcon,
    showClear: showClear
  }), /*#__PURE__*/_react.default.createElement(_Results.default, {
    results: results,
    onClick: handleOnClick,
    onHover: onHover,
    setSearchString: setSearchString,
    showIcon: showIcon,
    maxResults: maxResults,
    resultStringKeyName: resultStringKeyName,
    formatResult: formatResult
  })));
}

ReactSearchAutocomplete.defaultProps = {
  items: [],
  fuseOptions: _config.defaultFuseOptions,
  onSearch: function onSearch() {},
  onHover: function onHover() {},
  onSelect: function onSelect() {},
  onClear: function onClear() {},
  inputDebounce: DEFAULT_INPUT_DEBOUNCE,
  showIcon: true,
  showClear: true,
  maxResults: MAX_RESULTS,
  placeholder: '',
  autoFocus: false,
  onFocus: function onFocus() {},
  styling: {},
  resultStringKeyName: 'name',
  inputSearchString: '',
  formatResult: function formatResult(val) {
    return val;
  }
};
ReactSearchAutocomplete.propTypes = {
  items: _propTypes.default.array,
  fuseOptions: _propTypes.default.object,
  inputDebounce: _propTypes.default.number,
  onSearch: _propTypes.default.func,
  onHover: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onClear: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  showIcon: _propTypes.default.bool,
  showClear: _propTypes.default.bool,
  maxResults: _propTypes.default.number,
  placeholder: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  styling: _propTypes.default.object,
  resultStringKeyName: _propTypes.default.string,
  inputSearchString: _propTypes.default.string,
  formatResult: _propTypes.default.func
};

var StyledReactSearchAutocomplete = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: ", ";\n  border-radius: ", ";\n  border: ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  z-index: ", ";\n\n  &:hover {\n    box-shadow: ", ";\n  }\n\n  &:active {\n    box-shadow: ", ";\n  }\n\n  &:focus-within {\n    box-shadow: ", ";\n  }\n"])), function (props) {
  return props.theme.width;
}, function (props) {
  return props.theme.backgroundColor;
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.zIndex;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.theme.boxShadow;
});