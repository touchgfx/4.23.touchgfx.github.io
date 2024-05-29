"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[569],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(r),c=a,u=d["".concat(p,".").concat(c)]||d[c]||g[c]||l;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},28128:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),a=r(7029);const l=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const o=i},96151:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},94790:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){return n.createElement("code",null,this.props.children)}}const l=a},21100:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const o=i},35961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>b,frontMatter:()=>g,metadata:()=>u,toc:()=>h});r(59496);var n=r(49613),a=r(89639),l=r(48753),i=r(21100),o=r(94790),p=r(95375),m=r(28128);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const g={id:"image-progress",title:"Image Progress"},c=void 0,u={unversionedId:"development/ui-development/ui-components/progress-indicators/image-progress",id:"development/ui-development/ui-components/progress-indicators/image-progress",title:"Image Progress",description:"Image Progress\ub294 \ubc30\uacbd Image \uc0c1\ub2e8\uc5d0 Tiled Image\ub97c \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\ub85c \uc0ac\uc6a9\ud574 \ud604\uc7ac \uc9c4\ud589\ub960\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc9c4\ud589 \uc774\ubbf8\uc9c0\uc640 Alpha,  \uadf8\ub9ac\uace0 \uc774\ubbf8\uc9c0\uac00 \uc9c4\ud589\ud558\ub294 Direction\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ucee4\uc2a4\ud140 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud55c \ud6c4 \uc704\uce58, \ud06c\uae30 \ub4f1 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uc758 \uac01 \ub9e4\uac1c\ubcc0\uc218\ub97c \ucee4\uc2a4\ud140 \ubc30\uacbd \uc774\ubbf8\uc9c0\uc5d0 \ub9de\uac8c \ubcc0\uacbd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/image-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/image-progress",permalink:"/4.23/ko/docs/development/ui-development/ui-components/progress-indicators/image-progress",draft:!1,tags:[],version:"current",frontMatter:{id:"image-progress",title:"Image Progress"},sidebar:"docs",previous:{title:"Box Progress",permalink:"/4.23/ko/docs/development/ui-development/ui-components/progress-indicators/box-progress"},next:{title:"Text Progress",permalink:"/4.23/ko/docs/development/ui-development/ui-components/progress-indicators/text-progress"}},k={},h=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],N={toc:h},v="wrapper";function b(e){var{components:t}=e,r=d(e,["components"]);return(0,n.kt)(v,s({},N,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Image Progress\ub294 \ubc30\uacbd ",(0,n.kt)("a",s({parentName:"p"},{href:"../images/image"}),"Image")," \uc0c1\ub2e8\uc5d0 ",(0,n.kt)("a",s({parentName:"p"},{href:"../images/tiled-image"}),"Tiled Image"),"\ub97c \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\ub85c \uc0ac\uc6a9\ud574 \ud604\uc7ac \uc9c4\ud589\ub960\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc9c4\ud589 \uc774\ubbf8\uc9c0\uc640 ",(0,n.kt)("em",{parentName:"p"},"Alpha, ")," \uadf8\ub9ac\uace0 \uc774\ubbf8\uc9c0\uac00 \uc9c4\ud589\ud558\ub294 ",(0,n.kt)("em",{parentName:"p"},"Direction"),"\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ucee4\uc2a4\ud140 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud55c \ud6c4 \uc704\uce58, \ud06c\uae30 \ub4f1 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uc758 \uac01 \ub9e4\uac1c\ubcc0\uc218\ub97c \ucee4\uc2a4\ud140 \ubc30\uacbd \uc774\ubbf8\uc9c0\uc5d0 \ub9de\uac8c \ubcc0\uacbd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/image-progress/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Image Progress"),(0,n.kt)("h2",s({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,n.kt)("p",null,"Image Progress\ub294 TouchGFX Designer\uc758 Progress Indicators \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/image-progress/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Image Progress"),(0,n.kt)("h2",s({},{id:"properties"}),"\uc18d\uc131"),(0,n.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Image Progress\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,n.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,n.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,n.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,n.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\ubc84\ud2bc\uc758 \ud06c\uae30\ub294 \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Style"),"\uc740 \uc704\uc82f\uc758 \uc0ac\uc804 \uc124\uc815\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc740 \uc0ac\uc804 \uc124\uc815 \uac12\uc73c\ub85c \uc9c0\uc815\ub429\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\uc774 \uc2a4\ud0c0\uc77c\uc5d0\ub294 \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\ubbf8\uc9c0\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Background"),"\ub294 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Progress"),"\ub294 \uc9c4\ud589\ub960\uc6b8 \ud45c\uc2dc\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Progress Position")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,n.kt)("em",{parentName:"td"},"Y")," \uc88c\ud45c\ub294 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uc758 \uc704\uce58\ub97c \uae30\uc900\uc73c\ub85c \uc9c4\ud589 \uc774\ubbf8\uc9c0\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,n.kt)("em",{parentName:"td"},"H "),"\ub294 \uc9c4\ud589 \uc774\ubbf8\uc9c0\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Range Min")," \ubc0f ",(0,n.kt)("em",{parentName:"td"},"Range Max"),"\ub294 \ud45c\uc2dc\uae30\uc758 \ucd5c\uc18c/\ucd5c\ub300 \uc815\uc218 \uac12\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Initial"),"\uc740 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uc758 \ucd08\uae30 \uac12\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("em",{parentName:"td"},"Steps Total"),"\uc740 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uac00 \uc0c8\ub85c\uc6b4 \uac12\uc744 \ubcf4\uace0\ud558\ub294 \ud06c\uae30\uc758 \ub2e8\uc704\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc9c4\ud589\ub960\uc744 0%, 10%, 20%, ..., 100%\ub85c \ubcf4\uace0\ud55c\ub2e4\uba74 \ucd1d \uac12\uc740 10\uc73c\ub85c \uc124\uc815\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Steps Min"),"\uc740 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uac00 \ud45c\uc2dc\ud558\ub294 \ucd5c\uc18c \uc2a4\ud15d\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Direction"),"\uc740 \uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uac00 \uc9c4\ud589\ud558\ub294 \ubc29\ud5a5\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Anchor progress image at zero"),"\ub294 \uc9c4\ud589 \ubc29\ud5a5\uc744 \uae30\uc900\uc73c\ub85c \ud504\ub85c\uadf8\ub808\uc2a4 \uc774\ubbf8\uc9c0\uc758 \uc601\uc810 \uace0\uc815 \uc5ec\ubd80\ub97c, \ub2e4\uc2dc \ub9d0\ud574\uc11c \uc774\ubbf8\uc9c0\ub97c \u201c\ub4dc\ub7ec\ub0bc\uc9c0\u201d, \u201c\uac00\uc838\uc62c\uc9c0\u201d\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,n.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,n.kt)("em",{parentName:"td"},"\uc54c\ud30c")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,n.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,n.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,n.kt)("h2",s({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,n.kt)("p",null,"Image Progress\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,n.kt)("h3",s({},{id:"actions"}),"\uc561\uc158"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc704\uc82f\ubcc4 \uc561\uc158")),(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\uc9c4\ud589\ub960 \ud45c\uc2dc\uae30\uc758 \uac12\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,n.kt)("h3",s({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\ud2b8\ub9ac\uac70")),(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Value update complete")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\uc5c5\ub370\uc774\ud2b8 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc644\ub8cc\ub418\uba74 \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4. \uc5c5\ub370\uc774\ud2b8 \uc9c0\uc18d \uc2dc\uac04\uc774 0\uc774\uba74 \uc5c5\ub370\uc774\ud2b8\uac00 \uc989\uc2dc \uc77c\uc5b4\ub098\uc9c0\ub9cc \uc774 \uc774\ubca4\ud2b8\ub294 \uacc4\uc18d \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Value updated")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\uc5c5\ub370\uc774\ud2b8 \uc560\ub2c8\uba54\uc774\uc158 \uacfc\uc815\uc5d0\uc11c \uc989\uac01\uc801\uc778 \uc5c5\ub370\uc774\ud2b8\uc640 \uc911\uac04 \ub2e8\uacc4\uc5d0 \ub300\ud574 \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac12\uc774 \ud604\uc7ac \uac12\uacfc \ub2e4\ub97c \ub54c\ub9cc \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4.")))),(0,n.kt)("h2",s({},{id:"performance"}),"\uc131\ub2a5"),(0,n.kt)("p",null,"Image Progress\ub294 Tiled Image\uc640 \ubc30\uacbd Image\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c Image Progress\ub294 \uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30\uc5d0 \ub530\ub77c \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc18d\ub3c4\uac00 \ube60\ub978 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",s({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h2",s({},{id:"examples"}),"\uc608\uc81c"),(0,n.kt)("h3",s({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,n.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c Image Progress\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"imageProgress.setXY(148, 126);\nimageProgress.setProgressIndicatorPosition(2, 2, 180, 16);\nimageProgress.setRange(0, 100);\nimageProgress.setDirection(touchgfx::AbstractDirectionProgress::RIGHT);\nimageProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_PROGRESS_INDICATOR_BG_SQUARE_DEGREES_ID));\nimageProgress.setBitmap(BITMAP_BLUE_PROGRESSINDICATORS_FILL_TILING_PROGRESS_INDICATOR_FILL_STRIPED_NORMAL_HORIZONTAL_ID);\nimageProgress.setValue(0);\nimageProgress.setAnchorAtZero(false);\n")),(0,n.kt)(i.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 ImageProgress \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,n.kt)(o.Z,{mdxType:"InlineCode"},"imageProgress1.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("h3",s({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,n.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," \ud568\uc218\ub97c \uad6c\ud604\ud558\uc5ec \uc9c4\ud589\ub960\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud558\ub294 \ubc29\ubc95\uc744 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4. \uc774 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74 ",(0,n.kt)("a",s({parentName:"p"},{href:"image-progress"}),"\uc774 \uc139\uc158\uc758 \ucd08\ubc18"),"\uc5d0 \uc81c\uc2dc\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,n.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,n.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = imageProgress.getValue();\n    int16_t max;\n    int16_t min;\n    imageProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    imageProgress.setValue(nextValue);\n}\n")),(0,n.kt)("h3",s({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,n.kt)("p",null,"Image Progress\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Progress Indicator Example UI \ud15c\ud50c\ub9bf"),(0,n.kt)("h2",s({},{id:"api-reference"}),"API \ucc38\uc870"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_image_progress",mdxType:"Link"},"ImageProgress \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}b.isMDXComponent=!0}}]);