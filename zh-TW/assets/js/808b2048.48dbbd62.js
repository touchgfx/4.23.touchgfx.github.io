"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[23889],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61235:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(59496);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=i},12822:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(59496),i=t(32118);const o=function(e){const n=e.noShadow||!1,t=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:t,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:t,height:o,src:a})),r.createElement("p",null,e.children))}},8721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>s});t(59496);var r=t(49613),i=t(61235),o=t(12822);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const p={id:"position-size",title:"\u4f4d\u7f6e\u548c\u5927\u5c0f"},c=void 0,u={unversionedId:"development/ui-development/touchgfx-engine-features/position-size",id:"development/ui-development/touchgfx-engine-features/position-size",title:"\u4f4d\u7f6e\u548c\u5927\u5c0f",description:"\u666e\u901aTouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5927\u90e8\u5206UI\u8a2d\u5b9a\u53ef\u7528TouchGFX Designer\u5275\u5efa\uff0c\u4f46\u901a\u5e38\u9084\u9700\u8981\u624b\u52d5\u7de8\u5beb\u4e00\u4e9b\u5167\u5bb9\u3002 \u4f8b\u5982\uff0c\u88fd\u4f5c\u66f4\u591a\u52d5\u756b\u6216\u5275\u5efa\u4f9d\u8cf4\u65bc\u4f7f\u7528\u8005\u4e8b\u4ef6\u6216\u914d\u7f6e\u8cc7\u6599\u7684\u5c0f\u5de5\u5177\u52d5\u614b\u8a2d\u5b9a\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/position-size.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/position-size",permalink:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/position-size",draft:!1,tags:[],version:"current",frontMatter:{id:"position-size",title:"\u4f4d\u7f6e\u548c\u5927\u5c0f"},sidebar:"docs",previous:{title:"\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u884c\u70ba",permalink:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"},next:{title:"\u81ea\u8a02\u5bb9\u5668",permalink:"/4.23/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-containers"}},d={},s=[{value:"\u6dfb\u52a0\u5c0f\u5de5\u5177",id:"adding-widgets",level:2},{value:"\u8a2d\u5b9a\u5927\u5c0f\u548c\u4f4d\u7f6e",id:"setting-size-position",level:2},{value:"\u52a9\u624b\u6cd5",id:"helper-methods",level:2},{value:"\u64f4\u5c55",id:"expanding",level:3},{value:"\u5c45\u4e2d",id:"centering",level:3},{value:"\u7121\u6548",id:"invalidation",level:3},{value:"\u79fb\u52d5",id:"moving",level:3}],m={toc:s},g="wrapper";function v(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)(g,a({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u666e\u901aTouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5927\u90e8\u5206UI\u8a2d\u5b9a\u53ef\u7528TouchGFX Designer\u5275\u5efa\uff0c\u4f46\u901a\u5e38\u9084\u9700\u8981\u624b\u52d5\u7de8\u5beb\u4e00\u4e9b\u5167\u5bb9\u3002 \u4f8b\u5982\uff0c\u88fd\u4f5c\u66f4\u591a\u52d5\u756b\u6216\u5275\u5efa\u4f9d\u8cf4\u65bc\u4f7f\u7528\u8005\u4e8b\u4ef6\u6216\u914d\u7f6e\u8cc7\u6599\u7684\u5c0f\u5de5\u5177\u52d5\u614b\u8a2d\u5b9a\u3002"),(0,r.kt)("p",null,"\u7576\u60a8\u958b\u59cb\u9019\u9805\u4efb\u52d9\u6642\uff0c\u6709\u5fc5\u8981\u77ad\u89e3\u4e00\u4e9b\u985e\u5225\u4e2d\u7684\u6709\u7528\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"TouchGFX\u6846\u67b6\u4e2d\u7684\u6240\u6709\u5c0f\u5de5\u5177\u5747\u70baDrawable\u985e\u7684\u5b50\u985e\u3002 \u8a72\u985e\u5225\u5305\u542b\u63a7\u5236\u5927\u5c0f\u548c\u4f4d\u7f6e\u7684\u4e00\u822c\u65b9\u6cd5\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/widgets1.webp",noShadow:"true",mdxType:"Figure"},"\u5c0f\u5de5\u5177\u5c64\u6b21\u7d50\u69cb\uff08\u90e8\u5206\uff09"),(0,r.kt)("p",null,"\u60a8\u69cb\u5efa\u4e86\u8a31\u591a\u5c0f\u5de5\u5177\u7269\u4ef6\u5be6\u4f8b\u7684\u4f7f\u7528\u8005\u4ecb\u9762\u3002 \u9019\u4e9b\u5c0d\u8c61\u4f5c\u70ba\u6210\u54e1\u6dfb\u52a0\u5230\u8996\u7a97\u5b50\u985e\u4e2d\u3002 \u8996\u7a97\u985e\u662f\u87a2\u5e55\u985e\u7684\u5b50\u985e\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/screen1.webp",noShadow:"true",mdxType:"Figure"},"\u87a2\u5e55\u5c64\u6b21\u7d50\u69cb"),(0,r.kt)("p",null,"\u87a2\u5e55\u985e\u5305\u542b\u4e00\u500b\u5bb9\u5668\u6210\u54e1\u3002 \u7a31\u70ba\u6839\u5bb9\u5668\u3002 \u6839\u5bb9\u5668\u521d\u59cb\u5316\u70ba\u5f9e(0\uff0c0)\u958b\u59cb\uff0c\u586b\u5145\u6574\u500b\u986f\u793a\u5340\u57df(width = HAL::DISPLAY_WIDTH\uff0cheight = HAL::DISPLAY_HEIGHT)\u3002"),(0,r.kt)("h2",a({},{id:"adding-widgets"}),"\u6dfb\u52a0\u5c0f\u5de5\u5177"),(0,r.kt)("p",null,"\u901a\u904e\u5728\u8996\u5716\u985e\u4e2d\u5275\u5efa\u6210\u54e1\uff0c\u53ef\u5c07\u5c0f\u5de5\u5177\u6dfb\u52a0\u5230\u8996\u5716\u4e2d\u3002 \u9019\u88e1\u6211\u5011\u6dfb\u52a0\u4e86\u4e00\u500b\u540d\u70bamyBox\u7684\u65b9\u6846:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{3-3,13-13}","{3-3,13-13}":!0}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    Box myBox;\n};\n")),(0,r.kt)("p",null,"\u8981\u5728\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u8a72\u65b9\u6846\uff0c\u5247\u5fc5\u9808\u5305\u542bBox.hpp\uff0c\u9664\u975e\u5b83\u5df2\u7d93\u5305\u542b\u5728\u57fa\u790e\u985e\u6a19\u982d\u6a94\u4e2d\u3002"),(0,r.kt)("p",null,"\u8981\u7e6a\u88fd\u65b9\u6846\u5c0f\u5de5\u5177\uff0c\u5fc5\u9808\u5c07\u5176\u6dfb\u52a0\u5230\u5834\u666f\u5716(\u87a2\u5e55\u5167\u7684\u5c0f\u5de5\u5177\u6a39)\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"\u5c0f\u5de5\u5177\u6a39"),(0,r.kt)("p",null,"\u53ef\u901a\u904e\u6dfb\u52a0\u51fd\u6578\u5b8c\u6210\u3002 \u901a\u5e38\u5728\u8a2d\u5b9a\u87a2\u5e55\u4e2d:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{10-10}","{10-10}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    add(myBox);\n}\n")),(0,r.kt)("p",null,"\u87a2\u5e55\u4e0a\u7684\u6dfb\u52a0\u65b9\u6cd5\u547c\u53eb\u6839\u5bb9\u5668\u4e0a\u7684\u6dfb\u52a0:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"void add(Drawable& d)\n{\n    container.add(d);\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u7684\u87a2\u5e55\u4e2d\u6709\u53e6\u4e00\u500b\u5bb9\u5668\uff0c\u53ef\u4ee5\u901a\u904e\u547c\u53eb\u8a72\u5bb9\u5668\u4e0a\u7684\u6dfb\u52a0\u5411\u5176\u4e2d\u6dfb\u52a0\u5c0f\u5de5\u5177:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"void Screen1View::setupScreen()\n{\n    ...\n    myContainer.add(myBox);\n}\n")),(0,r.kt)("h2",a({},{id:"setting-size-position"}),"\u8a2d\u5b9a\u5927\u5c0f\u548c\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u5927\u591a\u6578\u5c0f\u5de5\u5177\u7684\u9810\u8a2d\u4f4d\u7f6e\u70ba(0\uff0c0)\uff0c\u5bec\u5ea6\u548c\u9ad8\u5ea6\u70ba\u96f6\u3002 \u9019\u610f\u5473\u8457\u5e7e\u4e4e\u7e3d\u662f\u9700\u8981\u8a2d\u5b9a\u5c0f\u5de5\u5177\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u8a2d\u5b9a\u4f4d\u7f6e\u7684\u57fa\u672c\u65b9\u6cd5\u662f\u8a2d\u5b9aXY\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setXY(10, 10); // \u5c07myBox\u653e\u5728x=10, y=10\u8655\n")),(0,r.kt)("p",null,"\u5bec\u5ea6\u548c\u9ad8\u5ea6\u53ef\u4ee5\u7528\u8a2d\u5b9a\u5bec\u9ad8\u6cd5\u8a2d\u5b9a\u3002 \u6216\u8a2d\u5b9a\u5bec\u3001\u8a2d\u5b9a\u9ad8\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setWidthHeight(200, 100); // myBox\u5bec200\uff0c\u9ad8100\n")),(0,r.kt)("p",null,"\u5169\u8005\u53ef\u8207\u8a2d\u5b9a\u4f4d\u7f6e\u6cd5\u7d50\u5408\u4f7f\u7528:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setPosition(10, 10, 200, 100); // \u5c07myBox\u653e\u5728x=10\uff0cy=10\u8655\uff0c\u5bec200\uff0c\u9ad8100\n")),(0,r.kt)("h2",a({},{id:"helper-methods"}),"\u52a9\u624b\u6cd5"),(0,r.kt)("p",null,"Drawable\u985e\u6709\u52a9\u624b\u6cd5\uff0c\u53ef\u5354\u52a9\u8a2d\u5b9aDrawable:"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_drawable"}),"Drawable\u985e\u7684API\u53c3\u8003")),(0,r.kt)("h3",a({},{id:"expanding"}),"\u64f4\u5c55"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::expand()"),"\u6cd5\u4f7f\u4e00\u500b\u5c0f\u5de5\u5177(\u4e00\u500bDrawable)\u7684\u5927\u5c0f\u8207\u5176\u7236\u90e8\u4ef6\u76f8\u540c\u3002 \u53ef\u4ee5\u8a2d\u5b9a\u908a\u8ddd\u3002 \u5c0f\u5de5\u5177\u653e\u5728\u5de6\u4e0a\u89d2(\u52a0\u4e0a\u908a\u8ddd):"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.expand(10); // \u5c07myBox\u653e\u5728x=10, y=10\u8655\uff0c\u9664\u4e8610\u50cf\u7d20\u7684\u908a\u8ddd\u4e4b\u5916\uff0c\u5927\u5c0f\u8207\u7236\u7d1a\u76f8\u540c\n")),(0,r.kt)("h3",a({},{id:"centering"}),"\u5c45\u4e2d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::centerX())"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::centerY())"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::center()")," \u6cd5\u5c07\u5c0f\u5de5\u5177\u653e\u5728\u5176\u7236\u5c0f\u5de5\u5177\u5167\uff08\u6c34\u5e73\u3001\u5782\u76f4\u3001\u6c34\u5e73\u548c\u5782\u76f4\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.centerX(); // \u5c07myBox\u5728\u5176\u7236\u7d1a\u4e2d\u6c34\u5e73\u5c45\u4e2d\n")),(0,r.kt)("h3",a({},{id:"invalidation"}),"\u7121\u6548"),(0,r.kt)("p",null,"\u6539\u8b8a\u4e00\u500b\u5c0f\u5de5\u5177\u7684\u5927\u5c0f\u6642\uff0c\u5fc5\u9808\u4f7f\u9700\u8981\u91cd\u7e6a\u7684\u87a2\u5e55\u90e8\u5206\u7121\u6548\u3002 \u5982\u679c\u8981\u5c07\u5c0f\u5de5\u5177\u8b8a\u5927\uff0c\u53ea\u9700\u8b93\u65b0\u5c3a\u5bf8\u7121\u6548\u3002 \u5982\u679c\u8981\u5c07\u5c0f\u5de5\u5177\u8b8a\u5c0f\uff0c\u5247\u61c9\u5728\u66f4\u6539\u5c3a\u5bf8\u4e4b\u524d\u4f7f\u5176\u7121\u6548:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   //\u64f4\u5927\u65b9\u6846\uff0c\u64f4\u5927\u5f8c\u4f7f\u5176\u7121\u6548\uff0c\u4ee5\u4fbf\u91cd\u65b0\u7e6a\u88fd\u65b0\u5c3a\u5bf8\n   myBox.expand(10);\n   myBox.invalidate();\n   ...\n   // \u7e2e\u5c0f\u65b9\u6846\uff0c\u7e2e\u5c0f\u4e4b\u524d\u4f7f\u5176\u7121\u6548\uff0c\u4ee5\u4fbf\u91cd\u65b0\u7e6a\u88fd\u80cc\u666f\n   myBox.invalidate();\n   myBox.myBox.setPosition(10, 10, 200, 100);\n")),(0,r.kt)("p",null,"\u8acb\u8a18\u4f4f\uff0c\u4f7f\u5c0f\u5de5\u5177\u7121\u6548\u6642\uff0c\u87a2\u5e55\u4e0a\u88ab\u5c0f\u5de5\u5177\u4f54\u64da\u7684\u5340\u57df(\u7576\u6642) \u5c07\u5728\u4e0b\u4e00\u500b\u7e6a\u88fd\u968e\u6bb5\u91cd\u65b0\u7e6a\u88fd\u3002 \u9019\u610f\u5473\u8457\u5982\u679c\u4f7f\u4e00\u500b\u5c0f\u5de5\u5177\u7121\u6548\uff0c\u7136\u5f8c\u8b93\u5b83\u7e2e\u5c0f\uff0c\u73fe\u5728\u53ef\u898b\u7684\u5176\u4ed6\u5c0f\u5de5\u5177(\u5728\u5f8c\u9762) \u7684\u90e8\u5206\u5c07\u88ab\u91cd\u7e6a\uff0c\u4e0d\u50c5\u662f\u7121\u6548\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("h3",a({},{id:"moving"}),"\u79fb\u52d5"),(0,r.kt)("p",null,"Drawable\u985e\u6709\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)"),"\u6cd5\uff0c\u53ef\u5c07\u87a2\u5e55\u4e0a\u7684\u5c0f\u5de5\u5177\u5f9e\u4e00\u500b\u4f4d\u7f6e\u79fb\u52d5\u5230\u53e6\u4e00\u500b\u4f4d\u7f6e\u3002 \u9019\u53ef\u4ee5\u7528\u4f5c\u52d5\u756b\u7684\u4e00\u90e8\u5206\uff0c\u4e5f\u53ef\u4ee5\u50c5\u7528\u65bc\u91cd\u65b0\u6392\u5217\u4f7f\u7528\u8005\u4ecb\u9762\u7684\u5404\u500b\u90e8\u5206\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)"),"\u547c\u53ebinvalidate\uff0c\u6240\u4ee5\u6211\u5011\u9019\u9ebc\u505a:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"    myBox.moveRelative(1, 0); // \u5411\u53f3\u79fb\u52d51\u500b\u50cf\u7d20\n")),(0,r.kt)("p",null,"\u53e6\u4e00\u500b\u65b9\u6cd5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveTo(int16_t x\uff0cint16_t y)"),",\u5c07\u5c0f\u5de5\u5177\u79fb\u52d5\u5230\u6307\u5b9a\u4f4d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"    myBox.moveTo(100, 100); // \u5f9e\u7576\u524d\u4f4d\u7f6e\u79fb\u52d5\u5230100\uff0c100\n")),(0,r.kt)("p",null,"\u6b64\u65b9\u6cd5\u540c\u6a23\u547c\u53ebinvalidate\u3002"))}v.isMDXComponent=!0}}]);