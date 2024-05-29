"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[33357],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(r),p=o,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),o=r(7029);const i=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:i,src:c})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:i,src:c})),n.createElement("p",null,e.children))}},42098:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(59496),o=r(45924),i=r(26467),c=r(95375),a=r(36433),l=r(91766);const s={cardContainer:"cardContainer_Qcqb",cardTitle:"cardTitle_GlRn",cardDescription:"cardDescription_ibOh"};function d({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",s.cardContainer)},t)}function u({href:e,icon:t,title:r,description:i}){return n.createElement(d,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function m({item:e}){const t=(0,i.Wl)(e);return t?n.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(r=e.description)&&void 0!==r?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var r}function p({item:e}){const t=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,i.xz)(null!==(r=e.docId)&&void 0!==r?r:void 0);var c;return n.createElement(u,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==o?void 0:o.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(p,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function y({className:e}){const t=(0,i.jA)();return n.createElement(g,{items:t.items,className:e})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,h({},e));const c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},4213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>p});r(59496);var n=r(49613),o=r(89639),i=r(42098),c=r(26467);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"hardware-selection-introduction",title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd"},d=void 0,u={unversionedId:"development/hardware-selection/hardware-selection-introduction",id:"development/hardware-selection/hardware-selection-introduction",title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd",description:"\u9879\u76ee\u6d3b\u52a8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-selection-introduction.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/hardware-selection-introduction",permalink:"/4.23/zh-CN/docs/development/hardware-selection/hardware-selection-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-introduction",title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u5f00\u53d1\u7b80\u4ecb",permalink:"/4.23/zh-CN/docs/development/development-introduction"},next:{title:"\u521d\u6b65\u8003\u8651",permalink:"/4.23/zh-CN/docs/development/hardware-selection/preliminary-considerations"}},m={},p=[],f={toc:p},h="wrapper";function y(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(h,a({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/activities-selected-000.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u9879\u76ee\u6d3b\u52a8"),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/components-selected-000.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u9879\u76ee\u7ec4\u4ef6"),(0,n.kt)("p",null,"\u5728\u9009\u62e9\u8fd0\u884c\u56fe\u5f62\u7528\u6237\u754c\u9762\u7684\u786c\u4ef6\u5e73\u53f0\u65f6\uff0c\u9700\u8981\u8003\u8651\u548c\u8bc4\u4f30\u591a\u4e2a\u53c2\u6570\u3002 \u672c\u6587\u8bd5\u56fe\u89e3\u51b3\u6709\u5173MCU\u3001\u663e\u793a\u5c4f\u3001\u5916\u90e8\u5b58\u50a8\u5668\u3001UI\u6027\u80fd\u7b49\u65b9\u9762\u7684\u8003\u8651\u3002"),(0,n.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);