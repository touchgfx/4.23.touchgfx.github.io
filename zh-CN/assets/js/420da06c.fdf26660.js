"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2015],{49613:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>c});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),m=s(a),u=r,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75303:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(59496);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},74567:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>k,toc:()=>d});a(59496);var n=a(49613),r=a(95375),l=a(75303);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={title:"OSWrappers"},s=void 0,k={unversionedId:"api/classes/classtouchgfx_1_1_o_s_wrappers",id:"api/classes/classtouchgfx_1_1_o_s_wrappers",title:"OSWrappers",description:"touchgfx/hal/OSWrappers.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_o_s_wrappers.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_o_s_wrappers",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_o_s_wrappers",draft:!1,tags:[],version:"current",frontMatter:{title:"OSWrappers"},sidebar:"api",previous:{title:"NoTransition",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_no_transition"},next:{title:"PainterABGR2222",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_painter_a_b_g_r2222"}},m={},d=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"deinitialize",id:"deinitialize",level:3},{value:"giveFrameBufferSemaphore",id:"giveframebuffersemaphore",level:3},{value:"giveFrameBufferSemaphoreFromISR",id:"giveframebuffersemaphorefromisr",level:3},{value:"initialize",id:"initialize",level:3},{value:"isVSyncAvailable",id:"isvsyncavailable",level:3},{value:"signalRenderingDone",id:"signalrenderingdone",level:3},{value:"signalVSync",id:"signalvsync",level:3},{value:"takeFrameBufferSemaphore",id:"takeframebuffersemaphore",level:3},{value:"taskDelay",id:"taskdelay",level:3},{value:"taskYield",id:"taskyield",level:3},{value:"tryTakeFrameBufferSemaphore",id:"trytakeframebuffersemaphore",level:3},{value:"waitForVSync",id:"waitforvsync",level:3}],u={toc:d},c="wrapper";function g(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(c,i({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/OSWrappers.hpp")),(0,n.kt)("p",null,"This class specifies OS wrappers for dealing with the framebuffer semaphore and the VSYNC signal. "),(0,n.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"right"})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-deinitialize",mdxType:"Link"},"deinitialize")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Initialize framebuffer semaphore and queue/mutex for VSYNC signal.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-giveframebuffersemaphore",mdxType:"Link"},"giveFrameBufferSemaphore")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Release the framebuffer semaphore.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-giveframebuffersemaphorefromisr",mdxType:"Link"},"giveFrameBufferSemaphoreFromISR")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Release the framebuffer semaphore in a way that is safe in interrupt context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-initialize",mdxType:"Link"},"initialize")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Initialize framebuffer semaphore and queue/mutex for VSYNC signal.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"bool"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-isvsyncavailable",mdxType:"Link"},"isVSyncAvailable")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"This function checks if a VSync occurred after last rendering.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-signalrenderingdone",mdxType:"Link"},"signalRenderingDone")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Signal that the rendering of the frame has completed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-signalvsync",mdxType:"Link"},"signalVSync")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Signal that a VSYNC has occurred.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-takeframebuffersemaphore",mdxType:"Link"},"takeFrameBufferSemaphore")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Take the framebuffer semaphore.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-taskdelay",mdxType:"Link"},"taskDelay")),"(uint16_t ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"A function that causes executing task to sleep for a number of milliseconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-taskyield",mdxType:"Link"},"taskYield")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"A function that causes the executing task to yield control to another thread.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-trytakeframebuffersemaphore",mdxType:"Link"},"tryTakeFrameBufferSemaphore")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Attempt to obtain the framebuffer semaphore.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-waitforvsync",mdxType:"Link"},"waitForVSync")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"This function blocks until a VSYNC occurs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-deinitialize",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"deinitialize"}),"deinitialize"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-deinitialize",mdxType:"Link"},"deinitialize")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initialize framebuffer semaphore and queue/mutex for VSYNC signal. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-giveframebuffersemaphore",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"giveframebuffersemaphore"}),"giveFrameBufferSemaphore"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-giveframebuffersemaphore",mdxType:"Link"},"giveFrameBufferSemaphore")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Release the framebuffer semaphore. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-giveframebuffersemaphorefromisr",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"giveframebuffersemaphorefromisr"}),"giveFrameBufferSemaphoreFromISR"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-giveframebuffersemaphorefromisr",mdxType:"Link"},"giveFrameBufferSemaphoreFromISR")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Release the framebuffer semaphore in a way that is safe in interrupt context. "),(0,n.kt)("p",null,"Called from ISR. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-initialize",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"initialize"}),"initialize"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-initialize",mdxType:"Link"},"initialize")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initialize framebuffer semaphore and queue/mutex for VSYNC signal. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-isvsyncavailable",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"isvsyncavailable"}),"isVSyncAvailable"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-isvsyncavailable",mdxType:"Link"},"isVSyncAvailable")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"This function checks if a VSync occurred after last rendering. "),(0,n.kt)("p",null,"The function is used in systems that cannot wait in waitForVSync (because they are also checking other event sources."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if VSync occurred. ")),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"signalRenderingDone is typically used together with this function.")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-signalrenderingdone",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"signalrenderingdone"}),"signalRenderingDone"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-signalrenderingdone",mdxType:"Link"},"signalRenderingDone")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Signal that the rendering of the frame has completed. "),(0,n.kt)("p",null,"Used by some systems to avoid using any previous vsync. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-signalvsync",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"signalvsync"}),"signalVSync"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-signalvsync",mdxType:"Link"},"signalVSync")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Signal that a VSYNC has occurred. "),(0,n.kt)("p",null,"Should make the vsync queue/mutex available."),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"This function is called from an ISR, and should (depending on OS) trigger a scheduling. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-takeframebuffersemaphore",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"takeframebuffersemaphore"}),"takeFrameBufferSemaphore"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-takeframebuffersemaphore",mdxType:"Link"},"takeFrameBufferSemaphore")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Take the framebuffer semaphore. "),(0,n.kt)("p",null,"Blocks until semaphore is available. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-taskdelay",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"taskdelay"}),"taskDelay"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-taskdelay",mdxType:"Link"},"taskDelay")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"uint16_t"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"ms"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"A function that causes executing task to sleep for a number of milliseconds. "),(0,n.kt)("p",null,"This function is OPTIONAL. It is only used by the TouchGFX in the case of a specific frame refresh strategy (REFRESH_STRATEGY_OPTIM_SINGLE_BUFFER_TFT_CTRL). Due to backwards compatibility, in order for this function to be usable by the ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_h_a_l"}),"HAL")," the function must be explicitly registered: hal.registerTaskDelayFunction(&OSWrappers::taskDelay)"),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"ms"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"The number of milliseconds to sleep."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_h_a_l#function-setframerefreshstrategy"}),"HAL::setFrameRefreshStrategy"),", ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_h_a_l#function-registertaskdelayfunction"}),"HAL::registerTaskDelayFunction"))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-taskyield",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"taskyield"}),"taskYield"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-taskyield",mdxType:"Link"},"taskYield")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"A function that causes the executing task to yield control to another thread. "),(0,n.kt)("p",null,"This function is used by the framework when it is necessary to wait a little before continuing (e.g. drawing)."),(0,n.kt)("p",null,"The implementation should typically request the operating system to change to another task of similar priority. When running without an operating system, the implementation can run a very short task and return. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-trytakeframebuffersemaphore",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"trytakeframebuffersemaphore"}),"tryTakeFrameBufferSemaphore"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-trytakeframebuffersemaphore",mdxType:"Link"},"tryTakeFrameBufferSemaphore")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Attempt to obtain the framebuffer semaphore. "),(0,n.kt)("p",null,"If semaphore is not available, do nothing."),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"must return immediately! This function does not care who has the taken the semaphore, it only serves to make sure that the semaphore is taken by someone. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_o_s_wrappers#function-waitforvsync",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"waitforvsync"}),"waitForVSync"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_o_s_wrappers#function-waitforvsync",mdxType:"Link"},"waitForVSync")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"This function blocks until a VSYNC occurs. "),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"This function must first clear the mutex/queue and then wait for the next one to occur. ")))))}g.isMDXComponent=!0}}]);