"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[92573],{49613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=p(a),s=r,m=g["".concat(c,".").concat(s)]||g[s]||u[s]||l;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[g]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},94700:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(59496);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},18120:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>u});a(59496);var n=a(49613),r=a(51721),l=a(94700);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const c={title:"Draggable"},p=void 0,d={unversionedId:"api/classes/classtouchgfx_1_1_draggable",id:"api/classes/classtouchgfx_1_1_draggable",title:"Draggable",description:"touchgfx/mixins/Draggable.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_draggable.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_draggable",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_draggable",draft:!1,tags:[],version:"current",frontMatter:{title:"Draggable"},sidebar:"docs",previous:{title:"DragEvent",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_drag_event"},next:{title:"Drawable",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_drawable"}},g={},u=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"Draggable",id:"draggable",level:3},{value:"handleDragEvent",id:"handledragevent",level:3}],s={toc:u},m="wrapper";function k(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(m,i({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/mixins/Draggable.hpp")),(0,n.kt)("p",null," Mix-in class that extends a class to become Draggable, which means that the object on screen can be freely moved around using the touch screen. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T")," specifies the type to extend with the ",(0,n.kt)("a",i({parentName:"li"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," behavior. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),": T"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper",mdxType:"Link"},"Snapper","<"," T ",">")),(0,n.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"right"})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"Link"},"Draggable")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"Link"},"handleDragEvent")),"(const ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Called when dragging the ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"right"})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"draggable"}),"Draggable"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"Link"},"Draggable")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," class. "),(0,n.kt)("p",null,"Make the object touchable. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",i({},{id:"handledragevent"}),"handleDragEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"Link"},"handleDragEvent")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Called when dragging the ",(0,n.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," object. "),(0,n.kt)("p",null,"The object is moved according to the drag event."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null})),(0,n.kt)("th",i({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"The drag event."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-handledragevent",mdxType:"Link"},"touchgfx::Snapper::handleDragEvent")))))}k.isMDXComponent=!0}}]);