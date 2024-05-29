"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[74510],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(n),g=o,m=h["".concat(l,".").concat(g)]||h[g]||s[g]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(7029);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},49018:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const i=c},31042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});n(59496);var r=n(49613),o=n(89639),a=n(49018);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"touchgfx-designer-project",title:"TouchGFX Designer Project",sidebar_label:"TouchGFX Designer Project"},u=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",title:"TouchGFX Designer Project",description:"TouchGFX Generator\ub294 TouchGFX \ud3f4\ub354 \ub0b4\ubd80\uc5d0 .part\ub97c  \uc0dd\uc131\ud558\ub294\ub370, TouchGFX \ud5e4\ub354 \ud30c\uc77c \ubc0f \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud3ec\ud568\ub41c \uc804\uccb4 TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574 TouchGFX Designer\ub85c \uc774 \ud30c\uc77c\uc744 \uc5f4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. .part \ud30c\uc77c\uc5d0\ub294 \ud53d\uc140 \ud615\uc2dd \ubc0f \uce94\ubc84\uc2a4 \ud06c\uae30\uc640 \uac19\uc774 TouchGFX Designer\uac00 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad00\ub828 \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-designer-project",title:"TouchGFX Designer Project",sidebar_label:"TouchGFX Designer Project"},sidebar:"docs",previous:{title:"Modifying Generated Behavior",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior"},next:{title:"Upgrading Project",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/upgrading-projects"}},h={},s=[],g={toc:s},m="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,c({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX Generator\ub294 ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," \ud3f4\ub354 \ub0b4\ubd80\uc5d0 ",(0,r.kt)("em",{parentName:"p"},".part"),"\ub97c  ",(0,r.kt)("a",c({parentName:"p"},{href:"generating-code#generated-project"}),"\uc0dd\uc131"),"\ud558\ub294\ub370, TouchGFX \ud5e4\ub354 \ud30c\uc77c \ubc0f \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud3ec\ud568\ub41c \uc804\uccb4 TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574 TouchGFX Designer\ub85c \uc774 \ud30c\uc77c\uc744 \uc5f4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. .part \ud30c\uc77c\uc5d0\ub294 \ud53d\uc140 \ud615\uc2dd \ubc0f \uce94\ubc84\uc2a4 \ud06c\uae30\uc640 \uac19\uc774 TouchGFX Designer\uac00 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad00\ub828 \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c json \uad6c\uc870\ub294 STM32U599 \uae30\ubc18 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c ",(0,r.kt)("a",c({parentName:"p"},{href:"generating-code#generated-code-structure"}),"\uc0dd\uc131 \ucf54\ub4dc \uad6c\uc870")," \uc139\uc158\uc5d0\uc11c \uc5b8\uae09\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},".part")," \ud30c\uc77c\uc758 \ub0b4\uc6a9\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uc608\uc785\ub2c8\ub2e4. \uc544\ub798 \uc608\uc2dc\uc5d0 \ub098\uc640 \uc788\ub294 post-generate \uba85\ub839\uc740 STM32CubeMX Project Manager \ud0ed\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc120\ud0dd\ud55c \ud504\ub85c\uc81d\ud2b8(\uc608: EWARM)\ub97c TouchGFX \ubc0f \uad6c\uc131 \uc694\uc18c \uc635\uc158\uc744 \uc704\ud55c \ud544\uc218 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ube44\ub86f\ud574 TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub41c \uc0c8 \ud30c\uc77c(\uc608: \uc0c8 \ud654\uba74 \ubc0f \uc560\uc14b)\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. ."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:"{16}","{16}":!0}),'{\n  "Application": {\n    "Name": "STM32U599J-DK",\n    "TouchGfxPath": "../Middlewares/ST/touchgfx",\n    "AvailableColorDepths": [ 24 ],\n    "AvailableLCDs":\n    {\n      "24": "LCDGPU2D"\n    },\n    "AvailableResolutions": [\n      {\n        "Width": 480,\n        "Height": 480\n      }\n    ],\n    "PostGenerateTargetCommand": "touchgfx update_project",\n    "Family": "STM32U5",\n    "SubFamily": "STM32U599/5A9",\n    "Platform": "m33",\n    "ProjectFile": "../STM32U599J-DK.ioc",\n    "OptionalComponentsRoot": "../Middlewares/ST/touchgfx_components",\n    "OptionalComponents": [\n      "GPU2D"\n    ]\n  },\n  "Version": "4.19.0"\n}\n')),(0,r.kt)("p",null,"TouchGFX Designer\ub85c ",(0,r.kt)("em",{parentName:"p"},".part")," \ud30c\uc77c\uc744 \uc5f4 \ub54c \uac1c\ubc1c\uc790\ub294 CUI(Concrete User Interface)\ub97c \ub85c\ub4dc\ud560 \uac83\uc778\uc9c0, \uc544\ub2c8\uba74 \ube48 \ud15c\ud50c\ub9bf\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2dc\uc791\ud560 \uac83\uc778\uc9c0\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui-4-17.webp",noShadow:!1,mdxType:"Figure"},"UI \uc120\ud0dd"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c ",(0,r.kt)("em",{parentName:"p"},"Generate Code"),"\ub97c \ub204\ub974\uba74 TouchGFX Designer\uac00 ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," \ud3f4\ub354\uc5d0 \uc0c8 \ud30c\uc77c\uacfc \ud3f4\ub354\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code-4-17.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX Designer\uc5d0\uc11c \ucf54\ub4dc \uc0dd\uc131"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc774\ubbf8\uc9c0\ub294 ",(0,r.kt)("em",{parentName:"p"},"TouchGFX")," \ud3f4\ub354 \uad6c\uc870\uc758 \uad6c\uccb4\uc801 \uc608\ub97c \ubcf4\uc5ec\uc8fc\uace0 \uc0c8\ub86d\uac8c \uc0dd\uc131\ub41c \ud30c\uc77c\uacfc \ud3f4\ub354\ub97c \uac15\uc870 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX \ud3f4\ub354 \uad6c\uc870"),(0,r.kt)("p",null,"TouchGFX Designer\ub294 STM32CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac\uc790\ub97c \ud1b5\ud574 \uc120\ud0dd\ud55c IDE(\uc608:  STM32CubeIDE, EWARM \ub610\ub294 MDK-ARM)\ub97c \uac10\uc9c0\ud558\uace0, \ud654\uba74 \uc815\uc758, \uc774\ubbf8\uc9c0 \ubc0f \uae00\uaf34 \uc560\uc14b \uac19\uc774 \uc0c8\ub85c \uc0dd\uc131\ub41c \ud30c\uc77c\ub85c \ud574\ub2f9 IDE\uc758 \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc2dc\uc810\uc5d0 \uac1c\ubc1c\uc790\ub294 STM32CubeMX, TouchGFX Designer \ubc0f \ud234 \uccb4\uc778/IDE\ub97c \uc624\uac00\uba70 \uc791\uc5c5\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\ub294 \ub4dc\ub77c\uc774\ubc84\ub85c  IDE \ud504\ub85c\uc81d\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\ub294 TouchGFX Designer\uc5d0\uc11c \uc989\uc2dc \uc120\ud0dd\ud558\ub294 UI \uad00\ub828 \ubcc0\uacbd \uc0ac\ud56d\uc73c\ub85c TouchGFX ",(0,r.kt)("em",{parentName:"li"},".part")," \ud30c\uc77c\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\ub294 TouchGFX\uac00 \ud2b9\uc815 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \ub370 \ud544\uc694\ud55c TouchGFX Generator \uad6c\uc131\uc5d0 \ub530\ub77c HAL \ucf54\ub4dc(TouchGFX/target/generated/)\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"TouchGFX Designer\ub294 \uc0dd\uc131\ub41c \ucf54\ub4dc\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4.")),(0,r.kt)(a.Z,{mdxType:"Note"},'\ub4c0\uc5bc \ucf54\uc5b4 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud2b9\uc815 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ub300\ud574 TouchGFX\ub97c \ud65c\uc131\ud654\ud55c \uacbd\uc6b0, TouchGFX \ud504\ub85c\uc81d\ud2b8\ub294 \ubcf4\ud1b5 \ud574\ub2f9 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ub300\ud55c \uc804\uc6a9 \ud3f4\ub354(\uc608: "CM4/TouchGFX" \ub610\ub294 "CM7/TouchGFX")\uc5d0 \uc704\uce58\ud558\uac8c \ub429\ub2c8\ub2e4.'))}d.isMDXComponent=!0}}]);