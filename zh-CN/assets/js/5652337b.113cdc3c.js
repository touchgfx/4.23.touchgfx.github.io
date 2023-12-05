"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[62533],{49613:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>d});var l=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(o,".").concat(m)]||c[m]||g[m]||r;return n?l.createElement(d,i(i({ref:e},k),{},{components:n})):l.createElement(d,i({ref:e},k))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[c]="string"==typeof t?t:a,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61235:(t,e,n)=>{n.d(e,{Z:()=>r});var l=n(59496);class a extends l.Component{render(){return l.createElement("div",{className:"code-header"},l.createElement("div",null,l.createElement("h5",null,this.props.children)))}}const r=a},12822:(t,e,n)=>{n.d(e,{Z:()=>r});var l=n(59496),a=n(32118);const r=function(t){const e=t.noShadow||!1,n=t.width,r=t.height,i=(0,a.Z)(t.imageSource);return e?l.createElement("div",{className:"figure noshadow"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,t.children)):l.createElement("div",{className:"figure"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,t.children))}},89588:(t,e,n)=>{n.d(e,{Z:()=>r});var l=n(59496);class a extends l.Component{render(){const t=`highlight highlight-${this.props.type}`;return l.createElement("div",{className:t},l.createElement("div",{className:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{className:"highlight-content"},this.props.children))}}const r=a},39331:(t,e,n)=>{n.d(e,{Z:()=>u});var l=n(59496),a=n(89588);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends l.Component{render(){return l.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}const u=i},37924:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>k,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(59496);var l=n(49613),a=n(12822),r=n(39331),i=n(61235);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},u.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={id:"tutorial-06-part-1",title:"\u7b2c1\u90e8\u5206\u2014\u2014\u5b57\u4f53\u6392\u5370\u548c\u8bed\u8a00"},k=void 0,c={unversionedId:"tutorials/tutorial-06/tutorial-06-part-1",id:"tutorials/tutorial-06/tutorial-06-part-1",title:"\u7b2c1\u90e8\u5206\u2014\u2014\u5b57\u4f53\u6392\u5370\u548c\u8bed\u8a00",description:"\u5728\u6559\u7a0b6\u7684\u7b2c\u4e00\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5c06\u9996\u5148\u4e86\u89e3\u5982\u4f55\u521b\u5efa\u65b0\u7684\u5b57\u4f53\u6392\u5370\uff0c\u7136\u540e\u4e86\u89e3\u5982\u4f55\u53d8\u66f4\u5e94\u7528\u7a0b\u5e8f\u7684\u8bed\u8a00\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/tutorial-06/tutorial-06-part-1.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-part-1",permalink:"/4.23/zh-CN/docs/tutorials/tutorial-06/tutorial-06-part-1",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-part-1",title:"\u7b2c1\u90e8\u5206\u2014\u2014\u5b57\u4f53\u6392\u5370\u548c\u8bed\u8a00"},sidebar:"docs",previous:{title:"\u6559\u7a0b6\uff1a\u4f7f\u7528TextAreas",permalink:"/4.23/zh-CN/docs/tutorials/tutorial-06/tutorial-06-introduction"},next:{title:"\u7b2c\u4e8c\u90e8\u5206\u2013TextArea\u5916\u89c2\u548c\u901a\u914d\u7b26",permalink:"/4.23/zh-CN/docs/tutorials/tutorial-06/tutorial-06-part-2"}},g={},m=[{value:"\u7b2c1\u6b65\uff1a\u8bbe\u7f6e\u5c4f\u5e55",id:"step-1-setting-up-the-screen",level:2},{value:"\u7b2c2\u6b65\uff1a\u521b\u5efa\u65b0\u5b57\u4f53\u6392\u5370",id:"step-2-creating-new-typographies",level:2},{value:"\u521b\u5efa\u5b57\u4f53\u6392\u5370",id:"creating-typography",level:3},{value:"\u53d8\u66f4\u63a7\u4ef6\u5b57\u4f53\u6392\u5370",id:"change-the-typography-of-a-widget",level:3},{value:"\u7b2c3\u6b65\uff1a\u53d8\u66f4\u8bed\u8a00",id:"step-3-change-the-language",level:2},{value:"\u521b\u5efa\u65b0\u8bed\u8a00",id:"create-a-new-language",level:3},{value:"\u53d8\u66f4\u8bed\u8a00",id:"change-language",level:3},{value:"\u6dfb\u52a0\u5b57\u4f53",id:"add-font",level:3},{value:"\u7528\u4ee3\u7801\u53d8\u66f4\u8bed\u8a00",id:"change-language-with-code",level:3}],d={toc:m},s="wrapper";function h(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)(s,u({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728\u6559\u7a0b6\u7684\u7b2c\u4e00\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5c06\u9996\u5148\u4e86\u89e3\u5982\u4f55\u521b\u5efa\u65b0\u7684\u5b57\u4f53\u6392\u5370\uff0c\u7136\u540e\u4e86\u89e3\u5982\u4f55\u53d8\u66f4\u5e94\u7528\u7a0b\u5e8f\u7684\u8bed\u8a00\u3002"),(0,l.kt)("h2",u({},{id:"step-1-setting-up-the-screen"}),"\u7b2c1\u6b65\uff1a\u8bbe\u7f6e\u5c4f\u5e55"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u672c\u6559\u7a0b\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u5c4f\u5e55\u6765\u663e\u793a\u4e00\u4e9b\u6587\u672c\u3002 \u8981\u5728\u8bed\u8a00\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\uff0c\u6211\u4eec\u8981\u4f7f\u7528\u4e00\u4e2a\u6309\u94ae\u63a7\u4ef6\u3002 \u6211\u4eec\u8fd8\u9700\u8981\u53e6\u4e00\u4e2a\u6309\u94ae\u6765\u201c\u8c03\u6574\u201d\u4e00\u4e0b\u6587\u672c\uff1a\u53d8\u66f4\u5185\u5bb9\u3001\u989c\u8272\u3001\u884c\u8ddd\u548c\u7f29\u8fdb\u3002"),(0,l.kt)("p",null,"Let us begin with a 800*480 dimensioned new blank canvas (compatible for STM32F469I DISCO B-07 discovery kit for example). \u63d2\u5165\u63a7\u4ef6\u5e76\u66f4\u65b0\u5c5e\u6027\uff0c\u5982\u4e0b\u5217\u8868\u683c\u6240\u793a\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u63a7\u4ef6"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5c5e\u6027"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"Box"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u79f0\uff1abackgroundBox"),(0,l.kt)("li",null,"\u4f4d\u7f6e:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 0, Y: 0"),(0,l.kt)("li",null,"W: 800, H: 480"))),(0,l.kt)("li",null,"\u5916\u89c2:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u989c\u8272\uff1a #FFFFFF")))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"TextArea"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u79f0\uff1adescriptionTextArea"),(0,l.kt)("li",null,"\u4f4d\u7f6e:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 110, Y: 85"),(0,l.kt)("li",null,"W: 580, H: 70"))),(0,l.kt)("li",null,"\u6587\u672c:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Translation: In this tutorial, you will learn ",(0,l.kt)("br",null)," how to use and configure a TextArea"))),(0,l.kt)("li",null,"\u5916\u89c2:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u989c\u8272\uff1a#FF0000")))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"TextArea"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u79f0\uff1ainformationTextArea"),(0,l.kt)("li",null,"\u4f4d\u7f6e:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 190, Y: 180"),(0,l.kt)("li",null,"W: 420, H: 30"))),(0,l.kt)("li",null,"\u6587\u672c:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u7ffb\u8bd1\uff1a\u884c\u8ddd\u4e3a","<",">","\uff0c\u989c\u8272\u4e3a","<",">"),(0,l.kt)("li",null,"\u901a\u914d\u7b26: 1",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u4f7f\u7528\u901a\u914d\u7b26\u7f13\u51b2\u533a\uff1a\u6709"),(0,l.kt)("li",null,"\u521d\u59cb\u503c\uff1a 0"),(0,l.kt)("li",null,"\u7f13\u5b58\u5927\u5c0f\uff1a10"))),(0,l.kt)("li",null,"\u901a\u914d\u7b26 2\uff1a",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u4f7f\u7528\u901a\u914d\u7b26\u7f13\u51b2\u533a\uff1a\u6709"),(0,l.kt)("li",null,"\u521d\u59cb\u503c\uff1a\u7ea2\u8272"),(0,l.kt)("li",null,"\u7f13\u5b58\u5927\u5c0f\uff1a10")))))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u5e26\u6807\u7b7e\u7684\u6309\u94ae"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u79f0\uff1alanguageButton"),(0,l.kt)("li",null,"\u4f4d\u7f6e:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 110, Y: 300"))),(0,l.kt)("li",null,"\u6587\u672c:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u7ffb\u8bd1\uff1a\u8bed\u8a00")))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u5e26\u6807\u7b7e\u7684\u6309\u94ae"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u540d\u79f0\uff1aappearanceButton"),(0,l.kt)("li",null,"\u4f4d\u7f6e:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 450, Y: 300"))),(0,l.kt)("li",null,"\u6587\u672c:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u7ffb\u8bd1\uff1a\u5916\u89c2")))))))),(0,l.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u7684\u753b\u5e03\u76ee\u524d\u5e94\u8be5\u662f\u8fd9\u6837\u7684\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/canvas-of-the-application-1.webp",mdxType:"Figure"},"\u5e94\u7528\u7a0b\u5e8f\u753b\u5e03"),(0,l.kt)("h2",u({},{id:"step-2-creating-new-typographies"}),"\u7b2c2\u6b65\uff1a\u521b\u5efa\u65b0\u5b57\u4f53\u6392\u5370"),(0,l.kt)("p",null,"\u8fd9\u4e00\u6b65\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e24\u4e2a\u65b0\u7684\u5b57\u4f53\u6392\u5370\uff0c\u4e4b\u524d\u521b\u5efa\u7684TextAreas\u548cButton\uff08\u6309\u94ae\uff09\u5c06\u4f1a\u7528\u5230\u8fd9\u4e9b\u5b57\u4f53\u6392\u5370\u3002"),(0,l.kt)("h3",u({},{id:"creating-typography"}),"\u521b\u5efa\u5b57\u4f53\u6392\u5370"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-typography.webp",mdxType:"Figure"},"\u521b\u5efa\u65b0\u5b57\u4f53\u6392\u5370"),(0,l.kt)("p",null,"\u5728TouchGFX \u8bbe\u8ba1\u5668\u4e2d\uff0c\u8fdb\u5165Text\uff08\u6587\u672c\uff09\u9009\u9879\u5361\uff0c\u7136\u540e\u8fdb\u5165\u5c4f\u5e55\u9876\u90e8\u7684Typography\uff08\u5b57\u4f53\u6392\u5370\uff09\u90e8\u5206\u3002 \u70b9\u51fb\u201c+\u201d\u56fe\u6807\u521b\u5efa\u65b0\u5b57\u4f53\u6392\u5370\u3002"),(0,l.kt)("p",null,"\u6b63\u5982\u60a8\u5728\u53f3\u4fa7\u770b\u5230\u7684\uff0c\u4f7f\u7528\u65b0\u5b57\u4f53\u6392\u5370\u4e4b\u524d\uff0c\u6709\u591a\u4e2a\u8bbe\u7f6e\u9700\u8981\u914d\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b57\u4f53\u6392\u5370id\uff1a"),"\u4e3a\u60a8\u7684\u5b57\u4f53\u6392\u5370\u547d\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b57\u4f53\uff1a"),"\u60a8\u53ef\u4ee5\u5728Windows\u4e2d\u6240\u6709\u5df2\u5b89\u88c5\u7684\u5b57\u4f53\u95f4\u8fdb\u884c\u9009\u62e9\uff0c\u4e5f\u53ef\u4ee5\u5bfc\u5165\u60a8\u9009\u62e9\u7684\u5b57\u4f53\uff08\u5177\u4f53\u64cd\u4f5c\u89c1\u672c\u6559\u7a0b\u7684\u4e0b\u4e00\u6b65\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5927\u5c0f\uff1a"),"\u5b57\u4f53\u6392\u5370\u7684\u5b57\u4f53\u5927\u5c0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bpp\uff1a"),"\u4f4d/\u50cf\u7d20\u3002 \u6bcf\u4e2a\u50cf\u7d20\u7528\u6765\u4ee3\u8868\u5b57\u4f53\u7684\u4f4d\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Direction\uff08\u65b9\u5411\uff09\uff1a"),"\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4ece\u5de6\u5411\u53f3\u6216\u4ece\u53f3\u5411\u5de6\u5199\uff0c\u5219\u53ef\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u8bed\u8a00\u9009\u62e9\u65b9\u5411\u3002 \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u201c\u4ece\u5de6\u5230\u53f3\u201d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Fallback Characters\uff08\u56de\u9000\u5b57\u7b26\uff09\uff1a"),"\u5982\u679cTouchGFX\u9700\u8981\u6e32\u67d3\u5b57\u7b26\uff0c\u4f46\u5b57\u5f62\u4e0d\u53ef\u7528\uff0c\u5219\u4f7f\u7528\u6307\u5b9a\u7684\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Wildcard Characters\uff08\u901a\u914d\u7b26\uff09\uff1a"),"\u53ef\u4ee5\u5728TextArea\u7684\u901a\u914d\u7b26\u5185\u663e\u793a\u7684\u5b57\u7b26\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Widget Wildcard Characters\uff08\u63a7\u4ef6\u901a\u914d\u7b26\uff09\uff1a"),"\u67d0\u4e9b\u63a7\u4ef6\u9700\u8981\u7684\u5b57\u7b26\u3002 \u4f8b\u5982\uff0c\u6570\u5b57\u65f6\u949f\u63a7\u9700\u8981\u4ee5\u4e0b\u5b57\u7b26\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\uff1a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Wildcard Ranges\uff08\u901a\u914d\u7b26\u8303\u56f4\uff09\uff1a"),"\u548cWildcard Characters\u7c7b\u4f3c\uff0c\u4f46\u53ef\u6307\u5b9a\u8303\u56f4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ellipsis Characters\uff08\u7701\u7565\u53f7\u5b57\u7b26\uff09\uff1a"),"\u6b64\u5b57\u7b26\u7528\u4e8e\u622a\u65ad\u6587\u672c\u533a\u57df\u4e2d\u7684\u957f\u6587\u672c\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\u6dfb\u52a0\u4ee5\u4e0b\u5b57\u4f53\u6392\u5370\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5b57\u4f53\u6392\u5370Id"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u8bed\u8a00\u8bbe\u7f6e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"informationTypography"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u5b57\u4f53\uff1aTimes New Roman"),(0,l.kt)("li",null,"Size: 20",(0,l.kt)("ul",null)),(0,l.kt)("li",null,"Wildcard \u8303\u56f4\uff1aa-z,0-9,A-Z")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"descriptionTypography"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u5b57\u4f53\uff1aComic Sans MS"),(0,l.kt)("li",null,"Size: 26",(0,l.kt)("ul",null))))))),(0,l.kt)("h3",u({},{id:"change-the-typography-of-a-widget"}),"\u53d8\u66f4\u63a7\u4ef6\u5b57\u4f53\u6392\u5370"),(0,l.kt)("p",null,"\u521b\u5efa\u5b57\u4f53\u6392\u5370\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u53d8\u66f4\u63a7\u4ef6\u5b57\u4f53\u6392\u5370\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/changing-the-typography-of-informationtextarea.webp",mdxType:"Figure"},"\u53d8\u66f4informationTextArea\u7684\u5b57\u4f53\u6392\u5370"),(0,l.kt)("p",null,"\u8fd4\u56deCanvas\uff08\u753b\u5e03\uff09\u9009\u9879\u5361\u5e76\u9009\u62e9",(0,l.kt)("em",{parentName:"p"},"informationTextArea"),"\u3002 \u5728\u53f3\u4fa7\u9762\u677f\u7684\u6587\u672c\u7c7b\u522b\u4e2d\uff0c\u53ef\u4ee5\u4fee\u6539\u5b57\u4f53\u6392\u5370\u3002 \u5c06\u5176\u53d8\u66f4\u4e3a",(0,l.kt)("em",{parentName:"p"},"informationTypography"),"\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u5bf9\u5176\u5b83\u63a7\u4ef6\u6267\u884c\u540c\u6837\u7684\u64cd\u4f5c\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u63a7\u4ef6"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5b57\u4f53\u6392\u5370"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"descriptionTextArea"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"descriptionTypography")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"appearanceButton"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"informationTypography")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"languageButton"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"informationTypography")))),(0,l.kt)("p",null,"\u73b0\u5728\u753b\u5e03\u5e94\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/canvas-of-the-application-2.webp",mdxType:"Figure"},"\u5e94\u7528\u7a0b\u5e8f\u753b\u5e03"),(0,l.kt)("h2",u({},{id:"step-3-change-the-language"}),"\u7b2c3\u6b65\uff1a\u53d8\u66f4\u8bed\u8a00"),(0,l.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4e86\u89e3\u5982\u4f55\u5411\u5e94\u7528\u7a0b\u5e8f\u6dfb\u52a0\u591a\u79cd\u8bed\u8a00\u3002"),(0,l.kt)("p",null,"TouchGFX\u652f\u6301Unicode\u57fa\u672c\u591a\u6587\u79cd\u5e73\u9762\u7684\u5927\u591a\u6570\u8bed\u8a00\u3002 \u4e8b\u5b9e\u4e0a\uff0c\u652f\u6301\u4ece\u5de6\u5230\u53f3\u6216\u4ece\u53f3\u5230\u5de6\u7684\u4e66\u5199\u7cfb\u7edf\uff08\u5782\u76f4\u4e66\u5199\u4e0d\u652f\u6301\uff09\uff0c\u56e0\u6b64\u5305\u62ec\u963f\u62c9\u4f2f\u8bed\u3001\u82f1\u8bed\u3001\u7e41\u4f53\u4e2d\u6587\u548c\u7b80\u4f53\u4e2d\u6587\u7b49\u8bed\u8a00\u3002 \u5982\u679c\u60a8\u60f3\u4e86\u89e3\u66f4\u591a\u652f\u6301\u7684\u8bed\u8a00\uff0c\u8bf7\u53c2\u9605\uff1a",(0,l.kt)("a",u({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"}),"\u8bed\u8a00\u548c\u5b57\u7b26|TouchGFX\u6587\u6863")),(0,l.kt)("h3",u({},{id:"create-a-new-language"}),"\u521b\u5efa\u65b0\u8bed\u8a00"),(0,l.kt)("p",null,"\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u51b3\u5b9a\u6dfb\u52a0\u4e2d\u6587\u548c\u97e9\u8bed\uff0c\u4ee5\u4e86\u89e3TouchGFX \u8bbe\u8ba1\u5668\u5728\u5904\u7406\u4e2d\u6587\u5b57\u7b26\u65f6\u7684\u884c\u4e3a\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-language.webp",mdxType:"Figure"},"\u521b\u5efa\u65b0\u8bed\u8a00"),(0,l.kt)("p",null,"\u9009\u62e9\u5de6\u4fa7\u9762\u677f\u4e0a\u7684Texts\uff08\u6587\u672c\uff09\uff0c\u9009\u62e9 Unsorted\uff08\u672a\u6392\u5e8f\uff09\uff0c\u7136\u540e\u5355\u51fb\u201c+\u201d\uff0c\u5982\u4e0a\u56fe\u6240\u793a\u3002 \u5c06\u51fa\u73b0\u4e00\u4e2a\u5c0f\u7a97\u53e3\u6765\u6dfb\u52a0\u65b0\u8bed\u8a00\u3002 \u4e3a\u97e9\u8bed\u521b\u5efa\u540d\u4e3aKO\u7684\u8bed\u8a00\uff0c\u4e3a\u6c49\u8bed\u521b\u5efa\u540d\u4e3aCH\u7684\u8bed\u8a00\u3002"),(0,l.kt)("p",null,"\u6dfb\u52a0\u65b0\u8bed\u8a00\u540e\uff0c\u6211\u4eec\u5c06\u624b\u52a8\u8f93\u5165\u8be5\u5e94\u7528\u7a0b\u5e8f\u6bcf\u4e2a\u6587\u672c\u7684\u6240\u6709\u7ffb\u8bd1\u3002 \u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5e0c\u671b\u4e00\u4e9b\u6587\u672c\u4ecd\u4e3a\u82f1\u8bed\uff0c\u6240\u4ee5\u8981\u505a\u7684\u53ea\u662f\u4e0d\u7ffb\u8bd1\u8bed\u8a00\u5e76\u5c06\u5176\u4ee5\u82f1\u8bed\u8868\u793a\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e24\u79cd\u8bed\u8a00\u6307\u5b9a\u4ee5\u4e0b\u7ffb\u8bd1\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"GB"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"KO"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"CH"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u7ea2\u8272"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u7ea2\u8272"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u7ea2\u8272")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"0"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"0"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u5916\u89c2"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u5916\u89c2"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u5916\u89c2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u8bed\u8a00"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u8bed\u8a00"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u8bed\u8a00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u884c\u8ddd\u4e3a","<",">","\uff0c\u989c\u8272\u4e3a","<",">"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u884c\u8ddd\u4e3a","<",">","\uff0c\u989c\u8272\u4e3a","<",">"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u884c\u8ddd\u4e3a","<",">","\uff0c\u989c\u8272\u4e3a","<",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528",(0,l.kt)("br",null)," \u5e76\u914d\u7f6eTextArea"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\uc774 \uc790\uc2b5\uc11c\uc5d0\uc11c\ub294 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ubc30\uc6c1\ub2c8\ub2e4 ",(0,l.kt)("br",null)," \ud14d\uc2a4\ud2b8 \uc601\uc5ed \ubc0f \uc0ac\uc6a9 \ubc29\ubc95"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),"\u5728\u672c\u6559\u7a0b\u4e2d \u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa ",(0,l.kt)("br",null)," \u6587\u672c\u533a\u57df\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec")))),(0,l.kt)("p",null,"\u6dfb\u52a0\u8bed\u8a00\u548c\u7ffb\u8bd1\u540e\uff0c\u6587\u672c\u9009\u9879\u5361\u5e94\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/all-translations.webp",mdxType:"Figure"},"\u6240\u6709\u7ffb\u8bd1"),(0,l.kt)("p",null,"\u6309F4\u751f\u6210\u4ee3\u7801\uff1a\u5411\u4ee3\u7801\u4e2d\u6dfb\u52a0\u8fd9\u4e24\u79cd\u8bed\u8a00\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"TextKeysAndLanguages.hpp"),"\u6587\u4ef6\uff09\u3002"),(0,l.kt)(i.Z,{mdxType:"CodeHeader"},"generated/texts/include/texts/TextKeysAndLanguages.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"/* DO NOT EDIT THIS FILE */\n/* This file is autogenerated by the text-database code generator */\n\n#ifndef TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n#define TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n\nenum LANGUAGES\n{\n    GB,\n    KO,\n    CH,\n    NUMBER_OF_LANGUAGES\n};\n\nenum TEXTS \n{\n    T___SINGLEUSE_RCBO,\n    T___SINGLEUSE_VMX0,\n    T___SINGLEUSE_V3A0,\n    T___SINGLEUSE_WECC,\n    T___SINGLEUSE_2RJI,\n    T___SINGLEUSE_E2TO,\n    NUMBER_OF_TEXT_KEYS\n};\n\n#endif // TOUCHGFX_TEXTKEYSANDLANGUAGES_HPP\n")),(0,l.kt)("h3",u({},{id:"change-language"}),"\u53d8\u66f4\u8bed\u8a00"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528TouchGFX \u8bbe\u8ba1\u5668\u53d8\u66f4\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7684\u9ed8\u8ba4\u8bed\u8a00\uff0c\u8bf7\u8fdb\u5165\u5c4f\u5e55\u5de6\u4e0b\u65b9\u7684Config\u3002 \u5355\u51fb\u6240\u9009\u8bed\u8a00\u5e76\u5c06\u8bed\u8a00\u53d8\u66f4\u4e3a\u201cKO\u201d\u3002 \u5982\u679c\u73b0\u5728\u8fd4\u56de\u753b\u5e03\u9009\u9879\u5361\uff0c\u5c06\u770b\u5230\u8bed\u8a00\u5df2\u53d8\u66f4\u3002 \u53d8\u66f4\u8bed\u8a00\u5982\u679c\u60a8\u201c\u8fd0\u884c\u6a21\u62df\u5668\u201d\uff0c\u4f1a\u53d1\u73b0TouchGFX \u8bbe\u8ba1\u5668\u65e0\u6cd5\u663e\u793a\u97e9\u8bed\u5b57\u7b26\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-1.webp",mdxType:"Figure"},"\u8fd0\u884c\u6a21\u62df\u5668"),(0,l.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u4e3a",(0,l.kt)("em",{parentName:"p"},"descriptionTextArea\uff08"),"\u201cComic sans MS\u201d\uff09\u9009\u62e9\u7684\u5b57\u4f53\u4e0d\u652f\u6301\u97e9\u6587\u6216\u4e2d\u6587\u5b57\u7b26\u3002 \u60a8\u9700\u8981\u786e\u4fdd\u6240\u4f7f\u7528\u7684\u5b57\u4f53\u652f\u6301\u8981\u663e\u793a\u7684\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u9009\u62e9\u7684\u5b57\u4f53\u4e2d\uff0c\u6ca1\u6709\u4e00\u79cd\u652f\u6301\u4e2d\u6587\u548c\u97e9\u8bed\u8fd9\u6837\u7684\u7279\u6b8a\u5b57\u7b26\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u73b0\u5728\u8981\u5bfc\u5165\u4e24\u79cd\u80fd\u5904\u7406\u6b64\u7c7b\u8bed\u8a00\u7684\u5b57\u4f53\u3002"),(0,l.kt)(r.Z,{mdxType:"Note"},"TouchGFX \u8bbe\u8ba1\u5668\u4e0a\u5df2\u6709\u7684\u5b57\u4f53\u5e76\u975e\u6211\u4eec\u6240\u6709\u3002 \u60a8\u9700\u8981\u786e\u4fdd\u60a8\u62e5\u6709\u8fd9\u4e9b\u5b57\u4f53\u7684\u8bb8\u53ef\u8bc1\uff0c\u4ee5\u4fbf\u5c06\u5176\u7528\u4e8e\u5546\u4e1a\u76ee\u7684\u3002"),(0,l.kt)("h3",u({},{id:"add-font"}),"\u6dfb\u52a0\u5b57\u4f53"),(0,l.kt)("p",null,"\u4e0b\u8f7d\u652f\u6301\u97e9\u6587\u6216\u4e2d\u6587\u5b57\u7b26\u7684\u4e24\u79cd\u5b57\u4f53\u3002 \u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4ee5\u4e0b\u514d\u8d39\u4f7f\u7528\u7684",(0,l.kt)("a",u({parentName:"p"},{href:"https://fonts.google.com/"}),"Google"),"\u5f00\u6e90\u5b57\u4f53\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",u({parentName:"li"},{href:"https://fonts.google.com/noto/specimen/Noto+Sans+KR?subset=korean"}),"\u97e9\u8bed\u7684\u201cNoto Sans Korean\u201d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",u({parentName:"li"},{href:"https://fonts.google.com/noto/specimen/Noto+Sans+SC?subset=chinese-simplified"}),"\u4e2d\u6587\u7684\u201cNoto Sans Simplified Chinese\u201d"))),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"assets\\fonts"),"\u76ee\u5f55\u4e2d\u6dfb\u52a0\u5b57\u4f53\u3002 \u6dfb\u52a0\u4e24\u79cd\u5b57\u4f53\u540e\uff0c\u5173\u95edTouchGFX \u8bbe\u8ba1\u5668\uff0c\u7136\u540e\u91cd\u65b0\u6253\u5f00\u3002"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/changing-the-font-for-a-language.webp",mdxType:"Figure"},"\u53d8\u66f4\u4e00\u79cd\u8bed\u8a00\u7684\u5b57\u4f53"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8fd4\u56deTouchGFX \u8bbe\u8ba1\u5668\u5e76\u5355\u51fb\u63cf\u8ff0",(0,l.kt)("em",{parentName:"p"},"descriptionTypography"),"\u7684\u5b57\u4f53\u5217\u8868\uff0c\u60a8\u5c06\u770b\u5230\u521a\u624d\u5bfc\u5165\u7684\u5b57\u4f53\u3002 \u5982\u679c\u60a8\u5355\u51fb\u9ed8\u8ba4\u503c\u65c1\u8fb9\u7684\u201c+\u201d\u6309\u94ae\uff0c\u5c06\u663e\u793a\u4e00\u4e2a\u5e26\u6709\u8bed\u8a00\u7684\u83dc\u5355\u3002 \u60a8\u53ef\u4ee5\u9009\u62e9\u8bed\u8a00\u5e76\u4e3a\u5176\u6dfb\u52a0\u7279\u5b9a\u5b57\u4f53\u3002"),(0,l.kt)("p",null,"\u6dfb\u52a0\u201cKO\u201d\u5e76\u5c06\u97e9\u8bed\u5b57\u4f53\u53d8\u66f4\u4e3a\u201cNoto Sans KR Thin\u201d\u3002 \u4e2d\u6587\u7684\u64cd\u4f5c\u76f8\u540c\uff0c\u6dfb\u52a0\u201cCH\u201d\u5e76\u5c06\u5b57\u4f53\u53d8\u66f4\u4e3a\u201cNoto Sans SC Thin\u201d\u3002 \u4ec5\u9002\u7528\u4e8e",(0,l.kt)("em",{parentName:"p"},"descriptionTypography"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u518d\u6b21\u5355\u51fb\u201c\u8fd0\u884c\u6a21\u62df\u5668\u201d\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u8fd9\u6b21TouchGFX \u8bbe\u8ba1\u5668\u652f\u6301\u97e9\u8bed\u5b57\u7b26\uff1a"),(0,l.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-2.webp",mdxType:"Figure"},"\u8fd0\u884c\u6a21\u62df\u5668"),(0,l.kt)("p",null,"\u4e0e\u4e4b\u524d\u4e00\u6837\uff0c\u60a8\u53ef\u4ee5\u5c06\u8bed\u8a00\uff08Config\uff08\u914d\u7f6e\uff09>General\uff08\u5e38\u89c4\uff09>Selected Language\uff08\u6240\u9009\u8bed\u8a00\uff09\u5e76\u5c06\u5176\u53d8\u66f4\u4e3a\u201cCH\u201d\uff09\u53d8\u66f4\u4e3a\u4e2d\u6587\uff0c\u5e76\u67e5\u770b\u5176\u662f\u5426\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,l.kt)("h3",u({},{id:"change-language-with-code"}),"\u7528\u4ee3\u7801\u53d8\u66f4\u8bed\u8a00"),(0,l.kt)("p",null,"\u73b0\u5728\u6dfb\u52a0\u4e00\u4e9b\u4ea4\u4e92\u5e76\u7f16\u5199\u4e00\u4e9b\u4ee3\u7801\u3002 \u5728\u672c\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5c06\u770b\u5230\u5982\u4f55\u5728\u5355\u51fb\u8bed\u8a00\u6309\u94ae\u65f6\u53d8\u66f4\u5e94\u7528\u7a0b\u5e8f\u7684\u8bed\u8a00\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u4ee5\u4e0b\u4ea4\u4e92\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u4ea4\u4e92"),(0,l.kt)("th",u({parentName:"tr"},{align:null}),"\u5c5e\u6027"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",u({parentName:"tr"},{align:null}),"ChangeLanguage"),(0,l.kt)("td",u({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u89e6\u53d1\u6761\u4ef6\uff1a\u70b9\u51fb\u6309\u94ae"),(0,l.kt)("li",null,"\u70b9\u51fb\u6e90\uff1a\u8bed\u8a00\u6309\u94ae"),(0,l.kt)("li",null,"\u64cd\u4f5c\uff1a\u8c03\u7528\u65b0\u7684\u865a\u51fd\u6570"),(0,l.kt)("li",null,"\u51fd\u6570\u540d\u79f0\uff1achangeLanguage")))))),(0,l.kt)("p",null,"\u6309\u201cGenerate Code\uff08\u751f\u6210\u4ee3\u7801\uff09\u201d\u6216\u201cRun Simulator\uff08\u8fd0\u884c\u6a21\u62df\u5668\uff09\u201d\uff0cTouchGFX \u8bbe\u8ba1\u5668\u5c06\u751f\u6210\u6307\u5b9a\u7684\u865a\u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u9996\u5148\u6574\u5408\u6309\u94ae\u7684\u51fd\u6570\u3002 \u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/include/gui/screen1_screen/Screen1View.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\n    virtual void changeLanguage();\nprotected:\n    ...\n};\n")),(0,l.kt)("p",null,"\u5e76\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),"\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\u4ee5\u5b9e\u73b0\u8be5\u529f\u80fd\uff1a"),(0,l.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeLanguage()\n{\n    int idLanguage = Texts::getLanguage()+1;\n    if (idLanguage == NUMBER_OF_LANGUAGES){\n        idLanguage = 0;\n    }\n    Texts::setLanguage(idLanguage);\n    Screen1View::invalidate();\n}\n")),(0,l.kt)("p",null,"\u8bb0\u5f97\u6dfb\u52a0\u6240\u9700\u7684include\uff0c\u4ee5\u4fbf\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"getLanguage()"),"\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"#include <texts/TextKeysAndLanguages.hpp>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Texts::getLanguage()"),"\u7528\u4e8e\u83b7\u53d6\u8bed\u8a00id\uff0c\u5e76\u8fd4\u56de\u679a\u4e3e\u503c\u3002 \u6240\u4ee5\u5728\u8fd9\u91cc\uff0c\u5982\u679c\u51fd\u6570\u8fd4\u56de1\uff0c\u5b83\u5bf9\u5e94\u82f1\u8bed\uff0c2\u5bf9\u5e94\u97e9\u8bed\uff0c3\u5bf9\u5e94\u6c49\u8bed\u3002  \u5b83\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"TextKeysAndLanguages.hpp"),"\u6587\u4ef6\u4e2d\u7684LANGUAGE\u679a\u4e3e\u7684\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_LANGUAGES"),"\u8fd4\u56de\u53ef\u7528\u8bed\u8a00\u603b\u6570\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"idLanguage"),"\u7684\u8ba1\u6570\u5668\uff0c\u5728\u6bcf\u6b21\u5355\u51fb\u8bed\u8a00\u6309\u94ae\u65f6\u53d8\u66f4\u8bed\u8a00\uff0c\u5e76\u5728\u8fbe\u5230\u6700\u540e\u4e00\u79cd\u8bed\u8a00\uff08\u201cif\u201d\u6761\u4ef6\uff09\u65f6\u5bf9\u5176\u8fdb\u884c\u5faa\u73af\u3002"),(0,l.kt)("p",null,"\u5b8c\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"Texts::setLanguage(idLanguage)\uff1b"),"\u7528\u4e8e\u5206\u914d\u65b0\u8bed\u8a00\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8\u5355\u51fb\u201cRun Simulator\uff08\u8fd0\u884c\u6a21\u62df\u5668\uff09\u201d\u5e76\u6309\u4e0b\u8bed\u8a00\u6309\u94ae\uff0c\u6587\u672c\u7684\u8bed\u8a00\u5c06\u53d8\u66f4"),(0,l.kt)(r.Z,{mdxType:"Note"},"\u8bf7\u6ce8\u610f\uff0c\u5728TouchGFX \u8bbe\u8ba1\u5668\u4e2d\uff0c\u60a8\u4e0d\u80fd\u53ea\u53d8\u66f4\u7279\u5b9a\u6587\u672c\u7684\u8bed\u8a00\u3002 \u901a\u8fc7TouchGFX \u8bbe\u8ba1\u5668\u548c\u4ee3\u7801\u8bbe\u7f6e\u8bed\u8a00\u5c06\u4fee\u6539\u6240\u6709\u5305\u542b\u6587\u672c\u7684\u63a7\u4ef6\u8bed\u8a00\u3002 \u7136\u800c\uff0c\u6211\u4eec\u5e0c\u671b\u4e00\u4e9b\u6587\u672c\u660e\u786e\u4fdd\u7559\u4e3a\u82f1\u8bed\u3002 \u8fd9\u5c31\u662f\u6211\u4eec\u6ca1\u6709\u7ffb\u8bd1\u6b65\u9aa43\u4e2d\u6240\u6709\u6587\u672c\u7684\u539f\u56e0\u3002"),(0,l.kt)("p",null,"\u6559\u7a0b6\u7684\u7b2c\u4e00\u90e8\u5206\u5230\u6b64\u7ed3\u675f\u3002 \u6211\u4eec\u9080\u8bf7\u60a8\u7ee7\u7eed\u672c\u6559\u7a0b\u7684\u7b2c\u4e8c\u90e8\u5206\uff0c\u60a8\u53ef\u4ee5\u5b66\u4e60\u5982\u4f55\u5b9e\u73b0\u201c\u5916\u89c2\u201d\u6309\u94ae\u3002 \u60a8\u8fd8\u5c06\u4e86\u89e3\u5982\u4f55\u4f7f\u7528",(0,l.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u901a\u914d\u7b26\u3002"))}h.isMDXComponent=!0}}]);