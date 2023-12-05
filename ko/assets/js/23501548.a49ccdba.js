"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[36547],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86473:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(89588);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const a=l},12822:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),i=n(32118);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},89588:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=i},40465:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const o=i},66590:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class i extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const o=i},71678:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(89588);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const a=l},61777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>g,toc:()=>T});n(59496);var r=n(49613),i=n(12822),o=n(66590),l=n(51721),a=n(71678),c=n(86473),s=n(40465);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"installation",title:"Installation"},d=void 0,g={unversionedId:"introduction/installation",id:"introduction/installation",title:"Installation",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\ub294 \ub370 \ud544\uc694\ud55c \ud234\uccb4\uc778\uc758 \ubaa8\ub4e0 \ud544\uc218 \uad6c\uc131 \uc694\uc18c\uc640 TouchGFX\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/4.23/ko/docs/introduction/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"\ud544\uc218 \uc870\uac74",permalink:"/4.23/ko/docs/introduction/prerequisites"},next:{title:"Getting Started",permalink:"/4.23/ko/docs/introduction/getting-started"}},h={},T=[{value:"STM32CubeMX \uc124\uce58",id:"installing-stm32cubemx",level:2},{value:"X-CUBE-TOUCHFX \ub2e4\uc6b4\ub85c\ub4dc",id:"installing-xcube-touchgfx",level:2},{value:"STM32CubeMX \uc0ac\uc6a9",id:"using-stm32cubemx",level:3},{value:"\uc9c1\uc811 \ub2e4\uc6b4\ub85c\ub4dc",id:"direct-download",level:3},{value:"TouchGFX Designer \uc124\uce58",id:"installing-touchgfx-designer",level:2},{value:"STM32CubeProgrammer \uc124\uce58",id:"installing-stm32cubeprogrammer",level:2},{value:"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0 \uc124\uce58",id:"installing-stm32-st-link-utility",level:2}],b={toc:T},f="wrapper";function k(e){var{components:t}=e,n=m(e,["components"]);return(0,r.kt)(f,u({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\ub294 \ub370 \ud544\uc694\ud55c \ud234\uccb4\uc778\uc758 \ubaa8\ub4e0 \ud544\uc218 \uad6c\uc131 \uc694\uc18c\uc640 TouchGFX\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("h2",u({},{id:"installing-stm32cubemx"}),"STM32CubeMX \uc124\uce58"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"STM32CubeMX \uc704\uce58"),"\uc5d0\uc11c STM32CubeMX\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud55c \ud6c4\uc5d0 \ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," \ud30c\uc77c\uc758 \uc555\ucd95\uc744 \ud480\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," \uc124\uce58 \ud504\ub85c\uadf8\ub7a8 \ud30c\uc77c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc9c0\uce68\uc5d0 \ub530\ub77c \uc124\uce58 \ud504\ub85c\uc138\uc2a4\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/stm32cubemx-installer.webp",mdxType:"Figure"},"STM32CubeMX \uc124\uce58"),(0,r.kt)("h2",u({},{id:"installing-xcube-touchgfx"}),"X-CUBE-TOUCHFX \ub2e4\uc6b4\ub85c\ub4dc"),(0,r.kt)("p",null,"\uc774\uc804 \ubb38\uc11c\uc5d0\uc11c \uc5b8\uae09\ud588\ub4ef\uc774, TouchGFX\ub294 X-CUBE-TOUCHGFX\ub77c\ub294 X-CUBE \ud328\ud0a4\uc9c0\uc5d0 \ubc88\ub4e4\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4. STM32CubeMX\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774 \ud328\ud0a4\uc9c0\ub97c \uac00\uc7a5 \uc27d\uac8c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc124\uce58\ud560 \uc218 \uc788\uc9c0\ub9cc, ST \uc0ac\uc774\ud2b8\uc5d0\uc11c \uc9c1\uc811 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",u({},{id:"using-stm32cubemx"}),"STM32CubeMX \uc0ac\uc6a9"),(0,r.kt)("p",null,'STM32CubeMX\ub97c \ud1b5\ud574 X-CUBE-TOUCHGFX\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub824\uba74 "Help" \uc544\ub798\uc758 "Manage Embedded Software Packages"\ub97c \uc120\ud0dd\ud558\ub294 \uac83\ubd80\ud130 \uc2dc\uc791\ud558\uc2ed\uc2dc\uc624. ',(0,r.kt)(o.Z,{mdxType:"Shortcut"},"(\uc544\ub2c8\uba74 Alt + U\ub97c \ub204\ub974\uc2ed\uc2dc\uc624)"),")."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/manage-packages.webp",mdxType:"Figure"},"Help -> Manage embedded software packages"),(0,r.kt)("p",null,"\uac00\uc6a9 \ud328\ud0a4\uc9c0\uc758 \ucd5c\uc2e0 \ubaa9\ub85d\uc744 \ubcf4\ub824\uba74 'Refresh'\ub97c \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/refresh.webp",mdxType:"Figure"},"Refresh\ub97c \ud1b5\ud574 \uac00\uc6a9 \ud328\ud0a4\uc9c0 \uc5c5\ub370\uc774\ud2b8"),(0,r.kt)("p",null,'"STMicroelectronics" \ud0ed\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \ud654\uba74\uc744 \uc2a4\ud06c\ub864\ud558\uc5ec \'X-CUBE-TOUCHGFX\'\ub97c \ucc3e\uc740 \ub2e4\uc74c \ub178\ub4dc\ub97c \ud655\uc7a5\ud569\ub2c8\ub2e4. "TouchGFX Generator"\uc758 \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud558\uace0 "Install Now"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc774\uc81c \ud328\ud0a4\uc9c0\uac00 \ub2e4\uc6b4\ub85c\ub4dc\ub418\uace0 \ub77c\uc774\uc120\uc2a4 \uacc4\uc57d\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/install-now.webp",mdxType:"Figure"},"TouchGFX Generator \ud328\ud0a4\uc9c0 \ucc3e\uae30"),(0,r.kt)("p",null,'\ub77c\uc774\uc120\uc2a4 \uacc4\uc57d\uc744 \uc77d\uace0 \ub3d9\uc758\ud55c \ud6c4 "Finish"\ub97c \ud074\ub9ad\ud574\uc11c STM32CubeMX \ub0b4\ubd80\uc5d0 TouchGFX Generator\ub97c \uc124\uce58\ud558\uc2ed\uc2dc\uc624.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/license-agreement.webp",mdxType:"Figure"},"\ub77c\uc774\uc120\uc2a4 \uacc4\uc57d \uc218\ub77d"),(0,r.kt)("p",null,"X-CUBE-TOUCHGFX \ubc30\ud3ec\ud310\uc740 \uc544\ub798 \uacbd\ub85c\ub85c \uc555\ucd95\uc774 \ud574\uc81c\ub429\ub2c8\ub2e4.\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/package-location.webp",mdxType:"Figure"},"X-CUBE-TOUCHGFX \ud328\ud0a4\uc9c0\uc758 \uc704\uce58"),(0,r.kt)("h3",u({},{id:"direct-download"}),"\uc9c1\uc811 \ub2e4\uc6b4\ub85c\ub4dc"),(0,r.kt)("p",null,"STM32CubeMX\ub97c \uc124\uce58\ud560 \ud544\uc694 \uc5c6\uc774 \uac04\ub2e8\ud788 TouchGFX Designer\ub97c \uc0ac\uc6a9\ud574 \ubcf4\uace0, STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc758 \uae30\uc874 \uc608\uc81c GUI \uc911 \uba87 \uac00\uc9c0\ub97c \uc2dc\ud5d8\ud574 \ubcf4\ub824\uba74 ",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html"}),"ST.com \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8"),"\uc5d0\uc11c \uc9c1\uc811 X-CUBE-TOUCHGFX\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc5ec \ud558\ub4dc \ub4dc\ub77c\uc774\ube0c\uc758 \uc544\ubb34 \uacf3\uc5d0\ub098 \uc555\ucd95\uc744 \ud480\uac70\ub098, \uc774\ub97c \ucd94\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/get-software.webp",mdxType:"Figure"},"St.com\uc5d0\uc11c X-CUBE-TOUCHGFX \ub2e4\uc6b4\ub85c\ub4dc"),(0,r.kt)("h2",u({},{id:"installing-touchgfx-designer"}),"TouchGFX Designer \uc124\uce58"),(0,r.kt)("p",null,"\uc555\ucd95\uc744 \ud480\uac70\ub098 \ucd94\ucd9c\ud55c X-CUBE-TOUCHGFX \ubc30\ud3ec\ud310\uc758 \uacbd\uc6b0, \ub2e4\uc74c \uacbd\ub85c\uc5d0 TouchGFX .msi \uc124\uce58 \ud504\ub85c\uadf8\ub7a8\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,r.kt)("p",null,".msi \ud30c\uc77c\uc744 \ub354\ube14 \ud074\ub9ad\ud558\uba74 \uc124\uce58 \ud504\ub85c\uadf8\ub7a8\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4. \uc9c0\uce68\uc5d0 \ub530\ub77c \uc124\uce58 \ud504\ub85c\uc138\uc2a4\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/designer-installation.webp",mdxType:"Figure"},"TouchGFX Designer \uc124\uce58"),(0,r.kt)(a.Z,{mdxType:"Tip"},"TouchGFX Designer \ub0b4\uc5d0\uc11c \uc9c1\uc811 \ubcf4\ub4dc\ub97c \ud50c\ub798\uc2f1\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ub3c4\uad6c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0")))),(0,r.kt)("h2",u({},{id:"installing-stm32cubeprogrammer"}),"STM32CubeProgrammer \uc124\uce58"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer download location"),"\uc5d0\uc11c STM32CubeProgrammer\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud55c \ud6c4, \ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," \ud30c\uc77c\uc758 \uc555\ucd95\uc744 \ud574\uc81c\ud558\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," \uc124\uce58 \ud504\ub85c\uadf8\ub7a8 \ud30c\uc77c\uc744 \uc2e4\ud589\ud558\uc2ed\uc2dc\uc624. \uc9c0\uce68\uc5d0 \ub530\ub77c \uc124\uce58 \ud504\ub85c\uc138\uc2a4\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.webp",mdxType:"Figure"},"TouchGFX Designer \uc124\uce58"),(0,r.kt)(c.Z,{mdxType:"Caution"},"TouchGFX Designer\uc640 Makefiles\uc5d0\uc11c \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\ub97c \ud50c\ub798\uc2f1\ud558\uae30 \uc704\ud574 STM32CubeProgrammer\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubc18\ub4dc\uc2dc \uae30\ubcf8 \uc124\uce58 \uc704\uce58\uc5d0 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.\xa0 ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,r.kt)("h2",u({},{id:"installing-stm32-st-link-utility"}),"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0 \uc124\uce58"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0 \uc704\uce58"),"\uc5d0\uc11c STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud55c \ud6c4, \ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," \ud30c\uc77c\uc744 \uc5f4\uc5b4\uc11c \uc9c0\uce68\uc5d0 \ub530\ub77c \uc124\uce58 \ud504\ub85c\uc138\uc2a4\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.webp",mdxType:"Figure"},"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0 \uc124\uce58"),(0,r.kt)(c.Z,{mdxType:"Caution"},"TouchGFX Designer\uc640 Makefiles\uc5d0\uc11c \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\ub97c \ud50c\ub798\uc2f1\ud558\uae30 \uc704\ud574 STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubc18\ub4dc\uc2dc \uae30\ubcf8 \uc124\uce58 \uc704\uce58\uc5d0 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")))}k.isMDXComponent=!0}}]);