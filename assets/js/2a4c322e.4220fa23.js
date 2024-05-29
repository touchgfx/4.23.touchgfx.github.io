"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[65780],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,u=h["".concat(s,".").concat(d)]||h[d]||f[d]||i;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class o extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const i=o},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),o=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,r=(0,o.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children))}},73189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>f});n(59496);var a=n(49613),o=n(89639),i=n(28128);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"using-binary-fonts",title:"Binary Fonts"},c=void 0,p={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-fonts",id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",title:"Binary Fonts",description:"This section describes how to use binary fonts in TouchGFX. The first",source:"@site/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-fonts",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"using-binary-fonts",title:"Binary Fonts"},sidebar:"docs",previous:{title:"Dynamic Bitmaps",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"Font Caching",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/font-cache"}},h={},f=[{value:"The Font and Text system classes",id:"the-font-and-text-system-classes",level:2},{value:"Using Binary Fonts",id:"using-binary-fonts",level:2},{value:"Configuring the Font converter to generate Binary Fonts",id:"configuring-the-font-converter-to-generate-binary-fonts",level:3},{value:"Manual Configuration",id:"manual-configuration",level:3},{value:"Installing the binary font",id:"installing-the-binary-font",level:3},{value:"Resetting a font",id:"resetting-a-font",level:3},{value:"Generating binary fonts in another project",id:"generating-binary-fonts-in-another-project",level:2}],d={toc:f},u="wrapper";function g(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(u,r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to use binary fonts in TouchGFX. The first\nsection contains some in-depth information about the font and text\nsystem in TouchGFX that can be beneficial to understand when\nworking with binary fonts. The second section explains how to use\nbinary fonts."),(0,a.kt)("p",null,"Binary fonts can be used as an alternative to the traditional way of\ncompiling and linking font information in to your application (the\n.cpp files in ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/src"),").\nThe main advantages of this approach is to get a smaller application\nbinary and get flexibility in form of providing different sets of\nfonts with your devices. For example you can pack the Chinese font with\ndevices going to China, and the Japanese font with devices going\nthere.  The drawback of this approach is that the whole binary font\nneeds to be loaded to RAM (or memory-mapped flash) which can be a\nproblem if the font is large."),(0,a.kt)("p",null,"The main advantage of the normal principle of linking fonts into the\napplication is that the application will always automatically contain\nthe updated texts and typographies used in the application. This\nis very easy and safe to use. The disadvantage is that fonts can make\nthe application big."),(0,a.kt)("h2",r({},{id:"the-font-and-text-system-classes"}),"The Font and Text system classes"),(0,a.kt)("p",null,"In the default configuration TouchGFX generates .cpp-files for all\ntexts and fonts used in the application. These files are compiled and\nlinked into the application together with the generated UI and your\napplication code."),(0,a.kt)("p",null,"When you show a text on the UI with e.g. a TextArea, you reference the\ntext with a TypedTextId. This TypedTextId is used by the Widgets to\nfind the actual letters in the text. The Widgets will access the texts\nthrough the ",(0,a.kt)("em",{parentName:"p"},"touchgfx::Texts")," class in\n",(0,a.kt)("inlineCode",{parentName:"p"},"framework/include/touchgfx/Texts.hpp"),"."),(0,a.kt)("p",null,"The Text class contains a pointer array with a pointer to a\ntranslation table for each language in the application. A translation\ntable is in principle a collection of all strings used in that\nlanguage:"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.webp",noShadow:"true",width:"420",mdxType:"Figure"},"Mapping texts to specific languages"),(0,a.kt)("p",null,"This table allows TouchGFX to find a given text in the selected language."),(0,a.kt)("p",null,"The tables are regenerated whenever you change a text in TouchGFX\nDesigner or directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"texts.xml")," file and generate your\napplication."),(0,a.kt)("p",null,"Before we can draw the text on the screen we need to know\nwhich font to use for the text. This mapping between texts and fonts\nis controlled by the TypedTextDatabase class found in (",(0,a.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),")."),(0,a.kt)("p",null,"In the texts tab in TouchGFX Designer you can specify a typography,\nwriting order (Left-to-right or Right-to-left), and an alignment for\neach text (Left, Right, Center). The typography, order, and alignment\ncan be different for each translation of the text.\nThis information is compiled into a table specific for each\nlanguage. This makes it easy for TouchGFX to find out what font to use\nfor a given text, how to align it, and in what order to  write the letters."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.webp",noShadow:"true",width:"600",mdxType:"Figure"},"typography information is specific to a language"),(0,a.kt)("p",null,"In the above figure the TypedTextData table has pointers to three\narrays. One for each language in the application. Each of the arrays\nhave 3 elements, one for each text in the system. Each element\ndescribes a font, a reading order, and the alignment. We see that in\nthis example the texts use the same font in the three languages, but\nthe texts use different fonts (F1 or F2). The Fonts table has two pointers\nbecause two fonts are used in the application."),(0,a.kt)("p",null,"When TouchGFX is about to draw a text on the screen, it\nlooks up the TypedTextData for the given text. This data contains the\nfont index, letter order (LTR/RTL), and the horizontal alignment\n(Left, Right, Center) of the text as specified in the TouchGFX Designer or the xml\ndocument. TouchGFX uses the font index in the TypedTextData (F1 or F2) to\nlookup the correct font for the text."),(0,a.kt)("p",null,"All this happens automatically when the fonts are compiled into your\napplication."),(0,a.kt)("h2",r({},{id:"using-binary-fonts"}),"Using Binary Fonts"),(0,a.kt)("p",null,"When an application is using many letters in many different fonts the\nsize of the application can grow substantially."),(0,a.kt)("p",null,"To relieve this problem TouchGFX allows applications to use binary\nfonts. These fonts are not linked into the application but are stored\nseparately from the application as files. These files can be loaded and\nprovided to TouchGFX by the application at runtime.\nThe application can e.g. load the font from an external storage like an\nsd-card or maybe download the font from the Internet."),(0,a.kt)("p",null,"When the application has loaded the font, it can ask TouchGFX to\ninstall the Binary Font in the font system:"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.webp",noShadow:"true",width:"600",mdxType:"Figure"},"Installing a binary font in the font table"),(0,a.kt)("p",null,"Here the built-in Font2 is replaced by the binary font loaded by the\napplication. The linked-in Font2 is hereafter not used by TouchGFX."),(0,a.kt)("p",null,"Note that nothing changed in the text tables. These still refer to the\nsame fonts (F1 and F2) by index."),(0,a.kt)("h3",r({},{id:"configuring-the-font-converter-to-generate-binary-fonts"}),"Configuring the Font converter to generate Binary Fonts"),(0,a.kt)("p",null,'The font converter must be configured to generate binary fonts. This is\neasily done in TouchGFX Designer.\nGo to the Config tab, select "Text Configuration", and click "Binary\nfont files":'),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.webp",mdxType:"Figure"},"Selecting Binary Fonts"),(0,a.kt)("p",null,"When you regenerate the code, TouchGFX will generate binary fonts in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin/")," folder, and empty fonts in the normal files\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/"),"."),(0,a.kt)("p",null,"The generated code will configure TouchGFX to use the empty font. The\napplication is required to install the binary font at runtime."),(0,a.kt)("h3",r({},{id:"manual-configuration"}),"Manual Configuration"),(0,a.kt)("p",null,'If you are not using TouchGFX Designer you can still generate binary\nfonts. Change the option "binary_fonts" to "yes" in the\ntext_configuration section in the ',(0,a.kt)("em",{parentName:"p"},"application.config")," file in your\nproject."),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),(0,a.kt)("p",null,"When you generate assets the next time, the binary fonts will be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin")," folder."),(0,a.kt)("h3",r({},{id:"installing-the-binary-font"}),"Installing the binary font"),(0,a.kt)("p",null,"Before TouchGFX can use a binary font the font data must be made\navailable in addressable memory like RAM or QSPI flash (where it can\nbe directly accessed through a pointer). Typically this involves copying the\ndata from a file or block storage like emmc flash. This can also\nhappen during production where the binary font is flashed to a\npredefined address in a memory-mapped flash."),(0,a.kt)("p",null,"When the application has loaded the binary font to memory (if not\navailable already), the application must create and install a\n",(0,a.kt)("inlineCode",{parentName:"p"},"BinaryFont")," object referring the data in TouchGFX. After this,\nTouchGFX will use that font and not the compiled in font."),(0,a.kt)("p",null,"The binary font needs to be installed before it is used to draw the\ntext that refers to the font, but it does not need to be installed\nimmediately after booting. The\n",(0,a.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap&\nheap)")," constructor in ",(0,a.kt)("inlineCode",{parentName:"p"},"FrontApplication.cpp")," can be used to\ninstall fonts. This constructor is executed once before anything is\ndrawn."),(0,a.kt)("p",null,"Fonts can also be installed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," methods. This is\nuseful if you have a font that is only used in a specific screen. The\nfont can then be un-installed in ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDownScreen()")),(0,a.kt)("p",null,"Here is an example of loading a binary font from a file-system to internal RAM:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),(0,a.kt)("p",null,"The exact code for opening a file and reading data will depend on your\nfile system and operating system.\nThe basic steps are to make the font data available in memory,\ninitialize a BinaryFont object with a pointer to the data, and finally\npass the BinaryFont object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TypedTextDatabase")," of TouchGFX."),(0,a.kt)("p",null,"After the call to ",(0,a.kt)("em",{parentName:"p"},"setFont")," TouchGFX will use the binary font to draw\ntext on the screen instead of the compiled in font (DEFAULT)."),(0,a.kt)("h3",r({},{id:"resetting-a-font"}),"Resetting a font"),(0,a.kt)("p",null,"Sometimes you want to go back to the original font compiled into\nyour application after using a binary font.\nFor example if you are changing language, and want to use the default\nfont. The ",(0,a.kt)("inlineCode",{parentName:"p"},"resetFont()")," function in TypedTextDatabase will reset the\nfont pointer to the built-in font:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),(0,a.kt)("p",null,"After this call, the application can reuse the memory occupied by the\nbinary font to allocate a new font or for other purposes."),(0,a.kt)("h2",r({},{id:"generating-binary-fonts-in-another-project"}),"Generating binary fonts in another project"),(0,a.kt)("p",null,"In some cases you want to have both normal fonts and binary fonts in a\nproject. For example you want to have English letters in a normal\ncompiled-in font, but Chinese and Japanese characters in binary fonts\nfor optional inclusion in the device. This setup is not configurable\nin TouchGFX Designer."),(0,a.kt)("p",null,"In this case it is advised to create two TouchGFX projects. In the\nfirst project (your normal application) you have all your application\ncode and UI with normal fonts. In the second project you have only\nenough texts (or wildcard characters) to generate the binary fonts."),(0,a.kt)("p",null,'In the first project, you deselect "Binary font files". In the second\nproject you select "Binary font files".'),(0,a.kt)("p",null,"When you generate code in the second TouchGFX project the binary fonts\nare generated. The binary fonts can then be copied to the first\nproject (in a folder of your convenience), and be used in the code as\nshown above."))}g.isMDXComponent=!0}}]);