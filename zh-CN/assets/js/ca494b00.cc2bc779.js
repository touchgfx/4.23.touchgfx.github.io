"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[29597],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(7029);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:a,src:c})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:a,src:c})),n.createElement("p",null,e.children))}},42098:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(59496),o=r(45924),a=r(26467),c=r(95375),i=r(36433),l=r(91766);const u={cardContainer:"cardContainer_Qcqb",cardTitle:"cardTitle_GlRn",cardDescription:"cardDescription_ibOh"};function s({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",u.cardContainer)},t)}function m({href:e,icon:t,title:r,description:a}){return n.createElement(s,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",u.cardTitle),title:r},t," ",r),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:a},a))}function p({item:e}){const t=(0,a.Wl)(e);return t?n.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(r=e.description)&&void 0!==r?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var r}function d({item:e}){const t=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,a.xz)(null!==(r=e.docId)&&void 0!==r?r:void 0);var c;return n.createElement(m,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==o?void 0:o.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(d,{item:e});case"category":return n.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function g({className:e}){const t=(0,a.jA)();return n.createElement(v,{items:t.items,className:e})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,h({},e));const c=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},52688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>d});r(59496);var n=r(49613),o=r(89639),a=r(42098),c=r(26467);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"touchgfx-al-configuration",title:"TouchGFX AL \u914d\u7f6e",sidebar_label:"TouchGFX AL \u914d\u7f6e"},s=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",title:"TouchGFX AL \u914d\u7f6e",description:"\u4e3a\u9879\u76ee\u542f\u7528TouchGFX Generator\u540e\uff0cX-CUBE\u7528\u6237\u754c\u9762\u4e2d\u5b58\u5728\u4e09\u4e2a\u4e3b\u8981\u7ec4\uff08Display\u663e\u793a\u3001Driver\u9a71\u52a8\u7a0b\u5e8f\u548cVideo Decoding\u89c6\u9891\u89e3\u7801\uff09\u3002 \u5982\u679c\u68c0\u6d4b\u5230\u5f53\u524d\u914d\u7f6e\u6709\u95ee\u9898\uff0c\u5c06\u663e\u793a\u7b2c\u56db\u4e2a\u201c\u4f9d\u8d56\u9879\u201d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-al-configuration",title:"TouchGFX AL \u914d\u7f6e",sidebar_label:"TouchGFX AL \u914d\u7f6e"},sidebar:"docs",previous:{title:"\u4f7f\u80fdTouchGFX Generator",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator"},next:{title:"Display",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"}},p={},d=[],f={toc:d},h="wrapper";function g(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(h,i({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4e3a\u9879\u76ee\u542f\u7528TouchGFX Generator\u540e\uff0cX-CUBE\u7528\u6237\u754c\u9762\u4e2d\u5b58\u5728\u4e09\u4e2a\u4e3b\u8981\u7ec4\uff08",(0,n.kt)("em",{parentName:"p"},"Display\u663e\u793a"),"\u3001",(0,n.kt)("em",{parentName:"p"},"Driver\u9a71\u52a8\u7a0b\u5e8f"),"\u548c",(0,n.kt)("em",{parentName:"p"},"Video Decoding\u89c6\u9891\u89e3\u7801"),"\uff09\u3002 \u5982\u679c\u68c0\u6d4b\u5230\u5f53\u524d\u914d\u7f6e\u6709\u95ee\u9898\uff0c\u5c06\u663e\u793a\u7b2c\u56db\u4e2a\u201c\u4f9d\u8d56\u9879\u201d\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u4f9d\u8d56\u5173\u7cfb")),"\xa0- \u8be5\u7ec4\u5305\u542b\u9488\u5bf9\u5f00\u5173\u4eba\u5458\u7684\u6709\u5173\u914d\u7f6e\u4e2d\u7684\u4f9d\u8d56\u5173\u7cfb\u3001\u8b66\u544a\u6216\u5177\u4f53\u9519\u8bef\u7684\u901a\u77e5\u3002 \u5982\u679c\u6ca1\u6709\u6761\u76ee\uff0c\u5219\u8be5\u7ec4\u5c06\u9690\u85cf\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u663e\u793a")),"\xa0- \u8be5\u7ec4\u5305\u542b\u4e0e\u663e\u793a\u6709\u5173\u7684\u8bbe\u7f6e\uff0c\u5982\u63a5\u53e3\u3001\u5e27\u7f13\u5b58\u4f4d\u6df1\u3001\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002 \u8fd9\u4e9b\u8bbe\u7f6e\u76f4\u63a5\u5f71\u54cdTouchGFX\u9879\u76ee\u91cc\u753b\u5e03\u7684\u5927\u5c0f\u4ee5\u53ca\u57fa\u4e8e\u8d44\u6e90\u6240\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u9a71\u52a8\u7a0b\u5e8f")),"\xa0- \u8be5\u7ec4\u5141\u8bb8\u7528\u6237\u9009\u62e9\u4e0e\u5e94\u7528\u8ba1\u65f6\u6e90\u3001\u56fe\u5f62\u52a0\u901f\uff08DMA2D\u548cGPU2D\uff09\u548cRTOS\u6709\u5173\u7684\u4e00\u4e9b\u73b0\u6210\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u5176\u5b83\u529f\u80fd")),"\u2014\u2014\u6b64\u7ec4\u5305\u542b\u914d\u7f6e\u4e2d\u53ef\u7528\u7684\u5176\u5b83\u529f\u80fd\uff0c\u4f8b\u5982\uff1a\u4f7f\u7528\u975e\u5b58\u50a8\u6620\u5c04\u95ea\u5b58\u4e2d\u7684\u56fe\u50cf\u548c\u5b57\u4f53\u6570\u636e\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u6216\u5177\u6709Vector Rendering\uff08\u77e2\u91cf\u6e32\u67d3\uff09\u529f\u80fd\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u89c6\u9891\u89e3\u7801 ")),"- \u8be5\u7ec4\u5141\u8bb8\u7528\u6237\u542f\u7528\u786c\u4ef6\u6216\u8f6f\u4ef6\u89c6\u9891\u89e3\u7801\u3002 \u8be5\u9009\u9879\u5bf9\u4e8e\u89c6\u9891\u63a7\u4ef6\u662f\u5fc5\u8981\u7684\u3002 \u6ce8\u610f\uff01\u4e0d\u662f\u6240\u6709\u7684MCU\u90fd\u652f\u6301\u89c6\u9891\u89e3\u7801\u3002")),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/four-sections.png",width:"600",mdxType:"Figure"},"STM32CubeMX\u4e2d\u7684TouchGFX Generator UI"),(0,n.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86\u5728STM32CubeMX\u4e2dTouchGFX Generator\u4e3a\u914d\u7f6e\u62bd\u8c61\u5c42\u63d0\u4f9b\u7684\u6bcf\u4e2a\u8bbe\u7f6e\u7684\u4e0d\u540c\u9009\u9879\u3002"),(0,n.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);