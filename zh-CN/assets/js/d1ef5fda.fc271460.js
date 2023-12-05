"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[47687],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=l,h=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,a[1]=o;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),l=n(32118);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),l=n(89588);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const o=a},89588:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=l},39559:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),l=n(32118);const i=function(e){const t=(0,l.Z)(e.url);var n;const i=null!==(n=e.width)&&void 0!==n?n:"100%";var a;const o=null!==(a=e.height)&&void 0!==a?a:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:i,height:o},r.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},66590:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class l extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const i=l},63988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>k});n(59496);var r=n(49613),l=n(51721),i=n(12822),a=n(86222),o=n(66590),u=n(39559);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const c={id:"canvas-view",title:"\u753b\u5e03\u89c6\u56fe"},s=void 0,m={unversionedId:"development/ui-development/designer-user-guide/canvas-view",id:"development/ui-development/designer-user-guide/canvas-view",title:"\u753b\u5e03\u89c6\u56fe",description:"\u753b\u5e03\u662f\u6784\u5efa\u5e94\u7528\u56fe\u5f62\u754c\u9762\u7684\u89c6\u56fe\uff0c\u5b83\u53ef\u4ee5\u5728\u8bbe\u8ba1\u65f6\u76f4\u89c2\u5c55\u793a\u5e94\u7528\u8fd0\u884c\u65f6\u754c\u9762\u7684\u5916\u89c2\u3002 \u5bf9\u4e8e\u52a8\u6001\u754c\u9762\u65b9\u9762\uff0c\u4f8b\u5982\u52a8\u753b\u4ee5\u53ca\u7cfb\u7edf\u5404\u63a7\u4ef6\u4e4b\u95f4\u7684\u4ea4\u4e92\u663e\u793a\uff0c\u4ea6\u53ef\u5728\u6b64\u8fdb\u884c\u63cf\u8ff0\u8bbe\u8ba1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/canvas-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/canvas-view",permalink:"/4.23/zh-CN/docs/development/ui-development/designer-user-guide/canvas-view",draft:!1,tags:[],version:"current",frontMatter:{id:"canvas-view",title:"\u753b\u5e03\u89c6\u56fe"},sidebar:"docs",previous:{title:"\u4e3b\u7a97\u53e3",permalink:"/4.23/zh-CN/docs/development/ui-development/designer-user-guide/main-window"},next:{title:"\u56fe\u50cf\u89c6\u56fe",permalink:"/4.23/zh-CN/docs/development/ui-development/designer-user-guide/images-view"}},h={},k=[{value:"\u5de6\u4fa7\u8fb9\u680f",id:"left-side-bar",level:2},{value:"\u5c4f\u5e55 &amp; \u81ea\u5b9a\u4e49\u5bb9\u5668",id:"screens--custom-containers",level:3},{value:"\u753b\u5e03",id:"canvas",level:2},{value:"\u63a7\u4ef6\u83dc\u5355",id:"widget-menu",level:3},{value:"\u63a7\u4ef6\u9009\u62e9",id:"widget-selection",level:3},{value:"\u63a7\u4ef6\u5b9a\u4f4d",id:"widget-positioning",level:3},{value:"\u63a7\u4ef6Z\u987a\u5e8f\u8c03\u8282",id:"widget-order-controls",level:3},{value:"\u5185\u5bb9\u88c1\u526a\u63a7\u5236",id:"content-clipping-control",level:3},{value:"\u4fee\u6539\u5386\u53f2",id:"history-controls",level:3},{value:"\u7f29\u653e",id:"zoom-controls",level:3},{value:"\u53f3\u4fa7\u8fb9\u680f",id:"right-side-bar",level:2},{value:"\u5c5e\u6027",id:"properties",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:3}],v={toc:k},g="wrapper";function y(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,d({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u753b\u5e03\u662f\u6784\u5efa\u5e94\u7528\u56fe\u5f62\u754c\u9762\u7684\u89c6\u56fe\uff0c\u5b83\u53ef\u4ee5\u5728\u8bbe\u8ba1\u65f6\u76f4\u89c2\u5c55\u793a\u5e94\u7528\u8fd0\u884c\u65f6\u754c\u9762\u7684\u5916\u89c2\u3002 \u5bf9\u4e8e\u52a8\u6001\u754c\u9762\u65b9\u9762\uff0c\u4f8b\u5982\u52a8\u753b\u4ee5\u53ca\u7cfb\u7edf\u5404\u63a7\u4ef6\u4e4b\u95f4\u7684\u4ea4\u4e92\u663e\u793a\uff0c\u4ea6\u53ef\u5728\u6b64\u8fdb\u884c\u63cf\u8ff0\u8bbe\u8ba1\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u7684\u753b\u5e03\u89c6\u56fe"),(0,r.kt)("h2",d({},{id:"left-side-bar"}),"\u5de6\u4fa7\u8fb9\u680f"),(0,r.kt)("p",null,"\u5de6\u4fa7\u8fb9\u680f\u5305\u542b\u4e00\u4e2a\u9009\u9879\u5361\u63a7\u4ef6\uff0c\u53ef\u9009\u62e9",(0,r.kt)("a",d({parentName:"p"},{href:"#screens--custom-containers"}),"\u5c4f\u5e55\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668"),"\u3002"),(0,r.kt)("h3",d({},{id:"screens--custom-containers"}),"\u5c4f\u5e55 & \u81ea\u5b9a\u4e49\u5bb9\u5668"),(0,r.kt)("p",null,"\u201c\u5c4f\u5e55\u201d\u9009\u9879\u9875\u548c\u201c\u81ea\u5b9a\u4e49\u5bb9\u5668\u201d\u9009\u9879\u9875\u5747\u53ef\u6811\u72b6\u663e\u793a\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u6d4f\u89c8\u6bcf\u4e2a\u5c4f\u5e55\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e2d\u7684\u63a7\u4ef6\uff0c\u901a\u8fc7\u70b9\u51fb\u5176\u540d\u79f0\u5de6\u4fa7\u7684 >\u578b \u6216 v \u578b\u6807\u5fd7\uff0c\u53ef\u4ee5\u5c55\u5f00\u6216\u6298\u53e0\u5176\u5305\u542b\u7684\u63a7\u4ef6\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u66f4\u6539\u5c4f\u5e55\u3001\u81ea\u5b9a\u4e49\u5bb9\u5668\u4eec\u7684\u663e\u793a\u987a\u5e8f\u6216\u5b83\u4eec\u5305\u542b\u7684\u63a7\u4ef6\u95f4\u7684\u987a\u5e8f\uff0c\u53ef\u76f4\u63a5\u62d6\u653e\u5b8c\u6210\uff08\u5373\u7528\u9f20\u6807\u62d6\u52a8\u5c06\u5176\u653e\u5230\u5176\u4ed6\u5c4f\u5e55\u3001\u81ea\u5b9a\u4e49\u5bb9\u5668\u6216\u63a7\u4ef6\u7684\u4e0a\u9762\u6216\u4e0b\u9762\uff09\uff0c\u4e5f\u53ef\u901a\u8fc7",(0,r.kt)("a",d({parentName:"p"},{href:"#widget-order-controls"}),"\u63a7\u4ef6\u6392\u5e8f"),"\u6765\u66f4\u6539\u3002 \u66f4\u6539\u63a7\u4ef6\u7684\u663e\u793a\u987a\u5e8f\uff0c\u5c06\u786e\u5b9a\u6e32\u67d3\u65f6\u54ea\u4e9b\u63a7\u4ef6\u4f1a\u653e\u5728\u5176\u4ed6\u63a7\u4ef6\u7684\u9876\u90e8\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5bb9\u5668\u7c7b\u7684\u63a7\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u6811\u72b6\u56fe\u91cc\u5c06\u5176\u5b83\u63a7\u4ef6\u62d6\u653e\u5230\u5176\u4e0a\u6765\u6dfb\u52a0\u5b50\u63a7\u4ef6\u3002 \u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u5c06\u63a7\u4ef6\u4ece\u4e00\u4e2a\u5c4f\u5e55\u62d6\u653e\u5230\u53e6\u4e00\u4e2a\u5c4f\u5e55\u3002"),(0,r.kt)("p",null,"\u5728\u70b9\u51fb\u63a7\u4ef6\u7684\u540c\u65f6\u6309\u4f4fCTRL\u952e\u53ef\u4ee5\u9009\u62e9\u591a\u4e2a\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u201c+\u201d\u6309\u94ae\u53ef\u5728\u5de5\u7a0b\u4e2d\u6dfb\u52a0\u5c4f\u5e55\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668\u3002 \u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",d({parentName:"p"},{href:"#widget-menu"}),"\u63a7\u4ef6\u83dc\u5355"),"\u5c06\u81ea\u5b9a\u4e49\u5bb9\u5668\u6dfb\u52a0\u5230\u5c4f\u5e55\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u5bb9\u5668\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728\u201c\u81ea\u5b9a\u4e49\u5bb9\u5668\u201d\u9875\u4e2d\u627e\u5230\u5b83\u4eec\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5bf9\u4e8e\u5c4f\u5e55\u3001\u81ea\u5b9a\u4e49\u5bb9\u5668\u548c\u63a7\u4ef6\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u4e0a\u4e0b\u6587\u83dc\u5355\uff0c\u60a8\u53ef\u4ee5\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null})),(0,r.kt)("th",d({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u91cd\u547d\u540d"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u5220\u9664\u63a7\u4ef6"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"DEL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u590d\u5236"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u7c98\u8d34"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + V"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u4e0a\u79fb"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + F"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u4e0b\u79fb"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u7f16\u8f91\u6e90\u6587\u4ef6*"),(0,r.kt)("td",d({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null," ","*","\u4ec5\u7528\u4e8e\u5c4f\u5e55\u548c\u81ea\u5b9a\u4e49\u5bb9\u5668"),(0,r.kt)(u.Z,{width:"40%",height:"40%",url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",mdxType:"LoopVideo"},"\u5de6\u4fa7\u8fb9\u680f\u4e2d\u7684\u5c4f\u5e55\u6811\u56fe"),(0,r.kt)("h2",d({},{id:"canvas"}),"\u753b\u5e03"),(0,r.kt)("p",null,"\u89c6\u56fe\u9876\u90e8\u5305\u542b",(0,r.kt)("a",d({parentName:"p"},{href:"#widget-menu"}),"\u63a7\u4ef6\u83dc\u5355"),"\uff0c\u5176\u4e2d\u5305\u542b\u6240\u6709\u53ef\u7528\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u89c6\u56fe\u4e2d\u5fc3\u90e8\u5206\u662f\u753b\u5e03\uff0c\u663e\u793a\u5f53\u524d\u9009\u4e2d\u7684\u5c4f\u5e55\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668\u3002"),(0,r.kt)("p",null,"\u89c6\u56fe\u5e95\u90e8\u7684\u63a7\u4ef6\uff1a",(0,r.kt)("a",d({parentName:"p"},{href:"#zoom-controls"}),"\u7f29\u653e\u63a7\u4ef6"),"\u548c",(0,r.kt)("a",d({parentName:"p"},{href:"#content-clipping-control"}),"\u5185\u5bb9\u4fee\u526a\u63a7\u4ef6"),"\u3002"),(0,r.kt)(u.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",mdxType:"LoopVideo"},"\u753b\u5e03\u89c6\u56fe\u4e2d\u7684\u753b\u5e03"),(0,r.kt)("h3",d({},{id:"widget-menu"}),"\u63a7\u4ef6\u83dc\u5355"),(0,r.kt)("p",null,"\u70b9\u51fb\u63a7\u4ef6\u83dc\u5355\u4e2d\u7684\u201c\u5168\u90e8\u63a7\u4ef6\u201d\u7ec4\u9009\u9879\u5361\u6216\u6309\u5feb\u6377\u952e ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"A")," \u5c06\u6253\u5f00\u4e00\u4e2a\u5305\u542b\u6240\u6709\u5df2\u5206\u7c7b\u7684\u53ef\u7528\u63a7\u4ef6\u5217\u8868\u3002 \u70b9\u51fb\u67d0\u7c7b\u7684\u63a7\u4ef6\u7ec4\u9009\u9879\u5361\uff0c\u5c06\u4f1a\u6253\u5f00\u8be5\u7c7b\u63a7\u4ef6\u5305\u542b\u7684\u53ef\u7528\u63a7\u4ef6\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u5176\u4e2d\u4e00\u4e2a\u63a7\u4ef6\uff0c\u53ef\u5c06\u5176\u6dfb\u52a0\u5230\u5f53\u524d\u9009\u4e2d\u7684\u5c4f\u5e55\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u753b\u5e03\u4e0a\u3002"),(0,r.kt)("p",null,"\u201c\u5168\u90e8\u63a7\u4ef6\u201d\u7ec4\u91cc\u6709\u4e00\u4e2a\u641c\u7d22\u680f\uff0c\u91c7\u7528\u6a21\u7cca\u641c\u7d22\u6280\u672f\uff0c\u53ef\u5e2e\u52a9\u7528\u6237\u67e5\u627e\u6700\u4f73\u5339\u914d\u7684\u63a7\u4ef6\u3002 \u6700\u4f73\u5339\u914d\u5c06\u9ad8\u4eae\u663e\u793a\u3002 \u7531\u4e8e\u4f7f\u7528\u4e86\u6a21\u7cca\u641c\u7d22\uff0c\u4f8b\u5982\uff0c\u5f53\u8f93\u5165\u201cbwl\u201d\u65f6\u53ef\u4ee5\u641c\u7d22\u5230\u201cButton With Label\u201d\uff08\u5e26\u6807\u7b7e\u7684\u6309\u94ae\uff09\uff0c\u8fd9\u5f97\u76ca\u4e8e\u7f29\u7565\u8bcd\u7d22\u5f15\u56e0\u5b50\u3002 \u5728\u641c\u7d22\u680f\u4e2d\u8f93\u5165\u5185\u5bb9\u540e\uff0c\u6309\u4e0b ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Enter")," \u952e\u53ef\u5c06\u9ad8\u4eae\u663e\u793a\u7684\u63a7\u4ef6\u6dfb\u52a0\u5230\u753b\u5e03\u4e0a\uff0c\u5e76\u5173\u95ed\u201c\u63a7\u4ef6\u83dc\u5355\u201d\u3002"),(0,r.kt)(u.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",mdxType:"LoopVideo"},"\u201c\u753b\u5e03\u201d\u89c6\u56fe\u4e2d\u7684\u201c\u63a7\u4ef6\u83dc\u5355\u201d"),(0,r.kt)("h3",d({},{id:"widget-selection"}),"\u63a7\u4ef6\u9009\u62e9"),(0,r.kt)("p",null,"\u5982\u4e0a\u9762\u7684\u52a8\u753b\u6240\u793a\uff0c\u53ea\u9700\u5728\u753b\u5e03\u4e0a\u70b9\u51fb\u67d0\u63a7\u4ef6\u5373\u53ef\u9009\u4e2d\u5b83\u3002 \u4ea6\u53ef\u591a\u9009\uff0c\u65b9\u6cd5\u662f\u5728\u6309\u4f4f ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Ctrl")," \u952e\u7684\u540c\u65f6\u5355\u51fb\u591a\u4e2a\u63a7\u4ef6\u3002"),(0,r.kt)("h3",d({},{id:"widget-positioning"}),"\u63a7\u4ef6\u5b9a\u4f4d"),(0,r.kt)("p",null,"\u5982\u4e0a\u9762\u7684\u52a8\u753b\u6240\u793a\uff0c\u53ef\u4ee5\u901a\u8fc7\u62d6\u62fd\u63a7\u4ef6\u7684\u7f29\u7565\u56fe\u6765\u79fb\u52a8\u6216\u6539\u53d8\u5176\u5927\u5c0f\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u7528\u7bad\u5934\u952e\u5c06\u9009\u4e2d\u7684\u63a7\u4ef6\u79fb\u52a81\u4e2a\u50cf\u7d20\u3002 \u5728\u4f7f\u7528\u7bad\u5934\u952e\u7684\u540c\u65f6\u6309\u4f4f ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Ctrl")," Ctrl\u952e\u53ef\u4ee5\u5c06\u9009\u4e2d\u7684\u63a7\u4ef6\u79fb\u52a810\u4e2a\u50cf\u7d20\u3002"),(0,r.kt)("h3",d({},{id:"widget-order-controls"}),"\u63a7\u4ef6Z\u987a\u5e8f\u8c03\u8282"),(0,r.kt)("p",null,"\u63a7\u4ef6\u7684Z\u987a\u5e8f\u53ef\u4ee5\u901a\u8fc7\u201c\u7f6e\u524d\u201d\u548c\u201c\u7f6e\u540e\u201d\u5feb\u6377\u65b9\u5f0f\u8fdb\u884c\u8c03\u6574\uff0c\u5b83\u4eec\u5728\u201c\u5c4f\u5e55\u201d\u6216\u201c\u81ea\u5b9a\u4e49\u5bb9\u5668\u201d\u6811\u4e2d\u7684\u987a\u5e8f\u4e5f\u4f1a\u968f\u4e4b\u6539\u53d8\u3002"),(0,r.kt)("p",null,"\u201c\u7f6e\u524d\u201d\u7684\u89e6\u53d1\u65b9\u5f0f\u662f\u6309\u4e0b ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + F"),"."),(0,r.kt)("p",null,"\u201c\u7f6e\u540e\u201d\u7684\u89e6\u53d1\u65b9\u5f0f\u662f\u6309\u4e0b ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + B"),"."),(0,r.kt)("h3",d({},{id:"content-clipping-control"}),"\u5185\u5bb9\u88c1\u526a\u63a7\u5236"),(0,r.kt)("p",null,"\u5728\u753b\u5e03\u4e0a\uff0c\u5c4f\u5e55\u3001\u81ea\u5b9a\u4e49\u5bb9\u5668\u53ca\u5176\u5b50\u7c7b\u7684\u8fb9\u754c\u4e4b\u5916\u7684\u63a7\u4ef6\u5c06\u4f1a\u88ab\u88c1\u526a\u6389\u3002 \u88ab\u88c1\u526a\u7684\u90e8\u5206\u53ef\u5728\u4e0d\u663e\u793a\u548c\u90e8\u5206\u663e\u793a\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.webp",mdxType:"Figure"},"\u753b\u5e03\u89c6\u56fe\u4e2d\u7684\u201c\u663e\u793a/\u9690\u85cf\u88c1\u526a\u5185\u5bb9\u201d\u6309\u94ae"),(0,r.kt)("p",null,"\u5728\u4e0b\u56fe\u4e2d\uff0c\u6709\u4e00\u4e2a\u4e00\u534a\u4f4d\u4e8e\u5c4f\u5e55\u5916\u7684\u7ea2\u8272\u65b9\u6846\uff0c\u5f53\u88c1\u526a\u63a7\u5236\u8bbe\u7f6e\u4e3a\u663e\u793a\u88c1\u526a\u5185\u5bb9\u65f6\uff0c\u7ea2\u8272\u65b9\u6846\u4e0d\u4f1a\u5b8c\u5168\u663e\u793a\uff0c\u800c\u662f\u5c06\u5176\u5c4f\u5e55\u4e4b\u5916\u7684\u90e8\u5206\u5f31\u5316\u663e\u793a\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.webp",mdxType:"Figure"},"\u663e\u793a\u548c\u9690\u85cf\u88c1\u526a\u5185\u5bb9\u65f6\u65b9\u6846\u63a7\u4ef6\u7684\u5916\u89c2\u5dee\u5f02"),(0,r.kt)("h3",d({},{id:"history-controls"}),"\u4fee\u6539\u5386\u53f2"),(0,r.kt)("p",null,"The history of changes performed on the canvas can be undone and redone through the ",(0,r.kt)("a",d({parentName:"p"},{href:"file-menu#project-file-menu-edit"}),"Edit")," in the ",(0,r.kt)("a",d({parentName:"p"},{href:"file-menu"}),"File Menu"),".",(0,r.kt)("br",null),"Each screen and custom container maintains its own history, therefore to undo or redo a change performed on a certain screen, that specific screen has to be visible on the canvas."),(0,r.kt)("p",null,"\u4fee\u6539\u5386\u53f2\u63a7\u5236\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5feb\u6377\u952e\u89e6\u53d1 ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + Z")," \u548c ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + Y"),"."),(0,r.kt)("h3",d({},{id:"zoom-controls"}),"\u7f29\u653e"),(0,r.kt)("p",null,"\u753b\u5e03\u7684\u7f29\u653e\u7a0b\u5ea6\u53ef\u4ee5\u901a\u8fc7\u753b\u5e03\u5e95\u90e8\u7684\u7f29\u653e\u63a7\u4ef6\u8fdb\u884c\u63a7\u5236\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u5c06\u753b\u5e03\u5c45\u4e2d\u5e76\u6062\u590d\u81f3100%\u7f29\u653e\u6bd4\u4f8b\uff0c\u70b9\u51fb\u201c\u753b\u5e03\u91cd\u7f6e\u201d\u6309\u94ae\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.webp",mdxType:"Figure"},"\u753b\u5e03\u89c6\u56fe\u4e2d\u7684\u7f29\u653e\u63a7\u4ef6"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u5feb\u6377\u952e\u8fdb\u884c\u7f29\u653e\uff1a"),(0,r.kt)("table",{"spaces-before":"0"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null),(0,r.kt)("th",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7f29\u653e\u6bd4\u4f8b25%"),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + 1")),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7f29\u653e\u6bd4\u4f8b50%"),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + 2")),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 2"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7f29\u653e\u6bd4\u4f8b75%"),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + 3")),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 3"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7f29\u653e\u6bd4\u4f8b100%"),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + 4")),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 4"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u653e\u5927"),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + \u9f20\u6807\u6eda\u8f6e\u5411\u4e0a\u6eda")),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + '+'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7f29\u5c0f"),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + \u9f20\u6807\u6eda\u8f6e\u5411\u4e0b\u6eda")),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + '-'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u91cd\u7f6e\u7f29\u653e\u6bd4\u4f8b"),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + 0")),(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 0")))),(0,r.kt)("h2",d({},{id:"right-side-bar"}),"\u53f3\u4fa7\u8fb9\u680f"),(0,r.kt)("p",null,"\u53f3\u4fa7\u8fb9\u680f\u5305\u542b\u4e00\u4e2a\u9009\u9879\u5361\u63a7\u4ef6\uff0c\u53ef\u9009\u62e9\u5f53\u524d\u9009\u4e2d\u63a7\u4ef6\u7684",(0,r.kt)("a",d({parentName:"p"},{href:"#properties"}),"\u5c5e\u6027"),"\u9009\u9879\u5361\u6216\u753b\u5e03\u4e0a\u5f53\u524d\u53ef\u89c1\u7684\u5c4f\u5e55\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684",(0,r.kt)("a",d({parentName:"p"},{href:"#interactions"}),"\u4ea4\u4e92"),"\u9009\u9879\u5361\u3002"),(0,r.kt)("h3",d({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"\u201c\u5c5e\u6027\u201d\u9009\u9879\u5361\u5c06\u663e\u793a\u5f53\u524d\u9009\u4e2d\u7684\u63a7\u4ef6/\u5c4f\u5e55/\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u5c5e\u6027\u3002 \u9009\u4e2d\u7ec4\u4ef6\u7684\u540d\u79f0\u663e\u793a\u5728\u5c5e\u6027\u5217\u8868\u7684\u9876\u90e8\u3002 \u540d\u79f0\u5de6\u4fa7\u6709\u4e00\u4e2a\u56fe\u6807\uff0c\u5c06\u9f20\u6807\u60ac\u505c\u5728\u8be5\u56fe\u6807\u4e0a\u4f1a\u663e\u793a\u63cf\u8ff0\u6027\u6587\u672c\uff0c\u70b9\u51fb\u8be5\u56fe\u6807\u5c06\u94fe\u63a5\u5230\u8be5\u7ec4\u4ef6\u7684\u6587\u6863\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.webp",mdxType:"Figure"},"\u5c5e\u6027\u6846"),(0,r.kt)("h3",d({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u201c\u4ea4\u4e92\u201d\u9009\u9879\u5361\u663e\u793a\u753b\u5e03\u4e0a\u5f53\u524d\u663e\u793a\u7684\u5c4f\u5e55\u6216\u81ea\u5b9a\u4e49\u5bb9\u5668\u7684\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u201c+\u201d\u6309\u94ae\u53ef\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.webp",mdxType:"Figure"},"\u6dfb\u52a0\u4ea4\u4e92"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"interactions-view",mdxType:"Link"},"\u4ea4\u4e92"))))}y.isMDXComponent=!0}}]);