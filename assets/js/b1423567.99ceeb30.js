"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[66453],{49613:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>y});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(y,o(o({ref:e},u),{},{components:r})):n.createElement(y,o({ref:e},u))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75303:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(59496);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=a},78085:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>_,frontMatter:()=>c,metadata:()=>u,toc:()=>s});r(59496);var n=r(49613),a=r(95375),i=r(75303);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const c={title:"LZW9DictionaryEntry"},p=void 0,u={unversionedId:"api/classes/structtouchgfx_1_1_l_z_w9_dictionary_entry",id:"api/classes/structtouchgfx_1_1_l_z_w9_dictionary_entry",title:"LZW9DictionaryEntry",description:"touchgfx/hal/Types.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_l_z_w9_dictionary_entry.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_l_z_w9_dictionary_entry",permalink:"/4.23/docs/api/classes/structtouchgfx_1_1_l_z_w9_dictionary_entry",draft:!1,tags:[],version:"current",frontMatter:{title:"LZW9DictionaryEntry"},sidebar:"api",previous:{title:"LockFreeDMA_Queue",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue"},next:{title:"ManyBlockAllocator",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_many_block_allocator"}},d={},s=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"character",id:"character",level:3},{value:"length",id:"length",level:3},{value:"prefixIndex",id:"prefixindex",level:3}],m={toc:s},y="wrapper";function _(t){var{components:e}=t,r=l(t,["components"]);return(0,n.kt)(y,o({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Types.hpp")),(0,n.kt)("p",null,"Dictionary entry used in LZW decompression. "),(0,n.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"right"})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_l_z_w9_dictionary_entry#variable-character",mdxType:"Link"},"character")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Current character of the entry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_l_z_w9_dictionary_entry#variable-length",mdxType:"Link"},"length")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Remaining length of the entry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_l_z_w9_dictionary_entry#variable-prefixindex",mdxType:"Link"},"prefixIndex")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Index to previous character.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_l_z_w9_dictionary_entry#variable-character",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"character"}),"character"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t character ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Current character of the entry. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_l_z_w9_dictionary_entry#variable-length",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"length"}),"length"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t length ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Remaining length of the entry. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_l_z_w9_dictionary_entry#variable-prefixindex",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"prefixindex"}),"prefixIndex"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint16_t prefixIndex ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Index to previous character. "))))}_.isMDXComponent=!0}}]);