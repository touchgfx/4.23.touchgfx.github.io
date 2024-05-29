"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[22676],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||s[h]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=o},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),o=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:l,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:l,src:a})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=o},49018:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}const i=a},95193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>h});n(59496);var r=n(49613),o=n(89639),l=n(49018),a=n(28128);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"09-touch-controller",title:"9. \u89e6\u6478\u63a7\u5236\u5668",sidebar_label:"9. \u89e6\u6478\u63a7\u5236\u5668"},p=void 0,d={unversionedId:"development/board-bring-up/how-to/09-touch-controller",id:"development/board-bring-up/how-to/09-touch-controller",title:"9. \u89e6\u6478\u63a7\u5236\u5668",description:"\u52a8\u673a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/09-touch-controller.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/09-touch-controller",permalink:"/4.23/zh-CN/docs/development/board-bring-up/how-to/09-touch-controller",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"09-touch-controller",title:"9. \u89e6\u6478\u63a7\u5236\u5668",sidebar_label:"9. \u89e6\u6478\u63a7\u5236\u5668"},sidebar:"docs",previous:{title:"8. \u786c\u4ef6\u52a0\u901f\u5668",permalink:"/4.23/zh-CN/docs/development/board-bring-up/how-to/08-hardware-acceleration"},next:{title:"10. \u6309\u94ae",permalink:"/4.23/zh-CN/docs/development/board-bring-up/how-to/10-physical-buttons"}},s={},h=[{value:"\u52a8\u673a",id:"motivation",level:2},{value:"\u76ee\u6807",id:"goal",level:2},{value:"\u9a8c\u8bc1",id:"verification",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u6267\u884c",id:"do",level:2},{value:"\u6027\u80fd\u7b26\u5408\u9884\u671f",id:"performance-is-as-expected",level:3}],m={toc:h},g="wrapper";function v(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(g,i({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"\u5fc5\u987b\u80fd\u591f\u4ece\u89e6\u6478\u63a7\u5236\u5668\u8bfb\u53d6\u89e6\u6478\u5750\u6807\uff0c\u4ee5\u4fbf\u7528\u6237\u4e0e\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002 \u6b64\u5904\u5f00\u53d1\u7684\u4ee3\u7801\u5c06\u88ab\u7528\u4e8e\u4ee5\u540e\u5f00\u53d1TouchGFX\u62bd\u8c61\u5c42\u3002"),(0,r.kt)(l.Z,{mdxType:"Note"},"\u5982\u679c\u60a8\u7684\u5f00\u53d1\u677f\u4e0d\u5e26\u89e6\u6478\u63a7\u5236\u5668\uff0c\u8bf7\u8df3\u8fc7\u8be5\u6b65\u3002"),(0,r.kt)("h2",i({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"\u6b64\u6b65\u9aa4\u7684\u76ee\u6807\u662f\u786e\u4fdd\u4ece\u663e\u793a\u5c4f\u7684\u89e6\u6478\u63a7\u5236\u5668\u53ef\u9760\u8bfb\u53d6\u89e6\u6478\u5750\u6807\u3002"),(0,r.kt)("h3",i({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u5df2\u914d\u7f6e\u89e6\u6478\u63a7\u5236\u5668\u548cMCU"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"MCU\u5fc5\u987b\u914d\u7f6e\u4e3a\u901a\u8fc7I2C\u7b49\u4ece\u89e6\u6478\u63a7\u5236\u5668\u8bfb\u53d6\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u53ef\u8bfb\u53d6\u89e6\u6478\u63a7\u5236\u5668\u5bc4\u5b58\u5668"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"TouchGFX\u62bd\u8c61\u5c42\u53ef\u4f7f\u7528\u6b64\u4ee3\u7801\u4ece\u63a7\u5236\u5668\u83b7\u53d6\u89e6\u6478\u5750\u6807\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u8bfb\u53d6\u64cd\u4f5c\u6309\u9884\u671f\u8fdb\u884c"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u8f6e\u8be2\u662f\u5e94\u7528\u7a0b\u5e8f\u6e32\u67d3\u65f6\u95f4\u7684\u4e00\u90e8\u5206\u3002 \u5982\u679c\u89e6\u6478\u8f6e\u8be2\u82b1\u8d39\u7684\u65f6\u95f4\u592a\u957f\uff0c\u5219\u5e94\u5c06\u5176\u79fb\u81f3\u5176\u4ed6\u7ebf\u7a0b\uff0c\u6216\u57fa\u4e8e\u4e2d\u65ad\u8bfb\u53d6\u5750\u6807\u3002")))),(0,r.kt)("h2",i({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e26\u89e6\u6478\u63a7\u5236\u5668\u7684\u663e\u793a\u5c4f"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u4ece\u89e6\u6478\u63a7\u5236\u5668\u8bfb\u53d6\u6570\u636e\u7684\u9a71\u52a8\u7a0b\u5e8f")),(0,r.kt)("h2",i({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"\u6b64\u6b65\u9aa4\u5305\u542b\u4e24\u4e2a\u5143\u7d20\uff1a\u57fa\u4e8e\u89e6\u6478\u63a7\u5236\u5668\u7684\u901a\u4fe1\u9700\u6c42\uff0c\u5bf9MCU\u8fdb\u884c\u914d\u7f6e\uff0c\u540c\u65f6\u7f16\u5199\u9a71\u52a8\u7a0b\u5e8f\u5b9e\u73b0MCU\u4e0e\u89e6\u6478\u63a7\u5236\u5668\u7684\u5bf9\u8bdd\u3002"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u89e6\u6478\u63a7\u5236\u5668\u8fde\u63a5\u81f3I2C\u603b\u7ebf\u3002 \u5728STM32CubeMX\u4e2d\uff0cI2C\u901a\u4fe1\u5728 Connectivity -> I2C1: I2C1\u4e0b\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/touch/cubemx-01.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u914d\u7f6eI2C"),(0,r.kt)("p",null,"\u8bb8\u591aSTM32 MCU\u5177\u6709\u4e0d\u6b62\u4e00\u4e2aI2C\u63a7\u5236\u5668\uff0c\u56e0\u6b64\u8bf7\u9009\u62e9\u4e00\u4e2a\u8fde\u63a5\u81f3\u89e6\u6478\u63a7\u5236\u5668\u3002 \u53e6\u5916\uff0c\u8bf7\u8bb0\u4f4f\u914d\u7f6e\u76f8\u5173GPIO\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u7528\u4e8e\u89e6\u6478\u63a7\u5236\u5668\u7684\u9a71\u52a8\u4ee3\u7801\uff0c\u5219\u9700\u8981\u4ece\u5934\u5f00\u59cb\u7f16\u5199\u3002 MCU\u7684STM32Cube\u56fa\u4ef6\u5305\u542b\u4e86I2C\u901a\u4fe1\u793a\u4f8b\u3002 \u8fd9\u4e9b\u793a\u4f8b\u53ef\u4f5c\u4e3a\u8d77\u70b9\u3002 \u6839\u636e\u89e6\u6478\u63a7\u5236\u5668\u7684\u6570\u636e\u624b\u518c\uff0c\u786e\u8ba4\u901a\u8fc7\u8bfb\u53d6\u54ea\u4e9b\u5bc4\u5b58\u5668\u53ef\u4ee5\u83b7\u53d6\u89e6\u6478\u5750\u6807\u3002 \u9996\u5148\u8981\u68c0\u67e5\u7684\u662f\u89e6\u6478\u63a7\u5236\u5668\u7684I2C\u5730\u5740\uff0c\u7136\u540e\u8bfb\u53d6\u201c\u8bbe\u5907ID\u201d\u5bc4\u5b58\u5668\uff0c\u4ee5\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u5f00\u53d1\u9a71\u52a8\u7a0b\u5e8f\u786e\u4fddI2C\u6b63\u5e38\u8fd0\u884c\uff0c\u7a0d\u540e\u4e0eTouchGFX\u96c6\u6210\u65f6\u5c06\u7528\u5230\u6b64\u51fd\u6570\u3002 \u5982\u679c\u6709\u89e6\u6478\uff0c\u51fd\u6570\u5e94\u8fd4\u56de\u771f\u503c\u5e76\u63d0\u4f9b\u5750\u6807\uff0c\u5426\u5219\u8fd4\u56de\u5047\u503c\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u6b64\u4ee3\u7801\u7684\u6846\u67b6\uff0c\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u88ab\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"myTouchController_GetState"),"\u62bd\u8c61\u5316:"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"    uint16_t x;\n    uint16_t y;\n\n    TouchControllerState state;\n    if (myTouchController_GetState(&state))\n    {\n        x = state.touchY;\n        y = state.touchX;\n        //break point here\n    }\n")),(0,r.kt)("p",null,"\u501f\u52a9\u8c03\u8bd5\u5668\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u4ece\u89e6\u6478\u63a7\u5236\u5668\u63a5\u6536\u5230\u6b63\u786e\u7684x\u503c\u548cy\u503c\u3002"),(0,r.kt)("p",null,"\u4e00\u4e9b\u89e6\u6478\u63a7\u5236\u5668\u80fd\u591f\u62a5\u544a\u591a\u4e2a\u89e6\u6478\u70b9\u3002 TouchGFX\u4e0d\u652f\u6301\u6b64\u529f\u80fd\uff0c\u6b64\u5904\u5ffd\u7565\u3002 \u901a\u5e38\uff0c\u60a8\u53ea\u9700\u9009\u62e9\u7b2c\u4e00\u4e2a\u63a5\u89e6\u70b9\u3002"),(0,r.kt)("p",null,'"TouchGFX AL\u5f00\u53d1\u201d\u6587\u7ae0',(0,r.kt)("a",i({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-architecture#report-touch-and-physical-button-events"}),"\u62bd\u8c61\u5c42"),"\u89e3\u91ca\u4e86\u5982\u4f55\u5c06\u8fd9\u4e9b\u503c\u53d1\u9001\u81f3TouchGFX\u3002"),(0,r.kt)("h3",i({},{id:"performance-is-as-expected"}),"\u6027\u80fd\u7b26\u5408\u9884\u671f"),(0,r.kt)("p",null,"\u5982\u679c\u89e6\u6478\u4ee3\u7801\u4e0eTouchGFX\u5e94\u7528\u7a0b\u5e8f\u5728\u76f8\u540c\u7684\u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u5219\u89e6\u6478\u91c7\u6837\u53ef\u4ee5\u57281 ms\u5185\u5b8c\u6210\u3002 \u5982\u679c\u901f\u5ea6\u4e0d\u591f\u5feb\uff0c\u8bf7\u8003\u8651\u540e\u671f\u5c06\u8fd9\u90e8\u5206\u4ee3\u7801\u4f5c\u4e3a\u5176\u5b83\u72ec\u7acb\u4efb\u52a1\u3002"))}v.isMDXComponent=!0}}]);