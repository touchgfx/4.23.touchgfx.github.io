"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5254],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(n),u=l,k=s["".concat(p,".").concat(u)]||s[u]||d[u]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61235:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class l extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const a=l},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),l=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),l=n(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const o=i},89588:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=l},40465:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class l extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const a=l},71678:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),l=n(89588);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}const o=i},44722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>k,toc:()=>g});n(59496);var r=n(49613),l=n(12822),a=n(86222),i=n(71678),o=n(40465),p=n(51721),c=n(61235);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const d={id:"scroll-wheel",title:"\u6efe\u8f2a"},u=void 0,k={unversionedId:"development/ui-development/ui-components/containers/scroll-wheel",id:"development/ui-development/ui-components/containers/scroll-wheel",title:"\u6efe\u8f2a",description:"\u6efe\u8f2a(Scroll Wheel)\u662f\u5305\u542b\u591a\u500b\u5c08\u6848\u7684\u53ef\u6372\u52d5\u529f\u80fd\u8868\uff0c\u6efe\u52d5\u6d41\u89bd\u529f\u80fd\u8868\u4e2d\u7684\u5c08\u6848\u6642\uff0c\u9019\u4e9b\u5c08\u6848\u6703\u52d5\u614b\u66f4\u65b0\uff0c\u4e14\u88ab\u9078\u4e2d\u7684\u5c08\u6848\u5c07\u7a81\u51fa\u986f\u793a\u3002 \u555f\u7528\u56de\u61c9\u8207\u6efe\u8f2a\u4ea4\u4e92\u7684\u7a0b\u5f0f\u78bc\u5f8c\uff0c\u53ef\u57fa\u65bc\u8207\u8f2a\u4e2d\u5c08\u6848\u7684\u4ea4\u4e92\u547c\u53eb\u4e0d\u540c\u7684callback\u51fd\u6578\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-wheel.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-wheel",permalink:"/4.23/zh-TW/docs/development/ui-development/ui-components/containers/scroll-wheel",draft:!1,tags:[],version:"current",frontMatter:{id:"scroll-wheel",title:"\u6efe\u8f2a"},sidebar:"docs",previous:{title:"\u6efe\u52d5\u5217\u8868",permalink:"/4.23/zh-TW/docs/development/ui-development/ui-components/containers/scroll-list"},next:{title:"\u6ed1\u52d5\u9078\u55ae",permalink:"/4.23/zh-TW/docs/development/ui-development/ui-components/containers/slide-menu"}},h={},g=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u5c08\u6848\u7bc4\u672c",id:"item-templates",level:3},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],N={toc:g},v="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(v,m({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6efe\u8f2a(Scroll Wheel)\u662f\u5305\u542b\u591a\u500b\u5c08\u6848\u7684\u53ef\u6372\u52d5\u529f\u80fd\u8868\uff0c\u6efe\u52d5\u6d41\u89bd\u529f\u80fd\u8868\u4e2d\u7684\u5c08\u6848\u6642\uff0c\u9019\u4e9b\u5c08\u6848\u6703\u52d5\u614b\u66f4\u65b0\uff0c\u4e14\u88ab\u9078\u4e2d\u7684\u5c08\u6848\u5c07\u7a81\u51fa\u986f\u793a\u3002 \u555f\u7528\u56de\u61c9\u8207\u6efe\u8f2a\u4ea4\u4e92\u7684\u7a0b\u5f0f\u78bc\u5f8c\uff0c\u53ef\u57fa\u65bc\u8207\u8f2a\u4e2d\u5c08\u6848\u7684\u4ea4\u4e92\u547c\u53eb\u4e0d\u540c\u7684callback\u51fd\u6578\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u6efe\u8f2a"),(0,r.kt)("h2",m({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u6efe\u8f2a\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Containers\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6efe\u8f2a"),(0,r.kt)("h2",m({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u6efe\u8f2a\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u985e\u578b"),"\u6307\u5b9a\u6efe\u8f2a\u65b9\u5411\u70ba\u5782\u76f4\u65b9\u5411\u6216\u6c34\u5e73\u65b9\u5411\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u898b")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c07\u5c0f\u90e8\u4ef6\u6a19\u8a18\u70ba\u4e0d\u53ef\u898b\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Item Template")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u5c08\u6848\u7bc4\u672c")," \u6307\u5b9a\u7528\u4f5c\u7bc4\u672c\u7684CustomContainer\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9078\u9805\u6578")," \u6307\u5b9a\u6efe\u52d5\u6e05\u55ae\u4e2d\u5b58\u5728\u7684\u5c08\u6848\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9996\u9078\u5c08\u6848")," \u6307\u5b9a\u9996\u5148\u9078\u64c7\u54ea\u500b\u5c08\u6848\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u4f7f\u7528\u5df2\u9078\u6a23\u5f0f\u7bc4\u672c")," \u6307\u5b9a\u662f\u5426\u70ba\u6240\u9078\u5c08\u6848\u4f7f\u7528\u55ae\u7368\u7684\u7bc4\u672c\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5df2\u9078\u6a23\u5f0f\u7bc4\u672c")," \u6307\u5b9a\u7528\u4f5c\u9078\u5b9a\u7bc4\u672c\u7684CustomContainer\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"List Appearance")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u8ff4\u5708")," \u6307\u5b9a\u5230\u9054\u5217\u8868\u672b\u5c3e\u5f8c\uff0c\u6efe\u8f2a\u4e2d\u7684\u5c08\u6848\u662f\u5426\u5c07\u8ff4\u5708\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9078\u4e2d\u9805\u504f\u79fb\u91cf")," \u6307\u5b9a\u9078\u5b9a\u5c08\u6848\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5c08\u6848\u908a\u8ddd")," \u6307\u5b9a\u5c08\u6848\u4e4b\u9593\u7684\u9593\u8ddd\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u524d\u65b9\u984d\u5916\u5c3a\u5bf8"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u5f8c\u65b9\u984d\u5916\u5c3a\u5bf8")," \u6307\u5b9a\u986f\u793a",(0,r.kt)("em",{parentName:"td"},"\u5df2\u9078\u6a23\u5f0f\u7bc4\u672c"),"\u7684\u5340\u57df\u7684\u5927\u5c0f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u524d\u908a\u8ddd"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u5f8c\u908a\u8ddd"),"\u6307\u5b9a\u986f\u793a",(0,r.kt)("em",{parentName:"td"},"\u5df2\u9078\u6a23\u5f0f\u7bc4\u672c"),"\u7684\u5340\u57df\u524d\u5f8c\u7684\u908a\u8ddd\u5927\u5c0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u7de9\u52d5"),"\u548c",(0,r.kt)("em",{parentName:"td"},"\u7de9\u52d5\u9078\u9805"),"\u6307\u5b9a\u52d5\u756b\u4f7f\u7528\u7684\u7de9\u52d5\u65b9\u7a0b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Swipe Acc.")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Drag Acc.")," \u6307\u5b9a\u6efe\u52d5\u6642\u7684\u52a0\u901f\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,r.kt)("h3",m({},{id:"item-templates"}),"\u5c08\u6848\u7bc4\u672c"),(0,r.kt)("p",null,"\u6efe\u52d5\u5217\u8868\u4e2d\u7684\u5c08\u6848\u57fa\u65bc\u540d\u70ba",(0,r.kt)("em",{parentName:"p"},"\u201c\u5c08\u6848\u7bc4\u672c\u201d"),"\u7684\u6982\u5ff5\uff0c\u5c08\u6848\u7bc4\u672c\u5c6c\u65bc",(0,r.kt)("a",m({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer"),"\uff0c\u7528\u4f5c\u6efe\u8f2a\u4e2d\u5404\u5c08\u6848\u5716\u5f62\u5143\u7d20\u7684\u57fa\u790e\u3002 \u70ba\u4e86\u7a81\u51fa\u986f\u793a\u6240\u9078\u5c08\u6848\uff0c\u6efe\u8f2a\u5305\u542b\u7528\u65bc\u9078\u64c7\u540d\u70ba\u201c",(0,r.kt)("em",{parentName:"p"},"\u5df2\u9078\u6a23\u5f0f\u7bc4\u672c"),"\u201d\u7684\u5c08\u6848\u7bc4\u672c\u7684\u9078\u9805\uff0c\u5df2\u9078\u6a23\u5f0f\u7bc4\u672c\u50c5\u53ef\u7528\u65bc\u5df2\u9078\u5c08\u6848\u3002 \u5275\u5efa\u6efe\u8f2a\u4e4b\u524d\uff0c\u61c9\u70ba\u5c08\u6848\u7bc4\u672c\u4ee5\u53ca",(0,r.kt)("em",{parentName:"p"},"\u5df2\u9078\u5c08\u6848\u7bc4\u672c"),"\uff08\u82e5\u555f\u7528\uff09\u5275\u5efaCustomContainer\u3002"),(0,r.kt)("p",null,"\u5275\u5efa\u6efe\u8f2a\u5f8c\uff0c\u53ef\u5728",(0,r.kt)("em",{parentName:"p"},"\u5c08\u6848\u7bc4\u672c"),"\u5c6c\u6027\u4e0b\u9078\u64c7CustomContainer\u3002 \u70ba",(0,r.kt)("em",{parentName:"p"},"\u5c08\u6848\u7bc4\u672c"),"\u9078\u64c7\u81ea\u8a02\u5bb9\u5668\u6642\uff0c\u6703\u8abf\u6574\u6efe\u8f2a\u5927\u5c0f\uff0c\u4ee5\u9069\u61c9\u6240\u9078\u81ea\u8a02\u5bb9\u5668\u4e0d\u5728\u53ef\u6efe\u52d5\u65b9\u5411\u4e0a\u7684\u7684\u5c3a\u5bf8\u5c6c\u6027\uff08",(0,r.kt)("em",{parentName:"p"},"\u5782\u76f4\u65b9\u5411\u7684\u5bec\u5ea6\u3001\u6c34\u5e73\u65b9\u5411\u7684\u9ad8\u5ea6"),"\uff09\u3002 \u66f4\u6539\u5176\u4ed6\u5c3a\u5bf8\u5c6c\u6027\uff08",(0,r.kt)("em",{parentName:"p"},"\u5782\u76f4\u65b9\u5411\u7684\u9ad8\u5ea6\u3001\u6c34\u5e73\u65b9\u5411\u7684\u5bec\u5ea6"),"\uff09\u6c7a\u5b9a\u4e86\u53ef\u898b\u7684\u5c08\u6848\u6578\u3002"),(0,r.kt)("h2",m({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u6efe\u8f2a\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",m({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",m({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u6efe\u8f2a\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",m({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u6efe\u8f2a\u70ba",(0,r.kt)("a",m({parentName:"p"},{href:"container"}),"Container"),"\u985e\u578b\uff0c\u9810\u8a2d\u60c5\u6cc1\u4e0b\u4e0d\u6703\u51fa\u73fe\u5728\u7e6a\u5716\u93c8\u4e2d\u3002 \u56e0\u6b64\uff0c\u6027\u80fd\u5b8c\u5168\u53d6\u6c7a\u65bc\u5b50\u90e8\u4ef6\u7684\u7e6a\u5716\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",m({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,r.kt)("h2",m({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",m({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u5275\u5efa\u6efe\u8f2a\u7684\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollWheel.setPosition(140, 10, 200, 252);\n    scrollWheel.setHorizontal(false);\n    scrollWheel.setCircular(false);\n    scrollWheel.setEasingEquation(touchgfx::EasingEquations::backEaseIn);\n    scrollWheel.setSwipeAcceleration(10);\n    scrollWheel.setDragAcceleration(10);\n    scrollWheel.setNumberOfItems(60);\n    scrollWheel.setSelectedItemOffset(100);\n    scrollWheel.setSelectedItemExtraSize(0, 0);\n    scrollWheel.setSelectedItemMargin(0, 0);\n    scrollWheel.setDrawableSize(50, 3);\n    scrollWheel.setDrawables(scrollWheelListItems, updateItemCallback,\n                              scrollWheelSelectedListItems, updateItemCallback);\n    scrollWheel.animateToItem(0, 0);\n\n    add(scrollWheel);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollWheel.initialize();\n    for (int i = 0; i < scrollWheelListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelListItems[i].initialize();\n    }\n    for (int i = 0; i < scrollWheelSelectedListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelSelectedListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollWheelListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollWheelUpdateItem(*cc, itemIndex);\n    }\n    else if (items == &scrollWheelSelectedListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextCenterContainer* cc = (TextCenterContainer*)d;\n        scrollWheelUpdateCenterItem(*cc, itemIndex);\n    }\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528ScrollWheel\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u4fee\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8a18\u5f97\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"scrollWheel.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h3",m({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u8a2d\u7f6e\u5b8c\u6efe\u8f2a\u7684\u5716\u5f62\u5143\u7d20\u53ca\u5176\u5c6c\u6027\u5f8c\uff0c\u53ef\u7de8\u5beb\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u66f4\u65b0\u6efe\u8f2a\u4e2d\u7684\u5c08\u6848\u3002 \u4e0b\u6587\u7d66\u51fa\u4e86\u7531TouchGFX Designer\u751f\u6210\u7684Screen1ViewBase\u985e\u7684\u6a19\u982d\u6a94\uff1a"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{8-11,13-16}","{8-11,13-16}":!0}),"class Screen1ViewBase : public touchgfx::View\n{\npublic:\n    Screen1ViewBase();\n    virtual ~Screen1ViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n\n    touchgfx::BoxWithBorder boxWithBorder1;\n    touchgfx::ScrollWheelWithSelectionStyle scrollWheel1;\n    touchgfx::DrawableListItems<CustomContainer1, 6> scrollWheel1ListItems;\n    touchgfx::DrawableListItems<CustomContainer2, 2> scrollWheel1SelectedListItems;\n\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<Screen1ViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n\n};\n")),(0,r.kt)("p",null,"TouchGFX Designer\u751f\u6210\u6efe\u8f2a\u7a0b\u5f0f\u78bc\u6642\uff0c\u6703\u5275\u5efa\u4e0a\u6587\u4e2d\u7a81\u51fa\u986f\u793a\u7684\u51fd\u6578 ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem"),"\uff0c\u4f7f\u7528\u8005\u53ef\u4f7f\u7528\u9019\u4e9b\u51fd\u6578\u8986\u84cb\u548c\u66f4\u65b0\u6efe\u8f2a\u4e2d\u7684\u5c08\u6848\u3002"),(0,r.kt)("p",null,"\u6700\u7d42\u6703\u70ba\u751f\u6210\u6efe\u8f2a ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateItem")," \u51fd\u6578\uff0c\u4e26\u53ef\u5be6\u73fe\u8a72\u51fd\u6578\u4ee5\u66f4\u65b0\u5305\u542b\u7684\u5c08\u6848\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCenterItem "),"\u51fd\u6578\u6703\u57fa\u65bc",(0,r.kt)("em",{parentName:"p"},"\u5df2\u9078\u6a23\u5f0f\u7bc4\u672c"),"\u66f4\u65b0\u5c08\u6848\uff0c\u56e0\u6b64\uff0c\u50c5\u7576\u9078\u64c7\u4f7f\u7528",(0,r.kt)("em",{parentName:"p"},"\u5df2\u9078\u6a23\u5f0f\u7bc4\u672c"),"\u6642\uff0c\u624d\u6703\u751f\u6210\u6b64\u51fd\u6578\u3002 \u9664\u4e86\u66f4\u65b0\u4e0d\u540c\u5c08\u6848\u4e4b\u5916\uff0c\u9019\u5169\u500b\u51fd\u6578\u9084\u5305\u542b\u76f8\u540c\u7684\u53c3\u6578\uff0c\u7528\u65bc\u66f4\u65b0\u6efe\u8f2a\u4e2d\u7684\u5c08\u6848\u3002"),(0,r.kt)("p",null,"\u53c3\u6578 ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," \u5305\u542b\u5c08\u6848\u7684\u7d22\u5f15\u503c\uff0c\u8a72\u503c\u7528\u65bc\u6a19\u8b58\u6b63\u5728\u66f4\u65b0\u7684\u5c08\u6848\u3002 \u53c3\u6578 ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," \u662f\u5c0d\u6efe\u8f2a\u4e2d\u7684\u53ef\u898b\u5c08\u6848\u7684\u5f15\u7528\u3002 \u66f4\u65b0\u53c3\u6578 ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," \u7684\u5916\u89c0\u6703\u66f4\u65b0\u70ba\u6efe\u8f2a\u4e2d\u53ef\u898b\u5c08\u6848\u7684\u6e32\u67d3\u3002"),(0,r.kt)("p",null,"\u4e0b\u6587\u7d66\u51fa\u4e86\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u6a94 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," \u4e2d\u5be6\u73fe ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," \u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex);\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HPP\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n\nvoid Screen1View::scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n")),(0,r.kt)("p",null,"\u5728\u6a19\u982d\u6a94 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp")," \u4e2d\uff0c\u6703\u8986\u84cb ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," \u51fd\u6578\uff0c\u96a8\u5f8c\u6703\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," \u4e2d\u5be6\u73fe\u9019\u4e9b\u51fd\u6578\u3002"),(0,r.kt)("p",null,"\u672c\u7bc4\u4f8b\u7684\u76ee\u6a19\u662f\u66f4\u65b0\u5177\u6709\u53ef\u898b\u5c08\u6848\u7d22\u5f15\u503c\u7684\u5c08\u6848\u7bc4\u672c\u4e2d\u7684\u6587\u5b57\uff0c\u8207",(0,r.kt)("a",m({parentName:"p"},{href:"scroll-wheel"}),"\u672c\u90e8\u5206\u958b\u982d"),"\u7d66\u51fa\u7684\u7bc4\u4f8b\u76f8\u4f3c\u3002 \u7531\u65bc\u5c08\u6848\u7bc4\u672c\u548c\u6240\u9078\u6a23\u5f0f\u7bc4\u672c\u5747\u57fa\u65bcCustomContainer\uff0c\u56e0\u6b64\u6703\u70ba\u9019\u5169\u500bCustomContainer\u5275\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," \u51fd\u6578\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," \u51fd\u6578\u80fd\u5920\u7372\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," \u53c3\u6578\u4e26\u66f4\u65b0\u5c08\u6848\u7bc4\u672c\u548c\u6240\u9078\u6a23\u5f0f\u7bc4\u672c\u4e2d\u7684\u6587\u5b57\u3002 \u70ba\u5c08\u6848\u547c\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," \u6703\u66f4\u65b0\u53ef\u898b\u5c08\u6848\u7684\u5916\u89c0\uff0c\u5f9e\u800c\u6703\u986f\u793a\u5176\u7d22\u5f15\u503c\u3002"),(0,r.kt)("h3",m({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u6efe\u8f2a\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6efe\u8f2a\u548c\u6e05\u55aeUI\u7bc4\u672c"),(0,r.kt)("h2",m({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_wheel",mdxType:"Link"},"ScrollWheel\u985e\u5225\u7684API\u53c3\u8003"))))}b.isMDXComponent=!0}}]);