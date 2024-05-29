"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[33682],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,s=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return r?n.createElement(s,l(l({ref:t},d),{},{components:r})):n.createElement(s,l({ref:t},d))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(7029);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),o=r(96151);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const i=l},96151:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},49018:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),o=r(96151);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const i=l},11995:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}const a=o},34972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>h,default:()=>S,frontMatter:()=>p,metadata:()=>m,toc:()=>g});r(59496);var n=r(49613),o=r(89639),a=r(48753),l=r(95375),i=r(49018),c=r(11995);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"driver",title:"\u9a45\u52d5\u7a0b\u5f0f",sidebar_label:"\u9a45\u52d5\u7a0b\u5f0f"},h=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",title:"\u9a45\u52d5\u7a0b\u5f0f",description:"\u9a45\u52d5\u7a0b\u5f0f\u4e00\u7bc0\u53ef\u5354\u52a9\u958b\u767c\u4eba\u54e1\u70baTouchGFX AL\u7684\u5404\u7a2e\u529f\u80fd\u9078\u64c7\u9a45\u52d5\u7a0b\u5f0f\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",draft:!1,tags:[],version:"current",frontMatter:{id:"driver",title:"\u9a45\u52d5\u7a0b\u5f0f",sidebar_label:"\u9a45\u52d5\u7a0b\u5f0f"},sidebar:"docs",previous:{title:"\u986f\u793a",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"},next:{title:"\u5176\u4ed6\u529f\u80fd",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"}},s={},g=[{value:"\u61c9\u7528\u6642\u6a19\u6e90(Application Tick Source)",id:"application-tick-source",level:2},{value:"DMA2D\u52a0\u901f\u5668(ChromART)",id:"graphics-accelerator",level:2},{value:"GPU2D\u52a0\u901f\u5668(NeoChrom)",id:"gpu2d-accelerator",level:2},{value:"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71",id:"real-time-operating-system",level:2},{value:"\u7121OS",id:"no-os",level:3},{value:"FreeRTOS",id:"freertos-middleware-os",level:3},{value:"ThreadX",id:"threadx",level:3},{value:"\u7531<em>Middleware and Software Packs</em>(\u4e2d\u4ecb\u8edf\u9ad4\u53ca\u5957\u88dd\u8edf\u9ad4)\u985e\u5225\u555f\u7528ThreadX",id:"threadx-middleware",level:4},{value:"\u7531<em>X-CUBE</em>\u5957\u88dd\u8edf\u9ad4\u555f\u7528ThreadX",id:"threadx-xcube",level:4},{value:"\u5176\u4ed6\u7b26\u5408CMSIS\u6a19\u6e96\u7684\u4f5c\u696d\u7cfb\u7d71",id:"other-cmsis-compliant-os",level:3}],T={toc:g},k="wrapper";function S(e){var{components:t}=e,r=d(e,["components"]);return(0,n.kt)(k,u({},T,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u9a45\u52d5\u7a0b\u5f0f\u4e00\u7bc0\u53ef\u5354\u52a9\u958b\u767c\u4eba\u54e1\u70baTouchGFX AL\u7684\u5404\u7a2e\u529f\u80fd\u9078\u64c7\u9a45\u52d5\u7a0b\u5f0f\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/driver-settings.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator\u9a45\u52d5\u7a0b\u5f0f\u8a2d\u5b9a"),(0,n.kt)("h2",u({},{id:"application-tick-source"}),"\u61c9\u7528\u6642\u6a19\u6e90(Application Tick Source)"),(0,n.kt)("p",null,"\u61c9\u7528\u7a0b\u5f0f\u7684\u61c9\u7528\u6642\u6a19\u6e90\uff0c\u5b9a\u7fa9\u4e86\u5982\u4f55\u9a45\u52d5\u61c9\u7528\u7a0b\u5f0f\u9032\u884c\u904b\u4f5c\u3002 \u958b\u767c\u4eba\u54e1\u6709\u4ee5\u4e0b\u7684\u9078\u9805\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LTDC"),"\uff1a\u5982\u679c\u5728\u300cDisplay\u300d(\u986f\u793a)\u7fa4\u7d44\u5c07\u4ecb\u9762\u8a2d\u70ba\u300cLTDC\u300d\uff0c\u5247\u61c9\u7528\u6642\u6a19\u6e90\u5373\u53ef\u8a2d\u5b9a\u70ba\u300cLTDC\u300d\u3002 \u9019\u8868\u793aTouchGFX Generator\u5c07\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFXGeneratedHAL"),"\u985e\u5225\u4e2d\u7f6e\u5165\u9a45\u52d5\u7a0b\u5f0f\u51fd\u6578(LTDC\u4e2d\u65b7\u8655\u7406\u5e38\u5f0f)\uff0c\u4e26\u5728\u6b64\u9a45\u52d5\u7a0b\u5f0f\u51fd\u6578\u4e2d\u547c\u53eb",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"\u4ee5\u9a45\u52d5\u61c9\u7528\u7a0b\u5f0f\u904b\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Custom and FMC")," (\u5ba2\u88fd\u548cFMC)\uff1a\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u958b\u767c\u4eba\u54e1\u9700\u8981\u5be6\u4f5c\u8655\u7406\u5e38\u5f0f\uff0c\u4ee5\u91cd\u8907\u547c\u53eb",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"\u7684\u65b9\u5f0f\u9a45\u52d5\u61c9\u7528\u7a0b\u5f0f\u904b\u4f5c\u3002")),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u95b1",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-fmc",mdxType:"Link"},"FMC\u53caSPI\u986f\u793a\u4ecb\u9762"),"\u60c5\u5883\uff0c\u4ee5\u77ad\u89e3\u66f4\u591a\u6709\u95dc\u5be6\u4f5c\u5ba2\u88fd\u61c9\u7528\u6642\u6a19\u6e90\u7684\u8cc7\u8a0a"),(0,n.kt)("h2",u({},{id:"graphics-accelerator"}),"DMA2D\u52a0\u901f\u5668(ChromART)"),(0,n.kt)("p",null,"\u95dc\u65bcDMA2D\u5716\u5f62\u52a0\u901f\u958b\u767c\u4eba\u54e1\u6709\u4e09\u500b\u9078\u9805\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No"),"(\u5426)\uff1a\u61c9\u7528\u7a0b\u5f0f\u53ea\u4f7f\u7528CPU\u9032\u884c\u6e32\u67d3\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Yes"),"(\u662f)\uff1a\u61c9\u7528\u7a0b\u5f0f\u5728\u53ef\u80fd\u60c5\u6cc1\u4e0b\u4f7f\u7528ChromART\u6676\u7247\u4f86\u79fb\u52d5\u548c\u6df7\u5408\u50cf\u7d20\uff0c\u4ee5\u91cb\u653eCPU\u9031\u671f\u3002 \u9a45\u52d5\u7a0b\u5f0f\u7531TouchGFX Generator\u7522\u751f\uff0c\u56e0\u6b64\u958b\u767c\u4eba\u54e1\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u52d5\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Custom")," (\u5ba2\u88fd)\uff1aTouchGFX Generator\u6703\u7522\u751f\u6cdb\u578bTouchGFX DMA\u985e\u5225\uff0c\u7e7c\u627f\u81eaTouchGFX\u5f15\u64ce\u7684DMA\u4ecb\u9762\uff0c\u4e26\u6709\u958b\u767c\u4eba\u54e1\u5fc5\u9808\u5be6\u4f5c\u7528\u65bc\u5ba2\u88fd\u5716\u5f62\u52a0\u901f\u5668\u7684\u6210\u54e1\u51fd\u6578\u3002")),(0,n.kt)("p",null,"\u70ba\u4e86\u80fd\u5728TouchGFX Generator\u4e2d\u9078\u64c7DMA2D\u52a0\u901f\u5668\uff0c\u5fc5\u9808\u5728STM32CubeMX\u7684",(0,n.kt)("i",null,"Multimedia"),"(\u591a\u5a92\u9ad4)\u985e\u5225\u4e2d\u5c07\u5176\u555f\u7528\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-dma2d.webp",width:"250",mdxType:"Figure"},"\u5c0d\u65bc\u652f\u63f4DMA2D\u7684MCU\uff0cDMA2D\u53ef\u65bcSTM32CubeMX\u7684Multimedia (\u591a\u5a92\u9ad4)\u985e\u5225\u555f\u7528\u3002"),(0,n.kt)("p",null,"TouchGFX Generator\u7522\u751f\u7684DMA2D (ChromART)\u9a45\u52d5\u7a0b\u5f0f\uff0c\u53ef\u652f\u63f4\u5169\u7a2e\u63a5\u6536TransferCompleteInterrupt\u7684\u65b9\u5f0f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528STM32Cube HAL\u9a45\u52d5\u7a0b\u5f0f\uff0c\u5176\u4e2d\u5c07\u56de\u547c\u51fd\u6578\u66ab\u5b58\u5230dma2d\u7684\u63a7\u5236\u7a0b\u5f0f\u78bc(handle) ",(0,n.kt)("inlineCode",{parentName:"li"},"hdma2d. XferCpltCallback"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u4f7f\u7528\u4e2d\u65b7\u8655\u7406\u5e38\u5f0f",(0,n.kt)("inlineCode",{parentName:"li"},"DMA2D_IRQHandler ()"),"\u3002")),(0,n.kt)("p",null,"\u5982\u679c\u8981\u5728\u4ee5\u4e0a\u5169\u8005\u4e4b\u9593\u9032\u884c\u5207\u63db\uff0c\u8acb\u65bc\u9069\u7528\u65bcDMA2D IP\u7684STM32CubeMX\u4e4b\u4e2d\uff0c\u5728NVIC Settings (NVIC\u8a2d\u5b9a)\u555f\u7528\u6216\u505c\u7528DMA2D\u5168\u57df\u4e2d\u65b7\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dma2d-interrupt.webp",width:"400",mdxType:"Figure"},"DMA2D\u5168\u57df\u4e2d\u65b7\u5728STM32CubeMX System Core (\u7cfb\u7d71\u6838\u5fc3)\u985e\u5225\u4e4b\u4e0b\u7684NVIC\u8a2d\u5b9a\u555f\u7528/\u505c\u7528"),(0,n.kt)("p",null,"\u555f\u7528\u5168\u57df\u4e2d\u65b7\u53ef\u7522\u751f\u9078\u98051)\u7684\u7a0b\u5f0f\u78bc\uff0c\u505c\u7528\u5168\u57df\u4e2d\u65b7\u53ef\u7522\u751f\u9078\u98052)\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},(0,n.kt)("li",null,"\u4f7f\u7528DMA2D\u7684\u5168\u57df\u4e2d\u65b7\u6642\uff0c\u8acb\u78ba\u4fdd\u300cIRQ\u8655\u7406\u5e38\u5f0f\u300d\u6703\u547c\u53eb\u300cDMA2D HAL\u8655\u7406\u5e38\u5f0f\u300d\u3002 \u9019\u662f\u9810\u8a2d\u7684\u884c\u70ba\u3002"),(0,n.kt)("li",null,"\u5982\u679c\u5728\u555f\u7528\u5168\u57df\u4e2d\u65b7\u7684\u60c5\u6cc1\u4e0b\uff0c\u505c\u7528DMA2D\u7684\u300cIRQ\u8655\u7406\u5e38\u5f0f\u300d\u53ca\u300c\u547c\u53eb HAL\u8655\u7406\u5e38\u5f0f\u300d\uff0c\u5c31\u6703\u9020\u6210\u6c38\u9060\u4e0d\u6703\u547c\u53eb\u66ab\u5b58\u7684\u56de\u547c\u3002")),(0,n.kt)("h2",u({},{id:"gpu2d-accelerator"}),"GPU2D\u52a0\u901f\u5668(NeoChrom)"),(0,n.kt)("p",null,"GPU2D (NeoChrom)\u662f\u5716\u5f62\u52a0\u901f\u5668\uff0c\u80fd\u5920\u52a0\u901fTouchGFX\u4e4b\u4e2d\u8a31\u591a\u7684\u7e6a\u88fd\u64cd\u4f5c\uff0c\u5305\u62ec\u7d0b\u7406\u6620\u5c04\u53ca",(0,n.kt)("a",u({parentName:"p"},{href:"additional-features#vector-rendering"}),"\u5411\u91cf\u6e32\u67d3"),"\u3002 \u5176\u4e2d\u53ef\u652f\u63f4RGB565\u3001RGB888\u53caARGB8888\u683c\u5f0f\u7684\u5f71\u50cf\u7de9\u885d\u5340\u3002"),(0,n.kt)("p",null,"\u95dc\u65bcGPU2D\u5716\u5f62\u52a0\u901f\u958b\u767c\u4eba\u54e1\u6709\u5169\u500b\u9078\u9805\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No"),"(\u5426)\uff1a\u61c9\u7528\u7a0b\u5f0f\u53ea\u4f7f\u7528CPU\u9032\u884c\u7e6a\u88fd\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Yes"),"(\u662f)\uff1a\u61c9\u7528\u7a0b\u5f0f\u6703\u5728\u53ef\u80fd\u60c5\u6cc1\u4e0b\u4f7f\u7528NeoChrom\u6676\u7247\uff0c\u4ee5\u52a0\u901f\u7531TouchGFX\u9032\u884c\u7684\u8a31\u591a\u7e6a\u88fd\u64cd\u4f5c\u3002 \u9a45\u52d5\u7a0b\u5f0f\u7531TouchGFX Generator\u7522\u751f\uff0c\u56e0\u6b64\u958b\u767c\u4eba\u54e1\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u52d5\u4f5c\u3002")),(0,n.kt)("p",null,"\u70ba\u4e86\u80fd\u5728TouchGFX Generator\u4e2d\u9078\u64c7GPU2D\u52a0\u901f\u5668\uff0c\u5fc5\u9808\u5728STM32CubeMX\u7684Multimedia(\u591a\u5a92\u9ad4)\u985e\u5225\u4e2d\u5c07\u5176\u555f\u7528\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-gpu2d.webp",width:"250",mdxType:"Figure"},"\u5c0d\u65bc\u652f\u63f4GPU2D\u7684MCU\uff0cGPU2D\u53ef\u5728CubeMX\u4e2d\u7684Multimedia (\u591a\u5a92\u9ad4)\u985e\u5225\u4e2d\u555f\u7528\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},"\u53ea\u6709\u5728STM32CubeMX\u4e2d\u5c08\u6848\u7684",(0,n.kt)("i",null,"Multimedia")," (\u591a\u5a92\u9ad4)\u5340\u6bb5\u555f\u7528\u4e86GPU2D\uff0cGPU2D\u9078\u9805\u624d\u53ef\u898b\u3002 \u6b64\u9078\u9805\u50c5\u9069\u7528\u65bcSTM32U599\u88dd\u7f6e\uff0c\u53ea\u6709\u5728",(0,n.kt)("i",null,"Middlewares")," (\u4e2d\u4ecb\u8edf\u9ad4)\u5340\u6bb5\u7684ThreadX RTOS\u4e5f\u555f\u7528\u7684\u60c5\u6cc1\u4e0b\uff0c\u6216\u662f\u5728\u57f7\u884c\u88f8\u6a5f\u61c9\u7528\u7a0b\u5f0f\u7684\u60c5\u6cc1\u4e0b(\u7121OS)\uff0c\u624d\u80fd\u642d\u914d\u4f7f\u7528TouchGFX\u3002"),(0,n.kt)("p",null,"\u555f\u7528\u6642\uff0cTouchGFX Generator\u6703\u51fa\u73fe\u65b0\u7684\u5340\u6bb5(",(0,n.kt)("strong",{parentName:"p"},"GPU2D Driver")," (GPU2D\u9a45\u52d5\u7a0b\u5f0f))\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/gpu2d-driver.png",width:"300",mdxType:"Figure"},"GPU2D\u9a45\u52d5\u7a0b\u5f0f\u8a2d\u5b9a"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"GPU2D Command List Size")," (GPU2D\u6307\u4ee4\u6e05\u55ae\u5927\u5c0f)\u8a2d\u5b9a\uff0c\u53ef\u4f9d\u64da\u4f4d\u5143\u7d44\u70ba\u55ae\u4f4d\u8a2d\u5b9aGPU2D\u4f7f\u7528\u7684\u6307\u4ee4\u6e05\u55ae\u5927\u5c0f\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},"\u5982\u679c",(0,n.kt)(l.Z,{to:"additional-features#vector-rendering",mdxType:"Link"},"Vector Rendering")," (\u5411\u91cf\u6e32\u67d3)\u4e5f\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u4ee5",(0,n.kt)("i",null,"hardware")," (\u786c\u9ad4)\u9078\u9805\u555f\u7528\uff0cTouchGFX Generator\u5c31\u6703\u5efa\u7acb\u53e6\u4e00\u500b\u8a18\u61b6\u9ad4\u96c6\u5340\u4f5c\u70ba\u300c\u6a21\u677f\u7de9\u885d\u5340\u300d\uff0c\u4ee5\u57f7\u884c\u5411\u91cf\u6e32\u67d3\u4f5c\u696d\u3002 \u6b64\u8a18\u61b6\u9ad4\u96c6\u5340\u7684\u5927\u5c0f\u70ba\uff1a",(0,n.kt)("i",null,"(\u986f\u793a\u5bec\u5ea6 * \u986f\u793a\u9ad8\u5ea6\u4f4d\u5143\u7d44)")," + ",(0,n.kt)("i",null,"5kb\u984d\u5916\u7a7a\u9593"),"\uff0c \u56e0\u6b64\u6703\u8017\u7528\u66f4\u591aRAM\u3002 \u4f7f\u7528\u8005\u53ef\u9078\u64c7",(0,n.kt)("i",null,"software")," (\u8edf\u9ad4)\u9078\u9805\u4ee5\u7bc0\u7701RAM\uff0c\u4ee3\u50f9\u5247\u662f\u6548\u80fd\u8f03\u6162\u3002"),(0,n.kt)("h2",u({},{id:"real-time-operating-system"}),"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71"),(0,n.kt)("p",null,"\u958b\u767c\u4eba\u54e1\u53ef\u5728TouchGFX\u4f7f\u7528\u4efb\u4f55\u7684RTOS(\u751a\u81f3\u4e0d\u4f7f\u7528\u4f5c\u696d\u7cfb\u7d71)\u3002 \u5982",(0,n.kt)("a",u({parentName:"p"},{href:"../../touchgfx-architecture"}),"\u62bd\u8c61\u5c64\u67b6\u69cb"),"\u6240\u8ff0\uff0cTouchGFX\u5f15\u64ce\u6703\u4f9d\u64da\u4f7f\u7528\u8005\u6240\u9078\u7684RTOS\uff0c\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u4ecb\u9762\u4f86\u540c\u6b65\u672c\u8eab\u7684\u4e3b\u8981\u4e8b\u4ef6\u8ff4\u5708\u8207\u5f71\u50cf\u7de9\u885d\u5340\u5b58\u53d6\u3002 \u958b\u767c\u4eba\u54e1\u5728TouchGFX Generator\u9078\u64c7\u4f5c\u696d\u7cfb\u7d71\u6642\uff0c\u5c07\u7522\u751f\u7a0b\u5f0f\u78bc\u4e26\u900f\u904e\u6240\u9078\u4f5c\u696d\u7cfb\u7d71\u7684\u57fa\u672c\u578b\u5225\u5be6\u73fe\u5167\u90e8\u540c\u6b65\u3002 \u4f5c\u696d\u7cfb\u7d71\u4ecd\u7136\u5fc5\u9808\u900f\u904eSTM32CubeMX\u9032\u884c\u8a2d\u5b9a\uff0c\u4ee5\u78ba\u5b9a\u5806\u758a\u5927\u5c0f\u7b49\u5404\u7a2e\u9805\u76ee\u3002"),(0,n.kt)("p",null,"FreeRTOS (CMSIS OS V1\u548cV2)\u548cThreadX (\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4\u6216Azure RTOS\u5957\u88dd\u8edf\u9ad4)\u53ef\u76f4\u63a5\u5728STM32CubeMX\u548cTouchGFX Generator\u4e2d\u8a2d\u5b9a\uff0c\u70ba\u4f7f\u7528\u8005\u63d0\u4f9b\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\uff0c\u7528\u65bc\u5de5\u4f5c\u5b9a\u7fa9\u548cTouchGFX RTOS\u9a45\u52d5\u7a0b\u5f0f\u3002 TouchGFX Generator\u53ef\u7522\u751f\u7b26\u5408CMSIS V1\u548cCMSIS V2\u6a19\u6e96\u7684RTOS\u9a45\u52d5\u7a0b\u5f0f\uff0c\u8207\u4efb\u4f55\u7b26\u5408CMSIS\u6a19\u6e96\u7684RTOS\u4e00\u8d77\u57f7\u884c\uff0c\u4e00\u500b\u7528\u65bcThreadX\u7684\u9a45\u52d5\u7a0b\u5f0f\uff0c\u4e00\u500b\u7528\u65bc\u5728\u6c92\u6709\u4f5c\u696d\u7cfb\u7d71(\u7121OS)\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u88f8\u6a5f\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002"),(0,n.kt)("h3",u({},{id:"no-os"}),"\u7121OS"),(0,n.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728\u6c92\u6709\u4f5c\u696d\u7cfb\u7d71\u7684\u60c5\u6cc1\u4e0b\u57f7\u884cTouchGFX\uff0c\u53ea\u8981\u5728STM32CubeMX\u4e2d\u7684",(0,n.kt)("em",{parentName:"p"},"Middleware and Software Packs"),"(\u4e2d\u4ecb\u8edf\u9ad4\u53ca\u5957\u88dd\u8edf\u9ad4)\u985e\u5225\u6c92\u6709\u555f\u7528\u4f5c\u696d\u7cfb\u7d71\uff0c\u6216\u662f\u9078\u64c7",(0,n.kt)("em",{parentName:"p"},"X-CUBE"),"\uff0cTouchGFX Generator\u4e2d\u7684",(0,n.kt)("em",{parentName:"p"},"No OS"),"(\u7121OS)\u9078\u9805\u5c31\u6703\u51fa\u73fe\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u95b1",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71"),"\u60c5\u5883\u53d6\u5f97\u66f4\u591a\u8cc7\u8a0a\uff0c\u4ee5\u77ad\u89e3\u5728\u57f7\u884c\u88f8\u6a5f\u61c9\u7528\u7a0b\u5f0f\u6642\u7531TouchGFX Generator\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,n.kt)("h3",u({},{id:"freertos-middleware-os"}),"FreeRTOS"),(0,n.kt)("p",null,"\u70ba\u4e86\u80fd\u5728TouchGFX Generator\u4e2d\u9078\u64c7CMSIS_RTOS_V1\u6216CMSIS_RTOS_V2\uff0c\u5fc5\u9808\u5728STM32CubeMX\u7684",(0,n.kt)("em",{parentName:"p"},"Middleware and Software Packs"),"(\u4e2d\u4ecb\u8edf\u9ad4\u53ca\u5957\u88dd\u8edf\u9ad4)\u985e\u5225\u4e2d\u555f\u7528FreeRTOS\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-middleware.webp",width:"400",mdxType:"Figure"},"\u5728STM32CubeMX\u5c08\u6848\u4e2d\u555f\u7528\u7684FreeRTOS"),(0,n.kt)("p",null,"\u90e8\u5206TouchGFX\u958b\u767c\u677f\u8a2d\u5b9a\u4e26\u672a\u9810\u8a2d\u8a2d\u5b9a\u4f7f\u7528FreeRTOS\u4e2d\u4ecb\u8edf\u9ad4\uff0c\u800c\u662f\u4f7f\u7528ThreadX\u6216NoOS(\u4f8b\u5982STM32U599)\u3002 \u5982\u679c\u60a8\u4ecd\u5e0c\u671b\u4ee5\u9019\u985eTouchGFX\u958b\u767c\u677f\u8a2d\u5b9a\u4f7f\u7528FreeRTOS\uff0c\u5c31\u5fc5\u9808\u5728STM32CubeMX\u7684",(0,n.kt)("em",{parentName:"p"},"Software Packs Components Selector"),"(\u5957\u88dd\u8edf\u9ad4\u5143\u4ef6\u9078\u64c7\u5668)\u4e0b\u8f09X-CUBE-FreeRTOS\u5957\u4ef6\u4e26\u52a0\u4ee5\u555f\u7528\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-software-packs.webp",width:"800",mdxType:"Figure"},"FreeRTOS\u65bcSoftware Packs Components Selector(\u5957\u88dd\u8edf\u9ad4\u5143\u4ef6\u9078\u64c7\u5668)\u4e4b\u4e2d\u555f\u7528"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u95b1",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71"),"\u60c5\u5883\u53d6\u5f97\u66f4\u591a\u8cc7\u8a0a\uff0c\u4ee5\u77ad\u89e3\u5982\u4f55\u70baTouchGFX\u61c9\u7528\u7a0b\u5f0f\u8a2d\u5b9aFreeRTOS (CMSIS_RTOS_V1\u53caCMSIS_RTOS_V2)\u3002"),(0,n.kt)("h3",u({},{id:"threadx"}),"ThreadX"),(0,n.kt)("p",null,"\u5982\u8981\u555f\u7528ThreadX\uff0c\u53ef\u9078\u64c7",(0,n.kt)("em",{parentName:"p"},"X-CUBE"),"\u5957\u88dd\u8edf\u9ad4\uff0c\u6216\u662f\u7531STM32CubeMX\u555f\u7528\u539f\u751fThreadX\u4e2d\u4ecb\u8edf\u9ad4(\u5982\u679c\u9069\u7528\u65bc\u9078\u5b9a\u7684MCU\u88dd\u7f6e)\u3002"),(0,n.kt)("p",null,"\u958b\u767c\u4eba\u54e1\u61c9\u80fd\u767c\u73feThreadX\u662f\u8a2d\u5b9a\u70ba",(0,n.kt)("em",{parentName:"p"},"X-CUBE"),"\u5957\u88dd\u8edf\u9ad4\u6216\u539f\u751fThreadX\u4e2d\u4ecb\u8edf\u9ad4\uff0c\u4ee5\u7528\u65bc\u7279\u5b9a\u7684MCU\u7cfb\u5217\u3002"),(0,n.kt)(i.Z,{mdxType:"Note"},(0,n.kt)("li",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u6240\u6709\u65b0\u578bSTM32 MCU\u88dd\u7f6e\u5c07\u53ef\u7531STM32CubeMX ",(0,n.kt)("i",null,"Middleware"),"(\u4e2d\u4ecb\u8edf\u9ad4)\u985e\u5225\u76f4\u63a5\u652f\u63f4ThreadX\uff0c\u7121\u9700\u53e6\u5916\u4e0b\u8f09\u5957\u4ef6\u3002 TouchGFX\u958b\u767c\u677f\u652f\u63f4\u5957\u4ef6\u5c07\u7de9\u6162\u904e\u6e21\u5230\u4f7f\u7528\u53ef\u7528\u7684ThreadX\u4e2d\u4ecb\u8edf\u9ad4\u6216X-CUBE-AZRTOS\u5957\u88dd\u8edf\u9ad4\u3002"),(0,n.kt)("li",null,"X-CUBE-AZRTOS-XX\u5957\u88dd\u8edf\u9ad4\u63d0\u4f9b\u7684ThreadX\u652f\u63f4\uff0c\u5df2\u53ef\u7528\u65bc\u5404\u5f0f\u5404\u6a23\u7684STM32 MCU\u7cfb\u5217\uff0c\u53ef\u5728STM32CubeMX\u7684",(0,n.kt)("i",null,"Embedded Software Packages Manager"),"(\u5d4c\u5165\u5f0f\u5957\u88dd\u8edf\u9ad4\u7ba1\u7406\u7a0b\u5f0f)\u4e4b\u4e2d\u627e\u5230\u3002")),(0,n.kt)("p",null,"\u4e0b\u7bc0\u5c07\u8aaa\u660e\u5982\u4f55\u70ba\u61c9\u7528\u7a0b\u5f0f\u555f\u7528ThreadX\u4f5c\u70ba",(0,n.kt)("em",{parentName:"p"},"\u4e2d\u4ecb\u8edf\u9ad4"),"\u6216",(0,n.kt)("em",{parentName:"p"},"AZRTOS\u5957\u88dd\u8edf\u9ad4"),"\u3002"),(0,n.kt)("h4",u({},{id:"threadx-middleware"}),"\u7531",(0,n.kt)("em",{parentName:"h4"},"Middleware and Software Packs"),"(\u4e2d\u4ecb\u8edf\u9ad4\u53ca\u5957\u88dd\u8edf\u9ad4)\u985e\u5225\u555f\u7528ThreadX"),(0,n.kt)("p",null,"\u70ba\u4e86\u80fd\u5728TouchGFX Generator\u4e2d\u9078\u64c7ThreadX\uff0c\u5fc5\u9808\u5728STM32CubeMX\u7684",(0,n.kt)("em",{parentName:"p"},"Middleware and Software Packs"),"(\u4e2d\u4ecb\u8edf\u9ad4\u53ca\u5957\u88dd\u8edf\u9ad4)\u985e\u5225\u4e2d\u555f\u7528ThreadX\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-middleware.webp",width:"300",mdxType:"Figure"},"STM32CubeMX\u5c08\u6848\u4e2d\u555f\u7528\u7684\u4e2d\u4ecb\u8edf\u9ad4\u53ca\u5957\u88dd\u8edf\u9ad4ThreadX"),(0,n.kt)("p",null,"\u555f\u7528\u4e4b\u5f8c\uff0cThreadX\u9078\u9805\u5c31\u6703\u51fa\u73fe\u5728TouchGFX Generator\u4e4b\u4e2d\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u95b1",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71"),"\u60c5\u5883\u53d6\u5f97\u66f4\u591a\u8cc7\u8a0a\uff0c\u4ee5\u77ad\u89e3\u5982\u4f55\u70baTouchGFX\u61c9\u7528\u7a0b\u5f0f\u5c07ThreadX\u8a2d\u5b9a\u70ba\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4\u3002"),(0,n.kt)("h4",u({},{id:"threadx-xcube"}),"\u7531",(0,n.kt)("em",{parentName:"h4"},"X-CUBE"),"\u5957\u88dd\u8edf\u9ad4\u555f\u7528ThreadX"),(0,n.kt)("p",null,"\u70ba\u4e86\u80fd\u5728TouchGFX Generator\u4e2d\u9078\u64c7ThreadX\uff0c\u5fc5\u9808\u5728STM32CubeMX\u4e2d\u7684",(0,n.kt)("em",{parentName:"p"},"Software Packs Component Selector")," (\u5957\u88dd\u8edf\u9ad4\u5143\u4ef6\u9078\u64c7\u5668)\u4e2d\u555f\u7528AZRTOS\u5957\u88dd\u8edf\u9ad4\u3002 \u8acb\u5728\u5c08\u6848\u4e2d\u9ede\u64ca\u300cSelect Components\u300d(\u9078\u64c7\u5143\u4ef6)\u6309\u9215\u6216 ",(0,n.kt)(c.Z,{mdxType:"Shortcut"},"Alt + o")," (\u4f4d\u5728STM32CubeMX\u7684\u5c08\u6848\u9078\u55ae)\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.webp",width:"700",mdxType:"Figure"},"\u5728STM32CubeMX\u9078\u64c7\u5176\u4ed6\u8edf\u9ad4"),(0,n.kt)("p",null,"\u4e0b\u5716\u986f\u793a\u5982\u4f55\u70ba\u5c08\u6848\u555f\u7528AZRTOS\u5957\u88dd\u8edf\u9ad4\u3002 \u8acb\u9078\u64c7",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"RTOS")," ThreadX"),"\uff0c\u7136\u5f8c\u52fe\u9078",(0,n.kt)("strong",{parentName:"p"},"Core")," (\u6838\u5fc3)\u6838\u53d6\u65b9\u584a\u4ee5\u555f\u7528ThreadX\u3002 \u5982\u679c\u5c1a\u672a\u5b8c\u6210\uff0c\u8acb\u4e0b\u8f09\u53ca\u5b89\u88dd\u5957\u88dd\u8edf\u9ad4\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos.webp",width:"400",mdxType:"Figure"},"\u7531X-CUBE-AZRTOS\u5957\u88dd\u8edf\u9ad4\u555f\u7528ThreadX"),(0,n.kt)("p",null,"\u5c07ThreadX\u5957\u88dd\u8edf\u9ad4\u65b0\u589e\u81f3\u5c08\u6848\u5f8c\uff0c",(0,n.kt)("em",{parentName:"p"},"X-CUBE"),"\u61c9\u8a72\u6703\u51fa\u73fe\u5728STM32CubeMX\u5c08\u6848\u9078\u55ae\u5de6\u5074\u7684",(0,n.kt)("em",{parentName:"p"},"Middleware and Software Packs"),"(\u4e2d\u4ecb\u8edf\u9ad4\u53ca\u5957\u88dd\u8edf\u9ad4)\u985e\u5225\u4e4b\u4e0b\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-enabled.webp",width:"200",mdxType:"Figure"},"X-CUBE-AZRTOS\u7684ThreadX\u5728STM32CubeMX\u5c08\u6848\u4e2d\u555f\u7528"),(0,n.kt)("p",null,"ThreadX\u555f\u7528\u5f8c\uff0c\u4e5f\u6703\u5728TouchGFX Generator\u4e4b\u4e2d\u6210\u70ba\u53ef\u7528\u9078\u9805\uff1b\u5982\u679c\u5728",(0,n.kt)("strong",{parentName:"p"},"Memory Pool Size"),"(\u8a18\u61b6\u9ad4\u96c6\u5340\u5927\u5c0f)\u548c",(0,n.kt)("strong",{parentName:"p"},"Memory Stack Size"),"(\u8a18\u61b6\u9ad4\u5806\u758a\u5927\u5c0f)\u4e2d\u52a0\u4ee5\u9078\u53d6\uff0c\u5c07\u6703\u51fa\u73fe\u4e0b\u5217\u503c\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"\u5728TouchGFX Generator\u9078\u53d6ThreadX"),(0,n.kt)("p",null,"\u524d\u8ff0\u503c\u61c9\u8db3\u4ee5\u5305\u542b\u57f7\u884c\u7dd2\u8cc7\u6e90\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8acb\u53c3\u95b1",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71"),"\u60c5\u5883\u53d6\u5f97\u66f4\u591a\u8cc7\u8a0a\uff0c\u4ee5\u77ad\u89e3\u5982\u4f55\u70baTouchGFX\u61c9\u7528\u7a0b\u5f0f\u5c07ThreadX\u8a2d\u5b9a\u70baX-CUBE\u3002"),(0,n.kt)("h3",u({},{id:"other-cmsis-compliant-os"}),"\u5176\u4ed6\u7b26\u5408CMSIS\u6a19\u6e96\u7684\u4f5c\u696d\u7cfb\u7d71"),(0,n.kt)("p",null,"\u82e5\u958b\u767c\u4eba\u54e1\u4e0d\u4f7f\u7528STM32CubeMX\u6240\u63d0\u4f9b\u7684FreeRTOS\u548cThreadX\uff0c\u800c\u8981\u63a1\u7528\u5176\u4ed6\u7b26\u5408CMSIS\u6a19\u6e96\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u5c31\u5fc5\u9808\u81ea\u884c\u624b\u52d5\u5b8c\u6210RTOS\u8a2d\u5b9a\u548c\u5de5\u4f5c\u5b9a\u7fa9\u3002 TouchGFX Generator\u5c07\u7522\u751f\u7a7a\u767d\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"OSWrappers"),"\u4ecb\u9762\uff0c\u5fc5\u9808\u7531\u958b\u767c\u4eba\u54e1\u5be6\u4f5c\u3002 \u901a\u5e38\u9700\u8981\u9032\u884c\u4ee5\u4e0b\u624b\u52d5\u6b65\u9a5f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8a2d\u5b9aRTOS"),(0,n.kt)("li",{parentName:"ol"},"\u5be6\u4f5c",(0,n.kt)("inlineCode",{parentName:"li"},"OSWrappers"),"\u4ecb\u9762"),(0,n.kt)("li",{parentName:"ol"},"\u5b9a\u7fa9\u5de5\u4f5c\u4ee5\u57f7\u884cTouchGFX (",(0,n.kt)("inlineCode",{parentName:"li"},"MX_TouchGFX_Process"),")"),(0,n.kt)("li",{parentName:"ol"},"\u555f\u52d5\u6392\u7a0b\u5668")),(0,n.kt)("p",null,"\u547c\u53eb",(0,n.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process"),"\u4ee5\u4fbf\u5728\u5de5\u4f5c\u8655\u7406\u5e38\u5f0f\u4e4b\u4e2d\u555f\u52d5TouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void\xa0MX_TouchGFX_Process(void);\n")))}S.isMDXComponent=!0}}]);