"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[81758],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const i=a},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const o=l},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=a},94790:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const i=a},21100:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const o=l},88050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>k});n(59496);var r=n(49613),a=n(89639),i=n(48753),l=n(21100),o=n(94790),s=n(95375),p=n(28128);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"list-layout",title:"\u5217\u8868\u5e03\u5c40"},m=void 0,h={unversionedId:"development/ui-development/ui-components/containers/list-layout",id:"development/ui-development/ui-components/containers/list-layout",title:"\u5217\u8868\u5e03\u5c40",description:"\u5217\u8868\u5e03\u5c40\u63a7\u4ef6\u5c5e\u4e8e\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u6309\u7ed9\u5b9a\u65b9\u5411\u5c06\u5176\u5b50\u63a7\u4ef6\u6392\u5217\u5728\u5217\u8868\u4e2d\u3002 \u5411\u5217\u8868\u5e03\u5c40\u6dfb\u52a0\u63a7\u4ef6\u6216\u4ece\u5217\u8868\u5e03\u5c40\u4e2d\u79fb\u9664\u63a7\u4ef6\u4f1a\u91cd\u65b0\u6392\u5217\u5b50\u90e8\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/list-layout.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/list-layout",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/containers/list-layout",draft:!1,tags:[],version:"current",frontMatter:{id:"list-layout",title:"\u5217\u8868\u5e03\u5c40"},sidebar:"docs",previous:{title:"\u6ed1\u52a8\u5bb9\u5668",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/containers/swipe-container"},next:{title:"\u6a21\u5f0f\u7a97\u53e3",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/containers/modal-window"}},g={},k=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"Size of the List Layout",id:"size-of-listlayout",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],y={toc:k},v="wrapper";function f(e){var{components:t}=e,n=d(e,["components"]);return(0,r.kt)(v,u({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5217\u8868\u5e03\u5c40\u63a7\u4ef6\u5c5e\u4e8e",(0,r.kt)("a",u({parentName:"p"},{href:"container"}),"\u5bb9\u5668"),"\uff0c\u4f1a\u81ea\u52a8\u6309\u7ed9\u5b9a\u65b9\u5411\u5c06\u5176\u5b50\u63a7\u4ef6\u6392\u5217\u5728\u5217\u8868\u4e2d\u3002 \u5411\u5217\u8868\u5e03\u5c40\u6dfb\u52a0\u63a7\u4ef6\u6216\u4ece\u5217\u8868\u5e03\u5c40\u4e2d\u79fb\u9664\u63a7\u4ef6\u4f1a\u91cd\u65b0\u6392\u5217\u5b50\u90e8\u4ef6\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u5217\u8868\u5e03\u5c40"),(0,r.kt)("h2",u({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u5217\u8868\u5e03\u5c40\u4f4d\u4e8eTouchGFX Designer\u4e2d\u7684\u5bb9\u5668\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5217\u8868\u5e03\u5c40"),(0,r.kt)("h2",u({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u5217\u8868\u5e03\u5c40\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002 \u5217\u8868\u5e03\u5c40\u7684\u5927\u5c0f\u603b\u8ba1\u4e3a\u5176\u5b50\u90e8\u4ef6\u7684\u603b\u5927\u5c0f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u65b9\u5411")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u65b9\u5411"),"\u6307\u5b9a\u5e03\u5c40\u7684\u6392\u5217\u65b9\u5411\u3002 \u5728\u6cbf\u4e1c\u5411\uff08\u5411\u53f3\uff09\u6392\u5217\u7684\u6c34\u5e73\u5e03\u5c40\u4e0e\u6cbf\u897f\u5411\uff08\u5411\u4e0b\uff09\u6392\u5217\u7684\u5782\u76f4\u5e03\u5c40\u4e4b\u95f4\u8fdb\u884c\u9009\u62e9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h2",u({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u7684\u5217\u8868\u5e03\u5c40\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",u({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,r.kt)("h3",u({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("p",null,"\u5217\u8868\u5e03\u5c40\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h2",u({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u5217\u8868\u5e03\u5c40\u81ea\u8eab\u5bf9\u6027\u80fd\u6ca1\u6709\u663e\u8457\u5f71\u54cd\uff0c\u51e0\u4e4e\u5b8c\u5168\u4f9d\u8d56\u4e8e\u5176\u5b50\u90e8\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u5217\u8868\u89c6\u4e3a\u975e\u5e38\u5feb\u901f\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u7ed8\u56fe\u6027\u80fd\u7684\u5e38\u89c4\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",u({parentName:"p"},{href:"../general-ui-component-performance"}),"\u5e38\u89c4UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",u({},{id:"size-of-listlayout"}),"Size of the List Layout"),(0,r.kt)("p",null,"When a List Layout is inserted in the TouchGFX Designer, the size is set to 250 x 250 pixels.",(0,r.kt)("br",{parentName:"p"}),"\n","If you add any Widgets to the List Layout in the Designer the size of the List Layout is adjusted to fit the children on both width and height."),(0,r.kt)("p",null,"If you don't add any children in the Designer but only in code, the List Layout does not remove the initial space created by the Designer."),(0,r.kt)("p",null,"Here is an example in the TouchGFX Designer where we have added a List Layout. We have a yellow Box in the background, and a white Box just behind the List Layout to shows it's area:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/designer-example.png",mdxType:"Figure"},"List Layout in the Designer."),(0,r.kt)("p",null,"We have not added any children to the List Layout, so the size is the default 250 x 250 pixels."),(0,r.kt)("p",null,"We will add three TextAreas in the user code using the following:"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{8-8}","{8-8}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    //listLayout1.setWidthHeight(0, 0); // Remove excess space in List Layout\n    for (int i=0; i < 3; i++)\n    {\n        TextArea *textArea = new TextArea();\n        textArea->setWidthHeight(100, 25);\n        textArea->setTypedText(touchgfx::TypedText(T_RESOURCEID1));\n        listLayout1.add(*textArea);\n    }\n    listBackground.setWidthHeight(listLayout1);\n}\n")),(0,r.kt)("p",null,"The last line makes the white Box the same size as the List Layout (after adding the new children). The application looks like this:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/demo-1.png",mdxType:"Figure"},"List Layout example."),(0,r.kt)("p",null,"We see that the List Layout is higher than the 3 children. It is exactly 375 pixels high and 250 pixels wide."),(0,r.kt)("p",null,"If we uncomment line 8 in the setupScreen() function we get instead the below image:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/demo-2.png",mdxType:"Figure"},"List Layout example."),(0,r.kt)("h2",u({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",u({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u521b\u5efa\u5217\u8868\u5e03\u5c40\u7684\u3002"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    listLayout1.setDirection(touchgfx::SOUTH);\n    listLayout1.setXY(90, 111);\n\n    box1.setWidth(50);\n    box1.setHeight(50);\n    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n    listLayout1.add(box1);\n\n    add(listLayout1);\n}\n")),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528ListLayout\u7c7b\u4e2d\u7684\u8fd9\u4e9b\u51fd\u6570\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6570\u3002 \u5982\u679c\u4fee\u6539\u4e86\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bb0\u5f97\u8c03\u7528 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"listLayout1.invalidate()")," \u4ee5\u5f3a\u5236\u91cd\u7ed8\u3002"),(0,r.kt)("h3",u({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u5217\u8868\u5e03\u5c40\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u6a21\u677f\u4e4b\u4e00\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/list-layout-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5217\u8868\u5e03\u5c40\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)("h2",u({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_list_layout",mdxType:"Link"}," ListLayout\u7c7b\u7684API\u53c2\u8003"))))}f.isMDXComponent=!0}}]);