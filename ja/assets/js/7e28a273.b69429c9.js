"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[72665],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const o=i},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},94790:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const l=a},21100:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const o=i},1166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>g,toc:()=>h});n(59496);var r=n(49613),a=n(89639),l=n(48753),i=n(21100),o=n(94790),d=n(95375),u=n(28128);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"slide-menu",title:"Slide Menu\uff08\u30b9\u30e9\u30a4\u30c9\uff65\u30e1\u30cb\u30e5\u30fc\uff09"},c=void 0,g={unversionedId:"development/ui-development/ui-components/containers/slide-menu",id:"development/ui-development/ui-components/containers/slide-menu",title:"Slide Menu\uff08\u30b9\u30e9\u30a4\u30c9\uff65\u30e1\u30cb\u30e5\u30fc\uff09",description:"TouchGFX\u306eSlide Menu\u306f\u30011\u3064\u306e\u5185\u90e8Container\u30011\u3064\u306eImage\u3001\u304a\u3088\u3073\u30aa\u30d7\u30b7\u30e7\u30f3\u30671\u3064\u306eButton\u3067\u69cb\u6210\u3055\u308c\u308bContainer\u306e\u7279\u6b8a\u5f62\u614b\u3067\u3001\u6298\u308a\u305f\u305f\u307f\u72b6\u614b\u3068\u5c55\u958b\u72b6\u614b\u306e\u9593\u306e\u52d5\u304d\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/slide-menu.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/slide-menu",permalink:"/4.23/ja/docs/development/ui-development/ui-components/containers/slide-menu",draft:!1,tags:[],version:"current",frontMatter:{id:"slide-menu",title:"Slide Menu\uff08\u30b9\u30e9\u30a4\u30c9\uff65\u30e1\u30cb\u30e5\u30fc\uff09"},sidebar:"docs",previous:{title:"Scroll Wheel\uff08\u30b9\u30af\u30ed\u30fc\u30eb\uff65\u30db\u30a4\u30fc\u30eb\uff09",permalink:"/4.23/ja/docs/development/ui-development/ui-components/containers/scroll-wheel"},next:{title:"Progress Indicators",permalink:"/4.23/ja/docs/category/progress-indicators"}},k={},h=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],N={toc:h},b="wrapper";function v(e){var{components:t}=e,n=m(e,["components"]);return(0,r.kt)(b,p({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX\u306eSlide Menu\u306f\u30011\u3064\u306e\u5185\u90e8",(0,r.kt)("a",p({parentName:"p"},{href:"container"}),"Container"),"\u30011\u3064\u306e",(0,r.kt)("a",p({parentName:"p"},{href:"../images/image"}),"Image"),"\u3001\u304a\u3088\u3073\u30aa\u30d7\u30b7\u30e7\u30f3\u30671\u3064\u306e",(0,r.kt)("a",p({parentName:"p"},{href:"../buttons/button"}),"Button"),"\u3067\u69cb\u6210\u3055\u308c\u308b",(0,r.kt)("a",p({parentName:"p"},{href:"container"}),"Container"),"\u306e\u7279\u6b8a\u5f62\u614b\u3067\u3001\u6298\u308a\u305f\u305f\u307f\u72b6\u614b\u3068\u5c55\u958b\u72b6\u614b\u306e\u9593\u306e\u52d5\u304d\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/slide-menu/widget-appearance.webp",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bSlide Menu"),(0,r.kt)("h2",p({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,"Slide Menu\u306f\u3001TouchGFX Designer\u306eContainers\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/slide-menu/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eSlide Menu"),(0,r.kt)("h2",p({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("p",null,"\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Slide Menu\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e",(0,r.kt)("em",{parentName:"td"},"\u540d\u524d\u3002")," Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"Slide Menu\u306e\u30b5\u30a4\u30ba\u306f\u80cc\u666f\u3068\u30dc\u30bf\u30f3\u306e\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Expanding Direction")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Expanding Direction\u306f\u3001Slide Menu\u3092\u5c55\u958b\u3059\u308b\u65b9\u5411\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"State")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"State\u306f\u3001Slide Menu\u306e\u521d\u671f\u72b6\u614b\uff08\u6298\u308a\u305f\u305f\u307f\u307e\u305f\u306f\u5c55\u958b\uff09\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Collapsed: Visible Pixels\u306f\u3001\u6298\u308a\u305f\u305f\u307e\u308c\u305f\u3068\u304d\u306b\u8868\u793a\u3055\u308c\u308b\u30d4\u30af\u30bb\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Expanded: Hidden Pixels\u306f\u3001\u5c55\u958b\u3055\u308c\u305f\u3068\u304d\u306b\u975e\u8868\u793a\u306b\u3059\u308b\u30d4\u30af\u30bb\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Expanded Timeout\u306f\u3001\u5c55\u958b\u3055\u308c\u305f\u72b6\u614b\u304b\u3089\u81ea\u52d5\u7684\u306b\u6298\u308a\u305f\u305f\u307e\u308c\u305f\u72b6\u614b\u306b\u623b\u308b\u307e\u3067\u306e\u6642\u9593\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Background")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Background Image\u306f\u3001\u80cc\u666f\u3068\u4f7f\u7528\u3059\u308b\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Background Location\u306f\u3001 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5ea7\u6a19\u3092\u57fa\u6e96\u306b\u3057\u305f\u80cc\u666f\u753b\u50cf\u306ex\u3001y\u5ea7\u6a19\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Button")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Use Button\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u72b6\u614b\u3092\u5236\u5fa1\u3059\u308b\u305f\u3081\u306b\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Released Image\u306f\u3001\u30dc\u30bf\u30f3\u304c\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u305f\u72b6\u614b\u306e\u3068\u304d\u306b\u4f7f\u7528\u3059\u308b\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Pressed Image\u306f\u3001\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u305f\u72b6\u614b\u306e\u3068\u304d\u306b\u4f7f\u7528\u3059\u308b\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Button Location\u306f\u3001 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5ea7\u6a19\u306b\u5bfe\u3059\u308b\u30dc\u30bf\u30f3\u306ex\u3001y\u5ea7\u6a19\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Easing\u304a\u3088\u3073Easing Option\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u4f7f\u7528\u3059\u308b\u30a4\u30fc\u30b8\u30f3\u30b0\u5f0f\uff08\u52d5\u304d\u306b\u7de9\u6025\u3092\u3064\u3051\u308b\uff09\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Duration\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u304b\u304b\u308b\u6642\u9593\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",p({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Slide Menu\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",p({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u56fa\u6709\u306e\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Change State of Slide Menu")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Slide Menu\u306e\u72b6\u614b\u3092\u3001\u6298\u308a\u305f\u305f\u307f\u72b6\u614b\u307e\u305f\u306f\u5c55\u958b\u72b6\u614b\u306b\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Reset Timer of Slide Menu")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Slide Menu\u306e\u72b6\u614b\u3092\u3001\u81ea\u52d5\u7684\u306b\u6298\u308a\u305f\u305f\u307f\u306b\u623b\u3059\u305f\u3081\u306e\u30bf\u30a4\u30de\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,r.kt)("h3",p({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30c8\u30ea\u30ac")),(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Slide Menu animation ended")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"1\u3064\u306e\u72b6\u614b\u304b\u3089\u5225\u306e\u72b6\u614b\u3078\u306eSlide Menu\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u7d42\u4e86\u3057\u307e\u3057\u305f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Slide Menu state changed")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Slide Menu\u306e\u72b6\u614b\u304c\u5909\u66f4\u3055\u308c\u307e\u3057\u305f\u3002")))),(0,r.kt)("h2",p({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,r.kt)("p",null,"Slide Menu\u306f",(0,r.kt)("a",p({parentName:"p"},{href:"container"}),"Container"),"\u30bf\u30a4\u30d7\u3067\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u63cf\u753b\u30c1\u30a7\u30fc\u30f3\u306b\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002 \u3053\u306e\u305f\u3081\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u4e3b\u306b\u5b50\u306e\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",p({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",p({},{id:"examples"}),"\u4f8b"),(0,r.kt)("h3",p({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bSlide Menu\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    slideMenuName.setup(touchgfx::SlideMenu::EAST,\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BACKGROUND_ID),\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BUTTON_ID),\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BUTTON_ID),\n        0, 0, 49, 111);\n    slideMenuName.setState(touchgfx::SlideMenu::COLLAPSED);\n    slideMenuName.setVisiblePixelsWhenCollapsed(24);\n    slideMenuName.setHiddenPixelsWhenExpanded(0);\n    slideMenuName.setAnimationEasingEquation(touchgfx::EasingEquations::circEaseInOut);\n    slideMenuName.setAnimationDuration(18);\n    slideMenuName.setExpandedStateTimeout(180);\n    slideMenuName.setXY(0, 0);\n\n    add(slideMenuName);\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001SlideMenu\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"Slide MenuName.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",p({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,r.kt)("p",null,"Slide Menu\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/slide-menu-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eSlide Menu Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,r.kt)("h2",p({},{id:"api-reference"}),"API\u53c2\u7167"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_slide_menu",mdxType:"Link"},"SlideMenu\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}v.isMDXComponent=!0}}]);