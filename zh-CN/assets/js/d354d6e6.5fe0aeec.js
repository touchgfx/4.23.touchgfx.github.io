"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[30018],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,g=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},28128:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),a=r(7029);const l=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const p=i},96151:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},94790:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){return n.createElement("code",null,this.props.children)}}const l=a},21100:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const p=i},17853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>h});r(59496);var n=r(49613),a=r(89639),l=r(48753),i=r(21100),p=r(94790),o=r(95375),m=r(28128);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const d={id:"circle-progress",title:"\u5706\u5f62\u8fdb\u5ea6\u6761"},u=void 0,g={unversionedId:"development/ui-development/ui-components/progress-indicators/circle-progress",id:"development/ui-development/ui-components/progress-indicators/circle-progress",title:"\u5706\u5f62\u8fdb\u5ea6\u6761",description:"\u5706\u5f62\u8fdb\u5ea6\u6761\u663e\u793a\u5f53\u524d\u8fdb\u5ea6\uff0c\u65b9\u6cd5\u662f\u5c06\u5706\u73af\u7f6e\u4e8e\u80cc\u666f\u56fe\u50cf\u4e0a\u65b9\u4f5c\u4e3a\u8fdb\u5ea6\u6307\u793a\u5668\u3002 \u5706\u73af\u7684\u989c\u8272\u3001Alpha\u3001\u4ee5\u53ca\u6574\u4f53\u53c2\u6570\u90fd\u53ef\u4ee5\u914d\u7f6e\u3002 \u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u80cc\u666f\u56fe\u50cf\uff0c\u5e76\u66f4\u6539\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u4e0d\u540c\u53c2\u6570\uff08\u6bd4\u5982\u4f4d\u7f6e\u548c\u5927\u5c0f\uff09\uff0c\u4ee5\u9002\u5e94\u81ea\u5b9a\u4e49\u7684\u80cc\u666f\u56fe\u50cf\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/circle-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/circle-progress",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/progress-indicators/circle-progress",draft:!1,tags:[],version:"current",frontMatter:{id:"circle-progress",title:"\u5706\u5f62\u8fdb\u5ea6\u6761"},sidebar:"docs",previous:{title:"\u7ebf\u6027\u8fdb\u5ea6\u6761",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/progress-indicators/line-progress"},next:{title:"Shapes",permalink:"/4.23/zh-CN/docs/category/shapes"}},k={},h=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u52a8\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],N={toc:h},v="wrapper";function b(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(v,s({},N,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u6761\u663e\u793a\u5f53\u524d\u8fdb\u5ea6\uff0c\u65b9\u6cd5\u662f\u5c06",(0,n.kt)("a",s({parentName:"p"},{href:"../shapes/circle"}),"\u5706\u73af"),"\u7f6e\u4e8e\u80cc\u666f",(0,n.kt)("a",s({parentName:"p"},{href:"../images/image"}),"\u56fe\u50cf"),"\u4e0a\u65b9\u4f5c\u4e3a\u8fdb\u5ea6\u6307\u793a\u5668\u3002 \u5706\u73af\u7684",(0,n.kt)("em",{parentName:"p"},"\u989c\u8272"),"\u3001",(0,n.kt)("em",{parentName:"p"},"Alpha"),"\u3001\u4ee5\u53ca\u6574\u4f53\u53c2\u6570\u90fd\u53ef\u4ee5\u914d\u7f6e\u3002 \u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u80cc\u666f\u56fe\u50cf\uff0c\u5e76\u66f4\u6539\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u4e0d\u540c\u53c2\u6570\uff08\u6bd4\u5982\u4f4d\u7f6e\u548c\u5927\u5c0f\uff09\uff0c\u4ee5\u9002\u5e94\u81ea\u5b9a\u4e49\u7684\u80cc\u666f\u56fe\u50cf\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/circle-progress/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u5706\u5f62\u8fdb\u5ea6\u6761"),(0,n.kt)("h2",s({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u6761\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/circle-progress/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5706\u5f62\u8fdb\u5ea6\u6761"),(0,n.kt)("h2",s({},{id:"properties"}),"\u5c5e\u6027"),(0,n.kt)("p",null,"TouchGFX Designer\u4e2d\u5706\u5f62\u8fdb\u5ea6\u6761\u7684\u5c5e\u6027\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,n.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,n.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X"),"\u548c",(0,n.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W"),"\u548c",(0,n.kt)("em",{parentName:"td"},"H"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u5706\u5f62\u8fdb\u5ea6\u6761\u7684\u5927\u5c0f\u7531\u6240\u9009\u80cc\u666f\u56fe\u50cf\u7684\u5927\u5c0f\u51b3\u5b9a\u3002"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u53ef\u89c1"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,n.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u6837\u5f0f")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"\u6837\u5f0f")," \u6307\u5b9a\u63a7\u4ef6\u7684\u9884\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u7528\u4e8e\u5c06\u6240\u9009\u5c5e\u6027\u8bbe\u4e3a\u9884\u5b9a\u4e49\u7684\u503c\u3002",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u8fd9\u4e9b\u6837\u5f0f\u5305\u542b\u53ef\u514d\u8d39\u4f7f\u7528\u7684\u56fe\u50cf"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u56fe\u50cf& \u989c\u8272")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"\u80cc\u666f"),"\u6307\u5b9a\u80cc\u666f\u56fe\u50cf\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u8fdb\u5ea6"),"\u6307\u5b9a\u7528\u4e8e\u586b\u5145\u5706\u73af\u7684\u989c\u8272\u6216\u56fe\u50cf\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u503c")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"\u6700\u5c0f\u503c"),"\u548c",(0,n.kt)("em",{parentName:"td"},"\u6700\u5927\u503c"),"\u6307\u5b9a\u6307\u793a\u5668\u7684\u6700\u5c0f\u548c\u6700\u5927\u6574\u6570\u503c\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u521d\u59cb"),"\u6307\u5b9a\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u521d\u59cb\u503c\u3002",(0,n.kt)("em",{parentName:"td"},"\u603b\u6b65\u6570"),"\u6307\u5b9a\u8fdb\u5ea6\u6307\u793a\u5668\u62a5\u544a\u65b0\u503c\u7684\u7c92\u5ea6\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u9700\u8981\u4ee50%\u300110%\u300120%\u3001...\u3001100%\u7684\u5f62\u5f0f\u62a5\u544a\u8fdb\u5ea6\uff0c\u603b\u503c\u5e94\u8be5\u8bbe\u4e3a10\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u6700\u5c0f\u6b65\u6570"),"\u6307\u5b9a\u8fdb\u5ea6\u6307\u793a\u5668\u663e\u793a\u7684\u6700\u5c0f\u6b65\u6570\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u5916\u89c2")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X\u8f74\u5706\u5fc3\u4f4d\u7f6e"),"\u548c",(0,n.kt)("em",{parentName:"td"},"Y\u8f74\u5706\u5fc3\u4f4d\u7f6e"),"\u6307\u5b9a\u8fdb\u5ea6\u5706\u73af\u7684\u5706\u5fc3\u76f8\u5bf9\u4e8e\u5176\u2018\u5706\u5f62\u8fdb\u5ea6\u6761\u2019\u7236\u7a97\u53e3\u7684\u4f4d\u7f6e\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u8d77\u59cb\u89d2\u5ea6& \u7ed3\u675f\u89d2\u5ea6"),"\u6307\u5b9a\u6240\u7ed8\u5706\u73af\u7684\u8d77\u59cb\u548c\u7ed3\u675f\u89d2\u5ea6\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u534a\u5f84"),"\u6307\u5b9a\u8fdb\u5ea6\u5706\u73af\u7684\u5927\u5c0f\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u7ebf\u6761\u5bbd\u5ea6"),"\u6307\u5b9a\u8fdb\u5ea6\u5706\u73af\u7684\u7ebf\u6761\u5bbd\u5ea6\u3002 \u5982\u679c\u8be5\u503c\u4e3a0\uff0c\u5219\u8fdb\u5ea6\u5706\u73af\u4e0e\u534a\u5f84\u4e00\u6837\u5927\u3002 \u5426\u5219\uff0c\u5c06\u4e3a\u8fdb\u5ea6\u5706\u73af\u914d\u7f6e\u6307\u5b9a\u7684\u5bbd\u5ea6\uff08\u4ece\u5916\u4fa7\u5f00\u59cb\uff0c\u5411\u5185\u4fa7\u79fb\u52a8\uff09\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u7aef\u70b9\u6837\u5f0f"),"\u6307\u5b9a\u7ebf\u6761\u7684\u7aef\u70b9\u6837\u5f0f\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Alpha"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u900f\u660e\u5ea6\u3002 ",(0,n.kt)("em",{parentName:"td"},"\u63a7\u4ef6\u7684Alpha\u503c\u4ecb\u4e8e0\u548c255\u4e4b\u95f4\u3002 0\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c255\u8868\u793a\u4e0d\u900f\u660e\u3002"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixin")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,n.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,n.kt)("em",{parentName:"td"},"X")," \u548c ",(0,n.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,n.kt)("h2",s({},{id:"interactions"}),"\u4ea4\u4e92"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u201c\u5706\u5f62\u8fdb\u5ea6\u6761\u201d\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u3002"),(0,n.kt)("h3",s({},{id:"actions"}),"\u52a8\u4f5c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u52a8\u4f5c")),(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u8bbe\u7f6e\u503c")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8fdb\u5ea6\u6307\u793a\u5668\u7684\u503c\u3002")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u52a8\u4f5c")),(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u6e10\u9690\u63a7\u4ef6")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u6539\u53d8\u63a7\u4ef6\u7684Alpha\u503c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1(\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue).")))),(0,n.kt)("h3",s({},{id:"triggers"}),"\u89e6\u53d1"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Trigger")),(0,n.kt)("th",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Value update complete")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Will be triggered when an update animation is completed. If duration of the update is 0 the update will happen instantly but will still trigger this event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Value updated")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Will be triggered for both instant updates and intermediate steps during an update animation. Will only trigger when the new value differs from the current one.")))),(0,n.kt)("h2",s({},{id:"performance"}),"\u6027\u80fd"),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u6761\u5305\u542b\u4e00\u4e2a\u5706\u73af\u548c\u4e00\u5e45\u80cc\u666f\u56fe\u50cf\u3002 \u8be5\u5706\u73af\u57fa\u4e8e\u753b\u5e03\u63a7\u4ef6\uff0c\u9ad8\u5ea6\u4f9d\u8d56\u4e8eMCU\u8fdb\u884c\u6e32\u67d3\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u5706\u5f62\u8fdb\u5ea6\u6761\u89c6\u4e3a\u8981\u6c42\u9ad8\u7684\u63a7\u4ef6\u3002"),(0,n.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u753b\u5e03\u63a7\u4ef6\u7ed8\u5236\u6027\u80fd\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,n.kt)("a",s({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,n.kt)("h2",s({},{id:"examples"}),"\u793a\u4f8b"),(0,n.kt)("h3",s({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,n.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u201c\u5706\u5f62\u8fdb\u5ea6\u6761\u201d\u7684\u3002"),(0,n.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"circleProgress.setXY(188, 84);\ncircleProgress.setProgressIndicatorPosition(0, 0, 104, 104);\ncircleProgress.setRange(0, 100);\ncircleProgress.setCenter(52, 52);\ncircleProgress.setRadius(50);\ncircleProgress.setLineWidth(0);\ncircleProgress.setStartEndAngle(0, 360);\ncircleProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_CIRCLE_INDICATOR_BG_FULL_ID));\ncircleProgressPainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_FILL_MEDIUM_CIRCLE_INDICATOR_FILL_FULL_ID));\ncircleProgress.setPainter(circleProgress1Painter);\ncircleProgress.setValue(0);\n")),(0,n.kt)("h3",s({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5b9e\u73b0",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u51fd\u6570\u4ee5\u6a21\u62df\u8fdb\u5ea6\u6761\u3002 \u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u5c06\u521b\u5efa",(0,n.kt)("a",s({parentName:"p"},{href:"circle-progress"}),"\u672c\u6587\u5f00\u5934\u6240\u793a\u7684\u5e94\u7528"),"\u3002"),(0,n.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,n.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = circleProgress.getValue();\n    int16_t max;\n    int16_t min;\n    circleProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    circleProgress.setValue(nextValue);\n}\n")),(0,n.kt)(i.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caCircleProgress\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,n.kt)(p.Z,{mdxType:"InlineCode"},"circleProgress1.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,n.kt)("h3",s({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,n.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u201c\u5706\u5f62\u8fdb\u5ea6\u6761\u201d\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0bUI\u6a21\u677f\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u8fdb\u5ea6\u6307\u793a\u5668\u793a\u4f8bUI\u6a21\u677f"),(0,n.kt)("h2",s({},{id:"api-reference"}),"API\u53c2\u8003"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_circle_progress",mdxType:"Link"}," LineProgress\u7c7b\u7684API\u53c2\u8003"))))}b.isMDXComponent=!0}}]);