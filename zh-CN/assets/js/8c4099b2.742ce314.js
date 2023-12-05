"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[24378],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61235:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const l=r},12822:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(32118);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:l,src:o})),a.createElement("p",null,e.children))}},11992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(59496);var a=n(49613),r=n(12822),l=n(61235);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"tutorial-06-part-2",title:"\u7b2c\u4e8c\u90e8\u5206\u2013TextArea\u5916\u89c2\u548c\u901a\u914d\u7b26"},c=void 0,u={unversionedId:"tutorials/tutorial-06/tutorial-06-part-2",id:"tutorials/tutorial-06/tutorial-06-part-2",title:"\u7b2c\u4e8c\u90e8\u5206\u2013TextArea\u5916\u89c2\u548c\u901a\u914d\u7b26",description:"\u8981\u5b8c\u6210\u6559\u7a0b6\u7684\u7b2c\u4e8c\u90e8\u5206\uff0c\u8bf7\u786e\u4fdd\u5b8c\u6210\u4e86\u7b2c\u4e00\u90e8\u5206\u3002 \u6211\u4eec\u5c06\u5b8c\u6210\u6559\u7a0b\u7b2c\u4e00\u90e8\u5206\u5f00\u59cb\u7684\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0\u3002 \u9996\u5148\uff0c\u6211\u4eec\u8981\u4e86\u89e3\u5982\u4f55\u4fee\u6539textArea\u5916\u89c2\uff0c\u5e76\u5b9e\u73b0\u201c\u5916\u89c2\u201d\u6309\u94ae\u3002 \u6700\u540e\uff0c\u6211\u4eec\u5c06\u5b9e\u73b0imformationTextArea\u7684\u901a\u914d\u7b26\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/tutorial-06/tutorial-06-part-2.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-part-2",permalink:"/4.23/zh-CN/docs/tutorials/tutorial-06/tutorial-06-part-2",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-part-2",title:"\u7b2c\u4e8c\u90e8\u5206\u2013TextArea\u5916\u89c2\u548c\u901a\u914d\u7b26"},sidebar:"docs",previous:{title:"\u7b2c1\u90e8\u5206\u2014\u2014\u5b57\u4f53\u6392\u5370\u548c\u8bed\u8a00",permalink:"/4.23/zh-CN/docs/tutorials/tutorial-06/tutorial-06-part-1"},next:{title:"AbstractButton",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_abstract_button"}},s={},d=[{value:"\u7b2c1\u6b65\uff1aChange the appearance of the TextArea",id:"step-4-change-the-appearance-of-the-textarea",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:3},{value:"\u4ee3\u7801",id:"code",level:3},{value:"\u6587\u672c\u989c\u8272",id:"text-color",level:4},{value:"\u884c\u95f4\u8ddd",id:"line-spacing",level:4},{value:"Alpha\u503c\u548c\u6587\u672c\u65cb\u8f6c",id:"alpha-value-and-text-rotation",level:4},{value:"\u5176\u5b83\u51fd\u6570",id:"other-functions",level:4},{value:"\u7b2c2\u6b65\uff1a\u4f7f\u7528\u901a\u914d\u7b26",id:"step-5-une-wildcards",level:2},{value:"\u6dfb\u52a0\u884c\u8ddd\u503c",id:"add-line-spacing-value",level:3},{value:"\u6dfb\u52a0\u989c\u8272\u540d\u79f0",id:"add-color-name",level:3}],m={toc:d},g="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(g,o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8981\u5b8c\u6210\u6559\u7a0b6\u7684\u7b2c\u4e8c\u90e8\u5206\uff0c\u8bf7\u786e\u4fdd\u5b8c\u6210\u4e86\u7b2c\u4e00\u90e8\u5206\u3002 \u6211\u4eec\u5c06\u5b8c\u6210\u6559\u7a0b\u7b2c\u4e00\u90e8\u5206\u5f00\u59cb\u7684\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0\u3002 \u9996\u5148\uff0c\u6211\u4eec\u8981\u4e86\u89e3\u5982\u4f55\u4fee\u6539textArea\u5916\u89c2\uff0c\u5e76\u5b9e\u73b0\u201c\u5916\u89c2\u201d\u6309\u94ae\u3002 \u6700\u540e\uff0c\u6211\u4eec\u5c06\u5b9e\u73b0",(0,a.kt)("em",{parentName:"p"},"imformationTextArea"),"\u7684\u901a\u914d\u7b26\u3002"),(0,a.kt)("h2",o({},{id:"step-4-change-the-appearance-of-the-textarea"}),"\u7b2c1\u6b65\uff1aChange the appearance of the TextArea"),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4e86\u89e3\u5982\u4f55\u4f7f\u7528TouchGFX \u8bbe\u8ba1\u5668\u4ee5\u53ca\u901a\u8fc7\u4ee3\u7801\u53d8\u66f4TextArea\u7684\u5916\u89c2\u3002 \u60f3\u6cd5\u662f\u53d8\u66f4\u6587\u672c\u989c\u8272\uff0c\u53d8\u66f4\u591a\u884c\u6587\u672c\u7684\u884c\u8ddd\uff0c\u5e76\u65cb\u8f6c\u6587\u672c\u3002 \u6211\u4eec\u5c06\u64cd\u4f5c\u5148\u524d\u521b\u5efa\u7684\u540d\u4e3a",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u7684\u63a7\u4ef6\u3002"),(0,a.kt)("h3",o({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/touchgfx-designer-appearance.webp",mdxType:"Figure"},"TouchGFX Designer - \u5916\u89c2 "),(0,a.kt)("p",null,"\u5728TouchGFX \u8bbe\u8ba1\u5668\u4e2d\uff0c\u9009\u62e9TextArea\u63a7\u4ef6\u65f6\uff0c\u60a8\u53ef\u4ee5\u53d8\u66f4\u53f3\u4fa7\u9762\u677f\u4e0a\u201cProperties\uff08\u5c5e\u6027\uff09\u201d\u4e0b\u7684\u5916\u89c2\u3002 \u60a8\u53ef\u4ee5\u9996\u5148\u53d8\u66f4\u989c\u8272\u3002 \u53ef\u4ee5\u4f7f\u7528\u8c03\u8272\u677f\u53d8\u66f4\u989c\u8272\uff08\u53ea\u9700\u5355\u51fb\u989c\u8272\uff09\uff0c\u4e5f\u53ef\u8f93\u5165\u5341\u516d\u8fdb\u5236\u989c\u8272\u4ee3\u7801\uff08\u5982#FF0000\u8868\u793a\u7ea2\u8272\uff09\u3002 \u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e3a",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea\u9009\u62e9\u4e86\u7ea2\u8272"),"\uff08\u7b2c\u4e00\u90e8\u5206\u7684\u6b65\u9aa41\uff09\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7TouchGFX Designer\u4e2d\u7684\u201cAppearance\uff08\u5916\u89c2\uff09\u201d\u90e8\u5206\uff0c\u60a8\u53ef\u4ee5\u53d8\u66f4\u201cAlpha\u201d\u503c\u3002 \u8fd9\u5e76\u975eTextAreas\u72ec\u6709\u3002 \u4e8b\u5b9e\u4e0a\uff0c\u8bb8\u591a\u63a7\u4ef6\u4f1a\u8ba9\u7528\u6237\u51b3\u5b9aalpha\u503c\uff08\u4f8b\u5982\uff1a\u56fe\u50cf\uff09\u3002 alpha\u503c\u53ef\u4ee5\u5b9a\u4e49\u4e3a\u5143\u7d20\u7684\u900f\u660e\u5ea6\u3002 \u4f8b\u5982\uff0c\u60a8\u6709\u4e00\u4e2a\u5c4f\u5e55\uff0c\u4e0a\u9762\u6709\u4e24\u4e2a\u63a7\u4ef6\u3002 \u5982\u679c\u524d\u666f\u63a7\u4ef6\u7684alpha\u503c\u5c0f\u4e8e255\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e00\u4e2a\u63a7\u4ef6\u770b\u5230\u80cc\u666f\u91cc\u7684\u7b2c\u4e8c\u4e2a\u63a7\u4ef6\u3002 \u5982\u679c\u524d\u666f\u63a7\u4ef6\u7684alpha\u503c\u4e3a255\uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u65e0\u6cd5\u770b\u5230\u80cc\u666f\u63a7\u4ef6\u3002 \u8ba9\u6211\u4eec\u6682\u65f6\u4fdd\u7559255\u7684alpha\u503c\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u662f\u201c\u884c\u8ddd\u201d\u9009\u9879\u3002 \u4ec5\u5728\u591a\u884c\u6587\u672c\u65f6\uff0c\u6b64\u53c2\u6570\u624d\u4f1a\u5f71\u54cd\u6587\u672c\u3002 \u8be5\u53c2\u6570\u53ef\u4ee5\u662f\u6b63\u503c\u3001\u96f6\uff08\u9ed8\u8ba4\u503c\uff09\u6216\u8d1f\u503c\u3002 \u8d1f\u503c\u60c5\u51b5\u4e0b\uff0c\u60a8\u4f1a\u770b\u5230\u7b2c\u4e8c\u884c\u8d8a\u6765\u8d8a\u9ad8\uff0c\u751a\u81f3\u53ef\u4ee5\u5728\u7b2c\u4e00\u884c\u4e4b\u4e0a\u3002 \u5bf9\u4e8e\u672c\u6559\u7a0b\uff0c\u5c06\u884c\u8ddd\u503c\u8bbe\u7f6e\u4e3a40\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff0c\u201cText rotating\uff08\u6587\u672c\u65cb\u8f6c\uff09\u201d\u3002 \u8be5\u503c\u5f71\u54cd\u6587\u672c\u7684\u65b9\u5411\u3002 \u6570\u503c\u4e3a0\u65f6\u6c34\u5e73\u663e\u793a\u6587\u672c\uff08\u9ed8\u8ba4\u503c\uff09\u3002 \u6570\u503c\u4e3a180\u65f6\u4e5f\u662f\u6c34\u5e73\u663e\u793a\uff0c\u4f46\u4e0a\u4e0b\u98a0\u5012\u3002 \u6570\u503c\u4e3a90\u65f6\u5c06\u5782\u76f4\u663e\u793a\u6587\u672c\u5e76\u671d\u5411\u53f3\u4fa7\uff08\u6587\u672c\u9876\u90e8\u4f4d\u4e8e\u53f3\u4fa7\uff09\u3002 \u6700\u540e\uff0c\u6570\u503c\u4e3a270\u65f6\u5c06\u5782\u76f4\u663e\u793a\u6587\u672c\u5e76\u671d\u5411\u5de6\u4fa7\u3002 \u5bf9\u4e8e\u672c\u6559\u7a0b\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c0\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8\u6309\u4e0b\u201cRun Simulator\uff08\u8fd0\u884c\u6a21\u62df\u5668\uff09\u201d\uff08F5\u5feb\u6377\u952e\uff09\uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-3.webp",mdxType:"Figure"},"\u8fd0\u884c\u6a21\u62df\u5668"),(0,a.kt)("p",null,"\u65e0\u6cd5\u770b\u5230\u7b2c\u4e8c\u884c\u7684\u539f\u56e0\u662f\u56e0\u4e3a",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u63a7\u4ef6\u592a\u5c0f\uff0c\u65e0\u6cd5\u5305\u542b\u6587\u672c\u3002 \u56e0\u6b64\uff0c\u56de\u5230\u753b\u5e03\uff0c\u5728\u201cLocation section\uff08\u4f4d\u7f6e\u90e8\u5206\uff09\u201d\u4e0b\uff0c\u9009\u4e2d\u201cAuto-size\uff08\u81ea\u52a8\u8c03\u6574\u5927\u5c0f\uff09\u201d\u590d\u9009\u6846\u3002 \u5728\u76ee\u6807\u4e0a\u518d\u6b21\u8fd0\u884c\uff0c\u73b0\u5728\u60a8\u5c06\u770b\u5230\u5168\u6587\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/running-the-simulator-4.webp",mdxType:"Figure"},"\u8fd0\u884c\u6a21\u62df\u5668"),(0,a.kt)("h3",o({},{id:"code"}),"\u4ee3\u7801"),(0,a.kt)("h4",o({},{id:"text-color"}),"\u6587\u672c\u989c\u8272"),(0,a.kt)("p",null,"\u5728\u8fd9\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5c06\u770b\u5230\u5982\u4f55\u901a\u8fc7\u4ee3\u7801\u53d8\u66f4\u6587\u672c\u5916\u89c2\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()"),"\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u4ee5\u4e0b\u4ea4\u4e92\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u4ea4\u4e92"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ChangeAppearance"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u89e6\u53d1\u6761\u4ef6\uff1a\u70b9\u51fb\u6309\u94ae"),(0,a.kt)("li",null,"\u70b9\u51fb\u6e90\uff1aappearanceButton"),(0,a.kt)("li",null,"\u64cd\u4f5c\uff1a\u8c03\u7528\u65b0\u7684\u865a\u51fd\u6570"),(0,a.kt)("li",null,"\u51fd\u6570\u540d\u79f0\uff1achangeAppearance")))))),(0,a.kt)("p",null,"\u6309\u201cGenerate Code\uff08\u751f\u6210\u4ee3\u7801\uff09\u201d\uff0cDesigner\u5c06\u751f\u6210\u6307\u5b9a\u7684\u865a\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u60f3\u53d8\u66f4\u6587\u672c\u989c\u8272\u3002 \u6211\u4eec\u5e0c\u671b\u989c\u8272\u662f\u968f\u673a\u7684\u7ea2\u8272\u3001\u84dd\u8272\u6216\u7eff\u8272\u3002 \u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u9700\u8981\u751f\u6210\u4e00\u4e2a\u4ecb\u4e8e0\u548c2\u4e4b\u95f4\u7684\u968f\u673a\u503c\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u67d0\u5904\u3002 So, go to your ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp")," file and let us declare an attribute of ",(0,a.kt)("em",{parentName:"p"},"Screen1View"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\nvirtual void changeAppearance();\n\nprotected:\n    ...\n};\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u6765\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801\uff0c\u4ee5\u4fbf\u5728\u6309\u4e0b\u53d8\u66f4\u5916\u89c2\u6309\u94ae\u65f6\u83b7\u5f97\u968f\u673a\u989c\u8272\u503c\u3002"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{   //Color\n    int randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        break;\n    }\n}\n")),(0,a.kt)("p",null,"\u60a8\u4f1a\u6ce8\u610f\u5230\uff0c\u5728",(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/tutorials/tutorial-05"}),"\u6559\u7a0b5"),"\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setColor()"),"\u51fd\u6570\u53d8\u66f4\u6587\u672c\u7684\u989c\u8272\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"rand()"),"\u51fd\u6570\u83b7\u53d6\u968f\u673a\u503c\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::color::getColorFromRGB()\u51fd"),"\u6570\u83b7\u5f97\u6240\u9700\u7684\u989c\u8272\u3002 \u6709\u5173\u6b64\u7c7b\u51fd\u6570\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605API\u548c\u5148\u524d\u7684\u6559\u7a0b\u3002"),(0,a.kt)("p",null,"\u8bb0\u5f97\u6dfb\u52a0\u6240\u9700\u7684include\uff0c\u4ee5\u4fbf\u80fd\u591f\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"rand()"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"getColorFromRGB()"),"\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n#include <touchgfx/Color.hpp>\n")),(0,a.kt)("h4",o({},{id:"line-spacing"}),"\u884c\u95f4\u8ddd"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u53d8\u66f4\u884c\u8ddd\u3002 \u6211\u4eec\u5e0c\u671b\u5b83\u662f\u4ecb\u4e8e0\u548c20\u4e4b\u95f4\u7684\u968f\u673a\u503c\u3002 \u5728",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()"),"\u51fd\u6570\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u884c\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{    ...\n    int randomLineSpacing = rand()%21;\n    descriptionTextArea.setLinespacing(randomLineSpacing);\n}\n")),(0,a.kt)("h4",o({},{id:"alpha-value-and-text-rotation"}),"Alpha\u503c\u548c\u6587\u672c\u65cb\u8f6c"),(0,a.kt)("p",null,"\u83b7\u5f97\u968f\u673aalpha\u503c\uff08",(0,a.kt)("em",{parentName:"p"},"randomAlphaValue"),"\uff09\u548c\u968f\u673a\u6587\u672c\u65cb\u8f6c\u503c\uff08",(0,a.kt)("em",{parentName:"p"},"random TextRotation"),"\uff09\u7684\u505a\u6cd5\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u4ee3\u7801\u5e94\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::changeAppearance()\n{   //Color\n    int randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        break;\n    }\n\n    //Line spacing\n    int randomLineSpacing = rand()%21;\n    descriptionTextArea.setLinespacing(randomLineSpacing);\n\n    //Alpha value\n    int randomAlphaValue = rand()%256;\n    descriptionTextArea.setAlpha(randomAlphaValue); \n\n    //Text rotation\n    int randomTextRotation = rand()%4;\n    switch (randomTextRotation)\n    {\n    case 0:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_0);\n        break;\n    case 1:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_90);\n      break;\n    case 2:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_180);\n        break;\n    case 3:\n        descriptionTextArea.setRotation(touchgfx::TextRotation::TEXT_ROTATE_270);\n        break;\n    }\n    descriptionTextArea.invalidate();\n}\n")),(0,a.kt)("h4",o({},{id:"other-functions"}),"\u5176\u5b83\u51fd\u6570"),(0,a.kt)("p",null,"TextArea\u7684API\u975e\u5e38\u5927\uff0c\u53ef\u5bf9\u6587\u672c\u5916\u89c2\u8fdb\u884c\u591a\u79cd\u64cd\u4f5c\u3002 \u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5217\u51fa\u5728\u6587\u672c\u7b2c\u4e00\u884c\u6dfb\u52a0\u7f29\u8fdb\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"setIndentation()"),"\u51fd\u6570\u6216\u8c03\u6574TextArea\u201cy\u201d\u5750\u6807\u4f7f\u5176\u57fa\u7ebf\u5904\u4e8e\u6307\u5b9a\u503c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"setBaselineY()"),"\u51fd\u6570\u3002 \u968f\u610f\u63a2\u7d22API\uff0c\u5c1d\u8bd5\u51fd\u6570\uff0c\u5e76\u67e5\u770b\u5bf9\u4ee3\u7801\u7684\u5f71\u54cd\ud83d\ude09\u3002"),(0,a.kt)("h2",o({},{id:"step-5-une-wildcards"}),"\u7b2c2\u6b65\uff1a\u4f7f\u7528\u901a\u914d\u7b26"),(0,a.kt)("p",null,"\u672c\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5728\u8fd0\u884c\u65f6\u53d8\u66f4TextArea\u7684\u6587\u672c\u3002 \u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards"}),"\u901a\u914d\u7b26"),"\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7ec4\u4ef6\u6765\u663e\u793ad",(0,a.kt)("em",{parentName:"p"},"escriptionTextArea"),"\u4e2d\u6587\u672c\u7684\u5927\u5c0f\u548c\u989c\u8272\u3002"),(0,a.kt)("h3",o({},{id:"add-line-spacing-value"}),"\u6dfb\u52a0\u884c\u8ddd\u503c"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5c06\u83b7\u5f97\u884c\u8ddd\u503c\uff0c\u5e76\u5c06\u5176\u5206\u914d\u7ed9",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u7b2c\u4e00\u4e2a\u901a\u914d\u7b26\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"changeAppearance()"),"\u51fd\u6570\u672b\u5c3e\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\u884c\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),'void Screen1View::changeAppearance()\n{\n    ...\n    Unicode::snprintf(informationTextAreaBuffer1, INFORMATIONTEXTAREABUFFER1_SIZE, "%d", randomLineSpacing);\n    informationTextArea.invalidate();\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_unicode#snprintf"}),"snprintf()\u51fd"),"\u6570\u683c\u5f0f\u5316\u4e00\u7cfb\u5217\u5b57\u7b26\u548c\u6570\u503c\u5e76\u5b58\u50a8\u5728\u6570\u7ec4\u7f13\u51b2\u533a\u4e2d\u3002 \u5b57\u7b26\u4e32\u683c\u5f0f\u4e0e\u4f7f\u7528\u6807\u51c6printf\u65f6\u76f8\u540c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"informationTextAreaBuffer1->"),">\u662f",(0,a.kt)("em",{parentName:"p"},"informationTextArea\u683c"),"\u5f0f\u5316\u5b57\u7b26\u4e32\u7684\u7b2c\u4e00\u4e2a\u7f13\u51b2\u533a\u3002 \u5728\u5355\u51fb\u751f\u6210\u4ee3\u7801\u540e\u7531Designer\u81ea\u52a8\u751f\u6210\u3002 \u7ed3\u5c3e\u7684\u6570\u5b57\u662f1\u62162\uff0c\u8868\u793a\u6587\u672c\u4e2d\u901a\u914d\u7b26\u7684\u6570\u91cf\uff08\u610f\u5473\u7740\u6bcf\u4e2aTextArea\u6700\u591a\u67092\u4e2a\u901a\u914d\u7b26\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INFORMATIONTEXTAREABUFFER1_SIZE"),"->\u662f\u6211\u4eec\u5728Designer\u4e0a\u521b\u5efa\u901a\u914d\u7b26\u65f6\u6307\u5b9a\u7684\u7f13\u51b2\u533a\u5927\u5c0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"%d"')," -> \u8868\u793a\u6211\u4eec\u5c06\u5728\u5b57\u7b26\u4e32\u7f13\u51b2\u533a\u4e2d\u5199\u5165\u6574\u6570\u7c7b\u578b\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"randomLineSpacing")," -> \u6b65\u9aa44\uff08\u53d8\u66f4\u5916\u89c2\uff09\u671f\u95f4\u521b\u5efa\u7684\u884c\u8ddd\u503c\uff08\u662f\u8981\u63d2\u5165\u683c\u5f0f\u5b57\u7b26\u4e32\u4e2d\u7684\u503c\uff09\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8\u8fd0\u884c\u6a21\u62df\u5668\uff0c\u53ef\u4ee5\u770b\u5230\u5728\u6309\u4e0b\u201c\u5916\u89c2\u201d\u6309\u94ae\u65f6\uff0c\u884c\u8ddd\u503c\u4f1a\u6839\u636e\u884c\u8ddd\u800c\u6539\u53d8\u3002"),(0,a.kt)("h3",o({},{id:"add-color-name"}),"\u6dfb\u52a0\u989c\u8272\u540d\u79f0"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u5c06\u83b7\u5f97",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u7684\u989c\u8272\uff0c\u5e76\u6839\u636e\u8be5\u989c\u8272\u586b\u5145",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u7b2c\u4e8c\u4e2a\u901a\u914d\u7b26\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u9996\u5148\u4e3a\u6bcf\u79cd\u989c\u8272\u521b\u5efa\u6587\u672c\u3002 \u6b64\u5904\u4e3a\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u3002 \u521b\u5efa\u6587\u672c\u540e\uff0c\u6211\u4eec\u5c06\u6839\u636e\u6b64\u989c\u8272\u5c06\u6587\u672c\u5206\u914d\u7ed9",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u7b2c\u4e8c\u4e2a\u901a\u914d\u7b26\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-06/creating-new-text.webp",mdxType:"Figure"},"\u521b\u5efa\u65b0\u6587\u672c"),(0,a.kt)("p",null,"\u8fd4\u56deDesigner\uff0c\u8fdb\u5165\u6587\u672c\u4e2d\u7684Texts\uff08\u6587\u672c\uff09\u9009\u9879\u5361\u3002 \u5355\u51fb\u201c+Add new text\uff08\u6dfb\u52a0\u65b0\u6587\u672c\uff09\u201d\u3002 \u66ff\u6362\u4ee5\u4e0b\u503c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Id"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5b57\u4f53\u6392\u5370"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5bf9\u9f50"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"GB"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"KO"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"CH"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ColorG"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5de6"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7eff\u8272"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7eff\u8272"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7eff\u8272")))),(0,a.kt)("p",null,"\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u521b\u5efa\u5176\u5b83\u4e24\u4e2a\u6587\u672c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Id"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5b57\u4f53\u6392\u5370"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5bf9\u9f50"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"GB"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"KO"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"CH"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ColorR"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5de6"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7ea2\u8272"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7ea2\u8272"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7ea2\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ColorB"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"informationTextArea"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5de6"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u84dd\u8272"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u84dd\u8272"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u84dd\u8272")))),(0,a.kt)("p",null,"\u521b\u5efa\u6587\u672c\u540e\uff0c\u5c06\u5176\u7528\u4e8e\u586b\u5145",(0,a.kt)("em",{parentName:"p"},"informationTextArea"),"\u7684\u7b2c\u4e8c\u4e2a\u901a\u914d\u7b26\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u4f7f\u7528strncpy\u51fd\u6570\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORR).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n")),(0,a.kt)("p",null,"\u51fd\u6570",(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_unicode#strncpy"}),"strncpy"),"\u5c06\u5b57\u7b26\u4e32\u7684n\u4e2a\u5b57\u7b26\u590d\u5236\u5230\u76ee\u6807\u7f13\u51b2\u533a\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"informationTextAreaBuffer2\xa0"),"-> \u662f\u76ee\u6807\u7f13\u51b2\u533a\uff08informationTextArea\u7684\u7b2c\u4e8c\u4e2a\u901a\u914d\u7b26\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"T_COLORR")," -> \u662f\u6211\u4eec\u521a\u624d\u5728TouchGFX Designer\u4e2d\u521b\u5efa\u7684\u6587\u672c\u679a\u4e3e\u503c\u3002 \u60a8\u53ef\u4ee5\u5728",(0,a.kt)("em",{parentName:"p"},"TextKeysAndLanguages.hpp"),"\u6587\u4ef6\u4e2d\u770b\u5230\u6240\u6709\u6587\u672c\u7684\u679a\u4e3e\u3002 \u5355\u51fb\u751f\u6210\u4ee3\u7801\u540e\u7531Designer\u81ea\u52a8\u751f\u6210\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_typed_text"}),"TypedText"),"(T_COLORR).",(0,a.kt)("a",o({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/api/classes/classtouchgfx_1_1_typed_text#gettext"}),"getText()")," -> ",(0,a.kt)("em",{parentName:"p"},"TypedText(T_COLORRR)")," will get the object and ",(0,a.kt)("em",{parentName:"p"},"getText()")," will get the text associated to this object."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INFORMATIONTEXTAREABUFFER2_SIZE"),"\xa0-> \u662f\u8981\u590d\u5236\u7684\u6700\u5927\u5b57\u7b26\u6570\u3002 \u8fd9\u91cc\uff0c\u662finformationTextArea\u7684\u7b2c\u4e8c\u4e2a\u901a\u914d\u7b26\u7684\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u5728\u4ee3\u7801\u4e2d\u6dfb\u52a0\u6700\u540e\u4e00\u884c\uff1a"),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/src/screen1_screen/Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp",metastring:"{7,11,15}","{7,11,15}":!0}),"void Screen1View::changeAppearance()\n{   randomTextColor = rand()%3;\n    switch (randomTextColor)\n    {\n    case 0:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(255,0,0));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORR).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    case 1:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,255,0));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORG).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    case 2:\n        descriptionTextArea.setColor(touchgfx::Color::getColorFromRGB(0,0,255));\n        Unicode::strncpy(informationTextAreaBuffer2, TypedText(T_COLORB).getText(), INFORMATIONTEXTAREABUFFER2_SIZE);\n        break;\n    }\n    informationTextArea.invalidate();\n    ...\n}\n")),(0,a.kt)("p",null,"\u8bb0\u5f97\u6dfb\u52a0\u6240\u9700\u7684include\uff0c\u4ee5\u4fbf\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"TypedText()"),"\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"#include <texts/TextKeysAndLanguages.hpp>\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u5e76\u6309\u4e0b\u201c\u5916\u89c2\u201d\u6309\u94ae\uff0c\u53ef\u4ee5\u770b\u5230\u884c\u8ddd\u503c\u548c\u540d\u79f0\u989c\u8272\u6839\u636e",(0,a.kt)("em",{parentName:"p"},"descriptionTextArea"),"\u7684\u5916\u89c2\u800c\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u6559\u7a0b6\u5230\u6b64\u7ed3\u675f\u3002"))}k.isMDXComponent=!0}}]);