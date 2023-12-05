"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[38359],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var o=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,s=u["".concat(c,".").concat(m)]||u[m]||h[m]||n;return r?o.createElement(s,l(l({ref:t},p),{},{components:r})):o.createElement(s,l({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<n;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12822:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(59496),a=r(32118);const n=function(e){const t=e.noShadow||!1,r=e.width,n=e.height,l=(0,a.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:r,height:n,src:l})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:r,height:n,src:l})),o.createElement("p",null,e.children))}},86222:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(59496),a=r(89588);const n=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:n},this.props.children)}}const i=l},89588:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(59496);class a extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}const n=a},39331:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(59496),a=r(89588);const n=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:n},this.props.children)}}const i=l},66590:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(59496);class a extends o.Component{render(){return o.createElement("code",{className:"shortcut"},this.props.children)}}const n=a},41050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>h,default:()=>S,frontMatter:()=>u,metadata:()=>m,toc:()=>g});r(59496);var o=r(49613),a=r(12822),n=r(86222),l=r(51721),i=r(39331),c=r(66590);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={id:"driver",title:"Driver",sidebar_label:"Driver"},h=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",title:"Driver",description:"\ub4dc\ub77c\uc774\ubc84 \uc139\uc158\uc5d0\uc11c\ub294 \uac1c\ubc1c\uc790\uac00 TouchGFX AL\uc758 \ub2e4\uc591\ud55c \ucc45\uc784\uc5d0 \ub300\ud55c \ub4dc\ub77c\uc774\ubc84\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver",draft:!1,tags:[],version:"current",frontMatter:{id:"driver",title:"Driver",sidebar_label:"Driver"},sidebar:"docs",previous:{title:"Display",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display"},next:{title:"Additional Features",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"}},s={},g=[{value:"Application Tick Source",id:"application-tick-source",level:2},{value:"DMA2D Accelerator(ChromART)",id:"graphics-accelerator",level:2},{value:"GPU2D Accelerator(NeoChrom)",id:"gpu2d-accelerator",level:2},{value:"\uc2e4\uc2dc\uac04 \uc6b4\uc601 \uccb4\uc81c",id:"real-time-operating-system",level:2},{value:"No OS",id:"no-os",level:3},{value:"FreeRTOS",id:"freertos-middleware-os",level:3},{value:"ThreadX",id:"threadx",level:3},{value:"<em>Middleware and Software Packs</em> \ubc94\uc8fc\uc5d0\uc11c ThreadX \ud65c\uc131\ud654",id:"threadx-middleware",level:4},{value:"<em>X-CUBE</em> \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329\uc5d0\uc11c ThreadX \ud65c\uc131\ud654",id:"threadx-xcube",level:4},{value:"\uae30\ud0c0 CMSIS \ud638\ud658 OS",id:"other-cmsis-compliant-os",level:3}],T={toc:g},k="wrapper";function S(e){var{components:t}=e,r=p(e,["components"]);return(0,o.kt)(k,d({},T,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ub4dc\ub77c\uc774\ubc84 \uc139\uc158\uc5d0\uc11c\ub294 \uac1c\ubc1c\uc790\uac00 TouchGFX AL\uc758 \ub2e4\uc591\ud55c \ucc45\uc784\uc5d0 \ub300\ud55c \ub4dc\ub77c\uc774\ubc84\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/driver-settings.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator Driver \uc124\uc815"),(0,o.kt)("h2",d({},{id:"application-tick-source"}),"Application Tick Source"),(0,o.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubc1c\uc804\uc2dc\ud0ac \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc815\uc758\ud569\ub2c8\ub2e4. \uac1c\ubc1c\uc790\uc5d0\uac8c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc635\uc158\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LTDC"),' - "Display" \uadf8\ub8f9\uc5d0\uc11c \uc778\ud130\ud398\uc774\uc2a4\ub85c LTDC\uac00 \uc120\ud0dd\ub41c \uacbd\uc6b0\uc5d0\ub294 Application Tick Source\uac00 "LTDC"\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, TouchGFX Generator\ub294 ',(0,o.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"\ub97c \ud638\ucd9c\ud558\uc5ec \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744  \uad6c\ub3d9\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"li"},"TouchGFXGeneratedHAL")," \ud074\ub798\uc2a4\uc5d0\uc11c \ub4dc\ub77c\uc774\ubc84 \ud568\uc218(LTDC \uc778\ud130\ub7fd\ud2b8 \ud578\ub4e4\ub7ec)\ub97c \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom and FMC")," - \uc774 \uacbd\uc6b0, \uac1c\ubc1c\uc790\ub294 ",(0,o.kt)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"\ub97c \ubc18\ubcf5\uc801\uc73c\ub85c \ud638\ucd9c\ud558\uc5ec \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ub3d9\ud558\ub294 \ud578\ub4e4\ub7ec\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"\ub9de\ucda4\ud615 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud2f1 \uc18c\uc2a4\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-fmc",mdxType:"Link"},"FMC \ubc0f SPI \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4")," \uc2dc\ub098\ub9ac\uc624\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,o.kt)("h2",d({},{id:"graphics-accelerator"}),"DMA2D Accelerator(ChromART)"),(0,o.kt)("p",null,"DMA2D \uadf8\ub798\ud53d \uac00\uc18d\uacfc \uad00\ub828\ud574 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc138 \uac00\uc9c0 \uc635\uc158\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No")," - \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 CPU\ub9cc \uc0ac\uc6a9\ud574\uc11c \ub80c\ub354\ub9c1\uc744 \ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Yes")," -\xa0\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uac00\ub2a5\ud55c \uacbd\uc6b0\uc5d0 ChromART \uce69\uc744 \uc0ac\uc6a9\ud574\uc11c \ud53d\uc140\uc744 \uc774\ub3d9\uc2dc\ucf1c\uc11c CPU \uc8fc\uae30\ub97c \ud655\ubcf4\ud569\ub2c8\ub2e4. \ub4dc\ub77c\uc774\ubc84\ub294 TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc5d0 \uac1c\ubc1c\uc790\ub294 \uc5b4\ub5a4 \uc870\uce58\ub3c4 \ucde8\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom")," - TouchGFX Generator\ub294 \uac1c\ubc1c\uc790\uac00 \ub9de\ucda4\ud615 \uadf8\ub798\ud53d \uac00\uc18d\uae30\uc5d0 \ub300\ud574 \uad6c\ud604\ud574\uc57c \ud558\ub294 \uba64\ubc84 \ud568\uc218\uc640 \ud568\uaed8 TouchGFX Engine\uc758 DMA \uc778\ud130\ud398\uc774\uc2a4\uc5d0\uc11c \uc0c1\uc18d\ub418\ub294 \uc77c\ubc18 TouchGFX DMA \ud074\ub798\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c DMA2D \uac00\uc18d\uae30\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc73c\ub824\uba74 STM32CubeMX\uc758 ",(0,o.kt)("i",null,"Multimedia")," \ubc94\uc8fc\uc5d0\uc11c \uc774\ub97c \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-dma2d.webp",width:"250",mdxType:"Figure"},"DMA2D\ub294 \uc774\ub97c \uc9c0\uc6d0\ud558\ub294 MCU\uc5d0 \ub300\ud574 STM32CubeMX\uc758 Multimedia \ubc94\uc8fc\uc5d0\uc11c \ud65c\uc131\ud654\uac00 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 DMA2D(ChromART) \ub4dc\ub77c\uc774\ubc84\ub294 TransferCompleteInterrupt\ub97c \uc218\uc2e0\ud558\ub294 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\ucf5c\ubc31 \ud568\uc218\ub97c dma2d \ud578\ub4e4 ",(0,o.kt)("inlineCode",{parentName:"li"},"hdma2d.XferCpltCallback"),"\uc5d0 \ub4f1\ub85d\ud558\ub294 STM32Cube HAL \ub4dc\ub77c\uc774\ubc84\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"DMA2D_IRQHandler()")," \uc778\ud130\ub7fd\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,"DMA2D IP\uc5d0 \ub300\ud574 STM32CubeMX\uc758 NVIC \uc124\uc815\uc5d0\uc11c DMA2D \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\ub97c \ud65c\uc131\ud654 \ub610\ub294 \ube44\ud65c\uc131\ud654\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \ub450 \ubc29\ubc95 \uac04\uc758 \uc804\ud658\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dma2d-interrupt.webp",width:"400",mdxType:"Figure"},"DMA2D \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\ub294 STM32CubeMX\uc758 System Core \ubc94\uc8fc \uc544\ub798 NVIC \uc124\uc815\uc5d0\uc11c \ud65c\uc131\ud654/\ube44\ud65c\uc131\ud654"),(0,o.kt)("p",null,"\uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\ub97c \ud65c\uc131\ud654\ud558\uba74 \uc635\uc158 1)\uc5d0 \ub300\ud55c \ucf54\ub4dc\uac00 \uc0dd\uc131\ub418\uace0, \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\ub97c \ube44\ud65c\uc131\ud654\ud558\uba74 \uc635\uc158 2)\uc5d0 \ub300\ud55c \ucf54\ub4dc\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)(i.Z,{mdxType:"Note"},(0,o.kt)("li",null,'DMA2D\uc5d0\uc11c \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 "IRQ handler"\uac00"DMA2D HAL handler"\ub97c \ud638\ucd9c\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uae30\ubcf8 \ub3d9\uc791\uc785\ub2c8\ub2e4.'),(0,o.kt)("li",null,'\uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\uac00 \ud65c\uc131\ud654\ub41c \uc0c1\ud0dc\uc5d0\uc11c DMA2D\uc5d0 \ub300\ud574 "IRQ handler" \ubc0f "Call HAL handler"\ub97c \ube44\ud65c\uc131\ud654\ud558\uba74 \ub4f1\ub85d\ub41c \ucf5c\ubc31\uc774 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4..')),(0,o.kt)("h2",d({},{id:"gpu2d-accelerator"}),"GPU2D Accelerator(NeoChrom)"),(0,o.kt)("p",null,"GPU2D(NeoChrom)\ub294 \ud14d\uc2a4\ucc98 \ub9e4\ud551 \ubc0f  ",(0,o.kt)("a",d({parentName:"p"},{href:"additional-features#vector-rendering"}),"\ubca1\ud130 \ub80c\ub354\ub9c1"),".\uc744 \ud3ec\ud568\ud574 TouchGFX\uc5d0\uc11c \ub2e4\uc218\uc758 \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \uac00\uc18d\ud654\ud560 \uc218 \uc788\ub294 \uadf8\ub798\ud53d \uac00\uc18d\uae30\uc785\ub2c8\ub2e4. RGB565, RGB888 \ubc0f ARGB8888 \ud615\uc2dd\uc758 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"GPU2D \uadf8\ub798\ud53d \uac00\uc18d\uacfc \uad00\ub828\ud574 \uac1c\ubc1c\uc790\uc5d0\uac8c \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No")," - \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 CPU\ub9cc \uc0ac\uc6a9\ud574\uc11c \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Yes")," -\xa0\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uac00\ub2a5\ud55c \uacbd\uc6b0\uc5d0 NeoChrom \uce69\uc744 \uc0ac\uc6a9\ud574\uc11c TouchGFX\uc5d0\uc11c \uc218\ud589\ub418\ub294 \ub9ce\uc740 \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \uac00\uc18d\ud654\ud569\ub2c8\ub2e4. \ub4dc\ub77c\uc774\ubc84\ub294 TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc5d0 \uac1c\ubc1c\uc790\ub294 \uc5b4\ub5a4 \uc870\uce58\ub3c4 \ucde8\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c GPU2D \uac00\uc18d\uae30\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc73c\ub824\uba74 STM32CubeMX\uc758 Multimedia \ubc94\uc8fc\uc5d0\uc11c \uc774\ub97c \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/multimedia-group-gpu2d.webp",width:"250",mdxType:"Figure"},"GPU2D\ub294 \uc774\ub97c \uc9c0\uc6d0\ud558\ub294 MCU\uc5d0 \ub300\ud574 CubeMX\uc758 Multimedia \ubc94\uc8fc\uc5d0\uc11c \ud65c\uc131\ud654\uac00 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(i.Z,{mdxType:"Note"},"GPU2D \uc635\uc158\uc740 STM32CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\uc758 ",(0,o.kt)("i",null,"Multimedia"),"  \uc139\uc158\uc5d0 GPU2D\uac00 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub9cc \ud45c\uc2dc\ub429\ub2c8\ub2e4. STM32U599 \uc7a5\uce58\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, ",(0,o.kt)("i",null,"Middlewares")," \uc139\uc158\uc5d0\uc11c ThreadX RTOS\uac00 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\uac70\ub098 \ubca0\uc5b4 \uba54\ud0c8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158(No OS)\uc744 \uc2e4\ud589 \uc911\uc778 \uacbd\uc6b0\uc5d0 TouchGFX\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc6a9\ub3c4\ub85c\ub9cc \ud65c\uc131\ud654\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud65c\uc131\ud654\uac00 \ub418\uba74 TouchGFX Generator\uc5d0 \uc0c8 \uc139\uc158 (",(0,o.kt)("strong",{parentName:"p"},"GPU2D Driver"),")\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/gpu2d-driver.png",width:"300",mdxType:"Figure"},"GPU2D Driver \uc124\uc815"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"GPU2D Command List Size")," \uc124\uc815\uc740 GPU2D\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uba85\ub839 \ubaa9\ub85d\uc758 \ud06c\uae30\ub97c \ubc14\uc774\ud2b8 \ub2e8\uc704\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)(i.Z,{mdxType:"Note"},"When ",(0,o.kt)(l.Z,{to:"additional-features#vector-rendering",mdxType:"Link"},"Vector Rendering")," is also enabled with the ",(0,o.kt)("i",null,"hardware")," option in the application another memory pool for a *stencil buffer* to perform vector rendering operations is created by the TouchGFX Generator. The size of this memory pool is: ",(0,o.kt)("i",null,"(Display Width * Display Height bytes)")," + ",(0,o.kt)("i",null,"5kb extra margin"),". This will therefore consume more RAM. Users can opt for the ",(0,o.kt)("i",null,"software")," option to save RAM at the expense of slower performance."),(0,o.kt)("h2",d({},{id:"real-time-operating-system"}),"\uc2e4\uc2dc\uac04 \uc6b4\uc601 \uccb4\uc81c"),(0,o.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 TouchGFX\uc5d0\uc11c \uc5b4\ub5a4\ub4e0 RTOS\ub4e0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uc2ec\uc9c0\uc5b4 No OS\uae4c\uc9c0\ub3c4). ",(0,o.kt)("a",d({parentName:"p"},{href:"../../touchgfx-architecture"}),"Abstraction Layer Architecture"),"\uc5d0\uc11c \uc124\uba85\ud588\ub358 \ubc14\uc640 \uac19\uc774, TouchGFX Engine\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"OSWrappers")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba54\uc778 \uc774\ubca4\ud2b8 \ub8e8\ud504\uc640 \ud504\ub808\uc784 \ubc84\ud37c(\ub4e4)\ub97c \uc0ac\uc6a9\uc790\uac00 \uc120\ud0dd\ud55c RTOS\uc640 \ub3d9\uae30\ud654\ud569\ub2c8\ub2e4. \uac1c\ubc1c\uc790\uac00 TouchGFX Generator\uc5d0\uc11c \uc6b4\uc601 \uccb4\uc81c\ub97c \uc120\ud0dd\ud558\uba74 \uc120\ud0dd\ud55c OS\uc758 \ud504\ub9ac\ubbf8\ud2f0\ube0c\ub97c \ud1b5\ud574 \ub0b4\ubd80\uc801\uc73c\ub85c \ub3d9\uae30\ud654\ub97c \uc218\ud589\ud558\uae30 \uc704\ud55c \ucf54\ub4dc\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \ud2b9\ud788 \uc2a4\ud0dd \ud06c\uae30\ub97c \uacb0\uc815\ud558\ub824\uba74 \ub2e4\ub978 \ubb34\uc5c7\ubcf4\ub2e4 \uc774\uc804\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c STM32CubeMX\ub97c \ud1b5\ud574 \uc6b4\uc601 \uccb4\uc81c\ub97c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"FreeRTOS(CMSIS OS V1 \ubc0f V2) \ubc0f ThreadX(\ub124\uc774\ud2f0\ube0c \ubbf8\ub4e4\uc6e8\uc5b4 \ub610\ub294 Azure RTOS \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329)\ub294 STM32CubeMX \ub0b4\ubd80\uc5d0\uc11c \uc9c1\uc811 \uad6c\uc131\uc774 \uac00\ub2a5\ud558\uace0, TouchGFX Generator\ub294 \uc791\uc5c5 \uc815\uc758 \ubc0f TouchGFX RTOS \ub4dc\ub77c\uc774\ubc84 \ubaa8\ub450\ub97c \uc704\ud574 \uc0dd\uc131\ub41c \ucf54\ub4dc\ub97c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ud569\ub2c8\ub2e4. TouchGFX Generator\ub294 \uc5b4\ub5a4 CMSIS \ud638\ud658 RTOS\uc5d0\uc11c\ub4e0 \uc791\ub3d9\ud558\ub294 CMSIS V1 \ubc0f CMSIS V2 \ud638\ud658 RTOS, ThreadX\uc6a9 \ub4dc\ub77c\uc774\ubc84 \ubc0f \uc6b4\uc601 \uccb4\uc81c \uc5c6\uc774 \ubca0\uc5b4 \uba54\ud0c8\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud55c \ub4dc\ub77c\uc774\ubc84(No OS)\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",d({},{id:"no-os"}),"No OS"),(0,o.kt)("p",null,"\uc6b4\uc601 \uccb4\uc81c \uc5c6\uc774 TouchGFX\ub97c \uc2e4\ud589\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0 ",(0,o.kt)("em",{parentName:"p"},"Middleware and Software Packs")," \ubc94\uc8fc\uc5d0 \ud65c\uc131\ud654\ub41c \uc6b4\uc601 \uccb4\uc81c\uac00 \uc5c6\uac70\ub098 STM32CubeMX\uc5d0\uc11c ",(0,o.kt)("em",{parentName:"p"},"X-CUBE"),"\ub85c \uc120\ud0dd\ub41c \uc6b4\uc601 \uccb4\uc81c\uac00 \uc5c6\uc73c\uba74 TouchGFX Generator\uc5d0\uc11c ",(0,o.kt)("em",{parentName:"p"},"No OS")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"\ubca0\uc5b4 \uba54\ud0c8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud560 \ub54c TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"\uc2e4\uc2dc\uac04 \uc6b4\uc601 \uccb4\uc81c")," \uc2dc\ub098\ub9ac\uc624\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,o.kt)("h3",d({},{id:"freertos-middleware-os"}),"FreeRTOS"),(0,o.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c CMSIS_RTOS_V1 \ub610\ub294 CMSIS_RTOS_V2 \uac00\uc18d\uae30\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc73c\ub824\uba74 STM32CubeMX\uc758 ",(0,o.kt)("em",{parentName:"p"},"Middleware and Software Packs")," \ubc94\uc8fc\uc5d0\uc11c FreeRTOS\ub97c \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-middleware.webp",width:"400",mdxType:"Figure"},"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c FreeRTOS\uac00 \ud65c\uc131\ud654"),(0,o.kt)("p",null,"\uba87\uba87 TouchGFX Board Setups\uc740 \uae30\ubcf8\uc801\uc73c\ub85c FreeRTOS \ubbf8\ub4e4\uc6e8\uc5b4\uac00 \uc544\ub2c8\ub77c ThreadX \ub610\ub294 NoOS\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4(\uc608: STM32U599). \uc774\ub7ec\ud55c TouchGFX Board Setups\uc5d0\uc11c \uc5ec\uc804\ud788 FreeRTOS\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 STM32CubeMX\uc758 ",(0,o.kt)("em",{parentName:"p"},"Software Packs Components Selector"),"\uc5d0\uc11c X-CUBE-FreeRTOS \ud329\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc774\ub97c \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/free-rtos-software-packs.webp",width:"800",mdxType:"Figure"},"Software Packs Components Selector\uc5d0\uc11c FreeRTOS\uac00 \ud65c\uc131\ud654"),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c FreeRTOS(MSIS_RTOS_V1 \ubc0f CMSIS_RTOS_V2)\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"\uc2e4\uc2dc\uac04 \uc6b4\uc601 \uccb4\uc81c")," \uc2dc\ub098\ub9ac\uc624\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,o.kt)("h3",d({},{id:"threadx"}),"ThreadX"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"X-CUBE")," \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329\uc744 \uc120\ud0dd\ud558\uac70\ub098 STM32CubeMX\uc5d0\uc11c \uae30\ubcf8 ThreadX \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \ud65c\uc131\ud654(\uc120\ud0dd\ud55c MCU \uc7a5\uce58\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uacbd\uc6b0)\ud558\ub294 \ubc29\ubc95\uc73c\ub85c ThreadX\ub97c \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 ThreadX\uac00 ",(0,o.kt)("em",{parentName:"p"},"X-CUBE")," \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329\uc774\ub098 \ud2b9\uc815 MCU \uc81c\ud488\uad70\uc744 \uc704\ud55c \ub124\uc774\ud2f0\ube0c ThreadX \ubbf8\ub4e4\uc6e8\uc5b4\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(i.Z,{mdxType:"Note"},(0,o.kt)("li",null,"\ubaa8\ub4e0 \uc0c8\ub85c\uc6b4 STM32 MCU \uc7a5\uce58\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ucd94\uac00 \ud329\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud558\uc9c0 \uc54a\uace0\ub3c4 STM32CubeMX ",(0,o.kt)("i",null,"Middleware")," \ubc94\uc8fc\uc5d0\uc11c \uc9c1\uc811 ThreadX\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. TouchGFX Board Support \ud328\ud0a4\uc9c0\ub294 ThreadX \ubbf8\ub4e4\uc6e8\uc5b4(\ucd9c\uc2dc\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0) \ub610\ub294 X-CUBE-AZRTOS \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \uc11c\uc11c\ud788 \ub098\uc544\uac00\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("li",null,"ThreadX \uc9c0\uc6d0\uc744 \uc81c\uacf5\ud558\ub294 X-CUBE-AZRTOS-XX \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud328\ud0a4\uc9c0\ub294 \uad11\ubc94\uc704\ud55c STM32 MCU \uc81c\ud488\uad70\uc744 \uc704\ud574 \uc774\ubbf8 \ucd9c\uc2dc\uac00 \ub418\uc5b4 \uc788\uc73c\uba70, STM32CubeMX\uc758 ",(0,o.kt)("i",null,"Embedded Software Packages Manager"),"\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\uc774\ud6c4 \uc139\uc158\uc5d0\uc11c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 ",(0,o.kt)("em",{parentName:"p"},"Middleware")," \ub610\ub294 ",(0,o.kt)("em",{parentName:"p"},"AZRTOS Software Pack"),"\uc73c\ub85c ThreadX\ub97c \ud65c\uc131\ud654\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,o.kt)("h4",d({},{id:"threadx-middleware"}),(0,o.kt)("em",{parentName:"h4"},"Middleware and Software Packs")," \ubc94\uc8fc\uc5d0\uc11c ThreadX \ud65c\uc131\ud654"),(0,o.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c ThreadX\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc73c\ub824\uba74 STM32CubeMX\uc758 ",(0,o.kt)("em",{parentName:"p"},"Middleware and Software Packs")," \ubc94\uc8fc\uc5d0\uc11c ThreadX\ub97c \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-middleware.webp",width:"300",mdxType:"Figure"},"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud65c\uc131\ud654\ub41c Middleware and Software Packs \ubc94\uc8fc\uc758 ThreadX"),(0,o.kt)("p",null,"\uc77c\ub2e8 \ud65c\uc131\ud654\uac00 \ub418\uba74 TouchGFX Generator\uc5d0\uc11c ThreadX \uc635\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"ThreadX\ub97c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub124\uc774\ud2f0\ube0c \ubbf8\ub4e4\uc6e8\uc5b4\ub85c\uc11c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System")," \uc2dc\ub098\ub9ac\uc624\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,o.kt)("h4",d({},{id:"threadx-xcube"}),(0,o.kt)("em",{parentName:"h4"},"X-CUBE")," \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329\uc5d0\uc11c ThreadX \ud65c\uc131\ud654"),(0,o.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c ThreadX\ub97c \uc120\ud0dd\ud558\ub824\uba74 STM32CubeMX\uc758 ",(0,o.kt)("em",{parentName:"p"},"Software Packs Component Selector"),"\uc5d0\uc11c AZRTOS \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329\uc744 \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,o.kt)(c.Z,{mdxType:"Shortcut"},"STM32CubeMX\uc758 "),' \ud504\ub85c\uc81d\ud2b8 \uba54\ub274\uc5d0\uc11c "Select Components"  \ubc84\ud2bc \ub610\ub294 Alt + o\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.'),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.webp",width:"700",mdxType:"Figure"},"STM32CubeMX\uc5d0\uc11c \ucd94\uac00 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc120\ud0dd"),(0,o.kt)("p",null,"\ub2e4\uc74c \uadf8\ub9bc\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c AZRTOS Software Pack\uc744 \ud65c\uc131\ud654\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"RTOS")," ThreadX"),"\ub97c \uc120\ud0dd\ud558\uace0 ",(0,o.kt)("strong",{parentName:"p"},"Core")," \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud574\uc11c ThreadX\ub97c \ud65c\uc131\ud654\ud558\uc2ed\uc2dc\uc624.  \ud328\ud0a4\uc9c0\ub97c \ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc124\uce58(\uc544\uc9c1 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0)"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos.webp",width:"400",mdxType:"Figure"},"X-CUBE-AZRTOS Software Pack\uc5d0\uc11c ThreadX \ud65c\uc131\ud654"),(0,o.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0 ThreadX \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329\uc744 \ucd94\uac00\ud558\uba74 STM32CubeMX\uc758 \ud504\ub85c\uc81d\ud2b8 \uba54\ub274 \uc67c\ucabd\uc5d0 \uc788\ub294 ",(0,o.kt)("em",{parentName:"p"},"Middleware and Software Packs")," \ubc94\uc8fc \uc544\ub798\uc5d0 ",(0,o.kt)("em",{parentName:"p"},"X-CUBE"),"\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-enabled.webp",width:"200",mdxType:"Figure"},"X-CUBE-AZRTOS\uc758 ThreadX\uac00 STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud65c\uc131\ud654"),(0,o.kt)("p",null,"ThreadX\uac00 \ud65c\uc131\ud654\ub418\uba74 TouchGFX Generator\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc635\uc158\uc774 \ub418\uace0, \uc774 \uc635\uc158\uc744 \uc120\ud0dd\ud558\uace0 \ub098\uba74 ",(0,o.kt)("strong",{parentName:"p"},"Memory Pool Size")," \ubc0f ",(0,o.kt)("strong",{parentName:"p"},"Memory Stack Size")," \uac12\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"TouchGFX Generator\uc5d0\uc11c ThreadX \uc120\ud0dd"),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \uac12\ub4e4\uc740 \uc2a4\ub808\ub4dc \ub9ac\uc18c\uc2a4\ub97c \ud3ec\ud568\ud560 \uc218 \uc788\uc744 \ub9cc\ud07c \ucda9\ubd84\ud788 \ucee4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(n.Z,{mdxType:"FurtherReading"},"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c X-CUBE\ub85c ThreadX\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)(l.Z,{to:"../../scenarios/scenarios-configure-rtos",mdxType:"Link"},"Real Time Operating System")," \uc2dc\ub098\ub9ac\uc624\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,o.kt)("h3",d({},{id:"other-cmsis-compliant-os"}),"\uae30\ud0c0 CMSIS \ud638\ud658 OS"),(0,o.kt)("p",null,"\uac1c\ubc1c\uc790\uac00 STM32CubeMX\uac00 \uc81c\uacf5\ud560 \uc218 \uc788\ub294 \uac83\uacfc \ub2e4\ub978 CMSIS \ud638\ud658 OS\ub97c \uc694\uad6c\ud558\ub294 \uacbd\uc6b0(FreeRTOS \ubc0f ThreadX), RTOS \uad6c\uc131 \ubc0f \uc791\uc5c5 \uc815\uc758\ub97c \uc218\ub3d9\uc73c\ub85c \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. TouchGFX Generator\ub294 \uac1c\ubc1c\uc790\uac00 \uad6c\ud604\ud574\uc57c \ud558\ub294 \ube48 ",(0,o.kt)("inlineCode",{parentName:"p"},"OSWrappers")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 \uc218\ub3d9 \ub2e8\uacc4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"RTOS \uad6c\uc131"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"OSWrappers")," \uc778\ud130\ud398\uc774\uc2a4 \uad6c\ud604"),(0,o.kt)("li",{parentName:"ol"},"TouchGFX\ub97c \uc2e4\ud589\ud560 \uc791\uc5c5 \uc815\uc758(",(0,o.kt)("inlineCode",{parentName:"li"},"MX_TouchGFX_Process"),")"),(0,o.kt)("li",{parentName:"ol"},"\uc2a4\ucf00\uc904\ub7ec \uc2dc\uc791")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process"),"\ub97c \ud638\ucd9c\ud558\uc5ec \uc791\uc5c5 \ud578\ub4e4\ub7ec \ub0b4\uc5d0\uc11c TouchGFX Engine \uba54\uc778 \ub8e8\ud504 \uc2dc\uc791"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void\xa0MX_TouchGFX_Process(void);\n")))}S.isMDXComponent=!0}}]);