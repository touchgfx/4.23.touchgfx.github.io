"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[24772],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,g=u["".concat(s,".").concat(p)]||u[p]||h[p]||r;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496),i=n(32118);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,a=(0,i.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:r,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:r,src:a})),o.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(59496),i=n(89588);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const c=a},89588:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}const r=i},93243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});n(59496);var o=n(49613),i=n(12822),r=n(86222),a=n(51721);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"widgets-and-containers",title:"Widgets and Containers"},d=void 0,u={unversionedId:"development/ui-development/working-with-touchgfx/widgets-and-containers",id:"development/ui-development/working-with-touchgfx/widgets-and-containers",title:"Widgets and Containers",description:"This section of the documentation will go over two of the most fundamental concepts of building a TouchGFX application: widgets and containers. These are two of the building blocks you will be using throughout the development of your UI. Both include premade components supplied with TouchGFX, while also being open-ended enough to support the creation of custom implementations.",source:"@site/docs/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/widgets-and-containers",permalink:"/4.23/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",draft:!1,tags:[],version:"current",frontMatter:{id:"widgets-and-containers",title:"Widgets and Containers"},sidebar:"docs",previous:{title:"Multiple developers on a project",permalink:"/4.23/docs/development/ui-development/working-with-touchgfx/multiple-developers"},next:{title:"Simulator",permalink:"/4.23/docs/development/ui-development/working-with-touchgfx/simulator"}},h={},p=[{value:"Widgets",id:"widgets",level:2},{value:"Containers",id:"containers",level:2}],g={toc:p},m="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(m,c({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section of the documentation will go over two of the most fundamental concepts of building a TouchGFX application: widgets and containers. These are two of the building blocks you will be using throughout the development of your UI. Both include premade components supplied with TouchGFX, while also being open-ended enough to support the creation of custom implementations."),(0,o.kt)("h2",c({},{id:"widgets"}),"Widgets"),(0,o.kt)("p",null,"TouchGFX and the TouchGFX Designer tool supplies numerous standard widgets which users can freely use to build their UI, such as ",(0,o.kt)("a",c({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"Text Area"),", ",(0,o.kt)("a",c({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," and ",(0,o.kt)("a",c({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"Texture Mapper"),". But on a fundamental level, a widget in TouchGFX is simply an abstract definition of something that can be drawn on the screen and can be interacted with."),(0,o.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.webp",mdxType:"Figure"},"A Button widget with an Image widget as background"),(0,o.kt)("p",null,"Using TouchGFX Designer, users can add any widgets they want to their screens and customize them how they want with the supplied properties specific to each widget. Widgets can also be grouped by using the different types of containers that TouchGFX also supplies."),(0,o.kt)("p",null,"You can also add widgets in user code if you want by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"add(widget_instance_name);")," function or adding it to a container by using the containers add function e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),". The order in which you add the widgets will determine the z-order. The widget added last will appear front-most on the screen."),(0,o.kt)("p",null,"The coordinates of a widget are always relative to its parent node which is either the root container (the screen) or a container."),(0,o.kt)(r.Z,{mdxType:"FurtherReading"},"You can create your own widgets to meet any specific need you might have. Read more on this in the ",(0,o.kt)(a.Z,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"Custom Widgets section"),"."),(0,o.kt)("h2",c({},{id:"containers"}),"Containers"),(0,o.kt)("p",null,"A container is a component in TouchGFX that can contain child nodes, such as widgets and other containers."),(0,o.kt)("p",null,"In TouchGFX Designer, containers are found under the Containers category in the Widgets tab and adding widgets to a containers is done by dragging widgets into the container in the tree view."),(0,o.kt)("p",null,"The z-order of children is determined by the order in which children are added to the container - the child added last will appear front-most on the screen."),(0,o.kt)("p",null,"Since the position of widgets in TouchGFX is defined relative to their parents, changing the position of a parent container will also move the children accordingly."),(0,o.kt)("p",null,"Containers act as viewports, meaning that only the parts of the children that intersect with the geometry of the container will be visible."),(0,o.kt)("p",null,"In the animation below, you can see how the viewport aspect of containers work. First we see the outline of the container of which the button is a child:"),(0,o.kt)(i.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.webp",mdxType:"Figure"},"A Container acting as a viewport"),(0,o.kt)(r.Z,{mdxType:"FurtherReading"},"You can create your own container to meet any specific need you might have. Read more on this in the ",(0,o.kt)(a.Z,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"Custom Containers section"),"."))}f.isMDXComponent=!0}}]);