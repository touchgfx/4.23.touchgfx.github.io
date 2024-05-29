"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[92853],{49613:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?a.createElement(m,o(o({ref:e},u),{},{components:r})):a.createElement(m,o({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[d]="string"==typeof t?t:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75303:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(59496);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=n},17421:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});r(59496);var a=r(49613),n=r(95375),i=r(75303);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},o.apply(this,arguments)}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const s={title:"DrawingSurface"},l=void 0,u={unversionedId:"api/classes/structtouchgfx_1_1_drawing_surface",id:"api/classes/structtouchgfx_1_1_drawing_surface",title:"DrawingSurface",description:"touchgfx/hal/Types.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_drawing_surface.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_drawing_surface",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_drawing_surface",draft:!1,tags:[],version:"current",frontMatter:{title:"DrawingSurface"},sidebar:"api",previous:{title:"DrawableListItemsInterface",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface"},next:{title:"DrawTextureMapScanLineBase",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_l_c_d_1_1_draw_texture_map_scan_line_base"}},d={},p=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"address",id:"address",level:3},{value:"stride",id:"stride",level:3}],f={toc:p},m="wrapper";function g(t){var{components:e}=t,r=c(t,["components"]);return(0,a.kt)(m,o({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Types.hpp")),(0,a.kt)("p",null," The destination of a draw operation.\nContains a pointer to where to draw and the stride of the drawing surface. "),(0,a.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"right"})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"uint16_t *"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_drawing_surface#variable-address",mdxType:"Link"},"address")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The bits.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"int32_t"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_drawing_surface#variable-stride",mdxType:"Link"},"stride")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The stride.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_drawing_surface#variable-address",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"address"}),"address"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t * address ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The bits. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_drawing_surface#variable-stride",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"stride"}),"stride"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int32_t stride ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The stride. "))))}g.isMDXComponent=!0}}]);