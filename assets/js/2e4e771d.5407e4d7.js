"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[72289],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,f=h["".concat(c,".").concat(d)]||h[d]||g[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},66590:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const a=o},91255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>g});n(59496);var r=n(49613),o=n(12822),a=n(66590);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",sidebar_label:"Enabling Touchgfx Generator"},u=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",id:"development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",description:"After having installed TouchGFX Generator in STM32CubeMX, it can be enabled in your project.",source:"@site/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",permalink:"/4.23/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",draft:!1,tags:[],version:"current",frontMatter:{id:"enabling-touchgfx-generator",title:"Enabling Touchgfx Generator",sidebar_label:"Enabling Touchgfx Generator"},sidebar:"docs",previous:{title:"Generator User Guide",permalink:"/4.23/docs/category/generator-user-guide"},next:{title:"TouchGFX AL Configuration",permalink:"/4.23/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration"}},h={},g=[],d={toc:g},f="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After having ",(0,r.kt)("a",l({parentName:"p"},{href:"../../../introduction/installation#using-stm32cubemx"}),"installed TouchGFX Generator in STM32CubeMX"),', it can be enabled in your project.\nUsers have access to added functionality from X-CUBE\'s packs by pressing the "Select Components" button, or by using the shortcut ',(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Alt + o")," in the project menu of STM32CubeMX."),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.webp",width:"700",mdxType:"Figure"},"Selecting Additional Software in STM32CubeMX"),(0,r.kt)("p",null,"The following figure shows how TouchGFX Generator can be enabled for a project:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator-v4.17.webp",width:"400",mdxType:"Figure"},"Enabling TouchGFX Generator"),(0,r.kt)("p",null,"If enabling TouchGFX for a Dual-Core MCU, be sure to enable it for the correct context. TouchGFX can only be enabled for a single context at a time:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator-dual-core-v4.17.webp",width:"400",mdxType:"Figure"},"Enabling TouchGFX Generator for Dual Core"),(0,r.kt)("p",null,'Having enabled TouchGFX Generator in the project should make it visible in the "Categories" menu on the left side of the project menu under ',(0,r.kt)("em",{parentName:"p"},"Middleware and Software Packs"),", where it can be enabled:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/generator-enabled.webp",width:"250",mdxType:"Figure"},"TouchGFX Generator location in STM32CubeMX project"),(0,r.kt)("p",null,"To finally enable TouchGFX Generator, click on ",(0,r.kt)("em",{parentName:"p"},"X-CUBE-TOUCHGFX")," and check the ",(0,r.kt)("em",{parentName:"p"},"Graphics Application")," option in the right pane. The UI view of TouchGFX Generator should be visible:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/generator-graphics-application-enabled.webp",width:"600",mdxType:"Figure"},"TouchGFX Generator enabled in STM32CubeMX project"))}m.isMDXComponent=!0}}]);