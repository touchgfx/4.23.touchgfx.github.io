"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[85851],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28128:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const a=i},89639:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496),i=t(7029);const a=function(e){const n=e.noShadow||!1,t=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children))}},96151:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=i},94790:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(59496);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const a=i},49018:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(59496),i=t(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const l=o},21100:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(59496),i=t(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}const l=o},17778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>h});t(59496);var r=t(49613),i=t(89639),a=t(49018),o=t(21100),l=t(28128),c=t(94790);function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"code-structure",title:"\u30b3\u30fc\u30c9\u69cb\u9020"},d=void 0,m={unversionedId:"development/ui-development/software-architecture/code-structure",id:"development/ui-development/software-architecture/code-structure",title:"\u30b3\u30fc\u30c9\u69cb\u9020",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u304b\u3089\u30e6\u30fc\u30b6\u304c\u8a18\u8ff0\u3059\u308b\u62e1\u5f35\u30b3\u30fc\u30c9\u307e\u3067\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/code-structure.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/code-structure",permalink:"/4.23/ja/docs/development/ui-development/software-architecture/code-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"code-structure",title:"\u30b3\u30fc\u30c9\u69cb\u9020"},sidebar:"docs",previous:{title:"\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u6982\u5ff5",permalink:"/4.23/ja/docs/development/ui-development/software-architecture/screen-definition-and-mvp"},next:{title:"Working with TouchGFX",permalink:"/4.23/ja/docs/category/working-with-touchgfx"}},g={},h=[{value:"\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"generated-code-vs-user-code",level:2},{value:"TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb",id:"files-generated-by-touchgfx-designer",level:2},{value:"\u4f8b",id:"example",level:2},{value:"TouchGFX Designer\u306e\u30d3\u30e5\u30fc",id:"touchgfx-designer-view",level:3},{value:"\u30ec\u30a4\u30e4",id:"layers",level:3},{value:"\u30b3\u30fc\u30c9",id:"code",level:3}],k={toc:h},v="wrapper";function f(e){var{components:n}=e,t=u(e,["components"]);return(0,r.kt)(v,p({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u304b\u3089\u30e6\u30fc\u30b6\u304c\u8a18\u8ff0\u3059\u308b\u62e1\u5f35\u30b3\u30fc\u30c9\u307e\u3067\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u9020\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",p({},{id:"generated-code-vs-user-code"}),"\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f\u3001\u30e6\u30fc\u30b6\u304c\u8a18\u8ff0\u3057\u305f\u30b3\u30fc\u30c9\u3068\u5b8c\u5168\u306b\u5207\u308a\u96e2\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u3001\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"generated/gui_generated"),"\u30d5\u30a9\u30eb\u30c0\u306b\u914d\u7f6e\u3055\u308c\u3001\u30e6\u30fc\u30b6\u304c\u8a18\u8ff0\u3057\u305f\u30b3\u30fc\u30c9\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"gui"),"\u30d5\u30a9\u30eb\u30c0\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gui_generated"),"\u30b3\u30fc\u30c9\u306f\u3001\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\uff65\u30af\u30e9\u30b9\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002 \u57fa\u5e95\u30af\u30e9\u30b9\u306b\u306f\u3001TouchGFX Designer\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\uff65\u30b3\u30fc\u30c9\u304c\u542b\u307e\u308c\u307e\u3059\u3002 \u6b21\u306e\u30af\u30e9\u30b9\u56f3\u306f\u30af\u30e9\u30b9\u306e\u95a2\u9023\u6027\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels.webp",mdxType:"Figure"},"\u30a8\u30f3\u30b8\u30f3\uff65\u30af\u30e9\u30b9\u3001\u751f\u6210\u30af\u30e9\u30b9\u3001\u30e6\u30fc\u30b6\uff65\u30af\u30e9\u30b9\u306e\u968e\u5c64"),(0,r.kt)("p",null,"\u4e0a\u306b\u793a\u3059\u3088\u3046\u306b\u3001TouchGFX Designer\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30013\u3064\u306e\u7570\u306a\u308b\u30b3\u30fc\u30c9\uff65\u30ec\u30a4\u30e4\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Engine\uff08\u30a8\u30f3\u30b8\u30f3\uff09"),": \u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u306fTouchGFX\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u308b\u6a19\u6e96\u306e\u30af\u30e9\u30b9\u3067\u3059\u3002 \u751f\u6210\u30af\u30e9\u30b9\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generated\uff08\u751f\u6210\uff09"),": \u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u3068\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306f\u3001TouchGFX Designer\u3067\u30b3\u30fc\u30c9\u304c\u751f\u6210\u3055\u308c\u308b\u3068\u5e38\u306b\u518d\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u3068\u30d5\u30a1\u30a4\u30eb\u306f\u7de8\u96c6\u3057\u3066\u306f\u306a\u3089\u305a\u3001\u5909\u66f4\u306f\u30b3\u30fc\u30c9\uff65\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u6b21\u56de\u5b9f\u884c\u6642\u306b\u3059\u3079\u3066\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002 \u30e6\u30fc\u30b6\uff65\u30af\u30e9\u30b9\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User\uff08\u30e6\u30fc\u30b6\uff09"),": \u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u306f\u30e6\u30fc\u30b6\u304c\u8a18\u8ff0\u3059\u308b\u30b3\u30fc\u30c9\u306e\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002 \u3053\u306e\u30ec\u30a4\u30e4\u306b\u306f\u3001\u30e6\u30fc\u30b6\u304c\u4efb\u610f\u306e\u30b3\u30fc\u30c9\u3092\u81ea\u7531\u306b\u914d\u7f6e\u3067\u304d\u307e\u3059\u3002 \u30e6\u30fc\u30b6\uff65\u30af\u30e9\u30b9\u306f\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u304c\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u5909\u66f4\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002 ",(0,r.kt)("em",{parentName:"li"},"\u30e6\u30fc\u30b6\u306b\u5c5e\u3059\u308b\u3082\u306e\u3067\u3059\u3002"))),(0,r.kt)(a.Z,{mdxType:"Note"},"TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001\u30aa\u30fc\u30d7\u30f3\u306a\u306e\u3067\u30e6\u30fc\u30b6\u304c\u4f5c\u6210\u3059\u308b\u5185\u5bb9\u306b\u5236\u9650\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u4f5c\u6210\u3057\u305f\u3082\u306e\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3001\u30a8\u30d5\u30a7\u30af\u30c8\u306a\u3069\uff09\u304cTouchGFX Designer\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u305d\u308c\u3092\u30e6\u30fc\u30b6\uff65\u30af\u30e9\u30b9\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002 TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f\u3001\u8a2d\u8a08\u4e0a\u3001\u30e6\u30fc\u30b6\u306b\u3088\u308bTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u65b9\u6cd5\u3092\u3001\u5236\u9650\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",p({},{id:"files-generated-by-touchgfx-designer"}),"TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("p",null,"\u539f\u5247\u3068\u3057\u3066\u3001TouchGFX Designer\u306fTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"generated"),"\u30d5\u30a9\u30eb\u30c0\u5185\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u518d\u751f\u6210",(0,r.kt)("em",{parentName:"p"},"\u306e\u307f"),"\u3092\u884c\u3046\u306e\u3067\u3001\u30e6\u30fc\u30b6\u306f\u3053\u308c\u3089\u3092\u7de8\u96c6\u3057\u306a\u3044\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u4e0a\u66f8\u304d\u3055\u308c\u3066\u3057\u307e\u3046\u304b\u3089\u3067\u3059\u3002 \u305f\u3060\u3057\u3001TouchGFX Designer\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u306b\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"application.config"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"simulator/main.cpp"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images/__designer"),"\u306b\u3042\u308b\u30b9\u30ad\u30f3\uff65\u30a4\u30e1\u30fc\u30b8\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"assets/videos/__designer"),"\u306b\u3042\u308b\u30b5\u30f3\u30d7\u30eb\uff65\u30d3\u30c7\u30aa\u306a\u3069\uff09\u304c\u898b\u3064\u304b\u3089\u306a\u3051\u308c\u3070\u3001\u305d\u308c\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u5b9f\u969b\u306b\u3001TouchGFX Designer\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u3055\u3048\u3042\u308c\u3070\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u751f\u6210\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u3001\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8a18\u8ff0\u3057\u305f",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx"),"\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gui"),"\u30d5\u30a9\u30eb\u30c0\u306b\u914d\u7f6e\u3055\u308c\u305f\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\uff08\u3042\u308b\u5834\u5408\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/images"),"\u30d5\u30a9\u30eb\u30c0\u306b\u914d\u7f6e\u3055\u308c\u305f\u30e6\u30fc\u30b6\u753b\u50cf\uff08\u3042\u308b\u5834\u5408\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/texts/texts.xml"),"\u30d5\u30a1\u30a4\u30eb\u306b\u914d\u7f6e\u3055\u308c\u305f\u30c6\u30ad\u30b9\u30c8\uff08\u3042\u308b\u5834\u5408\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/fonts"),"\u30d5\u30a9\u30eb\u30c0\u306b\u914d\u7f6e\u3055\u308c\u305f\u30d5\u30a9\u30f3\u30c8\uff08\u3042\u308b\u5834\u5408\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/videos"),"\u30d5\u30a9\u30eb\u30c0\u306b\u914d\u7f6e\u3055\u308c\u305f\u30d3\u30c7\u30aa\uff08\u3042\u308b\u5834\u5408\uff09")),(0,r.kt)(o.Z,{mdxType:"Tip"},"Git\u306a\u3069\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u5b9f\u969b\u306b\u306f\u4e0a\u8a18\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u307f\u3092\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u6b8b\u308a\u306fTouchGFX Designer\u305d\u306e\u3082\u306e\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",p({},{id:"example"}),"\u4f8b"),(0,r.kt)("p",null,"\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u306e\u4e21\u65b9\u304c\u3042\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u3063\u3066\u3001\u4e0a\u3067\u8aac\u660e\u3057\u305f\u5185\u5bb9\u3092\u5177\u4f53\u7684\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",p({},{id:"touchgfx-designer-view"}),"TouchGFX Designer\u306e\u30d3\u30e5\u30fc"),(0,r.kt)("p",null,"\u6b21\u306e\u4f8b\u306f1\u753b\u9762\u306e\u307f\u3067\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreen"),"\u3068\u3044\u3046\u30b9\u30af\u30ea\u30fc\u30f3\u306f\u3001",(0,r.kt)("a",p({parentName:"p"},{href:"../ui-components/shapes/box"}),"\u30dc\u30c3\u30af\u30b9"),(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"\u3068",(0,r.kt)("a",p({parentName:"p"},{href:"../ui-components/buttons/button"}),"\u30dc\u30bf\u30f3"),(0,r.kt)("inlineCode",{parentName:"p"},"button1"),"\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"button1"),"\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u3001\u4eee\u60f3\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor()"),"\u3092\u547c\u3073\u51fa\u3059\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/designer-application-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u5fc5\u305a\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\uff65\u30dc\u30c3\u30af\u30b9\u306e\u8272\u304c\u65b0\u3057\u3044\u30e9\u30f3\u30c0\u30e0\u306a\u8272\u306b\u5909\u66f4\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002 \u72ec\u81ea\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30fc\u30c9\u306e\u4f5c\u6210\u65b9\u6cd5\u306e\u5b9f\u4f8b\u3092\u793a\u3059\u305f\u3081\u306b\u3001\u3053\u306e\u52d5\u4f5c\u3092\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",p({},{id:"layers"}),"\u30ec\u30a4\u30e4"),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u306b\u5fc5\u8981\u306a\u3055\u307e\u3056\u307e\u306a\u30af\u30e9\u30b9\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.webp",mdxType:"Figure"},"\u30af\u30e9\u30b9\u306e\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),"\u306f\u751f\u6210\u3055\u308c\u305f\u30b9\u30da\u30fc\u30b9\u5185\u306b\u3042\u308a\u3001\u4ee5\u4e0b\u3092\u610f\u5473\u3057\u307e\u3059\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u3053\u308c\u3089\u306fTouchGFX Designer\u3067\u5909\u66f4\u304c\u884c\u308f\u308c\u308b\u3068\u3001\u5fc5\u305a\u518d\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u304c\u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u3092\u7de8\u96c6\u3057\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenView"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenPresenter"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplication"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeap"),"\u306f\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u306e\u30b9\u30da\u30fc\u30b9\u306b\u4f5c\u6210\u3055\u308c\u3001\u4ee5\u4e0b\u3092\u610f\u5473\u3057\u307e\u3059\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u3053\u308c\u3089\u306fTouchGFX Designer\u3067\u5909\u66f4\u304c\u884c\u308f\u308c\u3066\u3082\u3001\u518d\u751f\u6210\u3055\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u306f\u3053\u3053\u306b\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30fc\u30c9\u3092\u81ea\u7531\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"box1"),"\u3068",(0,r.kt)("inlineCode",{parentName:"li"},"button1"),"\u306e\u3059\u3079\u3066\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306f\u3001\u751f\u6210\u3055\u308c\u305f\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30b9\u30af\u30ea\u30fc\u30f3\u9593\u306e\u9077\u79fb\u306e\u305f\u3081\u306e\u3059\u3079\u3066\u306e\u95a2\u6570\u306f\u3001\u751f\u6210\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u57fa\u5e95\u30af\u30e9\u30b9",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"\u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9069\u5207\u306a\u91cf\u306e\u30e1\u30e2\u30ea\u3092\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306e\u3001\u3059\u3079\u3066\u306e\u8a18\u9332\u306f\u3001\u751f\u6210\u3055\u308c\u305f\u30d2\u30fc\u30d7\u306e\u57fa\u5e95\u30af\u30e9\u30b9",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),"\u306b\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u306f\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\uff65\u30af\u30e9\u30b9\u3092\u81ea\u7531\u306b\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u3055\u3089\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"\u306e\u8272\u3092\u5b9f\u969b\u306b\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u95a2\u6570\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",p({},{id:"code"}),"\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\uff65\u30d9\u30fc\u30b9\u306e\u30b3\u30fc\u30c9\u3092\u898b\u3066\u307f\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u30dc\u30c3\u30af\u30b9\u3068\u30dc\u30bf\u30f3\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002 \u307e\u305f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"buttonCallbackHandler"),"\u5185\u3067\u3001\u4eee\u60f3\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3066\u547c\u3073\u51fa\u3057\u3066\u3044\u308b\u306e\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u304c\u3001\u73fe\u6642\u70b9\u3067\u3053\u306e\u95a2\u6570\u306f\u4f55\u3082\u5b9f\u884c\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{27-37}","{27-37}":!0}),'/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <touchgfx/Color.hpp>\n#include "BitmapDatabase.hpp"\n\nMyScreenViewBase::MyScreenViewBase() :\n    buttonCallback(this, &MyScreenViewBase::buttonCallbackHandler)\n{\n    box1.setPosition(0, 0, 800, 480);\n    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    button1.setXY(155, 106);\n    button1.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n    button1.setAction(buttonCallback);\n\n    add(box1);\n    add(button1);\n}\n\nvoid MyScreenViewBase::setupScreen()\n{\n\n}\n\nvoid MyScreenViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &button1)\n    {\n        //Interaction1\n        //When button1 clicked call virtual function\n        //Call setRandomColor\n        setRandomColor();\n    }\n}\n')),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u898b\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u306e\u5ba3\u8a00\u3068\u3001\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u5185\u3067\u3053\u306e\u95a2\u6570\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u3066\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306e\u547d\u4ee4\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#ifndef MYSCREENVIEWBASE_HPP\n#define MYSCREENVIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n#include <touchgfx/widgets/Button.hpp>\n\nclass MyScreenViewBase : public touchgfx::View<MyScreenPresenter>\n{\npublic:\n    MyScreenViewBase();\n    virtual ~MyScreenViewBase() {}\n    virtual void setupScreen();\n\n    /*\n     * Virtual Action Handlers\n     */\n    virtual void setRandomColor()\n    {\n        // Override and implement this function in MyScreen\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box box1;\n    touchgfx::Button button1;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<MyScreenViewBase, const touchgfx::AbstractButton&> buttonCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void buttonCallbackHandler(const touchgfx::AbstractButton& src);\n\n};\n\n#endif // MYSCREENVIEWBASE_HPP\n")),(0,r.kt)("p",null,"\u3067\u306f\u3001\u3053\u308c\u3092\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002 \u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u306e\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView.hpp"),"\u306b\u79fb\u52d5\u3057\u3066\u3001\u95a2\u6570\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{14}","{14}":!0}),"#ifndef MYSCREENVIEW_HPP\n#define MYSCREENVIEW_HPP\n\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n\nclass MyScreenView : public MyScreenViewBase\n{\npublic:\n    MyScreenView();\n    virtual ~MyScreenView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void setRandomColor();\nprotected:\n};\n\n#endif // MYSCREENVIEW_HPP\n")),(0,r.kt)("p",null,"\u6b21\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView"),"\u306ecpp\u30d5\u30a1\u30a4\u30eb\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor"),"\u306e\u5b9f\u969b\u306e\u52d5\u4f5c\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/gui/src/my_screen/MyScreenView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{19-23}","{19-23}":!0}),"#include <gui/myscreen_screen/MyScreenView.hpp>\n#include <touchgfx/Color.hpp>\n#include <stdlib.h>\n\nMyScreenView::MyScreenView()\n{\n\n}\n\nvoid MyScreenView::setupScreen()\n{\n    MyScreenViewBase::setupScreen();\n}\n\nvoid MyScreenView::tearDownScreen()\n{\n    MyScreenViewBase::tearDownScreen();\n}\n\nvoid MyScreenView::setRandomColor()\n{\n    box1.setColor(touchgfx::Color::getColorFromRGB(rand()&0xff, rand()&0xff, rand()&0xff));\n    box1.invalidate();\n}\n")),(0,r.kt)("p",null,"\u3053\u3053\u3067\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3057\u3066\u307f\u308b\u3068\u3001\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u306e\u4e21\u65b9\u3092\u6d3b\u7528\u3057\u3066\u30b7\u30f3\u30d7\u30eb\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u6b63\u5e38\u306b\u4f5c\u6210\u3067\u304d\u305f\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u305f\u3073\u306b\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\uff65\u30dc\u30c3\u30af\u30b9\u306e\u8272\u304c\u30e9\u30f3\u30c0\u30e0\u306b\u5909\u308f\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/simulator-random-color.webp",mdxType:"Figure"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u304d\u3092\u793a\u3059\u30b7\u30df\u30e5\u30ec\u30fc\u30bf"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u3082\u3061\u308d\u3093\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u306f\u306a\u3044\u306e\u3067\u3059\u304c\u3001\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u6642\u9593\u3092\u5927\u5e45\u306b\u77ed\u7e2e\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u5fc5\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u624b\u52d5\u3067\u8ffd\u52a0\u3057\u3066\u3044\u304f\u65e7\u6765\u306e\u65b9\u6cd5\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u30df\u30c3\u30af\u30b9\uff65\u30a2\u30f3\u30c9\uff65\u30de\u30c3\u30c1\uff08\u5fc5\u8981\u306a\u6a5f\u80fd\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u5b9f\u884c\u3059\u308b\u3053\u3068\uff09\u3082\u53ef\u80fd\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001TouchGFX Designer\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u306b\u306f\u3001 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"gotoXYZ")," \u95a2\u6570\u3092 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendApplication")," \u30af\u30e9\u30b9\u306b\u8ffd\u52a0\u3057\u3066\u3001\u671b\u3080\u30b9\u30af\u30ea\u30fc\u30f3\u3067\u5fc5\u8981\u306a\u30d3\u30e5\u30fc\u3001\u30d7\u30ec\u30bc\u30f3\u30bf\u3001\u30c8\u30e9\u30f3\u30b8\u30b7\u30e7\u30f3\u3092 ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendHeap"),"\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);