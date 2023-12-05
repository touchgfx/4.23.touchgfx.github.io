"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[74644],{49613:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>g});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,i(i({ref:e},k),{},{components:a})):n.createElement(g,i({ref:e},k))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},94700:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(59496);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},47587:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>s,frontMatter:()=>p,metadata:()=>k,toc:()=>m});a(59496);var n=a(49613),r=a(51721),l=a(94700);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={title:"GPIO"},d=void 0,k={unversionedId:"api/classes/classtouchgfx_1_1_g_p_i_o",id:"api/classes/classtouchgfx_1_1_g_p_i_o",title:"GPIO",description:"touchgfx/hal/GPIO.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_g_p_i_o.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_g_p_i_o",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_g_p_i_o",draft:!1,tags:[],version:"current",frontMatter:{title:"GPIO"},sidebar:"docs",previous:{title:"GlyphNode",permalink:"/4.23/docs/api/classes/structtouchgfx_1_1_glyph_node"},next:{title:"Gradients",permalink:"/4.23/docs/api/classes/structtouchgfx_1_1_gradients"}},u={},m=[{value:"Public Types",id:"public-types",level:2},{value:"Public Functions",id:"public-functions",level:2},{value:"Public Types Documentation",id:"public-types-documentation",level:2},{value:"GPIO_ID",id:"gpio_id",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"clear",id:"clear",level:3},{value:"get",id:"get",level:3},{value:"init",id:"init",level:3},{value:"set",id:"set",level:3},{value:"toggle",id:"toggle",level:3}],c={toc:m},g="wrapper";function s(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(g,i({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/GPIO.hpp")),(0,n.kt)("p",null," Interface class for manipulating GPIOs in order to do performance measurements on target.\nNot used on the PC simulator. "),(0,n.kt)("h2",i({},{id:"public-types"}),"Public Types"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"enum"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id",mdxType:"Link"},"GPIO_ID"))," { VSYNC_FREQ, RENDER_TIME, FRAME_RATE, MCU_ACTIVE }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Enum for the GPIOs used.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"right"})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-clear",mdxType:"Link"},"clear")),"(",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")," id)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Sets a pin low.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"bool"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-get",mdxType:"Link"},"get")),"(",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")," id)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Gets the state of a pin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-init",mdxType:"Link"},"init")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Perform configuration of IO pins.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-set",mdxType:"Link"},"set")),"(",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")," id)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Sets a pin high.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-toggle",mdxType:"Link"},"toggle")),"(",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")," id)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Toggles a pin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",i({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"gpio_id"}),"GPIO_ID"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header",markdown:"1"},(0,n.kt)("p",null,"enum ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id",mdxType:"Link"},"GPIO_ID"))),(0,n.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,n.kt)("p",null,"Enum for the GPIOs used. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enumvalue-vsync_freq",mdxType:"DoxybookHeaderLink"})," VSYNC_FREQ"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enumvalue-render_time",mdxType:"DoxybookHeaderLink"})," RENDER_TIME"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Pin is toggled at each VSYNC.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enumvalue-frame_rate",mdxType:"DoxybookHeaderLink"})," FRAME_RATE"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Pin is high when frame rendering begins, low when finished.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#enumvalue-mcu_active",mdxType:"DoxybookHeaderLink"})," MCU_ACTIVE"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Pin is toggled when the framebuffers are swapped.  Pin is high when the MCU is doing work (i.e. not in idle task).")))))),(0,n.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-clear",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"clear"}),"clear"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-clear",mdxType:"Link"},"clear")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets a pin low. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"the pin to set."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-get",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"get"}),"get"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-get",mdxType:"Link"},"get")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets the state of a pin. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"the pin to get."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true if the pin is high, false otherwise. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-init",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"init"}),"init"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-init",mdxType:"Link"},"init")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Perform configuration of IO pins. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-set",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"set"}),"set"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-set",mdxType:"Link"},"set")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets a pin high. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"the pin to set."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_g_p_i_o#function-toggle",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"toggle"}),"toggle"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_g_p_i_o#function-toggle",mdxType:"Link"},"toggle")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_g_p_i_o#enum-gpio_id"}),"GPIO_ID")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Toggles a pin. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"the pin to toggle."))))))))}s.isMDXComponent=!0}}]);