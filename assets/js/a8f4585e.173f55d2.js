"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[71292],{49613:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[s]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75303:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=a},90660:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>d});n(59496);var r=n(49613),a=n(95375),l=n(75303);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const c={title:"SDLTouchController"},u=void 0,p={unversionedId:"api/classes/classtouchgfx_1_1_s_d_l_touch_controller",id:"api/classes/classtouchgfx_1_1_s_d_l_touch_controller",title:"SDLTouchController",description:"platform/driver/touch/SDLTouchController.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_s_d_l_touch_controller.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_s_d_l_touch_controller",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_s_d_l_touch_controller",draft:!1,tags:[],version:"current",frontMatter:{title:"SDLTouchController"},sidebar:"api",previous:{title:"SDL2TouchController",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_s_d_l2_touch_controller"},next:{title:"Shape",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_shape"}},s={},d=[{value:"Public Functions",id:"public-functions",level:2},{value:"Additional inherited members",id:"additional-inherited-members",level:2},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_touch_controller">TouchController</Link>',id:"public-functions-inherited-from-touchcontroller",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"init",id:"init",level:3},{value:"sampleTouch",id:"sampletouch",level:3}],m={toc:d},h="wrapper";function k(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(h,o({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"platform/driver/touch/SDLTouchController.hpp")),(0,r.kt)("p",null," TouchController for the simulator. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See"),": ",(0,r.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller",mdxType:"Link"},"TouchController")),(0,r.kt)("h2",o({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"right"})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-init",mdxType:"Link"},"init")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Initializes touch controller.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),"(int32_t & x, int32_t & y)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Checks whether the touch screen is being touched, and if so, what coordinates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",o({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,r.kt)("h3",o({},{id:"public-functions-inherited-from-touchcontroller"}),"Public Functions inherited from ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller",mdxType:"Link"},"TouchController")),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"right"})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,r.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",o({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_s_d_l_touch_controller#function-init",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"init"}),"init"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-init",mdxType:"Link"},"init")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",o({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Initializes touch controller. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"touchgfx::TouchController::init")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_s_d_l_touch_controller#function-sampletouch",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"sampletouch"}),"sampleTouch"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"int32_t &"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"x ,"),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"int32_t &"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Checks whether the touch screen is being touched, and if so, what coordinates. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The x position of the touch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The y position of the touch."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"True if a touch has been detected, otherwise false. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::TouchController::sampleTouch")))))}k.isMDXComponent=!0}}]);