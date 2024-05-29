"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[159],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(m,".").concat(s)]||u[s]||d[s]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const l=r},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const i=o},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const l=r},94790:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}const l=r},21100:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const i=o},25893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>k,toc:()=>h});n(59496);var a=n(49613),r=n(89639),l=n(48753),o=n(21100),i=n(94790),m=n(95375),p=n(28128);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const d={id:"analog-clock",title:"\u6a21\u62df\u65f6\u949f"},s=void 0,k={unversionedId:"development/ui-development/ui-components/miscellaneous/analog-clock",id:"development/ui-development/ui-components/miscellaneous/analog-clock",title:"\u6a21\u62df\u65f6\u949f",description:"\u6a21\u62df\u65f6\u949f\u662f\u4e00\u4e2a\u63a7\u4ef6\uff0c\u80fd\u591f\u663e\u793a\u4e00\u4e2a\u4f20\u7edf\u7684\u6a21\u62df\u65f6\u949f\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u6587\u672c\u663e\u793a\u65f6\u95f4\u7684\u6570\u5b57\u65f6\u949f\u3002 \u8be5\u65f6\u949f\u4f7f\u7528\u80cc\u666f\u56fe\u50cf\u4f5c\u4e3a\u949f\u9762\u3002 \u65f6\u9488\u3001\u5206\u9488\u548c\u79d2\u9488\u90fd\u4f7f\u7528\u4e00\u5e45\u56fe\u50cf\uff0c\u5e76\u56f4\u7ed5\u4e00\u4e2a\u53ef\u914d\u7f6e\u7684\u4e2d\u5fc3\u65cb\u8f6c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/analog-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/analog-clock",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/miscellaneous/analog-clock",draft:!1,tags:[],version:"current",frontMatter:{id:"analog-clock",title:"\u6a21\u62df\u65f6\u949f"},sidebar:"docs",previous:{title:"\u6587\u672c\u533a\u57df",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/miscellaneous/text-area"},next:{title:"\u6570\u5b57\u65f6\u949f",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/miscellaneous/digital-clock"}},g={},h=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u65f6\u95f4",id:"time",level:3},{value:"\u65f6\u949f\u6307\u9488",id:"clock-hands",level:3},{value:"\u65f6\u9488\u3001\u5206\u9488\u548c\u79d2\u9488",id:"hour-minute-and-second-hands",level:4},{value:"\u52a8\u753b",id:"animation",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],v={toc:h},N="wrapper";function b(e){var{components:t}=e,n=u(e,["components"]);return(0,a.kt)(N,c({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6a21\u62df\u65f6\u949f\u662f\u4e00\u4e2a\u63a7\u4ef6\uff0c\u80fd\u591f\u663e\u793a\u4e00\u4e2a\u4f20\u7edf\u7684\u6a21\u62df\u65f6\u949f\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u6587\u672c\u663e\u793a\u65f6\u95f4\u7684",(0,a.kt)("a",c({parentName:"p"},{href:"digital-clock"}),"\u6570\u5b57\u65f6\u949f"),"\u3002 \u8be5\u65f6\u949f\u4f7f\u7528\u80cc\u666f\u56fe\u50cf\u4f5c\u4e3a\u949f\u9762\u3002 \u65f6\u9488\u3001\u5206\u9488\u548c\u79d2\u9488\u90fd\u4f7f\u7528\u4e00\u5e45\u56fe\u50cf\uff0c\u5e76\u56f4\u7ed5\u4e00\u4e2a\u53ef\u914d\u7f6e\u7684\u4e2d\u5fc3\u65cb\u8f6c\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-appearance.webp",mdxType:"Figure"},"\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u6a21\u62df\u65f6\u949f\uff08\u52a0\u901f\u955c\u5934\uff09"),(0,a.kt)("h2",c({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,a.kt)("p",null,"\u6a21\u62df\u65f6\u949f\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684Miscellaneous\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6a21\u62df\u65f6\u949f"),(0,a.kt)("h2",c({},{id:"properties"}),"\u5c5e\u6027"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u6a21\u62df\u65f6\u949f\u7684\u5c5e\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \u548c ",(0,a.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6a21\u62df\u65f6\u949f\u7684\u5927\u5c0f\u662f\u4ece\u5173\u8054\u56fe\u50cf\u7684\u5927\u5c0f\u83b7\u53d6\u7684\uff0c\u5176\u5927\u5c0f\u65e0\u6cd5\u66f4\u6539\uff08\u9664\u975e\u66f4\u6539\u56fe\u50cf\uff09\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u6837\u5f0f")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u6837\u5f0f")," \u6307\u5b9a\u63a7\u4ef6\u7684\u9884\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u7528\u4e8e\u5c06\u6240\u9009\u5c5e\u6027\u8bbe\u4e3a\u9884\u5b9a\u4e49\u7684\u503c\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u8fd9\u4e9b\u6837\u5f0f\u5305\u542b\u53ef\u514d\u8d39\u4f7f\u7528\u7684\u56fe\u50cf"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u5916\u89c2")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u56fe\u50cf")," \u6307\u5b9a\u7528\u4f5c\u80cc\u666f\u7684\u56fe\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"X\u8f74\u65cb\u8f6c\u4e2d\u5fc3")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y\u8f74\u65cb\u8f6c\u4e2d\u5fc3")," \u6307\u5b9a\u65f6\u949f\u6307\u9488\u5e94\u8be5\u7ed5\u7740\u65cb\u8f6c\u7684\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u65f6\u95f4")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u4f7f\u7528Am/Pm"),"\u6307\u5b9a\u65f6\u95f4\u683c\u5f0f\u662f12\u5c0f\u65f6\u5236\u8fd8\u662f24\u5c0f\u65f6\u5236\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u521d\u59cb\u65f6\u95f4"),"\u6307\u5b9a\u65f6\u949f\u663e\u793a\u7684\u521d\u59cb\u65f6\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u65f6\u949f\u6307\u9488")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u65f6\u949f\u6307\u9488")," \u6307\u5b9a\u6a21\u62df\u65f6\u949f\u5e94\u8be5\u663e\u793a\u54ea\u4e2a\u65f6\u949f\u6307\u9488",(0,a.kt)("em",{parentName:"td"},"\uff08\u79d2\u9488\u3001\u5206\u9488\u548c\u65f6\u9488\uff09\u3001 ")," \u4ee5\u53ca\u6307\u9488\u7684\u987a\u5e8f\u3002",(0,a.kt)("br",null),"\u6bcf\u6839\u65f6\u949f\u6307\u9488\u90fd\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,a.kt)("em",{parentName:"td"},"\u65cb\u8f6c\u4f4d\u7f6eX"),"\u548c",(0,a.kt)("em",{parentName:"td"},"\u65cb\u8f6c\u4f4d\u7f6eY"),"\u6765\u8bbe\u7f6e\u4e00\u4e2a",(0,a.kt)("em",{parentName:"td"},"\u6307\u9488\u56fe\u50cf"),"\u548c\u5404\u81ea\u7684\u65cb\u8f6c\u70b9\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u5206\u9488\u548c\u65f6\u9488\u90fd\u53ef\u9009\u62e9\u4f7f\u7528\u626b\u63cf\u5f0f\u6307\u9488\u52a8\u4f5c\uff0c\u65b9\u6cd5\u662f\u8bbe\u7f6e",(0,a.kt)("em",{parentName:"td"},"\u626b\u63cf\u5f0f\u52a8\u4f5c"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u52a8\u753b")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u52a8\u753b\u5f0f\u65f6\u949f\u6307\u9488\u52a8\u4f5c"),"\u6307\u5b9a\u662f\u5426\u542f\u7528\u65f6\u949f\u6307\u9488\u7684\u52a8\u753b\u6548\u679c\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u6301\u7eed\u65f6\u95f4"),"\u6307\u5b9a\u52a8\u753b\u6548\u679c\u7684\u6301\u7eed\u65f6\u95f4\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u7f13\u52a8")," \u548c ",(0,a.kt)("em",{parentName:"td"},"\u7f13\u52a8\u9009\u9879")," \u6307\u5b9a\u4f7f\u7528\u7684\u7f13\u52a8\u65b9\u7a0b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,a.kt)("em",{parentName:"td"},"X")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,a.kt)("h3",c({},{id:"time"}),"\u65f6\u95f4"),(0,a.kt)("p",null,"\u201c\u65f6\u95f4\u201d\u5c5e\u6027\u7ec4\u5141\u8bb8\u7528\u6237\u8bbe\u7f6e\u65f6\u949f\u63a7\u4ef6\u7684\u521d\u59cb\u65f6\u95f4\uff0c\u4ee5\u53ca\u662f\u5426\u4f7f\u7528Am/Pm\u6807\u51c6\u3002"),(0,a.kt)("p",null,"\u9009\u62e9Am/Pm\u8fd8\u4f1a\u5bfc\u81f4\u4ee3\u7801\u751f\u6210\u7684\u7ec6\u5fae\u53d8\u5316\u3002 \u800c\u4e0d\u662f\u5728\u6a21\u62df\u65f6\u949f\u4e2d\u4f7f\u7528\u4e0b\u9762\u7684\u51fd\u6570\u521d\u59cb\u5316\u65f6\u95f4\uff1a",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,a.kt)("p",null,"\u5982\u679c\u91c7\u752812\u5c0f\u65f6\u8868\u793a\u6cd5\uff0c\u5c06\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6570\uff1a",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("p",null,"\u5982\u8981\u66f4\u65b0\u65f6\u949f\u663e\u793a\u7684\u65f6\u95f4\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6570\u4e4b\u4e00\u3002",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("h3",c({},{id:"clock-hands"}),"\u65f6\u949f\u6307\u9488"),(0,a.kt)("p",null,"\u5728\u201c\u65f6\u949f\u6307\u9488\u201d\u5c5e\u6027\u7ec4\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u5b9a\u4e49\u8981\u4f7f\u7528\u7684\u6307\u9488\u53ca\u5404\u81ea\u7684Z\u8f74\u987a\u5e8f\u3002 \u9996\u5148\u5b9a\u4e49\u7684\u6307\u9488\u5c06\u5448\u73b0\u5728\u5176\u4ed6\u6307\u9488\u4e4b\u4e0a\u3002"),(0,a.kt)("h4",c({},{id:"hour-minute-and-second-hands"}),"\u65f6\u9488\u3001\u5206\u9488\u548c\u79d2\u9488"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u6307\u9488\u90fd\u9700\u8981\u4e00\u5e45\u56fe\u50cf\u548c\u4e00\u4e2a\u65cb\u8f6c\u4f4d\u7f6e\u3002 \u65cb\u8f6c\u4f4d\u7f6e\u51b3\u5b9a\u5df2\u5b9a\u4e49\u7684\u6307\u9488\u56fe\u50cf\u5e94\u8be5\u56f4\u7ed5\u7740\u8fdb\u884c\u81ea\u8eab\u65cb\u8f6c\u7684\u70b9\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-hands-props-v4.17.webp",mdxType:"Figure"},"\u65f6\u949f\u6307\u9488\u5c5e\u6027"),(0,a.kt)("p",null,"\u65f6\u9488\u548c\u5206\u9488\u5177\u6709\u4f7f\u7528\u201c",(0,a.kt)("em",{parentName:"p"},"\u626b\u52a8"),"\u201d\u80fd\u529b\u3002 \u542f\u7528\u6b64\u9009\u9879\u540e\uff0c\u6307\u9488\u5c06\u4e0d\u518d\u4ece\u4e00\u4e2a\u4f4d\u7f6e\u77ac\u95f4\u8df3\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-no-sweeping-movement.webp",mdxType:"Figure"},"\u626b\u52a8\u5df2\u7981\u7528"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-with-sweeping-movement.webp",mdxType:"Figure"},"\u626b\u52a8\u5df2\u542f\u7528"),(0,a.kt)("h3",c({},{id:"animation"}),"\u52a8\u753b"),(0,a.kt)("p",null,"\u52a8\u753b\u90e8\u5206\u5141\u8bb8\u7528\u6237\u5b9a\u4e49\u66f4\u9ad8\u7ea7\u7684\u6307\u9488\u8fd0\u52a8\u3002 \u7136\u800c\uff0c\u5982\u679c\u65f6\u9488\u548c\u5206\u9488\u5df2\u7ecf\u542f\u7528\u4e86",(0,a.kt)("em",{parentName:"p"},"\u201c\u626b\u52a8\u201d"),"\uff0c\u5b83\u4eec\u5c06\u6ca1\u6709\u52a8\u753b\u6548\u679c\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u52a8\u753b\u6301\u7eed\u65f6\u95f4\u8bbe\u7f6e\u4e3a\u201c30\u201d\uff0c\u7f13\u52a8\u8bbe\u7f6e\u4e3a\u201cBounce\u201d\uff0c\u5e76\u5c06\u201cOut\u201d\u4f5c\u4e3a\u5176\u7f13\u52a8\u9009\u9879\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-animation.webp",mdxType:"Figure"},"\u65f6\u949f\u52a8\u753b\u793a\u4f8b"),(0,a.kt)("h2",c({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86\u6a21\u62df\u65f6\u949f\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,a.kt)("h3",c({},{id:"actions"}),"\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u52a8\u4f5c")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,a.kt)("h3",c({},{id:"triggers"}),"\u89e6\u53d1"),(0,a.kt)("p",null,"\u6a21\u62df\u65f6\u949f\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,a.kt)("h2",c({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"\u6a21\u62df\u65f6\u949f\u5305\u62ec\u4e00\u5e45",(0,a.kt)("a",c({parentName:"p"},{href:"../images/image"}),"\u56fe\u50cf"),"\u548c\u4e09\u4e2a",(0,a.kt)("a",c({parentName:"p"},{href:"../images/texture-mapper"}),"\u7eb9\u7406\u6620\u5c04\u5668"),"\uff0c\u90fd\u662fMCU\u8d44\u6e90\u5bc6\u96c6\u578b\u7ec4\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u6a21\u62df\u65f6\u949f\u89c6\u4e3a\u8981\u6c42\u9ad8\u7684\u63a7\u4ef6\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u7ed8\u56fe\u6027\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",c({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,a.kt)("h2",c({},{id:"examples"}),"\u793a\u4f8b"),(0,a.kt)("h3",c({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,a.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u6a21\u62df\u65f6\u949f\u7684\u3002"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    analogClock.setXY(124, 15);\n    analogClock.setBackground(BITMAP_BLUE_CLOCKS_BACKGROUNDS_CLOCK_STANDARD_BACKGROUND_ID, 116, 116);\n    analogClock.setupMinuteHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_MINUTE_HAND_ID, 7, 67);\n    analogClock.setMinuteHandSecondCorrection(false);\n    analogClock.setupHourHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_HOUR_HAND_ID, 7, 52);\n    analogClock.setHourHandMinuteCorrection(false);\n    analogClock.setupSecondHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_SECOND_HAND_ID, 3, 66);\n    analogClock.initializeTime24Hour(10, 10, 0);\n\n    add(analogClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caAnalogClock\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,a.kt)(i.Z,{mdxType:"InlineCode"},"analogClock.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,a.kt)("h3",c({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u8bbe\u7f6e\u65f6\u949f\u52a8\u4f5c\uff1a"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int analogHours;\n    int analogMinutes;\n    int analogSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    analogHours = analogClock.getCurrentHour();\n    analogMinutes = analogClock.getCurrentMinute();\n    analogSeconds = analogClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++analogSeconds >= 60)\n        {\n            analogSeconds = 0;\n            if (++analogMinutes >= 60)\n            {\n                analogMinutes = 0;\n                if (++analogHours >= 24)\n                {\n                    analogHours = 0;\n                }\n            }\n        }\n\n        // Update the clocks\n        analogClock.setTime24Hour(analogHours, analogMinutes, analogSeconds);\n    }\n}\n")),(0,a.kt)("h3",c({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,a.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u6a21\u62df\u65f6\u949f\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u65f6\u949f\u793a\u4f8b"),(0,a.kt)("h2",c({},{id:"api-reference"}),"API\u53c2\u8003"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_analog_clock",mdxType:"Link"}," AnalogClock\u7c7b\u7684API\u53c2\u8003"))))}b.isMDXComponent=!0}}]);