"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[15855],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96151:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const o=l},49018:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),l=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const i=a},13595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>d});r(59496);var n=r(49613),l=r(49018),o=r(95375);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const p={id:"11-flash-loader",title:"11. Flash Loader",sidebar_label:"11. Flash Loader"},c=void 0,u={unversionedId:"development/board-bring-up/how-to/11-flash-loader",id:"development/board-bring-up/how-to/11-flash-loader",title:"11. Flash Loader",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/11-flash-loader.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/11-flash-loader",permalink:"/4.23/ko/docs/development/board-bring-up/how-to/11-flash-loader",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"11-flash-loader",title:"11. Flash Loader",sidebar_label:"11. Flash Loader"},sidebar:"docs",previous:{title:"10. Physical Buttons",permalink:"/4.23/ko/docs/development/board-bring-up/how-to/10-physical-buttons"},next:{title:"TouchGFX AL Development Introduction",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"}},s={},d=[{value:"\uac1c\uc694",id:"motivation",level:2},{value:"\ubaa9\ud45c",id:"goal",level:2},{value:"\ud655\uc778",id:"verification",level:3},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",level:2},{value:"\uc2e4\ud589",id:"do",level:2},{value:"STM32CubeProgrammer\ub97c \uc704\ud55c \ud50c\ub798\uc2dc \ub85c\ub354",id:"flash-loader-for-stm32cubeprogrammer",level:3},{value:"\uc804\uc6a9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ubc18 \uc194\ub8e8\uc158",id:"proprietary-application-based-solution",level:3},{value:"\ud14c\uc2a4\ud2b8",id:"testing",level:3}],m={toc:d},h="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(h,a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"motivation"}),"\uac1c\uc694"),(0,n.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 \uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \ub85c\ub529\ud558\ub294 \uac83\uc744 \ub2e4\ub8f9\ub2c8\ub2e4. \ucef4\ud30c\uc77c\ub7ec\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \ud14d\uc2a4\ud2b8, \ud3f0\ud2b8 \ubc0f \uc774\ubbf8\uc9c0\ub97c \ucef4\ud30c\uc77c\ud558\uace0 \uc774\ub7ec\ud55c \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud574 binary \ub610\ub294 hex \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \ub370\uc774\ud130\ub294 \ubcf4\ud1b5 \uc678\ubd80 \ud50c\ub798\uc2dc\ub85c \ub85c\ub4dc\ub429\ub2c8\ub2e4. \ud55c\ud3b8 \ub0b4\ubd80 \ud50c\ub798\uc2dc\ub294 \ucf54\ub4dc\uc6a9\uc73c\ub85c \uc608\uc57d\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c\ub294 \uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \ud544\uc694\ud558\uc9c0\ub9cc, \ud50c\ub798\uc2dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc624\uae30\ub9cc \ud558\ub294 \ub7f0\ud0c0\uc784 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uac83\uc774 \uc544\ub2d9\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c\ub294 \uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \ud544\uc694\ud558\uc9c0\ub9cc, \ud50c\ub798\uc2dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc624\uae30\ub9cc \ud558\ub294 \ub7f0\ud0c0\uc784 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uac83\uc774 \uc544\ub2d9\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"STM32CubeProgrammer\ub97c \uc704\ud55c \ud50c\ub798\uc2dc \ub85c\ub354 \uc791\uc131"),(0,n.kt)("li",{parentName:"ul"},"\uc804\uc6a9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ubc18\uc758 \uc194\ub8e8\uc158 \uc0ac\uc6a9")),(0,n.kt)(l.Z,{mdxType:"Note"},"\uc678\ubd80 \ud50c\ub798\uc2dc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub701\ub2c8\ub2e4."),(0,n.kt)("h2",a({},{id:"goal"}),"\ubaa9\ud45c"),(0,n.kt)("p",null,"\uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud558\ub294 \ub370\ub294 \ub2e4\uc74c\uc758 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc8fc\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4:"),(0,n.kt)("h3",a({},{id:"verification"}),"\ud655\uc778"),(0,n.kt)("p",null,"\uc774 \uc139\uc158\uc758 \ubaa9\ud45c\ub294 \uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \ub85c\ub4dc\ud558\uae30 \uc704\ud55c \uba54\ucee4\ub2c8\uc998\uc744 \uc120\ud0dd \ubc0f \uac1c\ubc1c\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\ub370\uc774\ud130\uc758 \ud50c\ub798\uc2f1 \uac00\ub2a5 \uc5ec\ubd80"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\uc678\ubd80 \ud50c\ub798\uc2dc\ub97c \uc774\ubbf8\uc9c0 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80")))),(0,n.kt)("h2",a({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud50c\ub798\uc2dc \uc815\ubcf4(\uc77c\ubc18\uc801\uc73c\ub85c \uc81c\uc870\uc0ac \ub370\uc774\ud130 \uc2dc\ud2b8\uc758 \uc815\ubcf4)"),(0,n.kt)("li",{parentName:"ul"},"MCU\uc640 \uc678\ubd80 \ud50c\ub798\uc2dc \uac04 \uc5f0\uacb0 \uc815\ubcf4")),(0,n.kt)("h2",a({},{id:"do"}),"\uc2e4\ud589"),(0,n.kt)("h3",a({},{id:"flash-loader-for-stm32cubeprogrammer"}),"STM32CubeProgrammer\ub97c \uc704\ud55c \ud50c\ub798\uc2dc \ub85c\ub354"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer"),"\uc5d0\ub294 \ub2e4\uc591\ud55c STM32 \ud3c9\uac00 \ud0a4\ud2b8\ub97c \uc704\ud55c \ud50c\ub798\uc2dc \ub85c\ub354\uac00 \ud568\uaed8 \uc81c\uacf5\ub429\ub2c8\ub2e4. \ud50c\ub798\uc2dc \ub85c\ub354\ub780, MCU\uc758 RAM\uc5d0 \ub85c\ub4dc\ub418\uc5b4 \ud50c\ub798\uc2dc\uc758 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uac00\ub2a5\ud558\uac8c \ud558\ub294 \uc18c\uaddc\ubaa8 \ud504\ub85c\uadf8\ub7a8\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud50c\ub798\uc2dc \ub85c\ub354\ub294 2\uac1c \ud30c\ud2b8\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud50c\ub798\uc2dc\ub85c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\ud558\ub294 \ub370 \ud544\uc694\ud55c GPIO \ubc0f \ud50c\ub798\uc2dc \uc778\ud130\ud398\uc774\uc2a4 \uad6c\uc131"),(0,n.kt)("li",{parentName:"ul"},"\ud50c\ub798\uc2dc\uc5d0\uc11c \uc785\ub825\ud558\ub294 \ub370 \ud544\uc694\ud55c \uba85\ub839\uc5b4 \uc2dc\ud000\uc2a4\ub97c \uc778\uc2dd\ud558\ub294 \ud50c\ub798\uc2dc \uc54c\uace0\ub9ac\uc998")),(0,n.kt)("p",null,"\uc774 \ubd80\ubd84\uc740 \uae30\uc874 \ud50c\ub798\uc2dc \ub85c\ub354\ub97c \ud1a0\ub300\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9 \uc911\uc778 \ud50c\ub798\uc2dc\uc5d0 \ub300\ud55c \ud50c\ub798\uc2dc \ub85c\ub354\ub97c \ucc3e\uc744 \uc218 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc774\uac83\uc744 \uc2dc\uc791\uc810\uc73c\ub85c \ud574\uc11c GPIO \ubd80\ubd84\uc744 \uc218\uc815\ud558\uc2ed\uc2dc\uc624. \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c \ud50c\ub798\uc2dc \ud68c\ub85c\ub97c \ubcf5\uc0ac\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \ud558\ub4dc\uc6e8\uc5b4\ub97c \uc124\uacc4\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \ud0a4\ud2b8\uc5d0 \ub300\ud55c \ud50c\ub798\uc2dc \ub85c\ub354\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ubc29\ubc95\uc740 \uc774\ub807\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"STM32CubeProgrammer"),"\ub97c \ud1b5\ud574 \uc81c\uacf5\ub418\ub294 \ud50c\ub798\uc2dc \ub85c\ub354 \ud504\ub85c\uc81d\ud2b8\ub294 \uc124\uce58 \ud3f4\ub354",(0,n.kt)("em",{parentName:"p"},"(\ubcf4\ud1b5\xa0C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer\\bin\\ExternalLoader)"),"\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud50c\ub798\uc2dc \ub85c\ub354 \ud504\ub85c\uc81d\ud2b8\ub294GitHub\uc5d0\uc11c\ub3c4 \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(o.Z,{to:"https://github.com/STMicroelectronics/stm32-external-loader",mdxType:"Link"},"GitHub\uc758 STM32 \uc678\ubd80 \ud50c\ub798\uc2dc\ub85c\ub354"),(0,n.kt)("h3",a({},{id:"proprietary-application-based-solution"}),"\uc804\uc6a9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ubc18 \uc194\ub8e8\uc158"),(0,n.kt)("p",null,"\ub610 \ub2e4\ub978 \ud574\uacb0\ucc45\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc790\uccb4\uc5d0 \ud50c\ub798\uc2dc \ub85c\ub529\uc744 \ud3ec\ud568\uc2dc\ud0a4\ub294 \uac83\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc790\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub0b4\uc5d0 \ud50c\ub798\uc2dc \uad6c\uc131\uc744 \uc774\ubbf8 \uac00\uc9c0\uace0 \uc788\uace0(\uc5ec\uae30\uc5d0\uc11c \ub85c\ub4dc\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d), \uc774\uc804 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \ud50c\ub798\uc2dc\uc5d0 \ube14\ub85d\uc744 \uae30\ub85d\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uace0 \uc788\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \ud50c\ub798\uc2dc \ub370\uc774\ud130\ub97c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\ub9cc \uc54c\uba74 \ub429\ub2c8\ub2e4. \ud55c \uac00\uc9c0 \ubc29\ubc95\uc740 UART\ub97c \uc774\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ub370\uc774\ud130 \uc2a4\ud2b8\ub9bc\uc744 \uc218\uc2e0\ud558\uace0 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \ube14\ub85d \ub2e8\uc704\ub85c \uae30\ub85d\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ub3d9\uc548\uc5d0\ub294 \ud50c\ub798\uc2dc\uac00 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \ub420 \uc218 \uc5c6\uc73c\ubbc0\ub85c \ubcf4\ud1b5 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ud2b9\ubcc4 \ubaa8\ub4dc\uc5d0 \ub4e4\uc5b4\uac00\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ubc14\uc774\ud2b8 \uc804\uc1a1\uc744 \uc704\ud55c \uc624\ud508 \uc18c\uc2a4 \uc194\ub8e8\uc158\uc744 \uc778\ud130\ub137\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Y-\ubaa8\ub380 \ud504\ub85c\ud1a0\ucf5c\uc740 \ub370\uc774\ud130\uc5d0 16\ube44\ud2b8 CRC\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("h3",a({},{id:"testing"}),"\ud14c\uc2a4\ud2b8"),(0,n.kt)("p",null,"\ubc14\uc774\ud2b8 \uc804\uc1a1\uc744 \uc704\ud55c \uc624\ud508 \uc18c\uc2a4 \uc194\ub8e8\uc158\uc744 \uc778\ud130\ub137\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Y-\ubaa8\ub380 \ud504\ub85c\ud1a0\ucf5c\uc740 \ub370\uc774\ud130\uc5d0 16\ube44\ud2b8 CRC\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ubc84\uadf8\ub97c \uc870\uae30\uc5d0 \ucc3e\uc544\ub0b4\ub824\uba74 \ud50c\ub798\uc2dc \uc804\uccb4\ub97c \uba74\ubc00\ud788 \ud14c\uc2a4\ud2b8\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."))}b.isMDXComponent=!0}}]);