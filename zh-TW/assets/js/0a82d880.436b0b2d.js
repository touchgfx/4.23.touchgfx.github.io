"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[19990],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=l,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496);class l extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const r=l},89639:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496),l=n(7029);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,i=(0,l.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:r,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:r,src:i})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496),l=n(96151);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const o=i},96151:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496);class l extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const r=l},33889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>d});n(59496);var a=n(49613),l=n(89639),r=n(48753),i=n(28128);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const m={id:"flash-limited-gui-development",title:"\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684GUI\u958b\u767c",slug:"/flash-limited"},s=void 0,u={unversionedId:"development/scenarios/flash-limited-gui-development",id:"development/scenarios/flash-limited-gui-development",title:"\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684GUI\u958b\u767c",description:"\u672c\u6587\u8aaa\u660e\u5982\u4f55\u5728\u4f7f\u7528\u5c11\u91cf\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u60c5\u6cc1\u4e0b\u4ee5TouchGFX\u958b\u767c\u5716\u5f62\u4f7f\u7528\u8005\u4ecb\u9762\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/flash-limited-gui-development.mdx",sourceDirName:"development/scenarios",slug:"/flash-limited",permalink:"/4.23/zh-TW/docs/flash-limited",draft:!1,tags:[],version:"current",frontMatter:{id:"flash-limited-gui-development",title:"\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684GUI\u958b\u767c",slug:"/flash-limited"},sidebar:"docs",previous:{title:"\u901a\u904e\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u964d\u4f4e\u8a18\u61b6\u9ad4\u4f7f\u7528\u7387",permalink:"/4.23/zh-TW/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"},next:{title:"\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5f71\u50cf",permalink:"/4.23/zh-TW/docs/development/scenarios/using-non-memory-mapped-flash"}},c={},d=[{value:"\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4",id:"flash-limited-e-bike-demo",level:2},{value:"\u5404\u7a2e\u6982\u5ff5\u7684\u4f7f\u7528\u6642\u6a5f",id:"when-to-use-which-concept",level:2},{value:"L8\u53ca\u58d3\u7e2e",id:"L8-and-compression",level:3},{value:"SVG",id:"SVG",level:3},{value:"\u5411\u91cf\u5b57\u578b",id:"vector-fonts",level:3},{value:"\u7bc4\u4f8b",id:"examples",level:3},{value:"\u7d50\u8ad6",id:"concept-conclusion",level:3},{value:"\u4f7f\u7528\u300c\u8070\u660e\u7684\u300d\u8cc7\u7522",id:"smart-assets",level:2},{value:"\u7c21\u6613\u8cc7\u7522",id:"simple-assets",level:3},{value:"\u4f7f\u7528\u65b9\u584a",id:"using-boxes",level:3},{value:"\u53ef\u91cd\u8907\u4f7f\u7528\u7684\u8cc7\u7522",id:"reusable-assets",level:3},{value:"\u63d0\u5347\u6548\u80fd",id:"performance",level:2},{value:"\u7d50\u8ad6",id:"conclusion",level:2}],h={toc:d},g="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(g,o({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u8aaa\u660e\u5982\u4f55\u5728\u4f7f\u7528\u5c11\u91cf\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u60c5\u6cc1\u4e0b\u4ee5TouchGFX\u958b\u767c\u5716\u5f62\u4f7f\u7528\u8005\u4ecb\u9762\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528TouchGFX\u7522\u751f\u7a0b\u5f0f\u78bc\u6642\uff0c\u5716\u50cf\u3001\u6587\u5b57\u53ca\u5b57\u578b\u7b49\u8cc7\u7522\u6703\u8f49\u63db\u70baC++\u6a94\u6848\uff0c\u7136\u5f8c\u5728\u7a0b\u5f0f\u8a2d\u8a08\u671f\u9593\u8207TouchGFX\u61c9\u7528\u7a0b\u5f0f\u78bc\u3001\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc\u53caTouchGFX\u5eab\u4e00\u540c\u5132\u5b58\u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002 \u56e0\u6b64\u5982\u679c\u662f\u5177\u6709\u773e\u591a\u8cc7\u7522\u7684\u5927\u578b\u6216\u8907\u96dc\u5c08\u6848\uff0c\u5c07\u6703\u4f7f\u7528\u5927\u91cf\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,a.kt)("p",null,"\u7531\u65bc\u5927\u90e8\u5206\u61c9\u7528\u7a0b\u5f0f\u7684\u8a18\u61b6\u9ad4\u8cc7\u6e90\u90fd\u6709\u9650\uff0c\u6709\u4e00\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u6e1b\u5c11\u6240\u9700\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u5bb9\u91cf\u3002 TouchGFX\u6709\u56db\u7a2e\u5167\u5efa\u529f\u80fd\uff0c\u53ef\u5354\u52a9\u60a8\u5927\u5e45\u6e1b\u5c11\u61c9\u7528\u7a0b\u5f0f\u6240\u9700\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u5bb9\u91cf\u3002 \u9019\u56db\u7a2e\u6982\u5ff5\u70baL8\u5716\u50cf\u683c\u5f0f\u3001\u5716\u50cf\u58d3\u7e2e\u3001\u53ef\u7e2e\u653e\u5411\u91cf\u5716\u5f62(SVG)\u53ca\u5411\u91cf\u5b57\u578b\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5c07\u4ecb\u7d39\u5982\u4f55\u4f7f\u7528\u9019\u56db\u7a2e\u6982\u5ff5\uff0c\u4ee5\u9650\u5236\u61c9\u7528\u7a0b\u5f0f\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u4f54\u7528\u7a7a\u9593\u3002 \u6e2c\u91cf\u662f\u4ee5STM32U5G9J-DK2\u57f7\u884c\uff0c\u4e0d\u904e\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u6982\u5ff5\u4e5f\u53ef\u61c9\u7528\u65bc\u5176\u4ed6\u786c\u9ad4\u5e73\u53f0\u3002"),(0,a.kt)(r.Z,{mdxType:"FurtherReading"},(0,a.kt)("p",null,"Read also about ",(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/basic-concepts/memory-usage"}),"Memory Usage"),".")),(0,a.kt)("h2",o({},{id:"flash-limited-e-bike-demo"}),"\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4"),(0,a.kt)("p",null,"\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\uff0c\u5c55\u793a\u5982\u4f55\u4f7f\u7528\u524d\u8ff0\u56db\u7a2e\u529f\u80fd\u4ee5TouchGFX\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\uff1b\u60a8\u53ef\u5728TouchGFX Designer\u4e4b\u4e2d\u53c3\u8003\u6b64\u793a\u7bc4\u3002 \u6b64\u793a\u7bc4\u70ba\u958b\u767c\u677f\u5c08\u5c6c\u793a\u7bc4\uff0c\u9069\u7528\u65bcSTM32U5G9J-DK2\u3002 \u4f7f\u7528STM32U5G9J-DK2\u7684\u512a\u9ede\u4e4b\u4e00\u5c31\u662f\u5176\u4e2d\u5177\u6709NeoChromVG GPU\uff0c\u7531\u786c\u9ad4\u52a0\u901f\u5411\u91cf\u6e32\u67d3\u3002 \u4e0d\u904eL8\u5716\u50cf\u683c\u5f0f\u53ca\u5716\u50cf\u58d3\u7e2e\u7279\u5225\u9069\u5408\u5728\u6240\u6709STM32 MCU\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6b64\u793a\u7bc4\u50c5\u4ee5\u672a\u58d3\u7e2e\u7684\u9ede\u9663\u5716\u5be6\u4f5c(\u7121L8\u3001\u58d3\u7e2e\u3001SVG\u53ca\u5411\u91cf\u5b57\u578b)\uff0c\u53ef\u80fd\u6703\u4f54\u7528\u7d0410.5 MB\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u5728\u4f7f\u7528\u56db\u7a2e\u6982\u5ff5\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u5be6\u4f5c\u4e2d\uff0c\u6b64\u793a\u7bc4\u50c5\u4f54\u7528\u7d04800 KB\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u7531\u6b64\u53ef\u898b\uff0c\u7bc0\u7701\u5927\u91cf\u5feb\u9583\u8a18\u61b6\u9ad4\u662f\u53ef\u80fd\u505a\u5230\u7684\u3002 \u9019\u56db\u7a2e\u6982\u5ff5\u5728\u793a\u7bc4\u4e2d\u5408\u8a08\u7bc0\u7701\u4e8692%\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u7a7a\u9593\u3002"),(0,a.kt)("h2",o({},{id:"when-to-use-which-concept"}),"\u5404\u7a2e\u6982\u5ff5\u7684\u4f7f\u7528\u6642\u6a5f"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u5982\u4f55\u4ee5TouchGFX\u4f7f\u7528\u56db\u7a2e\u6982\u5ff5\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u6280\u8853\u8cc7\u8a0a\u548c\u6307\u5357\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/4.23/zh-TW/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"}),"L8\u5716\u50cf\u683c\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/image-compression"}),"\u5716\u50cf\u58d3\u7e2e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/svg"}),"SVG")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/vector-fonts"}),"\u5411\u91cf\u5b57\u578b"))),(0,a.kt)("p",null,"\u9019\u56db\u7a2e\u6982\u5ff5\u90fd\u80fd\u5354\u52a9\u6e1b\u5c11\u61c9\u7528\u7a0b\u5f0f\u6240\u9700\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u5bb9\u91cf\u3002 \u6bcf\u7a2e\u6982\u5ff5\u7684\u4f7f\u7528\u6642\u6a5f\u9700\u8996\u60c5\u5883\u800c\u5b9a\uff0c\u4e0d\u904e\u6709\u4e9b\u4e00\u822c\u898f\u5247\u53ef\u4f9b\u53c3\u8003\u3002 \u4ee5\u4e0b\u5c07\u9032\u884c\u8aaa\u660e\u3002"),(0,a.kt)("h3",o({},{id:"L8-and-compression"}),"L8\u53ca\u58d3\u7e2e"),(0,a.kt)("p",null,"\u5728\u9ede\u9663\u5716\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\u6642\uff0c\u9ede\u9663\u5716\u6700\u591a\u6703\u6709256\u7a2e\u8272\u5f69\u3002 The rendering of assets in L8 format is hardware accelerated with ",(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-mcu#chrom-art"}),"Chrom-ART"),", meaning that the render time for L8 bitmaps are almost the same as for regular bitmaps. \u6709\u6642\u6e32\u67d3L8\u683c\u5f0f\u9ede\u9663\u5716\u7684\u901f\u5ea6\u751a\u81f3\u6bd4\u4e00\u822c\u9ede\u9663\u5716\u66f4\u5feb\uff0c\u539f\u56e0\u662f\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u7684\u8cc7\u6599\u8f03\u5c11\u3002 \u76f8\u8f03\u65bc\u8272\u6df132\u4f4d\u5143\u7684\u4e00\u822c\u9ede\u9663\u5716\uff0cL8\u53ef\u7bc0\u770170%\u4ee5\u4e0a\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,a.kt)("p",null,"\u76f8\u8f03\u65bcL8\uff0c\u5716\u50cf\u58d3\u7e2e\u53ef\u8b93\u60a8\u7bc0\u7701\u66f4\u591a\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u82e5\u8981\u5728\u9ede\u9663\u5716\u4f7f\u7528\u5716\u50cf\u58d3\u7e2e\uff0c\u9996\u5148\u9ede\u9663\u5716\u8981\u63a1\u7528L8\u683c\u5f0f\uff0c\u56e0\u70ba\u58d3\u7e2e\u6f14\u7b97\u6cd5\u6703\u4f7f\u7528\u8272\u5f69\u67e5\u95b1\u8cc7\u6599\u8868\u3002 \u56e0\u6b64\u58d3\u7e2e\u5f8c\u7684\u9ede\u9663\u5716\u4ecd\u6709\u6700\u591a256\u8272\u7684\u9650\u5236\u3002 \u90e8\u5206\u58d3\u7e2e\u6f14\u7b97\u6cd5\u6703\u9032\u4e00\u6b65\u9650\u5236\u8272\u5f69\u6578\u91cf\u4e0a\u9650\u3002 L4\u9650\u5236\u70ba\u6700\u591a16\u7a2e\u8272\u5f69\uff0cRLE\u5247\u9650\u5236\u70ba\u6700\u591a64\u7a2e\u8272\u5f69\u3002 L8\u9ede\u9663\u5716\u6e32\u67d3\u662f\u4ee5Chrom-ART\u9032\u884c\u786c\u9ad4\u52a0\u901f\uff0c\u58d3\u7e2e\u9ede\u9663\u5716\u5247\u4e0d\u4e00\u6a23\uff0c\u662f\u4ee5\u8edf\u9ad4\u9032\u884c\u6e32\u67d3\uff0c\u56e0\u6b64\u6e32\u67d3\u6210\u672c\u66f4\u9ad8\u3002 \u58d3\u7e2e\u9ede\u9663\u5716\u7684\u53e6\u4e00\u9805\u9650\u5236\uff0c\u5247\u662f\u7121\u6cd5\u7528\u65bc\u53ef\u7e2e\u653e\u6216\u53ef\u65cb\u8f49\u7684\u5c0f\u5de5\u5177\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u7684\u8cc7\u7522\u5df2\u7d93\u63a1\u7528PNG\u683c\u5f0f\uff0c\u5247L8\u5716\u50cf\u683c\u5f0f\u53ca\u5716\u50cf\u58d3\u7e2e\u90fd\u6613\u65bc\u4f7f\u7528\u3002 \u4e00\u822c\u4f86\u8aaa\uff0c\u60a8\u5728\u6700\u591a256\u8272\u7684\u9ede\u9663\u5716\u4e0a\u4e00\u5f8b\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\uff0c\u4e0d\u6703\u9020\u6210\u4efb\u4f55\u986f\u8457\u7684\u6548\u80fd\u5f71\u97ff\u3002 \u5982\u679c\u60a8\u9700\u8981\u7bc0\u7701\u66f4\u591a\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u4e26\u5177\u6709\u53ef\u7528\u7684\u6e32\u67d3\u6642\u9593\u9054\u6210\u6240\u9700\u6548\u80fd\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5716\u50cf\u58d3\u7e2e\u3002 \u4e0d\u904e\u5982\u679c\u60a8\u9700\u8981\u5728\u53ef\u7e2e\u653e\u6216\u53ef\u65cb\u8f49\u7684\u5c0f\u5de5\u5177\u4f7f\u7528\u9ede\u9663\u5716\uff0c\u5c31\u7121\u6cd5\u539f\u751f\u4f7f\u7528\u58d3\u7e2e\u5f8c\u7684\u9ede\u9663\u5716\u3002 \u7576\u7136\u6211\u5011\u6709\u65b9\u6cd5\u53ef\u4ee5\u89e3\u6c7a\u9019\u9805\u554f\u984c\uff0c\u7a0d\u5f8c\u5c07\u7c21\u77ed\u8aaa\u660e\u3002"),(0,a.kt)("h3",o({},{id:"SVG"}),"SVG"),(0,a.kt)("p",null,"\u5728\u8cc7\u7522\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u53e6\u4e00\u7a2e\u9078\u9805\uff0c\u5c31\u662f\u8b93\u8cc7\u7522\u63a1\u7528SVG\u683c\u5f0f\u53d6\u4ee3PNG\u683c\u5f0f\u3002 SVG\u5c0d\u8272\u5f69\u6578\u91cf\u4e26\u7121\u9650\u5236\uff0c \u4e0d\u904eSVG\u7684\u6e32\u67d3\u6210\u672c\u901a\u5e38\u9ad8\u65bcL8\u53ca\u58d3\u7e2e\uff0c \u56e0\u6b64\u5efa\u8b70\u9650\u5236SVG\u6578\u91cf\uff0c\u4e26\u76e1\u91cf\u6e1b\u5c11SVG\u52d5\u756b\u6578\u91cf\u3002 SVG\u8cc7\u7522\u8d8a\u7c21\u55ae\uff0c\u6240\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u5c31\u8d8a\u5c11\uff0c\u56e0\u6b64\u53ef\u9054\u6210\u66f4\u7406\u60f3\u7684\u6548\u80fd\u3002 \u70ba\u6b64\u6211\u5011\u5efa\u8b70\u50c5\u4f7f\u7528\u55ae\u5c64SVG\u3002"),(0,a.kt)("p",null,"\u82e5\u8981\u5728SVG\u5c0f\u5de5\u5177\u4f7f\u7528\u8cc7\u7522\uff0c\u60a8\u9700\u8981\u532f\u5165SVG\u683c\u5f0f\u7684\u8cc7\u7522\u3002 TouchGFX\u7121\u6cd5\u8f49\u63db\u8cc7\u7522\u3002"),(0,a.kt)("h3",o({},{id:"vector-fonts"}),"\u5411\u91cf\u5b57\u578b"),(0,a.kt)("p",null,"\u5c0d\u65bcSVG\u683c\u5f0f\u7684\u975e\u5b57\u578b\u8cc7\u7522\uff0c\u5411\u91cf\u5b57\u578b\u4e5f\u9700\u8ca0\u64d4\u6602\u8cb4\u7684\u6e32\u67d3\u6210\u672c\uff0c\u56e0\u70ba\u5176\u6e32\u67d3\u65b9\u5f0f\u8207SVG\u76f8\u540c\u3002 \u5411\u91cf\u5b57\u578b\u4e00\u822c\u6709\u5229\u65bc\u4f7f\u7528\u5927\u578b\u5b57\u578b\uff0c\u6216\u4f7f\u7528\u591a\u7a2e\u4e0d\u540c\u5927\u5c0f\u7684\u76f8\u540c\u5b57\u578b\u3002 \u5982\u679c\u60a8\u6709\u4e0d\u540c\u5927\u5c0f\u53ca\u5411\u91cf\u8868\u793a\u7684\u76f8\u540c\u5b57\u578b\uff0c\u53ea\u9700\u8981\u5132\u5b58\u5b57\u578b\u4e00\u6b21\u5373\u53ef\u3002 \u4e4b\u5f8c\u60a8\u53ea\u9700\u8981\u4e00\u500b\u7e2e\u653e\u4fc2\u6578\uff0c\u5373\u53ef\u5448\u73fe\u4e0d\u540c\u5927\u5c0f\u7684\u5b57\u578b\u3002 \u5982\u679c\u662f\u9ede\u9663\u5716\u5b57\u578b\uff0c\u6bcf\u7a2e\u5b57\u578b\u5927\u5c0f\u90fd\u9700\u8981\u500b\u5225\u5132\u5b58\u3002 \u5411\u91cf\u5b57\u578b\u6240\u7bc0\u7701\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u901a\u5e38\u4e0d\u53ca\u5716\u50cf\u58d3\u7e2e\u53caSVG\u6240\u7bc0\u7701\u7684\u591a\u3002 \u56e0\u6b64\u4e3b\u8981\u662f\u5728\u5fc5\u9808\u76e1\u53ef\u80fd\u6e1b\u5c11\u4f7f\u7528\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u60c5\u6cc1\u4e0b\uff0c\u624d\u61c9\u4f7f\u7528\u6b64\u9805\u65b9\u6cd5\u3002"),(0,a.kt)("h3",o({},{id:"examples"}),"\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u70ba\u4e86\u63d0\u4f9b\u4e0d\u540c\u6982\u5ff5\u7279\u6027\u7684\u5177\u9ad4\u7bc4\u4f8b\uff0c\u6211\u5011\u4ee5\u4e00\u822c\u9ede\u9663\u5716\u3001L8\u3001RLE\u58d3\u7e2e\u53caSVG\u683c\u5f0f\uff0c\u91dd\u5c0d\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u7684\u5169\u9805\u8cc7\u7522\u9032\u884c\u6e2c\u91cf\u3002 \u6211\u5011\u5728STM32U5G9J-DK2\u91dd\u5c0d\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e4b\u4e2d\u7684\u8cc7\u7522\u9032\u884c\u6e2c\u91cf\u3002 \u5c0d\u65bc\u6c92\u6709NeoChrom GPU\u7684MCU\uff0cSVG\u7684\u6e32\u67d3\u6642\u9593\u8f03\u9577\uff0c \u4e0d\u904e\u901f\u5ea6\u66f4\u5feb\u7684CPU\u4e5f\u53ef\u70ba\u6b64\u63d0\u4f9b\u88dc\u511f\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u8cc7\u7522\u7684\u8272\u6df1\u70ba32\u4f4d\u5143\uff0c\u662f\u9802\u7aef\u5177\u6709\u5716\u793a\u7684\u6309\u9215\u3002 \u6309\u9215\u70ba122 x 112 px\uff0c\u5716\u793a\u70ba72 x 72 px\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/scenarios/flash-limited-gui-development/button-with-icon.webp",mdxType:"Figure"},"\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u7684\u542b\u5716\u793a\u6309\u9215"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728\u8cc7\u7522\u57f7\u884c\u7684\u6e2c\u91cf\u7d50\u679c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u683c\u5f0f")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5927\u5c0f")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u767e\u5206\u6bd4")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6e32\u67d3\u6642\u9593")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"CPU\u8ca0\u8f09")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9ede\u9663\u5716\uff1a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"75.4 KB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"100%"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.414 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"2.4%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"L8\uff1a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"19.3 KB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"25.6%"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.448 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"2.3%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"L8 RLE\uff1a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"2.55 KB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"3.4%"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.51 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"9.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"SVG\uff1a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"3.01 KB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"4.0%"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.43 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"4.1%")))),(0,a.kt)("p",null,"\u7531\u6b64\u53ef\u898b\uff0cRLE\u6240\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u6700\u5c11\uff0c\u4e0d\u904e\u6e32\u67d3\u6642\u9593\u6bd4\u4e00\u822c\u9ede\u9663\u5716\u683c\u5f0f\u591a\u51fa\u8fd11 ms\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u8cc7\u7522\u8272\u6df132\u4f4d\u5143\uff0c\u662f\u793a\u7bc4\u5100\u8868\u677f\u87a2\u5e55\u4e2d\u5100\u9336\u7684\u4e00\u90e8\u5206\uff0c \u5c3a\u5bf8\u70ba150 x 436 px\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/scenarios/flash-limited-gui-development/gauge-part.webp",mdxType:"Figure"},"\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u5100\u9336\u7684\u4e00\u90e8\u5206"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728\u8cc7\u7522\u57f7\u884c\u7684\u6e2c\u91cf\u7d50\u679c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u683c\u5f0f")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5927\u5c0f")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u767e\u5206\u6bd4")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6e32\u67d3\u6642\u9593")),(0,a.kt)("th",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"CPU\u8ca0\u8f09")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9ede\u9663\u5716\uff1a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"261.6 KB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"100%"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.15 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.5%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"L8\uff1a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"65.6 KB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"25.1%"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.24 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.4%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"L8 RLE\uff1a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"4.66 KB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1.78%"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"2.75 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"15.0%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"SVG\uff1a"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.686 KB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"0.27%"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"3.40 ms"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"2.0%")))),(0,a.kt)("p",null,"SVG\u683c\u5f0f\u8cc7\u7522\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u9060\u4f4e\u65bc\u5176\u4ed6\u683c\u5f0f\uff0c\u4e0d\u904e\u6e32\u67d3\u6210\u672c\u4e5f\u662f\u6700\u9ad8\u3002"),(0,a.kt)("h3",o({},{id:"concept-conclusion"}),"\u7d50\u8ad6"),(0,a.kt)("p",null,"\u5982\u524d\u6240\u898b\uff0c\u6c92\u6709\u54ea\u4e00\u7a2e\u683c\u5f0f\u662f\u6240\u6709\u8cc7\u7522\u7684\u6700\u4f73\u9078\u64c7\u3002 \u4e0d\u904e\u5149\u5c31\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u4f86\u770b\uff0c\u5c0d\u5c0f\u578b\u8cc7\u7522\u800c\u8a00\uff0c\u5716\u50cf\u58d3\u7e2e\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u6700\u5c11\uff0c\u5982\u679c\u662f\u5927\u578b\u8cc7\u7522\uff0c\u5247SVG\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u6700\u5c11\u3002 \u96d6\u7136SVG\u8cc7\u7522\u53ef\u64c1\u6709256\u7a2e\u4ee5\u4e0a\u8272\u5f69\uff0c\u4f46\u70ba\u4e86\u5feb\u9583\u8a18\u61b6\u9ad4\u4f7f\u7528\u91cf\u53ca\u6548\u80fd\u56e0\u7d20\uff0c\u9084\u662f\u5efa\u8b70\u8b93SVG\u8cc7\u7522\u4fdd\u6301\u7c21\u55ae\u3002 L8\u5716\u50cf\u683c\u5f0f\u5728L8\u3001\u5716\u50cf\u58d3\u7e2e\u53caSVG\u4e4b\u4e2d\u6240\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u6700\u591a\uff0c\u4e0d\u904e\u6e32\u67d3\u6642\u9593\u6700\u77ed\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u5728\u958b\u767c\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u61c9\u7528\u7a0b\u5f0f\u6642\uff0c\u60a8\u9700\u8981\u627e\u51fa\u74f6\u9838\uff0c\u4e26\u6c7a\u5b9a\u61c9\u7528\u7a0b\u5f0f\u6700\u91cd\u8981\u7684\u8003\u91cf\u56e0\u7d20\u70ba\u4f55\u3002 \u662f\u6548\u80fd\u6bd4\u8f03\u91cd\u8981\uff0c\u9084\u662f\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u6bd4\u8f03\u91cd\u8981\uff1f \u5982\u679c\u6548\u80fd\u6bd4\u8f03\u91cd\u8981\uff0cL8\u5c31\u662f\u6700\u6709\u6548\u7684\u65b9\u6cd5\u3002 \u5982\u679c\u6548\u80fd\u5141\u8a31\u7684\u8a71\uff0c\u60a8\u751a\u81f3\u53ef\u4ee5\u5728\u90e8\u5206\u8cc7\u7522\u5408\u4f75\u4f7f\u7528\u58d3\u7e2e\u65b9\u6cd5\u3002 \u5982\u679c\u76e1\u53ef\u80fd\u6e1b\u5c11\u4f7f\u7528\u5feb\u9583\u8a18\u61b6\u9ad4\u6700\u91cd\u8981\uff0c\u5716\u50cf\u58d3\u7e2e\u53caSVG\u5c31\u662f\u6700\u7406\u60f3\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("h2",o({},{id:"smart-assets"}),"\u4f7f\u7528\u300c\u8070\u660e\u7684\u300d\u8cc7\u7522"),(0,a.kt)("p",null,"\u4f7f\u7528\u6240\u8b02\u7684\u300c\u8070\u660e\u7684\u300d\u8cc7\u7522\u53ef\u7bc0\u7701\u66f4\u591a\u5feb\u9583\u8a18\u61b6\u9ad4\u53ca\u63d0\u5347\u6548\u80fd\u3002 \u672c\u6587\u6240\u8ff0\u7684\u8070\u660e\u7684\u8cc7\u7522\uff0c\u662f\u6307\u8cc7\u7522\u672c\u8eab\u53ca\u5176\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,a.kt)("h3",o({},{id:"simple-assets"}),"\u7c21\u6613\u8cc7\u7522"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8cc7\u7522\u8d8a\u7c21\u55ae\uff0c\u6240\u80fd\u58d3\u7e2e\u7684\u7a0b\u5ea6\u5c31\u8d8a\u9ad8\uff0cSVG\u5b9a\u7fa9\u4e5f\u6703\u66f4\u7c21\u55ae\uff0c \u6700\u7d42\u53ef\u6e1b\u5c11\u4f7f\u7528\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,a.kt)("p",null,"\u4f5c\u70ba\u53c3\u8003\uff0c\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u4e2d\u7684\u6240\u6709\u9ede\u9663\u5716\u8cc7\u7522\uff0c\u90fd\u6709\u6700\u591a\u768464\u7a2e\u8272\u5f69\uff1b\u7531\u65bc\u8cc7\u7522\u4e5f\u9069\u5408\u4f7f\u7528RLE\uff0c\u56e0\u6b64\u6240\u6709\u9ede\u9663\u5716\u8cc7\u7522\u90fd\u63a1\u7528RLE\u58d3\u7e2e\u3002 RLE\u7684\u6e32\u67d3\u901f\u5ea6\u6bd4LZW9\u66f4\u5feb\uff0c\u56e0\u6b64\u4e5f\u80fd\u63d0\u4f9b\u6700\u4f73\u6548\u80fd\u3002"),(0,a.kt)("p",null,"Additionally, if the design is also simple, you can in some cases use a ",(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/development/ui-development/ui-components/images/tiled-image"}),"Tiled Image")," as well. \u4e4b\u5f8c\u60a8\u53ea\u9700\u8981\u5132\u5b58\u90e8\u5206\u5716\u50cf\u4e26\u52a0\u4ee5\u91cd\u8907\u5373\u53ef\u3002"),(0,a.kt)("h3",o({},{id:"using-boxes"}),"\u4f7f\u7528\u65b9\u584a"),(0,a.kt)("p",null,"Another way of saving flash memory in a smart way is to use the ",(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/development/ui-development/ui-components/shapes/box"}),"Box widget"),". \u4f7f\u7528\u65b9\u584a\u6709\u5169\u7a2e\u4e3b\u8981\u512a\u9ede\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u65b9\u584a\u53ef\u5728\u5f71\u50cf\u7de9\u885d\u5340\u76f4\u63a5\u7e6a\u88fd\uff0c \u56e0\u6b64\u7121\u9700\u5feb\u9583\u8a18\u61b6\u9ad4\u5373\u53ef\u5132\u5b58\u65b9\u584a\u3002 \u552f\u4e00\u6703\u7528\u5230\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u90e8\u5206\uff0c\u5c31\u662f\u5b9a\u7fa9\u65b9\u584a\u6240\u9700\u7684\u5c11\u91cf\u7a0b\u5f0f\u78bc\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\uff0c\u65b9\u584a\u53ef\u8abf\u6574\uff0c\u4e26\u53ef\u65bc\u57f7\u884c\u968e\u6bb5\u8b8a\u66f4\u8272\u5f69\u53ca\u5927\u5c0f\u3002 \u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u4e2d\uff0c\u65b9\u584a\u7528\u65bc\u5be6\u5fc3\u80cc\u666f\u8272\u5f69\u7b49\u7bc4\u4f8b\uff0c\u900f\u904e\u8b8a\u66f4\u65b9\u584a\u8272\u5f69\u7684\u65b9\u5f0f\u652f\u63f4\u6de1\u8272\u53ca\u6df1\u8272\u6a21\u5f0f\u3002")),(0,a.kt)("h3",o({},{id:"reusable-assets"}),"\u53ef\u91cd\u8907\u4f7f\u7528\u7684\u8cc7\u7522"),(0,a.kt)("p",null,"\u53e6\u4e00\u7a2e\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u65b9\u6cd5\u662f\u9650\u5236\u8cc7\u7522\u7e3d\u6578\u3002 \u9019\u7576\u7136\u53ef\u900f\u904e\u63a1\u7528\u975e\u5e38\u7c21\u55ae\u7684\u8a2d\u8a08\u52a0\u4ee5\u9054\u6210\uff0c\u4e0d\u904e\u6709\u6642\u53ef\u91cd\u8907\u4f7f\u7528\u76f8\u540c\u8cc7\u7522\u591a\u6b21\uff0c\u4ee5\u9650\u5236\u8cc7\u7522\u7684\u73fe\u6709\u6578\u91cf\u3002"),(0,a.kt)("p",null,"\u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u4e2d\uff0c\u9019\u7a2e\u65b9\u6cd5\u7528\u65bc\u5929\u6c23\u87a2\u5e55\u3002 \u5929\u6c23\u5716\u793a\u662f\u4ee5\u76f8\u540c\u8cc7\u7522\u7e2e\u653e\u914d\u5408\u6240\u67093\u7a2e\u5c3a\u5bf8\u3002 \u7531\u65bc\u9019\u662f\u7e2e\u653e\u8abf\u6574\u7684\u8cc7\u7522\uff0c\u56e0\u6b64SVG\u683c\u5f0f\u6703\u6bd4\u58d3\u7e2e\u66f4\u70ba\u7406\u60f3\uff0c\u5373\u4f7fRLE\u4f7f\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f03\u5c11\u3002 \u4e0d\u904e\u5982\u679c\u8cc7\u7522\u662f\u4ee5RLE\u683c\u5f0f\u5132\u5b58\u70ba\u6240\u67093\u7a2e\u5c3a\u5bf8\uff0c\u7e3d\u8a08\u4f7f\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u5c31\u6703\u66f4\u591a\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\u6309\u9215\u4e5f\u662f\u5be6\u4f5c\u70ba\u53ef\u91cd\u8907\u4f7f\u7528\u7684\u8cc7\u7522\u3002 \u4f8b\u5982\u6309\u9215\u6703\u8207\u5176\u5716\u793a\u5206\u958b\uff0c\u4ee5\u4fbf\u8b93\u6309\u9215\u80fd\u5920\u91cd\u8907\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u793a\u7bc4\u4e2d\u4f7f\u7528\u53ef\u91cd\u8907\u6027\u7684\u53e6\u4e00\u7a2e\u60c5\u6cc1\u5247\u662f\u80cc\u666f\u3002 \u793a\u7bc4\u4e2d\u5171\u67095\u7a2e\u4e0d\u540c\u7684\u80cc\u666f\u8a2d\u8a08\uff0c\u4e0d\u904e\u4f7f\u7528\u53ef\u8abf\u6574\u8cc7\u7522(\u65b9\u584a\u53ca\u53ef\u91cd\u8907\u4f7f\u7528\u7684\u8cc7\u7522)\u5c31\u53ef\u50c5\u4ee5\u4e00\u500b\u8cc7\u7522\u548c\u65b9\u584a\u5efa\u7acb\u6240\u6709\u80cc\u666f\u3002"),(0,a.kt)("h2",o({},{id:"performance"}),"\u63d0\u5347\u6548\u80fd"),(0,a.kt)("p",null,"\u958b\u767c\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u61c9\u7528\u7a0b\u5f0f\u6642\uff0c\u6703\u6709\u964d\u4f4e\u6548\u80fd\u7684\u98a8\u96aa\u3002 \u4e0d\u904e\u5982\u679c\u6709\u5099\u7528RAM\u53ef\u4f9b\u4f7f\u7528\uff0c\u5c31\u6709\u65b9\u5f0f\u53ef\u4ee5\u63d0\u5347\u61c9\u7528\u7a0b\u5f0f\u6548\u80fd\u3002 By using ",(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"}),"Dynamic Bitmaps")," and ",(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"}),"Cacheable Containers"),", it is possible to draw static snapshots of assets or containers to RAM. \u4e4b\u5f8c\u7121\u8ad6\u4f55\u6642\u4f7f\u7528\u8cc7\u7522\u6216\u5bb9\u5668\uff0c\u5c31\u53ef\u6539\u70ba\u4f7f\u7528\u5feb\u53d6\u7248\u672c\u7684\u8cc7\u7522\u6216\u5bb9\u5668\u3002 \u5feb\u53d6\u7248\u672c\u53ea\u662fRAM\u4e4b\u4e2d\u7684\u9ede\u9663\u5716\uff0c\u4ea6\u5373\u6e32\u67d3\u6642\u9593\u8207\u6e32\u67d3\u4e00\u822c\u9ede\u9663\u5716\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u4e2d\uff0c\u53ef\u5feb\u53d6\u5bb9\u5668\u7528\u65bc\u6372\u52d5SVG\u8cc7\u7522\u53ca\u5411\u91cf\u5b57\u578b\uff0c\u540c\u6642\u7dad\u6301\u826f\u597d\u6548\u80fd\u3002"),(0,a.kt)(l.Z,{imageSource:"/img/development/scenarios/flash-limited-gui-development/cacheable-container.webp",width:"500",mdxType:"Figure"},"\u5c07\u5929\u6c23\u5143\u7d20\u4f5c\u70ba\u53ef\u5feb\u53d6\u5bb9\u5668"),(0,a.kt)("p",null,"\u4e00\u822c\u4f86\u8aaa\uff0c\u5411\u91cf\u5b57\u578b\u53ea\u8981\u5728\u57f7\u884c\u968e\u6bb5\u79fb\u52d5\u6216\u53ef\u79fb\u52d5\uff0c\u5c31\u6703\u53d7\u5230\u5feb\u53d6\u3002 \u9019\u6a23\u53ef\u78ba\u4fdd\u9054\u5230\u6700\u4f4e30 FPS\uff0c\u4e0d\u53d7\u6372\u52d5\u7684\u5411\u91cf\u5b57\u578b\u5f71\u97ff\u3002"),(0,a.kt)("p",null,"\u793a\u7bc4\u4e2d\u4f7f\u7528\u7684\u53e6\u4e00\u9805\u79d8\u8a23\uff0c\u5c31\u662f\u8b93\u58d3\u7e2e\u9ede\u9663\u5716\u89e3\u58d3\u7e2e\u70ba\u9ede\u9663\u5716\u5feb\u53d6\u3002 \u5c07\u9ede\u9663\u5716\u89e3\u58d3\u7e2e\u81f3RAM\uff0c\u5c31\u80fd\u5728\u53ef\u7e2e\u653e\u53ca\u53ef\u65cb\u8f49\u7684\u5c0f\u5de5\u5177\u4e2d\u4f7f\u7528\u3002 \u9ede\u9663\u5716\u89e3\u58d3\u7e2e\u6642\uff0cTouchGFX\u5728\u53c3\u8003\u9ede\u9663\u5716ID\u6642\u4e00\u5f8b\u4f7f\u7528\u89e3\u58d3\u7e2e\u7684\u5feb\u53d6\u7248\u672c\u3002 \u4ee5\u4e0b\u662f\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u4e4b\u4e2d\u7684\u7bc4\u4f8b\u3002 \u58d3\u7e2e\u9ede\u9663\u5716\u53ea\u8981\u9032\u884c\u89e3\u58d3\u7e2e\uff0c\u4e4b\u5f8c\u9ede\u9663\u5716\u5c31\u80fd\u50cf\u4e00\u822c\u9ede\u9663\u5716\u4e00\u6a23\u4f7f\u7528\u3002"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"StartView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp",metastring:"{21-25}","{21-25}":!0}),"StartView::StartView()\n{\n    Bitmap::decompress(BITMAP_MAIN_RIPPLE_LEFT_ID);     // Decompress compressed image to bitmap cache\n    Bitmap::decompress(BITMAP_MAIN_RIPPLE_RIGHT_ID);    // Decompress compressed image to bitmap cache\n}\n\nvoid StartView::setupScreen()\n{\n    leftMainRippleScale.setBitmap(BITMAP_MAIN_RIPPLE_LEFT_ID);      // Set bitmap for Scalable Image\n    rightMainRippleScale.setBitmap(BITMAP_MAIN_RIPPLE_RIGHT_ID);    // Set bitmap for Scalable Image\n    leftMainRippleScale.setWidthHeight(0, 0);       // Set scale of image\n    rightMainRippleScale.setWidthHeight(0, 0);      // Set scale of image\n}\n")),(0,a.kt)("p",null,"\u7531\u65bc\u5927\u91cf\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\uff0c\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u9700\u8981\u7684\u9ede\u9663\u5716\u5feb\u53d6\u70ba922 KB\uff0c \u4ee3\u8868\u9700\u8981\u5927\u91cf\u7684\u5099\u7528RAM\u3002 \u4e0d\u904e\u9019\u9805\u793a\u7bc4\u4e5f\u8b93\u5feb\u9583\u8a18\u61b6\u9ad4\u9054\u5230\u63a5\u8fd1\u6975\u9650\u7684\u7bc0\u7701\u5e45\u5ea6\u3002 \u5982\u679c\u662f\u66f4\u7c21\u55ae\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u6216\u662f\u4e0d\u90a3\u9ebc\u91cd\u8996\u6548\u80fd\u9700\u6c42\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u5c31\u6709\u53ef\u80fd\u5927\u5e45\u6e1b\u5c11\u6240\u9700\u7684\u9ede\u9663\u5716\u5feb\u53d6\u3002"),(0,a.kt)(r.Z,{mdxType:"FurtherReading"},(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"}),"Dynamic Bitmaps")),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"}),"Achieving Better Performance with Cacheable Container")),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/image-compression"}),"Decompressing images to the bitmap cache"))),(0,a.kt)("h2",o({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7d39\u5982\u4f55\u9650\u5236TouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u4f7f\u7528\u91cf\u3002"),(0,a.kt)("p",null,"\u90194\u7a2e\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u6982\u5ff5\uff0c\u53ef\u5728\u6240\u6709STM32\u786c\u9ad4\u5e73\u53f0\u4f7f\u7528\uff0c\u4e0d\u904e\u8acb\u8a18\u5f97SVG\u8207\u5411\u91cf\u5b57\u578b\u5177\u6709\u6602\u8cb4\u7684\u6e32\u67d3\u6210\u672c\u3002 \u56e0\u6b64\u5982\u679c\u6c92\u6709\u5411\u91cf\u6e32\u67d3\u786c\u9ad4\u52a0\u901f\uff0c\u6216\u662f\u6c92\u6709\u53ef\u7528\u7684\u984d\u5916\u904b\u7b97\u80fd\u529b\uff0c\u5c31\u53ef\u80fd\u9020\u6210\u6548\u80fd\u4e0b\u964d\u3002"),(0,a.kt)("p",null,"\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650GUI\u958b\u767c\u7684\u6982\u5ff5\uff0c\u53ef\u80fd\u6703\u5c0d\u6548\u80fd\u9020\u6210\u4e0d\u5229\u5f71\u97ff\uff0c\u4e0d\u904e\u53ef\u4f7f\u7528\u52d5\u614b\u9ede\u9663\u5716\u53ca\u53ef\u5feb\u53d6\u5bb9\u5668\u63d0\u5347\u6548\u80fd\u3002"),(0,a.kt)("p",null,"\u5404\u9805\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u65b9\u6cd5\uff0c\u53ef\u63d0\u4f9b\u7bc0\u7701\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u9f90\u5927\u6f5b\u80fd\u3002 \u5404\u7a2e\u6982\u5ff5\u53ef\u78ba\u5207\u7bc0\u7701\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u5bb9\u91cf\uff0c\u9700\u8996\u7279\u5b9a\u61c9\u7528\u7a0b\u5f0f\u800c\u5b9a\uff0c\u4e0d\u904e\u5c0d\u5feb\u9583\u8a18\u61b6\u9ad4\u53d7\u9650\u7684\u96fb\u52d5\u81ea\u884c\u8eca\u793a\u7bc4\u800c\u8a00\uff0c\u7bc0\u7701\u4e8692%\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"))}k.isMDXComponent=!0}}]);