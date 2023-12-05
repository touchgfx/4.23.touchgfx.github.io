"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[39192],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(n),c=i,g=s["".concat(d,".").concat(c)]||s[c]||p[c]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},18576:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(32118);const a=function(e){const t=e.width,n=e.height,a=e.points||[],o=(0,i.Z)(e.imageSource);return r.createElement("div",{style:{position:"relative"}},r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:n,src:o})),a.map((function(e,t){return r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},r.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},r.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),r.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),r.createElement("p",null,e.children)))}},86222:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),i=n(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const l=o},89588:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=i},39559:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(32118);const a=function(e){const t=(0,i.Z)(e.url);var n;const a=null!==(n=e.width)&&void 0!==n?n:"100%";var o;const l=null!==(o=e.height)&&void 0!==o?o:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:l},r.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},66590:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class i extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const a=i},30032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>g,toc:()=>v});n(59496);var r=n(49613),i=n(12822),a=n(66590),o=n(39559),l=n(18576),d=n(86222),m=n(51721);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"main-window",title:"\uba54\uc778 \ucc3d"},c=void 0,g={unversionedId:"development/ui-development/designer-user-guide/main-window",id:"development/ui-development/designer-user-guide/main-window",title:"\uba54\uc778 \ucc3d",description:"TouchGFX Designer\uc758 \uba54\uc778 \ucc3d\uc740 \ud0d0\uc0c9 \ubaa8\uc74c, \uba85\ub839 \ubc84\ud2bc, \uc54c\ub9bc \ud45c\uc2dc\uc904, \uc0c1\uc138 \ub85c\uadf8\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uba54\uc778 \ucc3d\uc740 '\ubdf0'\ub97c \uc911\uc2ec\uc73c\ub85c \ud558\ub098\uc758 \ud504\ub808\uc784\uc744 \ud615\uc131\ud569\ub2c8\ub2e4. ('\ubdf0' \uc601\uc5ed\uc740 \uc544\ub798 \uc774\ubbf8\uc9c0\uc5d0\uc11c \ud750\ub9bf\ud558\uac8c \ud45c\uc2dc\ub41c \uc601\uc5ed\uc744 \ub9d0\ud569\ub2c8\ub2e4)",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/main-window.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/main-window",permalink:"/4.23/ko/docs/development/ui-development/designer-user-guide/main-window",draft:!1,tags:[],version:"current",frontMatter:{id:"main-window",title:"\uba54\uc778 \ucc3d"},sidebar:"docs",previous:{title:"\ud30c\uc77c \uba54\ub274",permalink:"/4.23/ko/docs/development/ui-development/designer-user-guide/file-menu"},next:{title:"\uce94\ubc84\uc2a4 \ubdf0",permalink:"/4.23/ko/docs/development/ui-development/designer-user-guide/canvas-view"}},h={},v=[{value:"\ud0d0\uc0c9 \ubaa8\uc74c",id:"navigation-bar",level:2},{value:"\uba85\ub839",id:"commands",level:2},{value:"Generate Code",id:"generate-code",level:3},{value:"Run Simulator",id:"run-simulator",level:3},{value:"Program and Run Target",id:"run-target",level:3},{value:"Program Internal Flash and Run Target",id:"run-target-internal",level:4},{value:"\uc54c\ub9bc \ud45c\uc2dc\uc904",id:"notification-bar",level:2},{value:"\uc0c1\uc138 \ub85c\uadf8",id:"detailed-log",level:2},{value:"\uc5c5\ub370\uc774\ud2b8 \ubc30\ub108",id:"update-banner",level:2},{value:"\ud14c\ub9c8",id:"theme",level:2}],f={toc:v},w="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(w,u({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX Designer\uc758 \uba54\uc778 \ucc3d\uc740 ",(0,r.kt)("a",u({parentName:"p"},{href:"#navigation-bar"}),"\ud0d0\uc0c9 \ubaa8\uc74c"),", ",(0,r.kt)("a",u({parentName:"p"},{href:"#commands"}),"\uba85\ub839 \ubc84\ud2bc"),", ",(0,r.kt)("a",u({parentName:"p"},{href:"#notification-bar"}),"\uc54c\ub9bc \ud45c\uc2dc\uc904"),", ",(0,r.kt)("a",u({parentName:"p"},{href:"#detailed-log"}),"\uc0c1\uc138 \ub85c\uadf8"),"\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uba54\uc778 \ucc3d\uc740 '\ubdf0'\ub97c \uc911\uc2ec\uc73c\ub85c \ud558\ub098\uc758 \ud504\ub808\uc784\uc744 \ud615\uc131\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"('\ubdf0' \uc601\uc5ed\uc740 \uc544\ub798 \uc774\ubbf8\uc9c0\uc5d0\uc11c \ud750\ub9bf\ud558\uac8c \ud45c\uc2dc\ub41c \uc601\uc5ed\uc744 \ub9d0\ud569\ub2c8\ub2e4)")),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 \uba54\uc778 \ucc3d"),(0,r.kt)("h2",u({},{id:"navigation-bar"}),"\ud0d0\uc0c9 \ubaa8\uc74c"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \ud0d0\uc0c9\uc740 \ud0d0\uc0c9 \ubaa8\uc74c\uc744 \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc9c0\uba70(\uc544\ub798 \uc774\ubbf8\uc9c0 \ucc38\uc870), \uc5ec\uae30\uc11c \ub2e4\uc74c \uc911 \ud55c \uac00\uc9c0 \ubdf0\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"canvas-view"}),"Canvas")," \ube4c\ub4dc \uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"images-view"}),"Images")," \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc774\ubbf8\uc9c0\ub97c \uad00\ub9ac\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"texts-view"}),"Texts")," \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ud14d\uc2a4\ud2b8\uc640 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\ub97c \uad00\ub9ac\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"config-view"}),"Config")," \ub2e4\uc591\ud55c \ud504\ub85c\uc81d\ud2b8 \uc124\uc815\uc744 \uad6c\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uadf8 \ubc16\uc5d0\ub3c4 ",(0,r.kt)("strong",{parentName:"p"},"Files"),"\ub97c \ud074\ub9ad\ud558\uba74 \uc0c8 \ud30c\uc77c \ud0d0\uc0c9\uae30 \ucc3d\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud130\ub9ac\uac00 \uc5f4\ub824\uc11c \uc190\uc27d\uac8c \uc6d0\ud558\ub294 \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-navigation-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 \ud0d0\uc0c9 \ubaa8\uc74c"),(0,r.kt)("h2",u({},{id:"commands"}),"\uba85\ub839"),(0,r.kt)("p",null,"TouchGFX Designer\uc758 \uba85\ub839 \uc139\uc158\uc5d0\ub294 'Generate Code', 'Run Simulator', 'Run Target\u2019\uc758 \uc138 \uac00\uc9c0 \ubc84\ud2bc\uc774 \uc788\uc2b5\ub2c8\ub2e4(\uc544\ub798 \uc774\ubbf8\uc9c0 ",(0,r.kt)("em",{parentName:"p"},"(\ucc38\uc870).")," \uc774\ub4e4 \ubc84\ud2bc\uc740 \uac01\uac01 \uc5ec\ub7ec \uba85\ub839\ub4e4\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-actions-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 \uba85\ub839 \ubc84\ud2bc"),(0,r.kt)("p",null,"\uc774\ub4e4 \ubc84\ud2bc\uc73c\ub85c \uc2e4\ud589\ud560 \uba85\ub839\ub4e4\uc740 Config\uc758 ",(0,r.kt)("a",u({parentName:"p"},{href:"config-view#build"}),"Build")," \uc139\uc158\uc5d0\uc11c \ub36e\uc5b4\uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",u({},{id:"generate-code"}),"Generate Code"),(0,r.kt)("p",null,"Generate Code \uba85\ub839\uc740 \uc804\uccb4 \ucf54\ub4dc \uc0dd\uc131\uc744 \ud2b8\ub9ac\uac70\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\ub4e4\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate Assets Command"),(0,r.kt)("li",{parentName:"ul"},"Post Generate Command"),(0,r.kt)("li",{parentName:"ul"},"Post Generate Target Command")),(0,r.kt)("h3",u({},{id:"run-simulator"}),"Run Simulator"),(0,r.kt)("p",null,"Run Simulator \uba85\ub839\uc740 \uc804\uccb4 \ucf54\ub4dc \uc0dd\uc131\uc744 \ud2b8\ub9ac\uac70\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\ub4e4\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate Assets Command"),(0,r.kt)("li",{parentName:"ul"},"Post Generate Command"),(0,r.kt)("li",{parentName:"ul"},"Compile Simulator Command"),(0,r.kt)("li",{parentName:"ul"},"Run Simulator command")),(0,r.kt)("p",null,"Run Simulator \uba85\ub839\uc740 F5\ub97c \ub20c\ub7ec\uc11c \ud2b8\ub9ac\uac70\ud560 \uc218\ub3c4 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"\uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",u({},{id:"run-target"}),"Program and Run Target"),(0,r.kt)("p",null,"The Program and Run Target command triggers a complete code generation, then executes following commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate Assets Command"),(0,r.kt)("li",{parentName:"ul"},"Post Generate Command"),(0,r.kt)("li",{parentName:"ul"},"Generate Target Command"),(0,r.kt)("li",{parentName:"ul"},"Compile Target Command"),(0,r.kt)("li",{parentName:"ul"},"Flash Target Command")),(0,r.kt)("p",null,"The Program and Run Target command can also be triggered by pressing ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"\uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"Generate Code \uba85\ub839\uc740 F7\uc744 \ub20c\ub7ec\uc11c \ud2b8\ub9ac\uac70\ud560 \uc218\ub3c4 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("h4",u({},{id:"run-target-internal"}),"Program Internal Flash and Run Target"),(0,r.kt)("p",null,"If the ",(0,r.kt)("a",u({parentName:"p"},{href:"config-view#flash-target-internal-command"}),"Flash Target Internal Command")," is enabled, the 'Program and Run Target' button will change appearance:"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-target-options.png",mdxType:"Figure"}),(0,r.kt)("p",null,"This will give the option to run the target in 'Program Internal Flash mode':"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-target-options-opened.png",mdxType:"Figure"}),(0,r.kt)("p",null,"If the 'Program Internal Flash' option is selected, the 'Program and Run Target' button will now execute the command specified in ",(0,r.kt)("a",u({parentName:"p"},{href:"config-view#flash-target-internal-command"}),"Flash Target Internal Command")," which is used to optimize flash times."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-internal-flash.png",mdxType:"Figure"}),(0,r.kt)(d.Z,{mdxType:"FurtherReading"},"Read more about how to use Internal Flashing to improve flash times ",(0,r.kt)(m.Z,{to:"../working-with-touchgfx/compiling-and-flashing",mdxType:"Link"},"here"),"."),(0,r.kt)("h2",u({},{id:"notification-bar"}),"\uc54c\ub9bc \ud45c\uc2dc\uc904"),(0,r.kt)("p",null,"\uba54\uc778 \ucc3d \ud558\ub2e8\uc5d0 \uc788\ub294 \uc54c\ub9bc \ud45c\uc2dc\uc904\uc5d0\ub294 \ud604\uc7ac \uc2e4\ud589 \uc911\uc778 \uba85\ub839\uc758 \uc0c1\ud0dc\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc624\ub958\ub85c \uc778\ud574 \uba85\ub839\uc774 \uc911\ub2e8\ub418\uba74 \ud45c\uc2dc\uc904\uc758 \ud14d\uc2a4\ud2b8\uac00 \ube68\uac04\uc0c9\uc73c\ub85c \ubc14\ub00c\uace0 \uc911\ub2e8\ub41c \uba85\ub839\uacfc \ud568\uaed8 \uc624\ub958 \uc544\uc774\ucf58\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uba85\ub839\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uba74 \uba3c\uc800 \ub179\uc0c9\uc73c\ub85c \ubc14\ub00c\uc5c8\ub2e4\uac00 \uc54c\ub9bc \ud45c\uc2dc\uc904\uc5d0\uc11c \uc81c\uac70\ub429\ub2c8\ub2e4. \ubc18\uba74 \uc911\ub2e8\ub41c \uba85\ub839\uc740 \ub2e4\ub978 \uba85\ub839\uc774 \uc2dc\uc791\ub420 \ub54c\uae4c\uc9c0 \uacc4\uc18d \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-success.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\uc5d0\uc11c \uba85\ub839 \uc131\uacf5\uc744 \uc54c\ub9ac\ub294 \uc54c\ub9bc \ud45c\uc2dc\uc904"),(0,r.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-fail.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\uc5d0\uc11c \uba85\ub839 \uc911\ub2e8\uc744 \uc54c\ub9ac\ub294 \uc54c\ub9bc \ud45c\uc2dc\uc904"),(0,r.kt)("h2",u({},{id:"detailed-log"}),"\uc0c1\uc138 \ub85c\uadf8"),(0,r.kt)("p",null,"\uc54c\ub9bc \ud45c\uc2dc\uc904\uc5d0\uc11c \uc784\uc758\uc758 \uc601\uc5ed\uc744 \ud074\ub9ad\ud558\uba74 \uc0c1\uc138 \ub85c\uadf8 \ucc3d\uc774 \uc5f4\ub9ac\uba74\uc11c Designer\uc5d0\uc11c \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc2e4\ud589\ud55c \uba85\ub839\uc5d0 \ub300\ud55c \uc804\uccb4 \ub85c\uadf8\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uba85\ub839\uc758 \ucd9c\ub825\uc774 \uc774 \ucc3d\uc73c\ub85c \uc2a4\ud2b8\ub9ac\ubc0d\ub418\uba70",(0,r.kt)("em",{parentName:"p"},"(\uc544\ub798 GIF \ucc38\uc870)"),", \uc0c1\uc138 \ub85c\uadf8 \ucc3d\uc758 \uc0c1\ub2e8 \uc624\ub978\ucabd \ubaa8\uc11c\ub9ac\uc5d0 \uc788\ub294 \ub3c4\ud0b9 \ud574\uc81c/\ub3c4\ud0b9 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uba74 \uc774 \ucc3d\uc744 \uba54\uc778 \ucc3d\uc5d0\uc11c \ub3c4\ud0b9 \ud574\uc81c\ud558\uac70\ub098 \ub3c4\ud0b9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8 \ubc16\uc5d0 ALT + L\uc744 \ub20c\ub7ec\uc11c \uc0c1\uc138 \ub85c\uadf8 \ucc3d\uc744 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + L")),(0,r.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/designer-main-window-log.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\uc758 \uc0c1\uc138 \ub85c\uadf8"),(0,r.kt)("h2",u({},{id:"update-banner"}),"\uc5c5\ub370\uc774\ud2b8 \ubc30\ub108"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-update-banner.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\uc774 \ubc30\ub108\ub294 \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc758 TouchGFX \uac19\uc740 \uc911\uc694 \uc5c5\ub370\uc774\ud2b8\ub97c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc54c\ub9ac\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc744 \ud574\uc81c\ud558\ub824\uba74 \ubc30\ub108 \uc624\ub978\ucabd\uc5d0 \uc788\ub294 X \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624. \uadf8\ub7ec\uba74 \ubc30\ub108\uc5d0 \ud574\uc81c\ub41c \uc5c5\ub370\uc774\ud2b8\uac00 \ub2e4\uc2dc \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",u({},{id:"theme"}),"\ud14c\ub9c8"),(0,r.kt)("p",null,"TouchGFX Designer\ub294 \ub77c\uc774\ud2b8 \ud14c\ub9c8\uc640 \ub2e4\ud06c \ud14c\ub9c8\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4(\uc544\ub798 \uc774\ubbf8\uc9c0 \ucc38\uc870). ",(0,r.kt)("a",u({parentName:"p"},{href:"file-menu#project-file-menu-file"}),"File Menu"),"\uc5d0\uc11c \uc6d0\ud558\ub294 \ub300\ub85c \ud14c\ub9c8\ub97c \uc804\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{points:[[40,25]],imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-light.png",mdxType:"FigureWithPoints"},"TouchGFX Designer \ub77c\uc774\ud2b8 \ud14c\ub9c8"),(0,r.kt)(l.Z,{points:[[40,25]],imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-dark.png",mdxType:"FigureWithPoints"},"TouchGFX Designer \ub2e4\ud06c \ud14c\ub9c8"))}k.isMDXComponent=!0}}]);