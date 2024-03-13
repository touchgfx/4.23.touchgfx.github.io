"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[90232],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(r),h=n,c=d["".concat(p,".").concat(h)]||d[h]||s[h]||l;return r?a.createElement(c,o(o({ref:t},u),{},{components:r})):a.createElement(c,o({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},12822:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(59496),n=r(32118);const l=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,o=(0,n.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:r,height:l,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:r,height:l,src:o})),a.createElement("p",null,e.children))}},39559:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(59496),n=r(32118);const l=function(e){const t=(0,n.Z)(e.url);var r;const l=null!==(r=e.width)&&void 0!==r?r:"100%";var o;const i=null!==(o=e.height)&&void 0!==o?o:"100%";return a.createElement("div",{className:"loop-video"},a.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:l,height:i},a.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),a.createElement("p",null,e.children))}},58808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>s});r(59496);var a=r(49613),n=r(12822),l=r(39559);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={id:"touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG"},m=void 0,u={unversionedId:"development/scenarios/touchgfx-on-gpu2d",id:"development/scenarios/touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 NeoChrom \uadf8\ub798\ud53d \uac00\uc18d\uae30\uac00 \ud3ec\ud568\ub41c \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c TouchGFX\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774 \uadf8\ub798\ud53d \uac00\uc18d\uae30\ub294 \ud14d\uc2a4\ucc98 \ub9e4\ud551, \uc774\ubbf8\uc9c0 \ud655\ub300/\ucd95\uc18c \ubc0f \ud68c\uc804 \uac19\uc740 \uc791\uc5c5\uc758 \uc131\ub2a5\uc744 \ud68d\uae30\uc801\uc73c\ub85c \uac1c\uc120\ud569\ub2c8\ub2e4. \uc774\ub294 \uace7 \ub192\uc740 \ud504\ub808\uc784 \uc18d\ub3c4\ub97c \uc720\uc9c0\ud558\uba74\uc11c \uace0\uae09 UI\ub97c \uad6c\ucd95\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-gpu2d.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-gpu2d",permalink:"/4.23/ko/docs/development/scenarios/touchgfx-on-gpu2d",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG"},sidebar:"docs",previous:{title:"\uc800\uac00 \ud558\ub4dc\uc6e8\uc5b4 \uae30\ubc18\uc758 TouchGFX",permalink:"/4.23/ko/docs/development/scenarios/touchgfx-on-lowcost-hardware"},next:{title:"\ubd80\ubd84 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ud1b5\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9 \uc808\uac10",permalink:"/4.23/ko/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"}},d={},s=[{value:"NeoChrom \ubc0f NeoChromVG",id:"neochrom-\ubc0f-neochromvg",level:3},{value:"NeoChrom \uadf8\ub798\ud53d \uae30\ub2a5",id:"neochrom-\uadf8\ub798\ud53d-\uae30\ub2a5",level:2},{value:"\ubca1\ud130 \uadf8\ub798\ud53d",id:"\ubca1\ud130-\uadf8\ub798\ud53d",level:3},{value:"NeoChrom\uc744 \ud1b5\ud55c \ub80c\ub354\ub9c1 \uc2dc\uac04 \ub2e8\ucd95.",id:"neochrom\uc744-\ud1b5\ud55c-\ub80c\ub354\ub9c1-\uc2dc\uac04-\ub2e8\ucd95",level:2},{value:"\ub80c\ub354\ub9c1 \uc2dc\uac04 \uc694\uc57d",id:"\ub80c\ub354\ub9c1-\uc2dc\uac04-\uc694\uc57d",level:3},{value:"\ubcf4\ub2e4 \ud48d\ubd80\ud55c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4",id:"\ubcf4\ub2e4-\ud48d\ubd80\ud55c-\uc0ac\uc6a9\uc790-\uc778\ud130\ud398\uc774\uc2a4",level:3},{value:"\uac00\uc18d \ubca1\ud130 \uadf8\ub798\ud53d",id:"\uac00\uc18d-\ubca1\ud130-\uadf8\ub798\ud53d",level:2},{value:"SVG",id:"svg",level:3},{value:"Vector fonts",id:"vector-fonts",level:3},{value:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131\ud558\uae30",level:2},{value:"\ud504\ub808\uc784\ubc84\ud37c \ud615\uc2dd",id:"\ud504\ub808\uc784\ubc84\ud37c-\ud615\uc2dd",level:2},{value:"NeoChrom\uc758 \ud55c\uacc4",id:"neochrom\uc758-\ud55c\uacc4",level:2}],h={toc:s},c="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)(c,o({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 NeoChrom \uadf8\ub798\ud53d \uac00\uc18d\uae30\uac00 \ud3ec\ud568\ub41c \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c TouchGFX\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774 \uadf8\ub798\ud53d \uac00\uc18d\uae30\ub294 \ud14d\uc2a4\ucc98 \ub9e4\ud551, \uc774\ubbf8\uc9c0 \ud655\ub300/\ucd95\uc18c \ubc0f \ud68c\uc804 \uac19\uc740 \uc791\uc5c5\uc758 \uc131\ub2a5\uc744 \ud68d\uae30\uc801\uc73c\ub85c \uac1c\uc120\ud569\ub2c8\ub2e4. \uc774\ub294 \uace7 \ub192\uc740 \ud504\ub808\uc784 \uc18d\ub3c4\ub97c \uc720\uc9c0\ud558\uba74\uc11c \uace0\uae09 UI\ub97c \uad6c\ucd95\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"The NeoChrom graphics accelerator is currently only available in the STM32U5x9 and STM32H7R/S microcontrollers. Development boards are available for both families."),(0,a.kt)(n.Z,{width:"30%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/stm32u5a9-dk-bsd-menu.webp",mdxType:"Figure"},"STM32U5A9 Discovery Board"),(0,a.kt)("p",null,"The NeoChrom accelerator is known by the name GPU2D in source code and in CubeMX."),(0,a.kt)("h3",o({},{id:"neochrom-\ubc0f-neochromvg"}),"NeoChrom \ubc0f NeoChromVG"),(0,a.kt)("p",null,"NeoChrom \uac00\uc18d\uae30\ub294 STM32U5G9\uc744 \ub3c4\uc785\ud558\uba74\uc11c \ucd94\uac00 \uae30\ub2a5\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uac1c\uc120\ub41c \uac00\uc18d\uae30\uc758 \uc774\ub984\uc740 NeoChromVG\uc785\ub2c8\ub2e4. \uac00\uc18d\uae30\uc5d0\ub294 \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d \ubca1\ud130 \uadf8\ub798\ud53d\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud655\uc7a5 \uae30\ub2a5\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uac00\uc18d\uae30")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U599"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5A9"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5F9"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChromVG")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5G9"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChromVG")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32H7Rx"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32H7Sx"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom")))),(0,a.kt)("h2",o({},{id:"neochrom-\uadf8\ub798\ud53d-\uae30\ub2a5"}),"NeoChrom \uadf8\ub798\ud53d \uae30\ub2a5"),(0,a.kt)("p",null,"NeoChrom \uac00\uc18d\uae30\ub294 \uae30\ubcf8 \ube14\ub9ac\ud305(\uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30), \ube14\ub80c\ub529, \uc2a4\ucf00\uc77c\ub9c1, \ud68c\uc804 \ubc0f \ud14d\uc2a4\ucc98 \ub9e4\ud551 \uae30\ub2a5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubaa8\ub4e0 \uae30\ub2a5\uc740 NeoChrom\uc774 \ud3ec\ud568\ub41c \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \uc2e4\ud589\ub420 \ub54c TouchGFX\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"DMA2D \uadf8\ub798\ud53d \uac00\uc18d\uae30\uc5d0 \ube44\ud574 NeoChrom\uc740 \ub354 \ub9ce\uc740 \uadf8\ub798\ud53d \uc791\uc5c5\uc744 \uac00\uc18d\ud654\ud560 \uc218 \uc788\uc73c\uba70, \ubcf4\ub2e4 \ud48d\ubd80\ud55c \uae30\ub2a5 \uc138\ud2b8\ub97c \uac16\ucd94\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uadf8\ub798\ud53d \uae30\ub2a5")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"DMA2D")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"GPU2D")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\uc9c0\uc6d0\ub418\ub294 \ud615\uc2dd(TouchGFX\uac00 \ud3ec\ud568\ub41c \uacbd\uc6b0)"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ARGB8888, RGB888, RGB565, A8, A4, L8"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ARGB8888, RGB888, RGB565, A8, A4, A2, A1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\uba85\ub839 \ubaa9\ub85d \uae30\ubc18"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\uadf8\ub9ac\uae30"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\uc9c1\uc0ac\uac01\ud615"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\uc9c1\uc0ac\uac01\ud615, \ud53d\uc140, \ub77c\uc778, \uc0bc\uac01\ud615, MSAA(Multi-Sample Anti-Aliasing)\uac00 \uc788\ub294 \uc0ac\ubcc0\ud615")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\ube14\ub9ac\ud305"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\ubcf5\uc0ac, \uc54c\ud30c \ube14\ub80c\ub529, \ud53d\uc140 \ud615\uc2dd \ubcc0\ud658"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\ubcf5\uc0ac, \uc54c\ud30c \ube14\ub80c\ub529, \ud53d\uc140 \ud615\uc2dd \ubcc0\ud658, \uceec\ub7ec \ud0a4\uc789")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\ud14d\uc2a4\ucc98 \ub9e4\ud551"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\ubca1\ud130 \uadf8\ub798\ud53d"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No*")))),(0,a.kt)("p",null,"*"," \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d \ubca1\ud130 \uadf8\ub798\ud53d\uc740 NeoChromVG\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"NeoChrom\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uae30\ub2a5\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub354 \ub9ce\uc740 TouchGFX \uc704\uc82f\uc774 \uac00\uc18d\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc704\uc82f")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"DMA2D")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"GPU2D")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Box, BoxWithBorder"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Image, AnimatedImage, TiledImage, SnapshotWidget"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Button, ButtonWithIcon, ButtonWithLabel, ToggleButton"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"RadioButton, RepeatButton"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"PixelDataWidget"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"TextArea, TextAreaWithWildcard, Keyboard"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Partly"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ScalableImage"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"TextureMapper, AnimatedTextureMapper"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Circle, Line, Graph, Gauge"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No*"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"SVG"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"No**")))),(0,a.kt)("p",null,"*"," The drawing/blending of pixels to the framebuffer is done by DMA2D, but the shape calculations are done in software.",(0,a.kt)("br",{parentName:"p"}),"\n","*","* Hardware accelerated SVG is available with NeoChromVG."),(0,a.kt)("p",null,"\ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\ud654\uac00 \ub418\uc9c0 \uc54a\uc740 \uc791\uc5c5\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub80c\ub354\ub9c1\uc774 \ub429\ub2c8\ub2e4(CPU \ubd80\ud558\uac00 \ub192\uc544\uc9c4\ub2e4\ub294 \uac83\uc740 \uc131\ub2a5\uc774 \uc800\ud558\ub41c\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8). \uc704\uc758 \ud45c\uc5d0\uc11c \ubcfc \uc218 \uc788\ub4ef\uc774, NeoChrom\uc740 ScalableImage \ubc0f TextureMapper \uac19\uc740 \uc704\uc82f\uc744 \uac00\uc18d\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ub192\uc740 \uc131\ub2a5\uc744 \uc720\uc9c0\ud558\uba74\uc11c \uc704\uc82f\uc744 \ubcf4\ub2e4 \ud65c\ubc1c\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",o({},{id:"\ubca1\ud130-\uadf8\ub798\ud53d"}),"\ubca1\ud130 \uadf8\ub798\ud53d"),(0,a.kt)("p",null,"\uc0c8\ub85c\uc6b4 NeoChromVG \uac00\uc18d\uae30\ub294 \ubca1\ud130 \uadf8\ub798\ud53d\uc744 \uac00\uc18d\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc740 TouchGFX\ub85c SVG \uc774\ubbf8\uc9c0\ub97c \ub80c\ub354\ub9c1\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. An extra buffer called the stencil buffer is required by the GPU2D graphics accelerator. \uc774 \ubc84\ud37c\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc640 \ud06c\uae30\ub294 \ub3d9\uc77c\ud558\uc9c0\ub9cc, \ud53d\uc140\ub2f9 1\ubc14\uc774\ud2b8\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \ud504\ub808\uc784 \ubc84\ud37c\uac00 24bpp\uc5d0\uc11c 480 x 480\uc778 \uacbd\uc6b0 \uc2a4\ud150\uc2e4 \ubc84\ud37c\ub294 480 * 480 = 230.400\ubc14\uc774\ud2b8\uc5ec\uc57c \ud569\ub2c8\ub2e4. \ucd5c\uc0c1\uc758 \uc131\ub2a5\uc744 \uc704\ud574\uc11c\ub294 \uace0\uc18d SRAM\uc5d0 \uc2a4\ud150\uc2e4 \ubc84\ud37c\ub97c \ud560\ub2f9\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc2a4\ud150\uc2e4 \ubc84\ud37c\ub294 TouchGFX Generator\uc5d0\uc11c \ud560\ub2f9\ub429\ub2c8\ub2e4. ",(0,a.kt)("a",o({parentName:"p"},{href:"../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering"}),"\uc774")," \uac00\uc774\ub4dc\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",o({},{id:"neochrom\uc744-\ud1b5\ud55c-\ub80c\ub354\ub9c1-\uc2dc\uac04-\ub2e8\ucd95"}),"NeoChrom\uc744 \ud1b5\ud55c \ub80c\ub354\ub9c1 \uc2dc\uac04 \ub2e8\ucd95."),(0,a.kt)("p",null,"\ub2e4\uc74c \uc608\ub294 DMA2D \ubc0f \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub80c\ub354\ub9c1\uc744 \ud1b5\ud574 NeoChrom\uc774 \uc81c\uacf5\ud558\ub294 \uac00\uc18d \uae30\ub2a5\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 TouchGFX Designer\ub97c \ud1b5\ud574 \ub450 \uac1c\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \ud504\ub85c\uc81d\ud2b8\ub294 Box\ub97c \ubc30\uacbd\uc73c\ub85c \uc774\ubbf8\uc9c0\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ub450 \ubc88\uc9f8 \ud504\ub85c\uc81d\ud2b8\ub294 Box \ubc30\uacbd\uc5d0 TextureMapper Widget\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ub9e4 \ud504\ub808\uc784\ub9c8\ub2e4 \uc704\uc82f\uc740 \ub2e4\uc2dc \uadf8\ub824\uc9d1\ub2c8\ub2e4.  \ub450 \uacbd\uc6b0 \ubaa8\ub450 \ube44\ud2b8\ub9f5\uc774 \ud06c\uae30\uac00 128x128\uc774\uace0, ARGB8888 \ud615\uc2dd\uc774\uba70, \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\ub294 RGB565 \ud615\uc2dd\uc785\ub2c8\ub2e4."),(0,a.kt)(n.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-image.webp",mdxType:"Figure"},"Image \ud504\ub85c\uc81d\ud2b8"),(0,a.kt)(n.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-texturemapper.webp",mdxType:"Figure"},"TextureMapper \ud504\ub85c\uc81d\ud2b8"),(0,a.kt)("p",null,"Both projects have been executed on a STM32F746 and a STM32U5A9 Discovery board."),(0,a.kt)("p",null,"\uc6b0\ub9ac\ub294 GPIO\ub97c \ub85c\uc9c1 \ubd84\uc11d\uae30\uc5d0 \uc5f0\uacb0\ud574\uc11c \ub80c\ub354\ub9c1 \uc2dc\uac04\uc744 \uce21\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-image.webp",mdxType:"Figure"},"Image \ud504\ub85c\uc81d\ud2b8\ub97c \uc2e4\ud589 \uc911\uc778 STM32F746"),(0,a.kt)("p",null,"The figure above shows the frame rate and rendering time when running on the STM32F746. \ucc44\ub110 00\uc740 VSYNC \uc2e0\ud638\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\uac00 59.2Hz\uc758 \ud504\ub808\uc784 \uc18d\ub3c4\uc5d0 \ud574\ub2f9\ud558\ub294 16.9ms\uc758 \ud504\ub808\uc784 \uac04\uaca9(A1\uc5d0\uc11c A2\ub85c)\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc44\ub110 01\uc740 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4(\ub80c\ub354\ub9c1 \uc2dc \ub192\uc74c, B1\uc5d0\uc11c B2\uae4c\uc9c0). \ub530\ub77c\uc11c \uc774\ubbf8\uc9c0 \ub80c\ub354\ub9c1\uc5d0 \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc740 1.3ms\uc785\ub2c8\ub2e4. STM32F746\uc5d0\uc11c\ub294 \uc774\ubbf8\uc9c0 \ub80c\ub354\ub9c1\uc774 \ube60\ub974\uac8c \uc218\ud589\ub429\ub2c8\ub2e4."),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-texturemapper.webp",mdxType:"Figure"},"TextureMapper \ud504\ub85c\uc81d\ud2b8\ub97c \uc2e4\ud589 \uc911\uc778 STM32F746 "),(0,a.kt)("p",null,"\uc704\uc758 \uadf8\ub9bc\uc5d0\ub294 STM32F746\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778\ub294 \ud14d\uc2a4\ucc98 \ub9e4\ud37c \ud504\ub85c\uc81d\ud2b8\uac00 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4. TextureMapper\uc758 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc740 4.5ms\uc785\ub2c8\ub2e4. TextureMapper \uc704\uc82f\uc758 \uc18d\ub3c4\ub294 \uc774\ubbf8\uc9c0\ubcf4\ub2e4 \ud6e8\uc52c \ub290\ub9bd\ub2c8\ub2e4."),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u5a9-image.webp",mdxType:"Figure"},"STM32U5A9 running the Image project"),(0,a.kt)("p",null,"Here is the STM32U5A9 Discovery kit running the Image project. The STM32U5A9 Discovery kit display has a display frame interval of 12.26 ms corresponding to a frame rate of 81.6 Hz. \uc774\ubbf8\uc9c0\uc758 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc740 0.7ms\uc785\ub2c8\ub2e4. \uc774\ubbf8\uc9c0 \uc704\uc82f\uc774 STM32F746 \ud0a4\ud2b8\ubcf4\ub2e4 \ube60\ub974\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u5a9-texturemapper.webp",mdxType:"Figure"},"STM32U5A9 running the TextureMapper project"),(0,a.kt)("p",null,"TextureMapper\uc758 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc740 1.7ms\uc785\ub2c8\ub2e4. The TextureMapper is also faster on STM32U5A9 than on the STM32F746."),(0,a.kt)("h3",o({},{id:"\ub80c\ub354\ub9c1-\uc2dc\uac04-\uc694\uc57d"}),"\ub80c\ub354\ub9c1 \uc2dc\uac04 \uc694\uc57d"),(0,a.kt)("p",null,"\uc544\ub798 \ud45c\uc5d0\ub294 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc774 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc694\uc18c")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"STM32F746")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"STM32U5A9")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uac00\uc18d")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\uc8fc\ud30c\uc218"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"200 MHz"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"160 MHz"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\uc774\ubbf8\uc9c0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.3ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.7ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"~2x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"TextureMapper"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"4.5ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.7ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"~3x")))),(0,a.kt)("p",null,"We see that even with a reduced clock frequency the STM32U5A9 greatly outperforms the STM32F746, especially with the TextureMapper."),(0,a.kt)("p",null,"\ub0b4\ubd80 \ud50c\ub798\uc2dc\uc758 \uc774\ubbf8\uc9c0\uc640 STM32F746\uc6a9 \uc678\ubd80 SDRAM\uc758 \ud504\ub808\uc784\ubc84\ud37c\uc5d0 \ub300\ud574 \uc774\ub7ec\ud55c \uce21\uc815\uc774 \uc218\ud589\ub429\ub2c8\ub2e4. The framebuffer is in internal SRAM for the STM32U5A9 (as this will be typical scenario). Moving the image to external flash hurts the STM32F746 as it uses QSPI flash (4-bit bus), whereas the STM32U5A9 uses a faster OSPI flash (8-bit bus)."),(0,a.kt)("p",null,"STM32F746 \ub514\uc2a4\ucee4\ubc84\ub9ac \ud0a4\ud2b8\ub294 \ub0b4\ubd80 RAM\uc5d0\uc11c 480x272 RGB565 \ud504\ub808\uc784\ubc84\ud37c\uc640 \ud568\uaed8 \uc2e4\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uc131\ub2a5\uc774 \ud5a5\uc0c1\ub418\uc9c0\ub9cc(\uc774\ubbf8\uc9c0\uac00 1.03ms\uae4c\uc9c0 \uac10\uc18c), \uc774\uac83\uc774 STM32F746\uc758 \ud45c\uc900 \uad6c\uc131\uc740 \uc544\ub2d9\ub2c8\ub2e4. \ub0b4\ubd80 SRAM\uc758 \uc0c1\ub2f9 \ubd80\ubd84\uc744 \ud504\ub808\uc784\ubc84\ud37c\uc5d0 \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\uc131 \uc694\uc18c\uc5d0 \uc0ac\uc6a9\ud560 RAM\uc774 \uac70\uc758 \ub0a8\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub2e8\uc77c \ud504\ub808\uc784\ubc84\ud37c\uc5d0\uc11c\uc758 \uc2e4\ud589\uc774 \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc801\ud569\ud55c \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,a.kt)("h3",o({},{id:"\ubcf4\ub2e4-\ud48d\ubd80\ud55c-\uc0ac\uc6a9\uc790-\uc778\ud130\ud398\uc774\uc2a4"}),"\ubcf4\ub2e4 \ud48d\ubd80\ud55c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4"),(0,a.kt)("p",null,"\uac1c\uc120\ub41c \ub80c\ub354\ub9c1 \uc131\ub2a5\uc744 \uc0ac\uc6a9\ud574 \uace0\uae09 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uac16\ucd98 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. For example more scaled or rotated elements.",(0,a.kt)("br",{parentName:"p"}),"\n","For the STM32F746, the display refresh time was 16.8 ms. This means that the application must keep the render time below this time to keep a frame rate of 60 fps. We can therefore have at most 3.75 texture mappers of that complexity (16.8 ms / 4.48 ms) on the screen, or a single larger texture mapper of size 247 x 247 (the same number of pixels and approximately the same rendering time).",(0,a.kt)("br",{parentName:"p"}),"\n","If we assume the same screen refresh rate, but use the STM32U5A9 CPU, we can have 14.36 texture mappers (16.8 ms / 1.17 ms), or a single texture mapper of size 485 x 485."),(0,a.kt)("p",null,"The following figure shows two applications running on respectively the STM32F746 and the STM32U5A9. \uac00\uc6b4\ub370\ub85c \uac08 \ub54c\ub294 \uc694\uc18c\uac00 \ud655\ub300\ub418\uace0 \uac00\uc6b4\ub370\uc5d0\uc11c \ub098\uc62c \ub54c\ub294 \uc694\uc18c\uac00 \ucd95\uc18c\ub418\ub294 \ud68c\uc804 \ucee8\ubca0\uc774\uc5b4 \uc2a4\ud0c0\uc77c\uc758 \uba54\ub274\ub97c \ub9cc\ub4e4\uc5b4\ubd24\uc2b5\ub2c8\ub2e4(\uc5ec\uae30\uc11c\ub294 \ubaa8\ub4e0 \uc694\uc18c\uc5d0 \ub300\ud574 \ub3d9\uc77c\ud55c \ud14d\uc2a4\ucc98\ub97c \uc0ac\uc6a9)."),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/comparison-f746-u5a9.webp",mdxType:"Figure"},"STM32F746 (left) with a 480x272 pixels display and STM32U5A9 (right) running the texture mapper based carousel project on a 480x480 display."),(0,a.kt)("p",null,"STM32F746\uc740 3\uac1c\uc758 \uc544\uc774\ucf58, 1\uac1c\uc758 \ud070 \uc544\uc774\ucf58(\ubc30\uc728 1.9\ub85c \ud655\ub300), 2\uac1c\uc758 \uc791\uc740 \uc544\uc774\ucf58\uc744 \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. The STM32U5A9 is capable of showing 7 icons. \uac00\uc7a5 \ud070 \uc544\uc774\ucf58\uc740 \ubc30\uc728 2.7\ub85c \ud655\ub300\ub41c \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"STM32F746\uc5d0 3\uac1c\uc758 \uc544\uc774\ucf58\uc744 \uac00\uc9c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc740 14.38ms\uc785\ub2c8\ub2e4. The rendering time of the application with 7 icons on the STM32U5A9 is 14.93 ms. Both UIs can thus run in 60 fps, with the STM32U5A9 showing much more content in a higher resolution."),(0,a.kt)("h2",o({},{id:"\uac00\uc18d-\ubca1\ud130-\uadf8\ub798\ud53d"}),"\uac00\uc18d \ubca1\ud130 \uadf8\ub798\ud53d"),(0,a.kt)("p",null,"\uc0c8\ub85c\uc6b4 NeoChromVG \uac00\uc18d\uae30\ub294 \ubca1\ud130 \uadf8\ub798\ud53d\uc744 \uac00\uc18d\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub355\ubd84\uc5d0 \ubca1\ud130 \uae30\ubc18 \uadf8\ub798\ud53d\uc774 \ube44\ud2b8\ub9f5\uc774 \uc544\ub2cc \uc911\uc2ec \uc5ed\ud560\uc744 \ud558\ub294 \uc0c8\ub85c\uc6b4 \uc885\ub958\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uac00\ub2a5\ud574\uc84c\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud55c \uac00\uc9c0 \uc608\ub85c \uc9c0\ub3c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\ub3c4\ub294 \ube44\ud2b8\ub9f5\uc5d0\uc11c \ub9cc\ub4e4 \uc218 \uc788\uc9c0\ub9cc, \ub9e4\uc6b0 \ud070 \uc800\uc7a5 \uacf5\uac04\uc774 \ud544\uc694\ud558\uac70\ub098 \ud2b9\uc815 \uc9c0\ub3c4 \uc139\uc158\uc744 \ubbf8\ub9ac \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"The video below shows a demonstration application running on a STM32U5G9. \ubca1\ud130 \uc815\uc758(\uc11c\ub85c \ub2e4\ub978 \uc0c9\uc0c1\uc73c\ub85c \ucc44\uc6cc\uc838 \uc788\uace0 \uc678\uac01\uc120\uc774 \uc788\ub294 \uc5ec\ub7ec \uac1c\uc758 \ub2e4\uac01\ud615)\uc5d0 \ub530\ub77c \uadf8\ub824\uc9c0\ub294 \uc9c0\ub3c4\ub97c \ud655\ub300/\ucd95\uc18c, \ud68c\uc804 \ubc0f \ud328\ub2dd(panning) \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube44\ub514\uc624\ub294 16bpp \uc0c9\uc0c1\uc758 800 x 480 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc804\uccb4 \ud654\uba74\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,a.kt)(l.Z,{width:"40%",height:"40%",url:"/videos/development/scenarios/touchgfx-on-gpu2d/tigermap.mp4",mdxType:"LoopVideo"},"STM32U5G9 showing a moving map."),(0,a.kt)("h3",o({},{id:"svg"}),"SVG"),(0,a.kt)("p",null,"The NeoChromVG accelerator drastically improves the performance of drawing SVG images. TouchGFX automatically leverages the available hardware. A simple example will show the improvements. Here is an SVG image that we will draw in size 152x152 pixels on a STM32F746 with software rendering, a STM32H7S with NeoChrom, and a STM32U5G9 with NeoChromVG:"),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/svg.png",mdxType:"Figure"},"Simple SVG drawing in size 152 x 152 pixels."),(0,a.kt)("p",null,"The render time of the SVG image is shown in the table below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uac00\uc18d\uae30")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Render time /ms"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32F746"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"4.12")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32U5G9"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChromVG"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.97")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"STM32H7S8"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"NeoChrom"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"2.8")))),(0,a.kt)("p",null,"Read more about using SVG in TouchGFX here: ",(0,a.kt)("a",o({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/svg"}),"SVG"),"."),(0,a.kt)("h3",o({},{id:"vector-fonts"}),"Vector fonts"),(0,a.kt)("p",null,"The NeoChrom and NeoChromVG also accelerates drawing of vector fonts. You can read more about how to use vector fonts in this article: ",(0,a.kt)("a",o({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/vector-fonts"}),"Vector fonts"),"."),(0,a.kt)("h2",o({},{id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131\ud558\uae30"}),"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,a.kt)("p",null,"CubeMX \ubc0f TouchGFX Generator\ub294 NeoChrom\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. CubeMX\uc5d0\uc11c \uac00\uc18d\uae30\ub294 \ucf54\ub4dc \uc774\ub984 GPU2D\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4. The GPU2D accelerator is only available to TouchGFX if GPU2D is enabled in the TouchGFX configuration in CubeMX.",(0,a.kt)("br",{parentName:"p"}),"\n","If you use any of the TouchGFX TBS's (template projects) provided with the TouchGFX Designer this is already done. \uc790\uccb4\uc801\uc778 \ucee4\uc2a4\ud140 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uacbd\uc6b0, \uc544\ub798\uc5d0\uc11c\uc640 \uac19\uc774 GPU2D Accelerator\ub97c \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(n.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/cubemx-u5a9-configuration.webp",mdxType:"Figure"},"CubeMX\uc5d0\uc11c GPU2D(NeoChrom) \ud65c\uc131\ud654"),(0,a.kt)("p",null,'GPU2D\ub97c \ud65c\uc131\ud654\ud55c \ud6c4 CubeMX\uc5d0\uc11c "Generate Code"\ub97c \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624. \uc774\ub807\uac8c \ud558\uba74 \ub300\uc0c1 \uad6c\uc131 \ucf54\ub4dc\uac00 \uc7ac\uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\uc81c TouchGFX Designer\uc5d0\uc11c \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub97c \uc5f4\uace0, \uac70\uae30\uc5d0\uc11c\ub3c4 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4(F4).'),(0,a.kt)("p",null,"TouchGFX Designer\ub294 \ub300\uc0c1 \uad6c\uc131\uacfc \uc77c\uce58\ud558\ub294 \uc790\uc0b0(\uc774\ubbf8\uc9c0, \uae00\uaf34 \ubc0f \ud14d\uc2a4\ud2b8) \ubc0f \uc2dc\ubbac\ub808\uc774\ud130 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. You are now ready to compile the code."),(0,a.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\ub294 \uacbd\uc6b0, \uc77c\ubd80 \ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815\uc744 \ubcc0\uacbd\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \uc544\ub2c8\ub77c\uba74 CubeMX\ub97c \uc5f4 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",o({},{id:"\ud504\ub808\uc784\ubc84\ud37c-\ud615\uc2dd"}),"\ud504\ub808\uc784\ubc84\ud37c \ud615\uc2dd"),(0,a.kt)("p",null,"The STM32U5A9 discovery board supports three framebuffer formats: RGB565, RGB888, ARGB8888. \uc774\ub4e4 \ud615\uc2dd\uc740 CubeMX\uc5d0\uc11c \uad6c\uc131\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",o({},{id:"neochrom\uc758-\ud55c\uacc4"}),"NeoChrom\uc758 \ud55c\uacc4"),(0,a.kt)("p",null,"The NeoChrom and NeoChromVG graphics accelerators does not support the L8 image formats (L8_RGB565, L8_RGB888, L8_ARGB8888) with TouchGFX.",(0,a.kt)("br",{parentName:"p"}),"\n","If you use these image formats in a TouchGFX application running on STM32U5A9 the images will be drawn using DMA2D. If you use these formats with ScalableImage or TextureMapper a software fall-back will be used."),(0,a.kt)("p",null,"It is therefore recommended to not use L8 images with micro controllers with NeoChrom/NeoChromVG accelerators."),(0,a.kt)("p",null,'The NeoChrom graphics accelerator creates suboptimal anti-aliasing on graphics elements drawn with the "Non-zero fill-rule" compared to NeoChromeVG. This may happen with SVG files that can specify the fill-rule as "nonzero". A work-around is to use "evenodd" fill-rule, but it is not valid for all drawings.'))}g.isMDXComponent=!0}}]);