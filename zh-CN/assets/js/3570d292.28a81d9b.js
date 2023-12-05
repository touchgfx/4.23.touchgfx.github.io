"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[92652],{49613:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(m,l(l({ref:t},h),{},{components:r})):n.createElement(m,l({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},86473:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(89588);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const i=l},12822:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(32118);const o=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children))}},86222:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(89588);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const i=l},89588:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},39331:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(89588);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const i=l},71678:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(89588);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const i=l},48504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>f});r(59496);var n=r(49613),a=r(12822),o=r(86222),l=r(51721),i=r(86473),c=r(39331),p=r(71678);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const d={id:"additional-features",title:"\u9644\u52a0\u529f\u80fd",sidebar_label:"\u9644\u52a0\u529f\u80fd"},s=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",title:"\u9644\u52a0\u529f\u80fd",description:"\u5982\u679c\u9879\u76ee\u914d\u7f6e\u4e2d\u6709\u4efb\u4f55\u9644\u52a0\u529f\u80fd\uff0c\u5219\u4f1a\u663e\u793a\u201c\u9644\u52a0\u529f\u80fd\u201d\u7ec4\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",draft:!1,tags:[],version:"current",frontMatter:{id:"additional-features",title:"\u9644\u52a0\u529f\u80fd",sidebar_label:"\u9644\u52a0\u529f\u80fd"},sidebar:"docs",previous:{title:"\u9a71\u52a8",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver"},next:{title:"\u89c6\u9891\u89e3\u7801",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"}},g={},f=[{value:"\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668",id:"external-data-reader",level:2},{value:"Vector Rendering\uff08\u77e2\u91cf\u6e32\u67d3\uff09",id:"vector-rendering",level:2},{value:"Vector Font Rendering",id:"vector-font-rendering",level:2},{value:"8\u4f4dLTDC\u989c\u8272\u67e5\u8be2\u8868",id:"8bit-ltdc-color-look-up-table",level:2}],v={toc:f},k="wrapper";function b(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)(k,h({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5982\u679c\u9879\u76ee\u914d\u7f6e\u4e2d\u6709\u4efb\u4f55\u9644\u52a0\u529f\u80fd\uff0c\u5219\u4f1a\u663e\u793a\u201c\u9644\u52a0\u529f\u80fd\u201d\u7ec4\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-settings.png",width:"350",mdxType:"Figure"},"TouchGFX Generator\u9644\u52a0\u529f\u80fd\u8bbe\u7f6e"),(0,n.kt)("h2",h({},{id:"external-data-reader"}),"\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668"),(0,n.kt)("p",null,"\u5bf9\u4e8eRGB565\u5e27\u7f13\u5b58\u50cf\u7d20\u683c\u5f0f\uff0cTouchGFX\u652f\u6301",(0,n.kt)("em",{parentName:"p"},"\u6570\u636e\u8bfb\u53d6\u5668"),"\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u76f4\u63a5\u4ece\u975e\u5b58\u50a8\u6620\u5c04\u4e32\u884cFlash\u8bfb\u53d6\u6570\u636e\uff0c\u800c\u65e0\u9700\u8fdb\u884c",(0,n.kt)("a",h({parentName:"p"},{href:"../../../ui-development/touchgfx-engine-features/caching-bitmaps"}),"\u7f13\u5b58"),"\uff0c\u4f7f\u7528\u7f13\u5b58\u5219\u9700\u8981\u5728\u5b58\u50a8\u5668\u4e2d\u589e\u52a0\u989d\u5916\u7f13\u51b2\u533a\u3002 \u5173\u4e8e\u5982\u4f55\u5b9e\u73b0DataReader\uff0c\u4ece\u975e\u5b58\u50a8\u6620\u5c04\u95ea\u5b58\u82af\u7247\u4e2d\u68c0\u7d22\u5e94\u7528\u7a0b\u5e8f\u8d44\u6e90\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",h({parentName:"p"},{href:"../../../scenarios/using-serial-flash"}),"SerialFlash"),"\u6587\u7ae0\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u6570\u636e\u8bfb\u53d6\u5668"),"\u9009\u9879\u901a\u5e38\u7528\u4e8e\u4f4e\u6210\u672c\u89e3\u51b3\u65b9\u6848\uff08\u5982STM32G0\uff09\uff0c\u8fd9\u4e9b\u65b9\u6848\u6ca1\u6709\u8db3\u591f\u7684\u5185\u5b58\u7528\u4e8e\u989d\u5916\u7684\u7f13\u51b2\u533a\u3002"),(0,n.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668"),"\uff1a\u4f7f\u80fd\u6216\u7981\u7528\u6b64\u529f\u80fd\u3002 \u5982\u679c\u4f7f\u80fd\uff0cTouchGFX\u5c06\u76f4\u63a5\u901a\u8fc7\u751f\u6210\u7684\u63a5\u53e3\u68c0\u7d22\u5e94\u7528\u8d44\u6e90\u3002 \u5982\u679c\u7981\u7528\uff0c\u5219\u5f00\u53d1\u4eba\u5458\u9700\u8981\u5c06\u56fe\u7247\u8d44\u6e90",(0,n.kt)("em",{parentName:"li"},"\u7f13\u5b58"),"\u5230\u5185\u5b58\u7f13\u51b2\u533a\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668\uff1a\u5185\u5b58\u57fa\u5740"),"\uff1a\u6307\u5b9a\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668\u5185\u5b58\u7684\u8d77\u59cb\u5730\u5740\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668\uff1a\u5185\u5b58\u57fa\u5740"),"\uff1a\u6307\u5b9a\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668\u5185\u5b58\u7684\u5927\u5c0f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668\uff1a\u884c\u7f13\u51b2\u533a\u5927\u5c0f\uff1a"),"\u521b\u5efa\u4e24\u4e2a\u7f13\u51b2\u533a\uff0c\u4ee5\u4fbf\u5c06\u56fe\u50cf\u6216\u6587\u672c\u6df7\u5408\u5230\u5e27\u7f13\u51b2\u4e2d\u3002 Default value is : ",(0,n.kt)("em",{parentName:"li"},"one screen width ","*"," 4 bytes"),", to support full size images in ARGB8888 pixel format."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668\uff1a\u6700\u5c0fDMA\u4f20\u8f93\u5927\u5c0f\uff1a"),"\u8bbe\u7f6e\u542f\u52a8DMA\u4f20\u8f93\u6240\u9700\u7684\u6700\u5c0f\u5b57\u8282\u3002 \u5982\u679c\u8bf7\u6c42\u4f20\u8f93\u7684\u5b57\u8282\u66f4\u5c11\uff0c\u5c06\u4e0d\u4f7f\u7528DMA\u3002")),(0,n.kt)("p",null,"\u5728\u4f7f\u80fd\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u5668\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7TouchGFX Generator\u751f\u6210\u4ee3\u7801\u540e\uff0c\u5c06\u521b\u5efa\u4ee5\u4e0b\u9644\u52a0\u6587\u4ef6\uff0c\u4ee5\u652f\u6301\u76f4\u63a5\u4ece\u975e\u5b58\u50a8\u6620\u5c04\u95ea\u5b58\u4e2d\u68c0\u7d22\u8d44\u6e90\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.hpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/TouchGFXDataReader.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/TouchGFXDataReader.hpp"))),(0,n.kt)("p",null,"\u50cf\u5f80\u5e38\u4e00\u6837\uff0c\u5bf9\u4e8eTouchGFX Generator\u751f\u6210\u7684AL\u67b6\u6784\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u4e3a\u53ea\u8bfb\uff0c\u7528\u6237\u4fee\u6539\u5e94\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u7c7b\u4e2d\u8fdb\u884c\u3002 ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u7684\u7c7b\u578b\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),"\u3002"),(0,n.kt)("p",null,"\u5c06\u5bf9\u4ee5\u4e0b\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\uff0c\u4ee5\u5c06TouchGFX HAL\u914d\u7f6e\u4e3a\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"DataReader"),"\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.hpp"))),(0,n.kt)(c.Z,{mdxType:"Note"},"\u4ec5\u5f53\u7981\u7528DMA2D\u548cLTDC\u65f6\uff0cDataReader\u9644\u52a0\u529f\u80fd\u624d\u53ef\u7528\u3002"),(0,n.kt)("h2",h({},{id:"vector-rendering"}),"Vector Rendering\uff08\u77e2\u91cf\u6e32\u67d3\uff09"),(0,n.kt)("p",null,"To be able to configure Vector Rendering in TouchGFX Generator, the framebuffer pixel format must be RGB565, RGB888, or ARGB8888. The developer has three options when it comes to Vector Rendering capabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7981\u7528"),"\u2014\u2014\u7981\u7528\u5e94\u7528\u7a0b\u5e8f\u7684Vector Rendering\u652f\u6301\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Software")," - Enables software Vector Rendering support for the application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Hardware")," - Enables hardware Vector Rendering support for the application.")),(0,n.kt)("p",null,"When ",(0,n.kt)("em",{parentName:"p"},"Software")," is chosen vector rendering is performed by the CPU. For MCUs with GPU2D (Neochrom) available, the ",(0,n.kt)("em",{parentName:"p"},"Hardware")," option is available, which will improve the performance by doing the the vector operations in the GPU2D."),(0,n.kt)(i.Z,{mdxType:"Caution"},"\u5982\u679c\u8981\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528TouchGFX Designer\u7684SVGImage\u63a7\u4ef6\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u5df2\u5728TouchGFX Generator\u4e2d\u542f\u7528",(0,n.kt)("b",null,"Vector Rendering"),"\u3002 \u5426\u5219\uff0c\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5c06\u51fa\u73b0",(0,n.kt)("b",null,"\u201ctouchgfx::VectorRenderer::getInstance()\u672a\u5b9a\u4e49\u201d"),"\u9519\u8bef\u3002"),(0,n.kt)(p.Z,{mdxType:"Tip"},"\u5982\u679c\u60a8\u7684\u8bbe\u5907\u53ef\u7528GPU2D\uff08NeoChrom\uff09\uff08\u4f8b\u5982\uff1aSTM32U599\uff09\uff0c\u5219\u542f\u7528\u4ee5\u83b7\u5f97\u6700\u4f73\u77e2\u91cf\u6e32\u67d3\u6027\u80fd\u3002"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u5728TouchGFX\u4e2d\u6e32\u67d3SVG\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)(l.Z,{to:"../../../ui-development/touchgfx-engine-features/svg",mdxType:"Link"},"SVG"),"\u6587\u7ae0\u3002"),(0,n.kt)("h2",h({},{id:"vector-font-rendering"}),"Vector Font Rendering"),(0,n.kt)("p",null,"To be able to enable Vector Font Rendering in TouchGFX Generator, ",(0,n.kt)("strong",{parentName:"p"},"Vector Rendering")," must be enabled (either ",(0,n.kt)("em",{parentName:"p"},"software")," or ",(0,n.kt)("em",{parentName:"p"},"hardware"),"). The developer has two options when it comes to Vector Font Rendering capabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disabled")," - Disables Vector Font Rendering support for the application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enabled")," - Enables Vector Font Rendering support for the application.")),(0,n.kt)("p",null,"The performance of the drawing of Vector Fonts is effected by the option for the ",(0,n.kt)("strong",{parentName:"p"},"Vector Rendering")," parameter (i.e. ",(0,n.kt)("em",{parentName:"p"},"hardware")," being the fastest)."),(0,n.kt)("h2",h({},{id:"8bit-ltdc-color-look-up-table"}),"8\u4f4dLTDC\u989c\u8272\u67e5\u8be2\u8868"),(0,n.kt)("p",null,"\u5f53LTDC\u88ab\u914d\u7f6e\u4e3a\u8bfb\u53d6L8\u683c\u5f0f\u7684\u5e27\u7f13\u5b58\u548c",(0,n.kt)("a",h({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_b_g_r2222"}),"ABRG2222"),"\u3001",(0,n.kt)("a",h({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_r_g_b2222"}),"ARGB222"),"\u3001",(0,n.kt)("a",h({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___b_g_r_a2222"}),"BGRA2222"),"\u3001\u6216",(0,n.kt)("a",h({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___r_g_b_a2222"}),"RGBA2222"),"\u4e2d\u7684TouchGFX\u6e32\u67d3, TouchGFX Generator\u5c06\u63d0\u4f9b\u4e00\u4e2aCLUT\uff08\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::initialize()"),"\u6267\u884c\u671f\u95f4\u52a0\u8f7d\u5230LTDC\uff09\u3002 \u6709\u5173LTDC\u548cCLUT\u7684\u7528\u6cd5\uff0c\u8be6\u89c1STM32 MCU\u53c2\u8003\u624b\u518c\u3002"))}b.isMDXComponent=!0}}]);