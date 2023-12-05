"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[79647],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),h=s(n),p=a,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[h]="string"==typeof e?e:a,r[1]=d;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86473:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(59496),a=n(89588);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class r extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}const d=r},61235:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496);class a extends o.Component{render(){return o.createElement("div",{className:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}const i=a},12822:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496),a=n(32118);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,r=(0,a.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:n,height:i,src:r})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:n,height:i,src:r})),o.createElement("p",null,e.children))}},86222:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(59496),a=n(89588);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const d=r},89588:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496);class a extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}const i=a},40465:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496);class a extends o.Component{render(){return o.createElement("code",null,this.props.children)}}const i=a},71678:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(59496),a=n(89588);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class r extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const d=r},53647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>R,frontMatter:()=>y,metadata:()=>k,toc:()=>x});var o=n(59496),a=n(49613),i=n(12822),r=n(86473),d=n(71678),l=n(89588);const s=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class c extends o.Component{render(){return o.createElement(l.Z,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:s},this.props.children)}}const h=c;var u=n(86222),p=n(40465),g=n(51721),m=n(61235);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const y={id:"custom-widgets",title:"Custom Widgets"},v=void 0,k={unversionedId:"development/ui-development/touchgfx-engine-features/custom-widgets",id:"development/ui-development/touchgfx-engine-features/custom-widgets",title:"Custom Widgets",description:"When creating applications you may need widgets that are not part of the TouchGFX distribution.",source:"@site/docs/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-widgets",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/custom-widgets",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-widgets",title:"Custom Widgets"},sidebar:"docs",previous:{title:"Caching Bitmaps",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"},next:{title:"Canvas Widgets",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"}},b={},x=[{value:"When to use the custom widget approach",id:"when-to-use-the-custom-widget-approach",level:2},{value:"In TouchGFX Designer",id:"in-touchgfx-designer",level:2},{value:"In code",id:"in-code",level:2},{value:"Your own custom widget",id:"your-own-custom-widget",level:3},{value:"Partial drawing",id:"partial-drawing",level:3},{value:"Solid area",id:"solid-area",level:3},{value:"Example source code",id:"example-source-code",level:3},{value:"Modifying standard widgets/containers",id:"modifying-standard-widgetscontainers",level:2}],T={toc:x},C="wrapper";function R(e){var{components:t}=e,n=f(e,["components"]);return(0,a.kt)(C,w({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When creating applications you may need widgets that are not part of the TouchGFX distribution.\nTouchGFX\xa0have a few ways in which you can create your own graphical elements. The simplest way is to use\xa0the ",(0,a.kt)("a",w({parentName:"p"},{href:"custom-containers"}),"Custom Container approach"),", where you combine already existing widgets into your own. This article, however, deals with a more advanced approach where you can essentially create a widget that has full control of the framebuffer and thus is able to draw precisely what you want."),(0,a.kt)("h2",w({},{id:"when-to-use-the-custom-widget-approach"}),"When to use the custom widget approach"),(0,a.kt)("p",null,"Creating custom widgets is not the most typical way to create your own widget. The custom container approach is preferable if it suits your needs, but sometimes this approach is not enough. When you need full control of the framebuffer you need to\xa0use the custom widget approach."),(0,a.kt)("p",null,"A few examples of widgets that could and should be created using the custom widget approach are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A sepia filter"),(0,a.kt)("li",{parentName:"ul"},"A mandelbrot fractal widget"),(0,a.kt)("li",{parentName:"ul"},"A widget that shows data from a file, for example a gif animation.")),(0,a.kt)("h2",w({},{id:"in-touchgfx-designer"}),"In TouchGFX Designer"),(0,a.kt)("p",null,"TouchGFX Designer does not currently support the creation of custom widgets. As a result, you will need to write the code for the custom widget manually (refer to the remainder of this article on how to\xa0do this) and then insert the widget in the user code portion of your View."),(0,a.kt)("h2",w({},{id:"in-code"}),"In code"),(0,a.kt)("p",null,"You\xa0create your own custom widget by extending the ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget")," class. Doing this requires\xa0a bit more effort on the user's side, but will also give full control of all pixels drawn by the widget.\nYour custom widget will not necessarily utilize any existing widgets but instead define how it should be drawn by specifying colors of pixels. The custom widget approach will in general also have a smaller memory footprint, which in some cases is of great importance."),(0,a.kt)("p",null,"One example of a custom widget is a QR code widget. This particular widget makes for a good example, so we will walk through how to create it in the following section. In this example, a QR code widget is an NxN\xa0matrix of black and white pixels. The size of the widget and the color of each pixel will be determined at run time and depend on the information in a QR\xa0code data object."),(0,a.kt)("p",null,"Here are two examples of how a QR\xa0code widget might look:"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-examples.webp",noShadow:!0,mdxType:"Figure"},"QR code widget examples"),(0,a.kt)(r.Z,{mdxType:"Caution"},"It is possible to create the qr code widget with the custom container approach by having n*n black or white boxes as children of the container. However, this will take up a lot of memory, and will probably not be as efficient or flexible."),(0,a.kt)(d.Z,{mdxType:"Tip"},"The standard ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"touchgfx::Button")," (supplied with the framework) is created as a custom widget, not a custom container. This saves memory per button on your screen."),(0,a.kt)("h3",w({},{id:"your-own-custom-widget"}),"Your own custom widget"),(0,a.kt)("p",null,"In order to create your widget that extends the ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget")," class, you need to describe two things."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The way your widget is drawn"),(0,a.kt)("li",{parentName:"ul"},"The part of your widget that is solid")),(0,a.kt)("h3",w({},{id:"partial-drawing"}),"Partial drawing"),(0,a.kt)("p",null,"Any widget, and therefore also your custom widget, needs to support partial drawing. This means that your widget should be able to draw only a part of itself."),(0,a.kt)("p",null,"This is due to two points. It is often not necessary to redraw the entire screen but only parts of it. The algorithms of TouchGFX might split up the drawing of a screen into multiple partial drawings to minimize the global number of pixels drawn. This partial drawing of a screen, might then ask a widget to only draw itself partially."),(0,a.kt)("p",null,"As an example our QR code widget needs to be able to support drawing only the highlighted part of itself."),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.webp",noShadow:!0,mdxType:"Figure"},"QR code widget partial drawing"),(0,a.kt)("p",null,"The way to do this in your code is by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"draw")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"virtual void draw(const touchgfx::Rect& invalidatedArea) const\n{\n    //run through the pixels of the invalidated area\n    //draw a black pixel if the qr data object has a value at this position\n    //draw a white pixel otherwise\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"invalidatedArea")," is the part of the widget that needs to be updated. In our QR code example the invalidated area is the highlighted area. The area is expressed in coordinates relative to the top left corner of the widget."),(0,a.kt)(r.Z,{mdxType:"Caution"},"It is the responsibility of the widget to draw inside the invalidated area. If you draw outside the invalidated area you will not get overall correct behaviour of your screens."),(0,a.kt)(d.Z,{mdxType:"Tip"},"The ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"draw")," method is ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"const")," because the optimized drawing algorithm might split up the drawing of a widget into multiple calls to draw. The ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"const")," assures that the widget is not moved, updated etc. in between these multiple ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"draw")," executions."),(0,a.kt)("h3",w({},{id:"solid-area"}),"Solid area"),(0,a.kt)("p",null,"Furthermore, a widget needs to be able to report how large a portion of itself is solid. Solid means that you can not see the things that are behind it on the screen. For instance, a standard red box is completely solid, whereas an image with an alpha value of 50% is completely non solid; you can see everything behind it."),(0,a.kt)("p",null,"A solid widget will enable TouchGFX to speed up the drawing process. Since we do not have to draw the widgets below the solid widget, fewer pixels have to be drawn."),(0,a.kt)("p",null,"To report the solid area in your code, override the ",(0,a.kt)("inlineCode",{parentName:"p"},"getSolidRect")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const;\n")),(0,a.kt)("p",null,"Our QR code widget will be completely solid. You will not be able to see anything behind the black and white pixels. Therefore, we let the method return a rectangle the full size of the widget:"),(0,a.kt)("pre",null,(0,a.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n")),(0,a.kt)("h3",w({},{id:"example-source-code"}),"Example source code"),(0,a.kt)("p",null,"We end up with an application and a widget looking like this - depending on the data supplied:"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-screenshot.webp",noShadow:!0,mdxType:"Figure"},"QR code widget screenshot"),(0,a.kt)("p",null,"The complete code of the widget is shown below:"),(0,a.kt)(m.Z,{mdxType:"CodeHeader"},"gui/include/gui/common/QRCodeWidget.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"\n#ifndef QR_CODE_WIDGET_HPP\n#define QR_CODE_WIDGET_HPP\n\n#include <touchgfx/widgets/Widget.hpp>\n\nclass QRCodeWidget : public touchgfx::Widget\n{\npublic:\n    QRCodeWidget();\n\n    virtual void draw(const touchgfx::Rect& invalidatedArea) const;\n    virtual touchgfx::Rect getSolidRect() const;\n\n    void setQRCodeData(QRCodeData* data);\n    void setScale(uint8_t s);\n\nprivate:\n    void updateSize();\n\n    QRCodeData* data;\n    uint8_t scale;\n};\n#endif\n")),(0,a.kt)("p",null,"In the header file, we define the widget as an extension of the ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::Widget")," class. We override the ",(0,a.kt)("inlineCode",{parentName:"p"},"draw")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getSolidRect")," methods to define how our widget is drawn.\nWe declare methods for setting the data of the QR code and setting the scaling factor of the QR code."),(0,a.kt)(m.Z,{mdxType:"CodeHeader"},"gui/src/common/QRCodeWidget.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/QRCodeWidget.hpp>\n\nQRCodeWidget::QRCodeWidget() :\n    data(0),\n    scale(1)\n{\n}\n\nvoid QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const\n{\n    if (!data)\n    {\n        return;\n    }\n\n    touchgfx::Rect absolute = getAbsoluteRect();\n\n    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();\n\n    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)\n    {\n        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)\n        {\n            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::FRAME_BUFFER_WIDTH] =\n              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;\n        }\n    }\n\n    touchgfx::HAL::getInstance()->unlockFrameBuffer();\n}\n\ntouchgfx::Rect QRCodeWidget::getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n\nvoid QRCodeWidget::setQRCodeData(QRCodeData* qrCode)\n{\n    data = qrCode;\n    updateSize();\n}\n\nvoid QRCodeWidget::setScale(uint8_t s)\n{\n    scale = s;\n    updateSize();\n}\n\nvoid QRCodeWidget::updateSize()\n{\n    if (data)\n    {\n        setWidth(data->getSize() * scale);\n        setHeight(data->getSize() * scale);\n    }\n}\n")),(0,a.kt)("p",null,"The source file defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"draw")," method. This method steps through each of the pixels in the invalidated area and determines the color of the framebuffer based on the contents of the data object and the scaling factor."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"getSolidRect")," method reports the widget as completely solid."),(0,a.kt)(r.Z,{mdxType:"Caution"},"Note that we locked and unlocked the framebuffer as part of our ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"draw")," method. This is to make sure that the DMA is done drawing when we start drawing."),(0,a.kt)("p",null,"The code also uses a small class/interface to access the data of the QR code:"),(0,a.kt)("pre",null,(0,a.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"class QRCodeData\n{\npublic:\n    uint8_t getSize();\n    bool at(uint8_t x, uint8_t y);\n};\n")),(0,a.kt)(u.Z,{mdxType:"FurtherReading"},"Download and check out the ",(0,a.kt)(g.Z,{to:"/download/widgets/qr-code.zip",target:"_blank",mdxType:"Link"},"QRCode")," and ",(0,a.kt)(g.Z,{to:"/download/widgets/lens.zip",target:"_blank",mdxType:"Link"},"Lens")," widgets."),(0,a.kt)(h,{mdxType:"Try"},(0,a.kt)("li",null,"Modify the QR code widget such that white pixels are completely transparent."),(0,a.kt)("li",null,"Create a custom widget that displays a sepia filter, a mandelbrot fractal, a gif image or something else."),(0,a.kt)("li",null,"Consider which widgets are most easily done using custom containers and which widgets are most easily realized using the custom widget approach.")),(0,a.kt)("h2",w({},{id:"modifying-standard-widgetscontainers"}),"Modifying standard widgets/containers"),(0,a.kt)("p",null,"The source code for the standard widgets are included when installing TouchGFX. These can also be modified to fit with the needs of an application. The source code for the standard widgets and containers is located in the folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",w({parentName:"pre"},{}),"Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets\n")),(0,a.kt)("p",null,"In order to maintain backwards compatibility, the core library contains compiled versions of the standard widgets and containers. It is therefore not necessary to compile these files in your project."),(0,a.kt)(r.Z,{mdxType:"Caution"},"Modifying the standard widgets/containers directly is discouraged"),(0,a.kt)("p",null,"The source code is primarily intended as inspiration and a way to learn about the inner workings of TouchGFX widgets. If you want something to behave differently than the standard implementation, it is possible to achieve this by either subclassing or creating custom containers, which is also the\nrecommended approach."),(0,a.kt)("p",null,"The reason for this recommendation is two-fold:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, you will make it more difficult to upgrade to newer TouchGFX versions, since you must manually merge any changes you did."),(0,a.kt)("li",{parentName:"ul"},"Second, you risk breaking the standard widgets and containers that are dependent on specific behavior.")),(0,a.kt)("p",null,"Therefore, if it is necessary to modify a standard widget/container, we recommend you take a copy of it, rename it and use that instead of directly modifying the source code."),(0,a.kt)("p",null,"That being said, you are free to do whatever you judge is right. If you add the source code for a standard widget into your project, your linker will choose this version instead of the one in the core library. As a result, you have access to modification of the standard widgets by adding the source code to your compilation."))}R.isMDXComponent=!0}}]);