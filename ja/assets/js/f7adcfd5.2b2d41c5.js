"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1817],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const l=r},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const p=i},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const l=r},94790:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}const l=r},21100:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const p=i},85786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>N,frontMatter:()=>u,metadata:()=>m,toc:()=>k});n(59496);var a=n(49613),r=n(89639),l=n(48753),i=n(21100),p=n(94790),o=n(95375),s=n(28128);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"shape",title:"Shape\uff08\u30b7\u30a7\u30fc\u30d7\uff09"},h=void 0,m={unversionedId:"development/ui-development/ui-components/shapes/shape",id:"development/ui-development/ui-components/shapes/shape",title:"Shape\uff08\u30b7\u30a7\u30fc\u30d7\uff09",description:"Shape\u306b\u3088\u3063\u3066\u30e6\u30fc\u30b6\u306f\u3001\u4efb\u610f\u306e\u6570\u306e\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u4efb\u610f\u306e\u5f62\u72b6\u3092\u63cf\u753b\u3067\u304d\u307e\u3059\u3002\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3084\u56de\u8ee2\u3082\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/shapes/shape.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/shape",permalink:"/4.23/ja/docs/development/ui-development/ui-components/shapes/shape",draft:!1,tags:[],version:"current",frontMatter:{id:"shape",title:"Shape\uff08\u30b7\u30a7\u30fc\u30d7\uff09"},sidebar:"docs",previous:{title:"Circle\uff08\u30b5\u30fc\u30af\u30eb\uff09",permalink:"/4.23/ja/docs/development/ui-development/ui-components/shapes/circle"},next:{title:"Miscellaneous",permalink:"/4.23/ja/docs/category/miscellaneous"}},g={},k=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],f={toc:k},v="wrapper";function N(e){var{components:t}=e,n=d(e,["components"]);return(0,a.kt)(v,c({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shape\u306b\u3088\u3063\u3066\u30e6\u30fc\u30b6\u306f\u3001\u4efb\u610f\u306e\u6570\u306e\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u4efb\u610f\u306e\u5f62\u72b6\u3092\u63cf\u753b\u3067\u304d\u307e\u3059\u3002\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3084\u56de\u8ee2\u3082\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/shape/widget-appearance.webp",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bShape"),(0,a.kt)("h2",c({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,a.kt)("p",null,"Shape\u306f\u3001TouchGFX Designer\u306eShapes\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/shape/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eShape"),(0,a.kt)("h2",c({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("p",null,"TouchGFX Designer\u306eShape\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Image & Color")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Image\u307e\u305f\u306fColor\u306f\u3001Shape\u306b\u8868\u793a\u3055\u308c\u308b\u8272\u307e\u305f\u306f\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Transform")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Angle\u306f\u3001Origin\u30dd\u30a4\u30f3\u30c8\u3092\u4e2d\u5fc3\u3068\u3057\u3066Shape\u306e\u56de\u8ee2\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Scale X\u304a\u3088\u3073Scale Y\u306f\u3001Origin\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u6c34\u5e73 / \u5782\u76f4\u65b9\u5411\u306b\u30b7\u30a7\u30fc\u30d7\u306e\u30b9\u30b1\u30fc\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"Origin X\u304a\u3088\u3073Origin Y\u306f\u3001Points\u306e\u539f\u70b9\u3068\u3059\u308b\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Points")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Points\u306f\u3001\u76ee\u7684\u306e\u30b7\u30a7\u30fc\u30d7\u3092\u4f5c\u6210\u3059\u308b\u30dd\u30a4\u30f3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\u30dd\u30a4\u30f3\u30c8\u3054\u3068\u306b\u500b\u5225\u306bXY\u5ea7\u6a19\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Alpha\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f\u30010\uff5e255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u5b9f\u884c\u6642\u306b\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,a.kt)("h2",c({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Shape\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",c({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u56fa\u6709\u306e\u30a2\u30af\u30b7\u30e7\u30f3")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Scale Shape")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u56fa\u5b9a\u30b5\u30a4\u30ba\u306b\u3001\u307e\u305f\u306f\u73fe\u5728\u306e\u30b5\u30a4\u30ba\u3092\u57fa\u6e96\u3068\u3057\u3066Shape\u3092\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Rotate Shape")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u56fa\u5b9a\u306e\u89d2\u5ea6\u306b\u3001\u307e\u305f\u306f\u73fe\u5728\u306e\u89d2\u5ea6\u3092\u57fa\u6e96\u3068\u3059\u308b\u89d2\u5ea6\u306bShape\u3092\u56de\u8ee2\u3055\u305b\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Resize widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,a.kt)("h3",c({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,a.kt)("p",null,"Shape\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,a.kt)("h2",c({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,a.kt)("p",null,"Shape\u306fCanvasWidget\u306a\u306e\u3067\u3001\u76ee\u7684\u306e\u30b7\u30a7\u30fc\u30d7\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u5927\u304d\u304f\u4f9d\u5b58\u3057\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001Shape\u306f\u3001\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u8981\u6c42\u306e\u53b3\u3057\u3044\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"CanvasWidget\u306e\u63cf\u753b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,a.kt)("a",c({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",c({},{id:"examples"}),"\u4f8b"),(0,a.kt)("h3",c({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,a.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bShape\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    shape.setPosition(140, 36, 200, 200);\n    shape.setOrigin(100.000f, 100.000f);\n    shape.setScale(1.000f, 1.000f);\n    shape.setAngle(0.000f);\n    shapePainter.setColor(touchgfx::Color::getColorFromRGB(60, 180, 230));\n    shape.setPainter(shapePainter);\n    const touchgfx::AbstractShape::ShapePoint<float> shapePoints[4] = { { 0.000f, -100.000f }, { 100.000f, 0.000f }, { 0.000f, 100.000f }, { -100.000f, 0.000f } };\n    shape.setShape(shapePoints);\n\n    add(shape);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(i.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001Shape\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"shape.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h3",c({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,a.kt)("p",null,"\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30e9\u30f3\u30c0\u30e0\uff65\u30c7\u30fc\u30bf\u3067\u6e80\u305f\u3055\u308c\u3066\u3044\u308b\u30b7\u30a7\u30fc\u30d7\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1VIEW_HPP\n#define SCREEN1VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/canvas/Shape.hpp>\n#include <touchgfx/widgets/canvas/PainterRGB888.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Shape<100> shape;\n    touchgfx::PainterRGB888 shapePainter;\nprotected:\n    void fillData(int maxLength);\n};\n\n#endif // SCREEN1VIEW_HPP\n")),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    shape.setPosition(0, 0, 480, 272);\n    shape.setOrigin(0.000f, 272.000f);\n    shapePainter.setColor(touchgfx::Color::getColorFromRGB(0, 171, 223));\n    shape.setPainter(shapePainter);\n    fillData(100);\n    add(shape);\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::fillData(int maxLength)\n{\n    float highestX = 0.000f;\n    for (int i = 0; i < maxLength - 1; ++i)\n    {\n        float y = static_cast <float> (rand()) / (static_cast <float> (RAND_MAX/272));\n        float x = highestX + static_cast <float> (rand()) /( static_cast <float> (RAND_MAX/((highestX + 10.000f)-highestX)));\n        highestX = x;\n        shape.setCorner(i, CWRUtil::toQ5<float>(x), CWRUtil::toQ5<float>(-y));\n    }\n    shape.setCorner(maxLength - 1, CWRUtil::toQ5<float>(highestX), CWRUtil::toQ5<float>(0));\n    shape.updateAbstractShapeCache();\n}\n")),(0,a.kt)("h2",c({},{id:"api-reference"}),"API\u53c2\u7167"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_shape",mdxType:"Link"},"Shape\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}N.isMDXComponent=!0}}]);