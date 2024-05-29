"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[17195],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(59496),o=r(7029);const c=function(e){const t=e.noShadow||!1,r=e.width,c=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:c,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:c,src:i})),n.createElement("p",null,e.children))}},55005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>f,toc:()=>m});var n=r(59496),o=r(49613),c=r(95375),i=r(89639);const a=function(e){let t;e.noShadow;const[r,o]=(0,n.useState)(0);let c=()=>{const e=t.children[0];let n=-20*r;for(let o of t.children)o.style.transform=`translateX(${-e.offsetWidth*r+n}px)`,n+=20};return(0,n.useEffect)((()=>{c()})),n.createElement("div",{className:"slide-figure"},n.createElement("div",{className:"slide-figure-container",ref:e=>t=e},e.children),n.createElement("div",{className:"slide-previous",onClick:()=>{r-1<0?r=o(t.children.length-1):o(r-1),c()}}),n.createElement("div",{className:"slide-next",onClick:()=>{r+1>=t.children.length?o(0):o(r+1),c()}}),n.createElement("div",{className:"slide-dots"},e.children.map(((e,t)=>n.createElement("div",{className:"slide-dot",dotSelected:r==t?"":null})))))};function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"offline-documentation",title:"Offline Documentation"},p=void 0,f={unversionedId:"resources/offline-documentation",id:"resources/offline-documentation",title:"Offline Documentation",description:"PWA(Progressive Web App)",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/resources/offline-documentation.mdx",sourceDirName:"resources",slug:"/resources/offline-documentation",permalink:"/4.23/ko/docs/resources/offline-documentation",draft:!1,tags:[],version:"current",frontMatter:{id:"offline-documentation",title:"Offline Documentation"},sidebar:"docs",previous:{title:"\ud504\ub808\uc820\ud14c\uc774\uc158",permalink:"/4.23/ko/docs/resources/presentations"}},d={},m=[{value:"PWA(Progressive Web App)",id:"pwaprogressive-web-app",level:2},{value:"TouchGFX \uc124\uba85\uc11c PWA\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95",id:"touchgfx-\uc124\uba85\uc11c-pwa\ub97c-\uc124\uce58\ud558\ub294-\ubc29\ubc95",level:3},{value:"\uc624\ud504\ub77c\uc778 PDF",id:"\uc624\ud504\ub77c\uc778-pdf",level:2}],g={toc:m},h="wrapper";function v(e){var{components:t}=e,r=s(e,["components"]);return(0,o.kt)(h,l({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",l({},{id:"pwaprogressive-web-app"}),"PWA(Progressive Web App)"),(0,o.kt)("p",null,"PWA\uc758 \ud615\ud0dc\ub85c \uc124\uba85\uc11c\ub97c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, Google Chrome \ubc0f Microsoft Edge \uac19\uc740 PC \ube0c\ub77c\uc6b0\uc800\ub294 \uc624\ud504\ub77c\uc778\uacfc \uc628\ub77c\uc778 \ubaa8\ub450\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ubc29\uc2dd\uc73c\ub85c \uc124\uba85\uc11c\ub97c \ub85c\uceec ",(0,o.kt)("em",{parentName:"p"},"\uc124\uce58"),"\ud558\ub294 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",l({},{id:"touchgfx-\uc124\uba85\uc11c-pwa\ub97c-\uc124\uce58\ud558\ub294-\ubc29\ubc95"}),"TouchGFX \uc124\uba85\uc11c PWA\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95"),(0,o.kt)("p",null,"\uc544\ub798\uc758 \uc774\ubbf8\uc9c0\ub4e4\uc740 Google Chrome\uacfc Microsoft Edge \ubaa8\ub450\uc5d0\uc11c PWA \uc124\uce58 \ubc84\ud2bc\uc744 \ucc3e\uc744 \uc218 \uc788\ub294 \uc704\uce58\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,o.kt)(a,{mdxType:"SlideFigure"},(0,o.kt)(i.Z,{imageSource:"/img/resources/offline-documentation/chrome-pwa.png",mdxType:"Figure"},"Google Chrome\uc5d0\uc11c \uc124\uce58 \ubc84\ud2bc\uc740 URL \ud45c\uc2dc\uc904\uc758 \uc624\ub978\ucabd\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)(i.Z,{imageSource:"/img/resources/offline-documentation/edge-pwa.png",mdxType:"Figure"},"Microsoft Edge\uc5d0\uc11c \uc124\uce58 \ubc84\ud2bc\uc740 URL \ud45c\uc2dc\uc904\uc758 \uc624\ub978\ucabd\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,'PWA\uac00 \uc124\uce58\ub418\uba74 PWA\ub97c \uc5f4\uace0 \uc67c\ucabd \uc0ac\uc774\ub4dc \ubc14\uc5d0\uc11c \ub610 \ub2e4\ub978 \ud398\uc774\uc9c0(\uc608: "TouchGFX\ub780 \ubb34\uc5c7\uc785\ub2c8\uae4c?")\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \uc774\ub294 \uc2dc\uc2a4\ud15c\uc758 \ubc84\uadf8\ub85c \uc778\ud574 \uc778\ud130\ub137 \uc811\uc18d \uc5c6\uc774\ub3c4 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \uc624\ud504\ub77c\uc778 \uce90\uc2f1\uc744 \ud2b8\ub9ac\uac70\ud558\ub294 \ub370 \uc911\uc694\ud569\ub2c8\ub2e4.'),(0,o.kt)("h2",l({},{id:"\uc624\ud504\ub77c\uc778-pdf"}),"\uc624\ud504\ub77c\uc778 PDF"),(0,o.kt)("p",null,"\uc124\uba85\uc11c\ub294 PDF \ud30c\uc77c\ub85c\ub3c4 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774 PDF\uc758 \ub0b4\uc6a9\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ub0b4\uc6a9\uacfc \uc644\uc804\ud788 \ub611\uac19\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud574\ub2f9 \ubb38\uc11c\uc758 \uc624\ud504\ub77c\uc778 PDF \ubc84\uc804\uc740 ",(0,o.kt)(c.Z,{to:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/doc/4.23/touchgfx-documentation-4.23.pdf",target:"_blank",mdxType:"Link"},"\uc5ec\uae30\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4"),"."))}v.isMDXComponent=!0}}]);