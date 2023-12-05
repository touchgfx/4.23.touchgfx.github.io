"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[85457],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61235:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const a=o},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),o=n(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const l=i},89588:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},91463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>E,frontMatter:()=>u,metadata:()=>d,toc:()=>h});n(59496);var r=n(49613),o=n(12822),a=n(86222),i=n(61235),l=n(51721);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"scenarios-measure-performance",title:"\uc131\ub2a5 \uce21\uc815"},s=void 0,d={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-measure-performance",id:"development/touchgfx-hal-development/scenarios/scenarios-measure-performance",title:"\uc131\ub2a5 \uce21\uc815",description:'TouchGFX Core\ub294 \uc131\ub2a5\uc744 \uce21\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \uc2e0\ud638\ub97c \ub178\ucd9c\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc774\ub7ec\ud55c \uc2e0\ud638\uac00 \ub0b4\ubd80\uc801\uc73c\ub85c \ud2b8\ub9ac\uac70\ub420 \ub54c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uacc4\uce21\ud558\uc5ec \uac1c\ubcc4 GPIO\ub97c \ud2b8\ub9ac\uac70\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 "\ub80c\ub354\ub9c1 \uc2dc\uac04" \ubc0f \uae30\ud0c0 \uc720\uc6a9\ud55c \uc2e0\ud638\ub97c \uc2dc\uac01\ud654\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 CubeMX\uc5d0\uc11c GPIO\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uacfc \ub178\ucd9c\ub41c \uac01 \uc2e0\ud638\uac00 \uc218\ud589\ud558\ub294 \uc791\uc5c5\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-measure-performance.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-measure-performance",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-measure-performance",title:"\uc131\ub2a5 \uce21\uc815"},sidebar:"docs",previous:{title:"MIPI-DSI Command Mode",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode"},next:{title:"UI \uac1c\ubc1c \uc18c\uac1c",permalink:"/4.23/ko/docs/development/ui-development/ui-development-introduction"}},m={},h=[{value:"TouchGFX Core\uc5d0\uc11c \ub178\ucd9c\ub418\ub294 \uc2e0\ud638",id:"performance-metrics",level:2},{value:"STM32CubeMX GPIO \uad6c\uc131",id:"stm32cubmx-gpio-configuration",level:2},{value:"TouchGFXGPIO \ud074\ub798\uc2a4",id:"touchgfxgpio-class",level:2}],f={toc:h},g="wrapper";function E(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,c({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'TouchGFX Core\ub294 \uc131\ub2a5\uc744 \uce21\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \uc2e0\ud638\ub97c \ub178\ucd9c\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc774\ub7ec\ud55c \uc2e0\ud638\uac00 \ub0b4\ubd80\uc801\uc73c\ub85c \ud2b8\ub9ac\uac70\ub420 \ub54c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uacc4\uce21\ud558\uc5ec \uac1c\ubcc4 GPIO\ub97c \ud2b8\ub9ac\uac70\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 "\ub80c\ub354\ub9c1 \uc2dc\uac04" \ubc0f \uae30\ud0c0 \uc720\uc6a9\ud55c \uc2e0\ud638\ub97c \uc2dc\uac01\ud654\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 CubeMX\uc5d0\uc11c GPIO\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uacfc \ub178\ucd9c\ub41c \uac01 \uc2e0\ud638\uac00 \uc218\ud589\ud558\ub294 \uc791\uc5c5\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4.'),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)(l.Z,{to:"../../../basic-concepts/performance",mdxType:"Link"},"\uae30\ubcf8 \uac1c\ub150: \uc131\ub2a5")),(0,r.kt)("h2",c({},{id:"performance-metrics"}),"TouchGFX Core\uc5d0\uc11c \ub178\ucd9c\ub418\ub294 \uc2e0\ud638"),(0,r.kt)("p",null,"TouchGFX Core \ud5e4\ub354 \ud30c\uc77c ",(0,r.kt)("inlineCode",{parentName:"p"},"GPIO.hpp")," \ub0b4\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc2e0\ud638\ub4e4\uc774 \uc815\uc758\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\uc2e0\ud638"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\ud45c\ud604"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"VSYNC_FREQ"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 LTDC, \uc678\ubd80 \uc8fc\ubcc0 \uc7a5\uce58 \ub610\ub294 \ud558\ub4dc\uc6e8\uc5b4 \ud0c0\uc774\uba38\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc778\ud130\ub7fd\ud2b8 \uac19\uc774 \ub0b4\ubd80 \ub610\ub294 \uc678\ubd80 \uc774\ubca4\ud2b8\uc5d0 \uc758\ud574 \uad6c\ub3d9\ub429\ub2c8\ub2e4. \ub80c\ub354\ub9c1\uc744 \ub9c8\uce5c TouchGFX Engine\uc740 ",(0,r.kt)("inlineCode",{parentName:"td"},"VSYNC")," \uc2e0\ud638\ub97c \uae30\ub2e4\ub9bd\ub2c8\ub2e4. TouchGFX\uac00 \ub2e4\uc74c \ud504\ub808\uc784\uc758 \ub80c\ub354\ub9c1\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \ub514\uc2a4\ud50c\ub808\uc774 \uc5c5\ub370\uc774\ud2b8\uac00 \uc644\ub8cc\ub418\uc5c8\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"RENDER_TIME"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\ud504\ub808\uc784\uc774 TouchGFX\ub85c \uc804\uc1a1\ub41c \uc2dc\uc810\ubd80\ud130 \ub80c\ub354\ub9c1 \ub2e8\uacc4\uac00 \ub05d\ub098\ub294 \uc2dc\uc810\uae4c\uc9c0 \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc785\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"FRAME_RATE"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\uc0ac\uc6a9\uc790 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud504\ub808\uc784 \uc18d\ub3c4\uc785\ub2c8\ub2e4. \ud504\ub808\uc784\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uba74 \uc2e0\ud638\uac00 \ud1a0\uae00\ub429\ub2c8\ub2e4. \ub80c\ub354\ub9c1 \uc2dc\uac04\uc774 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc815\uc758\ud55c \ucd5c\ub300 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc744 \ucd08\uacfc\ud558\uba74 \ud504\ub808\uc784 \uc18d\ub3c4\uac00 \uc800\ud558\ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"MCU_ACTIVE"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\uc774 \uc2e0\ud638\ub294 TouchGFX\uac00 MCU\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub9c8\ub2e4 \ub192\uc544\uc9d1\ub2c8\ub2e4. MCU\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uac00 \uc804\uc1a1\ub420 \ub54c, \uadf8\ub9ac\uace0 TouchGFX\uac00 \uc720\ud734 \uc0c1\ud0dc\uc5d0 \uc788\uc9c0 \uc54a\uace0 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ub54c \ud65c\uc131\ud654\ub429\ub2c8\ub2e4.")))),(0,r.kt)("h2",c({},{id:"stm32cubmx-gpio-configuration"}),"STM32CubeMX GPIO \uad6c\uc131"),(0,r.kt)("p",null,"STM32CubeMX\ub97c \uc0ac\uc6a9\ud574 GPIO \ucd9c\ub825 \ud540\uc744 \uc190\uc27d\uac8c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \ud540\uc5d0 ",(0,r.kt)("i",null,"\uc0ac\uc6a9\uc790 \ub808\uc774\ube14"),"\uc744 \uc9c0\uc815\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO.cpp"),"\uc758 TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\uac00 TouchGFX Core\uc5d0\uc11c \ub0b4\ubd80\uc801\uc73c\ub85c \uc2e0\ud638\uac00 \uc218\uc2e0\ub420 \ub54c \ud1a0\uae00\ud574\uc57c \ud560 \ud540\uc744 \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("i",null,"Pinout")," \ubcf4\uae30\uc5d0\uc11c 4\uac1c\uc758 \ubbf8\uc0ac\uc6a9 GPIO\ub97c \ucd9c\ub825\uc73c\ub85c \uad6c\uc131\ud569\ub2c8\ub2e4. ",(0,r.kt)("i",null,"STM32CubeMX GPIO IP"),"\ub294 GPIO\ub97c \ud1b5\ud574 \ud2b8\ub9ac\uac70\ub418\uc5b4\uc57c \ud558\ub294 TouchGFX Core\uc5d0\uc11c \uc815\uc758\ud55c \ud2b9\uc815 \uc774\ub984\uacfc \uc77c\uce58\ud558\ub294 \ub808\uc774\ube14\uc5d0 \uac01 \ud540\uc5d0 \ub300\ud55c `User Label`\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4(\uc608: `VSYNC_FREQ`, `RENDER_TIME`, `FRAME_RATE` \ub610\ub294 `MCU_ACTIVE`). ).",(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/performance-measure-gpio-config.webp",mdxType:"Figure"}),(0,r.kt)("h2",c({},{id:"touchgfxgpio-class"}),"TouchGFXGPIO \ud074\ub798\uc2a4"),(0,r.kt)("p",null,"TouchGFX Generator\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO.cpp")," \ud30c\uc77c\uc758 GPIO \ud074\ub798\uc2a4\ub97c \uc704\ud55c \ud568\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. TouchGFX Core\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGPIO")," \ud074\ub798\uc2a4\uc5d0\uc11c \ud568\uc218\ub97c \ud638\ucd9c\ud55c \ub2e4\uc74c, STM32CubeMX\uc758 \uc0ac\uc6a9\uc790 \uad6c\uc131\uc5d0 \ub530\ub77c \ud540\uc744 \ud1a0\uae00\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"GPIO::set"),"\uc774 \uc544\ub798 \uc2a4\ub2c8\ud3ab\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXGPIO.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"void GPIO::set(GPIO_ID id)\n{\n    switch (id)\n    {\n    case GPIO::VSYNC_FREQ:\n#if defined(VSYNC_FREQ_GPIO_Port) && defined(VSYNC_FREQ_Pin)\n        HAL_GPIO_WritePin(VSYNC_FREQ_GPIO_Port, VSYNC_FREQ_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::RENDER_TIME:\n#if defined(RENDER_TIME_GPIO_Port) && defined(RENDER_TIME_Pin)\n        HAL_GPIO_WritePin(RENDER_TIME_GPIO_Port, RENDER_TIME_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::FRAME_RATE:\n#if defined(FRAME_RATE_GPIO_Port) && defined(FRAME_RATE_Pin)\n        HAL_GPIO_WritePin(FRAME_RATE_GPIO_Port, FRAME_RATE_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    case GPIO::MCU_ACTIVE:\n#if defined(MCU_ACTIVE_GPIO_Port) && defined(MCU_ACTIVE_Pin)\n        HAL_GPIO_WritePin(MCU_ACTIVE_GPIO_Port, MCU_ACTIVE_Pin, GPIO_PIN_SET);\n#endif\n        break;\n    }\n}\n")),(0,r.kt)("p",null,"\ud540\uc5d0 \uc0ac\uc6a9\uc790 \ub808\uc774\ube14 ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ"),"\uc774 \uc9c0\uc815\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0, CubeMX\ub294 \ud3ec\ud2b8 \ubc0f \ud540\uacfc \uc77c\uce58\ud558\ub294 \uae30\ud638\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4(\uc608: ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ_GPIO_Port"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC_FREQ_Pin"),"). \uad6c\uc131\ub41c \uc2e0\ud638\ub97c \uce21\uc815\ud558\ub824\uba74 \uc624\uc2e4\ub85c\uc2a4\ucf54\ud504 \ub610\ub294 \ub85c\uc9c1 \ubd84\uc11d\uae30\ub97c \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc624. \uc544\ub798 \uc774\ubbf8\uc9c0\ub294 4\uac1c \uc2e0\ud638 \uac01\uac01\uc744 \ud45c\uc2dc\ud558\ub294 \ub85c\uc9c1 \ubd84\uc11d\uae30\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc560\ub2c8\uba54\uc774\uc158\ud654\ub41c \uc774\ubbf8\uc9c0 UI \uc608\uc81c\uc640 \ud568\uaed8 STM32F746G-DISCO\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC")," \uc2e0\ud638\uac00 LTDC\uc5d0\uc11c 16ms\ub9c8\ub2e4 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/performance-measurement-example.webp",mdxType:"Figure"}))}E.isMDXComponent=!0}}]);