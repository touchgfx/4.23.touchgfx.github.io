"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[71838],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=l,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),l=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),l=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const a=o},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=l},35249:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),l=n(7029);const i=function(e){const t=(0,l.Z)(e.url);var n;const i=null!==(n=e.width)&&void 0!==n?n:"100%";var o;const a=null!==(o=e.height)&&void 0!==o?o:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:i,height:a},r.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},11995:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class l extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const i=l},66536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>v});n(59496);var r=n(49613),l=n(95375),i=n(89639),o=n(48753),a=n(11995),u=n(35249);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const c={id:"canvas-view",title:"\uce94\ubc84\uc2a4 \ubdf0"},s=void 0,m={unversionedId:"development/ui-development/designer-user-guide/canvas-view",id:"development/ui-development/designer-user-guide/canvas-view",title:"\uce94\ubc84\uc2a4 \ubdf0",description:"\uce94\ubc84\uc2a4\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uadf8\ub798\ud53d \uc694\uc18c\ub97c \uac1c\ubc1c\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 \ubdf0\ub85c\uc11c, \uc2e4\ud589 \uc2dc \ubcf4\uc5ec\uc9c0\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc774\ubbf8\uc9c0\ub85c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc560\ub2c8\uba54\uc774\uc158\uc774\ub098 \uc2dc\uc2a4\ud15c \uc694\uc18c \uac04 \uc0c1\ud638\uc791\uc6a9\uacfc \uac19\uc740 \ub3d9\uc801 \uc694\uc18c\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/canvas-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/canvas-view",permalink:"/4.23/ko/docs/development/ui-development/designer-user-guide/canvas-view",draft:!1,tags:[],version:"current",frontMatter:{id:"canvas-view",title:"\uce94\ubc84\uc2a4 \ubdf0"},sidebar:"docs",previous:{title:"\uba54\uc778 \ucc3d",permalink:"/4.23/ko/docs/development/ui-development/designer-user-guide/main-window"},next:{title:"\uc774\ubbf8\uc9c0 \ubdf0",permalink:"/4.23/ko/docs/development/ui-development/designer-user-guide/images-view"}},k={},v=[{value:"\uc67c\ucabd \ub3c4\uad6c \ubaa8\uc74c",id:"left-side-bar",level:2},{value:"Screens \ubc0f Custom Containers",id:"screens--custom-containers",level:3},{value:"\uce94\ubc84\uc2a4",id:"canvas",level:2},{value:"\uc704\uc82f \uba54\ub274",id:"widget-menu",level:3},{value:"\uc704\uc82f \uc120\ud0dd",id:"widget-selection",level:3},{value:"\uc704\uc82f \uc704\uce58 \uc870\uc815",id:"widget-positioning",level:3},{value:"\uc704\uc82f \uc21c\uc11c \ucee8\ud2b8\ub864",id:"widget-order-controls",level:3},{value:"\ub0b4\uc6a9 \uc790\ub974\uae30 \ucee8\ud2b8\ub864",id:"content-clipping-control",level:3},{value:"\ubcc0\uacbd \uc774\ub825 \ucee8\ud2b8\ub864",id:"history-controls",level:3},{value:"\ud655\ub300/\ucd95\uc18c \ucee8\ud2b8\ub864",id:"zoom-controls",level:3},{value:"\uc624\ub978\ucabd \ub3c4\uad6c \ubaa8\uc74c",id:"right-side-bar",level:2},{value:"Properties",id:"properties",level:3},{value:"Interactions",id:"interactions",level:3}],g={toc:v},h="wrapper";function y(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(h,d({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uce94\ubc84\uc2a4\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uadf8\ub798\ud53d \uc694\uc18c\ub97c \uac1c\ubc1c\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 \ubdf0\ub85c\uc11c, \uc2e4\ud589 \uc2dc \ubcf4\uc5ec\uc9c0\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc774\ubbf8\uc9c0\ub85c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc560\ub2c8\uba54\uc774\uc158\uc774\ub098 \uc2dc\uc2a4\ud15c \uc694\uc18c \uac04 \uc0c1\ud638\uc791\uc6a9\uacfc \uac19\uc740 \ub3d9\uc801 \uc694\uc18c\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 \uce94\ubc84\uc2a4 \ubdf0"),(0,r.kt)("h2",d({},{id:"left-side-bar"}),"\uc67c\ucabd \ub3c4\uad6c \ubaa8\uc74c"),(0,r.kt)("p",null,"\uc67c\ucabd \ub3c4\uad6c \ubaa8\uc74c\uc5d0\ub294 ",(0,r.kt)("a",d({parentName:"p"},{href:"#screens--custom-containers"}),"Screens\uc640 Custom Containers")," \uc0ac\uc774\uc5d0\uc11c \uc774\ub3d9\ud560 \uc218 \uc788\ub294 \ud0ed \ucee8\ud2b8\ub864\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"screens--custom-containers"}),"Screens \ubc0f Custom Containers"),(0,r.kt)("p",null,"Screens \ud0ed\uacfc Custom Containers \ud0ed\uc5d0\ub294 \uac01 \uc2a4\ud06c\ub9b0\uacfc \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0 \uc18d\ud558\ub294 \uc704\uc82f\uc5d0 \ub300\ud55c \uac1c\uc694 \ud2b8\ub9ac\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud2b8\ub9ac \ub0b4 \uac01 \uc704\uc82f\ub9c8\ub2e4 \ub2e4\ub978 \uc704\uc82f\ub3c4 \ud3ec\ud568\ub420 \uc218 \uc788\ub294\ub370, \uc704\uc82f \uc774\ub984 \uc606\uc758 V\uc790 \uae30\ud638\ub97c \ud074\ub9ad\ud558\uba74 \ud56d\ubaa9\uc744 \uc811\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc2a4\ud06c\ub9b0, \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uadf8\ub9ac\uace0 \uc704\uc82f\uc758 \uc21c\uc11c\ub294 \ub2e4\ub978 \uc2a4\ud06c\ub9b0, \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uadf8\ub9ac\uace0 \uc704\uc82f\uc758 \uc704 \ub610\ub294 \uc544\ub798\ub85c \ub4dc\ub798\uadf8\ud558\uc5ec \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ub294 ",(0,r.kt)("a",d({parentName:"p"},{href:"#widget-order-controls"}),"\uc704\uc82f \uc21c\uc11c \ucee8\ud2b8\ub864"),"\uc744 \uc0ac\uc6a9\ud574 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc704\uc82f \uc21c\uc11c\ub97c \ubcc0\uacbd\ud558\uba74 \ub2e4\ub978 \uc704\uc82f \uc704\uc5d0 \ub80c\ub354\ub9c1\ub418\ub294 \uc704\uc82f\uc774 \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee8\ud14c\uc774\ub108 \uc720\ud615\uc758 \uc704\uc82f\uc5d0\ub294 \ud558\uc704 \uc704\uc82f\uc744 \ucd94\uac00\ud560 \uc218 \uc788\ub294\ub370, \ud2b8\ub9ac \ubdf0\uc5d0\uc11c \ub2e4\ub978 \uc704\uc82f\uc744 \uc5ec\uae30\ub85c \ub4dc\ub798\uadf8\ud558\uba74 \ub429\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0 \uc704\uc82f\uc744 \ud55c \uc2a4\ud06c\ub9b0\uc5d0\uc11c \ub2e4\ub978 \uc2a4\ud06c\ub9b0\uc73c\ub85c \ub4dc\ub798\uadf8\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"CTRL\uc744 \ub204\ub978 \uc0c1\ud0dc\uc5d0\uc11c \uc704\uc82f\uc744 \ud074\ub9ad\ud558\uba74 \uc5ec\ub7ec \uac1c\uc758 \uc704\uc82f\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,'"+" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \uc2a4\ud06c\ub9b0\uacfc \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ',(0,r.kt)("a",d({parentName:"p"},{href:"#widget-menu"}),"\uc704\uc82f \uba54\ub274"),"\uc5d0\uc11c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc2a4\ud06c\ub9b0\uacfc \ub2e4\ub978 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub294 'Custom Containers' \uce74\ud14c\uace0\ub9ac\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc2a4\ud06c\ub9b0, \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uadf8\ub9ac\uace0 \uc704\uc82f\uc5d0\uc11c \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uba54\ub274\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null})),(0,r.kt)("th",d({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Rename"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Delete Widget"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"DEL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Copy"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Paste"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + V"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Move Up"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + F"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Move Down"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Edit Source Files*"),(0,r.kt)("td",d({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null," *\uc2a4\ud06c\ub9b0\uacfc \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)(u.Z,{width:"40%",height:"40%",url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",mdxType:"LoopVideo"},"\uc67c\ucabd \ubc14\uc758 \uc2a4\ud06c\ub9b0 \ud2b8\ub9ac"),(0,r.kt)("h2",d({},{id:"canvas"}),"\uce94\ubc84\uc2a4"),(0,r.kt)("p",null,"\uce94\ubc84\uc2a4 \ubdf0 \uc0c1\ub2e8\uc5d0\ub294 ",(0,r.kt)("a",d({parentName:"p"},{href:"#widget-menu"}),"\uc704\uc82f \uba54\ub274"),"\uac00 \uc788\ub294\ub370, \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc704\uc82f\uc774 \uc5ec\uae30\uc5d0 \ubaa8\ub450 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubdf0 \uc911\uc559\uc5d0\ub294 \uce94\ubc84\uc2a4\uac00 \uc788\uc73c\uba70, \uc5ec\uae30\uc5d0 \ud604\uc7ac \uc120\ud0dd\ub41c \uc2a4\ud06c\ub9b0 \ub610\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \ubdf0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubdf0 \ud558\ub2e8\uc5d0\ub294 ",(0,r.kt)("a",d({parentName:"p"},{href:"#zoom-controls"}),"\ud655\ub300/\ucd95\uc18c \ucee8\ud2b8\ub864"),"\uacfc ",(0,r.kt)("a",d({parentName:"p"},{href:"#content-clipping-control"}),"\ucf58\ud150\uce20 \uc790\ub974\uae30 \ucee8\ud2b8\ub864"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(u.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",mdxType:"LoopVideo"},"\uce94\ubc84\uc2a4 \ubdf0\uc758 \uce94\ubc84\uc2a4"),(0,r.kt)("h3",d({},{id:"widget-menu"}),"\uc704\uc82f \uba54\ub274"),(0,r.kt)("p",null,"\uc704\uc82f \uba54\ub274\uc5d0\uc11c All \uc704\uc82f \uadf8\ub8f9 \ud0ed\uc744 \ud074\ub9ad\ud558\uac70\ub098, \ub2e8\ucd95\ud0a4 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"A\ub97c")," \ub204\ub974\uba74 \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc704\uc82f\uc774 \uce74\ud14c\uace0\ub9ac\ubcc4\ub85c \ubd84\ub958\ub418\uc5b4 \uc788\ub294 \ubaa9\ub85d\uc774 \uc5f4\ub9bd\ub2c8\ub2e4. \ud2b9\uc815 \uc704\uc82f \uadf8\ub8f9 \ud0ed\uc744 \ud074\ub9ad\ud558\uba74 \ud574\ub2f9 \uce74\ud14c\uace0\ub9ac\uc5d0 \uc18d\ud55c \uc704\uc82f\uc758 \ubaa9\ub85d\uc774 \uc5f4\ub9bd\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc82f\uc744 \ud074\ub9ad\ud558\uba74 \ud604\uc7ac \uc120\ud0dd\ub418\uc5b4 \ud45c\uc2dc\ub41c \uc2a4\ud06c\ub9b0 \ub610\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 \uce94\ubc84\uc2a4\uc5d0 \ud574\ub2f9 \uc704\uc82f\uc774 \ucd94\uac00\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,'All \uc704\uc82f \uadf8\ub8f9\uc5d0\ub3c4 \uac80\uc0c9 \ud544\ub4dc\uac00 \uc788\uc9c0\ub9cc \uc5ec\uae30\uc11c\ub294 \ud37c\uc9c0 \uac80\uc0c9 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\uae30 \ub54c\ubb38\uc5d0 \uac80\uc0c9\uc5b4\uc640 \uac00\uc7a5 \uc77c\uce58\ud558\ub294 \uc704\uc82f\uc744 \ucc3e\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uac00\uc7a5 \uc77c\uce58\ud558\ub294 \uacb0\uacfc\uac00 \uac15\uc870 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ud37c\uc9c0 \uac80\uc0c9 \uae30\ub2a5\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0, \uc57d\uc5b4\uac00 \uc694\uc778\uc5d0 \ud3ec\ud568\ub418\ub294 \uacbd\uc6b0 "bwl"\uc744 \uc785\ub825\ud558\uba74 "Button With Label"\uc774 \uacb0\uacfc\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uac80\uc0c9 \ud544\ub4dc\uc5d0 \uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uace0 ',(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Enter\ub97c")," \ub204\ub974\uba74 \uac15\uc870 \ud45c\uc2dc\ub41c \uc704\uc82f\uc774 \uce94\ubc84\uc2a4\uc5d0 \uc0bd\uc785\ub418\uace0 \uc704\uc82f \uba54\ub274\uac00 \ub2eb\ud799\ub2c8\ub2e4."),(0,r.kt)(u.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",mdxType:"LoopVideo"},"\uce94\ubc84\uc2a4 \ubdf0\uc758 \uc704\uc82f \uba54\ub274"),(0,r.kt)("h3",d({},{id:"widget-selection"}),"\uc704\uc82f \uc120\ud0dd"),(0,r.kt)("p",null,"\uc704\uc758 \uc560\ub2c8\uba54\uc774\uc158\uacfc \uac19\uc774, \uce94\ubc84\uc2a4\uc5d0\uc11c \ud074\ub9ad\ub9cc \ud574\ub3c4 \uc704\uc82f\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcf5\uc218 \uc120\ud0dd\ub3c4 \uac00\ub2a5\ud55c\ub370, \ud0a4\ubcf4\ub4dc\uc5d0\uc11c ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl\uc744")," \ub204\ub978 \ucc44 \uc5ec\ub7ec \uac1c\uc758 \uc704\uc82f\uc744 \ud074\ub9ad\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"widget-positioning"}),"\uc704\uc82f \uc704\uce58 \uc870\uc815"),(0,r.kt)("p",null,"\uc704\uc758 \uc560\ub2c8\uba54\uc774\uc158\uacfc \uac19\uc774, \uac00\uc7a5\uc790\ub9ac\ub97c \ub4dc\ub798\uadf8\ud558\uba74 \uc704\uc82f\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud558\uac70\ub098 \ud06c\uae30\ub97c \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c \ud654\uc0b4\ud45c \ud0a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc120\ud0dd\ud55c \uc704\uc82f\uc744 \ud53d\uc140 \ub2e8\uc704\ub85c \uc62e\uae30\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud0a4\ubcf4\ub4dc\uc5d0\uc11c ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl\uc744")," \ub204\ub978 \ucc44 \ud654\uc0b4\ud45c \ud0a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc120\ud0dd\ud55c \uc704\uc82f\uc774 10\ud53d\uc140\uc529 \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"widget-order-controls"}),"\uc704\uc82f \uc21c\uc11c \ucee8\ud2b8\ub864"),(0,r.kt)("p",null,"\uc55e\uc73c\ub85c \ubcf4\ub0b4\uae30\uc640 \ub4a4\ub85c \ubcf4\ub0b4\uae30 \ub2e8\ucd95\ud0a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc704\uc82f \uc21c\uc11c\ub97c \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc2a4\ud06c\ub9b0\uc774\ub098 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \ud2b8\ub9ac\uc5d0\uc11c\ub3c4 \uc704\uc82f \uc21c\uc11c\ub97c \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc55e\uc73c\ub85c \ubcf4\ub0b4\uae30\ub97c \uc2e4\ud589\ud558\ub294 \ub2e8\ucd95\ud0a4\ub294 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + F"),"."),(0,r.kt)("p",null,"\ub4a4\ub85c \ubcf4\ub0b4\uae30\ub97c \uc2e4\ud589\ud558\ub294 \ub2e8\ucd95\ud0a4\ub294 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + B"),"."),(0,r.kt)("h3",d({},{id:"content-clipping-control"}),"\ub0b4\uc6a9 \uc790\ub974\uae30 \ucee8\ud2b8\ub864"),(0,r.kt)("p",null,"\uce94\ubc84\uc2a4\uc5d0\uc11c \uc2a4\ud06c\ub9b0\uacfc \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108, \uadf8\ub9ac\uace0 \ucee8\ud14c\uc774\ub108\ud615 \uc704\uc82f\uc758 \ud558\uc704 \uc704\uc82f\uc758 \uacbd\uacc4\ub97c \ubc97\uc5b4\ub098\ub294 \uc704\uc82f\uc740 \uc798\ub9bd\ub2c8\ub2e4. \ub0b4\uc6a9 \uc790\ub974\uae30 \ucee8\ud2b8\ub864\uc740 \uc704\uc82f \uc804\uccb4 \uc790\ub974\uae30\uc640 \ubd80\ubd84 \ud45c\uc2dc\ud558\uae30 \uc0ac\uc774\uc5d0\uc11c \uc804\ud658\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.webp",mdxType:"Figure"},"\uce94\ubc84\uc2a4 \ubdf0\uc5d0\uc11c \uc798\ub9b0 \ub0b4\uc6a9 \ud45c\uc2dc\ud558\uae30/\uc228\uae30\uae30 \ucee8\ud2b8\ub864"),(0,r.kt)("p",null,"\uc544\ub798 \uc774\ubbf8\uc9c0\ub97c \ubcf4\uba74 Box \uc808\ubc18\uc774 \uc2a4\ud06c\ub9b0 \uacbd\uacc4\ub97c \ubc97\uc5b4\ub098 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ub0b4\uc6a9 \uc790\ub974\uae30 \ucee8\ud2b8\ub864\uc774 \uc798\ub9b0 \uc704\uc82f\uc744 \ud45c\uc2dc\ud558\ub3c4\ub85d \uc124\uc815\ub418\uc5b4 \uc788\uc73c\uba74 Box\uac00 \uc644\uc804\ud558\uac8c \ud45c\uc2dc\ub418\uc9c0 \uc54a\uace0 \uacbd\uacc4\ub97c \ubc97\uc5b4\ub09c \ubd80\ubd84\uc774 \ud750\ub9bf\ud558\uac8c \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.webp",mdxType:"Figure"},"\uc798\ub9b0 \ub0b4\uc6a9\uc744 \ud45c\uc2dc\ud558\uac70\ub098 \uc228\uae38 \ub54c \uac01\uac01 \ubcf4\uc5ec\uc9c0\ub294 Box \uc704\uc82f\uc758 \ubaa8\uc2b5"),(0,r.kt)("h3",d({},{id:"history-controls"}),"\ubcc0\uacbd \uc774\ub825 \ucee8\ud2b8\ub864"),(0,r.kt)("p",null,"\uc774\uc804\uc5d0 \uce94\ubc84\uc2a4\uc5d0\uc11c \uc2e4\ud589\ud55c \ubcc0\uacbd \ub0b4\uc6a9\ub4e4\uc740 ",(0,r.kt)("a",d({parentName:"p"},{href:"file-menu"}),"\ud30c\uc77c \uba54\ub274"),"\uc5d0\uc11c ",(0,r.kt)("a",d({parentName:"p"},{href:"file-menu#project-file-menu-edit"}),"Edit"),"\uc744 \ud1b5\ud574 \uc2e4\ud589\uc744 \ucde8\uc18c\ud558\uac70\ub098 \uc7ac\uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",null),"\uc2a4\ud06c\ub9b0\uacfc \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub9c8\ub2e4 \uac01\uac01 \ubcc0\uacbd \uc774\ub825\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc73c\ubbc0\ub85c \ud2b9\uc815 \uc2a4\ud06c\ub9b0\uc5d0\uc11c \uc218\ud589\ud55c \ubcc0\uacbd \uc791\uc5c5\uc744 \uc2e4\ud589 \ucde8\uc18c\ud558\uac70\ub098 \uc7ac\uc2e4\ud589\ud558\ub824\uba74 \ud574\ub2f9 \uc2a4\ud06c\ub9b0\uc774 \uce94\ubc84\uc2a4\uc5d0 \ud45c\uc2dc\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubcc0\uacbd \uc774\ub825 \ucee8\ud2b8\ub864\uc744 \uc2e4\ud589\ud558\ub294 \ub2e8\ucd95\ud0a4\ub294 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + Z")," \uc640 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + Y"),"."),(0,r.kt)("h3",d({},{id:"zoom-controls"}),"\ud655\ub300/\ucd95\uc18c \ucee8\ud2b8\ub864"),(0,r.kt)("p",null,"\uce94\ubc84\uc2a4\uc758 \ud655\ub300/\ucd95\uc18c \ube44\uc728\uc740 \uce94\ubc84\uc2a4 \ud558\ub2e8\uc5d0 \uc788\ub294 \ud655\ub300/\ucd95\uc18c \ucee8\ud2b8\ub864\uc744 \uc0ac\uc6a9\ud574 \uc870\uc808\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uce94\ubc84\uc2a4\ub97c \uc911\uc559\uc73c\ub85c \uc870\uc815\ud558\uc5ec 100% \ube44\uc728\ub85c \ub3cc\uc544\uac00\ub824\uba74 Reset Canvas \ubc84\ud2bc\uc744 \ub204\ub985\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.webp",mdxType:"Figure"},"\uce94\ubc84\uc2a4 \ubdf0\uc758 \ud655\ub300/\ucd95\uc18c \ucee8\ud2b8\ub864"),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ub2e8\ucd95\ud0a4\ub85c\ub3c4 \ud655\ub300/\ucd95\uc18c \ube44\uc728\uc744 \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",{"spaces-before":"0"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null),(0,r.kt)("th",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud655\ub300/\ucd95\uc18c 25%"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud655\ub300/\ucd95\uc18c 50%"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 2")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl\uc744 + 2"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud655\ub300/\ucd95\uc18c 75%"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 3")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 3"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud655\ub300/\ucd95\uc18c 100%"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 4")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 4"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud655\ub300"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + Mouse wheel up")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + '+'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ucd95\uc18c"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + Mouse wheel down")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + '-'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud655\ub300/\ucd95\uc18c \ub9ac\uc14b"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 0")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 0")))),(0,r.kt)("h2",d({},{id:"right-side-bar"}),"\uc624\ub978\ucabd \ub3c4\uad6c \ubaa8\uc74c"),(0,r.kt)("p",null,"\uc624\ub978\ucabd \ub3c4\uad6c \ubaa8\uc74c\uc5d0\ub294 \ud604\uc7ac \uc120\ud0dd\ub41c \uc704\uc82f\uc758 ",(0,r.kt)("a",d({parentName:"p"},{href:"#properties"}),"Properties"),"\uc640 \ud604\uc7ac \uce94\ubc84\uc2a4\uc5d0 \ubcf4\uc774\ub294 \uc2a4\ud06c\ub9b0 \ub610\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 ",(0,r.kt)("a",d({parentName:"p"},{href:"#interactions"}),"Interactions"),"\ub85c \uc774\ub3d9\ud560 \uc218 \uc788\ub294 \ud0ed \ucee8\ud2b8\ub864\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"Properties \ud0ed\uc5d0\ub294 \ud604\uc7ac \uc120\ud0dd\ub41c \uc704\uc82f/\uc2a4\ud06c\ub9b0/\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 \uc18d\uc131\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc18d\uc131 \ubaa9\ub85d \uc0c1\ub2e8\uc5d0\ub294 \uc120\ud0dd\ub41c \uad6c\uc131\uc694\uc18c\uc758 \uc774\ub984\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc774\ub984 \uc67c\ucabd\uc5d0\ub294 \uc544\uc774\ucf58\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc544\uc774\ucf58\uc5d0 \ub9c8\uc6b0\uc2a4 \ucee4\uc11c\ub97c \uac16\ub2e4 \ub300\uba74 \uc124\uba85 \ubb38\uad6c\uac00 \ud45c\uc2dc\ub418\uace0, \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uba74 \uad6c\uc131\uc694\uc18c \ubb38\uc11c\ub85c \uc5f0\uacb0\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.webp",mdxType:"Figure"},"Box\uc758 \uc18d\uc131"),(0,r.kt)("h3",d({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"Interactions \ud0ed\uc5d0\ub294 \ud604\uc7ac \uce94\ubc84\uc2a4\uc5d0 \ud45c\uc2dc\ub41c \uc2a4\ud06c\ub9b0 \ub610\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 \uc0c1\ud638\uc791\uc6a9\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,'\uc0c1\ud638\uc791\uc6a9\uc740 "+" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.webp",mdxType:"Figure"},"\uc0c1\ud638\uc791\uc6a9 \ucd94\uac00\ud558\uae30"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"interactions-view",mdxType:"Link"},"\uc0c1\ud638\uc791\uc6a9"))))}y.isMDXComponent=!0}}]);