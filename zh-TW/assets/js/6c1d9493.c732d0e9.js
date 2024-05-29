"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[90729],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||h[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>h});r(59496);var n=r(49613),o=r(48753),a=r(2333);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"install-touchgfx",title:"Install TouchGFX"},s=void 0,u={unversionedId:"how-to/install-touchgfx",id:"how-to/install-touchgfx",title:"Install TouchGFX",description:"Do you want to create a GUI for your STM32 microcontroller but aren't sure which tools to use? This video is for you!",source:"@site/academy/how-to/install-touchgfx.mdx",sourceDirName:"how-to",slug:"/how-to/install-touchgfx",permalink:"/4.23/zh-TW/academy/how-to/install-touchgfx",draft:!1,tags:[],version:"current",frontMatter:{id:"install-touchgfx",title:"Install TouchGFX"},sidebar:"academy",previous:{title:"How to TouchGFX videos",permalink:"/4.23/zh-TW/academy/how-to/how-to-introduction"},next:{title:"My first GUI",permalink:"/4.23/zh-TW/academy/how-to/my-first-gui"}},p={},h=[],f={toc:h},m="wrapper";function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,i({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{url:"https://youtu.be/OMeiG9jS-yk",mdxType:"YouTube"}),(0,n.kt)("p",null,"Do you want to create a GUI for your STM32 microcontroller but aren't sure which tools to use? This video is for you!"),(0,n.kt)("p",null,"Watch this guide to learn the step-by-step process of setting up TouchGFX. The video provides detailed instructions on how to install the following essential tools:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"STM32CubeMX"),(0,n.kt)("li",{parentName:"ul"},"STM32CubeIDE"),(0,n.kt)("li",{parentName:"ul"},"STM32CubeProgrammer"),(0,n.kt)("li",{parentName:"ul"},"TouchGFX Designer")),(0,n.kt)("p",null,"STM32CubeMX is an interactive tool for setting up the MCU, STM32CubeIDE is an IDE for coding, STM32CubeProgrammer is an application used to flash the board and TouchGFX Designer is used for GUI development."),(0,n.kt)("p",null,"When you have installed TouchGFX Designer, you are ready to develop ",(0,n.kt)("a",i({parentName:"p"},{href:"/4.23/zh-TW/academy/how-to/my-first-gui"}),"your first GUI"),"!"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},(0,n.kt)("p",null,"Watch also ",(0,n.kt)("a",i({parentName:"p"},{href:"/4.23/zh-TW/academy/how-to/my-first-gui"}),"How to TouchGFX: My first GUI"))))}d.isMDXComponent=!0},48753:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),o=r(96151);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const l=i},96151:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},2333:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(t.test(e))return t.exec(e)[1];const r=/https:\/\/youtu\.be\/(\w+)/;if(r.test(e))return r.exec(e)[1];return e}(this.props.url)}`;return n.createElement("div",{className:"videoWrapper"},n.createElement("iframe",{src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}const a=o}}]);