"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[38417],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,s=d["".concat(p,".").concat(m)]||d[m]||h[m]||a;return r?n.createElement(s,l(l({ref:t},u),{},{components:r})):n.createElement(s,l({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12822:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(32118);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children))}},86222:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),o=r(89588);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const i=l},89588:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},39331:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),o=r(89588);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const i=l},66590:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}const a=o},72188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>g});r(59496);var n=r(49613),o=r(12822),a=r(86222),l=r(51721),i=r(39331),p=r(66590);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const d={id:"driver",title:"Driver",sidebar_label:"Driver"},h=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",title:"Driver",description:"\u9a71\u52a8\u90e8\u5206\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4e3aTouchGFX AL\u7684\u5404\u79cd\u529f\u80fd\u9009\u62e9\u9a71\u52a8\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",draft:!1,tags:[],version:"current",frontMatter:{id:"driver",title:"Driver",sidebar_label:"Driver"},sidebar:"docs",previous:{title:"Display",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"},next:{title:"Additional-features",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"}},s={},g=[{value:"\u5e94\u7528\u6ef4\u7b54\u8ba1\u65f6\u6e90",id:"application-tick-source",level:2},{value:"DMA2D Accelerator (ChromART)",id:"graphics-accelerator",level:2},{value:"GPU2D Accelerator (NeoChrom)",id:"gpu2d-accelerator",level:2},{value:"\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf",id:"real-time-operating-system",level:2},{value:"\u65e0OS",id:"no-os",level:3},{value:"FreeRTOS",id:"freertos-middleware-os",level:3},{value:"ThreadX",id:"threadx",level:3},{value:"\u4ece<em>\u4e2d\u95f4\u4ef6\u548c\u8f6f\u4ef6\u5305</em>\u7c7b\u522b\u542f\u7528ThreadX",id:"threadx-middleware",level:4},{value:"\u4ece<em>X-CUB</em>E\u8f6f\u4ef6\u5305\u542f\u7528ThreadX",id:"threadx-xcube",level:4},{value:"\u5176\u4ed6\u517c\u5bb9CMSIS\u7684OS",id:"other-cmsis-compliant-os",level:3}],T={toc:g},k="wrapper";function f(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)(k,c({},T,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u9a71\u52a8\u90e8\u5206\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4e3aTouchGFX AL\u7684\u5404\u79cd\u529f\u80fd\u9009\u62e9\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/driver-settings.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator\u9a71\u52a8\u7a0b\u5e8f\u8bbe\u7f6e"),(0,n.kt)("h2",c({},{id:"application-tick-source"}),"\u5e94\u7528\u6ef4\u7b54\u8ba1\u65f6\u6e90"),(0,n.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u7684\u6ef4\u7b54\u8ba1\u65f6\u6e90\u5b9a\u4e49\u4e86\u5982\u4f55\u9a71\u52a8\u5e94\u7528\u7a0b\u5e8f\u5411\u524d\u6267\u884c\u3002 \u5f00\u53d1\u4eba\u5458\u5177\u6709\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LTDC"),"- \u5982\u679c\u5728\u201c\u663e\u793a\u201d\u7ec4\u4e2d\u5c06LTDC\u9009\u4f5c\u63a5\u53e3\uff0c\u5219\u5e94\u7528\u8ba1\u65f6\u6e90\u53ef\u4ee5\u4e3a\u201cLTDC\u201d\u3002 \u8fd9\u610f\u5473\u7740TouchGFX Generator\u5c06\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFXGeneratedHAL"),"\u7c7b\u4e2d\u751f\u6210\u9a71\u52a8\u7a0b\u5e8f\u51fd\u6570\uff08LTDC\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\uff09\uff0c\u8be5\u51fd\u6570\u901a\u8fc7\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"\u6765\u9a71\u52a8\u5e94\u7528\u7a0b\u5e8f\u5411\u524d\u6267\u884c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49\u548cFMC "),"- \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u5904\u7406\u7a0b\u5e8f\uff0c\u6765\u91cd\u590d\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"\u51fd\u6570\uff0c\u9a71\u52a8\u5e94\u7528\u7a0b\u5e8f\u5411\u524d\u6267\u884c\u3002")),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6ef4\u7b54\u8ba1\u65f6\u6e90\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-fmc",mdxType:"Link"},"FMC\u548cSPI\u663e\u793a\u63a5\u53e3"),"\u573a\u666f"),(0,n.kt)("h2",c({},{id:"graphics-accelerator"}),"DMA2D Accelerator (ChromART)"),(0,n.kt)("p",null,"\u5bf9\u4e8eDMA2D\u56fe\u5f62\u52a0\u901f\uff0c\u5f00\u53d1\u4eba\u5458\u6709\u4e09\u4e2a\u9009\u9879\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7981\u7528"),"-\u5e94\u7528\u7a0b\u5e8f\u53ea\u4f7f\u7528CPU\u8fdb\u884c\u6e32\u67d3\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u542f\u7528 "),"- \u5e94\u7528\u7a0b\u5e8f\u5728Chrom-ART\u53ef\u7528\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528Chrom-ART\u6765\u642c\u8fd0\u548c\u6df7\u5408\u50cf\u7d20\uff0c\u91ca\u653eCPU\u8d1f\u8f7d\u3002 \u9a71\u52a8\u7a0b\u5e8f\u7531TouchGFX Generator\u751f\u6210\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u4eba\u5458\u91c7\u53d6\u4efb\u4f55\u63aa\u65bd\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," - TouchGFX Generator \u751f\u6210\u901a\u7528\u578bTouchGFX DMA\u7c7b\uff0c\u8be5\u7c7b\u7531TouchGFX \u5f15\u64ce\u4e2d\u7684DMA\u63a5\u53e3\u6d3e\u751f\u800c\u6765\uff0c\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u4e3a\u81ea\u5b9a\u4e49\u56fe\u5f62\u52a0\u901f\u5668\u5b9e\u73b0\u7684\u6210\u5458\u51fd\u6570\u3002")),(0,n.kt)("p",null,"\u8981\u5728ToughGFX \u751f\u6210\u5668\u4e2d\u9009\u62e9DMA2D\u52a0\u901f\u5668\uff0c\u5fc5\u987b\u5728STM32CubeMX\u7684",(0,n.kt)("i",null,"Multimedia"),"\u7c7b\u522b\u4e2d\u542f\u7528DMA2D\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-dma2d.webp",width:"250",mdxType:"Figure"},"\u5bf9\u4e8e\u652f\u6301DMA2D\u7684MCUS\uff0c\u53ef\u5728STM32CubeMX\u4e2d\u7684\u591a\u5a92\u4f53\u7c7b\u522b\u4e2d\u542f\u7528DMA2D\u3002"),(0,n.kt)("p",null,"TouchGFX Generator\u751f\u6210\u7684DMA2D\uff08ChromART\uff09\u9a71\u52a8\u7a0b\u5e8f\u652f\u6301\u4e24\u79cd\u63a5\u6536TransferCompleteInterrupt\u7684\u65b9\u5f0f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528STM32Cube HAL\u9a71\u52a8\u7a0b\u5e8f\uff0c\u5176\u5c06\u56de\u8c03\u51fd\u6570\u6ce8\u518c\u5230dma2d\u53e5\u67c4",(0,n.kt)("inlineCode",{parentName:"li"},"hdma2d.XferCpltCallback"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"DMA2D_IRQHandler()"),"\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\u3002")),(0,n.kt)("p",null,"\u901a\u8fc7\u5728STM32CubeMX\u4e2d\u7684DMA2D IP\u7684NVIC\u8bbe\u7f6e\u4e2d\u542f\u7528\u6216\u7981\u7528DMA2D\u5168\u5c40\u4e2d\u65ad\uff0c\u53ef\u4ee5\u5728\u8fd9\u4e24\u8005\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dma2d-interrupt.webp",width:"400",mdxType:"Figure"},"STM32CubeMX\u7cfb\u7edf\u6838\u5fc3\u7c7b\u522b\u4e0b\u7684NVIC\u8bbe\u7f6e\u4e2d\u542f\u7528/\u7981\u7528DMA2D\u5168\u5c40\u4e2d\u65ad"),(0,n.kt)("p",null,"\u9009\u98791\uff09\u542f\u7528\u5168\u5c40\u4e2d\u65ad\u751f\u6210\u7684\u4ee3\u7801\uff0c\u9009\u98792\uff09\u7981\u7528\u5168\u5c40\u4e2d\u65ad\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},(0,n.kt)("li",null,"\u5bf9DMA2D\u4f7f\u7528\u5168\u5c40\u4e2d\u65ad\u65f6\uff0c\u8bf7\u786e\u4fdd\u201c IRQ\u5904\u7406\u7a0b\u5e8f\u201d\u8c03\u7528\u201c DMA2D HAL\u5904\u7406\u7a0b\u5e8f\u201d\u3002 \u8fd9\u662f\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,n.kt)("li",null,"\u5982\u679c\u5728\u542f\u7528\u5168\u5c40\u4e2d\u65ad\u7684\u540c\u65f6\u7981\u7528DMA2D\u7684\u201c IRQ\u5904\u7406\u7a0b\u5e8f\u201d\u548c\u201c\u8c03\u7528HAL\u5904\u7406\u7a0b\u5e8f\u201d\uff0c\u5c06\u5bfc\u81f4\u6c38\u4e0d\u8c03\u7528\u5df2\u6ce8\u518c\u7684\u56de\u8c03\u3002")),(0,n.kt)("h2",c({},{id:"gpu2d-accelerator"}),"GPU2D Accelerator (NeoChrom)"),(0,n.kt)("p",null,"GPU2D\uff08NeoChrom\uff09\u662f\u4e00\u79cd\u56fe\u5f62\u52a0\u901f\u5668\uff0c\u80fd\u591f\u52a0\u901fTouchGFX\u4e2d\u7684\u8bb8\u591a\u7ed8\u56fe\u64cd\u4f5c\uff0c\u5305\u62ec\u7eb9\u7406\u6620\u5c04\u548c",(0,n.kt)("a",c({parentName:"p"},{href:"additional-features#vector-rendering"}),"\u77e2\u91cf\u6e32\u67d3"),"\u3002 \u5b83\u652f\u6301RGB565\u3001RGB888\u548cARGB8888\u683c\u5f0f\u7684\u5e27\u7f13\u5b58\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8eGPU2D\u56fe\u5f62\u52a0\u901f\uff0c\u5f00\u53d1\u4eba\u5458\u6709\u4e24\u4e2a\u9009\u9879\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7981\u7528"),"-\u5e94\u7528\u7a0b\u5e8f\u4e0d\u4f7f\u7528GPU\u8fdb\u884c\u56fe\u5f62\u6e32\u67d3\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u542f\u7528"),"-\u5e94\u7528\u7a0b\u5e8fTouchGFX\u5728NeoChrom\u53ef\u7528\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528NeoChrom\u6267\u884c\u56fe\u5f62\u6e32\u67d3\u52a0\u901f\u64cd\u4f5c\u3002 \u9a71\u52a8\u7a0b\u5e8f\u7531TouchGFX Generator\u751f\u6210\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u4eba\u5458\u91c7\u53d6\u4efb\u4f55\u63aa\u65bd\u3002")),(0,n.kt)("p",null,"\u8981\u5728ToughGFX \u751f\u6210\u5668\u4e2d\u9009\u62e9GPU2D\u52a0\u901f\u5668\uff0c\u5fc5\u987b\u5728STM32CubeMX\u7684Multimedia \u7c7b\u522b\u4e2d\u542f\u7528\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-gpu2d.webp",width:"250",mdxType:"Figure"},"\u5bf9\u4e8e\u652f\u6301GPU2D\u7684MCUS\uff0c\u53ef\u5728CubeMX\u4e2d\u7684*\u591a\u5a92\u4f53*\u7c7b\u522b\u4e2d\u542f\u7528GPU2D\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},"\u53ea\u6709\u5f53STM32CubeMX\u4e2d\u9879\u76ee\u7684",(0,n.kt)("i",null,"\u591a\u5a92\u4f53"),"\u90e8\u5206\u542f\u7528\u4e86GPU2D, GPU2D\u9009\u9879\u624d\u53ef\u89c1\u3002 \u5b83\u4ec5\u9002\u7528\u4e8eSTM32U599\u82af\u7247\uff0c\u5e76\u4e14\u53ea\u6709\u5728",(0,n.kt)("i",null,"\u4e2d\u95f4\u4ef6"),"\u90e8\u5206\u7684ThreadX RTOS\u540c\u6837\u542f\u7528\u6216\u8fd0\u884c\u88f8\u673a\u5e94\u7528\u7a0b\u5e8f\uff08\u65e0\u64cd\u4f5c\u7cfb\u7edf\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u624d\u80fd\u4e0eTouchGFX\u4e00\u8d77\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u542f\u7528\u540e\uff0cTouchGFX \u751f\u6210\u5668\u5c06\u51fa\u73b0\u4e00\u4e2a\u65b0\u90e8\u5206\uff08",(0,n.kt)("strong",{parentName:"p"},"GPU2D\u9a71\u52a8\u7a0b\u5e8f"),"\uff09\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/gpu2d-driver.png",width:"300",mdxType:"Figure"},"GPU2D\u9a71\u52a8\u7a0b\u5e8f\u8bbe\u7f6e"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"GPU2D Command List Size"),"\uff08\u547d\u4ee4\u5217\u8868\u5927\u5c0f\uff09\u8bbe\u7f6e\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u8bbe\u7f6eGPU2D\u4f7f\u7528\u7684\u547d\u4ee4\u5217\u8868\u7684\u5927\u5c0f\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},"When ",(0,n.kt)(l.Z,{to:"additional-features#vector-rendering",mdxType:"Link"},"Vector Rendering")," is also enabled with the ",(0,n.kt)("i",null,"hardware")," option in the application another memory pool for a *stencil buffer* to perform vector rendering operations is created by the TouchGFX Generator. The size of this memory pool is: ",(0,n.kt)("i",null,"(Display Width * Display Height bytes)")," + ",(0,n.kt)("i",null,"5kb extra margin"),". This will therefore consume more RAM. Users can opt for the ",(0,n.kt)("i",null,"software")," option to save RAM at the expense of slower performance."),(0,n.kt)("h2",c({},{id:"real-time-operating-system"}),"\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf"),(0,n.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4f7f\u7528\u4efb\u4f55\u652f\u6301TouchGFX\u7684RTOS\uff08\u751a\u81f3\u65e0\u64cd\u4f5c\u7cfb\u7edf\uff09\u3002 \u5982",(0,n.kt)("a",c({parentName:"p"},{href:"../../touchgfx-architecture"}),"\u62bd\u8c61\u5c42\u67b6\u6784"),"\u4e2d\u6240\u8ff0\uff0cTouchGFX \u5f15\u64ce\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u63a5\u53e3\u5c06\u5176\u4e3b\u4e8b\u4ef6\u5faa\u73af\u4ee5\u53ca\u5e27\u7f13\u5b58\u8bbf\u95ee\u4e0e\u7528\u6237\u9009\u62e9\u7684RTOS\u540c\u6b65\u3002 \u5f53\u5f00\u53d1\u8005\u901a\u8fc7TouchGFX Generator\u9009\u62e9\u64cd\u4f5c\u7cfb\u7edf\u65f6\uff0c\u5c06\u751f\u6210\u4ee3\u7801\u5e76\u901a\u8fc7\u6240\u9009\u64cd\u4f5c\u7cfb\u7edf\u7684\u57fa\u5143\u5b9e\u73b0\u5185\u90e8\u540c\u6b65\u3002 \u64cd\u4f5c\u7cfb\u7edf\u4ecd\u7136\u5fc5\u987b\u901a\u8fc7STM32CubeMX\u8fdb\u884c\u914d\u7f6e\uff0c\u4ee5\u786e\u5b9a\u5806\u6808\u5927\u5c0f\u7b49\u3002"),(0,n.kt)("p",null,"FreeRTOS (CMSIS OS V1\u548cV2)\u548cThreadX(\u672c\u5730\u4e2d\u95f4\u4ef6\u6216Azure RTOS\u8f6f\u4ef6\u5305)\u53ef\u76f4\u63a5\u5728STM32CubeMX\u4e2d\u8fdb\u884c\u914d\u7f6e\uff0cTouchGFX Generator\u4e3a\u7528\u6237\u63d0\u4f9b\u4efb\u52a1\u5b9a\u4e49\u548cTouchGFX RTOS\u9a71\u52a8\u7a0b\u5e8f\u7684\u751f\u6210\u4ee3\u7801\u3002 TouchGFX Generator \u53ef\u751f\u6210\u7b26\u5408CMSIS V1\u548cCMSIS V2\u6807\u51c6\u7684RTOS\u9a71\u52a8\u7a0b\u5e8f\uff0c\u4e0e\u4efb\u4f55\u7b26\u5408CMSIS\u6807\u51c6\u7684RTOS\u4e00\u8d77\u8fd0\u884c\uff0c\u4e00\u4e2a\u7528\u4e8eThreadX\u7684\u9a71\u52a8\u7a0b\u5e8f\uff0c\u4e00\u4e2a\u7528\u4e8e\u5728\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\uff08\u65e0\u64cd\u4f5c\u7cfb\u7edf\uff09\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u88f8\u673a\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,n.kt)("h3",c({},{id:"no-os"}),"\u65e0OS"),(0,n.kt)("p",null,"\u5e0c\u671b\u5728",(0,n.kt)("em",{parentName:"p"},"\u65e0\u64cd\u4f5c\u7cfb\u7edf"),"\u7684\u60c5\u51b5\u4e0b\u8fd0\u884cTouchGFX\u65f6\uff0c\u5982\u679c",(0,n.kt)("em",{parentName:"p"},"\u4e2d\u95f4\u4ef6\u548c\u8f6f\u4ef6\u5305"),"\u7c7b\u522b\u6216\u8005X-CUBE\u4e2d\u672a\u542f\u7528\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5219ToughGFX \u751f\u6210\u5668\u4e2d\u7684\u65e0OS\u9009\u9879\u53d8\u4e3a\u53ef\u7528\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u8fd0\u884c\u88f8\u673a\u5e94\u7528\u7a0b\u5e8f\u65f6TouchGFX Generator\u751f\u6210\u7684\u4ee3\u7801\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u573a\u666f\u3002"),(0,n.kt)("h3",c({},{id:"freertos-middleware-os"}),"FreeRTOS"),(0,n.kt)("p",null,"\u9009\u62e9ToughGFX \u751f\u6210\u5668\u4e2d\u7684CMSIS_RTOS_V1\u6216CMSIS_RTOS_V2\u65f6\uff0c\u5fc5\u987b\u542f\u7528STM32CubeMX ",(0,n.kt)("em",{parentName:"p"},"\u4e2d\u95f4\u4ef6\u548c\u8f6f\u4ef6\u5305"),"\u7c7b\u522b\u4e2d\u7684FreeRTOS\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-middleware.webp",width:"400",mdxType:"Figure"},"STM32CubeMX\u9879\u76ee\u4e2d\u542f\u7528\u4e86FreeRTOS"),(0,n.kt)("p",null,"\u67d0\u4e9bTBS\u9ed8\u8ba4\u8bbe\u7f6e\u672a\u914d\u7f6e\u4f7f\u7528FreeRTOS\u4e2d\u95f4\u4ef6\uff0c\u800c\u662f\u4f7f\u7528ThreadX\u6216NoOS\uff08\u4f8b\u5982\uff1aSTM32U599\uff09\u3002 \u5982\u679c\u7528\u6237\u4ecd\u7136\u60f3\u5c06FreeRTOS\u4e0e\u6b64\u7c7bTBS\u4e00\u8d77\u4f7f\u7528\uff0c\u5219\u5fc5\u987b\u5728STM32CubeMX\u7684",(0,n.kt)("em",{parentName:"p"},"\u8f6f\u4ef6\u5305\u7ec4\u4ef6\u9009\u62e9\u5668\u4e2d"),"\u4e0b\u8f7dX-CUBE-FreeRTOS\u5305\u5e76\u542f\u7528\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-software-packs.webp",width:"800",mdxType:"Figure"},"\u5728\u8f6f\u4ef6\u5305\u7ec4\u4ef6\u9009\u62e9\u5668\u4e2d\u542f\u7528FreeRTOS"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u4e3aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6eFreeRTOS\uff08CMSIS_RTOS_V1\u548cCMSIS_RTOS_V2\uff09\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"\xa0Real Time Operating System\u53d1\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u573a\u666f\u3002"),(0,n.kt)("h3",c({},{id:"threadx"}),"ThreadX"),(0,n.kt)("p",null,"\u53ef\u901a\u8fc7\u9009\u62e9",(0,n.kt)("em",{parentName:"p"},"X-CUBE"),"\u8f6f\u4ef6\u5305\u6216\u542f\u7528STM32CubeMX\u4e2d\u7684Native ThreadX \u4e2d\u95f4\u4ef6\uff08\u5982\u679c\u9002\u7528\u4e8e\u9009\u5b9a\u7684MCU\u8bbe\u5907\uff09\u6765\u542f\u7528ThreadX\u3002"),(0,n.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u5e94\u4e86\u89e3ThreadX\u662f\u5426\u914d\u7f6e\u4e3a",(0,n.kt)("em",{parentName:"p"},"X-CUBE"),"\u8f6f\u4ef6\u5305\u6216\u7279\u5b9aMCU\u7cfb\u5217\u7684Native ThreadX Middleware\uff08\u539f\u751fThreadX\u4e2d\u95f4\u4ef6\uff09\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},(0,n.kt)("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u65b0\u578bSTM32 MCU\u5668\u4ef6\u5747\u652f\u6301\u76f4\u63a5\u6765\u81eaSTM32CubeMX ",(0,n.kt)("i",null,"Middleware\uff08\u4e2d\u95f4\u4ef6\uff09"),"\u7c7b\u522b\u7684ThreadX\uff0c\u65e0\u9700\u53e6\u5916\u4e0b\u8f7d\u3002 TouchGFX \u677f\u7ea7\u652f\u6301\u5305\u5c06\u7f13\u6162\u8fc7\u6e21\u5230\u4f7f\u7528\u53ef\u7528\u7684ThreadX\u4e2d\u95f4\u4ef6\u6216X-CUBE-AZRTOS\u8f6f\u4ef6\u5305\u3002"),(0,n.kt)("li",null,"\u63d0\u4f9bThreadX\u652f\u6301\u7684X-CUBE-ARTOS-XX\u8f6f\u4ef6\u5305\u9002\u7528\u4e8e\u5404\u79cdSTM32 MCU\u7cfb\u5217\uff0c\u53ef\u5728STM32CubeMX\u4e2d\u7684",(0,n.kt)("i",null,"Embedded Software Packages Manager\uff08\u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\uff09"),"\u4e2d\u627e\u5230\u3002")),(0,n.kt)("p",null,"\u4ee5\u4e0b\u5404\u8282\u5c06\u5c55\u793a\u5982\u4f55\u5c06ThreadX\u4f5c\u4e3a",(0,n.kt)("em",{parentName:"p"},"Middleware\uff08\u4e2d\u95f4\u4ef6\uff09"),"\u6216",(0,n.kt)("em",{parentName:"p"},"AZRTOS Software Pack\uff08\u8f6f\u4ef6\u5305\uff09"),"\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("h4",c({},{id:"threadx-middleware"}),"\u4ece",(0,n.kt)("em",{parentName:"h4"},"\u4e2d\u95f4\u4ef6\u548c\u8f6f\u4ef6\u5305"),"\u7c7b\u522b\u542f\u7528ThreadX"),(0,n.kt)("p",null,"\u9009\u62e9ToughGFX \u751f\u6210\u5668\u4e2d\u7684ThreadX\u65f6\uff0c\u5fc5\u987b\u542f\u7528STM32CubeMX",(0,n.kt)("em",{parentName:"p"},"\u4e2d\u95f4\u4ef6\u548c\u8f6f\u4ef6\u5305"),"\u7c7b\u522b\u4e2d\u7684ThreadX\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-middleware.webp",width:"300",mdxType:"Figure"},"STM32CubeMX\u9879\u76ee\u4e2d\u542f\u7528\u6765\u81ea\u4e2d\u95f4\u4ef6\u548c\u8f6f\u4ef6\u5305\u7684ThreadX"),(0,n.kt)("p",null,"\u542f\u7528\u540e\uff0cThreadX\u9009\u9879\u5728ToughGFX \u751f\u6210\u5668\u4e2d\u53ef\u7528\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u5c06ThreadX\u914d\u7f6e\u4e3aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u672c\u5730\u4e2d\u95f4\u4ef6\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u573a\u666f\u3002"),(0,n.kt)("h4",c({},{id:"threadx-xcube"}),"\u4ece",(0,n.kt)("em",{parentName:"h4"},"X-CUB"),"E\u8f6f\u4ef6\u5305\u542f\u7528ThreadX"),(0,n.kt)("p",null,"\u8981\u5728TouchGFX Generator\u4e2d\u9009\u62e9ThreadX\uff0c\u5fc5\u987b\u5728STM32CubeMX\u4e2d\u7684",(0,n.kt)("em",{parentName:"p"},"Software Packs Component Selector\uff08\u8f6f\u4ef6\u5305\u7ec4\u4ef6\u9009\u62e9\u5668\uff09"),"\u4e2d\u542f\u7528AZRTOS Software Pack\uff08\u8f6f\u4ef6\u5305\uff09\u3002 \u5728\u9879\u76ee\u4e2d\uff0c\u5355\u51fb ",(0,n.kt)(p.Z,{mdxType:"Shortcut"},"STM32CubeMX\u9879\u76ee\u83dc\u5355\u4e2d\u7684\u201cSelect Components\uff08\u9009\u62e9\u7ec4\u4ef6\uff09\u201d\u6309\u94ae\u6216Alt+o")," \u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.webp",width:"700",mdxType:"Figure"},"\u9009\u62e9STM32CubeMX\u4e2d\u7684\u9644\u52a0\u8f6f\u4ef6"),(0,n.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u9879\u76ee\u4e2d\u5982\u4f55\u4f7f\u80fdAZRTOS\u8f6f\u4ef6\u5305\u3002 \u9009\u62e9",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"RTOS "),"ThreadX"),"\u5e76\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"Core"),"\u590d\u9009\u6846\u4ee5\u542f\u7528ThreadX\u3002 \u4e0b\u8f7d\u5e76\u5b89\u88c5\u8f6f\u4ef6\u5305\uff08\u5982\u5c1a\u672a\u5b8c\u6210\uff09\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos.webp",width:"400",mdxType:"Figure"},"\u4eceX-CUBE-AZRTOS\u8f6f\u4ef6\u5305\u542f\u7528ThreadX"),(0,n.kt)("p",null,"\u5c06ThreadX\u8f6f\u4ef6\u5305\u6dfb\u52a0\u5230\u9879\u76ee\u540e\uff0c",(0,n.kt)("em",{parentName:"p"},"X-CUBE"),"\u5e94\u5728STM32CubeMX\u9879\u76ee\u83dc\u5355\u5de6\u4fa7\u7684",(0,n.kt)("em",{parentName:"p"},"\u4e2d\u95f4\u4ef6\u548c\u8f6f\u4ef6\u5305"),"\u7c7b\u522b\u4e0b\u53ef\u89c1\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-enabled.webp",width:"200",mdxType:"Figure"},"STM32CubeMX\u9879\u76ee\u4e2d\u542f\u7528\u4e86X-CUBE-AZRTOS\u7684ThreadX"),(0,n.kt)("p",null,"\u4e00\u65e6\u542f\u7528ThreadX\uff0c\u5b83\u5c06\u6210\u4e3aToughGFX \u751f\u6210\u5668\u4e2d\u7684\u4e00\u4e2a\u53ef\u7528\u9009\u9879\uff0c\u9009\u62e9\u540e\uff0c\u5c06\u663e\u793a",(0,n.kt)("strong",{parentName:"p"},"\u5185\u5b58\u6c60\u5927\u5c0f"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u5185\u5b58\u5806\u6808\u5927\u5c0f"),"\u503c\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"\u5728ToughGFX \u751f\u6210\u5668\u4e2d\u9009\u62e9ThreadX"),(0,n.kt)("p",null,"\u6b64\u7c7b\u503c\u5e94\u8db3\u591f\u5927\uff0c\u4ee5\u5305\u542b\u7ebf\u7a0b\u8d44\u6e90\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u5c06ThreadX\u914d\u7f6e\u4e3aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684X-CUBE\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u573a\u666f\u3002"),(0,n.kt)("h3",c({},{id:"other-cmsis-compliant-os"}),"\u5176\u4ed6\u517c\u5bb9CMSIS\u7684OS"),(0,n.kt)("p",null,"\u5f53\u5f00\u53d1\u4eba\u5458\u91c7\u7528\u4e0eSTM32CubeMX\u63d0\u4f9b\u7684\u64cd\u4f5c\u7cfb\u7edf\uff08FreeRTOS\u548cThreadX\uff09\u4e0d\u540c\u7684\u5176\u4ed6\u517c\u5bb9CMSIS\u7684\u64cd\u4f5c\u7cfb\u7edf\u65f6\uff0c\u4ed6\u5fc5\u987b\u624b\u52a8\u5b8c\u6210RTOS\u914d\u7f6e\u548c\u4efb\u52a1\u5b9a\u4e49\u3002 TouchGFX Generator\u5c06\u751f\u6210\u4e00\u4e2a\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u5b9e\u73b0\u7684\u7a7a",(0,n.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u63a5\u53e3\u3002 \u901a\u5e38\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u624b\u52a8\u6b65\u9aa4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6eRTOS"),(0,n.kt)("li",{parentName:"ol"},"\u5b9e\u73b0",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers"),"\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4efb\u52a1\u4ee5\u8fd0\u884cTouchGFX (",(0,n.kt)("inlineCode",{parentName:"li"},"MX_TouchGFX_Process"),")"),(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8\u8c03\u5ea6\u5668")),(0,n.kt)("p",null,"\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process"),"\uff0c\u4ee5\u542f\u52a8\u4efb\u52a1\u5904\u7406\u7a0b\u5e8f\u4e2d\u7684TouchGFX Engine\u4e3b\u5faa\u73af\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"void\xa0MX_TouchGFX_Process(void);\n")))}f.isMDXComponent=!0}}]);