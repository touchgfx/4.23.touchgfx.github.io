"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[53715],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,h=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const i=r},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),r=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(59496),r=n(96151);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const c=o},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const i=r},85083:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){return a.createElement("p",null,a.createElement("div",{className:"videoWrapper"},a.createElement("video",{controls:!0},a.createElement("source",{src:this.props.url,type:"video/mp4"}))))}}const i=r},99238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>g});n(59496);var a=n(49613),r=n(89639),i=n(48753),o=n(95375),c=n(28128),l=n(85083);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"achieving-better-performance-with-cacheable-container",title:"\u7528\u53ef\u7f13\u5b58\u5bb9\u5668\u5b9e\u73b0\u66f4\u4f18\u6027\u80fd"},d=void 0,u={unversionedId:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",id:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",title:"\u7528\u53ef\u7f13\u5b58\u5bb9\u5668\u5b9e\u73b0\u66f4\u4f18\u6027\u80fd",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u4f7f\u7528RAM\u6765\u8282\u7ea6\u4e00\u4e9b\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u7ed8\u5236\uff0c\u4ece\u800c\u5728\u4e00\u4e9b\u52a8\u753b\u573a\u666f\u4e2d\u5b9e\u73b0\u66f4\u4f18\u6027\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",permalink:"/4.23/zh-CN/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",draft:!1,tags:[],version:"current",frontMatter:{id:"achieving-better-performance-with-cacheable-container",title:"\u7528\u53ef\u7f13\u5b58\u5bb9\u5668\u5b9e\u73b0\u66f4\u4f18\u6027\u80fd"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.23/zh-CN/docs/category/scenarios-1"},next:{title:"\u52a8\u6001\u52a0\u8f7d\u56fe\u50cf",permalink:"/4.23/zh-CN/docs/development/ui-development/scenarios/loading-images-at-runtime"}},h={},g=[{value:"\u6027\u80fd\u5f71\u54cd",id:"performance-impact",level:2},{value:"\u6d4b\u8bd5\u5e94\u7528",id:"test-application",level:2},{value:"\u91cd\u7ed8\u590d\u6742\u5bb9\u5668\u7684\u6027\u80fd",id:"performance-of-redrawing-complex-containers",level:2},{value:"\u901a\u8fc7\u7f13\u5b58\u6539\u5584\u6027\u80fd",id:"improving-performance-through-caching",level:2},{value:"\u7ed3\u8bba",id:"conclusion",level:2}],v={toc:g},f="wrapper";function k(e){var{components:t}=e,n=m(e,["components"]);return(0,a.kt)(f,p({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u4f7f\u7528RAM\u6765\u8282\u7ea6\u4e00\u4e9b\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u7ed8\u5236\uff0c\u4ece\u800c\u5728\u4e00\u4e9b\u52a8\u753b\u573a\u666f\u4e2d\u5b9e\u73b0\u66f4\u4f18\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u5728\u5e94\u7528\u4e2d\u901a\u8fc7\u62d6\u62fd\u6216\u52a8\u753b\u79fb\u52a8\u63a7\u4ef6\uff08\u5982Image\u6216TextArea\uff09\u65f6\uff0cTouchGFX\u9700\u8981\u5728\u6bcf\u4e00\u5e27\u4e2d\u7684\u65b0\u4f4d\u7f6e\u91cd\u65b0\u7ed8\u5236\u8fd9\u4e9b\u63a7\u4ef6\uff0c\u53e6\u5916\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd8\u9700\u8981\u91cd\u65b0\u7ed8\u5236\u4e4b\u524d\u88ab\u8fd9\u4e9b\u63a7\u4ef6\u8986\u76d6\u7684\u90e8\u5206\u80cc\u666f\u3002"),(0,a.kt)("p",null,"\u5f53\u8fd9\u4e9b\u63a7\u4ef6\u5728\u8ba1\u7b97\u4e0a\u5341\u5206\u590d\u6742\u65f6\uff0c\u5982\u7eb9\u7406\u6620\u5c04\u5668\u3001\u5f62\u72b6\u548c\u5927\u5c3a\u5bf8\u900f\u660e\u56fe\u50cf\uff0c\u7531\u4e8e\u6ca1\u6709\u786c\u4ef6\u52a0\u901f\uff0cMCU\u96be\u4ee5\u9ad8\u6548\u5730\u8fdb\u884c\u6e32\u67d3\u3002 \u5bfc\u81f4\u5c4f\u5e55\u91cd\u65b0\u7ed8\u5236\u4f1a\u8017\u8d39\u5f88\u591a\u95f4\uff0c\u8fdb\u800c\u5f71\u54cd\u5e94\u7528\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u4f7f\u7528\u53ef\u7f13\u5b58\u5bb9\u5668\uff0c\u901a\u8fc7\u907f\u514d\u9ad8\u6210\u672c\u7684\u91cd\u65b0\u7ed8\u5236\u4e3a\u5305\u542b\u8ba1\u7b97\u590d\u6742\u5143\u7d20\u7684\u52a8\u753b\u52a0\u901f\u3002  \u867d\u7136\u6211\u4eec\u4f7f\u7528\u7684\u662fSTM32F429Discovery\u677f\u6267\u884c\u7684\u672c\u6587\u4e2d\u7684\u6d4b\u91cf\uff0c\u53ef\u7f13\u5b58\u5bb9\u5668\u6280\u672f\u4e5f\u5e7f\u6cdb\u5730\u5e94\u7528\u4e8e\u5176\u4ed6\u786c\u4ef6\u5e73\u53f0\u3002 \u4e3a\u4e86\u521b\u5efa\u4f4d\u56fe\u7f13\u5b58\uff0c\u9700\u8981\u4e00\u4e9b\u53ef\u7528\u7684RAM\u3002"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},"\u53e6\u8bf7\u9605\u8bfb",(0,a.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u52a8\u6001\u4f4d\u56fe"),"\u3002"),(0,a.kt)("h2",p({},{id:"performance-impact"}),"\u6027\u80fd\u5f71\u54cd"),(0,a.kt)("p",null,"\u7531\u4e8e\u4f7f\u7528MCU\u79fb\u52a8\u8ba1\u7b97\u6210\u672c\u9ad8\u7684\u63a7\u4ef6\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u5305\u542b\u8bb8\u591a\u5c0f\u6b65\u9aa4\u7684\u52a8\u753b\u4f1a\u56e0\u4e3a\u6bcf\u4e00\u5e27\u7684\u6e32\u67d3\u65f6\u95f4\u8fc7\u957f\u800c\u663e\u5f97\u7f13\u6162\u548c\u8fdf\u6ede\u3002 \u4e3a\u4e86\u66f4\u5feb\u5b8c\u6210\u52a8\u753b\uff08\u5728\u65f6\u95f4\u4e0a\uff09\u5bf9\u52a8\u753b\u8fdb\u884c\u7f16\u7a0b\u4f1a\u5bfc\u81f4\u6bcf\u6b65\u53d8\u5927\uff0c\u5e76\u4e14\u52a8\u753b\u4f1a\u663e\u5f97\u6d41\u7545\u5ea6\u4e0d\u591f\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5728STM32F429-DISCO\u677f\uff08240x320\uff09\u4e0a\u8fd0\u884c\u7684\u4f8b\u5b50\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a\u5168\u5c4f\u5bb9\u5668\u5782\u76f4\u5411\u4e0a\u79fb\u52a8\uff0c\u53e6\u4e00\u4e2a\u7c7b\u4f3c\u7684\u5bb9\u5668\u4ece\u5e95\u90e8\u79fb\u5165\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u89c6\u9891\u4e2d\uff0c",(0,a.kt)("a",p({parentName:"p"},{href:"../ui-components/buttons/toggle-button"}),"ToggleButton"),"\u7528\u4e8e\u5207\u6362\u53ef\u7f13\u5b58\u5bb9\u5668\u542f\u7528\u548c\u7981\u7528\u3002 \u6027\u80fd\u5dee\u5f02\u663e\u800c\u6613\u89c1\u3002"),(0,a.kt)(l.Z,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",mdxType:"Video"}),(0,a.kt)("p",null,"\u8fd9\u4e24\u4e2a\u79fb\u52a8\u7684\u5bb9\u5668\u90fd\u5305\u542b\u4e00\u4e2a\u80cc\u666f ",(0,a.kt)("a",p({parentName:"p"},{href:"../ui-components/shapes/box"}),"\u6846"),"\u3001\u4e00\u4e2a ",(0,a.kt)("a",p({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"\u6587\u672c\u533a"),"\u3001 \u548c\u4e00\u4e2a ",(0,a.kt)("a",p({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"\u7eb9\u7406\u6620\u5c04\u5668"),"\u3002 \u7eb9\u7406\u6620\u5c04\u5668\u914d\u7f6e\u4e3a\u4f7f\u7528\u53cc\u7ebf\u6027\u6e32\u67d3\u7b97\u6cd5\uff0c\u5168\u5c40\u963f\u5c14\u6cd5\u503c\u4e3a174\uff0c\u8fd9\u4f7f\u5f97\u5176\u7ed8\u5236\u6210\u672c\u9ad8\u6602\u3002 \u5728STM32F429-DISCO\u677f\u4e0a\uff0c\u6574\u4e2a\u5c4f\u5e55\u7684\u6e32\u67d3\u65f6\u95f4\u7ea6\u4e3a100 ms\u3002"),(0,a.kt)("h2",p({},{id:"test-application"}),"\u6d4b\u8bd5\u5e94\u7528"),(0,a.kt)("p",null,"\u4e3a\u4e86\u79fb\u52a8\u8fd9\u4e24\u4e2a\u5143\u7d20\uff0c\u540c\u65f6\u7ef4\u6301\u5b83\u4eec\u7684\u76f8\u5bf9\u4f4d\u7f6e\uff0c\u5c06\u5b83\u4eec\u653e\u5728\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u7684\u7236\u5bb9\u5668\u4e2d\uff0c\u7236\u5bb9\u5668\u7684\u9ad8\u5ea6\u662f\u4efb\u4f55\u4e00\u4e2a\u5b50\u5bb9\u5668\u7684\u4e24\u500d\uff0c\u5176\u5c3a\u5bf8\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"240 x 640 (2*320)"),"\u3002 \u901a\u8fc7\u5728TouchGFX Designer\u4e2d\u5c06\u5bb9\u5668\u58f0\u660e\u4e3a\u79fb\u52a8\u52a8\u753b\u7c7b\uff0c\u4f7f\u5176\u80fd\u591f\u63a5\u6536\u5e94\u7528ticks\u5e76\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5f62\u6210\u52a8\u753b\uff0c\u5728\u8fd9\u6bb5\u65f6\u95f4\u91cc\u53ef\u4ee5\u6d4b\u91cf\u6027\u80fd\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.webp",mdxType:"Figure"},"\u53ef\u7f13\u5b58\u5bb9\u5668\u6d4b\u8bd5\u5e94\u7528\u603b\u89c8"),(0,a.kt)("p",null,"\u4e0a\u65b9\u5bb9\u5668\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\uff0c\u5904\u4e8e\u4f4d\u7f6e (x=0, y=0)\u3002 \u4e0b\u65b9\u5bb9\u5668\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\uff0c\u5904\u4e8e\u4f4d\u7f6e (x=0, y=320)\uff0c\u5728\u7236\u5bb9\u5668",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u4e2d\uff0c\u5b83\u4f4d\u4e8econtainer1\u7684\u6b63\u4e0b\u65b9\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u4e2d\uff0c\u5728\u6211\u4eec\u79fb\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u65f6\uff0c\u4e24\u4e2a\u5143\u7d20\u4f1a\u4e00\u8d77\u79fb\u52a8\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u79fb\u52a8\u5230\u4f4d\u7f6e (x=0, y=320)\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\u5c06\u4e0d\u53ef\u89c1\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\u5c06\u5b8c\u5168\u53ef\u89c1\u3002 \u8fd9\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u52a8\u753b\u53ef\u4f7f\u7528TouchGFX Designer\u4e2d\u7684\u4ea4\u4e92\u6765\u521b\u5efa\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u4f4d\u4e8e\u4e0b\u65b9\u65f6\u5411\u4e0a\u79fb\u52a8\uff0c\u5728\u5b83\u5df2\u7ecf\u4f4d\u4e8e\u4e0a\u65b9\u65f6\u5411\u4e0b\u79fb\u52a8\u3002 \u4e3a\u7b80\u5355\u8d77\u89c1\uff0c\u5c06\u4ee3\u7801\u63d2\u5165\u89c6\u56fe\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"handleClickEvent")," \u4e8b\u4ef6\u53e5\u67c4\u4e2d\uff0c\u5b9e\u73b0\u5728\u7528\u6237\u89e6\u6478\u5c4f\u5e55\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\uff08ToggleButton\u4ee5\u4e0b\uff09\u65f6\u6267\u884c\u4ee3\u7801\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{9-12}","{9-12}":!0}),"void Screen1View::handleClickEvent(const ClickEvent& evt)\n{\n    //Forward event to base View (for the ToggleButton to work)\n    View::handleClickEvent(evt);\n    //If touch is released and y > 50 (below the ToggleButton), move masterContainer\n    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)\n    {\n        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;\n        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,\n                            20 /* ticks */,\n                            EasingEquations::cubicEaseInOut,\n                            EasingEquations::cubicEaseInOut);\n    }\n}\n")),(0,a.kt)("h2",p({},{id:"performance-of-redrawing-complex-containers"}),"\u91cd\u7ed8\u590d\u6742\u5bb9\u5668\u7684\u6027\u80fd"),(0,a.kt)("p",null,"\u5982\u524d\u6587\u6240\u8ff0\uff0c\u5f53MCU\u5fc5\u987b\u5728\u52a8\u753b\u7684\u6bcf\u4e00\u4e2a\u5c0f\u6b65\u9aa4\u91cd\u65b0\u7ed8\u5236\u9ad8\u6210\u672c\u7684\u7eb9\u7406\u6620\u5c04\u5668\u65f6\uff0c\u4e00\u4e2a\u5e27\u7684\u6e32\u67d3\u65f6\u95f4\u7ea6\u4e3a100 ms\u3002 \u76f8\u5f53\u4e8e\u6bcf\u79d210\u5e27\uff08fps\uff09\u3002 \u6574\u4e2a\u52a8\u753b\u670920\u5e27\uff0c\u56e0\u6b64\u9700\u8981\u7ea6\u4e24\u79d2\u949f\u3002"),(0,a.kt)("p",null,"\u5728STM32F429-DISCO\u8bc4\u4f30\u5957\u4ef6\u4e0a\uff0c\u6e32\u67d3\u65f6\u95f4\u4f5c\u4e3aGPIO G14\u4e0a\u7684\u6570\u5b57\u4fe1\u53f7\u6765\u63d0\u4f9b\u3002 VSYNC\u4fe1\u53f7\u5728G13\u4e0a\u63d0\u4f9b\u3002 GPIO\u914d\u7f6e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"GPIO.cpp"),"\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u662f\u5411\u4e0a\u79fb\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u65f6\uff0c\u5e94\u7528\u7684VSYNC\u548cRENDER_TIME\u7684\u6d4b\u91cf\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.webp",mdxType:"Figure"},"Saleae Logic Software VSYNC\u548c\u6e32\u67d3\u65f6\u95f4\u6d4b\u91cf"),(0,a.kt)("p",null,"\u6e32\u67d3\u65f6\u95f4\u662f\u7b2c\u4e00\u4e2a\u4fe1\u53f7\uff08\u4f4e\u7535\u5e73\u6709\u6548\uff09\u3002 \u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u79fb\u52a8\u52a8\u753b\u4e2d\u7b2c\u4e00\u5e27\u7684\u6e32\u67d3\u65f6\u95f4\u662f99.29 ms\u3002"),(0,a.kt)("p",null,"\u8f83\u4f4e\u7684\u4fe1\u53f7\u662fVSYNC\uff0c\u5728\u50cf\u7d20\u65f6\u949f\u5f00\u59cb\u8f93\u51fa\u5230\u5c4f\u65f6\uff0c\u6bcf\u5e27\u90fd\u6709\u4e00\u4e2a\u4ece\u9ad8\u5411\u4f4e\u7684\u8f6c\u6362\u8fc7\u7a0b\u3002 \u5728\u4e0a\u9762\u6d4b\u91cf\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u7ed8\u5236\u5355\u5e27\u5360\u4e86\u5c4f\u663e7\u5e27\u7684\u65f6\u95f4\u3002 \u5728\u7b2c8\u4e2aVSYNC\u4fe1\u53f7\u65f6\u5f00\u59cb\u4e0b\u4e00\u5e27\u7684\u6e32\u67d3\u3002 \u5728\u6e32\u67d3\u8fc7\u7a0b\u4e2d\uff0c\u663e\u793a\u5c4f\u91cd\u590d\u663e\u793a\u5df2\u7ed8\u5236\u7684\u4e0a\u4e00\u5e27\u7684\u5185\u5bb9\uff08\u5728\u53e6\u4e00\u4e2a\u5e27\u7f13\u51b2\u4e2d\uff09\u3002"),(0,a.kt)("h2",p({},{id:"improving-performance-through-caching"}),"\u901a\u8fc7\u7f13\u5b58\u6539\u5584\u6027\u80fd"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5c06\u5bb9\u5668\u6e32\u67d3\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\u6765\u6539\u5584\u4e0a\u9762\u79fb\u52a8\u52a8\u753b\u7684\u6027\u80fd\u3002 \u6b64\u540e\uff0c\u6211\u4eec\u53ea\u9700\u5c06\u8be5\u5185\u5b58\u4e2d\u7684\u50cf\u7d20\u79fb\u52a8\u5230\u5e27\u7f13\u51b2\uff08\u4f7f\u7528DMA\uff09\uff0c\u800c\u4e0d\u662f\u4f7f\u7528MCU\u91cd\u65b0\u7ed8\u5236\u590d\u6742\u7684\u63a7\u4ef6\u3002 \u5373\u4f7f\u5e94\u7528\u53ea\u4f7f\u7528MCU\u5c31\u53ef\u4ee5\u8fbe\u5230\u6bcf\u79d260\u5e27\uff0c\u4e5f\u4f1a\u5fd9\u4e8e\uff08\u53ef\u80fd\u662f100% MCU\u8d1f\u8f7d\uff09\u91cd\u590d\u6267\u884c\u76f8\u540c\u8ba1\u7b97\uff0c\u800c\u4e0d\u662f\u6267\u884c\u66f4\u91cd\u8981\u7684\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5bb9\u5668\u7684\u8fd9\u4e2a\u201c\u5185\u5b58\u56fe\u50cf\u201d\u53ef\u4ee5\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\u7684\u4e0d\u540c\u4f4d\u7f6e\uff0c\u65e0\u9700\u91cd\u65b0\u6e32\u67d3\u5bb9\u5668\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\u5c31\u662f\u901a\u8fc7TouchGFX Designer\u4f7f\u80fd\u7f13\u5b58\uff0c\u52fe\u9009\u5bb9\u5668\u7684 ",(0,a.kt)("em",{parentName:"p"},"Cacheable")," \u5c5e\u6027\uff0c\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"container1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),":"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.webp",mdxType:"Figure"},"\u201c\u5bb9\u5668\u201d\u63a7\u4ef6\u7684\u201c\u53ef\u7f13\u5b58\u5bb9\u5668\u201d\u9009\u9879"),(0,a.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u5728\u53ef\u4ee5\u5c06\u5bb9\u5668\u7f13\u5b58\u5230\u5176\u4e2d\u7684RAM\u4e2d\u521b\u5efa\u4e24\u5e45\u52a8\u6001\u4f4d\u56fe\u3002"),(0,a.kt)("p",null,"\u786e\u5b9a\u4f4d\u56fe\u7f13\u5b58\u5728RAM\u4e2d\u7684\u5b58\u50a8\u5730\u5740\u3002 \u5c31\u672c\u4f8b\u800c\u8a00\uff0c\u6211\u4eec\u5c06\u5b83\u653e\u5728SDRAM\u4e2d\uff08STM32F429\u4e0a\u4ece\u5730\u57400xd0000000\u5f00\u59cb\uff09\uff0c\u5c31\u5728\u5e27\u7f13\u51b2\u4e4b\u540e\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8eWindows\u4eff\u771f\u5668\uff0c\u5728\u5168\u5c40\u53d8\u91cf\u4e2d\u5206\u914d\u7f13\u5b58\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n    uint32_t sdramBuffer[8*1024*1024/4];\n    uint16_t* sdram = (uint16_t*)sdramBuffer;\n#else\n    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);\n#endif\n")),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u4f4d\u56fe\u7f13\u5b58\u5e76\u521b\u5efa\u4e24\u5e45\u52a8\u6001\u4f4d\u56fe\u7528\u4e8e\u7f13\u5b58\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{2-2}","{2-2}":!0}),"//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb\nBitmap::setCache(sdram, 320*1024, 2); //320Kb cache\ndynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\ndynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\n")),(0,a.kt)("p",null,"\u5c06\u52a8\u6001\u4f4d\u56fe\u5206\u914d\u7ed9\u5bb9\u5668\u5e76\u5c06\u5b83\u4eec\u8bbe\u7f6e\u4e3a\u7f13\u5b58\u6a21\u5f0f\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"//Assign the bitmaps to the Cacheable Containers\ncontainer1.setCacheBitmap(dynamicBitmap1);\ncontainer2.setCacheBitmap(dynamicBitmap2);\n\n//Enable caching\ncontainer1.enableCachedMode(true);\ncontainer2.enableCachedMode(true);\n\n//Finally update the cached bitmaps\ncontainer1.updateCache();\ncontainer2.updateCache();\n")),(0,a.kt)("p",null,"\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Container::updateCache()"),"\u4f1a\u5c06\u4e24\u4e2a\u5bb9\u5668\u6e32\u67d3\u5230\u5b83\u4eec\u5404\u81ea\u7684\u4f4d\u56fe\u4e2d\u3002 \u5728\u4efb\u4f55\u9700\u8981\u5bb9\u5668\u66f4\u65b0\u72b6\u6001\u7684\u65f6\u5019\u8c03\u7528\u6b64\u65b9\u6cd5\u3002 \u8fd9\u5fc5\u987b\u7531\u5f00\u53d1\u8005\u5728\u5e94\u7528\u4ee3\u7801\u4e2d\u8fdb\u884c\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u5728\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\u542f\u7528\u7f13\u5b58\u540e\uff0c\u73b0\u5728\u7684\u6027\u80fd\u6d4b\u91cf\u663e\u793a\uff0c\u6e32\u67d3\u65f6\u95f4\u4ece~99ms\u7f29\u77ed\u5230~5ms\uff0c\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u8f7b\u677e\u5730\u4ee560\u5e27\u6bcf\u79d2\u7684\u901f\u5ea6\u8fdb\u884c\u6e32\u67d3\uff0c\u5e76\u572820\u5e27\u5185\u5b8c\u6210\u6574\u4e2a\u52a8\u753b\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.webp",mdxType:"Figure"},"Saleae Logic Software VSYNC\u548c\u6e32\u67d3\u65f6\u95f4\u6d4b\u91cf"),(0,a.kt)("h2",p({},{id:"conclusion"}),"\u7ed3\u8bba"),(0,a.kt)("p",null,"\u5982\u679c\u5bf9\u8c61\u5728\u8ba1\u7b97\u4e0a\u5341\u5206\u590d\u6742\u4e14\u5728\u4e0d\u540c\u52a8\u753b\u6b65\u9aa4\u4e4b\u95f4\u65e0\u53d8\u5316\uff0c\u5728\u5236\u6210\u52a8\u753b\uff08\u9891\u7e41\u79fb\u52a8\uff09\u65f6\uff0c\u4f7f\u7528\u5305\u542b\u52a8\u6001\u4f4d\u56fe\u7684\u53ef\u7f13\u5b58\u5bb9\u5668\u53ef\u663e\u8457\u7f29\u77ed\u6e32\u67d3\u65f6\u95f4\u3002 \u5982\u679c\u7f13\u5b58\u5fc5\u987b\u66f4\u65b0\uff08\u5982\u65f6\u95f4\u66f4\u65b0\u65f6\u7684\u8868\u76d8\uff09\uff0c\u5728\u5e94\u7528\u63a7\u5236\u52a8\u753b\u671f\u95f4\uff0c\u53ef\u4ee5\u5728\u7279\u5b9a\u7684\u70b9\u91cd\u65b0\u8ba1\u7b97\u7f13\u5b58\u5185\u5bb9\u3002"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u52a8\u6001\u4f4d\u56fe")),(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"loading-images-at-runtime",mdxType:"Link"},"\u52a8\u6001\u4f4d\u56fe\uff1a\u8fd0\u884c\u65f6\u52a0\u8f7d\u56fe\u50cf"))))}k.isMDXComponent=!0}}]);