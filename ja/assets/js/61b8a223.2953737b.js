"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[67143],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496),i=n(32118);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children))}},55052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});n(59496);var a=n(49613),i=n(12822);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"scenarios-dsi-command-mode",title:"MIPI-DSI Command Mode"},s=void 0,d={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",title:"MIPI-DSI Command Mode",description:"This section describes how to configure a MIPI DSI interface for Command Mode and how to use this configuration with TouchGFX Generator. The example used in this article will be for 16-bit RGB565 frame buffer format and generally goes through the following configurations in STM32CubeMX and code examples.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",permalink:"/4.23/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-dsi-command-mode",title:"MIPI-DSI Command Mode"},sidebar:"docs",previous:{title:"MIPI-DSI\u30d3\u30c7\u30aa\uff65\u30e2\u30fc\u30c9",permalink:"/4.23/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"},next:{title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6e2c\u5b9a",permalink:"/4.23/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance"}},c={},m=[{value:"STM32CubeMX - Hardware configuration",id:"stm32cubemx-hardware-configuration",level:2},{value:"LTDC",id:"ltdc",level:3},{value:"DSIHOST Configuration",id:"dsihost-configuration",level:3},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",level:2},{value:"DSIHOST / LTDC Initialization sequence",id:"dsihost-ltdc-initialization-sequence",level:2},{value:"Updated TouchGFXHAL class for DSI Command Mode",id:"touchgfxhal-class-for-dsi-command-mode",level:2}],p={toc:m},u="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(u,r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to configure a MIPI DSI interface for Command Mode and how to use this configuration with TouchGFX Generator. The example used in this article will be for 16-bit RGB565 frame buffer format and generally goes through the following configurations in STM32CubeMX and code examples."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LTDC IP"),(0,a.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,a.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,a.kt)("h2",r({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - Hardware configuration"),(0,a.kt)("h3",r({},{id:"ltdc"}),"LTDC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mode"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Display Type")," to ",(0,a.kt)("em",{parentName:"li"},"RGB565 (16 bits) - DSI Mode")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Layer Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Number of layers")," to ",(0,a.kt)("em",{parentName:"li"},"1 layer")),(0,a.kt)("li",{parentName:"ul"},"Set the screen resolution in ",(0,a.kt)("inlineCode",{parentName:"li"},"Windows Position")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Frame Buffer Line Length")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Frame Buffer Number of Lines")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Layer 0 - Pixel Format")," to ",(0,a.kt)("em",{parentName:"li"},"RGB565")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Layer 0 - Alpha constant for blending")," to ",(0,a.kt)("em",{parentName:"li"},"255")," ",(0,a.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/ltdc-config1.png",mdxType:"Figure"},"LTDC Configuration")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NVIC Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Both ",(0,a.kt)("inlineCode",{parentName:"li"},"LTDC global interrupt")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"LTDC global error interrupt")," are not needed, and should be disabled. ",(0,a.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/ltdc-config2.png",mdxType:"Figure"},"LTDC NVIC Settings"))))),(0,a.kt)("h3",r({},{id:"dsihost-configuration"}),"DSIHOST Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mode"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"DSIHost")," to _*Adapted Command Mode with TE Pin**"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Display Interface"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Color Coding")," to ",(0,a.kt)("em",{parentName:"li"},"RGB565 (16 bits) - DSI mode")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Maximum Command Size")," to a number on the order of the width of the display"),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"The Refresh of the Display Frame Buffer is Triggered")," to ",(0,a.kt)("em",{parentName:"li"},"manually by Enabling the LTDC")),(0,a.kt)("li",{parentName:"ul"},"Remaining configurations depends on the selected LCD HW ",(0,a.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/dsihost-config1.png",mdxType:"Figure"},"DSIHOST Configuration")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NVIC Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("inlineCode",{parentName:"li"},"DSI global interrupt")," ",(0,a.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/dsihost-config2.png",mdxType:"Figure"},"DSIHOST NVIC Settings"))))),(0,a.kt)("h2",r({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mode"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("em",{parentName:"li"},"Graphics Application")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Display / Interface")," to ",(0,a.kt)("em",{parentName:"li"},"Parallel RGB (LTDC)")," since this is still the controller the application needs to communicate with."),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Application Tick Source")," to ",(0,a.kt)("em",{parentName:"li"},"Custom")," ",(0,a.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/touchgfx-generator-config.png",mdxType:"Figure"},"TouchGFX Generator Configuration"))))),(0,a.kt)("h2",r({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC Initialization sequence"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The call to ",(0,a.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()")," must be done before ",(0,a.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),". This should be handled by CubeMX.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"User has to add the required initialization code specific to the used LCD controller at the end of the ",(0,a.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()")," function, which will generally be based on the DSI HAL APIs ",(0,a.kt)("inlineCode",{parentName:"p"},"HAL_DSI_ShortWrite()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HAL_DSI_LongWrite()")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN LTDC_Init 2 */\n\n  __HAL_LTDC_DISABLE(&hltdc);\n  HAL_DSI_Start(&hdsi);\n\n  // Specific LCD controller's initialization code\n  ...\n\n  // Turn display off until first frame\n  HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_OFF, 0x00);\n\n  __HAL_LTDC_ENABLE(&hltdc);\n\n  /* USER CODE END LTDC_Init 2 */\n\n  ...\n}\n")))),(0,a.kt)("h2",r({},{id:"touchgfxhal-class-for-dsi-command-mode"}),"Updated TouchGFXHAL class for DSI Command Mode"),(0,a.kt)("p",null,"One way to prevent the MIPI DSI display from turning on until the first frame in the application has beem rendered is to guard the function ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame")," to keep the display off until first frame is rendered by TouchGFX. The ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()")," could be updated as below, to enable the LCD and its Backlight through a HW Timer configured for PWM output."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")),(0,a.kt)("p",null,"In DSI Command mode, the internal GRAM in the display is updated by writing a window to it using LTDC. The size of the window can be set to the entire screen area:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cpp"}),"  static void MX_LTDC_Init(void)\n  {\n    void LCD_SetUpdateRegion()\n    {\n        uint8_t pCols[4] = {0x00, 0x00, 0x01, 0xDF}; /*   0 -> 480 */\n        uint8_t pRows[4] = {0x00, 0x00, 0x03, 0x3F}; /*   0 -> 800 */\n\n        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, OTM8009A_CMD_CASET, pCols);\n        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, OTM8009A_CMD_PASET, pRows);\n    }\n  }\n")),(0,a.kt)("p",null,"The display updates the screen line by line by setting the pixels based on the pixel values in the GRAM. To avoid tearing on the screen, each pixel value in GRAM must be updated before the display draws it to the screen. It is possible to write values to GRAM while the display is being updated, as long as the update can keep up with the scan line. The display emits a Tearing Effect signal when it is safe to start updating the GRAM. Code to enable the TE signal and set it to the last line of the display might look like this for a screen with a height of 800 pixels:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cpp"}),"  /**\n   * Request TE at scanline 800.\n   */\n  void LCD_ReqTear(void)\n  {\n      static uint8_t ScanLineParams[2];\n\n      uint16_t scanline = 800;\n      ScanLineParams[0] = scanline >> 8;\n      ScanLineParams[1] = scanline & 0x00FF;\n\n      HAL_DSI_LongWrite(&hdsi, LCD_OTM8009A_ID, DSI_DCS_LONG_PKT_WRITE, 2, 0x44, ScanLineParams);\n      // set_tear_on\n      HAL_DSI_ShortWrite(&hdsi, LCD_OTM8009A_ID, DSI_DCS_SHORT_PKT_WRITE_P1, 0x35, 0x00);\n  }\n")),(0,a.kt)("p",null,"The TE signal triggers an interrupt, which can be used to start the transfer via LTDC. Once the transfer completes, another interrupt is triggered. This example uses double frame buffers to enable drawing to one buffer while the other is transferred to GRAM."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cpp"}),"  void HAL_DSI_TearingEffectCallback(DSI_HandleTypeDef* hdsi)\n  {\n    GPIO::set(GPIO::VSYNC_FREQ);\n    HAL::getInstance()->vSync();\n    OSWrappers::signalVSync();\n\n    if (HAL::getInstance())\n    {\n      // Swap frame buffers immediately instead of waiting for the task to be scheduled in.\n      // Note: task will also swap when it wakes up, but that operation is guarded and will not have\n      // any effect if already swapped.\n      HAL::getInstance()->swapFrameBuffers();\n    }\n\n    // Transfer frame buffer data\n    HAL_DSI_Refresh(hdsi);\n  }//\n\n  void HAL_DSI_EndOfRefreshCallback(DSI_HandleTypeDef* hdsi)\n  {\n    //Point LTDC base address to the new frame buffer:\n    __HAL_DSI_WRAPPER_DISABLE(hdsi);\n    LTDC_LAYER(&hltdc, 0)->CFBAR = ((uint32_t)currFbBase);\n    __HAL_LTDC_RELOAD_IMMEDIATE_CONFIG(&hltdc);\n    __HAL_DSI_WRAPPER_ENABLE(hdsi);\n\n    GPIO::clear(GPIO::VSYNC_FREQ);            \n  }\n")))}h.isMDXComponent=!0}}]);