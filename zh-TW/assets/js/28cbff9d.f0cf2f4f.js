"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[62818],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},11995:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const o=a},1302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>s});n(59496);var r=n(49613),a=n(89639),o=n(11995);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"vector-fonts",title:"\u5411\u91cf\u5b57\u578b"},c=void 0,u={unversionedId:"development/ui-development/touchgfx-engine-features/vector-fonts",id:"development/ui-development/touchgfx-engine-features/vector-fonts",title:"\u5411\u91cf\u5b57\u578b",description:"TouchGFX\u81ea4.23\u7248\u958b\u59cb\u652f\u63f4\u4f7f\u7528\u5411\u91cf\u683c\u5f0f\u5b57\u578b\u3002 \u4ee5\u5411\u91cf\u683c\u5f0f\u5132\u5b58\u7684\u5b57\u578b\uff0c\u6709\u52a9\u65bc\u6e1b\u5c11\u5b57\u578b\u8cc7\u6599\u7684\u5927\u5c0f\uff0c\u56e0\u70ba\u5b57\u578b\u8cc7\u6599\u6703\u5728\u6240\u6709\u5927\u5c0f\u7684\u5b57\u578b\u4e4b\u9593\u5171\u7528\u3002 \u76f8\u8f03\u4e4b\u4e0b\uff0c\u6bcf\u7a2e\u5b57\u578b\u5927\u5c0f\u7684\u9ede\u9663\u5716\u5b57\u578b\u90fd\u6709\u8a72\u5927\u5c0f\u5b57\u7b26\u5c08\u5c6c\u7684\u9ede\u9663\u5716\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/vector-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/vector-fonts",permalink:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/vector-fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"vector-fonts",title:"\u5411\u91cf\u5b57\u578b"},sidebar:"docs",previous:{title:"SVG",permalink:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/svg"},next:{title:"\u5716\u50cf\u58d3\u7e2e",permalink:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/image-compression"}},d={},s=[{value:"\u4ec0\u9ebc\u662f\u5411\u91cf\u5b57\u578b",id:"what-are-vector-fonts",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:3},{value:"\u8a2d\u5b9a",id:"vector-configuration",level:2},{value:"\u4f7f\u7528\u5411\u91cf\u5b57\u578b",id:"vector-using",level:2},{value:"\u5b57\u9ad4\u6392\u5370",id:"vector-typographies",level:2},{value:"\u67b6\u69cb",id:"vector-architecture",level:2},{value:"\u9650\u5236",id:"vector-limitations",level:2},{value:"\u7e8f\u7e5e\u898f\u5247",id:"\u7e8f\u7e5e\u898f\u5247",level:3},{value:"\u4f7f\u7528FontForge",id:"\u4f7f\u7528fontforge",level:4},{value:"\u5132\u5b58",id:"vector-storage",level:3},{value:"\u6cf0\u6587",id:"\u6cf0\u6587",level:3}],m={toc:s},g="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(g,l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX\u81ea4.23\u7248\u958b\u59cb\u652f\u63f4\u4f7f\u7528\u5411\u91cf\u683c\u5f0f\u5b57\u578b\u3002 \u4ee5\u5411\u91cf\u683c\u5f0f\u5132\u5b58\u7684\u5b57\u578b\uff0c\u6709\u52a9\u65bc\u6e1b\u5c11\u5b57\u578b\u8cc7\u6599\u7684\u5927\u5c0f\uff0c\u56e0\u70ba\u5b57\u578b\u8cc7\u6599\u6703\u5728\u6240\u6709\u5927\u5c0f\u7684\u5b57\u578b\u4e4b\u9593\u5171\u7528\u3002 \u76f8\u8f03\u4e4b\u4e0b\uff0c\u6bcf\u7a2e\u5b57\u578b\u5927\u5c0f\u7684\u9ede\u9663\u5716\u5b57\u578b\u90fd\u6709\u8a72\u5927\u5c0f\u5b57\u7b26\u5c08\u5c6c\u7684\u9ede\u9663\u5716\u3002"),(0,r.kt)("p",null,"\u5411\u91cf\u5b57\u578b\u7528\u65bc\u4f7f\u7528\u8005\u4ecb\u9762\uff0c\u5c31\u50cf\u662f\u4f7f\u7528TextArea\u6216ButtonWithLabel\u7b49\u5c0f\u5de5\u5177\u7684\u4e00\u822c\u9ede\u9663\u5716\u5b57\u578b\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u5411\u91cf\u5b57\u578b\u683c\u5f0f\uff0c\u5c31\u5fc5\u9808\u5728STM32CubeMX\u70ba\u5e73\u53f0\u555f\u7528\u5411\u91cf\u5b57\u578b\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u5411\u91cf\u5b57\u578b\u50c5\u65bc16bpp\u300124bpp\u621632bpp\u5f71\u50cf\u7de9\u885d\u5340\u7372\u5f97\u652f\u63f4\u3002"),(0,r.kt)("h2",l({},{id:"what-are-vector-fonts"}),"\u4ec0\u9ebc\u662f\u5411\u91cf\u5b57\u578b"),(0,r.kt)("p",null,"\u5411\u91cf\u5b57\u578b\u662f\u6307\u4ee5\u66f2\u7dda\u53ca\u76f4\u7dda\u63cf\u8ff0\u7684\u500b\u5225\u5b57\u6bcd\u3002 \u9019\u985e\u66f2\u7dda\u53ca\u76f4\u7dda\u53ef\u653e\u5927\u53ca\u7e2e\u5c0f\uff0c\u4ee5\u7522\u751f\u4e0d\u540c\u5927\u5c0f\u7684\u5b57\u7b26\u3002 \u6211\u5011\u4e00\u822c\u5728TouchGFX\u4f7f\u7528\u7684\u6240\u6709\u5b57\u578b\u90fd\u662f\u5411\u91cf\u5b57\u578b(\u4f8b\u5982TrueType\u6216OpenType\u5b57\u578b)\u3002 \u5b57\u578b\u63cf\u8ff0\u4e2d\u7684\u66f2\u7dda\u53ca\u76f4\u7dda\u6703\u5728TouchGFX Designer\u7522\u751f\u5716\u8cc7\u6642\uff0c\u7531TouchGFX Font Converter\u8f49\u63db\u70ba\u8a31\u591a\u5c0f\u578b\u9ede\u9663\u5716\u3002"),(0,r.kt)("p",null,"\u5c07\u5411\u91cf\u5b57\u578b\u8f49\u63db\u70ba\u9ede\u9663\u5716\u6642\uff0c\u662f\u4ee5TouchGFX Designer\u4e4b\u4e2d\u5b9a\u7fa9\u7684\u5b57\u9ad4\u6392\u5370\u70ba\u57fa\u790e\u3002 \u4f8b\u5982\u61c9\u7528\u7a0b\u5f0f\u53ef\u80fd\u4f7f\u7528\u5927\u53ca\u5c0f\u9019\u5169\u7a2e\u5b57\u9ad4\u6392\u5370\u3002 \u5927\u53ef\u80fd\u662f\u4ee5\u5927\u5c0f30\u7684Verdana\u70ba\u57fa\u790e\uff0c\u5c0f\u53ef\u80fd\u662f\u4ee5\u5927\u5c0f20\u7684Verdana\u70ba\u57fa\u790e\u3002 \u5982\u679c\u6211\u5011\u5047\u8a2d\u61c9\u7528\u7a0b\u5f0f\u5728\u9019\u985e\u5b57\u9ad4\u6392\u5370\u4e2d\u4f7f\u7528\u5b57\u7b26A-Z\u548ca-z\uff0c\u5247\u6bcf\u500b\u5b57\u9ad4\u6392\u5370\u5c31\u6703\u670952\u500b\u5b57\u7b26\uff0c\u4e0d\u904e\u61c9\u7528\u7a0b\u5f0f\u5c07\u5305\u542b104\u500b\u9ede\u9663\u5716\uff0c\u56e0\u70ba\u6bcf\u500b\u5b57\u6bcd\u6703\u6709\u5169\u500b\u9ede\u9663\u5716\uff0c \u4e5f\u5c31\u662f\u4e00\u500b\u9ede\u9663\u5716\u7528\u65bc\u5927\u5c0f30\uff0c\u53e6\u4e00\u500b\u7528\u65bc\u5927\u5c0f20\u3002"),(0,r.kt)("p",null,"\u5411\u91cf\u5b57\u578b\u5247\u4e0d\u4e00\u6a23\uff0c\u56e0\u70ba\u6211\u5011\u6703\u4fdd\u7559\u5b57\u7b26\u7684\u5411\u91cf\u5b9a\u7fa9\uff0c\u4e0d\u6703\u5efa\u7acb\u5b57\u7b26\u7684\u9ede\u9663\u5716\uff0c \u800c\u662f\u53ea\u8b93\u5411\u91cf\u5b9a\u7fa9\u5305\u542b\u5728\u76ee\u6a19\u61c9\u7528\u7a0b\u5f0f\u4e2d\u4e00\u6b21\u3002 \u7522\u751f\u6240\u9700\u5169\u7a2e\u5b57\u9ad4\u6392\u5370\u6642\u552f\u4e00\u9700\u8981\u7684\u984d\u5916\u8cc7\u6599\uff0c\u5c31\u662f\u5169\u7a2e\u4e0d\u540c\u7684\u7e2e\u653e\u4fc2\u6578\u3002 \u5176\u4e2d\u4e00\u500b\u4fc2\u6578\u7528\u65bc\u5c07\u5411\u91cf\u5b9a\u7fa9\u653e\u5927\u70ba\u5927\u5c0f30\uff0c\u53e6\u4e00\u500b\u5247\u7528\u65bc\u7e2e\u5c0f\u81f3\u5927\u5c0f20\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u5982\u679c\u6211\u5011\u5c07\u53e6\u4e00\u500b\u5b57\u9ad4\u6392\u5370\u5927\u5c0f\u65b0\u589e\u81f3\u7bc4\u4f8b\u61c9\u7528\u7a0b\u5f0f\uff0c\u4f8b\u5982\u5927\u5c0f40\u7684Verdana\uff0c\u5247Flash\u9700\u6c42\u53ea\u6703\u7565\u5fae\u589e\u52a0\u3002"),(0,r.kt)("h3",l({},{id:"\u7bc4\u4f8b"}),"\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0cTruetype\u5b57\u578bVerdana\u4e2d\u300cG\u300d\u7684\u5411\u91cf\u5b9a\u7fa9\u70ba170\u4f4d\u5143\u7d44\u3002"),(0,r.kt)("p",null,"\u4ee3\u8868\u5b57\u7b26\u7684\u9ede\u9663\u5716\u5927\u5c0f\uff0c\u53d6\u6c7a\u65bc\u4f7f\u7528\u7684bpp\u53ca\u5b57\u7b26\u5927\u5c0f\u3002 \u4e0b\u8868\u986f\u793a4bpp\u5404\u7a2e\u5b57\u7b26\u5927\u5c0f\u4e2d\u300cG\u300d\u7684\u9ede\u9663\u5716\u5927\u5c0f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"\u5b57\u578b\u5927\u5c0f"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"G\u5b57\u7b26\u5927\u5c0f/\u50cf\u7d20"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"\u9ede\u9663\u5716\u5927\u5c0f/\u4f4d\u5143\u7d44"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"20"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"14 x 14"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"98")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"30"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"21 x 22"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"242")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"40"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"27 x 32"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"448")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"\u7e3d\u8a08"),(0,r.kt)("td",l({parentName:"tr"},{align:null})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"788")))),(0,r.kt)("p",null,"\u6211\u5011\u767c\u73fe\u5b57\u578b\u5927\u5c0f20\u7684\u9ede\u9663\u5716\u5927\u5c0f\uff0c\u6bd4\u300cG\u300d\u7684\u5411\u91cf\u5b9a\u7fa9\u66f4\u5c0f\uff0c\u4e0d\u904e\u5982\u679c\u662f\u5927\u5c0f30\uff0c\u5411\u91cf\u5b9a\u7fa9\u5247\u6bd4\u9ede\u9663\u5716\u5927\u5c0f\u66f4\u5c0f\u3002 \u5982\u679c\u6211\u5011\u4f7f\u7528\u4e09\u7a2e\u4e0d\u540c\u5927\u5c0f\u7684Verdana\uff0c\u9ede\u9663\u5716\u5c31\u9054\u5230788\u4f4d\u5143\u7d44\uff0c\u4f46\u5411\u91cf\u5b9a\u7fa9\u4ecd\u50c5\u4f7f\u7528170\u4f4d\u5143\u7d44\u3002 \u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u7bc0\u7701\u4f7f\u752878%\u7684Flash\u3002"),(0,r.kt)("p",null,"\u9019\u7a2e\u7bc0\u7701\u7a7a\u9593\u7684\u4f5c\u6cd5\u6709\u4e00\u9805\u7f3a\u9ede\uff0c\u5c31\u662f\u6548\u80fd\u554f\u984c\u3002 \u5982\u679c\u6211\u5011\u9700\u8981\u7e6a\u88fd\u5b57\u7b26\uff0c\u5c31\u5fc5\u9808\u5c07\u5411\u91cf\u5b9a\u7fa9\u8f49\u63db\u70ba\u50cf\u7d20\u3002 \u8f49\u63db\u65b9\u5f0f\u70ba\u7e2e\u653e\u53ca\u8f49\u8b6f\u5b57\u7b26\u7684\u5411\u91cf\u5b9a\u7fa9\uff0c\u7136\u5f8c\u5c07\u5176\u6e32\u67d3\u81f3\u5f71\u50cf\u7de9\u885d\u5340\u3002"),(0,r.kt)("p",null,"\u5728Verdana\u4e2d\u4e00\u500b\u300cG\u300d\u662f\u753120\u689dBezier\u66f2\u7dda\u53ca6\u689d\u76f4\u7dda\u7d44\u6210\u3002 \u9019\u4e9b\u7dda\u689d\u90fd\u6703\u8f49\u63db\u70ba\u8f2a\u5ed3\uff0c\u65bc\u6700\u5f8c\u4f7f\u7528\u9078\u53d6\u7684\u6587\u5b57\u8272\u5f69\u52a0\u4ee5\u4e0a\u8272\u3002 \u9019\u9805\u6d41\u7a0b\u6703\u91cd\u8907\u7528\u65bc\u6587\u5b57\u4e2d\u7684\u6240\u6709\u5b57\u6bcd\uff0c\u800c\u4e14\u53ea\u8981\u6587\u5b57\u91cd\u65b0\u7e6a\u88fd\u5c31\u6703\u91cd\u8907\u9032\u884c\u3002"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u6d41\u7a0b\u6703\u5728\u6709\u914d\u7f6eGPU2D\u7684\u5fae\u63a7\u5236\u5668 (\u4f8b\u5982STM32U5G9)\u4e0a\u9032\u884c\u786c\u9ad4\u52a0\u901f\u3002 \u5982\u679c\u662fSTM32G0\u9019\u985e\u6c92\u6709\u6d6e\u9ede\u786c\u9ad4\u7684\u7de9\u6162\u5fae\u63a7\u5236\u5668\uff0c\u786c\u9ad4\u5728\u57f7\u884c\u9019\u985e\u4f5c\u696d\u6642\u5c31\u6703\u5f88\u8cbb\u529b\u3002"),(0,r.kt)("p",null,"\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u4f7f\u7528\u9ede\u9663\u5716\u5b57\u578b\u6642\u6bd4\u8f03\u9069\u5408\u4f7f\u7528\u6e32\u67d3\u3002 \u56e0\u6b64\u6211\u5011\u5efa\u8b70\u5728\u5fc5\u9808\u7bc0\u7701Flash\u7684\u60c5\u6cc1\u4e0b\u4f7f\u7528\u5411\u91cf\u5b57\u578b\uff0c\u5176\u4ed6\u60c5\u6cc1\u5247\u4f7f\u7528\u9ede\u9663\u5716\u5b57\u578b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u6587\u5b57\u6709\u52d5\u756b\u7279\u6548(\u4f8b\u5982\u6372\u52d5\u3001\u79fb\u52d5\u6216\u6de1\u5316)\uff0c\u5247\u5efa\u8b70\u4f7f\u7528\u9ede\u9663\u5716\u5b57\u578b\u3002"),(0,r.kt)("h2",l({},{id:"vector-configuration"}),"\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u4f7f\u7528\u5411\u91cf\u5b57\u578b\u6642\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"Vector Rendering")," (\u5411\u91cf\u6e32\u67d3)\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"Vector Fonts")," (\u5411\u91cf\u5b57\u578b)\u9019\u5169\u9805\u984d\u5916\u7684\u67b6\u69cb\u529f\u80fd\u3002 \u524d\u8ff0\u529f\u80fd\u65bcSTM32CubeMX\u4e2d\u555f\u7528\u3002 \u66f4\u591a\u8a73\u7d30\u8cc7\u8a0a\u8acb\u53c3\u95b1",(0,r.kt)("a",l({parentName:"p"},{href:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering"}),"Generator\u4f7f\u7528\u8005\u6307\u5357"),"\u3002"),(0,r.kt)("p",null,"\u5b57\u9ad4\u6392\u5370\u662f\u5728TouchGFX Designer\u4e2d\u8a2d\u5b9a\u3002 \u60a8\u53ef\u5728\u5176\u4e2d\u9078\u64c7\u5c08\u6848\u5b57\u9ad4\u6392\u5370\u662f\u5426\u61c9\u4f7f\u7528\u9ede\u9663\u5716\u5b57\u578b\u6216\u5411\u91cf\u5b57\u578b\u683c\u5f0f\u3002 \u9810\u8a2d\u70ba\u9ede\u9663\u5716\u5b57\u578b\u683c\u5f0f\u3002"),(0,r.kt)("h2",l({},{id:"vector-using"}),"\u4f7f\u7528\u5411\u91cf\u5b57\u578b"),(0,r.kt)("p",null,"\u5411\u91cf\u5b57\u578b\u5728TouchGFX\u4e2d\u5c31\u662f\u4f5c\u70ba\u9ede\u9663\u5716\u5b57\u578b\u4f7f\u7528\u3002 \u60a8\u53ef\u5efa\u7acb\u6587\u5b57\u4f5c\u70ba\u547d\u540d\u8cc7\u6e90\u6216\u4e00\u6b21\u6027\u4f7f\u7528\u6587\u5b57\u3002 \u60a8\u53ef\u5728\u5176\u4e2d\u4e00\u500b\u5c0f\u5de5\u5177\u986f\u793a\u6587\u5b57\uff0c\u4f8b\u5982TextArea\u3002 \u5411\u91cf\u5b57\u578b\u8207\u9ede\u9663\u5716\u5b57\u578b\u4e4b\u9593\u7684\u5dee\u7570\u96b1\u85cf\u5728\u6e32\u67d3\u7a0b\u5f0f\u78bc\u4e2d\u3002"),(0,r.kt)("h2",l({},{id:"vector-typographies"}),"\u5b57\u9ad4\u6392\u5370"),(0,r.kt)("p",null,"\u5982\u679c\u5b57\u9ad4\u6392\u5370\u5728TouchGFX Designer\u4e2d\u8a2d\u5b9a\u70ba\u4ee5\u5411\u91cf\u70ba\u57fa\u790e\uff0c\u5c31\u6703\u7522\u751f\u5411\u91cf\u5b57\u578b\u3002 \u8acb\u53c3\u95b1",(0,r.kt)("a",l({parentName:"p"},{href:"../designer-user-guide/texts-view#typographies"}),"Designer\u4f7f\u7528\u8005\u6307\u5357"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u591a\u500b\u5b57\u9ad4\u6392\u5370\u4f7f\u7528\u76f8\u540c\u5b57\u578b(\u4f8b\u5982Verdana)\uff0c\u5247\u5b57\u9ad4\u6392\u5370\u6703\u5728\u5c08\u6848\u4e2d\u5171\u7528\u5411\u91cf\u5b9a\u7fa9\uff0c\u4f46\u4f7f\u7528\u4e0d\u540c\u7e2e\u653e\u4fc2\u6578\u4ee5\u7522\u751f\u4e0d\u540c\u5927\u5c0f\u7684\u5b57\u7b26\u3002"),(0,r.kt)("p",null,"\u9019\u4e5f\u4ee3\u8868\u5404\u500b\u5b57\u9ad4\u6392\u5370\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Fallback Character")," (\u905e\u88dc\u5b57\u5143)\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"Ellipsis Character")," (\u7701\u7565\u865f\u5b57\u5143)\u7b49\u5b57\u9ad4\u6392\u5370\u5c6c\u6027\u5fc5\u9808\u76f8\u540c\u3002"),(0,r.kt)("p",null,"\u5b57\u9ad4\u6392\u5370\u4f7f\u7528\u7684\u5b57\u5143(\u5305\u62ec\u842c\u7528\u5b57\u5143)\u6703\u7d50\u5408\u5728\u4e00\u8d77\uff0c\u4e26\u63d0\u4f9b\u7d66\u5c08\u6848\u4e2d\u4f7f\u7528\u76f8\u540c\u5b57\u578b\u7684\u6240\u6709\u5b57\u9ad4\u6392\u5370\u3002"),(0,r.kt)("h2",l({},{id:"vector-architecture"}),"\u67b6\u69cb"),(0,r.kt)("p",null,"\u5411\u91cf\u5b57\u578b\u6e32\u67d3\u662f\u4ee5\u65b0\u5143\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"VectorFontRenderer"),"\u70ba\u57fa\u790e\u3002 \u6b64\u5143\u4ef6\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"VectorRenderer"),"\u5143\u4ef6\u7e6a\u88fd\u5b57\u7b26\u3002"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u5411\u91cf\u5b57\u578b\u7684\u5c08\u6848\u4e2d\uff0c\u9019\u5169\u9805\u5143\u4ef6\u5fc5\u9808\u70ba\u53ef\u7528\u3002 \u5982\u679c\u524d\u8ff0\u5169\u9805\u5143\u4ef6\u5df2\u555f\u7528\uff0c\u5c31\u6703\u7531STM32CubeMX\u81ea\u52d5\u63d0\u4f9b\u4f7f\u7528\u3002 \u5982\u679c\u60a8\u6c92\u6709\u4f7f\u7528STM32CubeMX\uff0c\u5c31\u5fc5\u9808\u624b\u52d5\u9032\u884c\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662fSTM32CubeMX\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\uff0c\u4e26\u53cd\u767d\u7a81\u986f\u76f8\u95dc\u7a0b\u5f0f\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19}","{5-5,19-19}":!0}),"static STM32TouchController tc;\nstatic STM32DMA dma;\nstatic TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic VectorFontRendererImpl vectorFontRenderer;\nstatic ApplicationFontProvider fontProvider;\nstatic Texts texts;\nstatic TouchGFXHAL hal(dma, display, tc, 240, 320);\n\nvoid touchgfx_init()\n{\n    Bitmap::registerBitmapDatabase(BitmapDatabase::getInstance(), BitmapDatabase::getInstanceSize());\n    TypedText::registerTexts(&texts);\n    Texts::setLanguage(0);\n\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n\n    display.setVectorFontRenderer(&vectorFontRenderer);\n    ...\n")),(0,r.kt)("p",null,"\u4e5f\u5fc5\u9808\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"p"},"VectorRenderer"),"\u5143\u4ef6(\u4f86\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL.cpp"),")\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"namespace touchgfx\n{\nVectorRenderer* VectorRenderer::getInstance()\n{\n    static CWRVectorRendererRGB565 renderer;\n\n    return &renderer;\n}\n} // namespace touchgfx\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u5177\u6709GPU2D\u52a0\u901f\u5668\u7684\u5e73\u53f0\uff0c\u5c31\u61c9\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"CPU2DVectorRenderer"),"\u53d6\u4ee3",(0,r.kt)("inlineCode",{parentName:"p"},"CWRVectorRendererRGB565"),"\u3002 \u9019\u6a23\u53ef\u4ee5\u555f\u7528\u786c\u9ad4\u52a0\u901f\u3002"),(0,r.kt)("h2",l({},{id:"vector-limitations"}),"\u9650\u5236"),(0,r.kt)("h3",l({},{id:"\u7e8f\u7e5e\u898f\u5247"}),"\u7e8f\u7e5e\u898f\u5247"),(0,r.kt)("p",null,"TouchGFX\u61c9\u7528\u7a0b\u5f0f\u4e2d\u4f7f\u7528\u7684\u5411\u91cf\u5b57\u578b\u5b57\u9ad4\u6392\u5370\uff0c\u5fc5\u9808\u9075\u5faa\u7279\u5b9a\u898f\u5247\u4ee5\u4fbf\u6b63\u78ba\u5730\u7e6a\u88fd\u5b57\u7b26\u3002 \u5177\u9ad4\u4f86\u8aaa\uff0c\u8f2a\u5ed3\u91cd\u758a\u7684\u5b57\u5143\u6709\u6642\u6703\u6e32\u67d3\u4e0d\u6b63\u78ba\uff0c\u539f\u56e0\u662fTouchGFX\u7e6a\u88fd\u5411\u91cf\u5716\u5f62\u6642\u4f7f\u7528\u7684",(0,r.kt)("em",{parentName:"p"},"\u7e8f\u7e5e\u898f\u5247"),"\u3002 \u82e5\u8981\u7531\u5ba2\u88fd\u5b57\u9ad4\u6392\u5370\u79fb\u9664\u91cd\u758a\u8f2a\u5ed3\uff0c\u5efa\u8b70\u4f7f\u7528\u514d\u8cbb\u7684",(0,r.kt)("a",l({parentName:"p"},{href:"https://fontforge.org/en-US/downloads/windows/"}),(0,r.kt)("em",{parentName:"a"},"FontForge")),"\u5de5\u5177\u3002"),(0,r.kt)("h4",l({},{id:"\u4f7f\u7528fontforge"}),"\u4f7f\u7528FontForge"),(0,r.kt)("p",null,"\u5c0e\u89bd\u81f3FontForge\u5b89\u88dd\u8cc7\u6599\u593e(\u901a\u5e38\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"c:/Program Files (x86)/FontForgeBuilds"),")\uff0c\u7136\u5f8c\u555f\u52d5",(0,r.kt)("inlineCode",{parentName:"p"},".exe"),"\u6a94\u6848\uff1a"),(0,r.kt)(a.Z,{width:"40%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-open-font.png",mdxType:"Figure"},"FontForge\u555f\u52d5\u8996\u7a97\u3002"),(0,r.kt)("p",null,"\u5c0e\u89bd\u81f3\u5c08\u6848\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"assets/fonts/"),"\u8cc7\u6599\u593e\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"c:/TouchGFXProjects/MyApplication/TouchGFX/assets/fonts/"),"\u3002 FontForge\u5c07\u6703\u5075\u6e2c\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u6240\u6709",(0,r.kt)("em",{parentName:"p"},"TrueType"),"\u5b57\u578b\u3002 \u5728\u6b64\u7bc4\u4f8b\u4e2d\uff0c",(0,r.kt)("em",{parentName:"p"},"Cairo-Bold.ttf")," TrueType\u5b57\u578b\u5305\u542b\u672a\u6b63\u78ba\u7e6a\u88fd\u7684\u91cd\u758a\u8f2a\u5ed3\uff1a"),(0,r.kt)(a.Z,{width:"40%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-select-font.png",mdxType:"Figure"},"FontForge\u958b\u555fTrueType\u5b57\u578b\u8996\u7a97\u3002"),(0,r.kt)("p",null,"\u9ede\u64ca",(0,r.kt)("inlineCode",{parentName:"p"},"OK")," (\u78ba\u5b9a)\u5c07\u958b\u555f\u5b57\u9ad4\u6392\u5370\u4e2d\u6240\u6709\u5b57\u7b26\u7684",(0,r.kt)("em",{parentName:"p"},"font view")," (\u5b57\u578b\u8996\u7a97)\uff1a"),(0,r.kt)(a.Z,{width:"80%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-font-view.png",mdxType:"Figure"},"FontForge\u5b57\u578b\u8996\u7a97\u3002"),(0,r.kt)("p",null,"\u82e5\u8981\u7531\u5b57\u7b26\u79fb\u9664\u91cd\u758a\u8f2a\u5ed3\uff0c\u8acb\u5728\u5b57\u578b\u8996\u7a97\u9078\u64c7\u6240\u6709\u5b57\u7b26\uff0c\u65b9\u6cd5\u70ba\u4f7f\u7528 ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Ctrl + A"),". \u9078\u53d6\u6240\u6709\u5b57\u7b26\u5f8c\uff0c\u63a5\u4e0b\u4f86\u8acb\u4f7f\u7528\u5feb\u901f\u9375 ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Ctrl + u")," \u7136\u5f8c\u4f7f\u7528 ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Ctrl + Shift + O")," \u4ee5\u79fb\u9664\u9078\u53d6\u5b57\u7b26\u7684\u91cd\u758a\u8f2a\u5ed3\u3002 \u5c07\u6703\u6709\u85cd\u8272\u6a19\u8a18\u986f\u793a\u5728\u6240\u6709\u5b57\u7b26\u4e0a\u65b9\uff0c\u8868\u793a\u5b57\u7b26\u5df2\u8b8a\u66f4\u3002 \u60a8\u53ef\u5728\u500b\u5225\u5b57\u7b26\u4e0a\u6309\u5169\u4e0b\u4ee5\u6aa2\u8996\u6548\u679c\u3002 \u6211\u5011\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"$"),"\u5b57\u7b26\u70ba\u4f8b\uff0c\u986f\u793a\u79fb\u9664\u91cd\u758a\u8f2a\u5ed3\u524d\u5f8c\u7684\u60c5\u6cc1\uff1a"),(0,r.kt)(a.Z,{width:"80%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-dollar-glyph-comparison.png",noShadow:!0,mdxType:"Figure"},"\u91cd\u758a\u8f2a\u5ed3(\u5de6\u5074)\u53ca\u7121\u91cd\u758a\u8f2a\u5ed3(\u53f3\u5074)\u7684$\u5b57\u7b26\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u89c0\u5bdf\u5230\u5b57\u7b26\u8f2a\u5ed3\u4e26\u672a\u53d7\u5230\u5f71\u97ff\uff0c\u4f46\u91cd\u758a\u8f2a\u5ed3\u5df2\u7d93\u5408\u4f75\u3002 \u82e5\u8981\u5728TouchGFX\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u975e\u91cd\u758a\u5b57\u9ad4\u6392\u5370\uff0c\u6211\u5011\u6703\u4f7f\u7528FontForge\u532f\u51fa\u65b0\u5b57\u578b\u3002 \u5728FontForge ",(0,r.kt)("em",{parentName:"p"},"font view")," (\u5b57\u578b\u8996\u7a97)\u4f7f\u7528\u5feb\u901f\u9375 ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Ctrl + Shift + G")," \u532f\u51fa\u5b57\u578b\u3002 \u9019\u6a23\u6703\u958b\u555f",(0,r.kt)("em",{parentName:"p"},"Generate Fonts")," (\u7522\u751f\u5b57\u578b)\u8996\u7a97\u3002 \u5efa\u8b70\u5c07\u5b57\u9ad4\u6392\u5370\u91cd\u65b0\u547d\u540d\uff0c\u4f8b\u5982\u52a0\u4e0a\u300c-no-overlap\u300d\u4f5c\u70ba\u5b57\u5c3e\uff0c\u4ee5\u514d\u56e0\u70ba\u932f\u8aa4\u800c\u8986\u5beb\u539f\u59cb\u5b57\u578b\u3002 \u8acb\u9078\u64c7",(0,r.kt)("inlineCode",{parentName:"p"},"TrueType"),"\u4f5c\u70ba\u8f38\u51fa\u683c\u5f0f\u3002 \u8a2d\u5b9a\u61c9\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)(a.Z,{width:"30%",imageSource:"/img/development/ui-development/touchgfx-engine-features/vector-fonts/ff-generate-fonts.png",mdxType:"Figure"},"FontForge\u7522\u751f\u5b57\u578b\u8a2d\u5b9a\u3002"),(0,r.kt)("p",null,"\u8acb\u6309\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"Generate")," (\u7522\u751f)\u4ee5\u532f\u51fa\u5b57\u578b\u3002 \u5982\u679c\u51fa\u73fe\u8b66\u544a\uff0c\u8acb\u6309\u4e0b",(0,r.kt)("em",{parentName:"p"},"Yes")," (\u662f)\u3002 \u532f\u51fa\u7684\u5b57\u9ad4\u6392\u5370\u5c07\u51fa\u73fe\u5728\u5c08\u6848",(0,r.kt)("inlineCode",{parentName:"p"},"assets/fonts/"),"\u8cc7\u6599\u593e\u539f\u59cbTrueType\u5b57\u578b\u65c1\u908a\u3002 \u60a8\u53ef\u5c07\u6b64\u8cc7\u6599\u593e\u7684\u539f\u59cb\u5b57\u578b\u79fb\u9664\u81f3\u78c1\u789f\u7684\u5176\u4ed6\u5730\u65b9\uff0c\u4ee5\u514d\u5728TouchGFX Designer\u51fa\u73fe\u591a\u500b\u540d\u7a31\u76f8\u540c\u7684\u5b57\u9ad4\u6392\u5370\u3002 \u91cd\u65b0\u555f\u52d5TouchGFX Designer\uff0c\u8b93\u65b0\u5b57\u578b\u51fa\u73fe\u5728\u5b57\u578b\u9078\u64c7\u5668\u4e4b\u4e2d\u3002 \u5982\u679c\u60a8\u5df2\u5728\u4fee\u6539\u5b57\u578b\u4e4b\u524d\u65bcTouchGFX Designer\u7522\u751f\u7a0b\u5f0f\u78bc\uff0c\u8acb\u52d9\u5fc5\u65bc\u518d\u6b21\u7522\u751f\u7a0b\u5f0f\u78bc\u4e4b\u524d\u79fb\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/"),"\u8cc7\u6599\u593e\u3002"),(0,r.kt)("h3",l({},{id:"vector-storage"}),"\u5132\u5b58"),(0,r.kt)("p",null,"\u5411\u91cf\u5b57\u578b\u8cc7\u6599\u5fc5\u9808\u5132\u5b58\u65bc\u8a18\u61b6\u9ad4\u6620\u5c04\u5340\u57df\uff0c \u4f8b\u5982\u5167\u90e8Flash\u3001\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\u7684\u5916\u90e8QSPI/OSPI Flash\u3001RAM\u6216\u5176\u4ed6\u985e\u4f3c\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u7684\u5e73\u53f0\u5728\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u8cc7\u6599\u5132\u5b58\u5176\u4ed6\u5b57\u578b\u8cc7\u6599\uff0c\u5c31\u5fc5\u9808\u8b8a\u66f4\u9023\u7d50\u5668\u8173\u672c\uff0c\u4ee5\u4fbf\u5c07\u6240\u6709\u5411\u91cf\u5b57\u578b\u8cc7\u6599\u79fb\u5f80\u5167\u90e8Flash\u7b49\u5730\u65b9\u3002 \u4ee5\u4e0b\u8aaa\u660e\u5982\u4f55\u4f7f\u7528ARM gcc\u9032\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),'  /* Constant data into "FLASH" Rom type memory */\n  .FontFlashSection :\n  {\n    . = ALIGN(4);\n    */Vector_*.o(FontFlashSection)         /* Vector font data  */\n    . = ALIGN(4);\n  } >FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n')),(0,r.kt)("p",null,"\u9019\u6703\u5c07\u7b26\u5408",(0,r.kt)("inlineCode",{parentName:"p"},"*/Vector_*.o/"),"\u7684\u5b57\u578b\u8cc7\u6599\u7531\u6a94\u6848\u79fb\u5f80",(0,r.kt)("inlineCode",{parentName:"p"},"FLASH"),"\u5340\u57df\uff0c\u5176\u4ed6\u5b57\u578b\u8cc7\u6599\u5247\u79fb\u5f80",(0,r.kt)("inlineCode",{parentName:"p"},"SPI_FLASH"),"\u5340\u57df\u3002"),(0,r.kt)("p",null,"\u5411\u91cf\u5b57\u578b\u8cc7\u6599\u6703\u7522\u751f\u81f3\u6a94\u6848\u4e2d\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/Vector_Font_Verdana.cpp"),"\u53ca\u985e\u4f3c\u6a94\u6848\u3002"),(0,r.kt)("h3",l({},{id:"\u6cf0\u6587"}),"\u6cf0\u6587"),(0,r.kt)("p",null,"\u76ee\u524d\u5df2\u77e5\u6cf0\u6587\u7121\u6cd5\u4ee5\u5411\u91cf\u5b57\u578b\u6b63\u78ba\u6e32\u67d3\u3002 \u89e3\u6c7a\u65b9\u6cd5\u662f\u91dd\u5c0d\u6cf0\u6587\u4f7f\u7528\u9ede\u9663\u5716\u5b57\u578b\u3002"))}f.isMDXComponent=!0}}]);