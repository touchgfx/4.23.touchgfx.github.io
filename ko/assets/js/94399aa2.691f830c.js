"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[20500],{49613:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>s});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),h=r,s=p["".concat(c,".").concat(h)]||p[h]||g[h]||i;return o?n.createElement(s,a(a({ref:t},u),{},{components:o})):n.createElement(s,a({ref:t},u))}));function s(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},12822:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(59496),r=o(32118);const i=function(e){const t=e.noShadow||!1,o=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:o,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:o,height:i,src:a})),n.createElement("p",null,e.children))}},86222:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(59496),r=o(89588);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const l=a},89588:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(59496);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const i=r},39331:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(59496),r=o(89588);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}const l=a},71678:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(59496),r=o(89588);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const l=a},4675:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>w,frontMatter:()=>p,metadata:()=>h,toc:()=>m});o(59496);var n=o(49613),r=o(12822),i=o(86222),a=o(51721),l=o(39331),c=o(71678);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const p={id:"video-decoding",title:"Video Decoding",sidebar_label:"Video Decoding"},g=void 0,h={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",title:"Video Decoding",description:"Video Decoding \uc139\uc158\uc5d0\uc11c\ub294 \uac1c\ubc1c\uc790\uac00 \ud558\ub4dc\uc6e8\uc5b4 \ub610\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ube44\ub514\uc624 \ub514\ucf54\ub529 \uae30\ub2a5\uc744 \uc774\uc6a9\ud574 TouchGFX HAL\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",draft:!1,tags:[],version:"current",frontMatter:{id:"video-decoding",title:"Video Decoding",sidebar_label:"Video Decoding"},sidebar:"docs",previous:{title:"Additional Features",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"},next:{title:"Generating Code",permalink:"/4.23/ko/docs/development/touchgfx-hal-development/generator-how-to/generating-code"}},s={},m=[{value:"Type",id:"video-decoding-type",level:2},{value:"Concurrent Videos",id:"video-decoding-number",level:2},{value:"Strategy",id:"video-decoding-strategy",level:2},{value:"Decode Format",id:"decode-format",level:2},{value:"Buffer size",id:"video-decoding-buffer-size",level:2}],f={toc:m},v="wrapper";function w(e){var{components:t}=e,o=u(e,["components"]);return(0,n.kt)(v,d({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Video Decoding \uc139\uc158\uc5d0\uc11c\ub294 \uac1c\ubc1c\uc790\uac00 \ud558\ub4dc\uc6e8\uc5b4 \ub610\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ube44\ub514\uc624 \ub514\ucf54\ub529 \uae30\ub2a5\uc744 \uc774\uc6a9\ud574 TouchGFX HAL\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator Video Decoding \uc124\uc815"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"TouchGFX\uc5d0\uc11c MJPEG Video Decoding\uc744 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294  ",(0,n.kt)(a.Z,{to:"../../../ui-development/touchgfx-engine-features/video",mdxType:"Link"},"MJPEG Video")," \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("p",null,"\ube44\ub514\uc624 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub514\ucf54\ub529\uc5d0\uc11c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uac83\uacfc\ub294 \ub2e4\ub978 ",(0,n.kt)("em",{parentName:"p"},"Decoding Format"),"\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube44\ub514\uc624 \ud558\ub4dc\uc6e8\uc5b4 \ub514\ucf54\ub529\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub808\uc784 \ubc84\ud37c\uc640 \ub3d9\uc77c\ud55c \ud53d\uc140 \ud615\uc2dd\uc744 \uac00\uc9c4 \ube44\ub514\uc624 RGB \ubc84\ud37c\ub9cc \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,n.kt)(l.Z,{mdxType:"Note"},"\ubaa8\ub4e0 MCU\uac00 \ud558\ub4dc\uc6e8\uc5b4 \ube44\ub514\uc624 \ub514\ucf54\ub529\uc744 \uc9c0\uc6d0\ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,n.kt)("h2",d({},{id:"video-decoding-type"}),"Type"),(0,n.kt)("p",null,'\uae30\ubcf8\uc801\uc73c\ub85c Video Decoding\uc758 "Type"\uc740 \ube44\ud65c\uc131\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud544\uc694\ud55c \uc8fc\ubcc0 \uc7a5\uce58\uac00 STM32CubeMX\uc5d0\uc11c \ud65c\uc131\ud654\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 "Software"\uc640 "Hardware" \ubaa8\ub450\uac00 \ud68c\uc0c9\uc73c\ub85c \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. \ud68c\uc0c9\uc73c\ub85c \ube44\ud65c\uc131\ud654\ub41c \uc635\uc158 \uc704\ub85c \ub9c8\uc6b0\uc2a4\ub97c \uac00\uc838\uac00\uba74 \ud544\uc694\ud55c \uc8fc\ubcc0 \uc7a5\uce58\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-dependecies-info-box.webp",width:"600",mdxType:"Figure"},'"Hardware"\uc5d0 \ub300\ud55c Video Type \uc885\uc18d\uc131\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uc815\ubcf4 \uc0c1\uc790'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Software")," - STM32CubeMX\uc758 ",(0,n.kt)("em",{parentName:"li"},"Middleware and Software Packs")," \uc139\uc158\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"li"},"LIBJPEG"),'\uac00 \ud65c\uc131\ud654\ub41c \uacbd\uc6b0\uc5d0\ub294 "Software" \uc635\uc158\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uace0 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub514\ucf54\ub354\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc989, TouchGFX Generator\uac00 \uc18c\ud504\ud2b8\uc6e8\uc5b4 MJPEG \ub514\ucf54\ub354\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.')),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-sw-decoding-libjpeg.webp",width:"250",mdxType:"Figure"},"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud65c\uc131\ud654\ub41c LIBJPEG"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Hardware")," - ",(0,n.kt)("em",{parentName:"li"},"Multimedia")," \uc139\uc158\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"li"},"JPEG"),' IP\uac00 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\uace0 TouchGFX Generator\uc5d0\uc11c CMSIS \ud638\ud658 RTOS\uac00 \uc120\ud0dd\ub41c \uacbd\uc6b0, "Hardware" \uc635\uc158\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.')),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-hw-decoding-jpeg-ip.webp",width:"250",mdxType:"Figure"},"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud65c\uc131\ud654\ub41c JPEG IP"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\ub2e4\uc591\ud55c \ube44\ub514\uc624 \ub514\ucf54\ub529 \uc2dc\ub098\ub9ac\uc624\uc5d0 \ub300\ud55c \uad6c\uccb4\uc801\uc778 \ucf54\ub4dc \uc608\uc81c\ub294 ",(0,n.kt)(a.Z,{to:"../../scenarios/scenarios-video-decoding",mdxType:"Link"},"Scenarios")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h2",d({},{id:"video-decoding-number"}),"Concurrent Videos"),(0,n.kt)("p",null,'"Concurrent Videos" \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \uc5b8\uc81c\ub4e0\uc9c0 GUI\uc758 \ub3d9\uc77c \ud654\uba74\uc5d0\uc11c \uac00\uc7a5 \ub9ce\uc740 \uc591\uc758 \ube44\ub514\uc624\ub97c \ub3d9\uc2dc\uc5d0 \ub514\ucf54\ub529\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud654\uba74\uc5d0\uc11c \ud558\ub098\uc758 \ube44\ub514\uc624\ub9cc \ub514\ucf54\ub529\ud558\uae30\ub97c \uc6d0\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 "Number of Videos"\ub97c 1\ub85c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,n.kt)("p",null,"\ucd5c\ub300 4\uac1c\uc758 \ube44\ub514\uc624\ub97c \ub3d9\uc2dc\uc5d0 \ub514\ucf54\ub529\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",d({},{id:"video-decoding-strategy"}),"Strategy"),(0,n.kt)("p",null,"\ube44\ub514\uc624 \ub514\ucf54\ub529 \uc804\ub7b5\uacfc \uad00\ub828\ud574 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc138 \uac00\uc9c0 \uc635\uc158\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Direct to Framebuffer")," - \ube44\ub514\uc624\uac00 UI \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub514\ucf54\ub529\ub429\ub2c8\ub2e4. It can be slower than the other strategies, but saves RAM by not having a buffer for the video frames."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Single Buffer")," -  \uc804\uc6a9 \ubc84\ud37c\uc5d0\uc11c \ubcc4\ub3c4\uc758 \uc791\uc5c5\uc73c\ub85c \ube44\ub514\uc624\uac00 \ub514\ucf54\ub529\ub429\ub2c8\ub2e4. \uc774 \ubc84\ud37c\ub294 \ub0b4\ubd80 \uba54\ubaa8\ub9ac\uc5d0\uc11c \ud560\ub2f9\uc774 \ub429\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Double Buffer")," - \uac19\uc740 \uba54\ubaa8\ub9ac \ube44\uc6a9\uc73c\ub85c \ub354 \ub098\uc740 \uc131\ub2a5\uc744 \uc5bb\uc744 \uc218 \uc788\ub3c4\ub85d 2\uac1c\uc758 \uc804\uc6a9 \ubc84\ud37c\uc5d0\uc11c \ubcc4\ub3c4\uc758 \uc791\uc5c5\uc73c\ub85c \ube44\ub514\uc624\uac00 \ub514\ucf54\ub529\ub429\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\ub2e8\uc77c \ub610\ub294 \uc774\uc911 \ud504\ub808\uc784 \ubc84\ud37c \uc804\ub7b5\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub294 CMSIS \ud638\ud658 OS\ub97c \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-rtos-requirement-info-box.webp",width:"600",mdxType:"Figure"},"CMSIS RTOS \uc694\uad6c \uc0ac\ud56d\uc5d0 \ub300\ud55c \uc815\ubcf4 \uc0c1\uc790:"),(0,n.kt)(l.Z,{mdxType:"Note"},"\uc774\uc911 \ubc84\ud37c \uc804\ub7b5\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub294 \uba54\ubaa8\ub9ac \uc18c\ube44\ub7c9\uc5d0 \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\ube44\ub514\uc624 \ub514\ucf54\ub529\uc744 \uc704\ud574 FreeRTOS\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uad6c\uccb4\uc801 \uc608\uc81c\ub294  ",(0,n.kt)(a.Z,{to:"../../scenarios/scenarios-video-decoding",mdxType:"Link"},"Scenarios"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h2",d({},{id:"decode-format"}),"Decode Format"),(0,n.kt)("p",null,"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub514\ucf54\ub529\uc758 \uacbd\uc6b0, \uac1c\ubc1c\uc790\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud53d\uc140 \ud615\uc2dd\uc5d0 \uad00\uacc4 \uc5c6\uc774 RGB \ubc84\ud37c\uc758 \ud53d\uc140 \ud615\uc2dd\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX Generator\ub294 DMA2D(ChromART)\uac00 \uc11c\ub85c \ub2e4\ub978 \ud615\uc2dd \uac04\uc5d0 \ud53d\uc140 \ud615\uc2dd \ubcc0\ud658\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RGB565")," - \ube44\ub514\uc624 RGB \ubc84\ud37c\ub294 16\ube44\ud2b8\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RGB888")," - \ube44\ub514\uc624 RGB \ubc84\ud37c\ub294 24\ube44\ud2b8\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ARGB8888")," - \ube44\ub514\uc624 RGB \ubc84\ud37c\ub294 32\ube44\ud2b8\uc785\ub2c8\ub2e4. \uc54c\ud30c \uac12\uc740 255\uc785\ub2c8\ub2e4.")),(0,n.kt)(c.Z,{mdxType:"Tip"},"RGB888(24\ube44\ud2b8) \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 RGB565(16\ube44\ud2b8)\uc5d0 \ube44\ub514\uc624 \ub514\ucf54\ub529 \ubc84\ud37c\uac00 \uc788\uc73c\uba74 \uac1c\ubc1c\uc790\uac00 \uba54\ubaa8\ub9ac \uacf5\uac04\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",d({},{id:"video-decoding-buffer-size"}),"Buffer size"),(0,n.kt)("p",null,"\ubc84\ud37c \ub108\ube44 \ubc0f \ub192\uc774 \uc124\uc815\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uac00\uc7a5 \ud070 \ube44\ub514\uc624\ubcf4\ub2e4 \ud06c\uac70\ub098 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\ub108\ube44\ub294 32\ub85c \ub098\ub204\uae30\uac00 \uac00\ub2a5\ud574\uc57c \ud569\ub2c8\ub2e4.")))}w.isMDXComponent=!0}}]);