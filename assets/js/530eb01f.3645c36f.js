"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[10495],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const i=a},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const o=l},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=a},94790:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const i=a},21100:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const o=l},19125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>f});n(59496);var r=n(49613),a=n(89639),i=n(48753),l=n(21100),o=n(94790),c=n(95375),s=n(28128);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const m={id:"circle",title:"Circle"},u=void 0,h={unversionedId:"development/ui-development/ui-components/shapes/circle",id:"development/ui-development/ui-components/shapes/circle",title:"Circle",description:"A Circle is a widget based on the Canvas Widget capable of drawing a circle. This circle can be a partial circle, and either filled or outlined. The center, radius, line width, line cap and circle arc can be modified. The Circle can either use an image or a single color as fill.",source:"@site/docs/development/ui-development/ui-components/shapes/circle.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/circle",permalink:"/4.23/docs/development/ui-development/ui-components/shapes/circle",draft:!1,tags:[],version:"current",frontMatter:{id:"circle",title:"Circle"},sidebar:"docs",previous:{title:"Line",permalink:"/4.23/docs/development/ui-development/ui-components/shapes/line"},next:{title:"Shape",permalink:"/4.23/docs/development/ui-development/ui-components/shapes/shape"}},g={},f=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],k={toc:f},v="wrapper";function b(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(v,d({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Circle is a widget based on the Canvas Widget capable of drawing a circle. This circle can be a partial circle, and either filled or outlined. The center, radius, line width, line cap and circle arc can be modified. The Circle can either use an image or a single color as fill."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/circle/widget-appearance.webp",mdxType:"Figure"},"Circle running in the simulator"),(0,r.kt)("h2",d({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Circle can be found in the Shapes widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/circle/widget-group-v4.17.webp",mdxType:"Figure"},"Circle in TouchGFX Designer"),(0,r.kt)("h2",d({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for the Circle are described in the following sections."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image & Color")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Image")," specifies the image used to fill the circle from the Designer skin library or the Project folder. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If an image is not chosen, ",(0,r.kt)("em",{parentName:"td"},"Color")," specifies the color used to fill the circle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Center Position X")," and ",(0,r.kt)("em",{parentName:"td"},"Center Position Y")," specify the coordinates for the center of the circle, relative to the top left corner of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Start & End Angle")," specify the angles in degrees of the start and ending points of the circle.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Radius")," specifies the radius of the circle.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Line Width")," specifies the width of the line forming the circumference of the circle.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Set this to 0 to get a filled circle"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Cap Style")," specifies the shape of the edges of the circle. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",d({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Circle are described in the following sections."),(0,r.kt)("h3",d({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",d({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A Circle does not emit any triggers."),(0,r.kt)("h2",d({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Circle is based on the Canvas Widget and is heavily dependent on the MCU for rendering. Therefore, the Circle is considered a demanding widget on most platforms."),(0,r.kt)("p",null,"For more details on CanvasWidget drawing performance, read the ",(0,r.kt)("a",d({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("h3",d({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Circle."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    circleName.setPosition(40, 36, 200, 200);\n    circleName.setCenter(100, 100);\n    circleName.setRadius(80);\n    circleName.setLineWidth(0);\n    circleName.setArc(0, 225);\n    circleName.setCapPrecision(180);\n    circleNamePainter.setColor(touchgfx::Color::getColorFromRGB(0, 171, 223));\n    circleName.setPainter(circleNamePainter);\n\n    add(circleName);\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Circle class in user code. Remember to force a redraw by calling ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"circleName.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",d({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Circle, try creating a new application within TouchGFX Designer with the following Example:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/line-and-circle-example-v4.17.webp",mdxType:"Figure"},"Line and Circle Example in TouchGFX Designer"),(0,r.kt)("h2",d({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_circle",mdxType:"Link"},"API reference for the Circle class")),(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_canvas",mdxType:"Link"},"API reference for the Canvas class used to draw a Circle"))))}b.isMDXComponent=!0}}]);