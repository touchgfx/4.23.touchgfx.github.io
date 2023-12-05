"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8523],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),h=o,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},86473:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(59496),o=r(89588);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}const c=i},61235:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const a=o},12822:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(32118);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},89588:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},64832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>h});r(59496);var n=r(49613),o=r(12822),a=r(61235),i=r(86473);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"upgrading-projects",title:"\u5347\u7ea7\u9879\u76ee",sidebar_label:"\u5347\u7ea7\u9879\u76ee"},u=void 0,s={unversionedId:"development/touchgfx-hal-development/generator-how-to/upgrading-projects",id:"development/touchgfx-hal-development/generator-how-to/upgrading-projects",title:"\u5347\u7ea7\u9879\u76ee",description:"TouchGFX Generator\u53c2\u6570\u5b58\u50a8\u5728.ioc\u6587\u4ef6\u4e2d\uff08STM32CubeMX\u5de5\u7a0b\uff09\u3002 When a new version of TouchGFX Generator is released, the parameters of the old version may be incompatible with the new version and may require migration. \u672c\u8282\u4ecb\u7ecd\u5728STM32CubeMX\u4e2d\u6210\u529f\u8fc1\u79fb\u548c\u66f4\u65b0\u9879\u76ee\u6240\u9700\u7684\u6b65\u9aa4\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/upgrading-projects.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/upgrading-projects",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/upgrading-projects",draft:!1,tags:[],version:"current",frontMatter:{id:"upgrading-projects",title:"\u5347\u7ea7\u9879\u76ee",sidebar_label:"\u5347\u7ea7\u9879\u76ee"},sidebar:"docs",previous:{title:"TouchGFX Designer\u9879\u76ee",permalink:"/4.23/zh-CN/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project"},next:{title:"Scenarios",permalink:"/4.23/zh-CN/docs/category/scenarios"}},d={},h=[],m=(g="Note",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",c({},e))});var g;const f={toc:h},v="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(v,c({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"TouchGFX Generator\u53c2\u6570\u5b58\u50a8\u5728",(0,n.kt)("em",{parentName:"p"},".ioc"),"\u6587\u4ef6\u4e2d\uff08STM32CubeMX\u5de5\u7a0b\uff09\u3002 When a new version of TouchGFX Generator is released, the parameters of the old version may be incompatible with the new version and may require migration. \u672c\u8282\u4ecb\u7ecd\u5728STM32CubeMX\u4e2d\u6210\u529f\u8fc1\u79fb\u548c\u66f4\u65b0\u9879\u76ee\u6240\u9700\u7684\u6b65\u9aa4\u3002"),(0,n.kt)("p",null,"Since STM32CubeMX does not support upgrading between X-CUBE versions, the upgrade is automatically performed by TouchGFX Designer when ",(0,n.kt)("em",{parentName:"p"},"Generate Code")," is pressed, due to the following command in the ",(0,n.kt)("inlineCode",{parentName:"p"},"PostGenerateTargetCommand")," section of the ",(0,n.kt)("inlineCode",{parentName:"p"},".touchgfx")," file."),(0,n.kt)(a.Z,{mdxType:"CodeHeader"},".touchgfx"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'"PostGenerateTargetCommand" : "touchgfx update_project --project-file=../upgrade.ioc --platform=m7"\n')),(0,n.kt)("p",null,"\u8be5\u547d\u4ee4\u5c06\u8bfb\u53d6",(0,n.kt)("inlineCode",{parentName:"p"},".ioc"),"\u6587\u4ef6\u5e76\u66f4\u65b0\u53c2\u6570\uff0c\u4ee5\u9002\u5e94X-CUBE-TOUCHGFX\u7684\u5f53\u524d\u7248\u672c\u3002 \u4ee5\u4e0b\u662f\u5728X-CUBE-TOUCHGFX 4.13.0\u521b\u5efa\u7684.ioc\u6587\u4ef6\u4e0a\u624b\u52a8\u8fd0\u884c\u811a\u672c\uff08X-CUBE-TOUCHGFX 4.14.0\uff09\u7684\u793a\u4f8b\u3002"),(0,n.kt)(a.Z,{mdxType:"CodeHeader"},"\u4f7f\u7528STM32F746 DISCO TouchGFX Board Setup\u7684\u5347\u7ea7\u793a\u4f8b\uff0c\u4ece4.13.0\u5347\u7ea7\u52304.14.0 "),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"$ touchgfx update_project --project-file=../STM32F746G_DISCO.ioc\n  TouchGFX Generator 4.13.0 found\n  Creating backup of ../STM32F746G_DISCO.ioc as ../backup_STM32F746G_DISCO.ioc\n  Performing upgrade 4.13.0 -> 4.14.0 ... OK\n")),(0,n.kt)("p",null,"\u4f7f\u7528STM32CubeMX\u6253\u5f00\u66f4\u65b0\u8fc7\u7684\u9879\u76ee\u65f6\uff0c\u7cfb\u7edf\u4f1a\u63d0\u793a\u7528\u6237\u5b89\u88c5.ioc\u6587\u4ef6\u63d0\u793a\u7684X-CUBE-TOUCHGFX\u7248\u672c\uff08\u5982\u679c\u5c1a\u672a\u5b89\u88c5\uff09\u3002 Clicking ",(0,n.kt)("em",{parentName:"p"},"Download now")," will download and install the new version of X-CUBE-TOUCHGFX."),(0,n.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/cubemx-additional-software-manager-settings-missing-x-cube-touchgfx-4.14.0.webp",noShadow:!1,mdxType:"Figure"},"\u7f3a\u5931\u5176\u4ed6\u8f6f\u4ef6\u7ec4\u4ef6\uff1aTouchGFX Generator 4.14.0"),(0,n.kt)("p",null,"All configurations in TouchGFX Generator will be kept during the upgrade procedure, and a backup of the .ioc file will be placed beside the original on prepended with ",(0,n.kt)("inlineCode",{parentName:"p"},"backup_"),"."),(0,n.kt)("p",null,"If a new feature has been added since the previous version or existing features has changed options, then STM32CubeMX may not be able to map the existing and/or new parameters to a value. Therefore, it is always recommended to inspect the parameters of the TouchGFX Generator inside STM32CubeMX to verify that all have appropriate values after upgrading a project."),(0,n.kt)(m,{mdxType:"Note"},"\u8981\u4f7f\u7528TouchGFX Generator\u63d0\u4f9b\u7684\u65b0\u529f\u80fd\uff0c\u5fc5\u987b\u5728STM32CubeMX\u4e2d\u6267\u884c",(0,n.kt)("i",null,"\u751f\u6210\u4ee3\u7801"),"\u3002"),(0,n.kt)(i.Z,{mdxType:"Caution"},"\u5982\u679c\u901a\u8fc7STM32CubeMX\u4e3a\u73b0\u6709\u7684TouchGFX\u9879\u76ee\u5347\u7ea7X-CUBE-TOUCHGFX\uff0c\u5347\u7ea7\u8fc7\u7a0b\u5e76\u975e\u901a\u8fc7TouchGFX Designer\u6765\u8fd0\u884c\uff0cTouchGFX Generator\u53c2\u6570\u5c06\u88ab\u91cd\u7f6e\u4e3a\u9ed8\u8ba4\u503c\uff0c\u56e0\u4e3a\u5b83\u4eec\u8981\u9002\u7528\u4e8e\u4e0d\u540c\u7248\u672c\u3002"))}b.isMDXComponent=!0}}]);