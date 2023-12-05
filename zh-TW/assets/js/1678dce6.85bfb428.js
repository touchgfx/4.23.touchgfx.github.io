"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[55882],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,h=d["".concat(p,".").concat(s)]||d[s]||u[s]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(32118);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},93520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>d});n(59496);var r=n(49613),a=n(12822);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"scenarios-dsi-video-mode",title:"MIPI-DS\u5f71\u7247\u6a21\u5f0f"},p=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",title:"MIPI-DS\u5f71\u7247\u6a21\u5f0f",description:"\u672c\u7bc0\u4ecb\u7d39\u5982\u4f55\u70ba\u5f71\u7247\u6a21\u5f0f\u914d\u7f6eMIPI DSI\u4ecb\u9762\uff0c\u4ee5\u53ca\u5982\u4f55\u5728TouchGFX Generator\u4e2d\u4f7f\u7528\u6b64\u914d\u7f6e\u3002 \u672c\u6587\u4f7f\u7528\u7684\u7bc4\u4f8b\u5c07\u7528\u65bc24\u4f4d\u3001RGB888\u548c\u5f71\u50cf\u7de9\u5b58\u683c\u5f0f\uff0c\u901a\u5e38\u5728STM32CubeMX\u4e2d\u9032\u884c\u4ee5\u4e0b\u914d\u7f6e\uff0c\u4e26\u4f7f\u7528\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u8209\u4f8b\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-dsi-video-mode",title:"MIPI-DS\u5f71\u7247\u6a21\u5f0f"},sidebar:"docs",previous:{title:"\u5f71\u7247\u89e3\u78bc",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"MIPI-DSI Command Mode",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode"}},c={},d=[{value:"STM32CubeMX - \u786c\u9ad4\u8a2d\u5b9a",id:"stm32cubemx-hardware-configuration",level:2},{value:"LTDC",id:"ltdc",level:3},{value:"DSIHOST \u914d\u7f6e",id:"dsihost-\u914d\u7f6e",level:3},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",level:2},{value:"DSIHOST / LTDC\u521d\u59cb\u5316\u9806\u5e8f",id:"dsihost-ltdc-initialization-sequence",level:2},{value:"\u66f4\u65b0\u4e86DSI\u5f71\u7247\u6a21\u5f0f\u7684TouchGFXHAL\u985e",id:"touchgfxhal-class-for-dsi-video-mode",level:2}],u={toc:d},s="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(s,i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc0\u4ecb\u7d39\u5982\u4f55\u70ba\u5f71\u7247\u6a21\u5f0f\u914d\u7f6eMIPI DSI\u4ecb\u9762\uff0c\u4ee5\u53ca\u5982\u4f55\u5728TouchGFX Generator\u4e2d\u4f7f\u7528\u6b64\u914d\u7f6e\u3002 \u672c\u6587\u4f7f\u7528\u7684\u7bc4\u4f8b\u5c07\u7528\u65bc24\u4f4d\u3001RGB888\u548c\u5f71\u50cf\u7de9\u5b58\u683c\u5f0f\uff0c\u901a\u5e38\u5728STM32CubeMX\u4e2d\u9032\u884c\u4ee5\u4e0b\u914d\u7f6e\uff0c\u4e26\u4f7f\u7528\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u8209\u4f8b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LTDC IP"),(0,r.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,r.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,r.kt)("h2",i({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - \u786c\u9ad4\u8a2d\u5b9a"),(0,r.kt)("h3",i({},{id:"ltdc"}),"LTDC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c07",(0,r.kt)("inlineCode",{parentName:"li"},"Display Type"),"\u8a2d\u7f6e\u70ba",(0,r.kt)("em",{parentName:"li"},"RGB888\uff0824\u4f4d\u5143\uff09-DSI\u6a21\u5f0f")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5c64\u8a2d\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c07",(0,r.kt)("inlineCode",{parentName:"li"},"Number of layers"),"\u8a2d\u7f6e\u70ba",(0,r.kt)("em",{parentName:"li"},"1 layer")),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"Layer 0 - Pixel Format"),"\u8a2d\u7f6e\u70ba",(0,r.kt)("em",{parentName:"li"},"RGB888")),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"Layer 0 - Alpha constant for blending"),"\u70ba",(0,r.kt)("em",{parentName:"li"},"255")," ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config1.webp",width:"800",mdxType:"Figure"},"LTDC\u8a2d\u5b9a")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NVIC\u8a2d\u5b9a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u555f\u7528LCD-TFT\u5168\u57df\u4e2d\u65b7 ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config2.webp",width:"800",mdxType:"Figure"},"LTDC NVIC \u8a2d\u5b9a"))))),(0,r.kt)("h3",i({},{id:"dsihost-\u914d\u7f6e"}),"DSIHOST \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c07",(0,r.kt)("inlineCode",{parentName:"li"},"DSIHost"),"\u8a2d\u5b9a\u70ba_*Video Mode**"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u986f\u793a\u4ecb\u9762"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c07",(0,r.kt)("inlineCode",{parentName:"li"},"Color Coding"),"\u8a2d\u5b9a\u70ba\u201c",(0,r.kt)("em",{parentName:"li"},"RGB888(24\u4f4d\u5143)- DSI\u6a21\u5f0f\u201d")),(0,r.kt)("li",{parentName:"ul"},"\u5176\u9918\u914d\u7f6e\u53d6\u6c7a\u65bc\u6240\u9078\u7684LCD HW ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config1.webp",width:"800",mdxType:"Figure"},"DSIHOST \u914d\u7f6e")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NVIC\u8a2d\u5b9a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DSIHOST\u7121\u9700\u5168\u57df\u4e2d\u65b7\uff0c\u61c9\u7981\u7528\u3002 ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config2.webp",width:"800",mdxType:"Figure"},"DSIHOST NVIC \u8a2d\u5b9a"))))),(0,r.kt)("h2",i({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u555f\u7528",(0,r.kt)("em",{parentName:"li"},"Graphics Application")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c07",(0,r.kt)("inlineCode",{parentName:"li"},"Display / Interface"),"\u8a2d\u5b9a\u70ba",(0,r.kt)("em",{parentName:"li"},"Parallel RGB\uff08LTDC\uff09"),"\uff0c\u56e0\u70ba\u9019\u4ecd\u662f\u61c9\u7528\u7a0b\u5f0f\u8207\u4e4b\u901a\u4fe1\u7684\u63a7\u5236\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c07",(0,r.kt)("inlineCode",{parentName:"li"},"Application Tick Source"),"\u8a2d\u5b9a\u70ba",(0,r.kt)("em",{parentName:"li"},"LTDC")," ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/touchgfx-generator-config.webp",width:"800",mdxType:"Figure"},"TouchGFXGenerator\u8a2d\u5b9a"))))),(0,r.kt)("h2",i({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC\u521d\u59cb\u5316\u9806\u5e8f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c0d",(0,r.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),"\u7684\u547c\u53eb\u5fc5\u9808\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\u4e4b\u524d\u5b8c\u6210\u3002 \u61c9\u7531CubeMX\u4f86\u8655\u7406\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("em",{parentName:"p"},"User Code"),"\u90e8\u5206\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),"\u5c3e\u7aef\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),"\u4e4b\u5f8c\uff0c\u5c07DSIHOST\u6642\u9418\u5207\u63db\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"DSIPHY"),"\u6e90\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{12,20}","{12,20}":!0}),"/**\n  * @brief DSIHOST Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_DSIHOST_DSI_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN DSIHOST_Init 2 */\n  // Start DSI\n  if (HAL_DSI_Start(&hdsi) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  /* Switch to DSI PHY PLL clock */\n  RCC_PeriphCLKInitTypeDef PeriphClkInit;\n  PeriphClkInit.PeriphClockSelection = RCC_PERIPHCLK_DSI;\n  PeriphClkInit.DsiClockSelection    = RCC_DSICLKSOURCE_DSIPHY;\n  HAL_RCCEx_PeriphCLKConfig(&PeriphClkInit);\n  /* USER CODE END DSIHOST_Init 2 */\n\n  ...\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8005\u5fc5\u9808\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\u51fd\u6578\u7684\u5c3e\u7aef\u6dfb\u52a0\u7279\u5b9a\u65bc\u6240\u7528LCD\u63a7\u5236\u5668\u7684\u5fc5\u8981\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8a72\u7a0b\u5f0f\u78bc\u5c07\u57fa\u65bcDSI HAL API ",(0,r.kt)("inlineCode",{parentName:"li"},"HAL_DSI_ShortWrite()"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"HAL_DSI_LongWrite"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN LTDC_Init 2 */\n  // Specific LCD controller's initialization code\n  ...\n\n  // Exit Sleep Mode\n  if (HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P0, DSI_EXIT_SLEEP_MODE, 0x00) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  HAL_Delay(120);\n  /* USER CODE END LTDC_Init 2 */\n\n  ...\n}\n")))),(0,r.kt)("h2",i({},{id:"touchgfxhal-class-for-dsi-video-mode"}),"\u66f4\u65b0\u4e86DSI\u5f71\u7247\u6a21\u5f0f\u7684TouchGFXHAL\u985e"),(0,r.kt)("p",null,"LTDC\u4e2d\u65b7\u7684\u7a0b\u5f0f\u78bc\u8207\u4f7f\u7528\u5e73\u884cRGB\u986f\u793a\u4ecb\u9762\u6642\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u76f8\u540c\u3002"),(0,r.kt)("p",null,"\u9632\u6b62MIPI DSI\u986f\u793a\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u6e32\u67d3\u7b2c\u4e00\u5e40\u4e4b\u524d\u6253\u958b\u7684\u4e00\u7a2e\u65b9\u6cd5\u662f\u4fdd\u8b77",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame"),"\u51fd\u6578\uff0c\u5728TouchGFX\u6e32\u67d3\u7b2c\u4e00\u5e40\u4e4b\u524d\u95dc\u9589\u986f\u793a\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()"),"\u53ef\u50cf\u4e0b\u9762\u9019\u6a23\u66f4\u65b0\uff0c\u901a\u904e\u914d\u7f6e\u70baPWM\u8f38\u51fa\u7684HW\u8a08\u6642\u5668\u555f\u7528LCD\u53ca\u5176\u80cc\u5149\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")))}h.isMDXComponent=!0}}]);