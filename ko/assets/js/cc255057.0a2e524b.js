"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[21819],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),o=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(r),s=a,k=d["".concat(m,".").concat(s)]||d[s]||c[s]||p;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var o=2;o<p;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},28128:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(59496);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const p=a},89639:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(59496),a=r(7029);const p=function(e){const t=e.noShadow||!1,r=e.width,p=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:p,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:p,src:l})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const p=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:p},this.props.children)}}const i=l},96151:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const p=a},94790:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(59496);class a extends n.Component{render(){return n.createElement("code",null,this.props.children)}}const p=a},49018:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const p=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:p},this.props.children)}}const i=l},21100:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const p=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:p},this.props.children)}}const i=l},59180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>b,frontMatter:()=>s,metadata:()=>g,toc:()=>N});r(59496);var n=r(49613),a=r(89639),p=r(48753),l=r(49018),i=r(21100),m=r(95375),o=r(94790),u=r(28128);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"texture-mapper",title:"Texture Mapper"},k=void 0,g={unversionedId:"development/ui-development/ui-components/images/texture-mapper",id:"development/ui-development/ui-components/images/texture-mapper",title:"Texture Mapper",description:"Texture Mapper\ub294 \uc870\uc815 \uac00\ub2a5\ud55c \uc6d0\uc810\uc744 \uc911\uc2ec\uc73c\ub85c \uc790\uc720\ub86d\uac8c \ud655\ub300/\ucd95\uc18c\ud558\uac70\ub098 \ud68c\uc804\ud558\uba74\uc11c \ubc14\ub00c\ub294 \uc774\ubbf8\uc9c0\ub97c \uadf8\ub9b4 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \ub610\ud55c \uac00\uc0c1 \uce74\uba54\ub77c\ub97c \uc801\uc6a9\ud558\uc5ec \uc6d0\uadfc\uac10\uc744 \uad6c\ud604\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc774\ub54c \uc6d0\uadfc\uac10\uc758 \ud06c\uae30\ub3c4 \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/texture-mapper.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/texture-mapper",permalink:"/4.23/ko/docs/development/ui-development/ui-components/images/texture-mapper",draft:!1,tags:[],version:"current",frontMatter:{id:"texture-mapper",title:"Texture Mapper"},sidebar:"docs",previous:{title:"Animated Image",permalink:"/4.23/ko/docs/development/ui-development/ui-components/images/animated-image"},next:{title:"SVG Image",permalink:"/4.23/ko/docs/development/ui-development/ui-components/images/svg-image"}},h={},N=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc6d0\uc810 \ubc0f \uce74\uba54\ub77c",id:"origo--camera",level:3},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],x={toc:N},v="wrapper";function b(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(v,d({},x,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Texture Mapper\ub294 \uc870\uc815 \uac00\ub2a5\ud55c \uc6d0\uc810\uc744 \uc911\uc2ec\uc73c\ub85c \uc790\uc720\ub86d\uac8c \ud655\ub300/\ucd95\uc18c\ud558\uac70\ub098 \ud68c\uc804\ud558\uba74\uc11c \ubc14\ub00c\ub294 \uc774\ubbf8\uc9c0\ub97c \uadf8\ub9b4 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \ub610\ud55c \uac00\uc0c1 \uce74\uba54\ub77c\ub97c \uc801\uc6a9\ud558\uc5ec \uc6d0\uadfc\uac10\uc744 \uad6c\ud604\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc774\ub54c \uc6d0\uadfc\uac10\uc758 \ud06c\uae30\ub3c4 \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(l.Z,{mdxType:"Note"},(0,n.kt)("li",null,"\uc774 \uc704\uc82f\uc740 MCU \ubd80\ud558\uc5d0 \uc0c1\ub2f9\ud55c \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,n.kt)("li",null,"\uc774 \uc704\uc82f\uc740 \ud53d\uc140 \uc0c9 \uc2ec\ub3c4\ub2f9 1\ube44\ud2b8\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Texture Mapper"),(0,n.kt)("h2",d({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,n.kt)("p",null,"Texture Mapper\ub294 TouchGFX Designer\uc758 Images \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-group-v4.21.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Texture Mapper"),(0,n.kt)("h2",d({},{id:"properties"}),"\uc18d\uc131"),(0,n.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Texture Mapper\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,n.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,n.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,n.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,n.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Animation Texture Mapper"),"\ub294 Texture Mapper\uc758 \uc560\ub2c8\uba54\uc774\uc158 \ud14d\uc2a4\ucc98 \ub9e4\ud37c \uc0dd\uc131 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Image"),"\ub294 \ubcc0\ud615\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Lock Image to Center"),"\ub294 \uc704\uc82f \uc911\uc2ec\uc5d0 \ub300\ud55c \uc774\ubbf8\uc9c0 \uc704\uce58 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\ub2e8, \ub7f0\ud0c0\uc784 \uc2dc Texture Mapper\uc758 \ud06c\uae30\ub97c \ubcc0\uacbd\ud558\uba74 \uc774 \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 \uc774\ubbf8\uc9c0\uc758 \uc911\uc2ec \uc704\uce58\uac00 \uc720\uc9c0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,n.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc704\uc82f \ub0b4\uc5d0\uc11c \ubcc0\ud615\ud560 \uc774\ubbf8\uc9c0\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Angle & Scale")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X Angle"),", ",(0,n.kt)("em",{parentName:"td"},"Y  Angle"),"\uacfc ",(0,n.kt)("em",{parentName:"td"},"Z Angle"),"\uc740 \uc704\uc82f \ub0b4\uc5d0\uc11c \uc774\ubbf8\uc9c0\uc758 \ud68c\uc804 \ubcc0\ud615\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\uc5ec\uae30\uc5d0\uc11c \uac01\ub3c4 \ub2e8\uc704\ub294 \ub77c\ub514\uc548\uc785\ub2c8\ub2e4."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Scale"),"\uc740 \uc704\uc82f \ub0b4\uc5d0\uc11c \uc774\ubbf8\uc9c0\uc758 \ud655\ub300/\ucd95\uc18c \ubcc0\ud615\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Origo")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Lock Origo to Center"),"\ub294 \uc704\uc82f\uc758 \uc911\uc2ec\uc5d0 \ub300\ud55c \uc774\ubbf8\uc9c0 \ud68c\uc804\uc810 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\ub2e8, \ub7f0\ud0c0\uc784 \uc2dc Texture Mapper\uc758 \ud06c\uae30\ub97c \ubcc0\uacbd\ud558\uba74 \uc774 \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 \uac00\uc6b4\ub370 \uc6d0\uc810 \uc704\uce58\uac00 \uc720\uc9c0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"X Origo"),", ",(0,n.kt)("em",{parentName:"td"},"Y Origo"),"\uc640 ",(0,n.kt)("em",{parentName:"td"},"Z Origo"),"\ub294 \uc704\uc82f \ub0b4\uc5d0\uc11c \uc774\ubbf8\uc9c0\uac00 \ud68c\uc804\ud558\uace0 \ud655\ub300/\ucd95\uc18c\ub418\ub294 \uc9c0\uc810\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("br",null),"\uc774 \uc18d\uc131\uc758 \ubcf5\uc7a1\uc131\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",d({parentName:"td"},{href:"#origo--camera"}),"\uc6d0\uc810 \ubc0f \uce74\uba54\ub77c \uc139\uc158"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Camera")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Camera Distance"),"\ub294 \uac00\uc0c1 \uce74\uba54\ub77c\uc758 \uac70\ub9ac\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null)," ",(0,n.kt)("em",{parentName:"td"},"\uc774 \uac12\uc5d0 \ub530\ub77c \uc774\ubbf8\uc9c0 \ud68c\uc804 \uc2dc \uc6d0\uadfc\uac10\uc758 \ud06c\uae30\ub3c4 \ubc14\ub01d\ub2c8\ub2e4. "))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Rendering Algorithm"),"\uc740 \uc704\uc82f \ub0b4\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \ub80c\ub354\ub9c1\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc54c\uace0\ub9ac\uc998\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\uc635\uc158\uc73c\ub85c\ub294 \ucd5c\uadfc\uc811 \uc774\uc6c3(Nearest-neighbour) \uc54c\uace0\ub9ac\uc998\uacfc \uc591\uc120\ud615 \ubcf4\uac04\ubc95(Bilinear Interpolation) \uc54c\uace0\ub9ac\uc998\uc774 \uc788\uc2b5\ub2c8\ub2e4"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,n.kt)("em",{parentName:"td"},"\uc54c\ud30c ")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,n.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,n.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,n.kt)("h3",d({},{id:"origo--camera"}),"\uc6d0\uc810 \ubc0f \uce74\uba54\ub77c"),(0,n.kt)("p",null,"\uc6d0\uc810\uc740 \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc758 \ubcc0\ud615\uc774 \uc77c\uc5b4\ub098\ub294 \uc9c0\uc810\uc744 \uacb0\uc815\ud569\ub2c8\ub2e4. \uc88c\ud45c \uc18d\uc131\uc778 ",(0,n.kt)("em",{parentName:"p"},"X Origo"),"\uc640 ",(0,n.kt)("em",{parentName:"p"},"Y Origo\ub294 ")," \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\uac00 \uc544\ub2cc Texture Mapper\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\uc640 \uad00\ub828\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc88c\ud45c \uc18d\uc131\uc778 ",(0,n.kt)("em",{parentName:"p"},"Z Origo\ub294")," Camera Distance ",(0,n.kt)("em",{parentName:"p"},"\uc18d\uc131 \uac12\uacfc \uad00\ub828\uc774 \uc788\uc2b5\ub2c8\ub2e4"),". \uc608\ub97c \ub4e4\uc5b4 ",(0,n.kt)("em",{parentName:"p"},"Camera Distance")," \uc18d\uc131 \uac12\uc774 1000\uc73c\ub85c \uc124\uc815\ub418\uba74 ",(0,n.kt)("em",{parentName:"p"},"Z Origo")," \uc5ed\uc2dc 1000\uc73c\ub85c \uc124\uc815\ub418\ub294 \ucd95\uc744 \uc911\uc2ec\uc73c\ub85c \uc774\ubbf8\uc9c0\uac00 \ud68c\uc804\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ubcc0\ud615 \uc704\uce58\ub97c Texture Mapper\uc758 \uc911\uc2ec\uc73c\ub85c \uace0\uc815\ud558\ub824\uba74 ",(0,n.kt)("em",{parentName:"p"},"Lock Origo to Center")," \uc635\uc158\uc5d0\uc11c \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624. \uadf8\ub7ec\uba74 ",(0,n.kt)("em",{parentName:"p"},"X Origo"),"\uc640 ",(0,n.kt)("em",{parentName:"p"},"Y Origo")," \uc18d\uc131\uc774 Texture Mapper\uc758 \uc911\uc2ec\uc73c\ub85c \uace0\uc815\ub418\uace0, ",(0,n.kt)("em",{parentName:"p"},"Z Origo")," \uc18d\uc131\uc774",(0,n.kt)("em",{parentName:"p"},"Camera Distance")," \uac12\uc73c\ub85c \uace0\uc815\ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub610\ud55c ",(0,n.kt)("em",{parentName:"p"},"Camera Distance")," \uc18d\uc131\uc5d0 \ub530\ub77c \uc774\ubbf8\uc9c0 \ud68c\uc804 \uc2dc \ud45c\uc2dc\ub418\ub294 \uc6d0\uadfc\uac10\uc758 \ud06c\uae30\ub3c4 \ubc14\ub00c\uac8c \ub429\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0\ub3c4 ",(0,n.kt)("em",{parentName:"p"},"Camera Distance")," \uc18d\uc131\uc774 \uac00\uae4c\uc6b8\uc218\ub85d FOV(Field Of View, \ud654\uac01) \uac00 \ucee4\uc9c0\uac8c \ub429\ub2c8\ub2e4. \uc774\uc5d0 \ub530\ub77c \uc778\uc9c0\ud560 \uc218 \uc788\ub294 \uc6d0\uadfc\uac10\uc758 \ud06c\uae30\ub3c4 \uc99d\uac00\ud569\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/coordinate-setup.webp",noShadow:!0,mdxType:"Figure"},"Texture Mapper\uc758 \uc6d0\uc810\uacfc \uce74\uba54\ub77c \uac70\ub9ac\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc88c\ud45c\uacc4"),(0,n.kt)("h2",d({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,n.kt)("p",null,"Texture Mapper\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,n.kt)(l.Z,{mdxType:"Note"},"\ud68c\uc804 \ub610\ub294 \ud655\ub300/\ucd95\uc18c \uc0c1\ud638\uc791\uc6a9\uc774 Texture Mapper\uc5d0 \uc801\uc6a9\ub418\uace0, Texture Mapper\uc758 \uc9c0\uc18d \uc2dc\uac04 \ub610\ub294 \uc9c0\uc5f0 \uc2dc\uac04\uc774 0\ubcf4\ub2e4 \ud074 \uacbd\uc6b0\uc5d0\ub294 \uc560\ub2c8\uba54\uc774\uc158 Texture Mapper\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,n.kt)("h3",d({},{id:"actions"}),"\uc561\uc158"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc704\uc82f\ubcc4 \uc561\uc158")),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Rotate Texture Mapper")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Texture Mapper\ub97c \ud604\uc7ac \ubc29\ud5a5 \ub610\ub294 \ud2b9\uc815 \uac01\ub3c4\uc5d0 \ub300\ud55c x, y \ubc0f z\ucd95 ",(0,n.kt)("em",{parentName:"td"},"\uc6d0\uc810\uc744 ")," \uc911\uc2ec\uc73c\ub85c \ud68c\uc804\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Scale Texture Mapper")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Texture Mapper\ub97c \ud604\uc7ac \ud06c\uae30 \ub610\ub294 \ud2b9\uc815 \ud06c\uae30\ub97c \uae30\uc900\uc73c\ub85c \ud655\ub300/\ucd95\uc18c\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Resize widget")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,n.kt)("th",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,n.kt)("h3",d({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,n.kt)("p",null,"Texture Mapper\ub294 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",d({},{id:"performance"}),"\uc131\ub2a5"),(0,n.kt)("p",null,"Texture Mapper\ub294 \uc774\ubbf8\uc9c0\ub97c \ud655\ub300/\ucd95\uc18c\ud558\uac70\ub098 \ud68c\uc804\ud560 \ub54c MCU\uc758 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uae4c\ub2e4\ub85c\uc6b4 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",d({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h2",d({},{id:"examples"}),"\uc608\uc81c"),(0,n.kt)("h3",d({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,n.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c Texture Mapper\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    interaction1Counter(0)\n{\n    textureMapper.setXY(150, 46);\n    textureMapper.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    textureMapper.setWidth(180);\n    textureMapper.setHeight(180);\n    textureMapper.setBitmapPosition(26.000f, 26.000f);\n    textureMapper.setScale(1.000f);\n    textureMapper.setCameraDistance(1000.000f);\n    textureMapper.setOrigo(90.000f, 90.000f, 1000.000f);\n    textureMapper.setCamera(90.000f, 90.000f);\n    textureMapper.updateAngles(-0.500f, -0.500f, -0.500f);\n    textureMapper.setRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n\n    add(textureMapper);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,n.kt)(i.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 TextureMapper \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,n.kt)(o.Z,{mdxType:"InlineCode"},"textureMapper.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("h3",d({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,n.kt)("p",null,"Texture Mapper\uac00 Animation Texture Mapper\ub85c \uc124\uc815\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub450 \uac00\uc9c0 \ucf5c\ubc31\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationStepAction"),"\uc740 \ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158\uc5d0\uc11c \ub2e8\uacc4\ub97c \uc2e4\ud589\ud560 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationEndedAction"),"\uc740 \ubaa8\ub4e0 \uc5d0\ub2c8\uba54\uc774\uc158\uc774 \uc885\ub8cc\ub418\uba74 \ud638\ucd9c\ub429\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\ub2e4\uc74c \ub450 \uac00\uc9c0 \ucf54\ub4dc\ub294 \uc704 \ub450 \uac00\uc9c0 \ucf5c\ubc31\uc744 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc744 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),(0,n.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"class Screen1View\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperStepActionCallback;\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperAnimationEndedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n    void textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n};\n")),(0,n.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View() :\n  textureMapperStepActionCallback(this, &Screen1View::textureMapperStepActionCallbackHandler),\n  textureMapperAnimationEndedCallback(this, &Screen1View::textureMapperAnimationEndedCallbackHandler)\n{\n  textureMapper.setTextureMapperAnimationStepAction(textureMapperStepActionCallback);\n  textureMapper.setTextureMapperAnimationEndedAction(textureMapperAnimationEndedCallback);\n  add(textureMapper);\n}\n\nvoid Screen1View::textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper steps\n    }\n}\n\nvoid Screen1View::textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper ends\n    }\n}\n")),(0,n.kt)("h3",d({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,n.kt)("p",null,"Texture Mapper\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/texture-mapper-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Texture Mapper Example UI \ud15c\ud50c\ub9bf"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/animation-texture-mapper-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Animation Texture Mapper Example UI \ud15c\ud50c\ub9bf"),(0,n.kt)("h2",d({},{id:"api-reference"}),"API \ucc38\uc870"),(0,n.kt)(p.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_texture_mapper",mdxType:"Link"},"TextureMapper \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870")),(0,n.kt)("li",null,(0,n.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_animation_texture_mapper",mdxType:"Link"},"AnimationTextureMapper \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}b.isMDXComponent=!0}}]);