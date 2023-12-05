"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[20770],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=o(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[c]="string"==typeof e?e:r,i[1]=m;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61235:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const l=r},12822:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(32118);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(59496),r=n(89588);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const m=i},89588:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const l=r},40465:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}const l=r},71678:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(59496),r=n(89588);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const m=i},92255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>g,toc:()=>h});n(59496);var a=n(49613),r=n(12822),l=n(86222),i=n(40465),m=n(71678),p=n(51721),o=n(61235);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"tiled-image",title:"Tiled Image"},u=void 0,g={unversionedId:"development/ui-development/ui-components/images/tiled-image",id:"development/ui-development/ui-components/images/tiled-image",title:"Tiled Image",description:"\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/tiled-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/tiled-image",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/images/tiled-image",draft:!1,tags:[],version:"current",frontMatter:{id:"tiled-image",title:"Tiled Image"},sidebar:"docs",previous:{title:"\u53ef\u7f29\u653e\u56fe\u50cf",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/images/scalable-image"},next:{title:"\u52a8\u753b\u56fe\u50cf",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/images/animated-image"}},k={},h=[{value:"\u8bf4\u660e",id:"description",level:2},{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u52a8\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],v={toc:h},N="wrapper";function f(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)(N,d({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",d({},{id:"description"}),"\u8bf4\u660e"),(0,a.kt)("p",null,"TiledImage \u662f\u80fd\u591f\u663e\u793a\u5e73\u94fa\u4f4d\u56fe\u7684\u7b80\u5355\u63a7\u4ef6\u3002 \u8fd9\u610f\u5473\u7740\u5f53 Tiled Image \u5927\u4e8e\u63d0\u4f9b\u7684\u4f4d\u56fe\u65f6\uff0c\u4f1a\u5728\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u91cd\u590d\u4f4d\u56fe\u3002 \u4f4d\u56fe\u53ef\u4e0e\u80cc\u666f\u8fdb\u884c Alpha \u6df7\u5408\uff0c\u5e76\u53ef\u5305\u542b\u900f\u660e\u533a\u57df\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/tiled-image/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684 Tiled Image"),(0,a.kt)("h2",d({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,a.kt)("p",null,"TiledImage \u4f4d\u4e8e TouchGFX Designer \u4e2d\u7684\u56fe\u50cf\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/tiled-image/widget-group-v4.21.webp",mdxType:"Figure"},"TouchGFX Designer \u4e2d\u7684 Tiled Image"),(0,a.kt)("h2",d({},{id:"properties"}),"\u5c5e\u6027"),(0,a.kt)("p",null,"TouchGFX Designer \u4e2d TiledImage \u7684\u5c5e\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \u548c ",(0,a.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u56fe\u50cf")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u56fe\u50cf"),"\u6307\u5b9a\u5e94\u5728\u63a7\u4ef6\u4e2d\u4f7f\u7528\u7684\u56fe\u50cf\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5efa\u8bae\u4f7f\u7528\u5305\u542b\u91cd\u590d\u56fe\u6837\u7684\u56fe\u50cf\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u504f\u79fb")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u5e73\u94fa\u7ed8\u56fe\u8d77\u59cb\u5904\u56fe\u50cf\u7684\u504f\u79fb\u91cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u5916\u89c2")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u63a7\u4ef6\u7684\u900f\u660e\u5ea6\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u63a7\u4ef6\u7684Alpha\u503c\u4ecb\u4e8e0\u548c255\u4e4b\u95f4\u3002 0\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c255\u8868\u793a\u4e0d\u900f\u660e\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,a.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,a.kt)("em",{parentName:"td"},"X")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null))))),(0,a.kt)("h2",d({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86 Tiled Image \u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,a.kt)("h3",d({},{id:"actions"}),"\u52a8\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u8c03\u6574\u63a7\u4ef6\u7684\u5c3a\u5bf8")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u8c03\u6574\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u6e10\u9690\u63a7\u4ef6")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u6539\u53d8\u63a7\u4ef6\u7684Alpha\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,a.kt)("h3",d({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,a.kt)("p",null,"Tiled Image \u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,a.kt)("h2",d({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"Tiled Image \u4f9d\u8d56\u4e8e\u56fe\u50cf\u7ed8\u56fe\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u5176\u89c6\u4e3a\u6267\u884c\u901f\u5ea6\u8f83\u5feb\u7684\u63a7\u4ef6\u3002",(0,a.kt)("br",null)," Tiled Image \u4f1a\u591a\u6b21\u91cd\u65b0\u7ed8\u5236\u540c\u4e00\u56fe\u50cf\uff0c\u4ee5\u8986\u76d6\u63a7\u4ef6\u7684\u533a\u57df\u3002 \u56e0\u6b64\uff0c\u6e90\u56fe\u50cf\u8d8a\u5c0f\uff0c\u56fe\u50cf\u7ed8\u5236\u6b21\u6570\u8d8a\u591a\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u56fe\u50cf\u7ed8\u5236\u6027\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",d({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u4e00\u8282\u3002"),(0,a.kt)("h2",d({},{id:"examples"}),"\u793a\u4f8b"),(0,a.kt)("h3",d({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,a.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770b TouchGFX Designer \u662f\u5982\u4f55\u521b\u5efa TiledImage \u7684\u3002"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    tiledImage.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_TEXTURES_IRONGRIP_ID));\n    tiledImage.setPosition(35, 36, 50, 50);\n    tiledImage.setOffset(0, 0);\n\n    add(tiledImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(m.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53ca TiledImage \u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,a.kt)(i.Z,{mdxType:"InlineCode"},"tiledImage.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,a.kt)("h3",d({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u793a\u4f8b\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7\u6301\u7eed\u8c03\u6574",(0,a.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," \u4e2d\u7684\u504f\u79fb\u5c06\u8fd0\u52a8\u52a8\u753b\u7ed8\u5236\u5230 Tiled Image \u4e2d"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{20-23}","{20-23}":!0}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    int x = tiledImage.getXOffset();\n    int y = tiledImage.getYOffset();\n    tiledImage.setOffset(x + 1, y + 1);\n    tiledImage.invalidate();\n}\n")),(0,a.kt)("h2",d({},{id:"api-reference"}),"API\u53c2\u8003"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_tiled_image",mdxType:"Link"},"TiledImage\u7c7b\u7684API\u53c2\u8003"))))}f.isMDXComponent=!0}}]);