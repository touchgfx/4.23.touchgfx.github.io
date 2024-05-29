"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[696],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(c,".").concat(h)]||m[h]||s[h]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93822:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}const i=l},28128:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const a=o},89639:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(7029);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},21100:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}const i=l},90598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>d});n(59496);var r=n(49613),o=n(89639),a=n(28128),l=n(93822),i=n(21100);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"scenarios-configure-rtos",title:"\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf"},m=void 0,s={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",id:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",title:"\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728STM32CubeMX\u4e2d\u914d\u7f6e\u4e0d\u540c\u7684Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09\uff0c\u4e0eTouchGFX Generator\u751f\u6210\u7684\u4ee3\u7801\u914d\u5408\u4f7f\u7528\uff0c\u5b9e\u73b0\u80fd\u6b63\u5e38\u8fd0\u884c\u7684TouchGFX OSAL\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-configure-rtos",title:"\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf"},sidebar:"docs",previous:{title:"\u5e27\u7f13\u5b58\u7b56\u7565",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"},next:{title:"\u89c6\u9891\u89e3\u7801",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"}},h={},d=[{value:"\u65e0OS",id:"\u65e0os",level:2},{value:"FreeRTOS (CMSIS V1 &amp; CMSIS V2)",id:"freertos-cmsis-v1--cmsis-v2",level:2},{value:"\u81ea\u5b9a\u4e49\u4efb\u52a1",id:"\u81ea\u5b9a\u4e49\u4efb\u52a1",level:3},{value:"TouchGFX\u4efb\u52a1",id:"touchgfx\u4efb\u52a1",level:3},{value:"ThreadX",id:"threadx",level:2},{value:"\u672c\u673a\u4e2d\u95f4\u4ef6\u914d\u7f6e",id:"\u672c\u673a\u4e2d\u95f4\u4ef6\u914d\u7f6e",level:3},{value:"X-CUBE-AZRTOS\u914d\u7f6e",id:"x-cube-azrtos\u914d\u7f6e",level:3}],T={toc:d},g="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,c({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728STM32CubeMX\u4e2d\u914d\u7f6e\u4e0d\u540c\u7684Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09\uff0c\u4e0e",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#real-time-operating-system"}),"TouchGFX Generator"),"\u751f\u6210\u7684\u4ee3\u7801\u914d\u5408\u4f7f\u7528\uff0c\u5b9e\u73b0\u80fd\u6b63\u5e38\u8fd0\u884c\u7684TouchGFX OSAL\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u901a\u8fc7\u8c03\u7528\u51fd",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570MX_TouchGFX_Process\uff08\uff09"),"\u542f\u52a8TouchGFX\u4e3b\u5faa\u73af\u3002 \u5bf9\u8be5\u51fd\u6570\u7684\u8c03\u7528\u5e94\u4f4d\u4e8e\u5f00\u53d1\u4eba\u5458\u5e0c\u671b\u8fd0\u884cTouchGFX\u7684\u4efb\u52a1\u5904\u7406\u7a0b\u5e8f\u5185\u3002"),(0,r.kt)("h2",c({},{id:"\u65e0os"}),"\u65e0OS"),(0,r.kt)("p",null,"\u5f53TouchGFX\u5728\u65e0\u64cd\u4f5c\u7cfb\u7edf\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u65f6\uff0cTouchGFX\u4e3b\u5faa\u73af\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),"\u4e2d\u7684\u65e0\u9650while\u5faa\u73af\u4e2d\u8fd0\u884c\uff0cMCU\u901a\u8fc7\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u6765\u7b49\u5f85",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC"),"\u4fe1\u53f7\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{6}","{6}":!0}),"/* Infinite loop */\n/* USER CODE BEGIN WHILE */\nwhile (1)\n{\n  /* USER CODE END WHILE */\n  MX_TouchGFX_Process();\n  /* USER CODE BEGIN 3 */\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_taskEntry()"),"\uff0c\u5f53\u68c0\u6d4b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC"),"\u65f6\uff0cTouchGFX\u5f00\u59cb\u5904\u7406\u4e0b\u4e00\u5e27\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"void touchgfx_taskEntry()\n{\n    /*\n     * Main event loop will check for VSYNC signal, and then process next frame.\n     *\n     * \u6ce8\u610f\uff0c\u5982\u679c\u65e0VSYNC\u4fe1\u53f7\uff0c\u8be5\u51fd\u6570\u5c06\u7acb\u5373\u8fd4\u56de\u3002\n     */\n     if (OSWrappers::isVSyncAvailable())\n     {\n         hal.backPorchExited();\n     }\n}\n")),(0,r.kt)("h2",c({},{id:"freertos-cmsis-v1--cmsis-v2"}),"FreeRTOS (CMSIS V1 & CMSIS V2)"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86FreeRTOS (CMSIS V2)\u7684\u914d\u7f6e\u65b9\u6cd5\uff0c\u4ee5\u4fbf\u4e0eTouchGFX\u914d\u5408\u4f7f\u7528\u3002 \u5982\u8fd0\u884cCMSIS V1\uff0c\u9002\u7528\u540c\u6837\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"\u542f\u7528FreeRTOS"),"\u540e\uff0c\u5bfc\u822a\u81f3STM32CubeMX\u9879\u76ee\u83dc\u5355\u5de6\u4fa7\u201cCategories\uff08\u7c7b\u522b\uff09\u201d\u5217\u8868",(0,r.kt)("em",{parentName:"p"},"\u4e2d\u95f4\u4ef6"),"\u4e0b\u7684",(0,r.kt)("em",{parentName:"p"},"FreeRTOS"),"\u83dc\u5355\u3002 \u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"TICK_RATE_HZ"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"p"},"1000"),"\uff0c\u4ee5\u83b7\u53d6\u6bcf\u6beb\u79d2\u7684\u8ba1\u65f6 \u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Management\uff08\u5185\u5b58\u7ba1\u7406\uff09\u65b9\u6848"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"TOTAL_HEAP_SIZE"),"\u3002 \u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"heap_4"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"70000\u5b57\u8282"),"\u7684\u5806\u5927\u5c0f\u6765\u4e3atouchgfx\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u8db3\u591f\u5927\u7684\u5806\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-configure.webp",width:"700",mdxType:"Figure"},"\u4e3aFreeRTOS\u521b\u5efaTouchGFX\u4efb\u52a1"),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u901a\u8fc7\u9488\u5bf9\u7279\u5b9a\u5e94\u7528\u7a0b\u5e8f\u7684\u8bd5\u9519\uff0c\u53ef\u4ee5\u627e\u5230\u66f4\u4e3a\u7406\u60f3\u7684",(0,r.kt)("i",null,"TOTAL_HEAP_SIZE"),"\u3002"),(0,r.kt)("p",null,"\u8c03\u7528\u4ee5\u4e0b\u51fd\u6570\u65f6\uff0c\u5c06\u8fdb\u5165TouchGFX\u4e3b\u5faa\u73af\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"void MX_TouchGFX_Process(void);\n")),(0,r.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728STM32CubeMX\u4e2d\u914d\u7f6e\u81ea\u5b9a\u4e49\u4efb\u52a1\u6765\u8fd0\u884cTouchGFX\u4e3b\u5faa\u73af\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528TouchGFX Generator\u751f\u6210\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_task()"),"\u53e5\u67c4\u3002"),(0,r.kt)("h3",c({},{id:"\u81ea\u5b9a\u4e49\u4efb\u52a1"}),"\u81ea\u5b9a\u4e49\u4efb\u52a1"),(0,r.kt)("p",null,"\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"void \xa0touchgfx_taskEntry(void)"),"\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u8c03\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void MX_TouchGFX_Process(void)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,r.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u9700\u8981\u5728\u8fd0\u884cTouchGFX\u4e3b\u5faa\u73af\u7684\u4efb\u52a1\u4e2d\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()\xa0"),"\u3002 \u5982\u679c\u5f00\u53d1\u4eba\u5458\u5728STM32CubeMX\u4e2d\u914d\u7f6e\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"MyTask"),"\u7684FeeRTOS\u4efb\u52a1\uff0c\u90a3\u4e48\u4e0b\u9762\u7684\u793a\u4f8b\u663e\u793a\u4e86\u5982\u4f55\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5904\u7406\u7a0b\u5e8f\u4e2d\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u6765\u542f\u52a8TouchGFX\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void StartMyTask(void *argument)\n{\n  /* USER CODE BEGIN 5 */\n  MX_TouchGFX_Process();\n  /* USER CODE END 5 */ \n}\n")),(0,r.kt)("h3",c({},{id:"touchgfx\u4efb\u52a1"}),"TouchGFX\u4efb\u52a1"),(0,r.kt)("p",null,"TouchGFX\u4e3b\u5faa\u73af\u53ef\u5728",(0,r.kt)("em",{parentName:"p"},"TouchGFX\u4efb\u52a1"),"\u4e2d\u8fd0\u884c\u3002 TouchGFX Generator \u5b9a\u4e49\u4e86\u4e00\u4e2a\u4efb\u52a1\u5904\u7406\u7a0b\u5e8f\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"app_touchgfx.c"),"\u4e2d\u8c03\u7528\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()"),"\u7684\u51fd\u6570\uff0c\u5728\u6b64\u51fd\u6570\u4e2d\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),"\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void TouchGFX_Task(void *argument)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,r.kt)("p",null,"\u8981\u8ba9FreeRTOS\u8c03\u5ea6\u7a0b\u5e8f\u8c03\u5ea6\u8be5\u4efb\u52a1\uff0c\u5fc5\u987b\u5728STM32CubeMX\u7684",(0,r.kt)("em",{parentName:"p"},"FREERTOS"),"\u83dc\u5355\u4e2d\u521b\u5efa\u8be5\u4efb\u52a1\u3002 \u5728",(0,r.kt)("em",{parentName:"p"},"\u201cTasks and Queues\uff08\u4efb\u52a1\u548c\u961f\u5217\uff09\u201d"),"\u9009\u9879\u5361\u4e2d\uff0c\u6dfb\u52a0\u4e00\u4e2a\u4efb\u52a1\uff0c\u5c06",(0,r.kt)("strong",{parentName:"p"},"\u201cTouchGFX_Task\u201d"),"\u4f5c\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u5165\u53e3\u51fd\u6570"),"\uff0c\u5e76\u5c06\u4e00\u4e2a\u8db3\u591f\u5927\u7684\u5806\u6808\u548c",(0,r.kt)("em",{parentName:"p"},"Code Generation Option\uff08\u4ee3\u7801\u751f\u6210\u9009\u9879\uff09"),"\u4f5c\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5916\u90e8\u51fd\u6570"),"\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-touchgfx-task.webp",mdxType:"Figure"},"\u4e3aFreeRTOS\u521b\u5efaTouchGFX\u4efb\u52a1"),(0,r.kt)("p",null,"STM32CubeMX\u5c06\u5728\u751f\u6210\u4ee3\u7801\u65f6\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),"\u4e2d\u521b\u5efaTouchGFX\u4efb\u52a1\uff0c\u4ece\u800c\u542f\u52a8TouchGFX\u4e3b\u5faa\u73af\u3002"),(0,r.kt)("p",null,"\u4e3a\u786e\u4fddSYS Timebase Source\u59cb\u7ec8\u63a5\u6536\u5230\u7528\u4e8e\u67d0\u4e9b\u7cfb\u7edf\u51fd\u6570\uff08\u5305\u62ec",(0,r.kt)("inlineCode",{parentName:"p"},"HAL_Delay()"),"\uff09\u7684\u8ba1\u65f6\uff0c\u6307\u5b9a\u8ba1\u65f6\u5668\u7684NVIC\u4f18\u5148\u7ea7\u5fc5\u987b\u9ad8\u4e8e\uff08\u5373\u5177\u6709\u8f83\u4f4e\u7684\u6570\u503c\uff09\u6700\u9ad8\u4e2d\u65ad\u4f18\u5148\u7ea7\uff0c\u8be5\u4f18\u5148\u7ea7\u53ef\u7528\u4e8e\u8c03\u7528\u4e2d\u65ad\u5b89\u5168FreeRTOS API\u51fd\u6570\u3002 \u5728FreeRTOS\u4e2d\u53ef\u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"configMAX_SYSCALL_INTERRUPT_PRIORITY"),"\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"\u3002 \u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u7528\u4e8eSYS\u65f6\u57fa\u6e90\u7684\u8ba1\u65f6\u5668\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"TIM6"),"\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-nvic-conf.png",mdxType:"Figure"},"\u8bbe\u7f6e\u7cfb\u7edf\u8ba1\u65f6\u5668\u7684NVIC\u4f18\u5148\u7ea7"),(0,r.kt)("h2",c({},{id:"threadx"}),"ThreadX"),(0,r.kt)("p",null,"\u672c\u8282\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528ThreadX\u4f5c\u4e3a",(0,r.kt)("em",{parentName:"p"},"X-CUBE"),"\u8f6f\u4ef6\u5305\u6216\u672c\u673aThreadX\u4e2d\u95f4\u4ef6\u6765\u914d\u7f6eTouchGFX\u9879\u76ee\u3002"),(0,r.kt)("h3",c({},{id:"\u672c\u673a\u4e2d\u95f4\u4ef6\u914d\u7f6e"}),"\u672c\u673a\u4e2d\u95f4\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u5982\u4f55\u4e3aSTM32U5 MCU\u914d\u7f6eThreadX\uff0c\u8be5MCU\u5c06ThreadX\u7528\u4f5c\u672c\u673a\u4e2d\u95f4\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"\u542f\u7528\u7ebf\u7a0b\u672c\u673a\u4e2d\u95f4\u4ef6"),"\u540e\uff0c\u5bfc\u822a\u81f3STM32CubeMX\u9879\u76ee\u83dc\u5355\u5de6\u4fa7\u201cCategories\uff08\u7c7b\u522b\uff09\u201d\u5217\u8868",(0,r.kt)("em",{parentName:"p"},"\u4e2d\u95f4\u4ef6"),"\u4e0b\u7684",(0,r.kt)("em",{parentName:"p"},"THREADX"),"\u83dc\u5355\u3002 \u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"Mode\uff08\u6a21\u5f0f\uff09"),"\u5217\u8868\u542f\u7528",(0,r.kt)("em",{parentName:"p"},"Core"),"\u3002 \u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"p"},"1000"),"\u4ee5\u83b7\u5f97\u6bcf\u6beb\u79d2\u4e00\u6b21\u7684\u8ba1\u65f6\uff0c\u5e76\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"\u201cMemory Pool Allocation\uff08\u5185\u5b58\u6c60\u5206\u914d\uff09\u201d"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u201cUse Static Allocation\uff08\u4f7f\u7528\u9759\u6001\u5206\u914d\uff09\u201d"),"\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/enable-and-configure-native-threadx-mw.webp",width:"700",mdxType:"Figure"},"\u542f\u7528\u5e76\u914d\u7f6e\u672c\u673aThreadX\u4e2d\u95f4\u4ef6"),(0,r.kt)(l.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"STM32CubeMX\u5728\u4f7f\u7528",(0,r.kt)("b",null,"Native ThreadX\u4e2d\u95f4\u4ef6"),"\u65f6\uff0c\u4ec5\u5f53",(0,r.kt)("b",null,"Memory Pool Allocation\uff08\u5185\u5b58\u6c60\u5206\u914d\uff09"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("b",null,"Use Static Allocation\uff08\u4f7f\u7528\u9759\u6001\u5206\u914d\uff09"),"\u65f6\u624d\u4f1a\u751f\u6210\u5b8c\u6574\u7684OSAL"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u5f53",(0,r.kt)("b",null,"Memory Pool Allocation\uff08\u5185\u5b58\u6c60\u5206\u914d\uff09"),"\u8bbe\u7f6e\u4e3a\u4f7f\u7528",(0,r.kt)("b",null,"Use Dynamic Allocation\uff08\u52a8\u6001\u5206\u914d\uff09"),"\u65f6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u7528\u6237\u5fc5\u987b\u5728\u751f\u6210\u7684",(0,r.kt)("b",null,(0,r.kt)("i",null,"app_azure_rtos.c")),"\u6587\u4ef6\u7684",(0,r.kt)("i",null,"USER CODE BEGIN DYNAMIC_MEM_ALLOC"),"\u90e8\u5206\u4e2d\u6dfb\u52a0\u7f3a\u5931\u7684\u4ee3\u7801\u3002"),(0,r.kt)("li",null,"\u7528\u6237\u8fd8\u9700\u8981\u6839\u636e\u751f\u6210\u7684",(0,r.kt)("b",null,(0,r.kt)("i",null,"app_azure_rtos.c")),"\u6587\u4ef6\u4e2d\u4ee3\u7801\u6ce8\u91ca\u6240\u63cf\u8ff0\u7684\u5efa\u8bae\u66f4\u65b0\u94fe\u63a5\u5668\u6587\u4ef6\u3002"),(0,r.kt)("li",null,"\u6839\u636eSTM32CubeMX\u7248\u672c\uff0c",(0,r.kt)("b",null,"Dynamic Allocation\uff08\u52a8\u6001\u5206\u914d\uff09"),"\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002")))),(0,r.kt)("p",null,"\u5728\u4f7f\u7528ThreadX\u65f6\uff0cSTM32CubeMX\u4e0d\u8d1f\u8d23\u751f\u6210\u5206\u914d\u548c\u8c03\u5ea6\u4efb\u52a1\u7684\u4ee3\u7801\u3002 \u4e3a\u6b64\uff0cSTM32CubeMX\u751f\u6210\u5bf9\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_PreOSInit()"),"\u7684\u8c03\u7528\uff0c\u8be5\u51fd\u6570\u5c06\u5bf9TouchGFX \u6846\u67b6\u8fdb\u884c\u521d\u59cb\u5316\u3002 \u4e4b\u540e\uff0c\u751f\u6210\u5bf9\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"MX_ThreadX_Init()"),"\u7684\u53e6\u4e00\u4e2a\u8c03\u7528\uff0c\u521d\u59cb\u5316\u5e76\u542f\u52a8ThreadX\u5185\u6838\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{5,7}","{5,7}":!0}),"int main(void)\n{\n...\n  /* Call PreOsInit function */\n  MX_TouchGFX_PreOSInit();\n...\n  MX_ThreadX_Init();\n...\n}\n")),(0,r.kt)("p",null,"TouchGFX Generator\u5c06\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()"),"\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u521b\u5efaTouchGFX\u7ebf\u7a0b\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{13-20}","{13-20}":!0}),'UINT MX_TouchGFX_Init(VOID *memory_ptr)\n{\n  UINT ret = TX_SUCCESS;\n  CHAR *pointer = 0;\n\n  /* Allocate the stack for TouchGFX Thread.  */\n  if (tx_byte_allocate((TX_BYTE_POOL*)memory_ptr, (VOID **) &pointer,\n                       TOUCHGFX_STACK_SIZE, TX_NO_WAIT) != TX_SUCCESS)\n  {\n    ret = TX_POOL_ERROR;\n  }\n\n  /* Create TouchGFX Thread */\n  else if (tx_thread_create(&TouchGFXThread, (CHAR *)"TouchGFX", TouchGFX_Task, 0,\n                       pointer, TOUCHGFX_STACK_SIZE,\n                       5, 5,\n                       TX_NO_TIME_SLICE, TX_AUTO_START) != TX_SUCCESS)\n  {\n    ret = TX_THREAD_ERROR;\n  }\n\n  return ret;\n}\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0cTouchGFX Generator\u5c06\u751f\u6210\u521b\u5efaTouchGFX\u4efb\u52a1\u5b57\u8282\u6c60\u7684\u4ee3\u7801\uff0c\u5e76\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()"),"\u3002 \u6b64\u4ee3\u7801\u63d2\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"app_azure_rtos.c"),"\u6587\u4ef6\u4e2d\u51fd\u6570",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"tx_application_define()\u7684")),"\u9002\u5f53\u4f4d\u7f6e\uff0c\u5bf9TouchGFX\u4efb\u52a1\u5b57\u8282\u6c60\u8fdb\u884c\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tx_application_define()"),"\u51fd\u6570\u5728\u521d\u59cb\u5316\u65f6\u7531ThreadX\u5185\u6838\u8c03\u7528\u3002 TouchGFX\u7ebf\u7a0b\u5c06\u5728\u7a0d\u540e\u542f\u52a8ThreadX\u5185\u6838\u65f6\u542f\u52a8\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_azure_rtos.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{3-4,9,22}","{3-4,9,22}":!0}),'#include "app_touchgfx.h"\n...\n__ALIGN_BEGIN static UCHAR touchgfx_byte_pool_buffer[TOUCHGFX_APP_MEM_POOL_SIZE] __ALIGN_END;\nstatic TX_BYTE_POOL touchgfx_app_byte_pool;\n...\nVOID tx_application_define(VOID *first_unused_memory)\n{\n  ...\n  if (tx_byte_pool_create(&touchgfx_app_byte_pool, "TouchGFX App memory pool", touchgfx_byte_pool_buffer, TOUCHGFX_APP_MEM_POOL_SIZE) != TX_SUCCESS)\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Error */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Error */\n  }\n  else\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Success */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Success */\n\n    memory_ptr = (VOID *)&touchgfx_app_byte_pool;\n    if (MX_TouchGFX_Init(memory_ptr) != TX_SUCCESS)\n    {\n      /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Error */\n\n      /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Error */\n    }\n    /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Success */\n\n    /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Success */\n  }\n\n  ...\n}\n')),(0,r.kt)("h3",c({},{id:"x-cube-azrtos\u914d\u7f6e"}),"X-CUBE-AZRTOS\u914d\u7f6e"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u5982\u4f55\u4e3aSTM32H7 MCU\u914d\u7f6eThreadX\uff0c\u8be5MCU\u7684ThreadX\u4f5c\u4e3a",(0,r.kt)("em",{parentName:"p"},"X-CUBE"),"\u8f6f\u4ef6\u5305\u63d0\u4f9b\u3002"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u5c06",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"ThreadX\u4f5c\u4e3a",(0,r.kt)("em",{parentName:"a"},"X-CUBE"),"\u8f6f\u4ef6\u5305"),"\u542f\u7528\u540e\uff0c\u5bfc\u822a\u81f3STM32CubeMX\u4e2d\u9879\u76ee\u83dc\u5355\u5de6\u4fa7\u201cCategories\uff08\u7c7b\u522b\uff09\u201d\u5217\u8868",(0,r.kt)("em",{parentName:"p"},"\u8f6f\u4ef6\u5305\u4e0b"),"\u7684",(0,r.kt)("em",{parentName:"p"},"X-CUBE-AZRTOS-XX"),"\u83dc\u5355\uff0c\u5e76\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Allocation\uff08\u5185\u5b58\u5206\u914d\uff09"),"\u8bbe\u7f6e\u4e3a\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"Use Static MemPool Allocation\uff08\u9759\u6001\u5185\u5b58\u6c60\u5206\u914d\uff09"),"\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config1.webp",width:"800",mdxType:"Figure"},"ThreadX\u914d\u7f6e - X-CUBE-AZRTOS\u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,"\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"ThreadX"),"\u8bbe\u7f6e\u9009\u9879\u5361\uff0c\u5e76\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"p"},"1000"),"\uff0c\u4ee5\u83b7\u5f97\u6bcf\u6beb\u79d2\u4e00\u6b21\u7684\u8ba1\u65f6\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config2.webp",width:"400",mdxType:"Figure"},"ThreadX\u914d\u7f6e - X-CUBE-AZRTOS\u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("em",{parentName:"p"},"X-CUBEAZRTOS-XX"),"\u83dc\u5355\u4e2d\u5b8c\u6210\u914d\u7f6e\u540e\uff0c\u5bfc\u822a\u81f3TouchGFX Generator\uff0c\u9009\u62e9ThreadX\u4f5c\u4e3a",(0,r.kt)("em",{parentName:"p"},"Real Time Operating System\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\uff0c\u5e76\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Pool Size\uff08\u5185\u5b58\u6c60\u5927\u5c0f"),"\uff09\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Stack Size\uff08\u5185\u5b58\u5806\u6808\u5927\u5c0f\uff09 ")),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"\u4e3aFreeRTOS\u521b\u5efaTouchGFX\u4efb\u52a1"),(0,r.kt)(l.Z,{mdxType:"Caution"},"\u4e0d\u5e78\u7684\u662f\uff0c\u6839\u636eTouchGFX 4.21.0\uff0c\u6700\u65b0\u7248",(0,r.kt)("i",null,"X-CUBE-ARTOS-XX"),"\u751f\u6210\u7684\u4ee3\u7801\u4e0d\u4f1a\u5728ThreadX\u9a71\u52a8\u7a0b\u5e8f\u4e2d\u521b\u5efa\u548c\u521d\u59cb\u5316TouchGFX Task\u3002 \u8fd9\u9700\u8981\u5f00\u53d1\u4eba\u5458\u4ece",(0,r.kt)("i",null,"Native Middleware\u914d\u7f6e"),"\u90e8\u5206\u663e\u793a\u7684\u4ee3\u7801\u7247\u6bb5\u4e2d",(0,r.kt)("b",null,"\u624b\u52a8\u6dfb\u52a0\u4ee3\u7801"),"\uff0c\u4ee5\u4fbf\u5e94\u7528\u7a0b\u5e8f\u6b63\u5e38\u5de5\u4f5c\u3002"))}k.isMDXComponent=!0}}]);