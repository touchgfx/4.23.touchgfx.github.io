"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[71923],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),g=o,d=h["".concat(i,".").concat(g)]||h[g]||s[g]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(7029);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:a,src:c})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},49018:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),o=n(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class c extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const l=c},88689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(59496);var r=n(49613),o=n(89639),a=n(49018);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"touchgfx-designer-project",title:"TouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",sidebar_label:"TouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"},u=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",title:"TouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",description:"TouchGFX Generator\u306fTouchGFX\u30d5\u30a9\u30eb\u30c0\u5185\u306b.part\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001TouchGFX\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u3068\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5b8c\u5099\u3057\u305f\u5b8c\u5168\u306aTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001TouchGFX Designer\u3092\u4f7f\u7528\u3057\u3066\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 .part\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3084TouchGFX Designer\u304cTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3059\u308b\u30ad\u30e3\u30f3\u30d0\u30b9\u306e\u30b5\u30a4\u30ba\u306a\u3069\u306e\u95a2\u9023\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",permalink:"/4.23/ja/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-designer-project",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-designer-project",title:"TouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",sidebar_label:"TouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"},sidebar:"docs",previous:{title:"\u751f\u6210\u3055\u308c\u305f\u52d5\u4f5c\u306e\u5909\u66f4",permalink:"/4.23/ja/docs/development/touchgfx-hal-development/generator-how-to/modifying-generated-behavior"},next:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",permalink:"/4.23/ja/docs/development/touchgfx-hal-development/generator-how-to/upgrading-projects"}},h={},s=[],g={toc:s},d="wrapper";function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(d,c({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX Generator\u306fTouchGFX\u30d5\u30a9\u30eb\u30c0\u5185\u306b.part\u30d5\u30a1\u30a4\u30eb\u3092",(0,r.kt)("a",c({parentName:"p"},{href:"generating-code#generated-project"}),"\u751f\u6210"),"\u3057\u307e\u3059\u3002\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001TouchGFX\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u3068\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5b8c\u5099\u3057\u305f\u5b8c\u5168\u306aTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001TouchGFX Designer\u3092\u4f7f\u7528\u3057\u3066\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 .part\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3084TouchGFX Designer\u304cTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3059\u308b\u30ad\u30e3\u30f3\u30d0\u30b9\u306e\u30b5\u30a4\u30ba\u306a\u3069\u306e\u95a2\u9023\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306ejson\u69cb\u9020\u306f\u3001STM32U599\u306b\u57fa\u3065\u304f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e \u300c",(0,r.kt)("a",c({parentName:"p"},{href:"generating-code#generated-code-structure"}),"\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306e\u69cb\u9020"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3057\u305f",(0,r.kt)("inlineCode",{parentName:"p"},".part"),"\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u4f8b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u4e0b\u306e\u4f8b\u306e\u751f\u6210\u5f8c\u30b3\u30de\u30f3\u30c9\u306f\u3001\uff3bSTM32CubeMX Project Manager\uff3d\u30bf\u30d6\u3067\u30e6\u30fc\u30b6\u304c\u9078\u629e\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff08EWARM\u306a\u3069\uff09\u3092\u3001TouchGFX\u3067\u5fc5\u8981\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3001\u306a\u3089\u3073\u306bTouchGFX Designer\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u305f\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\uff08\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30fc\u30f3\u3084\u30a2\u30bb\u30c3\u30c8\u306a\u3069\uff09\u3067\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:"{16}","{16}":!0}),'{\n  "Application": {\n    "Name": "STM32U599J-DK",\n    "TouchGfxPath": "../Middlewares/ST/touchgfx",\n    "AvailableColorDepths": [ 24 ],\n    "AvailableLCDs":\n    {\n      "24": "LCDGPU2D"\n    },\n    "AvailableResolutions": [\n      {\n        "Width": 480,\n        "Height": 480\n      }\n    ],\n    "PostGenerateTargetCommand": "touchgfx update_project",\n    "Family": "STM32U5",\n    "SubFamily": "STM32U599/5A9",\n    "Platform": "m33",\n    "ProjectFile": "../STM32U599J-DK.ioc",\n    "OptionalComponentsRoot": "../Middlewares/ST/touchgfx_components",\n    "OptionalComponents": [\n      "GPU2D"\n    ]\n  },\n  "Version": "4.19.0"\n}\n')),(0,r.kt)("p",null,"TouchGFX Designer\u3067.part\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f\u3068\u3001\u958b\u767a\u8005\u306f\u3001\u5177\u4f53\u7684\u306aUI\u3092\u30ed\u30fc\u30c9\u3059\u308b\u306e\u304b\u3001\u7a7a\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3059\u308b\u306e\u304b\u3092\u9078\u629e\u3059\u308b\u3088\u3046\u6c42\u3081\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui-4-17.webp",noShadow:!1,mdxType:"Figure"},"UI\u306e\u9078\u629e"),(0,r.kt)("p",null,"TouchGFX Designer\u3067\uff3bGenerate Code\uff3d\u3092\u62bc\u3059\u3068\u3001TouchGFX Designer\u306b\u3088\u3063\u3066TouchGFX\u30d5\u30a9\u30eb\u30c0\u5185\u306b\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3068\u30d5\u30a9\u30eb\u30c0\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code-4-17.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX Designer\u306eGenerate Code"),(0,r.kt)("p",null,"\u4e0b\u306e\u753b\u50cf\u306fTouchGFX\u30d5\u30a9\u30eb\u30c0\u69cb\u9020\u306e\u5177\u4f53\u4f8b\u3092\u793a\u3057\u3066\u304a\u308a\u3001\u751f\u6210\u5f8c\u306e\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a9\u30eb\u30c0\u3092\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX\u30d5\u30a9\u30eb\u30c0\u306e\u69cb\u9020"),(0,r.kt)("p",null,"TouchGFX Designer\u306f\u3001STM32CubeMX Project Manager\u3067\u9078\u629e\u3055\u308c\u305fIDE\uff08 STM32CubeIDE\u3001EWARM\u3001\u307e\u305f\u306fMDK-ARM\uff09\u3092\u691c\u51fa\u3057\u3001\u753b\u9762\u306e\u5b9a\u7fa9\u3084\u753b\u50cf\u304a\u3088\u3073\u30d5\u30a9\u30f3\u30c8\uff65\u30a2\u30bb\u30c3\u30c8\u306a\u3069\u306e\u65b0\u3057\u304f\u751f\u6210\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3067IDE\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u6642\u70b9\u3067\u958b\u767a\u8005\u306f\u3001STM32CubeMX\u3001TouchGFX Designer\u3001\u304a\u3088\u3073\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3 / IDE\u3067\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u4ea4\u4e92\u306b\u4f5c\u696d\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u3067IDE\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c9\u30e9\u30a4\u30d0\u3092\u66f4\u65b0\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u306fTouchGFX Designer\u3067\u5373\u5ea7\u306b\u9078\u629e\u3057\u305fUI\u95a2\u9023\u306e\u5909\u66f4\u3067\u3001TouchGFX\u306e.part\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u306f\u3001TouchGFX Generator\u306e\u8a2d\u5b9a\u306b\u57fa\u3065\u3044\u3066\u3001TouchGFX\u304c\u7279\u5b9a\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u52d5\u4f5c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306aHAL\u30b3\u30fc\u30c9\uff08TouchGFX/target/generated/\uff09\u3092\u751f\u6210\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"TouchGFX Designer\u306f\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3002")),(0,r.kt)(a.Z,{mdxType:"Note"},"\u30c7\u30e5\u30a2\u30eb\u30b3\u30a2\uff65\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001TouchGFX\u304c\u7279\u5b9a\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u5bfe\u3057\u3066\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u3068\u3001\u901a\u5e38\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u305d\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5c02\u7528\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\uff08\u300cCM4/TouchGFX\u300d\u307e\u305f\u306f\u300cCM7/TouchGFX\u300d\u306a\u3069\uff09\u3002"))}m.isMDXComponent=!0}}]);