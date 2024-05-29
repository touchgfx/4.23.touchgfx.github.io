"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5009],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(7029);const o=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},96151:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},49018:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),a=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const l=i},42098:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(59496),a=r(45924),o=r(26467),i=r(95375),l=r(36433),s=r(91766);const c={cardContainer:"cardContainer_Qcqb",cardTitle:"cardTitle_GlRn",cardDescription:"cardDescription_ibOh"};function d({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,a.Z)("card padding--lg",c.cardContainer)},t)}function p({href:e,icon:t,title:r,description:o}){return n.createElement(d,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",c.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:o},o))}function u({item:e}){const t=(0,o.Wl)(e);return t?n.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(r=e.description)&&void 0!==r?r:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var r}function h({item:e}){const t=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const a=(0,o.xz)(null!==(r=e.docId)&&void 0!==r?r:void 0);var i;return n.createElement(p,{href:e.href,icon:t,title:e.label,description:null!==(i=e.description)&&void 0!==i?i:null==a?void 0:a.description})}function m({item:e}){switch(e.type){case"link":return n.createElement(h,{item:e});case"category":return n.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function g({className:e}){const t=(0,o.jA)();return n.createElement(b,{items:t.items,className:e})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,f({},e));const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},43723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>m});r(59496);var n=r(49613),a=r(89639),o=r(49018),i=r(42098),l=r(26467);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const d={id:"board-introduction",title:"Board Bring Up Introduction"},p=void 0,u={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"Board Bring Up Introduction",description:"Project activity",source:"@site/docs/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.23/docs/development/board-bring-up/board-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"board-introduction",title:"Board Bring Up Introduction"},sidebar:"docs",previous:{title:"External Memories",permalink:"/4.23/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. Create Project",permalink:"/4.23/docs/development/board-bring-up/how-to/01-create-project"}},h={},m=[{value:"Tools of the trade",id:"tools-of-the-trade",level:2},{value:"Verification of Functionality",id:"verification-of-functionality",level:2},{value:"Overall Process",id:"overall-process",level:2}],f={toc:m},g="wrapper";function b(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(g,s({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Project activity"),(0,n.kt)("p",null,"This chapter will help you through the board bring up phase of\nstarting TouchGFX programming on a new platform. Bringing up the\nboard means making sure that all necessary parts of the board and\ncorresponding drivers are working correctly before TouchGFX is added\nto the mix."),(0,n.kt)("p",null,"If you already have a working board with a display, many of the\nactivities in this phase will be easy. If you have a completely new custom\nmade board, you should expect that this phase will take some days to\ncomplete. The work does normally pay off as an unstable platform makes\nit difficult to write good applications. A stable and proven platform\non the other hand allows you to concentrate on the application."),(0,n.kt)("p",null,"This chapter is for you if are a developer with the task of ensuring\nthat your hardware and low-level software components on the board are\nworking as expected.\nThis chapter is not for you if you are concerned only with developing\nthe actual UI of your application."),(0,n.kt)("p",null,"In bringing up your board, you should have a thorough understanding of the components and peripherals on your board, the connections between all these, the protocols they communicate via and the driver code available and/or needed for each one."),(0,n.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}),(0,n.kt)("p",null,"The next chapter ",(0,n.kt)("a",s({parentName:"p"},{href:"../touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development")," discusses how to create the abstraction layer that allows TouchGFX to run on top of your hardware and drivers."),(0,n.kt)("h2",s({},{id:"tools-of-the-trade"}),"Tools of the trade"),(0,n.kt)("p",null,"Some important tools when bringing up an STM32 based board are listed in the table below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Tool"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"An easy to use tool for configuration of the MCU and generation of initialization source code for a project and internal peripherals.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"STM32Cube Firmware Package"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The STM32Cube Firmware for your MCU family contains many example projects and applications that show how to use various peripherals.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Vendor datasheets"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The datasheets for your external devices, like the display or flash, contain important information such as timing and voltage for correct initialisation of both MCU (e.g. through STM32CubeMX) and the external device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Vendor driver code"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"To save time you should request example code for your external devices from the vendor. The driver code often needs to be ported to your STM32 MCU, but this is often simpler than writing driver code from scratch.")))),(0,n.kt)("p",null,"All the work done in board bring up phase is not dependent on TouchGFX and should not involve any TouchGFX code. Instead the work and the resulting code will serve as a solid foundation for developing the TouchGFX Abstraction Layer."),(0,n.kt)("p",null,"The primary goal is to make sure that your hardware and lower-level software is in fact working in accordance with your expectations for the final application."),(0,n.kt)("h2",s({},{id:"verification-of-functionality"}),"Verification of Functionality"),(0,n.kt)("p",null,"The code produced during the board bring up, in form of one or more test projects will serve two purposes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Abstraction Layer"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The board initialization code is the foundation upon which we will build the TouchGFX AL and ultimately the working UI application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Test code"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The verification code written accompanying the board initialization code, will be the ultimate place to go to if/when things do not act as expected. During the board bring up phase you will create a number of small verification programs ensuring that the board and each particular component are working as expected. These verification programs will be of great value when progressing, they can be revisited and enhanced if/when things become uncertain.")))),(0,n.kt)("p",null,"Due to the above two reasons it can be very beneficial to save the verification programs systematically. This will allow you to use the test programs again later. For example to test new revisions of your hardware or to find the root cause, when your larger applications are unexpectedly failing. It is also recommended to make systematic notes of any measurements, e.g. memory bandwidth, done during development."),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Board Initialisation Code is the bases for the TouchGFX AL"),(0,n.kt)("h2",s({},{id:"overall-process"}),"Overall Process"),(0,n.kt)("p",null,"Since we cannot know the concrete makeup of your hardware the following ",(0,n.kt)("a",s({parentName:"p"},{href:"how-to/01-create-project"}),"How To")," guide will be a general step-by-step guide to bring up and prepare boards to run TouchGFX."),(0,n.kt)("p",null,"Each step of the guide will be concerned with one particular part of your hardware and/or software components and the bring up of this. One example of a custom component part of your hardware could be the touch controller. The overall goal is to communicate with the touch controller to get information on any touches on the display. The specific commands to send to the touch controller depends on the specific controller you are using on your hardware, so the guide cannot provide the complete driver. For this you need to combine the guide with the information in your touch controller datasheet."),(0,n.kt)(o.Z,{mdxType:"Note"},"When reading and performing the step-by-step guide for your custom board bring up, we recommend that you:",(0,n.kt)("ul",null,(0,n.kt)("li",null,"do one step at the time"),(0,n.kt)("li",null,"verify each step thoroughly before moving on"),(0,n.kt)("li",null,"use the guide as a means for debugging, when something is not working as intended, or go back and revisit previous steps to make sure you did not break those steps"),(0,n.kt)("li",null,"do not be alarmed if you experience unexpected behaviour - bringing up a board is a non trivial task"))),(0,n.kt)("p",null,"Each step in the guide will follow the following structure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Motivation"),"\nThis part will explain the step and motivate why the step is an\nimportant step in preparing for running TouchGFX on your\nhardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Goal"),"\nThe goal part lists the goals for this step. A list of verification\npoints details the specific tests that you should perform. These\nverification points ensures that your software implements the\nrequirements needed to running TouchGFX sucessfully on your\nhardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prerequisites"),"\nHere we list items that are required to perform the tasks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Do"),"\nThis part explains as concrete as possible how to write the software\nrequired to configure and use the hardware. For some steps it is not\npossible to be very precise as the software depends a lot on the\nhardware you use. In that case this part lists the steps on a higher\nlevel and you must find the details relevant for your hardware yourself.")),(0,n.kt)("p",null,"The individual how-to steps are:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Step"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Content"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/01-create-project"}),"Create Project")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Create an empty project in STM32CubeMX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/02-cpu-running"}),"CPU Running")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Ensure that the MCU is running at the desired speed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/03-display-internal"}),"Display with framebuffer in internal RAM")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Allocate a framebuffer in internal RAM and transmit it to the display")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"External RAM")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Enable the external RAM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/05-display-external"}),"Display with framebuffer in external RAM")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Move the framebuffer to external RAM and transmit it to the display")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"External addressable flash")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Enable external memory-mapped flash")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"External block mode flash")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Enable external block-mode flash")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"Hardware acceleration")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Enable the Chrom-ART graphics accelerator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/09-touch-controller"}),"Touch controller")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Setup communication to the touch controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/10-physical-buttons"}),"Physical buttons")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Configure access to physical buttons")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"how-to/11-flash-loader"}),"Flash loader")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Develop a way to write data to the external flash")))))}b.isMDXComponent=!0}}]);