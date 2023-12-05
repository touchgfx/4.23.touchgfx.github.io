"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[38417],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var o=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,s=u["".concat(c,".").concat(m)]||u[m]||h[m]||n;return r?o.createElement(s,l(l({ref:t},p),{},{components:r})):o.createElement(s,l({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<n;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12822:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(59496),a=r(32118);const n=function(e){const t=e.noShadow||!1,r=e.width,n=e.height,l=(0,a.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:r,height:n,src:l})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:r,height:n,src:l})),o.createElement("p",null,e.children))}},86222:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(59496),a=r(89588);const n=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:n},this.props.children)}}const i=l},89588:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(59496);class a extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}const n=a},39331:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(59496),a=r(89588);const n=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:n},this.props.children)}}const i=l},66590:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(59496);class a extends o.Component{render(){return o.createElement("code",{className:"shortcut"},this.props.children)}}const n=a},72188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>g});r(59496);var o=r(49613),a=r(12822),n=r(86222),l=r(51721),i=r(39331),c=r(66590);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={id:"driver",title:"\u9a71\u52a8",sidebar_label:"\u9a71\u52a8"},h=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",title:"\u9a71\u52a8",description:"\u9a71\u52a8\u90e8\u5206\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4e3aTouchGFX AL\u7684\u5404\u79cd\u529f\u80fd\u9009\u62e9\u9a71\u52a8\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",draft:!1,tags:[],version:"current",frontMatter:{id:"driver",title:"\u9a71\u52a8",sidebar_label:"\u9a71\u52a8"},sidebar:"docs",previous:{title:"\u663e\u793a",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"},next:{title:"\u9644\u52a0\u529f\u80fd",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"}},s={},g=[{value:"\u5e94\u7528\u6ef4\u7b54\u8ba1\u65f6\u6e90",id:"application-tick-source",level:2},{value:"DMA2D Accelerator (ChromART)",id:"graphics-accelerator",level:2},{value:"GPU2D Accelerator (NeoChrom)",id:"gpu2d-accelerator",level:2},{value:"\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf",id:"real-time-operating-system",level:2},{value:"\u65e0OS",id:"no-os",level:3},{value:"FreeRTOS",id:"freertos-middleware-os",level:3},{value:"ThreadX",id:"threadx",level:3},{value:"Enabling ThreadX from <em>Middleware and Software Packs</em> category",id:"threadx-middleware",level:4},{value:"\u4ece<em>X-CUB</em>E\u8f6f\u4ef6\u5305\u542f\u7528ThreadX",id:"threadx-xcube",level:4},{value:"\u5176\u4ed6\u517c\u5bb9CMSIS\u7684OS",id:"other-cmsis-compliant-os",level:3}],T={toc:g},f="wrapper";function k(e){var{components:t}=e,r=p(e,["components"]);return(0,o.kt)(f,d({},T,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9a71\u52a8\u90e8\u5206\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4e3aTouchGFX AL\u7684\u5404\u79cd\u529f\u80fd\u9009\u62e9\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/driver-settings.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator\u9a71\u52a8\u7a0b\u5e8f\u8bbe\u7f6e"),(0,o.kt)("h2",d({},{id:"application-tick-source"}),"\u5e94\u7528\u6ef4\u7b54\u8ba1\u65f6\u6e90"),(0,o.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u7684\u6ef4\u7b54\u8ba1\u65f6\u6e90\u5b9a\u4e49\u4e86\u5982\u4f55\u9a71\u52a8\u5e94\u7528\u7a0b\u5e8f\u5411\u524d\u6267\u884c\u3002 \u5f00\u53d1\u4eba\u5458\u5177\u6709\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LTDC"),' - If LTDC is selected as the interface in the "Display" group, the Application Tick Source can be "LTDC". \u8fd9\u610f\u5473\u7740TouchGFX Generator\u5c06\u5728',(0,o.kt)("inlineCode",{parentName:"li"},"TouchGFXGeneratedHAL"),"\u7c7b\u4e2d\u751f\u6210\u9a71\u52a8\u7a0b\u5e8f\u51fd\u6570\uff08LTDC\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\uff09\uff0c\u8be5\u51fd\u6570\u901a\u8fc7\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"\u6765\u9a71\u52a8\u5e94\u7528\u7a0b\u5e8f\u5411\u524d\u6267\u884c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49\u548cFMC "),"- \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u5904\u7406\u7a0b\u5e8f\uff0c\u6765\u91cd\u590d\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"\u51fd\u6570\uff0c\u9a71\u52a8\u5e94\u7528\u7a0b\u5e8f\u5411\u524d\u6267\u884c\u3002")),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6ef4\u7b54\u8ba1\u65f6\u6e90\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-fmc",mdxType:"Link"},"FMC\u548cSPI\u663e\u793a\u63a5\u53e3"),"\u573a\u666f"),(0,o.kt)("h2",d({},{id:"graphics-accelerator"}),"DMA2D Accelerator (ChromART)"),(0,o.kt)("p",null,"\u5bf9\u4e8eDMA2D\u56fe\u5f62\u52a0\u901f\uff0c\u5f00\u53d1\u4eba\u5458\u6709\u4e09\u4e2a\u9009\u9879\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No")," - The application renders using only the CPU."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Yes")," -\xa0The application uses the ChromART chip when possible to move and blend pixels, freeing up CPU cycles. \u9a71\u52a8\u7a0b\u5e8f\u7531TouchGFX Generator\u751f\u6210\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u4eba\u5458\u91c7\u53d6\u4efb\u4f55\u63aa\u65bd\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," - TouchGFX Generator \u751f\u6210\u901a\u7528\u578bTouchGFX DMA\u7c7b\uff0c\u8be5\u7c7b\u7531TouchGFX \u5f15\u64ce\u4e2d\u7684DMA\u63a5\u53e3\u6d3e\u751f\u800c\u6765\uff0c\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u4e3a\u81ea\u5b9a\u4e49\u56fe\u5f62\u52a0\u901f\u5668\u5b9e\u73b0\u7684\u6210\u5458\u51fd\u6570\u3002")),(0,o.kt)("p",null,"To be able to select DMA2D Accelerator in TouchGFX Generator, it must be enabled in the ",(0,o.kt)("i",null,"Multimedia")," category in STM32CubeMX:"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-dma2d.webp",width:"250",mdxType:"Figure"},"\u5bf9\u4e8e\u652f\u6301DMA2D\u7684MCUS\uff0c\u53ef\u5728STM32CubeMX\u4e2d\u7684\u591a\u5a92\u4f53\u7c7b\u522b\u4e2d\u542f\u7528DMA2D\u3002"),(0,o.kt)("p",null,"TouchGFX Generator\u751f\u6210\u7684DMA2D\uff08ChromART\uff09\u9a71\u52a8\u7a0b\u5e8f\u652f\u6301\u4e24\u79cd\u63a5\u6536TransferCompleteInterrupt\u7684\u65b9\u5f0f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528STM32Cube HAL\u9a71\u52a8\u7a0b\u5e8f\uff0c\u5176\u5c06\u56de\u8c03\u51fd\u6570\u6ce8\u518c\u5230dma2d\u53e5\u67c4",(0,o.kt)("inlineCode",{parentName:"li"},"hdma2d.XferCpltCallback"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"DMA2D_IRQHandler()"),"\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\u3002")),(0,o.kt)("p",null,"\u901a\u8fc7\u5728STM32CubeMX\u4e2d\u7684DMA2D IP\u7684NVIC\u8bbe\u7f6e\u4e2d\u542f\u7528\u6216\u7981\u7528DMA2D\u5168\u5c40\u4e2d\u65ad\uff0c\u53ef\u4ee5\u5728\u8fd9\u4e24\u8005\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\uff1a"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dma2d-interrupt.webp",width:"400",mdxType:"Figure"},"STM32CubeMX\u7cfb\u7edf\u6838\u5fc3\u7c7b\u522b\u4e0b\u7684NVIC\u8bbe\u7f6e\u4e2d\u542f\u7528/\u7981\u7528DMA2D\u5168\u5c40\u4e2d\u65ad"),(0,o.kt)("p",null,"\u9009\u98791\uff09\u542f\u7528\u5168\u5c40\u4e2d\u65ad\u751f\u6210\u7684\u4ee3\u7801\uff0c\u9009\u98792\uff09\u7981\u7528\u5168\u5c40\u4e2d\u65ad\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,o.kt)(i.Z,{mdxType:"Note"},(0,o.kt)("li",null,"\u5bf9DMA2D\u4f7f\u7528\u5168\u5c40\u4e2d\u65ad\u65f6\uff0c\u8bf7\u786e\u4fdd\u201c IRQ\u5904\u7406\u7a0b\u5e8f\u201d\u8c03\u7528\u201c DMA2D HAL\u5904\u7406\u7a0b\u5e8f\u201d\u3002 \u8fd9\u662f\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,o.kt)("li",null,"\u5982\u679c\u5728\u542f\u7528\u5168\u5c40\u4e2d\u65ad\u7684\u540c\u65f6\u7981\u7528DMA2D\u7684\u201c IRQ\u5904\u7406\u7a0b\u5e8f\u201d\u548c\u201c\u8c03\u7528HAL\u5904\u7406\u7a0b\u5e8f\u201d\uff0c\u5c06\u5bfc\u81f4\u6c38\u4e0d\u8c03\u7528\u5df2\u6ce8\u518c\u7684\u56de\u8c03\u3002")),(0,o.kt)("h2",d({},{id:"gpu2d-accelerator"}),"GPU2D Accelerator (NeoChrom)"),(0,o.kt)("p",null,"GPU2D\uff08NeoChrom\uff09\u662f\u4e00\u79cd\u56fe\u5f62\u52a0\u901f\u5668\uff0c\u80fd\u591f\u52a0\u901fTouchGFX\u4e2d\u7684\u8bb8\u591a\u7ed8\u56fe\u64cd\u4f5c\uff0c\u5305\u62ec\u7eb9\u7406\u6620\u5c04\u548c",(0,o.kt)("a",d({parentName:"p"},{href:"additional-features#vector-rendering"}),"\u77e2\u91cf\u6e32\u67d3"),"\u3002 \u5b83\u652f\u6301RGB565\u3001RGB888\u548cARGB8888\u683c\u5f0f\u7684\u5e27\u7f13\u5b58\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8eGPU2D\u56fe\u5f62\u52a0\u901f\uff0c\u5f00\u53d1\u4eba\u5458\u6709\u4e24\u4e2a\u9009\u9879\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No")," - The application draws using only the CPU."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Yes")," -\xa0The application uses the NeoChrom chip when possible to accelerate many drawing operations done by TouchGFX. \u9a71\u52a8\u7a0b\u5e8f\u7531TouchGFX Generator\u751f\u6210\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u4eba\u5458\u91c7\u53d6\u4efb\u4f55\u63aa\u65bd\u3002")),(0,o.kt)("p",null,"To be able to select GPU2D Accelerator in TouchGFX Generator, it must be enabled in the Multimedia category in STM32CubeMX:"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-gpu2d.webp",width:"250",mdxType:"Figure"},"\u5bf9\u4e8e\u652f\u6301GPU2D\u7684MCUS\uff0c\u53ef\u5728CubeMX\u4e2d\u7684*\u591a\u5a92\u4f53*\u7c7b\u522b\u4e2d\u542f\u7528GPU2D\u3002"),(0,o.kt)(i.Z,{mdxType:"Note"},"\u53ea\u6709\u5f53STM32CubeMX\u4e2d\u9879\u76ee\u7684",(0,o.kt)("i",null,"\u591a\u5a92\u4f53"),"\u90e8\u5206\u542f\u7528\u4e86GPU2D, GPU2D\u9009\u9879\u624d\u53ef\u89c1\u3002 \u5b83\u4ec5\u9002\u7528\u4e8eSTM32U599\u82af\u7247\uff0c\u5e76\u4e14\u53ea\u6709\u5728",(0,o.kt)("i",null,"\u4e2d\u95f4\u4ef6"),"\u90e8\u5206\u7684ThreadX RTOS\u540c\u6837\u542f\u7528\u6216\u8fd0\u884c\u88f8\u673a\u5e94\u7528\u7a0b\u5e8f\uff08\u65e0\u64cd\u4f5c\u7cfb\u7edf\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u624d\u80fd\u4e0eTouchGFX\u4e00\u8d77\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u542f\u7528\u540e\uff0cTouchGFX \u751f\u6210\u5668\u5c06\u51fa\u73b0\u4e00\u4e2a\u65b0\u90e8\u5206\uff08",(0,o.kt)("strong",{parentName:"p"},"GPU2D\u9a71\u52a8\u7a0b\u5e8f"),"\uff09\uff1a"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/gpu2d-driver.png",width:"300",mdxType:"Figure"},"GPU2D\u9a71\u52a8\u7a0b\u5e8f\u8bbe\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"GPU2D Command List Size"),"\uff08\u547d\u4ee4\u5217\u8868\u5927\u5c0f\uff09\u8bbe\u7f6e\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u8bbe\u7f6eGPU2D\u4f7f\u7528\u7684\u547d\u4ee4\u5217\u8868\u7684\u5927\u5c0f\u3002"),(0,o.kt)(i.Z,{mdxType:"Note"},"When ",(0,o.kt)(l.Z,{to:"additional-features#vector-rendering",mdxType:"Link"},"Vector Rendering")," is also enabled with the ",(0,o.kt)("i",null,"hardware")," option in the application another memory pool for a *stencil buffer* to perform vector rendering operations is created by the TouchGFX Generator. The size of this memory pool is: ",(0,o.kt)("i",null,"(Display Width * Display Height bytes)")," + ",(0,o.kt)("i",null,"5kb extra margin"),". This will therefore consume more RAM. Users can opt for the ",(0,o.kt)("i",null,"software")," option to save RAM at the expense of slower performance."),(0,o.kt)("h2",d({},{id:"real-time-operating-system"}),"\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf"),(0,o.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4f7f\u7528\u4efb\u4f55\u652f\u6301TouchGFX\u7684RTOS\uff08\u751a\u81f3\u65e0\u64cd\u4f5c\u7cfb\u7edf\uff09\u3002 \u5982",(0,o.kt)("a",d({parentName:"p"},{href:"../../touchgfx-architecture"}),"\u62bd\u8c61\u5c42\u67b6\u6784"),"\u4e2d\u6240\u8ff0\uff0cTouchGFX \u5f15\u64ce\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u63a5\u53e3\u5c06\u5176\u4e3b\u4e8b\u4ef6\u5faa\u73af\u4ee5\u53ca\u5e27\u7f13\u5b58\u8bbf\u95ee\u4e0e\u7528\u6237\u9009\u62e9\u7684RTOS\u540c\u6b65\u3002 \u5f53\u5f00\u53d1\u8005\u901a\u8fc7TouchGFX Generator\u9009\u62e9\u64cd\u4f5c\u7cfb\u7edf\u65f6\uff0c\u5c06\u751f\u6210\u4ee3\u7801\u5e76\u901a\u8fc7\u6240\u9009\u64cd\u4f5c\u7cfb\u7edf\u7684\u57fa\u5143\u5b9e\u73b0\u5185\u90e8\u540c\u6b65\u3002 \u64cd\u4f5c\u7cfb\u7edf\u4ecd\u7136\u5fc5\u987b\u901a\u8fc7STM32CubeMX\u8fdb\u884c\u914d\u7f6e\uff0c\u4ee5\u786e\u5b9a\u5806\u6808\u5927\u5c0f\u7b49\u3002"),(0,o.kt)("p",null,"FreeRTOS (CMSIS OS V1\u548cV2)\u548cThreadX(\u672c\u5730\u4e2d\u95f4\u4ef6\u6216Azure RTOS\u8f6f\u4ef6\u5305)\u53ef\u76f4\u63a5\u5728STM32CubeMX\u4e2d\u8fdb\u884c\u914d\u7f6e\uff0cTouchGFX Generator\u4e3a\u7528\u6237\u63d0\u4f9b\u4efb\u52a1\u5b9a\u4e49\u548cTouchGFX RTOS\u9a71\u52a8\u7a0b\u5e8f\u7684\u751f\u6210\u4ee3\u7801\u3002 TouchGFX Generator \u53ef\u751f\u6210\u7b26\u5408CMSIS V1\u548cCMSIS V2\u6807\u51c6\u7684RTOS\u9a71\u52a8\u7a0b\u5e8f\uff0c\u4e0e\u4efb\u4f55\u7b26\u5408CMSIS\u6807\u51c6\u7684RTOS\u4e00\u8d77\u8fd0\u884c\uff0c\u4e00\u4e2a\u7528\u4e8eThreadX\u7684\u9a71\u52a8\u7a0b\u5e8f\uff0c\u4e00\u4e2a\u7528\u4e8e\u5728\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\uff08\u65e0\u64cd\u4f5c\u7cfb\u7edf\uff09\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u88f8\u673a\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,o.kt)("h3",d({},{id:"no-os"}),"\u65e0OS"),(0,o.kt)("p",null,"If it is desired to run TouchGFX with no operating system, the ",(0,o.kt)("em",{parentName:"p"},"No OS")," option in TouchGFX Generator becomes available if no operating system is enabled in the ",(0,o.kt)("em",{parentName:"p"},"Middleware and Software Packs")," category, or selected as an ",(0,o.kt)("em",{parentName:"p"},"X-CUBE")," in STM32CubeMX."),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u8fd0\u884c\u88f8\u673a\u5e94\u7528\u7a0b\u5e8f\u65f6TouchGFX Generator\u751f\u6210\u7684\u4ee3\u7801\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u573a\u666f\u3002"),(0,o.kt)("h3",d({},{id:"freertos-middleware-os"}),"FreeRTOS"),(0,o.kt)("p",null,"To be able to select CMSIS_RTOS_V1 or CMSIS_RTOS_V2 in TouchGFX Generator, FreeRTOS must be enabled in the ",(0,o.kt)("em",{parentName:"p"},"Middleware and Software Packs")," category in STM32CubeMX:"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-middleware.webp",width:"400",mdxType:"Figure"},"STM32CubeMX\u9879\u76ee\u4e2d\u542f\u7528\u4e86FreeRTOS"),(0,o.kt)("p",null,"Some TouchGFX Board Setups are not configured to use FreeRTOS Middleware by default, but ThreadX or NoOS (e.g. STM32U599). If you still want to use FreeRTOS with these TouchGFX Board Setups, you must download the X-CUBE-FreeRTOS pack in the ",(0,o.kt)("em",{parentName:"p"},"Software Packs Components Selector")," of STM32CubeMX, and enable it."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-software-packs.webp",width:"800",mdxType:"Figure"},"FreeRTOS enabled in the Software Packs Components Selector"),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u4e3aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6eFreeRTOS\uff08CMSIS_RTOS_V1\u548cCMSIS_RTOS_V2\uff09\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"\xa0Real Time Operating System\u53d1\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u573a\u666f\u3002"),(0,o.kt)("h3",d({},{id:"threadx"}),"ThreadX"),(0,o.kt)("p",null,"ThreadX can be enabled either by selecting a ",(0,o.kt)("em",{parentName:"p"},"X-CUBE")," Software Pack or by enabling the native ThreadX Middleware from STM32CubeMX, if available for the selected MCU device."),(0,o.kt)("p",null,"The developer should find out if ThreadX is configured as an ",(0,o.kt)("em",{parentName:"p"},"X-CUBE")," Software Pack or as native ThreadX Middleware for their specific MCU family."),(0,o.kt)(i.Z,{mdxType:"Note"},(0,o.kt)("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u65b0\u578bSTM32 MCU\u5668\u4ef6\u5747\u652f\u6301\u76f4\u63a5\u6765\u81eaSTM32CubeMX ",(0,o.kt)("i",null,"Middleware\uff08\u4e2d\u95f4\u4ef6\uff09"),"\u7c7b\u522b\u7684ThreadX\uff0c\u65e0\u9700\u53e6\u5916\u4e0b\u8f7d\u3002 TouchGFX \u677f\u7ea7\u652f\u6301\u5305\u5c06\u7f13\u6162\u8fc7\u6e21\u5230\u4f7f\u7528\u53ef\u7528\u7684ThreadX\u4e2d\u95f4\u4ef6\u6216X-CUBE-AZRTOS\u8f6f\u4ef6\u5305\u3002"),(0,o.kt)("li",null,"\u63d0\u4f9bThreadX\u652f\u6301\u7684X-CUBE-ARTOS-XX\u8f6f\u4ef6\u5305\u9002\u7528\u4e8e\u5404\u79cdSTM32 MCU\u7cfb\u5217\uff0c\u53ef\u5728STM32CubeMX\u4e2d\u7684",(0,o.kt)("i",null,"Embedded Software Packages Manager\uff08\u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\uff09"),"\u4e2d\u627e\u5230\u3002")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u5404\u8282\u5c06\u5c55\u793a\u5982\u4f55\u5c06ThreadX\u4f5c\u4e3a",(0,o.kt)("em",{parentName:"p"},"Middleware\uff08\u4e2d\u95f4\u4ef6\uff09"),"\u6216",(0,o.kt)("em",{parentName:"p"},"AZRTOS Software Pack\uff08\u8f6f\u4ef6\u5305\uff09"),"\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("h4",d({},{id:"threadx-middleware"}),"Enabling ThreadX from ",(0,o.kt)("em",{parentName:"h4"},"Middleware and Software Packs")," category"),(0,o.kt)("p",null,"To be able to select ThreadX in TouchGFX Generator, ThreadX must be enabled in the ",(0,o.kt)("em",{parentName:"p"},"Middleware and Software Packs")," category in STM32CubeMX."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-middleware.webp",width:"300",mdxType:"Figure"},"ThreadX from Middleware and Software Packs enabled in STM32CubeMX project"),(0,o.kt)("p",null,"Once enabled, the ThreadX option becomes available in TouchGFX Generator."),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u5c06ThreadX\u914d\u7f6e\u4e3aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u672c\u5730\u4e2d\u95f4\u4ef6\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u573a\u666f\u3002"),(0,o.kt)("h4",d({},{id:"threadx-xcube"}),"\u4ece",(0,o.kt)("em",{parentName:"h4"},"X-CUB"),"E\u8f6f\u4ef6\u5305\u542f\u7528ThreadX"),(0,o.kt)("p",null,"\u8981\u5728TouchGFX Generator\u4e2d\u9009\u62e9ThreadX\uff0c\u5fc5\u987b\u5728STM32CubeMX\u4e2d\u7684",(0,o.kt)("em",{parentName:"p"},"Software Packs Component Selector\uff08\u8f6f\u4ef6\u5305\u7ec4\u4ef6\u9009\u62e9\u5668\uff09"),"\u4e2d\u542f\u7528AZRTOS Software Pack\uff08\u8f6f\u4ef6\u5305\uff09\u3002 \u5728\u9879\u76ee\u4e2d\uff0c\u5355\u51fb ",(0,o.kt)(c.Z,{mdxType:"Shortcut"},"STM32CubeMX\u9879\u76ee\u83dc\u5355\u4e2d\u7684\u201cSelect Components\uff08\u9009\u62e9\u7ec4\u4ef6\uff09\u201d\u6309\u94ae\u6216Alt+o")," \u3002"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.webp",width:"700",mdxType:"Figure"},"\u9009\u62e9STM32CubeMX\u4e2d\u7684\u9644\u52a0\u8f6f\u4ef6"),(0,o.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u9879\u76ee\u4e2d\u5982\u4f55\u4f7f\u80fdAZRTOS\u8f6f\u4ef6\u5305\u3002 \u9009\u62e9",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"RTOS "),"ThreadX"),"\u5e76\u70b9\u51fb",(0,o.kt)("strong",{parentName:"p"},"Core"),"\u590d\u9009\u6846\u4ee5\u542f\u7528ThreadX\u3002 \u4e0b\u8f7d\u5e76\u5b89\u88c5\u8f6f\u4ef6\u5305\uff08\u5982\u5c1a\u672a\u5b8c\u6210\uff09\u3002"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos.webp",width:"400",mdxType:"Figure"},"\u4eceX-CUBE-AZRTOS\u8f6f\u4ef6\u5305\u542f\u7528ThreadX"),(0,o.kt)("p",null,"After having added ThreadX Software Pack to the project, the ",(0,o.kt)("em",{parentName:"p"},"X-CUBE")," should be visible under the ",(0,o.kt)("em",{parentName:"p"},"Middleware and Software Packs")," category on the left side of the project menu in STM32CubeMX."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-enabled.webp",width:"200",mdxType:"Figure"},"STM32CubeMX\u9879\u76ee\u4e2d\u542f\u7528\u4e86X-CUBE-AZRTOS\u7684ThreadX"),(0,o.kt)("p",null,"Once ThreadX is enabled, it also becomes an available option in TouchGFX Generator, and after selecting it the ",(0,o.kt)("strong",{parentName:"p"},"Memory Pool Size")," and ",(0,o.kt)("strong",{parentName:"p"},"Memory Stack Size")," values will appear:"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"ThreadX selected in TouchGFX Generator"),(0,o.kt)("p",null,"Those values should be large enough to contain threads ressources."),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u5982\u4f55\u5c06ThreadX\u914d\u7f6e\u4e3aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684X-CUBE\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u573a\u666f\u3002"),(0,o.kt)("h3",d({},{id:"other-cmsis-compliant-os"}),"\u5176\u4ed6\u517c\u5bb9CMSIS\u7684OS"),(0,o.kt)("p",null,"\u5f53\u5f00\u53d1\u4eba\u5458\u91c7\u7528\u4e0eSTM32CubeMX\u63d0\u4f9b\u7684\u64cd\u4f5c\u7cfb\u7edf\uff08FreeRTOS\u548cThreadX\uff09\u4e0d\u540c\u7684\u5176\u4ed6\u517c\u5bb9CMSIS\u7684\u64cd\u4f5c\u7cfb\u7edf\u65f6\uff0c\u4ed6\u5fc5\u987b\u624b\u52a8\u5b8c\u6210RTOS\u914d\u7f6e\u548c\u4efb\u52a1\u5b9a\u4e49\u3002 TouchGFX Generator\u5c06\u751f\u6210\u4e00\u4e2a\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u5b9e\u73b0\u7684\u7a7a",(0,o.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u63a5\u53e3\u3002 \u901a\u5e38\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u624b\u52a8\u6b65\u9aa4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6eRTOS"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"li"},"OSWrappers"),"\u63a5\u53e3"),(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4efb\u52a1\u4ee5\u8fd0\u884cTouchGFX (",(0,o.kt)("inlineCode",{parentName:"li"},"MX_TouchGFX_Process"),")"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8\u8c03\u5ea6\u5668")),(0,o.kt)("p",null,"\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process"),"\uff0c\u4ee5\u542f\u52a8\u4efb\u52a1\u5904\u7406\u7a0b\u5e8f\u4e2d\u7684TouchGFX Engine\u4e3b\u5faa\u73af\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void\xa0MX_TouchGFX_Process(void);\n")))}k.isMDXComponent=!0}}]);