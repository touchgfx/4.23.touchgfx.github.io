"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9805],{49613:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>f});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var m=n.createContext({}),c=function(t){var e=n.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(m.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=c(r),p=a,f=s["".concat(m,".").concat(p)]||s[p]||u[p]||i;return r?n.createElement(f,o(o({ref:e},d),{},{components:r})):n.createElement(f,o({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l[s]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},75303:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(59496);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=a},37521:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>m,metadata:()=>d,toc:()=>u});r(59496);var n=r(49613),a=r(95375),i=r(75303);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const m={title:"VideoInformation"},c=void 0,d={unversionedId:"api/classes/structtouchgfx_1_1_video_information",id:"api/classes/structtouchgfx_1_1_video_information",title:"VideoInformation",description:"touchgfx/hal/VideoController.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_video_information.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_video_information",permalink:"/4.23/zh-TW/docs/api/classes/structtouchgfx_1_1_video_information",draft:!1,tags:[],version:"current",frontMatter:{title:"VideoInformation"},sidebar:"api",previous:{title:"VideoDataReader",permalink:"/4.23/zh-TW/docs/api/classes/classtouchgfx_1_1_video_data_reader"},next:{title:"VideoWidget",permalink:"/4.23/zh-TW/docs/api/classes/classtouchgfx_1_1_video_widget"}},s={},u=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"frame_height",id:"frame_height",level:3},{value:"frame_width",id:"frame_width",level:3},{value:"ms_between_frames",id:"ms_between_frames",level:3},{value:"number_of_frames",id:"number_of_frames",level:3}],p={toc:u},f="wrapper";function h(t){var{components:e}=t,r=l(t,["components"]);return(0,n.kt)(f,o({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/VideoController.hpp")),(0,n.kt)("p",null,"This type contains various information read from a video file. "),(0,n.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"right"})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-frame_height",mdxType:"Link"},"frame_height")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The frame height in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-frame_width",mdxType:"Link"},"frame_width")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The frame width in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-ms_between_frames",mdxType:"Link"},"ms_between_frames")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The number of milliseconds between frames.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-number_of_frames",mdxType:"Link"},"number_of_frames")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The number of frames in the movie.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-frame_height",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"frame_height"}),"frame_height"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t frame_height ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The frame height in pixels. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-frame_width",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"frame_width"}),"frame_width"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t frame_width ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The frame width in pixels. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-ms_between_frames",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"ms_between_frames"}),"ms_between_frames"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t ms_between_frames ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of milliseconds between frames. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-number_of_frames",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"number_of_frames"}),"number_of_frames"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t number_of_frames ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of frames in the movie. "))))}h.isMDXComponent=!0}}]);