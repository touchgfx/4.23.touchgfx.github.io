"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[10114],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=a},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const i=l},96151:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},16230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>g});n(59496);var r=n(49613),a=n(89639),o=n(48753),l=n(95375),i=n(28128);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"generating-code",title:"Generating Code",sidebar_label:"Generating Code"},d=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/generating-code",id:"development/touchgfx-hal-development/generator-how-to/generating-code",title:"Generating Code",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 STM32CubeMX\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c TouchGFX Generator\uc5d0\uc11c \ucd9c\ub825\ub418\ub294 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/generating-code.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/generating-code",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/generating-code",draft:!1,tags:[],version:"current",frontMatter:{id:"generating-code",title:"Generating Code",sidebar_label:"Generating Code"},sidebar:"docs",previous:{title:"Video Decoding",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"},next:{title:"Modifying Generated Behavior",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior"}},h={},g=[{value:"\uc0dd\uc131\ub41c \ud504\ub85c\uc81d\ud2b8:",id:"generated-project",level:2},{value:"Generated Code Structure",id:"generated-code-structure",level:2}],s={toc:g},k="wrapper";function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(k,p({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 STM32CubeMX\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c TouchGFX Generator\uc5d0\uc11c \ucd9c\ub825\ub418\ub294 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",p({},{id:"generated-project"}),"\uc0dd\uc131\ub41c \ud504\ub85c\uc81d\ud2b8:"),(0,r.kt)("p",null,"TouchGFX\uc640 \ud568\uaed8 \ubc88\ub4e4\ub85c \uc81c\uacf5\ub418\uace0 TouchGFX Designer\uc5d0\uc11c ",(0,r.kt)("a",p({parentName:"p"},{href:"../../ui-development/designer-user-guide/main-window#run-target"}),"run target"),"\uc744 \ub204\ub97c \ub54c \uc0ac\uc6a9\ub418\ub294 GCC \ucef4\ud30c\uc77c\ub7ec \uc678\uc5d0\ub3c4, TouchGFX\ub294 STM32CubeMX\uc758 ",(0,r.kt)("strong",{parentName:"p"},"Generate Code")," \ubc84\ud2bc\uc744 \uc0ac\uc6a9\ud574 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c \ucd5c\uc18c\ud55c \ub2e4\uc74c IDE\uc5d0\uc11c\ub3c4 \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"EWARM"),(0,r.kt)("li",{parentName:"ol"},"MDK-ARM"),(0,r.kt)("li",{parentName:"ol"},"STM32CubeIDE")),(0,r.kt)("p",null,"\ucd5c\uc801\uc758 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\ub97c \uc704\ud574 ",(0,r.kt)("strong",{parentName:"p"},"Project Manager"),"\ub85c \uc774\ub3d9\ud574\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131 \uc635\uc158\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\uc870: ",(0,r.kt)("strong",{parentName:"li"},"Advanced")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generate under root")," \ube44\ud65c\uc131\ud654(STM32CubeIDE\uc5d0\ub9cc \ud574\ub2f9)")),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.webp",noShadow:!1,mdxType:"Figure"},"\uace0\uae09 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\uc870\ub97c \uc120\ud0dd\ud558\uace0 \ub8e8\ud2b8\uc5d0\uc11c Generate\uc758 \uc120\ud0dd\uc744 \ucde8\uc18c"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Generate code")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 STM32CubeMX\uac00 \uc120\ud0dd\ud55c \ubbf8\ub4e4\uc6e8\uc5b4, \uc720\ud2f8\ub9ac\ud2f0, \ub4dc\ub77c\uc774\ubc84, \ud234\uccb4\uc778 \ub4f1\uc5d0 \ub300\ud574 \uba87 \uac00\uc9c0 \uc77c\ubd80 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c, \ub2e4\uc74c \uad6c\uc870\ub97c \uac00\uc9c4  \ud504\ub85c\uc81d\ud2b8 \ud3f4\ub354\uc758 \ub8e8\ud2b8\uc5d0 ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," \ud3f4\ub354\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX \ud3f4\ub354 \uad6c\uc870"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"App")," \ud3f4\ub354\uc5d0\ub294 TouchGFX\ub97c \ucd08\uae30\ud654 \ubc0f \uc2dc\uc791\ud558\uae30 \uc704\ud55c \ucf54\ub4dc\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"target")," \ud3f4\ub354\uc5d0\ub294 \uc77d\uae30 \uc804\uc6a9 \uc0dd\uc131 \ucf54\ub4dc(generated/ \ub0b4\ubd80)\uc640 \uc218\uc815 \uac00\ub2a5\ud55c \uc0ac\uc6a9\uc790 \ud074\ub798\uc2a4(",(0,r.kt)("inlineCode",{parentName:"li"},"STM32TouchController.cpp"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXGPIO.cpp")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXHAL.cpp"),")\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"TouchGFX Designer\ub85c ",(0,r.kt)("em",{parentName:"li"},".part")," \ud30c\uc77c\uc744 \uc5f4\uc5b4\uc11c TouchGFX \ud5e4\ub354 \ud30c\uc77c \ubc0f \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud3ec\ud568\ub41c \uc644\uc804\ud55c TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. .part \ud30c\uc77c\uc5d0\ub294 \ud53d\uc140 \ud615\uc2dd \ubc0f \uce94\ubc84\uc2a4 \ud06c\uae30\uc640 \uac19\uc774 TouchGFX Designer\uac00 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad00\ub828 \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc77c\ub2e8 STM32CubeMX\ub97c \ud1b5\ud574 \ucf54\ub4dc\uac00 \uc0dd\uc131\ub418\uba74 TouchGFX Designer\ub85c TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc5f4\uc5b4\uc11c UI\ub97c \uac1c\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX Designer\ub294 \ucd94\uac00\ub85c \uc0dd\uc131\ub41c \ucf54\ub4dc \ud30c\uc77c\uc744 STM32CubeMX\uc758 \ud604\uc7ac \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud574 \uc120\ud0dd\ud55c \ub300\uc0c1 IDE \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc790\ub3d9\uc73c\ub85c \ucd94\uac00\ud569\ub2c8\ub2e4"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"TouchGFX Designer\ub97c \uc0ac\uc6a9\ud55c UI \uac1c\ubc1c\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)(l.Z,{to:"../../ui-development/ui-development-introduction",mdxType:"Link"},"UI Development")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",p({},{id:"generated-code-structure"}),"Generated Code Structure"),(0,r.kt)("p",null,"TouchGFX Generator\uc5d0\uc11c \ub9cc\ub4e0 \uad6c\uc131\uc5d0 \uad00\uacc4 \uc5c6\uc774 ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," \ud3f4\ub354\uc5d0\uc11c \ud56d\uc0c1 \uc0dd\uc131\ub418\ub294 \ud30c\uc77c\uc774 \uc788\ub294\uac00 \ud558\uba74, \ud2b9\uc815 \uae30\ub2a5\uc774 \ud65c\uc131\ud654/\ube44\ud65c\uc131\ud654\ub41c \uacbd\uc6b0\uc5d0\ub9cc \ud30c\uc77c\ub3c4 \uc788\uc2b5\ub2c8\ub2e4(\uc608: Video Decoders \ub610\ub294 Custom DMA2D \ud074\ub798\uc2a4). \uac1c\ubc1c\uc790\uac00 STM32CubeMX\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c\ub9c8\ub2e4 \uc0dd\uc131\ub41c \ud30c\uc77c\uc758 \ub0b4\uc6a9\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uc5b4 TouchGFX Generator AL \uad6c\uc131\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ubc18\uc601\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798 \ubaa9\ub85d\uc740 \ud56d\uc0c1 \uc0dd\uc131\ub418\ub294 TouchGFX \uad00\ub828 \ud30c\uc77c\uc5d0 \uc911\uc810\uc744 \ub450\uace0 TouchGFX Generator\uac00 ",(0,r.kt)("em",{parentName:"p"},"\ud65c\uc131\ud654"),"\ub41c \uc0c1\ud0dc\uc5d0\uc11c STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc758 \ub0b4\uc6a9\uc744 \uac1c\ub7b5\uc801\uc73c\ub85c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX Folder"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"\u2502   .mxproject\n\u2502   myproject.ioc\n\u251c\u2500\u2500\u2500Core\n\u251c\u2500\u2500\u2500Drivers\n\u251c\u2500\u2500\u2500EWARM\n\u251c\u2500\u2500\u2500Middlewares\n\u2514\u2500\u2500\u2500TouchGFX\n    \u2502   ApplicationTemplate.touchgfx.part\n    \u251c\u2500\u2500\u2500App\n    \u2502       app_touchgfx.c\n    \u2502       app_touchgfx.h\n    \u2514\u2500\u2500\u2500target\n        \u2502   STM32TouchController.cpp\n        \u2502   STM32TouchController.hpp\n        \u2502   TouchGFXGPIO.cpp\n        \u2502   TouchGFXHAL.cpp\n        \u2502   TouchGFXHAL.hpp\n        \u2502\n        \u2514\u2500\u2500\u2500generated\n                OSWrappers.cpp\n                TouchGFXConfiguration.cpp\n                TouchGFXGeneratedHAL.cpp\n                TouchGFXGeneratedHAL.hpp\n")),(0,r.kt)("p",null,"\ub2e4\uc74c \ud45c\uc5d0\ub294 \uac00\uc7a5 \uc911\uc694\ud55c \ud56d\ubaa9\uc758 \ucc45\uc784\uc774 \uac04\ub7b5\ud558\uac8c \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\ud3f4\ub354"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\ucc45\uc784"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"myproject.ioc"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"STM32CubeMX \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\ucf54\uc5b4"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"main.c")," \ubc0f \uc2dc\uc791 \ucf54\ub4dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\ub4dc\ub77c\uc774\ubc84"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"CMSIS, MCU \uc81c\ud488\uad70 \ub4dc\ub77c\uc774\ubc84 \ubc0f BSP(Board Support Package)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"EWARM"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"IDE \ud504\ub85c\uc81d\ud2b8 \ud3f4\ub354 EWARM, MDK-ARM \ub610\ub294 STM32CubeIDE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\ubbf8\ub4e4\uc6e8\uc5b4"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac/\ud5e4\ub354 \ud30c\uc77c\uacfc FreeRTOS \uac19\uc740 \ud0c0\uc0ac \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ApplicationTemplate.touchgfx.part"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),".part \ud30c\uc77c\uc740 STM32CubeMX\uc5d0\uc758\ud574 TouchGFX Designer \ud504\ub85c\uc81d\ud2b8\uc640 \uad00\ub828\ub41c \uc815\ubcf4(\uc608: \ud654\uba74 \ud06c\uae30 \ubc0f \ube44\ud2b8 \uc2ec\ub3c4)\ub85c \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"App"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"STM32CubeMX\uc5d0 \ub300\ud55c X-CUBE \uc778\ud130\ud398\uc774\uc2a4 ",(0,r.kt)("inlineCode",{parentName:"td"},"app_touchgfx.c"),"\uc5d0\ub294 TouchGFX\ub97c \ucd08\uae30\ud654\ud558\uace0 \uba54\uc778 \ub8e8\ud504\ub97c \uc2dc\uc791\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"td"},"MX_TouchGFX_Process(void)")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"td"},"MX_TouchGFX_Init(void)")," \ud568\uc218\uc5d0 \ub300\ud55c \uc815\uc758\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"target/generated"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\uc774 \ud558\uc704 \ud3f4\ub354\uc5d0\ub294 \uad6c\uc131\uc774 \ubcc0\uacbd\ub420 \ub54c STM32CubeMX\uc5d0\uc11c \ub36e\uc5b4\uc4f0\uae30\uac00 \ub418\ub294 \uc77d\uae30 \uc804\uc6a9 \ud30c\uc77c\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXGeneratedHAL.cpp"),"\ub294 TouchGFX \ud074\ub798\uc2a4 ",(0,r.kt)("inlineCode",{parentName:"td"},"HAL"),"\uc758 \ud558\uc704 \ud074\ub798\uc2a4\uc774\uba70, \ud604\uc7ac \uad6c\uc131\uc744 \uae30\ubc18\uc73c\ub85c STM32CubeMX\uac00 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"td"},"OSWrappers.cpp"),"(OSAL)\uc5d0\ub294 TouchGFX Engine\uacfc \ub3d9\uae30\ud654\ud558\ub294 \ub370 \ud544\uc694\ud55c \ud568\uc218\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\uba70, \ub9c8\uc9c0\ub9c9\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXConfiguration.cpp"),"\uc5d0\ub294 HAL\uc744 \ud3ec\ud568\ud574 TouchGFX\ub97c \uad6c\ucd95 \ubc0f \uad6c\uc131\ud558\uae30 \uc704\ud55c \ucf54\ub4dc\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"target"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"HAL\uc758 \ub3d9\uc791\uc744 \ud655\uc7a5\ud558\uac70\ub098 STM32CubeMX\uc5d0\uc11c \uc0dd\uc131\ub41c \uad6c\uc131\uc744 \uc7ac\uc815\uc758\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\uc790\uac00 \uc218\uc815\ud560 \uc218 \uc788\ub294 \ub300\ub7c9\uc758 \ud30c\uc77c\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"td"},"STM32TouchController.cpp"),"\uc5d0\ub294 \ube48 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec \uc778\ud130\ud398\uc774\uc2a4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXHAL.cpp"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXGeneratedHAL"),"\uc758 \ud558\uc704 \ud074\ub798\uc2a4\uc778 ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXHAL"),"\uc744 \uc815\uc758\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration.cpp"),"\uc5d0\ub294 HAL\uc744 \uad6c\ucd95\ud558\ub294 \ud568\uc218\uc640 TouchGFX\uc758 \uba54\uc778 \ub8e8\ud504\ub97c \uc2dc\uc791\ud558\ub294 \ud568\uc218\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\ub2e4\ub294 \uac83\uc744 \uc54c\uc544\uc57c \ud569\ub2c8\ub2e4. \ud3b8\uc9d1 \uac00\ub2a5\ud55c \uc0ac\uc6a9\uc790 \ud074\ub798\uc2a4\uc5d0\uc11c \ucd94\uac00 \uad6c\uc131\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\ud3b8\uc9d1 \uac00\ub2a5\ud55c \uc0ac\uc6a9\uc790 \ud074\ub798\uc2a4\uc5d0\uc11c \ucd94\uac00 \uad6c\uc131\uc744 \uc801\uc6a9\ud558\ub294 \ubc29\ubc95\uc740 ",(0,r.kt)(l.Z,{to:"../../touchgfx-hal-development/generator-how-to/modifying-generated-behavior",mdxType:"Link"},"\uc0dd\uc131\ub41c \ub3d9\uc791 \uc218\uc815\ud558\uae30")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}f.isMDXComponent=!0}}]);