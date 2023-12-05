"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[18579],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),d=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,k=m["".concat(o,".").concat(c)]||m[c]||s[c]||r;return n?l.createElement(k,i(i({ref:t},u),{},{components:n})):l.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(59496),a=n(32118);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,i=(0,a.Z)(e.imageSource);return t?l.createElement("div",{className:"figure noshadow"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,e.children)):l.createElement("div",{className:"figure"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(59496),a=n(89588);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends l.Component{render(){return l.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const p=i},89588:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(59496);class a extends l.Component{render(){const e=`highlight highlight-${this.props.type}`;return l.createElement("div",{className:e},l.createElement("div",{className:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{className:"highlight-content"},this.props.children))}}const r=a},39331:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(59496),a=n(89588);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends l.Component{render(){return l.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}const p=i},6351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>s,toc:()=>k});n(59496);var l=n(49613),a=n(12822),r=n(39331),i=n(86222),p=n(51721);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"hardware-selection-display",title:"\u986f\u793a\u5668"},m=void 0,s={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-display",id:"development/hardware-selection/hardware-components/hardware-selection-display",title:"\u986f\u793a\u5668",description:"\u76ee\u524d\u7684\u7522\u54c1\u8d8a\u4f86\u8d8a\u8c50\u5bcc\uff0c\u4f7f\u7528\u8005\u9ad4\u9a57\u589e\u5f37\uff0c\u5d4c\u5165\u7684\u986f\u793a\u5668\u66f4\u65b0\u4e14\u66f4\u5927\uff0c\u800c\u8001\u5f0f\u7684\u5206\u6bb5\u5f0f\u986f\u793a\u5668\u6b63\u5728\u88ab\u4f4e\u5f69\u548c\u9ad8\u5f69\u986f\u793a\u5668\u53d6\u4ee3\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-display.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-display",permalink:"/4.23/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-display",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-display",title:"\u986f\u793a\u5668"},sidebar:"docs",previous:{title:"MCU",permalink:"/4.23/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"},next:{title:"\u5916\u90e8\u8a18\u61b6\u9ad4",permalink:"/4.23/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"}},c={},k=[{value:"\u986f\u793a\u5668\u7bc4\u4f8b",id:"examples-of-displays",level:2},{value:"LCD-TFT",id:"lcd-tft",level:3},{value:"MIP",id:"mip",level:3},{value:"ePaper/eInk",id:"epapereink",level:3},{value:"\u986f\u793a\u5668\u4ecb\u9762\u7e3d\u89bd",id:"display-interface-overview",level:2},{value:"\u4eae\u5ea6\u548c\u80cc\u5149",id:"brightness-and-backlight",level:3},{value:"\u89c0\u770b\u4f4d\u7f6e\u548c\u984f\u8272\u53cd\u8f49",id:"viewing-position-and-color-inversion",level:3},{value:"\u986f\u793a\u5668\u4f7f\u7528\u58fd\u547d",id:"display-lifetime",level:3},{value:"\u50cf\u7d20\u5bc6\u5ea6",id:"pixel-density",level:3},{value:"\u52d5\u614b\u8272\u57df",id:"dynamic-color-range",level:4},{value:"\u53cd\u92f8\u9f52",id:"anti-aliasing",level:4},{value:"\u74b0\u5883",id:"environment",level:3},{value:"\u89f8\u63a7/\u975e\u89f8\u63a7\u986f\u793a\u5668",id:"touch--non-touch-displays",level:3},{value:"\u96fb\u5bb9\u5f0f\u89f8\u63a7",id:"capacitive-touch",level:4},{value:"\u96fb\u963b\u5f0f\u89f8\u63a7",id:"resistive-touch",level:4},{value:"\u975e\u89f8\u63a7",id:"non-touch",level:4},{value:"\u5177\u6709RAM\u7684\u986f\u793a\u5668",id:"displays-with-ram",level:3},{value:"\u975e\u6b63\u65b9\u5f62\u50cf\u7d20/\u50cf\u7d20\u5bec\u9ad8\u6bd4",id:"non-square-pixels--pixel-aspect-ratio",level:3},{value:"\u8868\u9762\u84cb\u677f",id:"cover-lense",level:3}],h={toc:k},g="wrapper";function v(e){var{components:t}=e,n=d(e,["components"]);return(0,l.kt)(g,o({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76ee\u524d\u7684\u7522\u54c1\u8d8a\u4f86\u8d8a\u8c50\u5bcc\uff0c\u4f7f\u7528\u8005\u9ad4\u9a57\u589e\u5f37\uff0c\u5d4c\u5165\u7684\u986f\u793a\u5668\u66f4\u65b0\u4e14\u66f4\u5927\uff0c\u800c\u8001\u5f0f\u7684\u5206\u6bb5\u5f0f\u986f\u793a\u5668\u6b63\u5728\u88ab\u4f4e\u5f69\u548c\u9ad8\u5f69\u986f\u793a\u5668\u53d6\u4ee3\u3002"),(0,l.kt)("p",null,"\u672c\u7ae0\u5c07\u91cd\u9ede\u4ecb\u7d39\u5728\u70ba\u5d4c\u5165\u5f0fGUI\u7522\u54c1\u9078\u64c7\u5408\u9069\u7684\u986f\u793a\u5668\u6642\u61c9\u8003\u616e\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9805\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/displays.webp",noShadow:!0,mdxType:"Figure"},"\u986f\u793a\u5668\u7684\u4e0d\u540c\u985e\u578b"),(0,l.kt)(r.Z,{mdxType:"Note"},"\u7e3d\u9ad4\u800c\u8a00\uff0cTouchGFX\u53ef\u4ee5\u5728\u4efb\u4f55\u985e\u578b\u7684\u986f\u793a\u5668\u4e0a\u904b\u884c\uff0c\u4e0d\u53d7\u986f\u793a\u6280\u8853\u3001\u4ecb\u9762\u3001\u8996\u89d2\u3001\u4eae\u5ea6\u7b49\u56e0\u7d20\u7684\u5f71\u97ff\u3002"),(0,l.kt)("h2",o({},{id:"examples-of-displays"}),"\u986f\u793a\u5668\u7bc4\u4f8b"),(0,l.kt)("p",null,"\u7531\u65bc\u6bcf\u7a2e\u986f\u793a\u5668\u7684\u95dc\u9375\u56e0\u7d20\u4e0d\u540c\uff0c\u56e0\u6b64\u9078\u64c7\u5408\u9069\u7684\u986f\u793a\u6280\u8853\u53ef\u80fd\u4e26\u4e0d\u90a3\u9ebc\u5bb9\u6613\u3002 \u4e0b\u9762\u4e00\u7ae0\u5c07\u8a73\u7d30\u4ecb\u7d39\u4e0d\u540c\u6280\u8853\uff0c\u4e5f\u8a31\u80fd\u5e6b\u52a9\u60a8\u627e\u5230\u6b63\u78ba\u7684\u65b9\u5411\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e00\u7a2e\u986f\u793a\u5668\u90fd\u5305\u542b\u50cf\u7d20\u884c\u548c\u50cf\u7d20\u5217\uff08\u5b83\u5011\u7684\u9a45\u52d5\u65b9\u5f0f\u53ef\u80fd\u4e0d\u540c\uff09\uff0c\u90fd\u5177\u6709\u5167\u90e8\u548c/\u6216\u5916\u90e8\u986f\u793a\u63a7\u5236\u5668\u548c\u5f71\u50cf\u7de9\u885dRAM\u3002 \u8207\u5176\u4ed6\u6280\u8853\u76f8\u6bd4\uff0c\u6709\u4e9b\u6280\u8853\u9700\u8981\u983b\u7e41\u5730\u66f4\u65b0\u6bcf\u500b\u50cf\u7d20\uff0c\u4f46\u7531\u65bc\u53ea\u5728GUI\u4e2d\u767c\u751f\u8b8a\u5316\u6642\u624d\u66f4\u65b0\uff0c\u56e0\u6b64\u4e26\u6c92\u6709\u5fc5\u8981\u66f4\u65b0\u6bcf\u500b\u50cf\u7d20\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u6709\u5927\u91cf\u4e0d\u540c\u7684\u986f\u793a\u6280\u8853\u3002 \u4e0b\u9762\u5c07\u4ecb\u7d39\u4e00\u4e9b\u6700\u5e38\u7528\u7684\u986f\u793a\u6280\u8853\u3002"),(0,l.kt)("h3",o({},{id:"lcd-tft"}),"LCD-TFT"),(0,l.kt)("p",null,"TFT\u662f\u6307\u8584\u819c\u96fb\u6676\u9ad4\uff0c\u662fLCD\u986f\u793a\u5668\u7684\u4e00\u7a2e\u8b8a\u578b\uff0c\u63a1\u7528\u4e3b\u52d5\u77e9\u9663\u3002 LCD-TFT\u6709\u5404\u7a2e\u4e0d\u540c\u7684\u89e3\u6790\u5ea6\u3001\u5c3a\u5bf8\u3001\u4ecb\u9762\u548c\u50f9\u683c\u5340\u9593\u7b49\uff0c\u88ab\u5ee3\u6cdb\u61c9\u7528\u5728\u5d4c\u5165\u5f0f\u7522\u54c1\u4e2d\u3002"),(0,l.kt)("p",null,"TFT-LCD\u7684\u4e00\u4e9b\u8b8a\u578b\u5305\u62ecTN\u548cIPS\u9762\u677f\u3002 \u4ee5IPS TFT-LCD\u70ba\u4f8b\uff0cSTM32F769 DISCO\u548cSTM32H747 DISCO\u4e8c\u8005\u90fd\u63a1\u7528800*480 MIPI-DSI TFT IPS LCD\u986f\u793a\u5668\u3002 TFT-LCD TN\u986f\u793a\u5668\u7684\u4f8b\u5b50\u6709STM32F746G DISCO\u548cSTM32H7B3I-DK\u3002 \u5169\u7a2e\u6280\u8853\u5e36\u4f86\u4e0d\u540c\u756b\u8cea\uff0c\u6709\u4e9b\u5dee\u7570\u53ef\u80fd\u6e90\u65bc\u984f\u8272\u7684\u5448\u73fe\u53ca\u8996\u89d2\uff0cIPS\u9762\u677f\u901a\u5e38\u662f\u6700\u597d\u7684\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/display-layers.webp",noShadow:!0,mdxType:"Figure"},"LCD-TFT\u5c64\u6b21\u7bc4\u4f8b"),(0,l.kt)("h3",o({},{id:"mip"}),"MIP"),(0,l.kt)("p",null,"MIP\u8868\u793a\u50cf\u7d20\u8a18\u61b6\u9ad4\uff0c\u5b83\u4f7f\u7528\u7684\u50cf\u7d20\u6280\u8853\u53ea\u5728\u87a2\u5e55\u5716\u50cf\u767c\u751f\u8b8a\u5316\u6642\u624d\u9700\u8981\u4f7f\u7528\u96fb\u6e90\u53ca\u8cc7\u6599\u3002 MIP\u986f\u793a\u5668\u662f\u4e00\u7a2e\u4f4e\u529f\u8017\u986f\u793a\u5668\uff0c\u529f\u8017\u5c0f\u65bc\u5168\u5f69GUI\u3002"),(0,l.kt)("h3",o({},{id:"epapereink"}),"ePaper/eInk"),(0,l.kt)("p",null,"eInk\u986f\u793a\u5668\u662f\u4f4e\u5f69\u986f\u793a\u5668\uff0c\u5b83\u662f\u4f4e\u529f\u8017\u3001\u5bec\u8996\u89d2\u548c\u6613\u8b80\u578b\u61c9\u7528\u7684\u7406\u60f3\u9078\u64c7\u3002 TouchGFX Implementer SDATAWAY\u793a\u7bc4\u4e86\u5728STM32F412\u4e0a\u57f7\u884cTouchGFX\u61c9\u7528\u7684eInk\u986f\u793a\u5668\uff0c\u8a73\u60c5\u898b\u7db2\u5740\uff1a",(0,l.kt)("a",o({parentName:"p"},{href:"https://www.touchgfx.com/cases/e-ink/"}),"https://www.touchgfx.com/cases/e-ink/")),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/e-ink.webp",noShadow:!0,mdxType:"Figure"},"E-Ink"),(0,l.kt)("h2",o({},{id:"display-interface-overview"}),"\u986f\u793a\u5668\u4ecb\u9762\u7e3d\u89bd"),(0,l.kt)("p",null,"\u986f\u793a\u5668\u901a\u904e\u4e0d\u540c\u985e\u578b\u7684\u4ecb\u9762\u9023\u63a5\u5230MCU\u3002 \u986f\u793a\u5668\u4ecb\u9762\u7684\u53c3\u6578\u5404\u4e0d\u76f8\u540c\uff0c\u4e0b\u4e00\u7bc0\u5c07\u4ecb\u7d39\u5716\u50cf\u76f8\u95dc\u53c3\u6578\uff0c\u4f8b\u5982\u9700\u8981\u7684\u5f15\u8173\u6578\u548c\u652f\u63f4\u4e0d\u540c\u89e3\u6790\u5ea6\u7684\u6700\u5927\u983b\u5bec\u3002"),(0,l.kt)("p",null,"TouchGFX\u53ef\u4f7f\u7528\u4efb\u4f55\u986f\u793a\u4ecb\u9762\uff0cSTM32\u5fae\u63a7\u5236\u5668\u63d0\u4f9b\u53ef\u9023\u63a5Motorola 6800\u3001Intel 8080\u3001SPI\u3001RGB-TFT\u548cMIPI-DSI\u7684\u5404\u7a2e\u986f\u793a\u4ecb\u9762\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:null}),"\u4ecb\u9762"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"\u5f15\u8173\u6578\u91cf"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"\u76ee\u6a19\u89e3\u6790\u5ea6"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"\u6700\u5927\u983b\u5bec"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"\u512a\u9ede"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"\u7f3a\u9ede"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"SPI"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"4*"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u6700\u9ad8480*272"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"16 MHz"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u7c21\u55ae\u786c\u9ad4\u4ecb\u9762\uff0c\u6bd4I2C\u5feb\uff0c"),(0,l.kt)("td",o({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u5e73\u884c8080/6800 (FMC)"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"8/16*"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u6700\u9ad8480*272"),(0,l.kt)("td",o({parentName:"tr"},{align:null})),(0,l.kt)("td",o({parentName:"tr"},{align:null})),(0,l.kt)("td",o({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"RGB-TFT (LTDC)"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"8/18/24*"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u6700\u9ad81280*800"),(0,l.kt)("td",o({parentName:"tr"},{align:null})),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u9ad8\u6027\u80fd\uff0c\u4f4e\u6210\u672c"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u5f15\u8173\u6578\u91cf\u591a\uff0c\u5e73\u884c\u901a\u4fe1\u53ef\u80fd\u5c0e\u81f4EMC\u554f\u984c\uff0c\u53ef\u80fd\u9700\u8981\u66f4\u9ad8\u6642\u8108\u983b\u7387")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"MIPI-DSI (LTDC)"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"4/10"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u6700\u9ad81280*800"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"80Mbps-1.5Gbps"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u9ad8\u6027\u80fd\uff0c\u5f15\u8173\u6578\u91cf\u5c11\uff0c"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u8907\u96dc\u7684\u5354\u5b9a\u548c\u9a45\u52d5\u7a0b\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"LVDS**"),(0,l.kt)("td",o({parentName:"tr"},{align:null})),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"1366*768"),(0,l.kt)("td",o({parentName:"tr"},{align:null})),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u4f4eEMC/\u5e72\u64fe\uff0c\u901f\u5ea6\u5feb"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"\u9700\u8981\u6a4b\u63a5")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u9700\u8981\u984d\u5916\u7684\u5f15\u8173\u7528\u65bc\uff1a\u89f8\u63a7\u3001\u96fb\u6e90\u3001\u63a7\u5236\u4fe1\u865f\u7b49\u3002"))),(0,l.kt)("li",{parentName:"ul"},"** \u9023\u63a5LVDS\u986f\u793a\u5668\u6642\u9700\u8981\u9032\u884c\u6a4b\u63a5\u3002")),(0,l.kt)("h3",o({},{id:"brightness-and-backlight"}),"\u4eae\u5ea6\u548c\u80cc\u5149"),(0,l.kt)("p",null,"\u4eae\u5ea6\u55ae\u4f4d\u901a\u5e38\u4f7f\u7528\u574e\u5fb7\u62c9/m\xb2\u3002 \u80cc\u5149\u662f\u986f\u793a\u5668\u6700\u8017\u96fb\u7684\u90e8\u5206\u3002 \u5728\u967d\u5149\u4e0b\uff0c\u986f\u793a\u5668\u9700\u8981\u7d04600 cd/M2\u7684\u4eae\u5ea6\u3002 \u8f03\u9ad8\u7684\u4eae\u5ea6\u901a\u5e38\u6703\u4f7f\u6eab\u5ea6\u4e0a\u5347\uff0c\u5f9e\u800c\u7e2e\u77edLED\u7684\u4f7f\u7528\u58fd\u547d\u3002"),(0,l.kt)("h3",o({},{id:"viewing-position-and-color-inversion"}),"\u89c0\u770b\u4f4d\u7f6e\u548c\u984f\u8272\u53cd\u8f49"),(0,l.kt)("p",null,"\u5728\u5c07\u986f\u793a\u5668\u5d4c\u5165\u7522\u54c1\u6642\uff0c\u5fc5\u9808\u9810\u6e2c\u4e26\u77ad\u89e3\u7528\u6236\u53ef\u80fd\u8655\u65bc\u7684\u89c0\u770b\u4f4d\u7f6e\u3002 \u4e00\u4e9b\u986f\u793a\u5668\u5728\u5f9e\u7279\u5b9a\u4f4d\u7f6e\u89c0\u770b\u6642\uff0c\u53ef\u80fd\u767c\u751f\u984f\u8272\u53cd\u8f49\u3002 \u9019\u610f\u5473\u8457\uff0c\u60f3\u8981\u5c07\u986f\u793a\u5668\u5b89\u88dd\u5728\u5408\u9069\u4f4d\u7f6e\uff0c\u4e26\u4f7f\u7528\u6236\u80fd\u5920\u5728\u64cd\u4f5c\u548c\u9ad4\u9a57GUI\u7684\u540c\u6642\u9084\u80fd\u770b\u5230\u756b\u9762\u8a2d\u8a08\u5e2b\u8a2d\u8a08\u7684\u6b63\u78ba\u984f\u8272\uff0c\u4e26\u6c92\u6709\u90a3\u9ebc\u5bb9\u6613\u3002"),(0,l.kt)("p",null,"TN\u9762\u677f\u53ef\u80fd\u767c\u751f\u984f\u8272\u53cd\u8f49\u3002 \u6dfb\u52a0\u4e00\u5c64SWV\u819c\u6709\u52a9\u65bc\u589e\u5927\u8996\u89d2\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/viewing-position.webp",mdxType:"Figure"},"\u5f9e\u4e0d\u540c\u89c0\u770b\u4f4d\u7f6e\u770b\u5230\u7684\u984f\u8272"),(0,l.kt)("h3",o({},{id:"display-lifetime"}),"\u986f\u793a\u5668\u4f7f\u7528\u58fd\u547d"),(0,l.kt)("p",null,"\u4f7f\u7528\u58fd\u547d\u7684\u5b9a\u7fa9\u662f\u986f\u793a\u5668\u572825\u2103\u689d\u4ef6\u4e0b\u964d\u81f3\u4e00\u534a\u4eae\u5ea6\u6240\u7d93\u6b77\u7684\u6642\u9593\u3002 \u5982\u679c\u7522\u54c1\u7684\u751f\u547d\u9031\u671f\u9577\uff0c\u5247\u5fc5\u9808\u8003\u616e\u6b64\u53c3\u6578\u3002"),(0,l.kt)("h3",o({},{id:"pixel-density"}),"\u50cf\u7d20\u5bc6\u5ea6"),(0,l.kt)("p",null,"\u50cf\u7d20\u5bc6\u5ea6\u5b9a\u7fa9\u4e86\u6bcf\u82f1\u5bf8\u6216\u5e73\u65b9\u82f1\u5bf8\u986f\u793a\u7684\u50cf\u7d20\u6578\u3002 \u53ef\u6839\u64da\u6700\u7d42\u4f7f\u7528\u8005\u3001\u74b0\u5883\u548c\u8a2d\u8a08\u9700\u6c42\u7b49\u56e0\u7d20\u9078\u64c7\u5408\u9069\u7684\u50cf\u7d20\u5bc6\u5ea6\u3002 \u5177\u9ad4\u4f86\u8aaa\uff0c\u4e00\u90e8\u9ad8\u968e\u624b\u6a5f\u76842340x1080\u50cf\u7d20\u30016.1\u82f1\u5bf8\u87a2\u5e55\u7684\u50cf\u7d20\u5bc6\u5ea6\u70ba\u6bcf\u5e73\u65b9\u82f1\u5bf8178,500\u500b\u50cf\u7d20\uff0c\u800c\u5e38\u7528\u7684800x480\u50cf\u7d20\u30015\u82f1\u5bf8TFT\u986f\u793a\u5668\u7684\u50cf\u7d20\u5bc6\u5ea6\u70ba\u6bcf\u5e73\u65b9\u82f1\u5bf834,816\u500b\u50cf\u7d20\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/pixel-density.webp",noShadow:!0,mdxType:"Figure"},"\u4f4e\u3001\u4e2d\u3001\u9ad8\u50cf\u7d20\u5bc6\u5ea6"),(0,l.kt)("p",null,"\u4e00\u4e9b\u6a19\u6e96\u89e3\u6790\u5ea6\u3001\u986f\u793a\u5668\u5c3a\u5bf8\u548c\u50cf\u7d20\u5bc6\u5ea6\u662f\u7528\u6bcf\u5e73\u65b9\u82f1\u5bf8\u50cf\u7d20\u6578\uff08PPI",(0,l.kt)("sup",null,"2"),"\uff09\u4f86\u8861\u91cf\u7684\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:null})),(0,l.kt)("th",o({parentName:"tr"},{align:null})),(0,l.kt)("th",o({parentName:"tr"},{align:null})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"QVGA 320*240")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"2.4\u201d (27,777 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"3.5\u201d (13,061 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WQVGA 480*272")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"4,3\u201d (16,462 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"5\u201d (12,175 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"HVGA 480*320")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"3.5\u201d (27,167 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",o({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"VGA 640*480")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"5,7\u201d (19,698 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"6.4 (15,625 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WVGA 800*480")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"4\u201d (54,400 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"5\u201d (34,816 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WSVGA 1024*600")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"7\u201d (28,746 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"10,1\u201d (13,808 PPI",(0,l.kt)("sup",null,"2"),")")))),(0,l.kt)("p",null,"\u5c31\u67d0\u4e9b\u61c9\u7528\u800c\u8a00\uff0c\u9664\u975e\u89c0\u770b\u6642\u8207\u986f\u793a\u5668\u4e4b\u9593\u7684\u8ddd\u96e2\u975e\u5e38\u8fd1\uff0c\u5426\u5247\uff0c\u53ef\u80fd\u96e3\u4ee5\u770b\u51fa\u4efb\u4f55\u5dee\u7570\u3002 \u5716\u5143\u5bc6\u5ea6\u7bc4\u4f8b\uff1aSTM32F476DISCO\u70ba16,462 PPI",(0,l.kt)("sup",null,"2"),"\uff0cSTM32F769DISCO\u70ba54,400 PPI",(0,l.kt)("sup",null,"2"),"\u3002"),(0,l.kt)("p",null,"\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u4e0a\u8ff0\u7bc4\u4f8b\u4e2d\u7684\u4e0d\u540c\u5716\u5143\u5bc6\u5ea6\u53ef\u80fd\u6703\u5f71\u97ff\u52d5\u614b\u8272\u57df\u548c\u53cd\u92f8\u9f52\u6548\u679c\uff1a"),(0,l.kt)("h4",o({},{id:"dynamic-color-range"}),"\u52d5\u614b\u8272\u57df"),(0,l.kt)("p",null,"\u52d5\u614b\u8272\u57df\u662f\u6307\u5169\u7a2e\u5c0d\u6bd4\u8272\uff08\u5982\u9ed1\u8272\u548c\u767d\u8272\uff09\u4e4b\u6bd4\u3002 \u5728\u4e0a\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u85cd\u8272\u548c\u767d\u8272\u5305\u542b\u4e0d\u540c\u5c64\u6b21\u7684\u767d\u8272\u548c\u85cd\u8272\u3002 \u5716\u50cf\u5de6\u5074\u7684\u50cf\u7d20\u5bc6\u5ea6\u8f03\u4f4e\uff0c\u800c\u5716\u50cf\u53f3\u5074\u70ba\u4e86\u986f\u793a\u6240\u6709\u984f\u8272\uff0c\u5305\u542b\u7684\u50cf\u7d20\u66f4\u591a\uff0c\u56e0\u6b64\u4e0d\u540c\u984f\u8272\u8207\u908a\u7de3\u4e4b\u9593\u66f4\u52a0\u5e73\u6ed1\u3002"),(0,l.kt)("h4",o({},{id:"anti-aliasing"}),"\u53cd\u92f8\u9f52"),(0,l.kt)("p",null,"\u7576\u50cf\u7d20\u5bc6\u5ea6\u904e\u4f4e\u6642\uff0c\u53ef\u80fd\u7522\u751f\u968e\u68af\u6548\u61c9\u3002 \u5728\u61c9\u7528\u4e2d\u4f7f\u7528\u53cd\u92f8\u9f52\u6280\u8853\u53ef\u4f7f\u5716\u50cf\u4e2d\u7684\u9019\u4e9b\u968e\u68af\u908a\u7de3\u8b8a\u5f97\u5e73\u6ed1\u3002 \u53ef\u4ee5\u770b\u5230\uff0c\u524d\u5169\u500b\u85cd\u8272\u5713\u5708\u986f\u793a\u51fa\u968e\u68af\u6548\u61c9\uff0c\u9019\u662f\u56e0\u70ba\u50cf\u7d20\u5bc6\u5ea6\u4e0d\u5141\u8a31\u986f\u793a\u5668\u986f\u793a\u8db3\u5920\u591a\u7684\u50cf\u7d20\uff0c\u4ee5\u81f4\u6c92\u6709\u8db3\u5920\u9ad8\u7684\u8272\u57df\u4f86\u5be6\u73fe\u8db3\u5920\u9ad8\u7684\u53cd\u92f8\u9f52\u6548\u679c\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/anti-aliasing.webp",noShadow:!0,mdxType:"Figure"},"\u53cd\u92f8\u9f52"),(0,l.kt)("h3",o({},{id:"environment"}),"\u74b0\u5883"),(0,l.kt)("p",null,"\u5728\u6c7a\u5b9a\u4f7f\u7528\u54ea\u7a2e\u986f\u793a\u5668\u6642\uff0c\u5fc5\u9808\u8003\u616e\u74b0\u5883\u56e0\u7d20\u3002 \u56e0\u6b64\u8acb\u601d\u8003\u4ee5\u4e0b\u554f\u984c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u986f\u793a\u5668\u662f\u5426\u53d7\u5230\u967d\u5149\u76f4\u5c04\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u662f\u5426\u5728\u9700\u8981\u6297\u885d\u64ca\u7684\u60e1\u52a3\u74b0\u5883\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u64cd\u4f5c\u54e1\u662f\u5426\u6703\u6234\u624b\u5957\u64cd\u4f5c\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u662f\u5426\u9700\u8981\u9632\u6b62\u60e1\u610f\u7834\u58de\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u662f\u5426\u53ea\u9700\u901a\u904e\u7269\u7406\u6309\u9215\u64cd\u4f5c\uff1f"))),(0,l.kt)("p",null,"\u56de\u7b54\u9019\u4e9b\u554f\u984c\u5c07\u6709\u52a9\u65bc\u60a8\u66f4\u597d\u5730\u7406\u89e3\u8981\u9078\u64c7\u54ea\u7a2e\u89f8\u63a7\u6280\u8853\uff0c\u751a\u81f3\u662f\u5426\u9700\u8981\u89f8\u63a7\u3002"),(0,l.kt)(r.Z,{mdxType:"Note"},"TouchGFX\u53ef\u5728\u89f8\u63a7\u548c\u975e\u89f8\u63a7\u986f\u793a\u5668\u4e0a\u904b\u884c\uff0cTouchGFX GUI\u4ea6\u53ef\u901a\u904e\u6309\u9215\u3001\u624b\u52e2\u548c\u8072\u97f3\u9032\u884c\u63a7\u5236\u3002"),(0,l.kt)("h3",o({},{id:"touch--non-touch-displays"}),"\u89f8\u63a7/\u975e\u89f8\u63a7\u986f\u793a\u5668"),(0,l.kt)("p",null,"\u76ee\u524d\u5e02\u5834\u4e0a\u6709\u4e0d\u540c\u7684\u89f8\u63a7\u6280\u8853\uff0c\u4f8b\u5982\uff1a\u96fb\u963b\u5f0f\u3001\u96fb\u5bb9\u5f0f\uff08\u8868\u9762\u3001\u6295\u5f71\uff09\u3001SAW\u89f8\u63a7\u548c\u7d05\u5916\u89f8\u63a7\u3002 \u672c\u7bc0\u5c07\u53ea\u4ecb\u7d39\u5176\u4e2d\u7684\u67d0\u4e9b\u6280\u8853\uff1a"),(0,l.kt)("h4",o({},{id:"capacitive-touch"}),"\u96fb\u5bb9\u5f0f\u89f8\u63a7"),(0,l.kt)("p",null,"\u9019\u662f\u6700\u6d41\u884c\u7684\u89f8\u63a7\u6280\u8853\u4e4b\u4e00\u3002 \u5b83\u6709\u5169\u7a2e\u611f\u61c9\u6280\u8853\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5bb9\u5f0f\u7528\u65bc\u55ae\u6307\u89f8\u63a7"),(0,l.kt)("li",{parentName:"ul"},"\u4e92\u5bb9\u5f0f\u5141\u8a31\u591a\u6307\u89f8\u63a7\uff0c\u4f46\u66b4\u9732\u5728\u6c34\u4e2d\u6216\u6f6e\u6fd5\u74b0\u5883\u4e2d\u6642\u6703\u9762\u81e8\u56f0\u96e3\uff08TouchGFX\u4e0d\u652f\u6301\u591a\u6307\u89f8\u63a7\uff09\u3002")),(0,l.kt)("p",null,"\u5927\u591a\u6578STM32 DISCO\u677f\u4f7f\u7528\u96fb\u5bb9\u5f0f\u89f8\u63a7\uff0c\u5982STM32H7B3I DISCO\u3001STM32H750 DISCO\u548cSTM32F746G DISCO\u3002"),(0,l.kt)("h4",o({},{id:"resistive-touch"}),"\u96fb\u963b\u5f0f\u89f8\u63a7"),(0,l.kt)("p",null,"\u96fb\u963b\u5f0f\u89f8\u63a7\u662f\u4e00\u7a2e\u901a\u904e\u6a5f\u68b0\u58d3\u529b\u555f\u52d5\u7684\u7c21\u55ae\u6280\u8853\uff0c\u53ea\u9700\u8981ADC\u6216\u7c21\u55ae\u7684\u89f8\u6478\u63a7\u5236\u5668\u3002 \u7531\u65bc\u6280\u8853\u6210\u719f\uff0c\u50f9\u683c\u901a\u5e38\u8f03\u4f4e\u3002 \u96fb\u963b\u5f0f\u89f8\u63a7\u6709\u8f03\u4f73\u7684\u8868\u9762\u7684\u9632\u522e\u64e6\u548c\u9632\u6495\u88c2\u4fdd\u8b77\uff0c\u4f46\u9632\u6b62\u60e1\u610f\u7834\u58de\u7684\u80fd\u529b\u8f03\u5dee\u3002 \u6b64\u5916\uff0c\u5728\u967d\u5149\u4e0b\u7684\u53ef\u8b80\u6027\u8f03\u4f4e\u3002 STM32F429 DISCO\u677f\u4f7f\u7528\u96fb\u963b\u5f0f\u89f8\u63a7\uff0c\u5177\u6709TouchGFX\u61c9\u7528\u3002"),(0,l.kt)("h4",o({},{id:"non-touch"}),"\u975e\u89f8\u63a7"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u901a\u904e\u6309\u9215\u63a7\u5236GUI\uff0c\u4e14\u53ea\u9700\u986f\u793a\u5f71\u50cf/\u5f71\u7247\uff0c\u6216\u901a\u904e\u53e6\u4e00\u500b\u8a2d\u5099\u9032\u884c\u5916\u90e8\u63a7\u5236\u6642\uff0c\u662f\u5426\u70ba\u7522\u54c1\u6dfb\u52a0\u89f8\u63a7\u529f\u80fd\u5c07\u7121\u95dc\u7dca\u8981\u3002 \u4e0d\u70ba\u986f\u793a\u5668\u589e\u52a0\u89f8\u63a7\u5c64\u53ef\u4ee5\u964d\u4f4e\u986f\u793a\u5668\u50f9\u683c\u3002"),(0,l.kt)("h3",o({},{id:"displays-with-ram"}),"\u5177\u6709RAM\u7684\u986f\u793a\u5668"),(0,l.kt)("p",null,"\u63a1\u7528Motorla 6800\u3001Intel 8080\u3001SPI\u6216MIPI-DSI\u4ecb\u9762\u7684\u986f\u793a\u5668\u901a\u5e38\u5167\u7f6eRAM\uff08GRAM\uff09\uff0c\u5176\u5927\u5c0f\u70ba1\u500b\u5b8c\u6574\u7684\u5f71\u50cf\u7de9\u885d\u3002 \u9019\u4e9b\u985e\u578b\u7684\u986f\u793a\u5668\u53ef\u901a\u904eSPI\u3001FMC\u6216DSI\u4e3b\u6a5f\uff08LTDC\uff09\u9023\u63a5\u5230MCU\u3002 \u986f\u793a\u5668RAM\u9700\u8981\u53e6\u4e00\u500b\u5916\u90e8RAM\uff08\u5e40\u7de9\u885d\uff09\uff0c\u5b83\u53ef\u4ee5\u4f4d\u65bcMCU\u4e2d\u6216\u5916\u90e8RAM\u4e2d\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/gram-mipi.webp",noShadow:!0,mdxType:"Figure"},"MIPI-DSI\u986f\u793a\u5668"),(0,l.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u4e0d\u9700\u8981\u5916\u90e8RAM\uff08MCU\u4ee5\u5916\uff09\u4f86\u5b58\u5132\u5e40\u7de9\u885d\uff0c\u56e0\u6b64\u4f7f\u7528MCU\u4e2d\u53ef\u7528\u7684\u5167\u90e8RAM\u3002 \u5982\u679cMCU RAM\u5c0f\u65bc1\u500b\u5b8c\u6574\u7684\u5f71\u50cf\u7de9\u885d\uff0c\u5247\u53ef\u4ee5\u4f7f\u7528TouchGFX\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u7279\u6027\uff0c\u9019\u6a23\u53ef\u4f7f\u5f71\u50cf\u7de9\u885d\u7684\u7a7a\u9593\u5360\u7528\u91cf\u7dad\u6301\u5728\u6975\u4f4e\u6c34\u6e96\u3002"),(0,l.kt)(i.Z,{mdxType:"FurtherReading"},"\u53c3\u898b ",(0,l.kt)(p.Z,{to:"../../scenarios/lowering-memory-usage-with-partial-framebuffer",mdxType:"Link"},"\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u201d\u4e00\u7bc0\u77ad\u89e3\u66f4\u591a\u5167\u5bb9")),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/gram-spi.webp",noShadow:!0,mdxType:"Figure"},"SPI \u986f\u793a\u5668"),(0,l.kt)("h3",o({},{id:"non-square-pixels--pixel-aspect-ratio"}),"\u975e\u6b63\u65b9\u5f62\u50cf\u7d20/\u50cf\u7d20\u5bec\u9ad8\u6bd4"),(0,l.kt)("p",null,"\u6700\u5e38\u898b\u7684\u50cf\u7d20\u5f62\u72c0\u662f\u6b63\u65b9\u5f62\uff0c\u4f46\u67d0\u4e9b\u986f\u793a\u5668\u4f7f\u7528\u975e\u6b63\u65b9\u5f62\u50cf\u7d20\u3002 \u50cf\u7d20\u5bec\u9ad8\u6bd4\u662f\u50cf\u7d20\u5bec\u5ea6\u8207\u50cf\u7d20\u9ad8\u5ea6\u4e4b\u6bd4\u3002 \u56e0\u6b64\uff0c\u50cf\u7d20\u5bec\u5ea6\u548c\u9ad8\u5ea6\u5747\u70ba100\u7684\u6b63\u65b9\u5f62\u50cf\u7d20\u7684\u5bec\u9ad8\u6bd4\u70ba1/1\u3002 \u975e\u6b63\u65b9\u5f62\u5716\u5143\u5247\u6709\u4e0d\u540c\u7684\u5716\u5143\u5bec\u9ad8\u6bd4\u3002 \u5982\u679c\u756b\u9762\u8a2d\u8a08\u5e2b\u4e0d\u8003\u616e\u9019\u4e00\u9ede\uff0c\u5247\u986f\u793a\u7684\u9ede\u9663\u5716\u53ef\u80fd\u88ab\u62c9\u4f38\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/pixel-aspect.webp",noShadow:!0,mdxType:"Figure"},"\u88ab\u62c9\u4f38\u7684\u9ede\u9663\u5716"),(0,l.kt)("h3",o({},{id:"cover-lense"}),"\u8868\u9762\u84cb\u677f"),(0,l.kt)("p",null,"\u7531\u65bc\u986f\u793a\u5668\u662f\u5d4c\u5165\u5f0f\u5716\u5f62\u5316\u4f7f\u7528\u8005\u4ecb\u9762\u7522\u54c1\u7684\u8868\u5c64\uff0c\u589e\u52a0\u8868\u9762\u84cb\u677f\u53ef\u4ee5\u6539\u5584\u5916\u89c0\u548c\u89f8\u611f\u3002 \u8868\u9762\u84cb\u677f\u53ef\u4ee5\u6539\u5584\u8a2d\u8a08\u6548\u679c\u3001\u6297\u522e\u64e6\u6027\u3001\u6297\u885d\u64ca\u6027\u548c\u984f\u8272\u7b49\u3002"))}v.isMDXComponent=!0}}]);