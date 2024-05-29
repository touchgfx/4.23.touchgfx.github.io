"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9041],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,h=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const i=r},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),r=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(59496),r=n(96151);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const c=o},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const i=r},85083:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){return a.createElement("p",null,a.createElement("div",{className:"videoWrapper"},a.createElement("video",{controls:!0},a.createElement("source",{src:this.props.url,type:"video/mp4"}))))}}const i=r},71091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>g});n(59496);var a=n(49613),r=n(89639),i=n(48753),o=n(95375),c=n(28128),l=n(85083);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"achieving-better-performance-with-cacheable-container",title:"\u7528\u53ef\u7de9\u5b58\u5bb9\u5668\u5be6\u73fe\u66f4\u512a\u6027\u80fd"},d=void 0,u={unversionedId:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",id:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",title:"\u7528\u53ef\u7de9\u5b58\u5bb9\u5668\u5be6\u73fe\u66f4\u512a\u6027\u80fd",description:"\u672c\u7bc0\u4ecb\u7d39\u5982\u4f55\u901a\u904e\u4f7f\u7528RAM\u4f86\u7bc0\u7d04\u4e00\u4e9b\u53ef\u91cd\u8907\u4f7f\u7528\u7684\u7e6a\u88fd\uff0c\u5f9e\u800c\u5728\u4e00\u4e9b\u52d5\u756b\u5834\u666f\u4e2d\u5be6\u73fe\u66f4\u512a\u7684\u6027\u80fd\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",permalink:"/4.23/zh-TW/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",draft:!1,tags:[],version:"current",frontMatter:{id:"achieving-better-performance-with-cacheable-container",title:"\u7528\u53ef\u7de9\u5b58\u5bb9\u5668\u5be6\u73fe\u66f4\u512a\u6027\u80fd"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.23/zh-TW/docs/category/scenarios-1"},next:{title:"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf",permalink:"/4.23/zh-TW/docs/development/ui-development/scenarios/loading-images-at-runtime"}},h={},g=[{value:"\u6027\u80fd\u5f71\u97ff",id:"performance-impact",level:2},{value:"\u6e2c\u8a66\u61c9\u7528",id:"test-application",level:2},{value:"\u91cd\u65b0\u7e6a\u88fd\u8907\u96dc\u5bb9\u5668\u7684\u6027\u80fd",id:"performance-of-redrawing-complex-containers",level:2},{value:"\u901a\u904e\u7de9\u5b58\u6539\u5584\u6027\u80fd",id:"improving-performance-through-caching",level:2},{value:"\u7d50\u8ad6",id:"conclusion",level:2}],v={toc:g},f="wrapper";function k(e){var{components:t}=e,n=m(e,["components"]);return(0,a.kt)(f,p({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7bc0\u4ecb\u7d39\u5982\u4f55\u901a\u904e\u4f7f\u7528RAM\u4f86\u7bc0\u7d04\u4e00\u4e9b\u53ef\u91cd\u8907\u4f7f\u7528\u7684\u7e6a\u88fd\uff0c\u5f9e\u800c\u5728\u4e00\u4e9b\u52d5\u756b\u5834\u666f\u4e2d\u5be6\u73fe\u66f4\u512a\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u5728\u61c9\u7528\u4e2d\u901a\u904e\u62d6\u62fd\u6216\u52d5\u756b\u79fb\u52d5\u5c0f\u5de5\u5177\uff08\u5982Image\u6216TextArea\uff09\u6642\uff0cTouchGFX\u9700\u8981\u5728\u6bcf\u4e00\u5e40\u4e2d\u7684\u65b0\u4f4d\u7f6e\u91cd\u65b0\u7e6a\u88fd\u9019\u4e9b\u5c0f\u5de5\u5177\uff0c\u53e6\u5916\u5728\u5927\u591a\u6578\u60c5\u6cc1\u4e0b\uff0c\u9084\u9700\u8981\u91cd\u65b0\u7e6a\u88fd\u4e4b\u524d\u88ab\u9019\u4e9b\u5c0f\u5de5\u5177\u8986\u84cb\u7684\u90e8\u5206\u80cc\u666f\u3002"),(0,a.kt)("p",null,"\u7576\u9019\u4e9b\u5c0f\u5de5\u5177\u5728\u8a08\u7b97\u4e0a\u5341\u5206\u8907\u96dc\u6642\uff0c\u5982\u6587\u5b57\u6620\u5c04\u5668\u5c0f\u5de5\u5177\u3001\u5f62\u72c0\u548c\u5927\u5c3a\u5bf8\u900f\u660e\u5716\u50cf\uff0c\u7531\u65bc\u6c92\u6709\u786c\u9ad4\u52a0\u901f\uff0cMCU\u5c07\u96e3\u4ee5\u9ad8\u6548\u5730\u9032\u884c\u6e32\u67d3\u3002 \u9019\u6703\u5c0e\u81f4\u87a2\u5e55\u91cd\u65b0\u7e6a\u88fd\uff0c\u5c07\u8017\u8cbb\u5e7e\u6beb\u79d2\u7684\u6642\u9593\u4e26\u5f71\u97ff\u61c9\u7528\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u5c07\u8a0e\u8ad6\u5982\u4f55\u4f7f\u7528\u53ef\u7de9\u5b58\u5bb9\u5668\uff0c\u901a\u904e\u907f\u514d\u9ad8\u6210\u672c\u7684\u91cd\u65b0\u7e6a\u88fd\u70ba\u5305\u542b\u8a08\u7b97\u8907\u96dc\u5143\u7d20\u7684\u52d5\u756b\u52a0\u901f\u3002  \u5728\u4f7f\u7528STM32F429Discovery\u958b\u767c\u677f\u57f7\u884c\u672c\u6587\u4e2d\u7684\u6e2c\u91cf\u540c\u6642\uff0c\u53ef\u7de9\u5b58\u5bb9\u5668\u6280\u8853\u5ee3\u6cdb\u5730\u61c9\u7528\u65bc\u5176\u4ed6\u786c\u9ad4\u5e73\u81fa\u3002 \u70ba\u4e86\u5275\u5efa\u9ede\u9663\u5716\u7de9\u5b58\uff0c\u9700\u8981\u4e00\u4e9b\u53ef\u7528\u7684RAM\u3002"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},"\u53e6\u8acb\u95b1\u8b80",(0,a.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u52d5\u614b\u9ede\u9663\u5716"),"\u3002"),(0,a.kt)("h2",p({},{id:"performance-impact"}),"\u6027\u80fd\u5f71\u97ff"),(0,a.kt)("p",null,"\u7531\u65bc\u4f7f\u7528MCU\u79fb\u52d5\u8a08\u7b97\u6210\u672c\u9ad8\u7684\u5c0f\u5de5\u5177\u6703\u5f71\u97ff\u6027\u80fd\uff0c\u5305\u542b\u8a31\u591a\u5c0f\u6b65\u9a5f\u7684\u52d5\u756b\u6703\u56e0\u70ba\u6bcf\u4e00\u5e40\u7684\u6e32\u67d3\u6642\u9593\u904e\u9577\u800c\u986f\u5f97\u7de9\u6162\u548c\u9072\u6eef\u3002 \u70ba\u4e86\u66f4\u5feb\u7d50\u675f\u52d5\u756b\uff08\u5728\u6642\u9593\u4e0a\uff09\u800c\u5c0d\u52d5\u756b\u9032\u884c\u7a0b\u5f0f\u8a2d\u8a08\u6703\u5c0e\u81f4\u6bcf\u500b\u6b65\u9a5f\u7684\u91cf\u8b8a\u5927\uff0c\u4e26\u4e14\u52d5\u756b\u6703\u986f\u5f97\u4e0d\u6d41\u66a2\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u500b\u5728STM32F429-DISCO\u958b\u767c\u677f\uff08240x320\uff09\u4e0a\u904b\u884c\u7684\u7bc4\u4f8b\uff0c\u5176\u4e2d\u7684\u6eff\u5c4f\u5bb9\u5668\u5782\u76f4\u5411\u4e0a\u79fb\u52d5\uff0c\u800c\u4e00\u500b\u76f8\u4f3c\u5bb9\u5668\u5f9e\u5e95\u90e8\u79fb\u5165\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u5f71\u7247\u4e2d\uff0c",(0,a.kt)("a",p({parentName:"p"},{href:"../ui-components/buttons/toggle-button"}),"ToggleButton"),"\u5728\u53ef\u7de9\u5b58\u5bb9\u5668\u555f\u7528\u548c\u505c\u7528\u4e4b\u9593\u5207\u63db\u3002 \u6027\u80fd\u5dee\u7570\u986f\u800c\u6613\u898b\u3002"),(0,a.kt)(l.Z,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",mdxType:"Video"}),(0,a.kt)("p",null,"\u79fb\u52d5\u7684\u5169\u500b\u5bb9\u5668\u90fd\u5305\u542b\u80cc\u666f",(0,a.kt)("a",p({parentName:"p"},{href:"../ui-components/shapes/box"}),"\u6846"),"\u3001 ",(0,a.kt)("a",p({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"TextArea"),", \u548c ",(0,a.kt)("a",p({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"\u6587\u5b57\u6620\u5c04\u5668"),"\u3002 \u5c07\u6587\u5b57\u6620\u5c04\u5668\u914d\u7f6e\u70ba\u4f7f\u7528\u96d9\u7dda\u6027\u6e32\u67d3\u6f14\u7b97\u6cd5\u548c174\u7684\u5168\u57df\u963f\u723e\u6cd5\u503c\uff0c\u4f7f\u5176\u7e6a\u88fd\u6210\u672c\u9ad8\u6602\u3002 \u5728STM32F429-DISCO\u958b\u767c\u677f\u4e0a\uff0c\u6574\u500b\u87a2\u5e55\u7684\u6e32\u67d3\u6642\u9593\u7d04\u70ba100 ms\u3002"),(0,a.kt)("h2",p({},{id:"test-application"}),"\u6e2c\u8a66\u61c9\u7528"),(0,a.kt)("p",null,"\u70ba\u4e86\u79fb\u52d5\u5169\u500b\u5143\u7d20\u540c\u6642\u7dad\u6301\u5b83\u5011\u7684\u76f8\u5c0d\u4f4d\u7f6e\uff0c\u5c07\u5b83\u5011\u653e\u5728\u4e00\u500b\u540d\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u7684\u7236\u5bb9\u5668\u4e2d\uff0c\u7236\u5bb9\u5668\u7684\u9ad8\u5ea6\u662f\u4efb\u4f55\u4e00\u500b\u5b50\u5bb9\u5668\u7684\u5169\u500d\uff0c\u5f97\u5230\u5176\u5c3a\u5bf8\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"240 x 640 (2*320)"),"\u3002 \u901a\u904e\u5728TouchGFX Designer\u4e2d\u5c07\u5bb9\u5668\u5ba3\u544a\u70ba\u79fb\u52d5\u52d5\u756b\u5668\uff0c\u5b83\u5c07\u80fd\u5920\u63a5\u6536\u61c9\u7528\u6a19\u8a18\u4e26\u96a8\u6642\u9593\u6d41\u901d\u5f62\u6210\u52d5\u756b\uff0c\u5728\u9019\u6bb5\u6642\u9593\u88e1\u53ef\u4ee5\u6e2c\u91cf\u6027\u80fd\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.webp",mdxType:"Figure"},"\u53ef\u7de9\u5b58\u5bb9\u5668\u6e2c\u8a66\u61c9\u7528\u7e3d\u89bd"),(0,a.kt)("p",null,"\u4e0a\u65b9\u5bb9\u5668\u540d\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\uff0c\u8655\u65bc\u4f4d\u7f6e (x=0, y=0)\u3002 \u4e0b\u65b9\u5bb9\u5668\u540d\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\uff0c\u8655\u65bc\u4f4d\u7f6e (x=0, y=320)\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u4e2d\uff0c\u5b83\u4f4d\u65bccontainer1\u7684\u6b63\u4e0b\u65b9\u3002"),(0,a.kt)("p",null,"\u7531\u65bc",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\u4f4d\u65bc",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u4e2d\uff0c\u5728\u6211\u5011\u79fb\u52d5",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u6642\uff0c\u5169\u500b\u5143\u7d20\u6703\u4e00\u8d77\u79fb\u52d5\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u6211\u5011\u5c07",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u79fb\u52d5\u5230\u4f4d\u7f6e (x=0, y=320)\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\u5c07\u4e0d\u53ef\u898b\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\u5c07\u5b8c\u5168\u53ef\u898b\u3002 \u9019\u5169\u7a2e\u72c0\u614b\u4e4b\u9593\u7684\u52d5\u756b\u53ef\u4f7f\u7528TouchGFX Designer\u4e2d\u7684\u4ea4\u4e92\u4f86\u5275\u5efa\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u7a0b\u5f0f\u78bc\u6703\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u4f4d\u65bc\u4e0b\u65b9\u6642\u5411\u4e0a\u79fb\u52d5\u5b83\uff0c\u4e26\u5728\u5b83\u5df2\u7d93\u4f4d\u65bc\u4e0a\u65b9\u6642\u5411\u4e0b\u79fb\u52d5\u5b83\u3002 \u70ba\u7c21\u55ae\u8d77\u898b\uff0c\u5c07\u7a0b\u5f0f\u78bc\u63d2\u5165\u8996\u5716\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"handleClickEvent")," \u4e8b\u4ef6\u8655\u7406\u5668\uff0c\u4ee5\u4fbf\u5728\u7528\u6236\u89f8\u63a7\u5f0f\u87a2\u5e55\u5e55\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\uff08ToggleButton\u4ee5\u4e0b\uff09\u6642\u57f7\u884c\u7a0b\u5f0f\u78bc\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{9-12}","{9-12}":!0}),"void Screen1View::handleClickEvent(const ClickEvent& evt)\n{\n    //Forward event to base View (for the ToggleButton to work)\n    View::handleClickEvent(evt);\n    //If touch is released and y > 50 (below the ToggleButton), move masterContainer\n    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)\n    {\n        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;\n        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,\n                            20 /* ticks */,\n                            EasingEquations::cubicEaseInOut,\n                            EasingEquations::cubicEaseInOut);\n    }\n}\n")),(0,a.kt)("h2",p({},{id:"performance-of-redrawing-complex-containers"}),"\u91cd\u65b0\u7e6a\u88fd\u8907\u96dc\u5bb9\u5668\u7684\u6027\u80fd"),(0,a.kt)("p",null,"\u5982\u524d\u6587\u6240\u8ff0\uff0c\u7576MCU\u5fc5\u9808\u5728\u52d5\u756b\u7684\u6bcf\u4e00\u500b\u5c0f\u6b65\u9a5f\u91cd\u65b0\u7e6a\u88fd\u9ad8\u6210\u672c\u7684\u6587\u5b57\u6620\u5c04\u5668\u6642\uff0c\u4e00\u500b\u5e40\u7684\u6e32\u67d3\u6642\u9593\u7d04\u70ba100 ms\u3002 \u76f8\u7576\u65bc\u6bcf\u79d210\u5e40\uff08fps\uff09\u3002 \u6574\u500b\u52d5\u756b\u670920\u5e40\uff0c\u56e0\u6b64\u9700\u8981\u7d04\u5169\u79d2\u9418\u3002"),(0,a.kt)("p",null,"\u5728STM32F429-DISCO\u8a55\u4f30\u5957\u4ef6\u4e0a\uff0c\u6e32\u67d3\u6642\u9593\u4f5c\u70baGPIO G14\u4e0a\u7684\u6578\u4f4d\u4fe1\u865f\u4f86\u63d0\u4f9b\u3002 VSYNC\u4fe1\u865f\u5728G13\u4e0a\u63d0\u4f9b\u3002 GPIO\u914d\u7f6e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"GPIO.cpp"),"\u6a94\u4e2d\u8a2d\u7f6e\u3002"),(0,a.kt)("p",null,"\u4e0b\u5716\u662f\u5411\u4e0a\u79fb\u52d5",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u6642\uff0c\u61c9\u7528\u7684VSYNC\u548cRENDER_TIME\u7684\u6e2c\u91cf\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.webp",mdxType:"Figure"},"Saleae Logic Software VSYNC\u548c\u6e32\u67d3\u6642\u9593\u6e2c\u91cf"),(0,a.kt)("p",null,"\u6e32\u67d3\u6642\u9593\u662f\u7b2c\u4e00\u500b\u4fe1\u865f\uff08\u4f4e\u96fb\u4f4d\u6709\u6548\uff09\u3002 \u6211\u5011\u53ef\u4ee5\u770b\u5230\uff0c\u79fb\u52d5\u52d5\u756b\u4e2d\u7b2c\u4e00\u5e40\u7684\u6e32\u67d3\u6642\u9593\u662f99.29 ms\u3002"),(0,a.kt)("p",null,"\u8f03\u4f4e\u7684\u4fe1\u865f\u662fVSYNC\uff0c\u5728\u50cf\u7d20\u6642\u9418\u8f38\u51fa\u5230\u986f\u793a\u5668\u6642\uff0c\u5b83\u5728\u6bcf\u4e00\u5e40\u5f9e\u9ad8\u5411\u4f4e\u8f49\u63db\u3002 \u5728\u4e0a\u9762\u7684\u6e2c\u91cf\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u7e6a\u88fd\u55ae\u500b\u5e40\u4f54\u7528\u4e86\u986f\u793a\u5668\u4e0a7\u500b\u5e40\u7684\u6642\u9593\u3002 \u5728\u7b2c8\u500bVSYNC\u4fe1\u865f\u958b\u59cb\u4e0b\u4e00\u5e40\u7684\u6e32\u67d3\u3002 \u5728\u6e32\u67d3\u904e\u7a0b\u4e2d\uff0c\u986f\u793a\u5668\u91cd\u8907\u986f\u793a\u4e0a\u4e00\u500b\u5df2\u7e6a\u88fd\u7684\u5e40\uff08\u5728\u53e6\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u4e2d\uff09\u3002"),(0,a.kt)("h2",p({},{id:"improving-performance-through-caching"}),"\u901a\u904e\u7de9\u5b58\u6539\u5584\u6027\u80fd"),(0,a.kt)("p",null,"\u53ef\u901a\u904e\u5c07\u5bb9\u5668\u6e32\u67d3\u7de9\u5b58\u5230\u8a18\u61b6\u9ad4\u4f86\u6539\u5584\u4ee5\u4e0a\u79fb\u52d5\u52d5\u756b\u7684\u6027\u80fd\u3002 \u6b64\u5f8c\uff0c\u6211\u5011\u53ea\u9700\u5c07\u8a72\u8a18\u61b6\u9ad4\u4e2d\u7684\u50cf\u7d20\u79fb\u52d5\u5230\u5f71\u50cf\u7de9\u885d\uff08\u4f7f\u7528DMA\uff09\uff0c\u800c\u4e0d\u662f\u4f7f\u7528MCU\u91cd\u65b0\u7e6a\u88fd\u8907\u96dc\u7684\u5c0f\u5de5\u5177\u3002 \u5373\u4f7f\u61c9\u7528\u53ea\u4f7f\u7528MCU\u5c31\u53ef\u4ee5\u9054\u5230\u6bcf\u79d260\u5e40\uff0c\u4e5f\u6703\u5fd9\u65bc\uff08\u53ef\u80fd\u662f100% MCU\u8ca0\u8f09\uff09\u91cd\u8907\u57f7\u884c\u76f8\u540c\u8a08\u7b97\uff0c\u800c\u4e0d\u662f\u57f7\u884c\u66f4\u91cd\u8981\u7684\u4efb\u52d9\u3002"),(0,a.kt)("p",null,"\u73fe\u5728\uff0c\u5bb9\u5668\u7684\u201cin-memory-image\u201d\u53ef\u4ee5\u986f\u793a\u5728\u87a2\u5e55\u4e0a\u7684\u4e0d\u540c\u4f4d\u7f6e\uff0c\u7121\u9700\u91cd\u65b0\u6e32\u67d3\u5bb9\u5668\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\u5c31\u662f\u901a\u904eTouchGFX Designer\u4f7f\u80fd\u7de9\u5b58\uff0c\u52fe\u9078\u5bb9\u5668\u7684",(0,a.kt)("em",{parentName:"p"}," Cacheable "),"\u5c6c\u6027\uff0c\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"container1")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"}," container2"),":"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.webp",mdxType:"Figure"},"\u201c\u5bb9\u5668\u201d\u5c0f\u5de5\u5177\u4e0a\u7684\u201c\u53ef\u7de9\u5b58\u5bb9\u5668\u201d\u9078\u9805"),(0,a.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u5728\u53ef\u4ee5\u5c07\u5bb9\u5668\u7de9\u5b58\u5230\u5176\u4e2d\u7684RAM\u4e2d\u5275\u5efa\u5169\u5e45\u52d5\u614b\u9ede\u9663\u5716\u3002"),(0,a.kt)("p",null,"\u6c7a\u5b9a\u9ede\u9663\u5716\u7de9\u5b58\u5728RAM\u4e2d\u7684\u5b58\u5132\u4f4d\u5740\u3002 \u5c31\u672c\u4f8b\u800c\u8a00\uff0c\u6211\u5011\u5c07\u5b83\u653e\u5728SDRAM\u4e2d\uff08STM32F429\u4e0a\u5f9e\u4f4d\u57400xd0000000\u958b\u59cb\uff09\uff0c\u5c31\u5728\u5f71\u50cf\u7de9\u885d\u4e4b\u5f8c\u3002"),(0,a.kt)("p",null,"\u5c0d\u65bc\u8996\u7a97\u6a21\u64ec\u5668\uff0c\u5728\u5168\u57df\u8b8a\u6578\u4e2d\u5206\u914d\u7de9\u5b58\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n    uint32_t sdramBuffer[8*1024*1024/4];\n    uint16_t* sdram = (uint16_t*)sdramBuffer;\n#else\n    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);\n#endif\n")),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u9ede\u9663\u5716\u7de9\u5b58\u4e26\u5275\u5efa\u5169\u5e45\u52d5\u614b\u9ede\u9663\u5716\u7528\u65bc\u7de9\u5b58\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{2-2}","{2-2}":!0}),"//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb\nBitmap::setCache(sdram, 320*1024, 2); //320Kb cache\ndynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\ndynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\n")),(0,a.kt)("p",null,"\u5c07\u52d5\u614b\u9ede\u9663\u5716\u5206\u914d\u7d66\u5bb9\u5668\u4e26\u5c07\u5b83\u5011\u8a2d\u7f6e\u70ba\u7de9\u5b58\u6a21\u5f0f\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"//Assign the bitmaps to the Cacheable Containers\ncontainer1.setCacheBitmap(dynamicBitmap1);\ncontainer2.setCacheBitmap(dynamicBitmap2);\n\n//Enable caching\ncontainer1.enableCachedMode(true);\ncontainer2.enableCachedMode(true);\n\n//Finally update the cached bitmaps\ncontainer1.updateCache();\ncontainer2.updateCache();\n")),(0,a.kt)("p",null,"\u547c\u53eb",(0,a.kt)("inlineCode",{parentName:"p"},"Container::updateCache()"),"\u6703\u5c07\u5169\u500b\u5bb9\u5668\u6e32\u67d3\u5230\u5b83\u5011\u5404\u81ea\u7684\u9ede\u9663\u5716\u4e2d\u3002 \u5728\u4efb\u4f55\u9700\u8981\u5bb9\u5668\u66f4\u65b0\u72c0\u614b\u7684\u6642\u5019\u547c\u53eb\u6b64\u65b9\u6cd5\u3002 \u9019\u5fc5\u9808\u7531\u958b\u767c\u8005\u5728\u61c9\u7528\u7a0b\u5f0f\u78bc\u4e2d\u9032\u884c\u8655\u7406\u3002"),(0,a.kt)("p",null,"\u5728\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\u555f\u7528\u7de9\u5b58\u5f8c\uff0c\u73fe\u5728\u7684\u6027\u80fd\u6e2c\u91cf\u986f\u793a\uff0c\u6e32\u67d3\u6642\u9593\u5f9e~99ms\u7e2e\u77ed\u5230~5ms\uff0c\u9019\u610f\u5473\u8457\u53ef\u4ee5\u8f15\u9b06\u5730\u4ee560\u5e40\u6bcf\u79d2\u7684\u901f\u5ea6\u9032\u884c\u6e32\u67d3\uff0c\u4e26\u572820\u5e40\u5167\u5b8c\u6210\u6574\u500b\u52d5\u756b\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.webp",mdxType:"Figure"},"Saleae Logic Software VSYNC\u548c\u6e32\u67d3\u6642\u9593\u6e2c\u91cf"),(0,a.kt)("h2",p({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,a.kt)("p",null,"\u5982\u679c\u7269\u4ef6\u5728\u8a08\u7b97\u4e0a\u5341\u5206\u8907\u96dc\u4e14\u5728\u4e0d\u540c\u52d5\u756b\u6b65\u9a5f\u4e4b\u9593\u7121\u8b8a\u5316\uff0c\u5728\u88fd\u6210\u52d5\u756b\uff08\u983b\u7e41\u79fb\u52d5\uff09\u6642\uff0c\u4f7f\u7528\u5305\u542bDynamicBitmap\u7684\u53ef\u7de9\u5b58\u5bb9\u5668\u53ef\u986f\u8457\u7e2e\u77ed\u6e32\u67d3\u6642\u9593\u3002 \u5982\u679c\u7de9\u5b58\u5fc5\u9808\u66f4\u65b0\uff08\u5982\u6642\u9593\u66f4\u65b0\u6642\u7684\u624b\u9336\uff09\uff0c\u5728\u61c9\u7528\u63a7\u5236\u52d5\u756b\u671f\u9593\uff0c\u53ef\u4ee5\u5728\u7279\u5b9a\u7684\u9ede\u91cd\u65b0\u8a08\u7b97\u7de9\u5b58\u5167\u5bb9\u3002"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u52d5\u614b\u9ede\u9663\u5716")),(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"loading-images-at-runtime",mdxType:"Link"},"\u52d5\u614b\u9ede\u9663\u5716\uff1a\u65bc\u57f7\u884c\u968e\u6bb5\u8f09\u5165\u5716\u50cf"))))}k.isMDXComponent=!0}}]);