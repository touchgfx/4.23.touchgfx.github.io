"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[45123],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12822:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(59496),o=r(32118);const c=function(e){const t=e.noShadow||!1,r=e.width,c=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:c,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:c,src:i})),n.createElement("p",null,e.children))}},73813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>f,toc:()=>m});var n=r(59496),o=r(49613),c=r(51721),i=r(12822);const a=function(e){let t;e.noShadow;const[r,o]=(0,n.useState)(0);let c=()=>{const e=t.children[0];let n=-20*r;for(let o of t.children)o.style.transform=`translateX(${-e.offsetWidth*r+n}px)`,n+=20};return(0,n.useEffect)((()=>{c()})),n.createElement("div",{className:"slide-figure"},n.createElement("div",{className:"slide-figure-container",ref:e=>t=e},e.children),n.createElement("div",{className:"slide-previous",onClick:()=>{r-1<0?r=o(t.children.length-1):o(r-1),c()}}),n.createElement("div",{className:"slide-next",onClick:()=>{r+1>=t.children.length?o(0):o(r+1),c()}}),n.createElement("div",{className:"slide-dots"},e.children.map(((e,t)=>n.createElement("div",{className:"slide-dot",dotSelected:r==t?"":null})))))};function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"offline-documentation",title:"\u79bb\u7ebf\u6587\u6863"},p=void 0,f={unversionedId:"resources/offline-documentation",id:"resources/offline-documentation",title:"\u79bb\u7ebf\u6587\u6863",description:"Progressive Web App\uff08PWA\uff09",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/resources/offline-documentation.mdx",sourceDirName:"resources",slug:"/resources/offline-documentation",permalink:"/4.23/zh-CN/docs/resources/offline-documentation",draft:!1,tags:[],version:"current",frontMatter:{id:"offline-documentation",title:"\u79bb\u7ebf\u6587\u6863"},sidebar:"docs",previous:{title:"\u6f14\u793a\u6587\u7a3f",permalink:"/4.23/zh-CN/docs/resources/presentations"}},d={},m=[{value:"Progressive Web App\uff08PWA\uff09",id:"progressive-web-apppwa",level:2},{value:"\u5982\u4f55\u5b89\u88c5TouchGFX\u6587\u6863PWA",id:"\u5982\u4f55\u5b89\u88c5touchgfx\u6587\u6863pwa",level:3},{value:"\u79bb\u7ebfPDF",id:"\u79bb\u7ebfpdf",level:2}],g={toc:m},h="wrapper";function v(e){var{components:t}=e,r=s(e,["components"]);return(0,o.kt)(h,l({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",l({},{id:"progressive-web-apppwa"}),"Progressive Web App\uff08PWA\uff09"),(0,o.kt)("p",null,"\u6587\u6863\u53ef\u4ee5\u4f5c\u4e3aProgressive Web App\u5b89\u88c5\u3002 \u8fd9\u610f\u5473\u7740\uff0c\u8bf8\u5982Google Chrome\u548cMicrosoft Edge\u7b49PC\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u5728\u672c\u5730",(0,o.kt)("em",{parentName:"p"},"\u5b89\u88c5"),"\u6587\u6863\u7684\u9009\u9879\uff0c\u4ee5\u4fbf\u5728\u79bb\u7ebf\u548c\u8054\u673a\u65f6\u5747\u53ef\u4f7f\u7528\u3002"),(0,o.kt)("h3",l({},{id:"\u5982\u4f55\u5b89\u88c5touchgfx\u6587\u6863pwa"}),"\u5982\u4f55\u5b89\u88c5TouchGFX\u6587\u6863PWA"),(0,o.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u5728Google Chrome\u548cMicrosoft Edge\u4e2d\u53ef\u4ee5\u627e\u5230PWA\u5b89\u88c5\u6309\u94ae\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)(a,{mdxType:"SlideFigure"},(0,o.kt)(i.Z,{imageSource:"/img/resources/offline-documentation/chrome-pwa.png",mdxType:"Figure"},"\u5728Google Chrome\u4e2d\uff0c\u5b89\u88c5\u6309\u94ae\u4f4d\u4e8eURL\u680f\u7684\u53f3\u4fa7"),(0,o.kt)(i.Z,{imageSource:"/img/resources/offline-documentation/edge-pwa.png",mdxType:"Figure"},"\u5728Microsoft Edge\u4e2d\uff0c\u5b89\u88c5\u6309\u94ae\u4f4d\u4e8eURL\u680f\u7684\u53f3\u4fa7")),(0,o.kt)("p",null,"\u5b89\u88c5PWA\u540e\uff0c\u6253\u5f00\u5e76\u5bfc\u822a\u81f3\u5de6\u4fa7\u680f\u4e2d\u7684\u53e6\u4e00\u9875\uff08\u4f8b\u5982\u201cWhat is TouchGFX\uff1f\u201d\uff09\u3002 \u8fd9\u5bf9\u4e8e\u89e6\u53d1\u79bb\u7ebf\u7f13\u5b58\u975e\u5e38\u91cd\u8981\uff0c\u5f53\u7cfb\u7edf\u51fa\u73b0\u9519\u8bef\uff0c\u5728\u6ca1\u6709internet\u8fde\u63a5\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u7528\u79bb\u7ebf\u7f13\u5b58\u3002"),(0,o.kt)("h2",l({},{id:"\u79bb\u7ebfpdf"}),"\u79bb\u7ebfPDF"),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4e0b\u8f7dPDF\u683c\u5f0f\u7684\u6587\u6863\u3002 \u6b64PDF\u7684\u5185\u5bb9\u53ef\u80fd\u65e0\u6cd5\u5b8c\u5168\u53cd\u6620\u6d4f\u89c8\u5668\u4e2d\u7684\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"The offline PDF version of the documentation ",(0,o.kt)(c.Z,{to:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/doc/4.23/touchgfx-documentation-4.23.pdf",target:"_blank",mdxType:"Link"},"can be found here"),"."))}v.isMDXComponent=!0}}]);