import n,{css as e,createGlobalStyle as t,ThemeProvider as r}from"styled-components";import o from"react";var i={n01:"#FFFFFF",g25:"#FCFCFD",g50:"#F9FAFB",g100:"#F2F4F7",g200:"#E4E7EC",g300:"#D0D5DD",g400:"#98A2B3",g500:"#667085",g600:"#475467",g700:"#344054",g800:"#1D2939",g900:"#101828",p25:"#F0F2F7",p50:"#DFE7F8",p100:"#F4EBFF",p200:"#D3DFFE",p300:"#A7C0FE",p400:"#7BA1FD",p500:"#2362FB",p600:"#1F5AEA",p700:"#1C54DB",p800:"#1A4ABE",p900:"#0D2C77",e300:"#FDA29B",e600:"#D92D20",e700:"#B42318",w300:"#FEC84B",w600:"#DC6803",w700:"#B54708",s300:"#6CE9A6",s600:"#039855",s700:"#027A48"},a=function(){return a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},a.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function c(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}function l(n){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(n)}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function b(n){return function(n){if(Array.isArray(n))return m(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return m(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var y,h,g,v,w,j,O=function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=n.reduce((function(n,e,r){return n.push(e),t[r]&&n.push(t[r]),n}),[]);return o},k=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},x={xs:0,sm:48,md:64,lg:76,phone:0,tablet:48,tabletLandscape:64,desktop:76},A=function(n){var e;return f(f({},x),(null==n||null===(e=n.theme)||void 0===e?void 0:e.breakpoints)||{})},F=function(n,e,t){var r=A(e);return r[n]?"".concat(r[n]-(t&&t.isMax?1/16:0),"em"):"number"==typeof n?"".concat(n-(t&&t.isMax?1/16:0),"em"):n||"100%"},P=function(n,e){return function(t){return O(y||(y=d(["\n    @media only screen and (min-width: ",") {\n      ",";\n    }\n  "])),F(n,t),e)}},z=function(n){return function(e){return O(h||(h=d(["\n    @media only screen and (max-width: ",") {\n      ",";\n    }\n  "])),F("tablet",e,{isMax:!0}),n)}},D=function n(e,t){var r="string"==typeof e&&e.split("."),o=r&&r.length>1;return r&&t?o?n(r.slice(1).join("."),t[r[0]]):t[e]:e},q=function(n){return n?Object.keys(n).reduce((function(e,t){return f(f({},e),{},u({},(r=t)?String(r).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"").replace(/[^A-Za-z0-9]+/g,"$").replace(/([a-z])([A-Z])/g,(function(n,e,t){return"".concat(e,"$").concat(t)})).toLowerCase().replace(/(\$)(\w)/g,(function(n,e,t){return t.toUpperCase()})):"",n[t]));var r}),{}):null},E=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=function(e,r,o){return r&&"object"===l(r)?f(f({},e),n(r,"".concat(t).concat(o,"."))):f(f({},e),u({},"".concat(t).concat(o),r))};return Array.isArray(e)?e.reduce(r,{}):Object.keys(e).reduce((function(n,t){return r(n,e[t],t)}),{})},C=function(n){var e=E(n,"-");return q(e)},S=function(n,e,t){return"\n  ".concat(n,": ").concat(e).concat("number"==typeof e&&t?t:"",";\n")},B=function(n){var e,t,r=null==n||null===(e=n.theme)||void 0===e||null===(t=e.generator)||void 0===t?void 0:t.namedProps;if(null!=r&&r.length)return r.map((function(e){return function(n,e){var t=e.list,r=e.cssProp,o=e.prefix,i=void 0===o?"":o,a=e.units,c=n.theme,u=p(n,["theme"]),s=D(t,c);if(!s)return null;var f=Object.keys(u),d=Object.keys(s),b=d.reduce((function(n,e){return n||"object"===l(s[e])}),!1),m=d.filter((function(n){return f.find((function(e){return"".concat(e)==="".concat(i).concat(i?k(n):n)}))}));if(m.length||b){var y=null;if(m.length||(y=C(s),(m=Object.keys(y).filter((function(n){return f.find((function(e){return"".concat(e)==="".concat(i).concat(i?k(n):n)}))}))).length)){var h=m.length-1,g=u["".concat(i).concat(i?k(m[h]):m[h])],v=y?y[m]:s[m[h]],w=A({theme:c});return"string"==typeof g&&Object.keys(w).find((function(n){return n===g}))?P(g,S(r,v,a)):S(r,v,a)}}}(n,e)}))},L=function(n){return"null"===n||"undefined"===n||"false"===n?null:n},M=function n(e){var t=e.list,r=e.key,o=e.units;if(!r)return null;if("number"==typeof r)return"".concat(r).concat(o&&"number"==typeof+r?o:"");var i=r.split("."),a=i.length>1,c=t&&t[i]?t[i[0]]:void 0;return void 0===c||a?a?n({list:t[i[0]],key:i.slice(1).join("."),units:o}):r:"".concat(c).concat(o&&"number"==typeof+c?o:"")},$=function(n,e){var t=e.name,r=e.list,o=e.helperFn,i=e.cssProp,a=e.units;if(t&&n&&void 0!==n[t]){var c=D(r,n.theme),u=function(n){var e,t=!!o&&"function"==typeof o;if(!(e=n,null!=e&&!1!==e&&null!==L(e)||t))return null;var r="string"==typeof n&&n.split(" ").length>1?n.split(" ").map((function(n){return L(n)})):n;return t?Array.isArray(r)?o.apply(void 0,b(r.map((function(n){return!Number.isNaN(+n)&&n>0&&"boolean"!=typeof n?"".concat(n).concat(a):"boolean"==typeof n?void 0:n})))):o(Number.isNaN(+r)||"boolean"==typeof r?"boolean"==typeof r?void 0:r:"".concat(+r).concat(a)):"number"!=typeof r&&c?S(i,M({key:r,list:c,units:a})):S(i,r,a)};if("string"==typeof n[t]||"number"==typeof n[t]||"boolean"==typeof n[t])return u(n[t]);if("object"!==l(n[t]))return console.log("wrong format in prop ".concat(t,": "),n[t]);var s=Object.keys(n[t]),f=A(n),p=Object.keys(f),d=s.reduce((function(e,r){var o=p.find((function(n){return r===n}));return o?[].concat(b(e),[{breakpoint:f[o],prop:n[t][r]}]):e}),[]);return d.length?d.sort((function(n,e){return n.breakpoint-e.breakpoint})).reduce((function(n,e){return[].concat(b(n),[P(e.breakpoint,u(e.prop))])}),[]):null}},N=["top","right","bottom","left"],T=function(n){var e,t,r=null==n||null===(e=n.theme)||void 0===e||null===(t=e.generator)||void 0===t?void 0:t.spaceProps;if(null!=r&&r.length)return r.map((function(e){return function(n,e){var t=e.prop,r=e.list,o=e.units,i=n.theme,a=p(n,["theme"]);if(t){var c=t.charAt(0),l=D(r,i);return N.map((function(n){var e={cssProp:"".concat(t,"-").concat(n),list:l,name:"".concat(c).concat(n.charAt(0)),units:o||"rem"};return $(f({theme:i},a),e)}))}}(n,e)}))},I=function(n){return function(e){return O(v||(v=d(["\n  ",";\n"])),function(n,e){return e[Object.keys(e).reduce((function(e,t){return Object.keys(n).find((function(e){return n[t]&&e===t}))||e}),[])]||(null==e?void 0:e.default)||null}(e,n))}},Z=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},H=e(w||(w=Z(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));t(j||(j=Z(["",""],["",""])),H);var U,R=function(n){if(n)return["start","end"].includes(n)?"flex-".concat(n):["around","between","evenly"].includes(n)?"space-".concat(n):n};var G=["Top","Right","Bottom","Left"];function J(n,e){if(!n)return e.toLowerCase();var t=n.split("-");if(t.length>1)return t.splice(1,0,e),t.reduce((function(n,e){return""+n+((t=e).charAt(0).toUpperCase()+t.slice(1));var t}));var r=n.replace(/([a-z])([A-Z])/g,"$1"+e+"$2");return n===r?""+n+e:r}function K(n,e){for(var t={},r=0;r<e.length;r+=1)(e[r]||0===e[r])&&(t[J(n,G[r])]=e[r]);return t}function Q(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=t[0],i=t[1],a=void 0===i?o:i,c=t[2],l=void 0===c?o:c,u=t[3],s=void 0===u?a:u,f=[o,a,l,s];return K(n,f)}var V,W,X,Y,_,nn,en,tn,rn,on,an,cn={sans:'"Inter", sans-serif'},ln={regular:400,medium:500,semibold:600,bold:700},un={small:{sm:[30,38],xs:[24,32]}},sn={extralarge:[20,30],large:[18,28],base:[16,24],small:[14,20],extrasmall:[12,18]},fn={generator:{namedProps:[{prefix:"bg",list:i,cssProp:"background-color"},{list:i,cssProp:"color"},{list:{center:"center",left:"left",right:"right"},cssProp:"text-align"},{list:{flex:"flex",inlineFlex:"inline-flex"},cssProp:"display"},{list:{column:"column",row:"row"},cssProp:"flex-direction"}],spaceProps:[{prop:"padding",units:"rem"},{prop:"margin",units:"rem"}],variableProps:[{name:"alpha",cssProp:"opacity"},{name:"tAlign",cssProp:"text-align"},{name:"radius",cssProp:"border-radius",units:"rem"},{name:"fDirection",cssProp:"flex-direction"},{name:"show",cssProp:"display"},{name:"fLayout",helperFn:function(n,t){return void 0===n&&(n="start"),void 0===t&&(t="start"),e(U||(U=c(["\n        align-items: ",";\n        justify-content: ",";\n    "],["\n        align-items: ",";\n        justify-content: ",";\n    "])),R(n),R(t))}},{name:"margin",helperFn:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Q.apply(void 0,["margin"].concat(e))},units:"rem"},{name:"padding",helperFn:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Q.apply(void 0,["padding"].concat(e))},units:"rem"}]}},pn=t(W||(W=c(["\n  ",";\n\n  html {\n    overflow-x: hidden;\n  }\n\n  html,\n  body {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body {\n    box-sizing: border-box;\n    color: ",";\n    font-family: ",";\n    font-size: ","rem;\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n\n    -webkit-overflow-scrolling: touch;\n\n    * {\n      box-sizing: border-box;\n    }\n\n    &.menu-open {\n      ",";\n    }\n\n    &.loading,\n    &.modal-open {\n      overflow-y: hidden;\n    }\n  }\n\n  a {\n    outline: 0;\n    text-decoration: none;\n\n    &:active,\n    &:focus,\n    &:hover {\n      outline: 0;\n    }\n\n    &:not(:disabled) {\n      cursor: pointer;\n    }\n  }\n\n  b, strong {\n    font-weight: ",";\n  }\n\n  em {\n    font-style: italic;\n  }\n\n  input {\n    border: 0;\n    color: ",";\n    font-family: ",";\n    font-size: 14px;\n    outline: 0;\n\n    ::placeholder {\n      color: ",";\n    }\n  }\n"],["\n  ",";\n\n  html {\n    overflow-x: hidden;\n  }\n\n  html,\n  body {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body {\n    box-sizing: border-box;\n    color: ",";\n    font-family: ",";\n    font-size: ","rem;\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n\n    -webkit-overflow-scrolling: touch;\n\n    * {\n      box-sizing: border-box;\n    }\n\n    &.menu-open {\n      ",";\n    }\n\n    &.loading,\n    &.modal-open {\n      overflow-y: hidden;\n    }\n  }\n\n  a {\n    outline: 0;\n    text-decoration: none;\n\n    &:active,\n    &:focus,\n    &:hover {\n      outline: 0;\n    }\n\n    &:not(:disabled) {\n      cursor: pointer;\n    }\n  }\n\n  b, strong {\n    font-weight: ",";\n  }\n\n  em {\n    font-style: italic;\n  }\n\n  input {\n    border: 0;\n    color: ",";\n    font-family: ",";\n    font-size: 14px;\n    outline: 0;\n\n    ::placeholder {\n      color: ",";\n    }\n  }\n"])),H,i.g900,cn.sans,sn.base[0]/16,z(e(V||(V=c(["\n          overflow-y: hidden;\n      "],["\n          overflow-y: hidden;\n      "])))),ln.bold,i.g700,cn.sans,i.g500),dn=function(n){var e=n.children;return o.createElement(r,{theme:fn},o.createElement(pn,null),e)},bn=function(n){return e(X||(X=c(["\n    font-size: ","rem;\n    letter-spacing: ",";\n    line-height: ",";\n"],["\n    font-size: ","rem;\n    letter-spacing: ",";\n    line-height: ",";\n"])),("number"==typeof n?n:n[0])/16,"number"==typeof n?void 0:void 0!==n[2]?"".concat(n[2]/16,"rem"):void 0,"number"==typeof n?void 0:void 0!==n[1]?"".concat(n[1]/16,"rem"):void 0)},mn=function(n){return"number"==typeof n||Array.isArray(n)?bn(n):function(n){return Object.keys(n).map((function(e){return"xs"===e?bn(n[e]):P(e,bn(n[e]))}))}(n)},yn=function(n,t){return void 0===t&&(t="base"),Object.keys(n).reduce((function(r,o){var i;return a(a({},r),((i={})[o===t?"default":o]=e(Y||(Y=c(["\n                ","\n            "],["\n                ","\n            "])),mn(n[o])),i))}),{})},hn={ellipsis:e(tn||(tn=c(["\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    "],["\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    "])))},gn=e(rn||(rn=c(["\n    font-family: ",";\n\n    ",";\n    ",";\n\n    ",";\n"],["\n    font-family: ",";\n\n    ",";\n    ",";\n\n    ",";\n"])),cn.sans,I(hn),I((nn=ln,void 0===en&&(en="regular"),Object.entries(nn).reduce((function(n,t){var r,o=t[0],i=t[1];return a(a({},n),((r={})[o===en?"default":o]=e(_||(_=c(["\n                font-weight: ",";\n            "],["\n                font-weight: ",";\n            "])),i),r))}),{}))),(function(n){delete n.children;var e=n.theme,t=p(n,["theme"]);if(Object.keys(t).length&&"object"===l(t)){var r=Object.keys(t).reduce((function(n,e){return"boolean"==typeof t[e]||void 0===t[e]?f(f({},n),{},u({},e,t[e])):n}),{}),o=!Object.keys(r).length,i=Object.keys(t).reduce((function(n,e){return"object"===l(t[e])||"string"==typeof t[e]||"number"==typeof t[e]||"boolean"==typeof t[e]||Array.isArray(t[e])?f(f({},n),{},u({},e,t[e])):n}),{}),a=!Object.keys(i).length;if(!a||!o)return O(g||(g=d(["\n    ",";\n    ",";\n    ",";\n  "])),o?"":B(f({theme:e},r)),a?"":function(n){var e,t,r=null==n||null===(e=n.theme)||void 0===e||null===(t=e.generator)||void 0===t?void 0:t.variableProps;if(null!=r&&r.length)return r.map((function(e){return $(n,e)}))}(f({theme:e},i)),a?"":T(f({theme:e},i)))}})),vn=n.h1(on||(on=c(["\n    ",";\n\n    ",";\n"],["\n    ",";\n\n    ",";\n"])),gn,I(yn(un,"small"))),wn=n.p(an||(an=c(["\n    ",";\n\n    ",";\n"],["\n    ",";\n\n    ",";\n"])),gn,I(yn(sn)));export{dn as DesignSystemProvider,vn as Display,wn as Text,i as colors};
//# sourceMappingURL=index.js.map