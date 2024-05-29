"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6078],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=o},21100:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const a=l},58516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(59496);var r=n(49613),o=n(89639),i=n(21100);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"example-gpio",title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u4e3a\u89e6\u53d1\u5668"},p=void 0,u={unversionedId:"development/scenarios/example-gpio",id:"development/scenarios/example-gpio",title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u4e3a\u89e6\u53d1\u5668",description:"\u672c\u8282\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u5916\u90e8\u4e8b\u4ef6\uff08\u5982\u7269\u7406\u6309\u94ae\uff09\u4f5c\u4e3a\u89e6\u53d1\u5668\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/example-gpio.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/example-gpio",permalink:"/4.23/zh-CN/docs/development/scenarios/example-gpio",draft:!1,tags:[],version:"current",frontMatter:{id:"example-gpio",title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u4e3a\u89e6\u53d1\u5668"},sidebar:"docs",previous:{title:"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f",permalink:"/4.23/zh-CN/docs/development/scenarios/scenarios-create-at"},next:{title:"\u5728\u65e0RTOS\u7684\u60c5\u51b5\u4e0b\u57fa\u4e8eTouchGFX\u786c\u4ef6\u6a21\u677f\u4e0a\u8fd0\u884c\u9879\u76ee",permalink:"/4.23/zh-CN/docs/development/scenarios/running-without-rtos"}},s={},m=[{value:"\u677f\u5361\u8c03\u8bd5\u4e0e\u542f\u52a8",id:"board-bringup",level:2},{value:"TouchGFX HAL\u5f00\u53d1",id:"touchgfx-hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"\u5728\u76ee\u6807\u677f\u4e0a\u8fd0\u884c",id:"running-on-target",level:2},{value:"\u94fe\u63a5",id:"links",level:2}],d={toc:m},g="wrapper";function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(g,l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u5916\u90e8\u4e8b\u4ef6\uff08\u5982\u7269\u7406\u6309\u94ae\uff09\u4f5c\u4e3a\u89e6\u53d1\u5668\u3002"),(0,r.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u8981\u54cd\u5e94\u5916\u8bbe\uff08\u5982\u7269\u7406\u6309\u94ae\uff09\u8f93\u5165\uff0c\u9700\u8981\u6309\u7167\u677f\u539f\u7406\u56fe\u914d\u7f6eMCU\u4e0a\u7684GPIO\u5f15\u811a\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u4f7f\u7528H7B3I-DK\u5c55\u793a\u5982\u4f55\u8ba9UI\u5bf9\u7269\u7406\u6309\u94ae\u6309\u4e0b\u4e8b\u4ef6\u505a\u51fa\u54cd\u5e94\u3002 \u672c\u4f8b\u4f7f\u7528\u8f6e\u8be2\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528EXTI\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/stm32h7b3i-dk-front.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u53ef\u4ece\u4ee5\u4e0b\u94fe\u63a5\u4e0b\u8f7d\u539f\u7406\u56fe\uff1a",(0,r.kt)("a",l({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"st.com")),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u5982\u679cGPIO\u5f15\u811a\u53ef\u8bfb\u53d6\uff0c\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u5c06\u5176\u7528\u4f5c\u4e8b\u4ef6\u7684\u89e6\u53d1\u5668\u3002"),(0,r.kt)("h2",l({},{id:"board-bringup"}),"\u677f\u5361\u8c03\u8bd5\u4e0e\u542f\u52a8"),(0,r.kt)("p",null,"\u4e0b\u56fe\u6240\u793a\u4e3aSTM32H7B3I-DK\u677f\u7684\u90e8\u5206\u539f\u7406\u56fe\uff0c\u540e\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u4f7f\u7528STM32CubeMX\u5c06\u5408\u9002\u7684GPIO\u7aef\u53e3\u548c\u5f15\u811a\u914d\u7f6e\u4e3a\u8f93\u5165\uff0c\u7528\u6765\u8bfb\u53d6\u6309\u94ae\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u57fa\u4e8eSTM32H7B3I-DK\u5f00\u53d1\u677f\u7684TouchGFX\u5e94\u7528\u7a0b\u5e8f\u6a21\u677f\uff0c\u521b\u5efa\u65b0\u7684\u5e94\u7528\u3002 \u7528\u6237\u6309\u94ae\u8fde\u63a5\u5230GPIO\u7aef\u53e3C\u5f15\u811a13\uff08PC13\uff09\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u5728STM32CubeMX\u4e2d\uff0cPC13\u5f15\u811a\u53ef\u914d\u7f6e\u4e3a\u8f93\u5165\uff0c\u5e76\u53ef\u4ee5\u5728",(0,r.kt)("strong",{parentName:"p"},"System Core"),"\u7c7b\u522b\u7684",(0,r.kt)("strong",{parentName:"p"},"GPIO"),"\u90e8\u5206\uff0c\u5c06\u5176\u914d\u7f6e\u4e3a\u4e0b\u62c9\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u7531STM32CubeMX\u57fa\u4e8e\u5f15\u811a\u89c6\u56fe\u4e2d\u914d\u7f6e\u7684\u540d\u79f0\u751f\u6210\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp",metastring:"{4,5}","{4,5}":!0}),"#define MCU_ACTIVE_GPIO_Port GPIOI\n#define VSYNC_FREQ_Pin GPIO_PIN_12\n#define VSYNC_FREQ_GPIO_Port GPIOA\n#define BTN_USER_Pin GPIO_PIN_13\n#define BTN_USER_GPIO_Port GPIOC\n#define LED2_Pin GPIO_PIN_2\n#define LED2_GPIO_Port GPIOG\n#define LCD_INT_Pin GPIO_PIN_2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp",metastring:"{5,10-14}","{5,10-14}":!0}),"static void MX_GPIO_Init(void)\n  __HAL_RCC_GPIOJ_CLK_ENABLE();\n  __HAL_RCC_GPIOI_CLK_ENABLE();\n  __HAL_RCC_GPIOA_CLK_ENABLE();\n  __HAL_RCC_GPIOC_CLK_ENABLE();\n  __HAL_RCC_GPIOD_CLK_ENABLE();\n  __HAL_RCC_GPIOH_CLK_ENABLE();\n  __HAL_RCC_GPIOB_CLK_ENABLE();\n  ...\n    /*Configure GPIO pin : BTN_USER_Pin */\n  GPIO_InitStruct.Pin = BTN_USER_Pin;\n  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;\n  GPIO_InitStruct.Pull = GPIO_PULLDOWN;\n  HAL_GPIO_Init(BTN_USER_GPIO_Port, &GPIO_InitStruct);\n  }\n")),(0,r.kt)("h2",l({},{id:"touchgfx-hal-development"}),"TouchGFX HAL\u5f00\u53d1"),(0,r.kt)("p",null,"TouchGFX\u5f15\u64ce\u6e32\u67d3\u5468\u671f\u7684\u4e00\u90e8\u5206\u662f\u68c0\u67e5\u53ef\u80fd\u7684\u8f93\u5165"),(0,r.kt)("p",null,"\u5728\u8f93\u5165\u72b6\u6001\u53ef\u8bfb\u53d6\uff08\u5916\u90e8\u4e8b\u4ef6\uff09\u540e\uff0cTouchGFX HAL\u5728\u6e32\u67d3\u5468\u671f\u4e2d\uff0c\u53ef\u901a\u8fc7ButtonController\u63a5\u53e3\u6765\u8bfb\u53d6\u6b64\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"#include <platform/driver/button/ButtonController.hpp>\nclass H7B3ButtonController : public touchgfx::ButtonController\n{\n    virtual void init() {  }\n    virtual bool sample(uint8_t& key)\n    {\n\n      if (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n      {\n        key = 1;\n        return true;\n      }\n      return false;\n    }\nprivate:\n\n};\n\n...\nH7B3ButtonController bc;\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),(0,r.kt)("h2",l({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/h7b3-at-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u7684\u4ea4\u4e92\u914d\u7f6e\u4e2d\uff0c\u4e3a\u4e86\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController"),"\u7684\u91c7\u6837\u503c\uff0c\u5fc5\u987b\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".touchgfx")," \u9879\u76ee\u6587\u4ef6\u4e2d\u521b\u5efa\u76f8\u5e94\u7684\u540d\u79f0/\u503c\u6620\u5c04\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [],\n')),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [\n      {\n        "Key": 1,\n        "Name": "BTN_USER"\n      }\n    ],\n')),(0,r.kt)("p",null,"\u6b64\u540e\uff0c\u5728\u521b\u5efa\u4ea4\u4e92\u65f6\uff0c\u53ef\u4ee5\u5c06\u201c\u786c\u4ef6\u6309\u94ae\u88ab\u70b9\u51fb\u201d\u4f5c\u4e3a\u89e6\u53d1\u5668\u4f7f\u7528\u3002 \u7528\u6237\u53ef\u901a\u8fc7\u9009\u62e9.touchgfx\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u201c\u952e\u201d/\u201c\u540d\u79f0\u201d\u5bf9\u6765\u6307\u5b9a\u64cd\u4f5c\uff0c\u5982\u201c\u5207\u6362\u5c4f\u5e55\u201d\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/designer-interaction-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",l({},{id:"running-on-target"}),"\u5728\u76ee\u6807\u677f\u4e0a\u8fd0\u884c"),(0,r.kt)("p",null,"\u5728Designer\u4e2d\u70b9\u51fb\u201c\u751f\u6210\u4ee3\u7801\u201d\u540e\uff0c\u6253\u5f00STM32CubeIDE\u9879\u76ee\uff0c\u5e76\u8bbe\u7f6e\u8c03\u8bd5\u914d\u7f6e\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubeide-debug-config.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",l({},{id:"links"}),"\u94fe\u63a5"),(0,r.kt)("p",null,(0,r.kt)("a",l({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#")))}h.isMDXComponent=!0}}]);