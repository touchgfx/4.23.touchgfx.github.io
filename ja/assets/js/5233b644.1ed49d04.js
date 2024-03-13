"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[85402],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},66590:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const a=o},47374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(59496);var r=n(49613),o=n(12822),a=n(66590);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"vector-fonts",title:"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8"},c=void 0,u={unversionedId:"development/ui-development/touchgfx-engine-features/vector-fonts",id:"development/ui-development/touchgfx-engine-features/vector-fonts",title:"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8",description:"TouchGFX\u30d0\u30fc\u30b8\u30e7\u30f34.23\u304b\u3089\u3001\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u683c\u7d0d\u3055\u308c\u308b\u30d5\u30a9\u30f3\u30c8\u306f\u3001\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u304c\u3059\u3079\u3066\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba\u3067\u5171\u6709\u3055\u308c\u308b\u305f\u3081\u3001\u30c7\u30fc\u30bf\uff65\u30b5\u30a4\u30ba\u3092\u5c0f\u3055\u304f\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba\u306b\u305d\u306e\u30b5\u30a4\u30ba\u306e\u30b0\u30ea\u30d5\u5c02\u7528\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u6301\u3064\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u3068\u306f\u5bfe\u7167\u7684\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/vector-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/vector-fonts",permalink:"/4.23/ja/docs/development/ui-development/touchgfx-engine-features/vector-fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"vector-fonts",title:"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8"},sidebar:"docs",previous:{title:"SVG",permalink:"/4.23/ja/docs/development/ui-development/touchgfx-engine-features/svg"},next:{title:"\u753b\u50cf\u306e\u5727\u7e2e",permalink:"/4.23/ja/docs/development/ui-development/touchgfx-engine-features/image-compression"}},s={},d=[{value:"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u3068\u306f",id:"what-are-vector-fonts",level:2},{value:"\u4f8b",id:"\u4f8b",level:3},{value:"\u8a2d\u5b9a",id:"vector-configuration",level:2},{value:"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528",id:"vector-using",level:2},{value:"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3",id:"vector-typographies",level:2},{value:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",id:"vector-architecture",level:2},{value:"\u5236\u9650",id:"vector-limitations",level:2},{value:"Winding rules",id:"winding-rules",level:3},{value:"Using FontForge",id:"using-fontforge",level:4},{value:"\u30b9\u30c8\u30ec\u30fc\u30b8",id:"vector-storage",level:3},{value:"\u30bf\u30a4\u8a9e",id:"\u30bf\u30a4\u8a9e",level:3}],g={toc:d},m="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,l({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX\u30d0\u30fc\u30b8\u30e7\u30f34.23\u304b\u3089\u3001\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u683c\u7d0d\u3055\u308c\u308b\u30d5\u30a9\u30f3\u30c8\u306f\u3001\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u304c\u3059\u3079\u3066\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba\u3067\u5171\u6709\u3055\u308c\u308b\u305f\u3081\u3001\u30c7\u30fc\u30bf\uff65\u30b5\u30a4\u30ba\u3092\u5c0f\u3055\u304f\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba\u306b\u305d\u306e\u30b5\u30a4\u30ba\u306e\u30b0\u30ea\u30d5\u5c02\u7528\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u6301\u3064\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u3068\u306f\u5bfe\u7167\u7684\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306f\u3001TextArea\u3084ButtonWithLabel\u306a\u3069\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u4f7f\u7528\u3059\u308b\u901a\u5e38\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u3068\u540c\u69d8\u306b\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001STM32CubeMX\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306f\u300116bpp\u300124bpp\u3001\u307e\u305f\u306f32bpp\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u307f\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",l({},{id:"what-are-vector-fonts"}),"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u3068\u306f"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306f\u3001\u500b\u3005\u306e\u6587\u5b57\u304c\u66f2\u7dda\u3068\u76f4\u7dda\u3067\u8868\u3055\u308c\u308b\u30d5\u30a9\u30f3\u30c8\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u66f2\u7dda\u3068\u76f4\u7dda\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30b5\u30a4\u30ba\u306e\u30b0\u30ea\u30d5\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u62e1\u5927 / \u7e2e\u5c0f\u3067\u304d\u307e\u3059\u3002 TouchGFX\u3067\u901a\u5e38\u4f7f\u7528\u3059\u308b\u30d5\u30a9\u30f3\u30c8\u306f\u3059\u3079\u3066\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\uff08TrueType\u3084OpenType\u30d5\u30a9\u30f3\u30c8\u306a\u3069\uff09\u3067\u3059\u3002 TouchGFX Designer\u304c\u30a2\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u3068\u3001\u30d5\u30a9\u30f3\u30c8\u8a18\u8ff0\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u66f2\u7dda\u3068\u76f4\u7dda\u306f\u3001TouchGFX Font Converter\u306b\u3088\u3063\u3066\u591a\u6570\u306e\u5c0f\u3055\u3044\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3078\u306e\u5909\u63db\u306f\u3001TouchGFX Designer\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306b\u57fa\u3065\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u3042\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067Large\u3068Small\u306e2\u7a2e\u985e\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3057\u307e\u3059\u3002 Large\u306f\u30b5\u30a4\u30ba30\u306eVerdana\u3092\u30d9\u30fc\u30b9\u306b\u3001Small\u306f\u30b5\u30a4\u30ba20\u306eVerdana\u3092\u30d9\u30fc\u30b9\u306b\u3057\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3053\u308c\u3089\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u30b0\u30ea\u30d5A\uff5eZ\u3068a\uff5ez\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u5404\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u30b0\u30ea\u30d5\u306f52\u500b\u3067\u3059\u304c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u306f104\u500b\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u6587\u5b57\u3054\u3068\u306b2\u7a2e\u985e\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002 \u30b5\u30a4\u30ba30\u3068\u30b5\u30a4\u30ba20\u306e2\u7a2e\u985e\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30b0\u30ea\u30d5\u306e\u30d9\u30af\u30bf\u5b9a\u7fa9\u3092\u4fdd\u6301\u3057\u3001\u30b0\u30ea\u30d5\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u4f5c\u6210\u3055\u308c\u306a\u3044\u3068\u3044\u3046\u70b9\u3067\u3001\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306f\u7570\u306a\u308a\u307e\u3059\u3002 \u4ee3\u308f\u308a\u306b\u3001\u3053\u306e\u30d9\u30af\u30bf\u5b9a\u7fa9\u306f1\u56de\u3060\u3051\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d44\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002 2\u3064\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306e\u751f\u6210\u306b\u5fc5\u8981\u306a\u8ffd\u52a0\u30c7\u30fc\u30bf\u306f\u30012\u7a2e\u985e\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\uff65\u30d5\u30a1\u30af\u30bf\u306e\u307f\u3067\u3059\u3002 \u30d9\u30af\u30bf\u5b9a\u7fa9\u3092\u30b5\u30a4\u30ba30\u306b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u3082\u306e\u3068\u3001\u30b5\u30a4\u30ba20\u306b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u3082\u306e\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u7d50\u679c\u3001\u5225\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\uff65\u30b5\u30a4\u30ba\u3001\u305f\u3068\u3048\u3070\u30b5\u30a4\u30ba40\u306eVerdana\u3092\u30b5\u30f3\u30d7\u30eb\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8ffd\u52a0\u3057\u3066\u3082\u3001\u5fc5\u8981\u3068\u3059\u308bFlash\u30b5\u30a4\u30ba\u306e\u5897\u52a0\u306f\u308f\u305a\u304b\u3067\u3059\u3002"),(0,r.kt)("h3",l({},{id:"\u4f8b"}),"\u4f8b"),(0,r.kt)("p",null,"\u4f8b\u3092\u6319\u3052\u308b\u3068\u3001Truetype\u30d5\u30a9\u30f3\u30c8Verdana\u306e\uff3bG\uff3d\u306e\u30d9\u30af\u30bf\u5b9a\u7fa9\u306f170\u30d0\u30a4\u30c8\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30b0\u30ea\u30d5\u3092\u8868\u3059\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30b5\u30a4\u30ba\u306f\u3001\u4f7f\u7528\u3055\u308c\u308bbpp\u3068\u30b0\u30ea\u30d5\u306e\u30b5\u30a4\u30ba\u306b\u5fdc\u3058\u3066\u7570\u306a\u308a\u307e\u3059\u3002 \u6b21\u306e\u8868\u3067\u306f\u30014bpp\u306e\u3055\u307e\u3056\u307e\u306a\u30b0\u30ea\u30d5\uff65\u30b5\u30a4\u30ba\u3067\u306e\uff3bG\uff3d\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30b5\u30a4\u30ba\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"\u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"G\u306e\u30b0\u30ea\u30d5\uff65\u30b5\u30a4\u30ba\uff08pixels\uff09"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30b5\u30a4\u30ba\uff08bytes\uff09"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"20"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"14 x 14"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"98")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"30"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"21 x 22"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"242")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"40"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"27 x 32"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"448")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"\u5408\u8a08"),(0,r.kt)("td",l({parentName:"tr"},{align:null})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"788")))),(0,r.kt)("p",null,"\u30d5\u30a9\u30f3\u30c8\uff65\u30b5\u30a4\u30ba20\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30b5\u30a4\u30ba\u306f\uff3bG\uff3d\u306e\u30d9\u30af\u30bf\u5b9a\u7fa9\u3088\u308a\u3082\u5c0f\u3055\u3044\u3067\u3059\u304c\u3001\u3059\u3067\u306b\u30b5\u30a4\u30ba30\u3067\u30d9\u30af\u30bf\u5b9a\u7fa9\u304c\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30b5\u30a4\u30ba\u3088\u308a\u3082\u5c0f\u3055\u304f\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u307e\u305f\u30013\u7a2e\u985e\u306e\u30b5\u30a4\u30ba\u306eVerdana\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3067\u306f788\u30d0\u30a4\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u304c\u3001\u30d9\u30af\u30bf\u5b9a\u7fa9\u3067\u306f170\u30d0\u30a4\u30c8\u3057\u304b\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002 \u3057\u305f\u304c\u3063\u3066\u3001Flash\u4f7f\u7528\u91cf\u309278%\u7bc0\u7d04\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u7bc0\u7d04\u306b\u306f\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u4e0a\u306e\u30c7\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002 \u30b0\u30ea\u30d5\u3092\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u30d9\u30af\u30bf\u5b9a\u7fa9\u3092\u30d4\u30af\u30bb\u30eb\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u308c\u306b\u306f\u3001\u30b0\u30ea\u30d5\u306e\u30d9\u30af\u30bf\u5b9a\u7fa9\u3092\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u304a\u3088\u3073\u5909\u63db\u3057\u3066\u304b\u3089\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u63cf\u753b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Verdana\u3067\u306f1\u3064\u306e\uff3bG\uff3d\u306f20\u672c\u306e\u30d9\u30b8\u30a7\u66f2\u7dda\u30686\u672c\u306e\u76f4\u7dda\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306f\u3059\u3079\u3066\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3\u306b\u5909\u63db\u3055\u308c\u3001\u6700\u7d42\u7684\u306b\u9078\u629e\u3057\u305f\u30c6\u30ad\u30b9\u30c8\u306e\u8272\u3092\u4f7f\u7528\u3057\u3066\u8272\u4ed8\u3051\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30bb\u30b9\u306f\u304c\u30c6\u30ad\u30b9\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u6587\u5b57\u306b\u3064\u3044\u3066\u7e70\u308a\u8fd4\u3055\u308c\u3001\u30c6\u30ad\u30b9\u30c8\u304c\u518d\u63cf\u753b\u3055\u308c\u308b\u305f\u3073\u306b\u7e70\u308a\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u305d\u308c\u304c\u3046\u307e\u304f\u6a5f\u80fd\u3059\u308bGPU2D\u3092\u642d\u8f09\u3057\u305f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\uff08STM32U5G9\u306a\u3069\uff09\u3067\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\u3055\u308c\u307e\u3059\u3002 STM32G0\u306e\u3088\u3046\u306a\u4f4e\u901f\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u306f\u3001\u6d6e\u52d5\u5c0f\u6570\u70b9\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304c\u306a\u3051\u308c\u3070\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304c\u3053\u3046\u3057\u305f\u52d5\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u975e\u5e38\u306b\u5927\u304d\u306a\u8ca0\u8377\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u3088\u3046\u306a\u5834\u5408\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3068\u3001\u63cf\u753b\u6642\u9593\u304c\u77ed\u304f\u306a\u308a\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001Flash\u306e\u7bc0\u7d04\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u30c6\u30ad\u30b9\u30c8\u304c\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff08\u30b9\u30af\u30ed\u30fc\u30eb\u3001\u79fb\u52d5\u307e\u305f\u306f\u30d5\u30a7\u30fc\u30c9\uff09\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",l({},{id:"vector-configuration"}),"\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528\u306b\u306f\u3001\u8ffd\u52a0\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u6a5f\u80fd\u3067\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"Vector Rendering"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"Vector Fonts"),"\u304c\u5fc5\u8981\u3067\u3059\u3002 \u3053\u308c\u3089\u306fSTM32CubeMX\u3067\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",l({parentName:"p"},{href:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering"}),"Generator User Guide"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306fTouchGFX Designer\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306b\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u307e\u305f\u306f\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u3069\u3061\u3089\u3092\u4f7f\u7528\u3059\u308b\u306e\u304b\u9078\u629e\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059\u3002"),(0,r.kt)("h2",l({},{id:"vector-using"}),"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"TouchGFX\u3067\u306f\u3001\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u3068\u540c\u3058\u3088\u3046\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u3092\u540d\u524d\u4ed8\u304d\u30ea\u30bd\u30fc\u30b9\u307e\u305f\u306f\u30b7\u30f3\u30b0\u30eb\uff65\u30e6\u30fc\u30b9\uff65\u30c6\u30ad\u30b9\u30c8\u3068\u3057\u3066\u4f5c\u6210\u3057\u307e\u3059\u3002 \u305d\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e1\u3064\u3001\u305f\u3068\u3048\u3070TextArea\u306b\u8868\u793a\u3057\u307e\u3059\u3002 \u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u3068\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u3068\u306e\u9055\u3044\u306f\u3001\u63cf\u753b\u30b3\u30fc\u30c9\u306b\u96a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",l({},{id:"vector-typographies"}),"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306f\u3001TouchGFX Designer\u3067\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u304c\u30d9\u30af\u30bf\uff65\u30d9\u30fc\u30b9\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002 ",(0,r.kt)("a",l({parentName:"p"},{href:"../designer-user-guide/texts-view#typographies"}),"Designer User Guide"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u8907\u6570\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3067\u540c\u3058\u30d5\u30a9\u30f3\u30c8\uff08Verdana\u306a\u3069\uff09\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u30d9\u30af\u30bf\u5b9a\u7fa9\u3092\u5171\u6709\u3057\u307e\u3059\u304c\u3001\u7570\u306a\u308b\u30b5\u30a4\u30ba\u306e\u30b0\u30ea\u30d5\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u7570\u306a\u308b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\uff65\u30d5\u30a1\u30af\u30bf\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3064\u307e\u308a\u3001\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"p"},"Fallback Character"),"\u304a\u3088\u3073",(0,r.kt)("inlineCode",{parentName:"p"},"Ellipsis Character"),"\u3082\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u9593\u3067\u540c\u3058\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3067\u4f7f\u7528\u3055\u308c\u308b\u6587\u5b57\uff08\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u6587\u5b57\u3092\u542b\u3080\uff09\u306f\u307e\u3068\u3081\u3089\u308c\u3001\u540c\u3058\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u3059\u3079\u3066\u306e\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3067\u4f7f\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",l({},{id:"vector-architecture"}),"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u63cf\u753b\u306f\u3001\u65b0\u3057\u3044\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",(0,r.kt)("inlineCode",{parentName:"p"},"VectorFontRenderer"),"\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"VectorRenderer"),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30b0\u30ea\u30d5\u3092\u63cf\u753b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u3053\u308c\u30892\u3064\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u53ef\u80fd\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u6709\u52b9\u306a\u5834\u5408\u306f\u3001\u3053\u308c\u306fSTM32CubeMX\u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 STM32CubeMX\u3092\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u624b\u52d5\u3067\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306eSTM32CubeMX\u3067\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3067\u306f\u3001\u95a2\u9023\u3059\u308b\u884c\u304c\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19}","{5-5,19-19}":!0}),"static STM32TouchController tc;\nstatic STM32DMA dma;\nstatic TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic VectorFontRendererImpl vectorFontRenderer;\nstatic ApplicationFontProvider fontProvider;\nstatic Texts texts;\nstatic TouchGFXHAL hal(dma, display, tc, 240, 320);\n\nvoid touchgfx_init()\n{\n    Bitmap::registerBitmapDatabase(BitmapDatabase::getInstance(), BitmapDatabase::getInstanceSize());\n    TypedText::registerTexts(&texts);\n    Texts::setLanguage(0);\n\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n\n    display.setVectorFontRenderer(&vectorFontRenderer);\n    ...\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VectorRenderer"),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL.cpp"),"\u304b\u3089\uff09\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"namespace touchgfx\n{\nVectorRenderer* VectorRenderer::getInstance()\n{\n    static CWRVectorRendererRGB565 renderer;\n\n    return &renderer;\n}\n} // namespace touchgfx\n")),(0,r.kt)("p",null,"GPU2D\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\u3092\u642d\u8f09\u3057\u305f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"CWRVectorRendererRGB565"),"\u3067\u306f\u306a\u304f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"CPU2DVectorRenderer"),"\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",l({},{id:"vector-limitations"}),"\u5236\u9650"),(0,r.kt)("h3",l({},{id:"winding-rules"}),"Winding rules"),(0,r.kt)("p",null,"Vector font typographies used in TouchGFX applications are required to follow certain rules in order for glyphs to be drawn correctly. Specifically, glyphs with overlapping outlines are sometimes not rendered correctly due to the ",(0,r.kt)("em",{parentName:"p"},"winding rule")," deployed by TouchGFX when drawing vector fonts. To remove overlapping outlines from custom typographies, it is recommended to use the free ",(0,r.kt)("a",l({parentName:"p"},{href:"https://fontforge.org/en-US/downloads/windows/"}),(0,r.kt)("em",{parentName:"a"},"FontForge"))," tool."),(0,r.kt)("h4",l({},{id:"using-fontforge"}),"Using FontForge"),(0,r.kt)("p",null,"Navigate to the FontForge installation folder (usually ",(0,r.kt)("inlineCode",{parentName:"p"},"c:/Program Files (x86)/FontForgeBuilds"),") and launch the ",(0,r.kt)("inlineCode",{parentName:"p"},".exe"),":"),(0,r.kt)(o.Z,{width:"40%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-open-font.png",mdxType:"Figure"},"FontForge launch view."),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/fonts/")," folder of your project, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"c:/TouchGFXProjects/MyApplication/TouchGFX/assets/fonts/"),". FontForge will detect all the ",(0,r.kt)("em",{parentName:"p"},"TrueType")," fonts in the application. In this example, the ",(0,r.kt)("em",{parentName:"p"},"Cairo-Bold.ttf")," TrueType font contains overlapping outlines which are not drawn correctly:"),(0,r.kt)(o.Z,{width:"40%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-select-font.png",mdxType:"Figure"},"FontForge open TrueType font view."),(0,r.kt)("p",null,"Clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"OK")," will open the ",(0,r.kt)("em",{parentName:"p"},"font view")," of all the glyphs in the typography:"),(0,r.kt)(o.Z,{width:"80%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-font-view.png",mdxType:"Figure"},"FontForge font view."),(0,r.kt)("p",null,"To remove overlapping contours from glyphs, select all glyphs in the font view with ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + A"),". Next, with all glyphs selected use shortcut ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + u")," followed by ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + Shift + O")," to remove overlapping contours from selected glyphs. A blue mark will appear above all glyphs, indicating they have been changed. The effect can be seen by double-clicking on individual glyphs. An example is shown of the ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," glyph from before and after removing overlapping contours below:"),(0,r.kt)(o.Z,{width:"80%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-dollar-glyph-comparison.png",noShadow:!0,mdxType:"Figure"},"$-glyph with overlapping contours (left) and non-overlapping contours (right)."),(0,r.kt)("p",null,"Observe that the outline of the glyph remains unaffected, but contours which were overlapping are merged. To use the non-overlapping typography in a TouchGFX application we use FontForge to export the new font. In the FontForge ",(0,r.kt)("em",{parentName:"p"},"font view"),", use shortcut ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + Shift + G")," to export the fonts. This opens the ",(0,r.kt)("em",{parentName:"p"},"Generate Fonts"),' view. It is recommended to rename the typography, e.g., with "-no-overlap" as a suffix, to avoid overwriting the original font in case of an error. Select ',(0,r.kt)("inlineCode",{parentName:"p"},"TrueType")," as output format. The settings should be set as shown below:"),(0,r.kt)(o.Z,{width:"30%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-generate-fonts.png",mdxType:"Figure"},"FontForge generate font settings."),(0,r.kt)("p",null,"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate")," to export the fonts. Press ",(0,r.kt)("em",{parentName:"p"},"Yes")," if warnings appear. The exported typography will appear next to the original TrueType font in the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/fonts/")," folder of your project. The original font can be removed from this folder and placed elsewhere on disk, to avoid having multiple typographies of the same name appear in the TouchGFX Designer. Restart TouchGFX Designer to make the new font visible in the font selector. If you had generated code in TouchGFX Designer before modifying the font, make sure to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/")," folder before generating code again."),(0,r.kt)("h3",l({},{id:"vector-storage"}),"\u30b9\u30c8\u30ec\u30fc\u30b8"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u306f\u3001\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\u9818\u57df\u306b\u683c\u7d0d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u5185\u90e8Flash\u3001\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30e2\u30fc\u30c9\u306e\u5916\u90e8QSPI / OSPI Flash\u3001RAM\u3001\u307e\u305f\u306f\u305d\u306e\u4ed6\u306e\u985e\u4f3c\u30e1\u30e2\u30ea\u306a\u3069\u306b\u683c\u7d0d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u4ed6\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u304c\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30c7\u30fc\u30bf\u306b\u683c\u7d0d\u3055\u308c\u308b\u5834\u5408\u306f\u3001\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5909\u66f4\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u3092\u5185\u90e8Flash\u306a\u3069\u306b\u79fb\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u6b21\u306b\u3001ARM gcc\u3092\u4f7f\u7528\u3057\u3066\u3053\u308c\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),'  /* Constant data into "FLASH" Rom type memory */\n  .FontFlashSection :\n  {\n    . = ALIGN(4);\n    */Vector_*.o(FontFlashSection)         /* Vector font data  */\n    . = ALIGN(4);\n  } >FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n')),(0,r.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u304c ",(0,r.kt)("inlineCode",{parentName:"p"},"*/Vector_*.o/"),"\u306b\u4e00\u81f4\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"FLASH"),"\u9818\u57df\u306b\u683c\u7d0d\u3055\u308c\u3001\u305d\u306e\u4ed6\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"SPI_FLASH"),"\u9818\u57df\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/Vector_Font_Verdana.cpp"),"\u3084\u985e\u4f3c\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",l({},{id:"\u30bf\u30a4\u8a9e"}),"\u30bf\u30a4\u8a9e"),(0,r.kt)("p",null,"\u30bf\u30a4\u8a9e\u304c\u30d9\u30af\u30bf\uff65\u30d5\u30a9\u30f3\u30c8\u3067\u306f\u6b63\u78ba\u306b\u63cf\u753b\u3067\u304d\u306a\u3044\u3053\u3068\u306f\u65e2\u77e5\u306e\u554f\u984c\u3067\u3059\u3002 \u5bfe\u5fdc\u7b56\u3068\u3057\u3066\u3001\u30bf\u30a4\u8a9e\u306b\u306f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"))}h.isMDXComponent=!0}}]);