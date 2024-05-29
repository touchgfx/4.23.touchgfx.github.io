"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[80222],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=o},21100:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const a=l},60669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(59496);var r=n(49613),o=n(89639),i=n(21100);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"example-gpio",title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u70ba\u89f8\u767c\u5668"},p=void 0,u={unversionedId:"development/scenarios/example-gpio",id:"development/scenarios/example-gpio",title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u70ba\u89f8\u767c\u5668",description:"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u5916\u90e8\u4e8b\u4ef6\uff08\u5982\u7269\u7406\u6309\u9215\uff09\u4f5c\u70ba\u89f8\u767c\u5668\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/example-gpio.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/example-gpio",permalink:"/4.23/zh-TW/docs/development/scenarios/example-gpio",draft:!1,tags:[],version:"current",frontMatter:{id:"example-gpio",title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u70ba\u89f8\u767c\u5668"},sidebar:"docs",previous:{title:"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u914d\u7f6e",permalink:"/4.23/zh-TW/docs/development/scenarios/scenarios-create-at"},next:{title:"\u5728STM32G071 Nucleo\u4e0a\u904b\u884c\u7684\u7bc4\u4f8b\u61c9\u7528",permalink:"/4.23/zh-TW/docs/development/scenarios/running-without-rtos"}},s={},m=[{value:"\u958b\u767c\u677f\u642d\u5efa",id:"board-bringup",level:2},{value:"TouchGFX HAL\u958b\u767c",id:"touchgfx-hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"\u5728\u76ee\u6a19\u4e0a\u904b\u884c",id:"running-on-target",level:2},{value:"\u9023\u7d50",id:"links",level:2}],d={toc:m},g="wrapper";function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(g,l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc0\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u5916\u90e8\u4e8b\u4ef6\uff08\u5982\u7269\u7406\u6309\u9215\uff09\u4f5c\u70ba\u89f8\u767c\u5668\u3002"),(0,r.kt)("p",null,"\u6839\u64da\u5916\u8a2d\uff08\u5982\u7269\u7406\u6309\u9215\uff09\u8f38\u5165\u7684\u61c9\u7528\u8981\u6c42\uff0c\u9700\u8981\u6309\u7167\u96fb\u8def\u677f\u539f\u7406\u5716\u914d\u7f6eMCU\u4e0a\u7684GPIO\u5f15\u8173\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u4f7f\u7528H7B3I-DK\u5c55\u793a\u5982\u4f55\u8b93UI\u5c0d\u7269\u7406\u6309\u9215\u6309\u4e0b\u7684\u4e8b\u4ef6\u505a\u51fa\u56de\u61c9\u3002 \u672c\u4f8b\u4f7f\u7528\u8f2a\u8a62\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5916\u90e8\u4e2d\u65b7\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/stm32h7b3i-dk-front.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u53ef\u5f9e\u4ee5\u4e0b\u9023\u7d50\u4e0b\u8f09\u539f\u7406\u5716\uff1a ",(0,r.kt)("a",l({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"st.com")),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u5982\u679cGPIO\u5f15\u8173\u53ef\u8b80\u53d6\uff0c\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u5c07\u5176\u7528\u4f5c\u4e8b\u4ef6\u7684\u89f8\u767c\u5668\u3002"),(0,r.kt)("h2",l({},{id:"board-bringup"}),"\u958b\u767c\u677f\u642d\u5efa"),(0,r.kt)("p",null,"\u4e0b\u5716\u6240\u793a\u70baSTM32H7B3I-DK\u677f\u7684\u4e00\u90e8\u5206\u539f\u7406\u5716\uff0c\u5f8c\u9762\u7684\u7bc4\u4f8b\u4f7f\u7528STM32CubeMX\u914d\u7f6e\u5408\u9069\u7684GPIO\u7aef\u53e3\u548c\u5f15\u8173\uff0c\u4ee5\u4f5c\u70ba\u8f38\u5165\u8b80\u53d6\u6309\u9215\u72c0\u614b\u3002"),(0,r.kt)("p",null,"\u57fa\u65bcSTM32H7B3I-DK TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u958b\u59cb\u65b0\u7684\u61c9\u7528\u3002 \u4f7f\u7528\u8005\u6309\u9215\u9023\u63a5\u5230GPIO\u7aef\u53e3C\u5f15\u817313\uff08PC13\uff09\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u5728STM32CubeMX PC13\u4e2d\uff0c\u5f15\u8173PC13\u53ef\u914d\u7f6e\u70ba\u8f38\u5165\uff0c\u4e5f\u53ef\u4ee5\u5728 ",(0,r.kt)("strong",{parentName:"p"},"system core")," \u4e2d",(0,r.kt)("strong",{parentName:"p"}," GPIO")," \u7684\u90e8\u5206\uff0c\u5c07\u5176\u914d\u7f6e\u70ba\u4e0b\u62c9(pull-down)\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u7a0b\u5f0f\u78bc\u662fSTM32CubeMX\u57fa\u65bc\u5f15\u8173\u6392\u5217\u7684\u5716\u793a\u4e2d\u6240\u751f\u6210\u7684\u540d\u7a31\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp",metastring:"{4,5}","{4,5}":!0}),"#define MCU_ACTIVE_GPIO_Port GPIOI\n#define VSYNC_FREQ_Pin GPIO_PIN_12\n#define VSYNC_FREQ_GPIO_Port GPIOA\n#define BTN_USER_Pin GPIO_PIN_13\n#define BTN_USER_GPIO_Port GPIOC\n#define LED2_Pin GPIO_PIN_2\n#define LED2_GPIO_Port GPIOG\n#define LCD_INT_Pin GPIO_PIN_2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp",metastring:"{5,10-14}","{5,10-14}":!0}),"static void MX_GPIO_Init(void)\n  __HAL_RCC_GPIOJ_CLK_ENABLE();\n  __HAL_RCC_GPIOI_CLK_ENABLE();\n  __HAL_RCC_GPIOA_CLK_ENABLE();\n  __HAL_RCC_GPIOC_CLK_ENABLE();\n  __HAL_RCC_GPIOD_CLK_ENABLE();\n  __HAL_RCC_GPIOH_CLK_ENABLE();\n  __HAL_RCC_GPIOB_CLK_ENABLE();\n  ...\n    /*Configure GPIO pin : BTN_USER_Pin */\n  GPIO_InitStruct.Pin = BTN_USER_Pin;\n  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;\n  GPIO_InitStruct.Pull = GPIO_PULLDOWN;\n  HAL_GPIO_Init(BTN_USER_GPIO_Port, &GPIO_InitStruct);\n  }\n")),(0,r.kt)("h2",l({},{id:"touchgfx-hal-development"}),"TouchGFX HAL\u958b\u767c"),(0,r.kt)("p",null,"TouchGFX\u5f15\u64ce\u6e32\u67d3\u9031\u671f\u7684\u4e00\u90e8\u5206\u662f\u6aa2\u67e5\u53ef\u80fd\u7684\u8f38\u5165"),(0,r.kt)("p",null,"\u5728\u8f38\u5165\u72c0\u614b\u53ef\u8b80\u53d6\uff08\u5916\u90e8\u4e8b\u4ef6\uff09\u5f8c\uff0cTouchGFX HAL\u53ef\u901a\u904eButtonController\u4ecb\u9762\u8b80\u53d6\u6b64\u4e8b\u4ef6\uff0c\u9019\u662f\u6e32\u67d3\u9031\u671f\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"#include <platform/driver/button/ButtonController.hpp>\nclass H7B3ButtonController : public touchgfx::ButtonController\n{\n    virtual void init() {  }\n    virtual bool sample(uint8_t& key)\n    {\n\n      if (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n      {\n        key = 1;\n        return true;\n      }\n      return false;\n    }\nprivate:\n\n};\n\n...\nH7B3ButtonController bc;\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),(0,r.kt)("h2",l({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/h7b3-at-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u70ba\u4e86\u5728TouchGFX Designer\u4e2d\u4ea4\u4e92\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController")," \u63a1\u6a23\u7684\u503c\uff0c\u5fc5\u9808\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".touchgfx")," \u5c08\u6848\u6a94\u6848\u4e2d\u5275\u5efa\u540d\u7a31\u6216\u503c\u6620\u5c04(value-mapping)\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [],\n')),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [\n      {\n        "Key": 1,\n        "Name": "BTN_USER"\n      }\n    ],\n')),(0,r.kt)("p",null,"\u6b64\u5f8c\uff0c\u5728\u5275\u5efa\u4ea4\u4e92\u6642\uff0c\u201c\u786c\u9ad4\u6309\u9215\u88ab\u9ede\u64ca\u201d\u53ef\u4f5c\u70ba\u89f8\u767c\u5668\u4f7f\u7528\u3002 \u7528\u6236\u53ef\u901a\u904e\u9078\u64c7.touchgfx\u6a94\u4e2d\u5b9a\u7fa9\u7684\u201c\u9375\u201d/\u201c\u540d\u7a31\u201d\u5c0d\u4f86\u6307\u5b9a\u64cd\u4f5c\uff0c\u5982\u201c\u8b8a\u66f4\u87a2\u5e55\u201d\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/designer-interaction-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",l({},{id:"running-on-target"}),"\u5728\u76ee\u6a19\u4e0a\u904b\u884c"),(0,r.kt)("p",null,"\u5728\u8a2d\u8a08\u8edf\u9ad4\u4e2d\u6309\u4e0b\u201c\u751f\u6210\u7a0b\u5f0f\u78bc\u201d\u5f8c\uff0c\u6253\u958bSTM32CubeIDE\u5c08\u6848\uff0c\u4e26\u914d\u7f6eDebug\u914d\u7f6e\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubeide-debug-config.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",l({},{id:"links"}),"\u9023\u7d50"),(0,r.kt)("p",null,(0,r.kt)("a",l({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#")))}h.isMDXComponent=!0}}]);