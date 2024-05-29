"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[82835],{49613:(t,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>k});var e=n(59496);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function o(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=e.createContext({}),u=function(t){var a=e.useContext(c),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},p=function(t){var a=u(t.components);return e.createElement(c.Provider,{value:a},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},m=e.forwardRef((function(t,a){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?e.createElement(k,i(i({ref:a},p),{},{components:n})):e.createElement(k,i({ref:a},p))}));function k(t,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75303:(t,a,n)=>{n.d(a,{Z:()=>l});var e=n(59496);class r extends e.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return e.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},85509:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>s});n(59496);var e=n(49613),r=n(95375),l=n(75303);function i(){return i=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},i.apply(this,arguments)}function o(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const c={title:"TouchCalibration"},u=void 0,p={unversionedId:"api/classes/classtouchgfx_1_1_touch_calibration",id:"api/classes/classtouchgfx_1_1_touch_calibration",title:"TouchCalibration",description:"touchgfx/transforms/TouchCalibration.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_touch_calibration.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_touch_calibration",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_touch_calibration",draft:!1,tags:[],version:"current",frontMatter:{title:"TouchCalibration"},sidebar:"api",previous:{title:"TouchButtonTrigger",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_touch_button_trigger"},next:{title:"TouchController",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_touch_controller"}},d={},s=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"TouchCalibration",id:"touchcalibration",level:3},{value:"setCalibrationMatrix",id:"setcalibrationmatrix",level:3},{value:"translatePoint",id:"translatepoint",level:3}],m={toc:s},k="wrapper";function h(t){var{components:a}=t,n=o(t,["components"]);return(0,e.kt)(k,i({},m,n,{components:a,mdxType:"MDXLayout"}),(0,e.kt)("p",null,(0,e.kt)("inlineCode",{parentName:"p"},"touchgfx/transforms/TouchCalibration.hpp")),(0,e.kt)("p",null," Calibrates a touch coordinate.\nClass TouchCalibraiton is responsible for translating coordinates (",(0,e.kt)("a",i({parentName:"p"},{href:"structtouchgfx_1_1_point"}),"Point"),") based on matrix of calibration values. "),(0,e.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,e.kt)("div",{class:"function-table",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",i({parentName:"tr"},{align:"right"})),(0,e.kt)("th",i({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"})),(0,e.kt)("td",i({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-touchcalibration",mdxType:"Link"},"TouchCalibration")),"()")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"})),(0,e.kt)("td",i({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"})),(0,e.kt)("td",i({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-setcalibrationmatrix",mdxType:"Link"},"setCalibrationMatrix")),"(const ",(0,e.kt)("a",i({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," ",(0,e.kt)("em",{parentName:"td"}," ref, const ",(0,e.kt)("a",i({parentName:"em"},{href:"structtouchgfx_1_1_point"}),"Point")," ")," scr)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"})),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"Initializes the calibration matrix based on reference and measured values.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"})),(0,e.kt)("td",i({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),(0,e.kt)("strong",{parentName:"td"},(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-translatepoint",mdxType:"Link"},"translatePoint")),"(",(0,e.kt)("a",i({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," & p)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"})),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"Translates the specified point using the matrix.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:"right"})),(0,e.kt)("td",i({parentName:"tr"},{align:null})))))),(0,e.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_touch_calibration#function-touchcalibration",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",i({},{id:"touchcalibration"}),"TouchCalibration"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null}),(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-touchcalibration",mdxType:"Link"},"TouchCalibration")),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",i({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_touch_calibration#function-setcalibrationmatrix",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",i({},{id:"setcalibrationmatrix"}),"setCalibrationMatrix"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-setcalibrationmatrix",mdxType:"Link"},"setCalibrationMatrix")),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"const ",(0,e.kt)("a",i({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," *"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"ref ,"),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"const ",(0,e.kt)("a",i({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," *"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"scr"),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Initializes the calibration matrix based on reference and measured values. "),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null}),"ref"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"Pointer to array of three reference points.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null}),"scr"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"Pointer to array of three measured points."))))))),(0,e.kt)(l.Z,{url:"classtouchgfx_1_1_touch_calibration#function-translatepoint",mdxType:"DoxybookHeaderLink"}),(0,e.kt)("h3",i({},{id:"translatepoint"}),"translatePoint"),(0,e.kt)("div",{class:"api-container",markdown:"1"},(0,e.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,e.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-translatepoint",mdxType:"Link"},"translatePoint")),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,e.kt)("td",i({parentName:"tr"},{align:null}),(0,e.kt)("a",i({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," &"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"p"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,e.kt)("td",i({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})),(0,e.kt)("td",i({parentName:"tr"},{align:null})))))),(0,e.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,e.kt)("p",null,"Translates the specified point using the matrix. "),(0,e.kt)("p",null,"If matrix has not been initialized, p is not modified."),(0,e.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,e.kt)("div",{class:"api-content-indented",markdown:"1"},(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",i({parentName:"tr"},{align:null})),(0,e.kt)("th",i({parentName:"tr"},{align:null})))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",i({parentName:"tr"},{align:null}),"p"),(0,e.kt)("td",i({parentName:"tr"},{align:null}),"The point to translate."))))))))}h.isMDXComponent=!0}}]);