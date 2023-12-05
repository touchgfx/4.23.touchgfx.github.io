"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[29741],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61235:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=a},12822:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(32118);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(89588);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const i=l},89588:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},86480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>g});n(59496);var r=n(49613),a=n(12822),o=n(86222),l=n(51721),i=n(61235);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"generating-code",title:"\u751f\u6210\u4ee3\u7801",sidebar_label:"\u751f\u6210\u4ee3\u7801"},u=void 0,h={unversionedId:"development/touchgfx-hal-development/generator-how-to/generating-code",id:"development/touchgfx-hal-development/generator-how-to/generating-code",title:"\u751f\u6210\u4ee3\u7801",description:"This section describes what the TouchGFX Generator outputs when generating code in STM32CubeMX.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/generating-code.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/generating-code",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/generating-code",draft:!1,tags:[],version:"current",frontMatter:{id:"generating-code",title:"\u751f\u6210\u4ee3\u7801",sidebar_label:"\u751f\u6210\u4ee3\u7801"},sidebar:"docs",previous:{title:"\u89c6\u9891\u89e3\u7801",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"},next:{title:"\u4fee\u6539\u751f\u6210\u884c\u4e3a",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior"}},m={},g=[{value:"\u751f\u6210\u7684\u9879\u76ee",id:"generated-project",level:2},{value:"\u751f\u6210\u7684\u4ee3\u7801\u67b6\u6784",id:"generated-code-structure",level:2}],s={toc:g},f="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(f,c({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes what the TouchGFX Generator outputs when generating code in STM32CubeMX."),(0,r.kt)("h2",c({},{id:"generated-project"}),"\u751f\u6210\u7684\u9879\u76ee"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0eTouchGFX\u6346\u7ed1\u5e76\u5728TouchGFX \u8bbe\u8ba1\u5668\u4e2d\u6309\u4e0b",(0,r.kt)("a",c({parentName:"p"},{href:"../../ui-development/designer-user-guide/main-window#run-target"}),"\u8fd0\u884c\u76ee\u6807"),"\u65f6\u4f7f\u7528\u7684GCC\u7f16\u8bd1\u5668\u4e4b\u5916\uff0c\u5f53\u4f7f\u7528STM32CubeMX\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"},"Generate Code"),"\u6309\u94ae\u751f\u6210\u4ee3\u7801\u65f6\uff0cTouchGFX(\u81f3\u5c11)\u8fd8\u4e0e\u4ee5\u4e0bide\u4e00\u8d77\u5de5\u4f5c:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"EWARM"),(0,r.kt)("li",{parentName:"ol"},"MDK-ARM"),(0,r.kt)("li",{parentName:"ol"},"STM32CubeIDE")),(0,r.kt)("p",null,"For optimal project structure, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project Manager")," and select the following options for project generation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7ed3\u6784\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7")),(0,r.kt)("li",{parentName:"ul"},"\u7981\u7528",(0,r.kt)("strong",{parentName:"li"},"\u5728root\u4e0b\u751f\u6210"),"(\u4ec5\u9650STM32CubeIDE)")),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.webp",noShadow:!1,mdxType:"Figure"},"\u9009\u62e9\u201c\u9ad8\u7ea7\u5e94\u7528\u7ed3\u6784\u201d\uff0c\u7136\u540e\u53d6\u6d88\u9009\u62e9\u201c\u5728root\u4e0b\u751f\u6210\u201d"),(0,r.kt)("p",null,"After pressing the ",(0,r.kt)("em",{parentName:"p"},"Generate code")," button, STM32CubeMX will generate some code for the selected middlewares, utilities, drivers, toolchain etc."),(0,r.kt)("p",null,"STM32CubeMX\u8fd8\u5c06\u5728\u9879\u76ee\u6587\u4ef6\u5939\u7684\u6839\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a",(0,r.kt)("em",{parentName:"p"},"TouchGFX"),"\u6587\u4ef6\u5939\uff0c\u5176\u7ed3\u6784\u5982\u4e0b:"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX\u6587\u4ef6\u5939\u7ed3\u6784"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"App")," folder contains code to initialize and start TouchGFX."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"target")," folder contains read-only generated code (inside generated/) and modifiable user classes (",(0,r.kt)("inlineCode",{parentName:"li"},"STM32TouchController.cpp"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXGPIO.cpp")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"TouchGFXHAL.cpp"),")."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},".part")," file is opened with TouchGFX Designer in order to create a complete TouchGFX project with TouchGFX header files and libraries. The part file contains relevant application information such as pixel format and canvas dimensions that TouchGFX Designer uses when generating TouchGFX application code.")),(0,r.kt)("p",null,"Once the code is generated through STM32CubeMX, the TouchGFX project can be opened with TouchGFX Designer in order to develop the UI. TouchGFX Designer automatically adds any additional generated code files to the target IDE project that is selected for the current project in STM32CubeMX."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u6709\u5173\u4f7f\u7528TouchGFX Designer\u8fdb\u884cUI\u5f00\u53d1\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)(l.Z,{to:"../../ui-development/ui-development-introduction",mdxType:"Link"},"UI\u5f00\u53d1"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",c({},{id:"generated-code-structure"}),"\u751f\u6210\u7684\u4ee3\u7801\u67b6\u6784"),(0,r.kt)("p",null,"\u4e0d\u8bbaTouchGFX Generator\u4e2d\u8fdb\u884c\u4e86\u4ec0\u4e48\u914d\u7f6e\uff0c\u4e00\u4e9b\u6587\u4ef6\u59cb\u7ec8\u5728",(0,r.kt)("em",{parentName:"p"},"TouchGFX"),"\u6587\u4ef6\u5939\u4e2d\u751f\u6210\uff0c\u800c\u53e6\u4e00\u4e9b\u6587\u4ef6\u4ec5\u5728\u542f\u7528/\u7981\u7528\u67d0\u4e9b\u529f\u80fd\u65f6\u751f\u6210(\u4f8b\u5982\uff0c\u89c6\u9891\u89e3\u7801\u5668\u6216\u81ea\u5b9a\u4e49DMA2D\u7c7b)\u3002 The contents of the generated files are updated whenever developer generate code in STM32CubeMX, to reflect changes made in TouchGFX Generator AL configurations."),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5217\u8868\u6982\u8ff0\u4e86",(0,r.kt)("em",{parentName:"p"},"\u542f\u7528"),"TouchGFX Generator\u7684STM32CubeMX\u9879\u76ee\u5185\u5bb9\uff0c\u91cd\u70b9\u4ecb\u7ecd\u4e86\u59cb\u7ec8\u751f\u6210\u7684TouchGFX\u76f8\u5173\u6587\u4ef6\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX\u6587\u4ef6\u5939"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"\u2502   .mxproject\n\u2502   myproject.ioc\n\u251c\u2500\u2500\u2500Core\n\u251c\u2500\u2500\u2500Drivers\n\u251c\u2500\u2500\u2500EWARM\n\u251c\u2500\u2500\u2500Middlewares\n\u2514\u2500\u2500\u2500TouchGFX\n    \u2502   ApplicationTemplate.touchgfx.part\n    \u251c\u2500\u2500\u2500App\n    \u2502       app_touchgfx.c\n    \u2502       app_touchgfx.h\n    \u2514\u2500\u2500\u2500target\n        \u2502   STM32TouchController.cpp\n        \u2502   STM32TouchController.hpp\n        \u2502   TouchGFXGPIO.cpp\n        \u2502   TouchGFXHAL.cpp\n        \u2502   TouchGFXHAL.hpp\n        \u2502\n        \u2514\u2500\u2500\u2500generated\n                OSWrappers.cpp\n                TouchGFXConfiguration.cpp\n                TouchGFXGeneratedHAL.cpp\n                TouchGFXGeneratedHAL.hpp\n")),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u6700\u91cd\u8981\u6761\u76ee\u7684\u529f\u80fd\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u6587\u4ef6\u5939"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u804c\u8d23"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"myproject.ioc"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"STM32CubeMX\u9879\u76ee\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5185\u6838"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"main.c"),"\u548c\u542f\u52a8\u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u9a71\u52a8"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"CMSIS\u3001MCU\u7cfb\u5217\u9a71\u52a8\u7a0b\u5e8f\u548cBoard Support Packages\uff08\u677f\u652f\u6301\u5305\uff09\uff08BSP\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"EWARM"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IDE\u9879\u76ee\u6587\u4ef6\u5939\u3002 \u53ef\u4ee5\u4e3aEWARM\u3001MDK-ARM\u6216STM32CubeIDE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u4e2d\u95f4\u4ef6"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5305\u542bTouchGFX\u5e93/\u5934\u6587\u4ef6\u4ee5\u53caFreeRTOS\u7b49\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ApplicationTemplate.touchgfx.part"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"STM32CubeMX\u4f7f\u7528\u4e0eTouchGFX Designer\u9879\u76ee\u76f8\u5173\u7684\u4fe1\u606f\uff08\u5982\u5c4f\u5e55\u5c3a\u5bf8\u548c\u4f4d\u6df1\uff09\u6765\u66f4\u65b0.part\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5e94\u7528"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"STM32CubeMX\u7684X-CUBE\u63a5\u53e3\u3002 ",(0,r.kt)("inlineCode",{parentName:"td"},"app_touchgfx.c"),"\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"td"},"MX_TouchGFX_Process(void)"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"MX_TouchGFX_Init(void)"),"\u51fd\u6570\u7684\u5b9a\u4e49\uff0c\u8fd9\u4e9b\u51fd\u6570\u7528\u4e8e\u521d\u59cb\u5316TouchGFX\u548c\u542f\u52a8\u5176\u4e3b\u5faa\u73af\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u76ee\u6807/\u751f\u6210"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u8be5\u5b50\u6587\u4ef6\u5939\u5305\u542b\u53ea\u8bfb\u6587\u4ef6\uff0c\u5f53\u914d\u7f6e\u66f4\u6539\u65f6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u4f1a\u88abSTM32CubeMX\u8986\u76d6\u3002 ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXGeneratedHAL.cpp"),"\u662fTouchGFX\u7c7b",(0,r.kt)("inlineCode",{parentName:"td"},"HAL"),"\u7684\u5b50\u7c7b\uff0c\u5e76\u5305\u542bSTM32CubeMX\u53ef\u57fa\u4e8e\u5176\u5f53\u524d\u914d\u7f6e\u751f\u6210\u7684\u4ee3\u7801\u3002 ",(0,r.kt)("inlineCode",{parentName:"td"},"OSWrappers.cpp"),"\uff08OSAL\uff09\u5305\u542b\u4e0eTouchGFX \u5f15\u64ce\u540c\u6b65\u6240\u9700\u7684\u529f\u80fd\uff0c\u6700\u540e\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXConfiguration.cpp"),"\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u6784\u5efa\u548c\u914d\u7f6eTouchGFX\u7684\u4ee3\u7801\uff0c\u5305\u62ecHAL\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u76ee\u6807"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5305\u542b\u5927\u91cf\u6587\u4ef6\uff0c\u7528\u6237\u53ef\u4fee\u6539\u8fd9\u4e9b\u6587\u4ef6\uff0c\u4ee5\u6269\u5c55HAL\u884c\u4e3a\uff0c\u6216\u8986\u76d6STM32CubeMX\u751f\u6210\u7684\u914d\u7f6e\u3002 ",(0,r.kt)("inlineCode",{parentName:"td"},"STM32TouchController.cpp"),"\u5305\u542b\u7a7a\u89e6\u6478\u63a7\u5236\u5668\u63a5\u53e3\u3002 ",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXHAL.cpp"),"\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXGeneratedHAL"),"\u7684\u5b50\u7c7b",(0,r.kt)("inlineCode",{parentName:"td"},"TouchGFXHAL"),"\u3002")))),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration.cpp"),"\u5305\u542b\u4e00\u4e2a\u7528\u4e8e\u6784\u5efaHAL\u7684\u51fd\u6570\u4ee5\u53ca\u4e00\u4e2a\u7528\u4e8e\u542f\u52a8TouchGFX\u4e3b\u5faa\u73af\u7684\u51fd\u6570\u3002 \u53ef\u5728\u53ef\u7f16\u8f91\u7684\u7528\u6237\u7c7b\u4e2d\u5b8c\u6210\u5176\u4ed6\u914d\u7f6e\u3002"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u8bf7\u9605\u8bfb",(0,r.kt)(l.Z,{to:"../../touchgfx-hal-development/generator-how-to/modifying-generated-behavior",mdxType:"Link"},"\u201c\u4fee\u6539\u751f\u6210\u7684\u884c\u4e3a\u201d"),"\u90e8\u5206\uff0c\u4e86\u89e3\u5982\u4f55\u5728\u53ef\u7f16\u8f91\u7528\u6237\u7c7b\u4e2d\u5e94\u7528\u5176\u4ed6\u914d\u7f6e\u3002"))}k.isMDXComponent=!0}}]);