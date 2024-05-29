"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[98927],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=o(n),u=i,g=d["".concat(c,".").concat(u)]||d[u]||s[u]||r;return n?a.createElement(g,p(p({ref:t},m),{},{components:n})):a.createElement(g,p({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,p[1]=l;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496);class i extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const r=i},89639:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496),i=n(7029);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,p=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:p,target:"_blank"},a.createElement("img",{width:n,height:r,src:p})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:p,target:"_blank"},a.createElement("img",{width:n,height:r,src:p})),a.createElement("p",null,e.children))}},53117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>s});n(59496);var a=n(49613),i=n(89639),r=n(28128);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const c={id:"dynamic-bitmaps",title:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7"},o=void 0,m={unversionedId:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",id:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",title:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u6a19\u6e96\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u308b\u306e\u3067\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u4f7f\u7528\u53ef\u80fd\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u601d\u3044\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306fPNG\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u304b\u3089\u5909\u63db\u3055\u308c\u3001\u30b5\u30a4\u30ba\u304a\u3088\u3073\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u60c5\u5831\u3068\u5171\u306b\u5185\u90e8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",permalink:"/4.23/ja/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",draft:!1,tags:[],version:"current",frontMatter:{id:"dynamic-bitmaps",title:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7"},sidebar:"docs",previous:{title:"Canvas Widget\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff09",permalink:"/4.23/ja/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"},next:{title:"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8",permalink:"/4.23/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"}},d={},s=[{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u8a2d\u5b9a",id:"dynamic-bitmap-configuration",level:2},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f7f\u7528\u4f8b",id:"using-a-dynamic-bitmap-example",level:2},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u64cd\u4f5c",id:"dynamic-bitmap-operations",level:2},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f5c\u6210",id:"creating-a-dynamic-bitmap",level:3},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u524a\u9664",id:"deleting-a-dynamic-bitmap",level:3},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5185\u306e\u30d4\u30af\u30bb\u30eb\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u53d6\u5f97",id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap",level:3},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u5857\u308a\u3064\u3076\u3057\u9818\u57df\u3092\u8a2d\u5b9a",id:"set-the-solid-area-of-a-dynamic-bitmap",level:3},{value:"\u7e26\u5411\u304d\u30e2\u30fc\u30c9\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7",id:"dynamic-bitmap-in-portrait-mode",level:2}],u={toc:s},g="wrapper";function h(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(g,p({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u6a19\u6e96\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u308b\u306e\u3067\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u4f7f\u7528\u53ef\u80fd\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u601d\u3044\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306fPNG\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u304b\u3089\u5909\u63db\u3055\u308c\u3001\u30b5\u30a4\u30ba\u304a\u3088\u3073\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u60c5\u5831\u3068\u5171\u306b\u5185\u90e8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5b9f\u884c\u6642\u306bRAM\u5185\u3067\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002 \u3053\u308c\u306f",(0,a.kt)("em",{parentName:"p"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7"),"\u3068\u547c\u3070\u308c\u307e\u3059\u3002 \u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u308b\u30b9\u30bf\u30c6\u30a3\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3068\u540c\u3058\u3088\u3046\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u753b\u50cf\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3084\u30dc\u30bf\u30f3\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306a\u3069\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",p({},{id:"dynamic-bitmap-configuration"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f5c\u6210\u6642\u306b\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30d4\u30af\u30bb\u30eb\uff65\u30e1\u30e2\u30ea\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u524d\u306b\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u624b\u52d5\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u3001TouchGFX Designer\u3084Generator\u3067\u306f\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u8a2d\u5b9a\u624b\u9806\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,a.kt)("a",p({parentName:"p"},{href:"caching-bitmaps"}),"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u4f7f\u7528\u3055\u308c\u308b\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u6700\u5927\u6570\u3092\u5b9a\u7fa9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u6700\u5927\u6570\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30a2\u30c9\u30ec\u30b9\u3084\u30b5\u30a4\u30ba\u3068\u5171\u306bTouchGFX\u306b\u6e21\u3055\u308c\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001\u6700\u5927",(0,a.kt)("strong",{parentName:"p"},"4"),"\u3064\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u6301\u3064\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u4efb\u610f\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u8a2d\u5b9a\u3092\u4e00\u5ea6\u3060\u3051\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001FrontendApplication.cpp\u304c\u3088\u3044\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,10-10}","{2-2,10-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n}\n")),(0,a.kt)("p",null,"Windows\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u3053\u3053\u3067\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3082\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 Windows\u3067\u5927\u304d\u306a\u914d\u5217\u3092\u5ba3\u8a00\u3057\u305f\u308a\u3001malloc\u3092\u4f7f\u7528\u3057\u305f\u308a\u3059\u308b\u306e\u306f\u7c21\u5358\u3067\u3059\u3002"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{9-10}","{9-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n#ifdef SIMULATOR\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    uint16_t* const cacheStartAddr = (uint16_t*)malloc(cacheSize);\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#else\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#endif\n}\n")),(0,a.kt)("h2",p({},{id:"using-a-dynamic-bitmap-example"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f7f\u7528\u4f8b"),(0,a.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u305d\u308c\u3092\u8868\u793a\u3059\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002 \u305d\u3053\u3067\u3001\u753b\u50cf\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30d3\u30e5\u30fc\u306b\u633f\u5165\u3057\u307e\u3059\uff08\u30b3\u30fc\u30c9\u307e\u305f\u306fDesigner\u3092\u4f7f\u7528\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{6-6}","{6-6}":!0}),"#include <touchgfx/widgets/Image.hpp>\nusing namespace touchgfx;\nclass TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,a.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3067\u3053\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u6b21\u306e3\u3064\u306e\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306b\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210"),(0,a.kt)("li",{parentName:"ol"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u4f7f\u7528\u3059\u308b\u30e1\u30e2\u30ea\u3092\u30af\u30ea\u30a2"),(0,a.kt)("li",{parentName:"ol"},"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u5272\u5f53\u3066")),(0,a.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306fsetupScreen\u3067\u4f5c\u6210\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u300116bpp\u30d5\u30a9\u30fc\u30de\u30c3\u30c8RGB565\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c24\u30d3\u30c3\u30c8\u306e\u5834\u5408\u306fRGB888\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u900f\u660e\u306a\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30c8ARGB8888\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5185\u306e\u30d4\u30af\u30bb\u30eb\u306e\u30a2\u30c9\u30ec\u30b9\u306f\u3001dynamicBitmapGetAddress\u95a2\u6570\u306b\u3088\u3063\u3066\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{9-9,14-14}","{9-9,14-14}":!0}),"#include <touchgfx/Bitmap.hpp>\nvoid TemplateView::setupScreen()\n{\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of size 100x150\n    const int width = 100;\n    const int height = 150;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 150, Bitmap::RGB565);\n\n    //set all pixels white\n    if (bmpId != BITMAP_INVALID)\n    {\n       memset(Bitmap::dynamicBitmapGetAddress(bmpId), 0xFF, width*height*2);\n    }\n\n    //Make Image widget show the dynamic bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n")),(0,a.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u53d6\u5f97\u3059\u308b\u30d4\u30af\u30bb\u30eb\uff65\u30e1\u30e2\u30ea\u306f\u30af\u30ea\u30a2\u3055\u308c\u306a\u3044\u306e\u3067\u3001\u3053\u308c\u3092\u3059\u3050\u306b\u30af\u30ea\u30a2\u307e\u305f\u306f\u4e0a\u66f8\u304d\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u753b\u50cf\u3092\u8aad\u307f\u8fbc\u3080\u5834\u5408\u306b\u306f\u3001memset\u3078\u306e\u547c\u3073\u51fa\u3057\u3092\u30ed\u30fc\u30c0\u306e\u30b3\u30fc\u30c9\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,a.kt)("a",p({parentName:"p"},{href:"../scenarios/loading-images-at-runtime"}),"\u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",p({},{id:"dynamic-bitmap-operations"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u64cd\u4f5c"),(0,a.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u64cd\u4f5c\u306f\u3059\u3079\u3066",(0,a.kt)("a",p({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_bitmap"}),"Bitmap"),"\u30af\u30e9\u30b9\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("h3",p({},{id:"creating-a-dynamic-bitmap"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u5e45\u3001\u9ad8\u3055\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5f62\u5f0f\u3067\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u4f5c\u6210\u3055\u308c\u308b\u306e\u306f\u3001\u5341\u5206\u306a\u91cf\u306e\u672a\u4f7f\u7528\u306e\u30e1\u30e2\u30ea\u304c\u4f7f\u7528\u53ef\u80fd\u306a\u5834\u5408\u306e\u307f\u3067\u3059\u3002 \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u4f5c\u6210\u3055\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306fBITMAP_INVALID\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format, ClutFormat clutFormat)\n")),(0,a.kt)("h3",p({},{id:"deleting-a-dynamic-bitmap"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u524a\u9664"),(0,a.kt)("p",null,"\u6b21\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"static bool Bitmap::dynamicBitmapDelete(BitmapId id)\n")),(0,a.kt)("h3",p({},{id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5185\u306e\u30d4\u30af\u30bb\u30eb\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u53d6\u5f97"),(0,a.kt)("p",null,"\u6b21\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002 \u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30d5\u30a1\u30a4\u30eb\uff65\u30ed\u30fc\u30c0\u304c\u753b\u50cf\u30c7\u30fc\u30bf\u3092\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306b\u30b3\u30d4\u30fc\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"static uint8_t* dynamicBitmapGetAddress(BitmapId id)\n")),(0,a.kt)("h3",p({},{id:"set-the-solid-area-of-a-dynamic-bitmap"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u5857\u308a\u3064\u3076\u3057\u9818\u57df\u3092\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u6b21\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u9577\u65b9\u5f62\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)\n")),(0,a.kt)("p",null,"\u300c\u5857\u308a\u3064\u3076\u3057\u9818\u57df\u300d\u306e\u6982\u5ff5\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,a.kt)("a",p({parentName:"p"},{href:"custom-widgets#solid-area"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001RGB565\u3084RGB888\u306a\u3069\u306e\u4e0d\u900f\u660e\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u306f\u3001\u5857\u308a\u3064\u3076\u3057\u9818\u57df\u304c\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5168\u4f53\u306b\u306a\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 ARGB8888\u306a\u3069\u306e\u900f\u660e\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u306f\u7a7a\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("h2",p({},{id:"dynamic-bitmap-in-portrait-mode"}),"\u7e26\u5411\u304d\u30e2\u30fc\u30c9\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7"),(0,a.kt)("p",null,"TouchGFX\u306f\u7e26\u5411\u304d\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30e2\u30fc\u30c9\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304c\u672c\u6765\u306e\u65b9\u5411\u304b\u308990\u5ea6\u56de\u8ee2\u3057\u305f\u72b6\u614b\u3067\u30de\u30a6\u30f3\u30c8\u3055\u308c\u3066\u3044\u308b\u72b6\u6cc1\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30e2\u30fc\u30c9\u3067\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u5c11\u3057\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u6b21\u306b\u793a\u3059\u306e\u306fSTM32F746\u5411\u3051\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f8b\u3067\u3059\u3002 \u3053\u3053\u3067\u306f\u5e45\u304c480\u30d4\u30af\u30bb\u30eb\u3001\u9ad8\u3055\u304c272\u30d4\u30af\u30bb\u30eb\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f\u540c\u3058\u5bf8\u6cd5\u3067\u3059\u3002"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/designer-portrait.webp",noShadow:"true",width:"480",mdxType:"Figure"},"\u7e26\u5411\u304d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("p",null,"image1\u306e\u753b\u50cf\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u306f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u307e\u305b\u3093\u3002 \u3053\u306e\u4f8b\u3067\u306f\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u7e26\u5411\u304d\u30e2\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u5ea7\u6a19\u7cfb\u304c\u53cd\u6642\u8a08\u56de\u308a\u306b90\u5ea6\u56de\u8ee2\u3057\u307e\u3059\u3002 \u5ea7\u6a19(0, 0)\u306f\u3001\u5de6\u4e0a\u9685\u306e'D'\u306e\u8fd1\u304f\u306b\u306a\u308a\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u6700\u521d\u306e\u30d0\u30a4\u30c8\uff08\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u6700\u521d\u306e\u30d4\u30af\u30bb\u30eb\u306e\u8272\u3092\u6307\u5b9a\uff09\u306f\u3001\u53f3\u4e0a\u9685\u306b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3057\u305f\u304c\u3063\u3066\u3001\u7e26\u5411\u304d\u3067\u5b9f\u884c\u3055\u308c\u308b\u3068\u304d\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f",(0,a.kt)("em",{parentName:"p"},"\u56de\u8ee2\u3057\u307e\u305b\u3093"),"\u3002 \u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306b\u3082\u540c\u3058\u3053\u3068\u304c\u8a00\u3048\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\uff08\u30de\u30a6\u30f3\u30c8\u3059\u308b\uff09\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u6700\u521d\u306e\u30e9\u30a4\u30f3\u306b\u8868\u793a\u3055\u305b\u308b\u30d4\u30af\u30bb\u30eb\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5de6\u306e\u30a8\u30c3\u30b8\u306b\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6b21\u306e\u95a2\u6570\u3067\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u3001\u4e0a\u306e\u884c\u3092\u7dd1\u8272\u3001\u53f3\u306e\u30a8\u30c3\u30b8\u3092\u8d64\u8272\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{13-14,16-21}","{13-14,16-21}":!0}),"void Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    BitmapId bmpId;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::RGB565);\n\n    if (bmpId != BITMAP_INVALID)\n    {\n        //set all pixels white\n        uint16_t* const bitmapPixels = (uint16_t*)Bitmap::dynamicBitmapGetAddress(bmpId);\n        memset(bitmapPixels, 0xFF, 100*100*2);\n\n        //first 200 pixels red, => two column on the right on display\n        for (int i = 0; i<200; i++) bitmapPixels[i] = 0xF800;\n\n        //first two pixels in all rows green in bitmap => top two rows on display\n        for (int i = 0; i<100; i++)\n        {\n            bitmapPixels[i*100]     = 0x07E0;\n            bitmapPixels[i*100 + 1] = 0x07E0;\n        }\n    }\n\n    image1.setBitmap(bmpId);\n}\n")),(0,a.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/stm32f746-portrait.webp",noShadow:"true",width:"272",mdxType:"Figure"},"\u7e26\u5411\u304d\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b3\u30f3\u30c6\u30f3\u30c4"))}h.isMDXComponent=!0}}]);