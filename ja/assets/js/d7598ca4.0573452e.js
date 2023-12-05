"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[72245],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,h=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(32118);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59496),o=n(89588);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const c=a},89588:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=o},57427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>m});n(59496);var r=n(49613),o=n(12822),i=n(86222),a=n(51721);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"widgets-and-containers",title:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca"},p=void 0,s={unversionedId:"development/ui-development/working-with-touchgfx/widgets-and-containers",id:"development/ui-development/working-with-touchgfx/widgets-and-containers",title:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u3067\u6700\u3082\u6839\u5e79\u7684\u306a\u6982\u5ff5\u306e2\u3064\u3092\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002\u305d\u308c\u306f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca\u3067\u3059\u3002 \u3053\u308c\u3089\u306f\u3001\u30e6\u30fc\u30b6\u304cUI\u306e\u958b\u767a\u5168\u4f53\u3092\u901a\u3057\u3066\u4f7f\u7528\u3059\u308b\u69cb\u6210\u8981\u7d20\u306e2\u3064\u3067\u3059\u3002 \u3069\u3061\u3089\u3082TouchGFX\u3067\u63d0\u4f9b\u3055\u308c\u308b\u65e2\u88fd\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u3080\u3068\u540c\u6642\u306b\u3001\u30ab\u30b9\u30bf\u30e0\u5b9f\u88c5\u306e\u4f5c\u6210\u3092\u5341\u5206\u306b\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u30aa\u30fc\u30d7\u30f3\u30a8\u30f3\u30c9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/widgets-and-containers",permalink:"/4.23/ja/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",draft:!1,tags:[],version:"current",frontMatter:{id:"widgets-and-containers",title:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca"},sidebar:"docs",previous:{title:"\u8907\u6570\u306e\u958b\u767a\u8005\u304c\u95a2\u308f\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",permalink:"/4.23/ja/docs/development/ui-development/working-with-touchgfx/multiple-developers"},next:{title:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf",permalink:"/4.23/ja/docs/development/ui-development/working-with-touchgfx/simulator"}},d={},m=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8",id:"widgets",level:2},{value:"\u30b3\u30f3\u30c6\u30ca",id:"containers",level:2}],h={toc:m},g="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,c({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u3067\u6700\u3082\u6839\u5e79\u7684\u306a\u6982\u5ff5\u306e2\u3064\u3092\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002\u305d\u308c\u306f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca\u3067\u3059\u3002 \u3053\u308c\u3089\u306f\u3001\u30e6\u30fc\u30b6\u304cUI\u306e\u958b\u767a\u5168\u4f53\u3092\u901a\u3057\u3066\u4f7f\u7528\u3059\u308b\u69cb\u6210\u8981\u7d20\u306e2\u3064\u3067\u3059\u3002 \u3069\u3061\u3089\u3082TouchGFX\u3067\u63d0\u4f9b\u3055\u308c\u308b\u65e2\u88fd\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u3080\u3068\u540c\u6642\u306b\u3001\u30ab\u30b9\u30bf\u30e0\u5b9f\u88c5\u306e\u4f5c\u6210\u3092\u5341\u5206\u306b\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u30aa\u30fc\u30d7\u30f3\u30a8\u30f3\u30c9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",c({},{id:"widgets"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,r.kt)("p",null,"TouchGFX\u304a\u3088\u3073TouchGFX Designer\u30c4\u30fc\u30eb\u306f\u3001",(0,r.kt)("a",c({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"Text Area"),"\u3001",(0,r.kt)("a",c({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button"),"\u3001",(0,r.kt)("a",c({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"Texture Mapper"),"\u306a\u3069\u306e\u591a\u6570\u306e\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u3001\u30e6\u30fc\u30b6\u306f\u3053\u308c\u3092\u81ea\u7531\u306b\u4f7f\u7528\u3057\u3066UI\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u57fa\u672c\u7684\u306a\u30ec\u30d9\u30eb\u3067\u306f\u3001TouchGFX\u306b\u304a\u3051\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u63cf\u304b\u308c\u3001\u76f8\u4e92\u4f5c\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u4f55\u304b\u306e\u62bd\u8c61\u7684\u306a\u5b9a\u7fa9\u306b\u3059\u304e\u307e\u305b\u3093\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.webp",mdxType:"Figure"},"Image\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u4f7f\u7528\u3059\u308bButton\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,r.kt)("p",null,"TouchGFX Designer\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u306f\u76ee\u7684\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u8ffd\u52a0\u3057\u3001\u5404\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u56fa\u6709\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u597d\u304d\u306a\u3088\u3046\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001TouchGFX\u304b\u3089\u63d0\u4f9b\u3055\u308c\u308b\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b0\u30eb\u30fc\u30d7\u5206\u3051\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"add(widget_instance_name);"),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3042\u308b\u3044\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u8ffd\u52a0\u95a2\u6570\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),"\u306a\u3069\uff09\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30b3\u30f3\u30c6\u30ca\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u8ffd\u52a0\u9806\u5e8f\u306b\u3088\u3063\u3066\u3001Z\u30aa\u30fc\u30c0\u30fc\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002 \u6700\u5f8c\u306b\u8ffd\u52a0\u3055\u308c\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u6700\u524d\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5ea7\u6a19\u306f\u5e38\u306b\u3001\u30eb\u30fc\u30c8\uff65\u30b3\u30f3\u30c6\u30ca\uff08\u30b9\u30af\u30ea\u30fc\u30f3\uff09\u307e\u305f\u306f\u30b3\u30f3\u30c6\u30ca\u306e\u3044\u305a\u308c\u304b\u306e\u89aa\u30ce\u30fc\u30c9\u3092\u57fa\u6e96\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u30e6\u30fc\u30b6\u306f\u56fa\u6709\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u72ec\u81ea\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",c({},{id:"containers"}),"\u30b3\u30f3\u30c6\u30ca"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u306fTouchGFX\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3084\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30c6\u30ca\u306a\u3069\u306e\u5b50\u30ce\u30fc\u30c9\u3092\u683c\u7d0d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Designer\u3067\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u306fWidgets\u30bf\u30d6\u306eContainers\u30ab\u30c6\u30b4\u30ea\u4e0b\u306b\u3042\u308a\u3001\u30c4\u30ea\u30fc\uff65\u30d3\u30e5\u30fc\u3067\u30b3\u30f3\u30c6\u30ca\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3053\u3068\u3067\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30b3\u30f3\u30c6\u30ca\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b50\u306eZ\u65b9\u5411\u306e\u9806\u5e8f\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u306b\u5b50\u304c\u8ffd\u52a0\u3055\u308c\u305f\u9806\u5e8f\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002\u6700\u5f8c\u306b\u8ffd\u52a0\u3055\u308c\u305f\u5b50\u304c\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u6700\u524d\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX\u306b\u304a\u3051\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4f4d\u7f6e\u306f\u305d\u308c\u305e\u308c\u306e\u89aa\u3092\u57fa\u6e96\u306b\u6c7a\u307e\u308b\u306e\u3067\u3001\u89aa\u306e\u30b3\u30f3\u30c6\u30ca\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3059\u308b\u3068\u3001\u305d\u308c\u306b\u5408\u308f\u305b\u3066\u5b50\u3082\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u306f\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u5f62\u72b6\u3068\u4ea4\u308f\u308b\u5b50\u306e\u90e8\u5206\u306e\u307f\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u304c\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b\u69d8\u5b50\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u6700\u521d\u306b\u8868\u793a\u3055\u308c\u308b\u306e\u306f\u30b3\u30f3\u30c6\u30ca\u306e\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3\u3067\u3001\u3053\u306e\u30b3\u30f3\u30c6\u30ca\u306e\u5b50\u304c\u30dc\u30bf\u30f3\u3067\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.webp",mdxType:"Figure"},"\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b\u30b3\u30f3\u30c6\u30ca"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u30e6\u30fc\u30b6\u306f\u56fa\u6709\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u72ec\u81ea\u306e\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);