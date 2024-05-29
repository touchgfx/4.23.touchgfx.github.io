"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[51378],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),a=r(7029);const l=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const o=i},96151:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>d});r(59496);var n=r(49613),a=r(89639),l=r(48753),i=r(95375);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"framebuffer",title:"\ud504\ub808\uc784\ubc84\ud37c"},u=void 0,m={unversionedId:"basic-concepts/framebuffer",id:"basic-concepts/framebuffer",title:"\ud504\ub808\uc784\ubc84\ud37c",description:"\ud504\ub808\uc784\ubc84\ud37c\ub780 \uadf8\ub798\ud53d \uc5d4\uc9c4\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud45c\uc2dc\ud560 \ub2e4\uc74c \uc774\ubbf8\uc9c0\ub97c \uc900\ube44\ud560 \ubaa9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\ub294 \uba54\ubaa8\ub9ac\ub97c \ub9d0\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/framebuffer",permalink:"/4.23/ko/docs/basic-concepts/framebuffer",draft:!1,tags:[],version:"current",frontMatter:{id:"framebuffer",title:"\ud504\ub808\uc784\ubc84\ud37c"},sidebar:"docs",previous:{title:"\uc0c9\uc0c1 \ud615\uc2dd",permalink:"/4.23/ko/docs/basic-concepts/color-formats"},next:{title:"\uadf8\ub798\ud53d \uc5d4\uc9c4",permalink:"/4.23/ko/docs/basic-concepts/graphics-engine"}},s={},d=[{value:"\uc0c9\uc0c1",id:"colors",level:2},{value:"\ub514\uc2a4\ud50c\ub808\uc774",id:"display",level:2},{value:"\ud504\ub808\uc784\ubc84\ud37c \uc704\uce58",id:"location-of-framebuffer",level:2},{value:"\ub0b4\ubd80 RAM",id:"internal-ram",level:3},{value:"\uc678\ubd80 RAM",id:"external-ram",level:3},{value:"RAM \ub0b4\uc7a5 \ub514\uc2a4\ud50c\ub808\uc774",id:"display-with-embedded-ram",level:3},{value:"\ud504\ub808\uc784\ubc84\ud37c \ud06c\uae30",id:"amount-of-framebuffers",level:2},{value:"\ud504\ub808\uc784\ubc84\ud37c\uac00 1\uac1c\uc77c \ub54c",id:"one-framebuffer",level:3},{value:"\ud504\ub808\uc784\ubc84\ud37c\uac00 \ub2e4\uc218\uc77c \ub54c",id:"more-than-one-framebuffer",level:3},{value:"\ud504\ub808\uc784\ubc84\ud37c\uac00 1\uac1c \ubbf8\ub9cc\uc77c \ub54c",id:"less-than-one-framebuffer",level:3},{value:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9",id:"memory-consumption",level:2}],f={toc:d},h="wrapper";function g(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)(h,o({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\ub780 \uadf8\ub798\ud53d \uc5d4\uc9c4\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud45c\uc2dc\ud560 \ub2e4\uc74c \uc774\ubbf8\uc9c0\ub97c \uc900\ube44\ud560 \ubaa9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\ub294 \uba54\ubaa8\ub9ac\ub97c \ub9d0\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\ub294 \uc77c\uc815 \ud06c\uae30\uc758 RAM\uc5d0 \uc778\uc811\ud55c \ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-contiguous-memory.svg",noShadow:"true",mdxType:"Figure"},"\ud504\ub808\uc784\ubc84\ud37c \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\uc5d0\ub294 \uc5f0\uad00\ub41c \uac00\ub85c\uc640 \uc138\ub85c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\uc720\ub85c \ud504\ub808\uc784\ubc84\ud37c\ub294 x,y \uc88c\ud45c\ub85c \uc778\ub371\uc2f1\uc774 \uac00\ub2a5\ud55c 2D \uba54\ubaa8\ub9ac\ub77c\ub294 \uc778\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-2d-memory.svg",noShadow:"true",mdxType:"Figure"},"2D \ud504\ub808\uc784\ubc84\ud37c \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\uc5d0\ub294 \uc5f0\uad00\ub41c \uc0c9\uc0c1 \ud615\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\uc758 \uc2dc\uc791 \ubd80\ubd84\uc740 \uc774\ub7ec\ud55c \uc0c9\uc0c1 \ud615\uc2dd\uc5d0 \ub530\ub978 \uc0c9\uc0c1\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud504\ub808\uc784\ubc84\ud37c\uc758 \uc774\ub7ec\ud55c \uac01 \uc2dc\uc791 \ubd80\ubd84\uc744 \ud53d\uc140\uc774\ub77c\uace0 \uce6d\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\uc758 \ud53d\uc140 \uba54\ubaa8\ub9ac \uc8fc\uc18c\ub97c \uacc4\uc0b0\ud558\uc5ec \uc800\uc7a5\ub41c \uc0c9\uc0c1\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uba74 \ud504\ub808\uc784\ubc84\ud37c\uc5d0\uc11c x, y \uc704\uce58\uc758 \ud53d\uc140 \uc0c9\uc0c1\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = newColor;\n")),(0,n.kt)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c \ud504\ub808\uc784\ubc84\ud37c\uc758 \ud53d\uc140 \uc0c9\uc0c1\uc744 \uac00\uc838\uc640\uc11c \uacc4\uc0b0\uc5d0 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud504\ub808\uc784\ubc84\ud37c\uc758 \ud53d\uc140 \uc0c9\uc0c1\uc744 \uc5b4\ub461\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(",(0,n.kt)("inlineCode",{parentName:"p"},"darken")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0)."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );\n")),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c \uba54\ubaa8\ub9ac\ub294 \uc704\uc640 \uac19\uc774 \ud53d\uc140 \ub2e8\uc704\ub85c \uc4f0\uac70\ub098 \uc77d\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc9c0 \uc54a\uace0, Chrom-ART DMA\uc640 \uac19\uc740 \uc2dc\uc2a4\ud15c \uae30\ubc18 \ud558\ub4dc\uc6e8\uc5b4 \uae30\ub2a5\uc744 \uc8fc\ub85c \uc774\uc6a9\ud574 \uc4f0\uac70\ub098 \uc77d\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",o({},{id:"colors"}),"\uc0c9\uc0c1"),(0,n.kt)("p",null,"TouchGFX\uc5d0\uc11c \ud504\ub808\uc784\ubc84\ud37c\uc758 \ud53d\uc140 \uc0c9\uc0c1 \ud615\uc2dd\uc740 \ub2e4\uc74c \uc911 \ud55c \uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uadf8\ub808\uc774\uc2a4\ucf00\uc77c")," 1, 2 \ub610\ub294 4bpp(Bits per Pixel) \uadf8\ub808\uc774\uc2a4\ucf00\uc77c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ud558\uc774 \ub610\ub294 \ud2b8\ub8e8 \uceec\ub7ec")," 16, 24 \ub610\ub294 32bpp \uc0c9\uc0c1")),(0,n.kt)("p",null,"bpp\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud560\uc218\ub85d \ud504\ub808\uc784\ubc84\ud37c\uc5d0\uc11c \ub098\ud0c0\ub0bc \uc218 \uc788\ub294 \uace0\uc720 \uc0c9\uc0c1\ub3c4 \ub298\uc5b4\ub0a9\ub2c8\ub2e4. \ub098\uc544\uac00, bpp\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud560\uc218\ub85d \ud504\ub808\uc784\ubc84\ud37c\uc758 \uba54\ubaa8\ub9ac \uc18c\ube44\ub7c9\ub3c4 \uc99d\uac00\ud569\ub2c8\ub2e4."),(0,n.kt)("h2",o({},{id:"display"}),"\ub514\uc2a4\ud50c\ub808\uc774"),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\uc758 \ub0b4\uc6a9\uc740 \ucd5c\uc885\uc801\uc73c\ub85c \ubb3c\ub9ac\uc801 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ub418\uc5b4 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud504\ub808\uc784\ubc84\ud37c\uc640 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \ud53d\uc140 \uac00\ub85c \ubc0f \uc138\ub85c\uac00 \uc11c\ub85c \ub3d9\uc77c\ud55c \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/display-and-framebuffer.svg",noShadow:"true",mdxType:"Figure"},"24bpp \ud504\ub808\uc784\ubc84\ud37c \ub0b4\uc6a9\uacfc \uadf8\uc5d0 \ub530\ub978 \ub514\uc2a4\ud50c\ub808\uc774 \uacb0\uacfc"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},"\uc5ec\ub7ec \uac00\uc9c0 \ub514\uc2a4\ud50c\ub808\uc774 \uc720\ud615\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\ub514\uc2a4\ud50c\ub808\uc774 \uae30\uc220")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h2",o({},{id:"location-of-framebuffer"}),"\ud504\ub808\uc784\ubc84\ud37c \uc704\uce58"),(0,n.kt)("p",null,"\ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec \uae30\ubc18\uc758 \uadf8\ub798\ud53d \uc2dc\uc2a4\ud15c\uc744 \ud06c\uac8c \ub2e8\uc21c\ud654\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/simplified-graphics-system.webp",noShadow:!0,width:"400",mdxType:"Figure"},"\uadf8\ub798\ud53d \uc2dc\uc2a4\ud15c \uac1c\ub7b5\ub3c4"),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\ub294 MCU \ub0b4\ubd80 \ub610\ub294 \uc678\ubd80 RAM\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-placement.webp",noShadow:"true",width:"600",mdxType:"Figure"},"\uac00\ub2a5\ud55c \ud504\ub808\uc784\ubc84\ud37c \uc704\uce58"),(0,n.kt)("p",null,"\uac01 \uc704\uce58\ub294 \uc7a0\uc7ac\uc801 \uc7a5\uc810\uacfc \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",o({},{id:"internal-ram"}),"\ub0b4\ubd80 RAM"),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\ub97c MCU \ub0b4\ubd80 RAM\uc5d0 \uc800\uc7a5\ud558\uba74 \ud504\ub808\uc784\ubc84\ud37c\uc5d0 \ub300\ud55c \uc77d\uae30/\uc4f0\uae30 \uc561\uc138\uc2a4 \uc18d\ub3c4\ub97c \uadf9\ub300\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub3c4 \ucd5c\ub300\ud55c \uc6d0\ud65c\ud558\uac8c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ubc18\ub300\ub85c \ub0b4\ubd80 RAM\uc740 \ub2e4\uc218\uc758 \uc2dc\uc2a4\ud15c \uad6c\uc131\uc694\uc18c\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc5ec \ub9e4\uc6b0 \ubd80\uc871\ud55c \ub9ac\uc18c\uc2a4\uc774\uae30 \ub54c\ubb38\uc5d0 \ud504\ub808\uc784\ubc84\ud37c\uac00 \ub9ce\uc740 \uc6a9\ub7c9\uc744 \ucc28\uc9c0\ud558\uae30\ub294 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud558\uc9c0\ub9cc \ub9cc\uc57d \uac00\ub2a5\ud558\ub2e4\uba74 \ud504\ub808\uc784\ubc84\ud37c\ub97c \ub0b4\ubd80 RAM\uc5d0 \uc800\uc7a5\ud558\uc5ec RAM\uc744 \ucd94\uac00\ud560 \ud544\uc694\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc2dc\uc2a4\ud15c\uc758 \uc804\ubc18\uc801\uc778 \ube44\uc6a9\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",o({},{id:"external-ram"}),"\uc678\ubd80 RAM"),(0,n.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc5d0 \uc678\ubd80 RAM\uc774 \uc788\ub2e4\uba74 \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc678\ubd80 RAM\uc5d0 \uc800\uc7a5\ud558\uc5ec \ub0b4\ubd80 RAM\uc744 \ub300\uccb4\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc678\ubd80 RAM\uc5d0 \ub300\ud55c \uc77d\uae30/\uc4f0\uae30 \uc561\uc138\uc2a4 \uc18d\ub3c4\ub294 \ub0b4\ubd80 RAM\uc5d0 \ube44\ud574 \ub300\uccb4\ub85c \ub290\ub9b0 \ubc18\uba74, \uc678\ubd80 RAM\uc758 \uc6a9\ub7c9\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ub0b4\ubd80 RAM\ubcf4\ub2e4 \ud6e8\uc52c \ud07d\ub2c8\ub2e4 \ub530\ub77c\uc11c \uc678\ubd80 RAM\uc774 \uc720\uc77c\ud55c \ud574\uacb0\ucc45\uc77c \ub54c\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"MCU\ub294 \uce90\uc2f1\uacfc \uac19\uc774 \uc678\ubd80 RAM\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4 \uc18d\ub3c4\ub97c \ub192\uc5ec\uc8fc\ub294 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h3",o({},{id:"display-with-embedded-ram"}),"RAM \ub0b4\uc7a5 \ub514\uc2a4\ud50c\ub808\uc774"),(0,n.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc758 \ub514\uc2a4\ud50c\ub808\uc774 \uc720\ud615\uc5d0 \ub530\ub77c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uba54\ubaa8\ub9ac\uac00 \ub0b4\uc7a5\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uba54\ubaa8\ub9ac\uc5d0\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \u201c\ubb3c\ub9ac\uc801\u201d \ud53d\uc140 \ub0b4\uc6a9\uc774 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ud53d\uc140 \uba54\ubaa8\ub9ac\uac00 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub0b4\uc7a5\ub41c\ub2e4\ub294 \uac83\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uac00 \uc791\ub3d9 \uc911\uc77c \ub54c\ub3c4 MCU\uac00 \uc720\ud734 \uc0c1\ud0dc\uac00 \ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"TouchGFX \ud504\ub808\uc784\ubc84\ud37c\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc758 RAM\uc5d0 \uc800\uc7a5\ub418\uc9c0 \uc54a\ub294\ub370, \uadf8 \uc774\uc720\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \ub0b4\ubd80 \uba54\ubaa8\ub9ac\uac00 \uba54\ubaa8\ub9ac \ub9e4\ud551\uc774 \ub418\uc9c0 \uc54a\uc73c\uba70 \ub79c\ub364 \ud53d\uc140 \uc77d\uae30 \ub610\ub294 \uc4f0\uae30\uc5d0 \uc801\ud569\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub300\uc2e0\uc5d0 TouchGFX\ub294 \ud504\ub808\uc784\ubc84\ud37c\ub97c \ub0b4\ubd80 \ub610\ub294 \uc678\ubd80 RAM\uc5d0 \uc800\uc7a5\ud574\ub450\uace0 \ud544\uc694\ud560 \ub54c \uc774\ub97c \ub514\uc2a4\ud50c\ub808\uc774 RAM\uc73c\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,n.kt)("h2",o({},{id:"amount-of-framebuffers"}),"\ud504\ub808\uc784\ubc84\ud37c \ud06c\uae30"),(0,n.kt)("p",null,"TouchGFX\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud504\ub808\uc784\ubc84\ud37c\ub97c 1\uac1c \uc774\uc0c1 \ub610\ub294 1\uac1c \ubbf8\ub9cc\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\uc758 \ud06c\uae30\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc678\uad00\uacfc \uc131\ub2a5 \ubc0f \uba54\ubaa8\ub9ac \uc18c\ube44\ub7c9\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",o({},{id:"one-framebuffer"}),"\ud504\ub808\uc784\ubc84\ud37c\uac00 1\uac1c\uc77c \ub54c"),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c 1\uac1c\ub9cc\uc73c\ub85c\ub3c4 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ub418\ub294 \ud53d\uc140\uc744 \ubaa8\ub450 \uc815\ud655\ud788 \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub0b4\ubd80 RAM\uc774 \uc5c6\uc744 \ub54c \ud504\ub808\uc784\ubc84\ud37c\uac00 1\uac1c \uc774\uc0c1 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub54c \ud45c\uc2dc\ub418\ub294 \uadf8\ub798\ud53d\uc774 \ubcf5\uc7a1\ud558\uc5ec \uc2dc\uac01\uc801 \uc544\ud2f0\ud329\ud2b8(visual artifacts, \ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0\uc758 \uadf8\ub798\ud53d \uacb0\ud568)\ub97c \uc720\ubc1c\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \ud504\ub808\uc784\ubc84\ud37c 1\uac1c\uac00 \uc801\ud569\ud569\ub2c8\ub2e4."),(0,n.kt)("h3",o({},{id:"more-than-one-framebuffer"}),"\ud504\ub808\uc784\ubc84\ud37c\uac00 \ub2e4\uc218\uc77c \ub54c"),(0,n.kt)("p",null,"TouchGFX\uc5d0\uc11c \ud504\ub808\uc784\ubc84\ud37c\uac00 \ub2e4\uc218\ub77c\ub294 \ub9d0\uc740 2\uac1c\ub77c\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. 1\uac1c\ub294 \ub2e4\uc74c \uc774\ubbf8\uc9c0\ub97c \uc4f8 \ub54c \uc0ac\uc6a9\ub418\uace0, \ub098\uba38\uc9c0 1\uac1c\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub2e8, \ud2f0\uc5b4\ub9c1(tearing)\uacfc \uac19\uc740 \uc2dc\uac01\uc801 \uc544\ud2f0\ud329\ud2b8\ub294 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("h3",o({},{id:"less-than-one-framebuffer"}),"\ud504\ub808\uc784\ubc84\ud37c\uac00 1\uac1c \ubbf8\ub9cc\uc77c \ub54c"),(0,n.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ud504\ub808\uc784\ubc84\ud37c\uac00 1\uac1c \ubbf8\ub9cc\uc774\uba74,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ub418\ub294 \uba54\ubaa8\ub9ac\ub3c4 \uc801\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\uae30 \uc5f0\uc0b0 \uc131\ub2a5\uc774 \ud5a5\uc0c1\ub429\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub354 \ub9ce\uc774 \uc804\uc1a1\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"TouchGFX\uc5d0\uc11c \ud504\ub808\uc784\ubc84\ud37c\uac00 1\uac1c \ubbf8\ub9cc\uc774\uba74 \ubd80\ubd84\uc801 \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. \ubd80\ubd84\uc801 \ud504\ub808\uc784\ubc84\ud37c \uae30\ubc95\uc740 RAM\uc774 \ub0b4\uc7a5\ub41c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",o({},{id:"memory-consumption"}),"\uba54\ubaa8\ub9ac \uc0ac\uc6a9"),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\uc758 \uba54\ubaa8\ub9ac \uc18c\ube44\ub7c9\uc740 \uc0c9\uc0c1 \ud06c\uae30\uc640 \ud53d\uc140 \uc218\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ud504\ub808\uc784\ubc84\ud37c\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uba54\ubaa8\ub9ac\uc758 \ud06c\uae30\ub294 \uac00\ub85c ",(0,n.kt)("em",{parentName:"p"}," \uc138\ub85c")," \uc0c9 \uc2ec\ub3c4(\ube44\ud2b8) / 8\ubc14\uc774\ud2b8\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"right"}),"\ud574\uc0c1\ub3c4(\ud53d\uc140)"),(0,n.kt)("th",o({parentName:"tr"},{align:"right"}),"\uc0c9\uc0c1(bpp)"),(0,n.kt)("th",o({parentName:"tr"},{align:"right"}),"\uacc4\uc0b0"),(0,n.kt)("th",o({parentName:"tr"},{align:"right"}),"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9(\ubc14\uc774\ud2b8)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"800 x 480"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"16bpp"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"800 ",(0,n.kt)("em",{parentName:"td"}," 480 ")," 16 / 8"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"768.000B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"480 x 272"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"24bpp"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"480 ",(0,n.kt)("em",{parentName:"td"}," 272 ")," 24 / 8"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"391.680B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"100 x 100"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"8bpp"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"100 ",(0,n.kt)("em",{parentName:"td"}," 100 ")," 8 / 8"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"10.000B")))),(0,n.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\uac00 \ub2e4\uc218\uc77c \uacbd\uc6b0\uc5d0\ub294 \uc0ac\uc6a9\ub418\ub294 \uba54\ubaa8\ub9ac\uc758 \ud06c\uae30\ub3c4 \uadf8\ub9cc\ud07c \ucee4\uc9d1\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud504\ub808\uc784\ubc84\ud37c\ub97c 2\uac1c \uc0ac\uc6a9\ud558\ub294 \uc774\uc911 \ubc84\ud37c\ub9c1 \uae30\ubc95\uc744 \uc801\uc6a9\ud558\uba74 \uc0ac\uc6a9\ub418\ub294 \uba54\ubaa8\ub9ac \ud06c\uae30\ub3c4 2\ubc30\ub85c \ub298\uc5b4\ub0a9\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ubc18\ub300\ub85c \ud504\ub808\uc784\ubc84\ud37c\ub97c 1\uac1c \ubbf8\ub9cc\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uba54\ubaa8\ub9ac \ud06c\uae30\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \ud560\ub2f9\ud558\uace0 \uc81c\uc5b4\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc744 \uc804\uc801\uc73c\ub85c \ub9de\ucda4 \uc124\uc815\ud560 \uc218 \uc788\uc9c0\ub9cc \ub108\ubb34 \uc801\uac8c \uc0ac\uc6a9\ud558\uba74 \uadf8\ub798\ud53d\uc758 \uc804\ubc18\uc801\uc778 \uc131\ub2a5\uc774 \ub290\ub824\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"STM32 ",(0,n.kt)(i.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",mdxType:"Link"},"LTDC")," \ub514\uc2a4\ud50c\ub808\uc774 \ucee8\ud2b8\ub864\ub7ec \ubb38\uc11c\uc5d0 \ud504\ub808\uc784\ubc84\ud37c\uac00 \uc790\uc138\ud788 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")))}g.isMDXComponent=!0}}]);