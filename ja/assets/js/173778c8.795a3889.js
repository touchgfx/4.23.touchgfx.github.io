"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[84395],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(7029);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:a,src:c})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:a,src:c})),n.createElement("p",null,e.children))}},2333:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/;if(t.test(e))return t.exec(e)[1];const r=/^https:\/\/youtu\.be\/(.+)$/;if(r.test(e))return r.exec(e)[1];return e}(this.props.url)}`;return n.createElement("div",{className:"videoWrapper"},n.createElement("iframe",{src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}const a=o},39477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>d});r(59496);var n=r(49613),o=r(95375),a=r(89639),c=r(2333);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"welcome",title:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",sidebar_label:"\u306f\u3058\u3081\u306b",description:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\xb7\u30b5\u30a4\u30c8 - \u7d44\u8fbc\u307f\u30bf\u30c3\u30c1\xb7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u308b\u3001\u4f7f\u3044\u3084\u3059\u3044\u30b0\u30e9\u30d5\u30a3\u30ab\u30ebC++\u30c4\u30fc\u30eb"},p=void 0,s={unversionedId:"introduction/welcome",id:"introduction/welcome",title:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",description:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\xb7\u30b5\u30a4\u30c8 - \u7d44\u8fbc\u307f\u30bf\u30c3\u30c1\xb7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u308b\u3001\u4f7f\u3044\u3084\u3059\u3044\u30b0\u30e9\u30d5\u30a3\u30ab\u30ebC++\u30c4\u30fc\u30eb",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.23/ja/docs/introduction/welcome",draft:!1,tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",sidebar_label:"\u306f\u3058\u3081\u306b",description:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\xb7\u30b5\u30a4\u30c8 - \u7d44\u8fbc\u307f\u30bf\u30c3\u30c1\xb7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u308b\u3001\u4f7f\u3044\u3084\u3059\u3044\u30b0\u30e9\u30d5\u30a3\u30ab\u30ebC++\u30c4\u30fc\u30eb"},sidebar:"docs",previous:{title:"Introduction",permalink:"/4.23/ja/docs/category/introduction"},next:{title:"TouchGFX\u3068\u306f",permalink:"/4.23/ja/docs/introduction/what-is-touchgfx"}},m={},d=[{value:"\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3064\u3044\u3066",id:"about-this-documentation",level:2},{value:"\u5bfe\u8c61\u30e6\u30fc\u30b6",id:"target-user",level:3}],f={toc:d},h="wrapper";function y(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)(h,i({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u30b5\u30a4\u30c8\u3067\u306f\u3001TouchGFX\u30c4\u30fc\u30eb\u304a\u3088\u3073\u4f7f\u7528\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)(c.Z,{url:"https://youtu.be/t0SlRZnERms",mdxType:"YouTube"}),(0,n.kt)("p",null,"TouchGFX\u3092\u521d\u3081\u3066\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4e8b\u524d\u306b\u3054\u78ba\u8a8d\u3044\u305f\u3060\u304d\u6982\u8981\u3092\u628a\u63e1\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u5de6\u30b5\u30a4\u30c9\u306e\u76ee\u6b21\u3092\u4f7f\u7528\u3057\u3066\u3001\u3054\u95a2\u5fc3\u306e\u3042\u308b\u30c8\u30d4\u30c3\u30af\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002 \u53f3\u4e0a\u9685\u306b\u3042\u308b\u691c\u7d22\u6a5f\u80fd\u3082\u3054\u4f7f\u7528\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",i({},{id:"about-this-documentation"}),"\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,"\u672c\u30b5\u30a4\u30c8\u306f\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"what-is-touchgfx"}),(0,n.kt)("strong",{parentName:"a"},"\u306f\u3058\u3081\u306b")),"\uff1aTouchGFX\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff65\u30ac\u30a4\u30c9\u306e\u6982\u8981"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,n.kt)("strong",{parentName:"a"},"\u57fa\u672c\u6982\u5ff5")),"\uff1a\u4e3b\u8981\u306a\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"../development/development-introduction"}),(0,n.kt)("strong",{parentName:"a"},"\u958b\u767a")),"\uff1a\u69cb\u9020\u3084\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3001\u30c4\u30fc\u30eb\u3092\u542b\u3080TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u65b9\u6cd5")),(0,n.kt)("p",null,"Furthermore, the ",(0,n.kt)("a",i({parentName:"p"},{href:"../api/namespacetouchgfx"}),(0,n.kt)("strong",{parentName:"a"},"API"))," and ",(0,n.kt)("a",i({parentName:"p"},{href:"../../academy/academy-introduction"}),(0,n.kt)("strong",{parentName:"a"},"TouchGFX Academy"))," can be accessed from the tabs at the top."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"../api/namespacetouchgfx"}),(0,n.kt)("strong",{parentName:"a"},"API"))," - TouchGFX API with classes and globals."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"../../academy/academy-introduction"}),(0,n.kt)("strong",{parentName:"a"},"TouchGFX Academy"))," - TouchGFX features and -functionalities explained and showcased.")),(0,n.kt)(a.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.webp",noShadow:"true",mdxType:"Figure"}),(0,n.kt)("h3",i({},{id:"target-user"}),"\u5bfe\u8c61\u30e6\u30fc\u30b6"),(0,n.kt)("p",null,"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001C++\u304a\u3088\u3073STM32\u4e0a\u306e\u7d44\u8fbc\u307fGUI\u958b\u767a\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u6280\u80fd\u3092\u6301\u3064\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u8005\u3092\u5bfe\u8c61\u3068\u3057\u3066\u3044\u307e\u3059\u3002 \u7d44\u8fbc\u307fGUI\u958b\u767a\u306e\u521d\u5fc3\u8005\u306e\u65b9\u5411\u3051\u306b\u3001\u300c\u57fa\u672c\u6982\u5ff5\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001TouchGFX\u306e\u958b\u767a\u306b\u304a\u3044\u3066\u8ab0\u3082\u304c\u5186\u6ed1\u306b\u5b66\u7fd2\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u6bb5\u968e\u3092\u8ffd\u3063\u305f\u30ac\u30a4\u30c9\u3084\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3088\u308a\u826f\u3044\u958b\u767a\u30c4\u30fc\u30eb\u3084\u30b5\u30fc\u30d3\u30b9\u3092\u3054\u63d0\u4f9b\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u5f0a\u793e\u3067\u306f\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6539\u5584\u3092\u5b9f\u65bd\u3057\u3066\u3044\u307e\u3059\u3002 \u7406\u89e3\u3067\u304d\u306a\u3044\u5834\u5408\u3001\u3042\u308b\u3044\u306f\u63a2\u3057\u3066\u3044\u308b\u5185\u5bb9\u304c\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u3001",(0,n.kt)(o.Z,{to:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",target:"_blank",mdxType:"Link"},"\u30d5\u30a9\u30fc\u30e9\u30e0"),"\u3067\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u672c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6539\u5584\u306b\u7e4b\u3052\u307e\u3059\u3002"))}y.isMDXComponent=!0}}]);