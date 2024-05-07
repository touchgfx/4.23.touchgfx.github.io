"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1958],{49613:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>h});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},i=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,i=m(t,["components","mdxType","originalType","parentName"]),d=u(n),k=a,h=d["".concat(p,".").concat(k)]||d[k]||g[k]||l;return n?r.createElement(h,o(o({ref:e},i),{},{components:n})):r.createElement(h,o({ref:e},i))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[d]="string"==typeof t?t:a,o[1]=m;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12822:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(59496),a=n(32118);const l=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children))}},39559:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(59496),a=n(32118);const l=function(t){const e=(0,a.Z)(t.url);var n;const l=null!==(n=t.width)&&void 0!==n?n:"100%";var o;const m=null!==(o=t.height)&&void 0!==o?o:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:l,height:m},r.createElement("source",{src:e,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,t.children))}},54747:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>i,toc:()=>g});n(59496);var r=n(49613),a=n(12822),l=n(39559);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={id:"touchgfx-on-gpu2d",title:"NeoChrom/NeoChromVG\u4e0a\u7684TouchGFX"},u=void 0,i={unversionedId:"development/scenarios/touchgfx-on-gpu2d",id:"development/scenarios/touchgfx-on-gpu2d",title:"NeoChrom/NeoChromVG\u4e0a\u7684TouchGFX",description:"\u672c\u7bc0\u5c07\u8a0e\u8ad6\u5982\u4f55\u5728\u5177\u5099NeoChrom\u5716\u5f62\u52a0\u901f\u5668\u7684\u786c\u9ad4\u4e0a\u4f7f\u7528TouchGFX\u3002 \u672c\u5716\u5f62\u52a0\u901f\u5668\u53ef\u5927\u5e45\u63d0\u5347\u7d0b\u7406\u6620\u5c04\u3001\u5f71\u50cf\u7e2e\u653e\u548c\u65cb\u8f49\u7b49\u64cd\u4f5c\u6548\u80fd\u3002 \u9019\u8868\u793a\u53ef\u5efa\u7acb\u66f4\u591a\u9032\u968eUI\uff0c\u540c\u6642\u7dad\u6301\u9ad8\u756b\u9762\u64ad\u653e\u901f\u7387\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-gpu2d.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-gpu2d",permalink:"/4.23/zh-TW/docs/development/scenarios/touchgfx-on-gpu2d",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-on-gpu2d",title:"NeoChrom/NeoChromVG\u4e0a\u7684TouchGFX"},sidebar:"docs",previous:{title:"\u4f4e\u786c\u9ad4\u6210\u672c\u4e0a\u7684TouchGFX",permalink:"/4.23/zh-TW/docs/development/scenarios/touchgfx-on-lowcost-hardware"},next:{title:"\u901a\u904e\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u964d\u4f4e\u8a18\u61b6\u9ad4\u4f7f\u7528\u7387",permalink:"/4.23/zh-TW/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"}},d={},g=[{value:"NeoChrom\u53caNeoChromVG",id:"neochrom\u53caneochromvg",level:3},{value:"NeoChrom\u5716\u5f62\u529f\u80fd",id:"neochrom\u5716\u5f62\u529f\u80fd",level:2},{value:"\u5411\u91cf\u5716\u5f62",id:"\u5411\u91cf\u5716\u5f62",level:3},{value:"\u5229\u7528NeoChrom\u7e2e\u77ed\u6e32\u67d3\u6642\u9593\u3002",id:"\u5229\u7528neochrom\u7e2e\u77ed\u6e32\u67d3\u6642\u9593",level:2},{value:"\u6e32\u67d3\u6642\u9593\u6458\u8981",id:"\u6e32\u67d3\u6642\u9593\u6458\u8981",level:3},{value:"\u66f4\u8c50\u5bcc\u7684\u4f7f\u7528\u8005\u4ecb\u9762",id:"\u66f4\u8c50\u5bcc\u7684\u4f7f\u7528\u8005\u4ecb\u9762",level:3},{value:"\u52a0\u901f\u5411\u91cf\u5716\u5f62",id:"\u52a0\u901f\u5411\u91cf\u5716\u5f62",level:2},{value:"SVG",id:"svg",level:3},{value:"\u5411\u91cf\u5b57\u578b",id:"\u5411\u91cf\u5b57\u578b",level:3},{value:"\u5efa\u7acb\u5c08\u6848",id:"\u5efa\u7acb\u5c08\u6848",level:2},{value:"\u5f71\u50cf\u7de9\u885d\u5340\u683c\u5f0f",id:"\u5f71\u50cf\u7de9\u885d\u5340\u683c\u5f0f",level:2},{value:"NeoChrom\u7684\u9650\u5236",id:"neochrom\u7684\u9650\u5236",level:2}],k={toc:g},h="wrapper";function N(t){var{components:e}=t,n=m(t,["components"]);return(0,r.kt)(h,o({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc0\u5c07\u8a0e\u8ad6\u5982\u4f55\u5728\u5177\u5099NeoChrom\u5716\u5f62\u52a0\u901f\u5668\u7684\u786c\u9ad4\u4e0a\u4f7f\u7528TouchGFX\u3002 \u672c\u5716\u5f62\u52a0\u901f\u5668\u53ef\u5927\u5e45\u63d0\u5347\u7d0b\u7406\u6620\u5c04\u3001\u5f71\u50cf\u7e2e\u653e\u548c\u65cb\u8f49\u7b49\u64cd\u4f5c\u6548\u80fd\u3002 \u9019\u8868\u793a\u53ef\u5efa\u7acb\u66f4\u591a\u9032\u968eUI\uff0c\u540c\u6642\u7dad\u6301\u9ad8\u756b\u9762\u64ad\u653e\u901f\u7387\u3002"),(0,r.kt)("p",null,"NeoChrom\u5716\u5f62\u52a0\u901f\u5668\u76ee\u524d\u50c5\u65bcSTM32U5x9\u53caSTM32H7R/S\u63d0\u4f9b\u4f7f\u7528\u3002 \u958b\u767c\u677f\u5247\u65bc\u5169\u500b\u7cfb\u5217\u63d0\u4f9b\u4f7f\u7528\u3002"),(0,r.kt)(a.Z,{width:"30%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/stm32u5a9-dk-bsd-menu.webp",mdxType:"Figure"},"STM32U5A9\u63a2\u7d22\u958b\u767c\u677f"),(0,r.kt)("p",null,"NeoChrom\u52a0\u901f\u5668\u4ee5GPU2D\u70ba\u540d\u51fa\u73fe\u5728\u958b\u653e\u539f\u59cb\u78bc\u53caCubeMX\u4e4b\u4e2d\u3002"),(0,r.kt)("h3",o({},{id:"neochrom\u53caneochromvg"}),"NeoChrom\u53caNeoChromVG"),(0,r.kt)("p",null,"NeoChrom\u52a0\u901f\u5668\u5df2\u5c0e\u5165STM32U5G9\u9032\u884c\u66f4\u65b0\uff0c\u63d0\u4f9b\u5404\u9805\u984d\u5916\u529f\u80fd\u3002 \u5f37\u5316\u5f8c\u7684\u52a0\u901f\u5668\u540d\u70baNeoChromVG\u3002 \u52a0\u901f\u5668\u5305\u542b\u5404\u9805\u5ef6\u4f38\u529f\u80fd\uff0c\u53ef\u5141\u8a31\u4f7f\u7528\u786c\u9ad4\u52a0\u901f\u5411\u91cf\u5716\u5f62\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5fae\u63a7\u5236\u5668")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u52a0\u901f\u5668")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32U599"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5A9"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5F9"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChromVG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5G9"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChromVG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32H7Rx"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32H7Sx"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")))),(0,r.kt)("h2",o({},{id:"neochrom\u5716\u5f62\u529f\u80fd"}),"NeoChrom\u5716\u5f62\u529f\u80fd"),(0,r.kt)("p",null,"NeoChrom\u52a0\u901f\u5668\u53ef\u57f7\u884c\u57fa\u672c\u5340\u584a\u50b3\u8f38(\u7e6a\u5716)\u3001\u6df7\u5408\u3001\u7e2e\u653e\u3001\u65cb\u8f49\u548c\u7d0b\u7406\u6620\u5c04\u3002 \u5728\u542b\u6709NeoChrom\u7684\u5fae\u63a7\u5236\u5668\u4e0a\u57f7\u884c\u6642\uff0cTouchGFX\u6703\u81ea\u52d5\u4f7f\u7528\u6240\u6709\u524d\u8ff0\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u8207DMA2D\u5716\u5f62\u52a0\u901f\u5668\u76f8\u6bd4\uff0cNeoChrom\u53ef\u91dd\u5c0d\u66f4\u591a\u5716\u5f62\u64cd\u4f5c\u9032\u884c\u52a0\u901f\uff0c\u4e14\u5177\u5099\u66f4\u8c50\u5bcc\u7684\u529f\u80fd\u96c6\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5716\u5f62\u529f\u80fd")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"DMA2D")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"GPU2D")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u652f\u63f4\u683c\u5f0f(\u542bTouchGFX)"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"ARGB8888\u3001RGB888\u3001RGB565\u3001A8\u3001A4\u3001L8"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"ARGB8888\u3001RGB888\u3001RGB565\u3001A8\u3001A4\u3001A2\u3001A1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u4ee5\u6307\u4ee4\u8868\u70ba\u4e3b"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7e6a\u5716"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u77e9\u5f62"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u77e9\u5f62\u3001\u50cf\u7d20\u3001\u7dda\u689d\u3001\u4e09\u89d2\u5f62\u3001\u56db\u908a\u5f62\u53ca\u591a\u91cd\u53d6\u6a23\u6297\u92f8\u9f52(MSAA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5340\u584a\u50b3\u8f38"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8907\u88fd\u3001Alpha\u6df7\u5408\u3001\u50cf\u7d20\u683c\u5f0f\u8f49\u63db"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8907\u88fd\u3001Alpha\u6df7\u5408\u3001\u50cf\u7d20\u683c\u5f0f\u8f49\u63db\u3001\u8272\u5f69\u9375\u5165")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7d0b\u7406\u6620\u5c04"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5411\u91cf\u5716\u5f62"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121*")))),(0,r.kt)("p",null,"*"," \u786c\u9ad4\u52a0\u901f\u5411\u91cf\u5716\u5f62\u4ee5NeoChromVG\u63d0\u4f9b\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u9019\u4e9b\u529f\u80fd\u53ef\u8b93NeoChrom\u91dd\u5c0d\u66f4\u591aTouchGFX\u5c0f\u5de5\u5177\u9032\u884c\u52a0\u901f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c0f\u5de5\u5177")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"DMA2D")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"GPU2D")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u65b9\u6846\u3001\u5e36\u908a\u6846\u7684\u65b9\u6846"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5716\u50cf\u3001\u52d5\u756b\u5716\u50cf\u3001\u5e73\u92ea\u9ede\u9663\u5716\u3001\u5feb\u7167\u5de5\u5177"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6309\u9215\u3001\u5e36\u5716\u793a\u7684\u6309\u9215\u3001\u5e36\u6a19\u7c64\u7684\u6309\u9215\u3001\u5207\u63db\u6309\u9215"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6309\u9215\u9078\u55ae"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u50cf\u7d20\u6578\u64da\u5c0f\u5de5\u5177"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6587\u5b57\u65b9\u584a\u3001\u6587\u5b57\u5361\u3001\u9375\u76e4"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u90e8\u5206"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u53ef\u7e2e\u653e\u5716\u50cf"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7d0b\u7406\u6620\u5c04\u5668\u3001\u52d5\u756b\u7d0b\u7406\u6620\u5c04\u5668"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6709")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5713\u5708\u3001\u7dda\u689d\u3001\u5716\u50cf\u3001\u6e2c\u91cf\u5100"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121*"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"SVG"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7121**")))),(0,r.kt)("p",null,"*"," \u50cf\u7d20\u7e6a\u88fd/\u6df7\u5408\u81f3\u5f71\u50cf\u7de9\u885d\u5340\u662f\u7531DMA2D\u5b8c\u6210\uff0c\u4e0d\u904e\u5f62\u72c0\u8a08\u7b97\u5247\u662f\u5728\u8edf\u9ad4\u4e2d\u5b8c\u6210\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","*","* \u786c\u9ad4\u52a0\u901fSVG\u662f\u7531NeoChromVG\u63d0\u4f9b\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u672a\u4f7f\u7528\u786c\u9ad4\u52a0\u901f\u7684\u64cd\u4f5c\u6703\u4ee5\u8edf\u9ad4\u4f86\u9032\u884c\u6e32\u67d3(\u4ee3\u8868CPU\u8ca0\u8f09\u589e\u52a0\u4e14\u6548\u80fd\u964d\u4f4e)\u3002 \u5982\u4ee5\u4e0a\u8868\u683c\u6240\u793a\uff0cNeoChrom\u53ef\u52a0\u901f\u53ef\u7e2e\u653e\u5716\u50cf \u53ca\u7d0b\u7406\u6620\u5c04\u5668\u7b49\u5c0f\u5de5\u5177\u3002 \u9019\u4ee3\u8868\u6211\u5011\u53ef\u4ee5\u64f4\u5927\u4f7f\u7528\u9019\u985e\u5c0f\u5de5\u5177\uff0c\u4e26\u540c\u6642\u7dad\u6301\u9ad8\u6548\u80fd\u3002"),(0,r.kt)("h3",o({},{id:"\u5411\u91cf\u5716\u5f62"}),"\u5411\u91cf\u5716\u5f62"),(0,r.kt)("p",null,"\u65b0\u6b3eNeoChromVG\u52a0\u901f\u5668\u53ef\u52a0\u901f\u5411\u91cf\u5716\u5f62\u3002 \u6b64\u529f\u80fd\u662f\u5728\u4ee5TouchGFX\u6e32\u67d3SVG\u5716\u50cf\u6642\u4f7f\u7528\u3002 GPU2D\u5716\u5f62\u52a0\u901f\u5668\u9700\u8981\u4f7f\u7528\u540d\u70ba\u6a21\u677f\u7de9\u885d\u5340\u7684\u984d\u5916\u7de9\u885d\u5340\u3002 \u6b64\u7de9\u885d\u5340\u8207\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5c3a\u5bf8\u76f8\u540c\uff0c\u4e0d\u904e\u6bcf\u50cf\u7d20\u53ea\u67091\u500b\u4f4d\u5143\u7d44\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u82e5\u60a8\u7684\u5f71\u50cf\u7de9\u885d\u5340\u70ba480 x 480 (24bpp)\uff0c\u6a21\u677f\u7de9\u885d\u5340\u5c31\u5fc5\u9808\u70ba480 * 480 = 230.400\u4f4d\u5143\u7d44\u3002 \u8acb\u52d9\u5fc5\u5c07\u6a21\u677f\u7de9\u885d\u5340\u5206\u914d\u81f3\u5feb\u901fSRAM\u4ee5\u7372\u5f97\u6700\u4f73\u6548\u80fd\u3002"),(0,r.kt)("p",null,"\u6a21\u677f\u7de9\u885d\u5340\u662f\u7531TouchGFX Generator\u8ca0\u8cac\u5206\u914d\u3002 \u8acb\u53c3\u95b1",(0,r.kt)("a",o({parentName:"p"},{href:"../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering"}),"\u6b64\u4efd"),"\u6307\u5357\u3002"),(0,r.kt)("h2",o({},{id:"\u5229\u7528neochrom\u7e2e\u77ed\u6e32\u67d3\u6642\u9593"}),"\u5229\u7528NeoChrom\u7e2e\u77ed\u6e32\u67d3\u6642\u9593\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7bc4\u4f8b\u8aaa\u660eNeoChrom\u5c0dDMA2D\u53ca\u8edf\u9ad4\u6e32\u67d3\u63d0\u4f9b\u7684\u52a0\u901f\u6548\u679c\u3002 \u6211\u5011\u4f7f\u7528Designer\u5efa\u7acb\u4e86\u5169\u500b\u5c08\u6848\u3002 \u7b2c\u4e00\u500b\u5c08\u6848\u986f\u793a\u5728Box\u80cc\u666f\u4e0a\u7684Image\uff0c \u7b2c\u4e8c\u500b\u5c08\u6848\u5247\u662f\u986f\u793a\u5728Box\u80cc\u666f\u4e0a\u7684\u7d0b\u7406\u6620\u5c04\u5668\u5c0f\u5de5\u5177\u3002 \u5c0f\u5de5\u5177\u6703\u5728\u6bcf\u500b\u756b\u9762\u91cd\u7e6a\u3002  \u5728\u4ee5\u4e0a\u5169\u500b\u7bc4\u4f8b\u4e2d\uff0c\u9ede\u9663\u5716\u5927\u5c0f\u70ba128x128\u3001\u63a1\u7528ARGB8888\u683c\u5f0f\uff0c\u4e26\u5132\u5b58\u65bc\u5167\u90e8Flash\u3002 \u5f71\u50cf\u7de9\u885d\u5340\u70baRGB565\u683c\u5f0f\u3002"),(0,r.kt)(a.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-image.webp",mdxType:"Figure"},"\u5716\u50cf\u5c08\u6848"),(0,r.kt)(a.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-texturemapper.webp",mdxType:"Figure"},"\u7d0b\u7406\u6620\u5c04\u5668\u5c08\u6848"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5169\u500b\u5c08\u6848\u90fd\u662f\u5728STM32F746\u53caSTM32U5A9\u63a2\u7d22\u958b\u767c\u677f\u57f7\u884c\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u5c07GPIO\u9023\u63a5\u81f3\u908f\u8f2f\u5206\u6790\u5100\u4ee5\u6e2c\u91cf\u6e32\u67d3\u6642\u9593\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-image.webp",mdxType:"Figure"},"STM32F746\u57f7\u884c\u5716\u50cf\u5c08\u6848"),(0,r.kt)("p",null,"\u4e0a\u5716\u986f\u793a\u5728STM32F746\u57f7\u884c\u6642\u7684\u756b\u9762\u64ad\u653e\u901f\u7387\u53ca\u6e32\u67d3\u6642\u9593\u3002 \u901a\u905300\u986f\u793aVSYNC\u8a0a\u865f\u3002 \u6211\u5011\u53ef\u4ee5\u767c\u73fe\u986f\u793a\u5668\u4ee516.9 ms(A1\u81f3A2)\u7684\u756b\u9762\u9593\u9694\u6642\u9593\u904b\u4f5c\uff0c\u76f8\u7576\u65bc\u756b\u9762\u64ad\u653e\u901f\u738759.2 Hz\u3002 \u901a\u905301\u986f\u793a\u6e32\u67d3\u6642\u9593(\u6e32\u67d3\u6642\u504f\u9ad8\uff0cB1\u81f3B2)\u3002 \u5716\u50cf\u6e32\u67d3\u7684\u6642\u9593\u70ba1.3 ms\u3002 \u5716\u50cf\u5728STM32F746\u7684\u6e32\u67d3\u901f\u5ea6\u76f8\u7576\u5feb\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-texturemapper.webp",mdxType:"Figure"},"STM32F746\u57f7\u884c\u7d0b\u7406\u6620\u5c04\u5668\u5c08\u6848"),(0,r.kt)("p",null,"\u4e0a\u5716\u662f\u5728STM32F746\u57f7\u884c\u7684\u7d0b\u7406\u6620\u5c04\u5668\u5c08\u6848\u3002 \u7d0b\u7406\u6620\u5c04\u5668\u7684\u6e32\u67d3\u6642\u9593\u70ba4.5 ms\u3002 \u7d0b\u7406\u6620\u5c04\u5668\u5c0f\u5de5\u5177\u7684\u901f\u5ea6\u6bd4Image\u6162\u5f88\u591a\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u5a9-image.webp",mdxType:"Figure"},"STM32U5A9\u57f7\u884c\u5716\u50cf\u5c08\u6848"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u57f7\u884c\u5716\u50cf\u5c08\u6848\u7684STM32U5A9\u63a2\u7d22\u5957\u4ef6\u3002 STM32U5A9\u63a2\u7d22\u5957\u4ef6\u986f\u793a\u5668\u7684\u986f\u793a\u5668\u756b\u9762\u9593\u9694\u6642\u9593\u70ba12.26 ms\uff0c\u76f8\u7576\u65bc\u756b\u9762\u64ad\u653e\u901f\u738781.6 Hz\u3002 \u5716\u50cf\u7684\u6e32\u67d3\u6642\u9593\u70ba0.7 ms\u3002 \u6211\u5011\u53ef\u4ee5\u767c\u73fe\u5716\u50cf\u5c0f\u5de5\u5177\u6bd4\u5728STM32F746\u5957\u4ef6\u7684\u901f\u5ea6\u66f4\u5feb\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u5a9-texturemapper.webp",mdxType:"Figure"},"STM32U5A9\u57f7\u884c\u7d0b\u7406\u6620\u5c04\u5668\u5c08\u6848"),(0,r.kt)("p",null,"\u7d0b\u7406\u6620\u5c04\u5668\u7684\u6e32\u67d3\u6642\u9593\u70ba1.7 ms\u3002 \u7d0b\u7406\u6620\u5c04\u5668\u5728STM32U5A9\u7684\u901f\u5ea6\u4e5f\u6bd4\u5728STM32F746\u66f4\u5feb\u3002"),(0,r.kt)("h3",o({},{id:"\u6e32\u67d3\u6642\u9593\u6458\u8981"}),"\u6e32\u67d3\u6642\u9593\u6458\u8981"),(0,r.kt)("p",null,"\u4e0b\u8868\u986f\u793a\u6e32\u67d3\u6642\u9593\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5143\u7d20")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"STM32F746")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"STM32U5A9")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u589e\u901f")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u983b\u7387"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"200 MHz"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"160 MHz"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"0.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5716\u50cf"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"1.3 ms"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"0.7 ms"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"~2\u500d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7d0b\u7406\u6620\u5c04\u5668"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"4.5 ms"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"1.7 ms"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"~3\u500d")))),(0,r.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u767c\u73fe\u5373\u4f7f\u6e1b\u5c11\u6642\u8108\u983b\u7387\uff0cSTM32U5A9\u4ecd\u7136\u5927\u5e45\u8d85\u8d8aSTM32F746\uff0c\u7279\u5225\u662f\u5728\u57f7\u884c\u7d0b\u7406\u6620\u5c04\u5668\u7684\u6642\u5019\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u7d50\u679c\u662f\u4ee5\u5167\u90e8Flash\u5716\u50cf\u53caSTM32F746\u5916\u90e8SDRAM\u7684\u5f71\u50cf\u7de9\u885d\u5340\u6e2c\u91cf\u6240\u5f97\u3002 \u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u65bcSTM32U5A9\u7684\u5167\u90e8SRAM\u4e4b\u4e2d(\u56e0\u70ba\u4e00\u822c\u60c5\u5883\u5c31\u662f\u5982\u6b64)\u3002 \u5c07\u5716\u50cf\u79fb\u5f80\u5916\u90e8Flash\u6703\u5c0dSTM32F746\u9020\u6210\u4e0d\u826f\u5f71\u97ff\uff0c\u56e0\u70ba\u5176\u4e2d\u4f7f\u7528QSPI\u5feb\u9583\u8a18\u61b6\u9ad4(4\u4f4d\u5143\u532f\u6d41\u6392)\uff0c\u800cSTM32U5A9\u4f7f\u7528\u7684\u662f\u66f4\u5feb\u7684OSPI\u5feb\u9583\u8a18\u61b6\u9ad4(8\u4f4d\u5143\u532f\u6d41\u6392)\u3002"),(0,r.kt)("p",null,"STM32F746\u63a2\u7d22\u5957\u4ef6\u57f7\u884c\u6642\u53ef\u4f7f\u7528\u5167\u90e8RAM\u7684480x272 RGB565\u5f71\u50cf\u7de9\u885d\u5340\u3002 \u9019\u6a23\u53ef\u4ee5\u63d0\u5347\u6548\u80fd(\u5716\u50cf\u964d\u4f4e\u70ba1.03 ms)\uff0c\u4f46\u9019\u4e26\u4e0d\u662fSTM32F746\u7684\u6a19\u6e96\u8a2d\u5b9a\uff0c\u56e0\u70ba\u5176\u4e2d\u4f7f\u7528\u975e\u5e38\u5927\u90e8\u5206\u7684\u5167\u90e8SRAM\u4f5c\u70ba\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u53ea\u7559\u4e0b\u5f88\u5c11\u7684RAM\u7528\u65bc\u5176\u4ed6\u61c9\u7528\u7a0b\u5f0f\u5143\u4ef6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ee5\u55ae\u4e00\u5f71\u50cf\u7de9\u885d\u5340\u57f7\u884c\u4e5f\u4e0d\u9069\u7528\u65bc\u6240\u6709\u7684\u61c9\u7528\u3002"),(0,r.kt)("h3",o({},{id:"\u66f4\u8c50\u5bcc\u7684\u4f7f\u7528\u8005\u4ecb\u9762"}),"\u66f4\u8c50\u5bcc\u7684\u4f7f\u7528\u8005\u4ecb\u9762"),(0,r.kt)("p",null,"\u6e32\u67d3\u6548\u80fd\u7372\u5f97\u63d0\u5347\u5f8c\uff0c\u53ef\u7528\u65bc\u5efa\u7acb\u5177\u6709\u66f4\u591a\u9032\u968e\u52d5\u756b\u7684\u4f7f\u7528\u8005\u4ecb\u9762\uff0c \u4f8b\u5982\u66f4\u591a\u7e2e\u653e\u6216\u65cb\u8f49\u7684\u5143\u7d20\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","STM32F746\u7684\u986f\u793a\u5237\u65b0\u6642\u9593\u70ba16.8 ms\u3002 \u9019\u4ee3\u8868\u61c9\u7528\u7a0b\u5f0f\u5fc5\u9808\u8b93\u6e32\u67d3\u6642\u9593\u4f4e\u65bc\u524d\u8ff0\u6642\u9593\uff0c\u4ee5\u4fbf\u5c07\u756b\u9762\u64ad\u653e\u901f\u7387\u7dad\u6301\u572860 fps\u3002 \u56e0\u6b64\u6211\u5011\u5728\u9019\u6a23\u7684\u8907\u96dc\u5ea6\u60c5\u6cc1\u4e0b(16.8 ms/4.48 ms)\uff0c\u756b\u9762\u4e0a\u6700\u591a\u53ef\u67093.75\u500b\u7d0b\u7406\u6620\u5c04\u5668\uff0c\u6216\u662f\u5c3a\u5bf8247 x 247\u7684\u55ae\u4e00\u5927\u578b\u7d0b\u7406\u6620\u5c04\u5668(\u50cf\u7d20\u6578\u76f8\u540c\uff0c\u6e32\u67d3\u6642\u9593\u5927\u81f4\u76f8\u540c)\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u6211\u5011\u5047\u8a2d\u756b\u9762\u5237\u65b0\u7387\u76f8\u540c\uff0c\u4f46\u4f7f\u7528STM32U5A9 CPU\uff0c\u5c31\u53ef\u4ee5\u670914.36\u500b\u7d0b\u7406\u6620\u5c04\u5668(16.8 ms/1.17 ms)\uff0c\u6216\u662f\u5c3a\u5bf8485 x 485\u7684\u55ae\u4e00\u7d0b\u7406\u6620\u5c04\u5668\u3002"),(0,r.kt)("p",null,"\u4e0b\u5716\u986f\u793a\u5206\u5225\u5728STM32F746\u53caSTM32U5A9\u57f7\u884c\u7684\u5169\u500b\u61c9\u7528\u7a0b\u5f0f\u3002 \u5176\u4e2d\u7684\u6982\u5ff5\u662f\u88fd\u4f5c\u985e\u4f3c\u6d6e\u52d5\u5207\u63db\u7684\u9078\u55ae\uff0c\u5143\u7d20\u6703\u5728\u79fb\u5f80\u4e2d\u9593\u6642\u653e\u5927\uff0c\u4e26\u65bc\u9060\u96e2\u6642\u7e2e\u5c0f(\u6211\u5011\u5728\u6b64\u50c5\u5c0d\u6240\u6709\u5143\u7d20\u4f7f\u7528\u76f8\u540c\u7d0b\u7406)\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/comparison-f746-u5a9.webp",mdxType:"Figure"},"STM32F746(\u5de6\u5074)\u5177\u6709480x272\u50cf\u7d20\u986f\u793a\uff0c\u800cSTM32U5A9(\u53f3\u5074)\u5247\u662f\u5728480x480\u986f\u793a\u57f7\u884c\u4ee5\u7d0b\u7406\u6620\u5c04\u5668\u70ba\u57fa\u790e\u7684\u6d6e\u52d5\u5207\u63db\u5c08\u6848\u3002"),(0,r.kt)("p",null,"STM32F746\u80fd\u5920\u986f\u793a\u4e09\u500b\u5716\u793a\uff0c\u4e00\u500b\u662f\u653e\u59271.9\u500d\u7684\u5927\u5716\u793a\uff0c\u4ee5\u53ca\u5169\u500b\u5c0f\u5716\u793a\u3002 STM32U5A9\u80fd\u5920\u986f\u793a7\u500b\u5716\u793a\u3002 \u6700\u5927\u7684\u5716\u793a\u53ef\u653e\u59272.7\u500d\u3002"),(0,r.kt)("p",null,"\u5177\u67093\u500b\u5716\u793a\u7684\u61c9\u7528\u7a0b\u5f0f\u5728STM32F746\u7684\u6e32\u67d3\u6642\u9593\u70ba14.38 ms\u3002 \u5177\u67097\u500b\u5716\u793a\u7684\u61c9\u7528\u7a0b\u5f0f\u5728STM32U5A9\u7684\u6e32\u67d3\u6642\u9593\u70ba14.93 ms\u3002 \u9019\u5169\u9805UI\u90fd\u80fd\u4ee560 fps\u57f7\u884c\uff0c\u800cSTM32U5A9\u53ef\u7528\u8f03\u9ad8\u89e3\u6790\u5ea6\u986f\u793a\u66f4\u591a\u5167\u5bb9\u3002"),(0,r.kt)("h2",o({},{id:"\u52a0\u901f\u5411\u91cf\u5716\u5f62"}),"\u52a0\u901f\u5411\u91cf\u5716\u5f62"),(0,r.kt)("p",null,"\u65b0\u6b3eNeoChromVG\u52a0\u901f\u5668\u80fd\u5920\u52a0\u901f\u5411\u91cf\u5716\u5f62\u3002 \u9019\u53ef\u4ee5\u958b\u5275\u53ef\u80fd\u6027\uff0c\u5be6\u73fe\u5404\u7a2e\u5168\u65b0\u985e\u5225\u61c9\u7528\u7a0b\u5f0f\uff1b\u5176\u4e2d\u662f\u7531\u5411\u91cf\u5716\u5f62\u626e\u6f14\u6838\u5fc3\u89d2\u8272\uff0c\u800c\u4e0d\u662f\u9ede\u9663\u5716\u3002"),(0,r.kt)("p",null,"\u7bc4\u4f8b\u4e4b\u4e00\u5c31\u662f\u5730\u5716\u61c9\u7528\u7a0b\u5f0f\u3002 \u5730\u5716\u53ef\u5229\u7528\u9ede\u9663\u5716\u5efa\u69cb\uff0c\u4e0d\u904e\u901a\u5e38\u9700\u8981\u975e\u5e38\u5927\u7684\u5132\u5b58\u5bb9\u91cf\uff0c\u6216\u662f\u9700\u8981\u4e8b\u5148\u4e0b\u8f09\u7279\u5b9a\u7684\u5730\u5716\u5340\u6bb5\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5f71\u7247\u986f\u793a\u5728STM32U5G9\u57f7\u884c\u7684\u793a\u7bc4\u61c9\u7528\u7a0b\u5f0f\u3002 \u61c9\u7528\u7a0b\u5f0f\u7e2e\u653e\u3001\u65cb\u8f49\u53ca\u5e73\u79fb\u4ee5\u5411\u91cf\u5b9a\u7fa9\u7e6a\u88fd\u7684\u5730\u5716(\u591a\u500b\u591a\u908a\u5f62\u586b\u5145\u4e0d\u540c\u8272\u5f69\u53ca\u7b46\u89f8)\u3002 \u5f71\u7247\u662f\u4ee5800 x 480\u986f\u793a\u642d\u914d16bpp\u8272\u5f69\u5168\u87a2\u5e55\u57f7\u884c\u3002"),(0,r.kt)(l.Z,{width:"40%",height:"40%",url:"/videos/development/scenarios/touchgfx-on-gpu2d/tigermap.mp4",mdxType:"LoopVideo"},"STM32U5G9\u986f\u793a\u79fb\u52d5\u4e2d\u7684\u5730\u5716\u3002"),(0,r.kt)("h3",o({},{id:"svg"}),"SVG"),(0,r.kt)("p",null,"NeoChromVG\u52a0\u901f\u5668\u53ef\u5927\u5e45\u63d0\u5347\u7e6a\u88fdSVG\u5716\u50cf\u7684\u6548\u80fd\u3002 TouchGFX\u6703\u81ea\u52d5\u5229\u7528\u53ef\u7528\u786c\u9ad4\u3002 \u6211\u5011\u5c07\u4ee5\u7c21\u6613\u7bc4\u4f8b\u986f\u793a\u63d0\u5347\u7684\u6548\u80fd\u3002 \u6211\u5011\u5c07\u7e6a\u88fd152x152\u50cf\u7d20\u5927\u5c0f\u7684SVG\u5716\u50cf\uff0c\u5206\u5225\u5728STM32F746\u4ee5\u8edf\u9ad4\u6e32\u67d3\u7e6a\u88fd\u3001\u5728STM32H7S\u4ee5NeoChrom\u7e6a\u88fd\uff0c\u4ee5\u53ca\u5728STM32U5G9\u4ee5NeoChromVG\u7e6a\u88fd\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/svg.png",mdxType:"Figure"},"152 x 152\u50cf\u7d20\u5c3a\u5bf8\u7684\u7c21\u6613SVG\u7e6a\u88fd\u3002"),(0,r.kt)("p",null,"\u4e0b\u8868\u986f\u793aSVG\u5716\u50cf\u7684\u6e32\u67d3\u6642\u9593\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5fae\u63a7\u5236\u5668")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u52a0\u901f\u5668")),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u6e32\u67d3\u6642\u9593/ms"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32F746"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"4.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5G9"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChromVG"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"0.97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"STM32H7S8"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"2.8")))),(0,r.kt)("p",null,"\u8acb\u53c3\u95b1",(0,r.kt)("a",o({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/svg"}),"SVG"),"\u4ee5\u9032\u4e00\u6b65\u77ad\u89e3\u5982\u4f55\u5728TouchGFX\u4e4b\u4e2d\u4f7f\u7528SVG\u3002"),(0,r.kt)("h3",o({},{id:"\u5411\u91cf\u5b57\u578b"}),"\u5411\u91cf\u5b57\u578b"),(0,r.kt)("p",null,"NeoChrom\u53caNeoChromVG\u4e5f\u80fd\u52a0\u901f\u7e6a\u88fd\u5411\u91cf\u5b57\u578b\u3002 \u60a8\u53ef\u900f\u904e",(0,r.kt)("a",o({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/vector-fonts"}),"\u5411\u91cf\u5b57\u578b"),"\u9019\u7bc7\u6587\u7ae0\u9032\u4e00\u6b65\u77ad\u89e3\u5982\u4f55\u4f7f\u7528\u5411\u91cf\u5b57\u578b\u3002"),(0,r.kt)("h2",o({},{id:"\u5efa\u7acb\u5c08\u6848"}),"\u5efa\u7acb\u5c08\u6848"),(0,r.kt)("p",null,"CubeMX\u53caTouchGFX Generator\u652f\u63f4NeoChrom\u3002 \u5728CubeMX\u4e4b\u4e2d\uff0c\u52a0\u901f\u5668\u662f\u4ee5\u5176\u7a0b\u5f0f\u78bc\u540d\u7a31GPU2D\u70ba\u540d\u3002 \u5982\u679c\u5728CubeMX\u7684TouchGFX\u8a2d\u5b9a\u4e2d\u555f\u7528GPU2D\uff0c\u5247GPU2D\u52a0\u901f\u5668\u5c31\u53ea\u6703\u63d0\u4f9b\u7d66TouchGFX\u4f7f\u7528\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u60a8\u4f7f\u7528TouchGFX Designer\u63d0\u4f9b\u7684\u4efb\u4f55TouchGFX TBS(\u7bc4\u672c\u5c08\u6848)\uff0c\u5247\u524d\u8ff0\u8a2d\u5b9a\u5df2\u7d93\u5b8c\u6210\u3002 \u5982\u679c\u60a8\u88fd\u4f5c\u81ea\u5df1\u7684\u5ba2\u88fd\u5c08\u6848\uff0c\u8acb\u52d9\u5fc5\u5982\u4ee5\u4e0b\u6240\u793a\u555f\u7528GPU2D\u52a0\u901f\u5668\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/cubemx-u5a9-configuration.webp",mdxType:"Figure"},"\u5728CubeMX\u555f\u7528GPU2D (NeoChrom)"),(0,r.kt)("p",null,"\u555f\u7528GPU2D\u4e4b\u5f8c\uff0c\u8acb\u5728CubeMX\u6309\u4e0b\u300cGenerate Code\u300d(\u7522\u751f\u7a0b\u5f0f\u78bc)\u3002 \u9019\u6a23\u6703\u91cd\u65b0\u7522\u751f\u76ee\u6a19\u8a2d\u5b9a\u7a0b\u5f0f\u78bc\u3002 \u73fe\u5728\u8acb\u65bcTouchGFX Designer\u958b\u555f\u5c08\u6848\uff0c\u4e26\u4e5f\u5728\u5176\u4e2d\u7522\u751f\u7a0b\u5f0f\u78bc(F4)\u3002"),(0,r.kt)("p",null,"Designer\u6703\u7522\u751f\u8207\u76ee\u6a19\u8a2d\u5b9a\u76f8\u7b26\u7684\u8cc7\u7522(\u5f71\u50cf\u3001\u5b57\u578b\u53ca\u6587\u5b57)\u548c\u6a21\u64ec\u5668\u7a0b\u5f0f\u78bc\u3002 \u60a8\u73fe\u5728\u5df2\u6e96\u5099\u597d\u7de8\u8b6f\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u662f\u7531Designer\u555f\u52d5\u5c08\u6848\uff0c\u5c31\u4e0d\u9700\u8981\u958b\u555fCubeMX\uff0c\u9664\u975e\u60a8\u9700\u8981\u8b8a\u66f4\u67d0\u4e9b\u786c\u9ad4\u8a2d\u5b9a\u3002"),(0,r.kt)("h2",o({},{id:"\u5f71\u50cf\u7de9\u885d\u5340\u683c\u5f0f"}),"\u5f71\u50cf\u7de9\u885d\u5340\u683c\u5f0f"),(0,r.kt)("p",null,"STM32U5A9\u63a2\u7d22\u958b\u767c\u677f\u652f\u63f4\u4e09\u7a2e\u5f71\u50cf\u7de9\u885d\u5340\u683c\u5f0f\uff1aRGB565\u3001RGB888\u3001ARGB8888\u3002 \u9019\u4e9b\u683c\u5f0f\u53ef\u7531CubeMX\u8a2d\u5b9a\u3002"),(0,r.kt)("h2",o({},{id:"neochrom\u7684\u9650\u5236"}),"NeoChrom\u7684\u9650\u5236"),(0,r.kt)("p",null,"NeoChrom\u53caNeoChromVG\u5716\u5f62\u52a0\u901f\u5668\u4e26\u4e0d\u652f\u63f4TouchGFX\u7684L8\u5716\u50cf\u683c\u5f0f(L8_RGB565\u3001L8_RGB888\u3001L8_ARGB8888)\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u60a8\u5728STM32U5A9\u57f7\u884c\u7684TouchGFX\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u524d\u8ff0\u5716\u50cf\u683c\u5f0f\uff0c\u5c31\u6703\u4f7f\u7528DMA2D\u7e6a\u88fd\u5716\u50cf\u3002 \u5982\u679c\u60a8\u4ee5\u53ef\u7e2e\u653e\u5716\u50cf\u6216\u7d0b\u7406\u6620\u5c04\u5668\u4f7f\u7528\u524d\u8ff0\u683c\u5f0f\uff0c\u5c31\u6703\u4f7f\u7528\u8edf\u9ad4\u505a\u70ba\u5f8c\u63f4\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u6211\u5011\u5efa\u8b70\u4e0d\u8981\u4ee5\u5177\u6709NeoChrom/NeoChromVG\u52a0\u901f\u5668\u7684\u5fae\u63a7\u5236\u5668\u4f7f\u7528L8\u5716\u50cf\u3002"),(0,r.kt)("p",null,"\u76f8\u8f03\u65bcNeoChromeVG\uff0cNeoChrom\u5716\u5f62\u52a0\u901f\u5668\u6703\u5728\u4ee5\u300c\u586b\u5145\u975e\u96f6\u74b0\u7e5e\u6578\u898f\u5247\u300d\u7e6a\u88fd\u7684\u5716\u5f62\u5143\u7d20\u4e0a\u5efa\u7acb\u6b21\u4f73\u6297\u92f8\u9f52\u3002 \u9019\u53ef\u80fd\u767c\u751f\u5728\u5c07\u586b\u5145\u898f\u5247\u6307\u5b9a\u70ba\u300c\u975e\u96f6\u300d\u7684SVG\u6a94\u6848\u3002 \u5982\u679c\u8981\u907f\u514d\u9019\u7a2e\u60c5\u6cc1\uff0c\u53ef\u4ee5\u4f7f\u7528\u300c\u5947\u5076\u300d\u586b\u5145\u898f\u5247\uff0c\u4f46\u4e26\u4e0d\u662f\u5c0d\u6240\u6709\u7e6a\u88fd\u90fd\u6709\u6548\u3002"))}N.isMDXComponent=!0}}]);