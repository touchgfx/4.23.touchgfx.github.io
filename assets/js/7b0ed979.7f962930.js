"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[72695],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),h=l(n),p=o,f=h["".concat(s,".").concat(p)]||h[p]||u[p]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[h]="string"==typeof e?e:o,r[1]=d;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86473:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(59496),o=n(89588);const a=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class r extends i.Component{render(){return i.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}const d=r},61235:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(59496);class o extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}const a=o},12822:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(59496),o=n(32118);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,r=(0,o.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:n,height:a,src:r})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:n,height:a,src:r})),i.createElement("p",null,e.children))}},89588:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(59496);class o extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},39331:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(59496),o=n(89588);const a=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class r extends i.Component{render(){return i.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}const d=r},66590:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(59496);class o extends i.Component{render(){return i.createElement("code",{className:"shortcut"},this.props.children)}}const a=o},36037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>p,toc:()=>m});n(59496);var i=n(49613),o=n(61235),a=n(12822),r=n(39331),d=n(66590),s=n(86473);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const h={id:"video",title:"MJPEG Video"},u=void 0,p={unversionedId:"development/ui-development/touchgfx-engine-features/video",id:"development/ui-development/touchgfx-engine-features/video",title:"MJPEG Video",description:"TouchGFX supports using MJPEG video starting from version 4.18. Video",source:"@site/docs/development/ui-development/touchgfx-engine-features/video.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/video",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/video",draft:!1,tags:[],version:"current",frontMatter:{id:"video",title:"MJPEG Video"},sidebar:"docs",previous:{title:"Languages and Characters",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"},next:{title:"SVG",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/svg"}},f={},m=[{value:"MJPEG video",id:"mjpeg-video",level:2},{value:"Using Video with TouchGFX",id:"using-video-with-touchgfx",level:2},{value:"Video files in a TouchGFX project",id:"video-files-in-a-touchgfx-project",level:3},{value:"Using video files from user code",id:"using-video-files-from-user-code",level:3},{value:"Limitations",id:"limitations",level:3},{value:"List of video enabled development kits",id:"list-of-video-enabled-development-kits",level:2},{value:"Creating MJPEG AVI files",id:"creating-mjpeg-avi-files",level:2},{value:"Using FFMPEG",id:"using-ffmpeg",level:3},{value:"Decoding Strategies",id:"decoding-strategies",level:2},{value:"Direct To Frame Buffer",id:"direct-to-frame-buffer",level:3},{value:"Dedicated Buffer",id:"dedicated-buffer",level:3},{value:"Double Buffer",id:"double-buffer",level:3},{value:"Video frame rate and user interface frame rate",id:"video-frame-rate-and-user-interface-frame-rate",level:3},{value:"Related articles",id:"related-articles",level:2}],g={toc:m},v="wrapper";function b(e){var{components:t}=e,n=c(e,["components"]);return(0,i.kt)(v,l({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TouchGFX supports using MJPEG video starting from version 4.18. Video\ncan be used to create more alive user interfaces or to show short\ninstructions or user guides."),(0,i.kt)("p",null,"Video is included in the user interface through the ",(0,i.kt)("a",l({parentName:"p"},{href:"../ui-components/miscellaneous/video"}),"Video Widget"),". This\nwidget is available in the TouchGFX Designer and can be added to the\nuser interface as any other widget."),(0,i.kt)(r.Z,{mdxType:"Note"},"Audio is not supported. It is therefore recommended to remove audio data from the video data."),(0,i.kt)(a.Z,{width:"60%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/designer-1.webp",mdxType:"Figure"},"Using the Video widget in TouchGFX Designer"),(0,i.kt)("p",null,"Extra support software is required to decode the video on a STM32\nmicrocontroller. This software is easily included in the project by\nenabling video support in the ",(0,i.kt)("a",l({parentName:"p"},{href:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"}),"TouchGFX Generator"),". With a TouchGFX\nBoard Setup where video is enabled (see list below) it is easy to run\nthe video on the target by pressing Run Target (",(0,i.kt)(d.Z,{mdxType:"Shortcut"},"F6"),") as normal."),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/stm32f746-1.webp",mdxType:"Figure"},"Using the Video widget with STM32F746Discovery"),(0,i.kt)("p",null,"If you don't have video support in your target code, you will get\ncompile or linker errors."),(0,i.kt)("h2",l({},{id:"mjpeg-video"}),"MJPEG video"),(0,i.kt)("p",null,"MJPEG videos consists of a large number of JPEG images (frames) packed\nin a container file (.avi). The JPEG frames cannot be copied directly\nto the framebuffer as they are compressed. The individual frames must\nbe decompressed into RGB format (16, 24 or 32 bit) before they\ncan be shown on the display."),(0,i.kt)("p",null,"This decompression is computationally expensive and lowers the\nperformance (i.e. frames per second) considerably compared to using\nRGB bitmaps."),(0,i.kt)("p",null,"The advantage of the JPEG compression is the much reduced size of the\ndata."),(0,i.kt)("p",null,"The video used in the above screenshots is 240 x 135 pixel. This means\nthat each frame in 16-bit RGB format would take up 240 x 135 x 2 bytes\n= 64.800 bytes. The video contains 178 frames (approximately seven\nseconds). The total size of the video stored as bitmap would thus be\n178 x 64.800 bytes = 11.534.400 bytes. The MJPEG AVI file is only\n1.242.282 bytes or 10.7 % of the bitmaps."),(0,i.kt)("p",null,"This size reduction makes MJPEG video files very usefull for small\nsequences of video."),(0,i.kt)("p",null,"The reduced size comes with some compression artifacts (errors). These\nare often acceptable for real-world footage but can be unacceptable\nfor high contrast graphics."),(0,i.kt)("p",null,"Some STM32 microcontrollers supports hardware accelerated decoding of\nJPEG images (e.g. STM32F769 or STM32H750). This speeds up the decoding\nof JPEG and increases the possible framerate of the video."),(0,i.kt)("p",null,"The decoding of a JPEG frame can easily take more than 16ms (depends\non the MCU speed and the video resolution). This means that the\ndecoding rate of a MJPEG video in most cases is lower than the normal\nframe rate of the user interface. For some applications it is\nacceptable to lower the overall frame rate to the decoding rate. For\nothers it is required to keep the 60 fps frame rate of the user\ninterface even if the video runs at e.g. 20 fps. An example is an\napplication with an animated progress circle next to a video. The\ncircle looks best if it is animated with 60 fps, even if the video\nonly shows a new frame at 20 fps."),(0,i.kt)("p",null,"The above example on STM32F746 uses 18-20 ms for decoding the\nindividual JPEG frames."),(0,i.kt)("h2",l({},{id:"using-video-with-touchgfx"}),"Using Video with TouchGFX"),(0,i.kt)("p",null,"TouchGFX makes it easy to include a video as part of your user\ninterface. You need three things: A Video widget, a VideoController,\nand of course your MJPEG video file."),(0,i.kt)("p",null,"The Video widget is used in your user interface as all other\nwidgets. The video controller is part of the low level software that makes up a\nfull TouchGFX environment (HAL, Operating System, drivers, etc.)"),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/video-sw-architecture.webp",mdxType:"Figure"},"Video widget and Video Controller"),(0,i.kt)("p",null,"The VideoController consists of software that controls the decoding of\nthe MJPEG file and buffer management."),(0,i.kt)("p",null,'The TouchGFX Designer automatically includes a video controller into\nall simulator projects. This makes it very easy to use video in\nsimulator prototypes: Just add a Video widget, select a video file, and\npress "Run Simulator" (',(0,i.kt)(d.Z,{mdxType:"Shortcut"},"F5"),")."),(0,i.kt)("p",null,"To use video on hardware you also need a video controller in the\ntarget project (IAR, Keil, arm-gcc, CubeIDE). This is already added to\nsome of the TouchGFX Board Specification packages (see list below),\nbut you can add video support any project with the\nTouchGFX Generator. See the ",(0,i.kt)("a",l({parentName:"p"},{href:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"}),"Generator User Guide"),"."),(0,i.kt)("p",null,"When you have a video enabled platform it is easy to add and configure\nthe Video widget in the Designer. The use of Video widget in the Designer is detailed ",(0,i.kt)("a",l({parentName:"p"},{href:"../ui-components/miscellaneous/video"}),"here"),"."),(0,i.kt)("h3",l({},{id:"video-files-in-a-touchgfx-project"}),"Video files in a TouchGFX project"),(0,i.kt)("p",null,"When you include a video file in TouchGFX Designer it copies the .avi\nfile to the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/vidoes")," folder. During code generation the video\nis copied to ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/videos/bin")," as a .bin file and to\n",(0,i.kt)("inlineCode",{parentName:"p"},"generated/videos/obj")," as a .o file. The .o and .bin contains the same\ndata, but the .o file is ELF format (which is preferred by some\ncompilers and IDE's)."),(0,i.kt)("p",null,"The project updaters that are executed when generating code includes\nthe video files in the target project. This means that the video files\nare linked into the executable and are available in the application."),(0,i.kt)("p",null,"The application programmer can add other videos to the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos"),"\nfolder. These will also be included in the project."),(0,i.kt)("p",null,"The file ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/videos/include/videos/VideoDatabase.hpp")," contains\nsymbolic information about the videos compiled into application:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{}),"const uint32_t video_SampleVideo1_240x135_bin_length = 1242282;\n#ifdef SIMULATOR\nextern const uint8_t* video_SampleVideo1_240x135_bin_start;\n#else\nextern const uint8_t video_SampleVideo1_240x135_bin_start[];\n#endif\n")),(0,i.kt)("p",null,"These declarations can be used to assign the video to a Video widget in\nuser code."),(0,i.kt)("h3",l({},{id:"using-video-files-from-user-code"}),"Using video files from user code"),(0,i.kt)("p",null,"In some projects it is not sufficient to select a video from within\nthe TouchGFX Designer. E.g. you want to select different videos at\nstartup. First you must add the video file to ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos"),":"),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/myvideo-in-assets.webp",mdxType:"Figure"},"Adding a video to assets/videos"),(0,i.kt)("p",null,"The video files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos")," folder will be included in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"VideoDatabase.hpp")," when you generate code (or run make assets):"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{}),"const uint32_t video_myVideo_bin_length = 1242282;\n#ifdef SIMULATOR\nextern const uint8_t* video_myVideo_bin_start;\n#else\nextern const uint8_t video_myVideo_bin_start[];\n#endif\n")),(0,i.kt)("p",null,"We can now use these declarations in user code to get the Video widget\nto play our movie:"),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,12-14}","{2-2,12-14}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <videos/VideoDatabase.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    video.setVideoData(video_myVideo_bin_start, video_myVideo_bin_length);\n    video.setWidthHeight(240, 136);\n    video.play();\n}\n")),(0,i.kt)("p",null,"Note that the video data is now linked into the application. It is\npossible to avoid this by not putting any videoes in ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos"),"\nand manually flash the video to a dedicated area in the external\nflash. Then just pass the address and length using the flash address:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::setupScreen()\n{\n   ...\n   video.setVideoData((const uint8_t*)0xA0200000, 1242282);\n   ...\n}\n")),(0,i.kt)("h3",l({},{id:"limitations"}),"Limitations"),(0,i.kt)("p",null,"TouchGFX does not support video decoding in portrait mode."),(0,i.kt)("h2",l({},{id:"list-of-video-enabled-development-kits"}),"List of video enabled development kits"),(0,i.kt)("p",null,"These development kits have video enabled by default in TouchGFX Board\nSetup package available in the TouchGFX Designer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"STM32F769Discovery (hardware accelerated decoding)"),(0,i.kt)("li",{parentName:"ul"},"STM32H750BDiscovery (hardware accelerated decoding)"),(0,i.kt)("li",{parentName:"ul"},"STM32U5F9Discovery (hardware accelerated decoding)"),(0,i.kt)("li",{parentName:"ul"},"STM32F746Discovery (software based decoding)")),(0,i.kt)("p",null,"If you are using another development kit or custom hardware, remember\nto enable video support in the TouchGFX Generator."),(0,i.kt)("h2",l({},{id:"creating-mjpeg-avi-files"}),"Creating MJPEG AVI files"),(0,i.kt)("p",null,"Most videos are not stored in MJPEG AVI files as this is not a common\nvideo format anymore. It is therefore often necessary to convert a\nvideo file to MJPEG format before using it in a TouchGFX project."),(0,i.kt)("p",null,"Conversion can easily be done with for example\n",(0,i.kt)("a",l({parentName:"p"},{href:"https://en.wikipedia.org/wiki/FFmpeg"}),"FFMPEG"),". Other\napplications and online services are also available."),(0,i.kt)("h3",l({},{id:"using-ffmpeg"}),"Using FFMPEG"),(0,i.kt)("p",null,"Windows binaries for FFMPEG can\nbe found ",(0,i.kt)("a",l({parentName:"p"},{href:"https://www.gyan.dev/ffmpeg/builds/"}),"here"),"."),(0,i.kt)("p",null,"To convert the video file input.mov to MJPEG use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{}),"ffmpeg -i input.mov -s 480x272 -vcodec mjpeg -qscale 1 -an output.avi\n")),(0,i.kt)("p",null,"The MJPEG video is in the output.avi file. This file can be copied to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/videos"),"."),(0,i.kt)("p",null,"To keep the correct aspect ratio of the video you can specify the\nwidth in pixels (here 480) and the height as '-1' (minus 1):"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{}),"ffmpeg -i input.mov -vf scale=480:-1 -vcodec mjpeg -qscale 1 -an output.avi\n")),(0,i.kt)("p",null,"It is possible to cut out a section of a video using -ss to specify\nstart time and -t or -to to specify duration or stop time:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{}),"ffmpeg -ss 3 -i input.mov -t 3 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{}),"ffmpeg -ss 3 -i input.mov -to 5 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",l({parentName:"tr"},{align:null}),"Option"),(0,i.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"-s"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Output video resolution")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"-qscale"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"quality scale from 1..31 (from good to bad)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"-an"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Strip audio")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"-vf"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Set filter graph")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"-ss"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Start time in seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"-t"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Duration in seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"-to"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Stop time in seconds")))),(0,i.kt)("h2",l({},{id:"decoding-strategies"}),"Decoding Strategies"),(0,i.kt)("p",null,"As mentioned above, TouchGFX needs to convert the individual MJPEG\nframes from JPEG to RGB before showing them on the framebuffer. This\ndecoding can be done either on-the-fly when needed or asynchronous by\ndecoding the next frame to a video buffer in advance."),(0,i.kt)("p",null,"The asynchronous decoding is done by second task, not the UI\ntask. This means that the decoding in some cases can run in\nparallel with the UI task's drawing."),(0,i.kt)("p",null,"TouchGFX has 3 strategies, each with advantages and disadvantages:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",l({parentName:"tr"},{align:null}),"Strategy"),(0,i.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Direct To Frame Buffer"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Decode the current video frame directly to the framebuffer when needed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Dedicated Buffer"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Decode the next video frame to a video buffer. Copy from the video buffer to the frame buffer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Double Buffer"),(0,i.kt)("td",l({parentName:"tr"},{align:null}),"Decode the next video frame to a second video buffer. Swap video buffers when decoding is done")))),(0,i.kt)("p",null,"The Designer always select the Direct To Frame Buffer strategy for\nsimulator projects. The strategy used on target is configurable in the\n",(0,i.kt)("a",l({parentName:"p"},{href:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding#video-decoding-strategy"}),"Generator"),"."),(0,i.kt)("p",null,"The strategies are explained in detail below."),(0,i.kt)("h3",l({},{id:"direct-to-frame-buffer"}),"Direct To Frame Buffer"),(0,i.kt)("p",null,"The Direct To Frame Buffer strategy decodes a JPEG frame during the\nrendering phase on the TouchGFX engine (see\n",(0,i.kt)("a",l({parentName:"p"},{href:"../../../basic-concepts/rendering#render"}),"Rendering"),")"),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/direct-decode.webp",mdxType:"Figure"},"Decoding directly to the frame buffer"),(0,i.kt)("p",null,"During the Update phase (see\n",(0,i.kt)("a",l({parentName:"p"},{href:"../../../basic-concepts/rendering#update"}),"Update"),') the Video widget\ndecides if the movie should be advanced to the next frame. During the\nfollowing Rendering phase, the JPEG frame is decoded line-by-line to a\n"line buffer". The pixels are then converted to match the frame buffer\nformat and copied to the framebuffer.'),(0,i.kt)("p",null,"If the Video widget is covered by other solid widgets it is redrawn in\nmultiple blocks (the visible parts are split into rectangles)."),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/block-decoding.png",mdxType:"Figure"},"Video frame with solid widget overlap decoded in multiple blocks."),"Drawing each of these blocks requires repeated decompression work. This can make this strategy unsuitable for user interface where other solid UI elements like Buttons are put on top of the video as the decoding time is increased. There are design decisions which can limit the amount of extra decompression work needed. One approach is to change the solid widget to have some amount of opacity. This will result in only one block, i.e., the whole video frame. The widget will be blended with the contents of the frame.",(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/block-decoding-with-opacity.png",mdxType:"Figure"},"Video frame with widget with some opacity decoded in one block."),(0,i.kt)("p",null,"Another approach is to disable the SMOC algorithm which partitions the areas\nto draw in the screen into blocks. When disabled, all widgets are drawn\ncompletely, even areas which are covered by other solid widgets. This is\ndone with ",(0,i.kt)("inlineCode",{parentName:"p"},"useSMOCDrawing()"),". The example below disables SMOC for the screen\ncontaining the video with solid widget(s) on top and enables it again when the\nscreen is done rendering."),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-cpp",metastring:"{3,9}","{3,9}":!0}),"void Screen1View::setupScreen()\n{\n    useSMOCDrawing(false);\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    useSMOCDrawing(true);\n    Screen1ViewBase::tearDownScreen();\n}\n")),(0,i.kt)("p",null,"The call to ",(0,i.kt)("inlineCode",{parentName:"p"},"useSMOCDrawing()")," can also be placed closer to where the video\nis rendered to avoid other widgets in the screen also being drawn completely."),(0,i.kt)("p",null,"The advantage of this solution is that only a little extra memory is\nused. "),(0,i.kt)(s.Z,{mdxType:"Caution"},"Disabling the SMOC drawing algorithm may unintendedly cause other widgets to have longer render times and should be used with caution."),(0,i.kt)("h3",l({},{id:"dedicated-buffer"}),"Dedicated Buffer"),(0,i.kt)("p",null,"The Dedicated or single buffer decoding strategy decodes a JPEG frame\nto a dedicated RGB buffer first, and then later copies from that\nbuffer to the frame buffer."),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/single-buf-decode.webp",mdxType:"Figure"},"Decoding to a separate buffer"),(0,i.kt)("p",null,"Opposed to the direct strategy the decoding now runs in a separate\ntask, not the normal TouchGFX task. The Video widget calculates if a\nnew movie frame should be shown in the next user interface tick and\nsignals the decoding task to start decoding the next frame. During\nthis decoding the video buffer cannot be drawn to the frame buffer (it\nis partly updated). The user interface is blocked from redrawing the\nvideo widget while the decoding is running. When the drawing is done,\nit will continue. If the user interface does not need to redraw the\nvideo, the user interface can continue as normal."),(0,i.kt)("p",null,"When the new video is fully decoded, the cost of rendering the video\nto the framebuffer is the same as drawing a bitmap (low). With this\nstrategy it is therefore not a problem to put buttons or text on top\nof the video."),(0,i.kt)("p",null,"The disadvantage of this strategy the memory used by the task and the\nvideo buffer."),(0,i.kt)("h3",l({},{id:"double-buffer"}),"Double Buffer"),(0,i.kt)("p",null,"The double buffered decoding strategy has two RGB buffers. The\ndecoding is done into either of these buffers, whereas the rendering\nto the frame buffer happens from the other RGB buffer."),(0,i.kt)(a.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/double-buf-decode.webp",mdxType:"Figure"},"Decoding to two video buffers"),(0,i.kt)("p",null,"When a frame is decoded, the decoding task waits for the UI to show\nthat video buffer and release the previous buffer. The decoding of the\nnext frame can start as soon as the user interface has changed\nbuffer."),(0,i.kt)("p",null,"An obvious disadvantage for this strategy is the memory usage which is\ndoubled from the previous strategy."),(0,i.kt)("h3",l({},{id:"video-frame-rate-and-user-interface-frame-rate"}),"Video frame rate and user interface frame rate"),(0,i.kt)("p",null,"The decoding strategies has different effects on the user interface\nframe rate. The user interface frame rate is the number of (different)\nframes produced in the framebuffer per second."),(0,i.kt)("p",null,"With the direct to framebuffer strategy, the decoding speed of the\nvideo easily affects the effective frame rate of the user\ninterface. Assume as an example that the decoding of one JPEG frame\ntakes 28 ms, and that we want to show 20 video frames each second (20\nfps). This is realistic as the total decoding time is: 28 ms x 20/s =\n560 ms/s.  The 20 fps corresponds to a new video frame in every third\nframe (of 60 fps). So in every third UI frame we want a new video\nframe, but as the decoding time is part of the rendering phase, the\nrendering of that frame takes 28 ms plus the rendering of the rest of\nthe user interface, say 2 ms. The total rendering of the frame is 30\nms and we lost one tick, but are ready to produce a new frame for the\nnext tick. In this next frame we are not decoding video, so here the\nrendering is below 16 ms and meets the limit. We can then start\ndecoding the second video frame in the fourth tick."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/video/direct-video-20fps.webp",mdxType:"Figure"},"20 fps video"),(0,i.kt)("p",null,"The video frame rate is therefore 20 fps, and the user interface frame\nrate is 40 (out of 60 possible)."),(0,i.kt)("p",null,"The result is that we cannot animate other elements of the UI with 60\nfps because the video decoding limits the frame rate."),(0,i.kt)("p",null,"With the double buffer decoding strategy this is improved. The user\ninterface always has a video buffer available with the latest\nframe. The decoder task can swap this buffer with the other buffer\n(containing the next frame) when it is available and the rendering\nthread is not actively drawing. After the swap the decoding task can\nimmediately start decoding the next frame:"),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/video/double-video-20fps.webp",mdxType:"Figure"},"20 fps video"),(0,i.kt)("p",null,"In UI frame 1 and 2 the UI is showing the first decoded video\nframe. Meanwhile the decoder is producing frame 2. In UI frame 3 this\nframe is ready and will be used. The decoder is free to start decoding\nthe next frame (not shown in the figure)."),(0,i.kt)("p",null,"It is thus possible to have user interface with other elements updated\nin every frame, even if the video decoding is only able to produce a\nnew frame every 2 ticks."),(0,i.kt)("h2",l({},{id:"related-articles"}),"Related articles"),(0,i.kt)("p",null,"As mentioned above the video support for target project is configured in the TouchGFX Generator.\nSee the ",(0,i.kt)("a",l({parentName:"p"},{href:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"}),"Generator User Guide"),". for instructions."),(0,i.kt)("p",null,"The Video widget is available in the Designer. The use of Video widget\nin the Designer is detailed\n",(0,i.kt)("a",l({parentName:"p"},{href:"../ui-components/miscellaneous/video"}),"here"),"."))}b.isMDXComponent=!0}}]);