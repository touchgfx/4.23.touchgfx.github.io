"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[34334],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,g=p["".concat(d,".").concat(c)]||p[c]||s[c]||a;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},18576:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(32118);const a=function(e){const t=e.width,n=e.height,a=e.points||[],l=(0,i.Z)(e.imageSource);return r.createElement("div",{style:{position:"relative"}},r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:t,height:n,src:l})),a.map((function(e,t){return r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},r.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},r.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),r.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),r.createElement("p",null,e.children)))}},86222:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),i=n(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const o=l},89588:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=i},39559:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(32118);const a=function(e){const t=(0,i.Z)(e.url);var n;const a=null!==(n=e.width)&&void 0!==n?n:"100%";var l;const o=null!==(l=e.height)&&void 0!==l?l:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:o},r.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},66590:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class i extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const a=i},80328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>g,toc:()=>v});n(59496);var r=n(49613),i=n(12822),a=n(66590),l=n(39559),o=n(18576),d=n(86222),u=n(51721);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"main-window",title:"\u4e3b\u8996\u7a97"},c=void 0,g={unversionedId:"development/ui-development/designer-user-guide/main-window",id:"development/ui-development/designer-user-guide/main-window",title:"\u4e3b\u8996\u7a97",description:"TouchGFX Designer\u7684\u4e3b\u8996\u7a97\u7531\u5c0e\u89bd\u5217\u3001\u6307\u4ee4\u6309\u9215\u3001\u901a\u77e5\u6b04\u548c\u8a73\u7d30\u8a18\u9304\u7d44\u6210\u3002 \u570d\u7e5e\u2018\u8996\u5716\u2019\uff08\u201c\u8996\u5716\u201d\u5340\u57df\uff0c\u5373\u4e0b\u5716\u4e2d\u6a21\u7cca\u5316\u7684\u90e8\u5206\uff09\uff0c\u4e3b\u8996\u7a97\u652f\u6490\u8d77\u4e86\u4e00\u500b\u6846\u67b6\u7d50\u69cb\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/main-window.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/main-window",permalink:"/4.23/zh-TW/docs/development/ui-development/designer-user-guide/main-window",draft:!1,tags:[],version:"current",frontMatter:{id:"main-window",title:"\u4e3b\u8996\u7a97"},sidebar:"docs",previous:{title:"\u6a94\u6848\u9078\u55ae",permalink:"/4.23/zh-TW/docs/development/ui-development/designer-user-guide/file-menu"},next:{title:"\u756b\u5e03\u8996\u5716",permalink:"/4.23/zh-TW/docs/development/ui-development/designer-user-guide/canvas-view"}},h={},v=[{value:"\u5c0e\u89bd\u5217",id:"navigation-bar",level:2},{value:"\u6307\u4ee4",id:"commands",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generate-code",level:3},{value:"\u904b\u884c\u6a21\u64ec\u5668",id:"run-simulator",level:3},{value:"Program and Run Target (\u7de8\u7a0b\u53ca\u57f7\u884c\u76ee\u6a19)",id:"run-target",level:3},{value:"Program Internal Flash and Run Target (\u7de8\u7a0b\u5167\u90e8Flash\u53ca\u57f7\u884c\u76ee\u6a19)",id:"run-target-internal",level:4},{value:"\u901a\u77e5\u6b04",id:"notification-bar",level:2},{value:"\u8a73\u7d30\u8a18\u9304",id:"detailed-log",level:2},{value:"\u66f4\u65b0\u6a6b\u5e45",id:"update-banner",level:2},{value:"\u4e3b\u984c",id:"theme",level:2}],f={toc:v},w="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(w,m({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX Designer\u7684\u4e3b\u8996\u7a97\u7531",(0,r.kt)("a",m({parentName:"p"},{href:"#navigation-bar"}),"\u5c0e\u89bd\u5217"),"\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"#commands"}),"\u6307\u4ee4\u6309\u9215"),"\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"#notification-bar"}),"\u901a\u77e5\u6b04"),"\u548c",(0,r.kt)("a",m({parentName:"p"},{href:"#detailed-log"}),"\u8a73\u7d30\u8a18\u9304"),"\u7d44\u6210\u3002 \u570d\u7e5e\u2018\u8996\u5716\u2019",(0,r.kt)("em",{parentName:"p"},"\uff08\u201c\u8996\u5716\u201d\u5340\u57df\uff0c\u5373\u4e0b\u5716\u4e2d\u6a21\u7cca\u5316\u7684\u90e8\u5206\uff09\uff0c\u4e3b\u8996\u7a97\u652f\u6490\u8d77\u4e86\u4e00\u500b\u6846\u67b6\u7d50\u69cb\u3002")),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window.webp",mdxType:"Figure"},"TouchGFX Designer\u7684\u4e3b\u8996\u7a97"),(0,r.kt)("h2",m({},{id:"navigation-bar"}),"\u5c0e\u89bd\u5217"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u901a\u904e\u5de1\u89bd\u5217\uff08\u53c3\u898b\u4e0b\u5716\uff09\u9032\u884c\u5c0e\u822a\uff0c\u9019\u88e1\u7684\u8996\u5716\u53ef\u66f4\u6539\u70ba\u4e0b\u5217\u8996\u5716\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u65bc\u62d6\u653e\u61c9\u7528\u69cb\u5efa\u7684",(0,r.kt)("a",m({parentName:"li"},{href:"canvas-view"}),"\u756b\u5e03"),"\u8996\u5716\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u65bc\u7ba1\u7406\u5c08\u6848\u4e2d\u6240\u7528\u5716\u50cf\u7684",(0,r.kt)("a",m({parentName:"li"},{href:"images-view"}),"\u5716\u50cf"),"\u8996\u5716\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u65bc\u7ba1\u7406\u5c08\u6848\u4e2d\u6240\u7528\u6587\u5b57\u548c\u5b57\u9ad4\u6392\u5370\u7684",(0,r.kt)("a",m({parentName:"li"},{href:"texts-view"}),"\u6587\u5b57"),"\u8996\u5716\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u65bc\u914d\u7f6e\u5c08\u6848\u7684\u5404\u7a2e\u8a2d\u7f6e\u7684",(0,r.kt)("a",m({parentName:"li"},{href:"config-view"}),"\u914d\u7f6e"),"\u8996\u5716\u3002")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u901a\u904e\u9ede\u64ca",(0,r.kt)("strong",{parentName:"p"},"\u6a94\u6848"),"\u5728\u65b0\u7684\u6a94\u6848\u7ba1\u7406\u54e1\u8996\u7a97\u4e2d\u6253\u958b\u5c08\u6848\u76ee\u9304\uff0c\u5f9e\u800c\u8f15\u9b06\u6d41\u89bd\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-navigation-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5c0e\u89bd\u5217"),(0,r.kt)("h2",m({},{id:"commands"}),"\u6307\u4ee4"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u7684\u6307\u4ee4\u90e8\u5206\uff0c\u53ef\u4ee5\u627e\u5230\u4e09\u500b\u6309\u9215\uff1a\u201c\u751f\u6210\u7a0b\u5f0f\u78bc\u201d\u3001\u201c\u904b\u884c\u6a21\u64ec\u5668\u201d\u548c\u201c\u904b\u884c\u76ee\u6a19\u201d\u3002 ",(0,r.kt)("em",{parentName:"p"},"\uff08\u53c3\u898b\u4e0b\u5716\uff09\u3002 "),"\u9019\u4e9b\u6309\u9215\u5404\u81ea\u57f7\u884c\u4e00\u7d44\u6307\u4ee4\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-actions-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6307\u4ee4\u6309\u9215"),(0,r.kt)("p",null,"\u9019\u4e9b\u6309\u9215\u57f7\u884c\u7684\u6307\u4ee4\u53ef\u4ee5\u5728\u201c\u914d\u7f6e\u201d\u4e2d\u7684",(0,r.kt)("a",m({parentName:"p"},{href:"config-view#build"}),"\u69cb\u5efa"),"\u90e8\u5206\u9032\u884c\u91cd\u5beb\u3002"),(0,r.kt)("h3",m({},{id:"generate-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u201c\u751f\u6210\u7a0b\u5f0f\u78bc\u201d\u6307\u4ee4\u89f8\u767c\u5b8c\u6574\u7684\u7a0b\u5f0f\u78bc\u751f\u6210\uff0c\u7136\u5f8c\u57f7\u884c\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8cc7\u7522\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u767c\u4f48\u751f\u6210\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u767c\u4f48\u751f\u6210\u76ee\u6a19\u6307\u4ee4")),(0,r.kt)("h3",m({},{id:"run-simulator"}),"\u904b\u884c\u6a21\u64ec\u5668"),(0,r.kt)("p",null,"\u201c\u904b\u884c\u6a21\u64ec\u5668\u201d\u6307\u4ee4\u89f8\u767c\u5b8c\u6574\u7684\u7a0b\u5f0f\u78bc\u751f\u6210\uff0c\u7136\u5f8c\u57f7\u884c\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8cc7\u7522\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u767c\u4f48\u751f\u6210\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u6a21\u64ec\u5668\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u904b\u884c\u6a21\u64ec\u5668\u6307\u4ee4")),(0,r.kt)("p",null,"\u201c\u904b\u884c\u6a21\u64ec\u5668\u201d\u6307\u4ee4\u7684\u53e6\u4e00\u7a2e\u89f8\u767c\u65b9\u5f0f\u662f\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F5")),(0,r.kt)("h3",m({},{id:"run-target"}),"Program and Run Target (\u7de8\u7a0b\u53ca\u57f7\u884c\u76ee\u6a19)"),(0,r.kt)("p",null,"Program and Run Target (\u7de8\u7a0b\u53ca\u57f7\u884c\u76ee\u6a19)\u6307\u4ee4\u6703\u89f8\u767c\u5b8c\u6574\u7684\u7a0b\u5f0f\u78bc\u7522\u751f\uff0c\u7136\u5f8c\u57f7\u884c\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8cc7\u7522\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u767c\u4f48\u751f\u6210\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u76ee\u6a19\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u76ee\u6a19\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"Flash\u76ee\u6a19\u6307\u4ee4")),(0,r.kt)("p",null,"Program and Run Target (\u7de8\u7a0b\u53ca\u57f7\u884c\u76ee\u6a19)\u6307\u4ee4\u7684\u53e6\u4e00\u7a2e\u89f8\u767c\u65b9\u5f0f\u70ba\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F6")),(0,r.kt)("p",null,"\u201c\u751f\u6210\u7a0b\u5f0f\u78bc\u201d\u6307\u4ee4\u7684\u53e6\u4e00\u7a2e\u89f8\u767c\u65b9\u5f0f\u662f\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("h4",m({},{id:"run-target-internal"}),"Program Internal Flash and Run Target (\u7de8\u7a0b\u5167\u90e8Flash\u53ca\u57f7\u884c\u76ee\u6a19)"),(0,r.kt)("p",null,"\u5982\u679c\u555f\u7528",(0,r.kt)("a",m({parentName:"p"},{href:"config-view#flash-target-internal-command"}),"Flash Target Internal Command")," (Flash\u76ee\u6a19\u5167\u90e8\u6307\u4ee4)\uff0c\u5247\u300cProgram and Run Target\u300d(\u7de8\u7a0b\u53ca\u57f7\u884c\u76ee\u6a19)\u6309\u9215\u5c31\u6703\u8b8a\u66f4\u5916\u89c0\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-target-options.png",mdxType:"Figure"}),(0,r.kt)("p",null,"\u9019\u5c07\u6703\u63d0\u4f9b\u9078\u9805\u5728\u300cProgram Internal Flash mode\u300d(\u7de8\u7a0b\u5167\u90e8Flash\u6a21\u5f0f)\u4e2d\u57f7\u884c\u76ee\u6a19\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-target-options-opened.png",mdxType:"Figure"}),(0,r.kt)("p",null,"\u5982\u679c\u9078\u53d6\u300cProgram Internal Flash\u300d(\u7de8\u7a0b\u5167\u90e8Flash)\u9078\u9805\uff0c\u300cProgram and Run Target\u300d(\u7de8\u7a0b\u53ca\u57f7\u884c\u76ee\u6a19)\u6309\u9215\u5c07\u57f7\u884c\u5728",(0,r.kt)("a",m({parentName:"p"},{href:"config-view#flash-target-internal-command"}),"Flash Target Internal Command")," (Flash\u76ee\u6a19\u5167\u90e8\u6307\u4ee4)\u6307\u5b9a\u7684\u6307\u4ee4\uff0c\u7528\u65bc\u6700\u4f73\u5316\u71d2\u9304\u6642\u9593\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-internal-flash.png",mdxType:"Figure"}),(0,r.kt)(d.Z,{mdxType:"FurtherReading"},"\u8acb",(0,r.kt)(u.Z,{to:"../working-with-touchgfx/compiling-and-flashing",mdxType:"Link"},"\u5728\u6b64"),"\u6df1\u5165\u77ad\u89e3\u5982\u4f55\u4f7f\u7528\u5167\u90e8\u71d2\u9304\u4ee5\u6539\u5584\u71d2\u9304\u6642\u9593\u3002"),(0,r.kt)("h2",m({},{id:"notification-bar"}),"\u901a\u77e5\u6b04"),(0,r.kt)("p",null,"\u901a\u77e5\u6b04\u4f4d\u65bc\u4e3b\u8996\u7a97\u5e95\u90e8\uff0c\u986f\u793a\u7576\u524d\u6b63\u5728\u904b\u884c\u7684\u6307\u4ee4\u7684\u72c0\u614b\u3002 \u5982\u679c\u6307\u4ee4\u904b\u884c\u5931\u6557\uff0c\u901a\u77e5\u6b04\u4e2d\u7684\u6587\u5b57\u5c07\u8b8a\u70ba\u7d05\u8272\uff0c\u4e26\u5c07\u986f\u793a\u5931\u6557\u7684\u6307\u4ee4\u548c\u932f\u8aa4\u5716\u793a\u3002 \u6210\u529f\u7684\u6307\u4ee4\u5c07\u9996\u5148\u8b8a\u70ba\u7da0\u8272\uff0c\u7136\u5f8c\u5f9e\u901a\u77e5\u6b04\u4e2d\u6e05\u9664\uff0c\u800c\u5931\u6557\u7684\u6307\u4ee4\u6703\u7e7c\u7e8c\u986f\u793a\uff0c\u76f4\u81f3\u53e6\u4e00\u500b\u6307\u4ee4\u958b\u59cb\u904b\u884c\u3002"),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-success.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u4e2d\u7684\u6210\u529f\u901a\u77e5\u6b04"),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-fail.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u4e2d\u7684\u5931\u6557\u901a\u77e5\u6b04"),(0,r.kt)("h2",m({},{id:"detailed-log"}),"\u8a73\u7d30\u8a18\u9304"),(0,r.kt)("p",null,"\u9ede\u64ca\u901a\u77e5\u6b04\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\u90fd\u5c07\u6253\u958b\u4e00\u500b\u8996\u7a97\uff0c\u986f\u793aTouchGFX Designer\u904b\u884c\u7684\u4e0a\u4e00\u689d\u6307\u4ee4\u7684\u5b8c\u6574\u8a18\u9304\u3002 \u6307\u4ee4\u57f7\u884c\u7684\u8f38\u51fa\u5c07\u6d41\u5165\u8a72\u7a97\u53e3",(0,r.kt)("em",{parentName:"p"},"\uff08\u898b\u4e0b\u9762GIF\u52d5\u756b\uff09"),"\uff0c\u9ede\u64ca\u8a73\u7d30\u65e5\u8a8c\u8996\u7a97\u53f3\u4e0a\u89d2\u7684\u6d6e\u7a97/\u53bb\u6d6e\u7a97\u6309\u9215\uff0c\u65e5\u8a8c\u8996\u7a97\u53ef\u4ee5\u662f\u6d6e\u7a97\u5316\uff0c\u6216\u6062\u5fa9\u9ed8\u8a8d\u3002"),(0,r.kt)("p",null,"\u201c\u8a73\u7d30\u8a18\u9304\u201d\u8996\u7a97\u7684\u53e6\u4e00\u7a2e\u5207\u63db\u65b9\u5f0f\u662f\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + L")),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/designer-main-window-log.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u4e2d\u7684\u8a73\u7d30\u8a18\u9304"),(0,r.kt)("h2",m({},{id:"update-banner"}),"\u66f4\u65b0\u6a6b\u5e45"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-update-banner.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6b64\u6a6b\u5e45\u7528\u65bc\u544a\u77e5\u4f7f\u7528\u8005\u5404\u9805\u91cd\u8981\u66f4\u65b0\u8a0a\u606f\uff0c\u4f8b\u5982\u65b0\u7684TouchGFX\u7248\u672c\u3002 \u82e5\u8981\u95dc\u9589\u6a6b\u5e45\uff0c\u8acb\u6309\u4e0b\u6a6b\u5e45\u53f3\u5074\u7684X\u6309\u9215\u3002 \u6a6b\u5e45\u5c07\u4e0d\u518d\u986f\u793a\u5df2\u95dc\u9589\u7684\u66f4\u65b0\u8a0a\u606f\u3002"),(0,r.kt)("h2",m({},{id:"theme"}),"\u4e3b\u984c"),(0,r.kt)("p",null,"TouchGFX Designer\u652f\u63f4\u6dfa\u8272\u548c\u6df1\u8272\u4e3b\u984c\uff08\u53c3\u898b\u4e0b\u5716\uff09\u3002 \u60a8\u53ef\u4ee5\u5728",(0,r.kt)("a",m({parentName:"p"},{href:"file-menu#project-file-menu-file"}),"File Menu"),"(\u6a94\u6848\u9078\u55ae)\u4e2d\u4f9d\u64da\u559c\u597d\u5207\u63db\u4e3b\u984c\u3002"),(0,r.kt)(o.Z,{points:[[40,25]],imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-light.png",mdxType:"FigureWithPoints"},"TouchGFX Designer\u6dfa\u8272\u4e3b\u984c"),(0,r.kt)(o.Z,{points:[[40,25]],imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-dark.png",mdxType:"FigureWithPoints"},"TouchGFX Designer\u6df1\u8272\u4e3b\u984c"))}k.isMDXComponent=!0}}]);