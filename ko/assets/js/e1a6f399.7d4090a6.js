"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[72731],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),h=o,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},86473:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),o=r(89588);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class c extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}const i=c},61235:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const a=o},12822:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(32118);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:a,src:c})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:a,src:c})),n.createElement("p",null,e.children))}},89588:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},93925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>h});r(59496);var n=r(49613),o=r(12822),a=r(61235),c=r(86473);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"upgrading-projects",title:"Upgrading Project",sidebar_label:"Upgrading Project"},u=void 0,s={unversionedId:"development/touchgfx-hal-development/generator-how-to/upgrading-projects",id:"development/touchgfx-hal-development/generator-how-to/upgrading-projects",title:"Upgrading Project",description:"TouchGFX Generator \ub9e4\uac1c\ubcc0\uc218\ub294 .ioc \ud30c\uc77c(STM32CubeMX \ud504\ub85c\uc81d\ud2b8)\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. TouchGFX Generator\uc758 \uc0c8 \ubc84\uc804\uc774 \ucd9c\uc2dc\ub41c \uacbd\uc6b0\uc5d0\ub294 \uc774\uc804 \ubc84\uc804\uc758 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc0c8 \ubc84\uc804\uacfc \ud638\ud658\ub418\uc9c0 \uc54a\uc544\uc11c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 STM32CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc131\uacf5\uc801\uc73c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ubc0f \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \ud544\uc694\ud55c \ub2e8\uacc4\ub4e4\uc744 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/upgrading-projects.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/upgrading-projects",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/upgrading-projects",draft:!1,tags:[],version:"current",frontMatter:{id:"upgrading-projects",title:"Upgrading Project",sidebar_label:"Upgrading Project"},sidebar:"docs",previous:{title:"TouchGFX Designer Project",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project"},next:{title:"Scenarios",permalink:"/4.23/ko/docs/category/scenarios"}},d={},h=[],m=(g="Note",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",i({},e))});var g;const f={toc:h},v="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(v,i({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"TouchGFX Generator \ub9e4\uac1c\ubcc0\uc218\ub294 ",(0,n.kt)("em",{parentName:"p"},".ioc")," \ud30c\uc77c(STM32CubeMX \ud504\ub85c\uc81d\ud2b8)\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. TouchGFX Generator\uc758 \uc0c8 \ubc84\uc804\uc774 \ucd9c\uc2dc\ub41c \uacbd\uc6b0\uc5d0\ub294 \uc774\uc804 \ubc84\uc804\uc758 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc0c8 \ubc84\uc804\uacfc \ud638\ud658\ub418\uc9c0 \uc54a\uc544\uc11c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 STM32CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc131\uacf5\uc801\uc73c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ubc0f \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \ud544\uc694\ud55c \ub2e8\uacc4\ub4e4\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"STM32CubeMX\uc5d0\uc11c\ub294 X-CUBE \ubc84\uc804 \uac04 \uc5c5\uadf8\ub808\uc774\ub4dc\uac00 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 ",(0,n.kt)("em",{parentName:"p"},"Generate Code"),"\ub97c \ub204\ub974\uba74 ",(0,n.kt)("inlineCode",{parentName:"p"},".touchgfx")," \ud30c\uc77c\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"PostGenerateTargetCommand")," \uc139\uc158\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\uc73c\ub85c \uc778\ud574 TouchGFX Designer\uc5d0\uc11c \uc5c5\uadf8\ub808\uc774\ub4dc\uac00 \uc790\ub3d9\uc73c\ub85c \uc218\ud589\ub429\ub2c8\ub2e4."),(0,n.kt)(a.Z,{mdxType:"CodeHeader"},".touchgfx"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),'"PostGenerateTargetCommand" : "touchgfx update_project --project-file=../upgrade.ioc --platform=m7"\n')),(0,n.kt)("p",null,"\uc774 \uba85\ub839\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},".ioc")," \ud30c\uc77c\uc744 \uc77d\uace0 X-CUBE-TOUCHGFX\uc758 \ud604\uc7ac \ubc84\uc804\uc5d0 \ub9de\uac8c \ub9e4\uac1c\ubcc0\uc218\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. X-CUBE-TOUCHGFX 4.13.0\uc5d0\uc11c \uc0dd\uc131\ub41c .ioc \ud30c\uc77c\uc5d0\uc11c \uc218\ub3d9\uc73c\ub85c \uc2a4\ud06c\ub9bd\ud2b8(X-CUBE-TOUCHGFX 4.14.0)\ub97c \uc2e4\ud589\ud558\ub294 \uc608\uac00 \uc544\ub798 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{mdxType:"CodeHeader"},"STM32F746 DISCO TouchGFX \ubcf4\ub4dc \uc124\uc815\uc744 \uc0ac\uc6a9\ud574 4.13.0\uc5d0\uc11c 4.14.0\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc\ub97c \uc218\ud589\ud558\ub294 \uc608"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"$ touchgfx update_project --project-file=../STM32F746G_DISCO.ioc\n  TouchGFX Generator 4.13.0 found\n  Creating backup of ../STM32F746G_DISCO.ioc as ../backup_STM32F746G_DISCO.ioc\n  Performing upgrade 4.13.0 -> 4.14.0 ... OK\n")),(0,n.kt)("p",null,"STM32CubeMX\ub85c \uc5c5\ub370\uc774\ud2b8\ub41c \ud504\ub85c\uc81d\ud2b8\ub97c \uc5f4\uba74 \uc0ac\uc6a9\uc790\uc5d0\uac8c .ioc \ud30c\uc77c\ub85c \ud45c\ud604\ub418\ub294 X-CUBE-TOUCHGFX \ubc84\uc804\uc744 \uc124\uce58\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4(\uc544\uc9c1 \uc124\uce58\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0). ",(0,n.kt)("em",{parentName:"p"},"Download now"),"\ub97c \ud074\ub9ad\ud558\uba74 X-CUBE-TOUCHGFX\uc758 \uc0c8 \ubc84\uc804\uc774 \ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc124\uce58\ub429\ub2c8\ub2e4."),(0,n.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/cubemx-additional-software-manager-settings-missing-x-cube-touchgfx-4.14.0.webp",noShadow:!1,mdxType:"Figure"},"\ucd94\uac00 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c \ub204\ub77d: TouchGFX Generator 4.14.0"),(0,n.kt)("p",null,"TouchGFX Generator\uc758 \ubaa8\ub4e0 \uad6c\uc131\uc740 \uc5c5\uadf8\ub808\uc774\ub4dc \uc808\ucc28\uac00 \uc9c4\ud589\ub418\ub294 \ub3d9\uc548 \uc720\uc9c0\uac00 \ub418\uba70, .ioc \ud30c\uc77c\uc758 \ubc31\uc5c5\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},"backup_"),"\uc774 \uc55e\uc5d0 \ucd94\uac00\ub418\uc5b4 \uc6d0\ubcf8 \uc606\uc5d0 \ubc30\uce58\ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"If a new feature has been added since the previous version or existing features has changed options, then STM32CubeMX may not be able to map the existing and/or new parameters to a value. Therefore, it is always recommended to inspect the parameters of the TouchGFX Generator inside STM32CubeMX to verify that all have appropriate values after upgrading a project."),(0,n.kt)(m,{mdxType:"Note"},"TouchGFX Generator\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 STM32CubeMX\uc5d0\uc11c ",(0,n.kt)("i",null,"Generate Code"),"\ub97c \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)(c.Z,{mdxType:"Caution"},"\uae30\uc874 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c STM32CubeMX\ub97c \ud1b5\ud574 X-CUBE-TOUCHGFX\ub97c \uc5c5\uadf8\ub808\uc774\ub4dc\ub97c \ud560 \ub54c TouchGFX Designer\uc5d0\uc11c \uc5c5\uadf8\ub808\uc774\ub4dc \ud504\ub85c\uc138\uc2a4\uac00 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc5d0\ub294 \ub2e4\ub978 \ubc84\uc804\uc5d0 \uc801\uc6a9\ub420 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0\uc11c TouchGFX Generator \ub9e4\uac1c\ubcc0\uc218\uac00 \uae30\ubcf8\uac12\uc73c\ub85c \uc7ac\uc124\uc815\ub429\ub2c8\ub2e4."))}b.isMDXComponent=!0}}]);