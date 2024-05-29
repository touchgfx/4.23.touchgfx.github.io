"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[85223],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const o=r},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496),r=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(96151);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const l=i},96151:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const o=r},19222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>u});n(59496);var a=n(49613),r=n(89639),o=n(28128),i=n(48753),l=n(95375);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"scenarios-change-pixelformat-bpp",title:"Changing the Pixel Format of an Application"},m=void 0,d={unversionedId:"development/scenarios/scenarios-change-pixelformat-bpp",id:"development/scenarios/scenarios-change-pixelformat-bpp",title:"Changing the Pixel Format of an Application",description:"This article shows how to change the pixel format of an application after a project has been created. Concretely, this article exemplifies modifying a 24-bit RGB888 application to be 16-bit RGB565 through the TouchGFX Generator and also shows the impact on the TouchGFX project configuration. Reasons to change the pixel format could be the following:",source:"@site/docs/development/scenarios/scenarios-change-pixelformat-bpp.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-change-pixelformat-bpp",permalink:"/4.23/docs/development/scenarios/scenarios-change-pixelformat-bpp",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-change-pixelformat-bpp",title:"Changing the Pixel Format of an Application"},sidebar:"docs",previous:{title:"Using Non-Memory Mapped Flash for Font Data",permalink:"/4.23/docs/development/scenarios/fonts-in-unmapped-flash"},next:{title:"Creating an TouchGFX Board Setup",permalink:"/4.23/docs/development/scenarios/scenarios-create-at"}},h={},u=[{value:"Board Bring Up",id:"board-bring-up",level:2},{value:"HAL Development",id:"hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:u},f="wrapper";function b(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)(f,p({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article shows how to change the pixel format of an application after a project has been created. Concretely, this article exemplifies modifying a 24-bit RGB888 application to be 16-bit RGB565 through the TouchGFX Generator and also shows the impact on the TouchGFX project configuration. Reasons to change the pixel format could be the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Modified display requirements"),(0,a.kt)("li",{parentName:"ol"},"Modified application requirements"),(0,a.kt)("li",{parentName:"ol"},"Mistake during initial project creation")),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},"Please read the article on ",(0,a.kt)(l.Z,{to:"../../basic-concepts/color-formats",mdxType:"Link"},"Color Formats"),"."),(0,a.kt)("p",null,"Generally, the following changes could be required to change the pixel format of your application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Board Bring Up:")," Change the pixel format of the LTDC."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"HAL Development:")," Modify TouchGFX Generator settings to reflect LTDC settings or location of framebuffer(s) in memory."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TouchGFX Designer"),": Ensure that the designer is using this new converted bit depth and correct format for image assets.")),(0,a.kt)("p",null,"Starting from the designer we can inspect the current configuration for ",(0,a.kt)("em",{parentName:"p"},"Display")," and ",(0,a.kt)("em",{parentName:"p"},"Image")," and return to these screens later to validate."),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-4-17.webp",width:"600",mdxType:"Figure"},"Image configuration RGB888"),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-4-17.webp",width:"600",mdxType:"Figure"},"Display configuration 24-bit"),(0,a.kt)("h2",p({},{id:"board-bring-up"}),"Board Bring Up"),(0,a.kt)("p",null,"If certain settings in the STM32CubeMX project can impact the desired pixel format of the application, as is the case for LTDC, developers are required to make appropriate changes here such that TouchGFX renders in the format expected by the LTDC."),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},"Please read the article on ",(0,a.kt)(l.Z,{to:"../touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"LTDC")," for details on valid pixel format settings for TouchGFX applications."),(0,a.kt)("h2",p({},{id:"hal-development"}),"HAL Development"),(0,a.kt)("p",null,"If the bit-depth of the applications changes along with the pixel format of the framebuffer (e.g. changing ARGB2222 to BRGA2222 you would still have an 8-bit application), developers ",(0,a.kt)("em",{parentName:"p"},"may")," be required to modify the memory locations of the framebuffers. In the case below:"),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-chage-px-fmt.webp",width:"400",mdxType:"Figure"},"Modify pixel format"),(0,a.kt)("p",null,"Generating code using this configuration will generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration")," that uses the 16-bit TouchGFX ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD")," class."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"static LCD16bpp display;\n")),(0,a.kt)("p",null,"If the project is open in TouchGFX Designer, developers will be prompted to update to reflect the newly generated configuration changes."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-json",metastring:"{7-8}","{7-8}":!0}),'{\n  "image_configuration": {\n    "images": {},\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB565",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  },\n')),(0,a.kt)("p",null,"The table below lists the impact on opaque and non-opaque image formats given a pixel format:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Framebuffer pixel format"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Opaque format"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Non-Opaque format"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gray2"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gray2"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gray2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gray4"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gray4"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gray4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ABGR2222"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ABGR2222"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ABGR2222")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ARGB2222"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ARGB2222"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ARGB2222")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"BGRA2222"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"BGRA2222"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"BGRA2222")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"RGBA2222"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"RGBA2222"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"RGBA2222")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ARGB8888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"ARGB8888")))),(0,a.kt)("h2",p({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,a.kt)("p",null,"Once the TouchGFX project has been updated based on the new TouchGFX Generator settings defined in STM32CubeMX, developers will find that the TouchGFX Designer configuration has changed to match."),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-16bpp-4-17.webp",width:"600",mdxType:"Figure"},"Image configuration RGB565"),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-16bpp-4-17.webp",width:"600",mdxType:"Figure"},"Display configuration 16-bit"),(0,a.kt)("p",null,"After generating code from within TouchGFX Designer the code for image assets now reflect the updated pixel format:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX\\generated\\images\\src\\my_image.png"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),'LOCATION_PRAGMA("ExtFlashSection")\nKEEP extern const unsigned char my_image[] LOCATION_ATTRIBUTE("ExtFlashSection") = // 320x240 RGB565 pixels.\n')),(0,a.kt)("h2",p({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"Modifying the current pixel format of an application can be done by simply using TouchGFX Generator. For MCUs with an LTDC, the layer running TouchGFX must match the Framebuffer pixel format defined in TouchGFX Generator (Limited to RGB565 and RGB888 for LTDC) settings to ensure compliance with the format rendered by TouchGFX Core."),(0,a.kt)("p",null,"Once code has been generated from STM32CubeMX, the TouchGFX project will be updated and upon subsequent code generation in TouchGFX Designer both image assets and framebuffer driver will have the specified formats."))}b.isMDXComponent=!0}}]);