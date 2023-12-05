"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[56928],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(32118);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},61668:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(59496),a=n(45924),l=n(10496),o=n(51721),i=n(9654),c=n(48199);const u={cardContainer:"cardContainer_KVQB",cardTitle:"cardTitle_RPrv",cardDescription:"cardDescription_aERY"};function p({href:e,children:t}){return r.createElement(o.Z,{href:e,className:(0,a.Z)("card padding--lg",u.cardContainer)},t)}function m({href:e,icon:t,title:n,description:l}){return r.createElement(p,{href:e},r.createElement("h2",{className:(0,a.Z)("text--truncate",u.cardTitle),title:n},t," ",n),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:l},l))}function d({item:e}){const t=(0,l.Wl)(e);return t?r.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function s({item:e}){const t=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const a=(0,l.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var o;return r.createElement(m,{href:e.href,icon:t,title:e.label,description:null!==(o=e.description)&&void 0!==o?o:null==a?void 0:a.description})}function h({item:e}){switch(e.type){case"link":return r.createElement(s,{item:e});case"category":return r.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function g({className:e}){const t=(0,l.jA)();return r.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,f({},e));const o=(0,l.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},81607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>s});n(59496);var r=n(49613),a=n(12822),l=n(61668),o=n(10496);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"touchgfx-al-development-introduction",title:"TouchGFX AL \u958b\u767c\u7c21\u4ecb",sidebar_label:"TouchGFX AL \u958b\u767c\u7c21\u4ecb"},p=void 0,m={unversionedId:"development/touchgfx-hal-development/touchgfx-al-development-introduction",id:"development/touchgfx-hal-development/touchgfx-al-development-introduction",title:"TouchGFX AL \u958b\u767c\u7c21\u4ecb",description:"\u5c08\u6848\u6d3b\u52d5",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",sourceDirName:"development/touchgfx-hal-development",slug:"/development/touchgfx-hal-development/touchgfx-al-development-introduction",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-al-development-introduction",title:"TouchGFX AL \u958b\u767c\u7c21\u4ecb",sidebar_label:"TouchGFX AL \u958b\u767c\u7c21\u4ecb"},sidebar:"docs",previous:{title:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",permalink:"/4.23/zh-TW/docs/development/board-bring-up/how-to/11-flash-loader"},next:{title:"\u62bd\u8c61\u5c64\u67b6\u69cb",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/touchgfx-architecture"}},d={},s=[{value:"\u62bd\u8c61\u5c64\u7684\u8077\u8cac",id:"responsibilities-of-the-abstraction-layer",level:2},{value:"\u7bc4\u4f8b\u8a2d\u5b9a\uff1a\u96d9\u5f71\u50cf\u7de9\u885d\u5340\u2013\u5167\u5efaLTDC\u7684MCU",id:"example-setup-two-framebuffers---mcu-with-ltdc",level:2}],h={toc:s},f="wrapper";function g(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(f,i({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/activities-selected-002.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u5c08\u6848\u6d3b\u52d5"),(0,r.kt)("p",null,"\u4f4d\u65bcTouchGFX\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684TouchGFX\u62bd\u8c61\u5c64(AL)\u662f\u8edf\u9ad4\u5143\u4ef6\uff0c\u4f4d\u65bc\u521d\u555f\u7528\u958b\u767c\u677f\u968e\u6bb5(Board Bring-Up phase)\u6240\u958b\u767c\u7684\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc(Board Initialization Code)\u8207TouchGFX\u5f15\u64ce\u4e4b\u9593\u3002 \u5176\u4e3b\u8981\u4efb\u52d9\u662f\u5c07\u5f15\u64ce\u8207\u5e95\u5c64\u786c\u9ad4\u548c\u4f5c\u696d\u7cfb\u7d71\u76f8\u7d50\u5408\u3002 \u9019\u662f\u85c9\u7531\u5c07\u5e95\u5c64\u786c\u9ad4\u53ca\u4f5c\u696d\u7cfb\u7d71\u62bd\u8c61\u5316\u4f86\u9054\u6210\uff0c\u56e0\u6b64\u5f15\u64ce\u4fbf\u53ef\u5c0dAL\u4f5c\u4e00\u81f4\u7684\u8655\u7406\u3002"),(0,r.kt)("p",null,"AL\u7531\u5169\u500b\u4e0d\u540c\u7684\u90e8\u5206\u7d44\u6210\uff0c\u5206\u5225\u70ba\u786c\u9ad4\u62bd\u8c61\u5c64\uff08HAL\uff09\u548c\u4f5c\u696d\u7cfb\u7d71\u62bd\u8c61\u5c64\uff08OSAL\uff09\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/components-selected-002.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u5c08\u6848\u5143\u4ef6"),(0,r.kt)("p",null,"\u672c\u7bc0\u5c07\u7c21\u4ecb\u62bd\u8c61\u5c64\u7684\u539f\u7406\u548c\u5176\u6240\u626e\u6f14\u7684\u89d2\u8272\uff0c\u4ee5\u53ca\u5b83\u5982\u4f55\u8207TouchGFX\u5f15\u64ce\u4e92\u52d5\u3002"),(0,r.kt)("p",null,"\u60a8\u4e5f\u5c07\u900f\u904e\u7c21\u4ecb\u77ad\u89e3TouchGFX Generator\u3002 TouchGFX Generator\u5c6c\u65bcX-CUBE-TOUCHGFX\u7684\u4e00\u90e8\u5206\uff0c\u662f\u5efa\u7acb\u62bd\u8c61\u5c64\u7684",(0,r.kt)("em",{parentName:"p"},"\u4e3b\u8981"),"\u5de5\u5177\u3002 \u9019\u662fSTM32CubeMX\u7684\u984d\u5916\u8edf\u9ad4\u5143\u4ef6\uff0c\u53ef\u5354\u52a9\u958b\u767c\u4eba\u54e1\u8a2d\u5b9aTouchGFX AL\u4ee5\u4fbf\u65bc\u5176\u786c\u9ad4\u5e73\u53f0\u57f7\u884c\u3002 \u6839\u64da\u73fe\u6709\u7684STM32CubeMX\u8a2d\u5b9a\u8207\u4f7f\u7528\u8005\u7684\u8f38\u5165\uff0cTouchGFX Generator\u5c07\u7522\u751f\u6240\u9700\u6a94\u6848\uff0c\u7528\u65bc\u8a2d\u5b9a\u53ef\u904b\u4f5c\u7684TouchGFX\u61c9\u7528\u7a0b\u5f0f\uff0c \u5305\u542b\u4e86TouchGFX HAL\u3001TouchGFX OSAL\u548cTouchGFX\u8a2d\u5b9a\u3002"),(0,r.kt)("p",null,"\u5f8c\u7e8c\u7ae0\u7bc0\u5c07\u5354\u52a9\u60a8\u77ad\u89e3TouchGFX AL\u7684\u4e00\u822c\u67b6\u69cb\u3002 \u60a8\u4e5f\u5c07\u7372\u5f97",(0,r.kt)("em",{parentName:"p"},"\u4f7f\u7528\u8005\u6307\u5357"),"\uff0c\u4ee5\u77ad\u89e3\u5982\u4f55\u5728STM32CubeMX\u5167\u90e8\u4f7f\u7528TouchGFX Generator\u3002 \u5176\u4e2d\u4e5f\u6703\u63d0\u4f9b\u5404\u7a2e\u5be6\u7528\u7684\u4f7f\u7528\u60c5\u5883\uff0c\u5354\u52a9\u60a8\u9762\u5c0d\u5e38\u898b\u7684\u4f7f\u7528\u6848\u4f8b\u3002"),(0,r.kt)(l.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("h2",i({},{id:"responsibilities-of-the-abstraction-layer"}),"\u62bd\u8c61\u5c64\u7684\u8077\u8cac"),(0,r.kt)("p",null,"\u5982\u540c\u5728\u57fa\u672c\u6982\u5ff5\u7ae0\u7bc0\u4e2d\u7684",(0,r.kt)("a",i({parentName:"p"},{href:"../../basic-concepts/rendering"}),"\u4e3b\u8ff4\u5708"),"\u90e8\u5206\u6240\u8ff0\uff0cTouchGFX \u5f15\u64ce\u5177\u6709\u57f7\u884c\u4e09\u500b\u57fa\u672c\u6b65\u9a5f\u7684\u4e3b\u8ff4\u5708\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6536\u96c6\u8f38\u5165\u4fe1\u865f\uff08\u89f8\u63a7\u5ea7\u6a19\u3001\u6309\u9215\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u5834\u666f\u6a21\u578b"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u5834\u666f\u6a21\u578b\u6e32\u67d3\u5230\u5e40\u7de9\u5b58")),(0,r.kt)("p",null,"\u9019\u4e09\u500b\u6b65\u9a5f\u78ba\u4fdd\u4e86TouchGFX\u5f15\u64ce\u7684\u4e3b\u8981\u8077\u8cac\uff0c\u5373\u900f\u904e\u66f4\u65b0\u5f71\u50cf\u7de9\u885d\u5340\u4f86\u53cd\u6620\u61c9\u7528\u7a0b\u5f0f\u7684\u7576\u524d\u72c0\u614b\u3002"),(0,r.kt)("p",null,"\u5f15\u64ce\u4e26\u4e0d\u76f4\u63a5\u8655\u7406\u5f71\u50cf\u7de9\u885d\u5340\u7684\u8cc7\u6599\u5230\u986f\u793a\u5668\u4e4b\u9593\u7684\u5be6\u969b\u50b3\u8f38\u4ee5\u53ca\u5c0d\u5916\u90e8\u8f38\u5165\u4fe1\u865f\u7684\u6536\u96c6\uff0c\u800c\u662f\u5f15\u64ce\u59d4\u8a17\u7d66TouchGFX AL\u4f86\u9054\u6210\u3002"),(0,r.kt)("p",null,"\u4e3b\u8ff4\u5708\u5c07\u53cd\u5fa9\u4e0d\u65b7\u5730\u66f4\u65b0\u5f71\u50cf\u7de9\u885d\u5340\u7684\u8cc7\u6599\u3002 \u9019\u500b\u904e\u7a0b\u5fc5\u9808\u4ee5\u300c\u5be6\u969b\u66f4\u65b0\u983b\u7387\u300d\u548c\u300c\u986f\u793a\u5668\u5c31\u7dd2\u72c0\u614b\u300d\u4fdd\u6301\u540c\u6b65\uff0c\u4ee5\u78ba\u4fdd\u6240\u6709\u5716\u6846\u756b\u9762\u5747\u88ab\u50b3\u8f38\u4e26\u986f\u793a\u5728\u986f\u793a\u5668\u4e0a\u3002 \u5982\u679c\u4e8c\u8005\u4e4b\u9593\u4e0d\u540c\u6b65\uff0c\u5247\u4e3b\u8ff4\u5708\u5c07\u4e0d\u65b7\u66f4\u65b0\u4e14\u6709\u53ef\u80fd\u5728\u66f4\u65b0\u904e\u7a0b\u4e2d\u5f71\u50cf\u7de9\u885d\u5340\u5728\u50b3\u8f38\u4e4b\u524d\u88ab\u8986\u5beb\u3002 \u9019\u9805\u540c\u6b65\u7684\u5de5\u4f5c\u7531AL\u8ca0\u8cac\u3002"),(0,r.kt)("p",null,"TouchGFX AL\u9084\u8ca0\u8cac\u63a7\u5236\u5f71\u50cf\u7de9\u885d\u5340\u7684\u8a18\u61b6\u9ad4\u5340\u57df\u53ca\u5176\u5b58\u53d6\u3002 \u9019\u610f\u5473\u8457\u5f71\u50cf\u7de9\u885d\u5340\u7684\u6240\u6709\u5b58\u53d6\u90fd\u900f\u904eAL\u4f86\u5b8c\u6210\u3002"),(0,r.kt)("p",null,"\u5177\u9ad4\u800c\u8a00\uff0cTouchGFX AL\u7684\u8077\u8cac\u70ba\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u8077\u8cac"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u5c07\u300cTouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\u300d\u8207\u300c\u986f\u793a\u50b3\u8f38\u300d\u540c\u6b65"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u7576\u4e0b\u4e00\u500b\u5716\u6846\u5df2\u5b8c\u6210\u8a08\u7b97\u4e26\u5728\u53ef\u7528\u7684\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u5b8c\u6210\u6e32\u67d3\u7b97\u5716\u6642\uff0c\u5f15\u64ce\u4e3b\u8ff4\u5708\u5fc5\u9808\u505c\u6b62\u4ee5\u78ba\u4fdd\u5f71\u50cf\u7de9\u885d\u5340\u5728\u88ab\u50b3\u8f38\u5230\u986f\u793a\u5668\u4e4b\u524d\u4e0d\u6703\u88ab\u8986\u5beb\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u56de\u5831\u89f8\u63a7\u53ca\u5be6\u9ad4\u6309\u9215\u4e8b\u4ef6"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u4ee5\u53d6\u6a23\u7684\u65b9\u5f0f\u4f86\u78ba\u77e5\u89f8\u63a7\u4e8b\u4ef6\u7684\u767c\u751f\u53ca\u4e26\u53d6\u5f97\u5176\u5ea7\u6a19\u8cc7\u8a0a\u3002 \u900f\u904e\u53d6\u6a23\u7684\u65b9\u5f0f\u4f86\u78ba\u5b9a\u5be6\u9ad4\u6309\u9215\u6216\u985e\u4f3c\u7684\u5143\u4ef6\u662f\u5426\u88ab\u555f\u52d5\uff08activated\uff09\u3002 \u5411\u5f15\u64ce\u56de\u5831\u9019\u4e9b\u4e8b\u4ef6\u3002 ",(0,r.kt)("br",null),"\u8981\u6ce8\u610f\u7684\u662f\u5176\u5b83\u7684\u5916\u90e8\u4e8b\u4ef6\u662f\u85c9\u7531\u4e0d\u540c\u7684\u6a5f\u5236\u50b3\u64ad\u5230TouchGFX\u61c9\u7528\u7a0b\u5f0f\u3002 \u5728",(0,r.kt)("a",i({parentName:"td"},{href:"../ui-development/touchgfx-engine-features/backend-communication"}),"\u5f8c\u7aef\u901a\u8a0a\uff08backend communication\uff09"),"\u7ae0\u7bc0\u6709\u66f4\u591a\u8cc7\u8a0a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u540c\u6b65\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5b58\u53d6"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u5f71\u50cf\u7de9\u885d\u5340\u8a18\u61b6\u9ad4\u662f\u7531TouchGFX AL\u6240\u8ca0\u8cac\uff0c\u7531\u65bc\u6703\u88ab\u5176\u5b83\u57f7\u884c\u55ae\u5143\uff08\u5982\u4e3b\u8ff4\u5708\u57f7\u884c\u7dd2\u548cDMA\uff09\u4f7f\u7528\uff0c\u56e0\u6b64TouchGFX AL\u5fc5\u9808\u63d0\u4f9b\u4fdd\u8b77\u6b64\u8a18\u61b6\u9ad4\u7684\u65b9\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u56de\u5831\u4e0b\u4e00\u500b\u53ef\u7528\u7684\u5f71\u50cf\u7de9\u885d\u5340"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"AL\u5fc5\u9808\u80fd\u56de\u7b54\u7576\u524d\u7684\u5f71\u50cf\u7de9\u885d\u5340\u6709\u90a3\u4e00\u500b\u90e8\u4efd\u53ef\u5728\u4e0b\u4e00\u500b\u53ef\u7528\u7684\u5f71\u50cf\u7de9\u885d\u5340\u7576\u4e2d\u66f4\u65b0\u3002 \u9019\u5728\u6a19\u6e96\u7684\u96d9\u5f71\u50cf\u7de9\u885d\u914d\u7f6e\u4e2d\u5373\u70ba\u5b8c\u6574\u7684\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u56e0\u70ba\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\u4e00\u76f4\u6709\u4e00\u500b\u5b8c\u6574\u7684\u5f71\u50cf\u7de9\u885d\u5340\u5c08\u9580\u7528\u65bc\u6e32\u67d3\u7b97\u5716\uff0c\u53e6\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u5340\u7528\u65bc\u986f\u793a\u5668\u7684\u50b3\u8f38\u3002 \u4f46\u5728\u55ae\u4e00\u6216\u662f\u5c40\u90e8\u5f71\u50cf\u7de9\u885d\u5340\u7684\u914d\u7f6e\u4e0b\u60c5\u6cc1\u5c31\u6bd4\u8f03\u8907\u96dc\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u57f7\u884c\u6e32\u67d3\u7b97\u5716\uff08render\uff09\u64cd\u4f5c"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u5728\u5c0d\u5834\u666f\u6a21\u578b\uff08scene model\uff09\u4f5c\u6e32\u67d3\u7b97\u5716\uff08render\uff09\u6642\uff0c\u5f15\u64ce\u4e3b\u8ff4\u5708\u6703\u8981\u6c42AL\u6e32\u67d3\u5c0d\u61c9\u7684\u90e8\u5206\u3002 \u6709\u4e00\u500b\u7279\u5b9a\u7684TouchGFX AL\u5be6\u4f5c\u6703\u5229\u7528\u5e95\u5c64\u786c\u9ad4\u4f86\u6e32\u67d3\u5716\u5143\uff08graphic primitive\uff09\u3002 \u7576\u4e2d\u7684\u7bc4\u4f8b\u662f\u5728\u5e36\u6709Chrom-ART\u5716\u5f62\u52a0\u901f\u5668\u7684MCU\u4e0a\u6e32\u67d3\u9ede\u9663\u5716\u3002 TouchGFX\u5167\u542b\u70ba\u6240\u6709\u53ef\u7528\u5e73\u53f0\u6240\u6700\u4f73\u5316\u7684\u6e32\u67d3\u7b97\u5716\u65b9\u6cd5\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u505a\u5ba2\u88fd\u5316\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u5f71\u50cf\u7de9\u885d\u5340\u5230\u5f71\u793a\u5668\u7684\u50b3\u8f38\u8655\u7406"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u5f15\u64ce\u6703\u901a\u77e5AL\u5fc5\u9808\u50b3\u8f38\u54ea\u500b\u5f71\u50cf\u7de9\u885d\u5340\u7684\u54ea\u4e00\u90e8\u5206\u3002 AL\u9700\u8981\u555f\u52d5\u6b64\u50b3\u8f38\u4f86\u78ba\u4fdd\u50cf\u7d20\u6700\u7d42\u51fa\u73fe\u5728\u5be6\u9ad4\u986f\u793a\u5668\u4e0a\u3002")))),(0,r.kt)("p",null,"\u7531\u65bcTouchGFX AL\u662f\u4e00\u7a2e\u88ab\u52d5\u8edf\u9ad4\u6a21\u7d44\uff0c\u6c92\u6709\u81ea\u5df1\u57f7\u884c\u7dd2\u6216\u985e\u4f3c\u7684\u57f7\u884c\u7dd2\uff0c\u56e0\u6b64\u5b83\u5fc5\u9808\u900f\u904e\u5f9eTouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\u547c\u53eb\u7279\u5b9a\u7684\u639b\u9264\uff08\u51fd\u5f0f\uff09\u6216\u900f\u904e\u4e2d\u65b7\u4f86\u57f7\u884c\u5176\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u53ef\u7528\u7684\u639b\u9264\u548c\u4e2d\u65b7\u96c6\u7d44\u5982\u4e0b\u6240\u8ff0\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.webp",noShadow:!0,mdxType:"Figure"},"\u53ef\u7528\u7684\u639b\u9264\u548c\u4e2d\u65b7"),(0,r.kt)("p",null,"\u7531AL\u958b\u767c\u4eba\u54e1\u4f86\u5be6\u4f5c\u9019\u4e9b\u639b\u9264\uff0c\u4ee5\u4fbf\u5728\u7d66\u5b9a\u5e95\u5c64\u786c\u9ad4\u548c\u4f5c\u696d\u7cfb\u7d71\u7684\u689d\u4ef6\u4e0b\u542b\u84cbAL\u7684\u8077\u8cac\u3002 \u5982\u679cAL\u958b\u767c\u4eba\u54e1\u9700\u8981\u5176\u4ed6\u65b9\u5f0f\u4f86\u652f\u63f4AL\u7684\u8077\u8cac\uff0c\u958b\u767c\u4eba\u54e1\u53ef\u4ee5\u8a2d\u7f6e\u4e2d\u65b7\u4ee5\u4fbf\u5728\u7279\u5b9a\u6642\u523b\u555f\u52d5\u3002 \u9019\u65b9\u9762\u7684\u7bc4\u4f8b\u70ba\u900f\u904e\u300c\u786c\u9ad4\u8a08\u6642\u5668\u300d\u548c\u300cLTDC\u5782\u76f4\u540c\u6b65\u4e2d\u65b7\u300d\u3002 ",(0,r.kt)("em",{parentName:"p"},"I1: \u986f\u793a\u5c31\u7dd2"),"\u4e2d\u65b7\u662f\u5782\u76f4\u540c\u6b65\u4e2d\u65b7\u7684\u4e00\u500b\u7bc4\u4f8b\u3002 \u8981\u6ce8\u610f\u7684\u662f\u9019\u4e9b\u4e2d\u65b7\u7684\u914d\u7f6e\u4e5f\u662fAL\u958b\u767c\u7684\u4e00\u90e8\u4efd\u3002"),(0,r.kt)("h2",i({},{id:"example-setup-two-framebuffers---mcu-with-ltdc"}),"\u7bc4\u4f8b\u8a2d\u5b9a\uff1a\u96d9\u5f71\u50cf\u7de9\u885d\u5340\u2013\u5167\u5efaLTDC\u7684MCU"),(0,r.kt)("p",null,"\u5177\u6709LTDC\u7684MCU\u7684\u5169\u500b\u5f71\u50cf\u7de9\u885d\u5340\u662f\u5e38\u898b\u7684\u914d\u7f6e\u3002 \u5728\u6b64\u914d\u7f6e\u7576\u4e2d\u6bcf\u500b\u639b\u9264\u7684AL\u64cd\u4f5c\u901a\u5e38\u5982\u4e0b\u3002"),(0,r.kt)("p",null,"\u8a2d\u5b9aAL\u4ee5\u56de\u61c9LTDC VSYNC\u4e2d\u65b7\uff0c\u5982\u6b64\u53ef\u8b93\u986f\u793a\u5668\u6bcf\u6b21\u6e96\u5099\u597d\u63a5\u6536\u65b0\u7684\u5716\u6846\uff08frame\uff09\u6642\u90fd\u80fd\u57f7\u884cI1\u3002 \u9019\u7528\u65bc\u5c07\u4e3b\u8ff4\u5708\u8207\u986f\u793a\u4e4b\u9593\u7684\u540c\u6b65\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u639b\u9264\u548c\u4e2d\u65b7"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u52d5\u4f5c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"I1\uff1a\u986f\u793a\u5c31\u7dd2"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u89e3\u9664\uff08unblock\uff09TouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\uff08main loop\uff09\u7684\u963b\u585e\u72c0\u614b\uff0c",(0,r.kt)("br",null),"\u4e26\u555f\u52d5\u4e0a\u4e00\u500b\u5df2\u6e96\u5099\u597d\u7684\u5716\u6846\u5f71\u50cf\u7de9\u885d\u5340\u50b3\u8f38\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"H1\uff1a\u56de\u5831\u89f8\u63a7\u53ca\u5be6\u9ad4\u6309\u9215\u4e8b\u4ef6"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u56de\u50b3\u6709\u95dc\u89f8\u63a7\u4e8b\u4ef6\u6216\u9ede\u6309\u5be6\u9ad4\u6309\u9215\u7684\u4efb\u4f55\u8cc7\u8a0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"H2\uff1a\u7372\u53d6\u4e0b\u4e00\u500b\u53ef\u7528\u7684\u5f71\u50cf\u7de9\u885d\u5340"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u8981\u4f7f\u7528\u96d9\u7de9\u885d\u5340\u7684\u914d\u7f6e\uff0c\u53ea\u9700\u8981\u56de\u50b3\u7576\u524d\u6240\u6709\u672a\u50b3\u8f38\u81f3\u986f\u793a\u5668\u7684\u5f71\u50cf\u7de9\u885d\u5340\u57df")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"H3\uff1a\u57f7\u884c\u6e32\u67d3\u7b97\u5716\u64cd\u4f5c"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u4f9dMCU\u7684\u6027\u80fd\uff0c \u57f7\u884c\u7531\u786c\u9ad4\u8f14\u52a9\u7684\u6e32\u67d3\u7b97\u5716\uff0c\u82e5\u7121\u786c\u9ad4\u7684\u8f14\u52a9\u5247\u9032\u884c\u7d14\u8edf\u9ad4\u7684\u7b97\u5716")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"H4\uff1a\u5340\u57df\u6e32\u67d3\u5b8c\u6210"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u7121\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"H5\uff1a\u6e32\u67d3\u5b8c\u6210"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u64f1\u7f6e\u4e3b\u8ff4\u5708")))),(0,r.kt)("p",null,"\u9019\u500b\u8a2d\u5b9a\u63d0\u4f9b\u4ee5\u4e0b\u57f7\u884c\u6d41\u7a0b\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-actions-00.webp",noShadow:!0,mdxType:"Figure"},"\u300c\u4f7f\u7528\u5169\u500b\u5f71\u50cf\u7de9\u885d\u5340\u300d\u548c\u300c\u5e36\u6709LTDC\u7684MCU\u300d\u7684\u8a2d\u5b9a\u4e0b\u5176\u57f7\u884c\u6d41\u7a0b"),(0,r.kt)("p",null,"\u9019\u88e1\u63cf\u8ff0\u4e86AL\u914d\u7f6e\u7684\u6574\u9ad4\u8a2d\u8a08\u3002 \u4ee5\u4e0b\u5404\u7bc0\u6df1\u5165\u4ecb\u7d39\u4e86\u5982\u4f55\u5be6\u4f5c\u62bd\u8c61\u5c64\u3002"))}g.isMDXComponent=!0}}]);