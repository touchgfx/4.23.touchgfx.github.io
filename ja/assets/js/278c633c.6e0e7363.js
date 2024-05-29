"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[24377],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28128:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),a=r(7029);const l=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const i=o},96151:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},94790:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){return n.createElement("code",null,this.props.children)}}const l=a},21100:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const i=o},91622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>g,toc:()=>h});r(59496);var n=r(49613),a=r(89639),l=r(48753),o=r(21100),i=r(94790),s=r(95375),p=r(28128);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"text-progress",title:"Text Progress\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09"},m=void 0,g={unversionedId:"development/ui-development/ui-components/progress-indicators/text-progress",id:"development/ui-development/ui-components/progress-indicators/text-progress",title:"Text Progress\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09",description:"Text Progress\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u6841\u6570\u306e\u6570\u5024\u3067\u9032\u6357\u72b6\u6cc1\u3092\u8868\u793a\u3057\u307e\u3059\u3002 \u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9Image\uff08\u753b\u50cf\uff09\u4e0a\u3067TextArea\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\uff09\u3092\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3001\u73fe\u5728\u306e\u9032\u6357\u72b6\u6cc1\u3092\u793a\u3057\u307e\u3059\u3002 \u8272\u3001\u30a2\u30eb\u30d5\u30a1\u5024\u3001\u304a\u3088\u3073\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u306b\u5408\u3046\u3088\u3046\u306b\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u3055\u307e\u3056\u307e\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\uff08\u4f4d\u7f6e\u3084\u30b5\u30a4\u30ba\u306a\u3069\uff09\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/text-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/text-progress",permalink:"/4.23/ja/docs/development/ui-development/ui-components/progress-indicators/text-progress",draft:!1,tags:[],version:"current",frontMatter:{id:"text-progress",title:"Text Progress\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09"},sidebar:"docs",previous:{title:"Image Progress\uff08\u753b\u50cf\u30d7\u30ed\u30b0\u30ec\u30b9\uff09",permalink:"/4.23/ja/docs/development/ui-development/ui-components/progress-indicators/image-progress"},next:{title:"Line Progress\uff08\u30e9\u30a4\u30f3\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09",permalink:"/4.23/ja/docs/development/ui-development/ui-components/progress-indicators/line-progress"}},k={},h=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],v={toc:h},N="wrapper";function b(e){var{components:t}=e,r=d(e,["components"]);return(0,n.kt)(N,u({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Text Progress\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u6841\u6570\u306e\u6570\u5024\u3067\u9032\u6357\u72b6\u6cc1\u3092\u8868\u793a\u3057\u307e\u3059\u3002 \u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9",(0,n.kt)("a",u({parentName:"p"},{href:"../images/image"}),"Image\uff08\u753b\u50cf\uff09"),"\u4e0a\u3067",(0,n.kt)("a",u({parentName:"p"},{href:"../miscellaneous/text-area"}),"TextArea\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\uff09"),"\u3092\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3001\u73fe\u5728\u306e\u9032\u6357\u72b6\u6cc1\u3092\u793a\u3057\u307e\u3059\u3002 \u8272\u3001\u30a2\u30eb\u30d5\u30a1\u5024\u3001\u304a\u3088\u3073\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u306b\u5408\u3046\u3088\u3046\u306b\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u3055\u307e\u3056\u307e\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\uff08\u4f4d\u7f6e\u3084\u30b5\u30a4\u30ba\u306a\u3069\uff09\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-progress/widget-appearance.webp",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bText Progress"),(0,n.kt)("h2",u({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,n.kt)("p",null,"Text Progress\u306f\u3001TouchGFX Designer\u306eProgress Indicators\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-progress/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eText Progress"),(0,n.kt)("h2",u({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,n.kt)("p",null,"TouchGFX Designer\u306eText Progress\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"Text Progress\u306e\u30b5\u30a4\u30ba\u306f\u3001\u9078\u629e\u3057\u305f\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Style\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e8b\u524d\u5b9a\u7fa9\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u9078\u629e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u4e8b\u524d\u5b9a\u7fa9\u3055\u308c\u305f\u5024\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",null),"\u3053\u308c\u3089\u306e\u30b9\u30bf\u30a4\u30eb\u306b\u306f\u3001\u81ea\u7531\u306b\u4f7f\u7528\u3067\u304d\u308b\u753b\u50cf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Background\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID\u306f\u3001\u4f7f\u7528\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u81ea\u52d5\u751f\u6210\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001ID\u306b\u306f'Auto-generated'\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),'Translation\u306f\u3001\u8868\u793a\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\uff65\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9"',"<","\\",">",' %"\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u81ea\u52d5\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u4f5c\u6210\u3055\u308c\u305f\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u306b\u306f\u3001\u9032\u6357\u72b6\u6cc1\u306e\u8a2d\u5b9a\u306b\u9069\u5408\u3057\u305f\u6570\u5024\u304c\u5165\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 Text Progress\u304c\u6b63\u3057\u304f\u6a5f\u80fd\u3059\u308b\u306b\u306f\u3001\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u304c\u5fc5\u9808\u3067\u3059\u304c\u3001\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u306e\u524d\u5f8c\u306b\u306f\u4efb\u610f\u306e\u4ed6\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u30bb\u30c3\u30c8\u3067\u304d\u307e\u3059\u3002',(0,n.kt)("br",null),(0,n.kt)("br",null),"Typography\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Alignment\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u6c34\u5e73\u65b9\u5411\u306e\u914d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"\u30c6\u30ad\u30b9\u30c8\u8a2d\u5b9a\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",u({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"\u30c6\u30ad\u30b9\u30c8\u3068\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Text Position & Size")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u306eText Progress\u306e\u4f4d\u7f6e\u3092\u57fa\u6e96\u3068\u3057\u3066\u9032\u6357\u30c6\u30ad\u30b9\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u9032\u6357\u30c6\u30ad\u30b9\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Range Min\u304a\u3088\u3073Range Max<\u306f\u3001\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u6700\u5c0f\u304a\u3088\u3073\u6700\u5927\u6574\u6570\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Initial\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u521d\u671f\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002Steps Total\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u65b0\u3057\u3044\u5024\u3092\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u3068\u304d\u306e\u9593\u9694\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u9032\u6357\u30920%\u300110%\u300120%\u3001...100%\u3068\u3044\u3046\u7c92\u5ea6\u3067\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u30c8\u30fc\u30bf\u30eb\u5024\u306f10\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Steps Min\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u793a\u3059\u6700\u5c0f\u30b9\u30c6\u30c3\u30d7\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Number of Decimals\u306f\u3001\u9032\u6357\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u7cbe\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u6307\u5b9a\u53ef\u80fd\u306a\u5024\u306f\u30010\u30011\u3001\u307e\u305f\u306f2\u3067\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Color\u306f\u3001\u8868\u793a\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u306e\u8272\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Alpha\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f\u30010\uff5e255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",u({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Text Progress\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",u({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u56fa\u6709\u306e\u30a2\u30af\u30b7\u30e7\u30f3")),(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,n.kt)("h3",u({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30c8\u30ea\u30ac")),(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Value update complete")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u66f4\u65b0\u306e\u5b8c\u4e86\u6642\u306b\u30c8\u30ea\u30ac\u3055\u308c\u307e\u3059\u3002 \u66f4\u65b0\u306e\u6642\u9593\u304c0\u306e\u5834\u5408\u3001\u77ac\u6642\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u304c\u3001\u305d\u306e\u5834\u5408\u3082\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u30c8\u30ea\u30ac\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Value updated")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u77ac\u6642\u306e\u66f4\u65b0\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u66f4\u65b0\u6642\u306e\u4e2d\u9593\u30b9\u30c6\u30c3\u30d7\u306e\u4e21\u65b9\u3067\u30c8\u30ea\u30ac\u3055\u308c\u307e\u3059\u3002 \u65b0\u3057\u3044\u5024\u304c\u73fe\u5728\u306e\u5024\u3068\u7570\u306a\u308b\u5834\u5408\u306e\u307f\u30c8\u30ea\u30ac\u3055\u308c\u307e\u3059\u3002")))),(0,n.kt)("h2",u({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,n.kt)("p",null,"Text Progress\u306fTextArea\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\uff09\u3068\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u63cf\u753b\u306f\u4e00\u822c\u7684\u306a\u753b\u50cf\u63cf\u753b\u3068\u975e\u5e38\u306b\u3088\u304f\u4f3c\u3066\u3044\u307e\u3059\uff08\u305f\u3060\u3057\u3001\u30c6\u30ad\u30b9\u30c8\u6587\u5b57\u306e\u7279\u6027\u304b\u3089\u3001\u304b\u306a\u308a\u306e\u91cf\u306e\u30a2\u30eb\u30d5\u30a1\u30d6\u30ec\u30f3\u30c7\u30a3\u30f3\u30b0\u304c\u884c\u308f\u308c\u307e\u3059\uff09\u3002 \u3053\u306e\u305f\u3081\u3001Text Progress\u306f\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u9ad8\u901f\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",u({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",u({},{id:"examples"}),"\u4f8b"),(0,n.kt)("h3",u({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,n.kt)("p",null,"View\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bText Progress\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,n.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"textProgress.setXY(198, 119);\ntextProgress.setProgressIndicatorPosition(0, 0, 84, 34);\ntextProgress.setRange(0, 100);\ntextProgress.setColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\ntextProgress.setNumberOfDecimals(0);\ntextProgress.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\ntextProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_TEXT_PROGRESS_BG_SQUARE_ID));\ntextProgress.setValue(50);\n")),(0,n.kt)("h3",u({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,n.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001\u9032\u6357\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3059\u308b\u305f\u3081\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u95a2\u6570\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,n.kt)("a",u({parentName:"p"},{href:"text-progress"}),"\u3053\u306e\u8a18\u4e8b\u306e\u5192\u982d"),"\u3067\u793a\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n    uint8_t counter;\n};\n")),(0,n.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%15 == 0) // Every 0.25 seconds\n    {\n        int currentValue = textProgress.getValue();\n        int16_t max;\n        int16_t min;\n        textProgress.getRange(min, max);\n\n        if (currentValue == min)\n        {\n            increase = true;\n        }\n        else if (currentValue == max)\n        {\n            increase = false;\n        }\n\n        int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n        counter = 0;\n        textProgress.setValue(nextValue);\n    }\n}\n")),(0,n.kt)(o.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001TextProgress\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,n.kt)(i.Z,{mdxType:"InlineCode"},"textProgress1.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",u({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,n.kt)("p",null,"Text Progress\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eProgress Indicator Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,n.kt)("h2",u({},{id:"api-reference"}),"API\u53c2\u7167"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_progress",mdxType:"Link"},"TextProgress\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}b.isMDXComponent=!0}}]);