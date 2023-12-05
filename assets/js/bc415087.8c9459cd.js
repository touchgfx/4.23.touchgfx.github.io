"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[94439],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,g=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61235:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const i=r},12822:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),r=n(32118);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(89588);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const l=o},89588:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const i=r},40465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}const i=r},71678:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(89588);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const l=o},28958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>g,toc:()=>k});n(59496);var a=n(49613),r=n(12822),i=n(86222),o=n(71678),l=n(40465),p=n(51721),s=n(61235);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m={id:"swipe-container",title:"Swipe Container"},h=void 0,g={unversionedId:"development/ui-development/ui-components/containers/swipe-container",id:"development/ui-development/ui-components/containers/swipe-container",title:"Swipe Container",description:"A Swipe Container in TouchGFX is a specialization of the Container that consists of multiple pages, which can be accessed by swiping between them. The pages in the Swipe Container can contain other widgets, similar to the Container.",source:"@site/docs/development/ui-development/ui-components/containers/swipe-container.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/swipe-container",permalink:"/4.23/docs/development/ui-development/ui-components/containers/swipe-container",draft:!1,tags:[],version:"current",frontMatter:{id:"swipe-container",title:"Swipe Container"},sidebar:"docs",previous:{title:"Scrollable Container",permalink:"/4.23/docs/development/ui-development/ui-components/containers/scrollable-container"},next:{title:"List Layout",permalink:"/4.23/docs/development/ui-development/ui-components/containers/list-layout"}},u={},k=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],w={toc:k},f="wrapper";function b(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)(f,d({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Swipe Container in TouchGFX is a specialization of the ",(0,a.kt)("a",d({parentName:"p"},{href:"container"}),"Container")," that consists of multiple pages, which can be accessed by swiping between them. The pages in the Swipe Container can contain other widgets, similar to the Container."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/swipe-container/widget-appearance.webp",mdxType:"Figure"},"Swipe Container running in the simulator"),(0,a.kt)("h2",d({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The Swipe Container can be found in the Containers widget group in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/swipe-container/widget-group-v4.17.webp",mdxType:"Figure"},"Swipe Container in TouchGFX Designer"),(0,a.kt)("h2",d({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for the Swipe Container are described in the following sections."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Pages")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Selected Page")," specifies the page shown on the canvas. This page will also be the starting page when the project is running.",(0,a.kt)("br",null),(0,a.kt)("br",null),"The ",(0,a.kt)("em",{parentName:"td"},"+")," button creates a new page when clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Page indicator")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Show page indicator")," specifies the visibility of the page indicator.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the page indicator relative to the top left corner of the widget.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Center horizontally")," specifies if the position page indicator should be centered in the x-axis of the widget.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Normal Image")," and ",(0,a.kt)("em",{parentName:"td"},"Highlighted Image")," specify the images assigned to the normal and highlighted states of the PageIndicator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Swipe settings")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Swipe threshold")," specifies the distance that has to be swiped by the user before resulting in a page change.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"End swipe elastic width")," specifies the distance the first and last pages can be swiped beyond the borders of the widget before stopping.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,a.kt)("em",{parentName:"td"},"Alpha")," value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("h2",d({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by the Swipe Container are described in the following sections."),(0,a.kt)("h3",d({},{id:"actions"}),"Actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Widget specific action")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Resize widget")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Resize the width and height of a widget.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget action")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",d({},{id:"triggers"}),"Triggers"),(0,a.kt)("p",null,"The Swipe Container does not emit any triggers."),(0,a.kt)("h2",d({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"A Swipe Container is a ",(0,a.kt)("a",d({parentName:"p"},{href:"container"}),"Container")," type and does not per default appear in the draw chain. Therefore, the performance is mostly dependent on the drawing performance of the children, though the Swipe Container also does some image drawing in the form of its PageIndicator."),(0,a.kt)("p",null,"For more details on drawing performance, read the ",(0,a.kt)("a",d({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",d({},{id:"examples"}),"Examples"),(0,a.kt)("h3",d({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how the TouchGFX Designer sets up the Swipe Container of two pages with a page indicator centered horizontally."),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    swipeContainerName.setXY(15, 10);\n    swipeContainerName.setPageIndicatorBitmaps(touchgfx::Bitmap(BITMAP_BLUE_PAGEINDICATOR_DOT_INDICATOR_SMALL_NORMAL_ID), touchgfx::Bitmap(BITMAP_BLUE_PAGEINDICATOR_DOT_INDICATOR_SMALL_HIGHLIGHT_ID));\n    swipeContainerName.setPageIndicatorXY(210, 0);\n    swipeContainerName.setSwipeCutoff(50);\n    swipeContainerName.setEndSwipeElasticWidth(50);\n\n    swipeContainerNamePage1.setWidth(450);\n    swipeContainerNamePage1.setHeight(250);\n    swipeContainerName.add(swipeContainerNamePage1);\n\n    swipeContainerNamePage2.setWidth(450);\n    swipeContainerNamePage2.setHeight(250);\n    swipeContainerName.add(swipeContainerNamePage2);\n\n    swipeContainerName.setSelectedPage(0);\n\n    add(swipeContainerName);\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the SwipeContainer class in user code. Remember to force a redraw by calling ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"swipeContainerName.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",d({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,a.kt)("p",null,"To further explore the Swipe Container, try creating a new application within TouchGFX Designer with the following UI template:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/swipe-container-example-v4.17.webp",mdxType:"Figure"},"Swipe Container Example UI template in TouchGFX Designer"),(0,a.kt)("h2",d({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_swipe_container",mdxType:"Link"},"API reference for the SwipeContainer class"))))}b.isMDXComponent=!0}}]);