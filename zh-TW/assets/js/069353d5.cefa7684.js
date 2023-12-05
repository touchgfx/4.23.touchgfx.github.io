"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[77995],{49613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=c(a),k=n,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||i;return a?r.createElement(m,o(o({ref:e},d),{},{components:a})):r.createElement(m,o({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94700:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(59496);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=n},87586:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>s});a(59496);var r=a(49613),n=a(51721),i=a(94700);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const p={title:"Point3D"},c=void 0,d={unversionedId:"api/classes/structtouchgfx_1_1_point3_d",id:"api/classes/structtouchgfx_1_1_point3_d",title:"Point3D",description:"touchgfx/hal/Types.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_point3_d.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_point3_d",permalink:"/4.23/zh-TW/docs/api/classes/structtouchgfx_1_1_point3_d",draft:!1,tags:[],version:"current",frontMatter:{title:"Point3D"},sidebar:"docs",previous:{title:"Point",permalink:"/4.23/zh-TW/docs/api/classes/structtouchgfx_1_1_matrix3x3_1_1_point"},next:{title:"Point4",permalink:"/4.23/zh-TW/docs/api/classes/classtouchgfx_1_1_point4"}},u={},s=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"U",id:"u",level:3},{value:"V",id:"v",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3}],k={toc:s},m="wrapper";function f(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)(m,o({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Types.hpp")),(0,r.kt)("p",null,"A 3D point. "),(0,r.kt)("h2",o({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"right"})),(0,r.kt)("th",o({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-u",mdxType:"Link"},"U")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The U coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-v",mdxType:"Link"},"V")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The V coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),(0,r.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-x",mdxType:"Link"},"X")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The X coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),(0,r.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-y",mdxType:"Link"},"Y")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The Y coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"}),"float"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-z",mdxType:"Link"},"Z")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The Z coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"right"})),(0,r.kt)("td",o({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",o({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-u",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"u"}),"U"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float U ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The U coordinate. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-v",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"v"}),"V"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float V ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The V coordinate. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-x",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"x"}),"X"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")," X ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The X coordinate. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-y",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"y"}),"Y"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")," Y ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The Y coordinate. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-z",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",o({},{id:"z"}),"Z"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"float Z ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The Z coordinate. "))))}f.isMDXComponent=!0}}]);