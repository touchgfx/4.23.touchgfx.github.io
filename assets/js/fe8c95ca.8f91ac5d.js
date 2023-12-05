"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[27969],{49613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(59496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),k=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=k(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=k(n),u=l,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(m,i(i({ref:e},s),{},{components:n})):a.createElement(m,i({ref:e},s))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c[p]="string"==typeof t?t:l,i[1]=c;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94700:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(59496);class l extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const r=l},64049:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>k,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(59496);var a=n(49613),l=n(51721),r=n(94700);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const o={title:"ClickListener"},k=void 0,s={unversionedId:"api/classes/classtouchgfx_1_1_click_listener",id:"api/classes/classtouchgfx_1_1_click_listener",title:"ClickListener",description:"touchgfx/mixins/ClickListener.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_click_listener.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_click_listener",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_click_listener",draft:!1,tags:[],version:"current",frontMatter:{title:"ClickListener"},sidebar:"docs",previous:{title:"ClickEvent",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_click_event"},next:{title:"Color",permalink:"/4.23/docs/api/classes/classtouchgfx_1_1_color"}},p={},d=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"ClickListener",id:"clicklistener",level:3},{value:"handleClickEvent",id:"handleclickevent",level:3},{value:"setClickAction",id:"setclickaction",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"clickAction",id:"clickaction",level:3}],u={toc:d},m="wrapper";function h(t){var{components:e}=t,n=c(t,["components"]);return(0,a.kt)(m,i({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/mixins/ClickListener.hpp")),(0,a.kt)("p",null," Mix-in class that extends a class with a click action event that is called when the class receives a click event. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T")," specifies the type to extend with the ",(0,a.kt)("a",i({parentName:"li"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," behavior. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),": T"),(0,a.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"right"})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(l.Z,{to:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"Link"},"ClickListener")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(l.Z,{to:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),"(const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Ensures that the clickEvent is propagated to the super class T and to the clickAction listener.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(l.Z,{to:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"Link"},"setClickAction")),"(",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," & callback)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Associates an action to be performed when the class T is clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"protected-attributes"}),"Protected Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"right"})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," *"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(l.Z,{to:"classtouchgfx_1_1_click_listener#variable-clickaction",mdxType:"Link"},"clickAction")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"The callback to be executed when T is clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(r.Z,{url:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"clicklistener"}),"ClickListener"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{to:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"Link"},"ClickListener")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," class. "),(0,a.kt)("p",null,"Make the object touchable. "))),(0,a.kt)(r.Z,{url:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"handleclickevent"}),"handleClickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(l.Z,{to:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Ensures that the clickEvent is propagated to the super class T and to the clickAction listener. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Information about the click."))))))),(0,a.kt)(r.Z,{url:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"setclickaction"}),"setClickAction"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(l.Z,{to:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"Link"},"setClickAction")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," &"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Associates an action to be performed when the class T is clicked. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"The callback to be executed. The callback will be given a reference to T."))))))),(0,a.kt)("h2",i({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,a.kt)(r.Z,{url:"classtouchgfx_1_1_click_listener#variable-clickaction",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"clickaction"}),"clickAction"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," * clickAction ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The callback to be executed when T is clicked. "))))}h.isMDXComponent=!0}}]);