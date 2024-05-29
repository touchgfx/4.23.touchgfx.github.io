"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[69449],{49613:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(a),b=n,m=s["".concat(l,".").concat(b)]||s[b]||d[b]||c;return a?r.createElement(m,i(i({ref:e},u),{},{components:a})):r.createElement(m,i({ref:e},u))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=b;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<c;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},75303:(t,e,a)=>{a.d(e,{Z:()=>c});var r=a(59496);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const c=n},26004:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});a(59496);var r=a(49613),n=a(95375),c=a(75303);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const l={title:"CacheTableEntry"},p=void 0,u={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",title:"CacheTableEntry",description:"touchgfx/Bitmap.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",draft:!1,tags:[],version:"current",frontMatter:{title:"CacheTableEntry"},sidebar:"api",previous:{title:"CacheableContainer",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_cacheable_container"},next:{title:"Callback",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_callback"}},s={},d=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"data",id:"data",level:3}],b={toc:d},m="wrapper";function f(t){var{components:e}=t,a=o(t,["components"]);return(0,r.kt)(m,i({},b,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/Bitmap.hpp")),(0,r.kt)("p",null,"Cache bookkeeping. "),(0,r.kt)("h2",i({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"right"})),(0,r.kt)("th",i({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"}),"uint8_t *"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_cache_table_entry#variable-data",mdxType:"Link"},"data")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"})),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Pointer to location of image data for this ",(0,r.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," in the cache. 0 if bitmap not cached.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"right"})),(0,r.kt)("td",i({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",i({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(c.Z,{url:"structtouchgfx_1_1_bitmap_1_1_cache_table_entry#variable-data",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",i({},{id:"data"}),"data"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t * data ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Pointer to location of image data for this ",(0,r.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," in the cache. 0 if bitmap not cached. "))))}f.isMDXComponent=!0}}]);