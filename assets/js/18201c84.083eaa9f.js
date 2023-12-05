"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[56878],{49613:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(59496);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},89588:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){const t=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:t},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},39331:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(59496),o=r(89588);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const l=i},61668:(t,e,r)=>{r.d(e,{Z:()=>y});var n=r(59496),o=r(45924),a=r(10496),i=r(51721),l=r(9654),c=r(48199);const s={cardContainer:"cardContainer_KVQB",cardTitle:"cardTitle_RPrv",cardDescription:"cardDescription_aERY"};function u({href:t,children:e}){return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},e)}function p({href:t,icon:e,title:r,description:a}){return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:r},e," ",r),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:a},a))}function d({item:t}){const e=(0,a.Wl)(t);return e?n.createElement(p,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!==(r=t.description)&&void 0!==r?r:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null;var r}function h({item:t}){const e=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,a.xz)(null!==(r=t.docId)&&void 0!==r?r:void 0);var i;return n.createElement(p,{href:t.href,icon:e,title:t.label,description:null!==(i=t.description)&&void 0!==i?i:null==o?void 0:o.description})}function m({item:t}){switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}function g({className:t}){const e=(0,a.jA)();return n.createElement(y,{items:e.items,className:t})}function y(t){const{items:e,className:r}=t;if(!e)return n.createElement(g,f({},t));const i=(0,a.MN)(e);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((t,e)=>n.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:t})))))}},41590:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>h});r(59496);var n=r(49613),o=r(39331),a=r(61668),i=r(10496);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const s={id:"tutorial-06-introduction",title:"Tutorial 6: Using TextAreas"},u=void 0,p={unversionedId:"tutorials/tutorial-06/tutorial-06-introduction",id:"tutorials/tutorial-06/tutorial-06-introduction",title:"Tutorial 6: Using TextAreas",description:"In this tutorial, you will learn how to use TextAreas for more advanced usage. We will create an application that will show texts, in multiple languages and different typographies. We will also see how to change the appearance of our text and how to use wildcards through TouchGFX Designer and through code. To follow this tutorial more easily, we invite you to do tutorial 2 beforehand.",source:"@site/docs/tutorials/tutorial-06/tutorial-06-introduction.mdx",sourceDirName:"tutorials/tutorial-06",slug:"/tutorials/tutorial-06/tutorial-06-introduction",permalink:"/4.23/docs/tutorials/tutorial-06/tutorial-06-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-06-introduction",title:"Tutorial 6: Using TextAreas"},sidebar:"docs",previous:{title:"Tutorial 5: Creating Custom Triggers and Actions",permalink:"/4.23/docs/tutorials/tutorial-05"},next:{title:"Part 1 \u2013 Typography and Language",permalink:"/4.23/docs/tutorials/tutorial-06/tutorial-06-part-1"}},d={},h=[],m={toc:h},f="wrapper";function g(t){var{components:e}=t,r=c(t,["components"]);return(0,n.kt)(f,l({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, you will learn how to use TextAreas for more advanced usage. We will create an application that will show texts, in multiple languages and different typographies. We will also see how to change the appearance of our text and how to use wildcards through TouchGFX Designer and through code. To follow this tutorial more easily, we invite you to do ",(0,n.kt)("a",l({parentName:"p"},{href:"https://support.touchgfx.com/4.20/docs/tutorials/tutorial-02"}),"tutorial 2")," beforehand."),(0,n.kt)("p",null,"This tutorial has been prepared in two parts. In the first part of this tutorial, you will learn how to add different typographies and how to use them. You will also see how to use different languages in your application. In the second part, this tutorial will teach you how to manage the appearance of a TextArea and how to use wilcards."),(0,n.kt)(o.Z,{mdxType:"Note"},"To do the Part 2 you must have done the Part 1, because the Part 2 is a continuation of the Part 1."),(0,n.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);