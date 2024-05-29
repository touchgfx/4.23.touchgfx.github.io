"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4993],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496);class i extends o.Component{render(){return o.createElement("div",{className:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}const r=i},89639:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496),i=n(7029);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,a=(0,i.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:r,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:r,src:a})),o.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(59496),i=n(96151);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const l=a},96151:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}const r=i},2333:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496);class i extends o.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/;if(t.test(e))return t.exec(e)[1];const n=/^https:\/\/youtu\.be\/(.+)$/;if(n.test(e))return n.exec(e)[1];return e}(this.props.url)}`;return o.createElement("div",{className:"videoWrapper"},o.createElement("iframe",{src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}const r=i},88780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>g});n(59496);var o=n(49613),i=n(2333),r=n(28128),a=n(48753),l=n(89639),c=n(95375);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"custom-containers",title:"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108"},m=void 0,d={unversionedId:"development/ui-development/touchgfx-engine-features/custom-containers",id:"development/ui-development/touchgfx-engine-features/custom-containers",title:"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108",description:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \ub54c TouchGFX\uc758 \ud45c\uc900 \uc704\uc82f \uc138\ud2b8\uc5d0 \uc5c6\ub294 \uc704\uc82f\uc774 \ud544\uc694\ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-containers.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-containers",permalink:"/4.23/ko/docs/development/ui-development/touchgfx-engine-features/custom-containers",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-containers",title:"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108"},sidebar:"docs",previous:{title:"\uc704\uce58 \ubc0f \ud06c\uae30",permalink:"/4.23/ko/docs/development/ui-development/touchgfx-engine-features/position-size"},next:{title:"\ube44\ud2b8\ub9f5 \uce90\uc2f1",permalink:"/4.23/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}},h={},g=[{value:"TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud560 \uacbd\uc6b0",id:"in-touchgfx-designer",level:2},{value:"\ubcf5\ud569 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108",id:"composite-custom-containers",level:3},{value:"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158",id:"custom-triggers-and-actions",level:3},{value:"\ucf54\ub4dc\ub85c \uc0dd\uc131\ud560 \uacbd\uc6b0",id:"in-code",level:2},{value:"touchgfx::Container \xa0\ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud558\ub294 \ud074\ub798\uc2a4 \uc0dd\uc131",id:"create-a-class-that-extends-the-touchgfxcontainer-class",level:3},{value:"\ucee8\ud14c\uc774\ub108\uc758 \ud558\uc704 \uc704\uc82f\uc744 \ubaa8\ub450 \uba64\ubc84 \ubc88\uc218\ub85c \uc120\uc5b8",id:"declaring-all-children-of-the-container-as-member-variables",level:3},{value:"\ucee8\ud14c\uc774\ub108\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774 \uc124\uc815",id:"setting-the-width-and-height-of-the-container",level:3},{value:"\uac01 \ud558\uc704 \uc704\uc82f \uc124\uc815",id:"setting-up-each-of-the-children",level:3},{value:"\uac01 \ud558\uc704 \uc704\uc82f\uc744 \uc62c\ubc14\ub978 \uc21c\uc11c\ub300\ub85c \uacc4\uce35\uc5d0 \ucd94\uac00",id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order",level:3},{value:"\uba54\uc18c\ub4dc\uc640 \ucf5c\ubc31\uc744 \ud1b5\ud574 \uc6d0\ud558\ub294 \ub3d9\uc791 \uad6c\ud604",id:"implementing-the-desired-behaviour-via-methods-and-callbacks",level:3}],C={toc:g},f="wrapper";function y(e){var{components:t}=e,n=u(e,["components"]);return(0,o.kt)(f,p({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \ub54c TouchGFX\uc758 \ud45c\uc900 \uc704\uc82f \uc138\ud2b8\uc5d0 \uc5c6\ub294 \uc704\uc82f\uc774 \ud544\uc694\ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \uc704\uc82f\uc744 \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ubc14\ub85c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc785\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub780 \ub2e4\ub978 \uae30\uc874 \uc704\uc82f\ub4e4\uc744 \ud3ec\ud568\ud558\uba70 \uc774\ub4e4 \uc704\uc82f\uc758 \uc2dc\uac01\uc801 \ud615\ud0dc\uc640 \ub3d9\uc791\uc744 \ubaa8\uc544 \ub193\uc740 \uac1d\uccb4\ub97c \ub9d0\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc778 \ubcf5\ud569 \ub514\uc790\uc778 \ud328\ud134\uacfc\ub294 \ub2e4\ub974\uc9c0\ub9cc \uc5ec\uae30\uc5d0 \ud3ec\ud568\ub41c \uc704\uc82f\uc744 \ucee8\ud14c\uc774\ub108\uc758 \ud558\uc704 \uc704\uc82f\uc774\ub77c\uace0\ub3c4 \ubd80\ub985\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uadf8\ub9ac\uae30 \uc131\ub2a5\uc774 \ub9e4\uc6b0 \ub192\uc2b5\ub2c8\ub2e4. TouchGFX\uc758 \uae30\ubcf8\uc801\uc778 \uadf8\ub9ac\uae30 \uba54\ucee4\ub2c8\uc998\uc744 \uc774\uc6a9\ud560 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ucee8\ud14c\uc774\ub108\uc640 \ud558\uc704 \uc704\uc82f\uc5d0\uc11c \uc5b4\ub5a4 \ubd80\ubd84\uc744 \ub2e4\uc2dc \uadf8\ub824\uc57c \ud560\uc9c0\ub97c \uc790\ub3d9\uc73c\ub85c \uacb0\uc815\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucee8\ud14c\uc774\ub108\ub97c \uc0ac\uc6a9\ud560 \ub54c \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud574 \uac71\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \uc704\uc82f\uc758 \uacf5\uac04\uc744 \uc904\uc5ec\uc57c \ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\ub294\ub370, \uc774\ub7ec\ud55c \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c\ub294 ",(0,o.kt)("a",p({parentName:"p"},{href:"custom-widgets"}),"\ucee4\uc2a4\ud140 \uc704\uc82f"),"\uc774\ub77c\uace0 \ud558\ub294 \uace0\uae09 \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",p({},{id:"in-touchgfx-designer"}),"TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud560 \uacbd\uc6b0"),(0,o.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc544\ub798 \ub3d9\uc601\uc0c1\uc5d0\uc11c \uc885\ud569\uc801\uc73c\ub85c \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,o.kt)(i.Z,{url:"https://youtu.be/nX1nCAA4pyA",mdxType:"YouTube"}),(0,o.kt)("h3",p({},{id:"composite-custom-containers"}),"\ubcf5\ud569 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108"),(0,o.kt)("p",null,"\ub2e4\ub978 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub85c \uad6c\uc131\ub41c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ub354\uc6b1 \uc791\uc740 \uad6c\uc131\uc694\uc18c\ub4e4\uc744 \ubaa8\uc544 \uad6c\uc131\uc694\uc18c\ub97c \uc0dd\uc131\ud55c\ub2e4\ub294 \uc810\uc5d0\uc11c \uac15\ub825\ud55c \ubc29\ubc95\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0dd\uc131 \ubc29\ubc95\uc740 \uc704\uc82f \uba54\ub274\uc5d0\uc11c \uc774\ubbf8 \uc815\uc758\ub418\uc5b4 \uc788\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ucd94\uac00\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)(l.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/composite-custom-containers-4.17.webp",mdxType:"Figure"},"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uc778\uc2a4\ud134\uc2a4 \uc0bd\uc785\ud558\uae30"),(0,o.kt)("p",null,"TouchGFX Designer\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uc778\uc2a4\ud134\uc2a4\ub97c \uc815\uc758 \uc790\uccb4\uc5d0 \ucd94\uac00\ud558\ub294 \ub4f1 \uc21c\ud658 \ucc38\uc870\ub97c \uc77c\uc73c\ud0a4\ub294 \uc778\uc2a4\ud134\uc2a4\uc758 \uc0bd\uc785\uc744 \ubc29\uc9c0\ud558\ub294 \ub370 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4."),(0,o.kt)(l.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/circular-reference-4.17.webp",mdxType:"Figure"},"\uc778\uc2a4\ud134\uc2a4 \uc0bd\uc785\uc744 \ube44\ud65c\uc131\ud654\ub294 \uc7a0\uc7ac\uc801 \uc21c\ud658 \ucc38\uc870"),(0,o.kt)("h3",p({},{id:"custom-triggers-and-actions"}),"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158"),(0,o.kt)("p",null,"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uac15\ub825\ud55c \uc694\uc18c \uc911 \ud558\ub098\ub294 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70(\ucf5c\ubc31)\uc640 \ucee4\uc2a4\ud140 \uc561\uc158(\uba54\uc18c\ub4dc)\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \uc774 \ub9d0\uc740 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uac8c \uc5c6\uc5b4\uc11c\ub294 \uc548 \ub420 \ub3d9\uc791\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub2e8\uc21c\ud788 \uc7ac\uc0ac\uc6a9\uc774 \uac00\ub2a5\ud55c \uc704\uc82f \ubaa8\uc74c\uc5d0 \uadf8\uce58\uc9c0 \uc54a\uace0 \ub098\uba38\uc9c0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc\ub3c4 \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,o.kt)(a.Z,{mdxType:"FurtherReading"},"\uc774 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)(c.Z,{to:"custom-triggers-and-actions",mdxType:"Link"},"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,o.kt)("h2",p({},{id:"in-code"}),"\ucf54\ub4dc\ub85c \uc0dd\uc131\ud560 \uacbd\uc6b0"),(0,o.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.  \uc808\ucc28\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"touchgfx::Container \xa0\ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud558\ub294 \ud074\ub798\uc2a4 \uc0dd\uc131"),(0,o.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108\uc758 \ud558\uc704 \uc704\uc82f\uc744 \ubaa8\ub450 \uba64\ubc84 \ubc88\uc218\ub85c \uc120\uc5b8"),(0,o.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774 \uc124\uc815"),(0,o.kt)("li",{parentName:"ul"},"\uac01 \ud558\uc704 \uc704\uc82f \uc124\uc815"),(0,o.kt)("li",{parentName:"ul"},"\uac01 \ud558\uc704 \uc704\uc82f\uc744 \uc62c\ubc14\ub978 \uc21c\uc11c\ub300\ub85c \uacc4\uce35\uc5d0 \ucd94\uac00"),(0,o.kt)("li",{parentName:"ul"},"\uba54\uc18c\ub4dc\uc640 \ucf5c\ubc31\uc744 \ud1b5\ud574 \uc6d0\ud558\ub294 \ub3d9\uc791 \uad6c\ud604")),(0,o.kt)("p",null,"\uc5ec\uae30\uc5d0\uc11c\ub294 \ucc98\uc74c\ubd80\ud130 \uc2dc\uc791\ud574 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc5ec \ub2e8\uc21c\ud558\uc9c0\ub9cc \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",p({},{id:"create-a-class-that-extends-the-touchgfxcontainer-class"}),"touchgfx::Container \xa0\ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud558\ub294 \ud074\ub798\uc2a4 \uc0dd\uc131"),(0,o.kt)("p",null,"\uba3c\uc800 \uc544\ub798 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp")," \ud5e4\ub354 \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. C++ \uc0c1\uc18d\uc744 \ud1b5\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::Container"),"\uc758 \uba54\uc18c\ub4dc\uc640 \uba64\ubc84\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \uc5bb\uc2b5\ub2c8\ub2e4(\uc774\ub54c \ud5e4\ub354 \ud30c\uc77c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"Container.hpp"),"\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4)."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{2,4}","{2,4}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),(0,o.kt)("h3",p({},{id:"declaring-all-children-of-the-container-as-member-variables"}),"\ucee8\ud14c\uc774\ub108\uc758 \ud558\uc704 \uc704\uc82f\uc744 \ubaa8\ub450 \uba64\ubc84 \ubc88\uc218\ub85c \uc120\uc5b8"),(0,o.kt)("p",null,"\ud5e4\ub354 \ud30c\uc77c\uc5d0\uc11c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uad6c\uc131\ud560 \uc704\uc82f\uc744 \uc120\uc5b8\ud569\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\uc5d0\uc11c\ub294 \ubc15\uc2a4\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"myBox"),"\uc640 \ubc84\ud2bc\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"myButton"),"\ub9cc \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{19-20}","{19-20}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n};\n")),(0,o.kt)("h3",p({},{id:"setting-the-width-and-height-of-the-container"}),"\ucee8\ud14c\uc774\ub108\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774 \uc124\uc815"),(0,o.kt)("p",null,"\uc55e\uc5d0\uc11c \uc0dd\uc131\ud55c \ud5e4\ub354 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uc5ec ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774\ub54c \uc0dd\uc131\uc790\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"setWidth()")," \uba54\uc18c\ub4dc\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"setHeight()")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc6d0\ud558\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 \ud06c\uae30\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{1,5-6}","{1,5-6}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",p({},{id:"setting-up-each-of-the-children"}),"\uac01 \ud558\uc704 \uc704\uc82f \uc124\uc815"),(0,o.kt)("p",null,"\uc774\uc81c \uc0dd\uc131\uc790\uc5d0\uc11c \uac01 \uc704\uc82f\uc758 \uc18d\uc131\uc744 \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{8-12}","{8-12}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",p({},{id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order"}),"\uac01 \ud558\uc704 \uc704\uc82f\uc744 \uc62c\ubc14\ub978 \uc21c\uc11c\ub300\ub85c \uacc4\uce35\uc5d0 \ucd94\uac00"),(0,o.kt)("p",null,"\uc0dd\uc131\uc790\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"add()")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc704\uc82f\uc744 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 \ud558\uc704 \uc704\uc82f\uc73c\ub85c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{14-15}","{14-15}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",p({},{id:"implementing-the-desired-behaviour-via-methods-and-callbacks"}),"\uba54\uc18c\ub4dc\uc640 \ucf5c\ubc31\uc744 \ud1b5\ud574 \uc6d0\ud558\ub294 \ub3d9\uc791 \uad6c\ud604"),(0,o.kt)("p",null,"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0 \ub3d9\uc791\uc744 \ucd94\uac00\ud558\ub824\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),"\uc5d0\uc11c \uba87 \uac00\uc9c0 \uba54\uc18c\ub4dc\uc640 \ucf5c\ubc31\uc744 \uc815\uc758\ud558\uba74 \ub429\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened")," \ucf5c\ubc31 \uc2e4\ud589\uc774 \uc720\uc77c\ud55c \ubaa9\uc801\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"doSomething()")," \uba54\uc18c\ub4dc\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{14-17,22,32-38,51}","{14-17,22,32-38,51}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainerBase();\n    virtual ~MyCustomContainerBase() {}\n    virtual void initialize();\n\n    /*\n     * Callback Setters\n     */\n    void setSomethingHappenedCallback(touchgfx::GenericCallback<>& callback)\n    {\n        somethingHappenedCallback = &callback;\n    }\n\n    /*\n     * Methods\n     */\n    virtual void doSomething();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Callback Emitters\n     */\n    virtual void emitSomethingHappenedCallback()\n    {\n        if (somethingHappenedCallback && somethingHappenedCallback->isValid())\n        {\n            somethingHappenedCallback->execute();\n        }\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::GenericCallback<>* somethingHappenedCallback;\n\n};\n")),(0,o.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp")," \ud30c\uc77c\uc5d0\uc11c \uc6d0\ud558\ub294 \ub3d9\uc791\uc744 \uba54\uc18c\ub4dc\uc640 \ucf5c\ubc31\uc5d0 \ucd94\uac00\ud558\uc5ec \uad6c\ud604\ud569\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \ub2e8\uc21c\ud558\uac8c ",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened")," \ucf5c\ubc31\uc744 \uc2e4\ud589\ud558\uc9c0\ub9cc \uc6d0\ud558\ub294 \ub300\ub85c \uc0ac\uc6a9\uc790 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n\nvoid MyCustomContainer::doSomething()\n{\n    MyCustomContainer::emitSomethingHappenedCallback();\n}\n")),(0,o.kt)(a.Z,{mdxType:"FurtherReading"},"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc608\uc81c\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74 ",(0,o.kt)(c.Z,{to:"../../../tutorials/tutorial-04",mdxType:"Link"},"\uc790\uc2b5\uc11c 4: \ucee4\uc2a4\ud140 \ub3d9\uc791\uc744 \ud1b5\ud574 \uc2a4\ud06c\ub864 \ud720 \uc0dd\uc131\ud558\uae30"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}y.isMDXComponent=!0}}]);