"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5015],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(59496);class a extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}const r=a},89639:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(59496),a=n(7029);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,l=(0,a.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:l,target:"_blank"},i.createElement("img",{width:n,height:r,src:l})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:l,target:"_blank"},i.createElement("img",{width:n,height:r,src:l})),i.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(59496),a=n(96151);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const o=l},96151:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(59496);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}const r=a},94790:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(59496);class a extends i.Component{render(){return i.createElement("code",null,this.props.children)}}const r=a},21100:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(59496),a=n(96151);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}const o=l},12378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>k});n(59496);var i=n(49613),a=n(89639),r=n(48753),l=n(21100),o=n(94790),s=n(95375),d=n(28128);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const m={id:"digital-clock",title:"Digital Clock"},u=void 0,g={unversionedId:"development/ui-development/ui-components/miscellaneous/digital-clock",id:"development/ui-development/ui-components/miscellaneous/digital-clock",title:"Digital Clock",description:"A Digital Clock in TouchGFX is a widget that allows an application to display time with digital text, as opposed to the AnalogClock which displays time using analog clock hands.",source:"@site/docs/development/ui-development/ui-components/miscellaneous/digital-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/digital-clock",permalink:"/4.23/docs/development/ui-development/ui-components/miscellaneous/digital-clock",draft:!1,tags:[],version:"current",frontMatter:{id:"digital-clock",title:"Digital Clock"},sidebar:"docs",previous:{title:"Analog Clock",permalink:"/4.23/docs/development/ui-development/ui-components/miscellaneous/analog-clock"},next:{title:"Static Graph",permalink:"/4.23/docs/development/ui-development/ui-components/miscellaneous/static-graph"}},h={},k=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Time",id:"time",level:3},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],f={toc:k},v="wrapper";function w(e){var{components:t}=e,n=p(e,["components"]);return(0,i.kt)(v,c({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Digital Clock in TouchGFX is a widget that allows an application to display time with digital text, as opposed to the ",(0,i.kt)("a",c({parentName:"p"},{href:"analog-clock"}),"AnalogClock")," which displays time using analog clock hands."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-appearance.webp",mdxType:"Figure"},"Digital Clock running in the simulator (sped up footage)"),(0,i.kt)("h2",c({},{id:"widget-group"}),"Widget Group"),(0,i.kt)("p",null,"The Digital Clock can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-group-v4.17.webp",mdxType:"Figure"},"Digital Clock in TouchGFX Designer"),(0,i.kt)("h2",c({},{id:"properties"}),"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"Property Group")),(0,i.kt)("th",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Name")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,i.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Location")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"X")," and ",(0,i.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"W")," and ",(0,i.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,i.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Time")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Use Am/Pm")," specifies if time should be in 12h or 24h format.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Display Leading Zero for Hours")," specifies if leading zero for hours should be enabled.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Display Seconds")," specifies if showing seconds is enabled.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Initial Time")," specifies the initial time the clock shows.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Text")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"ID")," specifies the text that is used. ",(0,i.kt)("em",{parentName:"td"},"If the widget uses an auto-generated text, the ID will display 'Auto-generated'"),".",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("em",{parentName:"td"},"Translation")," specifies the content of the text to be displayed. ",(0,i.kt)("em",{parentName:"td"},"Text must have a wildcard to function properly."),(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("em",{parentName:"td"},"Typography")," specifies the format of the text.",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("em",{parentName:"td"},"Alignment")," specifies the horizontal alignment of the text.",(0,i.kt)("br",null),(0,i.kt)("br",null)," For more details on text configuration, refer to the ",(0,i.kt)("a",c({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"Using texts and fonts")," section.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Appearance")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Text Color")," specifies the color of the text in the Digital Clock.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Mixins")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,i.kt)("em",{parentName:"td"},"Alpha")," value.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,i.kt)("em",{parentName:"td"},"X")," and ",(0,i.kt)("em",{parentName:"td"},"Y")," values.")))),(0,i.kt)("h3",c({},{id:"time"}),"Time"),(0,i.kt)("p",null,"The Time property group is used to adjust how time is displayed in the application by changing different properties. You can choose to use 24-hour time or 12-hour AM/PM by toggling ",(0,i.kt)("em",{parentName:"p"},"Use Am/Pm"),". Toggling ",(0,i.kt)("em",{parentName:"p"},"Display Leading Zero for Hours")," specifies how hours below 10 are displayed (e.g. 09:10:00 or 9:10:00) and ",(0,i.kt)("em",{parentName:"p"},"Display Seconds")," toggles the display of seconds on/off (e.g. 9:10:00 or 9:10)."),(0,i.kt)("p",null,"Choosing Am/Pm also results in a slight code generation change. Instead of using the following function in Analog Clock to initialize the time:",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,i.kt)("p",null,"The following function is used when using 12-hour notation:",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,i.kt)("p",null,"To update the time which the clock displays, one of the following functions can be used.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,i.kt)("h2",c({},{id:"interactions"}),"Interactions"),(0,i.kt)("p",null,"The actions and triggers supported by the Digital Clock are described in the following sections."),(0,i.kt)("h3",c({},{id:"actions"}),"Actions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"Standard widget action")),(0,i.kt)("th",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Move widget")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Fade widget")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Hide widget")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Show widget")),(0,i.kt)("td",c({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,i.kt)("h3",c({},{id:"triggers"}),"Triggers"),(0,i.kt)("p",null,"A Digital Clock does not emit any triggers."),(0,i.kt)("h2",c({},{id:"performance"}),"Performance"),(0,i.kt)("p",null,"A Digital Clock consists of a ",(0,i.kt)("a",c({parentName:"p"},{href:"text-area"}),"TextArea"),", which does not impact performance in any meaningful way. Therefore, a Digital Clock is considered a fast performing widget on most platforms."),(0,i.kt)("p",null,"For more details on drawing performance, read the ",(0,i.kt)("a",c({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,i.kt)("h2",c({},{id:"examples"}),"Examples"),(0,i.kt)("h3",c({},{id:"generated-code"}),"Generated Code"),(0,i.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up the Digital Clock."),(0,i.kt)(d.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n\nmainViewBase::mainViewBase()\n{\n    digitalClock.setPosition(75, 88, 331, 97);\n    digitalClock.setColor(touchgfx::Color::getColorFromRGB(0, 30, 65));\n    digitalClock.setTypedText(touchgfx::TypedText(T_SINGLEUSEID2));\n    digitalClock.displayLeadingZeroForHourIndicator(true);\n    digitalClock.setDisplayMode(touchgfx::DigitalClock::DISPLAY_24_HOUR);\n    digitalClock.setTime24Hour(7, 7, 0);\n\n    add(digitalClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,i.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the DigitalClock class in user code. Remember to force a redraw by calling ",(0,i.kt)(o.Z,{mdxType:"InlineCode"},"digitalClock.invalidate()")," if you change the appearance of the widget."),(0,i.kt)("h3",c({},{id:"user-code"}),"User Code"),(0,i.kt)("p",null,"The following example shows how to set up the clock to start."),(0,i.kt)(d.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int digitalHours;\n    int digitalMinutes;\n    int digitalSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,i.kt)(d.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    digitalHours = digitalClock.getCurrentHour();\n    digitalMinutes = digitalClock.getCurrentMinute();\n    digitalSeconds = digitalClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++digitalSeconds >= 60)\n        {\n            digitalSeconds = 0;\n            if (++digitalMinutes >= 60)\n            {\n                digitalMinutes = 0;\n                if (++digitalHours >= 24)\n                {\n                    digitalHours = 0;\n                }\n            }\n        }\n\n        // Update the clock\n        digitalClock.setTime24Hour(digitalHours, digitalMinutes, digitalSeconds);\n    }\n}\n")),(0,i.kt)("h3",c({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,i.kt)("p",null,"To further explore the Digital Clock, try creating a new application within TouchGFX Designer with the following Example:"),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.webp",mdxType:"Figure"},"Clock Example in TouchGFX Designer"),(0,i.kt)("h2",c({},{id:"api-reference"}),"API Reference"),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_digital_clock",mdxType:"Link"},"API reference for the DigitalClock class"))))}w.isMDXComponent=!0}}]);