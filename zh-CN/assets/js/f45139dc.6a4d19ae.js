"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[29591],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61235:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(59496);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=i},12822:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(59496),i=t(32118);const o=function(e){const n=e.noShadow||!1,t=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:t,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:t,height:o,src:a})),r.createElement("p",null,e.children))}},13109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>s});t(59496);var r=t(49613),i=t(61235),o=t(12822);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const p={id:"position-size",title:"\u4f4d\u7f6e\u548c\u5927\u5c0f"},c=void 0,u={unversionedId:"development/ui-development/touchgfx-engine-features/position-size",id:"development/ui-development/touchgfx-engine-features/position-size",title:"\u4f4d\u7f6e\u548c\u5927\u5c0f",description:"\u666e\u901aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u5927\u90e8\u5206UI\u8bbe\u7f6e\u53ef\u7528TouchGFX\u8bbe\u8ba1\u5668\u521b\u5efa\uff0c\u4f46\u901a\u5e38\u8fd8\u9700\u8981\u624b\u52a8\u7f16\u5199\u4e00\u4e9b\u5185\u5bb9\u3002 \u4f8b\u5982\uff0c\u5236\u4f5c\u66f4\u591a\u52a8\u753b\u6216\u521b\u5efa\u4f9d\u8d56\u4e8e\u7528\u6237\u4e8b\u4ef6\u6216\u914d\u7f6e\u6570\u636e\u7684\u63a7\u4ef6\u52a8\u6001\u8bbe\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/position-size.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/position-size",permalink:"/4.23/zh-CN/docs/development/ui-development/touchgfx-engine-features/position-size",draft:!1,tags:[],version:"current",frontMatter:{id:"position-size",title:"\u4f4d\u7f6e\u548c\u5927\u5c0f"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c",permalink:"/4.23/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"},next:{title:"\u81ea\u5b9a\u4e49\u5bb9\u5668",permalink:"/4.23/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-containers"}},d={},s=[{value:"\u6dfb\u52a0\u63a7\u4ef6",id:"adding-widgets",level:2},{value:"\u8bbe\u7f6e\u5927\u5c0f\u548c\u4f4d\u7f6e",id:"setting-size-position",level:2},{value:"\u8f85\u52a9\u65b9\u6cd5",id:"helper-methods",level:2},{value:"\u6269\u5c55",id:"expanding",level:3},{value:"\u5c45\u4e2d",id:"centering",level:3},{value:"\u65e0\u6548",id:"invalidation",level:3},{value:"\u79fb\u52a8",id:"moving",level:3}],m={toc:s},g="wrapper";function v(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)(g,a({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u666e\u901aTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u5927\u90e8\u5206UI\u8bbe\u7f6e\u53ef\u7528TouchGFX\u8bbe\u8ba1\u5668\u521b\u5efa\uff0c\u4f46\u901a\u5e38\u8fd8\u9700\u8981\u624b\u52a8\u7f16\u5199\u4e00\u4e9b\u5185\u5bb9\u3002 \u4f8b\u5982\uff0c\u5236\u4f5c\u66f4\u591a\u52a8\u753b\u6216\u521b\u5efa\u4f9d\u8d56\u4e8e\u7528\u6237\u4e8b\u4ef6\u6216\u914d\u7f6e\u6570\u636e\u7684\u63a7\u4ef6\u52a8\u6001\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u5f53\u60a8\u5f00\u59cb\u8fd9\u9879\u4efb\u52a1\u65f6\uff0c\u6709\u5fc5\u8981\u4e86\u89e3\u4e00\u4e9b\u7c7b\u522b\u4e2d\u7684\u6709\u7528\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"TouchGFX\u6846\u67b6\u4e2d\u7684\u6240\u6709\u63a7\u4ef6\u5747\u4e3aDrawable\u7c7b\u7684\u5b50\u7c7b\u3002 \u8be5\u7c7b\u522b\u5305\u542b\u63a7\u5236\u5927\u5c0f\u548c\u4f4d\u7f6e\u7684\u4e00\u822c\u65b9\u6cd5\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/widgets1.webp",noShadow:"true",mdxType:"Figure"},"\u63a7\u4ef6\u5c42\u6b21\u7ed3\u6784\uff08\u90e8\u5206\uff09"),(0,r.kt)("p",null,"\u60a8\u6784\u5efa\u4e86\u8bb8\u591a\u63a7\u4ef6\u5bf9\u8c61\u5b9e\u4f8b\u7684\u7528\u6237\u754c\u9762\u3002 \u8fd9\u4e9b\u5bf9\u8c61\u4f5c\u4e3a\u6210\u5458\u6dfb\u52a0\u5230\u89c6\u56fe\u5b50\u7c7b\u4e2d\u3002 \u89c6\u56fe\u7c7b\u662f\u5c4f\u5e55\u7c7b\u7684\u5b50\u7c7b\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/screen1.webp",noShadow:"true",mdxType:"Figure"},"\u5c4f\u5e55\u5c42\u6b21\u7ed3\u6784"),(0,r.kt)("p",null,"\u5c4f\u5e55\u7c7b\u5305\u542b\u4e00\u4e2a\u5bb9\u5668\u6210\u5458\u3002 \u79f0\u4e3a\u6839\u5bb9\u5668\u3002 \u6839\u5bb9\u5668\u521d\u59cb\u5316\u4e3a\u4ece(0\uff0c0)\u5f00\u59cb\uff0c\u586b\u5145\u6574\u4e2a\u663e\u793a\u533a\u57df(width = HAL::DISPLAY_WIDTH\uff0cheight = HAL::DISPLAY_HEIGHT)\u3002"),(0,r.kt)("h2",a({},{id:"adding-widgets"}),"\u6dfb\u52a0\u63a7\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u5728\u89c6\u56fe\u7c7b\u4e2d\u521b\u5efa\u6210\u5458\uff0c\u53ef\u5c06\u63a7\u4ef6\u6dfb\u52a0\u5230\u89c6\u56fe\u4e2d\u3002 \u8fd9\u91cc\u6211\u4eec\u6dfb\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3amyBox\u7684\u65b9\u6846:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{3-3,13-13}","{3-3,13-13}":!0}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    Box myBox;\n};\n")),(0,r.kt)("p",null,"\u8981\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u8be5\u65b9\u6846\uff0c\u5219\u5fc5\u987b\u5305\u542bBox.hpp\uff0c\u9664\u975e\u5b83\u5df2\u7ecf\u5305\u542b\u5728\u57fa\u7840\u7c7b\u5934\u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,"\u8981\u7ed8\u5236\u65b9\u6846\u63a7\u4ef6\uff0c\u5fc5\u987b\u5c06\u5176\u6dfb\u52a0\u5230\u573a\u666f\u56fe(\u5c4f\u5e55\u5185\u7684\u63a7\u4ef6\u6811)\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"\u63a7\u4ef6\u6811"),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u6dfb\u52a0\u51fd\u6570\u5b8c\u6210\u3002 \u901a\u5e38\u5728\u8bbe\u7f6e\u5c4f\u5e55\u4e2d:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{10-10}","{10-10}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    add(myBox);\n}\n")),(0,r.kt)("p",null,"\u5c4f\u5e55\u4e0a\u7684\u6dfb\u52a0\u65b9\u6cd5\u8c03\u7528\u6839\u5bb9\u5668\u4e0a\u7684\u6dfb\u52a0:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"void add(Drawable& d)\n{\n    container.add(d);\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u7684\u5c4f\u5e55\u4e2d\u6709\u53e6\u4e00\u4e2a\u5bb9\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u8be5\u5bb9\u5668\u4e0a\u7684\u6dfb\u52a0\u5411\u5176\u4e2d\u6dfb\u52a0\u63a7\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"void Screen1View::setupScreen()\n{\n    ...\n    myContainer.add(myBox);\n}\n")),(0,r.kt)("h2",a({},{id:"setting-size-position"}),"\u8bbe\u7f6e\u5927\u5c0f\u548c\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u63a7\u4ef6\u7684\u9ed8\u8ba4\u4f4d\u7f6e\u4e3a(0\uff0c0)\uff0c\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u4e3a\u96f6\u3002 \u8fd9\u610f\u5473\u7740\u51e0\u4e4e\u603b\u662f\u9700\u8981\u8bbe\u7f6e\u63a7\u4ef6\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4f4d\u7f6e\u7684\u57fa\u672c\u65b9\u6cd5\u662f\u8bbe\u7f6eXY\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setXY(10, 10); // \u5c06myBox\u653e\u5728x=10, y=10\u5904\n")),(0,r.kt)("p",null,"\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u53ef\u4ee5\u7528\u8bbe\u7f6e\u5bbd\u9ad8\u6cd5\u8bbe\u7f6e\u3002 \u6216\u8bbe\u7f6e\u5bbd\u3001\u8bbe\u7f6e\u9ad8\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setWidthHeight(200, 100); // myBox\u5bbd200\uff0c\u9ad8100\n")),(0,r.kt)("p",null,"\u4e24\u8005\u53ef\u4e0e\u8bbe\u7f6e\u4f4d\u7f6e\u6cd5\u7ed3\u5408\u4f7f\u7528:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setPosition(10, 10, 200, 100); // \u5c06myBox\u653e\u5728x=10\uff0cy=10\u5904\uff0c\u5bbd200\uff0c\u9ad8100\n")),(0,r.kt)("h2",a({},{id:"helper-methods"}),"\u8f85\u52a9\u65b9\u6cd5"),(0,r.kt)("p",null,"drawable\u7c7b\u6709\u8f85\u52a9\u65b9\u6cd5\uff0c\u53ef\u534f\u52a9\u8bbe\u7f6edrawable:"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_drawable"}),"Drawable\u7c7b\u7684API\u53c2\u8003")),(0,r.kt)("h3",a({},{id:"expanding"}),"\u6269\u5c55"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::expand()"),"\u6cd5\u4f7f\u4e00\u4e2a\u63a7\u4ef6(\u4e00\u4e2aDrawable)\u7684\u5927\u5c0f\u4e0e\u5176\u7236\u90e8\u4ef6\u76f8\u540c\u3002 \u53ef\u4ee5\u8bbe\u7f6e\u8fb9\u8ddd\u3002 \u63a7\u4ef6\u653e\u5728\u5de6\u4e0a\u89d2(\u52a0\u4e0a\u8fb9\u8ddd):"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.expand(10); // \u5c06myBox\u653e\u5728x=10, y=10\u5904\uff0c\u9664\u4e8610\u50cf\u7d20\u7684\u8fb9\u8ddd\u4e4b\u5916\uff0c\u5927\u5c0f\u4e0e\u7236\u7ea7\u76f8\u540c\n")),(0,r.kt)("h3",a({},{id:"centering"}),"\u5c45\u4e2d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::centerX())"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::centerY())"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::center() "),"\u6cd5\u5c06\u63a7\u4ef6\u653e\u5728\u5176\u7236\u63a7\u4ef6\u5185\uff08\u6c34\u5e73\u3001\u5782\u76f4\u3001\u6c34\u5e73\u548c\u5782\u76f4\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.centerX(); // \u5c06myBox\u5728\u5176\u7236\u7ea7\u4e2d\u6c34\u5e73\u5c45\u4e2d\n")),(0,r.kt)("h3",a({},{id:"invalidation"}),"\u65e0\u6548"),(0,r.kt)("p",null,"\u6539\u53d8\u4e00\u4e2a\u63a7\u4ef6\u7684\u5927\u5c0f\u65f6\uff0c\u5fc5\u987b\u4f7f\u9700\u8981\u91cd\u7ed8\u7684\u5c4f\u5e55\u90e8\u5206\u65e0\u6548\u3002 \u5982\u679c\u8981\u5c06\u63a7\u4ef6\u53d8\u5927\uff0c\u53ea\u9700\u8ba9\u65b0\u5c3a\u5bf8\u65e0\u6548\u3002 \u5982\u679c\u8981\u5c06\u63a7\u4ef6\u53d8\u5c0f\uff0c\u5219\u5e94\u5728\u66f4\u6539\u5c3a\u5bf8\u4e4b\u524d\u4f7f\u5176\u65e0\u6548:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   // \u6269\u5927\u65b9\u6846\uff0c\u6269\u5927\u540e\u4f7f\u5176\u65e0\u6548\uff0c\u4ee5\u4fbf\u91cd\u65b0\u7ed8\u5236\u65b0\u5c3a\u5bf8\n   myBox.expand(10);\n   myBox.invalidate();\n   ...\n   // \u7f29\u5c0f\u65b9\u6846\uff0c\u7f29\u5c0f\u4e4b\u524d\u4f7f\u5176\u65e0\u6548\uff0c\u4ee5\u4fbf\u91cd\u65b0\u7ed8\u5236\u80cc\u666f\n   myBox.invalidate();\n   myBox.myBox.setPosition(10, 10, 200, 100);\n")),(0,r.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0c\u4f7f\u63a7\u4ef6\u65e0\u6548\u65f6\uff0c\u5c4f\u5e55\u4e0a\u88ab\u63a7\u4ef6\u5360\u636e\u7684\u533a\u57df(\u5f53\u65f6)\u5c06\u5728\u4e0b\u4e00\u4e2a\u7ed8\u5236\u9636\u6bb5\u91cd\u65b0\u7ed8\u5236\u3002 \u8fd9\u610f\u5473\u7740\u5982\u679c\u4f7f\u4e00\u4e2a\u63a7\u4ef6\u65e0\u6548\uff0c\u7136\u540e\u8ba9\u5b83\u7f29\u5c0f\uff0c\u73b0\u5728\u53ef\u89c1\u7684\u5176\u4ed6\u63a7\u4ef6(\u5728\u540e\u9762)\u7684\u90e8\u5206\u5c06\u88ab\u91cd\u7ed8\uff0c\u4e0d\u4ec5\u662f\u65e0\u6548\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("h3",a({},{id:"moving"}),"\u79fb\u52a8"),(0,r.kt)("p",null,"Drawable\u7c7b\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)")," \u6cd5\uff0c\u53ef\u5c06\u5c4f\u5e55\u4e0a\u7684\u63a7\u4ef6\u4ece\u4e00\u4e2a\u4f4d\u7f6e\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u3002 \u8fd9\u53ef\u4ee5\u7528\u4f5c\u52a8\u753b\u7684\u4e00\u90e8\u5206\uff0c\u4e5f\u53ef\u4ee5\u4ec5\u7528\u4e8e\u91cd\u65b0\u6392\u5217\u7528\u6237\u754c\u9762\u7684\u5404\u4e2a\u90e8\u5206\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)")," \u8c03\u7528invalidate\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u5fc5\u5982\u6b64:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"    myBox.moveRelative(1, 0); // \u5411\u53f3\u79fb\u52a81\u4e2a\u50cf\u7d20\n")),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u65b9\u6cd5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveTo(int16_t x, int16_t y),"),"\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u6307\u5b9a\u4f4d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"    myBox.moveTo(100, 100); // \u4ece\u5f53\u524d\u4f4d\u7f6e\u79fb\u52a8\u5230100\uff0c100\n")),(0,r.kt)("p",null,"\u6b64\u65b9\u6cd5\u540c\u6837\u8c03\u7528invalidate\u3002"))}v.isMDXComponent=!0}}]);