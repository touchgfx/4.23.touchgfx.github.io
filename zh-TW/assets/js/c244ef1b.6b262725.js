"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[27658],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),h=o,d=s["".concat(c,".").concat(h)]||s[h]||m[h]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86473:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),o=n(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}const l=i},61235:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const a=o},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},89588:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},71678:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),o=n(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}const l=i},99579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>d});n(59496);var r=n(49613),o=n(12822),a=n(61235),i=n(86473),l=n(71678);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"scenarios-configure-rtos",title:"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71"},s=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",id:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",title:"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71",description:"\u672c\u7bc0\u8aaa\u660e\u5982\u4f55\u5728STM32CubeMX\u8a2d\u5b9a\u4e0d\u540c\u7684\u5373\u6642\u4f5c\u696d\u7cfb\u7d71\uff0c\u4ee5\u642d\u914d\u4f7f\u7528TouchGFX Generator\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\uff0c\u5be6\u73fe\u53ef\u6b63\u5e38\u904b\u4f5c\u7684TouchGFX OSAL\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-configure-rtos",title:"\u5373\u6642\u4f5c\u696d\u7cfb\u7d71"},sidebar:"docs",previous:{title:"\u5f71\u50cf\u7de9\u885d\u5340\u7b56\u7565",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"},next:{title:"\u5f71\u7247\u89e3\u78bc",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"}},h={},d=[{value:"\u7121OS",id:"\u7121os",level:2},{value:"FreeRTOS (CMSIS V1\u53caCMSIS V2)",id:"freertos-cmsis-v1\u53cacmsis-v2",level:2},{value:"\u5ba2\u88fd\u5de5\u4f5c",id:"\u5ba2\u88fd\u5de5\u4f5c",level:3},{value:"TouchGFX\u5de5\u4f5c",id:"touchgfx\u5de5\u4f5c",level:3},{value:"ThreadX",id:"threadx",level:2},{value:"\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4\u8a2d\u5b9a",id:"\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4\u8a2d\u5b9a",level:3},{value:"X-CUBE-AZRTOS\u8a2d\u5b9a",id:"x-cube-azrtos\u8a2d\u5b9a",level:3}],T={toc:d},g="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,c({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc0\u8aaa\u660e\u5982\u4f55\u5728STM32CubeMX\u8a2d\u5b9a\u4e0d\u540c\u7684\u5373\u6642\u4f5c\u696d\u7cfb\u7d71\uff0c\u4ee5\u642d\u914d\u4f7f\u7528",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#real-time-operating-system"}),"TouchGFX Generator"),"\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\uff0c\u5be6\u73fe\u53ef\u6b63\u5e38\u904b\u4f5c\u7684TouchGFX OSAL\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u4f86\u8aaa\uff0cTouchGFX\u4e3b\u8ff4\u5708\u662f\u4ee5\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u51fd\u6578\u7684\u65b9\u5f0f\u555f\u52d5\u3002 \u547c\u53eb\u6b64\u51fd\u6578\u7684\u4f4d\u7f6e\uff0c\u61c9\u8a72\u4f4d\u5728\u958b\u767c\u4eba\u54e1\u57f7\u884cTouchGFX\u7684\u5de5\u4f5c\u8655\u7406\u5e38\u5f0f\u5167\u90e8\u3002"),(0,r.kt)("h2",c({},{id:"\u7121os"}),"\u7121OS"),(0,r.kt)("p",null,"TouchGFX\u5728\u6c92\u6709\u4f5c\u696d\u7cfb\u7d71\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u6642\uff0cTouchGFX\u4e3b\u8ff4\u5708\u6703\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),"\u57f7\u884c\u7121\u9650\u7684While\u8ff4\u5708\uff0c\u5176\u4e2dMCU\u6703\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u4ee5\u5171\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC"),"\u8a0a\u865f\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{6}","{6}":!0}),"/* Infinite loop */\n/* USER CODE BEGIN WHILE */\nwhile (1)\n{\n  /* USER CODE END WHILE */\n  MX_TouchGFX_Process();\n  /* USER CODE BEGIN 3 */\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u547c\u53eb\u8f49\u9001\u81f3",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),"\uff0c\u5176\u4e2dTouchGFX\u6703\u5728\u5075\u6e2c\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC"),"\u6642\u958b\u59cb\u8655\u7406\u4e0b\u4e00\u500b\u756b\u9762\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"void touchgfx_taskEntry()\n{\n    /*\n     * Main event loop will check for VSYNC signal, and then process next frame.\n     *\n     * \u8acb\u6ce8\u610f\u5982\u679c\u6c92\u6709VSYNC\u8a0a\u865f\uff0c\u6b64\u51fd\u6578\u6703\u7acb\u5373\u50b3\u56de\u3002\n     */\n     if (OSWrappers::isVSyncAvailable())\n     {\n         hal.backPorchExited();\n     }\n}\n")),(0,r.kt)("h2",c({},{id:"freertos-cmsis-v1\u53cacmsis-v2"}),"FreeRTOS (CMSIS V1\u53caCMSIS V2)"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7bc4\u4f8b\u986f\u793a\u5982\u4f55\u8a2d\u5b9aFreeRTOS (CMSIS V2)\u4ee5\u642d\u914d\u4f7f\u7528TouchGFX\u3002 \u57f7\u884cCMSIS V1\u6642\u4e5f\u9069\u7528\u76f8\u540c\u8a2d\u5b9a\u3002"),(0,r.kt)("p",null,"\u5728\u5c08\u6848\u4e2d",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"\u555f\u7528FreeRTOS"),"\uff0c\u5c0e\u89bd\u81f3STM32CubeMX\u5c08\u6848\u9078\u55ae\u5de6\u5074\u300cCategories\u300d(\u985e\u5225)\u6e05\u55ae\u4e4b\u4e2d",(0,r.kt)("em",{parentName:"p"},"Middleware")," (\u4e2d\u4ecb\u8edf\u9ad4)\u4e4b\u4e0b\u7684",(0,r.kt)("em",{parentName:"p"},"FREERTOS"),"\u9078\u55ae\u3002 \u5c07",(0,r.kt)("inlineCode",{parentName:"p"},"TICK_RATE_HZ"),"\u8a2d\u5b9a\u70ba",(0,r.kt)("strong",{parentName:"p"},"1000"),"\uff0c\u4e5f\u5c31\u662f\u6bcf\u6beb\u79d2\u4e00\u500b\u6642\u6a19\u3002 \u8a2d\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Management scheme")," (\u8a18\u61b6\u9ad4\u7ba1\u7406\u914d\u7f6e)\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"TOTAL_HEAP_SIZE"),"\u3002 \u6211\u5011\u5728\u6b64\u7bc4\u4f8b\u4e2d\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"heap_4"),"\u53ca",(0,r.kt)("strong",{parentName:"p"},"70000\u4f4d\u5143\u7d44"),"\u7684\u5806\u7a4d\u5927\u5c0f\uff0c\u8b93\u5806\u7a4d\u8db3\u4ee5\u56e0\u61c9TouchGFX\u61c9\u7528\u7a0b\u5f0f\u9700\u6c42\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-configure.webp",width:"700",mdxType:"Figure"},"\u70baFreeRTOS\u5efa\u7acbTouchGFX\u5de5\u4f5c"),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u60a8\u53ef\u91dd\u5c0d\u7279\u5b9a\u61c9\u7528\u7a0b\u5f0f\u53cd\u8986\u8a66\u9a57\uff0c\u627e\u51fa\u66f4\u7406\u60f3\u7684",(0,r.kt)("i",null,"TOTAL_HEAP_SIZE"),"\u3002"),(0,r.kt)("p",null,"\u547c\u53eb\u4e0b\u5217\u51fd\u6578\u6642\u6703\u9032\u5165TouchGFX\u4e3b\u8ff4\u5708\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"void MX_TouchGFX_Process(void);\n")),(0,r.kt)("p",null,"\u958b\u767c\u4eba\u54e1\u53ef\u5728STM32CubeMX\u8a2d\u5b9a\u81ea\u5df1\u7684\u5ba2\u88fd\u5de5\u4f5c\uff0c\u8b93TouchGFX\u4e3b\u8ff4\u5708\u5728\u5176\u4e2d\u57f7\u884c\uff0c\u6216\u4f7f\u7528TouchGFX Generator\u7522\u751f\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()"),"\u63a7\u5236\u4ee3\u78bc\u3002"),(0,r.kt)("h3",c({},{id:"\u5ba2\u88fd\u5de5\u4f5c"}),"\u5ba2\u88fd\u5de5\u4f5c"),(0,r.kt)("p",null,"\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"void\xa0touchgfx_taskEntry(void)"),"\u6703\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u547c\u53eb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void MX_TouchGFX_Process(void)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,r.kt)("p",null,"\u958b\u767c\u4eba\u54e1\u5fc5\u9808\u5728\u6253\u7b97\u57f7\u884cTouchGFX\u4e3b\u8ff4\u5708\u7684\u5de5\u4f5c\u4e2d\uff0c\u65bc\u5de5\u4f5c\u8655\u7406\u5e38\u5f0f\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u3002 \u8209\u4f8b\u4f86\u8aaa\uff0c\u5982\u679c\u958b\u767c\u4eba\u54e1\u5728\u540d\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"MyTask"),"\u7684STM32CubeMX\u4e4b\u4e2d\u8a2d\u5b9a\u4e86FeeRTOS\u5de5\u4f5c\uff0c\u4ee5\u4e0b\u7bc4\u4f8b\u986f\u793a\u61c9\u5982\u4f55\u5728\u5ba2\u88fd\u5de5\u4f5c\u8655\u7406\u5e38\u5f0f\u4e2d\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\uff0c\u4ee5\u4fbf\u555f\u52d5TouchGFX\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void StartMyTask(void *argument)\n{\n  /* USER CODE BEGIN 5 */\n  MX_TouchGFX_Process();\n  /* USER CODE END 5 */ \n}\n")),(0,r.kt)("h3",c({},{id:"touchgfx\u5de5\u4f5c"}),"TouchGFX\u5de5\u4f5c"),(0,r.kt)("p",null,"TouchGFX\u4e3b\u8ff4\u5708\u53ef\u65bc",(0,r.kt)("em",{parentName:"p"},"TouchGFX Task")," (TouchGFX\u5de5\u4f5c)\u4e2d\u57f7\u884c\u3002 TouchGFX Generator\u6703\u5b9a\u7fa9\u5de5\u4f5c\u8655\u7406\u5e38\u5f0f\u4ee5\u547c\u53eb\u540d\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),"\uff0c\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"p"},"app_touchgfx.c"),"\u5167\u90e8\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void TouchGFX_Task(void *argument)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u8981\u5229\u7528FreeRTOS\u6392\u7a0b\u5668\u6392\u7a0b\u6b64\u9805\u5de5\u4f5c\uff0c\u5c31\u5fc5\u9808\u5728STM32CubeMX\u7684",(0,r.kt)("em",{parentName:"p"},"FREERTOS"),"\u9078\u55ae\u4e2d\u5efa\u7acb\u5de5\u4f5c\u3002 \u5728",(0,r.kt)("em",{parentName:"p"},"Tasks and Queues")," (\u5de5\u4f5c\u53ca\u4f47\u5217)\u7d22\u5f15\u6a19\u7c64\uff0c\u65b0\u589e\u5de5\u4f5c\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u300cTouchGFX_Task\u300d"),"\u4f5c\u70ba",(0,r.kt)("em",{parentName:"p"},"Entry Function"),"\uff0c\u4e26\u4e14\u8981\u6709\u5920\u5927\u7684\u5806\u758a\uff0c\u5176\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"Code Generation Option")," (\u7a0b\u5f0f\u78bc\u7522\u751f\u9078\u9805)\u8981\u8a2d\u5b9a\u70ba",(0,r.kt)("strong",{parentName:"p"},"As external")," (\u5916\u90e8)\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-touchgfx-task.webp",mdxType:"Figure"},"\u70baFreeRTOS\u5efa\u7acbTouchGFX\u5de5\u4f5c"),(0,r.kt)("p",null,"STM32CubeMX\u5c07\u5728\u7522\u751f\u7a0b\u5f0f\u78bc\u6642\u65bc",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),"\u5efa\u7acbTouchGFX\u5de5\u4f5c\uff0c\u7528\u65bc\u555f\u52d5TouchGFX\u4e3b\u8ff4\u5708\u3002"),(0,r.kt)("p",null,"To ensure that the SYS Timebase Source always receives its tick, which is used for some system functions including ",(0,r.kt)("inlineCode",{parentName:"p"},"HAL_Delay()"),", the NVIC priority for the assigned timer must be higher (i.e. have a lower number) than the highest interrupt priority that can be used to make calls to interrupt safe FreeRTOS API functions. This is configurable in FreeRTOS as ",(0,r.kt)("inlineCode",{parentName:"p"},"configMAX_SYSCALL_INTERRUPT_PRIORITY")," and is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," at default. In most cases the timer used for SYS Timebase Source is ",(0,r.kt)("inlineCode",{parentName:"p"},"TIM6"),"."),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-nvic-conf.png",mdxType:"Figure"},"Setting the NVIC priority of the systick timer"),(0,r.kt)("h2",c({},{id:"threadx"}),"ThreadX"),(0,r.kt)("p",null,"\u672c\u7bc0\u8aaa\u660e\u5982\u4f55\u4f7f\u7528ThreadX\u4f5c\u70ba",(0,r.kt)("em",{parentName:"p"},"X-CUBE"),"\u5957\u88dd\u8edf\u9ad4\u6216\u539f\u751fThreadX\u4e2d\u4ecb\u8edf\u9ad4\u4ee5\u8a2d\u5b9aTouchGFX\u5c08\u6848\u3002"),(0,r.kt)("h3",c({},{id:"\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4\u8a2d\u5b9a"}),"\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7bc4\u4f8b\u986f\u793a\u5982\u4f55\u70baSTM32U5 MCU\u8a2d\u5b9aThreadX\uff0c\u5176\u4e2dThreadX\u53ef\u4f5c\u70ba\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5728\u5c08\u6848\u4e2d",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"\u555f\u7528\u57f7\u884c\u7dd2\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4"),"\uff0c\u5c0e\u89bd\u81f3STM32CubeMX\u5c08\u6848\u9078\u55ae\u5de6\u5074\u300cCategories\u300d(\u985e\u5225)\u6e05\u55ae\u4e2d",(0,r.kt)("em",{parentName:"p"},"Middleware")," (\u4e2d\u4ecb\u8edf\u9ad4)\u4e4b\u4e0b\u7684",(0,r.kt)("em",{parentName:"p"},"THREADX"),"\u9078\u55ae\u3002 \u555f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," (\u6838\u5fc3)\uff1a\u8acb\u7531",(0,r.kt)("em",{parentName:"p"},"Mode")," (\u6a21\u5f0f)\u6e05\u55ae\u555f\u7528\u3002 \u5c07",(0,r.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND"),"\u8a2d\u5b9a\u70ba",(0,r.kt)("strong",{parentName:"p"},"1000"),"\uff0c\u4e5f\u5c31\u662f\u6bcf\u6beb\u79d2\u4e00\u500b\u6642\u6a19\uff0c\u7136\u5f8c\u5c07",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Pool Allocation")," (\u8a18\u61b6\u9ad4\u96c6\u5340\u5206\u914d)\u8a2d\u5b9a\u70ba",(0,r.kt)("strong",{parentName:"p"},"Use Static Allocation")," (\u4f7f\u7528\u975c\u614b\u5206\u914d)\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/enable-and-configure-native-threadx-mw.webp",width:"700",mdxType:"Figure"},"\u555f\u7528\u53ca\u8a2d\u5b9a\u539f\u751fThreadX\u4e2d\u4ecb\u8edf\u9ad4"),(0,r.kt)(i.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"STM32CubeMX\u53ea\u6709\u5728\u4f7f\u7528",(0,r.kt)("b",null,"\u539f\u751fThreadX\u4e2d\u4ecb\u8edf\u9ad4"),"\u6642\uff0c\u5728",(0,r.kt)("b",null,"Memory Pool Allocation")," (\u8a18\u61b6\u9ad4\u96c6\u5340\u5206\u914d)\u8a2d\u5b9a\u70ba",(0,r.kt)("b",null,"Use Static Allocation")," (\u4f7f\u7528\u975c\u614b\u5206\u914d)\u7684\u60c5\u6cc1\u4e0b\uff0c\u624d\u6703\u7522\u751f\u5b8c\u6574\u7684OSAL"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u5982\u679c",(0,r.kt)("b",null,"Memory Pool Allocation")," (\u8a18\u61b6\u9ad4\u96c6\u5340\u5206\u914d)\u8a2d\u5b9a\u70ba",(0,r.kt)("b",null,"Use Dynamic Allocation")," (\u4f7f\u7528\u52d5\u614b\u5206\u914d)\uff0c\u5247\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4f7f\u7528\u8005\u5fc5\u9808\u5728\u7522\u751f\u7684",(0,r.kt)("b",null,(0,r.kt)("i",null,"app_azure_rtos.c")),"\u6a94\u6848\u4e2d\uff0c\u65bc",(0,r.kt)("i",null,"USER CODE BEGIN DYNAMIC_MEM_ALLOC"),"\u5340\u6bb5\u65b0\u589e\u7f3a\u5931\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("li",null,"\u4f7f\u7528\u8005\u9084\u9700\u8981\u6839\u64da\u7522\u751f\u7684",(0,r.kt)("b",null,(0,r.kt)("i",null,"app_azure_rtos.c")),"\u6a94\u6848\u4e2d\u7a0b\u5f0f\u78bc\u8a3b\u89e3\u6240\u8aaa\u660e\u7684\u5efa\u8b70\u66f4\u65b0\u9023\u7d50\u5668\u6a94\u6848\u3002"),(0,r.kt)("li",null,"\u8996STM32CubeMX\u7248\u672c\u800c\u5b9a\uff0c",(0,r.kt)("b",null,"Dynamic Allocation")," (\u52d5\u614b\u5206\u914d)\u53ef\u80fd\u7121\u6cd5\u6b63\u5e38\u904b\u4f5c\u3002")))),(0,r.kt)("p",null,"STM32CubeMX\u4e26\u4e0d\u8ca0\u8cac\u7522\u751f\u7a0b\u5f0f\u78bc\uff0c\u5728\u4f7f\u7528ThreadX\u6642\u5206\u914d\u53ca\u6392\u7a0b\u5de5\u4f5c\u3002 \u56e0\u6b64\u547c\u53eb\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_PreOSInit()"),"\u7528\u65bc\u521d\u59cb\u5316TouchGFX\u67b6\u69cb\u6642\uff0c\u5c07\u7531STM32CubeMX\u7522\u751f\u8a72\u547c\u53eb\u3002 \u5728\u6b64\u4e4b\u5f8c\uff0c\u5c07\u6703\u7522\u751f\u53e6\u4e00\u6b21\u547c\u53eb\uff0c\u4ee5\u547c\u53eb\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"MX_ThreadX_Init()"),"\u521d\u59cb\u5316\u53ca\u555f\u52d5ThreadX\u6838\u5fc3\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{5,7}","{5,7}":!0}),"int main(void)\n{\n...\n  /* Call PreOsInit function */\n  MX_TouchGFX_PreOSInit();\n...\n  MX_ThreadX_Init();\n...\n}\n")),(0,r.kt)("p",null,"TouchGFX Generator\u5c07\u7522\u751f",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()"),"\u51fd\u6578\uff0c\u7528\u65bc\u5efa\u7acbTouchGFX\u57f7\u884c\u7dd2\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{13-20}","{13-20}":!0}),'UINT MX_TouchGFX_Init(VOID *memory_ptr)\n{\n  UINT ret = TX_SUCCESS;\n  CHAR *pointer = 0;\n\n  /* Allocate the stack for TouchGFX Thread.  */\n  if (tx_byte_allocate((TX_BYTE_POOL*)memory_ptr, (VOID **) &pointer,\n                       TOUCHGFX_STACK_SIZE, TX_NO_WAIT) != TX_SUCCESS)\n  {\n    ret = TX_POOL_ERROR;\n  }\n\n  /* Create TouchGFX Thread */\n  else if (tx_thread_create(&TouchGFXThread, (CHAR *)"TouchGFX", TouchGFX_Task, 0,\n                       pointer, TOUCHGFX_STACK_SIZE,\n                       5, 5,\n                       TX_NO_TIME_SLICE, TX_AUTO_START) != TX_SUCCESS)\n  {\n    ret = TX_THREAD_ERROR;\n  }\n\n  return ret;\n}\n')),(0,r.kt)("p",null,"TouchGFX Generator\u63a5\u8457\u5c07\u7522\u751f\u7a0b\u5f0f\u78bc\uff0c\u4ee5\u5efa\u7acbTouchGFX\u5de5\u4f5c\u4f4d\u5143\u7d44\u96c6\u5340\uff0c\u4e26\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()"),"\u3002 \u6b64\u7a0b\u5f0f\u78bc\u5c07\u63d2\u5165\u81f3\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"tx_application_define()"),"\u7684\u9069\u7576\u4f4d\u7f6e\uff1b\u8a72\u51fd\u6578\u4f4d\u65bc",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"app_azure_rtos.c")),"\u6a94\u6848\u4e4b\u4e2d\uff0cTouchGFX\u5de5\u4f5c\u4f4d\u5143\u7d44\u96c6\u5340\u5c31\u662f\u5728\u6b64\u5b9a\u7fa9\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tx_application_define()"),"\u51fd\u6578\u662f\u7531ThreadX\u6838\u5fc3\u5728\u521d\u59cb\u5316\u6642\u9593\u547c\u53eb\u3002 ThreadX\u6838\u5fc3\u555f\u52d5\u6642\uff0cTouchGFX\u57f7\u884c\u7dd2\u6703\u7a0d\u5f8c\u555f\u52d5\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_azure_rtos.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{3-4,9,22}","{3-4,9,22}":!0}),'#include "app_touchgfx.h"\n...\n__ALIGN_BEGIN static UCHAR touchgfx_byte_pool_buffer[TOUCHGFX_APP_MEM_POOL_SIZE] __ALIGN_END;\nstatic TX_BYTE_POOL touchgfx_app_byte_pool;\n...\nVOID tx_application_define(VOID *first_unused_memory)\n{\n  ...\n  if (tx_byte_pool_create(&touchgfx_app_byte_pool, "TouchGFX App memory pool", touchgfx_byte_pool_buffer, TOUCHGFX_APP_MEM_POOL_SIZE) != TX_SUCCESS)\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Error */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Error */\n  }\n  else\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Success */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Success */\n\n    memory_ptr = (VOID *)&touchgfx_app_byte_pool;\n    if (MX_TouchGFX_Init(memory_ptr) != TX_SUCCESS)\n    {\n      /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Error */\n\n      /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Error */\n    }\n    /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Success */\n\n    /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Success */\n  }\n\n  ...\n}\n')),(0,r.kt)("h3",c({},{id:"x-cube-azrtos\u8a2d\u5b9a"}),"X-CUBE-AZRTOS\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7bc4\u4f8b\u986f\u793a\u5982\u4f55\u70baSTM32H7 MCU\u8a2d\u5b9aThreadX\uff0c\u5176\u4e2dThreadX\u53ef\u4f5c\u70ba",(0,r.kt)("em",{parentName:"p"},"X-CUBE"),"\u5957\u88dd\u8edf\u9ad4\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5728\u5c08\u6848\u4e2d",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"\u555f\u7528\u57f7\u884c\u7dd2\u4f5c\u70ba",(0,r.kt)("em",{parentName:"a"},"X-CUBE"),"\u5957\u88dd\u8edf\u9ad4"),"\uff0c\u5c0e\u89bd\u81f3STM32CubeMX\u5c08\u6848\u9078\u55ae\u5de6\u5074\u300cCategories\u300d(\u985e\u5225)\u6e05\u55ae",(0,r.kt)("em",{parentName:"p"},"Software Packs")," (\u5957\u88dd\u8edf\u9ad4)\u4e4b\u4e0b\u7684",(0,r.kt)("em",{parentName:"p"},"X-CUBE-AZRTOS-XX"),"\u9078\u55ae\uff0c\u4e26\u5c07",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Allocation")," (\u8a18\u61b6\u9ad4\u5206\u914d)\u8a2d\u5b9a\u70ba",(0,r.kt)("strong",{parentName:"p"},"Use Static MemPool Allocation")," (\u4f7f\u7528\u975c\u614b\u8a18\u61b6\u9ad4\u96c6\u5340\u5206\u914d)\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config1.webp",width:"800",mdxType:"Figure"},"ThreadX\u8a2d\u5b9a\uff1aX-CUBE-AZRTOS\u5957\u88dd\u8edf\u9ad4"),(0,r.kt)("p",null,"\u9078\u64c7",(0,r.kt)("em",{parentName:"p"},"ThreadX"),"\u8a2d\u5b9a\u7d22\u5f15\u6a19\u7c64\uff0c\u5c07",(0,r.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND"),"\u8a2d\u5b9a\u70ba",(0,r.kt)("strong",{parentName:"p"},"1000"),"\uff0c\u4e5f\u5c31\u662f\u6bcf\u6beb\u79d2\u4e00\u500b\u6642\u6a19\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config2.webp",width:"400",mdxType:"Figure"},"ThreadX\u8a2d\u5b9a\uff1aX-CUBE-AZRTOS\u5957\u88dd\u8edf\u9ad4"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("em",{parentName:"p"},"X-CUBE-AZRTOS-XX"),"\u9078\u55ae\u5b8c\u6210\u8a2d\u5b9a\u5f8c\uff0c\u8acb\u5c0e\u89bd\u81f3TouchGFX Generator\u9078\u64c7",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadX"),"\u4f5c\u70ba",(0,r.kt)("em",{parentName:"p"},"Real Time Operating System")," (\u5373\u6642\u4f5c\u696d\u7cfb\u7d71)\uff0c\u4e26\u70baTouchGFX\u5de5\u4f5c\u5b9a\u7fa9",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Pool Size")," (\u8a18\u61b6\u9ad4\u96c6\u5340\u5927\u5c0f)\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Stack Size")," (\u8a18\u61b6\u9ad4\u5806\u758a\u5927\u5c0f)\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"\u70baFreeRTOS\u5efa\u7acbTouchGFX\u5de5\u4f5c"),(0,r.kt)(i.Z,{mdxType:"Caution"},"\u53ef\u60dc\u7684\u662f\u6839\u64daTouchGFX 4.21.0\uff0c\u6700\u65b0\u7248",(0,r.kt)("i",null,"X-CUBE-AZRTOS-XX"),"\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\uff0c\u5c07\u7121\u6cd5\u5728ThreadX\u9a45\u52d5\u7a0b\u5f0f\u5efa\u7acb\u53ca\u521d\u59cb\u5316TouchGFX\u5de5\u4f5c\u3002 \u958b\u767c\u4eba\u54e1\u9700\u8981",(0,r.kt)("b",null,"\u624b\u52d5\u65b0\u589e\u7a0b\u5f0f\u78bc"),"\uff1a\u7531",(0,r.kt)("i",null,"\u539f\u751f\u4e2d\u4ecb\u8edf\u9ad4\u8a2d\u5b9a"),"\u5340\u6bb5\u986f\u793a\u7684\u7a0b\u5f0f\u78bc\u7247\u6bb5\u65b0\u589e\uff0c\u624d\u80fd\u8b93\u61c9\u7528\u7a0b\u5f0f\u6b63\u5e38\u904b\u4f5c\u3002"))}k.isMDXComponent=!0}}]);