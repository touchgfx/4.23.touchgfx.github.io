"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[31497],{49613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),s=r,m=d["".concat(p,".").concat(s)]||d[s]||k[s]||l;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75303:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},48214:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>k});n(59496);var a=n(49613),r=n(95375),l=n(75303);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"Event"},c=void 0,u={unversionedId:"api/classes/classtouchgfx_1_1_event",id:"api/classes/classtouchgfx_1_1_event",title:"Event",description:"touchgfx/Event.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_event",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_event",draft:!1,tags:[],version:"current",frontMatter:{title:"Event"},sidebar:"api",previous:{title:"Edge",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_edge"},next:{title:"FadeAnimator",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_fade_animator"}},d={},k=[{value:"Public Types",id:"public-types",level:2},{value:"Public Functions",id:"public-functions",level:2},{value:"Public Types Documentation",id:"public-types-documentation",level:2},{value:"EventType",id:"eventtype",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"Event",id:"event",level:3},{value:"getEventType",id:"geteventtype",level:3},{value:"~Event",id:"event-1",level:3}],s={toc:k},m="wrapper";function g(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)(m,i({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/Event.hpp")),(0,a.kt)("p",null,"Simple base class for events. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event",mdxType:"Link"},"ClickEvent"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event",mdxType:"Link"},"DragEvent"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event",mdxType:"Link"},"GestureEvent")),(0,a.kt)("h2",i({},{id:"public-types"}),"Public Types"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"enum"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"Link"},"EventType"))," { EVENT_CLICK, EVENT_DRAG, EVENT_GESTURE }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"The event types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"right"})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-event",mdxType:"Link"},"Event")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Default constructor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_event#enum-eventtype"}),"EventType")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"Link"},"getEventType")),"() const =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Gets event type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-~event",mdxType:"Link"},"~Event")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Destructor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"eventtype"}),"EventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null,"enum ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"Link"},"EventType"))),(0,a.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,a.kt)("p",null,"The event types. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_event#enumvalue-event_click",mdxType:"DoxybookHeaderLink"})," EVENT_CLICK"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"A click.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_event#enumvalue-event_drag",mdxType:"DoxybookHeaderLink"})," EVENT_DRAG"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"A drag.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_event#enumvalue-event_gesture",mdxType:"DoxybookHeaderLink"})," EVENT_GESTURE"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"A gesture.")))))),(0,a.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_event#function-event",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"event"}),"Event"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-event",mdxType:"Link"},"Event")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Default constructor. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"geteventtype"}),"getEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0","EventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"Link"},"getEventType")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"const =0"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets event type. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The type of this event. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-geteventtype",mdxType:"Link"},"touchgfx::ClickEvent::getEventType"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-geteventtype",mdxType:"Link"},"touchgfx::DragEvent::getEventType"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-geteventtype",mdxType:"Link"},"touchgfx::GestureEvent::getEventType")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_event#function-~event",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"event-1"}),"~Event"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-~event",mdxType:"Link"},"~Event")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Destructor. "))))}g.isMDXComponent=!0}}]);