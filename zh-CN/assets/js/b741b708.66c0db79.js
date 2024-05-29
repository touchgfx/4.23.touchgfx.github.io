"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[93154],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(m,".").concat(u)]||c[u]||s[u]||l;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const i=o},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},94790:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const l=a},49018:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}const i=o},21100:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const i=o},49195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>b,frontMatter:()=>u,metadata:()=>k,toc:()=>v});n(59496);var r=n(49613),a=n(89639),l=n(48753),o=n(49018),i=n(21100),m=n(95375),p=n(94790),d=n(28128);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"svg-image",title:"SVG\u56fe\u50cf"},g=void 0,k={unversionedId:"development/ui-development/ui-components/images/svg-image",id:"development/ui-development/ui-components/images/svg-image",title:"SVG\u56fe\u50cf",description:"SVG\u56fe\u50cf\u662f\u4e00\u79cd\u7ed8\u5236SVG\u56fe\u50cf\u6587\u4ef6\u7684\u63a7\u4ef6\uff0c\u80fd\u56f4\u7ed5\u53ef\u8c03\u65cb\u8f6c\u4e2d\u5fc3\u81ea\u7531\u7f29\u653e\u548c\u65cb\u8f6c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/svg-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/svg-image",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/images/svg-image",draft:!1,tags:[],version:"current",frontMatter:{id:"svg-image",title:"SVG\u56fe\u50cf"},sidebar:"docs",previous:{title:"\u7eb9\u7406\u6620\u5c04\u5668",permalink:"/4.23/zh-CN/docs/development/ui-development/ui-components/images/texture-mapper"},next:{title:"Containers",permalink:"/4.23/zh-CN/docs/category/containers"}},h={},v=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"\u7528\u6237\u4ee3\u7801",id:"user-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],N={toc:v},f="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(f,c({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SVG\u56fe\u50cf\u662f\u4e00\u79cd\u7ed8\u5236SVG\u56fe\u50cf\u6587\u4ef6\u7684\u63a7\u4ef6\uff0c\u80fd\u56f4\u7ed5\u53ef\u8c03\u65cb\u8f6c\u4e2d\u5fc3\u81ea\u7531\u7f29\u653e\u548c\u65cb\u8f6c\u3002"),(0,r.kt)(o.Z,{mdxType:"Note"},(0,r.kt)("li",null,"\u5fc5\u987b\u5728TouchGFX Generator\u4e2d\u542f\u7528",(0,r.kt)(m.Z,{to:"../../../../development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering",mdxType:"Link"},"Vector Rendering\uff08\u77e2\u91cf\u6e32\u67d3\uff09"),"\uff0c\u624d\u80fd\u4f7f\u7528SVG Image\uff08\u56fe\u50cf\uff09\u63a7\u4ef6\u3002"),(0,r.kt)("li",null,"\u590d\u6742\u7684SVG\u56fe\u50cf\u6587\u4ef6\u4f1a\u5bf9MCU\u8d1f\u8f7d\u4ea7\u751f\u91cd\u5927\u5f71\u54cd\u3002")),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/svg-image/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684SVG\u56fe\u50cf"),(0,r.kt)("h2",c({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"SVG \u56fe\u50cf\u4f4d\u4e8eTouchGFX \u8bbe\u8ba1\u5668\u4e2d\u7684\u56fe\u50cf\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/svg-image/widget-group-v4.21.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684SVG \u56fe\u50cf"),(0,r.kt)("h2",c({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2dSVG \u56fe\u50cf\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX\u8bbe\u8ba1\u5668\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \u548c ",(0,r.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002 \u63a7\u4ef6\u7684\u5927\u5c0f\u662f\u7531\u5173\u8054\u7684\u56fe\u50cf\u5927\u5c0f\u51b3\u5b9a\u7684\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"SVG")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"SVG"),"\u6307\u5b9a\u5173\u8054\u7684SVG\u56fe\u50cf\u3002 \u4ece\u201c\u9879\u76ee\u201d\u9009\u9879\u5361\u4e2d\u7684\u5df2\u5bfc\u5165\u56fe\u50cf\u4e2d\u9009\u62e9\uff0c\u6216\u4ece\u201cStock\u201d\u9009\u9879\u5361\u4e2d\u7684\u514d\u8d39TouchGFX\u56fe\u50cf\u96c6\u5408\u4e2d\u9009\u62e9\u3002 ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a\u56fe\u50cf\u5230\u4e2d\u5fc3")," \u6307\u5b9a\u56fe\u50cf\u4f4d\u7f6e\u662f\u5426\u5e94\u9501\u5b9a\u5728\u5c0f\u90e8\u4ef6\u7684\u4e2d\u5fc3\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"\u6b64\u9009\u9879\u4ec5\u9002\u7528\u4e8eTouchGFX \u8bbe\u8ba1\u5668\uff0c\u5373\uff1a\u5982\u679c\u5728\u8fd0\u884c\u65f6\u8c03\u6574SVG\u56fe\u50cf\u7684\u5927\u5c0f\uff0c\u6b64\u9009\u9879\u5bf9\u56fe\u50cf\u7684\u5c45\u4e2d\u4f4d\u7f6e\u65e0\u4efb\u4f55\u5f71\u54cd\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Fit Image To Size"),"\u5c06\u7f29\u653e\u56fe\u50cf\u4ee5\u9002\u5e94SVG\u56fe\u50cf\u63a7\u4ef6\u7684\u5927\u5c0f\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"\u6b64\u9009\u9879\u4ec5\u9002\u7528\u4e8eTouchGFX \u8bbe\u8ba1\u5668\uff0c\u5373\uff1a\u5982\u679c\u5728\u8fd0\u884c\u65f6\u8c03\u6574SVG\u56fe\u50cf\u7684\u5927\u5c0f\uff0c\u6b64\u9009\u9879\u5bf9\u56fe\u50cf\u5927\u5c0f\u65e0\u4efb\u4f55\u5f71\u54cd\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u56fe\u50cf\u4f4d\u7f6e")," ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u56fe\u50cf\u5de6\u4e0a\u89d2\u5728\u6a21\u5f0f\u7a97\u53e3\u4e2d\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u56fe\u50cf\u7f29\u653e")," ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a",(0,r.kt)("em",{parentName:"td"},"X"),"\u548c/\u6216",(0,r.kt)("em",{parentName:"td"},"Y"),"\u65b9\u5411\u7f29\u653e\u56fe\u50cf\u7684\u7f29\u653e\u56e0\u5b50\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u65cb\u8f6c\u4e2d\u5fc3")," ",(0,r.kt)("em",{parentName:"td"},"X"),"\u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u65cb\u8f6c\u4e2d\u5fc3\uff0c ",(0,r.kt)("em",{parentName:"td"},"\u65cb\u8f6c(\u5ea6)")," \u6307\u5b9a\u65cb\u8f6c\u56fe\u50cf\u7684\u89d2\u5ea6(\u5ea6)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8"),"\u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener"),"\u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X"),"\u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h2",c({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7ecd\u4e86SVG\u56fe\u50cf\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",c({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u52a8\u4f5c")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u65cb\u8f6cSVG\u56fe\u50cf")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u76f8\u5bf9\u4e8eSVG\u56fe\u50cf\u7684\u5f53\u524d\u65b9\u5411\u6216\u7279\u5b9a\u89d2\u5ea6\u56f4\u7ed5\u5176",(0,r.kt)("em",{parentName:"td"},"\u65cb\u8f6c\u4e2d\u5fc3"),"\u65cb\u8f6cSVG\u56fe\u50cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u7f29\u653eSVG\u56fe\u50cf")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u7f29\u653eSVG\u56fe\u50cf\uff08\u76f8\u5bf9\u4e8e\u5176\u5f53\u524d\u5c3a\u5bf8\u6216\u76f8\u5bf9\u4e8e\u7279\u5b9a\u5c3a\u5bf8\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u8c03\u6574\u63a7\u4ef6\u7684\u5c3a\u5bf8")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u8c03\u6574\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u52a8\u4f5c")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u4e3aFalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u4e3aTrue\uff09\u3002")))),(0,r.kt)("h3",c({},{id:"triggers"}),"\u89e6\u53d1"),(0,r.kt)("p",null,"SVG\u56fe\u50cf\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h2",c({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"SVG\u56fe\u50cf\u63a7\u4ef6\u7684\u6027\u80fd\u53d6\u51b3\u4e8e\u6240\u4f7f\u7528\u7684SVG\u56fe\u50cf\u6587\u4ef6\u7684\u590d\u6742\u6027\uff0c\u5982\uff1a\u5143\u7d20\u6570\u91cf\u3001\u8def\u5f84\u6570\u91cf\u3001\u8def\u5f84\u5927\u5c0f\u3001\u6e10\u53d8\u7684\u4f7f\u7528\u7b49\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06SVG\u56fe\u50cf\u89c6\u4e3a\u8981\u6c42\u9ad8\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u7ed8\u56fe\u6027\u80fd\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",c({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",c({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",c({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX \u8bbe\u8ba1\u5668\u662f\u5982\u4f55\u521b\u5efaSVG\u56fe\u50cf\u7684\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/canvas_widget_renderer/CanvasWidgetRenderer.hpp>\n#include <touchgfx/Color.hpp>\n#include<images/SVGDatabase.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    svgImage.setSVG(SVG_ALTERNATE_THEME_IMAGES_LOGOS_TOUCHGFX_GRADIENT_EMBOSSED_SVG_ID);\n    svgImage.setPosition(26, 25, 260, 180);\n    svgImage.setScale(1.2f, 0.8f);\n    svgImage.setImagePosition(40, 30);\n    svgImage.setRotationCenter(130, 90);\n    svgImage.setRotation(5);\n\n    add(svgImage);\n}\n\nScreen1ViewBase::~Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::resetBuffer();\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n}\n")),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53caSVG Image\u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"svgImage.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,r.kt)("h3",c({},{id:"user-code"}),"\u7528\u6237\u4ee3\u7801"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u793a\u4f8b\u663e\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u8fde\u7eed\u8c03\u6574",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent\uff08\uff09"),"\u4e2d\u7684\u65cb\u8f6c\u6765\u65cb\u8f6cSVG\u56fe\u50cf\uff1a"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{20-21}","{20-21}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::handleTickEvent()\n{\n    svgImage.setRotation(svgImage.getRotation() + 2.0f);\n    svgImage.invalidate();\n}\n")),(0,r.kt)("h3",c({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u57fa\u4e8e\u6587\u672c\u7684SVG\u56fe\u50cf\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX \u8bbe\u8ba1\u5668\u4e2d\u4f7f\u7528\u4ee5\u4e0bUI\u6a21\u677f\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/svg-image-example-v4.21.webp",mdxType:"Figure"},"TouchGFX \u8bbe\u8ba1\u5668\u4e2d\u7684SVG\u56fe\u50cfUI\u6a21\u677f"),(0,r.kt)("h2",c({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering",mdxType:"Link"},"TouchGFX Generator\u4e2d\u7684\u77e2\u91cf\u6e32\u67d3\u914d\u7f6e")),(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../development/ui-development/touchgfx-engine-features/svg",mdxType:"Link"},"SVG\u56fe\u5f62")),(0,r.kt)("li",null,(0,r.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_s_v_g_image",mdxType:"Link"}," SVG Image\u7c7b\u7684API\u53c2\u8003"))))}b.isMDXComponent=!0}}]);