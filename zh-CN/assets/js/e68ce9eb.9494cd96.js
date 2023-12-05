"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[98820],{49613:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),p=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(r),k=n,m=u["".concat(c,".").concat(k)]||u[k]||s[k]||i;return r?a.createElement(m,o(o({ref:e},d),{},{components:r})):a.createElement(m,o({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},94700:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(59496);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=n},20614:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>s});r(59496);var a=r(49613),n=r(51721),i=r(94700);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},o.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const c={title:"Key"},p=void 0,d={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_key",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_key",title:"Key",description:"touchgfx/widgets/Keyboard.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_key",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key",draft:!1,tags:[],version:"current",frontMatter:{title:"Key"},sidebar:"docs",previous:{title:"KerningNode",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_kerning_node"},next:{title:"Keyboard",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_keyboard"}},u={},s=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"highlightBitmapId",id:"highlightbitmapid",level:3},{value:"keyArea",id:"keyarea",level:3},{value:"keyId",id:"keyid",level:3}],k={toc:s},m="wrapper";function y(t){var{components:e}=t,r=l(t,["components"]);return(0,a.kt)(m,o({},k,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/widgets/Keyboard.hpp")),(0,a.kt)("p",null,"Mapping from rectangle to key id. "),(0,a.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"right"})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),(0,a.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key#variable-highlightbitmapid",mdxType:"Link"},"highlightBitmapId")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),'A bitmap to show when the area is "pressed".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),(0,a.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key#variable-keyarea",mdxType:"Link"},"keyArea")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The area occupied by the key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key#variable-keyid",mdxType:"Link"},"keyId")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The id of a key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key#variable-highlightbitmapid",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"highlightbitmapid"}),"highlightBitmapId"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")," highlightBitmapId ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,'A bitmap to show when the area is "pressed". '))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key#variable-keyarea",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"keyarea"}),"keyArea"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," keyArea ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The area occupied by the key. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key#variable-keyid",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"keyid"}),"keyId"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t keyId ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The id of a key. "))))}y.isMDXComponent=!0}}]);