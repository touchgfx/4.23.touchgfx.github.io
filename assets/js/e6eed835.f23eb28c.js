"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[57629],{49613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||o;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89639:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(59496),n=a(7029);const o=function(e){const t=e.noShadow||!1,a=e.width,o=e.height,i=(0,n.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:a,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:a,height:o,src:i})),r.createElement("p",null,e.children))}},48753:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(59496),n=a(96151);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(n.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const l=i},96151:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(59496);class n extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=n},64852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>h});a(59496);var r=a(49613),n=a(95375),o=a(48753),i=a(89639);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={id:"color-formats",title:"Color Formats"},c=void 0,m={unversionedId:"basic-concepts/color-formats",id:"basic-concepts/color-formats",title:"Color Formats",description:"Colors are what is seen on the pixels of the display. These colors come from values stored in a framebuffer. Traditionally in graphics systems, there is a limited amount of possible colors that can be represented, used and displayed. This applies also to TouchGFX and TouchGFX applications.",source:"@site/docs/basic-concepts/color-formats.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/color-formats",permalink:"/4.23/docs/basic-concepts/color-formats",draft:!1,tags:[],version:"current",frontMatter:{id:"color-formats",title:"Color Formats"},sidebar:"docs",previous:{title:"Embedded Graphics",permalink:"/4.23/docs/basic-concepts/embedded-graphics"},next:{title:"Framebuffer",permalink:"/4.23/docs/basic-concepts/framebuffer"}},d={},h=[{value:"Color",id:"color",level:2},{value:"Grayscale",id:"grayscale",level:3},{value:"Opacity",id:"opacity",level:3},{value:"Color depth",id:"color-depth",level:2},{value:"Formats",id:"formats",level:2},{value:"Pixel color formats",id:"pixel-color-formats",level:3},{value:"RGB888",id:"rgb888",level:4},{value:"RGB565",id:"rgb565",level:4},{value:"RGBx2222, xRGB2222, BGRx2222, xBGR2222",id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222",level:4},{value:"GRAY4, GRAY2, BW",id:"gray4-gray2-bw",level:4},{value:"Image formats",id:"image-formats",level:3},{value:"Framebuffer formats",id:"framebuffer-formats",level:3},{value:"Byte and pixel order",id:"byte-and-pixel-order",level:4},{value:"Text formats",id:"text-formats",level:3},{value:"Visual quality",id:"visual-quality",level:2},{value:"Dithering",id:"dithering",level:3},{value:"Performance",id:"performance",level:2},{value:"Alpha blending",id:"alpha-blending",level:3},{value:"Other image formats",id:"other-image-formats",level:2}],u={toc:h},g="wrapper";function b(e){var{components:t}=e,a=s(e,["components"]);return(0,r.kt)(g,l({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Colors are what is seen on the pixels of the display. These colors come from values stored in a ",(0,r.kt)("a",l({parentName:"p"},{href:"framebuffer"}),"framebuffer"),". Traditionally in graphics systems, there is a limited amount of possible colors that can be represented, used and displayed. This applies also to TouchGFX and TouchGFX applications."),(0,r.kt)("p",null,"The number of possible pixel colors of an application has an impact on many parts of an application. From the visual appearance of what is seen on the display to the memory consumption imposed by the framebuffer and the overall performance. This section will explain colors in TouchGFX in more detail and describe the color formats available in TouchGFX and highlight pros and cons."),(0,r.kt)("h2",l({},{id:"color"}),"Color"),(0,r.kt)("p",null,"A color in TouchGFX is a triplet of red, green and blue components, known as an RGB color. Each component of the color ranges from 0 to 255. 0 means that the component is off, and 255 means that the component is at its maximum."),(0,r.kt)("p",null,"A completely black color is represented by the RGB color (0,0,0) and a completely white is (255,255,255). Bright green is (0,255,0), a semi bright red (128,0,0), a darkish purple (64,0,64) and so on."),(0,r.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb-colors.svg",noShadow:"true",height:"70",mdxType:"Figure"},"Some RGB colors"),(0,r.kt)("h3",l({},{id:"grayscale"}),"Grayscale"),(0,r.kt)("p",null,"For grayscale applications all colors are gray, ranging from black to white and therefore the representation is the gray intensity instead of the RGB value. One can think of grayscale colors as RGB colors where R = G = B."),(0,r.kt)("h3",l({},{id:"opacity"}),"Opacity"),(0,r.kt)("p",null,"In some circumstances we might consider colors to have a component describing the opacity of the color. The opacity ranges from 0 to 255, as the other components of the color. Colors with opacity are referred to as RGBA colors. The A stands for alpha, which is the classic name used for the opacity level."),(0,r.kt)("p",null,"A completely opaque black color here is (0,0,0,255), a somewhat transparent red is (255,0,0,128), and so on."),(0,r.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgba-colors.svg",noShadow:"true",height:"70",mdxType:"Figure"},"Some RGBA colors atop white and grey"),(0,r.kt)("p",null,"When a color is not completely opaque it needs to be mixed together with the color already present. This mixing of colors is known as alpha blending."),(0,r.kt)("h2",l({},{id:"color-depth"}),"Color depth"),(0,r.kt)("p",null,"Color depth is the number of bits used to describe each color as stored in the framebuffer. We denote this number the bits per pixel, or in short bpp."),(0,r.kt)("p",null,"The more bits we use, the more colors we can describe."),(0,r.kt)("p",null,"A much used color depth is 24 bpp. As each bit can be either on or off, this implies that 2",(0,r.kt)("sup",null,"24")," = 16777216 different colors can be represented."),(0,r.kt)("p",null,"Another, a little less used, color depth is 1 bpp. This color depth applies to black and white applications, and implies that only 2",(0,r.kt)("sup",null,"1")," = 2 different colors can be represented."),(0,r.kt)("p",null,"TouchGFX has built-in support for the following color depths:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"32 bpp - 16777216 colors and corresponding opacity values"),(0,r.kt)("li",{parentName:"ul"},"24 bpp - 16777216 colors"),(0,r.kt)("li",{parentName:"ul"},"16 bpp - 65536 colors"),(0,r.kt)("li",{parentName:"ul"},"6/8 bpp - 64 colors"),(0,r.kt)("li",{parentName:"ul"},"4 bpp - 16 grayscale colors"),(0,r.kt)("li",{parentName:"ul"},"2 bpp - 4 grayscale colors"),(0,r.kt)("li",{parentName:"ul"},"1 bpp - 2 grayscale colors")),(0,r.kt)("p",null,"A note on color component ranges. When working with less than 24 bpp color depth, each of the red, green and blue components does not directly range from 0 to 255. Instead such a component, say red in 16 bpp, ranges 0 to 31. We will think of the value 31 as representing the most red we can represent in 16 bpp, i.e. 255 in 24 bpp. One way of thinking of this is that colors of 16 bpp depth can only represent a subset of the colors possible in 24 bpp."),(0,r.kt)("p",null,"In 6/8 bpp color depts, each pixels uses 6 bits for the color information (2 bits each for red, green, and blue). To simplify the framebuffer access each pixel is increased from 6 bits to 8 bits (1 byte). The extra two bits in the framebuffer are unused."),(0,r.kt)("h2",l({},{id:"formats"}),"Formats"),(0,r.kt)("p",null,"Having determined the amount of bits needed to represent colors, we investigate the contents of the bits in more detail. A color will have some bits describing the red component, some the green and some the blue, but the color depth alone does not specify the order (format) of the bits in a pixel. E.g. blue first, then green, then red, or maybe in the reverse order."),(0,r.kt)("h3",l({},{id:"pixel-color-formats"}),"Pixel color formats"),(0,r.kt)("p",null,"Dependent on the color depth of the application, some particular color formats will be available."),(0,r.kt)("h4",l({},{id:"rgb888"}),"RGB888"),(0,r.kt)("p",null,"In TouchGFX, a color of 24 bpp color depth will have the color format RGB888. This means that 8 bits are used for each of the color components red, green and blue."),(0,r.kt)("p",null,"Representing such a color, say bright purple rgb(255,0,255), in code is done by assembling the components into a color value"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"uint32_t brightPurpleRGB888 = 255 << 16 | 0 << 8 | 255 << 0;\n")),(0,r.kt)("p",null,"In this format, red is in the highest 8 bits, then green, and blue in the low 8 bit."),(0,r.kt)("h4",l({},{id:"rgb565"}),"RGB565"),(0,r.kt)("p",null,"For 16 bpp colors, TouchGFX uses the color format RGB565. That is 5 bits for red, 6 bits for green, 5 bits for blue. As we have 5 bits for red, fully lit is 31, so the bright purple in code is"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"uint16_t brightPurpleRGB565 = 31 << 11 | 0 << 5 | 31 << 0;\n")),(0,r.kt)("h4",l({},{id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222"}),"RGBx2222, xRGB2222, BGRx2222, xBGR2222"),(0,r.kt)("p",null,"For 6 bpp colors, TouchGFX supports 4 different formats, RGBx2222, xRGB2222, BGRx2222, xBGR222. 6 bit colors are stored as bytes and this is the reason for having the x in the forementioned formats. The color is padded with 2 bits, to fit into a byte. The reason for having both RGB and BGR is that some displays need this and we do not want to convert pixels before sending them to the display.\nRepresenting a bright yellow in RGBx2222 in code is"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"uint8_t brightYellowRGBx2222 = 3 << 6 | 3 << 4 | 0 << 2;\n")),(0,r.kt)("h4",l({},{id:"gray4-gray2-bw"}),"GRAY4, GRAY2, BW"),(0,r.kt)("p",null,"For each of the grayscale color depths TouchGFX supports one corresponding color format. For 4 bpp the color format is denoted GRAY4, for 2 bpp it is GRAY2 and for 1 bpp it is denoted BW for black and white. In 4 bpp a completely white color is"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"uint8_t whiteGRAY4 = 15;\n")),(0,r.kt)("p",null,"TouchGFX includes a helper function that will return the correct representation of a color in the correct color format."),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n...\naColor = Color::getColorFromRGB(255,0,128);\n")),(0,r.kt)("h3",l({},{id:"image-formats"}),"Image formats"),(0,r.kt)("p",null,"Images are an important part of most UI applications and images are filled with colors. In TouchGFX images are stored in memory and are filled with colors of a specific format. In many cases images are using one of the ",(0,r.kt)("a",l({parentName:"p"},{href:"#pixel-color-formats"}),"supported pixel color formats"),", but other image formats are also available. A pixel in an image of a particular image color format will be converted into the appropriate pixel format before being drawn"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Image Color format"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"ARGB8888"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"32 bits, 8 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits indexed format, ARGB8888 palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"24 bits, 8 bits per component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"L8_RGB888"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits indexed format, RGB888 palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"RGB666"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"24 bits, 6 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"16 bits, 5 bits red, 6 bits green, 5 bits blue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"L8_RGB565"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits indexed format, RGB565 palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"GRAY4"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"4 bits grayscale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"GRAY2"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"2 bits grayscale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"BW"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"1 bit grayscale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"BW_RLE"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"1 bit grayscale run-length encoded")))),(0,r.kt)("p",null,"Some of these image formats, the L8 ones, are representing the image in question by a lookup table of colors (known as a CLUT) and indices into this table. The maximum number of possible colors in such an L8 image is 2",(0,r.kt)("sup",null,"8")," = 256. The L8 formats take up less space than their non-L8 counterparts, as an example a 100x100 image with 200 different colors, takes up 100x100x32 bits = 40000 bytes when stored in the ARGB8888 format, and only 100x100x8 bits + 200x32 bits = 10800 bytes when stored in the L8_ARGB8888 format. Read more about using the L8 formats ",(0,r.kt)("a",l({parentName:"p"},{href:"../development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"}),"here"),"."),(0,r.kt)("p",null,"The image format BW_RLE stores the colors as consecutive runs of black and white instead of storing single pixel colors. This can in many cases also be more space efficient."),(0,r.kt)("p",null,"The rest of the formats are the same as the pixel color formats above."),(0,r.kt)("h3",l({},{id:"framebuffer-formats"}),"Framebuffer formats"),(0,r.kt)("p",null,"Not all image formats are available as framebuffer formats. The L8\nformats cannot be used as framebuffer formats in TouchGFX. This is\nbecause it is not practical blend to two images in the framebuffer."),(0,r.kt)("h4",l({},{id:"byte-and-pixel-order"}),"Byte and pixel order"),(0,r.kt)("p",null,"The 24 bits format RGB888, and 32 bits format ARGB888, is often\naccessed using a byte pointer. When doing that it is necessary to\nunderstand that the pixels are stored in little endian order."),(0,r.kt)("p",null,"Take as an example the 32 bits color 0xFFFF7700 (alpha = 0xFF, red =\n0xFF, green = 0x77, blue = 0x00). When the color is in a 32 bit\nvariable or register, the value is 0xFFFF7700. When the color is\nstored in memory the bytes stored are { 0x00, 0x77, 0xFF, 0xFF }. This\ncorresponds to the order BGRA."),(0,r.kt)("p",null,"Similarly, the 16 bits format, RGB565, is always accessed through a 16\nbit pointer, so the byte order is not interesting, but it is swapped\nin memory."),(0,r.kt)("p",null,"For the 8 bits formats, e.g. ARGB2222, the color fits into a byte\n(alpha in the two highest bits), which is stored without change."),(0,r.kt)("p",null,"The smaller formats, GRAY4, GRAY2, and BW, can be stored in two\norders. The low bits can be the leftmost pixel or the rightmost\npixel. If the low bits are the leftmost we call this LSB-mode,\notherwise it is MSB-mode."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Framebuffer format"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Order"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"ARGB8888"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"BGRA"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"32 bits, 8 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"XRGB8888"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"BGRX"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"32 bits, 8 bits per component, alpha byte ignored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"BGR"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"24 bits, 8 bits per component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",l({parentName:"tr"},{align:null})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"16 bits, 5 bits red, 6 bits green, 5 bits blue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",l({parentName:"tr"},{align:null})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",l({parentName:"tr"},{align:null})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",l({parentName:"tr"},{align:null})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",l({parentName:"tr"},{align:null})),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"GRAY4"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"LSB"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"4 bits grayscale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"GRAY2"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"LSB"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"2 bits grayscale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"BW"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"MSB"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"1 bit grayscale")))),(0,r.kt)("h3",l({},{id:"text-formats"}),"Text formats"),(0,r.kt)("p",null,"Texts, or more accurately glyphs, are also stored in memory in a specific color format. The available text color formats in TouchGFX are"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Text Color format"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"A8"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"8 bits, opacity only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"A4"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"4 bits, opacity only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"A2"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"2 bits, opacity only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"A1"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"1 bits, opacity only")))),(0,r.kt)("p",null,"Glyph formats are comparable to small images, where each color entry holds the level of opacity of each pixel. This enables applying the actual color, the red, green and blue components, at a later time, and enables drawing for instance the stored glyph 'A' in both a blue version and a red version."),(0,r.kt)("p",null,"The more bits used for each glyph the smoother and nicer it will typically appear."),(0,r.kt)("h2",l({},{id:"visual-quality"}),"Visual quality"),(0,r.kt)("p",null,"When doing embedded graphics we want the highest visual quality, but at the same time we need to look at the amount of memory consumed."),(0,r.kt)("p",null,"Therefore it is many times desirable to go for an RGB565 color format instead of the richer RGB888 and in general we should go for the color format that provides us the most visual quality, while respecting our memory requirements."),(0,r.kt)("h3",l({},{id:"dithering"}),"Dithering"),(0,r.kt)("p",null,"TouchGFX employs what is known as dithering to improve the visual quality of images when representing these in different color formats."),(0,r.kt)("p",null,"Dithering is a well known technique for making images appear to have more colors than what is actually present. This is done by adding a bit of noise to the colors of the image."),(0,r.kt)("p",null,"One example - when converting an RGB888 image to an RGB565 image, instead of just chopping of the lower bits of each color component, the conversion process adds some noise to each of the resulting colors, the result being that the converted image looks richer and similar to the RGB888 original."),(0,r.kt)("p",null,"Explaining by images instead of words, we have an original RGB888 image, and a number of converted images. The converted images have the formats RGB565 with and without dithering, xRGB2222 with and without dithering, GRAY4 with and without dithering."),(0,r.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb888.webp",noShadow:"true",width:"480",mdxType:"Figure"},"Original RGB888 image"),(0,r.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb565.webp",noShadow:"true",width:"480",mdxType:"Figure"},"Converted RGB565 images with and without dithering"),(0,r.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/xrgb2222.webp",noShadow:"true",width:"480",mdxType:"Figure"},"Converted xRGB2222 images with and without dithering"),(0,r.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/gray4.webp",noShadow:"true",width:"480",mdxType:"Figure"},"Converted GRAY4 images with and without dithering"),(0,r.kt)("p",null,"As can be seen dithering improves the perceived quality of images quite a bit. When looking closely at the RGB565 with and without dithering, it can be seen that the dithered version looks almost exactly like the original whereas the undithered one has some areas where color banding is apparent. This examplifies that in many cases 16 bit colors is more than enough to do great looking graphics."),(0,r.kt)("p",null,"When your graphics assets has big gradients, you might experience some color banding even in dithered images. Here are two examples. A bluish gradient ranging from RGB888 (64,190,222) to black and the converted RGB565 image with and without dithering."),(0,r.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/bluish.webp",noShadow:"true",width:"800",mdxType:"Figure"},"Original RGB888 and converted RGB565 images with and without dithering"),(0,r.kt)("p",null,"And another red gradient ranging from (255,0,0) to black."),(0,r.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/red.webp",noShadow:"true",width:"800",mdxType:"Figure"},"Original RGB888 and converted RGB565 images with and without dithering"),(0,r.kt)("p",null,"Looking closely, it can be seen that color banding is present in both the dithered and the undithered RGB565 versions. The red image has the most noticeable bands."),(0,r.kt)("p",null,"Always pay close attention to your resulting images and color formats and if needed alter your original images or choose another color format."),(0,r.kt)("h2",l({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,'All the image formats discussed are optimized for "easiness" of drawing. This means that the images can more or less be copied to the framebuffer without much conversion taking place.'),(0,r.kt)("p",null,"This is intentional and is one of the reasons TouchGFX can achieve fluent graphics on microcontrollers."),(0,r.kt)("p",null,"When designing a UI with TouchGFX one uses .png images and at compile time each of these images are converted into one of the efficient image formats detailed above."),(0,r.kt)("h3",l({},{id:"alpha-blending"}),"Alpha blending"),(0,r.kt)("p",null,"At runtime the copying of image data is done either by a regular CPU copy operation or by using features of the MCU. If the image includes pixels that are not completely transparent or opaque, the pixels need to be alpha blended onto the background. In some STM32 MCUs this blending is supported by the hardware."),(0,r.kt)("h2",l({},{id:"other-image-formats"}),"Other image formats"),(0,r.kt)("p",null,"If you need to support other image formats at runtime, for example compressed image formats, such as .jpg or .png you can utilize the support of TouchGFX for ",(0,r.kt)("a",l({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/dynamic-bitmaps"}),"dynamic bitmaps.")),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"Wikipedia article on ",(0,r.kt)(n.Z,{to:"https://en.wikipedia.org/wiki/Color_depth",mdxType:"Link"},"color depth"),"."))}b.isMDXComponent=!0}}]);