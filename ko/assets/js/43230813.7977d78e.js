"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[74483],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>c});t(59496);var r=t(49613);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"position-size",title:"\uc704\uce58 \ubc0f \ud06c\uae30"},l=void 0,p={unversionedId:"development/ui-development/touchgfx-engine-features/position-size",id:"development/ui-development/touchgfx-engine-features/position-size",title:"\uc704\uce58 \ubc0f \ud06c\uae30",description:"'@site/components/CodeHeader'\uc5d0\uc11c CodeHeader \uac00\uc838\uc624\uae30, '@site/components/Figure'\uc5d0\uc11c Figure \uac00\uc838\uc624\uae30, '@docusaurus/Link'\uc5d0\uc11c Link \uac00\uc838\uc624\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/position-size.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/position-size",permalink:"/4.23/ko/docs/development/ui-development/touchgfx-engine-features/position-size",draft:!1,tags:[],version:"current",frontMatter:{id:"position-size",title:"\uc704\uce58 \ubc0f \ud06c\uae30"},sidebar:"docs",previous:{title:"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158",permalink:"/4.23/ko/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"},next:{title:"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108",permalink:"/4.23/ko/docs/development/ui-development/touchgfx-engine-features/custom-containers"}},u={},c=[{value:"\uc704\uc82f \ucd94\uac00",id:"adding-widgets",level:2},{value:"\ud06c\uae30 \ubc0f \uc704\uce58 \uc124\uc815",id:"setting-size-position",level:2},{value:"Helper \uba54\uc11c\ub4dc",id:"helper-methods",level:2},{value:"\ud655\uc7a5",id:"expanding",level:3},{value:"\uac00\uc6b4\ub370 \uc815\ub82c",id:"centering",level:3},{value:"\ubb34\ud6a8\ud654",id:"invalidation",level:3},{value:"\uc774\ub3d9",id:"moving",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",o({},n))},s=d("Figure"),m=d("CodeHeader"),g={toc:c},v="wrapper";function k(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)(v,o({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"'@site/components/CodeHeader'\uc5d0\uc11c CodeHeader \uac00\uc838\uc624\uae30, '@site/components/Figure'\uc5d0\uc11c Figure \uac00\uc838\uc624\uae30, '@docusaurus/Link'\uc5d0\uc11c Link \uac00\uc838\uc624\uae30"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc778 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c UI \uc124\uc815\uc758 \ub9ce\uc740 \ubd80\ubd84\uc744 TouchGFX Designer\ub97c \ud1b5\ud574 \uc0dd\uc131\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc77c\ubc18\uc801\uc73c\ub85c \uc9c1\uc811 \uc791\uc131\ud574\uc57c \ud558\ub294 \ubd80\ubd84\ub3c4 \uc57d\uac04 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub354 \ub9ce\uc740 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc218\ud589\ud558\uac70\ub098, \uc0ac\uc6a9\uc790 \uc774\ubca4\ud2b8 \ub610\ub294 \uad6c\uc131 \ub370\uc774\ud130\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c0\ub294 \ub3d9\uc801\uc778 \uc704\uc82f \uc124\uc815\uc744 \uc0dd\uc131\ud574\uc57c \ud560 \ub54c\uac00 \uadf8\ub807\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud574\ub2f9 \uc791\uc5c5\uc744 \uc2dc\uc791\ud560 \ub54c \ud074\ub798\uc2a4\uc5d0\uc11c \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \uba87 \uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uace0 \uc788\uc73c\uba74 \uc720\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \uc704\uc82f\uc740 Drawable \ud074\ub798\uc2a4\uc758 \ud558\uc704 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4. \uc774 \ud074\ub798\uc2a4\uc5d0\ub294 \ud06c\uae30\uc640 \uc704\uce58\ub97c \uc81c\uc5b4\ud558\ub294 \uc77c\ubc18\uc801\uc778 \uba54\uc11c\ub4dc\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(s,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/widgets1.webp",noShadow:"true",mdxType:"Figure"},"\uc704\uc82f \uacc4\uce35(\uc77c\ubd80)"),(0,r.kt)("p",null,"Widget \uac1d\uccb4\uc758 \ub9ce\uc740 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ucd95\ud569\ub2c8\ub2e4. \uc774\ub4e4 \uac1d\uccb4\ub294 View \ud558\uc704 \ud074\ub798\uc2a4\uc5d0 \uba64\ubc84\ub85c \ucd94\uac00\ub429\ub2c8\ub2e4. View \ud074\ub798\uc2a4\ub294 Screen \ud074\ub798\uc2a4\uc758 \ud558\uc704 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4."),(0,r.kt)(s,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/screen1.webp",noShadow:"true",mdxType:"Figure"},"\ud654\uba74 \uacc4\uce35"),(0,r.kt)("p",null,"Screen \ud074\ub798\uc2a4\uc5d0\ub294 Container \uba64\ubc84\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ub8e8\ud2b8(root) \ucee8\ud14c\uc774\ub108\ub77c\uace0 \ud569\ub2c8\ub2e4. \ub8e8\ud2b8 \ucee8\ud14c\uc774\ub108\ub294 (0,0)\uc5d0\uc11c \uc2dc\uc791\ud574\uc11c \uc804\uccb4 \ub514\uc2a4\ud50c\ub808\uc774 \uc601\uc5ed\uc744 \ucc44\uc6b0\ub3c4\ub85d \ucd08\uae30\ud654\ub429\ub2c8\ub2e4(\ub108\ube44 = HAL::DISPLAY_WIDTH, \ub192\uc774 = HAL::DISPLAY_HEIGHT)."),(0,r.kt)("h2",o({},{id:"adding-widgets"}),"\uc704\uc82f \ucd94\uac00"),(0,r.kt)("p",null,"View \ud074\ub798\uc2a4\uc5d0\uc11c \uba64\ubc84\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \uc704\uc82f\uc744 View\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 myBox\ub77c\ub294 \uc0c1\uc790\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)(m,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cpp",metastring:"{3-3,13-13}","{3-3,13-13}":!0}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    Box myBox;\n};\n")),(0,r.kt)("p",null,"\uae30\ubcf8 \ud074\ub798\uc2a4 \ud5e4\ub354 \ud30c\uc77c\uc5d0 \uc774\ubbf8 \ud3ec\ud568\uc774 \ub418\uc5b4 \uc788\uc9c0 \uc54a\ub294 \ud55c, \ucf54\ub4dc\uc5d0\uc11c Box\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 Box.hpp\ub97c \ud3ec\ud568\uc2dc\ucf1c\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"Box \uc704\uc82f\uc744 \uadf8\ub9ac\uae30 \uc704\ud574\uc11c \uc7a5\uba74 \uadf8\ub798\ud504(\ud654\uba74\uc758 \uc704\uc82f \ud2b8\ub9ac)\uc5d0 \uc774\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(s,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"\uc704\uc82f \ud2b8\ub9ac"),(0,r.kt)("p",null,"add \ud568\uc218\ub97c \ud1b5\ud574 \uc774\uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c setupScreen\uc5d0\uc11c \ucd94\uac00 \uc791\uc5c5\uc774 \uc218\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)(m,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cpp",metastring:"{10-10}","{10-10}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    add(myBox);\n}\n")),(0,r.kt)("p",null,"\ud654\uba74\uc758 add \uba54\uc11c\ub4dc\ub294 \ub8e8\ud2b8 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c add\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void add(Drawable& d)\n{\n    container.add(d);\n}\n")),(0,r.kt)("p",null,"\ud654\uba74\uc5d0 \ub610 \ub2e4\ub978 \ucee8\ud14c\uc774\ub108\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c add \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uc704\uc82f\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"void Screen1View::setupScreen()\n{\n    ...\n    myContainer.add(myBox);\n}\n")),(0,r.kt)("h2",o({},{id:"setting-size-position"}),"\ud06c\uae30 \ubc0f \uc704\uce58 \uc124\uc815"),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc704\uc82f\uc740 \uae30\ubcf8 \uc704\uce58\uac00 (0,0)\uc774\uace0 \ub108\ube44\uc640 \ub192\uc774\uac00 0\uc785\ub2c8\ub2e4. \uc774\ub294 \uc704\uc82f\uc758 \ud06c\uae30\uc640 \uc704\uce58\ub97c \uc124\uc815\ud558\ub294 \uc791\uc5c5\uc774 \uac70\uc758 \ud56d\uc0c1 \ud544\uc694\ud558\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uce58\ub97c \uc124\uc815\ud558\ub294 \uae30\ubcf8 \uba54\uc11c\ub4dc\ub294 setXY \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"   myBox.setXY(10, 10); // x=10, y=10\uc5d0 myBox \ubc30\uce58\n")),(0,r.kt)("p",null,"\ub108\ube44\uc640 \ub192\uc774\ub294 setWidthHeight \uba54\uc11c\ub4dc\ub85c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ub294 setWidth, setHeight \uba54\uc11c\ub4dc\ub85c\ub3c4 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"   myBox.setWidthHeight(200, 100); // myBox\uc5d0 \ub108\ube44 200, \ub192\uc774 100\uc744 \uc9c0\uc815\n")),(0,r.kt)("p",null,"\uc774 \ub450 \uba54\uc11c\ub4dc\ub294 setPosition \uba54\uc11c\ub4dc\uc640 \uacb0\ud569\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"   myBox.setPosition(10, 10, 200, 100); // x=10, y=10, \ub108\ube44 200, \ub192\uc774 100\uc5d0 myBox \ubc30\uce58\n")),(0,r.kt)("h2",o({},{id:"helper-methods"}),"Helper \uba54\uc11c\ub4dc"),(0,r.kt)("p",null,"Drawable \ud074\ub798\uc2a4\uc5d0\ub294 Drawable \uc124\uc815\uc5d0 \ub3c4\uc6c0\uc774 \ub418\ub294 \ud5ec\ud37c \uba54\uc11c\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_drawable"}),"Drawable \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870")),(0,r.kt)("h3",o({},{id:"expanding"}),"\ud655\uc7a5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::expand()")," \uba54\uc11c\ub4dc\ub294 \uc704\uc82f(Drawable)\uc744 \uc0c1\uc704 \ub178\ub4dc\uc640 \uac19\uc740 \ud06c\uae30\ub85c \ub9cc\ub4ed\ub2c8\ub2e4. \uc5ec\ubc31\uc740 \uc124\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc704\uc82f\uc740 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\uc11c\ub9ac\uc5d0 \ubc30\uce58\ub429\ub2c8\ub2e4(\uc5ec\ubc31 \ucd94\uac00)."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"   myBox.expand(10); // 10\ud53d\uc140\uc758 \uc5ec\ubc31\uc744 \uc81c\uc678\ud558\uace0 \uc0c1\uc704 \ub178\ub4dc\uc640 \uac19\uc740 \ud06c\uae30\ub85c x=10, y=10\uc5d0 myBox \ubc30\uce58\n")),(0,r.kt)("h3",o({},{id:"centering"}),"\uac00\uc6b4\ub370 \uc815\ub82c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::centerX())"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::centerY())")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::center()")," \uba54\uc11c\ub4dc\ub294 \uc0c1\uc704 \ub178\ub4dc \ub0b4\uc5d0\uc11c \uc704\uc82f\uc744 \uac00\uc6b4\ub370 \uc815\ub82c(\uac00\ub85c, \uc138\ub85c, \ub458 \ub2e4)\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"   myBox.centerX(); // \uc0c1\uc704 \ub178\ub4dc\uc5d0\uc11c myBox\ub97c \uac00\ub85c\ub85c \uac00\uc6b4\ub370 \uc815\ub82c\n")),(0,r.kt)("h3",o({},{id:"invalidation"}),"\ubb34\ud6a8\ud654"),(0,r.kt)("p",null,"\uc704\uc82f\uc758 \ud06c\uae30\ub97c \ubcc0\uacbd\ud560 \ub54c\ub294 \ud654\uba74\uc5d0\uc11c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud558\ub294 \ubd80\ubd84\uc744 \ubb34\ud6a8\ud654\ud574\uc57c \ud569\ub2c8\ub2e4. \uc704\uc82f\uc744 \ub354 \ud06c\uac8c \ub9cc\ub4dc\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc0c8 \ud06c\uae30\ub9cc \ubb34\ud6a8\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc704\uc82f\uc744 \ub354 \uc791\uac8c \ub9cc\ub4dc\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud06c\uae30\ub97c \ubcc0\uacbd\ud558\uae30 \uc804\uc5d0 \uc704\uc82f\uc744 \ubb34\ud6a8\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"   // Box\ub97c \ud655\uc7a5\ud558\uace0 \uc774\ud6c4\uc5d0 \ubb34\ud6a8\ud654\ub97c \ud558\uba74 \uc0c8 \ud06c\uae30\ub85c \ub2e4\uc2dc \ub4dc\ub85c\uc789\n   myBox.expand(10);\n   myBox.invalidate();\n   ...\n   // \uba3c\uc800 \ubb34\ud6a8\ud654\ub97c \ud558\uace0 Box\uc758 \ud06c\uae30\ub97c \uc904\uc774\uba74 \ubc30\uacbd\uc774 \ub2e4\uc2dc \ub4dc\ub85c\uc789\n   myBox.invalidate();\n   myBox.myBox.setPosition(10, 10, 200, 100);\n")),(0,r.kt)("p",null,"\uc704\uc82f\uc744 \ubb34\ud6a8\ud654\ud558\uba74 \ub2f9\uc2dc \uc704\uc82f\uc774 \ucc28\uc9c0\ud558\uace0 \uc788\ub294 \ud654\uba74 \uc601\uc5ed\uc774 \ub2e4\uc74c \uadf8\ub9ac\uae30 \uc791\uc5c5 \ub2e8\uacc4\uc5d0\uc11c \ub2e4\uc2dc \uadf8\ub824\uc57c\ud55c\ub2e4\ub294 \uc810\uc73c\uc5d0 \uc720\uc758\ud574\uc57c \ud569\ub2c8\ub2e4. \uc989, \uc704\uc82f\uc744 \ubb34\ud6a8\ud654\ud55c \ub2e4\uc74c\uc5d0 \ud06c\uae30\ub97c \uc904\uc774\uba74 \ubb34\ud6a8\ud654\ud558\ub824\ub294 \uc704\uc82f\ubfd0\ub9cc \uc544\ub2c8\ub77c \ud604\uc7ac \ub208\uc5d0 \ubcf4\uc774\ub294 \ub2e4\ub978 \uc704\uc82f\uc758 \ubd80\ubd84\ub4e4(\ub4a4\uc5d0 \uc788\ub294)\ub3c4 \ub2e4\uc2dc \uadf8\ub824\uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("h3",o({},{id:"moving"}),"\uc774\ub3d9"),(0,r.kt)("p",null,"Drawable \ud074\ub798\uc2a4\uc5d0\ub294 \ud654\uba74\uc758 \uc704\uc82f\uc744 \ud55c \uc704\uce58\uc5d0\uc11c \ub2e4\ub978 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0ac \uc218 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)"),"\ub77c\ub294 \uba54\uc11c\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uba54\uc11c\ub4dc\ub97c\uc740 \uc560\ub2c8\uba54\uc774\uc158\uc758 \uc77c\ubd80\ub85c \uc0ac\uc6a9\ud558\uac70\ub098, \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc77c\ubd80\ub97c \uc7ac\ubc30\uc5f4\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)"),"\uac00 \uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ubb34\ud6a8\ud654\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"    myBox.moveRelative(1, 0); // \uc624\ub978\ucabd\uc73c\ub85c 1\ud53d\uc140 \uc774\ub3d9\n")),(0,r.kt)("p",null,"\ub610 \ub2e4\ub978 \uba54\uc11c\ub4dc\ub85c \uc704\uc82f\uc744 \uc9c0\uc815\ub41c \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveTo(int16_t x, int16_t y)"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"    myBox.moveTo(100, 100); // \ud604\uc7ac \uc704\uce58\uc5d0\uc11c 100, 100\uc73c\ub85c \uc774\ub3d9\n")),(0,r.kt)("p",null,"\uc774 \uba54\uc11c\ub4dc\ub294 \ubb34\ud6a8\ud654\ub3c4 \ud638\ucd9c\ud569\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);