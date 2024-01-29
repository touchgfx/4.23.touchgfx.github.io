"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[72118],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),g=o,m=h["".concat(i,".").concat(g)]||h[g]||s[g]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children))}},89588:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},39331:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),o=n(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const l=c},70676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(59496);var r=n(49613),o=n(12822),a=n(39331);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"touchgfx-designer-project",title:"TouchGFX Designer\u9879\u76ee",sidebar_label:"TouchGFX Designer\u9879\u76ee"},u=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",title:"TouchGFX Designer\u9879\u76ee",description:"ToughGFX \u751f\u6210\u5668\u5728TouchGFX\u6587\u4ef6\u5939\u4e2d\u751f\u6210.part\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u5939\u4f7f\u7528TouchGFX Designer\u6253\u5f00\uff0c\u4ee5\u4fbf\u521b\u5efa\u5b8c\u6574\u7684TouchGFX-\u9879\u76ee\uff0c\u5305\u62ecTouchGFX\u5934\u6587\u4ef6\u548c\u5e93\u3002 .part\u6587\u4ef6\u5305\u542b\u76f8\u5173\u7684\u5e94\u7528\u7a0b\u5e8f\u4fe1\u606f\uff0c\u5982\uff1a\u50cf\u7d20\u683c\u5f0f\u548cTouchGFX \u8bbe\u8ba1\u5668\u5728\u751f\u6210TouchGFX\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u65f6\u4f7f\u7528\u7684\u5c4f\u5e55\u5206\u8fa8\u7387\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-designer-project",title:"TouchGFX Designer\u9879\u76ee",sidebar_label:"TouchGFX Designer\u9879\u76ee"},sidebar:"docs",previous:{title:"\u4fee\u6539\u751f\u6210\u884c\u4e3a",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior"},next:{title:"\u5347\u7ea7\u9879\u76ee",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/upgrading-projects"}},h={},s=[],g={toc:s},m="wrapper";function d(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,c({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ToughGFX \u751f\u6210\u5668\u5728",(0,r.kt)("em",{parentName:"p"},"TouchGFX"),"\u6587\u4ef6\u5939\u4e2d",(0,r.kt)("a",c({parentName:"p"},{href:"generating-code#generated-project"}),"\u751f\u6210"),(0,r.kt)("em",{parentName:"p"},".part\u6587\u4ef6"),"\uff0c\u8be5\u6587\u4ef6\u5939\u4f7f\u7528TouchGFX Designer\u6253\u5f00\uff0c\u4ee5\u4fbf\u521b\u5efa\u5b8c\u6574\u7684TouchGFX-\u9879\u76ee\uff0c\u5305\u62ecTouchGFX\u5934\u6587\u4ef6\u548c\u5e93\u3002 .part\u6587\u4ef6\u5305\u542b\u76f8\u5173\u7684\u5e94\u7528\u7a0b\u5e8f\u4fe1\u606f\uff0c\u5982\uff1a\u50cf\u7d20\u683c\u5f0f\u548cTouchGFX \u8bbe\u8ba1\u5668\u5728\u751f\u6210TouchGFX\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u65f6\u4f7f\u7528\u7684\u5c4f\u5e55\u5206\u8fa8\u7387\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0bjson\u7ed3\u6784\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u57fa\u4e8eSTM32U599\u7684\u9879\u76ee",(0,r.kt)("a",c({parentName:"p"},{href:"generating-code#generated-code-structure"}),"\u201c\u751f\u6210\u4ee3\u7801\u7ed3\u6784\u201d"),"\u90e8\u5206\u4e2d\u63d0\u5230\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".part"),"\u6587\u4ef6\u5185\u5bb9\u3002 \u4ee5\u4e0b\u793a\u4f8b\u4e2d\u7684\u540e\u671f\u751f\u6210\u547d\u4ee4\u5c06\u4f7f\u7528TouchGFX\u548c\u53ef\u9009\u7ec4\u4ef6\u6240\u9700\u7684\u5e93\u4ee5\u53caTouchGFX \u8bbe\u8ba1\u5668\u521b\u5efa\u7684\u65b0\u6587\u4ef6\uff08\u5982\uff1a\u65b0\u5c4f\u5e55\u548c\u8d44\u6e90\uff09\u66f4\u65b0\u7528\u6237\u5728STM32CubeMX\u9879\u76ee\u7ba1\u7406\u5668\u9009\u9879\u5361\uff08\u5982\uff1aEWARM\uff09\u4e2d\u9009\u62e9\u7684\u9879\u76ee\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:"{16}","{16}":!0}),'{\n  "Application": {\n    "Name": "STM32U599J-DK",\n    "TouchGfxPath": "../Middlewares/ST/touchgfx",\n    "AvailableColorDepths": [ 24 ],\n    "AvailableLCDs":\n    {\n      "24": "LCDGPU2D"\n    },\n    "AvailableResolutions": [\n      {\n        "Width": 480,\n        "Height": 480\n      }\n    ],\n    "PostGenerateTargetCommand": "touchgfx update_project",\n    "Family": "STM32U5",\n    "SubFamily": "STM32U599/5A9",\n    "Platform": "m33",\n    "ProjectFile": "../STM32U599J-DK.ioc",\n    "OptionalComponentsRoot": "../Middlewares/ST/touchgfx_components",\n    "OptionalComponents": [\n      "GPU2D"\n    ]\n  },\n  "Version": "4.19.0"\n}\n')),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528TouchGFX Designer\u6253\u5f00",(0,r.kt)("em",{parentName:"p"},".part"),"\u6587\u4ef6\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u9009\u62e9\u52a0\u8f7d\u5177\u4f53UI\u8fd8\u662f\u4ece\u7a7a\u767d\u6a21\u677f\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui-4-17.webp",noShadow:!1,mdxType:"Figure"},"\u9009\u62e9UI"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u6309",(0,r.kt)("em",{parentName:"p"},"\u201cGenerate Code\uff08\u751f\u6210\u4ee3\u7801\uff09\u201d"),"\u540e\uff0c\u5c06\u5728",(0,r.kt)("em",{parentName:"p"},"TouchGFX"),"\u6587\u4ef6\u5939\u4e2d\u751f\u6210\u65b0\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code-4-17.webp",noShadow:!1,mdxType:"Figure"},"\u5728TouchGFX Designer\u4e2d\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86",(0,r.kt)("em",{parentName:"p"},"TouchGFX"),"\u6587\u4ef6\u5939\u7ed3\u6784\u7684\u5177\u4f53\u793a\u4f8b\uff0c\u5e76\u7740\u91cd\u663e\u793a\u4e86\u751f\u6210\u540e\u7684\u65b0\u6587\u4ef6\u53ca\u6587\u4ef6\u5939\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX\u6587\u4ef6\u5939\u7ed3\u6784"),(0,r.kt)("p",null,"TouchGFX \u8bbe\u8ba1\u5668\u5c06\u68c0\u6d4bSTM32CubeMX\u4e2dProject Manager\uff08\u9879\u76ee\u7ba1\u7406\u5668\uff09\u9009\u62e9\u7684IDE\uff08\u5373\uff1a STM32CubeIDE\u3001EWARM\u6216MDK-ARM\uff09\uff0c\u5e76\u4f7f\u7528\u65b0\u751f\u6210\u7684\u6587\u4ef6\uff08\u5982\uff1a\u5c4f\u5e55\u5b9a\u4e49\u3001\u56fe\u50cf\u548c\u5b57\u4f53\u8d44\u6e90\uff09\u66f4\u65b0\u8be5IDE\u7684\u9879\u76ee\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5207\u6362\u4f7f\u7528STM32CubeMX\u3001TouchGFX Designer\u548c\u5de5\u5177\u94fe/IDE\uff0c\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u53ef\u4ee5\u66f4\u65b0IDE\u9879\u76ee\u4e2d\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u4f7f\u7528UI\u76f8\u5173\u66f4\u6539\u6765\u66f4\u65b0TouchGFX\xa0",(0,r.kt)("em",{parentName:"li"},".part"),"\u6587\u4ef6\uff0cTouchGFX Designer\u53ef\u4ee5\u7acb\u5373\u83b7\u53d6\u8fd9\u4e9b\u66f4\u6539\u3002"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u57fa\u4e8eTouchGFX\u5728\u7279\u5b9a\u5e73\u53f0\u6240\u9700\u7684TouchGFX \u751f\u6210\u5668\u914d\u7f6e\u6765\u751f\u6210HAL\u4ee3\u7801\uff08TouchGFX/target/generated/\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"TouchGFX Designer\u4f7f\u7528\u751f\u6210\u7684\u4ee3\u7801\u6765\u66f4\u65b0\u9879\u76ee\u3002")),(0,r.kt)(a.Z,{mdxType:"Note"},"\u5bf9\u4e8e\u53cc\u6838\u9879\u76ee\uff08\u4e3a\u7279\u5b9a\u4e0a\u4e0b\u6587\u542f\u7528TouchGFX\uff09\uff0cTouchGFX\u9879\u76ee\u901a\u5e38\u4f1a\u4f4d\u4e8e\u8be5\u4e0a\u4e0b\u6587\u7684\u4e13\u7528\u6587\u4ef6\u5939\u4e2d\uff0c\u4f8b\u5982:\u201cCM4 / TouchGFX\u201d\u6216\u201cCM7 / TouchGFX\u201d\u3002"))}d.isMDXComponent=!0}}]);