"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5293],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,f=s["".concat(l,".").concat(h)]||s[h]||m[h]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86473:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(89588);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class c extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const i=c},12822:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(32118);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,c=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children))}},89588:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},39331:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(89588);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const i=c},71678:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(89588);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class c extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const i=c},82780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>f});n(59496);var r=n(49613),a=n(12822),o=n(39331),c=n(71678),i=n(86473);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"scenarios-fmc",title:"FMC\u8207SPI\u986f\u793a\u4ecb\u9762"},s=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-fmc",id:"development/touchgfx-hal-development/scenarios/scenarios-fmc",title:"FMC\u8207SPI\u986f\u793a\u4ecb\u9762",description:"\u4e0b\u9762\u7684\u5834\u666f\uff08\u901a\u5e38\uff09\u986f\u793a\u5c07\u50cf\u7d20\u8f49\u79fb\u5230\u9023\u63a5\u5230FMC\u6216\u901a\u904eSPI\u9023\u63a5\u7684LCD\u7684\u6b65\u9a5f\uff1b\u5169\u500b\u65b9\u6cd5\u5171\u7528\u4e00\u4e9b\u5143\u7d20\u3002 \u672c\u7bc0\u63cf\u8ff0\u7684\u65b9\u6848\u4ee5ST7789H2LCD\u63a7\u5236\u5668\u70ba\u4f8b\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-fmc",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-fmc",title:"FMC\u8207SPI\u986f\u793a\u4ecb\u9762"},sidebar:"docs",previous:{title:"LTDC/\u4e26\u5217RGB",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"},next:{title:"\u5f71\u50cf\u7de9\u885d\u5340\u7b56\u7565",permalink:"/4.23/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"}},h={},f=[{value:"\u50b3\u8f38\u5f71\u50cf\u7de9\u885d\u5340\u5167\u5bb9",id:"transferring-the-framebuffer",level:2},{value:"FMC",id:"fmc",level:3},{value:"\u5f9eHAL::flushFrameBuffer\uff08\uff09\u56de\u50b3",id:"returning-from-halflushframebuffer",level:2},{value:"TouchGFX\u9a45\u52d5\u7a0b\u5f0f/\u6495\u88c2\u6548\u679c\u4fe1\u865f",id:"touchgfx-driver--tearing-effect-signal",level:2},{value:"\u7d50\u8ad6",id:"conclusion",level:2}],d={toc:f},g="wrapper";function v(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u5834\u666f\uff08\u901a\u5e38\uff09\u986f\u793a\u5c07\u50cf\u7d20\u8f49\u79fb\u5230\u9023\u63a5\u5230FMC\u6216\u901a\u904eSPI\u9023\u63a5\u7684LCD\u7684\u6b65\u9a5f\uff1b\u5169\u500b\u65b9\u6cd5\u5171\u7528\u4e00\u4e9b\u5143\u7d20\u3002 \u672c\u7bc0\u63cf\u8ff0\u7684\u65b9\u6848\u4ee5ST7789H2LCD\u63a7\u5236\u5668\u70ba\u4f8b\u3002"),(0,r.kt)("p",null,"\u4e00\u65e6\u6839\u64daSTM32CubeMX\u4e2d\u7684\u958b\u767c\u4ef6\u898f\u7bc4\u914d\u7f6eFMC\u6216SPI\uff0cTouchGFX Generator\u53ef\u4ee5\u7528\u65bc\u751f\u6210TouchGFX HAL\uff0c\u5141\u8a31\u958b\u767c\u4eba\u54e1\u7de8\u5beb\u7a0b\u5f0f\u78bc\uff0c\u5c07\u61c9\u7528\u7a0b\u5f0f\u5f71\u50cf\u7de9\u885d\u5668\u7684\u66f4\u65b0\u90e8\u5206\u50b3\u8f38\u5230\u9023\u63a5\u7684\u986f\u793a\u7d42\u7aef\u3002"),(0,r.kt)("p",null,"\u4e0b\u5716\u986f\u793a\u4e86\u9078\u64c7",(0,r.kt)("em",{parentName:"p"},"\u5ba2\u88fd\u5316"),"\u986f\u793a\u4ecb\u9762\u6642\u7684TouchGFXGenerator\u8a2d\u5b9a\u3002 \u8a72\u914d\u7f6e\u6703\u5411TouchGFXGenerator\u6307\u793a\uff0c\u958b\u767c\u4eba\u54e1\u5e0c\u671b\u5b8c\u6210\u76f8\u95dc\u986f\u793a\u914d\u7f6e\u5f8c",(0,r.kt)("strong",{parentName:"p"},"\u624b\u52d5"),"\u5c07\u50cf\u7d20\u5f9e\u5f71\u50cf\u7de9\u885d\u5340\u50b3\u8f38\u5230\u986f\u793a\u5668\uff0c\u4e26\u751f\u6210\u7528\u65bc\u5b8c\u6210\u8a72\u64cd\u4f5c\u7684\u8655\u7406\u5668\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.webp",noShadow:!1,mdxType:"Figure"},"TouchGFXGenerator\u8a2d\u5b9a"),(0,r.kt)(c.Z,{mdxType:"Tip"},"\u5c0d\u65bc\u901a\u904eSPI\u9023\u63a5\u7684\u986f\u793a\u5668\uff0c\u5fc5\u9808\u9078\u64c7\u81ea\u8a02\u986f\u793a\u4ecb\u9762"),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u5c0d\u65bc\u5167\u5d4cGRAM\u7684\u986f\u793a\u5668\uff0c\u7528\u6236\u5728\u751f\u6210\u7684TouchGFX HAL\u4e2d\u7de8\u5beb\u7684\u7a0b\u5f0f\u78bc\u61c9\u8a72\u57f7\u884c\u4ee5\u4e0b\u6b65\u9a5f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u64da\u8981\u91cd\u7e6a\u7684\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u5c07\u300c\u986f\u793a\u6e38\u6a19\u300d\u548c\u300c\u6d3b\u52d5\u8996\u7a97\u300d\u79fb\u52d5\u5230GRAM\u4e2d\u8207\u6b64\u5340\u57df\u5c0d\u61c9\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6e96\u5099\u5c07\u50b3\u5165\u7684\u50cf\u7d20\u8cc7\u6599\u5beb\u5165GRAM\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u50b3\u9001\u50cf\u7d20\u8cc7\u6599\u3002")),(0,r.kt)("h2",l({},{id:"transferring-the-framebuffer"}),"\u50b3\u8f38\u5f71\u50cf\u7de9\u885d\u5340\u5167\u5bb9"),(0,r.kt)("p",null,"\u5728\u5f71\u50cf\u7de9\u885d\u5340\u5167\u5bb9\u88ab\u66f4\u65b0\u5f8c\uff0cTouchGFXEngine\u6703\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer\uff08Rectr\uff09"),"\u3002 \u7576\u958b\u767c\u4eba\u54e1\u5fc5\u9808\u5be6\u73fe\u7a0b\u5f0f\u78bc\u4ee5\u624b\u52d5\u5c07\u50cf\u7d20\u8f49\u79fb\u5230\u986f\u793a\u5668\uff08\u4f8b\u5982\uff0c\u7528\u5230SPI\u548cFMC\uff09\u6642\uff0c\u8a72\u51fd\u6578\u53ef\u4ee5\u88ab\u8986\u5beb\u3002 \u6211\u5011\u5c07\u770b\u5230\uff0c\u901a\u904eFMC\u5b58\u5132\u584a\u50b3\u905e\u50cf\u7d20\u7684\u51fd\u6578\u662f\u7531TouchGFX Generator\u751f\u6210\u7684\u3002"),(0,r.kt)(o.Z,{mdxType:"Note"},"\u672c\u7bc0\u4e2d\u986f\u793a\u7684ST7789H2\u9a45\u52d5\u7a0b\u5f0f\u78bc\u5c07\u5728\u958b\u767c\u677f\u642d\u5efa\u968e\u6bb5\u6642\u958b\u767c\uff0c\u4e00\u65e6\u9a45\u52d5\u6210\u529f\u5de5\u4f5c\uff0c\u5c31\u53ef\u4ee5\u901a\u904eTouchGFXGenerator\u8907\u88fd\u5230HAL\u985e\u5225\u4e2d\u3002",(0,r.kt)("p",null,"\u9a45\u52d5\u7a0b\u5f0f\u5fc5\u9808\u80fd\u5920\u5c07\u50cf\u7d20\u50b3\u8f38\u5230\u986f\u793a\u5668\uff0c\u4e26\u53ef\u4ee5\u63a7\u5236\u986f\u793a\u5668\u7684\u8a18\u61b6\u9ad4\u5beb\u5165\u4f4d\u7f6e\u3002 \u5982\u9700\u9032\u4e00\u6b65\u7684\u8a73\u7d30\u8cc7\u8a0a\uff0c\u8acb\u67e5\u770b\u986f\u793a\u5668\u7684\u8cc7\u6599\u624b\u518a\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    __ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels - User defined function */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"ST7789H2_SetDisplayWindow"),"\u51fd\u6578\u7528\u4ee5\u5beb\u5165\u7279\u5b9a\u66ab\u5b58\u5668\u4f86\u8a2d\u5b9aGRAM\u4e2d\u865b\u64ec\u300c\u6e38\u6a19\u300d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"\u5ea7\u6a19\uff0c\u5c0d\u65bc\u4f7f\u7528GRAM\u4f86\u8aaa\u9019\u5f88\u5e38\u898b\u7684\u7528\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,r.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u4ee5\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD"),"\u51fd\u6578\u662f\u4e00\u500b\u79c1\u6709\u51fd\u6578\uff0c\u8a72\u51fd\u6578\u4e00\u6b21\u767c\u9001\u4e00\u884c\u66f4\u65b0\u5340\u57df\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\uff09\uff0c\u4ee5\u78ba\u4fdd\u76f8\u61c9\u5730\u63a8\u9032\u5f71\u50cf\u7de9\u885d\u5668\u6307\u6a19\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect& rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y) * HAL::DISPLAY_WIDTH;\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,r.kt)("p",null,"TouchGFXGenerator\u5c07\u7522\u751f\u4e00\u500b\u51fd\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"advanceFrameBufferToRect"),"\uff0c\u4e26\u6839\u64da",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\u5728\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u7684\u4f4d\u7f6e\u4f86\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"ptr"),"\u6307\u6a19\uff0c\u800c\u4e0d\u7528\u624b\u52d5\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"ptr"),"\u6307\u6a19\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"inline uint8_t* TouchGFXGeneratedHAL::advanceFrameBufferToRect(uint8_t* fbPtr, const touchgfx::Rect& rect) const\n{\n    //       Advance vertically                   Advance horizontally\n    fbPtr += rect.y * lcd().framebufferStride() + rect.x * 2;\n    return fbPtr;\n}\n")),(0,r.kt)("h3",l({},{id:"fmc"}),"FMC"),(0,r.kt)("p",null,"TouchGFX Generator\u4e5f\u652f\u63f4FMC\u986f\u793a\u4ecb\u9762\uff0c\u5982\u679c\u81f3\u5c11\u4e00\u500bFMC Bank\u914d\u7f6e\u6b63\u78ba\u3002 \u672c\u4f8b\u4e2d\uff0cTouchGFX Generator\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u8207",(0,r.kt)("em",{parentName:"p"},"\u81ea\u8a02"),"\u986f\u793a\u4ecb\u9762\u7684\u7a0b\u5f0f\u78bc\u985e\u4f3c\uff0c\u9664\u4e86\u751f\u6210\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"LCD_IO_WriteMultipleData"),"\u51fd\u6578\uff0c\u8207\u9023\u63a5\u5230\u986f\u793a\u5668\u4e0a\u7684FMC\u5b58\u5132\u584a\u9032\u884c\u4ea4\u4e92\u3002 \u91cd\u65b0\u67e5\u770b\u524d\u9762\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"copyFrameBufferBlockToLCD"),"\u51fd\u6578\u63d0\u4f9b\u7684\u7a0b\u5f0f\u78bc\uff0c\u60a8\u5c07\u770b\u5230\u5b83\u4f7f\u7528\u4e86\u751f\u6210\u7684\u51fd\u6578\u3002"),(0,r.kt)(c.Z,{mdxType:"Tip"},"\u5c0d\u65bcSPI\u548cFMC\u986f\u793a\u4ecb\u9762\uff0c\u958b\u767c\u4eba\u54e1\u5c07\u4fee\u6539flushFrameBuffer() \u51fd\u6578\u70ba\uff1a1) \u8a2d\u7f6e\u6e38\u6a19 2) \u6e96\u5099\u5beb\u5165GRAM 3) \u901a\u904e\u81ea\u8a02SPI\u986f\u793a\u9a45\u52d5\u6216\u901a\u904e\u751f\u6210\u7684FMC Bank\u51fd\u6578\u50b3\u8f38\u50cf\u7d20\u3002 "),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-c"}),"    __weak void LCD_IO_WriteMultipleData(uint16_t* pData, uint32_t Size)\n    {\n        uint32_t  i;\n\n        for (i = 0; i < Size; i++)\n        {\n            FMC_BANK1_WriteData(pData[i]);\n        }\n    }\n")),(0,r.kt)("p",null,"\u4e0b\u5716\u986f\u793a\u4e86\u4e00\u500b\u6709\u6548\u768416\u4f4d\uff08\u5fc5\u9700\u7684\uff09FMC\u5b58\u5132\u584a2\u7684\u914d\u7f6e\uff08\u5169\u8005\u90fd\u53ef\u4ee5\u4f7f\u7528\uff09\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.webp",width:"600",noShadow:!1,mdxType:"Figure"},"FMC Bank\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e00\u65e6\u5be6\u73fe\u4e86\u6709\u6548\u914d\u7f6e\uff0c\u53ef\u4ee5\u5728TouchGFX Generator\u4e2d\u9078\u64c7\u8a72\u5b58\u5132\u584a\u3002 \u9a57\u8b49\u60a8\u7684MCU\u7684FMC\u5b58\u5132\u584a\u66ab\u5b58\u5668\u7684\u8d77\u59cb\u4f4d\u5740\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.webp",width:"500",noShadow:!1,mdxType:"Figure"},"FMC\u4ecb\u9762\u9078\u64c7"),(0,r.kt)("p",null,"TouchGFX Generator\u9a57\u8b49FMC\u5b58\u5132\u584a\u7684\u914d\u7f6e\uff0c\u4e26\u5831\u544a\u5b83\u53ef\u80fd\u767c\u73fe\u7684\u4efb\u4f55\u554f\u984c\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.webp",noShadow:!1,mdxType:"Figure"},"FMC Configuration\u932f\u8aa4"),(0,r.kt)("h2",l({},{id:"returning-from-halflushframebuffer"}),"\u5f9eHAL::flushFrameBuffer\uff08\uff09\u56de\u50b3"),(0,r.kt)("p",null,"\u5728\u51fd\u6578\u8fd4\u56de\u5f8c\uff0cTouchGFXEngine\u7e7c\u7e8c\u7e6a\u88fd\u5269\u9918\u7684\u5167\u5bb9\u3002 \u5982\u679c\u958b\u767c\u4eba\u54e1\u5e0c\u671b\u4f7f\u7528DMA\u5c07\u50cf\u7d20\u50b3\u8f38\u5230\u986f\u793a\u5668\uff0c\u4ed6\u5011\u5fc5\u9808\u900f\u904e\u7b49\u5f85",(0,r.kt)("em",{parentName:"p"},"DMA\u5b8c\u6210"),"\u4e2d\u65b7\u6240\u767c\u51fa\u7684semaphore\u8a0a\u865f\u4f86\u78ba\u4fdd",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)"),"\u4e0d\u6703\u7acb\u5373\u50b3\u56de\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7684\u507d\u7a0b\u5f0f\u7bc4\u4f8b\u793a\u7bc4\u4e86\u5728\u4f7f\u7528DMA\u7684\u60c5\u6cc1\u4e0b\u5982\u4f55\u5efa\u69cb",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer()"),"\u3002 \u6b64\u7a0b\u5f0f\u78bc\u4f7f\u7528\u4e86FreeRTOS\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"screen_frame_buffer_sem"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    uint16_t* fb = HAL::lockFrameBuffer();\n\n    //Prepare display: Set cursor, write to display gram as described previously in this scenario\n\n    //Try to take a display semaphore - Always free at this point\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Set up DMA\n    screenDMAEnable();\n\n    // Wait for the DMA transfer to complete\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Unlock framebuffer and give semaphore back\n    HAL::unlockFrameBuffer();\n    xSemaphoreGive(screen_frame_buffer_sem);\n}\n")),(0,r.kt)(i.Z,{mdxType:"Caution"},"\u7531TouchGFX Generator\u751f\u6210\u7684FMC\u7a0b\u5f0f\u78bc\u4e0d\u4f7f\u7528DMA\u3002"),(0,r.kt)("h2",l({},{id:"touchgfx-driver--tearing-effect-signal"}),"TouchGFX\u9a45\u52d5\u7a0b\u5f0f/\u6495\u88c2\u6548\u679c\u4fe1\u865f"),(0,r.kt)("p",null,"\u5f9e\u4e0a\u9762\u7684TouchGFXGenerator\u914d\u7f6e\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u61c9\u7528\u4e2d\u7684\u300c\u6ef4\u7b54\u8a08\u6642\u6e90\u300d\u4e5f\u88ab\u8a2d\u70ba\u300c\u5ba2\u5236\u300d\uff0c\u5c0d\u65bc\u4e0d\u5167\u7f6eTFT\u63a7\u5236\u5668\u7684MCU\u4f86\u8aaa\uff0c\u9019\u4e5f\u7b97\u662f\u5e38\u898b\u8a2d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5982\u62bd\u8c61\u5c64\u67b6\u69cb\u90e8\u5206\u6240\u8ff0\uff0c\u901a\u5e38\u5728\u767c\u51fa\u986f\u793a\u8a0a\u865f\u6642\uff0c\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync\uff08\uff09"),"\u4f86\u89e3\u9664TouchGFXEngine\u4e3b\u8ff4\u5708\u963b\u585e\u3002"),(0,r.kt)("p",null,"\u5c0d\u6709\u4e32\u5217\u62168080\u986f\u793a\u4ecb\u9762\u7684\u986f\u793a\u5668\uff0c\u5167\u5efa\u986f\u793a\u63a7\u5236\u5668\u901a\u5e38\u6703\u7522\u751f\u4e00\u500b\u9031\u671f\u6027\u6495\u88c2\u6548\u679c\uff08TE\uff09\u4fe1\u865f\uff0c\u8a72\u8a0a\u865f\u53ef\u4ee5\u9023\u63a5\u5230MCU\u4e0a\u7684GPIO\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u901a\u5e38\u5c07MCU\u914d\u7f6e\u70ba\u7576GPIO\u6536\u5230\u8a72\u4fe1\u865f\u6642\u89f8\u767c\u4e2d\u65b7\u3002 \u7136\u5f8c\uff0c\u8a72\u300c\u6495\u88c2\u6548\u679c\u300d\u4e2d\u65b7\u5c07\u89e3\u9664\u5c0dTouchGFXEngine\u4e3b\u5faa\u74b0\u7684\u963b\u585e\uff0c\u4ee5\u4fbf\u6e32\u67d3\u4e0b\u4e00\u5e40\u3002 \u8acb\u8a18\u4f4f\u5c07GPIO\u914d\u7f6e\u70ba\u8f38\u5165\uff0c\u4e26\u5728STM32CubeMX\u4e2d\u4f7f\u80fd\u8a72\u8173\u7684\u5916\u90e8\u4e2d\u65b7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),'extern "C"\nvoid TE_Handler(void)\n{\n    ...\n    /* Unblock TouchGFX Engine Main Loop to render next frame */\n    OSWrappers::signalVSync();\n    ...\n}\n\n')),(0,r.kt)("h2",l({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,r.kt)("p",null,"\u958b\u767c\u4eba\u54e1\u53ef\u4ee5\u900f\u904eTouchGFXGenerator\u9078\u64c7",(0,r.kt)("em",{parentName:"p"},"\u5ba2\u88fd\u5316"),"\u986f\u793a\u4ecb\u9762\uff0c\u4e26\u81ea\u884c\u7de8\u5beb\u7a0b\u5f0f\u78bc\u5be6\u73fe\u5c07\u50cf\u7d20\u5f9e\u61c9\u7528\u7a0b\u5f0f\u7684\u5f71\u50cf\u7de9\u885d\u5340\u50b3\u8f38\u5230\u986f\u793a\u5668\u4e4b\u76ee\u7684\u3002"),(0,r.kt)("p",null,"TouchGFXGenerator\u5c07\u7522\u751ffunction",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::flushFrameBuffer\uff08Rect& rect\uff09"),"\u51fd\u6578\uff0c\u7576\u6e32\u67d3\u5b8c\u6210\u5f71\u50cf\u7de9\u885d\u5340\u7684\u4e00\u584a\u5340\u57df\u5f8c\uff0cTouchGFX\u6703\u81ea\u52d5\u547c\u53eb\u8a72\u51fd\u6578\uff0c\u540c\u6642\uff0c\u958b\u767c\u4eba\u54e1\u5c07\u66f4\u65b0\u904e\u7684\u5f71\u50cf\u7de9\u885d\u5340\u8cc7\u6599\u900f\u904eFMC\u3001SPI\u6216\u5176\u4ed6\u9014\u5f91\u50b3\u9001\u5230\u986f\u793a\u5668\u3002 \u7121\u8ad6\u5982\u4f55\uff0c\u5728\u9019\u5169\u7a2e\u60c5\u6cc1\u4e0b\u90fd\u5fc5\u9808\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9a5f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u64da\u8981\u91cd\u7e6a\u7684\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u5c07\u300c\u986f\u793a\u6e38\u6a19\u300d\u548c\u300c\u6d3b\u52d5\u8996\u7a97\u300d\u79fb\u52d5\u5230GRAM\u4e2d\u8207\u6b64\u5340\u57df\u5c0d\u61c9\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6e96\u5099\u5c07\u50b3\u5165\u7684\u50cf\u7d20\u8cc7\u6599\u5beb\u5165GRAM\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u50b3\u9001\u50cf\u7d20\u8cc7\u6599\u3002 \u5982\u679c\u662fFMC\u986f\u793a\u4ecb\u9762\uff0c\u8a72\u51fd\u6578\u5c31\u662f\u70ba\u60a8\u751f\u6210\u7684\uff0c\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"flushFrameBuffer\uff08rect & rect\uff09"),"\u4e2d\u4f7f\u7528\uff08(\u53c3\u898b\u672c\u6587\u524d\u9762\u7684\u5167\u5bb9\uff09\u3002")),(0,r.kt)("p",null,"\u9078\u64c7",(0,r.kt)("em",{parentName:"p"},"\u5ba2\u88fd\u5316"),"\u6216",(0,r.kt)("em",{parentName:"p"},"FMC"),"\u986f\u793a\u4ecb\u9762\u4e5f\u9700\u8981\u958b\u767c\u4eba\u54e1\u5be6\u73fe\u5ba2\u88fd\u7684TouchGFX\u6ef4\u7b54\u8a08\u6642\u9a45\u52d5\uff0c\u8a72\u9a45\u52d5\u7a0b\u5f0f\u767c\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync\uff08\uff09"),"\u4fe1\u865f\uff0c\u4ee5\u89e3\u9664\u5c0dTouchGFXEngine\u4e3b\u8ff4\u5708\u7684\u963b\u585e\u3002 \u901a\u5e38\uff0c\u8207\u4e0d\u5e36TFT\u63a7\u5236\u5668\u7684MCU\u4e00\u8d77\u4f7f\u7528\u7684\u986f\u793a\u5668\u6703\u63d0\u4f9b\u9023\u63a5\u81f3MCU\u7684",(0,r.kt)("em",{parentName:"p"},"\u6495\u88c2\u6548\u679c"),"\u4fe1\u865f\u3002"))}v.isMDXComponent=!0}}]);