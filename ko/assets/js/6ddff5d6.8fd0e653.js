"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[44316],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,m=u["".concat(c,".").concat(s)]||u[s]||h[s]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},86473:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(59496),n=r(89588);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends a.Component{render(){return a.createElement(n.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const i=l},12822:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(59496),n=r(32118);const o=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,n.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:r,height:o,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:r,height:o,src:l})),a.createElement("p",null,e.children))}},86222:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(59496),n=r(89588);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(n.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const i=l},89588:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(59496);class n extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const o=n},39331:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(59496),n=r(89588);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends a.Component{render(){return a.createElement(n.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const i=l},71678:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(59496),n=r(89588);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(n.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const i=l},58786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>N,frontMatter:()=>h,metadata:()=>m,toc:()=>f});r(59496);var a=r(49613),n=r(12822),o=r(86222),l=r(51721),i=r(86473),c=r(39331),p=r(71678);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const h={id:"additional-features",title:"Additional Features",sidebar_label:"Additional Features"},s=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",title:"Additional Features",description:"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc131\uc5d0\uc11c \ucd94\uac00 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0 Additional Features \uadf8\ub8f9\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",draft:!1,tags:[],version:"current",frontMatter:{id:"additional-features",title:"Additional Features",sidebar_label:"Additional Features"},sidebar:"docs",previous:{title:"Driver",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver"},next:{title:"Video Decoding",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"}},g={},f=[{value:"External Data Reader",id:"external-data-reader",level:2},{value:"\ubca1\ud130 \ub80c\ub354\ub9c1",id:"vector-rendering",level:2},{value:"\ubca1\ud130 \uae00\uaf34 \ub80c\ub354\ub9c1",id:"vector-font-rendering",level:2},{value:"8\ube44\ud2b8 LTDC CLUT(Color Look Up Table)",id:"8bit-ltdc-color-look-up-table",level:2}],v={toc:f},k="wrapper";function N(e){var{components:t}=e,r=u(e,["components"]);return(0,a.kt)(k,d({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc131\uc5d0\uc11c \ucd94\uac00 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0 Additional Features \uadf8\ub8f9\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4."),(0,a.kt)(n.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-settings.png",width:"350",mdxType:"Figure"},"TouchGFX Generator\uc758 Additional Features \uc124\uc815"),(0,a.kt)("h2",d({},{id:"external-data-reader"}),"External Data Reader"),(0,a.kt)("p",null,"RGB565 Framebuffer Pixel Format\uc758 \uacbd\uc6b0 TouchGFX\ub294 \uac1c\ubc1c\uc790\uac00 \uba54\ubaa8\ub9ac\uc5d0\uc11c \ubc84\ud37c\uc758 \ucd94\uac00 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294 ",(0,a.kt)("a",d({parentName:"p"},{href:"../../../ui-development/touchgfx-engine-features/caching-bitmaps"}),"\uce90\uc2f1")," \ub300\uc2e0\uc5d0 \uba54\ubaa8\ub9ac \ub9e4\ud551\ub418\uc9c0 \uc54a\uc740 \uc9c1\ub82c \ud50c\ub798\uc2dc\uc5d0\uc11c \uc9c1\uc811 \ub370\uc774\ud130\ub97c \uc77d\uc744 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 ",(0,a.kt)("em",{parentName:"p"},"Data Reader")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uba54\ubaa8\ub9ac \ub9e4\ud551\ub418\uc9c0 \uc54a\uc740 \ud50c\ub798\uc2dc \uce69\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc560\uc14b\uc744 \uac80\uc0c9\ud558\uae30 \uc704\ud574 DataReader\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc608\uc81c\ub294 ",(0,a.kt)("a",d({parentName:"p"},{href:"../../../scenarios/using-serial-flash"}),"SerialFlash")," \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Data Reader")," \uc635\uc158\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ucd94\uac00 \ubc84\ud37c\uc6a9 \uba54\ubaa8\ub9ac\uac00 \ucda9\ubd84\ud558\uc9c0 \uc54a\uc740 \uc800\uac00 \uc194\ub8e8\uc158(\uc608: STM32G0)\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 \ub2e4\uc74c \uad6c\uc131\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"External Data Reader"),": \uc774 \uae30\ub2a5\uc744 \ud65c\uc131\ud654 \ub610\ub294 \ube44\ud65c\uc131\ud654\ud558\uc2ed\uc2dc\uc624. \ud65c\uc131\ud654\ud558\uba74 TouchGFX\uac00 \uc0dd\uc131\ub41c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \uc9c1\uc811 \uc560\uc14b\uc5d0 \ub300\ud55c \ub370\uc774\ud130\ub97c \uac80\uc0c9\ud569\ub2c8\ub2e4. \ube44\ud65c\uc131\ud654\ub41c \uacbd\uc6b0\uc5d0\ub294 \uac1c\ubc1c\uc790\uac00 \ub300\uc2e0\uc5d0 \uba54\ubaa8\ub9ac\uc758 \ubc84\ud37c\uc5d0 \uc774\ubbf8\uc9c0\ub97c ",(0,a.kt)("em",{parentName:"li"},"\uce90\uc2f1"),"\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"External Data Reader: Memory base address"),": \uc678\ubd80 data raeder \uba54\ubaa8\ub9ac\uc758 \uc2dc\uc791 \uc8fc\uc18c\ub97c\uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"External Data Reader: Memory size"),": \uc678\ubd80 data reader \uba54\ubaa8\ub9ac\uc758 \ud06c\uae30\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"External Data Reader: Line Buffer Size"),": \uc774\ubbf8\uc9c0 \ub610\ub294 \ud14d\uc2a4\ud2b8\ub97c \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \ube14\ub80c\ub529\ud560 \uc218 \uc788\ub3c4\ub85d \ub450 \uac1c\uc758 \ubc84\ud37c\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. ARGB8888 \ud53d\uc140 \ud615\uc2dd\uc5d0\uc11c \uc804\uccb4 \ud06c\uae30 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc6d0\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,a.kt)("em",{parentName:"li"},"1 \ud654\uba74 \ub108\ube44 ")," 4\ubc14\uc774\ud2b8*\uac00 \uae30\ubcf8 \uac12\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"External Data Reader: Minimum DMA transfer size"),": DMA \uc804\uc1a1\uc744 \uc2dc\uc791\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c \ubc14\uc774\ud2b8\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \ub354 \uc801\uc740 \ubc14\uc774\ud2b8\uac00 \uc694\uccad\ub418\uba74 DMA\uac00 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"External Data Reader"),"\uac00 \ud65c\uc131\ud654\ub41c \uc0c1\ud0dc\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud55c \ud6c4\uc5d0\ub294 TouchGFX Generator\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \ucd94\uac00 \ud30c\uc77c\uc774 \uc0dd\uc131\ub418\uc5b4 \ube44\uba54\ubaa8\ub9ac \ub9e4\ud551 \ud50c\ub798\uc2dc\uc5d0\uc11c \uc9c1\uc811 \uc560\uc14b \uac80\uc0c9\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.hpp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/TouchGFXDataReader.cpp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/TouchGFXDataReader.hpp"))),(0,a.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub41c AL \uc544\ud0a4\ud14d\ucc98\uc5d0\uc11c \ud754\ud788 \uadf8\ub7ec\ud558\ub4ef, ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\ub294 \uc77d\uae30 \uc804\uc6a9\uc774\uba70  ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," \ud074\ub798\uc2a4 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uc218\uc815\uc774 \uc774\ub8e8\uc5b4\uc838\uc57c \ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\uc758 \uc720\ud615\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DataReader"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 TouchGFX HAL\uc744 \uad6c\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \ub2e4\uc74c \ud30c\uc77c\uc774 \uc218\uc815\ub429\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.hpp"))),(0,a.kt)(c.Z,{mdxType:"Note"},"DataReader Additional Feature\ub294 DMA2D \ubc0f LTDC\uac00 \ube44\ud65c\uc131\ud654\ub41c \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",d({},{id:"vector-rendering"}),"\ubca1\ud130 \ub80c\ub354\ub9c1"),(0,a.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c \ubca1\ud130 \ub80c\ub354\ub9c1\uc744 \uad6c\uc131\ud558\ub824\uba74 \ud504\ub808\uc784 \ubc84\ud37c \ud53d\uc140 \ud615\uc2dd\uc774 RGB565, RGB888 \ub610\ub294 ARGB8888\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ubca1\ud130 \ub80c\ub354\ub9c1 \uae30\ub2a5\uacfc \uad00\ub828\ud574 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc138 \uac00\uc9c0 \uc635\uc158\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disabled")," - \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \ubca1\ud130 \ub80c\ub354\ub9c1 \uc9c0\uc6d0\uc744 \ube44\ud65c\uc131\ud654\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4")," - \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubca1\ud130 \ub80c\ub354\ub9c1 \uc9c0\uc6d0\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud558\ub4dc\uc6e8\uc5b4")," - \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \ud558\ub4dc\uc6e8\uc5b4 \ubca1\ud130 \ub80c\ub354\ub9c1 \uc9c0\uc6d0\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4"),"\ub97c \uc120\ud0dd\ud558\ub294 \uacbd\uc6b0 CPU\uac00 \ubca1\ud130 \ub80c\ub354\ub9c1 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. GPU2D(Neochrom)\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 MCU\uc758 \uacbd\uc6b0 GPU2D\uc5d0\uc11c \ubca1\ud130 \ub80c\ub354\ub9c1\uc744 \uc218\ud589\ud558\uc5ec \uc131\ub2a5\uc744 \uac1c\uc120\ud558\ub294 ",(0,a.kt)("em",{parentName:"p"},"\ud558\ub4dc\uc6e8\uc5b4")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(i.Z,{mdxType:"Caution"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c TouchGFX Designer\uc5d0\uc11c \ub098\uc628 SVGImage \uc704\uc82f\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 TouchGFX Generator\uc5d0\uc11c ",(0,a.kt)("b",null,"Vector Rendering"),"\uc774 \ud65c\uc131\ud654 \uc0c1\ud0dc\ub85c \uc124\uc815\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ucef4\ud30c\uc77c \uc911\uc5d0 ",(0,a.kt)("b",null,'"no definition for touchgfx::VectorRenderer::getInstance()"')," \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,a.kt)(p.Z,{mdxType:"Tip"},"\uc7a5\uce58\uc5d0\uc11c GPU2D(NeoChrom)\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0(\uc608: STM32U599), \ucd5c\uc801\uc758 \ubca1\ud130 \ub80c\ub354\ub9c1 \uc131\ub2a5\uc744 \uc704\ud574 \uc774\ub97c \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},"TouchGFX\uc5d0\uc11c SVG\uac00 \ub80c\ub354\ub9c1\ub418\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,a.kt)(l.Z,{to:"../../../ui-development/touchgfx-engine-features/svg",mdxType:"Link"},"SVG")," \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",d({},{id:"vector-font-rendering"}),"\ubca1\ud130 \uae00\uaf34 \ub80c\ub354\ub9c1"),(0,a.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c \ubca1\ud130 \uae00\uaf34 \ub80c\ub354\ub9c1\uc744 \ud65c\uc131\ud654\ud558\ub824\uba74 ",(0,a.kt)("strong",{parentName:"p"},"\ubca1\ud130 \ub80c\ub354\ub9c1"),"(",(0,a.kt)("em",{parentName:"p"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4")," \ub610\ub294 ",(0,a.kt)("em",{parentName:"p"},"\ud558\ub4dc\uc6e8\uc5b4"),")\uc744 \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. \ubca1\ud130 \uae00\uaf34 \ub80c\ub354\ub9c1\uacfc \uad00\ub828\ud574 \uac1c\ubc1c\uc790\uc5d0\uac8c \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ube44\ud65c\uc131\ud654")," - \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubca1\ud130 \uae00\uaf34 \ub80c\ub354\ub9c1 \uc9c0\uc6d0\uc744 \ube44\ud65c\uc131\ud654\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud65c\uc131\ud654")," - \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubca1\ud130 \uae00\uaf34 \ub80c\ub354\ub9c1 \uc9c0\uc6d0\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ubca1\ud130 \uae00\uaf34 \uadf8\ub9ac\uae30 \uc131\ub2a5\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ubca1\ud130 \ub80c\ub354\ub9c1")," \ub9e4\uac1c\ubcc0\uc218(\uc608: ",(0,a.kt)("em",{parentName:"p"},"\ud558\ub4dc\uc6e8\uc5b4"),"\uac00 \uac00\uc7a5 \ube60\ub984) \uc635\uc158\uc758 \uc601\ud5a5\uc744 \ubc1b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",d({},{id:"8bit-ltdc-color-look-up-table"}),"8\ube44\ud2b8 LTDC CLUT(Color Look Up Table)"),(0,a.kt)("p",null,"LTDC\uac00 L8 \ud615\uc2dd\uc758 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc77d\ub3c4\ub85d \uad6c\uc131\ub418\uace0 TouchGFX\uac00  ",(0,a.kt)("a",d({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_b_g_r2222"}),"ABRG2222"),", ",(0,a.kt)("a",d({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_r_g_b2222"}),"ARGB222"),", ",(0,a.kt)("a",d({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___b_g_r_a2222"}),"BGRA2222")," \ub610\ub294 ",(0,a.kt)("a",d({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___r_g_b_a2222"}),"RGBA2222"),"\ub85c \ub80c\ub354\ub9c1\ub418\ub294 \uacbd\uc6b0, TouchGFX Generator\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::initialize()")," \ub3d9\uc548 LTDC\uc5d0 \ub85c\ub4dc\ub418\ub294 CLUT\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. LTDC \ubc0f CLUT \uc0ac\uc6a9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 STM32 MCU \ucc38\uc870 \ub9e4\ub274\uc5bc\uc744 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))}N.isMDXComponent=!0}}]);