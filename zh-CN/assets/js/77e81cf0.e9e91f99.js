"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[68770],{49613:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=d(a),u=n,m=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return a?r.createElement(m,l(l({ref:e},c),{},{components:a})):r.createElement(m,l({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75303:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(59496);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=n},23437:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>s});a(59496);var r=a(49613),n=a(95375),i=a(75303);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},l.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const p={title:"BlitOp"},d=void 0,c={unversionedId:"api/classes/structtouchgfx_1_1_blit_op",id:"api/classes/structtouchgfx_1_1_blit_op",title:"BlitOp",description:"touchgfx/hal/BlitOp.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_blit_op.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_blit_op",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_blit_op",draft:!1,tags:[],version:"current",frontMatter:{title:"BlitOp"},sidebar:"api",previous:{title:"BitmapData",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data"},next:{title:"BlockTransition",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_block_transition"}},k={},s=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"alpha",id:"alpha",level:3},{value:"color",id:"color",level:3},{value:"dstFormat",id:"dstformat",level:3},{value:"dstLoopStride",id:"dstloopstride",level:3},{value:"nLoops",id:"nloops",level:3},{value:"nSteps",id:"nsteps",level:3},{value:"operation",id:"operation",level:3},{value:"pClut",id:"pclut",level:3},{value:"pDst",id:"pdst",level:3},{value:"pSrc",id:"psrc",level:3},{value:"replaceBgAlpha",id:"replacebgalpha",level:3},{value:"replaceFgAlpha",id:"replacefgalpha",level:3},{value:"srcFormat",id:"srcformat",level:3},{value:"srcLoopStride",id:"srcloopstride",level:3}],u={toc:s},m="wrapper";function g(t){var{components:e}=t,a=o(t,["components"]);return(0,r.kt)(m,l({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/BlitOp.hpp")),(0,r.kt)("p",null,"BlitOp instances carry the required information for performing operations on the LCD (framebuffer) using DMA. "),(0,r.kt)("h2",l({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"right"})),(0,r.kt)("th",l({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-alpha",mdxType:"Link"},"alpha")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The alpha to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),(0,r.kt)("a",l({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-color",mdxType:"Link"},"color")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Color to fill.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-dstformat",mdxType:"Link"},"dstFormat")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The destination format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-dstloopstride",mdxType:"Link"},"dstLoopStride")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The number of bytes to stride the destination after every loop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-nloops",mdxType:"Link"},"nLoops")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The number of lines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-nsteps",mdxType:"Link"},"nSteps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The number of pixels in a line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint32_t"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-operation",mdxType:"Link"},"operation")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The operation to perform.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"const uint8_t *"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-pclut",mdxType:"Link"},"pClut")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Pointer to the source CLUT entires.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t *"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-pdst",mdxType:"Link"},"pDst")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Pointer to the destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"const uint16_t *"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-psrc",mdxType:"Link"},"pSrc")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Pointer to the source (pixels or indexes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"bool"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-replacebgalpha",mdxType:"Link"},"replaceBgAlpha")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Replace the background per pixel alpha value with 255 = solid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"bool"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-replacefgalpha",mdxType:"Link"},"replaceFgAlpha")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Replace the fourground per pixel alpha value with 255 = solid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-srcformat",mdxType:"Link"},"srcFormat")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The source format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-srcloopstride",mdxType:"Link"},"srcLoopStride")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The number of bytes to stride the source after every loop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"right"})),(0,r.kt)("td",l({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",l({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-alpha",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"alpha"}),"alpha"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t alpha ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The alpha to use. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-color",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"color"}),"color"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",l({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," color ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Color to fill. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-dstformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"dstformat"}),"dstFormat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t dstFormat ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The destination format. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-dstloopstride",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"dstloopstride"}),"dstLoopStride"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t dstLoopStride ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of bytes to stride the destination after every loop. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-nloops",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"nloops"}),"nLoops"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t nLoops ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of lines. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-nsteps",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"nsteps"}),"nSteps"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t nSteps ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of pixels in a line. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-operation",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"operation"}),"operation"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint32_t operation ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The operation to perform. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-pclut",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"pclut"}),"pClut"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint8_t * pClut ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Pointer to the source CLUT entires. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-pdst",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"pdst"}),"pDst"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t * pDst ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Pointer to the destination. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-psrc",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"psrc"}),"pSrc"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t * pSrc ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Pointer to the source (pixels or indexes) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-replacebgalpha",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"replacebgalpha"}),"replaceBgAlpha"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"bool replaceBgAlpha ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Replace the background per pixel alpha value with 255 = solid. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-replacefgalpha",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"replacefgalpha"}),"replaceFgAlpha"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"bool replaceFgAlpha ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Replace the fourground per pixel alpha value with 255 = solid. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-srcformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"srcformat"}),"srcFormat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t srcFormat ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The source format. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-srcloopstride",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",l({},{id:"srcloopstride"}),"srcLoopStride"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t srcLoopStride ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of bytes to stride the source after every loop. "))))}g.isMDXComponent=!0}}]);