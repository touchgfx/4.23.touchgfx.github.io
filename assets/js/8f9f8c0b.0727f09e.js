"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[56384],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12822:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496),r=n(32118);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children))}},39559:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496),r=n(32118);const o=function(e){const t=(0,r.Z)(e.url);var n;const o=null!==(n=e.width)&&void 0!==n?n:"100%";var i;const l=null!==(i=e.height)&&void 0!==i?i:"100%";return a.createElement("div",{className:"loop-video"},a.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:o,height:l},a.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),a.createElement("p",null,e.children))}},60410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>c});n(59496);var a=n(49613),r=n(12822),o=n(39559);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG"},p=void 0,m={unversionedId:"development/scenarios/touchgfx-on-gpu2d",id:"development/scenarios/touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG",description:"This section discusses how to use TouchGFX on hardware having the NeoChrom",source:"@site/docs/development/scenarios/touchgfx-on-gpu2d.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-gpu2d",permalink:"/4.23/docs/development/scenarios/touchgfx-on-gpu2d",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-on-gpu2d",title:"TouchGFX on NeoChrom/NeoChromVG"},sidebar:"docs",previous:{title:"TouchGFX on Low Cost Hardware",permalink:"/4.23/docs/development/scenarios/touchgfx-on-lowcost-hardware"},next:{title:"Lowering Memory Usage with Partial Framebuffer",permalink:"/4.23/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"}},h={},c=[{value:"NeoChrom and NeoChromVG",id:"neochrom-and-neochromvg",level:3},{value:"NeoChrom Graphical Capabilities",id:"neochrom-graphical-capabilities",level:2},{value:"Vector Graphics",id:"vector-graphics",level:3},{value:"Rendering Time Improvements with NeoChrom.",id:"rendering-time-improvements-with-neochrom",level:2},{value:"Rendering Time Summary",id:"rendering-time-summary",level:3},{value:"Richer User Interfaces",id:"richer-user-interfaces",level:3},{value:"Accelerated Vector Graphics",id:"accelerated-vector-graphics",level:2},{value:"Coordinate limitations",id:"coordinate-limitations",level:3},{value:"Creating a project",id:"creating-a-project",level:2},{value:"Supported IDEs",id:"supported-ides",level:2},{value:"Framebuffer Formats",id:"framebuffer-formats",level:2},{value:"NeoChrom Limitations",id:"neochrom-limitations",level:2}],u={toc:c},d="wrapper";function g(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(d,i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section discusses how to use TouchGFX on hardware having the NeoChrom\ngraphics accelerator. This graphics accelerator improves the\nperformance significantly for operations like texture mapping, image scaling and rotation. This\nmeans that more advanced UIs can be built while still keeping a high\nframe rate."),(0,a.kt)("p",null,"The NeoChrom graphics accelerator is currently only available in the\nSTM32U5x9 microcontrollers as found on e.g. STM32U599 Discovery Kit."),(0,a.kt)(r.Z,{width:"30%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/stm32u599-dk-bsd-menu.webp",mdxType:"Figure"},"STM32U599 Discovery Board"),(0,a.kt)("p",null,"The NeoChrom accelerator is also known by the name GPU2D in source code and in CubeMX."),(0,a.kt)("h3",i({},{id:"neochrom-and-neochromvg"}),"NeoChrom and NeoChromVG"),(0,a.kt)("p",null,"The NeoChrom accelerator has been updated with extra capabilities with\nthe introduction of STM32U5G9. The improved accelerator is named\nNeoChromVG. The accelerator contains extended capabilities that\nallows hardware accelerated vector graphics."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Micro controller")),(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Accelerator")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"STM32U599"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"NeoChrom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"STM32U5A9"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"NeoChrom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"STM32U5F9"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"NeoChromVG")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"STM32U5G9"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"NeoChromVG")))),(0,a.kt)("h2",i({},{id:"neochrom-graphical-capabilities"}),"NeoChrom Graphical Capabilities"),(0,a.kt)("p",null,"The NeoChrom accelerators are capable of performing basic blitting (drawing images),\nblending, scaling, rotation, and texture mapping. All such operations\nare automatically used by TouchGFX when running on a microcontroller\nwith NeoChrom."),(0,a.kt)("p",null,"Compared to the DMA2D graphics accelerator NeoChrom is capable of accelerating\nmore graphical operations and has a richer feature set:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Graphic feature")),(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"DMA2D")),(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"GPU2D")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Supported formats (with TouchGFX)"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"ARGB8888, RGB888, RGB565, A8, A4, L8"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"ARGB8888, RGB888, RGB565, A8, A4, A2, A1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Command list based"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Drawing"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Rectangles"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Rectangles, Pixels, Line, Triangle, Quadrilaterals with  multi-sample anti-aliasing (MSAA)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Blitting"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Copy, alpha blending, pixel format conversion"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Copy, alpha blending, pixel format conversion, color keying")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Texture Mapping"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Vector Graphics"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No*")))),(0,a.kt)("p",null,"*"," Hardware accelerated Vector Graphics is available with NeoChromVG."),(0,a.kt)("p",null,"With these capabilities available even more TouchGFX Widgets are\naccelerated with NeoChrom:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Widget")),(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"DMA2D")),(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"GPU2D")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Box, BoxWithBorder"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Image, AnimatedImage, TiledImage, SnapshotWidget"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Button, ButtonWithIcon, ButtonWithLabel, ToggleButton"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"RadioButton, RepeatButton"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"PixelDataWidget"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"TextArea, TextAreaWithWildcard, Keyboard"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Partly"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"ScalableImage"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"TextureMapper, AnimatedTextureMapper"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Circle, Line, Graph, Gauge"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"SVG"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"No*")))),(0,a.kt)("p",null,"*"," Hardware accelerated SVG is available with NeoChromVG."),(0,a.kt)("p",null,"The operations that are not hardware accelerated are software rendered\n(implying a higher CPU-load, and lower performance). As the table above\nshows, NeoChrom can accelerate widgets like ScalableImage and\nTextureMapper. This means that we can use those widgets to a greater\nextent while keeping a high performance."),(0,a.kt)("h3",i({},{id:"vector-graphics"}),"Vector Graphics"),(0,a.kt)("p",null,"The new NeoChromVG accelerator can accelerate vector graphics. This\ncapability is used when rendering SVG images with TouchGFX. An extra\nbuffer called the stencil buffer is required by the graphics\naccelerator. This buffer has the same dimension as the frame buffer,\nbut only 1 byte pr pixel."),(0,a.kt)("p",null,"Example, if your frame buffer is 480 x 480 in 24bpp, the stencil\nbuffer must be 480 * 480 = 230.400 bytes. It is important to allocate\nthe stencil buffer in fast SRAM for best performance."),(0,a.kt)("p",null,"The stencil buffer is allocated by the TouchGFX Generator. See\n",(0,a.kt)("a",i({parentName:"p"},{href:"../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features#vector-rendering"}),"this"),"\nguide."),(0,a.kt)("h2",i({},{id:"rendering-time-improvements-with-neochrom"}),"Rendering Time Improvements with NeoChrom."),(0,a.kt)("p",null,"The following examples illustrate the speed-up provided by NeoChrom over\nDMA2D and software rendering. We have created two projects with the\nDesigner. The first project shows an Image on a Box background. The\nsecond project shows a TextureMapper Widget on a Box background. The\nwidget is redrawn in every frame.  In both cases the bitmap is of size\n128x128, in ARGB8888 format, and stored in the internal flash. The framebuffer is in RGB565 format."),(0,a.kt)(r.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-image.webp",mdxType:"Figure"},"The Image project"),(0,a.kt)(r.Z,{width:"40%",imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/designer-texturemapper.webp",mdxType:"Figure"},"The TextureMapper project"),(0,a.kt)("p",null,"Both projects have been executed on a STM32F746 and a STM32U599 Discovery board."),(0,a.kt)("p",null,"We have measured the rendering times by connecting a GPIO to a logic analyzer:"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-image.webp",mdxType:"Figure"},"STM32F746 running the Image project"),(0,a.kt)("p",null,"The figure above shows the frame rate and rendering time when runninng\non the STM32F746. Channel 00 shows the VSYNC signal. We see that the\ndisplay runs with a frame interval of 16.9 ms (A1 to A2) corresponding\nto a frame rate of 59.2 Hz. Channel 01 shows the render time (high\nwhen rendering, B1 to B2). The time to render the Image is thus 1.3\nms. Image rendering is fast on the STM32F746."),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-f746-texturemapper.webp",mdxType:"Figure"},"STM32F746 running the TextureMapper project"),(0,a.kt)("p",null,"The figure above is the texture mapper project running on the STM32F746. The\nrendering time of the TextureMapper is 4.5 ms. The TextureMapper\nwidget is much slower than the Image."),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u599-image.webp",mdxType:"Figure"},"STM32U599 running the Image project"),(0,a.kt)("p",null,"Here is the STM32U599 Discovery kit running the Image project. The\nSTM32U599 Discovery kit display has a display frame interval of 12.26\nms corresponding to a frame rate of 81.6 Hz. The render time of the\nImage is 0.7 ms. We see that the Image widget is faster than on the STM32F746 kit."),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/render-time-u599-texturemapper.webp",mdxType:"Figure"},"STM32U599 running the TextureMapper project"),(0,a.kt)("p",null,"The render time of the TextureMapper is 1.7 ms. The TextureMapper is\nalso faster on STM32U599 than on the STM32F746."),(0,a.kt)("h3",i({},{id:"rendering-time-summary"}),"Rendering Time Summary"),(0,a.kt)("p",null,"The table below shows the rendering times:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Element")),(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"STM32F746")),(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"STM32U599")),(0,a.kt)("th",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Speed up")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Frequency"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"200 MHz"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"160 MHz"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"0.8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Image"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"1.3 ms"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"0.7 ms"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"~2x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"TextureMapper"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"4.5 ms"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"1.7 ms"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"~3x")))),(0,a.kt)("p",null,"We see that even with a reduced clock frequency the STM32U599 greatly\noutperforms the STM32F746, especially with the TextureMapper."),(0,a.kt)("p",null,"These measurements are taken with the image in internal flash and the\nframebuffer in external SDRAM for STM32F746. The framebuffer is in\ninternal SRAM for the STM32U599 (as this will be typical\nscenario). Moving the image to external flash hurts the STM32F746 as\nit uses QSPI flash (4-bit bus), whereas the STM32U599 uses a faster\nOSPI flash (8-bit bus)."),(0,a.kt)("p",null,"The STM32F746 Discovery kit can run with a 480x272 RGB565 framebuffer\nin the internal RAM. This improves the performance (Image down to 1.03\nms), but it is not the standard configuration for STM32F746, as it\nuses a very large part of the internal SRAM for the frame buffer,\nleaving little RAM for other application components.",(0,a.kt)("br",{parentName:"p"}),"\n","Running with a single frame buffers is also not suitable for all\napplications."),(0,a.kt)("h3",i({},{id:"richer-user-interfaces"}),"Richer User Interfaces"),(0,a.kt)("p",null,"The improved rendering performance can be used to create user interfaces with\nmore advanced animations. For example more scaled or rotated\nelements.",(0,a.kt)("br",{parentName:"p"}),"\n","For the STM32F746, the frame refresh time was 16.8 ms. This means that\nthe application must keep the render time below this to keep a frame\nrate of 60 fps. We can therefore have at most 3.75 texture mappers of\nthat complexity (16.8 ms / 4.48 ms) on the screen, or a single larger\ntexture mapper of size 247 x 247 (the same number of pixels and\napproximately the same rendering time).",(0,a.kt)("br",{parentName:"p"}),"\n","If we assume the same screen refresh rate, but use the STM32U599 CPU,\nwe can have 14.36 texture mappers (16.8 ms / 1.17 ms), or a single\ntexture mapper of size 485 x 485."),(0,a.kt)("p",null,"The following figure shows two applications running on respectively\nthe STM32F746 and the STM32U599. The idea is to make a carousel-like\nmenu where elements are scaled up when going to the center and scaled\ndown when going out (here we just use the same texture for all the\nelements)."),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/comparison-f746-u599.webp",mdxType:"Figure"},"STM32F746 (left) and STM32U599 (right) running the texture mapper based carousel project"),(0,a.kt)("p",null,"The STM32F746 is capable of showing three icons, one big icon, scaled up by a\nfactor of 1.9, and two smaller icons. The STM32U599 is capable of\nshowing 7 icons. The largest icon is scaled up by factor 2.7."),(0,a.kt)("p",null,"The rendering time of the application with 3 icons on the STM32F746 is\n14.38 ms. The rendering time of the application with 7 icons on the\nSTM32U599 is 14.93 ms. Both UIs can thus run in 60 fps, with the\nSTM32U599 showing much more content in a higher resolution."),(0,a.kt)("h2",i({},{id:"accelerated-vector-graphics"}),"Accelerated Vector Graphics"),(0,a.kt)("p",null,"The new NeoChromVG accelerator is capable of accelerating vector\ngraphics. This open the possibilities of a new class of applications,\nwhere vector based graphics plays a central role and not bitmaps."),(0,a.kt)("p",null,"One example is a map-application. Maps can be built from bitmaps, but\nthat often requires a very large storage or that specific map sections\nare downloaded in advance."),(0,a.kt)("p",null,"The video below shows a demonstration application running on a\nSTM32U5F9. The application zooms, rotates, and pans a map that is\ndrawn from a vector definition (multiple polygons that are filled with\ndifferent colors and stroked). The video is running full screen on a\n800 x 480 display with 16bpp colors."),(0,a.kt)(o.Z,{width:"40%",height:"40%",url:"/videos/development/scenarios/touchgfx-on-gpu2d/tigermap.mp4",mdxType:"LoopVideo"},"STM32U5F9 showing a moving map."),(0,a.kt)("h3",i({},{id:"coordinate-limitations"}),"Coordinate limitations"),(0,a.kt)("p",null,"Vector graphics with coordinates above 1024 are by default discarded\non NeoChrom and NeoChrom. See ",(0,a.kt)("a",i({parentName:"p"},{href:"../../miscellaneous/known-issues#svg-drawing-on-stm32-with-neochrom"}),"here")," for a work-around. Note, this happens both when an SVG image is scaled up or if the SVG contains large coordinates in itself."),(0,a.kt)("h2",i({},{id:"creating-a-project"}),"Creating a project"),(0,a.kt)("p",null,"CubeMX and the TouchGFX Generator supports the NeoChrom. In CubeMX the\naccelerator is known by its code name GPU2D. The GPU2D accelerator is\nonly available to TouchGFX if GPU2D is enabled in the TouchGFX\nconfiguration in CubeMX.",(0,a.kt)("br",{parentName:"p"}),"\n","If you use the STM32U599 TBS (template project) provided with the\nTouchGFX Designer this is already done. If you make your own custom\nproject, make sure to enable the GPU2D Accelerator as shown below:"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/cubemx-u599-configuration.webp",mdxType:"Figure"},"Enabling GPU2D (NeoChrom) in CubeMX"),(0,a.kt)("p",null,'After enabling GPU2D press "Generate Code" in CubeMX. This regenerates\nthe target configuration code. Now open the project in the TouchGFX\nDesigner and generate code there also (F4).'),(0,a.kt)("p",null,"The Designer generates assets (images, fonts, and texts) and simulator\ncode, that matches the target configuration. You are now ready to\ncompile the code with IAR."),(0,a.kt)("p",null,"If you are starting a project from the Designer there is no need to\nopen CubeMX unless you need to change some hardware settings."),(0,a.kt)("h2",i({},{id:"supported-ides"}),"Supported IDEs"),(0,a.kt)("p",null,"The STM32U599 TBS (version 3.0.0) is currently only supported with IAR\nWorkbench."),(0,a.kt)("p",null,"A recent version of IAR is required (8.5x.x). Make sure that the\nprocessor variant (STM32U599NJ for the Discovery board) is supported\nby checking the General Options:"),(0,a.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-gpu2d/iar-configuration.webp",mdxType:"Figure"},"IAR General Options"),(0,a.kt)("h2",i({},{id:"framebuffer-formats"}),"Framebuffer Formats"),(0,a.kt)("p",null,"The STM32U599 discovery board supports three framebuffer formats:\nRGB565, RGB888, ARGB8888. These are configurable from CubeMX."),(0,a.kt)("h2",i({},{id:"neochrom-limitations"}),"NeoChrom Limitations"),(0,a.kt)("p",null,"The NeoChrom graphics accelerator in STM32U599 does not support the L8\nimage formats (L8_RGB565, L8_RGB888, L8_ARGB8888).",(0,a.kt)("br",{parentName:"p"}),"\n","If you use these image formats in a TouchGFX application running on\nSTM32U599 the images will be drawn using DMA2D. If you use these\nformats with ScalableImage or TextureMapper a software fallback will\nbe used."),(0,a.kt)("p",null,"It is therefore recommended to not use L8 images with STM32U599."))}g.isMDXComponent=!0}}]);