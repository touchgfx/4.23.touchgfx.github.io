"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[86776],{49613:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>_});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),d=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=d(n),m=r,_=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(_,o(o({ref:e},p),{},{components:n})):a.createElement(_,o({ref:e},p))}));function _(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94700:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=r},4031:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});n(59496);var a=n(49613),r=n(51721),i=n(94700);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const c={title:"TypedTextData"},d=void 0,p={unversionedId:"api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",id:"api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",title:"TypedTextData",description:"touchgfx/TypedText.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",permalink:"/4.23/docs/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",draft:!1,tags:[],version:"current",frontMatter:{title:"TypedTextData"},sidebar:"docs",previous:{title:"TypedText",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_typed_text"},next:{title:"UIEventListener",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_u_i_event_listener"}},s={},u=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"alignment",id:"alignment",level:3},{value:"direction",id:"direction",level:3},{value:"fontIdx",id:"fontidx",level:3}],m={toc:u},_="wrapper";function f(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)(_,o({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/TypedText.hpp")),(0,a.kt)("p",null,"The data structure for typed texts. "),(0,a.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"right"})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-alignment",mdxType:"Link"},"alignment")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The alignment of the typed text (LEFT,CENTER,RIGHT)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-direction",mdxType:"Link"},"direction")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The text direction (LTR,RTL,...) of the typed text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"const unsigned char"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-fontidx",mdxType:"Link"},"fontIdx")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The ID of the font associated with the typed text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-alignment",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"alignment"}),"alignment"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",o({parentName:"p"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")," alignment ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The alignment of the typed text (LEFT,CENTER,RIGHT) "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-direction",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"direction"}),"direction"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",o({parentName:"p"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")," direction ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The text direction (LTR,RTL,...) of the typed text. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-fontidx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"fontidx"}),"fontIdx"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const unsigned char fontIdx ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The ID of the font associated with the typed text. "))))}f.isMDXComponent=!0}}]);