"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[73948],{49613:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94700:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(59496);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const o=r},64438:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>s});n(59496);var a=n(49613),r=n(51721),o=n(94700);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"FontManager"},d=void 0,c={unversionedId:"api/classes/classtouchgfx_1_1_font_manager",id:"api/classes/classtouchgfx_1_1_font_manager",title:"FontManager",description:"touchgfx/FontManager.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_font_manager.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_font_manager",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_font_manager",draft:!1,tags:[],version:"current",frontMatter:{title:"FontManager"},sidebar:"docs",previous:{title:"FontContextualFormsTable",permalink:"/4.23/zh-CN/docs/api/classes/structtouchgfx_1_1_font_contextual_forms_table"},next:{title:"FontProvider",permalink:"/4.23/zh-CN/docs/api/classes/classtouchgfx_1_1_font_provider"}},u={},s=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"getFont",id:"getfont",level:3},{value:"setFontProvider",id:"setfontprovider",level:3}],m={toc:s},k="wrapper";function f(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(k,l({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/FontManager.hpp")),(0,a.kt)("p",null," This class is the entry point for looking up a font based on a font id.\nMust be initialized with the appropriate ",(0,a.kt)("a",l({parentName:"p"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," by the application. "),(0,a.kt)("h2",l({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"right"})),(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"}),(0,a.kt)("a",l({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," *"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_font_manager#function-getfont",mdxType:"Link"},"getFont")),"(",(0,a.kt)("a",l({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")," fontId)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Gets a font.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_font_manager#function-setfontprovider",mdxType:"Link"},"setFontProvider")),"(",(0,a.kt)("a",l({parentName:"td"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," * fontProvider)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Sets the font provider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",l({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(o.Z,{url:"classtouchgfx_1_1_font_manager#function-getfont",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",l({},{id:"getfont"}),"getFont"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"static","\xa0","Font *","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_font_manager#function-getfont",mdxType:"Link"},"getFont")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"fontId"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",l({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets a font. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"fontId"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The FontId of the font to get."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The font with a FontId of fontId. ")))),(0,a.kt)(o.Z,{url:"classtouchgfx_1_1_font_manager#function-setfontprovider",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",l({},{id:"setfontprovider"}),"setFontProvider"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_font_manager#function-setfontprovider",mdxType:"Link"},"setFontProvider")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," *"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"fontProvider"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",l({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the font provider. "),(0,a.kt)("p",null,"Must be initialized with the appropriate ",(0,a.kt)("a",l({parentName:"p"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," by the application."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"fontProvider"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Sets the font provider. Must be initialized with the appropriate ",(0,a.kt)("a",l({parentName:"td"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," by the application."))))))))}f.isMDXComponent=!0}}]);