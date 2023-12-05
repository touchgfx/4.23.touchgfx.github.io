"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[67057],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61235:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const a=i},12822:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496),i=t(32118);const a=function(e){const n=e.noShadow||!1,t=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children))}},89588:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=i},40465:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const a=i},39331:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(59496),i=t(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const l=o},71678:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(59496),i=t(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}const l=o},7743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>h});t(59496);var r=t(49613),i=t(12822),a=t(39331),o=t(71678),l=t(61235),c=t(40465);function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"code-structure",title:"\ucf54\ub4dc \uad6c\uc870"},d=void 0,m={unversionedId:"development/ui-development/software-architecture/code-structure",id:"development/ui-development/software-architecture/code-structure",title:"\ucf54\ub4dc \uad6c\uc870",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc\uc5d0\uc11c\ubd80\ud130 \uc0ac\uc6a9\uc790\uac00 \uc791\uc131\ud558\ub294 \ud655\uc7a5 \ucf54\ub4dc\uc5d0 \uc774\ub974\uae30\uae4c\uc9c0 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc758 \uad6c\uc870\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/code-structure.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/code-structure",permalink:"/4.23/ko/docs/development/ui-development/software-architecture/code-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"code-structure",title:"\ucf54\ub4dc \uad6c\uc870"},sidebar:"docs",previous:{title:"\uc2a4\ud06c\ub9b0 \uac1c\ub150",permalink:"/4.23/ko/docs/development/ui-development/software-architecture/screen-definition-and-mvp"},next:{title:"Working with TouchGFX",permalink:"/4.23/ko/docs/category/working-with-touchgfx"}},g={},h=[{value:"\uc0dd\uc131 \ucf54\ub4dc vs \uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"generated-code-vs-user-code",level:2},{value:"TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ud30c\uc77c",id:"files-generated-by-touchgfx-designer",level:2},{value:"\uc608\uc2dc",id:"example",level:2},{value:"TouchGFX Designer View",id:"touchgfx-designer-view",level:3},{value:"\uacc4\uce35",id:"layers",level:3},{value:"\ucf54\ub4dc",id:"code",level:3}],k={toc:h},v="wrapper";function f(e){var{components:n}=e,t=u(e,["components"]);return(0,r.kt)(v,p({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc\uc5d0\uc11c\ubd80\ud130 \uc0ac\uc6a9\uc790\uac00 \uc791\uc131\ud558\ub294 \ud655\uc7a5 \ucf54\ub4dc\uc5d0 \uc774\ub974\uae30\uae4c\uc9c0 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc758 \uad6c\uc870\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",p({},{id:"generated-code-vs-user-code"}),"\uc0dd\uc131 \ucf54\ub4dc vs \uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc\ub294 \uc0ac\uc6a9\uc790\uac00 \uc791\uc131\ud558\ub294 \ucf54\ub4dc\uc640 \uc644\uc804\ud788 \ubd84\ub9ac\ub429\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc0dd\uc131 \ucf54\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/gui_generated")," \ud3f4\ub354\uc5d0 \uc788\ub294 \ubc18\uba74, \uc791\uc131 \ucf54\ub4dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"gui")," \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gui_generated")," \ucf54\ub4dc\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4\ub97c \uc704\ud55c \uae30\ubcf8 \ud074\ub798\uc2a4 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uae30\ubcf8 \ud074\ub798\uc2a4\uc5d0\ub294 TouchGFX Designer\uc5d0\uc11c \uad6c\uc131\ub41c \ubaa8\ub4e0 \uc124\uc815 \ucf54\ub4dc\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \ud074\ub798\uc2a4 \ub2e4\uc774\uc5b4\uadf8\ub7a8\uc740 \uac01 \ud074\ub798\uc2a4\uc758 \uad00\uacc4\ub97c \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels.webp",mdxType:"Figure"},"\uc5d4\uc9c4, \uc0dd\uc131 \ubc0f \uc0ac\uc6a9\uc790 \ud074\ub798\uc2a4\uc758 \uacc4\uce35 \uad6c\uc870"),(0,r.kt)("p",null,"\uc704 \uadf8\ub9bc\uacfc \uac19\uc774 TouchGFX Designer \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 3\uac00\uc9c0 \ucf54\ub4dc \uacc4\uce35\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc5d4\uc9c4"),": \uc5d4\uc9c4 \ud074\ub798\uc2a4\ub294 TouchGFX\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud45c\uc900 \ud074\ub798\uc2a4\ub85c, \uc0dd\uc131 \ud074\ub798\uc2a4\ub97c \uc704\ud55c \uae30\ubcf8 \ud074\ub798\uc2a4 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc0dd\uc131"),": \uc0dd\uc131 \ud074\ub798\uc2a4\uc640 \ud574\ub2f9\ud558\ub294 \ud30c\uc77c\uc740 TouchGFX Designer\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c\ub9c8\ub2e4 \ub2e4\uc2dc \uc0dd\uc131\ub429\ub2c8\ub2e4. \ucf54\ub4dc \uc0dd\uc131\uae30\uac00 \ub2e4\uc74c \ubc88\uc5d0 \uc2e4\ud589\ub420 \ub54c \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \ubcc0\uacbd\ud588\ub358 \ub0b4\uc6a9\uc744 \ub36e\uc5b4\uc4f0\uac8c \ub418\uae30 \ub54c\ubb38\uc5d0 \uc774 \ud074\ub798\uc2a4\uc640 \ud30c\uc77c\uc740 \uc9c1\uc811 \ud3b8\uc9d1\ud558\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4. \uc774 \ud074\ub798\uc2a4\ub294 \uc0ac\uc6a9\uc790 \ud074\ub798\uc2a4\ub97c \uc704\ud55c \uae30\ubcf8 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc0ac\uc6a9\uc790"),": \uc0ac\uc6a9\uc790 \ud074\ub798\uc2a4\ub780 \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \uc791\uc131\ud558\ub294 \ucf54\ub4dc\ub97c \uc704\ud55c \uac83\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc774 \uacc4\uce35\uc5d0\uc11c \uc6d0\ud558\ub294 \ucf54\ub4dc\ub97c \uc790\uc720\ub86d\uac8c \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \ud074\ub798\uc2a4\uac00 \uc5c6\ub294 \uacbd\uc6b0 TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\uc9c0\ub9cc \uc808\ub300 \ubcc0\uacbd\ub418\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("em",{parentName:"li"},"\uc0ac\uc6a9\uc790\uc758 \uc18c\uc720"),"\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.")),(0,r.kt)(a.Z,{mdxType:"Note"},"TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc544\ud0a4\ud14d\ucc98\ub294 \uc0ac\uc6a9\uc790\uac00 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\uc5d0 \uc81c\ud55c\uc774 \uc5c6\ub2e4\ub294 \uc810\uc5d0\uc11c \uac1c\ubc29\uc801\uc785\ub2c8\ub2e4. TouchGFX Designer\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uac83(\uc704\uc82f, \uc560\ub2c8\uba54\uc774\uc158, \ud6a8\uacfc \ub4f1)\ub3c4 \uc0ac\uc6a9\uc790 \ud074\ub798\uc2a4\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc\ub294 \uc0ac\uc6a9\uc790\uac00 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc124\uacc4\ud558\ub294 \ubc29\uc2dd\uc744 \uc81c\ud55c\ud560 \uc218 \uc5c6\ub3c4\ub85d \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",p({},{id:"files-generated-by-touchgfx-designer"}),"TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ud30c\uc77c"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c TouchGFX Designer\ub294 TouchGFX \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,r.kt)("em",{parentName:"p"},"\uc624\uc9c1")," ",(0,r.kt)("inlineCode",{parentName:"p"},"generated")," \ud3f4\ub354\uc5d0\ub9cc \ud30c\uc77c\uc744 \uc7ac\uc0dd\uc131\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \ud30c\uc77c\ub4e4\uc740 \ub36e\uc5b4\uc4f0\uc774\uac8c \ub418\ubbc0\ub85c \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \ud3b8\uc9d1\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc TouchGFX Designer\ub294 \ucef4\ud30c\uc77c\uc5d0 \ud544\uc694\ud558\uc9c0\ub9cc \ub204\ub77d\ub41c \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uae30\ub3c4 \ud558\ub294\ub370, \uc608\ub97c \ub4e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"application.config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"simulator/main.cpp"),", \uadf8\ub9ac\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images/__designer"),"\uc5d0 \uc788\ub294 \uc2a4\ud0a8 \uc774\ubbf8\uc9c0, ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos/__designer"),"\uc5d0 \uc788\ub294 \ube44\ub514\uc624 \uc0d8\ud50c \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c\ub85c TouchGFX Designer\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc694\uc18c\ub9cc \uc788\uc73c\uba74 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131, \ucef4\ud30c\uc77c \ubc0f \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud574 \uc124\uba85\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx")," \ud30c\uc77c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gui")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub418\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc(\uc788\ub294 \uacbd\uc6b0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/images")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub418\ub294 \uc0ac\uc6a9\uc790 \uc774\ubbf8\uc9c0(\uc788\ub294 \uacbd\uc6b0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/texts/texts.xml")," \ud30c\uc77c\uc5d0 \ud3ec\ud568\ub418\ub294 \ud14d\uc2a4\ud2b8(\uc788\ub294 \uacbd\uc6b0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/fonts")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub418\ub294 \uae00\uaf34(\uc788\ub294 \uacbd\uc6b0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/videos")," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub418\ub294 \ube44\ub514\uc624(\uc788\ub294 \uacbd\uc6b0)")),(0,r.kt)(o.Z,{mdxType:"Tip"},"Git\uc640 \uac19\uc740 \ubc84\uc804 \uad00\ub9ac \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub3c4 \uc2e4\uc81c\ub85c \uc704\uc5d0 \uc5f4\uac70\ud55c \ud30c\uc77c\ub9cc \uc800\uc7a5\uc18c\ub85c \ucee4\ubc0b\ud558\uba74 \ub429\ub2c8\ub2e4. \ub098\uba38\uc9c0\ub294 TouchGFX Designer \uc790\uccb4\uc5d0\uc11c \uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",p({},{id:"example"}),"\uc608\uc2dc"),(0,r.kt)("p",null,"\uc544\ub798\uc5d0\ub294 \uc0dd\uc131 \ucf54\ub4dc\uc640 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ubaa8\ub450 \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uad00\ud55c \uac04\ub2e8\ud55c \uc608\uc2dc\uc785\ub2c8\ub2e4. \uc774 \uc608\uc2dc\ub97c \ud1b5\ud574 \uc704\uc5d0\uc11c \uc124\uba85\ud55c \ub0b4\uc6a9\uc744 \ub354\uc6b1 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",p({},{id:"touchgfx-designer-view"}),"TouchGFX Designer View"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\ub294 \uc2a4\ud06c\ub9b0\uc774 \ud558\ub098\ubfd0\uc778 \uacbd\uc6b0\uc785\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreen")," \uc2a4\ud06c\ub9b0\uc740 ",(0,r.kt)("a",p({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," ",(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"\uacfc ",(0,r.kt)("a",p({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," ",(0,r.kt)("inlineCode",{parentName:"p"},"button1"),"\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \ub610\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"button1"),"\uc744 \ud074\ub9ad\ud588\uc744 \ub54c \uac00\uc0c1 \ud568\uc218 ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor()"),"\ub97c \ud638\ucd9c\ud558\ub294 \uc0c1\ud638\uc791\uc6a9\uc744 \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/designer-application-4.17.webp",mdxType:"Figure"},"TouchGFX Designer \uc560\ud50c\ub9ac\ucf00\uc774\uc158"),(0,r.kt)("p",null,"\ubc84\ud2bc\uc744 \ub204\ub97c \ub54c\ub9c8\ub2e4 \ubc30\uacbd \ubc15\uc2a4\uc758 \uc0c9\uc0c1\uc774 \uc0c8\ub85c\uc6b4 \uc0c9\uc0c1\uc73c\ub85c \ubb34\uc791\uc704\ub85c \ubc14\ub00c\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub3d9\uc791\uc744 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0 \uad6c\ud604\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc815\uc758 \ucf54\ub4dc\uc758 \uc791\uc131 \ubc29\ubc95\uc744 \uc2dc\uc5f0\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",p({},{id:"layers"}),"\uacc4\uce35"),(0,r.kt)("p",null,"\uc774 \uc608\uc5d0\uc11c \uc5f0\uad00\ub41c \uc5ec\ub7ec \ud074\ub798\uc2a4\uac00 \uc544\ub798\uc640 \uac19\uc774 \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.webp",mdxType:"Figure"},"\ud074\ub798\uc2a4 \uc608\uc2dc"),(0,r.kt)("p",null,"\uc704 \uadf8\ub9bc\uc5d0\uc11c,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),"\uac00 \uc0dd\uc131 \uacc4\uce35\uc5d0 \uc788\ub294\ub370, \uc774\ub294 \ub2e4\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TouchGFX Designer\uc5d0\uc11c \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc0dd\uae38 \ub54c\ub9c8\ub2e4 \uc774 \uae30\ubcf8 \ud074\ub798\uc2a4\ub4e4\uc774 \ub2e4\uc2dc \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \uc774 \ud074\ub798\uc2a4\ub97c \uc9c1\uc811 \ud3b8\uc9d1\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenView"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenPresenter"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplication")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeap"),"\uc774 \uc0ac\uc6a9\uc790 \ucf54\ub4dc \uacf5\uac04\uc5d0 \uc0dd\uc131\ub418\ub294\ub370, \uc774\ub294 \ub2e4\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774 \ucf54\ub4dc\ub4e4\uc740 TouchGFX Designer\uc5d0\uc11c \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc0dd\uae30\ub354\ub77c\ub3c4 \ub2e4\uc2dc \uc0dd\uc131\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\ub294 \uc5ec\uae30\uc11c \uc0ac\uc6a9\uc790 \uc815\uc758 \ucf54\ub4dc\ub97c \uc790\uc720\ub86d\uac8c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"box1")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"li"},"button1")," \uc124\uc815\uc740 \ubaa8\ub450 \uc0dd\uc131\ub41c view \uae30\ubc18 \ud074\ub798\uc2a4\uc778 ",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ud06c\ub9b0 \uc804\ud658 \uc2dc \ud638\ucd9c\ub418\ub294 \ubaa8\ub4e0 \ud568\uc218\ub294 \uc0dd\uc131\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ubc18 \ud074\ub798\uc2a4\uc778 ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc801\uc815\ub7c9\uc758 \uba54\ubaa8\ub9ac\uac00 \ud560\ub2f9\ub418\ub3c4\ub85d \ud558\ub294 \ubaa8\ub4e0 \uae30\ub85d\uc740 \uc0dd\uc131\ub41c \ud799 \uae30\ubc18 \ud074\ub798\uc2a4\uc778 ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),"\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4\ub97c \uc790\uc720\ub86d\uac8c \ud3b8\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc744 \ub354 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor")," \ud568\uc218\ub9cc \uc2e4\ud589\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"\uc758 \uc0c9\uc0c1\uc758 \ubcc0\uacbd\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",p({},{id:"code"}),"\ucf54\ub4dc"),(0,r.kt)("p",null,"view \uae30\ubc18 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ubc15\uc2a4\uc640 \ubc84\ud2bc\uc5d0 \ub300\ud55c \uc124\uc815\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"buttonCallbackHandler"),"\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor")," \uac00\uc0c1 \ud568\uc218\uc5d0 \ub300\ud55c \uc124\uc815\uacfc \ud638\ucd9c\ub3c4 \uc788\uc9c0\ub9cc \uc5ec\uae30\uc11c\ub294 \uc774 \ud568\uc218\uac00 \uc544\ubb34\ub7f0 \uae30\ub2a5\ub3c4 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{27-37}","{27-37}":!0}),'/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <touchgfx/Color.hpp>\n#include "BitmapDatabase.hpp"\n\nMyScreenViewBase::MyScreenViewBase() :\n    buttonCallback(this, &MyScreenViewBase::buttonCallbackHandler)\n{\n    box1.setPosition(0, 0, 800, 480);\n    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    button1.setXY(155, 106);\n    button1.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n    button1.setAction(buttonCallback);\n\n    add(box1);\n    add(button1);\n}\n\nvoid MyScreenViewBase::setupScreen()\n{\n\n}\n\nvoid MyScreenViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &button1)\n    {\n        //Interaction1\n        //When button1 clicked call virtual function\n        //Call setRandomColor\n        setRandomColor();\n    }\n}\n')),(0,r.kt)("p",null,"view \uae30\ubc18 \ud074\ub798\uc2a4\uc5d0\uc11c \ud5e4\ub354 \ud30c\uc77c\uc744 \ubcf4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor")," \uc120\uc5b8\uacfc \ub354\ubd88\uc5b4, \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ud568\uc218\ub97c \uc7ac\uc815\uc758\ud558\uace0 \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc774 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#ifndef MYSCREENVIEWBASE_HPP\n#define MYSCREENVIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n#include <touchgfx/widgets/Button.hpp>\n\nclass MyScreenViewBase : public touchgfx::View<MyScreenPresenter>\n{\npublic:\n    MyScreenViewBase();\n    virtual ~MyScreenViewBase() {}\n    virtual void setupScreen();\n\n    /*\n     * Virtual Action Handlers\n     */\n    virtual void setRandomColor()\n    {\n        // Override and implement this function in MyScreen\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box box1;\n    touchgfx::Button button1;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<MyScreenViewBase, const touchgfx::AbstractButton&> buttonCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void buttonCallbackHandler(const touchgfx::AbstractButton& src);\n\n};\n\n#endif // MYSCREENVIEWBASE_HPP\n")),(0,r.kt)("p",null,"\uc774\uc81c \uc9c1\uc811 \uc2e4\ud589\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud5e4\ub354 \ud30c\uc77c\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView.hpp"),"\ub85c \uc774\ub3d9\ud558\uc5ec \ud568\uc218\ub97c \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{14}","{14}":!0}),"#ifndef MYSCREENVIEW_HPP\n#define MYSCREENVIEW_HPP\n\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n\nclass MyScreenView : public MyScreenViewBase\n{\npublic:\n    MyScreenView();\n    virtual ~MyScreenView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void setRandomColor();\nprotected:\n};\n\n#endif // MYSCREENVIEW_HPP\n")),(0,r.kt)("p",null,"\uc774\uc81c ",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView")," cpp \ud30c\uc77c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\uc758 \uc2e4\uc81c \ub3d9\uc791\uc744 \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/gui/src/my_screen/MyScreenView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{19-23}","{19-23}":!0}),"#include <gui/myscreen_screen/MyScreenView.hpp>\n#include <touchgfx/Color.hpp>\n#include <stdlib.h>\n\nMyScreenView::MyScreenView()\n{\n\n}\n\nvoid MyScreenView::setupScreen()\n{\n    MyScreenViewBase::setupScreen();\n}\n\nvoid MyScreenView::tearDownScreen()\n{\n    MyScreenViewBase::tearDownScreen();\n}\n\nvoid MyScreenView::setRandomColor()\n{\n    box1.setColor(touchgfx::Color::getColorFromRGB(rand()&0xff, rand()&0xff, rand()&0xff));\n    box1.invalidate();\n}\n")),(0,r.kt)("p",null,"\uc774\uc81c \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2e4\ud589\ud574 \ubcf4\uba74 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \ub54c\ub9c8\ub2e4 \ubc30\uacbd \ubc15\uc2a4\uc758 \uc0c9\uc0c1\uc774 \ubb34\uc791\uc704\ub85c \ubc14\ub00c\uba74\uc11c \uc0dd\uc131 \ucf54\ub4dc\uc640 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \uc774\uc6a9\ud574 \uac04\ub2e8\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\ub294 \ub370 \uc131\uacf5\ud55c \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/simulator-random-color.webp",mdxType:"Figure"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2dc\uc5f0\ud558\ub294 \uc2dc\ubbac\ub808\uc774\ud130"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\ubb3c\ub860 TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc \uae30\ub2a5\uc744 \uaf2d \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uac83\uc740 \uc544\ub2c8\uc9c0\ub9cc \uc774 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uba74 \uc0c1\ub2f9\ud55c \uc2dc\uac04\uc744 \uc544\ub084 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud544\uc694\ud55c \ud30c\uc77c\ub9cc \uc9c1\uc811 \ucd94\uac00\ud574\uc11c \uae30\uc874\uc758 \ubc29\uc2dd\uc73c\ub85c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\ub610\ud55c \uc5ec\ub7ec \uac00\uc9c0\ub97c \ud63c\ud569\ud574\uc11c \uc870\ud654\ub86d\uac8c \uc0dd\uc131\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 TouchGFX Designer \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc815\uc758\ud558\uc9c0 \uc54a\ub294 \uc2a4\ud06c\ub9b0\ub3c4 \ub123\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"gotoXYZ")," \ud568\uc218\ub97c ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendApplication")," \ud074\ub798\uc2a4\uc5d0 \ucd94\uac00\ud558\uac70\ub098 \uc0ac\uc6a9\uc790 \uc2a4\ud06c\ub9b0\uc5d0 \ud544\uc694\ud55c view, presenter \uadf8\ub9ac\uace0 \uc804\ud658\uc744  ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendHeap \uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),"."))}f.isMDXComponent=!0}}]);