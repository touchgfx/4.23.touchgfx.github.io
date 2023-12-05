"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[82493],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12822:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(32118);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},86092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});r(59496);var n=r(49613),o=r(12822);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern"},c=void 0,l={unversionedId:"development/ui-development/software-architecture/model-view-presenter-design-pattern",id:"development/ui-development/software-architecture/model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern",description:"TouchGFX user interfaces follow an architectural pattern known as Model-View-Presenter (MVP) which is a derivation of the Model-View-Controller (MVC) pattern. Both of them are widely used for building user interface applications.",source:"@site/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/model-view-presenter-design-pattern",permalink:"/4.23/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",draft:!1,tags:[],version:"current",frontMatter:{id:"model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern"},sidebar:"docs",previous:{title:"Software Architecture",permalink:"/4.23/docs/category/software-architecture"},next:{title:"The Screen Concept",permalink:"/4.23/docs/development/ui-development/software-architecture/screen-definition-and-mvp"}},p={},u=[],m={toc:u},d="wrapper";function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"TouchGFX user interfaces follow an architectural pattern known as Model-View-Presenter (MVP) which is a derivation of the Model-View-Controller (MVC) pattern. Both of them are widely used for building user interface applications."),(0,n.kt)("p",null,"The main benifits of the MVP pattern are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Separation of Concerns"),": Dividing your code into separate parts, each having their own responsibility. This makes the code simpler, more reusable and easier to maintain."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unit Testing"),": Since the logic (the presenter) of the UI is separated from the visual layer (the view) it is much easier to test these parts in isolation.")),(0,n.kt)("p",null,"In MVP the three classes are defined as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("em",{parentName:"li"},"model")," is an interface defining the data to be displayed or otherwise acted upon in the user interface."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("em",{parentName:"li"},"view")," is a passive interface that displays data (from the model) and routes user commands (events) to the presenter to act upon that data."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("em",{parentName:"li"},"presenter")," acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view.")),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp.webp",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter Design Pattern"),(0,n.kt)("p",null,"In TouchGFX the communication with the non-UI part of the application, here called the backend system, is done from the Model class. The backend system is a software component that both receives events from the UI and feeds events into the UI, such as new measurements from sensors. The backend system can run as a separate task on the same MCU, on a separate processor, a cloud module or something else. From the perspective of TouchGFX, this does not really matter, as long as it is a component that it is able to communicate with."),(0,n.kt)("p",null,"The specific communication protocol used is not managed by TouchGFX. It simply supplies a function that is called once each tick of TouchGFX, in which the needed communication can be handled. Read more on this subject in ",(0,n.kt)("a",a({parentName:"p"},{href:"../touchgfx-engine-features/backend-communication"}),"Backend Communication"),"."),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp-2.webp",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter and external communication"),(0,n.kt)("p",null,"For more concrete details on how MVP is implemented and used in TouchGFX UI development see the ",(0,n.kt)("a",a({parentName:"p"},{href:"code-structure"}),"Code Structure")," section."))}h.isMDXComponent=!0}}]);