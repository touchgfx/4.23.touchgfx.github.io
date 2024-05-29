"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[21090],{49613:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>b});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(a),k=n,b=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return a?r.createElement(b,c(c({ref:e},s),{},{components:a})):r.createElement(b,c({ref:e},s))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,c=new Array(l);c[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:n,c[1]=i;for(var p=2;p<l;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},75303:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(59496);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=n},78587:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});a(59496);var r=a(49613),n=a(95375),l=a(75303);function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},c.apply(this,arguments)}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={title:"CallbackArea"},p=void 0,s={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",title:"CallbackArea",description:"touchgfx/widgets/Keyboard.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",draft:!1,tags:[],version:"current",frontMatter:{title:"CallbackArea"},sidebar:"api",previous:{title:"Callback<dest_type,void,void,void>",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01void_00_01void_00_01void_01_4"},next:{title:"Canvas",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_canvas"}},d={},u=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"callback",id:"callback",level:3},{value:"highlightBitmapId",id:"highlightbitmapid",level:3},{value:"keyArea",id:"keyarea",level:3}],k={toc:u},b="wrapper";function h(t){var{components:e}=t,a=i(t,["components"]);return(0,r.kt)(b,c({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/widgets/Keyboard.hpp")),(0,r.kt)("p",null,"Mapping from rectangle to a callback method to execute. "),(0,r.kt)("h2",c({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:"right"})),(0,r.kt)("th",c({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"}),(0,r.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," *"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-callback",mdxType:"Link"},"callback")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"})),(0,r.kt)("td",c({parentName:"tr"},{align:null}),'The callback to execute, when the area is "pressed". The callback should be a Callback',"<","YourClass",">"," member in the class using the keyboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"})),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"}),(0,r.kt)("a",c({parentName:"td"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-highlightbitmapid",mdxType:"Link"},"highlightBitmapId")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"})),(0,r.kt)("td",c({parentName:"tr"},{align:null}),'A bitmap to show when the area is "pressed".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"})),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"}),(0,r.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-keyarea",mdxType:"Link"},"keyArea")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"})),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The area occupied by a key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"right"})),(0,r.kt)("td",c({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",c({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(l.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-callback",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",c({},{id:"callback"}),"callback"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," * callback ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,'The callback to execute, when the area is "pressed". The callback should be a Callback',"<","YourClass",">"," member in the class using the keyboard. "))),(0,r.kt)(l.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-highlightbitmapid",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",c({},{id:"highlightbitmapid"}),"highlightBitmapId"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")," highlightBitmapId ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,'A bitmap to show when the area is "pressed". '))),(0,r.kt)(l.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-keyarea",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",c({},{id:"keyarea"}),"keyArea"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," keyArea ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The area occupied by a key. "))))}h.isMDXComponent=!0}}]);