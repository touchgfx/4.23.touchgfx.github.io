"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[54588],{49613:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>s});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),u=o(a),m=r,s=u["".concat(p,".").concat(m)]||u[m]||k[m]||l;return a?n.createElement(s,i(i({ref:e},c),{},{components:a})):n.createElement(s,i({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94700:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(59496);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},25024:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>k});a(59496);var n=a(49613),r=a(51721),l=a(94700);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={title:"I2C"},o=void 0,c={unversionedId:"api/classes/classtouchgfx_1_1_i2_c",id:"api/classes/classtouchgfx_1_1_i2_c",title:"I2C",description:"platform/driver/i2c/I2C.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_i2_c.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_i2_c",permalink:"/4.23/ja/docs/api/classes/classtouchgfx_1_1_i2_c",draft:!1,tags:[],version:"current",frontMatter:{title:"I2C"},sidebar:"docs",previous:{title:"HALSDL2",permalink:"/4.23/ja/docs/api/classes/classtouchgfx_1_1_h_a_l_s_d_l2"},next:{title:"I2CTouchController",permalink:"/4.23/ja/docs/api/classes/classtouchgfx_1_1_i2_c_touch_controller"}},u={},k=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"I2C",id:"i2c",level:3},{value:"init",id:"init",level:3},{value:"readRegister",id:"readregister",level:3},{value:"writeRegister",id:"writeregister",level:3},{value:"~I2C",id:"i2c-1",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"channel",id:"channel",level:3}],m={toc:k},s="wrapper";function g(t){var{components:e}=t,a=d(t,["components"]);return(0,n.kt)(s,i({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"platform/driver/i2c/I2C.hpp")),(0,n.kt)("p",null,"Platform independent interface for I2C drivers. "),(0,n.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"right"})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-i2c",mdxType:"Link"},"I2C")),"(uint8_t ch)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-init",mdxType:"Link"},"init")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Initializes the ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," driver.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-readregister",mdxType:"Link"},"readRegister")),"(uint8_t addr, uint8_t reg, uint8_t * data, uint32_t cnt) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Reads the specified register on the device with the specified address.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-writeregister",mdxType:"Link"},"writeRegister")),"(uint8_t addr, uint8_t reg, uint8_t val) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Writes the specified value in a register.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-~i2c",mdxType:"Link"},"~I2C")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",i({},{id:"protected-attributes"}),"Protected Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"right"})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#variable-channel",mdxType:"Link"},"channel")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"I2c channel is stored in order to initialize and recover a specific ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," channel.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c#function-i2c",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"i2c"}),"I2C"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-i2c",mdxType:"Link"},"I2C")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint8_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"ch"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," class. "),(0,n.kt)("p",null,"Stores the channel of the ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," bus to be configured."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"ch"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," channel."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c#function-init",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"init"}),"init"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-init",mdxType:"Link"},"init")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes the ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," driver. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c#function-readregister",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"readregister"}),"readRegister"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-readregister",mdxType:"Link"},"readRegister")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint8_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"addr ,"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint8_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"reg ,"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint8_t *"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"data ,"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint32_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"cnt"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Reads the specified register on the device with the specified address. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"addr"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," device address.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"reg"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"The register.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"data"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Pointer to buffer in which to place the result.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"cnt"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Size of buffer in bytes."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true on success, false otherwise. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c#function-writeregister",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"writeregister"}),"writeRegister"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-writeregister",mdxType:"Link"},"writeRegister")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint8_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"addr ,"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint8_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"reg ,"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint8_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"val"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Writes the specified value in a register. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"addr"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," device address.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"reg"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"The register.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"val"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"The new value."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true on success, false otherwise. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c#function-~i2c",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"i2c-1"}),"~I2C"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c#function-~i2c",mdxType:"Link"},"~I2C")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," class. "))),(0,n.kt)("h2",i({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c#variable-channel",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"channel"}),"channel"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t channel ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"I2c channel is stored in order to initialize and recover a specific ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," channel. "))))}g.isMDXComponent=!0}}]);