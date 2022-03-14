"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClearIcon=void 0;var _templateObject,_react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var ClearIcon=function(a){var b=a.showClear,c=a.setSearchString,d=a.searchString,e=a.setFocus,f=a.onClear;return b?0>=d.length?null:_react.default.createElement(StyledClearIcon,{className:"clear-icon",onClick:function(){c({target:{value:""}}),e(),f()}},_react.default.createElement("svg",{width:20,height:20,focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},_react.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))):null};exports.ClearIcon=ClearIcon;var StyledClearIcon=_styledComponents.default.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  margin: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  > svg {\n    fill: ",";\n  }\n"])),function(a){return a.theme.clearIconMargin},function(a){return a.theme.iconColor});ClearIcon.propTypes={searchString:_propTypes.default.string.isRequired,setSearchString:_propTypes.default.func.isRequired,setFocus:_propTypes.default.func,showClear:_propTypes.default.bool,onClear:_propTypes.default.func,onSearch:_propTypes.default.func};