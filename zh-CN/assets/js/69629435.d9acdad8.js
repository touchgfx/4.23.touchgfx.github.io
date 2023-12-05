"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[82568],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61235:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const a=i},12822:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496),i=t(32118);const a=function(e){const n=e.noShadow||!1,t=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children))}},89588:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=i},40465:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const a=i},39331:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(59496),i=t(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const l=o},71678:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(59496),i=t(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}const l=o},75418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>g});t(59496);var r=t(49613),i=t(12822),a=t(39331),o=t(71678),l=t(61235),c=t(40465);function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"code-structure",title:"\u4ee3\u7801\u7ed3\u6784"},d=void 0,m={unversionedId:"development/ui-development/software-architecture/code-structure",id:"development/ui-development/software-architecture/code-structure",title:"\u4ee3\u7801\u7ed3\u6784",description:"\u672c\u8282\u4ecb\u7ecd\u4e86TouchGFX\u9879\u76ee\u7684\u7ed3\u6784\u2014\u2014\u4eceTouchGFX Designer\u751f\u6210\u7684\u4ee3\u7801\u5230\u7528\u6237\u7f16\u5199\u7684\u6269\u5c55\u4ee3\u7801\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/code-structure.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/code-structure",permalink:"/4.23/zh-CN/docs/development/ui-development/software-architecture/code-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"code-structure",title:"\u4ee3\u7801\u7ed3\u6784"},sidebar:"docs",previous:{title:"\u5c4f\u5e55\u6982\u5ff5",permalink:"/4.23/zh-CN/docs/development/ui-development/software-architecture/screen-definition-and-mvp"},next:{title:"Working with TouchGFX",permalink:"/4.23/zh-CN/docs/category/working-with-touchgfx"}},h={},g=[{value:"\u751f\u6210\u7684\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801",id:"generated-code-vs-user-code",level:2},{value:"TouchGFX Designer\u751f\u6210\u7684\u6587\u4ef6",id:"files-generated-by-touchgfx-designer",level:2},{value:"\u793a\u4f8b",id:"example",level:2},{value:"TouchGFX Designer\u89c6\u56fe",id:"touchgfx-designer-view",level:3},{value:"\u5c42",id:"layers",level:3},{value:"\u4ee3\u7801",id:"code",level:3}],k={toc:g},v="wrapper";function f(e){var{components:n}=e,t=u(e,["components"]);return(0,r.kt)(v,p({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86TouchGFX\u9879\u76ee\u7684\u7ed3\u6784\u2014\u2014\u4eceTouchGFX Designer\u751f\u6210\u7684\u4ee3\u7801\u5230\u7528\u6237\u7f16\u5199\u7684\u6269\u5c55\u4ee3\u7801\u3002"),(0,r.kt)("h2",p({},{id:"generated-code-vs-user-code"}),"\u751f\u6210\u7684\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801"),(0,r.kt)("p",null,"TouchGFX Designer\u751f\u6210\u7684\u4ee3\u7801\u5c06\u4e0e\u7528\u6237\u7f16\u5199\u7684\u4ee3\u7801\u5b8c\u5168\u5206\u79bb\u3002 \u4e8b\u5b9e\u4e0a\uff0c\u751f\u6210\u7684\u4ee3\u7801\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"generated/gui_generated"),"\u6587\u4ef6\u5939\u4e2d\uff0c\u800c\u624b\u5199\u4ee3\u7801\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"gui"),"\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gui_generated"),"\u4ee3\u7801\u5145\u5f53\u7528\u6237\u4ee3\u7801\u7c7b\u7684\u57fa\u7c7b\u3002 \u57fa\u7c7b\u5305\u542b\u5728TouchGFX Designer\u4e2d\u914d\u7f6e\u7684\u6240\u6709\u8bbe\u7f6e\u4ee3\u7801\u3002 \u4e0b\u9762\u7684\u7c7b\u793a\u610f\u56fe\u663e\u793a\u4e86\u7c7b\u7684\u5173\u7cfb\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels.webp",mdxType:"Figure"},"\u5f15\u64ce\u7c7b\u3001\u751f\u6210\u7c7b\u548c\u7528\u6237\u7c7b\u7684\u7c7b\u5c42\u6b21\u7ed3\u6784"),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0cTouchGFX Designer\u5e94\u7528\u5305\u542b3\u4e2a\u4e0d\u540c\u4ee3\u7801\u5c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f15\u64ce"),"\uff1a\u8fd9\u4e9b\u7c7b\u662fTouchGFX\u63d0\u4f9b\u7684\u6807\u51c6\u7c7b\u3002 \u5b83\u4eec\u5145\u5f53\u751f\u6210\u7c7b\u7684\u57fa\u7c7b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u751f\u6210"),"\uff1a\u5f53TouchGFX Designer\u751f\u6210\u4ee3\u7801\u65f6\uff0c\u5c06\u751f\u6210\u8fd9\u4e9b\u7c7b\u548c\u76f8\u5e94\u6587\u4ef6\u3002 \u56e0\u6b64\uff0c\u4e0d\u5e94\u624b\u52a8\u7f16\u8f91\u8fd9\u4e9b\u7c7b\u548c\u6587\u4ef6\uff0c\u56e0\u4e3a\u4efb\u4f55\u624b\u52a8\u4fee\u6539\u90fd\u4f1a\u5728\u4e0b\u4e00\u6b21\u8fd0\u884c\u4ee3\u7801\u751f\u6210\u5668\u65f6\u88ab\u91cd\u5199\u3002 \u8fd9\u4e9b\u7c7b\u662f\u7528\u6237\u7c7b\u7684\u57fa\u7c7b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7528\u6237"),"\uff1a\u8fd9\u4e9b\u7c7b\u9884\u5b9a\u4f9b\u624b\u5199\u4ee3\u7801\u4f7f\u7528\u3002 \u7528\u6237\u53ef\u4ee5\u81ea\u7531\u5730\u5c06\u4efb\u4f55\u4ee3\u7801\u653e\u5165\u8be5\u5c42\u3002 \u5982\u679c\u6ca1\u6709\u7528\u6237\u7c7b\uff0c\u5c06\u751f\u6210\u7528\u6237\u7c7b\uff0c\u5e76\u4e14\u6c38\u8fdc\u4e0d\u4f1a\u88abTouchGFX Designer\u4fee\u6539\u3002 \u5b83\u4eec",(0,r.kt)("em",{parentName:"li"},"\u5c5e\u4e8e\u7528\u6237"),"\u3002")),(0,r.kt)(a.Z,{mdxType:"Note"},"TouchGFX Designer\u751f\u6210\u7684\u5e94\u7528\u7684\u67b6\u6784\u662f\u5f00\u653e\u5f0f\u7684\uff0c\u5728\u67d0\u79cd\u610f\u4e49\u4e0a\uff0c\u5bf9\u60a8\u7684\u521b\u5efa\u5185\u5bb9\u5e94\u5f53\u6ca1\u6709\u4efb\u4f55\u9650\u5236\u3002 \u5982\u679cTouchGFX Designer\u4e0d\u652f\u6301\u67d0\u4e9b\u5bf9\u8c61\uff08\u5982\u5c0f\u5de5\u5177\u3001\u52a8\u753b\u6216\u6548\u679c\uff09\uff0c\u60a8\u53ef\u4ee5\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230\u7528\u6237\u7c7b\u3002 TouchGFX Designer\u751f\u6210\u7684\u4ee3\u7801\u5728\u8bbe\u8ba1\u4e0a\u4e0d\u4f1a\u5bf9\u5236\u4f5cTouchGFX\u5e94\u7528\u7684\u65b9\u5f0f\u52a0\u4ee5\u9650\u5236\u3002"),(0,r.kt)("h2",p({},{id:"files-generated-by-touchgfx-designer"}),"TouchGFX Designer\u751f\u6210\u7684\u6587\u4ef6"),(0,r.kt)("p",null,"\u6839\u636e\u89c4\u5219\uff0cTouchGFX Designer\u5c06",(0,r.kt)("em",{parentName:"p"},"\u53ea"),"\u5728TouchGFX\u9879\u76ee\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"generated"),"\u6587\u4ef6\u5939\u4e2d\u91cd\u65b0\u751f\u6210\u6587\u4ef6\uff0c\u56e0\u6b64\u4e0d\u5f97\u5728\u8be5\u6587\u4ef6\u8fdb\u884c\u624b\u52a8\u7f16\u8f91\uff0c\u56e0\u4e3a\u4f1a\u88ab\u8986\u76d6\u3002 \u7136\u800c\uff0cTouchGFX\u8bbe\u8ba1\u5668\u4e5f\u53ef\u4ee5\u751f\u6210\u7f16\u8bd1\u6240\u9700\u7684\u7f3a\u5931\u6587\u4ef6\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"application.config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"simulator/main.cpp"),", \u3001\u76ae\u80a4\u56fe\u7247\uff08\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images/__designer"),"\u4e2d\uff09\u3001\u4ee5\u53ca\u793a\u4f8b\u89c6\u9891\uff08\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos/__designer"),"\u4e2d\uff09\u3002 \u4e8b\u5b9e\u4e0a\uff0cTouchGFX Designer\u53ea\u9700\u8981\u4e0b\u5217\u6587\u4ef6\u5c31\u80fd\u751f\u6210\u3001\u7f16\u8bd1\u548c\u8fd0\u884c\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u9879\u76ee\u7684",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx"),"\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"gui"),"\u6587\u4ef6\u5939\u7684\u7528\u6237\u4ee3\u7801\uff08\u5982\u679c\u6709\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"assets/images"),"\u6587\u4ef6\u5939\u7684\u7528\u6237\u56fe\u50cf\uff08\u5982\u679c\u6709\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/texts/texts.xml"),"\u6587\u4ef6\u4e2d\u7684\u6587\u672c\uff08\u5982\u679c\u6709\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"assets/fonts"),"\u6587\u4ef6\u5939\u7684\u5b57\u4f53\uff08\u5982\u679c\u6709\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/videos"),"\u6587\u4ef6\u5939\u4e2d\u7684\u89c6\u9891\uff08\u5982\u679c\u6709\uff09")),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5728\u4f7f\u7528\u7248\u672c\u63a7\u5236\uff08\u5982Git\uff09\u65f6\uff0c\u8fd9\u610f\u5473\u7740\u5b9e\u9645\u4e0a\u53ea\u9700\u8981\u5c06\u4e0a\u9762\u5217\u51fa\u7684\u6587\u4ef6\u63d0\u4ea4\u5230\u5b58\u50a8\u5e93\u3002 \u5176\u4f59\u7684\u7531TouchGFX Designer\u81ea\u5df1\u751f\u6210\u3002"),(0,r.kt)("h2",p({},{id:"example"}),"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u540c\u65f6\u62e5\u6709\u751f\u6210\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801\u7684\u5e94\u7528\u7684\u7b80\u5355\u793a\u4f8b\u3002 \u8be5\u793a\u4f8b\u5e94\u80fd\u66f4\u8be6\u7ec6\u5730\u8bf4\u660e\u4ee5\u4e0a\u60c5\u51b5\u3002"),(0,r.kt)("h3",p({},{id:"touchgfx-designer-view"}),"TouchGFX Designer\u89c6\u56fe"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u53ea\u6709\u4e00\u4e2a\u5c4f\u5e55\u3002 \u5c4f\u5e55",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreen"),"\u5305\u542b\u4e00\u4e2a",(0,r.kt)("a",p({parentName:"p"},{href:"../ui-components/shapes/box"}),"\u65b9\u6846"),(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"\u548c\u4e00\u4e2a",(0,r.kt)("a",p({parentName:"p"},{href:"../ui-components/buttons/button"}),"\u6309\u94ae"),(0,r.kt)("inlineCode",{parentName:"p"},"button1"),"\u3002 \u6211\u4eec\u8bbe\u7f6e\u4e86\u5728\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"button1"),"\u65f6\u8c03\u7528\u865a\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor()"),"\u7684\u4ea4\u4e92\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/designer-application-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u5e94\u7528"),(0,r.kt)("p",null,"\u5f53\u6309\u4e0b\u6309\u94ae\u65f6\uff0c\u6211\u4eec\u60f3\u8981\u8ba9\u80cc\u666f\u6846\u7684\u989c\u8272\u53d8\u4e3a\u65b0\u7684\u968f\u673a\u8272\u3002 \u4e3a\u4e86\u6f14\u793a\u5982\u4f55\u7f16\u5199\u60a8\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u4ee3\u7801\uff0c\u6211\u4eec\u5c06\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u5b9e\u73b0\u6b64\u884c\u4e3a\u3002"),(0,r.kt)("h3",p({},{id:"layers"}),"\u5c42"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u8be5\u793a\u4f8b\u4e2d\u6d89\u53ca\u7684\u4e0d\u540c\u7c7b\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.webp",mdxType:"Figure"},"\u7c7b\u7684\u793a\u4f8b"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),"\u4f4d\u4e8e\u751f\u6210\u7a7a\u95f4\uff0c\u8fd9\u8868\u660e\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728TouchGFX Designer\u4e2d\u6267\u884c\u66f4\u6539\u65f6\uff0c\u4f1a\u91cd\u65b0\u751f\u6210\u8fd9\u4e9b\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u4e0d\u5e94\u624b\u52a8\u7f16\u8f91\u8fd9\u4e9b\u7c7b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenView"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenPresenter"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplication"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeap"),"\u662f\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u521b\u5efa\u7684\uff0c\u8fd9\u8868\u660e\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728TouchGFX Designer\u4e2d\u6267\u884c\u66f4\u6539\u65f6\uff0c\u4e0d\u4f1a\u91cd\u65b0\u751f\u6210\u8fd9\u4e9b\u7c7b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u81ea\u7531\u5730\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4ee3\u7801"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"box1"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"button1"),"\u7684\u6240\u6709\u8bbe\u7f6e\u90fd\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"\u4e2d\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5c4f\u5e55\u4e4b\u95f4\u8fc7\u6e21\u7684\u6240\u6709\u51fd\u6570\u90fd\u4f4d\u4e8e\u751f\u6210\u7684\u5e94\u7528\u57fa\u7c7b",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u786e\u4fdd\u5206\u914d\u4e86\u9002\u91cf\u5b58\u50a8\u7a7a\u95f4\u7684\u6240\u6709\u8bb0\u5e10\u5747\u4f4d\u4e8e\u751f\u6210\u7684\u5806\u57fa\u7c7b",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),"\u4e2d\u3002")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u81ea\u7531\u5730\u7f16\u8f91\u7528\u6237\u4ee3\u7801\u7c7b\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u5c0f\u5de5\u5177\u3002 \u76ee\u524d\uff0c\u6211\u4eec\u53ea\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u51fd\u6570\u6765\u5b9e\u9645\u66f4\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"\u7684\u989c\u8272\u3002"),(0,r.kt)("h3",p({},{id:"code"}),"\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u89c6\u56fe\u57fa\u7840\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u751f\u6210\u7684\u65b9\u6846\u548c\u6309\u94ae\u8bbe\u7f6e\u3002 \u6211\u4eec\u8fd8\u770b\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"buttonCallbackHandler"),"\u4e2d\u865a\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u7684\u8bbe\u7f6e\u548c\u8c03\u7528\uff0c\u4f46\u6b64\u523b\u8be5\u51fd\u6570\u8fd8\u6ca1\u6709\u4efb\u4f55\u64cd\u4f5c\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{27-37}","{27-37}":!0}),'/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <touchgfx/Color.hpp>\n#include "BitmapDatabase.hpp"\n\nMyScreenViewBase::MyScreenViewBase() :\n    buttonCallback(this, &MyScreenViewBase::buttonCallbackHandler)\n{\n    box1.setPosition(0, 0, 800, 480);\n    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    button1.setXY(155, 106);\n    button1.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n    button1.setAction(buttonCallback);\n\n    add(box1);\n    add(button1);\n}\n\nvoid MyScreenViewBase::setupScreen()\n{\n\n}\n\nvoid MyScreenViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &button1)\n    {\n        //Interaction1\n        //When button1 clicked call virtual function\n        //Call setRandomColor\n        setRandomColor();\n    }\n}\n')),(0,r.kt)("p",null,"\u5728\u89c6\u56fe\u57fa\u7c7b\u7684\u5934\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u770b\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u7684\u58f0\u660e\u548c\u91cd\u5199\u5e76\u5b9e\u73b0\u7528\u6237\u4ee3\u7801\u4e2d\u51fd\u6570\u7684\u6307\u4ee4\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#ifndef MYSCREENVIEWBASE_HPP\n#define MYSCREENVIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n#include <touchgfx/widgets/Button.hpp>\n\nclass MyScreenViewBase : public touchgfx::View<MyScreenPresenter>\n{\npublic:\n    MyScreenViewBase();\n    virtual ~MyScreenViewBase() {}\n    virtual void setupScreen();\n\n    /*\n     * Virtual Action Handlers\n     */\n    virtual void setRandomColor()\n    {\n        // Override and implement this function in MyScreen\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box box1;\n    touchgfx::Button button1;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<MyScreenViewBase, const touchgfx::AbstractButton&> buttonCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void buttonCallbackHandler(const touchgfx::AbstractButton& src);\n\n};\n\n#endif // MYSCREENVIEWBASE_HPP\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u8fdb\u884c\u5177\u4f53\u64cd\u4f5c\u3002 \u5bfc\u822a\u5230\u7528\u6237\u4ee3\u7801\u5934\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView.hpp"),"\u5e76\u91cd\u5199\u51fd\u6570\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{14}","{14}":!0}),"#ifndef MYSCREENVIEW_HPP\n#define MYSCREENVIEW_HPP\n\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n\nclass MyScreenView : public MyScreenViewBase\n{\npublic:\n    MyScreenView();\n    virtual ~MyScreenView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void setRandomColor();\nprotected:\n};\n\n#endif // MYSCREENVIEW_HPP\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView"),"\u7684cpp\u6587\u4ef6\u4e2d\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u7684\u5b9e\u9645\u884c\u4e3a\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/gui/src/my_screen/MyScreenView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{19-23}","{19-23}":!0}),"#include <gui/myscreen_screen/MyScreenView.hpp>\n#include <touchgfx/Color.hpp>\n#include <stdlib.h>\n\nMyScreenView::MyScreenView()\n{\n\n}\n\nvoid MyScreenView::setupScreen()\n{\n    MyScreenViewBase::setupScreen();\n}\n\nvoid MyScreenView::tearDownScreen()\n{\n    MyScreenViewBase::tearDownScreen();\n}\n\nvoid MyScreenView::setRandomColor()\n{\n    box1.setColor(touchgfx::Color::getColorFromRGB(rand()&0xff, rand()&0xff, rand()&0xff));\n    box1.invalidate();\n}\n")),(0,r.kt)("p",null,"\u73b0\u5728\u8fd0\u884c\u6a21\u62df\u5668\uff0c\u7ed3\u679c\u663e\u793a\u6211\u4eec\u5df2\u6210\u529f\u5229\u7528\u751f\u6210\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801\u521b\u5efa\u4e86\u4e00\u4e2a\u7b80\u5355\u5e94\u7528 - \u73b0\u5728\u6bcf\u6b21\u60a8\u70b9\u51fb\u6309\u94ae\u65f6\uff0c\u80cc\u666f\u6846\u90fd\u4f1a\u53d8\u4e3a\u968f\u673a\u8272\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/simulator-random-color.webp",mdxType:"Figure"},"\u5c55\u793a\u5e94\u7528\u7684\u6a21\u62df\u5668"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5f53\u7136\uff0c\u60a8\u65e0\u9700\u4f7f\u7528TouchGFX Designer\u751f\u6210\u7684\u4ee3\u7801\u7684\u4efb\u4f55\u7279\u6027\uff0c\u4f46\u5b83\u6709\u53ef\u80fd\u8282\u7ea6\u5f88\u591a\u65f6\u95f4\u3002 \u53ef\u4ee5\u7528\u4f20\u7edf\u7684\u65b9\u5f0f\u5236\u4f5cTouchGFX\u5e94\u7528\uff0c\u53ea\u9700\u624b\u52a8\u6dfb\u52a0\u5fc5\u8981\u7684\u6587\u4ef6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u8fdb\u884c\u6df7\u5408\u548c\u5339\u914d\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u5e76\u975e\u5728TouchGFX Designer\u9879\u76ee\u4e2d\u5b9a\u4e49\u7684\u5c4f\u5e55\u3002 \u60a8\u53ef\u4ee5\u5c06 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"gotoXYZ")," \u51fd\u6570\u6dfb\u52a0\u5230",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendApplication"),"\u7c7b\uff0c\u5e76\u5c06\u60a8\u7684\u5c4f\u5e55\u9700\u8981\u7684\u89c6\u56fe\u3001\u5448\u73b0\u5668\u548c\u8f6c\u6362\u6dfb\u52a0\u5230 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendHeap\u3002"),"."))}f.isMDXComponent=!0}}]);