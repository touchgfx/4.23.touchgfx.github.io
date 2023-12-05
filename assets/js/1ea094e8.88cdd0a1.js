"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[58928],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61235:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const i=a},12822:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(32118);const i=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children))}},89588:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const i=a},39331:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),a=r(89588);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}const l=o},87645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>h});r(59496);var n=r(49613),a=r(12822),i=r(39331),o=r(61235);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"05-display-external",title:"5. Display with framebuffer in external RAM",sidebar_label:"5. Display with framebuffer in external RAM"},p=void 0,u={unversionedId:"development/board-bring-up/how-to/05-display-external",id:"development/board-bring-up/how-to/05-display-external",title:"5. Display with framebuffer in external RAM",description:"Motivation",source:"@site/docs/development/board-bring-up/how-to/05-display-external.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/05-display-external",permalink:"/4.23/docs/development/board-bring-up/how-to/05-display-external",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-display-external",title:"5. Display with framebuffer in external RAM",sidebar_label:"5. Display with framebuffer in external RAM"},sidebar:"docs",previous:{title:"4. External RAM",permalink:"/4.23/docs/development/board-bring-up/how-to/04-enable-external-ram"},next:{title:"6. External addressable flash",permalink:"/4.23/docs/development/board-bring-up/how-to/06-flash-external-addressable"}},d={},h=[{value:"Motivation",id:"motivation",level:2},{value:"Goal",id:"goal",level:2},{value:"Verification",id:"verification",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Do",id:"do",level:2},{value:"LTDC Layer configuration",id:"ltdc-layer-configuration",level:3}],f={toc:h},m="wrapper";function b(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)(m,l({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"motivation"}),"Motivation"),(0,n.kt)("p",null,"In this step we will move the framebuffer from internal to external\nRAM, and make sure that the framebuffer can still be transferred to\nthe display."),(0,n.kt)(i.Z,{mdxType:"Note"},"Skip this step if external RAM is not relevant for your board bring up."),(0,n.kt)("p",null,'This step will stress test the external RAM since the display\ncontroller has certain expectations on the transfer speed. This might\nresult in errors. Common errors are LTDC underrun, because the\nbandwidth of the external RAM is not high enough, or pixel errors\nbecause the RAM is configured incorrectly and is running "out of\nspec".'),(0,n.kt)("h2",l({},{id:"goal"}),"Goal"),(0,n.kt)("p",null,"The goal in this step is to remove the framebuffer array from internal\nRAM and use a framebuffer in external RAM."),(0,n.kt)("h3",l({},{id:"verification"}),"Verification"),(0,n.kt)("p",null,"Here are the verification points for this section. These are similar\nto the verification points when the framebuffer is in internal RAM,\nbut should be checked again, as the speed on the external memory may\ninfluence the transmission of the framebuffer to the display."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Verification Point"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Rationale"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Framebuffer is shown"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Display controller or SPI is configured and running")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Updated framebuffer is shown"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"We know how to repeatedly transmit the framebuffer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Framerate is correct"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"The pixel clock and porches are configured to get the required framerate")))),(0,n.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"The following are the prerequisites for this step:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Address of the framebuffer in the external RAM")),(0,n.kt)("h2",l({},{id:"do"}),"Do"),(0,n.kt)("p",null,"We have these two tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Place the framebuffer in external RAM"),(0,n.kt)("li",{parentName:"ul"},"Setup the display controller to read from the external RAM")),(0,n.kt)("p",null,"When the frambuffer is in external RAM, it is common practice to not\nallocate an array for it. You just declare a pointer to the correct\naddress. The address in external RAM is then manually selected. It can\nbe anywhere in the external RAM, but the start of the RAM is commonly\nused:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"uint16_t* framebuffer = (uint16_t*)0xC0000000;  //16 bpp framebuffer\n")),(0,n.kt)("p",null,"You can reuse the small test programs you created in the steps in\n",(0,n.kt)("a",l({parentName:"p"},{href:"03-display-internal"}),"Display Internal"),"."),(0,n.kt)("h3",l({},{id:"ltdc-layer-configuration"}),"LTDC Layer configuration"),(0,n.kt)("p",null,"Remember to change the configuration of the LTDC Layer. Since we now\nhave a specific address for the framebuffer, we can insert that\naddress in CubeMX (Color Frame Buffer Start Address):"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.webp",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring LTDC Layer Parameters"),(0,n.kt)("p",null,"Remember to remove this line from your program and the framebuffer array:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,n.kt)("p",null,"If the LTDC Layer size was setup to only update a part of the\ndisplay in ",(0,n.kt)("a",l({parentName:"p"},{href:"03-display-internal"}),"step 03"),"\n(due to the amount of internal RAM), now is the time to redo\nthat. Reconfigure the LTDC Layer such that the entire display is\ncovered."))}b.isMDXComponent=!0}}]);