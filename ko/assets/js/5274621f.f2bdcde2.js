"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[73048],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,h=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61235:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=a},12822:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(32118);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},89588:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},71678:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(59496),a=n(89588);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const p=i},79583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>c,metadata:()=>s,toc:()=>d});n(59496);var r=n(49613),a=n(12822),o=n(71678),i=n(61235);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"scenarios-create-at",title:"TouchGFX Board Setup \uc0dd\uc131"},m=void 0,s={unversionedId:"development/scenarios/scenarios-create-at",id:"development/scenarios/scenarios-create-at",title:"TouchGFX Board Setup \uc0dd\uc131",description:'TouchGFX Board Setups(TBS)\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ud50c\ub7ab\ud3fc\uc744 \uc815\uc758\ud558\ub294 .tpa \ud30c\uc77c\uc785\ub2c8\ub2e4. \uc774 \uc811\uadfc \ubc29\uc2dd\uc740 \uc2e4\ud589 \uae30\ubc18\uc774 \ub418\ub294 UI \ucf54\ub4dc\uc640 \ubcc4\ub3c4\ub85c \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 TBS\ub97c \ubc30\ud3ec\ud558\ub824\ub294 \uac1c\ubc1c\uc790\ub97c \uc704\ud55c \uac83\uc785\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 \uae30\ubcf8 \uc81c\uacf5 \ub3c4\uad6c\uc778 tgfx.exe\ub97c \uc0ac\uc6a9\ud558\uc5ec \uae30\uc874\uc758 TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc7ac\ubc30\ud3ec\uac00 \uac00\ub2a5\ud55c TBS\ub85c \ud328\ud0a4\uc9d5\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0 \ub098\uc628 \uc608\uc81c\ub4e4\uc740 "MyApplication"\uc774\ub77c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-create-at.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-create-at",permalink:"/4.23/ko/docs/development/scenarios/scenarios-create-at",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-create-at",title:"TouchGFX Board Setup \uc0dd\uc131"},sidebar:"docs",previous:{title:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud53d\uc140 \ud615\uc2dd \ubcc0\uacbd",permalink:"/4.23/ko/docs/development/scenarios/scenarios-change-pixelformat-bpp"},next:{title:"\ud2b8\ub9ac\uac70 \uc5ed\ud560\uc744 \ud558\ub294 \uc678\ubd80 \uc774\ubca4\ud2b8",permalink:"/4.23/ko/docs/development/scenarios/example-gpio"}},u={},d=[{value:"TouchGFX Board Setup \uc124\uba85",id:"describe-application-template",level:2},{value:"TouchGFX Board Setup \uc0dd\uc131",id:"create-touchgfx-board-setup",level:2},{value:"\ud14c\uc2a4\ud2b8 \ubc0f \ud655\uc778",id:"test-verify",level:2},{value:"\ucd5c\uc885 \ub178\ud2b8",id:"final-notes",level:2},{value:"\uc77c\ubc18 \ud301",id:"general-tips",level:3},{value:"\ubc84\uc804 \uad00\ub9ac",id:"version-control",level:3}],h={toc:d},g="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,p({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TouchGFX Board Setups"),"(TBS)\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 ",(0,r.kt)("em",{parentName:"p"},"\ud50c\ub7ab\ud3fc"),"\uc744 \uc815\uc758\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \ud30c\uc77c\uc785\ub2c8\ub2e4. \uc774 \uc811\uadfc \ubc29\uc2dd\uc740 \uc2e4\ud589 \uae30\ubc18\uc774 \ub418\ub294 ",(0,r.kt)("em",{parentName:"p"},"UI")," \ucf54\ub4dc\uc640 \ubcc4\ub3c4\ub85c \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 TBS\ub97c \ubc30\ud3ec\ud558\ub824\ub294 \uac1c\ubc1c\uc790\ub97c \uc704\ud55c \uac83\uc785\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 \uae30\ubcf8 \uc81c\uacf5 \ub3c4\uad6c\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uae30\uc874\uc758 TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc7ac\ubc30\ud3ec\uac00 \uac00\ub2a5\ud55c TBS\ub85c \ud328\ud0a4\uc9d5\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0 \ub098\uc628 \uc608\uc81c\ub4e4\uc740 ",(0,r.kt)("em",{parentName:"p"},'"MyApplication"'),"\uc774\ub77c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX \ud504\ub85c\uc81d\ud2b8\uac00 \uc644\uc804\ud788 \uae30\ub2a5\ud558\uace0 \uc788\ub294 \uc0c1\ud0dc\uc5d0\uc11c TBS\ub97c \uc0dd\uc131\ud558\ub824\uba74 \ub2e4\uc74c \ub2e8\uacc4\ub97c \uac70\uccd0\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Board Setup \uc124\uba85"),"  ",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe"),"\ub97c \ud638\ucd9c\ud558\uace0 json \ud30c\uc77c(.touchgfx\uc5d0\uc11c \uc0c1\uc18d)\uc744 \ud3b8\uc9d1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Board Setup \uc0dd\uc131")," ",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe"),"\ub97c \ud638\ucd9c\ud558\uc5ec \ucd5c\uc885 ",(0,r.kt)("inlineCode",{parentName:"li"},".tpa")," \uc0dd\uc131"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud14c\uc2a4\ud2b8 \ubc0f \ud655\uc778")," TouchGFX Designer\ub85c \uac00\uc838\uc640\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131 \ubc0f \ud655\uc778")),(0,r.kt)("h2",p({},{id:"describe-application-template"}),"TouchGFX Board Setup \uc124\uba85"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe")," \ub3c4\uad6c\ub294 TBS\uc758 \ub0b4\ubd80\ub97c \uc124\uba85\ud558\ub294 \uad6c\uc131 \ud30c\uc77c(.json)\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \uc815\ubcf4\ub294 TouchGFX Designer\uac00 \uc77d\uc5b4\uc640\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ud45c\uc2dc\ub429\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"TouchGFX Environment")," \ucf58\uc194\uc744 \uc5f4\uace0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 ",(0,r.kt)("em",{parentName:"p"},"\uc0c1\uc704")," \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication\n")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.webp",width:"550px",mdxType:"Figure"},".tpa\ub97c \uc704\ud55c \ud30c\uc77c \uc900\ube44"),(0,r.kt)("p",null,"\uba85\ub839\uc774 \uc2e4\ud589\ub41c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.webp",width:"240px",mdxType:"Figure"},"\uc0dd\uc131\ub41c \ud30c\uc77c\uc758 \ubaa9\ub85d"),(0,r.kt)("p",null,"\ucd5c\uc885 ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uae30\uc5d0 \uc55e\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApplication.json"),"\uc744 \ud3b8\uc9d1\ud558\uc5ec TBS\uac00 TouchGFX Designer\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ud45c\uc2dc\ub418\ub294 \ubc29\uc2dd\uc744 \uc81c\uc5b4\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \ub2e4\uc74c \uc139\uc158\uc744 \ud3b8\uc9d1\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Author")," ",(0,r.kt)("em",{parentName:"li"},"Author")," \uc139\uc158\uc758 \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc800\uc790 \uc774\ub984, \uc5f0\ub77d\ucc98 \uc774\uba54\uc77c \ubc0f URL\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data")," ",(0,r.kt)("em",{parentName:"li"},"Data")," \uc139\uc158\uc758 \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec TBS \ubc84\uc804, \uc774\ubbf8\uc9c0, \ubcf4\ub4dc \uc774\ub984, \ubca4\ub354, \uc124\uba85 \ubc0f \ucd94\uac00 \uc815\ubcf4\uc5d0 \ub300\ud55c \ub9c1\ud06c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"MyApplication.json"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-json"}),'   ...\n    "Author": [\n      {\n        "Name": "Chad Brody",\n        "Contact": "chad.brody@mycompany.com",\n        "URL": "http://mycompany.com/"\n      }\n    ],\n  ...\n  "Data": {\n    "Version": {\n      "Major": 1,\n      "Minor": 0,\n      "Build": 0\n    },\n    "Name": "MyApplication",\n    "HumanFriendlyName": "MyApplication",\n    "BoardName": "Custom STM32 Board",\n    "Type": "TGAT",\n    "Vendor": "MyCompany",\n    "Description": "This is a working project on which to base your UI on top of.",\n    "DocumentationLink": "",\n    "Category": "",\n    "Images": [\n      "http://mysite.com/MyCustomBoard-front.png",\n      "http://mysite.com/MyCustomBoard-back.png"\n    ],\n    ...\n  }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"'Type' \uc18d\uc131\uc744 ",(0,r.kt)("b",null,"TGAT"),"\ub85c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uc9c0 \uc54a\uc73c\uba74 TBS\uac00 TouchGFX Designer\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"),(0,r.kt)(o.Z,{mdxType:"Tip"},"UI \ud15c\ud50c\ub9bf \ub610\ub294 Board Specific Demo\ub97c \uc0dd\uc131\ud560 \ub54c 'Type' \uc18d\uc131\uc740 \uac01\uac01 ",(0,r.kt)("b",null,"TGUI"),"\uc640 ",(0,r.kt)("b",null,"TGAPP"),"\uc785\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Tip"},"TouchGFX Designer\ub294 TBS\uc5d0 \ub300\ud55c \ud655\uc7a5 \uc815\ubcf4 \uce74\ub4dc\ub97c \ud45c\uc2dc\ud560 \ub54c \uc774 \ubaa9\ub85d\uc5d0\uc11c \ucd5c\ub300 \uc138 \uac1c\uc758 \uc774\ubbf8\uc9c0\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uc774\ubbf8\uc9c0 \ucc38\uc870\ub294 \ubc18\ub4dc\uc2dc URL\uc774\uc5b4\uc57c \ud568). \uc774\ubbf8\uc9c0\uc758 \ucd5c\uc801 \ud574\uc0c1\ub3c4\ub294 400 x 280 \ud53d\uc140\uc785\ub2c8\ub2e4. "),(0,r.kt)("h2",p({},{id:"create-touchgfx-board-setup"}),"TouchGFX Board Setup \uc0dd\uc131"),(0,r.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \ucd5c\uc885 '.tpa' \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uace0 TouchGFX Board Setup\uc744 \uc644\ub8cc\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication\n")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.webp",width:"570px",mdxType:"Figure"},"TouchGFX Board Setup \uc0dd\uc131"),(0,r.kt)("h2",p({},{id:"test-verify"}),"\ud14c\uc2a4\ud2b8 \ubc0f \ud655\uc778"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \ud30c\uc77c\uc774 TouchGFX Designer\uc5d0\uc11c TBS\ub85c \ud45c\uc2dc\ub418\uace0, \uc0c8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \ub2e4\uc74c \ub2e8\uacc4\ub97c \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".tpa")," \ud30c\uc77c\uc758 \uc774\ub984\uc744 \uc694\uad6c \uc0ac\ud56d\uc73c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".tpa")," \ud30c\uc77c\uc744 ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\TouchGFX\\4.13.0\\app\\packages"),"\ub85c \ubcf5\uc0ac\ud558\uac70\ub098 \uc62e\uae41\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ub85c\uceec \ud3f4\ub354\uc5d0\uc11c TBS\ub97c TouchGFX Designer\ub85c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.webp",width:"550",mdxType:"Figure"},"\ub85c\uceec \ud3f4\ub354\uc5d0 TBS \uc124\uce58"),(0,r.kt)("ol",p({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"TouchGFX Designer\ub97c \uc5f4\uace0 ",(0,r.kt)("em",{parentName:"li"},"By Partners")," \ud0ed\uc5d0\uc11c TBS\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info-4-17.webp",width:"550",mdxType:"Figure"},"TBS \uc815\ubcf4"),(0,r.kt)("h2",p({},{id:"final-notes"}),"\ucd5c\uc885 \ub178\ud2b8"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc139\uc158\uc5d0\ub294 TBS\uc6a9 \ucf54\ub4dc\ub97c \uac1c\ubc1c/\ubc30\ud3ec\ud560 \ub54c \uace0\ub824\ud574\uc57c \ud560 \uc0ac\ud56d\uc5d0 \uad00\ud55c \ud301\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",p({},{id:"general-tips"}),"\uc77c\ubc18 \ud301"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\ub97c \ubc30\ud3ec\ud558\uae30 \uc804\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uacf5\uae09\ub41c \ubaa8\ub4e0 IDE \ud504\ub85c\uc81d\ud2b8\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"build"),"- \ubc0f ",(0,r.kt)("em",{parentName:"li"},"generated")," \ud3f4\ub354\ub97c \uc0ad\uc81c\ud558\uc5ec TBS\uc758 \ud06c\uae30\ub97c \uc904\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"TouchGFX \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c ",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx"),"\uc5d0 \uc815\uc758\ub41c \ub9de\ucda4\ud615 \uba85\ub839(",(0,r.kt)("em",{parentName:"li"},"PostGenerate"),"- \ub4f1)\uc774 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"TBS\uac00 TouchGFX Designer\uc5d0\uc11c \uc77d\uae30\uac00 \uac00\ub2a5\ud558\uace0 \uc0c8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"TBS \ubc84\uc804 \uac04\uc5d0 \uc5c5\uadf8\ub808\uc774\ub4dc \uc808\ucc28\ub97c \uc989\uac01\uc801\uc73c\ub85c \uc9c0\uc815\ud558\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,r.kt)(o.Z,{mdxType:"Tip"},"TouchGFX \ud504\ub85c\uc81d\ud2b8 \ub610\ub294 `.json` \ud30c\uc77c\uc758 \ub0b4\uc6a9\uc744 \uc218\uc815\ud55c \ud6c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud15c\ud50c\ub9bf\uc744 \ub2e4\uc2dc \ud328\ud0a4\uc9d5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\ub97c \ubc30\ud3ec\ud55c \ud6c4\uc5d0\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \ud30c\uc77c\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\TouchGFX\\4.13.0\\app\\packages"),"\uc5d0 \ubcf5\uc0ac\ud558\ub3c4\ub85d \uc9c0\uc2dc\ud558\uace0, TouchGFX Desinger\uac00 \uc5f4\ub9ac\uba74 \ub2e4\uc2dc \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",p({},{id:"version-control"}),"\ubc84\uc804 \uad00\ub9ac"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uac1c\ubc1c\uc790\ub294 \ub3d9\uc77c\ud55c \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \uc804\uccb4 \uac1c\ubc1c \ud504\ub85c\uc81d\ud2b8(TouchGFX Board Bringup, TouchGFX AL, TouchGFX UI)\ub97c \ubcf4\uad00\ud558\uae30 \ub54c\ubb38\uc5d0 \ubc30\ud3ec \uac00\ub2a5\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \ud30c\uc77c\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud1b5\ud569 \ud50c\ub7ab\ud3fc \ucf54\ub4dc\ub294 \ud300 \uad6c\uc131\uc6d0\uc774 \uc0c8\ub85c\uc6b4 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \ud14c\uc2a4\ud2b8 \ubc0f \ud655\uc778\uc744 \uc218\ud589\ud558\ub294 \ub370 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \ud30c\uc77c\uc744 \ubc30\ud3ec\ud558\uac70\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"repo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"git submodules"),"\uc640 \uac19\uc740 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud574 \ucf54\ub4dc\ubca0\uc774\uc2a4\ub97c \ubaa8\ub4c8\ud654\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 TBS \ubd80\ud488\uc758 \ubc84\uc804\uc774 \uc55e\uc11c \uc124\uba85\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," \ub514\uc2a4\ud06c\ub9bd\ud130\uc5d0 \uc9c0\uc815\ub41c \ubc84\uc804\uc744 \ub530\ub974\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ubaa8\ub4c8\ud654\ub41c \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, ",(0,r.kt)("em",{parentName:"p"},"\ud50c\ub7ab\ud3fc")," \ucf54\ub4dc\ub294 \ubc30\ud3ec \uac00\ub2a5\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub294 \uac83 \uc678\uc5d0 \uc8fc\uc694 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\uc5d0\uc11c \ubaa8\ub4c8\ub85c\ub3c4 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-json"}),'  "Data": {\n    "Version": {\n      "Major": 3,\n      "Minor": 0,\n      "Build": 0\n    },\n')),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"$ git tag\nv1.1.0\nv2.0.0\nv2.1.0\nv3.0.0\n")))}k.isMDXComponent=!0}}]);