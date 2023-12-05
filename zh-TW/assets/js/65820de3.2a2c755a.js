"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[53725],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61235:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=a},12822:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(32118);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(89588);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const i=o},89588:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},66220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>g});n(59496);var r=n(49613),a=n(12822),l=n(61235),o=n(86222),i=n(51721);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"scenarios-change-pixelformat-bpp",title:"\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f"},m=void 0,s={unversionedId:"development/scenarios/scenarios-change-pixelformat-bpp",id:"development/scenarios/scenarios-change-pixelformat-bpp",title:"\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f",description:"\u672c\u6587\u5c07\u4ecb\u7d39\u5728\u5275\u5efa\u5c08\u6848\u5f8c\uff0c\u5982\u4f55\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f\u3002 \u5177\u9ad4\u5730\u8aaa\uff0c\u672c\u6587\u5c07\u8209\u4f8b\u8aaa\u660e\u5982\u4f55\u901a\u904eTouchGFX Generator\u5c0724\u4f4dRGB888\u61c9\u7528\u4fee\u6539\u70ba16\u4f4dRGB565\uff0c\u9084\u5c07\u4ecb\u7d39\u5c0dTouchGFX\u5c08\u6848\u914d\u7f6e\u7684\u5f71\u97ff\u3002 \u66f4\u6539\u50cf\u7d20\u683c\u5f0f\u7684\u539f\u56e0\u53ef\u80fd\u662f\uff1a",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-change-pixelformat-bpp.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-change-pixelformat-bpp",permalink:"/4.23/zh-TW/docs/development/scenarios/scenarios-change-pixelformat-bpp",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-change-pixelformat-bpp",title:"\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f"},sidebar:"docs",previous:{title:"\u5c0d\u5b57\u9ad4\u8cc7\u6599\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4",permalink:"/4.23/zh-TW/docs/development/scenarios/fonts-in-unmapped-flash"},next:{title:"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u914d\u7f6e",permalink:"/4.23/zh-TW/docs/development/scenarios/scenarios-create-at"}},d={},g=[{value:"\u958b\u767c\u677f\u642d\u5efa",id:"board-bring-up",level:2},{value:"HAL\u958b\u767c",id:"hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"\u7d50\u8ad6",id:"conclusion",level:2}],h={toc:g},k="wrapper";function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(k,p({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u5c07\u4ecb\u7d39\u5728\u5275\u5efa\u5c08\u6848\u5f8c\uff0c\u5982\u4f55\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f\u3002 \u5177\u9ad4\u5730\u8aaa\uff0c\u672c\u6587\u5c07\u8209\u4f8b\u8aaa\u660e\u5982\u4f55\u901a\u904eTouchGFX Generator\u5c0724\u4f4dRGB888\u61c9\u7528\u4fee\u6539\u70ba16\u4f4dRGB565\uff0c\u9084\u5c07\u4ecb\u7d39\u5c0dTouchGFX\u5c08\u6848\u914d\u7f6e\u7684\u5f71\u97ff\u3002 \u66f4\u6539\u50cf\u7d20\u683c\u5f0f\u7684\u539f\u56e0\u53ef\u80fd\u662f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u986f\u793a\u5668\u9700\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u61c9\u7528\u9700\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u5c08\u6848\u521d\u59cb\u5275\u5efa\u7684\u932f\u8aa4")),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u8acb\u95b1\u8b80\u95dc\u65bc",(0,r.kt)(i.Z,{to:"../../basic-concepts/color-formats",mdxType:"Link"},"\u984f\u8272\u683c\u5f0f"),"\u7684\u6587\u7ae0\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u800c\u8a00\uff0c\u70ba\u4e86\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f\uff0c\u53ef\u80fd\u9700\u8981\u9032\u884c\u4e0b\u5217\u66f4\u6539\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u958b\u767c\u677f\u642d\u5efa\uff1a"),"\u66f4\u6539LTDC\u7684\u50cf\u7d20\u683c\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HAL\u958b\u767c\uff1a")," \u4fee\u6539TouchGFX Generator\u8a2d\u7f6e\uff0c\u4ee5\u53cd\u6620LTDC\u8a2d\u7f6e\u6216\u5f71\u50cf\u7de9\u885d\u5728\u8a18\u61b6\u9ad4\u4e2d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer"),"\uff1a\u78ba\u4fdd\u8a2d\u8a08\u8edf\u9ad4\u6b63\u5728\u5c0d\u5f71\u50cf\u4f7f\u7528\u65b0\u7684\u4f4d\u6df1\u548c\u6b63\u78ba\u7684\u5f71\u50cf\u8cc7\u6e90\u3002")),(0,r.kt)("p",null,"\u8a2d\u8a08\u4e4b\u521d\u53ef\u4ee5\u5148\u6aa2\u67e5",(0,r.kt)("em",{parentName:"p"},"\u986f\u793a\u5668")," \u548c",(0,r.kt)("em",{parentName:"p"},"\u5f71\u50cf"),"\u7684\u914d\u7f6e\uff0c\u7a0d\u5f8c\u518d\u8fd4\u56de\u87a2\u5e55\u9032\u884c\u78ba\u8a8d\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-4-17.webp",width:"600",mdxType:"Figure"},"\u5f71\u50cf\u914d\u7f6eRGB888"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-4-17.webp",width:"600",mdxType:"Figure"},"\u986f\u793a\u5668\u914d\u7f6e24\u4f4d\u5143"),(0,r.kt)("h2",p({},{id:"board-bring-up"}),"\u958b\u767c\u677f\u642d\u5efa"),(0,r.kt)("p",null,"\u5982\u679cSTM32CubeMX\u5c08\u6848\u4e2d\u7684\u7279\u5b9a\u8a2d\u7f6e\u53ef\u80fd\u5f71\u97ff\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f\uff0c\u5c31\u50cfLTDC\u4e00\u6a23\uff0c\u5247\u958b\u767c\u8005\u9700\u8981\u5728\u6b64\u9032\u884c\u9069\u7576\u66f4\u6539\uff0c\u4ee5\u4f7fTouchGFX\u4ee5LTDC\u671f\u671b\u7684\u683c\u5f0f\u9032\u884c\u6e32\u67d3\u3002"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u8acb\u95b1\u8b80\u95dc\u65bc",(0,r.kt)(i.Z,{to:"../touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"LTDC"),"\u7684\u6587\u7ae0\u4ee5\u77ad\u89e3TouchGFX\u61c9\u7528\u6709\u6548\u50cf\u7d20\u683c\u5f0f\u8a2d\u7f6e\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002"),(0,r.kt)("h2",p({},{id:"hal-development"}),"HAL\u958b\u767c"),(0,r.kt)("p",null,"\u5982\u679c\u61c9\u7528\u7684\u4f4d\u6df1\u96a8\u5f71\u50cf\u7de9\u885d\u7684\u50cf\u7d20\u683c\u5f0f\u800c\u8b8a\u5316\uff08\u4f8b\u5982\uff0c\u5c07ARGB2222\u66f4\u6539\u70baBRGA2222\u5f8c\u4ecd\u5c07\u5f97\u52308\u4f4d\u61c9\u7528\uff09\uff0c\u5247\u958b\u767c\u8005",(0,r.kt)("em",{parentName:"p"},"\u53ef\u80fd"),"\u9700\u8981\u4fee\u6539\u5f71\u50cf\u7de9\u885d\u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u3002 \u5728\u4ee5\u4e0b\u60c5\u6cc1\u4e0b\uff1a"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-chage-px-fmt.webp",width:"400",mdxType:"Figure"},"\u4fee\u6539\u50cf\u7d20\u683c\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u914d\u7f6e\u751f\u6210\u7a0b\u5f0f\u78bc\u5c07\u751f\u6210\u4f7f\u752816\u4f4dTouchGFX ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD")," \u985e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration")," \u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"static LCD16bpp display;\n")),(0,r.kt)("p",null,"\u5982\u679c\u5c08\u6848\u5df2\u5728TouchGFX Designer\u4e2d\u6253\u958b\uff0c\u5c07\u63d0\u793a\u958b\u767c\u8005\u66f4\u65b0\uff0c\u4ee5\u5957\u7528\u65b0\u751f\u6210\u7684\u914d\u7f6e\u66f4\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-json",metastring:"{7-8}","{7-8}":!0}),'{\n  "image_configuration": {\n    "images": {},\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB565",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  },\n')),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u5728\u7d66\u5b9a\u7684\u50cf\u7d20\u683c\u5f0f\u4e0b\u5c0d\u4e0d\u900f\u660e\u548c\u900f\u660e\u5f71\u50cf\u683c\u5f0f\u7684\u5f71\u97ff\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u5f71\u50cf\u7de9\u885d\u5340\u50cf\u7d20\u683c\u5f0f"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u4e0d\u900f\u660e\u683c\u5f0f"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u900f\u660e\u683c\u5f0f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Gray2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Gray4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ABGR2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ARGB2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"BGRA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RGBA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ARGB8888")))),(0,r.kt)("h2",p({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)("p",null,"\u5728\u57fa\u65bc\u65b0\u7684TouchGFX Generator\u8a2d\u7f6e\uff08\u5728STM32CubeMX\u4e2d\u5b9a\u7fa9\uff09\u66f4\u65b0\u4e86TouchGFX\u5c08\u6848\u5f8c\uff0c\u958b\u767c\u8005\u6703\u767c\u73feTouchGFX Designer\u7684\u914d\u7f6e\u5df2\u7d93\u66f4\u6539\uff0c\u4ee5\u4fbf\u8207\u4e4b\u5339\u914d\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-16bpp-4-17.webp",width:"600",mdxType:"Figure"},"\u5f71\u50cf\u914d\u7f6eRGB565"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-16bpp-4-17.webp",width:"600",mdxType:"Figure"},"\u986f\u793a\u5668\u914d\u7f6e16\u4f4d\u5143"),(0,r.kt)("p",null,"\u5728\u5f9eTouchGFX Designer\u5167\u90e8\u751f\u6210\u7a0b\u5f0f\u78bc\u5f8c\uff0c\u5f71\u50cf\u8cc7\u6e90\u7684\u7a0b\u5f0f\u78bc\u73fe\u5df2\u53cd\u6620\u4e86\u66f4\u65b0\u5f8c\u7684\u50cf\u7d20\u683c\u5f0f\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX\\generated\\images\\src\\my_image.png"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),'LOCATION_PRAGMA("ExtFlashSection")\nKEEP extern const unsigned char my_image[] LOCATION_ATTRIBUTE("ExtFlashSection") = // 320x240 RGB565 pixels.\n')),(0,r.kt)("h2",p({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,r.kt)("p",null,"\u53ea\u9700\u4f7f\u7528TouchGFX Generator\u5373\u53ef\u4fee\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u7576\u524d\u50cf\u7d20\u683c\u5f0f\u3002 \u5c0d\u65bc\u5177\u6709LTDC\u7684MCU\uff0c\u904b\u884c\u4e2d\u7684TouchGFX\u5fc5\u9808\u8207\u5728TouchGFX Generator\uff08\u5c31LTDC\u800c\u8a00\uff0c\u50c5\u9650\u65bcRGB565\u548cRGB888\uff09\u8a2d\u7f6e\u4e2d\u5b9a\u7fa9\u7684\u5f71\u50cf\u7de9\u885d\u50cf\u7d20\u683c\u5f0f\u76f8\u5339\u914d\uff0c\u4ee5\u78ba\u4fdd\u8207TouchGFX Core\u6e32\u67d3\u7684\u683c\u5f0f\u76f8\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u5728\u5f9eSTM32CubeMX\u751f\u6210\u7a0b\u5f0f\u78bc\u5f8c\uff0c\u5c07\u66f4\u65b0TouchGFX\u5c08\u6848\uff0c\u5f8c\u7e8c\u5728TouchGFX Designer\u4e2d\u751f\u6210\u7a0b\u5f0f\u78bc\u5f8c\uff0c\u5716\u50cf\u8cc7\u7522\u548c\u5e40\u7de9\u885d\u9a45\u52d5\u7a0b\u5f0f\u90fd\u5c07\u5177\u6709\u6307\u5b9a\u683c\u5f0f\u3002"))}f.isMDXComponent=!0}}]);